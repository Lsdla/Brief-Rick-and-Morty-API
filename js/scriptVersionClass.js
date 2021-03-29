// fichier episode réalisé avec des classes:

const { doc } = require("prettier");
const {API} = require("./config");

class Episode{
    episodes = [];
    saisonsFilter = ["S01", "S02", "S03", "S04"];
    constructor(){
       this.fetchData(API.episodeLink + "/" + Array.from({length: 41}, (v,k) => k+1))
       .then(episodes => {  
           this.episodes = episodes;
           this.createSectionEpisodes();
           this.addEventInput();
        })
        
    }
    
    createCharacters(characters){
        let str = `<div id="myNav" class="overlay">
                        <a class="closebtn">&times;</a>
                        <div class="overlay-content">`;
                        characters.forEach(character => {
                            str += `
                            <div class="card">
                                <img src="${character.image}" alt="Avatar">
                                <div class="container">
                                <p class="character_name">Character Name : ${character.name}</p>
                                <p class="genre">${character.gender}</p>
                                <p class="specie">${character.species}</p>
                                </div>
                            </div>`
                        });
                str +=  `</div>
                    </div>`;
        return str; 
    }

    addEventInput(){
        let radios = document.querySelectorAll(".radios input");
        radios.forEach(radio => {
            radio.addEventListener("change", (event) => {
                let app_lists = document.querySelector(".app_lists");
                app_lists.innerHTML = ``; // pour vider l'élément HTML.
                let number_saison = parseInt(event.target.value.replace(/\D/g, '')); // /\D/g avec ce regex on cherche tt ce qui n'est pas un nombre pour le remplacer avec une chaine de caractères vide.
                // console.log(number_saison);
                if (event.target.value != "all") {
                    let episodes = this.episodes.filter(episode => episode.episode.indexOf(event.target.value) > -1);
                    app_lists.appendChild(
                        this.createHeader(episodes, number_saison)
                    )
                }else{
                    this.createSectionEpisodes();
                }
            })
        });
    }

    createSectionEpisodes(){
        let app_lists = document.querySelector(".app_lists");
        this.saisonsFilter.forEach((saisonFilter, i) => {
            let episodes = this.episodes.filter(episode => episode.episode.indexOf(saisonFilter) > -1); // filtre les episodes et les classe par saison
            app_lists.appendChild(
                this.createHeader(episodes, i + 1)
            )
        });
    }

    // la créationdans function dans une classe devient une méthode et ne porte pas le nom function, et son appelle se fait avec le "this"
    fetchData(uri) {
        return fetch(uri)
        .then(res => res.json())
    }

    // fonction qui crée des episodes par saisons
    createEpisodes(episodes){
        let ul = document.createElement("ul");
        ul.className = "ul_lists";
        episodes.forEach(episode => {
            let li = document.createElement("li");
            li.innerHTML += `
                <div class="card">
                    <fieldset>
                        <legend><h2 class="text_head" data-url="${episode.url}">Episode ${episode.id}: <br /> ${episode.name}</h2></legend>
                        <p class="text">${episode.episode}</p>
                        <p class="text">Date de Création: ${episode.air_date}</p>
                        <p class="text">Nombre de personnages: ${episode.characters.length}</p>
                    </fieldset>
                </div>
            `;
            li.querySelector("h2").addEventListener("click", this.showCharacters.bind(this)); // comme on est dans l'addEventListener le "this" renvoie normalement l'élément cliqué et avec le "bind" il renvoie le "this" de la classe et on aura ainsi accès aux attributs de la class. "Merci Denis"
            ul.appendChild(li);
        });
        return ul;
    }

    closeNav(){
        let closeNav = document.querySelector(".closebtn");
        closeNav.addEventListener("click", function(event){
            document.getElementById("myNav").style.width = "0%";
        })
    }

    showCharacters(event){
        this.fetchData(event.target.dataset.url)
        .then(episode => {
            Promise.all(episode.characters.map(uri => fetch(uri)))
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(characters => {
                console.log(characters);
                let nav = document.querySelector(".nav");
                nav.innerHTML = this.createCharacters(characters);
                document.getElementById("myNav").style.width = "100%";
                this.closeNav();
            })
        })
    }

    createHeader(episodes, i){
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.className = "saison_section";
        h2.textContent = "saison: " + i;
        div.appendChild(h2);
        div.appendChild(this.createEpisodes(episodes));
        return div;
    }
}

new Episode(); 
