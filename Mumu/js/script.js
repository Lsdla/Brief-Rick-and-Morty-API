


// function fetchData(uri){ 
//   fetch(uri)
//     .then(resp=>resp.json())
//     .then(data => {
//       console.log(data);
//       uri = data.info['next'];
//       // Check next API url is empty or not, if not empty call the above function 
//       if(uri != '' && uri != null){
//           fetchData(uri);
//       }
//   })
// }



// .then(data => {
//       console.log("avant",uri);
//       uri = data.info['next'];
//       console.log("apres",uri);
//       // Check next API url is empty or not, if not empty call the above function 
//       if(uri != '' && uri != null){
//           fetchData(uri);
//       }
//   })

let containerTop = document.querySelector('.top');

function fetchData(uri) {
  return fetch(uri)
    .then(function (resp) {
      return resp.json()
    })
  // .then(function(data){
  // }).catch(function(error) {
  //   console.error(error);
  // })
}



class Locations {
  locations = [];
  constructor(uri) {
    fetchData(uri).then((datas) => {
      this.locations = datas.results;
      this.createLocations();
      this.addEventTitle();
    }).catch(function (error) {
      console.log(error);
    });
  }

  createLocation(location) {
    let locationCard = document.createElement("div");
    locationCard.setAttribute("class", "lieux-card");
    locationCard.innerHTML = 
          ` <div class="lieux-card_info">
                <img src="image/rick-and-morty-space-wallpaper-preview.jpeg" alt="" class="image">
                <a class="location-name" data-url="${location.url}">Name : ${location.name}</a>
                <p>Type : ${location.type}</p>
                <p>Dimension : ${location.dimension}</p>
            </div>`;
    return locationCard;
  }

  createLocations() {
    let locations = document.querySelector(".lieux");
    this.locations.forEach(location => {
      // console.log(location);
      locations.appendChild(
        this.createLocation(location)
      );
    });
    this.addEventTitle();
  };

  
  addEventTitle() {
    let eventTitles = document.querySelectorAll(".location-name");

    eventTitles.forEach(location => {
      location.addEventListener("click", this.showDetails.bind(this))
    })
  }

  showDetails(event) {
    let self = this;
    fetch(event.target.dataset.url)
      .then(function (resp) {
        return resp.json()
      }).then(function (locations) {
        Promise.all(locations.residents.map(url => fetchData(url)))
          .then(resp => Promise.all(resp.map(res => res)))
          .then(residents => {
            let modalResident = document.querySelector(".modal-resident")
            modalResident.innerHTML = self.createResident(residents);
            let modal = document.getElementById("myModal")
            modal.style.display = "block";
            let closeButton = document.querySelector(".close")
            closeButton.addEventListener("click", ()=>{
            modal.style.display = "none";
            })
          });
      }).catch(function (error) {
        console.error(error);
      })
    }
  
    showPlanets(e) {
      let lieux = document.querySelector(".lieux")
      lieux.innerHTML = "";
      let type = e.target.value;
      let url = "https://rickandmortyapi.com/api/location?type=" + type;
      fetch(url)
        .then(function (resp) {
          return resp.json()
        }).then(function (location) {
          let planets = location.results;
          let str =
            planets.forEach(planet => {
              lieux.innerHTML +=
                `<div class="lieux-card">
                <div class="lieux-card_info">
                <img src="image/rick-and-morty-space-wallpaper-preview.jpeg" alt="" class="image">
                    <a class="location-name" data-url="">Name : ${planet.name}</a>
                    <p>Type : ${planet.type}</p>
                    <p>Dimension : ${planet.dimension}</p>
                </div>
            </div>`
            })
            return str;
        }).catch(function (error) {
          console.error(error);
        })
    }

  createResident(residents) {
    let str = `<div id="myModal" class="modal">
                <span class="close">&times;</span>
                      <!-- Modal content -->
                  <div class="modal-content">`;
    residents.forEach(resident => {
      str += `<div class="modal-container">
                            <div class="lieux-card_image">
                                <img src="${resident.image}" alt="image" class="img-resident">
                            </div>
                            <div class="lieux-card_info">
                                <a>Name : ${resident.name}</a>
                                <p>Status : ${resident.status}</p>
                                <p>Species : ${resident.species}</p>
                            </div>
                        </div>`})
    str += `</div>
          </div>`
    return str;
  }


  createInput(radioButton) {
    let input = document.createElement('input');
    input.setAttribute('type', "radio");
    input.setAttribute("id", radioButton);
    input.setAttribute('value', radioButton);
    input.setAttribute("name", "typeLocation");
    input.addEventListener("click", this.showPlanets.bind(this));
    return input
  }

  createLabel(radioButton) {
    let label = document.createElement('label');
    label.setAttribute('class', 'type-label')
    label.textContent = radioButton;
    label.appendChild(this.createInput(radioButton));
    return label
  }

  pickAllPage() {

    // tableau pour récupérer les url de toutes les pages 
    let uriS = []

    // tableau dans lequel sera insérer les différents types de lieux
    let listTypes = [];

    //boucles sur les uri de tous les pages qu'on insère dans le tableau uriS
    for (let index = 0; index < 7; index++) {
      uriS.push("https://rickandmortyapi.com/api/location?page=" + index)
    }
    Promise.all(uriS.map(url => fetch(url)))
      .then(resp => Promise.all(resp.map(res => res.json())))
      .then(locations => {
        locations.forEach(location => {
          location.results.forEach(res => {
            listTypes.push(res.type);
          })
          // console.log(listTypes);
        })
        this.createListType(listTypes)
      })
  }
  
  createListType(listTypes) {
    let typeArray = [...new Set(listTypes)];
    typeArray.sort();
    for (let i = 0; i < typeArray.length; i++) {
      let radioButton = typeArray[i];
      containerTop.appendChild(
        this.createLabel(radioButton)
      );
    }
  }
}



let locations = new Locations("https://rickandmortyapi.com/api/location?page=1");
locations.pickAllPage();




// let icon = document.getElementById("icon")

// icon.addEventListener("click", function() {
//   let listDeroule = document.getElementById("deroule");

//   if (listDeroule.style.display == "none") {
//     listDeroule.style.display = "block";
//   } else {
//     listDeroule.style.display = "none";
//   }
// });





// function createListType() {
//     let typeArray = [...new Set(listTypes)];
//     for (let i = 0; i < typeArray.length; i++) {
//         let radioButton = typeArray[i];
//         containerLocation.appendChild(
//             createLabel(radioButton)
//         );
//     }
// }

// function createInput(radioButton) {
//     let input = document.createElement('input');
//     input.setAttribute('type', "radio");
//     input.setAttribute("id", radioButton);
//     input.setAttribute("value", radioButton);
//     input.setAttribute("name", "typeLocation");
//     input.addEventListener("change", showPlanets)
//     return input
// }

// function createLabel(radioButton) {
//     let label = document.createElement('label');
//     label.setAttribute('class', 'type__label')
//     label.textContent = radioButton;
//     label.appendChild(createInput(radioButton));
//     return label
// }

// function showPlanets(e) {
//     let url = "https://rickandmortyapi.com/api/location?page=1";
// }

// function showResidents(e) {
//     _fetchData(e.target.dataset.url)
//         .then((datas) => {
//             const { residents } = datas;

//             Promise.all(residents.map(url => fetch(url)))
//         .then(resp => Promise.all( resp.map(res => res.json())))
//         .then(results => {
//             //boite modale a créer 
//             })
//         })
// }

// function locations() {
//     let url = "https://rickandmortyapi.com/api/location?page=1";
//     _fetchData(url)
//         .then((locations) => {
//             const {results} = locations
//             createLocations(results);
//         })

// }

// locations();

// function createLocations(locations) {
//     let containerPlanets = document.querySelector('.container__planets');
//     console.log(locations);
//     locations.forEach(location => {
//         containerPlanets.innerHTML += createLocation(location);

//     });
//     eventClickTitle();
// }

// function eventClickTitle() {
//     let titles = document.querySelectorAll('.container__planets h2');
//     titles.forEach(title => {
//         title.addEventListener('click', showResidents)
//     })
// }

// function createLocation(location) {
//     return `<div class="planet">

//                 <h2 class="planet__name" data-url="${location.url}" >${location.name}</h2>

//                 <p class="planet__type">${location.type}</p>
//                 <p class="planet__dimension">${location.dimension}</p>
//             </div>`;
// }

