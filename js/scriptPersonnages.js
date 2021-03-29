// inserer les detais recuperer de l'api dans ma div 
const mainContainer = document.querySelector(".lesPersonnages");
function addNewCard(param) {
  let characterDetails = document.createElement("div");
  characterDetails.setAttribute("class", "character-details")
  for (let i = 0; i < param.length; i++) {
    characterDetails.innerHTML +=
      `<div class="card">
        <div class="card__text-container">
        <div class="card__text__name">
        
        <div class="characterNom"> 
        <h3>${param[i].name}</h3> <br>
        </div>
        
        <div class="openPersonnages hide"> <img src="${param[i].image}">
        <ul> 
        <li> <b>Type </b> </li>
        <span>${param[i].type}</span>
        <li> <b> Gender </b> </li>
        <span>${param[i].gender}</span> 
        <li> <b> Species </b> </li>
        <span>${param[i].species}</span>
        <li> <b> Status </b> </li>
        <span>${param[i].status}</span>
        <li> <b> Origine </b> </li>
        <span>${param[i].origin.name}</span>
        <li> <b> Dernier lieux  </b> </li>
        <span>${param[i].location.name}</span>
        <li> <b> épisodes </b> </li>
        
        </ul>
        </div>
        </div>
        </div>
        </div>`



  }
  return characterDetails

}

let episodeJoueHtml =document.querySelector(".episodeJoue")
function elementEpisode (episodeJoue,h3,){}
console.log(episodeJoueHtml)



//     .then( jsonResponse => {
//         console.log(jsonResponse);
// })

let linksPage = [];

for (let j = 0; j < 34; j++) {
  linksPage.push("https://rickandmortyapi.com/api/character?page=" + [j + 1]);
}

  Promise.all(linksPage.map(uri => fetch(uri)))
  .then(res1 => Promise.all(res1.map(res2 => res2.json())))
  // .then(function(responseAPI) {
    //   console.log(`Juste après réception de ma réponse : `, responseAPI);
    //   // console.log(`Je traduis ma réponse :`, responseAPI.json());
    //   return responseAPI.json(); // Ici je retourne l'objet reponse formater en JSON
    // })
    .then(function (infoPersonnages) {
      // console.log(infoPersonnages[j].results)
      
      for (const perso of infoPersonnages) {
        mainContainer.appendChild(addNewCard(perso.results))
      }      
      
      let openPersonnages = document.getElementsByClassName("openPersonnages")
      
      let characterNom = document.getElementsByTagName("h3")
      console.log('perso ', characterNom);
      
      for (let i = 0; i < 670; i++) {
        characterNom[i].addEventListener('click', event => {
          console.log('perso', event);
          //event.preventDefault()
          // console.log(characterNom[index])
          openPersonnages[i].classList.toggle("show")
        })
        console.log("Bonjour");
        
     }
      
    })
    .catch(function (error) {
      console.error(error);
    });
  

  // console.log(charactersInfos)
  // console.log(openPersonnages)
  // console.log(personnagesDiv)
  // console.log(characterNom)

function triCharacter(jsonResponse){ 

  let Human = jsonResponse.filter(x => x.species.indexOf("Human") > -1);
  let Alien = jsonResponse.filter(x => x.species.indexOf("Alien") > -1);
  let Disease = jsonResponse.filter(x => x.species.indexOf("Disease") > -1);
  let Robot = jsonResponse.filter(x => x.species.indexOf("Robot") > -1);
  let Animal = jsonResponse.filter(x => x.species.indexOf("Animal") > -1);
  let Humanoid = jsonResponse.filter(x => x.species.indexOf("Humanoid") > -1);
  let Unknown= jsonResponse.filter(x => x.species.indexOf("Unknown") > -1);
  let Poopybutthole= jsonResponse.filter(x => x.species.indexOf("Poopy") > -1);
  let Mythologie= jsonResponse.filter(x => x.species.indexOf("Myth") > -1);
  let Cronenberg = jsonResponse.filter(x => x.species.indexOf("Cronen") > -1);

  let speciesCharacter = [Human,Alien,Disease,Robot,Animal,Humanoid,Unknown,Poopybutthole,Mythologie,Cronenberg]

  let speciesElements = document.querySelector(".radios")

  speciesCharacter.forEach(specieCharacter)
}