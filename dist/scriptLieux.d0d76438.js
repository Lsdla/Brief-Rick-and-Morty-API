// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/scriptLieux.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var containerTop = document.querySelector('.top');

function fetchData(uri) {
  return fetch(uri).then(function (resp) {
    return resp.json();
  }); // .then(function(data){
  // }).catch(function(error) {
  //   console.error(error);
  // })
}

var Locations = /*#__PURE__*/function () {
  function Locations(uri) {
    var _this = this;

    _classCallCheck(this, Locations);

    _defineProperty(this, "locations", []);

    fetchData(uri).then(function (datas) {
      _this.locations = datas.results;

      _this.createLocations();

      _this.addEventTitle();
    }).catch(function (error) {
      console.log(error);
    });
  }

  _createClass(Locations, [{
    key: "createLocation",
    value: function createLocation(location) {
      var locationCard = document.createElement("div");
      locationCard.setAttribute("class", "lieux-card");
      locationCard.innerHTML = " <div class=\"lieux-card_info\">\n                <img src=\"../images/rick-and-morty-space-wallpaper-preview.jpeg\" alt=\"\" class=\"image\">\n                <a class=\"location-name\" data-url=\"".concat(location.url, "\">Name : ").concat(location.name, "</a>\n                <p>Type : ").concat(location.type, "</p>\n                <p>Dimension : ").concat(location.dimension, "</p>\n            </div>");
      return locationCard;
    }
  }, {
    key: "createLocations",
    value: function createLocations() {
      var _this2 = this;

      var locations = document.querySelector(".lieux");
      this.locations.forEach(function (location) {
        // console.log(location);
        locations.appendChild(_this2.createLocation(location));
      });
      this.addEventTitle();
    }
  }, {
    key: "addEventTitle",
    value: function addEventTitle() {
      var _this3 = this;

      var eventTitles = document.querySelectorAll(".location-name");
      eventTitles.forEach(function (location) {
        location.addEventListener("click", _this3.showDetails.bind(_this3));
      });
    }
  }, {
    key: "showDetails",
    value: function showDetails(event) {
      var self = this;
      fetch(event.target.dataset.url).then(function (resp) {
        return resp.json();
      }).then(function (locations) {
        Promise.all(locations.residents.map(function (url) {
          return fetchData(url);
        })).then(function (resp) {
          return Promise.all(resp.map(function (res) {
            return res;
          }));
        }).then(function (residents) {
          var modalResident = document.querySelector(".modal-resident");
          modalResident.innerHTML = self.createResident(residents);
          var modal = document.getElementById("myModal");
          modal.style.display = "block";
          var closeButton = document.querySelector(".close");
          closeButton.addEventListener("click", function () {
            modal.style.display = "none";
          });
        });
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, {
    key: "showPlanets",
    value: function showPlanets(e) {
      var lieux = document.querySelector(".lieux");
      lieux.innerHTML = "";
      var type = e.target.value;
      var url = "https://rickandmortyapi.com/api/location?type=" + type;
      fetch(url).then(function (resp) {
        return resp.json();
      }).then(function (location) {
        var planets = location.results;
        var str = planets.forEach(function (planet) {
          lieux.innerHTML += "<div class=\"lieux-card\">\n                <div class=\"lieux-card_info\">\n                <img src=\"../images/rick-and-morty-space-wallpaper-preview.jpeg\" alt=\"\" class=\"image\">\n                    <a class=\"location-name\" data-url=\"\">Name : ".concat(planet.name, "</a>\n                    <p>Type : ").concat(planet.type, "</p>\n                    <p>Dimension : ").concat(planet.dimension, "</p>\n                </div>\n            </div>");
        });
        return str;
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, {
    key: "createResident",
    value: function createResident(residents) {
      var str = "<div id=\"myModal\" class=\"modal\">\n                <span class=\"close\">&times;</span>\n                      <!-- Modal content -->\n                  <div class=\"modal-content\">";
      residents.forEach(function (resident) {
        str += "<div class=\"modal-container\">\n                            <div class=\"lieux-card_image\">\n                                <img src=\"".concat(resident.image, "\" alt=\"image\" class=\"img-resident\">\n                            </div>\n                            <div class=\"lieux-card_info\">\n                                <a>Name : ").concat(resident.name, "</a>\n                                <p>Status : ").concat(resident.status, "</p>\n                                <p>Species : ").concat(resident.species, "</p>\n                            </div>\n                        </div>");
      });
      str += "</div>\n          </div>";
      return str;
    }
  }, {
    key: "createInput",
    value: function createInput(radioButton) {
      var input = document.createElement('input');
      input.setAttribute('type', "radio");
      input.setAttribute("id", radioButton);
      input.setAttribute('value', radioButton);
      input.setAttribute("name", "typeLocation");
      input.addEventListener("click", this.showPlanets.bind(this));
      return input;
    }
  }, {
    key: "createLabel",
    value: function createLabel(radioButton) {
      var label = document.createElement('label');
      label.setAttribute('class', 'type-label');
      label.textContent = radioButton;
      label.appendChild(this.createInput(radioButton));
      return label;
    }
  }, {
    key: "pickAllPage",
    value: function pickAllPage() {
      var _this4 = this;

      // tableau pour récupérer les url de toutes les pages 
      var uriS = []; // tableau dans lequel sera insérer les différents types de lieux

      var listTypes = []; //boucles sur les uri de tous les pages qu'on insère dans le tableau uriS

      for (var index = 0; index < 7; index++) {
        uriS.push("https://rickandmortyapi.com/api/location?page=" + index);
      }

      Promise.all(uriS.map(function (url) {
        return fetch(url);
      })).then(function (resp) {
        return Promise.all(resp.map(function (res) {
          return res.json();
        }));
      }).then(function (locations) {
        locations.forEach(function (location) {
          location.results.forEach(function (res) {
            listTypes.push(res.type);
          }); // console.log(listTypes);
        });

        _this4.createListType(listTypes);
      });
    }
  }, {
    key: "createListType",
    value: function createListType(listTypes) {
      var typeArray = _toConsumableArray(new Set(listTypes));

      typeArray.sort();

      for (var i = 0; i < typeArray.length; i++) {
        var radioButton = typeArray[i];
        containerTop.appendChild(this.createLabel(radioButton));
      }
    }
  }]);

  return Locations;
}();

var locations = new Locations("https://rickandmortyapi.com/api/location?page=1");
locations.pickAllPage(); // let icon = document.getElementById("icon")
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
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59618" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/scriptLieux.js"], null)
//# sourceMappingURL=/scriptLieux.d0d76438.js.map