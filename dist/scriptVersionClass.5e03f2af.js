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
})({"node_modules/prettier/standalone.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e152) { throw _e152; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e153) { didErr = true; err = _e153; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).prettier = t();
}(this, function () {
  "use strict";

  function e(e, t) {
    if (null == e) return {};
    var n,
        r,
        o = {},
        u = Object.keys(e);

    for (r = 0; r < u.length; r++) {
      n = u[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    }

    return o;
  }

  function t(e, t) {
    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
      raw: {
        value: Object.freeze(t)
      }
    }));
  }

  var n = {
    name: "prettier",
    version: "2.2.1",
    description: "Prettier is an opinionated code formatter",
    bin: "./bin/prettier.js",
    repository: "prettier/prettier",
    homepage: "https://prettier.io",
    author: "James Long",
    license: "MIT",
    main: "./index.js",
    browser: "./standalone.js",
    unpkg: "./standalone.js",
    engines: {
      node: ">=10.13.0"
    },
    files: ["index.js", "standalone.js", "src", "bin"],
    dependencies: {
      "@angular/compiler": "10.2.3",
      "@babel/code-frame": "7.10.4",
      "@babel/parser": "7.12.5",
      "@glimmer/syntax": "0.66.0",
      "@iarna/toml": "2.2.5",
      "@typescript-eslint/typescript-estree": "4.8.1",
      "angular-estree-parser": "2.2.1",
      "angular-html-parser": "1.7.1",
      camelcase: "6.2.0",
      chalk: "4.1.0",
      "ci-info": "watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540",
      "cjk-regex": "2.0.0",
      cosmiconfig: "7.0.0",
      dashify: "2.0.0",
      diff: "5.0.0",
      editorconfig: "0.15.3",
      "editorconfig-to-prettier": "0.2.0",
      "escape-string-regexp": "4.0.0",
      espree: "7.3.0",
      esutils: "2.0.3",
      "fast-glob": "3.2.4",
      "fast-json-stable-stringify": "2.1.0",
      "find-parent-dir": "0.3.0",
      "flow-parser": "0.138.0",
      "get-stdin": "8.0.0",
      globby: "11.0.1",
      graphql: "15.4.0",
      "html-element-attributes": "2.3.0",
      "html-styles": "1.0.0",
      "html-tag-names": "1.1.5",
      "html-void-elements": "1.0.5",
      ignore: "4.0.6",
      "jest-docblock": "26.0.0",
      json5: "2.1.3",
      leven: "3.1.0",
      "lines-and-columns": "1.1.6",
      "linguist-languages": "7.12.1",
      lodash: "4.17.20",
      mem: "8.0.0",
      meriyah: "3.1.6",
      minimatch: "3.0.4",
      minimist: "1.2.5",
      "n-readlines": "1.0.1",
      outdent: "0.7.1",
      "parse-srcset": "ikatyang/parse-srcset#54eb9c1cb21db5c62b4d0e275d7249516df6f0ee",
      "please-upgrade-node": "3.2.0",
      "postcss-less": "3.1.4",
      "postcss-media-query-parser": "0.2.3",
      "postcss-scss": "2.1.1",
      "postcss-selector-parser": "2.2.3",
      "postcss-values-parser": "2.0.1",
      "regexp-util": "1.2.2",
      "remark-footnotes": "2.0.0",
      "remark-math": "3.0.1",
      "remark-parse": "8.0.3",
      resolve: "1.19.0",
      semver: "7.3.2",
      "string-width": "4.2.0",
      typescript: "4.1.2",
      "unicode-regex": "3.0.0",
      unified: "9.2.0",
      vnopts: "1.0.2",
      "yaml-unist-parser": "1.3.1"
    },
    devDependencies: {
      "@babel/core": "7.12.3",
      "@babel/preset-env": "7.12.1",
      "@babel/types": "7.12.6",
      "@glimmer/reference": "0.66.0",
      "@rollup/plugin-alias": "3.1.1",
      "@rollup/plugin-babel": "5.2.1",
      "@rollup/plugin-commonjs": "16.0.0",
      "@rollup/plugin-json": "4.1.0",
      "@rollup/plugin-node-resolve": "10.0.0",
      "@rollup/plugin-replace": "2.3.4",
      "@types/estree": "0.0.45",
      "@types/node": "14.14.0",
      "@typescript-eslint/types": "4.8.1",
      "babel-jest": "26.6.3",
      "babel-loader": "8.2.1",
      benchmark: "2.1.4",
      "builtin-modules": "3.1.0",
      "cross-env": "7.0.2",
      cspell: "4.2.2",
      eslint: "7.13.0",
      "eslint-config-prettier": "6.15.0",
      "eslint-formatter-friendly": "7.0.0",
      "eslint-plugin-import": "2.22.1",
      "eslint-plugin-jest": "24.1.3",
      "eslint-plugin-prettier-internal-rules": "file:scripts/tools/eslint-plugin-prettier-internal-rules",
      "eslint-plugin-react": "7.21.5",
      "eslint-plugin-unicorn": "23.0.0",
      execa: "4.1.0",
      jest: "26.6.3",
      "jest-snapshot-serializer-ansi": "1.0.0",
      "jest-snapshot-serializer-raw": "1.1.0",
      "jest-watch-typeahead": "0.6.1",
      "npm-run-all": "4.1.5",
      "path-browserify": "1.0.1",
      prettier: "2.2.0",
      rimraf: "3.0.2",
      rollup: "2.33.3",
      "rollup-plugin-node-globals": "1.4.0",
      "rollup-plugin-terser": "7.0.2",
      shelljs: "0.8.4",
      "snapshot-diff": "0.8.1",
      "strip-ansi": "6.0.0",
      "synchronous-promise": "2.0.15",
      tempy: "1.0.0",
      "terser-webpack-plugin": "5.0.3",
      webpack: "5.5.1"
    },
    scripts: {
      prepublishOnly: 'echo "Error: must publish from dist/" && exit 1',
      "prepare-release": "yarn && yarn build && yarn test:dist",
      test: "jest",
      "test:dev-package": "cross-env INSTALL_PACKAGE=1 jest",
      "test:dist": "cross-env NODE_ENV=production jest",
      "test:dist-standalone": "cross-env NODE_ENV=production TEST_STANDALONE=1 jest",
      "test:integration": "jest tests_integration",
      "perf:repeat": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",
      "perf:repeat-inspect": "yarn && yarn build && cross-env NODE_ENV=production node --inspect-brk ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",
      "perf:benchmark": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-benchmark --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",
      lint: "run-p lint:*",
      "lint:typecheck": "tsc",
      "lint:eslint": "cross-env EFF_NO_LINK_RULES=true eslint . --format friendly",
      "lint:changelog": "node ./scripts/lint-changelog.js",
      "lint:prettier": 'prettier . "!test*" --check',
      "lint:dist": 'eslint --no-eslintrc --no-ignore --env=es6,browser --parser-options=ecmaVersion:2018 "dist/!(bin-prettier|index|third-party).js"',
      "lint:spellcheck": 'cspell "**/*" ".github/**/*"',
      "lint:deps": "node ./scripts/check-deps.js",
      fix: "run-s fix:eslint fix:prettier",
      "fix:eslint": "yarn lint:eslint --fix",
      "fix:prettier": "yarn lint:prettier --write",
      build: "node --max-old-space-size=3072 ./scripts/build/build.js",
      "build-docs": "node ./scripts/build-docs.js"
    }
  };

  function r() {}

  function o(e, t, n, r, o) {
    for (var u = 0, i = t.length, a = 0, s = 0; u < i; u++) {
      var c = t[u];

      if (c.removed) {
        if (c.value = e.join(r.slice(s, s + c.count)), s += c.count, u && t[u - 1].added) {
          var l = t[u - 1];
          t[u - 1] = t[u], t[u] = l;
        }
      } else {
        if (!c.added && o) {
          var p = n.slice(a, a + c.count);
          p = p.map(function (e, t) {
            var n = r[s + t];
            return n.length > e.length ? n : e;
          }), c.value = e.join(p);
        } else c.value = e.join(n.slice(a, a + c.count));

        a += c.count, c.added || (s += c.count);
      }
    }

    var d = t[i - 1];
    return i > 1 && "string" == typeof d.value && (d.added || d.removed) && e.equals("", d.value) && (t[i - 2].value += d.value, t.pop()), t;
  }

  function u(e) {
    return {
      newPos: e.newPos,
      components: e.components.slice(0)
    };
  }

  r.prototype = {
    diff: function diff(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.callback;
      "function" == typeof n && (r = n, n = {}), this.options = n;
      var i = this;

      function a(e) {
        return r ? (setTimeout(function () {
          r(void 0, e);
        }, 0), !0) : e;
      }

      e = this.castInput(e), t = this.castInput(t), e = this.removeEmpty(this.tokenize(e));
      var s = (t = this.removeEmpty(this.tokenize(t))).length,
          c = e.length,
          l = 1,
          p = s + c,
          d = [{
        newPos: -1,
        components: []
      }],
          f = this.extractCommon(d[0], t, e, 0);
      if (d[0].newPos + 1 >= s && f + 1 >= c) return a([{
        value: this.join(t),
        count: t.length
      }]);

      function h() {
        for (var n = -1 * l; n <= l; n += 2) {
          var r = void 0,
              p = d[n - 1],
              f = d[n + 1],
              h = (f ? f.newPos : 0) - n;
          p && (d[n - 1] = void 0);
          var m = p && p.newPos + 1 < s,
              g = f && 0 <= h && h < c;

          if (m || g) {
            if (!m || g && p.newPos < f.newPos ? (r = u(f), i.pushComponent(r.components, void 0, !0)) : ((r = p).newPos++, i.pushComponent(r.components, !0, void 0)), h = i.extractCommon(r, t, e, n), r.newPos + 1 >= s && h + 1 >= c) return a(o(i, r.components, t, e, i.useLongestToken));
            d[n] = r;
          } else d[n] = void 0;
        }

        l++;
      }

      if (r) !function e() {
        setTimeout(function () {
          if (l > p) return r();
          h() || e();
        }, 0);
      }();else for (; l <= p;) {
        var m = h();
        if (m) return m;
      }
    },
    pushComponent: function pushComponent(e, t, n) {
      var r = e[e.length - 1];
      r && r.added === t && r.removed === n ? e[e.length - 1] = {
        count: r.count + 1,
        added: t,
        removed: n
      } : e.push({
        count: 1,
        added: t,
        removed: n
      });
    },
    extractCommon: function extractCommon(e, t, n, r) {
      for (var o = t.length, u = n.length, i = e.newPos, a = i - r, s = 0; i + 1 < o && a + 1 < u && this.equals(t[i + 1], n[a + 1]);) {
        i++, a++, s++;
      }

      return s && e.components.push({
        count: s
      }), e.newPos = i, a;
    },
    equals: function equals(e, t) {
      return this.options.comparator ? this.options.comparator(e, t) : e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase();
    },
    removeEmpty: function removeEmpty(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        e[n] && t.push(e[n]);
      }

      return t;
    },
    castInput: function castInput(e) {
      return e;
    },
    tokenize: function tokenize(e) {
      return e.split("");
    },
    join: function join(e) {
      return e.join("");
    }
  };
  var i = new r();

  function a(e, t) {
    if ("function" == typeof e) t.callback = e;else if (e) for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }
    return t;
  }

  var s = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
      c = /\S/,
      l = new r();
  l.equals = function (e, t) {
    return this.options.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || this.options.ignoreWhitespace && !c.test(e) && !c.test(t);
  }, l.tokenize = function (e) {
    for (var t = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), n = 0; n < t.length - 1; n++) {
      !t[n + 1] && t[n + 2] && s.test(t[n]) && s.test(t[n + 2]) && (t[n] += t[n + 2], t.splice(n + 1, 2), n--);
    }

    return t;
  };
  var p = new r();

  function d(e, t, n) {
    return p.diff(e, t, n);
  }

  p.tokenize = function (e) {
    var t = [],
        n = e.split(/(\n|\r\n)/);
    n[n.length - 1] || n.pop();

    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      r % 2 && !this.options.newlineIsToken ? t[t.length - 1] += o : (this.options.ignoreWhitespace && (o = o.trim()), t.push(o));
    }

    return t;
  };

  var f = new r();

  f.tokenize = function (e) {
    return e.split(/(\S.+?[.!?])(?=\s+|$)/);
  };

  var h = new r();

  function m(e) {
    return (m = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }

  function g(e) {
    return function (e) {
      if (Array.isArray(e)) return D(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
    }(e) || function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return D(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t);
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function D(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var n = 0, r = new Array(t); n < t; n++) {
      r[n] = e[n];
    }

    return r;
  }

  h.tokenize = function (e) {
    return e.split(/([{}:;,]|\s+)/);
  };

  var y = Object.prototype.toString,
      E = new r();

  function C(e, t, n, r, o) {
    var u, i;

    for (t = t || [], n = n || [], r && (e = r(o, e)), u = 0; u < t.length; u += 1) {
      if (t[u] === e) return n[u];
    }

    if ("[object Array]" === y.call(e)) {
      for (t.push(e), i = new Array(e.length), n.push(i), u = 0; u < e.length; u += 1) {
        i[u] = C(e[u], t, n, r, o);
      }

      return t.pop(), n.pop(), i;
    }

    if (e && e.toJSON && (e = e.toJSON()), "object" === m(e) && null !== e) {
      t.push(e), i = {}, n.push(i);
      var a,
          s = [];

      for (a in e) {
        e.hasOwnProperty(a) && s.push(a);
      }

      for (s.sort(), u = 0; u < s.length; u += 1) {
        i[a = s[u]] = C(e[a], t, n, r, a);
      }

      t.pop(), n.pop();
    } else i = e;

    return i;
  }

  E.useLongestToken = !0, E.tokenize = p.tokenize, E.castInput = function (e) {
    var t = this.options,
        n = t.undefinedReplacement,
        r = t.stringifyReplacer,
        o = void 0 === r ? function (e, t) {
      return void 0 === t ? n : t;
    } : r;
    return "string" == typeof e ? e : JSON.stringify(C(e, null, null, o), o, "  ");
  }, E.equals = function (e, t) {
    return r.prototype.equals.call(E, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"));
  };
  var b = new r();

  function v(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e.split(/\r\n|[\n\v\f\r\x85]/),
        r = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        o = [],
        u = 0;

    function i() {
      var e = {};

      for (o.push(e); u < n.length;) {
        var r = n[u];
        if (/^(\-\-\-|\+\+\+|@@)\s/.test(r)) break;
        var i = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r);
        i && (e.index = i[1]), u++;
      }

      for (a(e), a(e), e.hunks = []; u < n.length;) {
        var c = n[u];
        if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(c)) break;
        if (/^@@/.test(c)) e.hunks.push(s());else {
          if (c && t.strict) throw new Error("Unknown line " + (u + 1) + " " + JSON.stringify(c));
          u++;
        }
      }
    }

    function a(e) {
      var t = /^(---|\+\+\+)\s+(.*)$/.exec(n[u]);

      if (t) {
        var r = "---" === t[1] ? "old" : "new",
            o = t[2].split("\t", 2),
            i = o[0].replace(/\\\\/g, "\\");
        /^".*"$/.test(i) && (i = i.substr(1, i.length - 2)), e[r + "FileName"] = i, e[r + "Header"] = (o[1] || "").trim(), u++;
      }
    }

    function s() {
      var e = u,
          o = n[u++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),
          i = {
        oldStart: +o[1],
        oldLines: void 0 === o[2] ? 1 : +o[2],
        newStart: +o[3],
        newLines: void 0 === o[4] ? 1 : +o[4],
        lines: [],
        linedelimiters: []
      };
      0 === i.oldLines && (i.oldStart += 1), 0 === i.newLines && (i.newStart += 1);

      for (var a = 0, s = 0; u < n.length && !(0 === n[u].indexOf("--- ") && u + 2 < n.length && 0 === n[u + 1].indexOf("+++ ") && 0 === n[u + 2].indexOf("@@")); u++) {
        var c = 0 == n[u].length && u != n.length - 1 ? " " : n[u][0];
        if ("+" !== c && "-" !== c && " " !== c && "\\" !== c) break;
        i.lines.push(n[u]), i.linedelimiters.push(r[u] || "\n"), "+" === c ? a++ : "-" === c ? s++ : " " === c && (a++, s++);
      }

      if (a || 1 !== i.newLines || (i.newLines = 0), s || 1 !== i.oldLines || (i.oldLines = 0), t.strict) {
        if (a !== i.newLines) throw new Error("Added line count did not match for hunk at line " + (e + 1));
        if (s !== i.oldLines) throw new Error("Removed line count did not match for hunk at line " + (e + 1));
      }

      return i;
    }

    for (; u < n.length;) {
      i();
    }

    return o;
  }

  function A(e, t, n) {
    var r = !0,
        o = !1,
        u = !1,
        i = 1;
    return function a() {
      if (r && !u) {
        if (o ? i++ : r = !1, e + i <= n) return i;
        u = !0;
      }

      if (!o) return u || (r = !0), t <= e - i ? -i++ : (o = !0, a());
    };
  }

  function F(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};

    if ("string" == typeof t && (t = v(t)), Array.isArray(t)) {
      if (t.length > 1) throw new Error("applyPatch only works with a single input.");
      t = t[0];
    }

    var r,
        o,
        u = e.split(/\r\n|[\n\v\f\r\x85]/),
        i = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        a = t.hunks,
        s = n.compareLine || function (e, t, n, r) {
      return t === r;
    },
        c = 0,
        l = n.fuzzFactor || 0,
        p = 0,
        d = 0;

    function f(e, t) {
      for (var n = 0; n < e.lines.length; n++) {
        var r = e.lines[n],
            o = r.length > 0 ? r[0] : " ",
            i = r.length > 0 ? r.substr(1) : r;

        if (" " === o || "-" === o) {
          if (!s(t + 1, u[t], o, i) && ++c > l) return !1;
          t++;
        }
      }

      return !0;
    }

    for (var h = 0; h < a.length; h++) {
      for (var m = a[h], g = u.length - m.oldLines, D = 0, y = d + m.oldStart - 1, E = A(y, p, g); void 0 !== D; D = E()) {
        if (f(m, y + D)) {
          m.offset = d += D;
          break;
        }
      }

      if (void 0 === D) return !1;
      p = m.offset + m.oldStart + m.oldLines;
    }

    for (var C = 0, b = 0; b < a.length; b++) {
      var F = a[b],
          x = F.oldStart + F.offset + C - 1;
      C += F.newLines - F.oldLines;

      for (var S = 0; S < F.lines.length; S++) {
        var w = F.lines[S],
            T = w.length > 0 ? w[0] : " ",
            B = w.length > 0 ? w.substr(1) : w,
            N = F.linedelimiters[S];
        if (" " === T) x++;else if ("-" === T) u.splice(x, 1), i.splice(x, 1);else if ("+" === T) u.splice(x, 0, B), i.splice(x, 0, N), x++;else if ("\\" === T) {
          var k = F.lines[S - 1] ? F.lines[S - 1][0] : null;
          "+" === k ? r = !0 : "-" === k && (o = !0);
        }
      }
    }

    if (r) for (; !u[u.length - 1];) {
      u.pop(), i.pop();
    } else o && (u.push(""), i.push("\n"));

    for (var P = 0; P < u.length - 1; P++) {
      u[P] = u[P] + i[P];
    }

    return u.join("");
  }

  function x(e, t, n, r, o, u, i) {
    i || (i = {}), void 0 === i.context && (i.context = 4);
    var a = d(n, r, i);

    function s(e) {
      return e.map(function (e) {
        return " " + e;
      });
    }

    a.push({
      value: "",
      lines: []
    });

    for (var c = [], l = 0, p = 0, f = [], h = 1, m = 1, D = function D(e) {
      var t = a[e],
          o = t.lines || t.value.replace(/\n$/, "").split("\n");

      if (t.lines = o, t.added || t.removed) {
        var u;

        if (!l) {
          var d = a[e - 1];
          l = h, p = m, d && (f = i.context > 0 ? s(d.lines.slice(-i.context)) : [], l -= f.length, p -= f.length);
        }

        (u = f).push.apply(u, g(o.map(function (e) {
          return (t.added ? "+" : "-") + e;
        }))), t.added ? m += o.length : h += o.length;
      } else {
        if (l) if (o.length <= 2 * i.context && e < a.length - 2) {
          var D;
          (D = f).push.apply(D, g(s(o)));
        } else {
          var y,
              E = Math.min(o.length, i.context);
          (y = f).push.apply(y, g(s(o.slice(0, E))));
          var C = {
            oldStart: l,
            oldLines: h - l + E,
            newStart: p,
            newLines: m - p + E,
            lines: f
          };

          if (e >= a.length - 2 && o.length <= i.context) {
            var b = /\n$/.test(n),
                v = /\n$/.test(r),
                A = 0 == o.length && f.length > C.oldLines;
            !b && A && n.length > 0 && f.splice(C.oldLines, 0, "\\ No newline at end of file"), (b || A) && v || f.push("\\ No newline at end of file");
          }

          c.push(C), l = 0, p = 0, f = [];
        }
        h += o.length, m += o.length;
      }
    }, y = 0; y < a.length; y++) {
      D(y);
    }

    return {
      oldFileName: e,
      newFileName: t,
      oldHeader: o,
      newHeader: u,
      hunks: c
    };
  }

  function S(e, t, n, r, o, u, i) {
    return function (e) {
      var t = [];
      e.oldFileName == e.newFileName && t.push("Index: " + e.oldFileName), t.push("==================================================================="), t.push("--- " + e.oldFileName + (void 0 === e.oldHeader ? "" : "\t" + e.oldHeader)), t.push("+++ " + e.newFileName + (void 0 === e.newHeader ? "" : "\t" + e.newHeader));

      for (var n = 0; n < e.hunks.length; n++) {
        var r = e.hunks[n];
        0 === r.oldLines && (r.oldStart -= 1), 0 === r.newLines && (r.newStart -= 1), t.push("@@ -" + r.oldStart + "," + r.oldLines + " +" + r.newStart + "," + r.newLines + " @@"), t.push.apply(t, r.lines);
      }

      return t.join("\n") + "\n";
    }(x(e, t, n, r, o, u, i));
  }

  function w(e, t) {
    if (t.length > e.length) return !1;

    for (var n = 0; n < t.length; n++) {
      if (t[n] !== e[n]) return !1;
    }

    return !0;
  }

  function T(e) {
    var t = W(e.lines),
        n = t.oldLines,
        r = t.newLines;
    void 0 !== n ? e.oldLines = n : delete e.oldLines, void 0 !== r ? e.newLines = r : delete e.newLines;
  }

  function B(e, t) {
    if ("string" == typeof e) {
      if (/^@@/m.test(e) || /^Index:/m.test(e)) return v(e)[0];
      if (!t) throw new Error("Must provide a base reference or pass in a patch");
      return x(void 0, void 0, t, e);
    }

    return e;
  }

  function N(e) {
    return e.newFileName && e.newFileName !== e.oldFileName;
  }

  function k(e, t, n) {
    return t === n ? t : (e.conflict = !0, {
      mine: t,
      theirs: n
    });
  }

  function P(e, t) {
    return e.oldStart < t.oldStart && e.oldStart + e.oldLines < t.oldStart;
  }

  function O(e, t) {
    return {
      oldStart: e.oldStart,
      oldLines: e.oldLines,
      newStart: e.newStart + t,
      newLines: e.newLines,
      lines: e.lines
    };
  }

  function I(e, t, n, r, o) {
    var u = {
      offset: t,
      lines: n,
      index: 0
    },
        i = {
      offset: r,
      lines: o,
      index: 0
    };

    for (_(e, u, i), _(e, i, u); u.index < u.lines.length && i.index < i.lines.length;) {
      var a = u.lines[u.index],
          s = i.lines[i.index];
      if ("-" !== a[0] && "+" !== a[0] || "-" !== s[0] && "+" !== s[0]) {
        if ("+" === a[0] && " " === s[0]) {
          var c;
          (c = e.lines).push.apply(c, g(V(u)));
        } else if ("+" === s[0] && " " === a[0]) {
          var l;
          (l = e.lines).push.apply(l, g(V(i)));
        } else "-" === a[0] && " " === s[0] ? M(e, u, i) : "-" === s[0] && " " === a[0] ? M(e, i, u, !0) : a === s ? (e.lines.push(a), u.index++, i.index++) : j(e, V(u), V(i));
      } else L(e, u, i);
    }

    R(e, u), R(e, i), T(e);
  }

  function L(e, t, n) {
    var r = V(t),
        o = V(n);

    if ($(r) && $(o)) {
      var u, i;
      if (w(r, o) && q(n, r, r.length - o.length)) return void (u = e.lines).push.apply(u, g(r));
      if (w(o, r) && q(t, o, o.length - r.length)) return void (i = e.lines).push.apply(i, g(o));
    } else if (function (e, t) {
      return e.length === t.length && w(e, t);
    }(r, o)) {
      var a;
      return void (a = e.lines).push.apply(a, g(r));
    }

    j(e, r, o);
  }

  function M(e, t, n, r) {
    var o,
        u = V(t),
        i = function (e, t) {
      var n = [],
          r = [],
          o = 0,
          u = !1,
          i = !1;

      for (; o < t.length && e.index < e.lines.length;) {
        var a = e.lines[e.index],
            s = t[o];
        if ("+" === s[0]) break;
        if (u = u || " " !== a[0], r.push(s), o++, "+" === a[0]) for (i = !0; "+" === a[0];) {
          n.push(a), a = e.lines[++e.index];
        }
        s.substr(1) === a.substr(1) ? (n.push(a), e.index++) : i = !0;
      }

      "+" === (t[o] || "")[0] && u && (i = !0);
      if (i) return n;

      for (; o < t.length;) {
        r.push(t[o++]);
      }

      return {
        merged: r,
        changes: n
      };
    }(n, u);

    i.merged ? (o = e.lines).push.apply(o, g(i.merged)) : j(e, r ? i : u, r ? u : i);
  }

  function j(e, t, n) {
    e.conflict = !0, e.lines.push({
      conflict: !0,
      mine: t,
      theirs: n
    });
  }

  function _(e, t, n) {
    for (; t.offset < n.offset && t.index < t.lines.length;) {
      var r = t.lines[t.index++];
      e.lines.push(r), t.offset++;
    }
  }

  function R(e, t) {
    for (; t.index < t.lines.length;) {
      var n = t.lines[t.index++];
      e.lines.push(n);
    }
  }

  function V(e) {
    for (var t = [], n = e.lines[e.index][0]; e.index < e.lines.length;) {
      var r = e.lines[e.index];
      if ("-" === n && "+" === r[0] && (n = "+"), n !== r[0]) break;
      t.push(r), e.index++;
    }

    return t;
  }

  function $(e) {
    return e.reduce(function (e, t) {
      return e && "-" === t[0];
    }, !0);
  }

  function q(e, t, n) {
    for (var r = 0; r < n; r++) {
      var o = t[t.length - n + r].substr(1);
      if (e.lines[e.index + r] !== " " + o) return !1;
    }

    return e.index += n, !0;
  }

  function W(e) {
    var t = 0,
        n = 0;
    return e.forEach(function (e) {
      if ("string" != typeof e) {
        var r = W(e.mine),
            o = W(e.theirs);
        void 0 !== t && (r.oldLines === o.oldLines ? t += r.oldLines : t = void 0), void 0 !== n && (r.newLines === o.newLines ? n += r.newLines : n = void 0);
      } else void 0 === n || "+" !== e[0] && " " !== e[0] || n++, void 0 === t || "-" !== e[0] && " " !== e[0] || t++;
    }), {
      oldLines: t,
      newLines: n
    };
  }

  function U(e) {
    var t = e;
    return t = (t = (t = (t = t.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/"/g, "&quot;");
  }

  b.tokenize = function (e) {
    return e.slice();
  }, b.join = b.removeEmpty = function (e) {
    return e;
  };
  var J = Object.freeze({
    __proto__: null,
    Diff: r,
    applyPatch: F,
    applyPatches: function applyPatches(e, t) {
      "string" == typeof e && (e = v(e));
      var n = 0;
      !function r() {
        var o = e[n++];
        if (!o) return t.complete();
        t.loadFile(o, function (e, n) {
          if (e) return t.complete(e);
          var u = F(n, o, t);
          t.patched(o, u, function (e) {
            if (e) return t.complete(e);
            r();
          });
        });
      }();
    },
    canonicalize: C,
    convertChangesToDMP: function convertChangesToDMP(e) {
      for (var t, n, r = [], o = 0; o < e.length; o++) {
        n = (t = e[o]).added ? 1 : t.removed ? -1 : 0, r.push([n, t.value]);
      }

      return r;
    },
    convertChangesToXML: function convertChangesToXML(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = e[n];
        r.added ? t.push("<ins>") : r.removed && t.push("<del>"), t.push(U(r.value)), r.added ? t.push("</ins>") : r.removed && t.push("</del>");
      }

      return t.join("");
    },
    createPatch: function createPatch(e, t, n, r, o, u) {
      return S(e, e, t, n, r, o, u);
    },
    createTwoFilesPatch: S,
    diffArrays: function diffArrays(e, t, n) {
      return b.diff(e, t, n);
    },
    diffChars: function diffChars(e, t, n) {
      return i.diff(e, t, n);
    },
    diffCss: function diffCss(e, t, n) {
      return h.diff(e, t, n);
    },
    diffJson: function diffJson(e, t, n) {
      return E.diff(e, t, n);
    },
    diffLines: d,
    diffSentences: function diffSentences(e, t, n) {
      return f.diff(e, t, n);
    },
    diffTrimmedLines: function diffTrimmedLines(e, t, n) {
      var r = a(n, {
        ignoreWhitespace: !0
      });
      return p.diff(e, t, r);
    },
    diffWords: function diffWords(e, t, n) {
      return n = a(n, {
        ignoreWhitespace: !0
      }), l.diff(e, t, n);
    },
    diffWordsWithSpace: function diffWordsWithSpace(e, t, n) {
      return l.diff(e, t, n);
    },
    merge: function merge(e, t, n) {
      e = B(e, n), t = B(t, n);
      var r = {};
      (e.index || t.index) && (r.index = e.index || t.index), (e.newFileName || t.newFileName) && (N(e) ? N(t) ? (r.oldFileName = k(r, e.oldFileName, t.oldFileName), r.newFileName = k(r, e.newFileName, t.newFileName), r.oldHeader = k(r, e.oldHeader, t.oldHeader), r.newHeader = k(r, e.newHeader, t.newHeader)) : (r.oldFileName = e.oldFileName, r.newFileName = e.newFileName, r.oldHeader = e.oldHeader, r.newHeader = e.newHeader) : (r.oldFileName = t.oldFileName || e.oldFileName, r.newFileName = t.newFileName || e.newFileName, r.oldHeader = t.oldHeader || e.oldHeader, r.newHeader = t.newHeader || e.newHeader)), r.hunks = [];

      for (var o = 0, u = 0, i = 0, a = 0; o < e.hunks.length || u < t.hunks.length;) {
        var s = e.hunks[o] || {
          oldStart: 1 / 0
        },
            c = t.hunks[u] || {
          oldStart: 1 / 0
        };
        if (P(s, c)) r.hunks.push(O(s, i)), o++, a += s.newLines - s.oldLines;else if (P(c, s)) r.hunks.push(O(c, a)), u++, i += c.newLines - c.oldLines;else {
          var l = {
            oldStart: Math.min(s.oldStart, c.oldStart),
            oldLines: 0,
            newStart: Math.min(s.newStart + i, c.oldStart + a),
            newLines: 0,
            lines: []
          };
          I(l, s.oldStart, s.lines, c.oldStart, c.lines), u++, o++, r.hunks.push(l);
        }
      }

      return r;
    },
    parsePatch: v,
    structuredPatch: x
  });

  function z(e) {
    return {
      type: "concat",
      parts: e
    };
  }

  function H(e) {
    return {
      type: "indent",
      contents: e
    };
  }

  function G(e, t) {
    return {
      type: "align",
      contents: t,
      n: e
    };
  }

  function X(e, t) {
    return {
      type: "group",
      id: (t = t || {}).id,
      contents: e,
      break: !!t.shouldBreak,
      expandedStates: t.expandedStates
    };
  }

  var Y = {
    type: "break-parent"
  },
      K = z([{
    type: "line",
    hard: !0
  }, Y]),
      Q = z([{
    type: "line",
    hard: !0,
    literal: !0
  }, Y]);

  var Z = {
    concat: z,
    join: function join(e, t) {
      var n = [];

      for (var _r2 = 0; _r2 < t.length; _r2++) {
        0 !== _r2 && n.push(e), n.push(t[_r2]);
      }

      return z(n);
    },
    line: {
      type: "line"
    },
    softline: {
      type: "line",
      soft: !0
    },
    hardline: K,
    literalline: Q,
    group: X,
    conditionalGroup: function conditionalGroup(e, t) {
      return X(e[0], Object.assign({}, t, {
        expandedStates: e
      }));
    },
    fill: function fill(e) {
      return {
        type: "fill",
        parts: e
      };
    },
    lineSuffix: function lineSuffix(e) {
      return {
        type: "line-suffix",
        contents: e
      };
    },
    lineSuffixBoundary: {
      type: "line-suffix-boundary"
    },
    cursor: {
      type: "cursor",
      placeholder: Symbol("cursor")
    },
    breakParent: Y,
    ifBreak: function ifBreak(e, t, n) {
      return {
        type: "if-break",
        breakContents: e,
        flatContents: t,
        groupId: (n = n || {}).groupId
      };
    },
    trim: {
      type: "trim"
    },
    indent: H,
    align: G,
    addAlignmentToDoc: function addAlignmentToDoc(e, t, n) {
      var r = e;

      if (t > 0) {
        for (var _e2 = 0; _e2 < Math.floor(t / n); ++_e2) {
          r = H(r);
        }

        r = G(t % n, r), r = G(-1 / 0, r);
      }

      return r;
    },
    markAsRoot: function markAsRoot(e) {
      return G({
        type: "root"
      }, e);
    },
    dedentToRoot: function dedentToRoot(e) {
      return G(-1 / 0, e);
    },
    dedent: function dedent(e) {
      return G(-1, e);
    }
  },
      ee = function ee(e) {
    return "string" == typeof e ? e.replace(function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$onlyFirst = _ref.onlyFirst,
          e = _ref$onlyFirst === void 0 ? !1 : _ref$onlyFirst;

      var t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(t, e ? void 0 : "g");
    }(), "") : e;
  };

  var te = function te(e) {
    return !Number.isNaN(e) && e >= 4352 && (e <= 4447 || 9001 === e || 9002 === e || 11904 <= e && e <= 12871 && 12351 !== e || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141);
  };

  var ne = te,
      re = te;
  ne.default = re;

  var oe = function oe(e) {
    if ("string" != typeof (e = e.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g, "  ")) || 0 === e.length) return 0;
    e = ee(e);
    var t = 0;

    for (var _n2 = 0; _n2 < e.length; _n2++) {
      var _r3 = e.codePointAt(_n2);

      _r3 <= 31 || _r3 >= 127 && _r3 <= 159 || _r3 >= 768 && _r3 <= 879 || (_r3 > 65535 && _n2++, t += ne(_r3) ? 2 : 1);
    }

    return t;
  };

  var ue = oe,
      ie = oe;
  ue.default = ie;

  var ae = function ae(e) {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  },
      se = function se(e) {
    return e[e.length - 1];
  },
      ce = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};

  function le() {
    throw new Error("setTimeout has not been defined");
  }

  function pe() {
    throw new Error("clearTimeout has not been defined");
  }

  var de = le,
      fe = pe;

  function he(e) {
    if (de === setTimeout) return setTimeout(e, 0);
    if ((de === le || !de) && setTimeout) return de = setTimeout, setTimeout(e, 0);

    try {
      return de(e, 0);
    } catch (t) {
      try {
        return de.call(null, e, 0);
      } catch (t) {
        return de.call(this, e, 0);
      }
    }
  }

  "function" == typeof ce.setTimeout && (de = setTimeout), "function" == typeof ce.clearTimeout && (fe = clearTimeout);
  var me,
      ge = [],
      De = !1,
      ye = -1;

  function Ee() {
    De && me && (De = !1, me.length ? ge = me.concat(ge) : ye = -1, ge.length && Ce());
  }

  function Ce() {
    if (!De) {
      var e = he(Ee);
      De = !0;

      for (var t = ge.length; t;) {
        for (me = ge, ge = []; ++ye < t;) {
          me && me[ye].run();
        }

        ye = -1, t = ge.length;
      }

      me = null, De = !1, function (e) {
        if (fe === clearTimeout) return clearTimeout(e);
        if ((fe === pe || !fe) && clearTimeout) return fe = clearTimeout, clearTimeout(e);

        try {
          fe(e);
        } catch (t) {
          try {
            return fe.call(null, e);
          } catch (t) {
            return fe.call(this, e);
          }
        }
      }(e);
    }
  }

  function be(e, t) {
    this.fun = e, this.array = t;
  }

  be.prototype.run = function () {
    this.fun.apply(null, this.array);
  };

  function ve() {}

  var Ae = ve,
      Fe = ve,
      xe = ve,
      Se = ve,
      we = ve,
      Te = ve,
      Be = ve;

  var Ne = ce.performance || {},
      ke = Ne.now || Ne.mozNow || Ne.msNow || Ne.oNow || Ne.webkitNow || function () {
    return new Date().getTime();
  };

  var Pe = new Date();
  var Oe = {
    nextTick: function nextTick(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }
      ge.push(new be(e, t)), 1 !== ge.length || De || he(Ce);
    },
    title: "browser",
    browser: !0,
    env: {},
    argv: [],
    version: "",
    versions: {},
    on: Ae,
    addListener: Fe,
    once: xe,
    off: Se,
    removeListener: we,
    removeAllListeners: Te,
    emit: Be,
    binding: function binding(e) {
      throw new Error("process.binding is not supported");
    },
    cwd: function cwd() {
      return "/";
    },
    chdir: function chdir(e) {
      throw new Error("process.chdir is not supported");
    },
    umask: function umask() {
      return 0;
    },
    hrtime: function hrtime(e) {
      var t = .001 * ke.call(Ne),
          n = Math.floor(t),
          r = Math.floor(t % 1 * 1e9);
      return e && (n -= e[0], (r -= e[1]) < 0 && (n--, r += 1e9)), [n, r];
    },
    platform: "browser",
    release: {},
    config: {},
    uptime: function uptime() {
      return (new Date() - Pe) / 1e3;
    }
  };
  var Ie = "object" == _typeof(Oe) && Oe.env && Oe.env.NODE_DEBUG && /\bsemver\b/i.test(Oe.env.NODE_DEBUG) ? function () {
    var _console;

    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }

    return (_console = console).error.apply(_console, ["SEMVER"].concat(e));
  } : function () {};
  var Le = {
    SEMVER_SPEC_VERSION: "2.0.0",
    MAX_LENGTH: 256,
    MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
    MAX_SAFE_COMPONENT_LENGTH: 16
  },
      Me = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function je(e, t, n) {
    return e(n = {
      path: t,
      exports: {},
      require: function require(e, t) {
        return function () {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(null == t && n.path);
      }
    }, n.exports), n.exports;
  }

  function _e(e) {
    return e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }

  var Re = je(function (e, t) {
    var n = Le.MAX_SAFE_COMPONENT_LENGTH,
        r = (t = e.exports = {}).re = [],
        o = t.src = [],
        u = t.t = {};
    var i = 0;

    var a = function a(e, t, n) {
      var a = i++;
      Ie(a, t), u[e] = a, o[a] = t, r[a] = new RegExp(t, n ? "g" : void 0);
    };

    a("NUMERICIDENTIFIER", "0|[1-9]\\d*"), a("NUMERICIDENTIFIERLOOSE", "[0-9]+"), a("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), a("MAINVERSION", "(".concat(o[u.NUMERICIDENTIFIER], ")\\.") + "(".concat(o[u.NUMERICIDENTIFIER], ")\\.") + "(".concat(o[u.NUMERICIDENTIFIER], ")")), a("MAINVERSIONLOOSE", "(".concat(o[u.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(o[u.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(o[u.NUMERICIDENTIFIERLOOSE], ")")), a("PRERELEASEIDENTIFIER", "(?:".concat(o[u.NUMERICIDENTIFIER], "|").concat(o[u.NONNUMERICIDENTIFIER], ")")), a("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(o[u.NUMERICIDENTIFIERLOOSE], "|").concat(o[u.NONNUMERICIDENTIFIER], ")")), a("PRERELEASE", "(?:-(".concat(o[u.PRERELEASEIDENTIFIER], "(?:\\.").concat(o[u.PRERELEASEIDENTIFIER], ")*))")), a("PRERELEASELOOSE", "(?:-?(".concat(o[u.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(o[u.PRERELEASEIDENTIFIERLOOSE], ")*))")), a("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), a("BUILD", "(?:\\+(".concat(o[u.BUILDIDENTIFIER], "(?:\\.").concat(o[u.BUILDIDENTIFIER], ")*))")), a("FULLPLAIN", "v?".concat(o[u.MAINVERSION]).concat(o[u.PRERELEASE], "?").concat(o[u.BUILD], "?")), a("FULL", "^".concat(o[u.FULLPLAIN], "$")), a("LOOSEPLAIN", "[v=\\s]*".concat(o[u.MAINVERSIONLOOSE]).concat(o[u.PRERELEASELOOSE], "?").concat(o[u.BUILD], "?")), a("LOOSE", "^".concat(o[u.LOOSEPLAIN], "$")), a("GTLT", "((?:<|>)?=?)"), a("XRANGEIDENTIFIERLOOSE", "".concat(o[u.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), a("XRANGEIDENTIFIER", "".concat(o[u.NUMERICIDENTIFIER], "|x|X|\\*")), a("XRANGEPLAIN", "[v=\\s]*(".concat(o[u.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(o[u.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(o[u.XRANGEIDENTIFIER], ")") + "(?:".concat(o[u.PRERELEASE], ")?").concat(o[u.BUILD], "?") + ")?)?"), a("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(o[u.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(o[u.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(o[u.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(o[u.PRERELEASELOOSE], ")?").concat(o[u.BUILD], "?") + ")?)?"), a("XRANGE", "^".concat(o[u.GTLT], "\\s*").concat(o[u.XRANGEPLAIN], "$")), a("XRANGELOOSE", "^".concat(o[u.GTLT], "\\s*").concat(o[u.XRANGEPLAINLOOSE], "$")), a("COERCE", "".concat("(^|[^\\d])(\\d{1,").concat(n, "})") + "(?:\\.(\\d{1,".concat(n, "}))?") + "(?:\\.(\\d{1,".concat(n, "}))?") + "(?:$|[^\\d])"), a("COERCERTL", o[u.COERCE], !0), a("LONETILDE", "(?:~>?)"), a("TILDETRIM", "(\\s*)".concat(o[u.LONETILDE], "\\s+"), !0), t.tildeTrimReplace = "$1~", a("TILDE", "^".concat(o[u.LONETILDE]).concat(o[u.XRANGEPLAIN], "$")), a("TILDELOOSE", "^".concat(o[u.LONETILDE]).concat(o[u.XRANGEPLAINLOOSE], "$")), a("LONECARET", "(?:\\^)"), a("CARETTRIM", "(\\s*)".concat(o[u.LONECARET], "\\s+"), !0), t.caretTrimReplace = "$1^", a("CARET", "^".concat(o[u.LONECARET]).concat(o[u.XRANGEPLAIN], "$")), a("CARETLOOSE", "^".concat(o[u.LONECARET]).concat(o[u.XRANGEPLAINLOOSE], "$")), a("COMPARATORLOOSE", "^".concat(o[u.GTLT], "\\s*(").concat(o[u.LOOSEPLAIN], ")$|^$")), a("COMPARATOR", "^".concat(o[u.GTLT], "\\s*(").concat(o[u.FULLPLAIN], ")$|^$")), a("COMPARATORTRIM", "(\\s*)".concat(o[u.GTLT], "\\s*(").concat(o[u.LOOSEPLAIN], "|").concat(o[u.XRANGEPLAIN], ")"), !0), t.comparatorTrimReplace = "$1$2$3", a("HYPHENRANGE", "^\\s*(".concat(o[u.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(o[u.XRANGEPLAIN], ")") + "\\s*$"), a("HYPHENRANGELOOSE", "^\\s*(".concat(o[u.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(o[u.XRANGEPLAINLOOSE], ")") + "\\s*$"), a("STAR", "(<|>)?=?\\s*\\*"), a("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), a("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
  });

  var Ve = /^[0-9]+$/,
      $e = function $e(e, t) {
    var n = Ve.test(e),
        r = Ve.test(t);
    return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
  };

  var qe = {
    compareIdentifiers: $e,
    rcompareIdentifiers: function rcompareIdentifiers(e, t) {
      return $e(t, e);
    }
  };
  var We = Le.MAX_LENGTH,
      Ue = Le.MAX_SAFE_INTEGER,
      Je = Re.re,
      ze = Re.t,
      He = qe.compareIdentifiers;

  var Ge = /*#__PURE__*/function () {
    function Ge(e, t) {
      _classCallCheck(this, Ge);

      if (t && "object" == _typeof(t) || (t = {
        loose: !!t,
        includePrerelease: !1
      }), e instanceof Ge) {
        if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
        e = e.version;
      } else if ("string" != typeof e) throw new TypeError("Invalid Version: ".concat(e));

      if (e.length > We) throw new TypeError("version is longer than ".concat(We, " characters"));
      Ie("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
      var n = e.trim().match(t.loose ? Je[ze.LOOSE] : Je[ze.FULL]);
      if (!n) throw new TypeError("Invalid Version: ".concat(e));
      if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Ue || this.major < 0) throw new TypeError("Invalid major version");
      if (this.minor > Ue || this.minor < 0) throw new TypeError("Invalid minor version");
      if (this.patch > Ue || this.patch < 0) throw new TypeError("Invalid patch version");
      n[4] ? this.prerelease = n[4].split(".").map(function (e) {
        if (/^[0-9]+$/.test(e)) {
          var _t2 = +e;

          if (_t2 >= 0 && _t2 < Ue) return _t2;
        }

        return e;
      }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
    }

    _createClass(Ge, [{
      key: "format",
      value: function format() {
        return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.version;
      }
    }, {
      key: "compare",
      value: function compare(e) {
        if (Ie("SemVer.compare", this.version, this.options, e), !(e instanceof Ge)) {
          if ("string" == typeof e && e === this.version) return 0;
          e = new Ge(e, this.options);
        }

        return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
      }
    }, {
      key: "compareMain",
      value: function compareMain(e) {
        return e instanceof Ge || (e = new Ge(e, this.options)), He(this.major, e.major) || He(this.minor, e.minor) || He(this.patch, e.patch);
      }
    }, {
      key: "comparePre",
      value: function comparePre(e) {
        if (e instanceof Ge || (e = new Ge(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        var t = 0;

        do {
          var _n3 = this.prerelease[t],
              _r4 = e.prerelease[t];
          if (Ie("prerelease compare", t, _n3, _r4), void 0 === _n3 && void 0 === _r4) return 0;
          if (void 0 === _r4) return 1;
          if (void 0 === _n3) return -1;
          if (_n3 !== _r4) return He(_n3, _r4);
        } while (++t);
      }
    }, {
      key: "compareBuild",
      value: function compareBuild(e) {
        e instanceof Ge || (e = new Ge(e, this.options));
        var t = 0;

        do {
          var _n4 = this.build[t],
              _r5 = e.build[t];
          if (Ie("prerelease compare", t, _n4, _r5), void 0 === _n4 && void 0 === _r5) return 0;
          if (void 0 === _r5) return 1;
          if (void 0 === _n4) return -1;
          if (_n4 !== _r5) return He(_n4, _r5);
        } while (++t);
      }
    }, {
      key: "inc",
      value: function inc(e, t) {
        switch (e) {
          case "premajor":
            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
            break;

          case "preminor":
            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
            break;

          case "prepatch":
            this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
            break;

          case "prerelease":
            0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
            break;

          case "major":
            0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
            break;

          case "minor":
            0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
            break;

          case "patch":
            0 === this.prerelease.length && this.patch++, this.prerelease = [];
            break;

          case "pre":
            if (0 === this.prerelease.length) this.prerelease = [0];else {
              var _e3 = this.prerelease.length;

              for (; --_e3 >= 0;) {
                "number" == typeof this.prerelease[_e3] && (this.prerelease[_e3]++, _e3 = -2);
              }

              -1 === _e3 && this.prerelease.push(0);
            }
            t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
            break;

          default:
            throw new Error("invalid increment argument: ".concat(e));
        }

        return this.format(), this.raw = this.version, this;
      }
    }]);

    return Ge;
  }();

  var Xe = Ge;

  var Ye = function Ye(e, t, n) {
    return new Xe(e, n).compare(new Xe(t, n));
  };

  var Ke = function Ke(e, t, n) {
    return Ye(e, t, n) < 0;
  };

  var Qe = function Qe(e, t, n) {
    return Ye(e, t, n) >= 0;
  },
      Ze = je(function (e, t) {
    function n() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }
    }

    function r() {
      return "undefined" != typeof WeakMap ? new WeakMap() : {
        add: n,
        delete: n,
        get: n,
        set: n,
        has: function has(e) {
          return !1;
        }
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var o = Object.prototype.hasOwnProperty,
        u = function u(e, t) {
      return o.call(e, t);
    };

    function i(e, t) {
      for (var n in t) {
        u(t, n) && (e[n] = t[n]);
      }

      return e;
    }

    var a = /^[ \t]*(?:\r\n|\r|\n)/,
        s = /(?:\r\n|\r|\n)[ \t]*$/,
        c = /^(?:[\r\n]|$)/,
        l = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
        p = /^[ \t]*[\r\n][ \t\r\n]*$/;

    function d(e, t, n) {
      var r = 0,
          o = e[0].match(l);
      o && (r = o[1].length);
      var u = new RegExp("(\\r\\n|\\r|\\n).{0," + r + "}", "g");
      t && (e = e.slice(1));
      var i = n.newline,
          c = n.trimLeadingNewline,
          p = n.trimTrailingNewline,
          d = "string" == typeof i,
          f = e.length;
      return e.map(function (e, t) {
        return e = e.replace(u, "$1"), 0 === t && c && (e = e.replace(a, "")), t === f - 1 && p && (e = e.replace(s, "")), d && (e = e.replace(/\r\n|\n|\r/g, function (e) {
          return i;
        })), e;
      });
    }

    function f(e, t) {
      for (var n = "", r = 0, o = e.length; r < o; r++) {
        n += e[r], r < o - 1 && (n += t[r]);
      }

      return n;
    }

    function h(e) {
      return u(e, "raw") && u(e, "length");
    }

    var m = function e(t) {
      var n = r(),
          o = r();
      return i(function r(u) {
        for (var a = [], s = 1; s < arguments.length; s++) {
          a[s - 1] = arguments[s];
        }

        if (h(u)) {
          var l = u,
              g = (a[0] === r || a[0] === m) && p.test(l[0]) && c.test(l[1]),
              D = g ? o : n,
              y = D.get(l);
          if (y || (y = d(l, g, t), D.set(l, y)), 0 === a.length) return y[0];
          var E = f(y, g ? a.slice(1) : a);
          return E;
        }

        return e(i(i({}, t), u || {}));
      }, {
        string: function string(e) {
          return d([e], !1, t)[0];
        }
      });
    }({
      trimLeadingNewline: !0,
      trimTrailingNewline: !0
    });

    t.outdent = m, t.default = m;

    try {
      e.exports = m, Object.defineProperty(m, "__esModule", {
        value: !0
      }), m.default = m, m.outdent = m;
    } catch (e) {}
  });

  function et() {
    var e = t(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]);
    return et = function et() {
      return e;
    }, e;
  }

  function tt() {
    var e = t(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);
    return tt = function tt() {
      return e;
    }, e;
  }

  function nt() {
    var e = t(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);
    return nt = function nt() {
      return e;
    }, e;
  }

  function rt() {
    var e = t(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]);
    return rt = function rt() {
      return e;
    }, e;
  }

  function ot() {
    var e = t(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]);
    return ot = function ot() {
      return e;
    }, e;
  }

  function ut() {
    var e = t(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]);
    return ut = function ut() {
      return e;
    }, e;
  }

  var it = Ze.outdent,
      at = "Config",
      st = "Editor",
      ct = "Other",
      lt = "Global",
      pt = "Special",
      dt = {
    cursorOffset: {
      since: "1.4.0",
      category: pt,
      type: "int",
      default: -1,
      range: {
        start: -1,
        end: 1 / 0,
        step: 1
      },
      description: it(ut()),
      cliCategory: st
    },
    endOfLine: {
      since: "1.15.0",
      category: lt,
      type: "choice",
      default: [{
        since: "1.15.0",
        value: "auto"
      }, {
        since: "2.0.0",
        value: "lf"
      }],
      description: "Which end of line characters to apply.",
      choices: [{
        value: "lf",
        description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
      }, {
        value: "crlf",
        description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
      }, {
        value: "cr",
        description: "Carriage Return character only (\\r), used very rarely"
      }, {
        value: "auto",
        description: it(ot())
      }]
    },
    filepath: {
      since: "1.4.0",
      category: pt,
      type: "path",
      description: "Specify the input filepath. This will be used to do parser inference.",
      cliName: "stdin-filepath",
      cliCategory: ct,
      cliDescription: "Path to the file to pretend that stdin comes from."
    },
    insertPragma: {
      since: "1.8.0",
      category: pt,
      type: "boolean",
      default: !1,
      description: "Insert @format pragma into file's first docblock comment.",
      cliCategory: ct
    },
    parser: {
      since: "0.0.10",
      category: lt,
      type: "choice",
      default: [{
        since: "0.0.10",
        value: "babylon"
      }, {
        since: "1.13.0",
        value: void 0
      }],
      description: "Which parser to use.",
      exception: function exception(e) {
        return "string" == typeof e || "function" == typeof e;
      },
      choices: [{
        value: "flow",
        description: "Flow"
      }, {
        value: "babel",
        since: "1.16.0",
        description: "JavaScript"
      }, {
        value: "babel-flow",
        since: "1.16.0",
        description: "Flow"
      }, {
        value: "babel-ts",
        since: "2.0.0",
        description: "TypeScript"
      }, {
        value: "typescript",
        since: "1.4.0",
        description: "TypeScript"
      }, {
        value: "espree",
        since: "2.2.0",
        description: "JavaScript"
      }, {
        value: "meriyah",
        since: "2.2.0",
        description: "JavaScript"
      }, {
        value: "css",
        since: "1.7.1",
        description: "CSS"
      }, {
        value: "less",
        since: "1.7.1",
        description: "Less"
      }, {
        value: "scss",
        since: "1.7.1",
        description: "SCSS"
      }, {
        value: "json",
        since: "1.5.0",
        description: "JSON"
      }, {
        value: "json5",
        since: "1.13.0",
        description: "JSON5"
      }, {
        value: "json-stringify",
        since: "1.13.0",
        description: "JSON.stringify"
      }, {
        value: "graphql",
        since: "1.5.0",
        description: "GraphQL"
      }, {
        value: "markdown",
        since: "1.8.0",
        description: "Markdown"
      }, {
        value: "mdx",
        since: "1.15.0",
        description: "MDX"
      }, {
        value: "vue",
        since: "1.10.0",
        description: "Vue"
      }, {
        value: "yaml",
        since: "1.14.0",
        description: "YAML"
      }, {
        value: "glimmer",
        since: null,
        description: "Handlebars"
      }, {
        value: "html",
        since: "1.15.0",
        description: "HTML"
      }, {
        value: "angular",
        since: "1.15.0",
        description: "Angular"
      }, {
        value: "lwc",
        since: "1.17.0",
        description: "Lightning Web Components"
      }]
    },
    plugins: {
      since: "1.10.0",
      type: "path",
      array: !0,
      default: [{
        value: []
      }],
      category: lt,
      description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
      exception: function exception(e) {
        return "string" == typeof e || "object" == _typeof(e);
      },
      cliName: "plugin",
      cliCategory: at
    },
    pluginSearchDirs: {
      since: "1.13.0",
      type: "path",
      array: !0,
      default: [{
        value: []
      }],
      category: lt,
      description: it(rt()),
      exception: function exception(e) {
        return "string" == typeof e || "object" == _typeof(e);
      },
      cliName: "plugin-search-dir",
      cliCategory: at
    },
    printWidth: {
      since: "0.0.0",
      category: lt,
      type: "int",
      default: 80,
      description: "The line length where Prettier will try wrap.",
      range: {
        start: 0,
        end: 1 / 0,
        step: 1
      }
    },
    rangeEnd: {
      since: "1.4.0",
      category: pt,
      type: "int",
      default: 1 / 0,
      range: {
        start: 0,
        end: 1 / 0,
        step: 1
      },
      description: it(nt()),
      cliCategory: st
    },
    rangeStart: {
      since: "1.4.0",
      category: pt,
      type: "int",
      default: 0,
      range: {
        start: 0,
        end: 1 / 0,
        step: 1
      },
      description: it(tt()),
      cliCategory: st
    },
    requirePragma: {
      since: "1.7.0",
      category: pt,
      type: "boolean",
      default: !1,
      description: it(et()),
      cliCategory: ct
    },
    tabWidth: {
      type: "int",
      category: lt,
      default: 2,
      description: "Number of spaces per indentation level.",
      range: {
        start: 0,
        end: 1 / 0,
        step: 1
      }
    },
    useTabs: {
      since: "1.0.0",
      category: lt,
      type: "boolean",
      default: !1,
      description: "Indent with tabs instead of spaces."
    },
    embeddedLanguageFormatting: {
      since: "2.1.0",
      category: lt,
      type: "choice",
      default: [{
        since: "2.1.0",
        value: "auto"
      }],
      description: "Control how Prettier formats quoted code embedded in the file.",
      choices: [{
        value: "auto",
        description: "Format embedded code if Prettier can automatically identify it."
      }, {
        value: "off",
        description: "Never automatically format embedded code."
      }]
    }
  };
  var ft = {
    compare: Ye,
    lt: Ke,
    gte: Qe
  },
      ht = n.version,
      mt = {
    CATEGORY_CONFIG: at,
    CATEGORY_EDITOR: st,
    CATEGORY_FORMAT: "Format",
    CATEGORY_OTHER: ct,
    CATEGORY_OUTPUT: "Output",
    CATEGORY_GLOBAL: lt,
    CATEGORY_SPECIAL: pt,
    options: dt
  }.options;
  var gt = {
    getSupportInfo: function getSupportInfo() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$plugins = _ref2.plugins,
          t = _ref2$plugins === void 0 ? [] : _ref2$plugins,
          _ref2$showUnreleased = _ref2.showUnreleased,
          n = _ref2$showUnreleased === void 0 ? !1 : _ref2$showUnreleased,
          _ref2$showDeprecated = _ref2.showDeprecated,
          r = _ref2$showDeprecated === void 0 ? !1 : _ref2$showDeprecated,
          _ref2$showInternal = _ref2.showInternal,
          o = _ref2$showInternal === void 0 ? !1 : _ref2$showInternal;

      var u = ht.split("-", 1)[0],
          i = t.reduce(function (e, t) {
        return e.concat(t.languages || []);
      }, []).filter(s),
          a = function (e, t) {
        return Object.entries(e).map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              e = _ref4[0],
              n = _ref4[1];

          return Object.assign(_defineProperty({}, t, e), n);
        });
      }(Object.assign.apply(Object, [{}].concat(_toConsumableArray(t.map(function (_ref5) {
        var e = _ref5.options;
        return e;
      })), [mt])), "name").filter(function (e) {
        return s(e) && c(e);
      }).sort(function (e, t) {
        return e.name === t.name ? 0 : e.name < t.name ? -1 : 1;
      }).map(function (t) {
        if (o) return t;
        return e(t, ["cliName", "cliCategory", "cliDescription"]);
      }).map(function (e) {
        e = Object.assign({}, e), Array.isArray(e.default) && (e.default = 1 === e.default.length ? e.default[0].value : e.default.filter(s).sort(function (e, t) {
          return ft.compare(t.since, e.since);
        })[0].value), Array.isArray(e.choices) && (e.choices = e.choices.filter(function (e) {
          return s(e) && c(e);
        }), "parser" === e.name && function (e, t, n) {
          var r = new Set(e.choices.map(function (e) {
            return e.value;
          }));

          var _iterator = _createForOfIteratorHelper(t),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _o2 = _step.value;

              if (_o2.parsers) {
                var _iterator2 = _createForOfIteratorHelper(_o2.parsers),
                    _step2;

                try {
                  var _loop = function _loop() {
                    var t = _step2.value;

                    if (!r.has(t)) {
                      r.add(t);

                      var _u2 = n.find(function (e) {
                        return e.parsers && e.parsers[t];
                      });

                      var _i2 = _o2.name;
                      _u2 && _u2.name && (_i2 += " (plugin: ".concat(_u2.name, ")")), e.choices.push({
                        value: t,
                        description: _i2
                      });
                    }
                  };

                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    _loop();
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }(e, i, t));
        var n = t.filter(function (t) {
          return t.defaultOptions && void 0 !== t.defaultOptions[e.name];
        }).reduce(function (t, n) {
          return t[n.name] = n.defaultOptions[e.name], t;
        }, {});
        return Object.assign({}, e, {
          pluginDefaults: n
        });
      });

      return {
        languages: i,
        options: a
      };

      function s(e) {
        return n || !("since" in e) || e.since && ft.gte(u, e.since);
      }

      function c(e) {
        return r || !("deprecated" in e) || e.deprecated && ft.lt(u, e.deprecated);
      }
    }
  };
  var Dt = gt.getSupportInfo,
      yt = /[^\x20-\x7F]/;

  function Et(e) {
    return function (t, n, r) {
      var o = r && r.backwards;
      if (!1 === n) return !1;
      var u = t.length;
      var i = n;

      for (; i >= 0 && i < u;) {
        var _n5 = t.charAt(i);

        if (e instanceof RegExp) {
          if (!e.test(_n5)) return i;
        } else if (!e.includes(_n5)) return i;

        o ? i-- : i++;
      }

      return (-1 === i || i === u) && i;
    };
  }

  var Ct = Et(/\s/),
      bt = Et(" \t"),
      vt = Et(",; \t"),
      At = Et(/[^\n\r]/);

  function Ft(e, t) {
    if (!1 === t) return !1;
    if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) for (var _n6 = t + 2; _n6 < e.length; ++_n6) {
      if ("*" === e.charAt(_n6) && "/" === e.charAt(_n6 + 1)) return _n6 + 2;
    }
    return t;
  }

  function xt(e, t) {
    return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? At(e, t) : t);
  }

  function St(e, t, n) {
    var r = n && n.backwards;
    if (!1 === t) return !1;
    var o = e.charAt(t);

    if (r) {
      if ("\r" === e.charAt(t - 1) && "\n" === o) return t - 2;
      if ("\n" === o || "\r" === o || "\u2028" === o || "\u2029" === o) return t - 1;
    } else {
      if ("\r" === o && "\n" === e.charAt(t + 1)) return t + 2;
      if ("\n" === o || "\r" === o || "\u2028" === o || "\u2029" === o) return t + 1;
    }

    return t;
  }

  function wt(e, t, n) {
    var r = bt(e, (n = n || {}).backwards ? t - 1 : t, n);
    return r !== St(e, r, n);
  }

  function Tt(e, t) {
    var n = null,
        r = t;

    for (; r !== n;) {
      n = r, r = vt(e, r), r = Ft(e, r), r = bt(e, r);
    }

    return r = xt(e, r), r = St(e, r), !1 !== r && wt(e, r);
  }

  function Bt(e, t) {
    var n = null,
        r = t;

    for (; r !== n;) {
      n = r, r = bt(e, r), r = Ft(e, r), r = xt(e, r), r = St(e, r);
    }

    return r;
  }

  function Nt(e, t, n) {
    return Bt(e, n(t));
  }

  function kt(e, t, n) {
    var r = 0;

    for (var _o3 = n = n || 0; _o3 < e.length; ++_o3) {
      "\t" === e[_o3] ? r = r + t - r % t : r++;
    }

    return r;
  }

  function Pt(e, t) {
    var n = e.slice(1, -1),
        r = {
      quote: '"',
      regex: /"/g
    },
        o = {
      quote: "'",
      regex: /'/g
    },
        u = "'" === t ? o : r,
        i = u === o ? r : o;
    var a = u.quote;

    if (n.includes(u.quote) || n.includes(i.quote)) {
      a = (n.match(u.regex) || []).length > (n.match(i.regex) || []).length ? i.quote : u.quote;
    }

    return a;
  }

  function Ot(e, t, n) {
    var r = '"' === t ? "'" : '"',
        o = e.replace(/\\([\S\s])|(["'])/g, function (e, o, u) {
      return o === r ? o : u === t ? "\\" + u : u || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(o) ? o : "\\" + o);
    });
    return t + o + t;
  }

  function It(e, t) {
    (e.comments || (e.comments = [])).push(t), t.printed = !1, "JSXText" === e.type && (t.printed = !0);
  }

  var Lt = {
    inferParserByLanguage: function inferParserByLanguage(e, t) {
      var _Dt = Dt({
        plugins: t.plugins
      }),
          n = _Dt.languages,
          r = n.find(function (_ref6) {
        var t = _ref6.name;
        return t.toLowerCase() === e;
      }) || n.find(function (_ref7) {
        var t = _ref7.aliases;
        return Array.isArray(t) && t.includes(e);
      }) || n.find(function (_ref8) {
        var t = _ref8.extensions;
        return Array.isArray(t) && t.includes(".".concat(e));
      });

      return r && r.parsers[0];
    },
    replaceEndOfLineWith: function replaceEndOfLineWith(e, t) {
      var n = [];

      var _iterator3 = _createForOfIteratorHelper(e.split("\n")),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _r6 = _step3.value;
          0 !== n.length && n.push(t), n.push(_r6);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return n;
    },
    getStringWidth: function getStringWidth(e) {
      return e ? yt.test(e) ? ue(e) : e.length : 0;
    },
    getMaxContinuousCount: function getMaxContinuousCount(e, t) {
      var n = e.match(new RegExp("(".concat(ae(t), ")+"), "g"));
      return null === n ? 0 : n.reduce(function (e, n) {
        return Math.max(e, n.length / t.length);
      }, 0);
    },
    getMinNotPresentContinuousCount: function getMinNotPresentContinuousCount(e, t) {
      var n = e.match(new RegExp("(".concat(ae(t), ")+"), "g"));
      if (null === n) return 0;
      var r = new Map();
      var o = 0;

      var _iterator4 = _createForOfIteratorHelper(n),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _e5 = _step4.value;

          var _n7 = _e5.length / t.length;

          r.set(_n7, !0), _n7 > o && (o = _n7);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      for (var _e4 = 1; _e4 < o; _e4++) {
        if (!r.get(_e4)) return _e4;
      }

      return o + 1;
    },
    getPenultimate: function getPenultimate(e) {
      return e[e.length - 2];
    },
    getLast: se,
    getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Bt,
    getNextNonSpaceNonCommentCharacterIndex: Nt,
    getNextNonSpaceNonCommentCharacter: function getNextNonSpaceNonCommentCharacter(e, t, n) {
      return e.charAt(Nt(e, t, n));
    },
    skip: Et,
    skipWhitespace: Ct,
    skipSpaces: bt,
    skipToLineEnd: vt,
    skipEverythingButNewLine: At,
    skipInlineComment: Ft,
    skipTrailingComment: xt,
    skipNewline: St,
    isNextLineEmptyAfterIndex: Tt,
    isNextLineEmpty: function isNextLineEmpty(e, t, n) {
      return Tt(e, n(t));
    },
    isPreviousLineEmpty: function isPreviousLineEmpty(e, t, n) {
      var r = n(t) - 1;
      return r = bt(e, r, {
        backwards: !0
      }), r = St(e, r, {
        backwards: !0
      }), r = bt(e, r, {
        backwards: !0
      }), r !== St(e, r, {
        backwards: !0
      });
    },
    hasNewline: wt,
    hasNewlineInRange: function hasNewlineInRange(e, t, n) {
      for (var _r7 = t; _r7 < n; ++_r7) {
        if ("\n" === e.charAt(_r7)) return !0;
      }

      return !1;
    },
    hasSpaces: function hasSpaces(e, t, n) {
      return bt(e, (n = n || {}).backwards ? t - 1 : t, n) !== t;
    },
    getAlignmentSize: kt,
    getIndentSize: function getIndentSize(e, t) {
      var n = e.lastIndexOf("\n");
      return -1 === n ? 0 : kt(e.slice(n + 1).match(/^[\t ]*/)[0], t);
    },
    getPreferredQuote: Pt,
    printString: function printString(e, t, n) {
      var r = e.slice(1, -1),
          o = !r.includes('"') && !r.includes("'"),
          u = "json" === t.parser ? '"' : t.__isInHtmlAttribute ? "'" : Pt(e, t.singleQuote ? "'" : '"');
      return n ? o ? u + r + u : e : Ot(r, u, !("css" === t.parser || "less" === t.parser || "scss" === t.parser || t.embeddedInHtml));
    },
    printNumber: function printNumber(e) {
      return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
    },
    isNodeIgnoreComment: function isNodeIgnoreComment(e) {
      return "prettier-ignore" === e.value.trim();
    },
    makeString: Ot,
    addLeadingComment: function addLeadingComment(e, t) {
      t.leading = !0, t.trailing = !1, It(e, t);
    },
    addDanglingComment: function addDanglingComment(e, t, n) {
      t.leading = !1, t.trailing = !1, n && (t.marker = n), It(e, t);
    },
    addTrailingComment: function addTrailingComment(e, t) {
      t.leading = !1, t.trailing = !0, It(e, t);
    },
    isFrontMatterNode: function isFrontMatterNode(e) {
      return e && "front-matter" === e.type;
    },
    getShebang: function getShebang(e) {
      if (!e.startsWith("#!")) return "";
      var t = e.indexOf("\n");
      return -1 === t ? e : e.slice(0, t);
    }
  };
  var Mt = {
    guessEndOfLine: function guessEndOfLine(e) {
      var t = e.indexOf("\r");
      return t >= 0 ? "\n" === e.charAt(t + 1) ? "crlf" : "cr" : "lf";
    },
    convertEndOfLineToChars: function convertEndOfLineToChars(e) {
      switch (e) {
        case "cr":
          return "\r";

        case "crlf":
          return "\r\n";

        default:
          return "\n";
      }
    },
    countEndOfLineChars: function countEndOfLineChars(e, t) {
      var n;
      if ("\n" === t) n = /\n/g;else if ("\r" === t) n = /\r/g;else {
        if ("\r\n" !== t) throw new Error('Unexpected "eol" '.concat(JSON.stringify(t), "."));
        n = /\r\n/g;
      }
      var r = e.match(n);
      return r ? r.length : 0;
    },
    normalizeEndOfLine: function normalizeEndOfLine(e) {
      return e.replace(/\r\n?/g, "\n");
    }
  };
  var jt = Lt.getStringWidth,
      _t = Mt.convertEndOfLineToChars,
      Rt = Z.concat,
      Vt = Z.fill,
      $t = Z.cursor;
  var qt;

  function Wt(e, t) {
    return Jt(e, {
      type: "indent"
    }, t);
  }

  function Ut(e, t, n) {
    if (t === -1 / 0) return e.root || {
      value: "",
      length: 0,
      queue: []
    };
    if (t < 0) return Jt(e, {
      type: "dedent"
    }, n);
    if (!t) return e;
    if ("root" === t.type) return Object.assign({}, e, {
      root: e
    });
    return Jt(e, {
      type: "string" == typeof t ? "stringAlign" : "numberAlign",
      n: t
    }, n);
  }

  function Jt(e, t, n) {
    var r = "dedent" === t.type ? e.queue.slice(0, -1) : e.queue.concat(t);
    var o = "",
        u = 0,
        i = 0,
        a = 0;

    var _iterator5 = _createForOfIteratorHelper(r),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _e6 = _step5.value;

        switch (_e6.type) {
          case "indent":
            l(), n.useTabs ? s(1) : c(n.tabWidth);
            break;

          case "stringAlign":
            l(), o += _e6.n, u += _e6.n.length;
            break;

          case "numberAlign":
            i += 1, a += _e6.n;
            break;

          default:
            throw new Error("Unexpected type '".concat(_e6.type, "'"));
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return p(), Object.assign({}, e, {
      value: o,
      length: u,
      queue: r
    });

    function s(e) {
      o += "\t".repeat(e), u += n.tabWidth * e;
    }

    function c(e) {
      o += " ".repeat(e), u += e;
    }

    function l() {
      n.useTabs ? function () {
        i > 0 && s(i);
        d();
      }() : p();
    }

    function p() {
      a > 0 && c(a), d();
    }

    function d() {
      i = 0, a = 0;
    }
  }

  function zt(e) {
    if (0 === e.length) return 0;
    var t = 0;

    for (; e.length > 0 && "string" == typeof e[e.length - 1] && e[e.length - 1].match(/^[\t ]*$/);) {
      t += e.pop().length;
    }

    if (e.length && "string" == typeof e[e.length - 1]) {
      var _n8 = e[e.length - 1].replace(/[\t ]*$/, "");

      t += e[e.length - 1].length - _n8.length, e[e.length - 1] = _n8;
    }

    return t;
  }

  function Ht(e, t, n, r, o) {
    var u = t.length;
    var i = [e],
        a = [];

    for (; n >= 0;) {
      if (0 === i.length) {
        if (0 === u) return !0;
        i.push(t[u - 1]), u--;
        continue;
      }

      var _i$pop = i.pop(),
          _i$pop2 = _slicedToArray(_i$pop, 3),
          _e7 = _i$pop2[0],
          _s2 = _i$pop2[1],
          _c2 = _i$pop2[2];

      if ("string" == typeof _c2) a.push(_c2), n -= jt(_c2);else switch (_c2.type) {
        case "concat":
          for (var _t3 = _c2.parts.length - 1; _t3 >= 0; _t3--) {
            i.push([_e7, _s2, _c2.parts[_t3]]);
          }

          break;

        case "indent":
          i.push([Wt(_e7, r), _s2, _c2.contents]);
          break;

        case "align":
          i.push([Ut(_e7, _c2.n, r), _s2, _c2.contents]);
          break;

        case "trim":
          n += zt(a);
          break;

        case "group":
          if (o && _c2.break) return !1;
          i.push([_e7, _c2.break ? 1 : _s2, _c2.contents]), _c2.id && (qt[_c2.id] = i[i.length - 1][1]);
          break;

        case "fill":
          for (var _t4 = _c2.parts.length - 1; _t4 >= 0; _t4--) {
            i.push([_e7, _s2, _c2.parts[_t4]]);
          }

          break;

        case "if-break":
          {
            var _t5 = _c2.groupId ? qt[_c2.groupId] : _s2;

            1 === _t5 && _c2.breakContents && i.push([_e7, _s2, _c2.breakContents]), 2 === _t5 && _c2.flatContents && i.push([_e7, _s2, _c2.flatContents]);
            break;
          }

        case "line":
          switch (_s2) {
            case 2:
              if (!_c2.hard) {
                _c2.soft || (a.push(" "), n -= 1);
                break;
              }

              return !0;

            case 1:
              return !0;
          }

      }
    }

    return !1;
  }

  var Gt = {
    printDocToString: function printDocToString(e, t) {
      qt = {};

      var n = t.printWidth,
          r = _t(t.endOfLine);

      var o = 0;
      var u = [[{
        value: "",
        length: 0,
        queue: []
      }, 1, e]],
          i = [];
      var a = !1,
          s = [];

      for (; 0 !== u.length;) {
        var _u$pop = u.pop(),
            _u$pop2 = _slicedToArray(_u$pop, 3),
            _e8 = _u$pop2[0],
            _c3 = _u$pop2[1],
            _l2 = _u$pop2[2];

        if ("string" == typeof _l2) {
          var _e9 = "\n" !== r && _l2.includes("\n") ? _l2.replace(/\n/g, r) : _l2;

          i.push(_e9), o += jt(_e9);
        } else switch (_l2.type) {
          case "cursor":
            i.push($t.placeholder);
            break;

          case "concat":
            for (var _t6 = _l2.parts.length - 1; _t6 >= 0; _t6--) {
              u.push([_e8, _c3, _l2.parts[_t6]]);
            }

            break;

          case "indent":
            u.push([Wt(_e8, t), _c3, _l2.contents]);
            break;

          case "align":
            u.push([Ut(_e8, _l2.n, t), _c3, _l2.contents]);
            break;

          case "trim":
            o -= zt(i);
            break;

          case "group":
            switch (_c3) {
              case 2:
                if (!a) {
                  u.push([_e8, _l2.break ? 1 : 2, _l2.contents]);
                  break;
                }

              case 1:
                {
                  a = !1;

                  var _r8 = [_e8, 2, _l2.contents],
                      _i3 = n - o;

                  if (!_l2.break && Ht(_r8, u, _i3, t)) u.push(_r8);else if (_l2.expandedStates) {
                    var _n9 = _l2.expandedStates[_l2.expandedStates.length - 1];

                    if (_l2.break) {
                      u.push([_e8, 1, _n9]);
                      break;
                    }

                    for (var _r9 = 1; _r9 < _l2.expandedStates.length + 1; _r9++) {
                      if (_r9 >= _l2.expandedStates.length) {
                        u.push([_e8, 1, _n9]);
                        break;
                      }

                      {
                        var _n10 = [_e8, 2, _l2.expandedStates[_r9]];

                        if (Ht(_n10, u, _i3, t)) {
                          u.push(_n10);
                          break;
                        }
                      }
                    }
                  } else u.push([_e8, 1, _l2.contents]);
                  break;
                }
            }

            _l2.id && (qt[_l2.id] = u[u.length - 1][1]);
            break;

          case "fill":
            {
              var _r10 = n - o,
                  _i4 = _l2.parts;

              if (0 === _i4.length) break;

              var _i5 = _slicedToArray(_i4, 2),
                  _a2 = _i5[0],
                  _s3 = _i5[1],
                  _p2 = [_e8, 2, _a2],
                  _d2 = [_e8, 1, _a2],
                  _f2 = Ht(_p2, [], _r10, t, !0);

              if (1 === _i4.length) {
                _f2 ? u.push(_p2) : u.push(_d2);
                break;
              }

              var _h2 = [_e8, 2, _s3],
                  _m2 = [_e8, 1, _s3];

              if (2 === _i4.length) {
                _f2 ? (u.push(_h2), u.push(_p2)) : (u.push(_m2), u.push(_d2));
                break;
              }

              _i4.splice(0, 2);

              var _g2 = [_e8, _c3, Vt(_i4)],
                  _D2 = _i4[0];
              Ht([_e8, 2, Rt([_a2, _s3, _D2])], [], _r10, t, !0) ? (u.push(_g2), u.push(_h2), u.push(_p2)) : _f2 ? (u.push(_g2), u.push(_m2), u.push(_p2)) : (u.push(_g2), u.push(_m2), u.push(_d2));
              break;
            }

          case "if-break":
            {
              var _t7 = _l2.groupId ? qt[_l2.groupId] : _c3;

              1 === _t7 && _l2.breakContents && u.push([_e8, _c3, _l2.breakContents]), 2 === _t7 && _l2.flatContents && u.push([_e8, _c3, _l2.flatContents]);
              break;
            }

          case "line-suffix":
            s.push([_e8, _c3, _l2.contents]);
            break;

          case "line-suffix-boundary":
            s.length > 0 && u.push([_e8, _c3, {
              type: "line",
              hard: !0
            }]);
            break;

          case "line":
            switch (_c3) {
              case 2:
                if (!_l2.hard) {
                  _l2.soft || (i.push(" "), o += 1);
                  break;
                }

                a = !0;

              case 1:
                if (s.length) {
                  u.push([_e8, _c3, _l2]), u.push.apply(u, _toConsumableArray(s.reverse())), s = [];
                  break;
                }

                _l2.literal ? _e8.root ? (i.push(r, _e8.root.value), o = _e8.root.length) : (i.push(r), o = 0) : (o -= zt(i), i.push(r + _e8.value), o = _e8.length);
            }

        }

        0 === u.length && s.length && (u.push.apply(u, _toConsumableArray(s.reverse())), s = []);
      }

      var c = i.indexOf($t.placeholder);

      if (-1 !== c) {
        var _e10 = i.indexOf($t.placeholder, c + 1),
            _t8 = i.slice(0, c).join(""),
            _n11 = i.slice(c + 1, _e10).join("");

        return {
          formatted: _t8 + _n11 + i.slice(_e10 + 1).join(""),
          cursorNodeStart: _t8.length,
          cursorNodeText: _n11
        };
      }

      return {
        formatted: i.join("")
      };
    }
  };
  var Xt = Z.literalline,
      Yt = Z.concat,
      Kt = {};

  function Qt(e, t, n, r) {
    var o = [e];

    for (; 0 !== o.length;) {
      var _e11 = o.pop();

      if (_e11 !== Kt) {
        if (n && o.push(_e11, Kt), !t || !1 !== t(_e11)) if ("concat" === _e11.type || "fill" === _e11.type) for (var _t9 = _e11.parts.length - 1; _t9 >= 0; --_t9) {
          o.push(_e11.parts[_t9]);
        } else if ("if-break" === _e11.type) _e11.flatContents && o.push(_e11.flatContents), _e11.breakContents && o.push(_e11.breakContents);else if ("group" === _e11.type && _e11.expandedStates) {
          if (r) for (var _t10 = _e11.expandedStates.length - 1; _t10 >= 0; --_t10) {
            o.push(_e11.expandedStates[_t10]);
          } else o.push(_e11.contents);
        } else _e11.contents && o.push(_e11.contents);
      } else n(o.pop());
    }
  }

  function Zt(e, t) {
    if ("concat" === e.type || "fill" === e.type) {
      var _n12 = e.parts.map(function (e) {
        return Zt(e, t);
      });

      return t(Object.assign({}, e, {
        parts: _n12
      }));
    }

    if ("if-break" === e.type) {
      var _n13 = e.breakContents && Zt(e.breakContents, t),
          _r11 = e.flatContents && Zt(e.flatContents, t);

      return t(Object.assign({}, e, {
        breakContents: _n13,
        flatContents: _r11
      }));
    }

    if (e.contents) {
      var _n14 = Zt(e.contents, t);

      return t(Object.assign({}, e, {
        contents: _n14
      }));
    }

    return t(e);
  }

  function en(e, t, n) {
    var r = n,
        o = !1;
    return Qt(e, function (e) {
      var n = t(e);
      if (void 0 !== n && (o = !0, r = n), o) return !1;
    }), r;
  }

  function tn(e) {
    return "string" != typeof e && ("line" === e.type || void 0);
  }

  function nn(e) {
    return !("group" !== e.type || !e.break) || !("line" !== e.type || !e.hard) || "break-parent" === e.type || void 0;
  }

  function rn(e) {
    if (e.length > 0) {
      var _t11 = e[e.length - 1];
      _t11.expandedStates || (_t11.break = !0);
    }

    return null;
  }

  function on(e) {
    return "line" !== e.type || e.hard ? "if-break" === e.type ? e.flatContents || "" : e : e.soft ? "" : " ";
  }

  function un(e) {
    var t = [],
        n = e.filter(Boolean);

    for (; 0 !== n.length;) {
      var _e12 = n.shift();

      _e12 && ("concat" !== _e12.type ? 0 === t.length || "string" != typeof t[t.length - 1] || "string" != typeof _e12 ? t.push(_e12) : t[t.length - 1] += _e12 : n.unshift.apply(n, _toConsumableArray(_e12.parts)));
    }

    return t;
  }

  function an(e) {
    if ("concat" === e.type) {
      var _t12 = [];

      for (var _n15 = 0; _n15 < e.parts.length; ++_n15) {
        var _r12 = e.parts[_n15];
        if ("string" != typeof _r12 && "concat" === _r12.type) _t12.push.apply(_t12, _toConsumableArray(an(_r12).parts));else {
          var _e13 = an(_r12);

          "" !== _e13 && _t12.push(_e13);
        }
      }

      return Object.assign({}, e, {
        parts: _t12
      });
    }

    return "if-break" === e.type ? Object.assign({}, e, {
      breakContents: null != e.breakContents ? an(e.breakContents) : null,
      flatContents: null != e.flatContents ? an(e.flatContents) : null
    }) : "group" === e.type ? Object.assign({}, e, {
      contents: an(e.contents),
      expandedStates: e.expandedStates ? e.expandedStates.map(an) : e.expandedStates
    }) : e.contents ? Object.assign({}, e, {
      contents: an(e.contents)
    }) : e;
  }

  function sn(e) {
    if ("string" == typeof e) return JSON.stringify(e);
    if ("line" === e.type) return e.literal ? "literalline" : e.hard ? "hardline" : e.soft ? "softline" : "line";
    if ("break-parent" === e.type) return "breakParent";
    if ("trim" === e.type) return "trim";
    if ("concat" === e.type) return "[" + e.parts.map(sn).join(", ") + "]";
    if ("indent" === e.type) return "indent(" + sn(e.contents) + ")";
    if ("align" === e.type) return e.n === -1 / 0 ? "dedentToRoot(" + sn(e.contents) + ")" : e.n < 0 ? "dedent(" + sn(e.contents) + ")" : "root" === e.n.type ? "markAsRoot(" + sn(e.contents) + ")" : "align(" + JSON.stringify(e.n) + ", " + sn(e.contents) + ")";
    if ("if-break" === e.type) return "ifBreak(" + sn(e.breakContents) + (e.flatContents ? ", " + sn(e.flatContents) : "") + ")";
    if ("group" === e.type) return e.expandedStates ? "conditionalGroup([" + e.expandedStates.map(sn).join(",") + "])" : (e.break ? "wrappedGroup" : "group") + "(" + sn(e.contents) + ")";
    if ("fill" === e.type) return "fill(" + e.parts.map(sn).join(", ") + ")";
    if ("line-suffix" === e.type) return "lineSuffix(" + sn(e.contents) + ")";
    if ("line-suffix-boundary" === e.type) return "lineSuffixBoundary";
    throw new Error("Unknown doc type " + e.type);
  }

  var cn = {
    builders: Z,
    printer: Gt,
    utils: {
      isEmpty: function isEmpty(e) {
        return "string" == typeof e && 0 === e.length;
      },
      willBreak: function willBreak(e) {
        return en(e, nn, !1);
      },
      isLineNext: function isLineNext(e) {
        return en(e, tn, !1);
      },
      traverseDoc: Qt,
      findInDoc: en,
      mapDoc: Zt,
      propagateBreaks: function propagateBreaks(e) {
        var t = new Set(),
            n = [];
        Qt(e, function (e) {
          if ("break-parent" === e.type && rn(n), "group" === e.type) {
            if (n.push(e), t.has(e)) return !1;
            t.add(e);
          }
        }, function (e) {
          if ("group" === e.type) {
            n.pop().break && rn(n);
          }
        }, !0);
      },
      removeLines: function removeLines(e) {
        return Zt(e, on);
      },
      stripTrailingHardline: function e(t) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

        if ("concat" === t.type && 0 !== t.parts.length) {
          var _r13 = n ? function (e) {
            var t,
                n = e.parts;

            for (var _r14 = e.parts.length; _r14 > 0 && !t; _r14--) {
              t = n[_r14 - 1];
            }

            return "group" === t.type && (n = t.contents.parts), n;
          }(t) : t.parts,
              _o4 = _r13[_r13.length - 1];

          if ("concat" === _o4.type) return 2 === _o4.parts.length && _o4.parts[0].hard && "break-parent" === _o4.parts[1].type ? {
            type: "concat",
            parts: _r13.slice(0, -1)
          } : {
            type: "concat",
            parts: t.parts.slice(0, -1).concat(e(_o4))
          };
        }

        return t;
      },
      normalizeParts: un,
      normalizeDoc: function normalizeDoc(e) {
        return Zt(e, function (e) {
          return e.parts ? Object.assign({}, e, {
            parts: un(e.parts)
          }) : e;
        });
      },
      replaceNewlinesWithLiterallines: function replaceNewlinesWithLiterallines(e) {
        return Zt(e, function (e) {
          return "string" == typeof e && e.includes("\n") ? Yt(e.split(/(\n)/g).map(function (e, t) {
            return t % 2 == 0 ? e : Xt;
          })) : e;
        });
      }
    },
    debug: {
      printDocToDebug: function printDocToDebug(e) {
        return sn(an(e));
      }
    }
  };

  var ln = function ln() {
    return !1;
  },
      pn = function pn() {
    return "";
  };

  var dn = {
    existsSync: ln,
    readFileSync: pn
  },
      fn = Object.freeze({
    __proto__: null,
    existsSync: ln,
    readFileSync: pn,
    default: dn
  });

  function hn(e) {
    if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
  }

  function mn(e, t) {
    for (var n, r = "", o = 0, u = -1, i = 0, a = 0; a <= e.length; ++a) {
      if (a < e.length) n = e.charCodeAt(a);else {
        if (47 === n) break;
        n = 47;
      }

      if (47 === n) {
        if (u === a - 1 || 1 === i) ;else if (u !== a - 1 && 2 === i) {
          if (r.length < 2 || 2 !== o || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2)) if (r.length > 2) {
            var s = r.lastIndexOf("/");

            if (s !== r.length - 1) {
              -1 === s ? (r = "", o = 0) : o = (r = r.slice(0, s)).length - 1 - r.lastIndexOf("/"), u = a, i = 0;
              continue;
            }
          } else if (2 === r.length || 1 === r.length) {
            r = "", o = 0, u = a, i = 0;
            continue;
          }
          t && (r.length > 0 ? r += "/.." : r = "..", o = 2);
        } else r.length > 0 ? r += "/" + e.slice(u + 1, a) : r = e.slice(u + 1, a), o = a - u - 1;
        u = a, i = 0;
      } else 46 === n && -1 !== i ? ++i : i = -1;
    }

    return r;
  }

  var gn = {
    resolve: function resolve() {
      for (var e, t = "", n = !1, r = arguments.length - 1; r >= -1 && !n; r--) {
        var o;
        r >= 0 ? o = arguments[r] : (void 0 === e && (e = Oe.cwd()), o = e), hn(o), 0 !== o.length && (t = o + "/" + t, n = 47 === o.charCodeAt(0));
      }

      return t = mn(t, !n), n ? t.length > 0 ? "/" + t : "/" : t.length > 0 ? t : ".";
    },
    normalize: function normalize(e) {
      if (hn(e), 0 === e.length) return ".";
      var t = 47 === e.charCodeAt(0),
          n = 47 === e.charCodeAt(e.length - 1);
      return 0 !== (e = mn(e, !t)).length || t || (e = "."), e.length > 0 && n && (e += "/"), t ? "/" + e : e;
    },
    isAbsolute: function isAbsolute(e) {
      return hn(e), e.length > 0 && 47 === e.charCodeAt(0);
    },
    join: function join() {
      if (0 === arguments.length) return ".";

      for (var e, t = 0; t < arguments.length; ++t) {
        var n = arguments[t];
        hn(n), n.length > 0 && (void 0 === e ? e = n : e += "/" + n);
      }

      return void 0 === e ? "." : gn.normalize(e);
    },
    relative: function relative(e, t) {
      if (hn(e), hn(t), e === t) return "";
      if ((e = gn.resolve(e)) === (t = gn.resolve(t))) return "";

      for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n) {
        ;
      }

      for (var r = e.length, o = r - n, u = 1; u < t.length && 47 === t.charCodeAt(u); ++u) {
        ;
      }

      for (var i = t.length - u, a = o < i ? o : i, s = -1, c = 0; c <= a; ++c) {
        if (c === a) {
          if (i > a) {
            if (47 === t.charCodeAt(u + c)) return t.slice(u + c + 1);
            if (0 === c) return t.slice(u + c);
          } else o > a && (47 === e.charCodeAt(n + c) ? s = c : 0 === c && (s = 0));

          break;
        }

        var l = e.charCodeAt(n + c);
        if (l !== t.charCodeAt(u + c)) break;
        47 === l && (s = c);
      }

      var p = "";

      for (c = n + s + 1; c <= r; ++c) {
        c !== r && 47 !== e.charCodeAt(c) || (0 === p.length ? p += ".." : p += "/..");
      }

      return p.length > 0 ? p + t.slice(u + s) : (u += s, 47 === t.charCodeAt(u) && ++u, t.slice(u));
    },
    _makeLong: function _makeLong(e) {
      return e;
    },
    dirname: function dirname(e) {
      if (hn(e), 0 === e.length) return ".";

      for (var t = e.charCodeAt(0), n = 47 === t, r = -1, o = !0, u = e.length - 1; u >= 1; --u) {
        if (47 === (t = e.charCodeAt(u))) {
          if (!o) {
            r = u;
            break;
          }
        } else o = !1;
      }

      return -1 === r ? n ? "/" : "." : n && 1 === r ? "//" : e.slice(0, r);
    },
    basename: function basename(e, t) {
      if (void 0 !== t && "string" != typeof t) throw new TypeError('"ext" argument must be a string');
      hn(e);
      var n,
          r = 0,
          o = -1,
          u = !0;

      if (void 0 !== t && t.length > 0 && t.length <= e.length) {
        if (t.length === e.length && t === e) return "";
        var i = t.length - 1,
            a = -1;

        for (n = e.length - 1; n >= 0; --n) {
          var s = e.charCodeAt(n);

          if (47 === s) {
            if (!u) {
              r = n + 1;
              break;
            }
          } else -1 === a && (u = !1, a = n + 1), i >= 0 && (s === t.charCodeAt(i) ? -1 == --i && (o = n) : (i = -1, o = a));
        }

        return r === o ? o = a : -1 === o && (o = e.length), e.slice(r, o);
      }

      for (n = e.length - 1; n >= 0; --n) {
        if (47 === e.charCodeAt(n)) {
          if (!u) {
            r = n + 1;
            break;
          }
        } else -1 === o && (u = !1, o = n + 1);
      }

      return -1 === o ? "" : e.slice(r, o);
    },
    extname: function extname(e) {
      hn(e);

      for (var t = -1, n = 0, r = -1, o = !0, u = 0, i = e.length - 1; i >= 0; --i) {
        var a = e.charCodeAt(i);
        if (47 !== a) -1 === r && (o = !1, r = i + 1), 46 === a ? -1 === t ? t = i : 1 !== u && (u = 1) : -1 !== t && (u = -1);else if (!o) {
          n = i + 1;
          break;
        }
      }

      return -1 === t || -1 === r || 0 === u || 1 === u && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
    },
    format: function format(e) {
      if (null === e || "object" != _typeof(e)) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + _typeof(e));
      return function (e, t) {
        var n = t.dir || t.root,
            r = t.base || (t.name || "") + (t.ext || "");
        return n ? n === t.root ? n + r : n + e + r : r;
      }("/", e);
    },
    parse: function parse(e) {
      hn(e);
      var t = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
      };
      if (0 === e.length) return t;
      var n,
          r = e.charCodeAt(0),
          o = 47 === r;
      o ? (t.root = "/", n = 1) : n = 0;

      for (var u = -1, i = 0, a = -1, s = !0, c = e.length - 1, l = 0; c >= n; --c) {
        if (47 !== (r = e.charCodeAt(c))) -1 === a && (s = !1, a = c + 1), 46 === r ? -1 === u ? u = c : 1 !== l && (l = 1) : -1 !== u && (l = -1);else if (!s) {
          i = c + 1;
          break;
        }
      }

      return -1 === u || -1 === a || 0 === l || 1 === l && u === a - 1 && u === i + 1 ? -1 !== a && (t.base = t.name = 0 === i && o ? e.slice(1, a) : e.slice(i, a)) : (0 === i && o ? (t.name = e.slice(1, u), t.base = e.slice(1, a)) : (t.name = e.slice(i, u), t.base = e.slice(i, a)), t.ext = e.slice(u, a)), i > 0 ? t.dir = e.slice(0, i - 1) : o && (t.dir = "/"), t;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  gn.posix = gn;
  var Dn = gn,
      yn = Object.freeze(Object.assign(Object.create(null), Dn, {
    default: Dn,
    __moduleExports: Dn
  })),
      En = [],
      Cn = [],
      bn = "undefined" != typeof Uint8Array ? Uint8Array : Array,
      vn = !1;

  function An() {
    vn = !0;

    for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, n = e.length; t < n; ++t) {
      En[t] = e[t], Cn[e.charCodeAt(t)] = t;
    }

    Cn["-".charCodeAt(0)] = 62, Cn["_".charCodeAt(0)] = 63;
  }

  function Fn(e, t, n) {
    for (var r, o, u = [], i = t; i < n; i += 3) {
      r = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2], u.push(En[(o = r) >> 18 & 63] + En[o >> 12 & 63] + En[o >> 6 & 63] + En[63 & o]);
    }

    return u.join("");
  }

  function xn(e) {
    var t;
    vn || An();

    for (var n = e.length, r = n % 3, o = "", u = [], i = 16383, a = 0, s = n - r; a < s; a += i) {
      u.push(Fn(e, a, a + i > s ? s : a + i));
    }

    return 1 === r ? (t = e[n - 1], o += En[t >> 2], o += En[t << 4 & 63], o += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o += En[t >> 10], o += En[t >> 4 & 63], o += En[t << 2 & 63], o += "="), u.push(o), u.join("");
  }

  function Sn(e, t, n, r, o) {
    var u,
        i,
        a = 8 * o - r - 1,
        s = (1 << a) - 1,
        c = s >> 1,
        l = -7,
        p = n ? o - 1 : 0,
        d = n ? -1 : 1,
        f = e[t + p];

    for (p += d, u = f & (1 << -l) - 1, f >>= -l, l += a; l > 0; u = 256 * u + e[t + p], p += d, l -= 8) {
      ;
    }

    for (i = u & (1 << -l) - 1, u >>= -l, l += r; l > 0; i = 256 * i + e[t + p], p += d, l -= 8) {
      ;
    }

    if (0 === u) u = 1 - c;else {
      if (u === s) return i ? NaN : 1 / 0 * (f ? -1 : 1);
      i += Math.pow(2, r), u -= c;
    }
    return (f ? -1 : 1) * i * Math.pow(2, u - r);
  }

  function wn(e, t, n, r, o, u) {
    var i,
        a,
        s,
        c = 8 * u - o - 1,
        l = (1 << c) - 1,
        p = l >> 1,
        d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        f = r ? 0 : u - 1,
        h = r ? 1 : -1,
        m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, i = l) : (i = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -i)) < 1 && (i--, s *= 2), (t += i + p >= 1 ? d / s : d * Math.pow(2, 1 - p)) * s >= 2 && (i++, s /= 2), i + p >= l ? (a = 0, i = l) : i + p >= 1 ? (a = (t * s - 1) * Math.pow(2, o), i += p) : (a = t * Math.pow(2, p - 1) * Math.pow(2, o), i = 0)); o >= 8; e[n + f] = 255 & a, f += h, a /= 256, o -= 8) {
      ;
    }

    for (i = i << o | a, c += o; c > 0; e[n + f] = 255 & i, f += h, i /= 256, c -= 8) {
      ;
    }

    e[n + f - h] |= 128 * m;
  }

  var Tn = {}.toString,
      Bn = Array.isArray || function (e) {
    return "[object Array]" == Tn.call(e);
  };

  function Nn() {
    return Pn.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }

  function kn(e, t) {
    if (Nn() < t) throw new RangeError("Invalid typed array length");
    return Pn.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Pn.prototype : (null === e && (e = new Pn(t)), e.length = t), e;
  }

  function Pn(e, t, n) {
    if (!(Pn.TYPED_ARRAY_SUPPORT || this instanceof Pn)) return new Pn(e, t, n);

    if ("number" == typeof e) {
      if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
      return Ln(this, e);
    }

    return On(this, e, t, n);
  }

  function On(e, t, n, r) {
    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
      if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
      if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
      t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
      Pn.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = Pn.prototype : e = Mn(e, t);
      return e;
    }(e, t, n, r) : "string" == typeof t ? function (e, t, n) {
      "string" == typeof n && "" !== n || (n = "utf8");
      if (!Pn.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
      var r = 0 | Rn(t, n),
          o = (e = kn(e, r)).write(t, n);
      o !== r && (e = e.slice(0, o));
      return e;
    }(e, t, n) : function (e, t) {
      if (_n(t)) {
        var n = 0 | jn(t.length);
        return 0 === (e = kn(e, n)).length || t.copy(e, 0, 0, n), e;
      }

      if (t) {
        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? kn(e, 0) : Mn(e, t);
        if ("Buffer" === t.type && Bn(t.data)) return Mn(e, t.data);
      }

      var r;
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }(e, t);
  }

  function In(e) {
    if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
    if (e < 0) throw new RangeError('"size" argument must not be negative');
  }

  function Ln(e, t) {
    if (In(t), e = kn(e, t < 0 ? 0 : 0 | jn(t)), !Pn.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) {
      e[n] = 0;
    }
    return e;
  }

  function Mn(e, t) {
    var n = t.length < 0 ? 0 : 0 | jn(t.length);
    e = kn(e, n);

    for (var r = 0; r < n; r += 1) {
      e[r] = 255 & t[r];
    }

    return e;
  }

  function jn(e) {
    if (e >= Nn()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Nn().toString(16) + " bytes");
    return 0 | e;
  }

  function _n(e) {
    return !(null == e || !e._isBuffer);
  }

  function Rn(e, t) {
    if (_n(e)) return e.length;
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
    "string" != typeof e && (e = "" + e);
    var n = e.length;
    if (0 === n) return 0;

    for (var r = !1;;) {
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;

        case "utf8":
        case "utf-8":
        case void 0:
          return dr(e).length;

        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * n;

        case "hex":
          return n >>> 1;

        case "base64":
          return fr(e).length;

        default:
          if (r) return dr(e).length;
          t = ("" + t).toLowerCase(), r = !0;
      }
    }
  }

  function Vn(e, t, n) {
    var r = !1;
    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
    if ((n >>>= 0) <= (t >>>= 0)) return "";

    for (e || (e = "utf8");;) {
      switch (e) {
        case "hex":
          return tr(this, t, n);

        case "utf8":
        case "utf-8":
          return Kn(this, t, n);

        case "ascii":
          return Zn(this, t, n);

        case "latin1":
        case "binary":
          return er(this, t, n);

        case "base64":
          return Yn(this, t, n);

        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return nr(this, t, n);

        default:
          if (r) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), r = !0;
      }
    }
  }

  function $n(e, t, n) {
    var r = e[t];
    e[t] = e[n], e[n] = r;
  }

  function qn(e, t, n, r, o) {
    if (0 === e.length) return -1;

    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
      if (o) return -1;
      n = e.length - 1;
    } else if (n < 0) {
      if (!o) return -1;
      n = 0;
    }

    if ("string" == typeof t && (t = Pn.from(t, r)), _n(t)) return 0 === t.length ? -1 : Wn(e, t, n, r, o);
    if ("number" == typeof t) return t &= 255, Pn.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : Wn(e, [t], n, r, o);
    throw new TypeError("val must be string, number or Buffer");
  }

  function Wn(e, t, n, r, o) {
    var u,
        i = 1,
        a = e.length,
        s = t.length;

    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
      if (e.length < 2 || t.length < 2) return -1;
      i = 2, a /= 2, s /= 2, n /= 2;
    }

    function c(e, t) {
      return 1 === i ? e[t] : e.readUInt16BE(t * i);
    }

    if (o) {
      var l = -1;

      for (u = n; u < a; u++) {
        if (c(e, u) === c(t, -1 === l ? 0 : u - l)) {
          if (-1 === l && (l = u), u - l + 1 === s) return l * i;
        } else -1 !== l && (u -= u - l), l = -1;
      }
    } else for (n + s > a && (n = a - s), u = n; u >= 0; u--) {
      for (var p = !0, d = 0; d < s; d++) {
        if (c(e, u + d) !== c(t, d)) {
          p = !1;
          break;
        }
      }

      if (p) return u;
    }

    return -1;
  }

  function Un(e, t, n, r) {
    n = Number(n) || 0;
    var o = e.length - n;
    r ? (r = Number(r)) > o && (r = o) : r = o;
    var u = t.length;
    if (u % 2 != 0) throw new TypeError("Invalid hex string");
    r > u / 2 && (r = u / 2);

    for (var i = 0; i < r; ++i) {
      var a = parseInt(t.substr(2 * i, 2), 16);
      if (isNaN(a)) return i;
      e[n + i] = a;
    }

    return i;
  }

  function Jn(e, t, n, r) {
    return hr(dr(t, e.length - n), e, n, r);
  }

  function zn(e, t, n, r) {
    return hr(function (e) {
      for (var t = [], n = 0; n < e.length; ++n) {
        t.push(255 & e.charCodeAt(n));
      }

      return t;
    }(t), e, n, r);
  }

  function Hn(e, t, n, r) {
    return zn(e, t, n, r);
  }

  function Gn(e, t, n, r) {
    return hr(fr(t), e, n, r);
  }

  function Xn(e, t, n, r) {
    return hr(function (e, t) {
      for (var n, r, o, u = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) {
        r = (n = e.charCodeAt(i)) >> 8, o = n % 256, u.push(o), u.push(r);
      }

      return u;
    }(t, e.length - n), e, n, r);
  }

  function Yn(e, t, n) {
    return 0 === t && n === e.length ? xn(e) : xn(e.slice(t, n));
  }

  function Kn(e, t, n) {
    n = Math.min(e.length, n);

    for (var r = [], o = t; o < n;) {
      var u,
          i,
          a,
          s,
          c = e[o],
          l = null,
          p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
      if (o + p <= n) switch (p) {
        case 1:
          c < 128 && (l = c);
          break;

        case 2:
          128 == (192 & (u = e[o + 1])) && (s = (31 & c) << 6 | 63 & u) > 127 && (l = s);
          break;

        case 3:
          u = e[o + 1], i = e[o + 2], 128 == (192 & u) && 128 == (192 & i) && (s = (15 & c) << 12 | (63 & u) << 6 | 63 & i) > 2047 && (s < 55296 || s > 57343) && (l = s);
          break;

        case 4:
          u = e[o + 1], i = e[o + 2], a = e[o + 3], 128 == (192 & u) && 128 == (192 & i) && 128 == (192 & a) && (s = (15 & c) << 18 | (63 & u) << 12 | (63 & i) << 6 | 63 & a) > 65535 && s < 1114112 && (l = s);
      }
      null === l ? (l = 65533, p = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), o += p;
    }

    return function (e) {
      var t = e.length;
      if (t <= Qn) return String.fromCharCode.apply(String, e);
      var n = "",
          r = 0;

      for (; r < t;) {
        n += String.fromCharCode.apply(String, e.slice(r, r += Qn));
      }

      return n;
    }(r);
  }

  Pn.TYPED_ARRAY_SUPPORT = void 0 === ce.TYPED_ARRAY_SUPPORT || ce.TYPED_ARRAY_SUPPORT, Pn.poolSize = 8192, Pn._augment = function (e) {
    return e.__proto__ = Pn.prototype, e;
  }, Pn.from = function (e, t, n) {
    return On(null, e, t, n);
  }, Pn.TYPED_ARRAY_SUPPORT && (Pn.prototype.__proto__ = Uint8Array.prototype, Pn.__proto__ = Uint8Array), Pn.alloc = function (e, t, n) {
    return function (e, t, n, r) {
      return In(t), t <= 0 ? kn(e, t) : void 0 !== n ? "string" == typeof r ? kn(e, t).fill(n, r) : kn(e, t).fill(n) : kn(e, t);
    }(null, e, t, n);
  }, Pn.allocUnsafe = function (e) {
    return Ln(null, e);
  }, Pn.allocUnsafeSlow = function (e) {
    return Ln(null, e);
  }, Pn.isBuffer = function (e) {
    return null != e && (!!e._isBuffer || mr(e) || function (e) {
      return "function" == typeof e.readFloatLE && "function" == typeof e.slice && mr(e.slice(0, 0));
    }(e));
  }, Pn.compare = function (e, t) {
    if (!_n(e) || !_n(t)) throw new TypeError("Arguments must be Buffers");
    if (e === t) return 0;

    for (var n = e.length, r = t.length, o = 0, u = Math.min(n, r); o < u; ++o) {
      if (e[o] !== t[o]) {
        n = e[o], r = t[o];
        break;
      }
    }

    return n < r ? -1 : r < n ? 1 : 0;
  }, Pn.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;

      default:
        return !1;
    }
  }, Pn.concat = function (e, t) {
    if (!Bn(e)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === e.length) return Pn.alloc(0);
    var n;
    if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) {
      t += e[n].length;
    }
    var r = Pn.allocUnsafe(t),
        o = 0;

    for (n = 0; n < e.length; ++n) {
      var u = e[n];
      if (!_n(u)) throw new TypeError('"list" argument must be an Array of Buffers');
      u.copy(r, o), o += u.length;
    }

    return r;
  }, Pn.byteLength = Rn, Pn.prototype._isBuffer = !0, Pn.prototype.swap16 = function () {
    var e = this.length;
    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

    for (var t = 0; t < e; t += 2) {
      $n(this, t, t + 1);
    }

    return this;
  }, Pn.prototype.swap32 = function () {
    var e = this.length;
    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

    for (var t = 0; t < e; t += 4) {
      $n(this, t, t + 3), $n(this, t + 1, t + 2);
    }

    return this;
  }, Pn.prototype.swap64 = function () {
    var e = this.length;
    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

    for (var t = 0; t < e; t += 8) {
      $n(this, t, t + 7), $n(this, t + 1, t + 6), $n(this, t + 2, t + 5), $n(this, t + 3, t + 4);
    }

    return this;
  }, Pn.prototype.toString = function () {
    var e = 0 | this.length;
    return 0 === e ? "" : 0 === arguments.length ? Kn(this, 0, e) : Vn.apply(this, arguments);
  }, Pn.prototype.equals = function (e) {
    if (!_n(e)) throw new TypeError("Argument must be a Buffer");
    return this === e || 0 === Pn.compare(this, e);
  }, Pn.prototype.inspect = function () {
    var e = "";
    return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">";
  }, Pn.prototype.compare = function (e, t, n, r, o) {
    if (!_n(e)) throw new TypeError("Argument must be a Buffer");
    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
    if (r >= o && t >= n) return 0;
    if (r >= o) return -1;
    if (t >= n) return 1;
    if (this === e) return 0;

    for (var u = (o >>>= 0) - (r >>>= 0), i = (n >>>= 0) - (t >>>= 0), a = Math.min(u, i), s = this.slice(r, o), c = e.slice(t, n), l = 0; l < a; ++l) {
      if (s[l] !== c[l]) {
        u = s[l], i = c[l];
        break;
      }
    }

    return u < i ? -1 : i < u ? 1 : 0;
  }, Pn.prototype.includes = function (e, t, n) {
    return -1 !== this.indexOf(e, t, n);
  }, Pn.prototype.indexOf = function (e, t, n) {
    return qn(this, e, t, n, !0);
  }, Pn.prototype.lastIndexOf = function (e, t, n) {
    return qn(this, e, t, n, !1);
  }, Pn.prototype.write = function (e, t, n, r) {
    if (void 0 === t) r = "utf8", n = this.length, t = 0;else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;else {
      if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
    }
    var o = this.length - t;
    if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    r || (r = "utf8");

    for (var u = !1;;) {
      switch (r) {
        case "hex":
          return Un(this, e, t, n);

        case "utf8":
        case "utf-8":
          return Jn(this, e, t, n);

        case "ascii":
          return zn(this, e, t, n);

        case "latin1":
        case "binary":
          return Hn(this, e, t, n);

        case "base64":
          return Gn(this, e, t, n);

        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Xn(this, e, t, n);

        default:
          if (u) throw new TypeError("Unknown encoding: " + r);
          r = ("" + r).toLowerCase(), u = !0;
      }
    }
  }, Pn.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  var Qn = 4096;

  function Zn(e, t, n) {
    var r = "";
    n = Math.min(e.length, n);

    for (var o = t; o < n; ++o) {
      r += String.fromCharCode(127 & e[o]);
    }

    return r;
  }

  function er(e, t, n) {
    var r = "";
    n = Math.min(e.length, n);

    for (var o = t; o < n; ++o) {
      r += String.fromCharCode(e[o]);
    }

    return r;
  }

  function tr(e, t, n) {
    var r = e.length;
    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);

    for (var o = "", u = t; u < n; ++u) {
      o += pr(e[u]);
    }

    return o;
  }

  function nr(e, t, n) {
    for (var r = e.slice(t, n), o = "", u = 0; u < r.length; u += 2) {
      o += String.fromCharCode(r[u] + 256 * r[u + 1]);
    }

    return o;
  }

  function rr(e, t, n) {
    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
  }

  function or(e, t, n, r, o, u) {
    if (!_n(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > o || t < u) throw new RangeError('"value" argument is out of bounds');
    if (n + r > e.length) throw new RangeError("Index out of range");
  }

  function ur(e, t, n, r) {
    t < 0 && (t = 65535 + t + 1);

    for (var o = 0, u = Math.min(e.length - n, 2); o < u; ++o) {
      e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o);
    }
  }

  function ir(e, t, n, r) {
    t < 0 && (t = 4294967295 + t + 1);

    for (var o = 0, u = Math.min(e.length - n, 4); o < u; ++o) {
      e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255;
    }
  }

  function ar(e, t, n, r, o, u) {
    if (n + r > e.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("Index out of range");
  }

  function sr(e, t, n, r, o) {
    return o || ar(e, 0, n, 4), wn(e, t, n, r, 23, 4), n + 4;
  }

  function cr(e, t, n, r, o) {
    return o || ar(e, 0, n, 8), wn(e, t, n, r, 52, 8), n + 8;
  }

  Pn.prototype.slice = function (e, t) {
    var n,
        r = this.length;
    if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), Pn.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = Pn.prototype;else {
      var o = t - e;
      n = new Pn(o, void 0);

      for (var u = 0; u < o; ++u) {
        n[u] = this[u + e];
      }
    }
    return n;
  }, Pn.prototype.readUIntLE = function (e, t, n) {
    e |= 0, t |= 0, n || rr(e, t, this.length);

    for (var r = this[e], o = 1, u = 0; ++u < t && (o *= 256);) {
      r += this[e + u] * o;
    }

    return r;
  }, Pn.prototype.readUIntBE = function (e, t, n) {
    e |= 0, t |= 0, n || rr(e, t, this.length);

    for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) {
      r += this[e + --t] * o;
    }

    return r;
  }, Pn.prototype.readUInt8 = function (e, t) {
    return t || rr(e, 1, this.length), this[e];
  }, Pn.prototype.readUInt16LE = function (e, t) {
    return t || rr(e, 2, this.length), this[e] | this[e + 1] << 8;
  }, Pn.prototype.readUInt16BE = function (e, t) {
    return t || rr(e, 2, this.length), this[e] << 8 | this[e + 1];
  }, Pn.prototype.readUInt32LE = function (e, t) {
    return t || rr(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
  }, Pn.prototype.readUInt32BE = function (e, t) {
    return t || rr(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  }, Pn.prototype.readIntLE = function (e, t, n) {
    e |= 0, t |= 0, n || rr(e, t, this.length);

    for (var r = this[e], o = 1, u = 0; ++u < t && (o *= 256);) {
      r += this[e + u] * o;
    }

    return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r;
  }, Pn.prototype.readIntBE = function (e, t, n) {
    e |= 0, t |= 0, n || rr(e, t, this.length);

    for (var r = t, o = 1, u = this[e + --r]; r > 0 && (o *= 256);) {
      u += this[e + --r] * o;
    }

    return u >= (o *= 128) && (u -= Math.pow(2, 8 * t)), u;
  }, Pn.prototype.readInt8 = function (e, t) {
    return t || rr(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
  }, Pn.prototype.readInt16LE = function (e, t) {
    t || rr(e, 2, this.length);
    var n = this[e] | this[e + 1] << 8;
    return 32768 & n ? 4294901760 | n : n;
  }, Pn.prototype.readInt16BE = function (e, t) {
    t || rr(e, 2, this.length);
    var n = this[e + 1] | this[e] << 8;
    return 32768 & n ? 4294901760 | n : n;
  }, Pn.prototype.readInt32LE = function (e, t) {
    return t || rr(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  }, Pn.prototype.readInt32BE = function (e, t) {
    return t || rr(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  }, Pn.prototype.readFloatLE = function (e, t) {
    return t || rr(e, 4, this.length), Sn(this, e, !0, 23, 4);
  }, Pn.prototype.readFloatBE = function (e, t) {
    return t || rr(e, 4, this.length), Sn(this, e, !1, 23, 4);
  }, Pn.prototype.readDoubleLE = function (e, t) {
    return t || rr(e, 8, this.length), Sn(this, e, !0, 52, 8);
  }, Pn.prototype.readDoubleBE = function (e, t) {
    return t || rr(e, 8, this.length), Sn(this, e, !1, 52, 8);
  }, Pn.prototype.writeUIntLE = function (e, t, n, r) {
    (e = +e, t |= 0, n |= 0, r) || or(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
    var o = 1,
        u = 0;

    for (this[t] = 255 & e; ++u < n && (o *= 256);) {
      this[t + u] = e / o & 255;
    }

    return t + n;
  }, Pn.prototype.writeUIntBE = function (e, t, n, r) {
    (e = +e, t |= 0, n |= 0, r) || or(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
    var o = n - 1,
        u = 1;

    for (this[t + o] = 255 & e; --o >= 0 && (u *= 256);) {
      this[t + o] = e / u & 255;
    }

    return t + n;
  }, Pn.prototype.writeUInt8 = function (e, t, n) {
    return e = +e, t |= 0, n || or(this, e, t, 1, 255, 0), Pn.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
  }, Pn.prototype.writeUInt16LE = function (e, t, n) {
    return e = +e, t |= 0, n || or(this, e, t, 2, 65535, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : ur(this, e, t, !0), t + 2;
  }, Pn.prototype.writeUInt16BE = function (e, t, n) {
    return e = +e, t |= 0, n || or(this, e, t, 2, 65535, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : ur(this, e, t, !1), t + 2;
  }, Pn.prototype.writeUInt32LE = function (e, t, n) {
    return e = +e, t |= 0, n || or(this, e, t, 4, 4294967295, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : ir(this, e, t, !0), t + 4;
  }, Pn.prototype.writeUInt32BE = function (e, t, n) {
    return e = +e, t |= 0, n || or(this, e, t, 4, 4294967295, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : ir(this, e, t, !1), t + 4;
  }, Pn.prototype.writeIntLE = function (e, t, n, r) {
    if (e = +e, t |= 0, !r) {
      var o = Math.pow(2, 8 * n - 1);
      or(this, e, t, n, o - 1, -o);
    }

    var u = 0,
        i = 1,
        a = 0;

    for (this[t] = 255 & e; ++u < n && (i *= 256);) {
      e < 0 && 0 === a && 0 !== this[t + u - 1] && (a = 1), this[t + u] = (e / i >> 0) - a & 255;
    }

    return t + n;
  }, Pn.prototype.writeIntBE = function (e, t, n, r) {
    if (e = +e, t |= 0, !r) {
      var o = Math.pow(2, 8 * n - 1);
      or(this, e, t, n, o - 1, -o);
    }

    var u = n - 1,
        i = 1,
        a = 0;

    for (this[t + u] = 255 & e; --u >= 0 && (i *= 256);) {
      e < 0 && 0 === a && 0 !== this[t + u + 1] && (a = 1), this[t + u] = (e / i >> 0) - a & 255;
    }

    return t + n;
  }, Pn.prototype.writeInt8 = function (e, t, n) {
    return e = +e, t |= 0, n || or(this, e, t, 1, 127, -128), Pn.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
  }, Pn.prototype.writeInt16LE = function (e, t, n) {
    return e = +e, t |= 0, n || or(this, e, t, 2, 32767, -32768), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : ur(this, e, t, !0), t + 2;
  }, Pn.prototype.writeInt16BE = function (e, t, n) {
    return e = +e, t |= 0, n || or(this, e, t, 2, 32767, -32768), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : ur(this, e, t, !1), t + 2;
  }, Pn.prototype.writeInt32LE = function (e, t, n) {
    return e = +e, t |= 0, n || or(this, e, t, 4, 2147483647, -2147483648), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : ir(this, e, t, !0), t + 4;
  }, Pn.prototype.writeInt32BE = function (e, t, n) {
    return e = +e, t |= 0, n || or(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : ir(this, e, t, !1), t + 4;
  }, Pn.prototype.writeFloatLE = function (e, t, n) {
    return sr(this, e, t, !0, n);
  }, Pn.prototype.writeFloatBE = function (e, t, n) {
    return sr(this, e, t, !1, n);
  }, Pn.prototype.writeDoubleLE = function (e, t, n) {
    return cr(this, e, t, !0, n);
  }, Pn.prototype.writeDoubleBE = function (e, t, n) {
    return cr(this, e, t, !1, n);
  }, Pn.prototype.copy = function (e, t, n, r) {
    if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
    if (0 === e.length || 0 === this.length) return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
    if (r < 0) throw new RangeError("sourceEnd out of bounds");
    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
    var o,
        u = r - n;
    if (this === e && n < t && t < r) for (o = u - 1; o >= 0; --o) {
      e[o + t] = this[o + n];
    } else if (u < 1e3 || !Pn.TYPED_ARRAY_SUPPORT) for (o = 0; o < u; ++o) {
      e[o + t] = this[o + n];
    } else Uint8Array.prototype.set.call(e, this.subarray(n, n + u), t);
    return u;
  }, Pn.prototype.fill = function (e, t, n, r) {
    if ("string" == typeof e) {
      if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
        var o = e.charCodeAt(0);
        o < 256 && (e = o);
      }

      if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
      if ("string" == typeof r && !Pn.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
    } else "number" == typeof e && (e &= 255);

    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
    if (n <= t) return this;
    var u;
    if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (u = t; u < n; ++u) {
      this[u] = e;
    } else {
      var i = _n(e) ? e : dr(new Pn(e, r).toString()),
          a = i.length;

      for (u = 0; u < n - t; ++u) {
        this[u + t] = i[u % a];
      }
    }
    return this;
  };
  var lr = /[^+\/0-9A-Za-z-_]/g;

  function pr(e) {
    return e < 16 ? "0" + e.toString(16) : e.toString(16);
  }

  function dr(e, t) {
    var n;
    t = t || 1 / 0;

    for (var r = e.length, o = null, u = [], i = 0; i < r; ++i) {
      if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
        if (!o) {
          if (n > 56319) {
            (t -= 3) > -1 && u.push(239, 191, 189);
            continue;
          }

          if (i + 1 === r) {
            (t -= 3) > -1 && u.push(239, 191, 189);
            continue;
          }

          o = n;
          continue;
        }

        if (n < 56320) {
          (t -= 3) > -1 && u.push(239, 191, 189), o = n;
          continue;
        }

        n = 65536 + (o - 55296 << 10 | n - 56320);
      } else o && (t -= 3) > -1 && u.push(239, 191, 189);

      if (o = null, n < 128) {
        if ((t -= 1) < 0) break;
        u.push(n);
      } else if (n < 2048) {
        if ((t -= 2) < 0) break;
        u.push(n >> 6 | 192, 63 & n | 128);
      } else if (n < 65536) {
        if ((t -= 3) < 0) break;
        u.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
      } else {
        if (!(n < 1114112)) throw new Error("Invalid code point");
        if ((t -= 4) < 0) break;
        u.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
      }
    }

    return u;
  }

  function fr(e) {
    return function (e) {
      var t, n, r, o, u, i;
      vn || An();
      var a = e.length;
      if (a % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      u = "=" === e[a - 2] ? 2 : "=" === e[a - 1] ? 1 : 0, i = new bn(3 * a / 4 - u), r = u > 0 ? a - 4 : a;
      var s = 0;

      for (t = 0, n = 0; t < r; t += 4, n += 3) {
        o = Cn[e.charCodeAt(t)] << 18 | Cn[e.charCodeAt(t + 1)] << 12 | Cn[e.charCodeAt(t + 2)] << 6 | Cn[e.charCodeAt(t + 3)], i[s++] = o >> 16 & 255, i[s++] = o >> 8 & 255, i[s++] = 255 & o;
      }

      return 2 === u ? (o = Cn[e.charCodeAt(t)] << 2 | Cn[e.charCodeAt(t + 1)] >> 4, i[s++] = 255 & o) : 1 === u && (o = Cn[e.charCodeAt(t)] << 10 | Cn[e.charCodeAt(t + 1)] << 4 | Cn[e.charCodeAt(t + 2)] >> 2, i[s++] = o >> 8 & 255, i[s++] = 255 & o), i;
    }(function (e) {
      if ((e = function (e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      }(e).replace(lr, "")).length < 2) return "";

      for (; e.length % 4 != 0;) {
        e += "=";
      }

      return e;
    }(e));
  }

  function hr(e, t, n, r) {
    for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) {
      t[o + n] = e[o];
    }

    return o;
  }

  function mr(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
  }

  var gr = _e(fn);

  var Dr = /*#__PURE__*/function () {
    function Dr(e, t) {
      _classCallCheck(this, Dr);

      (t = t || {}).readChunk || (t.readChunk = 1024), t.newLineCharacter ? t.newLineCharacter = t.newLineCharacter.charCodeAt(0) : t.newLineCharacter = 10, this.fd = "number" == typeof e ? e : gr.openSync(e, "r"), this.options = t, this.newLineCharacter = t.newLineCharacter, this.reset();
    }

    _createClass(Dr, [{
      key: "_searchInBuffer",
      value: function _searchInBuffer(e, t) {
        var n = -1;

        for (var _r15 = 0; _r15 <= e.length; _r15++) {
          if (e[_r15] === t) {
            n = _r15;
            break;
          }
        }

        return n;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.eofReached = !1, this.linesCache = [], this.fdPosition = 0;
      }
    }, {
      key: "close",
      value: function close() {
        gr.closeSync(this.fd), this.fd = null;
      }
    }, {
      key: "_extractLines",
      value: function _extractLines(e) {
        var t;
        var n = [];
        var r = 0,
            o = 0;

        for (;;) {
          var _u3 = e[r++];
          if (_u3 === this.newLineCharacter) t = e.slice(o, r), n.push(t), o = r;else if (void 0 === _u3) break;
        }

        var u = e.slice(o, r);
        return u.length && n.push(u), n;
      }
    }, {
      key: "_readChunk",
      value: function _readChunk(e) {
        var t,
            n = 0;
        var r = [];

        do {
          var _e14 = new Pn(this.options.readChunk);

          t = gr.readSync(this.fd, _e14, 0, this.options.readChunk, this.fdPosition), n += t, this.fdPosition = this.fdPosition + t, r.push(_e14);
        } while (t && -1 === this._searchInBuffer(r[r.length - 1], this.options.newLineCharacter));

        var o = Pn.concat(r);
        return t < this.options.readChunk && (this.eofReached = !0, o = o.slice(0, n)), n && (this.linesCache = this._extractLines(o), e && (this.linesCache[0] = Pn.concat([e, this.linesCache[0]]))), n;
      }
    }, {
      key: "next",
      value: function next() {
        if (!this.fd) return !1;
        var e,
            t = !1;
        if (this.eofReached && 0 === this.linesCache.length) return t;

        if (this.linesCache.length || (e = this._readChunk()), this.linesCache.length) {
          t = this.linesCache.shift();
          t[t.length - 1] !== this.newLineCharacter && (e = this._readChunk(t), e && (t = this.linesCache.shift()));
        }

        return this.eofReached && 0 === this.linesCache.length && this.close(), t && t[t.length - 1] === this.newLineCharacter && (t = t.slice(0, t.length - 1)), t;
      }
    }]);

    return Dr;
  }();

  var yr = function yr(e) {
    for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
      var o = e[t];
      r[o[0]] = o[1];
    }

    return r;
  };

  var Er = /*#__PURE__*/function (_Error) {
    _inherits(Er, _Error);

    var _super = _createSuper(Er);

    function Er() {
      _classCallCheck(this, Er);

      return _super.apply(this, arguments);
    }

    return Er;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var Cr = /*#__PURE__*/function (_Error2) {
    _inherits(Cr, _Error2);

    var _super2 = _createSuper(Cr);

    function Cr() {
      _classCallCheck(this, Cr);

      return _super2.apply(this, arguments);
    }

    return Cr;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var br = /*#__PURE__*/function (_Error3) {
    _inherits(br, _Error3);

    var _super3 = _createSuper(br);

    function br() {
      _classCallCheck(this, br);

      return _super3.apply(this, arguments);
    }

    return br;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var vr = {
    ConfigError: Er,
    DebugError: Cr,
    UndefinedParserError: br
  },
      _Ar = function Ar(e, t) {
    return (_Ar = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  };
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
  
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
  
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */


  var _Fr = function Fr() {
    return (_Fr = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        for (var o in t = arguments[n]) {
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
      }

      return e;
    }).apply(this, arguments);
  };

  function xr(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length) return {
      next: function next() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function Sr(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
        o,
        u = n.call(e),
        i = [];

    try {
      for (; (void 0 === t || t-- > 0) && !(r = u.next()).done;) {
        i.push(r.value);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (n = u.return) && n.call(u);
      } finally {
        if (o) throw o.error;
      }
    }

    return i;
  }

  function wr(e) {
    return this instanceof wr ? (this.v = e, this) : new wr(e);
  }

  var Tr = Object.freeze({
    __proto__: null,
    __extends: function __extends(e, t) {
      function n() {
        this.constructor = e;
      }

      _Ar(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
    },

    get __assign() {
      return _Fr;
    },

    __rest: function __rest(e, t) {
      var n = {};

      for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      }

      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;

        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
        }
      }

      return n;
    },
    __decorate: function __decorate(e, t, n, r) {
      var o,
          u = arguments.length,
          i = u < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);else for (var a = e.length - 1; a >= 0; a--) {
        (o = e[a]) && (i = (u < 3 ? o(i) : u > 3 ? o(t, n, i) : o(t, n)) || i);
      }
      return u > 3 && i && Object.defineProperty(t, n, i), i;
    },
    __param: function __param(e, t) {
      return function (n, r) {
        t(n, r, e);
      };
    },
    __metadata: function __metadata(e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
    __awaiter: function __awaiter(e, t, n, r) {
      return new (n || (n = Promise))(function (o, u) {
        function i(e) {
          try {
            s(r.next(e));
          } catch (e) {
            u(e);
          }
        }

        function a(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            u(e);
          }
        }

        function s(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(i, a);
        }

        s((r = r.apply(e, t || [])).next());
      });
    },
    __generator: function __generator(e, t) {
      var n,
          r,
          o,
          u,
          i = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return u = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (u[Symbol.iterator] = function () {
        return this;
      }), u;

      function a(u) {
        return function (a) {
          return function (u) {
            if (n) throw new TypeError("Generator is already executing.");

            for (; i;) {
              try {
                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;

                switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                  case 0:
                  case 1:
                    o = u;
                    break;

                  case 4:
                    return i.label++, {
                      value: u[1],
                      done: !1
                    };

                  case 5:
                    i.label++, r = u[1], u = [0];
                    continue;

                  case 7:
                    u = i.ops.pop(), i.trys.pop();
                    continue;

                  default:
                    if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                      i = 0;
                      continue;
                    }

                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                      i.label = u[1];
                      break;
                    }

                    if (6 === u[0] && i.label < o[1]) {
                      i.label = o[1], o = u;
                      break;
                    }

                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(u);
                      break;
                    }

                    o[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }

                u = t.call(e, i);
              } catch (e) {
                u = [6, e], r = 0;
              } finally {
                n = o = 0;
              }
            }

            if (5 & u[0]) throw u[1];
            return {
              value: u[0] ? u[1] : void 0,
              done: !0
            };
          }([u, a]);
        };
      }
    },
    __createBinding: function __createBinding(e, t, n, r) {
      void 0 === r && (r = n), e[r] = t[n];
    },
    __exportStar: function __exportStar(e, t) {
      for (var n in e) {
        "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]);
      }
    },
    __values: xr,
    __read: Sr,
    __spread: function __spread() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e = e.concat(Sr(arguments[t]));
      }

      return e;
    },
    __spreadArrays: function __spreadArrays() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
        e += arguments[t].length;
      }

      var r = Array(e),
          o = 0;

      for (t = 0; t < n; t++) {
        for (var u = arguments[t], i = 0, a = u.length; i < a; i++, o++) {
          r[o] = u[i];
        }
      }

      return r;
    },
    __await: wr,
    __asyncGenerator: function __asyncGenerator(e, t, n) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var r,
          o = n.apply(e, t || []),
          u = [];
      return r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function () {
        return this;
      }, r;

      function i(e) {
        o[e] && (r[e] = function (t) {
          return new Promise(function (n, r) {
            u.push([e, t, n, r]) > 1 || a(e, t);
          });
        });
      }

      function a(e, t) {
        try {
          (n = o[e](t)).value instanceof wr ? Promise.resolve(n.value.v).then(s, c) : l(u[0][2], n);
        } catch (e) {
          l(u[0][3], e);
        }

        var n;
      }

      function s(e) {
        a("next", e);
      }

      function c(e) {
        a("throw", e);
      }

      function l(e, t) {
        e(t), u.shift(), u.length && a(u[0][0], u[0][1]);
      }
    },
    __asyncDelegator: function __asyncDelegator(e) {
      var t, n;
      return t = {}, r("next"), r("throw", function (e) {
        throw e;
      }), r("return"), t[Symbol.iterator] = function () {
        return this;
      }, t;

      function r(r, o) {
        t[r] = e[r] ? function (t) {
          return (n = !n) ? {
            value: wr(e[r](t)),
            done: "return" === r
          } : o ? o(t) : t;
        } : o;
      }
    },
    __asyncValues: function __asyncValues(e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t,
          n = e[Symbol.asyncIterator];
      return n ? n.call(e) : (e = xr(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () {
        return this;
      }, t);

      function r(n) {
        t[n] = e[n] && function (t) {
          return new Promise(function (r, o) {
            (function (e, t, n, r) {
              Promise.resolve(r).then(function (t) {
                e({
                  value: t,
                  done: n
                });
              }, t);
            })(r, o, (t = e[n](t)).done, t.value);
          });
        };
      }
    },
    __makeTemplateObject: function __makeTemplateObject(e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
      }) : e.raw = t, e;
    },
    __importStar: function __importStar(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) {
        Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
      return t.default = e, t;
    },
    __importDefault: function __importDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    },
    __classPrivateFieldGet: function __classPrivateFieldGet(e, t) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    },
    __classPrivateFieldSet: function __classPrivateFieldSet(e, t, n) {
      if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
      return t.set(e, n), n;
    }
  }),
      Br = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.apiDescriptor = {
      key: function key(e) {
        return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e);
      },
      value: function value(e) {
        if (null === e || "object" != _typeof(e)) return JSON.stringify(e);
        if (Array.isArray(e)) return "[".concat(e.map(function (e) {
          return t.apiDescriptor.value(e);
        }).join(", "), "]");
        var n = Object.keys(e);
        return 0 === n.length ? "{}" : "{ ".concat(n.map(function (n) {
          return "".concat(t.apiDescriptor.key(n), ": ").concat(t.apiDescriptor.value(e[n]));
        }).join(", "), " }");
      },
      pair: function pair(_ref9) {
        var e = _ref9.key,
            n = _ref9.value;
        return t.apiDescriptor.value(_defineProperty({}, e, n));
      }
    };
  }),
      Nr = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(Br, t);
  }),
      kr = /[|\\{}()[\]^$+*?.]/g,
      Pr = function Pr(e) {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    return e.replace(kr, "\\$&");
  },
      Or = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  },
      Ir = je(function (e) {
    var t = {};

    for (var n in Or) {
      Or.hasOwnProperty(n) && (t[Or[n]] = n);
    }

    var r = e.exports = {
      rgb: {
        channels: 3,
        labels: "rgb"
      },
      hsl: {
        channels: 3,
        labels: "hsl"
      },
      hsv: {
        channels: 3,
        labels: "hsv"
      },
      hwb: {
        channels: 3,
        labels: "hwb"
      },
      cmyk: {
        channels: 4,
        labels: "cmyk"
      },
      xyz: {
        channels: 3,
        labels: "xyz"
      },
      lab: {
        channels: 3,
        labels: "lab"
      },
      lch: {
        channels: 3,
        labels: "lch"
      },
      hex: {
        channels: 1,
        labels: ["hex"]
      },
      keyword: {
        channels: 1,
        labels: ["keyword"]
      },
      ansi16: {
        channels: 1,
        labels: ["ansi16"]
      },
      ansi256: {
        channels: 1,
        labels: ["ansi256"]
      },
      hcg: {
        channels: 3,
        labels: ["h", "c", "g"]
      },
      apple: {
        channels: 3,
        labels: ["r16", "g16", "b16"]
      },
      gray: {
        channels: 1,
        labels: ["gray"]
      }
    };

    for (var o in r) {
      if (r.hasOwnProperty(o)) {
        if (!("channels" in r[o])) throw new Error("missing channels property: " + o);
        if (!("labels" in r[o])) throw new Error("missing channel labels property: " + o);
        if (r[o].labels.length !== r[o].channels) throw new Error("channel and label counts mismatch: " + o);
        var u = r[o].channels,
            i = r[o].labels;
        delete r[o].channels, delete r[o].labels, Object.defineProperty(r[o], "channels", {
          value: u
        }), Object.defineProperty(r[o], "labels", {
          value: i
        });
      }
    }

    r.rgb.hsl = function (e) {
      var t,
          n,
          r = e[0] / 255,
          o = e[1] / 255,
          u = e[2] / 255,
          i = Math.min(r, o, u),
          a = Math.max(r, o, u),
          s = a - i;
      return a === i ? t = 0 : r === a ? t = (o - u) / s : o === a ? t = 2 + (u - r) / s : u === a && (t = 4 + (r - o) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (i + a) / 2, [t, 100 * (a === i ? 0 : n <= .5 ? s / (a + i) : s / (2 - a - i)), 100 * n];
    }, r.rgb.hsv = function (e) {
      var t,
          n,
          r,
          o,
          u,
          i = e[0] / 255,
          a = e[1] / 255,
          s = e[2] / 255,
          c = Math.max(i, a, s),
          l = c - Math.min(i, a, s),
          p = function p(e) {
        return (c - e) / 6 / l + .5;
      };

      return 0 === l ? o = u = 0 : (u = l / c, t = p(i), n = p(a), r = p(s), i === c ? o = r - n : a === c ? o = 1 / 3 + t - r : s === c && (o = 2 / 3 + n - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * u, 100 * c];
    }, r.rgb.hwb = function (e) {
      var t = e[0],
          n = e[1],
          o = e[2];
      return [r.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, o))), 100 * (o = 1 - 1 / 255 * Math.max(t, Math.max(n, o)))];
    }, r.rgb.cmyk = function (e) {
      var t,
          n = e[0] / 255,
          r = e[1] / 255,
          o = e[2] / 255;
      return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - o))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - o - t) / (1 - t) || 0), 100 * t];
    }, r.rgb.keyword = function (e) {
      var n = t[e];
      if (n) return n;
      var r,
          o,
          u,
          i = 1 / 0;

      for (var a in Or) {
        if (Or.hasOwnProperty(a)) {
          var s = Or[a],
              c = (o = e, u = s, Math.pow(o[0] - u[0], 2) + Math.pow(o[1] - u[1], 2) + Math.pow(o[2] - u[2], 2));
          c < i && (i = c, r = a);
        }
      }

      return r;
    }, r.keyword.rgb = function (e) {
      return Or[e];
    }, r.rgb.xyz = function (e) {
      var t = e[0] / 255,
          n = e[1] / 255,
          r = e[2] / 255;
      return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
    }, r.rgb.lab = function (e) {
      var t = r.rgb.xyz(e),
          n = t[0],
          o = t[1],
          u = t[2];
      return o /= 100, u /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116) - 16, 500 * (n - o), 200 * (o - (u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116))];
    }, r.hsl.rgb = function (e) {
      var t,
          n,
          r,
          o,
          u,
          i = e[0] / 360,
          a = e[1] / 100,
          s = e[2] / 100;
      if (0 === a) return [u = 255 * s, u, u];
      t = 2 * s - (n = s < .5 ? s * (1 + a) : s + a - s * a), o = [0, 0, 0];

      for (var c = 0; c < 3; c++) {
        (r = i + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, u = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, o[c] = 255 * u;
      }

      return o;
    }, r.hsl.hsv = function (e) {
      var t = e[0],
          n = e[1] / 100,
          r = e[2] / 100,
          o = n,
          u = Math.max(r, .01);
      return n *= (r *= 2) <= 1 ? r : 2 - r, o *= u <= 1 ? u : 2 - u, [t, 100 * (0 === r ? 2 * o / (u + o) : 2 * n / (r + n)), 100 * ((r + n) / 2)];
    }, r.hsv.rgb = function (e) {
      var t = e[0] / 60,
          n = e[1] / 100,
          r = e[2] / 100,
          o = Math.floor(t) % 6,
          u = t - Math.floor(t),
          i = 255 * r * (1 - n),
          a = 255 * r * (1 - n * u),
          s = 255 * r * (1 - n * (1 - u));

      switch (r *= 255, o) {
        case 0:
          return [r, s, i];

        case 1:
          return [a, r, i];

        case 2:
          return [i, r, s];

        case 3:
          return [i, a, r];

        case 4:
          return [s, i, r];

        case 5:
          return [r, i, a];
      }
    }, r.hsv.hsl = function (e) {
      var t,
          n,
          r,
          o = e[0],
          u = e[1] / 100,
          i = e[2] / 100,
          a = Math.max(i, .01);
      return r = (2 - u) * i, n = u * a, [o, 100 * (n = (n /= (t = (2 - u) * a) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)];
    }, r.hwb.rgb = function (e) {
      var t,
          n,
          r,
          o,
          u,
          i,
          a,
          s = e[0] / 360,
          c = e[1] / 100,
          l = e[2] / 100,
          p = c + l;

      switch (p > 1 && (c /= p, l /= p), r = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (r = 1 - r), o = c + r * ((n = 1 - l) - c), t) {
        default:
        case 6:
        case 0:
          u = n, i = o, a = c;
          break;

        case 1:
          u = o, i = n, a = c;
          break;

        case 2:
          u = c, i = n, a = o;
          break;

        case 3:
          u = c, i = o, a = n;
          break;

        case 4:
          u = o, i = c, a = n;
          break;

        case 5:
          u = n, i = c, a = o;
      }

      return [255 * u, 255 * i, 255 * a];
    }, r.cmyk.rgb = function (e) {
      var t = e[0] / 100,
          n = e[1] / 100,
          r = e[2] / 100,
          o = e[3] / 100;
      return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))];
    }, r.xyz.rgb = function (e) {
      var t,
          n,
          r,
          o = e[0] / 100,
          u = e[1] / 100,
          i = e[2] / 100;
      return n = -.9689 * o + 1.8758 * u + .0415 * i, r = .0557 * o + -.204 * u + 1.057 * i, t = (t = 3.2406 * o + -1.5372 * u + -.4986 * i) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))];
    }, r.xyz.lab = function (e) {
      var t = e[0],
          n = e[1],
          r = e[2];
      return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))];
    }, r.lab.xyz = function (e) {
      var t,
          n,
          r,
          o = e[0];
      t = e[1] / 500 + (n = (o + 16) / 116), r = n - e[2] / 200;
      var u = Math.pow(n, 3),
          i = Math.pow(t, 3),
          a = Math.pow(r, 3);
      return n = u > .008856 ? u : (n - 16 / 116) / 7.787, t = i > .008856 ? i : (t - 16 / 116) / 7.787, r = a > .008856 ? a : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883];
    }, r.lab.lch = function (e) {
      var t,
          n = e[0],
          r = e[1],
          o = e[2];
      return (t = 360 * Math.atan2(o, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + o * o), t];
    }, r.lch.lab = function (e) {
      var t,
          n = e[0],
          r = e[1];
      return t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)];
    }, r.rgb.ansi16 = function (e) {
      var t = e[0],
          n = e[1],
          o = e[2],
          u = 1 in arguments ? arguments[1] : r.rgb.hsv(e)[2];
      if (0 === (u = Math.round(u / 50))) return 30;
      var i = 30 + (Math.round(o / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
      return 2 === u && (i += 60), i;
    }, r.hsv.ansi16 = function (e) {
      return r.rgb.ansi16(r.hsv.rgb(e), e[2]);
    }, r.rgb.ansi256 = function (e) {
      var t = e[0],
          n = e[1],
          r = e[2];
      return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
    }, r.ansi16.rgb = function (e) {
      var t = e % 10;
      if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t];
      var n = .5 * (1 + ~~(e > 50));
      return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
    }, r.ansi256.rgb = function (e) {
      if (e >= 232) {
        var t = 10 * (e - 232) + 8;
        return [t, t, t];
      }

      var n;
      return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255];
    }, r.rgb.hex = function (e) {
      var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
      return "000000".substring(t.length) + t;
    }, r.hex.rgb = function (e) {
      var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) return [0, 0, 0];
      var n = t[0];
      3 === t[0].length && (n = n.split("").map(function (e) {
        return e + e;
      }).join(""));
      var r = parseInt(n, 16);
      return [r >> 16 & 255, r >> 8 & 255, 255 & r];
    }, r.rgb.hcg = function (e) {
      var t,
          n = e[0] / 255,
          r = e[1] / 255,
          o = e[2] / 255,
          u = Math.max(Math.max(n, r), o),
          i = Math.min(Math.min(n, r), o),
          a = u - i;
      return t = a <= 0 ? 0 : u === n ? (r - o) / a % 6 : u === r ? 2 + (o - n) / a : 4 + (n - r) / a + 4, t /= 6, [360 * (t %= 1), 100 * a, 100 * (a < 1 ? i / (1 - a) : 0)];
    }, r.hsl.hcg = function (e) {
      var t = e[1] / 100,
          n = e[2] / 100,
          r = 1,
          o = 0;
      return (r = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1 && (o = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * o];
    }, r.hsv.hcg = function (e) {
      var t = e[1] / 100,
          n = e[2] / 100,
          r = t * n,
          o = 0;
      return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o];
    }, r.hcg.rgb = function (e) {
      var t = e[0] / 360,
          n = e[1] / 100,
          r = e[2] / 100;
      if (0 === n) return [255 * r, 255 * r, 255 * r];
      var o,
          u = [0, 0, 0],
          i = t % 1 * 6,
          a = i % 1,
          s = 1 - a;

      switch (Math.floor(i)) {
        case 0:
          u[0] = 1, u[1] = a, u[2] = 0;
          break;

        case 1:
          u[0] = s, u[1] = 1, u[2] = 0;
          break;

        case 2:
          u[0] = 0, u[1] = 1, u[2] = a;
          break;

        case 3:
          u[0] = 0, u[1] = s, u[2] = 1;
          break;

        case 4:
          u[0] = a, u[1] = 0, u[2] = 1;
          break;

        default:
          u[0] = 1, u[1] = 0, u[2] = s;
      }

      return o = (1 - n) * r, [255 * (n * u[0] + o), 255 * (n * u[1] + o), 255 * (n * u[2] + o)];
    }, r.hcg.hsv = function (e) {
      var t = e[1] / 100,
          n = t + e[2] / 100 * (1 - t),
          r = 0;
      return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n];
    }, r.hcg.hsl = function (e) {
      var t = e[1] / 100,
          n = e[2] / 100 * (1 - t) + .5 * t,
          r = 0;
      return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n];
    }, r.hcg.hwb = function (e) {
      var t = e[1] / 100,
          n = t + e[2] / 100 * (1 - t);
      return [e[0], 100 * (n - t), 100 * (1 - n)];
    }, r.hwb.hcg = function (e) {
      var t = e[1] / 100,
          n = 1 - e[2] / 100,
          r = n - t,
          o = 0;
      return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o];
    }, r.apple.rgb = function (e) {
      return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
    }, r.rgb.apple = function (e) {
      return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
    }, r.gray.rgb = function (e) {
      return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
    }, r.gray.hsl = r.gray.hsv = function (e) {
      return [0, 0, e[0]];
    }, r.gray.hwb = function (e) {
      return [0, 100, e[0]];
    }, r.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    }, r.gray.lab = function (e) {
      return [e[0], 0, 0];
    }, r.gray.hex = function (e) {
      var t = 255 & Math.round(e[0] / 100 * 255),
          n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return "000000".substring(n.length) + n;
    }, r.rgb.gray = function (e) {
      return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
    };
  });

  function Lr(e) {
    var t = function () {
      for (var e = {}, t = Object.keys(Ir), n = t.length, r = 0; r < n; r++) {
        e[t[r]] = {
          distance: -1,
          parent: null
        };
      }

      return e;
    }(),
        n = [e];

    for (t[e].distance = 0; n.length;) {
      for (var r = n.pop(), o = Object.keys(Ir[r]), u = o.length, i = 0; i < u; i++) {
        var a = o[i],
            s = t[a];
        -1 === s.distance && (s.distance = t[r].distance + 1, s.parent = r, n.unshift(a));
      }
    }

    return t;
  }

  function Mr(e, t) {
    return function (n) {
      return t(e(n));
    };
  }

  function jr(e, t) {
    for (var n = [t[e].parent, e], r = Ir[t[e].parent][e], o = t[e].parent; t[o].parent;) {
      n.unshift(t[o].parent), r = Mr(Ir[t[o].parent][o], r), o = t[o].parent;
    }

    return r.conversion = n, r;
  }

  var _r = {};
  Object.keys(Ir).forEach(function (e) {
    _r[e] = {}, Object.defineProperty(_r[e], "channels", {
      value: Ir[e].channels
    }), Object.defineProperty(_r[e], "labels", {
      value: Ir[e].labels
    });

    var t = function (e) {
      for (var t = Lr(e), n = {}, r = Object.keys(t), o = r.length, u = 0; u < o; u++) {
        var i = r[u];
        null !== t[i].parent && (n[i] = jr(i, t));
      }

      return n;
    }(e);

    Object.keys(t).forEach(function (n) {
      var r = t[n];
      _r[e][n] = function (e) {
        var t = function t(_t13) {
          if (null == _t13) return _t13;
          arguments.length > 1 && (_t13 = Array.prototype.slice.call(arguments));
          var n = e(_t13);
          if ("object" == _typeof(n)) for (var r = n.length, o = 0; o < r; o++) {
            n[o] = Math.round(n[o]);
          }
          return n;
        };

        return "conversion" in e && (t.conversion = e.conversion), t;
      }(r), _r[e][n].raw = function (e) {
        var t = function t(_t14) {
          return null == _t14 ? _t14 : (arguments.length > 1 && (_t14 = Array.prototype.slice.call(arguments)), e(_t14));
        };

        return "conversion" in e && (t.conversion = e.conversion), t;
      }(r);
    });
  });

  var Rr = _r,
      Vr = je(function (e) {
    var t = function t(e, _t15) {
      return function () {
        var n = e.apply(Rr, arguments);
        return "\x1b[".concat(n + _t15, "m");
      };
    },
        n = function n(e, t) {
      return function () {
        var n = e.apply(Rr, arguments);
        return "\x1b[".concat(38 + t, ";5;").concat(n, "m");
      };
    },
        r = function r(e, t) {
      return function () {
        var n = e.apply(Rr, arguments);
        return "\x1b[".concat(38 + t, ";2;").concat(n[0], ";").concat(n[1], ";").concat(n[2], "m");
      };
    };

    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: function get() {
        var e = new Map(),
            o = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            gray: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        o.color.grey = o.color.gray;

        for (var _i6 = 0, _Object$keys = Object.keys(o); _i6 < _Object$keys.length; _i6++) {
          var _t16 = _Object$keys[_i6];
          var _n16 = o[_t16];

          for (var _i7 = 0, _Object$keys2 = Object.keys(_n16); _i7 < _Object$keys2.length; _i7++) {
            var _t17 = _Object$keys2[_i7];
            var _r16 = _n16[_t17];
            o[_t17] = {
              open: "\x1b[".concat(_r16[0], "m"),
              close: "\x1b[".concat(_r16[1], "m")
            }, _n16[_t17] = o[_t17], e.set(_r16[0], _r16[1]);
          }

          Object.defineProperty(o, _t16, {
            value: _n16,
            enumerable: !1
          }), Object.defineProperty(o, "codes", {
            value: e,
            enumerable: !1
          });
        }

        var u = function u(e) {
          return e;
        },
            i = function i(e, t, n) {
          return [e, t, n];
        };

        o.color.close = "\x1b[39m", o.bgColor.close = "\x1b[49m", o.color.ansi = {
          ansi: t(u, 0)
        }, o.color.ansi256 = {
          ansi256: n(u, 0)
        }, o.color.ansi16m = {
          rgb: r(i, 0)
        }, o.bgColor.ansi = {
          ansi: t(u, 10)
        }, o.bgColor.ansi256 = {
          ansi256: n(u, 10)
        }, o.bgColor.ansi16m = {
          rgb: r(i, 10)
        };

        for (var _i8 = 0, _Object$keys3 = Object.keys(Rr); _i8 < _Object$keys3.length; _i8++) {
          var _e15 = _Object$keys3[_i8];
          if ("object" != _typeof(Rr[_e15])) continue;
          var _u4 = Rr[_e15];
          "ansi16" === _e15 && (_e15 = "ansi"), "ansi16" in _u4 && (o.color.ansi[_e15] = t(_u4.ansi16, 0), o.bgColor.ansi[_e15] = t(_u4.ansi16, 10)), "ansi256" in _u4 && (o.color.ansi256[_e15] = n(_u4.ansi256, 0), o.bgColor.ansi256[_e15] = n(_u4.ansi256, 10)), "rgb" in _u4 && (o.color.ansi16m[_e15] = r(_u4.rgb, 0), o.bgColor.ansi16m[_e15] = r(_u4.rgb, 10));
        }

        return o;
      }
    });
  }),
      $r = function $r(e, t) {
    t = t || Oe.argv;
    var n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
        r = t.indexOf(n + e),
        o = t.indexOf("--");
    return -1 !== r && (-1 === o || r < o);
  },
      qr = _e(Object.freeze({
    __proto__: null,
    default: {
      EOL: "\n",
      platform: function platform() {
        return "browser";
      },
      cpus: function cpus() {
        return [{
          model: "Prettier"
        }];
      }
    }
  }));

  var Wr = Oe.env;
  var Ur;

  function Jr(e) {
    return function (e) {
      return 0 !== e && {
        level: e,
        hasBasic: !0,
        has256: e >= 2,
        has16m: e >= 3
      };
    }(function (e) {
      if (!1 === Ur) return 0;
      if ($r("color=16m") || $r("color=full") || $r("color=truecolor")) return 3;
      if ($r("color=256")) return 2;
      if (e && !e.isTTY && !0 !== Ur) return 0;
      var t = Ur ? 1 : 0;

      if ("win32" === Oe.platform) {
        var _e16 = qr.release().split(".");

        return Number(Oe.versions.node.split(".")[0]) >= 8 && Number(_e16[0]) >= 10 && Number(_e16[2]) >= 10586 ? Number(_e16[2]) >= 14931 ? 3 : 2 : 1;
      }

      if ("CI" in Wr) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function (e) {
        return e in Wr;
      }) || "codeship" === Wr.CI_NAME ? 1 : t;
      if ("TEAMCITY_VERSION" in Wr) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Wr.TEAMCITY_VERSION) ? 1 : 0;
      if ("truecolor" === Wr.COLORTERM) return 3;

      if ("TERM_PROGRAM" in Wr) {
        var _e17 = parseInt((Wr.TERM_PROGRAM_VERSION || "").split(".")[0], 10);

        switch (Wr.TERM_PROGRAM) {
          case "iTerm.app":
            return _e17 >= 3 ? 3 : 2;

          case "Apple_Terminal":
            return 2;
        }
      }

      return /-256(color)?$/i.test(Wr.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Wr.TERM) || "COLORTERM" in Wr ? 1 : (Wr.TERM, t);
    }(e));
  }

  $r("no-color") || $r("no-colors") || $r("color=false") ? Ur = !1 : ($r("color") || $r("colors") || $r("color=true") || $r("color=always")) && (Ur = !0), "FORCE_COLOR" in Wr && (Ur = 0 === Wr.FORCE_COLOR.length || 0 !== parseInt(Wr.FORCE_COLOR, 10));
  var zr = {
    supportsColor: Jr,
    stdout: Jr(Oe.stdout),
    stderr: Jr(Oe.stderr)
  };
  var Hr = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
      Gr = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
      Xr = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
      Yr = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
      Kr = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1b"], ["a", "\x07"]]);

  function Qr(e) {
    return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : Kr.get(e) || e;
  }

  function Zr(e, t) {
    var n = [],
        r = t.trim().split(/\s*,\s*/g);
    var o;

    var _iterator6 = _createForOfIteratorHelper(r),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _t18 = _step6.value;

        if (isNaN(_t18)) {
          if (!(o = _t18.match(Xr))) throw new Error("Invalid Chalk template style argument: ".concat(_t18, " (in style '").concat(e, "')"));
          n.push(o[2].replace(Yr, function (e, t, n) {
            return t ? Qr(t) : n;
          }));
        } else n.push(Number(_t18));
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    return n;
  }

  function eo(e) {
    Gr.lastIndex = 0;
    var t = [];
    var n;

    for (; null !== (n = Gr.exec(e));) {
      var _e18 = n[1];

      if (n[2]) {
        var _r17 = Zr(_e18, n[2]);

        t.push([_e18].concat(_r17));
      } else t.push([_e18]);
    }

    return t;
  }

  function to(e, t) {
    var n = {};

    var _iterator7 = _createForOfIteratorHelper(t),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _e20 = _step7.value;

        var _iterator8 = _createForOfIteratorHelper(_e20.styles),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _t19 = _step8.value;
            n[_t19[0]] = _e20.inverse ? null : _t19.slice(1);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    var r = e;

    for (var _i9 = 0, _Object$keys4 = Object.keys(n); _i9 < _Object$keys4.length; _i9++) {
      var _e19 = _Object$keys4[_i9];

      if (Array.isArray(n[_e19])) {
        if (!(_e19 in r)) throw new Error("Unknown Chalk style: ".concat(_e19));
        r = n[_e19].length > 0 ? r[_e19].apply(r, n[_e19]) : r[_e19];
      }
    }

    return r;
  }

  var no = function no(e, t) {
    var n = [],
        r = [];
    var o = [];

    if (t.replace(Hr, function (t, u, i, a, s, c) {
      if (u) o.push(Qr(u));else if (a) {
        var _t20 = o.join("");

        o = [], r.push(0 === n.length ? _t20 : to(e, n)(_t20)), n.push({
          inverse: i,
          styles: eo(a)
        });
      } else if (s) {
        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
        r.push(to(e, n)(o.join(""))), o = [], n.pop();
      } else o.push(c);
    }), r.push(o.join("")), n.length > 0) {
      var _e21 = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");

      throw new Error(_e21);
    }

    return r.join("");
  },
      ro = je(function (e) {
    var t = zr.stdout,
        n = "win32" === Oe.platform && !(Oe.env.TERM || "").toLowerCase().startsWith("xterm"),
        r = ["ansi", "ansi", "ansi256", "ansi16m"],
        o = new Set(["gray"]),
        u = Object.create(null);

    function i(e, n) {
      n = n || {};
      var r = t ? t.level : 0;
      e.level = void 0 === n.level ? r : n.level, e.enabled = "enabled" in n ? n.enabled : e.level > 0;
    }

    function a(e) {
      if (!this || !(this instanceof a) || this.template) {
        var _t21 = {};
        return i(_t21, e), _t21.template = function () {
          var e = [].slice.call(arguments);
          return p.apply(null, [_t21.template].concat(e));
        }, Object.setPrototypeOf(_t21, a.prototype), Object.setPrototypeOf(_t21.template, _t21), _t21.template.constructor = a, _t21.template;
      }

      i(this, e);
    }

    n && (Vr.blue.open = "\x1b[94m");

    var _loop2 = function _loop2() {
      var e = _Object$keys5[_i10];
      Vr[e].closeRe = new RegExp(Pr(Vr[e].close), "g"), u[e] = {
        get: function get() {
          var t = Vr[e];
          return c.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e);
        }
      };
    };

    for (var _i10 = 0, _Object$keys5 = Object.keys(Vr); _i10 < _Object$keys5.length; _i10++) {
      _loop2();
    }

    u.visible = {
      get: function get() {
        return c.call(this, this._styles || [], !0, "visible");
      }
    }, Vr.color.closeRe = new RegExp(Pr(Vr.color.close), "g");

    var _loop3 = function _loop3() {
      var e = _Object$keys6[_i11];
      o.has(e) || (u[e] = {
        get: function get() {
          var t = this.level;
          return function () {
            var n = Vr.color[r[t]][e].apply(null, arguments),
                o = {
              open: n,
              close: Vr.color.close,
              closeRe: Vr.color.closeRe
            };
            return c.call(this, this._styles ? this._styles.concat(o) : [o], this._empty, e);
          };
        }
      });
    };

    for (var _i11 = 0, _Object$keys6 = Object.keys(Vr.color.ansi); _i11 < _Object$keys6.length; _i11++) {
      _loop3();
    }

    Vr.bgColor.closeRe = new RegExp(Pr(Vr.bgColor.close), "g");

    var _loop4 = function _loop4() {
      var e = _Object$keys7[_i12];
      if (o.has(e)) return "continue";
      u["bg" + e[0].toUpperCase() + e.slice(1)] = {
        get: function get() {
          var t = this.level;
          return function () {
            var n = Vr.bgColor[r[t]][e].apply(null, arguments),
                o = {
              open: n,
              close: Vr.bgColor.close,
              closeRe: Vr.bgColor.closeRe
            };
            return c.call(this, this._styles ? this._styles.concat(o) : [o], this._empty, e);
          };
        }
      };
    };

    for (var _i12 = 0, _Object$keys7 = Object.keys(Vr.bgColor.ansi); _i12 < _Object$keys7.length; _i12++) {
      var _ret = _loop4();

      if (_ret === "continue") continue;
    }

    var s = Object.defineProperties(function () {}, u);

    function c(e, t, n) {
      var r = function r() {
        return l.apply(r, arguments);
      };

      r._styles = e, r._empty = t;
      var o = this;
      return Object.defineProperty(r, "level", {
        enumerable: !0,
        get: function get() {
          return o.level;
        },
        set: function set(e) {
          o.level = e;
        }
      }), Object.defineProperty(r, "enabled", {
        enumerable: !0,
        get: function get() {
          return o.enabled;
        },
        set: function set(e) {
          o.enabled = e;
        }
      }), r.hasGrey = this.hasGrey || "gray" === n || "grey" === n, r.__proto__ = s, r;
    }

    function l() {
      var e = arguments,
          t = e.length;
      var r = String(arguments[0]);
      if (0 === t) return "";
      if (t > 1) for (var _n17 = 1; _n17 < t; _n17++) {
        r += " " + e[_n17];
      }
      if (!this.enabled || this.level <= 0 || !r) return this._empty ? "" : r;
      var o = Vr.dim.open;
      n && this.hasGrey && (Vr.dim.open = "");

      var _iterator9 = _createForOfIteratorHelper(this._styles.slice().reverse()),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _e22 = _step9.value;
          r = _e22.open + r.replace(_e22.closeRe, _e22.open) + _e22.close, r = r.replace(/\r?\n/g, "".concat(_e22.close, "$&").concat(_e22.open));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return Vr.dim.open = o, r;
    }

    function p(e, t) {
      if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");
      var n = [].slice.call(arguments, 2),
          r = [t.raw[0]];

      for (var _e23 = 1; _e23 < t.length; _e23++) {
        r.push(String(n[_e23 - 1]).replace(/[{}\\]/g, "\\$&")), r.push(String(t.raw[_e23]));
      }

      return no(e, r.join(""));
    }

    Object.defineProperties(a.prototype, u), e.exports = a(), e.exports.supportsColor = t, e.exports.default = e.exports;
  }),
      oo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.commonDeprecatedHandler = function (e, t, _ref10) {
      var n = _ref10.descriptor;
      var r = ["".concat(ro.default.yellow("string" == typeof e ? n.key(e) : n.pair(e)), " is deprecated")];
      return t && r.push("we now treat it as ".concat(ro.default.blue("string" == typeof t ? n.key(t) : n.pair(t)))), r.join("; ") + ".";
    };
  }),
      uo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(oo, t);
  }),
      io = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.commonInvalidHandler = function (e, t, n) {
      return ["Invalid ".concat(ro.default.red(n.descriptor.key(e)), " value."), "Expected ".concat(ro.default.blue(n.schemas[e].expected(n)), ","), "but received ".concat(ro.default.red(n.descriptor.value(t)), ".")].join(" ");
    };
  }),
      ao = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(io, t);
  }),
      so = [],
      co = [],
      lo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.levenUnknownHandler = function (e, t, _ref11) {
      var n = _ref11.descriptor,
          r = _ref11.logger,
          o = _ref11.schemas;
      var u = ["Ignored unknown option ".concat(ro.default.yellow(n.pair({
        key: e,
        value: t
      })), ".")],
          i = Object.keys(o).sort().find(function (t) {
        return function (e, t) {
          if (e === t) return 0;
          var n = e;
          e.length > t.length && (e = t, t = n);
          var r = e.length,
              o = t.length;
          if (0 === r) return o;
          if (0 === o) return r;

          for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-o);) {
            r--, o--;
          }

          if (0 === r) return o;

          for (var u, i, a, s, c = 0; c < r && e.charCodeAt(c) === t.charCodeAt(c);) {
            c++;
          }

          if (o -= c, 0 == (r -= c)) return o;

          for (var l = 0, p = 0; l < r;) {
            co[c + l] = e.charCodeAt(c + l), so[l] = ++l;
          }

          for (; p < o;) {
            for (u = t.charCodeAt(c + p), a = p++, i = p, l = 0; l < r; l++) {
              s = u === co[c + l] ? a : a + 1, a = so[l], i = so[l] = a > i ? s > i ? i + 1 : s : s > a ? a + 1 : s;
            }
          }

          return i;
        }(e, t) < 3;
      });
      i && u.push("Did you mean ".concat(ro.default.blue(n.key(i)), "?")), r.warn(u.join(" "));
    };
  }),
      po = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(lo, t);
  }),
      fo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(uo, t), Tr.__exportStar(ao, t), Tr.__exportStar(po, t);
  }),
      ho = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];

    function r(e, t) {
      var r = new e(t),
          i = Object.create(r);

      var _iterator10 = _createForOfIteratorHelper(n),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _e24 = _step10.value;
          _e24 in t && (i[_e24] = u(t[_e24], r, o.prototype[_e24].length));
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return i;
    }

    t.createSchema = r;

    var o = /*#__PURE__*/function () {
      function o(e) {
        _classCallCheck(this, o);

        this.name = e.name;
      }

      _createClass(o, [{
        key: "default",
        value: function _default(e) {}
      }, {
        key: "expected",
        value: function expected(e) {
          return "nothing";
        }
      }, {
        key: "validate",
        value: function validate(e, t) {
          return !1;
        }
      }, {
        key: "deprecated",
        value: function deprecated(e, t) {
          return !1;
        }
      }, {
        key: "forward",
        value: function forward(e, t) {}
      }, {
        key: "redirect",
        value: function redirect(e, t) {}
      }, {
        key: "overlap",
        value: function overlap(e, t, n) {
          return e;
        }
      }, {
        key: "preprocess",
        value: function preprocess(e, t) {
          return e;
        }
      }, {
        key: "postprocess",
        value: function postprocess(e, t) {
          return e;
        }
      }], [{
        key: "create",
        value: function create(e) {
          return r(this, e);
        }
      }]);

      return o;
    }();

    function u(e, t, n) {
      return "function" == typeof e ? function () {
        for (var _len2 = arguments.length, r = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          r[_key2] = arguments[_key2];
        }

        return e.apply(void 0, _toConsumableArray(r.slice(0, n - 1)).concat([t], _toConsumableArray(r.slice(n - 1))));
      } : function () {
        return e;
      };
    }

    t.Schema = o;
  }),
      mo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_ho$Schema) {
      _inherits(n, _ho$Schema);

      var _super4 = _createSuper(n);

      function n(e) {
        var _this;

        _classCallCheck(this, n);

        _this = _super4.call(this, e), _this._sourceName = e.sourceName;
        return _this;
      }

      _createClass(n, [{
        key: "expected",
        value: function expected(e) {
          return e.schemas[this._sourceName].expected(e);
        }
      }, {
        key: "validate",
        value: function validate(e, t) {
          return t.schemas[this._sourceName].validate(e, t);
        }
      }, {
        key: "redirect",
        value: function redirect(e, t) {
          return this._sourceName;
        }
      }]);

      return n;
    }(ho.Schema);

    t.AliasSchema = n;
  }),
      go = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_ho$Schema2) {
      _inherits(n, _ho$Schema2);

      var _super5 = _createSuper(n);

      function n() {
        _classCallCheck(this, n);

        return _super5.apply(this, arguments);
      }

      _createClass(n, [{
        key: "expected",
        value: function expected() {
          return "anything";
        }
      }, {
        key: "validate",
        value: function validate() {
          return !0;
        }
      }]);

      return n;
    }(ho.Schema);

    t.AnySchema = n;
  }),
      Do = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_ho$Schema3) {
      _inherits(n, _ho$Schema3);

      var _super6 = _createSuper(n);

      function n(e) {
        var _this2;

        _classCallCheck(this, n);

        var t = e.valueSchema,
            _e$name = e.name,
            _n18 = _e$name === void 0 ? t.name : _e$name,
            r = Tr.__rest(e, ["valueSchema", "name"]);

        _this2 = _super6.call(this, Object.assign({}, r, {
          name: _n18
        })), _this2._valueSchema = t;
        return _this2;
      }

      _createClass(n, [{
        key: "expected",
        value: function expected(e) {
          return "an array of ".concat(this._valueSchema.expected(e));
        }
      }, {
        key: "validate",
        value: function validate(e, t) {
          if (!Array.isArray(e)) return !1;
          var _n19 = [];

          var _iterator11 = _createForOfIteratorHelper(e),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var _r18 = _step11.value;

              var _e25 = t.normalizeValidateResult(this._valueSchema.validate(_r18, t), _r18);

              !0 !== _e25 && _n19.push(_e25.value);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          return 0 === _n19.length || {
            value: _n19
          };
        }
      }, {
        key: "deprecated",
        value: function deprecated(e, t) {
          var _n20 = [];

          var _iterator12 = _createForOfIteratorHelper(e),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var _r19 = _step12.value;

              var _e26 = t.normalizeDeprecatedResult(this._valueSchema.deprecated(_r19, t), _r19);

              !1 !== _e26 && _n20.push.apply(_n20, _toConsumableArray(_e26.map(function (_ref12) {
                var e = _ref12.value;
                return {
                  value: [e]
                };
              })));
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }

          return _n20;
        }
      }, {
        key: "forward",
        value: function forward(e, t) {
          var _n21 = [];

          var _iterator13 = _createForOfIteratorHelper(e),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var _o5 = _step13.value;

              var _e27 = t.normalizeForwardResult(this._valueSchema.forward(_o5, t), _o5);

              _n21.push.apply(_n21, _toConsumableArray(_e27.map(r)));
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }

          return _n21;
        }
      }, {
        key: "redirect",
        value: function redirect(e, t) {
          var _n22 = [],
              o = [];

          var _iterator14 = _createForOfIteratorHelper(e),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var _u5 = _step14.value;

              var _e28 = t.normalizeRedirectResult(this._valueSchema.redirect(_u5, t), _u5);

              "remain" in _e28 && _n22.push(_e28.remain), o.push.apply(o, _toConsumableArray(_e28.redirect.map(r)));
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }

          return 0 === _n22.length ? {
            redirect: o
          } : {
            redirect: o,
            remain: _n22
          };
        }
      }, {
        key: "overlap",
        value: function overlap(e, t) {
          return e.concat(t);
        }
      }]);

      return n;
    }(ho.Schema);

    function r(_ref13) {
      var e = _ref13.from,
          t = _ref13.to;
      return {
        from: [e],
        to: t
      };
    }

    t.ArraySchema = n;
  }),
      yo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_ho$Schema4) {
      _inherits(n, _ho$Schema4);

      var _super7 = _createSuper(n);

      function n() {
        _classCallCheck(this, n);

        return _super7.apply(this, arguments);
      }

      _createClass(n, [{
        key: "expected",
        value: function expected() {
          return "true or false";
        }
      }, {
        key: "validate",
        value: function validate(e) {
          return "boolean" == typeof e;
        }
      }]);

      return n;
    }(ho.Schema);

    t.BooleanSchema = n;
  }),
      Eo = je(function (e, t) {
    function n(e, t) {
      return "string" == typeof e || "key" in e ? {
        from: t,
        to: e
      } : "from" in e ? {
        from: e.from,
        to: e.to
      } : {
        from: t,
        to: e.to
      };
    }

    function r(e, t) {
      return void 0 === e ? [] : Array.isArray(e) ? e.map(function (e) {
        return n(e, t);
      }) : [n(e, t)];
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.recordFromArray = function (e, t) {
      var n = Object.create(null);

      var _iterator15 = _createForOfIteratorHelper(e),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _r20 = _step15.value;
          var _e29 = _r20[t];
          if (n[_e29]) throw new Error("Duplicate ".concat(t, " ").concat(JSON.stringify(_e29)));
          n[_e29] = _r20;
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      return n;
    }, t.mapFromArray = function (e, t) {
      var n = new Map();

      var _iterator16 = _createForOfIteratorHelper(e),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var _r21 = _step16.value;
          var _e30 = _r21[t];
          if (n.has(_e30)) throw new Error("Duplicate ".concat(t, " ").concat(JSON.stringify(_e30)));
          n.set(_e30, _r21);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      return n;
    }, t.createAutoChecklist = function () {
      var e = Object.create(null);
      return function (t) {
        var n = JSON.stringify(t);
        return !!e[n] || (e[n] = !0, !1);
      };
    }, t.partition = function (e, t) {
      var n = [],
          r = [];

      var _iterator17 = _createForOfIteratorHelper(e),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var _o6 = _step17.value;
          t(_o6) ? n.push(_o6) : r.push(_o6);
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      return [n, r];
    }, t.isInt = function (e) {
      return e === Math.floor(e);
    }, t.comparePrimitive = function (e, t) {
      if (e === t) return 0;

      var n = _typeof(e),
          r = _typeof(t),
          o = ["undefined", "object", "boolean", "number", "string"];

      return n !== r ? o.indexOf(n) - o.indexOf(r) : "string" !== n ? Number(e) - Number(t) : e.localeCompare(t);
    }, t.normalizeDefaultResult = function (e) {
      return void 0 === e ? {} : e;
    }, t.normalizeValidateResult = function (e, t) {
      return !0 === e || (!1 === e ? {
        value: t
      } : e);
    }, t.normalizeDeprecatedResult = function (e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      return !1 !== e && (!0 === e ? !!n || [{
        value: t
      }] : "value" in e ? [e] : 0 !== e.length && e);
    }, t.normalizeTransferResult = n, t.normalizeForwardResult = r, t.normalizeRedirectResult = function (e, t) {
      var n = r("object" == _typeof(e) && "redirect" in e ? e.redirect : e, t);
      return 0 === n.length ? {
        remain: t,
        redirect: n
      } : "object" == _typeof(e) && "remain" in e ? {
        remain: e.remain,
        redirect: n
      } : {
        redirect: n
      };
    };
  }),
      Co = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_ho$Schema5) {
      _inherits(n, _ho$Schema5);

      var _super8 = _createSuper(n);

      function n(e) {
        var _this3;

        _classCallCheck(this, n);

        _this3 = _super8.call(this, e), _this3._choices = Eo.mapFromArray(e.choices.map(function (e) {
          return e && "object" == _typeof(e) ? e : {
            value: e
          };
        }), "value");
        return _this3;
      }

      _createClass(n, [{
        key: "expected",
        value: function expected(_ref14) {
          var _this4 = this;

          var e = _ref14.descriptor;

          var t = Array.from(this._choices.keys()).map(function (e) {
            return _this4._choices.get(e);
          }).filter(function (e) {
            return !e.deprecated;
          }).map(function (e) {
            return e.value;
          }).sort(Eo.comparePrimitive).map(e.value),
              _n23 = t.slice(0, -2),
              r = t.slice(-2);

          return _n23.concat(r.join(" or ")).join(", ");
        }
      }, {
        key: "validate",
        value: function validate(e) {
          return this._choices.has(e);
        }
      }, {
        key: "deprecated",
        value: function deprecated(e) {
          var t = this._choices.get(e);

          return !(!t || !t.deprecated) && {
            value: e
          };
        }
      }, {
        key: "forward",
        value: function forward(e) {
          var t = this._choices.get(e);

          return t ? t.forward : void 0;
        }
      }, {
        key: "redirect",
        value: function redirect(e) {
          var t = this._choices.get(e);

          return t ? t.redirect : void 0;
        }
      }]);

      return n;
    }(ho.Schema);

    t.ChoiceSchema = n;
  }),
      bo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_ho$Schema6) {
      _inherits(n, _ho$Schema6);

      var _super9 = _createSuper(n);

      function n() {
        _classCallCheck(this, n);

        return _super9.apply(this, arguments);
      }

      _createClass(n, [{
        key: "expected",
        value: function expected() {
          return "a number";
        }
      }, {
        key: "validate",
        value: function validate(e, t) {
          return "number" == typeof e;
        }
      }]);

      return n;
    }(ho.Schema);

    t.NumberSchema = n;
  }),
      vo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_bo$NumberSchema) {
      _inherits(n, _bo$NumberSchema);

      var _super10 = _createSuper(n);

      function n() {
        _classCallCheck(this, n);

        return _super10.apply(this, arguments);
      }

      _createClass(n, [{
        key: "expected",
        value: function expected() {
          return "an integer";
        }
      }, {
        key: "validate",
        value: function validate(e, t) {
          return !0 === t.normalizeValidateResult(_get(_getPrototypeOf(n.prototype), "validate", this).call(this, e, t), e) && Eo.isInt(e);
        }
      }]);

      return n;
    }(bo.NumberSchema);

    t.IntegerSchema = n;
  }),
      Ao = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_ho$Schema7) {
      _inherits(n, _ho$Schema7);

      var _super11 = _createSuper(n);

      function n() {
        _classCallCheck(this, n);

        return _super11.apply(this, arguments);
      }

      _createClass(n, [{
        key: "expected",
        value: function expected() {
          return "a string";
        }
      }, {
        key: "validate",
        value: function validate(e) {
          return "string" == typeof e;
        }
      }]);

      return n;
    }(ho.Schema);

    t.StringSchema = n;
  }),
      Fo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(mo, t), Tr.__exportStar(go, t), Tr.__exportStar(Do, t), Tr.__exportStar(yo, t), Tr.__exportStar(Co, t), Tr.__exportStar(vo, t), Tr.__exportStar(bo, t), Tr.__exportStar(Ao, t);
  }),
      xo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.defaultDescriptor = Br.apiDescriptor, t.defaultUnknownHandler = lo.levenUnknownHandler, t.defaultInvalidHandler = ao.commonInvalidHandler, t.defaultDeprecatedHandler = oo.commonDeprecatedHandler;
  }),
      So = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.normalize = function (e, t, r) {
      return new n(t, r).normalize(e);
    };

    var n = /*#__PURE__*/function () {
      function n(e, t) {
        _classCallCheck(this, n);

        var _ref15 = t || {},
            _ref15$logger = _ref15.logger,
            _n24 = _ref15$logger === void 0 ? console : _ref15$logger,
            _ref15$descriptor = _ref15.descriptor,
            r = _ref15$descriptor === void 0 ? xo.defaultDescriptor : _ref15$descriptor,
            _ref15$unknown = _ref15.unknown,
            o = _ref15$unknown === void 0 ? xo.defaultUnknownHandler : _ref15$unknown,
            _ref15$invalid = _ref15.invalid,
            u = _ref15$invalid === void 0 ? xo.defaultInvalidHandler : _ref15$invalid,
            _ref15$deprecated = _ref15.deprecated,
            i = _ref15$deprecated === void 0 ? xo.defaultDeprecatedHandler : _ref15$deprecated;

        this._utils = {
          descriptor: r,
          logger: _n24 || {
            warn: function warn() {}
          },
          schemas: Eo.recordFromArray(e, "name"),
          normalizeDefaultResult: Eo.normalizeDefaultResult,
          normalizeDeprecatedResult: Eo.normalizeDeprecatedResult,
          normalizeForwardResult: Eo.normalizeForwardResult,
          normalizeRedirectResult: Eo.normalizeRedirectResult,
          normalizeValidateResult: Eo.normalizeValidateResult
        }, this._unknownHandler = o, this._invalidHandler = u, this._deprecatedHandler = i, this.cleanHistory();
      }

      _createClass(n, [{
        key: "cleanHistory",
        value: function cleanHistory() {
          this._hasDeprecationWarned = Eo.createAutoChecklist();
        }
      }, {
        key: "normalize",
        value: function normalize(e) {
          var _this5 = this;

          var t = {},
              _n25 = [e],
              r = function r() {
            for (; 0 !== _n25.length;) {
              var _e31 = _n25.shift(),
                  _r22 = _this5._applyNormalization(_e31, t);

              _n25.push.apply(_n25, _toConsumableArray(_r22));
            }
          };

          r();

          for (var _i13 = 0, _Object$keys8 = Object.keys(this._utils.schemas); _i13 < _Object$keys8.length; _i13++) {
            var _e32 = _Object$keys8[_i13];
            var _r23 = this._utils.schemas[_e32];

            if (!(_e32 in t)) {
              var _t22 = Eo.normalizeDefaultResult(_r23.default(this._utils));

              "value" in _t22 && _n25.push(_defineProperty({}, _e32, _t22.value));
            }
          }

          r();

          for (var _i14 = 0, _Object$keys9 = Object.keys(this._utils.schemas); _i14 < _Object$keys9.length; _i14++) {
            var _e33 = _Object$keys9[_i14];
            var _n30 = this._utils.schemas[_e33];
            _e33 in t && (t[_e33] = _n30.postprocess(t[_e33], this._utils));
          }

          return t;
        }
      }, {
        key: "_applyNormalization",
        value: function _applyNormalization(e, t) {
          var _this6 = this;

          var _n27 = [],
              _Eo$partition = Eo.partition(Object.keys(e), function (e) {
            return e in _this6._utils.schemas;
          }),
              _Eo$partition2 = _slicedToArray(_Eo$partition, 2),
              r = _Eo$partition2[0],
              o = _Eo$partition2[1];

          var _iterator18 = _createForOfIteratorHelper(r),
              _step18;

          try {
            var _loop5 = function _loop5() {
              var o = _step18.value;
              var r = _this6._utils.schemas[o],
                  u = r.preprocess(e[o], _this6._utils),
                  i = Eo.normalizeValidateResult(r.validate(u, _this6._utils), u);

              if (!0 !== i) {
                var _e34 = i.value,
                    _t23 = _this6._invalidHandler(o, _e34, _this6._utils);

                throw "string" == typeof _t23 ? new Error(_t23) : _t23;
              }

              var a = function a(_ref16) {
                var e = _ref16.from,
                    t = _ref16.to;

                _n27.push("string" == typeof t ? _defineProperty({}, t, e) : _defineProperty({}, t.key, t.value));
              },
                  s = function s(_ref19) {
                var e = _ref19.value,
                    t = _ref19.redirectTo;

                var _n28 = Eo.normalizeDeprecatedResult(r.deprecated(e, _this6._utils), u, !0);

                if (!1 !== _n28) if (!0 === _n28) _this6._hasDeprecationWarned(o) || _this6._utils.logger.warn(_this6._deprecatedHandler(o, t, _this6._utils));else {
                  var _iterator20 = _createForOfIteratorHelper(_n28),
                      _step20;

                  try {
                    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                      var _e35 = _step20.value.value;
                      var _n31 = {
                        key: o,
                        value: _e35
                      };

                      if (!_this6._hasDeprecationWarned(_n31)) {
                        var _r24 = "string" == typeof t ? {
                          key: t,
                          value: _e35
                        } : t;

                        _this6._utils.logger.warn(_this6._deprecatedHandler(_n31, _r24, _this6._utils));
                      }
                    }
                  } catch (err) {
                    _iterator20.e(err);
                  } finally {
                    _iterator20.f();
                  }
                }
              };

              Eo.normalizeForwardResult(r.forward(u, _this6._utils), u).forEach(a);
              var c = Eo.normalizeRedirectResult(r.redirect(u, _this6._utils), u);

              if (c.redirect.forEach(a), "remain" in c) {
                var _e36 = c.remain;
                t[o] = o in t ? r.overlap(t[o], _e36, _this6._utils) : _e36, s({
                  value: _e36
                });
              }

              var _iterator21 = _createForOfIteratorHelper(c.redirect),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var _step21$value = _step21.value,
                      _e37 = _step21$value.from,
                      _t24 = _step21$value.to;
                  s({
                    value: _e37,
                    redirectTo: _t24
                  });
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }
            };

            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              _loop5();
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          var _iterator19 = _createForOfIteratorHelper(o),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var _r25 = _step19.value;

              var _o7 = e[_r25],
                  _u6 = this._unknownHandler(_r25, _o7, this._utils);

              if (_u6) for (var _i15 = 0, _Object$keys10 = Object.keys(_u6); _i15 < _Object$keys10.length; _i15++) {
                var _e38 = _Object$keys10[_i15];

                var _r26 = _defineProperty({}, _e38, _u6[_e38]);

                _e38 in this._utils.schemas ? _n27.push(_r26) : Object.assign(t, _r26);
              }
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }

          return _n27;
        }
      }]);

      return n;
    }();

    t.Normalizer = n;
  }),
      wo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(Nr, t), Tr.__exportStar(fo, t), Tr.__exportStar(Fo, t), Tr.__exportStar(So, t), Tr.__exportStar(ho, t);
  });

  var To = [],
      Bo = [],
      No = function No(e, t) {
    if (e === t) return 0;
    var n = e;
    e.length > t.length && (e = t, t = n);
    var r = e.length,
        o = t.length;

    for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-o);) {
      r--, o--;
    }

    var u,
        i,
        a,
        s,
        c = 0;

    for (; c < r && e.charCodeAt(c) === t.charCodeAt(c);) {
      c++;
    }

    if (r -= c, o -= c, 0 === r) return o;
    var l = 0,
        p = 0;

    for (; l < r;) {
      Bo[l] = e.charCodeAt(c + l), To[l] = ++l;
    }

    for (; p < o;) {
      for (u = t.charCodeAt(c + p), a = p++, i = p, l = 0; l < r; l++) {
        s = u === Bo[l] ? a : a + 1, a = To[l], i = To[l] = a > i ? s > i ? i + 1 : s : s > a ? a + 1 : s;
      }
    }

    return i;
  };

  var ko = No,
      Po = No;
  ko.default = Po;
  var Oo = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
  var Io = {};

  for (var _i16 = 0, _Object$keys11 = Object.keys(Oo); _i16 < _Object$keys11.length; _i16++) {
    var _e39 = _Object$keys11[_i16];
    Io[Oo[_e39]] = _e39;
  }

  var Lo = {
    rgb: {
      channels: 3,
      labels: "rgb"
    },
    hsl: {
      channels: 3,
      labels: "hsl"
    },
    hsv: {
      channels: 3,
      labels: "hsv"
    },
    hwb: {
      channels: 3,
      labels: "hwb"
    },
    cmyk: {
      channels: 4,
      labels: "cmyk"
    },
    xyz: {
      channels: 3,
      labels: "xyz"
    },
    lab: {
      channels: 3,
      labels: "lab"
    },
    lch: {
      channels: 3,
      labels: "lch"
    },
    hex: {
      channels: 1,
      labels: ["hex"]
    },
    keyword: {
      channels: 1,
      labels: ["keyword"]
    },
    ansi16: {
      channels: 1,
      labels: ["ansi16"]
    },
    ansi256: {
      channels: 1,
      labels: ["ansi256"]
    },
    hcg: {
      channels: 3,
      labels: ["h", "c", "g"]
    },
    apple: {
      channels: 3,
      labels: ["r16", "g16", "b16"]
    },
    gray: {
      channels: 1,
      labels: ["gray"]
    }
  };
  var Mo = Lo;

  for (var _i17 = 0, _Object$keys12 = Object.keys(Lo); _i17 < _Object$keys12.length; _i17++) {
    var _e40 = _Object$keys12[_i17];
    if (!("channels" in Lo[_e40])) throw new Error("missing channels property: " + _e40);
    if (!("labels" in Lo[_e40])) throw new Error("missing channel labels property: " + _e40);
    if (Lo[_e40].labels.length !== Lo[_e40].channels) throw new Error("channel and label counts mismatch: " + _e40);
    var _Lo$_e = Lo[_e40],
        _t25 = _Lo$_e.channels,
        _n32 = _Lo$_e.labels;
    delete Lo[_e40].channels, delete Lo[_e40].labels, Object.defineProperty(Lo[_e40], "channels", {
      value: _t25
    }), Object.defineProperty(Lo[_e40], "labels", {
      value: _n32
    });
  }

  function jo(e) {
    var t = function () {
      var e = {},
          t = Object.keys(Mo);

      for (var _n33 = t.length, _r28 = 0; _r28 < _n33; _r28++) {
        e[t[_r28]] = {
          distance: -1,
          parent: null
        };
      }

      return e;
    }(),
        n = [e];

    for (t[e].distance = 0; n.length;) {
      var _e41 = n.pop(),
          _r29 = Object.keys(Mo[_e41]);

      for (var _o8 = _r29.length, _u7 = 0; _u7 < _o8; _u7++) {
        var _o9 = _r29[_u7],
            _i18 = t[_o9];
        -1 === _i18.distance && (_i18.distance = t[_e41].distance + 1, _i18.parent = _e41, n.unshift(_o9));
      }
    }

    return t;
  }

  function _o(e, t) {
    return function (n) {
      return t(e(n));
    };
  }

  function Ro(e, t) {
    var n = [t[e].parent, e];
    var r = Mo[t[e].parent][e],
        o = t[e].parent;

    for (; t[o].parent;) {
      n.unshift(t[o].parent), r = _o(Mo[t[o].parent][o], r), o = t[o].parent;
    }

    return r.conversion = n, r;
  }

  Lo.rgb.hsl = function (e) {
    var t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        o = Math.min(t, n, r),
        u = Math.max(t, n, r),
        i = u - o;
    var a, s;
    u === o ? a = 0 : t === u ? a = (n - r) / i : n === u ? a = 2 + (r - t) / i : r === u && (a = 4 + (t - n) / i), a = Math.min(60 * a, 360), a < 0 && (a += 360);
    var c = (o + u) / 2;
    return s = u === o ? 0 : c <= .5 ? i / (u + o) : i / (2 - u - o), [a, 100 * s, 100 * c];
  }, Lo.rgb.hsv = function (e) {
    var t, n, r, o, u;

    var i = e[0] / 255,
        a = e[1] / 255,
        s = e[2] / 255,
        c = Math.max(i, a, s),
        l = c - Math.min(i, a, s),
        p = function p(e) {
      return (c - e) / 6 / l + .5;
    };

    return 0 === l ? (o = 0, u = 0) : (u = l / c, t = p(i), n = p(a), r = p(s), i === c ? o = r - n : a === c ? o = 1 / 3 + t - r : s === c && (o = 2 / 3 + n - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * u, 100 * c];
  }, Lo.rgb.hwb = function (e) {
    var t = e[0],
        n = e[1];
    var r = e[2];
    var o = Lo.rgb.hsl(e)[0],
        u = 1 / 255 * Math.min(t, Math.min(n, r));
    return r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)), [o, 100 * u, 100 * r];
  }, Lo.rgb.cmyk = function (e) {
    var t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        o = Math.min(1 - t, 1 - n, 1 - r);
    return [100 * ((1 - t - o) / (1 - o) || 0), 100 * ((1 - n - o) / (1 - o) || 0), 100 * ((1 - r - o) / (1 - o) || 0), 100 * o];
  }, Lo.rgb.keyword = function (e) {
    var t = Io[e];
    if (t) return t;
    var n,
        r = 1 / 0;

    for (var _i19 = 0, _Object$keys13 = Object.keys(Oo); _i19 < _Object$keys13.length; _i19++) {
      var _t26 = _Object$keys13[_i19];

      var _i20 = (u = Oo[_t26], Math.pow((o = e)[0] - u[0], 2) + Math.pow(o[1] - u[1], 2) + Math.pow(o[2] - u[2], 2));

      _i20 < r && (r = _i20, n = _t26);
    }

    var o, u;
    return n;
  }, Lo.keyword.rgb = function (e) {
    return Oo[e];
  }, Lo.rgb.xyz = function (e) {
    var t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255;
    t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92;
    return [100 * (.4124 * t + .3576 * n + .1805 * r), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
  }, Lo.rgb.lab = function (e) {
    var t = Lo.rgb.xyz(e);
    var n = t[0],
        r = t[1],
        o = t[2];
    n /= 95.047, r /= 100, o /= 108.883, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116;
    return [116 * r - 16, 500 * (n - r), 200 * (r - o)];
  }, Lo.hsl.rgb = function (e) {
    var t = e[0] / 360,
        n = e[1] / 100,
        r = e[2] / 100;
    var o, u, i;
    if (0 === n) return i = 255 * r, [i, i, i];
    o = r < .5 ? r * (1 + n) : r + n - r * n;
    var a = 2 * r - o,
        s = [0, 0, 0];

    for (var _e42 = 0; _e42 < 3; _e42++) {
      u = t + 1 / 3 * -(_e42 - 1), u < 0 && u++, u > 1 && u--, i = 6 * u < 1 ? a + 6 * (o - a) * u : 2 * u < 1 ? o : 3 * u < 2 ? a + (o - a) * (2 / 3 - u) * 6 : a, s[_e42] = 255 * i;
    }

    return s;
  }, Lo.hsl.hsv = function (e) {
    var t = e[0];
    var n = e[1] / 100,
        r = e[2] / 100,
        o = n;
    var u = Math.max(r, .01);
    r *= 2, n *= r <= 1 ? r : 2 - r, o *= u <= 1 ? u : 2 - u;
    return [t, 100 * (0 === r ? 2 * o / (u + o) : 2 * n / (r + n)), 100 * ((r + n) / 2)];
  }, Lo.hsv.rgb = function (e) {
    var t = e[0] / 60,
        n = e[1] / 100;
    var r = e[2] / 100;
    var o = Math.floor(t) % 6,
        u = t - Math.floor(t),
        i = 255 * r * (1 - n),
        a = 255 * r * (1 - n * u),
        s = 255 * r * (1 - n * (1 - u));

    switch (r *= 255, o) {
      case 0:
        return [r, s, i];

      case 1:
        return [a, r, i];

      case 2:
        return [i, r, s];

      case 3:
        return [i, a, r];

      case 4:
        return [s, i, r];

      case 5:
        return [r, i, a];
    }
  }, Lo.hsv.hsl = function (e) {
    var t = e[0],
        n = e[1] / 100,
        r = e[2] / 100,
        o = Math.max(r, .01);
    var u, i;
    i = (2 - n) * r;
    var a = (2 - n) * o;
    return u = n * o, u /= a <= 1 ? a : 2 - a, u = u || 0, i /= 2, [t, 100 * u, 100 * i];
  }, Lo.hwb.rgb = function (e) {
    var t = e[0] / 360;
    var n = e[1] / 100,
        r = e[2] / 100;
    var o = n + r;
    var u;
    o > 1 && (n /= o, r /= o);
    var i = Math.floor(6 * t),
        a = 1 - r;
    u = 6 * t - i, 0 != (1 & i) && (u = 1 - u);
    var s = n + u * (a - n);
    var c, l, p;

    switch (i) {
      default:
      case 6:
      case 0:
        c = a, l = s, p = n;
        break;

      case 1:
        c = s, l = a, p = n;
        break;

      case 2:
        c = n, l = a, p = s;
        break;

      case 3:
        c = n, l = s, p = a;
        break;

      case 4:
        c = s, l = n, p = a;
        break;

      case 5:
        c = a, l = n, p = s;
    }

    return [255 * c, 255 * l, 255 * p];
  }, Lo.cmyk.rgb = function (e) {
    var t = e[0] / 100,
        n = e[1] / 100,
        r = e[2] / 100,
        o = e[3] / 100;
    return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))];
  }, Lo.xyz.rgb = function (e) {
    var t = e[0] / 100,
        n = e[1] / 100,
        r = e[2] / 100;
    var o, u, i;
    return o = 3.2406 * t + -1.5372 * n + -.4986 * r, u = -.9689 * t + 1.8758 * n + .0415 * r, i = .0557 * t + -.204 * n + 1.057 * r, o = o > .0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - .055 : 12.92 * o, u = u > .0031308 ? 1.055 * Math.pow(u, 1 / 2.4) - .055 : 12.92 * u, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, o = Math.min(Math.max(0, o), 1), u = Math.min(Math.max(0, u), 1), i = Math.min(Math.max(0, i), 1), [255 * o, 255 * u, 255 * i];
  }, Lo.xyz.lab = function (e) {
    var t = e[0],
        n = e[1],
        r = e[2];
    t /= 95.047, n /= 100, r /= 108.883, t = t > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116;
    return [116 * n - 16, 500 * (t - n), 200 * (n - r)];
  }, Lo.lab.xyz = function (e) {
    var t, n, r;
    n = (e[0] + 16) / 116, t = e[1] / 500 + n, r = n - e[2] / 200;
    var o = Math.pow(n, 3),
        u = Math.pow(t, 3),
        i = Math.pow(r, 3);
    return n = o > .008856 ? o : (n - 16 / 116) / 7.787, t = u > .008856 ? u : (t - 16 / 116) / 7.787, r = i > .008856 ? i : (r - 16 / 116) / 7.787, t *= 95.047, n *= 100, r *= 108.883, [t, n, r];
  }, Lo.lab.lch = function (e) {
    var t = e[0],
        n = e[1],
        r = e[2];
    var o;
    o = 360 * Math.atan2(r, n) / 2 / Math.PI, o < 0 && (o += 360);
    return [t, Math.sqrt(n * n + r * r), o];
  }, Lo.lch.lab = function (e) {
    var t = e[0],
        n = e[1],
        r = e[2] / 360 * 2 * Math.PI;
    return [t, n * Math.cos(r), n * Math.sin(r)];
  }, Lo.rgb.ansi16 = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var _e43 = _slicedToArray(e, 3),
        n = _e43[0],
        r = _e43[1],
        o = _e43[2];

    var u = null === t ? Lo.rgb.hsv(e)[2] : t;
    if (u = Math.round(u / 50), 0 === u) return 30;
    var i = 30 + (Math.round(o / 255) << 2 | Math.round(r / 255) << 1 | Math.round(n / 255));
    return 2 === u && (i += 60), i;
  }, Lo.hsv.ansi16 = function (e) {
    return Lo.rgb.ansi16(Lo.hsv.rgb(e), e[2]);
  }, Lo.rgb.ansi256 = function (e) {
    var t = e[0],
        n = e[1],
        r = e[2];
    if (t === n && n === r) return t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232;
    return 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
  }, Lo.ansi16.rgb = function (e) {
    var t = e % 10;
    if (0 === t || 7 === t) return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
    var n = .5 * (1 + ~~(e > 50));
    return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
  }, Lo.ansi256.rgb = function (e) {
    if (e >= 232) {
      var _t27 = 10 * (e - 232) + 8;

      return [_t27, _t27, _t27];
    }

    var t;
    e -= 16;
    return [Math.floor(e / 36) / 5 * 255, Math.floor((t = e % 36) / 6) / 5 * 255, t % 6 / 5 * 255];
  }, Lo.rgb.hex = function (e) {
    var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
    return "000000".substring(t.length) + t;
  }, Lo.hex.rgb = function (e) {
    var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!t) return [0, 0, 0];
    var n = t[0];
    3 === t[0].length && (n = n.split("").map(function (e) {
      return e + e;
    }).join(""));
    var r = parseInt(n, 16);
    return [r >> 16 & 255, r >> 8 & 255, 255 & r];
  }, Lo.rgb.hcg = function (e) {
    var t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        o = Math.max(Math.max(t, n), r),
        u = Math.min(Math.min(t, n), r),
        i = o - u;
    var a, s;
    return a = i < 1 ? u / (1 - i) : 0, s = i <= 0 ? 0 : o === t ? (n - r) / i % 6 : o === n ? 2 + (r - t) / i : 4 + (t - n) / i, s /= 6, s %= 1, [360 * s, 100 * i, 100 * a];
  }, Lo.hsl.hcg = function (e) {
    var t = e[1] / 100,
        n = e[2] / 100,
        r = n < .5 ? 2 * t * n : 2 * t * (1 - n);
    var o = 0;
    return r < 1 && (o = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * o];
  }, Lo.hsv.hcg = function (e) {
    var t = e[1] / 100,
        n = e[2] / 100,
        r = t * n;
    var o = 0;
    return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o];
  }, Lo.hcg.rgb = function (e) {
    var t = e[0] / 360,
        n = e[1] / 100,
        r = e[2] / 100;
    if (0 === n) return [255 * r, 255 * r, 255 * r];
    var o = [0, 0, 0],
        u = t % 1 * 6,
        i = u % 1,
        a = 1 - i;
    var s = 0;

    switch (Math.floor(u)) {
      case 0:
        o[0] = 1, o[1] = i, o[2] = 0;
        break;

      case 1:
        o[0] = a, o[1] = 1, o[2] = 0;
        break;

      case 2:
        o[0] = 0, o[1] = 1, o[2] = i;
        break;

      case 3:
        o[0] = 0, o[1] = a, o[2] = 1;
        break;

      case 4:
        o[0] = i, o[1] = 0, o[2] = 1;
        break;

      default:
        o[0] = 1, o[1] = 0, o[2] = a;
    }

    return s = (1 - n) * r, [255 * (n * o[0] + s), 255 * (n * o[1] + s), 255 * (n * o[2] + s)];
  }, Lo.hcg.hsv = function (e) {
    var t = e[1] / 100,
        n = t + e[2] / 100 * (1 - t);
    var r = 0;
    return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n];
  }, Lo.hcg.hsl = function (e) {
    var t = e[1] / 100,
        n = e[2] / 100 * (1 - t) + .5 * t;
    var r = 0;
    return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n];
  }, Lo.hcg.hwb = function (e) {
    var t = e[1] / 100,
        n = t + e[2] / 100 * (1 - t);
    return [e[0], 100 * (n - t), 100 * (1 - n)];
  }, Lo.hwb.hcg = function (e) {
    var t = e[1] / 100,
        n = 1 - e[2] / 100,
        r = n - t;
    var o = 0;
    return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o];
  }, Lo.apple.rgb = function (e) {
    return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
  }, Lo.rgb.apple = function (e) {
    return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
  }, Lo.gray.rgb = function (e) {
    return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
  }, Lo.gray.hsl = function (e) {
    return [0, 0, e[0]];
  }, Lo.gray.hsv = Lo.gray.hsl, Lo.gray.hwb = function (e) {
    return [0, 100, e[0]];
  }, Lo.gray.cmyk = function (e) {
    return [0, 0, 0, e[0]];
  }, Lo.gray.lab = function (e) {
    return [e[0], 0, 0];
  }, Lo.gray.hex = function (e) {
    var t = 255 & Math.round(e[0] / 100 * 255),
        n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
    return "000000".substring(n.length) + n;
  }, Lo.rgb.gray = function (e) {
    return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
  };
  var Vo = {};
  Object.keys(Mo).forEach(function (e) {
    Vo[e] = {}, Object.defineProperty(Vo[e], "channels", {
      value: Mo[e].channels
    }), Object.defineProperty(Vo[e], "labels", {
      value: Mo[e].labels
    });

    var t = function (e) {
      var t = jo(e),
          n = {},
          r = Object.keys(t);

      for (var _e44 = r.length, _o10 = 0; _o10 < _e44; _o10++) {
        var _e45 = r[_o10];
        null !== t[_e45].parent && (n[_e45] = Ro(_e45, t));
      }

      return n;
    }(e);

    Object.keys(t).forEach(function (n) {
      var r = t[n];
      Vo[e][n] = function (e) {
        var t = function t() {
          for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            t[_key3] = arguments[_key3];
          }

          var n = t[0];
          if (null == n) return n;
          n.length > 1 && (t = n);
          var r = e(t);
          if ("object" == _typeof(r)) for (var _e46 = r.length, _t28 = 0; _t28 < _e46; _t28++) {
            r[_t28] = Math.round(r[_t28]);
          }
          return r;
        };

        return "conversion" in e && (t.conversion = e.conversion), t;
      }(r), Vo[e][n].raw = function (e) {
        var t = function t() {
          for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            t[_key4] = arguments[_key4];
          }

          var n = t[0];
          return null == n ? n : (n.length > 1 && (t = n), e(t));
        };

        return "conversion" in e && (t.conversion = e.conversion), t;
      }(r);
    });
  });

  var $o = Vo,
      qo = je(function (e) {
    var t = function t(e, _t29) {
      return function () {
        var r = e.apply(void 0, arguments);
        return "\x1b[".concat(r + _t29, "m");
      };
    },
        n = function n(e, t) {
      return function () {
        var r = e.apply(void 0, arguments);
        return "\x1b[".concat(38 + t, ";5;").concat(r, "m");
      };
    },
        r = function r(e, t) {
      return function () {
        var r = e.apply(void 0, arguments);
        return "\x1b[".concat(38 + t, ";2;").concat(r[0], ";").concat(r[1], ";").concat(r[2], "m");
      };
    },
        o = function o(e) {
      return e;
    },
        u = function u(e, t, n) {
      return [e, t, n];
    },
        i = function i(e, t, n) {
      Object.defineProperty(e, t, {
        get: function get() {
          var r = n();
          return Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0
          }), r;
        },
        enumerable: !0,
        configurable: !0
      });
    };

    var a;

    var s = function s(e, t, n, r) {
      void 0 === a && (a = $o);
      var o = r ? 10 : 0,
          u = {};

      for (var _i21 = 0, _Object$entries = Object.entries(a); _i21 < _Object$entries.length; _i21++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i21], 2),
            _r30 = _Object$entries$_i[0],
            _i22 = _Object$entries$_i[1];

        var _a3 = "ansi16" === _r30 ? "ansi" : _r30;

        _r30 === t ? u[_a3] = e(n, o) : "object" == _typeof(_i22) && (u[_a3] = e(_i22[t], o));
      }

      return u;
    };

    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: function get() {
        var e = new Map(),
            a = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            blackBright: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        a.color.gray = a.color.blackBright, a.bgColor.bgGray = a.bgColor.bgBlackBright, a.color.grey = a.color.blackBright, a.bgColor.bgGrey = a.bgColor.bgBlackBright;

        for (var _i23 = 0, _Object$entries2 = Object.entries(a); _i23 < _Object$entries2.length; _i23++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i23], 2),
              _t30 = _Object$entries2$_i[0],
              _n34 = _Object$entries2$_i[1];

          for (var _i24 = 0, _Object$entries3 = Object.entries(_n34); _i24 < _Object$entries3.length; _i24++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i24], 2),
                _t31 = _Object$entries3$_i[0],
                _r31 = _Object$entries3$_i[1];

            a[_t31] = {
              open: "\x1b[".concat(_r31[0], "m"),
              close: "\x1b[".concat(_r31[1], "m")
            }, _n34[_t31] = a[_t31], e.set(_r31[0], _r31[1]);
          }

          Object.defineProperty(a, _t30, {
            value: _n34,
            enumerable: !1
          });
        }

        return Object.defineProperty(a, "codes", {
          value: e,
          enumerable: !1
        }), a.color.close = "\x1b[39m", a.bgColor.close = "\x1b[49m", i(a.color, "ansi", function () {
          return s(t, "ansi16", o, !1);
        }), i(a.color, "ansi256", function () {
          return s(n, "ansi256", o, !1);
        }), i(a.color, "ansi16m", function () {
          return s(r, "rgb", u, !1);
        }), i(a.bgColor, "ansi", function () {
          return s(t, "ansi16", o, !0);
        }), i(a.bgColor, "ansi256", function () {
          return s(n, "ansi256", o, !0);
        }), i(a.bgColor, "ansi16m", function () {
          return s(r, "rgb", u, !0);
        }), a;
      }
    });
  }),
      Wo = {
    isatty: function isatty() {
      return !1;
    }
  },
      Uo = function Uo(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Oe.argv;
    var n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
        r = t.indexOf(n + e),
        o = t.indexOf("--");
    return -1 !== r && (-1 === o || r < o);
  },
      Jo = _e(Object.freeze({
    __proto__: null,
    default: Wo
  }));

  var zo = Oe.env;
  var Ho;

  function Go(e) {
    return 0 !== e && {
      level: e,
      hasBasic: !0,
      has256: e >= 2,
      has16m: e >= 3
    };
  }

  function Xo(e, t) {
    if (0 === Ho) return 0;
    if (Uo("color=16m") || Uo("color=full") || Uo("color=truecolor")) return 3;
    if (Uo("color=256")) return 2;
    if (e && !t && void 0 === Ho) return 0;
    var n = Ho || 0;
    if ("dumb" === zo.TERM) return n;

    if ("win32" === Oe.platform) {
      var _e47 = qr.release().split(".");

      return Number(_e47[0]) >= 10 && Number(_e47[2]) >= 10586 ? Number(_e47[2]) >= 14931 ? 3 : 2 : 1;
    }

    if ("CI" in zo) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function (e) {
      return e in zo;
    }) || "codeship" === zo.CI_NAME ? 1 : n;
    if ("TEAMCITY_VERSION" in zo) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(zo.TEAMCITY_VERSION) ? 1 : 0;
    if ("GITHUB_ACTIONS" in zo) return 1;
    if ("truecolor" === zo.COLORTERM) return 3;

    if ("TERM_PROGRAM" in zo) {
      var _e48 = parseInt((zo.TERM_PROGRAM_VERSION || "").split(".")[0], 10);

      switch (zo.TERM_PROGRAM) {
        case "iTerm.app":
          return _e48 >= 3 ? 3 : 2;

        case "Apple_Terminal":
          return 2;
      }
    }

    return /-256(color)?$/i.test(zo.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(zo.TERM) || "COLORTERM" in zo ? 1 : n;
  }

  Uo("no-color") || Uo("no-colors") || Uo("color=false") || Uo("color=never") ? Ho = 0 : (Uo("color") || Uo("colors") || Uo("color=true") || Uo("color=always")) && (Ho = 1), "FORCE_COLOR" in zo && (Ho = "true" === zo.FORCE_COLOR ? 1 : "false" === zo.FORCE_COLOR ? 0 : 0 === zo.FORCE_COLOR.length ? 1 : Math.min(parseInt(zo.FORCE_COLOR, 10), 3));
  var Yo = {
    supportsColor: function supportsColor(e) {
      return Go(Xo(e, e && e.isTTY));
    },
    stdout: Go(Xo(!0, Jo.isatty(1))),
    stderr: Go(Xo(!0, Jo.isatty(2)))
  };
  var Ko = {
    stringReplaceAll: function stringReplaceAll(e, t, n) {
      var r = e.indexOf(t);
      if (-1 === r) return e;
      var o = t.length;
      var u = 0,
          i = "";

      do {
        i += e.substr(u, r - u) + t + n, u = r + o, r = e.indexOf(t, u);
      } while (-1 !== r);

      return i += e.substr(u), i;
    },
    stringEncaseCRLFWithFirstIndex: function stringEncaseCRLFWithFirstIndex(e, t, n, r) {
      var o = 0,
          u = "";

      do {
        var _i25 = "\r" === e[r - 1];

        u += e.substr(o, (_i25 ? r - 1 : r) - o) + t + (_i25 ? "\r\n" : "\n") + n, o = r + 1, r = e.indexOf("\n", o);
      } while (-1 !== r);

      return u += e.substr(o), u;
    }
  };
  var Qo = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
      Zo = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
      eu = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
      tu = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
      nu = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1b"], ["a", "\x07"]]);

  function ru(e) {
    var t = "u" === e[0],
        n = "{" === e[1];
    return t && !n && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : t && n ? String.fromCodePoint(parseInt(e.slice(2, -1), 16)) : nu.get(e) || e;
  }

  function ou(e, t) {
    var n = [],
        r = t.trim().split(/\s*,\s*/g);
    var o;

    var _iterator22 = _createForOfIteratorHelper(r),
        _step22;

    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
        var _t32 = _step22.value;

        var _r32 = Number(_t32);

        if (Number.isNaN(_r32)) {
          if (!(o = _t32.match(eu))) throw new Error("Invalid Chalk template style argument: ".concat(_t32, " (in style '").concat(e, "')"));
          n.push(o[2].replace(tu, function (e, t, n) {
            return t ? ru(t) : n;
          }));
        } else n.push(_r32);
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }

    return n;
  }

  function uu(e) {
    Zo.lastIndex = 0;
    var t = [];
    var n;

    for (; null !== (n = Zo.exec(e));) {
      var _e49 = n[1];

      if (n[2]) {
        var _r33 = ou(_e49, n[2]);

        t.push([_e49].concat(_r33));
      } else t.push([_e49]);
    }

    return t;
  }

  function iu(e, t) {
    var n = {};

    var _iterator23 = _createForOfIteratorHelper(t),
        _step23;

    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
        var _e51 = _step23.value;

        var _iterator24 = _createForOfIteratorHelper(_e51.styles),
            _step24;

        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _t34 = _step24.value;
            n[_t34[0]] = _e51.inverse ? null : _t34.slice(1);
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }

    var r = e;

    for (var _i26 = 0, _Object$entries4 = Object.entries(n); _i26 < _Object$entries4.length; _i26++) {
      var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i26], 2),
          _e50 = _Object$entries4$_i[0],
          _t33 = _Object$entries4$_i[1];

      if (Array.isArray(_t33)) {
        var _r34;

        if (!(_e50 in r)) throw new Error("Unknown Chalk style: ".concat(_e50));
        r = _t33.length > 0 ? (_r34 = r)[_e50].apply(_r34, _toConsumableArray(_t33)) : r[_e50];
      }
    }

    return r;
  }

  var au = function au(e, t) {
    var n = [],
        r = [];
    var o = [];

    if (t.replace(Qo, function (t, u, i, a, s, c) {
      if (u) o.push(ru(u));else if (a) {
        var _t35 = o.join("");

        o = [], r.push(0 === n.length ? _t35 : iu(e, n)(_t35)), n.push({
          inverse: i,
          styles: uu(a)
        });
      } else if (s) {
        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
        r.push(iu(e, n)(o.join(""))), o = [], n.pop();
      } else o.push(c);
    }), r.push(o.join("")), n.length > 0) {
      var _e52 = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");

      throw new Error(_e52);
    }

    return r.join("");
  };

  var su = Yo.stdout,
      cu = Yo.stderr,
      lu = Ko.stringReplaceAll,
      pu = Ko.stringEncaseCRLFWithFirstIndex,
      du = Array.isArray,
      fu = ["ansi", "ansi", "ansi256", "ansi16m"],
      hu = Object.create(null);

  var mu = function mu(e) {
    _classCallCheck(this, mu);

    return gu(e);
  };

  var gu = function gu(e) {
    var t = {};
    return function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3)) throw new Error("The `level` option should be an integer from 0 to 3");
      var n = su ? su.level : 0;
      e.level = void 0 === t.level ? n : t.level;
    }(t, e), t.template = function () {
      for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        e[_key5] = arguments[_key5];
      }

      return Fu.apply(void 0, [t.template].concat(e));
    }, Object.setPrototypeOf(t, Du.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = function () {
      throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
    }, t.template.Instance = mu, t.template;
  };

  function Du(e) {
    return gu(e);
  }

  var _loop6 = function _loop6() {
    var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i27], 2),
        e = _Object$entries5$_i[0],
        t = _Object$entries5$_i[1];

    hu[e] = {
      get: function get() {
        var n = bu(this, Cu(t.open, t.close, this._styler), this._isEmpty);
        return Object.defineProperty(this, e, {
          value: n
        }), n;
      }
    };
  };

  for (var _i27 = 0, _Object$entries5 = Object.entries(qo); _i27 < _Object$entries5.length; _i27++) {
    _loop6();
  }

  hu.visible = {
    get: function get() {
      var e = bu(this, this._styler, !0);
      return Object.defineProperty(this, "visible", {
        value: e
      }), e;
    }
  };
  var yu = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];

  var _loop7 = function _loop7() {
    var e = _yu[_i28];
    hu[e] = {
      get: function get() {
        var t = this.level;
        return function () {
          var _qo$color$fu$t;

          var r = Cu((_qo$color$fu$t = qo.color[fu[t]])[e].apply(_qo$color$fu$t, arguments), qo.color.close, this._styler);
          return bu(this, r, this._isEmpty);
        };
      }
    };
  };

  for (var _i28 = 0, _yu = yu; _i28 < _yu.length; _i28++) {
    _loop7();
  }

  var _loop8 = function _loop8() {
    var e = _yu2[_i29];
    hu["bg" + e[0].toUpperCase() + e.slice(1)] = {
      get: function get() {
        var t = this.level;
        return function () {
          var _qo$bgColor$fu$t;

          var r = Cu((_qo$bgColor$fu$t = qo.bgColor[fu[t]])[e].apply(_qo$bgColor$fu$t, arguments), qo.bgColor.close, this._styler);
          return bu(this, r, this._isEmpty);
        };
      }
    };
  };

  for (var _i29 = 0, _yu2 = yu; _i29 < _yu2.length; _i29++) {
    _loop8();
  }

  var Eu = Object.defineProperties(function () {}, Object.assign({}, hu, {
    level: {
      enumerable: !0,
      get: function get() {
        return this._generator.level;
      },
      set: function set(e) {
        this._generator.level = e;
      }
    }
  })),
      Cu = function Cu(e, t, n) {
    var r, o;
    return void 0 === n ? (r = e, o = t) : (r = n.openAll + e, o = t + n.closeAll), {
      open: e,
      close: t,
      openAll: r,
      closeAll: o,
      parent: n
    };
  },
      bu = function bu(e, t, n) {
    var r = function r() {
      for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        e[_key6] = arguments[_key6];
      }

      return du(e[0]) && du(e[0].raw) ? vu(r, Fu.apply(void 0, [r].concat(e))) : vu(r, 1 === e.length ? "" + e[0] : e.join(" "));
    };

    return Object.setPrototypeOf(r, Eu), r._generator = e, r._styler = t, r._isEmpty = n, r;
  },
      vu = function vu(e, t) {
    if (e.level <= 0 || !t) return e._isEmpty ? "" : t;
    var n = e._styler;
    if (void 0 === n) return t;
    var _n35 = n,
        r = _n35.openAll,
        o = _n35.closeAll;
    if (-1 !== t.indexOf("\x1b")) for (; void 0 !== n;) {
      t = lu(t, n.close, n.open), n = n.parent;
    }
    var u = t.indexOf("\n");
    return -1 !== u && (t = pu(t, o, r, u)), r + t + o;
  };

  var Au;

  var Fu = function Fu(e) {
    for (var _len7 = arguments.length, t = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
      t[_key7 - 1] = arguments[_key7];
    }

    var n = t[0];
    if (!du(n) || !du(n.raw)) return t.join(" ");
    var r = t.slice(1),
        o = [n.raw[0]];

    for (var _e53 = 1; _e53 < n.length; _e53++) {
      o.push(String(r[_e53 - 1]).replace(/[{}\\]/g, "\\$&"), String(n.raw[_e53]));
    }

    return void 0 === Au && (Au = au), Au(e, o.join(""));
  };

  Object.defineProperties(Du.prototype, hu);
  var xu = Du();
  xu.supportsColor = su, xu.stderr = Du({
    level: cu ? cu.level : 0
  }), xu.stderr.supportsColor = cu;
  var Su = xu;

  var wu = function wu(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r;) {
      e[o + n] = t[n];
    }

    return e;
  },
      Tu = "object" == _typeof(Me) && Me && Me.Object === Object && Me,
      Bu = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      Nu = (Tu || Bu || Function("return this")()).Symbol,
      ku = Object.prototype,
      Pu = ku.hasOwnProperty,
      Ou = ku.toString,
      Iu = Nu ? Nu.toStringTag : void 0;

  var Lu = function Lu(e) {
    var t = Pu.call(e, Iu),
        n = e[Iu];

    try {
      e[Iu] = void 0;
      var r = !0;
    } catch (e) {}

    var o = Ou.call(e);
    return r && (t ? e[Iu] = n : delete e[Iu]), o;
  },
      Mu = Object.prototype.toString;

  var ju = function ju(e) {
    return Mu.call(e);
  },
      _u = Nu ? Nu.toStringTag : void 0;

  var Ru = function Ru(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : _u && _u in Object(e) ? Lu(e) : ju(e);
  };

  var Vu = function Vu(e) {
    return null != e && "object" == _typeof(e);
  };

  var $u = function $u(e) {
    return Vu(e) && "[object Arguments]" == Ru(e);
  },
      qu = Object.prototype,
      Wu = qu.hasOwnProperty,
      Uu = qu.propertyIsEnumerable,
      Ju = $u(function () {
    return arguments;
  }()) ? $u : function (e) {
    return Vu(e) && Wu.call(e, "callee") && !Uu.call(e, "callee");
  },
      zu = Array.isArray,
      Hu = Nu ? Nu.isConcatSpreadable : void 0;

  var Gu = function Gu(e) {
    return zu(e) || Ju(e) || !!(Hu && e && e[Hu]);
  };

  var Xu = function e(t, n, r, o, u) {
    var i = -1,
        a = t.length;

    for (r || (r = Gu), u || (u = []); ++i < a;) {
      var s = t[i];
      n > 0 && r(s) ? n > 1 ? e(s, n - 1, r, o, u) : wu(u, s) : o || (u[u.length] = s);
    }

    return u;
  };

  var Yu = function Yu(e) {
    return (null == e ? 0 : e.length) ? Xu(e, 1) : [];
  };

  var Ku = {
    key: function key(e) {
      return 1 === e.length ? "-".concat(e) : "--".concat(e);
    },
    value: function value(e) {
      return wo.apiDescriptor.value(e);
    },
    pair: function pair(_ref20) {
      var e = _ref20.key,
          t = _ref20.value;
      return !1 === t ? "--no-".concat(e) : !0 === t ? Ku.key(e) : "" === t ? "".concat(Ku.key(e), " without an argument") : "".concat(Ku.key(e), "=").concat(t);
    }
  };

  var Qu = /*#__PURE__*/function (_wo$ChoiceSchema) {
    _inherits(Qu, _wo$ChoiceSchema);

    var _super12 = _createSuper(Qu);

    function Qu(_ref21) {
      var _this7;

      var e = _ref21.name,
          t = _ref21.flags;

      _classCallCheck(this, Qu);

      _this7 = _super12.call(this, {
        name: e,
        choices: t
      }), _this7._flags = t.slice().sort();
      return _this7;
    }

    _createClass(Qu, [{
      key: "preprocess",
      value: function preprocess(e, t) {
        if ("string" == typeof e && 0 !== e.length && !this._flags.includes(e)) {
          var _n36 = this._flags.find(function (t) {
            return ko(t, e) < 3;
          });

          if (_n36) return t.logger.warn(["Unknown flag ".concat(Su.yellow(t.descriptor.value(e)), ","), "did you mean ".concat(Su.blue(t.descriptor.value(_n36)), "?")].join(" ")), _n36;
        }

        return e;
      }
    }, {
      key: "expected",
      value: function expected() {
        return "a flag";
      }
    }]);

    return Qu;
  }(wo.ChoiceSchema);

  var Zu;

  function ei(t, n) {
    var _ref22 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        r = _ref22.logger,
        _ref22$isCLI = _ref22.isCLI,
        o = _ref22$isCLI === void 0 ? !1 : _ref22$isCLI,
        _ref22$passThrough = _ref22.passThrough,
        u = _ref22$passThrough === void 0 ? !1 : _ref22$passThrough;

    var i = u ? Array.isArray(u) ? function (e, t) {
      return u.includes(e) ? _defineProperty({}, e, t) : void 0;
    } : function (e, t) {
      return _defineProperty({}, e, t);
    } : function (t, n, r) {
      var o = e(r.schemas, ["_"]);
      return wo.levenUnknownHandler(t, n, Object.assign({}, r, {
        schemas: o
      }));
    },
        a = o ? Ku : wo.apiDescriptor,
        s = function (e, _ref25) {
      var t = _ref25.isCLI;
      var n = [];
      t && n.push(wo.AnySchema.create({
        name: "_"
      }));

      var _iterator25 = _createForOfIteratorHelper(e),
          _step25;

      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var _r35 = _step25.value;
          n.push(ti(_r35, {
            isCLI: t,
            optionInfos: e
          })), _r35.alias && t && n.push(wo.AliasSchema.create({
            name: _r35.alias,
            sourceName: _r35.name
          }));
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }

      return n;
    }(n, {
      isCLI: o
    }),
        c = new wo.Normalizer(s, {
      logger: r,
      unknown: i,
      descriptor: a
    }),
        l = !1 !== r;

    l && Zu && (c._hasDeprecationWarned = Zu);
    var p = c.normalize(t);
    return l && (Zu = c._hasDeprecationWarned), p;
  }

  function ti(e, _ref26) {
    var t = _ref26.isCLI,
        n = _ref26.optionInfos;
    var r;
    var o = {
      name: e.name
    },
        u = {};

    switch (e.type) {
      case "int":
        r = wo.IntegerSchema, t && (o.preprocess = function (e) {
          return Number(e);
        });
        break;

      case "string":
        r = wo.StringSchema;
        break;

      case "choice":
        r = wo.ChoiceSchema, o.choices = e.choices.map(function (t) {
          return "object" == _typeof(t) && t.redirect ? Object.assign({}, t, {
            redirect: {
              to: {
                key: e.name,
                value: t.redirect
              }
            }
          }) : t;
        });
        break;

      case "boolean":
        r = wo.BooleanSchema;
        break;

      case "flag":
        r = Qu, o.flags = Yu(n.map(function (e) {
          return [e.alias, e.description && e.name, e.oppositeDescription && "no-".concat(e.name)].filter(Boolean);
        }));
        break;

      case "path":
        r = wo.StringSchema;
        break;

      default:
        throw new Error("Unexpected type ".concat(e.type));
    }

    if (e.exception ? o.validate = function (t, n, r) {
      return e.exception(t) || n.validate(t, r);
    } : o.validate = function (e, t, n) {
      return void 0 === e || t.validate(e, n);
    }, e.redirect && (u.redirect = function (t) {
      return t ? {
        to: {
          key: e.redirect.option,
          value: e.redirect.value
        }
      } : void 0;
    }), e.deprecated && (u.deprecated = !0), t && !e.array) {
      var _e54 = o.preprocess || function (e) {
        return e;
      };

      o.preprocess = function (t, n, r) {
        return n.preprocess(_e54(Array.isArray(t) ? t[t.length - 1] : t), r);
      };
    }

    return e.array ? wo.ArraySchema.create(Object.assign({}, t ? {
      preprocess: function preprocess(e) {
        return [].concat(e);
      }
    } : {}, u, {
      valueSchema: r.create(o)
    })) : r.create(Object.assign({}, o, u));
  }

  var ni = {
    normalizeApiOptions: function normalizeApiOptions(e, t, n) {
      return ei(e, t, n);
    },
    normalizeCliOptions: function normalizeCliOptions(e, t, n) {
      return ei(e, t, Object.assign({
        isCLI: !0
      }, n));
    }
  };

  function ri(e, t) {
    var _ref27 = t || {},
        n = _ref27.ignoreDecorators;

    if (!n) {
      var _t36 = e.declaration && e.declaration.decorators || e.decorators;

      if (_t36 && _t36.length > 0) return ri(_t36[0]);
    }

    return e.range ? e.range[0] : e.start;
  }

  function oi(e) {
    var t = e.range ? e.range[1] : e.end;
    return e.typeAnnotation ? Math.max(t, oi(e.typeAnnotation)) : t;
  }

  function ui(e, t) {
    return ri(e) === ri(t);
  }

  var ii = {
    locStart: ri,
    locEnd: oi,
    composeLoc: function composeLoc(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e;
      var n = ri(e);
      return [n, "number" == typeof t ? n + t : oi(t)];
    },
    hasSameLocStart: ui,
    hasSameLoc: function hasSameLoc(e, t) {
      return ui(e, t) && function (e, t) {
        return oi(e) === oi(t);
      }(e, t);
    }
  },
      ai = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, t.matchToToken = function (e) {
      var t = {
        type: "invalid",
        value: e[0],
        closed: void 0
      };
      return e[1] ? (t.type = "string", t.closed = !(!e[3] && !e[4])) : e[5] ? t.type = "comment" : e[6] ? (t.type = "comment", t.closed = !!e[7]) : e[8] ? t.type = "regex" : e[9] ? t.type = "number" : e[10] ? t.type = "name" : e[11] ? t.type = "punctuator" : e[12] && (t.type = "whitespace"), t;
    };
  }),
      si = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isIdentifierStart = c, t.isIdentifierChar = l, t.isIdentifierName = function (e) {
      var t = !0;

      for (var _n37 = 0, _r36 = Array.from(e); _n37 < _r36.length; _n37++) {
        var _e55 = _r36[_n37].codePointAt(0);

        if (t) {
          if (!c(_e55)) return !1;
          t = !1;
        } else if (!l(_e55)) return !1;
      }

      return !t;
    };
    var n = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
        r = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
    var o = new RegExp("[" + n + "]"),
        u = new RegExp("[" + n + r + "]");
    n = r = null;
    var i = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
        a = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

    function s(e, t) {
      var n = 65536;

      for (var _r37 = 0, _o11 = t.length; _r37 < _o11; _r37 += 2) {
        if (n += t[_r37], n > e) return !1;
        if (n += t[_r37 + 1], n >= e) return !0;
      }

      return !1;
    }

    function c(e) {
      return e < 65 ? 36 === e : e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && o.test(String.fromCharCode(e)) : s(e, i)));
    }

    function l(e) {
      return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && u.test(String.fromCharCode(e)) : s(e, i) || s(e, a))));
    }
  }),
      ci = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isReservedWord = a, t.isStrictReservedWord = s, t.isStrictBindOnlyReservedWord = c, t.isStrictBindReservedWord = function (e, t) {
      return s(e, t) || c(e);
    }, t.isKeyword = function (e) {
      return o.has(e);
    };
    var n = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
        r = ["eval", "arguments"],
        o = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]),
        u = new Set(n),
        i = new Set(r);

    function a(e, t) {
      return t && "await" === e || "enum" === e;
    }

    function s(e, t) {
      return a(e, t) || u.has(e);
    }

    function c(e) {
      return i.has(e);
    }
  }),
      li = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isIdentifierName", {
      enumerable: !0,
      get: function get() {
        return si.isIdentifierName;
      }
    }), Object.defineProperty(t, "isIdentifierChar", {
      enumerable: !0,
      get: function get() {
        return si.isIdentifierChar;
      }
    }), Object.defineProperty(t, "isIdentifierStart", {
      enumerable: !0,
      get: function get() {
        return si.isIdentifierStart;
      }
    }), Object.defineProperty(t, "isReservedWord", {
      enumerable: !0,
      get: function get() {
        return ci.isReservedWord;
      }
    }), Object.defineProperty(t, "isStrictBindOnlyReservedWord", {
      enumerable: !0,
      get: function get() {
        return ci.isStrictBindOnlyReservedWord;
      }
    }), Object.defineProperty(t, "isStrictBindReservedWord", {
      enumerable: !0,
      get: function get() {
        return ci.isStrictBindReservedWord;
      }
    }), Object.defineProperty(t, "isStrictReservedWord", {
      enumerable: !0,
      get: function get() {
        return ci.isStrictReservedWord;
      }
    }), Object.defineProperty(t, "isKeyword", {
      enumerable: !0,
      get: function get() {
        return ci.isKeyword;
      }
    });
  }),
      pi = /[|\\{}()[\]^$+*?.]/g,
      di = function di(e) {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    return e.replace(pi, "\\$&");
  },
      fi = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  },
      hi = je(function (e) {
    var t = {};

    for (var n in fi) {
      fi.hasOwnProperty(n) && (t[fi[n]] = n);
    }

    var r = e.exports = {
      rgb: {
        channels: 3,
        labels: "rgb"
      },
      hsl: {
        channels: 3,
        labels: "hsl"
      },
      hsv: {
        channels: 3,
        labels: "hsv"
      },
      hwb: {
        channels: 3,
        labels: "hwb"
      },
      cmyk: {
        channels: 4,
        labels: "cmyk"
      },
      xyz: {
        channels: 3,
        labels: "xyz"
      },
      lab: {
        channels: 3,
        labels: "lab"
      },
      lch: {
        channels: 3,
        labels: "lch"
      },
      hex: {
        channels: 1,
        labels: ["hex"]
      },
      keyword: {
        channels: 1,
        labels: ["keyword"]
      },
      ansi16: {
        channels: 1,
        labels: ["ansi16"]
      },
      ansi256: {
        channels: 1,
        labels: ["ansi256"]
      },
      hcg: {
        channels: 3,
        labels: ["h", "c", "g"]
      },
      apple: {
        channels: 3,
        labels: ["r16", "g16", "b16"]
      },
      gray: {
        channels: 1,
        labels: ["gray"]
      }
    };

    for (var o in r) {
      if (r.hasOwnProperty(o)) {
        if (!("channels" in r[o])) throw new Error("missing channels property: " + o);
        if (!("labels" in r[o])) throw new Error("missing channel labels property: " + o);
        if (r[o].labels.length !== r[o].channels) throw new Error("channel and label counts mismatch: " + o);
        var u = r[o].channels,
            i = r[o].labels;
        delete r[o].channels, delete r[o].labels, Object.defineProperty(r[o], "channels", {
          value: u
        }), Object.defineProperty(r[o], "labels", {
          value: i
        });
      }
    }

    r.rgb.hsl = function (e) {
      var t,
          n,
          r = e[0] / 255,
          o = e[1] / 255,
          u = e[2] / 255,
          i = Math.min(r, o, u),
          a = Math.max(r, o, u),
          s = a - i;
      return a === i ? t = 0 : r === a ? t = (o - u) / s : o === a ? t = 2 + (u - r) / s : u === a && (t = 4 + (r - o) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (i + a) / 2, [t, 100 * (a === i ? 0 : n <= .5 ? s / (a + i) : s / (2 - a - i)), 100 * n];
    }, r.rgb.hsv = function (e) {
      var t,
          n,
          r,
          o,
          u,
          i = e[0] / 255,
          a = e[1] / 255,
          s = e[2] / 255,
          c = Math.max(i, a, s),
          l = c - Math.min(i, a, s),
          p = function p(e) {
        return (c - e) / 6 / l + .5;
      };

      return 0 === l ? o = u = 0 : (u = l / c, t = p(i), n = p(a), r = p(s), i === c ? o = r - n : a === c ? o = 1 / 3 + t - r : s === c && (o = 2 / 3 + n - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * u, 100 * c];
    }, r.rgb.hwb = function (e) {
      var t = e[0],
          n = e[1],
          o = e[2];
      return [r.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, o))), 100 * (o = 1 - 1 / 255 * Math.max(t, Math.max(n, o)))];
    }, r.rgb.cmyk = function (e) {
      var t,
          n = e[0] / 255,
          r = e[1] / 255,
          o = e[2] / 255;
      return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - o))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - o - t) / (1 - t) || 0), 100 * t];
    }, r.rgb.keyword = function (e) {
      var n = t[e];
      if (n) return n;
      var r,
          o,
          u,
          i = 1 / 0;

      for (var a in fi) {
        if (fi.hasOwnProperty(a)) {
          var s = fi[a],
              c = (o = e, u = s, Math.pow(o[0] - u[0], 2) + Math.pow(o[1] - u[1], 2) + Math.pow(o[2] - u[2], 2));
          c < i && (i = c, r = a);
        }
      }

      return r;
    }, r.keyword.rgb = function (e) {
      return fi[e];
    }, r.rgb.xyz = function (e) {
      var t = e[0] / 255,
          n = e[1] / 255,
          r = e[2] / 255;
      return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
    }, r.rgb.lab = function (e) {
      var t = r.rgb.xyz(e),
          n = t[0],
          o = t[1],
          u = t[2];
      return o /= 100, u /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116) - 16, 500 * (n - o), 200 * (o - (u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116))];
    }, r.hsl.rgb = function (e) {
      var t,
          n,
          r,
          o,
          u,
          i = e[0] / 360,
          a = e[1] / 100,
          s = e[2] / 100;
      if (0 === a) return [u = 255 * s, u, u];
      t = 2 * s - (n = s < .5 ? s * (1 + a) : s + a - s * a), o = [0, 0, 0];

      for (var c = 0; c < 3; c++) {
        (r = i + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, u = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, o[c] = 255 * u;
      }

      return o;
    }, r.hsl.hsv = function (e) {
      var t = e[0],
          n = e[1] / 100,
          r = e[2] / 100,
          o = n,
          u = Math.max(r, .01);
      return n *= (r *= 2) <= 1 ? r : 2 - r, o *= u <= 1 ? u : 2 - u, [t, 100 * (0 === r ? 2 * o / (u + o) : 2 * n / (r + n)), 100 * ((r + n) / 2)];
    }, r.hsv.rgb = function (e) {
      var t = e[0] / 60,
          n = e[1] / 100,
          r = e[2] / 100,
          o = Math.floor(t) % 6,
          u = t - Math.floor(t),
          i = 255 * r * (1 - n),
          a = 255 * r * (1 - n * u),
          s = 255 * r * (1 - n * (1 - u));

      switch (r *= 255, o) {
        case 0:
          return [r, s, i];

        case 1:
          return [a, r, i];

        case 2:
          return [i, r, s];

        case 3:
          return [i, a, r];

        case 4:
          return [s, i, r];

        case 5:
          return [r, i, a];
      }
    }, r.hsv.hsl = function (e) {
      var t,
          n,
          r,
          o = e[0],
          u = e[1] / 100,
          i = e[2] / 100,
          a = Math.max(i, .01);
      return r = (2 - u) * i, n = u * a, [o, 100 * (n = (n /= (t = (2 - u) * a) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)];
    }, r.hwb.rgb = function (e) {
      var t,
          n,
          r,
          o,
          u,
          i,
          a,
          s = e[0] / 360,
          c = e[1] / 100,
          l = e[2] / 100,
          p = c + l;

      switch (p > 1 && (c /= p, l /= p), r = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (r = 1 - r), o = c + r * ((n = 1 - l) - c), t) {
        default:
        case 6:
        case 0:
          u = n, i = o, a = c;
          break;

        case 1:
          u = o, i = n, a = c;
          break;

        case 2:
          u = c, i = n, a = o;
          break;

        case 3:
          u = c, i = o, a = n;
          break;

        case 4:
          u = o, i = c, a = n;
          break;

        case 5:
          u = n, i = c, a = o;
      }

      return [255 * u, 255 * i, 255 * a];
    }, r.cmyk.rgb = function (e) {
      var t = e[0] / 100,
          n = e[1] / 100,
          r = e[2] / 100,
          o = e[3] / 100;
      return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))];
    }, r.xyz.rgb = function (e) {
      var t,
          n,
          r,
          o = e[0] / 100,
          u = e[1] / 100,
          i = e[2] / 100;
      return n = -.9689 * o + 1.8758 * u + .0415 * i, r = .0557 * o + -.204 * u + 1.057 * i, t = (t = 3.2406 * o + -1.5372 * u + -.4986 * i) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))];
    }, r.xyz.lab = function (e) {
      var t = e[0],
          n = e[1],
          r = e[2];
      return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))];
    }, r.lab.xyz = function (e) {
      var t,
          n,
          r,
          o = e[0];
      t = e[1] / 500 + (n = (o + 16) / 116), r = n - e[2] / 200;
      var u = Math.pow(n, 3),
          i = Math.pow(t, 3),
          a = Math.pow(r, 3);
      return n = u > .008856 ? u : (n - 16 / 116) / 7.787, t = i > .008856 ? i : (t - 16 / 116) / 7.787, r = a > .008856 ? a : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883];
    }, r.lab.lch = function (e) {
      var t,
          n = e[0],
          r = e[1],
          o = e[2];
      return (t = 360 * Math.atan2(o, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + o * o), t];
    }, r.lch.lab = function (e) {
      var t,
          n = e[0],
          r = e[1];
      return t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)];
    }, r.rgb.ansi16 = function (e) {
      var t = e[0],
          n = e[1],
          o = e[2],
          u = 1 in arguments ? arguments[1] : r.rgb.hsv(e)[2];
      if (0 === (u = Math.round(u / 50))) return 30;
      var i = 30 + (Math.round(o / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
      return 2 === u && (i += 60), i;
    }, r.hsv.ansi16 = function (e) {
      return r.rgb.ansi16(r.hsv.rgb(e), e[2]);
    }, r.rgb.ansi256 = function (e) {
      var t = e[0],
          n = e[1],
          r = e[2];
      return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
    }, r.ansi16.rgb = function (e) {
      var t = e % 10;
      if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t];
      var n = .5 * (1 + ~~(e > 50));
      return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
    }, r.ansi256.rgb = function (e) {
      if (e >= 232) {
        var t = 10 * (e - 232) + 8;
        return [t, t, t];
      }

      var n;
      return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255];
    }, r.rgb.hex = function (e) {
      var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
      return "000000".substring(t.length) + t;
    }, r.hex.rgb = function (e) {
      var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) return [0, 0, 0];
      var n = t[0];
      3 === t[0].length && (n = n.split("").map(function (e) {
        return e + e;
      }).join(""));
      var r = parseInt(n, 16);
      return [r >> 16 & 255, r >> 8 & 255, 255 & r];
    }, r.rgb.hcg = function (e) {
      var t,
          n = e[0] / 255,
          r = e[1] / 255,
          o = e[2] / 255,
          u = Math.max(Math.max(n, r), o),
          i = Math.min(Math.min(n, r), o),
          a = u - i;
      return t = a <= 0 ? 0 : u === n ? (r - o) / a % 6 : u === r ? 2 + (o - n) / a : 4 + (n - r) / a + 4, t /= 6, [360 * (t %= 1), 100 * a, 100 * (a < 1 ? i / (1 - a) : 0)];
    }, r.hsl.hcg = function (e) {
      var t = e[1] / 100,
          n = e[2] / 100,
          r = 1,
          o = 0;
      return (r = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1 && (o = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * o];
    }, r.hsv.hcg = function (e) {
      var t = e[1] / 100,
          n = e[2] / 100,
          r = t * n,
          o = 0;
      return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o];
    }, r.hcg.rgb = function (e) {
      var t = e[0] / 360,
          n = e[1] / 100,
          r = e[2] / 100;
      if (0 === n) return [255 * r, 255 * r, 255 * r];
      var o,
          u = [0, 0, 0],
          i = t % 1 * 6,
          a = i % 1,
          s = 1 - a;

      switch (Math.floor(i)) {
        case 0:
          u[0] = 1, u[1] = a, u[2] = 0;
          break;

        case 1:
          u[0] = s, u[1] = 1, u[2] = 0;
          break;

        case 2:
          u[0] = 0, u[1] = 1, u[2] = a;
          break;

        case 3:
          u[0] = 0, u[1] = s, u[2] = 1;
          break;

        case 4:
          u[0] = a, u[1] = 0, u[2] = 1;
          break;

        default:
          u[0] = 1, u[1] = 0, u[2] = s;
      }

      return o = (1 - n) * r, [255 * (n * u[0] + o), 255 * (n * u[1] + o), 255 * (n * u[2] + o)];
    }, r.hcg.hsv = function (e) {
      var t = e[1] / 100,
          n = t + e[2] / 100 * (1 - t),
          r = 0;
      return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n];
    }, r.hcg.hsl = function (e) {
      var t = e[1] / 100,
          n = e[2] / 100 * (1 - t) + .5 * t,
          r = 0;
      return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n];
    }, r.hcg.hwb = function (e) {
      var t = e[1] / 100,
          n = t + e[2] / 100 * (1 - t);
      return [e[0], 100 * (n - t), 100 * (1 - n)];
    }, r.hwb.hcg = function (e) {
      var t = e[1] / 100,
          n = 1 - e[2] / 100,
          r = n - t,
          o = 0;
      return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o];
    }, r.apple.rgb = function (e) {
      return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
    }, r.rgb.apple = function (e) {
      return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
    }, r.gray.rgb = function (e) {
      return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
    }, r.gray.hsl = r.gray.hsv = function (e) {
      return [0, 0, e[0]];
    }, r.gray.hwb = function (e) {
      return [0, 100, e[0]];
    }, r.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    }, r.gray.lab = function (e) {
      return [e[0], 0, 0];
    }, r.gray.hex = function (e) {
      var t = 255 & Math.round(e[0] / 100 * 255),
          n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return "000000".substring(n.length) + n;
    }, r.rgb.gray = function (e) {
      return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
    };
  });

  function mi(e) {
    var t = function () {
      for (var e = {}, t = Object.keys(hi), n = t.length, r = 0; r < n; r++) {
        e[t[r]] = {
          distance: -1,
          parent: null
        };
      }

      return e;
    }(),
        n = [e];

    for (t[e].distance = 0; n.length;) {
      for (var r = n.pop(), o = Object.keys(hi[r]), u = o.length, i = 0; i < u; i++) {
        var a = o[i],
            s = t[a];
        -1 === s.distance && (s.distance = t[r].distance + 1, s.parent = r, n.unshift(a));
      }
    }

    return t;
  }

  function gi(e, t) {
    return function (n) {
      return t(e(n));
    };
  }

  function Di(e, t) {
    for (var n = [t[e].parent, e], r = hi[t[e].parent][e], o = t[e].parent; t[o].parent;) {
      n.unshift(t[o].parent), r = gi(hi[t[o].parent][o], r), o = t[o].parent;
    }

    return r.conversion = n, r;
  }

  var yi = {};
  Object.keys(hi).forEach(function (e) {
    yi[e] = {}, Object.defineProperty(yi[e], "channels", {
      value: hi[e].channels
    }), Object.defineProperty(yi[e], "labels", {
      value: hi[e].labels
    });

    var t = function (e) {
      for (var t = mi(e), n = {}, r = Object.keys(t), o = r.length, u = 0; u < o; u++) {
        var i = r[u];
        null !== t[i].parent && (n[i] = Di(i, t));
      }

      return n;
    }(e);

    Object.keys(t).forEach(function (n) {
      var r = t[n];
      yi[e][n] = function (e) {
        var t = function t(_t37) {
          if (null == _t37) return _t37;
          arguments.length > 1 && (_t37 = Array.prototype.slice.call(arguments));
          var n = e(_t37);
          if ("object" == _typeof(n)) for (var r = n.length, o = 0; o < r; o++) {
            n[o] = Math.round(n[o]);
          }
          return n;
        };

        return "conversion" in e && (t.conversion = e.conversion), t;
      }(r), yi[e][n].raw = function (e) {
        var t = function t(_t38) {
          return null == _t38 ? _t38 : (arguments.length > 1 && (_t38 = Array.prototype.slice.call(arguments)), e(_t38));
        };

        return "conversion" in e && (t.conversion = e.conversion), t;
      }(r);
    });
  });
  var Ei = yi,
      Ci = je(function (e) {
    var t = function t(e, _t39) {
      return function () {
        var n = e.apply(Ei, arguments);
        return "\x1b[".concat(n + _t39, "m");
      };
    },
        n = function n(e, t) {
      return function () {
        var n = e.apply(Ei, arguments);
        return "\x1b[".concat(38 + t, ";5;").concat(n, "m");
      };
    },
        r = function r(e, t) {
      return function () {
        var n = e.apply(Ei, arguments);
        return "\x1b[".concat(38 + t, ";2;").concat(n[0], ";").concat(n[1], ";").concat(n[2], "m");
      };
    };

    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: function get() {
        var e = new Map(),
            o = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            gray: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        o.color.grey = o.color.gray;

        for (var _i30 = 0, _Object$keys14 = Object.keys(o); _i30 < _Object$keys14.length; _i30++) {
          var _t40 = _Object$keys14[_i30];
          var _n38 = o[_t40];

          for (var _i31 = 0, _Object$keys15 = Object.keys(_n38); _i31 < _Object$keys15.length; _i31++) {
            var _t41 = _Object$keys15[_i31];
            var _r38 = _n38[_t41];
            o[_t41] = {
              open: "\x1b[".concat(_r38[0], "m"),
              close: "\x1b[".concat(_r38[1], "m")
            }, _n38[_t41] = o[_t41], e.set(_r38[0], _r38[1]);
          }

          Object.defineProperty(o, _t40, {
            value: _n38,
            enumerable: !1
          }), Object.defineProperty(o, "codes", {
            value: e,
            enumerable: !1
          });
        }

        var u = function u(e) {
          return e;
        },
            i = function i(e, t, n) {
          return [e, t, n];
        };

        o.color.close = "\x1b[39m", o.bgColor.close = "\x1b[49m", o.color.ansi = {
          ansi: t(u, 0)
        }, o.color.ansi256 = {
          ansi256: n(u, 0)
        }, o.color.ansi16m = {
          rgb: r(i, 0)
        }, o.bgColor.ansi = {
          ansi: t(u, 10)
        }, o.bgColor.ansi256 = {
          ansi256: n(u, 10)
        }, o.bgColor.ansi16m = {
          rgb: r(i, 10)
        };

        for (var _i32 = 0, _Object$keys16 = Object.keys(Ei); _i32 < _Object$keys16.length; _i32++) {
          var _e56 = _Object$keys16[_i32];
          if ("object" != _typeof(Ei[_e56])) continue;
          var _u8 = Ei[_e56];
          "ansi16" === _e56 && (_e56 = "ansi"), "ansi16" in _u8 && (o.color.ansi[_e56] = t(_u8.ansi16, 0), o.bgColor.ansi[_e56] = t(_u8.ansi16, 10)), "ansi256" in _u8 && (o.color.ansi256[_e56] = n(_u8.ansi256, 0), o.bgColor.ansi256[_e56] = n(_u8.ansi256, 10)), "rgb" in _u8 && (o.color.ansi16m[_e56] = r(_u8.rgb, 0), o.bgColor.ansi16m[_e56] = r(_u8.rgb, 10));
        }

        return o;
      }
    });
  });
  var bi = Oe.env;
  var vi;

  function Ai(e) {
    return function (e) {
      return 0 !== e && {
        level: e,
        hasBasic: !0,
        has256: e >= 2,
        has16m: e >= 3
      };
    }(function (e) {
      if (!1 === vi) return 0;
      if ($r("color=16m") || $r("color=full") || $r("color=truecolor")) return 3;
      if ($r("color=256")) return 2;
      if (e && !e.isTTY && !0 !== vi) return 0;
      var t = vi ? 1 : 0;

      if ("win32" === Oe.platform) {
        var _e57 = qr.release().split(".");

        return Number(Oe.versions.node.split(".")[0]) >= 8 && Number(_e57[0]) >= 10 && Number(_e57[2]) >= 10586 ? Number(_e57[2]) >= 14931 ? 3 : 2 : 1;
      }

      if ("CI" in bi) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function (e) {
        return e in bi;
      }) || "codeship" === bi.CI_NAME ? 1 : t;
      if ("TEAMCITY_VERSION" in bi) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(bi.TEAMCITY_VERSION) ? 1 : 0;
      if ("truecolor" === bi.COLORTERM) return 3;

      if ("TERM_PROGRAM" in bi) {
        var _e58 = parseInt((bi.TERM_PROGRAM_VERSION || "").split(".")[0], 10);

        switch (bi.TERM_PROGRAM) {
          case "iTerm.app":
            return _e58 >= 3 ? 3 : 2;

          case "Apple_Terminal":
            return 2;
        }
      }

      return /-256(color)?$/i.test(bi.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(bi.TERM) || "COLORTERM" in bi ? 1 : (bi.TERM, t);
    }(e));
  }

  $r("no-color") || $r("no-colors") || $r("color=false") ? vi = !1 : ($r("color") || $r("colors") || $r("color=true") || $r("color=always")) && (vi = !0), "FORCE_COLOR" in bi && (vi = 0 === bi.FORCE_COLOR.length || 0 !== parseInt(bi.FORCE_COLOR, 10));
  var Fi = {
    supportsColor: Ai,
    stdout: Ai(Oe.stdout),
    stderr: Ai(Oe.stderr)
  };
  var xi = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
      Si = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
      wi = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
      Ti = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
      Bi = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1b"], ["a", "\x07"]]);

  function Ni(e) {
    return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : Bi.get(e) || e;
  }

  function ki(e, t) {
    var n = [],
        r = t.trim().split(/\s*,\s*/g);
    var o;

    var _iterator26 = _createForOfIteratorHelper(r),
        _step26;

    try {
      for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
        var _t42 = _step26.value;

        if (isNaN(_t42)) {
          if (!(o = _t42.match(wi))) throw new Error("Invalid Chalk template style argument: ".concat(_t42, " (in style '").concat(e, "')"));
          n.push(o[2].replace(Ti, function (e, t, n) {
            return t ? Ni(t) : n;
          }));
        } else n.push(Number(_t42));
      }
    } catch (err) {
      _iterator26.e(err);
    } finally {
      _iterator26.f();
    }

    return n;
  }

  function Pi(e) {
    Si.lastIndex = 0;
    var t = [];
    var n;

    for (; null !== (n = Si.exec(e));) {
      var _e59 = n[1];

      if (n[2]) {
        var _r39 = ki(_e59, n[2]);

        t.push([_e59].concat(_r39));
      } else t.push([_e59]);
    }

    return t;
  }

  function Oi(e, t) {
    var n = {};

    var _iterator27 = _createForOfIteratorHelper(t),
        _step27;

    try {
      for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
        var _e61 = _step27.value;

        var _iterator28 = _createForOfIteratorHelper(_e61.styles),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _t43 = _step28.value;
            n[_t43[0]] = _e61.inverse ? null : _t43.slice(1);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }
    } catch (err) {
      _iterator27.e(err);
    } finally {
      _iterator27.f();
    }

    var r = e;

    for (var _i33 = 0, _Object$keys17 = Object.keys(n); _i33 < _Object$keys17.length; _i33++) {
      var _e60 = _Object$keys17[_i33];

      if (Array.isArray(n[_e60])) {
        if (!(_e60 in r)) throw new Error("Unknown Chalk style: ".concat(_e60));
        r = n[_e60].length > 0 ? r[_e60].apply(r, n[_e60]) : r[_e60];
      }
    }

    return r;
  }

  var Ii = function Ii(e, t) {
    var n = [],
        r = [];
    var o = [];

    if (t.replace(xi, function (t, u, i, a, s, c) {
      if (u) o.push(Ni(u));else if (a) {
        var _t44 = o.join("");

        o = [], r.push(0 === n.length ? _t44 : Oi(e, n)(_t44)), n.push({
          inverse: i,
          styles: Pi(a)
        });
      } else if (s) {
        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
        r.push(Oi(e, n)(o.join(""))), o = [], n.pop();
      } else o.push(c);
    }), r.push(o.join("")), n.length > 0) {
      var _e62 = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");

      throw new Error(_e62);
    }

    return r.join("");
  },
      Li = je(function (e) {
    var t = Fi.stdout,
        n = "win32" === Oe.platform && !(Oe.env.TERM || "").toLowerCase().startsWith("xterm"),
        r = ["ansi", "ansi", "ansi256", "ansi16m"],
        o = new Set(["gray"]),
        u = Object.create(null);

    function i(e, n) {
      n = n || {};
      var r = t ? t.level : 0;
      e.level = void 0 === n.level ? r : n.level, e.enabled = "enabled" in n ? n.enabled : e.level > 0;
    }

    function a(e) {
      if (!this || !(this instanceof a) || this.template) {
        var _t45 = {};
        return i(_t45, e), _t45.template = function () {
          var e = [].slice.call(arguments);
          return p.apply(null, [_t45.template].concat(e));
        }, Object.setPrototypeOf(_t45, a.prototype), Object.setPrototypeOf(_t45.template, _t45), _t45.template.constructor = a, _t45.template;
      }

      i(this, e);
    }

    n && (Ci.blue.open = "\x1b[94m");

    var _loop9 = function _loop9() {
      var e = _Object$keys18[_i34];
      Ci[e].closeRe = new RegExp(di(Ci[e].close), "g"), u[e] = {
        get: function get() {
          var t = Ci[e];
          return c.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e);
        }
      };
    };

    for (var _i34 = 0, _Object$keys18 = Object.keys(Ci); _i34 < _Object$keys18.length; _i34++) {
      _loop9();
    }

    u.visible = {
      get: function get() {
        return c.call(this, this._styles || [], !0, "visible");
      }
    }, Ci.color.closeRe = new RegExp(di(Ci.color.close), "g");

    var _loop10 = function _loop10() {
      var e = _Object$keys19[_i35];
      o.has(e) || (u[e] = {
        get: function get() {
          var t = this.level;
          return function () {
            var n = Ci.color[r[t]][e].apply(null, arguments),
                o = {
              open: n,
              close: Ci.color.close,
              closeRe: Ci.color.closeRe
            };
            return c.call(this, this._styles ? this._styles.concat(o) : [o], this._empty, e);
          };
        }
      });
    };

    for (var _i35 = 0, _Object$keys19 = Object.keys(Ci.color.ansi); _i35 < _Object$keys19.length; _i35++) {
      _loop10();
    }

    Ci.bgColor.closeRe = new RegExp(di(Ci.bgColor.close), "g");

    var _loop11 = function _loop11() {
      var e = _Object$keys20[_i36];
      if (o.has(e)) return "continue";
      u["bg" + e[0].toUpperCase() + e.slice(1)] = {
        get: function get() {
          var t = this.level;
          return function () {
            var n = Ci.bgColor[r[t]][e].apply(null, arguments),
                o = {
              open: n,
              close: Ci.bgColor.close,
              closeRe: Ci.bgColor.closeRe
            };
            return c.call(this, this._styles ? this._styles.concat(o) : [o], this._empty, e);
          };
        }
      };
    };

    for (var _i36 = 0, _Object$keys20 = Object.keys(Ci.bgColor.ansi); _i36 < _Object$keys20.length; _i36++) {
      var _ret2 = _loop11();

      if (_ret2 === "continue") continue;
    }

    var s = Object.defineProperties(function () {}, u);

    function c(e, t, n) {
      var r = function r() {
        return l.apply(r, arguments);
      };

      r._styles = e, r._empty = t;
      var o = this;
      return Object.defineProperty(r, "level", {
        enumerable: !0,
        get: function get() {
          return o.level;
        },
        set: function set(e) {
          o.level = e;
        }
      }), Object.defineProperty(r, "enabled", {
        enumerable: !0,
        get: function get() {
          return o.enabled;
        },
        set: function set(e) {
          o.enabled = e;
        }
      }), r.hasGrey = this.hasGrey || "gray" === n || "grey" === n, r.__proto__ = s, r;
    }

    function l() {
      var e = arguments,
          t = e.length;
      var r = String(arguments[0]);
      if (0 === t) return "";
      if (t > 1) for (var _n39 = 1; _n39 < t; _n39++) {
        r += " " + e[_n39];
      }
      if (!this.enabled || this.level <= 0 || !r) return this._empty ? "" : r;
      var o = Ci.dim.open;
      n && this.hasGrey && (Ci.dim.open = "");

      var _iterator29 = _createForOfIteratorHelper(this._styles.slice().reverse()),
          _step29;

      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var _e63 = _step29.value;
          r = _e63.open + r.replace(_e63.closeRe, _e63.open) + _e63.close, r = r.replace(/\r?\n/g, "".concat(_e63.close, "$&").concat(_e63.open));
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }

      return Ci.dim.open = o, r;
    }

    function p(e, t) {
      if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");
      var n = [].slice.call(arguments, 2),
          r = [t.raw[0]];

      for (var _e64 = 1; _e64 < t.length; _e64++) {
        r.push(String(n[_e64 - 1]).replace(/[{}\\]/g, "\\$&")), r.push(String(t.raw[_e64]));
      }

      return Ii(e, r.join(""));
    }

    Object.defineProperties(a.prototype, u), e.exports = a(), e.exports.supportsColor = t, e.exports.default = e.exports;
  }),
      Mi = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.shouldHighlight = c, t.getChalk = l, t.default = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (c(t)) {
        var _n40 = l(t);

        return function (e, t) {
          return t.replace(r.default, function () {
            for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              t[_key8] = arguments[_key8];
            }

            var n = function (e) {
              var _e$slice = e.slice(-2),
                  _e$slice2 = _slicedToArray(_e$slice, 2),
                  t = _e$slice2[0],
                  n = _e$slice2[1],
                  o = (0, r.matchToToken)(e);

              if ("name" === o.type) {
                if ((0, li.isKeyword)(o.value) || (0, li.isReservedWord)(o.value)) return "keyword";
                if (a.test(o.value) && ("<" === n[t - 1] || "</" == n.substr(t - 2, 2))) return "jsx_tag";
                if (o.value[0] !== o.value[0].toLowerCase()) return "capitalized";
              }

              if ("punctuator" === o.type && s.test(o.value)) return "bracket";
              if ("invalid" === o.type && ("@" === o.value || "#" === o.value)) return "punctuator";
              return o.type;
            }(t),
                o = e[n];

            return o ? t[0].split(i).map(function (e) {
              return o(e);
            }).join("\n") : t[0];
          });
        }(function (e) {
          return {
            keyword: e.cyan,
            capitalized: e.yellow,
            jsx_tag: e.yellow,
            punctuator: e.yellow,
            number: e.magenta,
            string: e.green,
            regex: e.magenta,
            comment: e.grey,
            invalid: e.white.bgRed.bold
          };
        }(_n40), e);
      }

      return e;
    };

    var n,
        r = function (e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = u();
      if (t && t.has(e)) return t.get(e);
      var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
          i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o];
        }
      }

      n.default = e, t && t.set(e, n);
      return n;
    }(ai),
        o = (n = Li) && n.__esModule ? n : {
      default: n
    };

    function u() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return u = function u() {
        return e;
      }, e;
    }

    var i = /\r\n|[\n\r\u2028\u2029]/,
        a = /^[a-z][\w-]*$/i,
        s = /^[()[\]{}]$/;

    function c(e) {
      return o.default.supportsColor || e.forceColor;
    }

    function l(e) {
      var t = o.default;
      return e.forceColor && (t = new o.default.constructor({
        enabled: !0,
        level: 1
      })), t;
    }
  }),
      ji = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.codeFrameColumns = i, t.default = function (e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (!o) {
        o = !0;
        var _e65 = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
        if (Oe.emitWarning) Oe.emitWarning(_e65, "DeprecationWarning");else {
          new Error(_e65).name = "DeprecationWarning", console.warn(new Error(_e65));
        }
      }

      n = Math.max(n, 0);
      return i(e, {
        start: {
          column: n,
          line: t
        }
      }, r);
    };

    var n = function (e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = r();
      if (t && t.has(e)) return t.get(e);
      var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
          i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
        }
      }

      n.default = e, t && t.set(e, n);
      return n;
    }(Mi);

    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return r = function r() {
        return e;
      }, e;
    }

    var o = !1;
    var u = /\r\n|[\n\r\u2028\u2029]/;

    function i(e, t) {
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var o = (r.highlightCode || r.forceColor) && (0, n.shouldHighlight)(r),
          i = (0, n.getChalk)(r),
          a = function (e) {
        return {
          gutter: e.grey,
          marker: e.red.bold,
          message: e.red.bold
        };
      }(i),
          s = function s(e, t) {
        return o ? e(t) : t;
      },
          c = e.split(u),
          _ref28 = function (e, t, n) {
        var r = Object.assign({
          column: 0,
          line: -1
        }, e.start),
            o = Object.assign({}, r, e.end),
            _ref29 = n || {},
            _ref29$linesAbove = _ref29.linesAbove,
            u = _ref29$linesAbove === void 0 ? 2 : _ref29$linesAbove,
            _ref29$linesBelow = _ref29.linesBelow,
            i = _ref29$linesBelow === void 0 ? 3 : _ref29$linesBelow,
            a = r.line,
            s = r.column,
            c = o.line,
            l = o.column;

        var p = Math.max(a - (u + 1), 0),
            d = Math.min(t.length, c + i);
        -1 === a && (p = 0), -1 === c && (d = t.length);
        var f = c - a,
            h = {};
        if (f) for (var _e66 = 0; _e66 <= f; _e66++) {
          var _n41 = _e66 + a;

          if (s) {
            if (0 === _e66) {
              var _e67 = t[_n41 - 1].length;
              h[_n41] = [s, _e67 - s + 1];
            } else if (_e66 === f) h[_n41] = [0, l];else {
              var _r40 = t[_n41 - _e66].length;
              h[_n41] = [0, _r40];
            }
          } else h[_n41] = !0;
        } else h[a] = s === l ? !s || [s, 0] : [s, l - s];
        return {
          start: p,
          end: d,
          markerLines: h
        };
      }(t, c, r),
          l = _ref28.start,
          p = _ref28.end,
          d = _ref28.markerLines,
          f = t.start && "number" == typeof t.start.column,
          h = String(p).length;

      var m = (o ? (0, n.default)(e, r) : e).split(u).slice(l, p).map(function (e, t) {
        var n = l + 1 + t,
            o = " ".concat(n).slice(-h),
            u = " ".concat(o, " | "),
            i = d[n],
            c = !d[n + 1];

        if (i) {
          var _t46 = "";

          if (Array.isArray(i)) {
            var _n42 = e.slice(0, Math.max(i[0] - 1, 0)).replace(/[^\t]/g, " "),
                _o12 = i[1] || 1;

            _t46 = ["\n ", s(a.gutter, u.replace(/\d/g, " ")), _n42, s(a.marker, "^").repeat(_o12)].join(""), c && r.message && (_t46 += " " + s(a.message, r.message));
          }

          return [s(a.marker, ">"), s(a.gutter, u), e, _t46].join("");
        }

        return " ".concat(s(a.gutter, u)).concat(e);
      }).join("\n");
      return r.message && !f && (m = "".concat(" ".repeat(h + 1)).concat(r.message, "\n").concat(m)), o ? i.reset(m) : m;
    }
  }),
      _i = _e(yn);

  var Ri = vr.ConfigError,
      Vi = ii.locStart,
      $i = ii.locEnd,
      qi = Object.getOwnPropertyNames,
      Wi = Object.getOwnPropertyDescriptor;

  function Ui(e) {
    var t = {};

    var _iterator30 = _createForOfIteratorHelper(e.plugins),
        _step30;

    try {
      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
        var _n43 = _step30.value;

        if (_n43.parsers) {
          var _iterator31 = _createForOfIteratorHelper(qi(_n43.parsers)),
              _step31;

          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var _e68 = _step31.value;
              Object.defineProperty(t, _e68, Wi(_n43.parsers, _e68));
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }
        }
      }
    } catch (err) {
      _iterator30.e(err);
    } finally {
      _iterator30.f();
    }

    return t;
  }

  function Ji(e, t) {
    if (t = t || Ui(e), "function" == typeof e.parser) return {
      parse: e.parser,
      astFormat: "estree",
      locStart: Vi,
      locEnd: $i
    };

    if ("string" == typeof e.parser) {
      if (Object.prototype.hasOwnProperty.call(t, e.parser)) return t[e.parser];
      throw new Ri("Couldn't resolve parser \"".concat(e.parser, '". Parsers must be explicitly added to the standalone bundle.'));
    }
  }

  var zi = {
    parse: function parse(e, t) {
      var n = Ui(t),
          r = Object.keys(n).reduce(function (e, t) {
        return Object.defineProperty(e, t, {
          enumerable: !0,
          get: function get() {
            return n[t].parse;
          }
        });
      }, {}),
          o = Ji(t, n);

      try {
        return o.preprocess && (e = o.preprocess(e, t)), {
          text: e,
          ast: o.parse(e, r, t)
        };
      } catch (t) {
        var _n44 = t.loc;

        if (_n44) {
          var _r41 = ji.codeFrameColumns;
          throw t.codeFrame = _r41(e, _n44, {
            highlightCode: !0
          }), t.message += "\n" + t.codeFrame, t;
        }

        throw t.stack;
      }
    },
    resolveParser: Ji
  };
  var Hi = vr.UndefinedParserError,
      Gi = gt.getSupportInfo,
      Xi = zi.resolveParser,
      Yi = {
    astFormat: "estree",
    printer: {},
    originalText: void 0,
    locStart: null,
    locEnd: null
  };

  function Ki(e, t) {
    var n = _i.basename(e).toLowerCase(),
        r = Gi({
      plugins: t
    }).languages.filter(function (e) {
      return null !== e.since;
    });

    var o = r.find(function (e) {
      return e.extensions && e.extensions.some(function (e) {
        return n.endsWith(e);
      }) || e.filenames && e.filenames.some(function (e) {
        return e.toLowerCase() === n;
      });
    });

    if (!o && !n.includes(".")) {
      var _t47 = function (e) {
        if ("string" != typeof e) return "";
        var t;

        try {
          t = gr.openSync(e, "r");
        } catch (e) {
          return "";
        }

        try {
          var _e69 = new Dr(t).next().toString("utf8"),
              _n45 = _e69.match(/^#!\/(?:usr\/)?bin\/env\s+(\S+)/);

          if (_n45) return _n45[1];

          var _r42 = _e69.match(/^#!\/(?:usr\/(?:local\/)?)?bin\/(\S+)/);

          return _r42 ? _r42[1] : "";
        } catch (e) {
          return "";
        } finally {
          try {
            gr.closeSync(t);
          } catch (e) {}
        }
      }(e);

      o = r.find(function (e) {
        return e.interpreters && e.interpreters.includes(_t47);
      });
    }

    return o && o.parsers[0];
  }

  var Qi = {
    normalize: function normalize(e, t) {
      t = t || {};
      var n = Object.assign({}, e),
          r = Gi({
        plugins: e.plugins,
        showUnreleased: !0,
        showDeprecated: !0
      }).options,
          o = Object.assign({}, Yi, yr(r.filter(function (e) {
        return void 0 !== e.default;
      }).map(function (e) {
        return [e.name, e.default];
      })));
      if (!n.parser) if (n.filepath) {
        if (n.parser = Ki(n.filepath, n.plugins), !n.parser) throw new Hi("No parser could be inferred for file: ".concat(n.filepath));
      } else {
        (t.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), n.parser = "babel";
      }
      var u = Xi(ni.normalizeApiOptions(n, [r.find(function (e) {
        return "parser" === e.name;
      })], {
        passThrough: !0,
        logger: !1
      }));
      n.astFormat = u.astFormat, n.locEnd = u.locEnd, n.locStart = u.locStart;

      var i = function (e) {
        var t = e.astFormat;
        if (!t) throw new Error("getPlugin() requires astFormat to be set");
        var n = e.plugins.find(function (e) {
          return e.printers && e.printers[t];
        });
        if (!n) throw new Error("Couldn't find plugin for AST format \"".concat(t, '"'));
        return n;
      }(n);

      n.printer = i.printers[n.astFormat];
      var a = r.filter(function (e) {
        return e.pluginDefaults && void 0 !== e.pluginDefaults[i.name];
      }).reduce(function (e, t) {
        return Object.assign(e, _defineProperty({}, t.name, t.pluginDefaults[i.name]));
      }, {}),
          s = Object.assign({}, o, a);
      return Object.keys(s).forEach(function (e) {
        null == n[e] && (n[e] = s[e]);
      }), "json" === n.parser && (n.trailingComma = "none"), ni.normalizeApiOptions(n, r, Object.assign({
        passThrough: Object.keys(Yi)
      }, t));
    },
    hiddenDefaults: Yi,
    inferParser: Ki
  };

  var Zi = function e(t, n, r) {
    if (Array.isArray(t)) return t.map(function (t) {
      return e(t, n, r);
    }).filter(Boolean);
    if (!t || "object" != _typeof(t)) return t;
    var o = n.printer.massageAstNode;
    var u;
    u = o && o.ignoredProperties ? o.ignoredProperties : new Set();
    var i = {};

    for (var _i37 = 0, _Object$keys21 = Object.keys(t); _i37 < _Object$keys21.length; _i37++) {
      var _r43 = _Object$keys21[_i37];
      u.has(_r43) || "function" == typeof t[_r43] || (i[_r43] = e(t[_r43], n, t));
    }

    if (o) {
      var _e70 = o(t, i, r);

      if (null === _e70) return;
      if (_e70) return _e70;
    }

    return i;
  };

  function ea() {}

  ea.ok = function () {}, ea.strictEqual = function () {};

  var ta = _e(Object.freeze({
    __proto__: null,
    default: ea
  }));

  var _cn$builders = cn.builders,
      na = _cn$builders.concat,
      ra = _cn$builders.line,
      oa = _cn$builders.hardline,
      ua = _cn$builders.breakParent,
      ia = _cn$builders.indent,
      aa = _cn$builders.lineSuffix,
      sa = _cn$builders.join,
      ca = _cn$builders.cursor,
      la = Lt.hasNewline,
      pa = Lt.skipNewline,
      da = Lt.skipSpaces,
      fa = Lt.isPreviousLineEmpty,
      ha = Lt.addLeadingComment,
      ma = Lt.addDanglingComment,
      ga = Lt.addTrailingComment,
      Da = Symbol("child-nodes");

  function ya(e, t, n) {
    if (!e) return;
    var r = t.printer,
        o = t.locStart,
        u = t.locEnd;

    if (n) {
      if (r.canAttachComment && r.canAttachComment(e)) {
        var _t48;

        for (_t48 = n.length - 1; _t48 >= 0 && !(o(n[_t48]) <= o(e) && u(n[_t48]) <= u(e)); --_t48) {
          ;
        }

        return void n.splice(_t48 + 1, 0, e);
      }
    } else if (e[Da]) return e[Da];

    var i = r.getCommentChildNodes && r.getCommentChildNodes(e, t) || "object" == _typeof(e) && Object.keys(e).filter(function (e) {
      return "enclosingNode" !== e && "precedingNode" !== e && "followingNode" !== e && "tokens" !== e && "comments" !== e;
    }).map(function (t) {
      return e[t];
    });
    return i ? (n || Object.defineProperty(e, Da, {
      value: n = [],
      enumerable: !1
    }), i.forEach(function (e) {
      ya(e, t, n);
    }), n) : void 0;
  }

  function Ea(e, t, n) {
    var r = n.locStart,
        o = n.locEnd,
        u = r(t),
        i = o(t),
        a = ya(e, n);
    var s,
        c,
        l = 0,
        p = a.length;

    for (; l < p;) {
      var _e71 = l + p >> 1,
          _d3 = a[_e71],
          _f3 = r(_d3),
          _h3 = o(_d3);

      if (_f3 <= u && i <= _h3) return t.enclosingNode = _d3, void Ea(_d3, t, n);
      if (_f3 <= u) s = _d3, l = _e71 + 1;else {
        if (!(i <= _f3)) throw new Error("Comment location overlaps with node location");
        c = _d3, p = _e71;
      }
    }

    if (t.enclosingNode && "TemplateLiteral" === t.enclosingNode.type) {
      var _e72 = t.enclosingNode.quasis,
          _r44 = va(_e72, t, n);

      s && va(_e72, s, n) !== _r44 && (s = null), c && va(_e72, c, n) !== _r44 && (c = null);
    }

    s && (t.precedingNode = s), c && (t.followingNode = c);
  }

  function Ca(e, t, n) {
    var r = e.length;
    if (0 === r) return;
    var _e$ = e[0],
        o = _e$.precedingNode,
        u = _e$.followingNode,
        i = _e$.enclosingNode,
        a = n.printer.getGapRegex && n.printer.getGapRegex(i) || /^[\s(]*$/;
    var s,
        c = n.locStart(u);

    for (s = r; s > 0; --s) {
      var _r45 = e[s - 1];
      ta.strictEqual(_r45.precedingNode, o), ta.strictEqual(_r45.followingNode, u);

      var _i38 = t.slice(n.locEnd(_r45), c);

      if (!a.test(_i38)) break;
      c = n.locStart(_r45);
    }

    e.forEach(function (e, t) {
      t < s ? ga(o, e) : ha(u, e);
    });

    for (var _i39 = 0, _arr2 = [o, u]; _i39 < _arr2.length; _i39++) {
      var _e73 = _arr2[_i39];
      _e73.comments && _e73.comments.length > 1 && _e73.comments.sort(function (e, t) {
        return n.locStart(e) - n.locStart(t);
      });
    }

    e.length = 0;
  }

  function ba(e, t) {
    return e.getValue().printed = !0, t.printer.printComment(e, t);
  }

  function va(e, t, n) {
    var r = n.locStart(t) - 1;

    for (var _t49 = 1; _t49 < e.length; ++_t49) {
      if (r < n.locStart(e[_t49])) return _t49 - 1;
    }

    return 0;
  }

  function Aa(e, t, n) {
    return e.getNode() === t.cursorNode && e.getValue() ? na([ca, n, ca]) : n;
  }

  var Fa = {
    attach: function attach(e, t, n, r) {
      if (!Array.isArray(e)) return;
      var o = [],
          u = r.locStart,
          i = r.locEnd;
      e.forEach(function (a, s) {
        if ("json" === r.parser || "json5" === r.parser || "__js_expression" === r.parser || "__vue_expression" === r.parser) {
          if (u(a) - u(t) <= 0) return void ha(t, a);
          if (i(a) - i(t) >= 0) return void ga(t, a);
        }

        Ea(t, a, r);
        var c = a.precedingNode,
            l = a.enclosingNode,
            p = a.followingNode,
            d = r.printer.handleComments && r.printer.handleComments.ownLine ? r.printer.handleComments.ownLine : function () {
          return !1;
        },
            f = r.printer.handleComments && r.printer.handleComments.endOfLine ? r.printer.handleComments.endOfLine : function () {
          return !1;
        },
            h = r.printer.handleComments && r.printer.handleComments.remaining ? r.printer.handleComments.remaining : function () {
          return !1;
        },
            m = e.length - 1 === s;
        if (la(n, u(a), {
          backwards: !0
        })) d(a, n, r, t, m) || (p ? ha(p, a) : c ? ga(c, a) : ma(l || t, a));else if (la(n, i(a))) f(a, n, r, t, m) || (c ? ga(c, a) : p ? ha(p, a) : ma(l || t, a));else if (h(a, n, r, t, m)) ;else if (c && p) {
          var _e74 = o.length;

          if (_e74 > 0) {
            o[_e74 - 1].followingNode !== a.followingNode && Ca(o, n, r);
          }

          o.push(a);
        } else c ? ga(c, a) : p ? ha(p, a) : ma(l || t, a);
      }), Ca(o, n, r), e.forEach(function (e) {
        delete e.precedingNode, delete e.enclosingNode, delete e.followingNode;
      });
    },
    printComments: function printComments(e, t, n, r) {
      var o = e.getValue(),
          u = t(e),
          i = o && o.comments;
      if (!i || 0 === i.length) return Aa(e, n, u);
      var a = [],
          s = [r ? ";" : "", u];
      return e.each(function (e) {
        var t = e.getValue(),
            r = t.leading,
            o = t.trailing;

        if (r) {
          var _r46 = function (e, t) {
            var n = e.getValue(),
                r = ba(e, t);
            if (!r) return "";

            if (t.printer.isBlockComment && t.printer.isBlockComment(n)) {
              var _e75 = la(t.originalText, t.locEnd(n)) ? la(t.originalText, t.locStart(n), {
                backwards: !0
              }) ? oa : ra : " ";

              return na([r, _e75]);
            }

            return na([r, oa]);
          }(e, n);

          if (!_r46) return;
          a.push(_r46);

          var _o13 = n.originalText,
              _u9 = pa(_o13, da(_o13, n.locEnd(t)));

          !1 !== _u9 && la(_o13, _u9) && a.push(oa);
        } else o && s.push(function (e, t) {
          var n = e.getValue(),
              r = ba(e, t);
          if (!r) return "";
          var o = t.printer,
              u = t.originalText,
              i = t.locStart,
              a = o.isBlockComment && o.isBlockComment(n);

          if (la(u, i(n), {
            backwards: !0
          })) {
            var _e76 = fa(u, n, i);

            return aa(na([oa, _e76 ? oa : "", r]));
          }

          var s = na([" ", r]);
          return a || (s = na([aa(s), ua])), s;
        }(e, n));
      }, "comments"), Aa(e, n, na(a.concat(s)));
    },
    printDanglingComments: function printDanglingComments(e, t, n, r) {
      var o = [],
          u = e.getValue();
      return u && u.comments ? (e.each(function (e) {
        var n = e.getValue();
        !n || n.leading || n.trailing || r && !r(n) || o.push(ba(e, t));
      }, "comments"), 0 === o.length ? "" : n ? sa(oa, o) : ia(na([oa, sa(oa, o)]))) : "";
    },
    getSortedChildNodes: ya,
    ensureAllCommentsPrinted: function ensureAllCommentsPrinted(e) {
      e && e.forEach(function (e) {
        if (!e.printed) throw new Error('Comment "' + e.value.trim() + '" was not printed. Please report this error!');
        delete e.printed;
      });
    }
  };

  function xa(e, t) {
    var n = Sa(e.stack, t);
    return -1 === n ? null : e.stack[n];
  }

  function Sa(e, t) {
    for (var _n46 = e.length - 1; _n46 >= 0; _n46 -= 2) {
      var _r47 = e[_n46];
      if (_r47 && !Array.isArray(_r47) && --t < 0) return _n46;
    }

    return -1;
  }

  var wa = /*#__PURE__*/function () {
    function wa(e) {
      _classCallCheck(this, wa);

      this.stack = [e];
    }

    _createClass(wa, [{
      key: "getName",
      value: function getName() {
        var e = this.stack,
            t = e.length;
        return t > 1 ? e[t - 2] : null;
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return se(this.stack);
      }
    }, {
      key: "getNode",
      value: function getNode() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return xa(this, e);
      }
    }, {
      key: "getParentNode",
      value: function getParentNode() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return xa(this, e + 1);
      }
    }, {
      key: "call",
      value: function call(e) {
        var n = this.stack,
            r = n.length;
        var o = se(n);

        for (var _len9 = arguments.length, t = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
          t[_key9 - 1] = arguments[_key9];
        }

        for (var _i40 = 0, _t50 = t; _i40 < _t50.length; _i40++) {
          var _e77 = _t50[_i40];
          o = o[_e77], n.push(_e77, o);
        }

        var u = e(this);
        return n.length = r, u;
      }
    }, {
      key: "callParent",
      value: function callParent(e) {
        var _this$stack;

        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = Sa(this.stack, t + 1),
            r = this.stack.splice(n + 1),
            o = e(this);
        return (_this$stack = this.stack).push.apply(_this$stack, _toConsumableArray(r)), o;
      }
    }, {
      key: "each",
      value: function each(e) {
        var n = this.stack,
            r = n.length;
        var o = se(n);

        for (var _len10 = arguments.length, t = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
          t[_key10 - 1] = arguments[_key10];
        }

        for (var _i41 = 0, _t51 = t; _i41 < _t51.length; _i41++) {
          var _e78 = _t51[_i41];
          o = o[_e78], n.push(_e78, o);
        }

        for (var _t52 = 0; _t52 < o.length; ++_t52) {
          n.push(_t52, o[_t52]), e(this, _t52), n.length -= 2;
        }

        n.length = r;
      }
    }, {
      key: "map",
      value: function map(e) {
        var n = [];

        for (var _len11 = arguments.length, t = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
          t[_key11 - 1] = arguments[_key11];
        }

        return this.each.apply(this, [function (t, r) {
          n[r] = e(t, r);
        }].concat(t)), n;
      }
    }, {
      key: "match",
      value: function match() {
        var t = this.stack.length - 1,
            n = null,
            r = this.stack[t--];

        for (var _len12 = arguments.length, e = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          e[_key12] = arguments[_key12];
        }

        for (var _i42 = 0, _e79 = e; _i42 < _e79.length; _i42++) {
          var _o14 = _e79[_i42];
          if (void 0 === r) return !1;
          var _e80 = null;
          if ("number" == typeof n && (_e80 = n, n = this.stack[t--], r = this.stack[t--]), _o14 && !_o14(r, n, _e80)) return !1;
          n = this.stack[t--], r = this.stack[t--];
        }

        return !0;
      }
    }]);

    return wa;
  }();

  var Ta = cn.utils.stripTrailingHardline,
      Ba = Qi.normalize;
  var Na = {
    printSubtree: function printSubtree(e, t, n, r) {
      if (n.printer.embed && "auto" === n.embeddedLanguageFormatting) return n.printer.embed(e, t, function (e, t, o) {
        return function (e, t, n, r) {
          var _ref30 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
              _ref30$stripTrailingH = _ref30.stripTrailingHardline,
              o = _ref30$stripTrailingH === void 0 ? !1 : _ref30$stripTrailingH;

          var u = Ba(Object.assign({}, n, t, {
            parentParser: n.parser,
            embeddedInHtml: !(!n.embeddedInHtml && "html" !== n.parser && "vue" !== n.parser && "angular" !== n.parser && "lwc" !== n.parser),
            originalText: e
          }), {
            passThrough: !0
          }),
              i = zi.parse(e, u),
              a = i.ast;
          e = i.text;
          var s = a.comments;
          delete a.comments, Fa.attach(s, a, e, u), u[Symbol.for("comments")] = s || [], u[Symbol.for("tokens")] = a.tokens || [];
          var c = r(a, u);
          if (Fa.ensureAllCommentsPrinted(s), o) return "string" == typeof c ? c.replace(/(?:\r?\n)*$/, "") : Ta(c, !0);
          return c;
        }(e, t, n, r, o);
      }, n);
    }
  };
  var ka = cn,
      Pa = ka.builders,
      Oa = Pa.concat,
      Ia = Pa.hardline,
      La = Pa.addAlignmentToDoc,
      Ma = ka.utils;

  function ja(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var r = t.printer;
    r.preprocess && (e = r.preprocess(e, t));
    var o = new Map();

    var u = function e(n, u) {
      var i = n.getValue(),
          a = i && "object" == _typeof(i) && void 0 === u;
      if (a && o.has(i)) return o.get(i);
      var s;
      return s = r.willPrintOwnComments && r.willPrintOwnComments(n, t) ? _a(n, t, e, u) : Fa.printComments(n, function (n) {
        return _a(n, t, e, u);
      }, t, u && u.needsSemi), a && o.set(i, s), s;
    }(new wa(e));

    return n > 0 && (u = La(Oa([Ia, u]), n, t.tabWidth)), Ma.propagateBreaks(u), u;
  }

  function _a(e, t, n, r) {
    ta.ok(e instanceof wa);
    var o = e.getValue(),
        u = t.printer;
    if (u.hasPrettierIgnore && u.hasPrettierIgnore(e)) return function (e, t) {
      var n = t.originalText,
          r = t[Symbol.for("comments")],
          o = t.locStart,
          u = t.locEnd,
          i = o(e),
          a = u(e);

      var _iterator32 = _createForOfIteratorHelper(r),
          _step32;

      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var _e81 = _step32.value;
          o(_e81) >= i && u(_e81) <= a && (_e81.printed = !0);
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }

      return n.slice(i, a);
    }(o, t);
    if (o) try {
      var _r48 = Na.printSubtree(e, n, t, ja);

      if (_r48) return _r48;
    } catch (e) {
      if (Me.PRETTIER_DEBUG) throw e;
    }
    return u.print(e, t, n, r);
  }

  var Ra = ja;

  function Va(e, t, n, r) {
    var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

    if (!(t < n.locStart(e) || t > n.locEnd(e))) {
      var _iterator33 = _createForOfIteratorHelper(Fa.getSortedChildNodes(e, n)),
          _step33;

      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var _u10 = _step33.value;

          var _i43 = Va(_u10, t, n, r, [e].concat(_toConsumableArray(o)));

          if (_i43) return _i43;
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }

      return !r || r(e) ? {
        node: e,
        parentNodes: o
      } : void 0;
    }
  }

  var $a = new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral"]),
      qa = new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);

  function Wa(e, t) {
    if (null == t) return !1;

    switch (e.parser) {
      case "flow":
      case "babel":
      case "babel-flow":
      case "babel-ts":
      case "typescript":
      case "espree":
      case "meriyah":
        return function (e) {
          return "Directive" === e || "TypeAlias" === e || "TSExportAssignment" === e || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration");
        }(t.type);

      case "json":
        return $a.has(t.type);

      case "graphql":
        return qa.has(t.kind);

      case "vue":
        return "root" !== t.tag;
    }

    return !1;
  }

  var Ua = {
    calculateRange: function calculateRange(e, t, n) {
      var r = e.slice(t.rangeStart, t.rangeEnd),
          o = Math.max(t.rangeStart + r.search(/\S/), t.rangeStart);
      var u;

      for (u = t.rangeEnd; u > t.rangeStart && !/\S/.test(e[u - 1]); --u) {
        ;
      }

      var i = Va(n, o, t, function (e) {
        return Wa(t, e);
      }),
          a = Va(n, u, t, function (e) {
        return Wa(t, e);
      });
      if (!i || !a) return {
        rangeStart: 0,
        rangeEnd: 0
      };

      var _ref31 = function (e, t, n) {
        var r = e.node,
            o = t.node;
        if (r === o) return {
          startNode: r,
          endNode: o
        };

        var _iterator34 = _createForOfIteratorHelper(t.parentNodes),
            _step34;

        try {
          for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
            var _r49 = _step34.value;
            if (!("Program" !== _r49.type && "File" !== _r49.type && n.locStart(_r49) >= n.locStart(e.node))) break;
            o = _r49;
          }
        } catch (err) {
          _iterator34.e(err);
        } finally {
          _iterator34.f();
        }

        var _iterator35 = _createForOfIteratorHelper(e.parentNodes),
            _step35;

        try {
          for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
            var _o15 = _step35.value;
            if (!("Program" !== _o15.type && "File" !== _o15.type && n.locEnd(_o15) <= n.locEnd(t.node))) break;
            r = _o15;
          }
        } catch (err) {
          _iterator35.e(err);
        } finally {
          _iterator35.f();
        }

        return {
          startNode: r,
          endNode: o
        };
      }(i, a, t),
          s = _ref31.startNode,
          c = _ref31.endNode;

      return {
        rangeStart: Math.min(t.locStart(s), t.locStart(c)),
        rangeEnd: Math.max(t.locEnd(s), t.locEnd(c))
      };
    },
    findNodeAtOffset: Va
  };
  var Ja = cn.printer.printDocToString,
      za = cn.debug.printDocToDebug,
      Ha = Lt.getAlignmentSize,
      Ga = Mt.guessEndOfLine,
      Xa = Mt.convertEndOfLineToChars,
      Ya = Mt.countEndOfLineChars,
      Ka = Mt.normalizeEndOfLine,
      Qa = Qi.normalize,
      Za = Symbol("cursor");

  function es(e, t, n) {
    var r = t.comments;
    return r && (delete t.comments, Fa.attach(r, t, e, n)), n[Symbol.for("comments")] = r || [], n[Symbol.for("tokens")] = t.tokens || [], n.originalText = e, r;
  }

  function ts(e, t, n) {
    if (!e || !e.trim().length) return {
      formatted: "",
      cursorOffset: -1
    };
    n = n || 0;

    var _zi$parse = zi.parse(e, t),
        r = _zi$parse.ast,
        o = _zi$parse.text;

    if (t.cursorOffset >= 0) {
      var _e82 = Ua.findNodeAtOffset(r, t.cursorOffset, t);

      _e82 && _e82.node && (t.cursorNode = _e82.node);
    }

    var u = es(o, r, t),
        i = Ra(r, t, n),
        a = Ja(i, t);

    if (Fa.ensureAllCommentsPrinted(u), n > 0) {
      var _e83 = a.formatted.trim();

      void 0 !== a.cursorNodeStart && (a.cursorNodeStart -= a.formatted.indexOf(_e83)), a.formatted = _e83 + Xa(t.endOfLine);
    }

    if (t.cursorOffset >= 0) {
      var _e84, _n47, _r50, _u11, _i44;

      if (t.cursorNode && a.cursorNodeText ? (_e84 = t.locStart(t.cursorNode), _n47 = o.slice(_e84, t.locEnd(t.cursorNode)), _r50 = t.cursorOffset - _e84, _u11 = a.cursorNodeStart, _i44 = a.cursorNodeText) : (_e84 = 0, _n47 = o, _r50 = t.cursorOffset, _u11 = 0, _i44 = a.formatted), _n47 === _i44) return {
        formatted: a.formatted,
        cursorOffset: _u11 + _r50
      };

      var _s4 = _n47.split("");

      _s4.splice(_r50, 0, Za);

      var _c4 = _i44.split(""),
          _l3 = J.diffArrays(_s4, _c4);

      var _p3 = _u11;

      var _iterator36 = _createForOfIteratorHelper(_l3),
          _step36;

      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var _e85 = _step36.value;

          if (_e85.removed) {
            if (_e85.value.includes(Za)) break;
          } else _p3 += _e85.count;
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }

      return {
        formatted: a.formatted,
        cursorOffset: _p3
      };
    }

    return {
      formatted: a.formatted,
      cursorOffset: -1
    };
  }

  function ns(e, t, n) {
    return "number" != typeof t || isNaN(t) || t < 0 || t > e.length ? n : t;
  }

  function rs(e, t) {
    var n = t.cursorOffset,
        r = t.rangeStart,
        o = t.rangeEnd;
    return n = ns(e, n, -1), r = ns(e, r, 0), o = ns(e, o, e.length), Object.assign({}, t, {
      cursorOffset: n,
      rangeStart: r,
      rangeEnd: o
    });
  }

  function os(e, t) {
    var _rs = rs(e, t),
        n = _rs.cursorOffset,
        r = _rs.rangeStart,
        o = _rs.rangeEnd,
        u = _rs.endOfLine;

    var i = "\uFEFF" === e.charAt(0);

    if (i && (e = e.slice(1), n--, r--, o--), "auto" === u && (u = Ga(e)), e.includes("\r")) {
      var _t53 = function _t53(t) {
        return Ya(e.slice(0, Math.max(t, 0)), "\r\n");
      };

      n -= _t53(n), r -= _t53(r), o -= _t53(o), e = Ka(e);
    }

    return {
      hasBOM: i,
      text: e,
      options: rs(e, Object.assign({}, t, {
        cursorOffset: n,
        rangeStart: r,
        rangeEnd: o,
        endOfLine: u
      }))
    };
  }

  function us(e, t) {
    var _os = os(e, Qa(t)),
        n = _os.hasBOM,
        r = _os.text,
        o = _os.options;

    var u = zi.resolveParser(o),
        i = !u.hasPragma || u.hasPragma(r);
    if (o.requirePragma && !i) return {
      formatted: e,
      cursorOffset: t.cursorOffset
    };
    var a;
    return o.rangeStart > 0 || o.rangeEnd < r.length ? a = function (e, t) {
      var _zi$parse2 = zi.parse(e, t),
          n = _zi$parse2.ast,
          r = _zi$parse2.text,
          _Ua$calculateRange = Ua.calculateRange(r, t, n),
          o = _Ua$calculateRange.rangeStart,
          u = _Ua$calculateRange.rangeEnd,
          i = r.slice(o, u),
          a = Math.min(o, r.lastIndexOf("\n", o) + 1),
          s = r.slice(a, o).match(/^\s*/)[0],
          c = Ha(s, t.tabWidth),
          l = ts(i, Object.assign({}, t, {
        rangeStart: 0,
        rangeEnd: 1 / 0,
        cursorOffset: t.cursorOffset > o && t.cursorOffset < u ? t.cursorOffset - o : -1,
        endOfLine: "lf"
      }), c),
          p = l.formatted.trimEnd();

      var d = t.cursorOffset;
      d >= u ? d = t.cursorOffset + (p.length - i.length) : l.cursorOffset >= 0 && (d = l.cursorOffset + o);
      var f = r.slice(0, o) + p + r.slice(u);

      if ("lf" !== t.endOfLine) {
        var _e86 = Xa(t.endOfLine);

        d >= 0 && "\r\n" === _e86 && (d += Ya(f.slice(0, d), "\n")), f = f.replace(/\n/g, _e86);
      }

      return {
        formatted: f,
        cursorOffset: d
      };
    }(r, o) : (!i && o.insertPragma && o.printer.insertPragma && (r = o.printer.insertPragma(r)), a = ts(r, o)), n && (a.formatted = "\uFEFF" + a.formatted, a.cursorOffset >= 0 && a.cursorOffset++), a;
  }

  var is = {
    formatWithCursor: us,
    parse: function parse(e, t, n) {
      var _os2 = os(e, Qa(t)),
          r = _os2.text,
          o = _os2.options,
          u = zi.parse(r, o);

      return n && (u.ast = Zi(u.ast, o)), u;
    },
    formatAST: function formatAST(e, t) {
      t = Qa(t);
      var n = Ra(e, t);
      return Ja(n, t);
    },
    formatDoc: function formatDoc(e, t) {
      return us(za(e), Object.assign({}, t, {
        parser: "babel"
      })).formatted;
    },
    printToDoc: function printToDoc(e, t) {
      t = Qa(t);

      var _zi$parse3 = zi.parse(e, t),
          n = _zi$parse3.ast,
          r = _zi$parse3.text;

      return es(r, n, t), Ra(n, t);
    },
    printDocToString: function printDocToString(e, t) {
      return Ja(e, Qa(t));
    }
  };
  var as = Lt.getMaxContinuousCount,
      ss = Lt.getStringWidth,
      cs = Lt.getAlignmentSize,
      ls = Lt.getIndentSize,
      ps = Lt.skip,
      ds = Lt.skipWhitespace,
      fs = Lt.skipSpaces,
      hs = Lt.skipNewline,
      ms = Lt.skipToLineEnd,
      gs = Lt.skipEverythingButNewLine,
      Ds = Lt.skipInlineComment,
      ys = Lt.skipTrailingComment,
      Es = Lt.hasNewline,
      Cs = Lt.hasNewlineInRange,
      bs = Lt.hasSpaces,
      vs = Lt.isNextLineEmpty,
      As = Lt.isNextLineEmptyAfterIndex,
      Fs = Lt.isPreviousLineEmpty,
      xs = Lt.getNextNonSpaceNonCommentCharacterIndex,
      Ss = Lt.makeString,
      ws = Lt.addLeadingComment,
      Ts = Lt.addDanglingComment,
      Bs = Lt.addTrailingComment;

  var Ns = {
    getMaxContinuousCount: as,
    getStringWidth: ss,
    getAlignmentSize: cs,
    getIndentSize: ls,
    skip: ps,
    skipWhitespace: ds,
    skipSpaces: fs,
    skipNewline: hs,
    skipToLineEnd: ms,
    skipEverythingButNewLine: gs,
    skipInlineComment: Ds,
    skipTrailingComment: ys,
    hasNewline: Es,
    hasNewlineInRange: Cs,
    hasSpaces: bs,
    isNextLineEmpty: vs,
    isNextLineEmptyAfterIndex: As,
    isPreviousLineEmpty: Fs,
    getNextNonSpaceNonCommentCharacterIndex: xs,
    makeString: Ss,
    addLeadingComment: ws,
    addDanglingComment: Ts,
    addTrailingComment: Bs
  },
      ks = function ks(t, n) {
    var r = t.languageId,
        o = e(t, ["languageId"]);
    return Object.assign({
      linguistLanguageId: r
    }, o, n(t));
  },
      Ps = je(function (e) {
    !function () {
      function t(e) {
        if (null == e) return !1;

        switch (e.type) {
          case "BlockStatement":
          case "BreakStatement":
          case "ContinueStatement":
          case "DebuggerStatement":
          case "DoWhileStatement":
          case "EmptyStatement":
          case "ExpressionStatement":
          case "ForInStatement":
          case "ForStatement":
          case "IfStatement":
          case "LabeledStatement":
          case "ReturnStatement":
          case "SwitchStatement":
          case "ThrowStatement":
          case "TryStatement":
          case "VariableDeclaration":
          case "WhileStatement":
          case "WithStatement":
            return !0;
        }

        return !1;
      }

      function n(e) {
        switch (e.type) {
          case "IfStatement":
            return null != e.alternate ? e.alternate : e.consequent;

          case "LabeledStatement":
          case "ForStatement":
          case "ForInStatement":
          case "WhileStatement":
          case "WithStatement":
            return e.body;
        }

        return null;
      }

      e.exports = {
        isExpression: function isExpression(e) {
          if (null == e) return !1;

          switch (e.type) {
            case "ArrayExpression":
            case "AssignmentExpression":
            case "BinaryExpression":
            case "CallExpression":
            case "ConditionalExpression":
            case "FunctionExpression":
            case "Identifier":
            case "Literal":
            case "LogicalExpression":
            case "MemberExpression":
            case "NewExpression":
            case "ObjectExpression":
            case "SequenceExpression":
            case "ThisExpression":
            case "UnaryExpression":
            case "UpdateExpression":
              return !0;
          }

          return !1;
        },
        isStatement: t,
        isIterationStatement: function isIterationStatement(e) {
          if (null == e) return !1;

          switch (e.type) {
            case "DoWhileStatement":
            case "ForInStatement":
            case "ForStatement":
            case "WhileStatement":
              return !0;
          }

          return !1;
        },
        isSourceElement: function isSourceElement(e) {
          return t(e) || null != e && "FunctionDeclaration" === e.type;
        },
        isProblematicIfStatement: function isProblematicIfStatement(e) {
          var t;
          if ("IfStatement" !== e.type) return !1;
          if (null == e.alternate) return !1;
          t = e.consequent;

          do {
            if ("IfStatement" === t.type && null == t.alternate) return !0;
            t = n(t);
          } while (t);

          return !1;
        },
        trailingStatement: n
      };
    }();
  }),
      Os = je(function (e) {
    !function () {
      var t, n, r, o, u, i;

      function a(e) {
        return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) + String.fromCharCode((e - 65536) % 1024 + 56320);
      }

      for (n = {
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
      }, t = {
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
      }, r = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279], o = new Array(128), i = 0; i < 128; ++i) {
        o[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || 36 === i || 95 === i;
      }

      for (u = new Array(128), i = 0; i < 128; ++i) {
        u[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57 || 36 === i || 95 === i;
      }

      e.exports = {
        isDecimalDigit: function isDecimalDigit(e) {
          return 48 <= e && e <= 57;
        },
        isHexDigit: function isHexDigit(e) {
          return 48 <= e && e <= 57 || 97 <= e && e <= 102 || 65 <= e && e <= 70;
        },
        isOctalDigit: function isOctalDigit(e) {
          return e >= 48 && e <= 55;
        },
        isWhiteSpace: function isWhiteSpace(e) {
          return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && r.indexOf(e) >= 0;
        },
        isLineTerminator: function isLineTerminator(e) {
          return 10 === e || 13 === e || 8232 === e || 8233 === e;
        },
        isIdentifierStartES5: function isIdentifierStartES5(e) {
          return e < 128 ? o[e] : n.NonAsciiIdentifierStart.test(a(e));
        },
        isIdentifierPartES5: function isIdentifierPartES5(e) {
          return e < 128 ? u[e] : n.NonAsciiIdentifierPart.test(a(e));
        },
        isIdentifierStartES6: function isIdentifierStartES6(e) {
          return e < 128 ? o[e] : t.NonAsciiIdentifierStart.test(a(e));
        },
        isIdentifierPartES6: function isIdentifierPartES6(e) {
          return e < 128 ? u[e] : t.NonAsciiIdentifierPart.test(a(e));
        }
      };
    }();
  }),
      Is = je(function (e) {
    !function () {
      var t = Os;

      function n(e, t) {
        return !(!t && "yield" === e) && r(e, t);
      }

      function r(e, t) {
        if (t && function (e) {
          switch (e) {
            case "implements":
            case "interface":
            case "package":
            case "private":
            case "protected":
            case "public":
            case "static":
            case "let":
              return !0;

            default:
              return !1;
          }
        }(e)) return !0;

        switch (e.length) {
          case 2:
            return "if" === e || "in" === e || "do" === e;

          case 3:
            return "var" === e || "for" === e || "new" === e || "try" === e;

          case 4:
            return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;

          case 5:
            return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;

          case 6:
            return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;

          case 7:
            return "default" === e || "finally" === e || "extends" === e;

          case 8:
            return "function" === e || "continue" === e || "debugger" === e;

          case 10:
            return "instanceof" === e;

          default:
            return !1;
        }
      }

      function o(e, t) {
        return "null" === e || "true" === e || "false" === e || n(e, t);
      }

      function u(e, t) {
        return "null" === e || "true" === e || "false" === e || r(e, t);
      }

      function i(e) {
        var n, r, o;
        if (0 === e.length) return !1;
        if (o = e.charCodeAt(0), !t.isIdentifierStartES5(o)) return !1;

        for (n = 1, r = e.length; n < r; ++n) {
          if (o = e.charCodeAt(n), !t.isIdentifierPartES5(o)) return !1;
        }

        return !0;
      }

      function a(e) {
        var n, r, o, u, i;
        if (0 === e.length) return !1;

        for (i = t.isIdentifierStartES6, n = 0, r = e.length; n < r; ++n) {
          if (55296 <= (o = e.charCodeAt(n)) && o <= 56319) {
            if (++n >= r) return !1;
            if (!(56320 <= (u = e.charCodeAt(n)) && u <= 57343)) return !1;
            o = 1024 * (o - 55296) + (u - 56320) + 65536;
          }

          if (!i(o)) return !1;
          i = t.isIdentifierPartES6;
        }

        return !0;
      }

      e.exports = {
        isKeywordES5: n,
        isKeywordES6: r,
        isReservedWordES5: o,
        isReservedWordES6: u,
        isRestrictedWord: function isRestrictedWord(e) {
          return "eval" === e || "arguments" === e;
        },
        isIdentifierNameES5: i,
        isIdentifierNameES6: a,
        isIdentifierES5: function isIdentifierES5(e, t) {
          return i(e) && !o(e, t);
        },
        isIdentifierES6: function isIdentifierES6(e, t) {
          return a(e) && !u(e, t);
        }
      };
    }();
  });

  var Ls = je(function (e, t) {
    t.ast = Ps, t.code = Os, t.keyword = Is;
  }).keyword.isIdentifierNameES5,
      Ms = Lt.getLast,
      js = Lt.hasNewline,
      _s = Lt.hasNewlineInRange,
      Rs = Lt.skipWhitespace,
      Vs = ii.locStart,
      $s = ii.locEnd,
      qs = ii.hasSameLocStart,
      Ws = "(?:(?=.)\\s)",
      Us = new RegExp("^".concat(Ws, "*:")),
      Js = new RegExp("^".concat(Ws, "*::"));

  function zs(e, t) {
    if (!e || "object" != _typeof(e)) return !1;
    if (Array.isArray(e)) return e.some(function (e) {
      return zs(e, t);
    });
    var n = t(e);
    return "boolean" == typeof n ? n : Object.keys(e).some(function (n) {
      return zs(e[n], t);
    });
  }

  function Hs(e) {
    return "AssignmentExpression" === e.type || "BinaryExpression" === e.type || "LogicalExpression" === e.type || "NGPipeExpression" === e.type || "ConditionalExpression" === e.type || "CallExpression" === e.type || "OptionalCallExpression" === e.type || "MemberExpression" === e.type || "OptionalMemberExpression" === e.type || "SequenceExpression" === e.type || "TaggedTemplateExpression" === e.type || "BindExpression" === e.type || "UpdateExpression" === e.type && !e.prefix || "TSAsExpression" === e.type || "TSNonNullExpression" === e.type;
  }

  function Gs(e) {
    return "Block" === e.type || "CommentBlock" === e.type || "MultiLine" === e.type;
  }

  var Xs = new Set(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);

  function Ys(e) {
    return e && Xs.has(e.type);
  }

  function Ks(e) {
    return "BooleanLiteral" === e.type || "DirectiveLiteral" === e.type || "Literal" === e.type || "NullLiteral" === e.type || "NumericLiteral" === e.type || "BigIntLiteral" === e.type || "DecimalLiteral" === e.type || "RegExpLiteral" === e.type || "StringLiteral" === e.type || "TemplateLiteral" === e.type || "TSTypeLiteral" === e.type || "JSXText" === e.type;
  }

  function Qs(e) {
    return "NumericLiteral" === e.type || "Literal" === e.type && "number" == typeof e.value;
  }

  function Zs(e) {
    return "StringLiteral" === e.type || "Literal" === e.type && "string" == typeof e.value;
  }

  function ec(e) {
    return "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type;
  }

  function tc(e) {
    return !("CallExpression" !== e.type && "OptionalCallExpression" !== e.type || "Identifier" !== e.callee.type || "async" !== e.callee.name && "inject" !== e.callee.name && "fakeAsync" !== e.callee.name);
  }

  function nc(e) {
    return "JSXElement" === e.type || "JSXFragment" === e.type;
  }

  function rc(e) {
    return "get" === e.kind || "set" === e.kind;
  }

  function oc(e) {
    return rc(e) || qs(e, e.value);
  }

  var uc = new Set(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
  var ic = new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
  var ac = /^(skip|[fx]?(it|describe|test))$/;

  function sc(e) {
    return "CallExpression" === e.type || "OptionalCallExpression" === e.type;
  }

  var cc = new RegExp("([ \n\r\t]+)"),
      lc = new RegExp("[^ \n\r\t]");

  function pc(e) {
    return Ks(e) && (lc.test(mc(e)) || !/\n/.test(mc(e)));
  }

  function dc(e, t) {
    if (nc(t)) return xc(t);
    return t.comments && t.comments.some(function (t) {
      return t.leading && js(e, $s(t));
    });
  }

  function fc(e) {
    return /^(\d+|\d+\.\d+)$/.test(e);
  }

  function hc(e) {
    return e.quasis.some(function (e) {
      return e.value.raw.includes("\n");
    });
  }

  function mc(e) {
    return e.extra ? e.extra.raw : e.raw;
  }

  var gc = {
    "==": !0,
    "!=": !0,
    "===": !0,
    "!==": !0
  },
      Dc = {
    "*": !0,
    "/": !0,
    "%": !0
  },
      yc = {
    ">>": !0,
    ">>>": !0,
    "<<": !0
  };
  var Ec = {};

  function Cc(e) {
    return Ec[e];
  }

  [["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].forEach(function (e, t) {
    e.forEach(function (e) {
      Ec[e] = t;
    });
  });
  var bc = new WeakMap();

  function vc(e) {
    if (bc.has(e)) return bc.get(e);
    var t = [];
    return e.this && t.push(e.this), Array.isArray(e.parameters) ? t.push.apply(t, _toConsumableArray(e.parameters)) : Array.isArray(e.params) && t.push.apply(t, _toConsumableArray(e.params)), e.rest && t.push(e.rest), bc.set(e, t), t;
  }

  var Ac = new WeakMap();

  function Fc(e) {
    return "prettier-ignore" === e.value.trim();
  }

  function xc(e) {
    return e && (e.comments && e.comments.length > 0 && e.comments.some(function (e) {
      return Fc(e) && !e.unignore;
    }) || e.prettierIgnore);
  }

  function Sc(e) {
    return xc(e.getValue());
  }

  var wc = {
    classChildNeedsASIProtection: function classChildNeedsASIProtection(e) {
      if (e) {
        if (e.static || e.accessibility) return !1;

        if (!e.computed) {
          var _t54 = e.key && e.key.name;

          if ("in" === _t54 || "instanceof" === _t54) return !0;
        }

        switch (e.type) {
          case "ClassProperty":
          case "FieldDefinition":
          case "TSAbstractClassProperty":
            return e.computed;

          case "MethodDefinition":
          case "TSAbstractMethodDefinition":
          case "ClassMethod":
          case "ClassPrivateMethod":
            {
              var _t55 = e.value ? e.value.async : e.async,
                  _n48 = e.value ? e.value.generator : e.generator;

              return !_t55 && "get" !== e.kind && "set" !== e.kind && !(!e.computed && !_n48);
            }

          case "TSIndexSignature":
            return !0;

          default:
            return !1;
        }
      }
    },
    classPropMayCauseASIProblems: function classPropMayCauseASIProblems(e) {
      var t = e.getNode();
      if ("ClassProperty" !== t.type && "FieldDefinition" !== t.type) return !1;
      var n = t.key && t.key.name;
      return !("static" !== n && "get" !== n && "set" !== n || t.value || t.typeAnnotation) || void 0;
    },
    getFunctionParameters: vc,
    iterateFunctionParametersPath: function iterateFunctionParametersPath(e, t) {
      var n = e.getValue();
      var r = 0;

      var o = function o(e) {
        return t(e, r++);
      };

      n.this && e.call(o, "this"), Array.isArray(n.parameters) ? e.each(o, "parameters") : Array.isArray(n.params) && e.each(o, "params"), n.rest && e.call(o, "rest");
    },
    getCallArguments: function getCallArguments(e) {
      if (Ac.has(e)) return Ac.get(e);
      var t = "ImportExpression" === e.type ? [e.source] : e.arguments;
      return Ac.set(e, t), t;
    },
    iterateCallArgumentsPath: function iterateCallArgumentsPath(e, t) {
      "ImportExpression" === e.getValue().type ? e.call(function (e) {
        return t(e, 0);
      }, "source") : e.each(t, "arguments");
    },
    hasRestParameter: function hasRestParameter(e) {
      if (e.rest) return !0;
      var t = vc(e);
      return t.length > 0 && "RestElement" === Ms(t).type;
    },
    getLeftSidePathName: function getLeftSidePathName(e, t) {
      if (t.expressions) return ["expressions", 0];
      if (t.left) return ["left"];
      if (t.test) return ["test"];
      if (t.object) return ["object"];
      if (t.callee) return ["callee"];
      if (t.tag) return ["tag"];
      if (t.argument) return ["argument"];
      if (t.expression) return ["expression"];
      throw new Error("Unexpected node has no left side.");
    },
    getParentExportDeclaration: function getParentExportDeclaration(e) {
      var t = e.getParentNode();
      return "declaration" === e.getName() && Ys(t) ? t : null;
    },
    getTypeScriptMappedTypeModifier: function getTypeScriptMappedTypeModifier(e, t) {
      return "+" === e ? "+" + t : "-" === e ? "-" + t : t;
    },
    hasDanglingComments: function hasDanglingComments(e) {
      return e.comments && e.comments.some(function (e) {
        return !e.leading && !e.trailing;
      });
    },
    hasFlowAnnotationComment: function hasFlowAnnotationComment(e) {
      return e && Gs(e[0]) && Js.test(e[0].value);
    },
    hasFlowShorthandAnnotationComment: function hasFlowShorthandAnnotationComment(e) {
      return e.extra && e.extra.parenthesized && e.trailingComments && Gs(e.trailingComments[0]) && Us.test(e.trailingComments[0].value);
    },
    hasLeadingComment: function hasLeadingComment(e) {
      return e.comments && e.comments.some(function (e) {
        return e.leading;
      });
    },
    hasLeadingOwnLineComment: dc,
    hasNakedLeftSide: Hs,
    hasNewlineBetweenOrAfterDecorators: function hasNewlineBetweenOrAfterDecorators(e, t) {
      return _s(t.originalText, Vs(e.decorators[0]), $s(Ms(e.decorators))) || js(t.originalText, $s(Ms(e.decorators)));
    },
    hasNgSideEffect: function hasNgSideEffect(e) {
      return zs(e.getValue(), function (e) {
        switch (e.type) {
          case void 0:
            return !1;

          case "CallExpression":
          case "OptionalCallExpression":
          case "AssignmentExpression":
            return !0;
        }
      });
    },
    hasNode: zs,
    hasPrettierIgnore: function hasPrettierIgnore(e) {
      return Sc(e) || function (e) {
        var t = e.getValue(),
            n = e.getParentNode();
        if (!(n && t && nc(t) && nc(n))) return !1;
        var r = null;

        for (var _e87 = n.children.indexOf(t); _e87 > 0; _e87--) {
          var _t56 = n.children[_e87 - 1];

          if ("JSXText" !== _t56.type || pc(_t56)) {
            r = _t56;
            break;
          }
        }

        return r && "JSXExpressionContainer" === r.type && "JSXEmptyExpression" === r.expression.type && r.expression.comments && r.expression.comments.some(function (e) {
          return Fc(e);
        });
      }(e);
    },
    hasTrailingComment: function hasTrailingComment(e) {
      return e.comments && e.comments.some(function (e) {
        return e.trailing;
      });
    },
    hasTrailingLineComment: function hasTrailingLineComment(e) {
      return e.comments && e.comments.some(function (e) {
        return e.trailing && !Gs(e);
      });
    },
    hasIgnoreComment: Sc,
    hasNodeIgnoreComment: xc,
    identity: function identity(e) {
      return e;
    },
    isBinaryish: function isBinaryish(e) {
      return uc.has(e.type);
    },
    isBlockComment: Gs,
    isLineComment: function isLineComment(e) {
      return "Line" === e.type || "CommentLine" === e.type || "SingleLine" === e.type || "HashbangComment" === e.type || "HTMLOpen" === e.type || "HTMLClose" === e.type;
    },
    isPrettierIgnoreComment: Fc,
    isCallOrOptionalCallExpression: sc,
    isEmptyJSXElement: function isEmptyJSXElement(e) {
      if (0 === e.children.length) return !0;
      if (e.children.length > 1) return !1;
      var t = e.children[0];
      return Ks(t) && !pc(t);
    },
    isExportDeclaration: Ys,
    isFlowAnnotationComment: function isFlowAnnotationComment(e, t) {
      var n = Vs(t),
          r = Rs(e, $s(t));
      return !1 !== r && "/*" === e.slice(n, n + 2) && "*/" === e.slice(r, r + 2);
    },
    isFunctionCompositionArgs: function isFunctionCompositionArgs(e) {
      if (e.length <= 1) return !1;
      var t = 0;

      var _iterator37 = _createForOfIteratorHelper(e),
          _step37;

      try {
        for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
          var _n49 = _step37.value;

          if (ec(_n49)) {
            if (t += 1, t > 1) return !0;
          } else if (sc(_n49)) {
            var _iterator38 = _createForOfIteratorHelper(_n49.arguments),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var _e88 = _step38.value;
                if (ec(_e88)) return !0;
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
          }
        }
      } catch (err) {
        _iterator37.e(err);
      } finally {
        _iterator37.f();
      }

      return !1;
    },
    isFunctionNotation: oc,
    isFunctionOrArrowExpression: ec,
    isGetterOrSetter: rc,
    isJestEachTemplateLiteral: function isJestEachTemplateLiteral(e, t) {
      var n = /^[fx]?(describe|it|test)$/;
      return "TaggedTemplateExpression" === t.type && t.quasi === e && "MemberExpression" === t.tag.type && "Identifier" === t.tag.property.type && "each" === t.tag.property.name && ("Identifier" === t.tag.object.type && n.test(t.tag.object.name) || "MemberExpression" === t.tag.object.type && "Identifier" === t.tag.object.property.type && ("only" === t.tag.object.property.name || "skip" === t.tag.object.property.name) && "Identifier" === t.tag.object.object.type && n.test(t.tag.object.object.name));
    },
    isJSXNode: nc,
    isJSXWhitespaceExpression: function isJSXWhitespaceExpression(e) {
      return "JSXExpressionContainer" === e.type && Ks(e.expression) && " " === e.expression.value && !e.expression.comments;
    },
    isLastStatement: function isLastStatement(e) {
      var t = e.getParentNode();
      if (!t) return !0;
      var n = e.getValue(),
          r = (t.body || t.consequent).filter(function (e) {
        return "EmptyStatement" !== e.type;
      });
      return r[r.length - 1] === n;
    },
    isLiteral: Ks,
    isLongCurriedCallExpression: function isLongCurriedCallExpression(e) {
      var t = e.getValue(),
          n = e.getParentNode();
      return sc(t) && sc(n) && n.callee === t && t.arguments.length > n.arguments.length && n.arguments.length > 0;
    },
    isSimpleCallArgument: function e(t, n) {
      if (n >= 2) return !1;

      var r = function r(t) {
        return e(t, n + 1);
      },
          o = "Literal" === t.type && "regex" in t && t.regex.pattern || "RegExpLiteral" === t.type && t.pattern;

      return !(o && o.length > 5) && ("Literal" === t.type || "BigIntLiteral" === t.type || "DecimalLiteral" === t.type || "BooleanLiteral" === t.type || "NullLiteral" === t.type || "NumericLiteral" === t.type || "RegExpLiteral" === t.type || "StringLiteral" === t.type || "Identifier" === t.type || "ThisExpression" === t.type || "Super" === t.type || "PrivateName" === t.type || "ArgumentPlaceholder" === t.type || "Import" === t.type || ("TemplateLiteral" === t.type ? t.expressions.every(r) : "ObjectExpression" === t.type ? t.properties.every(function (e) {
        return !e.computed && (e.shorthand || e.value && r(e.value));
      }) : "ArrayExpression" === t.type ? t.elements.every(function (e) {
        return null === e || r(e);
      }) : "ImportExpression" === t.type ? r(t.source) : "CallExpression" === t.type || "OptionalCallExpression" === t.type || "NewExpression" === t.type ? e(t.callee, n) && t.arguments.every(r) : "MemberExpression" === t.type || "OptionalMemberExpression" === t.type ? e(t.object, n) && e(t.property, n) : "UnaryExpression" !== t.type || "!" !== t.operator && "-" !== t.operator ? "TSNonNullExpression" === t.type && e(t.expression, n) : e(t.argument, n)));
    },
    isMeaningfulJSXText: pc,
    isMemberExpressionChain: function e(t) {
      return ("MemberExpression" === t.type || "OptionalMemberExpression" === t.type) && ("Identifier" === t.object.type || e(t.object));
    },
    isMemberish: function isMemberish(e) {
      return "MemberExpression" === e.type || "OptionalMemberExpression" === e.type || "BindExpression" === e.type && Boolean(e.object);
    },
    isNgForOf: function isNgForOf(e, t, n) {
      return "NGMicrosyntaxKeyedExpression" === e.type && "of" === e.key.name && 1 === t && "NGMicrosyntaxLet" === n.body[0].type && null === n.body[0].value;
    },
    isNumericLiteral: Qs,
    isObjectType: function isObjectType(e) {
      return "ObjectTypeAnnotation" === e.type || "TSTypeLiteral" === e.type;
    },
    isObjectTypePropertyAFunction: function isObjectTypePropertyAFunction(e) {
      return !("ObjectTypeProperty" !== e.type && "ObjectTypeInternalSlot" !== e.type || "FunctionTypeAnnotation" !== e.value.type || e.static || oc(e));
    },
    isSimpleType: function isSimpleType(e) {
      return !!e && (!("GenericTypeAnnotation" !== e.type && "TSTypeReference" !== e.type || e.typeParameters) || !!ic.has(e.type));
    },
    isSimpleNumber: fc,
    isSimpleTemplateLiteral: function isSimpleTemplateLiteral(e) {
      var t = "expressions";
      "TSTemplateLiteralType" === e.type && (t = "types");
      var n = e[t];
      return 0 !== n.length && n.every(function (e) {
        if (e.comments) return !1;
        if ("Identifier" === e.type || "ThisExpression" === e.type) return !0;

        if ("MemberExpression" === e.type || "OptionalMemberExpression" === e.type) {
          var _t57 = e;

          for (; "MemberExpression" === _t57.type || "OptionalMemberExpression" === _t57.type;) {
            if ("Identifier" !== _t57.property.type && "Literal" !== _t57.property.type && "StringLiteral" !== _t57.property.type && "NumericLiteral" !== _t57.property.type) return !1;
            if (_t57 = _t57.object, _t57.comments) return !1;
          }

          return "Identifier" === _t57.type || "ThisExpression" === _t57.type;
        }

        return !1;
      });
    },
    isStringLiteral: Zs,
    isStringPropSafeToUnquote: function isStringPropSafeToUnquote(e, t) {
      return "json" !== t.parser && Zs(e.key) && mc(e.key).slice(1, -1) === e.key.value && (Ls(e.key.value) && !(("typescript" === t.parser || "babel-ts" === t.parser) && "ClassProperty" === e.type) || fc(e.key.value) && String(Number(e.key.value)) === e.key.value && ("babel" === t.parser || "espree" === t.parser || "meriyah" === t.parser));
    },
    isTemplateOnItsOwnLine: function isTemplateOnItsOwnLine(e, t) {
      return ("TemplateLiteral" === e.type && hc(e) || "TaggedTemplateExpression" === e.type && hc(e.quasi)) && !js(t, Vs(e), {
        backwards: !0
      });
    },
    isTestCall: function e(t, n) {
      if ("CallExpression" !== t.type) return !1;

      if (1 === t.arguments.length) {
        if (tc(t) && n && e(n)) return ec(t.arguments[0]);
        if ("Identifier" === (r = t).callee.type && /^(before|after)(Each|All)$/.test(r.callee.name) && 1 === r.arguments.length) return tc(t.arguments[0]);
      } else if ((2 === t.arguments.length || 3 === t.arguments.length) && ("Identifier" === t.callee.type && ac.test(t.callee.name) || function (e) {
        return ("MemberExpression" === e.callee.type || "OptionalMemberExpression" === e.callee.type) && "Identifier" === e.callee.object.type && "Identifier" === e.callee.property.type && ac.test(e.callee.object.name) && ("only" === e.callee.property.name || "skip" === e.callee.property.name);
      }(t)) && (function (e) {
        return "TemplateLiteral" === e.type;
      }(t.arguments[0]) || Zs(t.arguments[0]))) return !(t.arguments[2] && !Qs(t.arguments[2])) && ((2 === t.arguments.length ? ec(t.arguments[1]) : function (e) {
        return "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && "BlockStatement" === e.body.type;
      }(t.arguments[1]) && vc(t.arguments[1]).length <= 1) || tc(t.arguments[1]));

      var r;
      return !1;
    },
    isTheOnlyJSXElementInMarkdown: function isTheOnlyJSXElementInMarkdown(e, t) {
      if ("markdown" !== e.parentParser && "mdx" !== e.parentParser) return !1;
      var n = t.getNode();
      if (!n.expression || !nc(n.expression)) return !1;
      var r = t.getParentNode();
      return "Program" === r.type && 1 === r.body.length;
    },
    isTSXFile: function isTSXFile(e) {
      return e.filepath && /\.tsx$/i.test(e.filepath);
    },
    isTypeAnnotationAFunction: function isTypeAnnotationAFunction(e) {
      return !("TypeAnnotation" !== e.type && "TSTypeAnnotation" !== e.type || "FunctionTypeAnnotation" !== e.typeAnnotation.type || e.static || qs(e, e.typeAnnotation));
    },
    matchJsxWhitespaceRegex: cc,
    needsHardlineAfterDanglingComment: function needsHardlineAfterDanglingComment(e) {
      if (!e.comments) return !1;
      var t = Ms(e.comments.filter(function (e) {
        return !e.leading && !e.trailing;
      }));
      return t && !Gs(t);
    },
    rawText: mc,
    returnArgumentHasLeadingComment: function returnArgumentHasLeadingComment(e, t) {
      if (dc(e.originalText, t)) return !0;

      if (Hs(t)) {
        var _r51,
            _o16 = t;

        for (; _r51 = (n = _o16).expressions ? n.expressions[0] : n.left || n.test || n.callee || n.object || n.tag || n.argument || n.expression;) {
          if (_o16 = _r51, dc(e.originalText, _o16)) return !0;
        }
      }

      var n;
      return !1;
    },
    shouldPrintComma: function shouldPrintComma(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "es5";
      return "es5" === e.trailingComma && "es5" === t || "all" === e.trailingComma && ("all" === t || "es5" === t);
    },
    isBitwiseOperator: function isBitwiseOperator(e) {
      return !!yc[e] || "|" === e || "^" === e || "&" === e;
    },
    shouldFlatten: function shouldFlatten(e, t) {
      return Cc(t) === Cc(e) && "**" !== e && (!gc[e] || !gc[t]) && !("%" === t && Dc[e] || "%" === e && Dc[t]) && (t === e || !Dc[t] || !Dc[e]) && (!yc[e] || !yc[t]);
    },
    startsWithNoLookaheadToken: function e(t, n) {
      switch ((t = function (e) {
        for (; e.left;) {
          e = e.left;
        }

        return e;
      }(t)).type) {
        case "FunctionExpression":
        case "ClassExpression":
        case "DoExpression":
          return n;

        case "ObjectExpression":
          return !0;

        case "MemberExpression":
        case "OptionalMemberExpression":
          return e(t.object, n);

        case "TaggedTemplateExpression":
          return "FunctionExpression" !== t.tag.type && e(t.tag, n);

        case "CallExpression":
        case "OptionalCallExpression":
          return "FunctionExpression" !== t.callee.type && e(t.callee, n);

        case "ConditionalExpression":
          return e(t.test, n);

        case "UpdateExpression":
          return !t.prefix && e(t.argument, n);

        case "BindExpression":
          return t.object && e(t.object, n);

        case "SequenceExpression":
          return e(t.expressions[0], n);

        case "TSAsExpression":
          return e(t.expression, n);

        default:
          return !1;
      }
    },
    getPrecedence: Cc
  };
  var Tc = Lt.getLast,
      Bc = Lt.hasNewline,
      Nc = Lt.getNextNonSpaceNonCommentCharacterIndexWithStartIndex,
      kc = Lt.getNextNonSpaceNonCommentCharacter,
      Pc = Lt.hasNewlineInRange,
      Oc = Lt.addLeadingComment,
      Ic = Lt.addTrailingComment,
      Lc = Lt.addDanglingComment,
      Mc = Lt.getNextNonSpaceNonCommentCharacterIndex,
      jc = wc.isBlockComment,
      _c = wc.getFunctionParameters,
      Rc = wc.isPrettierIgnoreComment,
      Vc = wc.isJSXNode,
      $c = wc.hasFlowShorthandAnnotationComment,
      qc = wc.hasFlowAnnotationComment,
      Wc = wc.hasIgnoreComment,
      Uc = ii.locStart,
      Jc = ii.locEnd;

  function zc(e, t) {
    var n = (e.body || e.properties).find(function (_ref32) {
      var e = _ref32.type;
      return "EmptyStatement" !== e;
    });
    n ? Oc(n, t) : Lc(e, t);
  }

  function Hc(e, t) {
    "BlockStatement" === e.type ? zc(e, t) : Oc(e, t);
  }

  function Gc(e, t) {
    var n = e.precedingNode,
        r = e.enclosingNode,
        o = e.followingNode;
    if (!r || "IfStatement" !== r.type || !o) return !1;
    return ")" === kc(t, e, Jc) ? (Ic(n, e), !0) : n === r.consequent && o === r.alternate ? ("BlockStatement" === n.type ? Ic(n, e) : Lc(r, e), !0) : "BlockStatement" === o.type ? (zc(o, e), !0) : "IfStatement" === o.type ? (Hc(o.consequent, e), !0) : r.consequent === o && (Oc(o, e), !0);
  }

  function Xc(e, t) {
    var n = e.precedingNode,
        r = e.enclosingNode,
        o = e.followingNode;
    if (!r || "WhileStatement" !== r.type || !o) return !1;
    return ")" === kc(t, e, Jc) ? (Ic(n, e), !0) : "BlockStatement" === o.type ? (zc(o, e), !0) : r.body === o && (Oc(o, e), !0);
  }

  function Yc(e) {
    var t = e.precedingNode,
        n = e.enclosingNode,
        r = e.followingNode;
    return !(!n || "TryStatement" !== n.type && "CatchClause" !== n.type || !r) && ("CatchClause" === n.type && t ? (Ic(t, e), !0) : "BlockStatement" === r.type ? (zc(r, e), !0) : "TryStatement" === r.type ? (Hc(r.finalizer, e), !0) : "CatchClause" === r.type && (Hc(r.body, e), !0));
  }

  function Kc(e) {
    var t = e.precedingNode,
        n = e.enclosingNode,
        r = e.followingNode;

    if (n && ("ClassDeclaration" === n.type || "ClassExpression" === n.type || "DeclareClass" === n.type || "DeclareInterface" === n.type || "InterfaceDeclaration" === n.type || "TSInterfaceDeclaration" === n.type)) {
      if (n.decorators && n.decorators.length > 0 && (!r || "Decorator" !== r.type)) return Ic(n.decorators[n.decorators.length - 1], e), !0;
      if (n.body && r === n.body) return zc(n.body, e), !0;
      if (r) for (var _i45 = 0, _arr3 = ["implements", "extends", "mixins"]; _i45 < _arr3.length; _i45++) {
        var _o17 = _arr3[_i45];
        if (n[_o17] && r === n[_o17][0]) return !t || t !== n.id && t !== n.typeParameters && t !== n.superClass ? Lc(n, e, _o17) : Ic(t, e), !0;
      }
    }

    return !1;
  }

  function Qc(e, t) {
    var n = e.precedingNode,
        r = e.enclosingNode;
    return (r && n && ("Property" === r.type || "TSDeclareMethod" === r.type || "TSAbstractMethodDefinition" === r.type) && "Identifier" === n.type && r.key === n && ":" !== kc(t, n, Jc) || !(!n || !r || "Decorator" !== n.type || "ClassMethod" !== r.type && "ClassProperty" !== r.type && "FieldDefinition" !== r.type && "TSAbstractClassProperty" !== r.type && "TSAbstractMethodDefinition" !== r.type && "TSDeclareMethod" !== r.type && "MethodDefinition" !== r.type)) && (Ic(n, e), !0);
  }

  function Zc(e, t) {
    var n = e.precedingNode,
        r = e.enclosingNode,
        o = e.followingNode;
    if (n && "FunctionTypeParam" === n.type && r && "FunctionTypeAnnotation" === r.type && o && "FunctionTypeParam" !== o.type) return Ic(n, e), !0;
    if (n && ("Identifier" === n.type || "AssignmentPattern" === n.type) && r && ol(r) && ")" === kc(t, e, Jc)) return Ic(n, e), !0;

    if (r && "FunctionDeclaration" === r.type && o && "BlockStatement" === o.type) {
      var _n50 = function () {
        var e = _c(r);

        if (0 !== e.length) return Nc(t, Jc(Tc(e)));
        var n = Nc(t, Jc(r.id));
        return !1 !== n && Nc(t, n + 1);
      }();

      if (Uc(e) > _n50) return zc(o, e), !0;
    }

    return !1;
  }

  function el(e) {
    var t = e.enclosingNode;
    return !(!t || "ImportSpecifier" !== t.type) && (Oc(t, e), !0);
  }

  function tl(e) {
    var t = e.enclosingNode;
    return !(!t || "LabeledStatement" !== t.type) && (Oc(t, e), !0);
  }

  function nl(e, t, n) {
    var r = e.enclosingNode;
    return t && t.body && 0 === t.body.length ? (n ? Lc(t, e) : Oc(t, e), !0) : !(!r || "Program" !== r.type || 0 !== r.body.length || !r.directives || 0 !== r.directives.length) && (n ? Lc(r, e) : Oc(r, e), !0);
  }

  function rl(e) {
    var t = e.enclosingNode,
        n = e.followingNode;
    if (Rc(e) && t && "TSMappedType" === t.type && n && "TSTypeParameter" === n.type && n.constraint) return t.prettierIgnore = !0, e.unignore = !0, !0;
  }

  function ol(e) {
    return "ArrowFunctionExpression" === e.type || "FunctionExpression" === e.type || "FunctionDeclaration" === e.type || "ObjectMethod" === e.type || "ClassMethod" === e.type || "TSDeclareFunction" === e.type || "TSCallSignatureDeclaration" === e.type || "TSConstructSignatureDeclaration" === e.type || "TSMethodSignature" === e.type || "TSConstructorType" === e.type || "TSFunctionType" === e.type || "TSDeclareMethod" === e.type;
  }

  function ul(e) {
    return jc(e) && "*" === e.value[0] && /@type\b/.test(e.value);
  }

  var il = {
    handleOwnLineComment: function handleOwnLineComment(e, t, n, r, o) {
      return rl(e) || Zc(e, t) || function (e) {
        var t = e.enclosingNode,
            n = e.followingNode;
        if (t && ("MemberExpression" === t.type || "OptionalMemberExpression" === t.type) && n && "Identifier" === n.type) return Oc(t, e), !0;
        return !1;
      }(e) || Gc(e, t) || Xc(e, t) || Yc(e) || Kc(e) || el(e) || function (e) {
        var t = e.enclosingNode;
        if (t && ("ForInStatement" === t.type || "ForOfStatement" === t.type)) return Oc(t, e), !0;
        return !1;
      }(e) || function (e) {
        var t = e.precedingNode,
            n = e.enclosingNode,
            r = e.followingNode;
        if (n && ("UnionTypeAnnotation" === n.type || "TSUnionType" === n.type)) return Rc(e) && (r.prettierIgnore = !0, e.unignore = !0), !!t && (Ic(t, e), !0);
        r && ("UnionTypeAnnotation" === r.type || "TSUnionType" === r.type) && Rc(e) && (r.types[0].prettierIgnore = !0, e.unignore = !0);
        return !1;
      }(e) || nl(e, r, o) || function (e, t) {
        var n = e.precedingNode,
            r = e.enclosingNode;
        if (n && "ImportSpecifier" === n.type && r && "ImportDeclaration" === r.type && Bc(t, Jc(e))) return Ic(n, e), !0;
        return !1;
      }(e, t) || function (e) {
        var t = e.enclosingNode;
        if (t && "AssignmentPattern" === t.type) return Oc(t, e), !0;
        return !1;
      }(e) || Qc(e, t) || tl(e);
    },
    handleEndOfLineComment: function handleEndOfLineComment(e, t, n, r, o) {
      return function (e) {
        var t = e.followingNode;
        if (t && ul(e)) return Oc(t, e), !0;
        return !1;
      }(e) || Zc(e, t) || function (e, t) {
        var n = e.precedingNode,
            r = e.enclosingNode,
            o = e.followingNode,
            u = n && !Pc(t, Jc(n), Uc(e));
        if ((!n || !u) && r && ("ConditionalExpression" === r.type || "TSConditionalType" === r.type) && o) return Oc(o, e), !0;
        return !1;
      }(e, t) || el(e) || Gc(e, t) || Xc(e, t) || Yc(e) || Kc(e) || tl(e) || function (e) {
        var t = e.precedingNode,
            n = e.enclosingNode;
        if (n && ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && t && n.callee === t && n.arguments.length > 0) return Oc(n.arguments[0], e), !0;
        return !1;
      }(e) || function (e) {
        var t = e.enclosingNode;
        if (t && ("Property" === t.type || "ObjectProperty" === t.type)) return Oc(t, e), !0;
        return !1;
      }(e) || nl(e, r, o) || function (e) {
        var t = e.enclosingNode;
        if (t && "TypeAlias" === t.type) return Oc(t, e), !0;
        return !1;
      }(e) || function (e) {
        var t = e.enclosingNode,
            n = e.followingNode;
        if (t && ("VariableDeclarator" === t.type || "AssignmentExpression" === t.type) && n && ("ObjectExpression" === n.type || "ArrayExpression" === n.type || "TemplateLiteral" === n.type || "TaggedTemplateExpression" === n.type || jc(e))) return Oc(n, e), !0;
        return !1;
      }(e);
    },
    handleRemainingComment: function handleRemainingComment(e, t, n, r, o) {
      return !!(rl(e) || Gc(e, t) || Xc(e, t) || function (e) {
        var t = e.precedingNode,
            n = e.enclosingNode;
        if (n && ("ObjectProperty" === n.type || "Property" === n.type) && n.shorthand && n.key === t && "AssignmentPattern" === n.value.type) return Ic(n.value.left, e), !0;
        return !1;
      }(e) || function (e, t) {
        if (")" !== kc(t, e, Jc)) return !1;
        var n = e.enclosingNode;
        if (n && (ol(n) && 0 === _c(n).length || ("CallExpression" === n.type || "OptionalCallExpression" === n.type || "NewExpression" === n.type) && 0 === n.arguments.length)) return Lc(n, e), !0;
        if (n && "MethodDefinition" === n.type && 0 === _c(n.value).length) return Lc(n.value, e), !0;
        return !1;
      }(e, t) || Qc(e, t) || nl(e, r, o) || function (e, t) {
        var n = e.enclosingNode;
        if (!n || "ArrowFunctionExpression" !== n.type) return !1;
        var r = Mc(t, e, Jc);
        if (!1 !== r && "=>" === t.slice(r, r + 2)) return Lc(n, e), !0;
        return !1;
      }(e, t) || function (e, t) {
        if ("(" !== kc(t, e, Jc)) return !1;
        var n = e.precedingNode,
            r = e.enclosingNode;
        if (n && r && ("FunctionDeclaration" === r.type || "FunctionExpression" === r.type || "ClassMethod" === r.type || "MethodDefinition" === r.type || "ObjectMethod" === r.type)) return Ic(n, e), !0;
        return !1;
      }(e, t) || function (e) {
        var t = e.precedingNode,
            n = e.enclosingNode,
            r = e.followingNode;
        if (!n || "TSMappedType" !== n.type) return !1;
        if (r && "TSTypeParameter" === r.type && r.name) return Oc(r.name, e), !0;
        if (t && "TSTypeParameter" === t.type && t.constraint) return Ic(t.constraint, e), !0;
        return !1;
      }(e) || function (e) {
        var t = e.enclosingNode;
        if (t && ("ContinueStatement" === t.type || "BreakStatement" === t.type) && !t.label) return Ic(t, e), !0;
        return !1;
      }(e) || function (e, t) {
        var n = e.enclosingNode,
            r = e.followingNode;
        if (!r && n && ("TSMethodSignature" === n.type || "TSDeclareFunction" === n.type || "TSAbstractMethodDefinition" === n.type) && ";" === kc(t, e, Jc)) return Ic(n, e), !0;
        return !1;
      }(e, t));
    },
    hasLeadingComment: function hasLeadingComment(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return !0;
      };
      return e.leadingComments ? e.leadingComments.some(t) : !!e.comments && e.comments.some(function (e) {
        return e.leading && t(e);
      });
    },
    isTypeCastComment: ul,
    getGapRegex: function getGapRegex(e) {
      if (e && "BinaryExpression" !== e.type && "LogicalExpression" !== e.type) return /^[\s&(|]*$/;
    },
    getCommentChildNodes: function getCommentChildNodes(e, t) {
      if (("typescript" === t.parser || "flow" === t.parser || "espree" === t.parser || "meriyah" === t.parser) && "MethodDefinition" === e.type && e.value && "FunctionExpression" === e.value.type && 0 === _c(e.value).length && !e.value.returnType && (!e.value.typeParameters || 0 === e.value.typeParameters.length) && e.value.body) return [].concat(_toConsumableArray(e.decorators || []), [e.key, e.value.body]);
    },
    willPrintOwnComments: function willPrintOwnComments(e) {
      var t = e.getValue(),
          n = e.getParentNode();
      return (t && (Vc(t) || $c(t) || n && ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && (qc(t.leadingComments) || qc(t.trailingComments))) || n && ("JSXSpreadAttribute" === n.type || "JSXSpreadChild" === n.type || "UnionTypeAnnotation" === n.type || "TSUnionType" === n.type || ("ClassDeclaration" === n.type || "ClassExpression" === n.type) && n.superClass === t)) && (!Wc(e) || "UnionTypeAnnotation" === n.type || "TSUnionType" === n.type);
    }
  };
  var al = Lt.getStringWidth,
      sl = Lt.getIndentSize,
      _cn$builders2 = cn.builders,
      cl = _cn$builders2.concat,
      ll = _cn$builders2.join,
      pl = _cn$builders2.hardline,
      dl = _cn$builders2.softline,
      fl = _cn$builders2.group,
      hl = _cn$builders2.indent,
      ml = _cn$builders2.align,
      gl = _cn$builders2.lineSuffixBoundary,
      Dl = _cn$builders2.addAlignmentToDoc,
      yl = cn.printer.printDocToString,
      El = cn.utils.mapDoc,
      Cl = wc.isBinaryish,
      bl = wc.isJestEachTemplateLiteral,
      vl = wc.isSimpleTemplateLiteral;

  function Al(e) {
    return e.replace(/([\\`]|\${)/g, "\\$1");
  }

  var Fl = {
    printTemplateLiteral: function printTemplateLiteral(e, t, n) {
      var r = e.getValue();

      if ("TemplateLiteral" === r.type && bl(r, e.getParentNode())) {
        var _r52 = function (e, t, n) {
          var r = e.getNode(),
              o = r.quasis[0].value.raw.trim().split(/\s*\|\s*/);

          if (o.length > 1 || o.some(function (e) {
            return 0 !== e.length;
          })) {
            var _ret3 = function () {
              t.__inJestEach = !0;
              var u = e.map(n, "expressions");
              t.__inJestEach = !1;
              var i = [],
                  a = u.map(function (e) {
                return "${" + yl(e, Object.assign({}, t, {
                  printWidth: 1 / 0,
                  endOfLine: "lf"
                })).formatted + "}";
              }),
                  s = [{
                hasLineBreak: !1,
                cells: []
              }];

              for (var _e89 = 1; _e89 < r.quasis.length; _e89++) {
                var _t58 = s[s.length - 1],
                    _n51 = a[_e89 - 1];
                _t58.cells.push(_n51), _n51.includes("\n") && (_t58.hasLineBreak = !0), r.quasis[_e89].value.raw.includes("\n") && s.push({
                  hasLineBreak: !1,
                  cells: []
                });
              }

              var c = Math.max.apply(Math, [o.length].concat(_toConsumableArray(s.map(function (e) {
                return e.cells.length;
              })))),
                  l = Array.from({
                length: c
              }).fill(0),
                  p = [{
                cells: o
              }].concat(_toConsumableArray(s.filter(function (e) {
                return 0 !== e.cells.length;
              })));

              var _iterator39 = _createForOfIteratorHelper(p.filter(function (e) {
                return !e.hasLineBreak;
              })),
                  _step39;

              try {
                for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                  var _e90 = _step39.value.cells;

                  _e90.forEach(function (e, t) {
                    l[t] = Math.max(l[t], al(e));
                  });
                }
              } catch (err) {
                _iterator39.e(err);
              } finally {
                _iterator39.f();
              }

              return {
                v: (i.push(gl, "`", hl(cl([pl, ll(pl, p.map(function (e) {
                  return ll(" | ", e.cells.map(function (t, n) {
                    return e.hasLineBreak ? t : t + " ".repeat(l[n] - al(t));
                  }));
                }))])), pl, "`"), cl(i))
              };
            }();

            if (_typeof(_ret3) === "object") return _ret3.v;
          }
        }(e, n, t);

        if (_r52) return _r52;
      }

      var o = "expressions";
      "TSTemplateLiteralType" === r.type && (o = "types");
      var u = [];
      var i = e.map(t, o);
      var a = vl(r);
      return a && (i = i.map(function (e) {
        return yl(e, Object.assign({}, n, {
          printWidth: 1 / 0
        })).formatted;
      })), u.push(gl, "`"), e.each(function (e) {
        var s = e.getName();

        if (u.push(t(e)), s < i.length) {
          var _t59 = n.tabWidth,
              _c5 = e.getValue(),
              _l4 = sl(_c5.value.raw, _t59);

          var _p4 = i[s];

          if (!a) {
            var _e91 = r[o][s];
            (_e91.comments && _e91.comments.length || "MemberExpression" === _e91.type || "OptionalMemberExpression" === _e91.type || "ConditionalExpression" === _e91.type || "SequenceExpression" === _e91.type || "TSAsExpression" === _e91.type || Cl(_e91)) && (_p4 = cl([hl(cl([dl, _p4])), dl]));
          }

          var _d4 = 0 === _l4 && _c5.value.raw.endsWith("\n") ? ml(-1 / 0, _p4) : Dl(_p4, _l4, _t59);

          u.push(fl(cl(["${", _d4, gl, "}"])));
        }
      }, "quasis"), u.push("`"), cl(u);
    },
    printTemplateExpressions: function printTemplateExpressions(e, t) {
      return e.map(function (e) {
        return function (e, t) {
          var n = e.getValue();
          var r = t(e);
          return n.comments && n.comments.length && (r = fl(cl([hl(cl([dl, r])), dl]))), cl(["${", r, gl, "}"]);
        }(e, t);
      }, "expressions");
    },
    escapeTemplateCharacters: function escapeTemplateCharacters(e, t) {
      return El(e, function (e) {
        if (!e.parts) return e;
        var n = e.parts.map(function (e) {
          return "string" == typeof e ? t ? e.replace(/(\\*)`/g, "$1$1\\`") : Al(e) : e;
        });
        return Object.assign({}, e, {
          parts: n
        });
      });
    },
    uncookTemplateElementValue: Al
  };
  var _cn$builders3 = cn.builders,
      xl = _cn$builders3.indent,
      Sl = _cn$builders3.softline,
      wl = _cn$builders3.literalline,
      Tl = _cn$builders3.concat,
      Bl = _cn$builders3.dedentToRoot,
      Nl = Fl.escapeTemplateCharacters;

  var kl = function kl(e, t, n) {
    var r = e.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, function (e, t) {
      return "\\".repeat(t.length / 2) + "`";
    });

    var o = function (e) {
      var t = e.match(/^([^\S\n]*)\S/m);
      return null === t ? "" : t[1];
    }(r),
        u = "" !== o;

    u && (r = r.replace(new RegExp("^".concat(o), "gm"), ""));
    var i = Nl(n(r, {
      parser: "markdown",
      __inJsTemplate: !0
    }, {
      stripTrailingHardline: !0
    }), !0);
    return Tl(["`", u ? xl(Tl([Sl, i])) : Tl([wl, Bl(i)]), Sl, "`"]);
  };

  var _cn$builders4 = cn.builders,
      Pl = _cn$builders4.indent,
      Ol = _cn$builders4.hardline,
      Il = _cn$builders4.softline,
      Ll = _cn$builders4.concat,
      _cn$utils = cn.utils,
      Ml = _cn$utils.mapDoc,
      jl = _cn$utils.replaceNewlinesWithLiterallines,
      _l = Fl.printTemplateExpressions;

  var Rl = function Rl(e, t, n) {
    var r = e.getValue(),
        o = r.quasis.map(function (e) {
      return e.value.raw;
    });
    var u = 0;
    return function (e, t, n) {
      if (1 === t.quasis.length && !t.quasis[0].value.raw.trim()) return "``";

      var r = function (e, t) {
        if (!t || !t.length) return e;
        var n = 0;
        var r = Ml(e, function (e) {
          if (!e || !e.parts || !e.parts.length) return e;
          var r = e.parts;
          var o = r.indexOf("@"),
              u = o + 1;

          if (o > -1 && "string" == typeof r[u] && r[u].startsWith("prettier-placeholder")) {
            var _e92 = r[o],
                _t60 = r[u],
                _n52 = r.slice(u + 1);

            r = r.slice(0, o).concat([_e92 + _t60]).concat(_n52);
          }

          var i = [];
          return r.forEach(function (e) {
            "string" == typeof e && e.includes("@prettier-placeholder") ? e.split(/@prettier-placeholder-(\d+)-id/).forEach(function (e, r) {
              r % 2 != 0 ? (i.push(t[e]), n++) : i.push(jl(e));
            }) : i.push(e);
          }), Object.assign({}, e, {
            parts: i
          });
        });
        return t.length === n ? r : null;
      }(e, n);

      if (!r) throw new Error("Couldn't insert all the expressions");
      return Ll(["`", Pl(Ll([Ol, r])), Il, "`"]);
    }(n(o.reduce(function (e, t, n) {
      return 0 === n ? t : e + "@prettier-placeholder-" + u++ + "-id" + t;
    }, ""), {
      parser: "scss"
    }, {
      stripTrailingHardline: !0
    }), r, _l(e, t));
  };

  var _cn$builders5 = cn.builders,
      Vl = _cn$builders5.indent,
      $l = _cn$builders5.join,
      ql = _cn$builders5.hardline,
      Wl = _cn$builders5.concat,
      Ul = Fl.escapeTemplateCharacters,
      Jl = Fl.printTemplateExpressions;

  function zl(e) {
    var t = [];
    var n = !1;
    return e.map(function (e) {
      return e.trim();
    }).forEach(function (e, r, o) {
      "" !== e && ("" === o[r - 1] && n ? t.push(Wl([ql, e])) : t.push(e), n = !0);
    }), 0 === t.length ? null : $l(ql, t);
  }

  var Hl = function Hl(e, t, n) {
    var r = e.getValue(),
        o = r.quasis.length;
    if (1 === o && "" === r.quasis[0].value.raw.trim()) return "``";
    var u = Jl(e, t),
        i = [];

    for (var _e93 = 0; _e93 < o; _e93++) {
      var _t61 = 0 === _e93,
          _a4 = _e93 === o - 1,
          _s5 = r.quasis[_e93].value.cooked,
          _c6 = _s5.split("\n"),
          _l5 = _c6.length,
          _p5 = u[_e93],
          _d5 = _l5 > 2 && "" === _c6[0].trim() && "" === _c6[1].trim(),
          _f4 = _l5 > 2 && "" === _c6[_l5 - 1].trim() && "" === _c6[_l5 - 2].trim(),
          _h4 = _c6.every(function (e) {
        return /^\s*(?:#[^\n\r]*)?$/.test(e);
      });

      if (!_a4 && /#[^\n\r]*$/.test(_c6[_l5 - 1])) return null;
      var _m3 = null;
      _m3 = _h4 ? zl(_c6) : n(_s5, {
        parser: "graphql"
      }, {
        stripTrailingHardline: !0
      }), _m3 ? (_m3 = Ul(_m3, !1), !_t61 && _d5 && i.push(""), i.push(_m3), !_a4 && _f4 && i.push("")) : _t61 || _a4 || !_d5 || i.push(""), _p5 && i.push(_p5);
    }

    return Wl(["`", Vl(Wl([ql, $l(ql, i)])), ql, "`"]);
  };

  var _cn$builders6 = cn.builders,
      Gl = _cn$builders6.indent,
      Xl = _cn$builders6.line,
      Yl = _cn$builders6.hardline,
      Kl = _cn$builders6.concat,
      Ql = _cn$builders6.group,
      Zl = cn.utils.mapDoc,
      ep = Fl.printTemplateExpressions,
      tp = Fl.uncookTemplateElementValue;
  var np = 0;

  var rp = function rp(e, t, n, r, _ref33) {
    var o = _ref33.parser;
    var u = e.getValue(),
        i = np;
    np = np + 1 >>> 0;

    var a = function a(e) {
      return "PRETTIER_HTML_PLACEHOLDER_".concat(e, "_").concat(i, "_IN_JS");
    },
        s = u.quasis.map(function (e, t, n) {
      return t === n.length - 1 ? e.value.cooked : e.value.cooked + a(t);
    }).join(""),
        c = ep(e, t);

    if (0 === c.length && 0 === s.trim().length) return "``";
    var l = new RegExp(a("(\\d+)"), "g");
    var p = 0;
    var d = n(s, {
      parser: o,
      __onHtmlRoot: function __onHtmlRoot(e) {
        p = e.children.length;
      }
    }, {
      stripTrailingHardline: !0
    }),
        f = Zl(d, function (e) {
      if ("string" != typeof e) return e;
      var t = [],
          n = e.split(l);

      for (var _e94 = 0; _e94 < n.length; _e94++) {
        var _o18 = n[_e94];

        if (_e94 % 2 == 0) {
          _o18 && (_o18 = tp(_o18), r.embeddedInHtml && (_o18 = _o18.replace(/<\/(script)\b/gi, "<\\/$1")), t.push(_o18));
          continue;
        }

        var _u12 = +_o18;

        t.push(c[_u12]);
      }

      return Kl(t);
    }),
        h = /^\s/.test(s) ? " " : "",
        m = /\s$/.test(s) ? " " : "",
        g = "ignore" === r.htmlWhitespaceSensitivity ? Yl : h && m ? Xl : null;
    return Ql(Kl(g ? ["`", Gl(Kl([g, Ql(f)])), g, "`"] : ["`", h, p > 1 ? Gl(Ql(f)) : Ql(f), m, "`"]));
  };

  var op = wc.isBlockComment,
      up = il.hasLeadingComment;

  function ip(e) {
    return function (e) {
      var t = e.getValue(),
          n = e.getParentNode(),
          r = e.getParentNode(1);
      return r && t.quasis && "JSXExpressionContainer" === n.type && "JSXElement" === r.type && "style" === r.openingElement.name.name && r.openingElement.attributes.some(function (e) {
        return "jsx" === e.name.name;
      }) || n && "TaggedTemplateExpression" === n.type && "Identifier" === n.tag.type && "css" === n.tag.name || n && "TaggedTemplateExpression" === n.type && "MemberExpression" === n.tag.type && "css" === n.tag.object.name && ("global" === n.tag.property.name || "resolve" === n.tag.property.name);
    }(e) || function (e) {
      var t = e.getParentNode();
      if (!t || "TaggedTemplateExpression" !== t.type) return !1;
      var n = t.tag;

      switch (n.type) {
        case "MemberExpression":
          return sp(n.object) || cp(n);

        case "CallExpression":
          return sp(n.callee) || "MemberExpression" === n.callee.type && ("MemberExpression" === n.callee.object.type && (sp(n.callee.object.object) || cp(n.callee.object)) || "CallExpression" === n.callee.object.type && sp(n.callee.object.callee));

        case "Identifier":
          return "css" === n.name;

        default:
          return !1;
      }
    }(e) || function (e) {
      var t = e.getParentNode(),
          n = e.getParentNode(1);
      return n && "JSXExpressionContainer" === t.type && "JSXAttribute" === n.type && "JSXIdentifier" === n.name.type && "css" === n.name.name;
    }(e) || function (e) {
      return e.match.apply(e, [function (e) {
        return "TemplateLiteral" === e.type;
      }, function (e, t) {
        return "ArrayExpression" === e.type && "elements" === t;
      }, function (e, t) {
        return ("Property" === e.type || "ObjectProperty" === e.type) && "Identifier" === e.key.type && "styles" === e.key.name && "value" === t;
      }].concat(ap));
    }(e) ? "css" : function (e) {
      var t = e.getValue(),
          n = e.getParentNode();
      return lp(t, "GraphQL") || n && ("TaggedTemplateExpression" === n.type && ("MemberExpression" === n.tag.type && "graphql" === n.tag.object.name && "experimental" === n.tag.property.name || "Identifier" === n.tag.type && ("gql" === n.tag.name || "graphql" === n.tag.name)) || "CallExpression" === n.type && "Identifier" === n.callee.type && "graphql" === n.callee.name);
    }(e) ? "graphql" : function (e) {
      return lp(e.getValue(), "HTML") || e.match(function (e) {
        return "TemplateLiteral" === e.type;
      }, function (e, t) {
        return "TaggedTemplateExpression" === e.type && "Identifier" === e.tag.type && "html" === e.tag.name && "quasi" === t;
      });
    }(e) ? "html" : function (e) {
      return e.match.apply(e, [function (e) {
        return "TemplateLiteral" === e.type;
      }, function (e, t) {
        return ("Property" === e.type || "ObjectProperty" === e.type) && "Identifier" === e.key.type && "template" === e.key.name && "value" === t;
      }].concat(ap));
    }(e) ? "angular" : function (e) {
      var t = e.getValue(),
          n = e.getParentNode();
      return n && "TaggedTemplateExpression" === n.type && 1 === t.quasis.length && "Identifier" === n.tag.type && ("md" === n.tag.name || "markdown" === n.tag.name);
    }(e) ? "markdown" : void 0;
  }

  var ap = [function (e, t) {
    return "ObjectExpression" === e.type && "properties" === t;
  }, function (e, t) {
    return "CallExpression" === e.type && "Identifier" === e.callee.type && "Component" === e.callee.name && "arguments" === t;
  }, function (e, t) {
    return "Decorator" === e.type && "expression" === t;
  }];

  function sp(e) {
    return "Identifier" === e.type && "styled" === e.name;
  }

  function cp(e) {
    return /^[A-Z]/.test(e.object.name) && "extend" === e.property.name;
  }

  function lp(e, t) {
    return up(e, function (e) {
      return op(e) && e.value === " ".concat(t, " ");
    });
  }

  var pp = function pp(e, t, n, r) {
    var o = e.getValue();
    if ("TemplateLiteral" !== o.type || function (_ref34) {
      var e = _ref34.quasis;
      return e.some(function (_ref35) {
        var e = _ref35.value.cooked;
        return null === e;
      });
    }(o)) return;
    var u = ip(e);
    return u ? "markdown" === u ? kl(e, t, n) : "css" === u ? Rl(e, t, n) : "graphql" === u ? Hl(e, t, n) : "html" === u || "angular" === u ? rp(e, t, n, r, {
      parser: u
    }) : void 0 : void 0;
  };

  var dp = wc.isBlockComment,
      fp = new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]);

  function hp(e, t, n) {
    if ("Program" === e.type && delete t.sourceType, "BigIntLiteral" !== e.type && "BigIntLiteralTypeAnnotation" !== e.type || t.value && (t.value = t.value.toLowerCase()), "BigIntLiteral" !== e.type && "Literal" !== e.type || t.bigint && (t.bigint = t.bigint.toLowerCase()), "DecimalLiteral" === e.type && (t.value = Number(t.value)), "EmptyStatement" === e.type) return null;
    if ("JSXText" === e.type) return null;
    if ("JSXExpressionContainer" === e.type && ("Literal" === e.expression.type || "StringLiteral" === e.expression.type) && " " === e.expression.value) return null;

    if ("Property" !== e.type && "ObjectProperty" !== e.type && "MethodDefinition" !== e.type && "ClassProperty" !== e.type && "ClassMethod" !== e.type && "FieldDefinition" !== e.type && "TSDeclareMethod" !== e.type && "TSPropertySignature" !== e.type && "ObjectTypeProperty" !== e.type || "object" != _typeof(e.key) || !e.key || "Literal" !== e.key.type && "NumericLiteral" !== e.key.type && "StringLiteral" !== e.key.type && "Identifier" !== e.key.type || delete t.key, "OptionalMemberExpression" === e.type && !1 === e.optional && (t.type = "MemberExpression", delete t.optional), "JSXElement" === e.type && "style" === e.openingElement.name.name && e.openingElement.attributes.some(function (e) {
      return "jsx" === e.name.name;
    })) {
      t.children.filter(function (e) {
        return "JSXExpressionContainer" === e.type && "TemplateLiteral" === e.expression.type;
      }).map(function (e) {
        return e.expression;
      }).reduce(function (e, t) {
        return e.concat(t.quasis);
      }, []).forEach(function (e) {
        return delete e.value;
      });
    }

    "JSXAttribute" === e.type && "css" === e.name.name && "JSXExpressionContainer" === e.value.type && "TemplateLiteral" === e.value.expression.type && t.value.expression.quasis.forEach(function (e) {
      return delete e.value;
    }), "JSXAttribute" === e.type && e.value && "Literal" === e.value.type && /["']|&quot;|&apos;/.test(e.value.value) && (t.value.value = t.value.value.replace(/["']|&quot;|&apos;/g, '"'));
    var r = e.expression || e.callee;

    if ("Decorator" === e.type && "CallExpression" === r.type && "Component" === r.callee.name && 1 === r.arguments.length) {
      var _n53 = e.expression.arguments[0].properties;
      t.expression.arguments[0].properties.forEach(function (e, t) {
        var r = null;

        switch (_n53[t].key.name) {
          case "styles":
            "ArrayExpression" === e.value.type && (r = e.value.elements[0]);
            break;

          case "template":
            "TemplateLiteral" === e.value.type && (r = e.value);
        }

        r && r.quasis.forEach(function (e) {
          return delete e.value;
        });
      });
    }

    if ("TaggedTemplateExpression" !== e.type || "MemberExpression" !== e.tag.type && ("Identifier" !== e.tag.type || "gql" !== e.tag.name && "graphql" !== e.tag.name && "css" !== e.tag.name && "md" !== e.tag.name && "markdown" !== e.tag.name && "html" !== e.tag.name) && "CallExpression" !== e.tag.type || t.quasi.quasis.forEach(function (e) {
      return delete e.value;
    }), "TemplateLiteral" === e.type) {
      (e.leadingComments && e.leadingComments.some(function (e) {
        return dp(e) && ["GraphQL", "HTML"].some(function (t) {
          return e.value === " ".concat(t, " ");
        });
      }) || "CallExpression" === n.type && "graphql" === n.callee.name) && t.quasis.forEach(function (e) {
        return delete e.value;
      }), e.leadingComments || t.quasis.forEach(function (e) {
        e.value && delete e.value.cooked;
      });
    }

    "InterpreterDirective" === e.type && (t.value = t.value.trimEnd());
  }

  hp.ignoredProperties = fp;
  var mp = hp;

  var gp = function gp(e) {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    var t = e.match(/(?:\r?\n)/g) || [];
    if (0 === t.length) return;
    var n = t.filter(function (e) {
      return "\r\n" === e;
    }).length;
    return n > t.length - n ? "\r\n" : "\n";
  };

  var Dp = gp;

  Dp.graceful = function (e) {
    return "string" == typeof e && gp(e) || "\n";
  };

  var yp = je(function (e, t) {
    function n() {
      var e = qr;
      return n = function n() {
        return e;
      }, e;
    }

    function r() {
      var e = (t = Dp) && t.__esModule ? t : {
        default: t
      };
      var t;
      return r = function r() {
        return e;
      }, e;
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.extract = function (e) {
      var t = e.match(i);
      return t ? t[0].trimLeft() : "";
    }, t.strip = function (e) {
      var t = e.match(i);
      return t && t[0] ? e.substring(t[0].length) : e;
    }, t.parse = function (e) {
      return f(e).pragmas;
    }, t.parseWithComments = f, t.print = function (_ref36) {
      var _ref36$comments = _ref36.comments,
          e = _ref36$comments === void 0 ? "" : _ref36$comments,
          _ref36$pragmas = _ref36.pragmas,
          t = _ref36$pragmas === void 0 ? {} : _ref36$pragmas;
      var o = (0, r().default)(e) || n().EOL,
          u = " *",
          i = Object.keys(t),
          a = i.map(function (e) {
        return h(e, t[e]);
      }).reduce(function (e, t) {
        return e.concat(t);
      }, []).map(function (e) {
        return " * " + e + o;
      }).join("");

      if (!e) {
        if (0 === i.length) return "";

        if (1 === i.length && !Array.isArray(t[i[0]])) {
          var _e95 = t[i[0]];
          return "".concat("/**", " ").concat(h(i[0], _e95)[0]).concat(" */");
        }
      }

      var s = e.split(o).map(function (e) {
        return "".concat(u, " ").concat(e);
      }).join(o) + o;
      return "/**" + o + (e ? s : "") + (e && i.length ? u + o : "") + a + " */";
    };
    var o = /\*\/$/,
        u = /^\/\*\*/,
        i = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
        a = /(^|\s+)\/\/([^\r\n]*)/g,
        s = /^(\r?\n)+/,
        c = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
        l = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
        p = /(\r?\n|^) *\* ?/g,
        d = [];

    function f(e) {
      var t = (0, r().default)(e) || n().EOL;
      e = e.replace(u, "").replace(o, "").replace(p, "$1");
      var i = "";

      for (; i !== e;) {
        i = e, e = e.replace(c, "".concat(t, "$1 $2").concat(t));
      }

      e = e.replace(s, "").trimRight();
      var f = Object.create(null),
          h = e.replace(l, "").replace(s, "").trimRight();
      var m;

      for (; m = l.exec(e);) {
        var _e96 = m[2].replace(a, "");

        "string" == typeof f[m[1]] || Array.isArray(f[m[1]]) ? f[m[1]] = d.concat(f[m[1]], _e96) : f[m[1]] = _e96;
      }

      return {
        comments: h,
        pragmas: f
      };
    }

    function h(e, t) {
      return d.concat(t).map(function (t) {
        return "@".concat(e, " ").concat(t).trim();
      });
    }
  });
  var Ep = yp.parseWithComments,
      Cp = yp.strip,
      bp = yp.extract,
      vp = yp.print,
      Ap = Lt.getShebang,
      Fp = Mt.normalizeEndOfLine;

  function xp(e) {
    var t = Ap(e);
    t && (e = e.slice(t.length + 1));

    var n = bp(e),
        _Ep = Ep(n),
        r = _Ep.pragmas,
        o = _Ep.comments;

    return {
      shebang: t,
      text: e,
      pragmas: r,
      comments: o
    };
  }

  var Sp = {
    hasPragma: function hasPragma(e) {
      var t = Object.keys(xp(e).pragmas);
      return t.includes("prettier") || t.includes("format");
    },
    insertPragma: function insertPragma(e) {
      var _xp = xp(e),
          t = _xp.shebang,
          n = _xp.text,
          r = _xp.pragmas,
          o = _xp.comments,
          u = Cp(n),
          i = vp({
        pragmas: Object.assign({
          format: ""
        }, r),
        comments: o.trimStart()
      });

      return (t ? "".concat(t, "\n") : "") + Fp(i) + (u.startsWith("\n") ? "\n" : "\n\n") + u;
    }
  };
  var wp = wc.getFunctionParameters,
      Tp = wc.getLeftSidePathName,
      Bp = wc.hasFlowShorthandAnnotationComment,
      Np = wc.hasNakedLeftSide,
      kp = wc.hasNode,
      Pp = wc.isBitwiseOperator,
      Op = wc.startsWithNoLookaheadToken,
      Ip = wc.shouldFlatten,
      Lp = wc.getPrecedence;

  function Mp(e, t) {
    var n = e.getParentNode();
    if (!n) return !1;
    var r = e.getName(),
        o = e.getNode();
    if (t.__isInHtmlInterpolation && !t.bracketSpacing && function (e) {
      switch (e.type) {
        case "ObjectExpression":
          return !0;

        default:
          return !1;
      }
    }(o) && jp(e)) return !0;
    if (function (e) {
      return "BlockStatement" === e.type || "BreakStatement" === e.type || "ClassBody" === e.type || "ClassDeclaration" === e.type || "ClassMethod" === e.type || "ClassProperty" === e.type || "FieldDefinition" === e.type || "ClassPrivateProperty" === e.type || "ContinueStatement" === e.type || "DebuggerStatement" === e.type || "DeclareClass" === e.type || "DeclareExportAllDeclaration" === e.type || "DeclareExportDeclaration" === e.type || "DeclareFunction" === e.type || "DeclareInterface" === e.type || "DeclareModule" === e.type || "DeclareModuleExports" === e.type || "DeclareVariable" === e.type || "DoWhileStatement" === e.type || "EnumDeclaration" === e.type || "ExportAllDeclaration" === e.type || "ExportDefaultDeclaration" === e.type || "ExportNamedDeclaration" === e.type || "ExpressionStatement" === e.type || "ForInStatement" === e.type || "ForOfStatement" === e.type || "ForStatement" === e.type || "FunctionDeclaration" === e.type || "IfStatement" === e.type || "ImportDeclaration" === e.type || "InterfaceDeclaration" === e.type || "LabeledStatement" === e.type || "MethodDefinition" === e.type || "ReturnStatement" === e.type || "SwitchStatement" === e.type || "ThrowStatement" === e.type || "TryStatement" === e.type || "TSDeclareFunction" === e.type || "TSEnumDeclaration" === e.type || "TSImportEqualsDeclaration" === e.type || "TSInterfaceDeclaration" === e.type || "TSModuleDeclaration" === e.type || "TSNamespaceExportDeclaration" === e.type || "TypeAlias" === e.type || "VariableDeclaration" === e.type || "WhileStatement" === e.type || "WithStatement" === e.type;
    }(o)) return !1;
    if ("flow" !== t.parser && Bp(e.getValue())) return !0;
    if ("Identifier" === o.type) return !!(o.extra && o.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(o.name));

    switch (n.type) {
      case "ParenthesizedExpression":
        return !1;

      case "ClassDeclaration":
      case "ClassExpression":
        if ("superClass" === r && ("ArrowFunctionExpression" === o.type || "AssignmentExpression" === o.type || "AwaitExpression" === o.type || "BinaryExpression" === o.type || "ConditionalExpression" === o.type || "LogicalExpression" === o.type || "NewExpression" === o.type || "ObjectExpression" === o.type || "ParenthesizedExpression" === o.type || "SequenceExpression" === o.type || "TaggedTemplateExpression" === o.type || "UnaryExpression" === o.type || "UpdateExpression" === o.type || "YieldExpression" === o.type)) return !0;
        break;

      case "ExportDefaultDeclaration":
        return _p(e, t) || "SequenceExpression" === o.type;

      case "Decorator":
        if ("expression" === r) {
          var _e97 = !1,
              _t62 = !1,
              _n54 = o;

          for (; _n54;) {
            switch (_n54.type) {
              case "MemberExpression":
                _t62 = !0, _n54 = _n54.object;
                break;

              case "CallExpression":
                if (_t62 || _e97) return !0;
                _e97 = !0, _n54 = _n54.callee;
                break;

              case "Identifier":
                return !1;

              default:
                return !0;
            }
          }

          return !0;
        }

        break;

      case "ExpressionStatement":
        if (Op(o, !0)) return !0;
        break;

      case "ArrowFunctionExpression":
        if ("body" === r && "SequenceExpression" !== o.type && Op(o, !1)) return !0;
    }

    switch (o.type) {
      case "SpreadElement":
      case "SpreadProperty":
        return "object" === r && "MemberExpression" === n.type;

      case "UpdateExpression":
        if ("UnaryExpression" === n.type) return o.prefix && ("++" === o.operator && "+" === n.operator || "--" === o.operator && "-" === n.operator);

      case "UnaryExpression":
        switch (n.type) {
          case "UnaryExpression":
            return o.operator === n.operator && ("+" === o.operator || "-" === o.operator);

          case "BindExpression":
            return !0;

          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;

          case "TaggedTemplateExpression":
            return !0;

          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;

          case "BinaryExpression":
            return "left" === r && "**" === n.operator;

          case "TSNonNullExpression":
            return !0;

          default:
            return !1;
        }

      case "BinaryExpression":
        if ("UpdateExpression" === n.type || "PipelineTopicExpression" === n.type && "|>" === o.operator) return !0;
        if ("in" === o.operator && function (e) {
          var t = 0,
              n = e.getValue();

          for (; n;) {
            var _r53 = e.getParentNode(t++);

            if (_r53 && "ForStatement" === _r53.type && _r53.init === n) return !0;
            n = _r53;
          }

          return !1;
        }(e)) return !0;

        if ("|>" === o.operator && o.extra && o.extra.parenthesized) {
          var _t63 = e.getParentNode(1);

          if ("BinaryExpression" === _t63.type && "|>" === _t63.operator) return !0;
        }

      case "TSTypeAssertion":
      case "TSAsExpression":
      case "LogicalExpression":
        switch (n.type) {
          case "ConditionalExpression":
            return "TSAsExpression" === o.type;

          case "CallExpression":
          case "NewExpression":
          case "OptionalCallExpression":
            return "callee" === r;

          case "ClassExpression":
          case "ClassDeclaration":
            return "superClass" === r;

          case "TSTypeAssertion":
          case "TaggedTemplateExpression":
          case "UnaryExpression":
          case "JSXSpreadAttribute":
          case "SpreadElement":
          case "SpreadProperty":
          case "BindExpression":
          case "AwaitExpression":
          case "TSAsExpression":
          case "TSNonNullExpression":
          case "UpdateExpression":
            return !0;

          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;

          case "AssignmentExpression":
            return "left" === r && ("TSTypeAssertion" === o.type || "TSAsExpression" === o.type);

          case "LogicalExpression":
            if ("LogicalExpression" === o.type) return n.operator !== o.operator;

          case "BinaryExpression":
            {
              var _e98 = o.operator,
                  _t64 = o.type;
              if (!_e98 && "TSTypeAssertion" !== _t64) return !0;

              var _u13 = Lp(_e98),
                  _i46 = n.operator,
                  _a5 = Lp(_i46);

              return _a5 > _u13 || "right" === r && _a5 === _u13 || _a5 === _u13 && !Ip(_i46, _e98) || (_a5 < _u13 && "%" === _e98 ? "+" === _i46 || "-" === _i46 : !!Pp(_i46));
            }

          default:
            return !1;
        }

      case "SequenceExpression":
        switch (n.type) {
          case "ReturnStatement":
          case "ForStatement":
            return !1;

          case "ExpressionStatement":
            return "expression" !== r;

          case "ArrowFunctionExpression":
            return "body" !== r;

          default:
            return !0;
        }

      case "YieldExpression":
        if ("UnaryExpression" === n.type || "AwaitExpression" === n.type || "TSAsExpression" === n.type || "TSNonNullExpression" === n.type) return !0;

      case "AwaitExpression":
        switch (n.type) {
          case "TaggedTemplateExpression":
          case "UnaryExpression":
          case "LogicalExpression":
          case "SpreadElement":
          case "SpreadProperty":
          case "TSAsExpression":
          case "TSNonNullExpression":
          case "BindExpression":
            return !0;

          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;

          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;

          case "ConditionalExpression":
            return "test" === r;

          case "BinaryExpression":
            return !(!o.argument && "|>" === n.operator);

          default:
            return !1;
        }

      case "TSJSDocFunctionType":
      case "TSConditionalType":
        if ("extendsType" === r && "TSConditionalType" === n.type) return !0;

      case "TSFunctionType":
      case "TSConstructorType":
        if ("checkType" === r && "TSConditionalType" === n.type) return !0;

      case "TSUnionType":
      case "TSIntersectionType":
        if ("TSUnionType" === n.type || "TSIntersectionType" === n.type) return !0;

      case "TSInferType":
        if ("TSInferType" === o.type && "TSRestType" === n.type) return !1;

      case "TSTypeOperator":
        return "TSArrayType" === n.type || "TSOptionalType" === n.type || "TSRestType" === n.type || "objectType" === r && "TSIndexedAccessType" === n.type || "TSTypeOperator" === n.type || "TSTypeAnnotation" === n.type && /^TSJSDoc/.test(e.getParentNode(1).type);

      case "ArrayTypeAnnotation":
        return "NullableTypeAnnotation" === n.type;

      case "IntersectionTypeAnnotation":
      case "UnionTypeAnnotation":
        return "ArrayTypeAnnotation" === n.type || "NullableTypeAnnotation" === n.type || "IntersectionTypeAnnotation" === n.type || "UnionTypeAnnotation" === n.type;

      case "NullableTypeAnnotation":
        return "ArrayTypeAnnotation" === n.type;

      case "FunctionTypeAnnotation":
        {
          var _t65 = "NullableTypeAnnotation" === n.type ? e.getParentNode(1) : n;

          return "UnionTypeAnnotation" === _t65.type || "IntersectionTypeAnnotation" === _t65.type || "ArrayTypeAnnotation" === _t65.type || "NullableTypeAnnotation" === _t65.type || "FunctionTypeParam" === n.type && null === n.name && wp(o).some(function (e) {
            return e.typeAnnotation && "NullableTypeAnnotation" === e.typeAnnotation.type;
          });
        }

      case "StringLiteral":
      case "NumericLiteral":
      case "Literal":
        if ("string" == typeof o.value && "ExpressionStatement" === n.type && !n.directive) {
          var _t66 = e.getParentNode(1);

          return "Program" === _t66.type || "BlockStatement" === _t66.type;
        }

        return "object" === r && "MemberExpression" === n.type && "number" == typeof o.value;

      case "AssignmentExpression":
        {
          var _t67 = e.getParentNode(1);

          return "body" === r && "ArrowFunctionExpression" === n.type || ("key" !== r || "ClassProperty" !== n.type && "FieldDefinition" !== n.type || !n.computed) && ("init" !== r && "update" !== r || "ForStatement" !== n.type) && ("ExpressionStatement" === n.type ? "ObjectPattern" === o.left.type : ("key" !== r || "TSPropertySignature" !== n.type) && "AssignmentExpression" !== n.type && ("SequenceExpression" !== n.type || !_t67 || "ForStatement" !== _t67.type || _t67.init !== n && _t67.update !== n) && ("value" !== r || "Property" !== n.type || !_t67 || "ObjectPattern" !== _t67.type || !_t67.properties.includes(n)) && "NGChainedExpression" !== n.type);
        }

      case "ConditionalExpression":
        switch (n.type) {
          case "TaggedTemplateExpression":
          case "UnaryExpression":
          case "SpreadElement":
          case "SpreadProperty":
          case "BinaryExpression":
          case "LogicalExpression":
          case "NGPipeExpression":
          case "ExportDefaultDeclaration":
          case "AwaitExpression":
          case "JSXSpreadAttribute":
          case "TSTypeAssertion":
          case "TypeCastExpression":
          case "TSAsExpression":
          case "TSNonNullExpression":
            return !0;

          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;

          case "ConditionalExpression":
            return "test" === r;

          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;

          default:
            return !1;
        }

      case "FunctionExpression":
        switch (n.type) {
          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;

          case "TaggedTemplateExpression":
            return !0;

          default:
            return !1;
        }

      case "ArrowFunctionExpression":
        switch (n.type) {
          case "PipelineTopicExpression":
            return !(!o.extra || !o.extra.parenthesized);

          case "BinaryExpression":
            return "|>" !== n.operator || o.extra && o.extra.parenthesized;

          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;

          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;

          case "TSAsExpression":
          case "BindExpression":
          case "TaggedTemplateExpression":
          case "UnaryExpression":
          case "LogicalExpression":
          case "AwaitExpression":
          case "TSTypeAssertion":
            return !0;

          case "ConditionalExpression":
            return "test" === r;

          default:
            return !1;
        }

      case "ClassExpression":
        switch (n.type) {
          case "NewExpression":
            return "callee" === r;

          default:
            return !1;
        }

      case "OptionalMemberExpression":
      case "OptionalCallExpression":
        {
          var _t68 = e.getParentNode(1);

          if ("object" === r && "MemberExpression" === n.type || "callee" === r && ("CallExpression" === n.type || "NewExpression" === n.type) || "TSNonNullExpression" === n.type && "MemberExpression" === _t68.type && _t68.object === n) return !0;
        }

      case "CallExpression":
      case "MemberExpression":
      case "TaggedTemplateExpression":
      case "TSNonNullExpression":
        if ("callee" === r && ("BindExpression" === n.type || "NewExpression" === n.type)) {
          var _e99 = o;

          for (; _e99;) {
            switch (_e99.type) {
              case "CallExpression":
              case "OptionalCallExpression":
                return !0;

              case "MemberExpression":
              case "OptionalMemberExpression":
              case "BindExpression":
                _e99 = _e99.object;
                break;

              case "TaggedTemplateExpression":
                _e99 = _e99.tag;
                break;

              case "TSNonNullExpression":
                _e99 = _e99.expression;
                break;

              default:
                return !1;
            }
          }
        }

        return !1;

      case "BindExpression":
        return "callee" === r && ("BindExpression" === n.type || "NewExpression" === n.type) || "object" === r && ("MemberExpression" === n.type || "OptionalMemberExpression" === n.type);

      case "NGPipeExpression":
        return !("NGRoot" === n.type || "NGMicrosyntaxExpression" === n.type || !("ObjectProperty" !== n.type || o.extra && o.extra.parenthesized) || "ArrayExpression" === n.type || ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && n.arguments[r] === o || "right" === r && "NGPipeExpression" === n.type || "property" === r && "MemberExpression" === n.type || "AssignmentExpression" === n.type);

      case "JSXFragment":
      case "JSXElement":
        return "callee" === r || "left" === r && "BinaryExpression" === n.type && "<" === n.operator || "ArrayExpression" !== n.type && "ArrowFunctionExpression" !== n.type && "AssignmentExpression" !== n.type && "AssignmentPattern" !== n.type && "BinaryExpression" !== n.type && "CallExpression" !== n.type && "NewExpression" !== n.type && "ConditionalExpression" !== n.type && "ExpressionStatement" !== n.type && "JsExpressionRoot" !== n.type && "JSXAttribute" !== n.type && "JSXElement" !== n.type && "JSXExpressionContainer" !== n.type && "JSXFragment" !== n.type && "LogicalExpression" !== n.type && "ObjectProperty" !== n.type && "OptionalCallExpression" !== n.type && "Property" !== n.type && "ReturnStatement" !== n.type && "ThrowStatement" !== n.type && "TypeCastExpression" !== n.type && "VariableDeclarator" !== n.type && "YieldExpression" !== n.type;

      case "TypeAnnotation":
        return "returnType" === r && "ArrowFunctionExpression" === n.type && function (e) {
          return kp(e, function (e) {
            return "ObjectTypeAnnotation" === e.type && kp(e, function (e) {
              return "FunctionTypeAnnotation" === e.type || void 0;
            }) || void 0;
          });
        }(o);
    }

    return !1;
  }

  function jp(e) {
    var t = e.getValue(),
        n = e.getParentNode(),
        r = e.getName();

    switch (n.type) {
      case "NGPipeExpression":
        if ("number" == typeof r && n.arguments[r] === t && n.arguments.length - 1 === r) return e.callParent(jp);
        break;

      case "ObjectProperty":
        if ("value" === r) {
          var _t69 = e.getParentNode(1);

          return _t69.properties[_t69.properties.length - 1] === n;
        }

        break;

      case "BinaryExpression":
      case "LogicalExpression":
        if ("right" === r) return e.callParent(jp);
        break;

      case "ConditionalExpression":
        if ("alternate" === r) return e.callParent(jp);
        break;

      case "UnaryExpression":
        if (n.prefix) return e.callParent(jp);
    }

    return !1;
  }

  function _p(e, t) {
    var n = e.getValue(),
        r = e.getParentNode();
    return "FunctionExpression" === n.type || "ClassExpression" === n.type ? "ExportDefaultDeclaration" === r.type || !Mp(e, t) : !(!Np(n) || "ExportDefaultDeclaration" !== r.type && Mp(e, t)) && e.call.apply(e, [function (e) {
      return _p(e, t);
    }].concat(_toConsumableArray(Tp(e, n))));
  }

  var Rp = Mp;
  var _cn$builders7 = cn.builders,
      Vp = _cn$builders7.concat,
      $p = _cn$builders7.join,
      qp = _cn$builders7.line,
      Wp = _cn$builders7.group,
      Up = _cn$builders7.softline,
      Jp = _cn$builders7.indent;
  var zp = {
    isVueEventBindingExpression: function e(t) {
      switch (t.type) {
        case "MemberExpression":
          switch (t.property.type) {
            case "Identifier":
            case "NumericLiteral":
            case "StringLiteral":
              return e(t.object);
          }

          return !1;

        case "Identifier":
          return !0;

        default:
          return !1;
      }
    },
    printHtmlBinding: function printHtmlBinding(e, t, n) {
      var r = e.getValue();
      if (t.__onHtmlBindingRoot && null === e.getName() && t.__onHtmlBindingRoot(r, t), "File" === r.type) return t.__isVueForBindingLeft ? e.call(function (e) {
        var t = $p(Vp([",", qp]), e.map(n, "params")),
            _e$getValue = e.getValue(),
            r = _e$getValue.params;

        return 1 === r.length ? t : Vp(["(", Jp(Vp([Up, Wp(t)])), Up, ")"]);
      }, "program", "body", 0) : t.__isVueBindings ? e.call(function (e) {
        return $p(Vp([",", qp]), e.map(n, "params"));
      }, "program", "body", 0) : void 0;
    }
  };

  var Hp = function Hp(e, t) {
    switch (t.parser) {
      case "json":
      case "json5":
      case "json-stringify":
      case "__js_expression":
      case "__vue_expression":
        return Object.assign({}, e, {
          type: t.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot",
          node: e,
          comments: [],
          rootMarker: t.rootMarker
        });

      default:
        return e;
    }
  };

  var _cn$builders8 = cn.builders,
      Gp = _cn$builders8.concat,
      Xp = _cn$builders8.group,
      Yp = _cn$builders8.indent,
      Kp = _cn$builders8.join,
      Qp = _cn$builders8.line,
      Zp = _cn$builders8.hardline,
      ed = wc.hasNewlineBetweenOrAfterDecorators,
      td = wc.getParentExportDeclaration;
  var nd = {
    printOptionalToken: function printOptionalToken(e) {
      var t = e.getValue();
      return !t.optional || "Identifier" === t.type && t === e.getParentNode().key ? "" : "OptionalCallExpression" === t.type || "OptionalMemberExpression" === t.type && t.computed ? "?." : "?";
    },
    printFunctionTypeParameters: function printFunctionTypeParameters(e, t, n) {
      var r = e.getValue();
      return r.typeArguments ? e.call(n, "typeArguments") : r.typeParameters ? e.call(n, "typeParameters") : "";
    },
    printBindExpressionCallee: function printBindExpressionCallee(e, t, n) {
      return Gp(["::", e.call(n, "callee")]);
    },
    printTypeScriptModifiers: function printTypeScriptModifiers(e, t, n) {
      var r = e.getValue();
      return r.modifiers && r.modifiers.length ? Gp([Kp(" ", e.map(n, "modifiers")), " "]) : "";
    },
    printDecorators: function printDecorators(e, t, n) {
      var r = e.getValue();
      return Xp(Gp([Kp(Qp, e.map(n, "decorators")), ed(r, t) ? Zp : Qp]));
    },
    printFlowDeclaration: function printFlowDeclaration(e, t) {
      var n = td(e);
      return n ? (ta.strictEqual(n.type, "DeclareExportDeclaration"), t) : Gp(["declare ", t]);
    },
    adjustClause: function adjustClause(e, t, n) {
      return "EmptyStatement" === e.type ? ";" : "BlockStatement" === e.type || n ? Gp([" ", t]) : Yp(Gp([Qp, t]));
    }
  };
  var _cn$builders9 = cn.builders,
      rd = _cn$builders9.concat,
      od = _cn$builders9.softline,
      ud = _cn$builders9.group,
      id = _cn$builders9.indent,
      ad = _cn$builders9.join,
      sd = _cn$builders9.line,
      cd = _cn$builders9.ifBreak,
      ld = _cn$builders9.hardline,
      pd = Fa.printDanglingComments,
      dd = wc.hasDanglingComments,
      fd = wc.shouldPrintComma,
      hd = wc.needsHardlineAfterDanglingComment,
      md = ii.locStart,
      gd = ii.hasSameLoc;

  function Dd(e, t, n) {
    var r = e.getValue();
    if (!r.source) return "";
    var o = [];
    return Ed(r, t) || o.push(" from"), o.push(" ", e.call(n, "source")), rd(o);
  }

  function yd(e, t, n) {
    var r = e.getValue();
    if (Ed(r, t)) return "";
    var o = [" "];

    if (r.specifiers && r.specifiers.length > 0) {
      var _u14 = [],
          _i47 = [];

      if (e.each(function (t) {
        var r = e.getValue().type;
        if ("ExportNamespaceSpecifier" === r || "ExportDefaultSpecifier" === r || "ImportNamespaceSpecifier" === r || "ImportDefaultSpecifier" === r) _u14.push(n(t));else {
          if ("ExportSpecifier" !== r && "ImportSpecifier" !== r) throw new Error("Unknown specifier type ".concat(JSON.stringify(r)));

          _i47.push(n(t));
        }
      }, "specifiers"), o.push(ad(", ", _u14)), 0 !== _i47.length) {
        0 !== _u14.length && o.push(", ");
        _i47.length > 1 || _u14.length > 0 || r.specifiers.some(function (e) {
          return e.comments;
        }) ? o.push(ud(rd(["{", id(rd([t.bracketSpacing ? sd : od, ad(rd([",", sd]), _i47)])), cd(fd(t) ? "," : ""), t.bracketSpacing ? sd : od, "}"]))) : o.push(rd(["{", t.bracketSpacing ? " " : "", rd(_i47), t.bracketSpacing ? " " : "", "}"]));
      }
    } else o.push("{}");

    return rd(o);
  }

  function Ed(e, t) {
    var n = e.type,
        r = e.importKind,
        o = e.source,
        u = e.specifiers;
    return !("ImportDeclaration" !== n || Array.isArray(u) && u.length > 0 || "type" === r) && !/{\s*}/.test(t.originalText.slice(md(e), md(o)));
  }

  function Cd(e, t, n) {
    var r = e.getNode();
    return Array.isArray(r.assertions) && 0 !== r.assertions.length ? rd([" assert {", t.bracketSpacing ? " " : "", ad(", ", e.map(n, "assertions")), t.bracketSpacing ? " " : "", "}"]) : "";
  }

  var bd = {
    printImportDeclaration: function printImportDeclaration(e, t, n) {
      var r = e.getValue(),
          o = t.semi ? ";" : "",
          u = [],
          i = r.importKind;
      return u.push("import"), i && "value" !== i && u.push(" ", i), u.push(yd(e, t, n), Dd(e, t, n), Cd(e, t, n)), u.push(o), rd(u);
    },
    printExportDeclaration: function printExportDeclaration(e, t, n) {
      var r = e.getValue(),
          o = [],
          u = r.type,
          i = r.exportKind,
          a = r.declaration;
      return "DeclareExportDeclaration" === u && o.push("declare "), o.push("export"), (r.default || "ExportDefaultDeclaration" === u) && o.push(" default"), dd(r) && (o.push(" ", pd(e, t, !0)), hd(r) && o.push(ld)), a ? o.push(" ", e.call(n, "declaration")) : o.push("type" === i ? " type" : "", yd(e, t, n), Dd(e, t, n), Cd(e, t, n)), function (e, t) {
        if (!t.semi) return !1;
        var n = e.type,
            r = e.declaration,
            o = e.default || "ExportDefaultDeclaration" === n;
        if (!r) return !0;
        var u = r.type;
        if (o && "ClassDeclaration" !== u && "FunctionDeclaration" !== u && "TSInterfaceDeclaration" !== u && "DeclareClass" !== u && "DeclareFunction" !== u && "TSDeclareFunction" !== u && "EnumDeclaration" !== u) return !0;
        return !1;
      }(r, t) && o.push(";"), rd(o);
    },
    printExportAllDeclaration: function printExportAllDeclaration(e, t, n) {
      var r = e.getValue();
      var o = t.semi ? ";" : "";
      var u = [],
          i = r.type,
          a = r.exportKind,
          s = r.exported;
      return "DeclareExportAllDeclaration" === i && (u.push("declare "), o = ""), u.push("export"), "type" === a && u.push(" type"), u.push(" *"), s && u.push(" as ", e.call(n, "exported")), u.push(Dd(e, t, n), Cd(e, t, n), o), rd(u);
    },
    printModuleSpecifier: function printModuleSpecifier(e, t, n) {
      var r = e.getNode(),
          o = r.type,
          u = r.importKind,
          i = [];
      "ImportSpecifier" === o && u && i.push(u, " ");
      var a = o.startsWith("Import"),
          s = a ? "imported" : "local",
          c = a ? "local" : "exported";
      var l = "",
          p = "";
      return "ExportNamespaceSpecifier" === o || "ImportNamespaceSpecifier" === o ? l = "*" : r[s] && (l = e.call(n, s)), !r[c] || r[s] && gd(r[s], r[c]) || (p = e.call(n, c)), i.push(l, l && p ? " as " : "", p), rd(i);
    }
  };
  var vd = Lt.hasNewlineInRange,
      Ad = wc.isJSXNode,
      Fd = wc.isBlockComment,
      xd = ii.locStart,
      Sd = ii.locEnd,
      _cn$builders10 = cn.builders,
      wd = _cn$builders10.concat,
      Td = _cn$builders10.line,
      Bd = _cn$builders10.softline,
      Nd = _cn$builders10.group,
      kd = _cn$builders10.indent,
      Pd = _cn$builders10.align,
      Od = _cn$builders10.ifBreak,
      Id = _cn$builders10.dedent,
      Ld = _cn$builders10.breakParent;

  var Md = function Md(e, t, n, r) {
    var o = e.getValue(),
        u = o[r.consequentNodePropertyName],
        i = o[r.alternateNodePropertyName],
        a = [];
    var s = !1;
    var c = e.getParentNode(),
        l = c.type === r.conditionalNodeType && r.testNodePropertyNames.some(function (e) {
      return c[e] === o;
    });
    var p,
        d,
        f = c.type === r.conditionalNodeType && !l,
        h = 0;

    do {
      d = p || o, p = e.getParentNode(h), h++;
    } while (p && p.type === r.conditionalNodeType && r.testNodePropertyNames.every(function (e) {
      return p[e] !== d;
    }));

    var m = p || c,
        g = d;

    if (r.shouldCheckJsx && (Ad(o[r.testNodePropertyNames[0]]) || Ad(u) || Ad(i) || function (e) {
      return function (e) {
        var t = [];
        return function e(n) {
          "ConditionalExpression" === n.type ? (e(n.test), e(n.consequent), e(n.alternate)) : t.push(n);
        }(e), t;
      }(e).some(Ad);
    }(g))) {
      s = !0, f = !0;

      var _t70 = function _t70(e) {
        return wd([Od("(", ""), kd(wd([Bd, e])), Bd, Od(")", "")]);
      },
          _o19 = function _o19(e) {
        return "NullLiteral" === e.type || "Literal" === e.type && null === e.value || "Identifier" === e.type && "undefined" === e.name;
      };

      a.push(" ? ", _o19(u) ? e.call(n, r.consequentNodePropertyName) : _t70(e.call(n, r.consequentNodePropertyName)), " : ", i.type === r.conditionalNodeType || _o19(i) ? e.call(n, r.alternateNodePropertyName) : _t70(e.call(n, r.alternateNodePropertyName)));
    } else {
      var _s6 = wd([Td, "? ", u.type === r.conditionalNodeType ? Od("", "(") : "", Pd(2, e.call(n, r.consequentNodePropertyName)), u.type === r.conditionalNodeType ? Od("", ")") : "", Td, ": ", i.type === r.conditionalNodeType ? e.call(n, r.alternateNodePropertyName) : Pd(2, e.call(n, r.alternateNodePropertyName))]);

      a.push(c.type !== r.conditionalNodeType || c[r.alternateNodePropertyName] === o || l ? _s6 : t.useTabs ? Id(kd(_s6)) : Pd(Math.max(0, t.tabWidth - 2), _s6));
    }

    var D = Yu([].concat(_toConsumableArray(r.testNodePropertyNames.map(function (e) {
      return o[e].comments;
    })), [u.comments, i.comments])).filter(Boolean).some(function (e) {
      return Fd(e) && vd(t.originalText, xd(e), Sd(e));
    }),
        y = !s && ("MemberExpression" === c.type || "OptionalMemberExpression" === c.type || "NGPipeExpression" === c.type && c.left === o) && !c.computed,
        E = function (e) {
      return c === m ? Nd(e, {
        shouldBreak: D
      }) : D ? wd([e, Ld]) : e;
    }(wd([].concat((C = wd(r.beforeParts()), c.type === r.conditionalNodeType && c[r.alternateNodePropertyName] === o ? Pd(2, C) : C), f ? wd(a) : kd(wd(a)), r.afterParts(y))));

    var C;
    return l ? Nd(wd([kd(wd([Bd, E])), Bd])) : E;
  };

  var jd = Lt.getNextNonSpaceNonCommentCharacter,
      _d = Lt.isNextLineEmpty,
      Rd = Fa.printDanglingComments,
      _cn$builders11 = cn.builders,
      Vd = _cn$builders11.concat,
      $d = _cn$builders11.line,
      qd = _cn$builders11.hardline,
      Wd = _cn$builders11.softline,
      Ud = _cn$builders11.group,
      Jd = _cn$builders11.indent,
      zd = _cn$builders11.ifBreak,
      Hd = cn.utils.removeLines,
      Gd = wc.getFunctionParameters,
      Xd = wc.iterateFunctionParametersPath,
      Yd = wc.isSimpleType,
      Kd = wc.isTestCall,
      Qd = wc.isTypeAnnotationAFunction,
      Zd = wc.isObjectType,
      ef = wc.isObjectTypePropertyAFunction,
      tf = wc.hasRestParameter,
      nf = wc.shouldPrintComma,
      rf = ii.locEnd,
      of = nd.printFunctionTypeParameters;

  function uf(e) {
    if (!e) return !1;
    var t = Gd(e);
    if (1 !== t.length) return !1;

    var _t71 = _slicedToArray(t, 1),
        n = _t71[0];

    return !n.comments && ("ObjectPattern" === n.type || "ArrayPattern" === n.type || "Identifier" === n.type && n.typeAnnotation && ("TypeAnnotation" === n.typeAnnotation.type || "TSTypeAnnotation" === n.typeAnnotation.type) && Zd(n.typeAnnotation.typeAnnotation) || "FunctionTypeParam" === n.type && Zd(n.typeAnnotation) || "AssignmentPattern" === n.type && ("ObjectPattern" === n.left.type || "ArrayPattern" === n.left.type) && ("Identifier" === n.right.type || "ObjectExpression" === n.right.type && 0 === n.right.properties.length || "ArrayExpression" === n.right.type && 0 === n.right.elements.length));
  }

  var af = {
    printFunctionParameters: function printFunctionParameters(e, t, n, r, o) {
      var u = e.getValue(),
          i = Gd(u),
          a = o ? of(e, n, t) : "";
      if (0 === i.length) return Vd([a, "(", Rd(e, n, !0, function (e) {
        return ")" === jd(n.originalText, e, rf);
      }), ")"]);
      var s = e.getParentNode(),
          c = Kd(s),
          l = uf(u),
          p = r && !i.some(function (e) {
        return e.comments;
      }),
          d = [];
      if (Xd(e, function (e, r) {
        var o = r === i.length - 1;
        o && u.rest && d.push("..."), d.push(e.call(t)), o || (d.push(","), c || l || p ? d.push(" ") : _d(n.originalText, i[r], rf) ? d.push(qd, qd) : d.push($d));
      }), p) return Ud(Vd([Hd(a), "(", Vd(d.map(Hd)), ")"]));
      var f = i.every(function (e) {
        return !e.decorators;
      });
      return l && f || c ? Vd([a, "(", Vd(d), ")"]) : (ef(s) || Qd(s) || "TypeAlias" === s.type || "UnionTypeAnnotation" === s.type || "TSUnionType" === s.type || "IntersectionTypeAnnotation" === s.type || "FunctionTypeAnnotation" === s.type && s.returnType === u) && 1 === i.length && null === i[0].name && u.this !== i[0] && i[0].typeAnnotation && null === u.typeParameters && Yd(i[0].typeAnnotation) && !u.rest ? "always" === n.arrowParens ? Vd(["(", Vd(d), ")"]) : Vd(d) : Vd([a, "(", Jd(Vd([Wd, Vd(d)])), zd(!tf(u) && nf(n, "all") ? "," : ""), Wd, ")"]);
    },
    shouldHugFunctionParameters: uf
  };
  var sf = cn.builders.concat,
      cf = wc.isFlowAnnotationComment,
      lf = wc.isSimpleType,
      pf = wc.isObjectType;
  var df = {
    printTypeAnnotation: function printTypeAnnotation(e, t, n) {
      var r = e.getValue();
      if (!r.typeAnnotation) return "";
      var o = e.getParentNode(),
          u = r.definite || o && "VariableDeclarator" === o.type && o.definite,
          i = "DeclareFunction" === o.type && o.id === r;
      return cf(t.originalText, r.typeAnnotation) ? sf([" /*: ", e.call(n, "typeAnnotation"), " */"]) : sf([i ? "" : u ? "!: " : ": ", e.call(n, "typeAnnotation")]);
    },
    shouldHugType: function shouldHugType(e) {
      if (lf(e) || pf(e)) return !0;

      if ("UnionTypeAnnotation" === e.type || "TSUnionType" === e.type) {
        var _t72 = e.types.filter(function (e) {
          return "VoidTypeAnnotation" === e.type || "TSVoidKeyword" === e.type || "NullLiteralTypeAnnotation" === e.type || "TSNullKeyword" === e.type;
        }).length,
            _n55 = e.types.some(function (e) {
          return "ObjectTypeAnnotation" === e.type || "TSTypeLiteral" === e.type || "GenericTypeAnnotation" === e.type || "TSTypeReference" === e.type;
        });

        if (e.types.length - 1 === _t72 && _n55) return !0;
      }

      return !1;
    }
  };
  var ff = Fa.printDanglingComments,
      _cn$builders12 = cn.builders,
      hf = _cn$builders12.concat,
      mf = _cn$builders12.line,
      gf = _cn$builders12.softline,
      Df = _cn$builders12.group,
      yf = _cn$builders12.indent,
      Ef = _cn$builders12.ifBreak,
      Cf = Lt.getLast,
      bf = Lt.isNextLineEmpty,
      vf = wc.hasDanglingComments,
      Af = wc.shouldPrintComma,
      Ff = ii.locEnd,
      xf = nd.printOptionalToken,
      Sf = df.printTypeAnnotation;

  function wf(e, t, n, r) {
    var o = [];
    var u = [];
    return e.each(function (e) {
      o.push(hf(u)), o.push(Df(r(e))), u = [",", mf], e.getValue() && bf(t.originalText, e.getValue(), Ff) && u.push(gf);
    }, n), hf(o);
  }

  var Tf = {
    printArray: function printArray(e, t, n) {
      var r = e.getValue(),
          o = [],
          u = "TupleExpression" === r.type ? "#[" : "[";
      if (0 === r.elements.length) vf(r) ? o.push(Df(hf([u, ff(e, t), gf, "]"]))) : o.push(u, "]");else {
        var _i48 = Cf(r.elements),
            _a6 = !(_i48 && "RestElement" === _i48.type),
            _s7 = _a6 && null === _i48,
            _c7 = !t.__inJestEach && r.elements.length > 1 && r.elements.every(function (e, t, n) {
          var r = e && e.type;
          if ("ArrayExpression" !== r && "ObjectExpression" !== r) return !1;
          var o = n[t + 1];
          if (o && r !== o.type) return !1;
          var u = "ArrayExpression" === r ? "elements" : "properties";
          return e[u] && e[u].length > 1;
        });

        o.push(Df(hf([u, yf(hf([gf, wf(e, t, "elements", n)])), _s7 ? "," : "", Ef(_a6 && !_s7 && Af(t) ? "," : ""), ff(e, t, !0), gf, "]"]), {
          shouldBreak: _c7
        }));
      }
      return o.push(xf(e), Sf(e, t, n)), hf(o);
    },
    printArrayItems: wf
  };
  var Bf = Fa.printDanglingComments,
      _cn$builders13 = cn.builders,
      Nf = _cn$builders13.concat,
      kf = _cn$builders13.line,
      Pf = _cn$builders13.softline,
      Of = _cn$builders13.group,
      If = _cn$builders13.indent,
      Lf = _cn$builders13.ifBreak,
      Mf = _cn$builders13.hardline,
      jf = Lt.getLast,
      _f = Lt.isNextLineEmpty,
      Rf = Lt.hasNewlineInRange,
      Vf = Lt.hasNewline,
      $f = wc.hasDanglingComments,
      qf = wc.shouldPrintComma,
      Wf = wc.hasNodeIgnoreComment,
      Uf = wc.isBlockComment,
      Jf = ii.locStart,
      zf = ii.locEnd,
      Hf = nd.printOptionalToken,
      Gf = af.shouldHugFunctionParameters,
      Xf = df.printTypeAnnotation,
      Yf = df.shouldHugType;
  var Kf = {
    printObject: function printObject(e, t, n) {
      var r = t.semi ? ";" : "",
          o = e.getValue();
      var u;
      u = "TSTypeLiteral" === o.type ? "members" : "TSInterfaceBody" === o.type ? "body" : "properties";
      var i = "ObjectTypeAnnotation" === o.type,
          a = [];
      i && a.push("indexers", "callProperties", "internalSlots"), a.push(u);
      var s = a.map(function (e) {
        return o[e][0];
      }).sort(function (e, t) {
        return Jf(e) - Jf(t);
      })[0],
          c = e.getParentNode(0),
          l = i && c && ("InterfaceDeclaration" === c.type || "DeclareInterface" === c.type || "DeclareClass" === c.type) && "body" === e.getName(),
          p = "TSInterfaceBody" === o.type || l || "ObjectPattern" === o.type && "FunctionDeclaration" !== c.type && "FunctionExpression" !== c.type && "ArrowFunctionExpression" !== c.type && "ObjectMethod" !== c.type && "ClassMethod" !== c.type && "ClassPrivateMethod" !== c.type && "AssignmentPattern" !== c.type && "CatchClause" !== c.type && o.properties.some(function (e) {
        return e.value && ("ObjectPattern" === e.value.type || "ArrayPattern" === e.value.type);
      }) || "ObjectPattern" !== o.type && s && Rf(t.originalText, Jf(o), Jf(s)),
          d = l ? ";" : "TSInterfaceBody" === o.type || "TSTypeLiteral" === o.type ? Lf(r, ";") : ",",
          f = "RecordExpression" === o.type ? "#{" : o.exact ? "{|" : "{",
          h = o.exact ? "|}" : "}",
          m = [];
      a.forEach(function (t) {
        e.each(function (e) {
          var t = e.getValue();
          m.push({
            node: t,
            printed: n(e),
            loc: Jf(t)
          });
        }, t);
      });
      var g = [];
      var D = m.sort(function (e, t) {
        return e.loc - t.loc;
      }).map(function (e) {
        var n = Nf(g.concat(Of(e.printed)));
        return g = [d, kf], "TSPropertySignature" !== e.node.type && "TSMethodSignature" !== e.node.type && "TSConstructSignatureDeclaration" !== e.node.type || !Wf(e.node) || g.shift(), _f(t.originalText, e.node, zf) && g.push(Mf), n;
      });

      if (o.inexact) {
        var _n56;

        if ($f(o)) {
          var _r54 = !o.comments.every(function (e) {
            return Uf(e);
          }),
              _u15 = Bf(e, t, !0);

          _n56 = Nf([_u15, _r54 || Vf(t.originalText, zf(o.comments[o.comments.length - 1])) ? Mf : kf, "..."]);
        } else _n56 = "...";

        D.push(Nf(g.concat(_n56)));
      }

      var y = jf(o[u]),
          E = !(o.inexact || y && "RestElement" === y.type || y && ("TSPropertySignature" === y.type || "TSCallSignatureDeclaration" === y.type || "TSMethodSignature" === y.type || "TSConstructSignatureDeclaration" === y.type) && Wf(y));
      var C;

      if (0 === D.length) {
        if (!$f(o)) return Nf([f, h, Xf(e, t, n)]);
        C = Of(Nf([f, Bf(e, t), Pf, h, Hf(e), Xf(e, t, n)]));
      } else C = Nf([f, If(Nf([t.bracketSpacing ? kf : Pf, Nf(D)])), Lf(E && ("," !== d || qf(t)) ? d : ""), Nf([t.bracketSpacing ? kf : Pf, h]), Hf(e), Xf(e, t, n)]);

      return e.match(function (e) {
        return "ObjectPattern" === e.type && !e.decorators;
      }, function (e, t, n) {
        return Gf(e) && ("params" === t || "parameters" === t || "this" === t || "rest" === t) && 0 === n;
      }) || e.match(Yf, function (e, t) {
        return "typeAnnotation" === t;
      }, function (e, t) {
        return "typeAnnotation" === t;
      }, function (e, t, n) {
        return Gf(e) && ("params" === t || "parameters" === t || "this" === t || "rest" === t) && 0 === n;
      }) ? C : Of(C, {
        shouldBreak: p
      });
    }
  };
  var Qf = Fa.printComments,
      Zf = Fa.printDanglingComments,
      _cn$builders14 = cn.builders,
      eh = _cn$builders14.concat,
      th = _cn$builders14.line,
      nh = _cn$builders14.hardline,
      rh = _cn$builders14.softline,
      oh = _cn$builders14.group,
      uh = _cn$builders14.indent,
      ih = _cn$builders14.conditionalGroup,
      ah = _cn$builders14.fill,
      sh = _cn$builders14.ifBreak,
      ch = _cn$builders14.lineSuffixBoundary,
      _cn$utils2 = cn.utils,
      lh = _cn$utils2.willBreak,
      ph = _cn$utils2.isLineNext,
      dh = _cn$utils2.isEmpty,
      fh = Lt.getLast,
      hh = Lt.getPreferredQuote,
      mh = wc.hasTrailingComment,
      gh = wc.isEmptyJSXElement,
      Dh = wc.isJSXWhitespaceExpression,
      yh = wc.isJSXNode,
      Eh = wc.isMeaningfulJSXText,
      Ch = wc.matchJsxWhitespaceRegex,
      bh = wc.rawText,
      vh = wc.isLiteral,
      Ah = wc.isCallOrOptionalCallExpression,
      Fh = wc.isStringLiteral,
      xh = wc.isBinaryish,
      Sh = wc.isBlockComment,
      wh = il.willPrintOwnComments;

  function Th(e, t, n) {
    var r = e.getValue();
    if ("JSXElement" === r.type && gh(r)) return eh([e.call(n, "openingElement"), e.call(n, "closingElement")]);
    var o = "JSXElement" === r.type ? e.call(n, "openingElement") : e.call(n, "openingFragment"),
        u = "JSXElement" === r.type ? e.call(n, "closingElement") : e.call(n, "closingFragment");
    if (1 === r.children.length && "JSXExpressionContainer" === r.children[0].type && ("TemplateLiteral" === r.children[0].expression.type || "TaggedTemplateExpression" === r.children[0].expression.type)) return eh([o, eh(e.map(n, "children")), u]);
    r.children = r.children.map(function (e) {
      return Dh(e) ? {
        type: "JSXText",
        value: " ",
        raw: " "
      } : e;
    });
    var i = r.children.filter(yh).length > 0,
        a = r.children.filter(function (e) {
      return "JSXExpressionContainer" === e.type;
    }).length > 1,
        s = "JSXElement" === r.type && r.openingElement.attributes.length > 1;
    var c = lh(o) || i || s || a;

    var l = "mdx" === e.getParentNode().rootMarker,
        p = t.singleQuote ? "{' '}" : '{" "}',
        d = l ? eh([" "]) : sh(eh([p, rh]), " "),
        f = r.openingElement && r.openingElement.name && "fbt" === r.openingElement.name.name,
        h = function (e, t, n, r, o) {
      var u = e.getValue(),
          i = [];
      return e.each(function (e, t) {
        var a = e.getValue();

        if (vh(a)) {
          var _e100 = bh(a);

          if (Eh(a)) {
            var _n57 = _e100.split(Ch);

            if ("" === _n57[0]) {
              if (i.push(""), _n57.shift(), /\n/.test(_n57[0])) {
                var _e101 = u.children[t + 1];
                i.push(Nh(o, _n57[1], a, _e101));
              } else i.push(r);

              _n57.shift();
            }

            var _s8;

            if ("" === fh(_n57) && (_n57.pop(), _s8 = _n57.pop()), 0 === _n57.length) return;
            if (_n57.forEach(function (e, t) {
              t % 2 == 1 ? i.push(th) : i.push(e);
            }), void 0 !== _s8) {
              if (/\n/.test(_s8)) {
                var _e102 = u.children[t + 1];
                i.push(Nh(o, fh(i), a, _e102));
              } else i.push(r);
            } else {
              var _e103 = u.children[t + 1];
              i.push(Bh(o, fh(i), a, _e103));
            }
          } else /\n/.test(_e100) ? _e100.match(/\n/g).length > 1 && (i.push(""), i.push(nh)) : (i.push(""), i.push(r));
        } else {
          var _r55 = n(e);

          i.push(_r55);
          var _s9 = u.children[t + 1];

          if (_s9 && Eh(_s9)) {
            var _e104 = bh(_s9).trim().split(Ch)[0];
            i.push(Bh(o, _e104, a, _s9));
          } else i.push(nh);
        }
      }, "children"), i;
    }(e, 0, n, d, f),
        m = r.children.some(function (e) {
      return Eh(e);
    });

    for (var _e105 = h.length - 2; _e105 >= 0; _e105--) {
      var _t73 = "" === h[_e105] && "" === h[_e105 + 1],
          _n58 = h[_e105] === nh && "" === h[_e105 + 1] && h[_e105 + 2] === nh,
          _r56 = (h[_e105] === rh || h[_e105] === nh) && "" === h[_e105 + 1] && h[_e105 + 2] === d,
          _o20 = h[_e105] === d && "" === h[_e105 + 1] && (h[_e105 + 2] === rh || h[_e105 + 2] === nh),
          _u16 = h[_e105] === d && "" === h[_e105 + 1] && h[_e105 + 2] === d,
          _i49 = h[_e105] === rh && "" === h[_e105 + 1] && h[_e105 + 2] === nh || h[_e105] === nh && "" === h[_e105 + 1] && h[_e105 + 2] === rh;

      _n58 && m || _t73 || _r56 || _u16 || _i49 ? h.splice(_e105, 2) : _o20 && h.splice(_e105 + 1, 2);
    }

    for (; h.length && (ph(fh(h)) || dh(fh(h)));) {
      h.pop();
    }

    for (; h.length && (ph(h[0]) || dh(h[0])) && (ph(h[1]) || dh(h[1]));) {
      h.shift(), h.shift();
    }

    var g = [];
    h.forEach(function (e, t) {
      if (e === d) {
        if (1 === t && "" === h[t - 1]) return 2 === h.length ? void g.push(p) : void g.push(eh([p, nh]));
        if (t === h.length - 1) return void g.push(p);
        if ("" === h[t - 1] && h[t - 2] === nh) return void g.push(p);
      }

      g.push(e), lh(e) && (c = !0);
    });
    var D = m ? ah(g) : oh(eh(g), {
      shouldBreak: !0
    });
    if (l) return D;
    var y = oh(eh([o, uh(eh([nh, D])), nh, u]));
    return c ? y : ih([oh(eh([o, eh(h), u])), y]);
  }

  function Bh(e, t, n, r) {
    return e ? "" : "JSXElement" === n.type && !n.closingElement || r && "JSXElement" === r.type && !r.closingElement ? 1 === t.length ? rh : nh : rh;
  }

  function Nh(e, t, n, r) {
    return e ? nh : 1 === t.length ? "JSXElement" === n.type && !n.closingElement || r && "JSXElement" === r.type && !r.closingElement ? nh : rh : nh;
  }

  function kh(e, t, n) {
    var r = e.getValue();
    return eh(["{", e.call(function (e) {
      var r = eh(["...", n(e)]),
          o = e.getValue();
      return o.comments && o.comments.length && wh(e) ? eh([uh(eh([rh, Qf(e, function () {
        return r;
      }, t)])), rh]) : r;
    }, "JSXSpreadAttribute" === r.type ? "argument" : "expression"), "}"]);
  }

  var Ph = {
    printJsxElement: function printJsxElement(e, t, n) {
      var r = Qf(e, function () {
        return Th(e, t, n);
      }, t);
      return function (e, t, n) {
        var r = e.getParentNode();
        if (!r) return t;
        if ({
          ArrayExpression: !0,
          JSXAttribute: !0,
          JSXElement: !0,
          JSXExpressionContainer: !0,
          JSXFragment: !0,
          ExpressionStatement: !0,
          CallExpression: !0,
          OptionalCallExpression: !0,
          ConditionalExpression: !0,
          JsExpressionRoot: !0
        }[r.type]) return t;
        var o = e.match(void 0, function (e) {
          return "ArrowFunctionExpression" === e.type;
        }, Ah, function (e) {
          return "JSXExpressionContainer" === e.type;
        }),
            u = Rp(e, n);
        return oh(eh([u ? "" : sh("("), uh(eh([rh, t])), rh, u ? "" : sh(")")]), {
          shouldBreak: o
        });
      }(e, r, t);
    },
    printJsxAttribute: function printJsxAttribute(e, t, n) {
      var r = e.getValue(),
          o = [];

      if (o.push(e.call(n, "name")), r.value) {
        var _u17;

        if (Fh(r.value)) {
          var _e106 = bh(r.value).replace(/&apos;/g, "'").replace(/&quot;/g, '"');

          var _n59 = hh(_e106, t.jsxSingleQuote ? "'" : '"'),
              _o21 = "'" === _n59 ? "&apos;" : "&quot;";

          _e106 = _e106.slice(1, -1).replace(new RegExp(_n59, "g"), _o21), _u17 = eh([_n59, _e106, _n59]);
        } else _u17 = e.call(n, "value");

        o.push("=", _u17);
      }

      return eh(o);
    },
    printJsxOpeningElement: function printJsxOpeningElement(e, t, n) {
      var r = e.getValue(),
          o = r.name && r.name.comments && r.name.comments.length > 0 || r.typeParameters && r.typeParameters.comments && r.typeParameters.comments.length > 0;
      if (r.selfClosing && !r.attributes.length && !o) return eh(["<", e.call(n, "name"), e.call(n, "typeParameters"), " />"]);
      if (r.attributes && 1 === r.attributes.length && r.attributes[0].value && Fh(r.attributes[0].value) && !r.attributes[0].value.value.includes("\n") && !o && (!r.attributes[0].comments || !r.attributes[0].comments.length)) return oh(eh(["<", e.call(n, "name"), e.call(n, "typeParameters"), " ", eh(e.map(n, "attributes")), r.selfClosing ? " />" : ">"]));
      var u = r.attributes.length && mh(fh(r.attributes)),
          i = !r.attributes.length && !o || t.jsxBracketSameLine && (!o || r.attributes.length) && !u,
          a = r.attributes && r.attributes.some(function (e) {
        return e.value && Fh(e.value) && e.value.value.includes("\n");
      });
      return oh(eh(["<", e.call(n, "name"), e.call(n, "typeParameters"), eh([uh(eh(e.map(function (e) {
        return eh([th, n(e)]);
      }, "attributes"))), r.selfClosing ? th : i ? ">" : rh]), r.selfClosing ? "/>" : i ? "" : ">"]), {
        shouldBreak: a
      });
    },
    printJsxClosingElement: function printJsxClosingElement(e, t, n) {
      return eh(["</", e.call(n, "name"), ">"]);
    },
    printJsxOpeningClosingFragment: function printJsxOpeningClosingFragment(e, t) {
      var n = e.getValue(),
          r = n.comments && n.comments.length,
          o = r && !n.comments.every(function (e) {
        return Sh(e);
      }),
          u = "JSXOpeningFragment" === n.type;
      return eh([u ? "<" : "</", uh(eh([o ? nh : r && !u ? " " : "", Zf(e, t, !0)])), o ? nh : "", ">"]);
    },
    printJsxExpressionContainer: function printJsxExpressionContainer(e, t, n) {
      var r = e.getValue(),
          o = e.getParentNode(0),
          u = r.expression.comments && r.expression.comments.length > 0,
          i = "JSXEmptyExpression" === r.expression.type || !u && ("ArrayExpression" === r.expression.type || "ObjectExpression" === r.expression.type || "ArrowFunctionExpression" === r.expression.type || "CallExpression" === r.expression.type || "OptionalCallExpression" === r.expression.type || "FunctionExpression" === r.expression.type || "TemplateLiteral" === r.expression.type || "TaggedTemplateExpression" === r.expression.type || "DoExpression" === r.expression.type || yh(o) && ("ConditionalExpression" === r.expression.type || xh(r.expression)));
      return oh(eh(i ? ["{", e.call(n, "expression"), ch, "}"] : ["{", uh(eh([rh, e.call(n, "expression")])), rh, ch, "}"]));
    },
    printJsxEmptyExpression: function printJsxEmptyExpression(e, t) {
      var n = e.getValue(),
          r = n.comments && !n.comments.every(function (e) {
        return Sh(e);
      });
      return eh([Zf(e, t, !r), r ? nh : ""]);
    },
    printJsxSpreadAttribute: kh,
    printJsxSpreadChild: kh
  };
  var Oh = Fa.printDanglingComments,
      _cn$builders15 = cn.builders,
      Ih = _cn$builders15.concat,
      Lh = _cn$builders15.join,
      Mh = _cn$builders15.line,
      jh = _cn$builders15.hardline,
      _h = _cn$builders15.softline,
      Rh = _cn$builders15.group,
      Vh = _cn$builders15.indent,
      $h = _cn$builders15.ifBreak,
      qh = wc.hasDanglingComments,
      Wh = wc.isTestCall,
      Uh = wc.isBlockComment,
      Jh = wc.shouldPrintComma,
      zh = df.shouldHugType,
      Hh = new WeakMap();

  function Gh(e) {
    return Hh.has(e) || Hh.set(e, Symbol("typeParameters")), Hh.get(e);
  }

  function Xh(e, t) {
    var n = e.getValue();
    if (!qh(n)) return "";
    var r = n.comments.every(function (e) {
      return Uh(e);
    }),
        o = Oh(e, t, r);
    return r ? o : Ih([o, jh]);
  }

  var Yh = {
    printTypeParameters: function printTypeParameters(e, t, n, r) {
      var o = e.getValue();
      if (!o[r]) return "";
      if (!Array.isArray(o[r])) return e.call(n, r);
      var u = e.getNode(2);
      return null != u && Wh(u) || 0 === o[r].length || 1 === o[r].length && (zh(o[r][0]) || "GenericTypeAnnotation" === o[r][0].type && zh(o[r][0].id) || "TSTypeReference" === o[r][0].type && zh(o[r][0].typeName) || "NullableTypeAnnotation" === o[r][0].type) ? Ih(["<", Lh(", ", e.map(n, r)), Xh(e, t), ">"]) : Rh(Ih(["<", Vh(Ih([_h, Lh(Ih([",", Mh]), e.map(n, r))])), $h("typescript" !== t.parser && "babel-ts" !== t.parser && Jh(t, "all") ? "," : ""), _h, ">"]), {
        id: Gh(o)
      });
    },
    getTypeParametersGroupId: Gh
  };
  var Kh = Fa.printComments,
      Qh = Lt.printString,
      Zh = Lt.printNumber,
      em = cn.builders.concat,
      tm = wc.isNumericLiteral,
      nm = wc.isSimpleNumber,
      rm = wc.isStringLiteral,
      om = wc.isStringPropSafeToUnquote,
      um = wc.rawText,
      im = new WeakMap();
  var am = {
    printPropertyKey: function printPropertyKey(e, t, n) {
      var r = e.getNode();
      if (r.computed) return em(["[", e.call(n, "key"), "]"]);
      var o = e.getParentNode(),
          u = r.key;
      if ("ClassPrivateProperty" === r.type && "Identifier" === u.type) return em(["#", e.call(n, "key")]);

      if ("consistent" === t.quoteProps && !im.has(o)) {
        var _e107 = (o.properties || o.body || o.members).some(function (e) {
          return !e.computed && e.key && rm(e.key) && !om(e, t);
        });

        im.set(o, _e107);
      }

      if (("Identifier" === u.type || tm(u) && nm(Zh(um(u))) && String(u.value) === Zh(um(u)) && "typescript" !== t.parser && "babel-ts" !== t.parser) && ("json" === t.parser || "consistent" === t.quoteProps && im.get(o))) {
        var _n60 = Qh(JSON.stringify("Identifier" === u.type ? u.name : u.value.toString()), t);

        return e.call(function (e) {
          return Kh(e, function () {
            return _n60;
          }, t);
        }, "key");
      }

      return om(r, t) && ("as-needed" === t.quoteProps || "consistent" === t.quoteProps && !im.get(o)) ? e.call(function (e) {
        return Kh(e, function () {
          return /^\d/.test(u.value) ? Zh(u.value) : u.value;
        }, t);
      }, "key") : e.call(n, "key");
    }
  };
  var sm = Fa.printDanglingComments,
      cm = Lt.getNextNonSpaceNonCommentCharacterIndex,
      _cn$builders16 = cn.builders,
      lm = _cn$builders16.concat,
      pm = _cn$builders16.line,
      dm = _cn$builders16.softline,
      fm = _cn$builders16.group,
      hm = _cn$builders16.indent,
      mm = _cn$builders16.ifBreak,
      gm = _cn$builders16.hardline,
      Dm = wc.getFunctionParameters,
      ym = wc.hasDanglingComments,
      Em = wc.hasLeadingOwnLineComment,
      Cm = wc.isFlowAnnotationComment,
      bm = wc.isJSXNode,
      vm = wc.isTemplateOnItsOwnLine,
      Am = wc.shouldPrintComma,
      Fm = wc.startsWithNoLookaheadToken,
      xm = wc.returnArgumentHasLeadingComment,
      Sm = wc.isBinaryish,
      wm = wc.isLineComment,
      Tm = ii.locEnd,
      Bm = af.printFunctionParameters,
      Nm = am.printPropertyKey,
      km = nd.printFunctionTypeParameters;

  function Pm(e, t, n) {
    var r = [km(e, t, n), fm(lm([Bm(e, n, t), Im(e, n, t)]))];
    return e.getNode().body ? r.push(" ", e.call(n, "body")) : r.push(t.semi ? ";" : ""), lm(r);
  }

  function Om(e, t) {
    if ("always" === t.arrowParens) return !1;

    if ("avoid" === t.arrowParens) {
      return function (e) {
        var t = Dm(e);
        return !(1 !== t.length || e.typeParameters || ym(e) || "Identifier" !== t[0].type || t[0].typeAnnotation || t[0].comments || t[0].optional || e.predicate || e.returnType);
      }(e.getValue());
    }

    return !1;
  }

  function Im(e, t, n) {
    var r = e.getValue(),
        o = e.call(t, "returnType");
    if (r.returnType && Cm(n.originalText, r.returnType)) return lm([" /*: ", o, " */"]);
    var u = [o];
    return r.returnType && r.returnType.typeAnnotation && u.unshift(": "), r.predicate && u.push(r.returnType ? " " : ": ", e.call(t, "predicate")), lm(u);
  }

  var Lm = {
    printFunctionDeclaration: function printFunctionDeclaration(e, t, n, r) {
      var o = e.getValue(),
          u = [];
      return o.async && u.push("async "), o.generator ? u.push("function* ") : u.push("function "), o.id && u.push(e.call(t, "id")), u.push(km(e, n, t), fm(lm([Bm(e, t, n, r), Im(e, t, n)])), o.body ? " " : "", e.call(t, "body")), lm(u);
    },
    printArrowFunctionExpression: function printArrowFunctionExpression(e, t, n, r) {
      var o = e.getValue(),
          u = [];
      o.async && u.push("async "), Om(e, t) ? u.push(e.call(n, "params", 0)) : u.push(fm(lm([Bm(e, n, t, r && (r.expandLastArg || r.expandFirstArg), !0), Im(e, n, t)])));
      var i = sm(e, t, !0, function (e) {
        var n = cm(t.originalText, e, Tm);
        return !1 !== n && "=>" === t.originalText.slice(n, n + 2);
      });
      i && u.push(" ", i), u.push(" =>");
      var a = e.call(function (e) {
        return n(e, r);
      }, "body");
      if (!Em(t.originalText, o.body) && ("ArrayExpression" === o.body.type || "ObjectExpression" === o.body.type || "BlockStatement" === o.body.type || bm(o.body) || vm(o.body, t.originalText) || "ArrowFunctionExpression" === o.body.type || "DoExpression" === o.body.type)) return fm(lm([lm(u), " ", a]));
      if ("SequenceExpression" === o.body.type) return fm(lm([lm(u), fm(lm([" (", hm(lm([dm, a])), dm, ")"]))]));
      var s = (r && r.expandLastArg || "JSXExpressionContainer" === e.getParentNode().type) && !(o.comments && o.comments.length),
          c = r && r.expandLastArg && Am(t, "all"),
          l = "ConditionalExpression" === o.body.type && !Fm(o.body, !1);
      return fm(lm([lm(u), fm(lm([hm(lm([pm, l ? mm("", "(") : "", a, l ? mm("", ")") : ""])), s ? lm([mm(c ? "," : ""), dm]) : ""]))]));
    },
    printMethod: function printMethod(e, t, n) {
      var r = e.getNode(),
          o = r.kind,
          u = r.value || r,
          i = [];
      return o && "init" !== o && "method" !== o && "constructor" !== o ? (ta.ok("get" === o || "set" === o), i.push(o, " ")) : u.async && i.push("async "), u.generator && i.push("*"), i.push(Nm(e, t, n), r.optional || r.key.optional ? "?" : "", r === u ? Pm(e, t, n) : e.call(function (e) {
        return Pm(e, t, n);
      }, "value")), lm(i);
    },
    printReturnAndThrowArgument: function printReturnAndThrowArgument(e, t, n) {
      var r = e.getValue(),
          o = t.semi ? ";" : "",
          u = [];
      r.argument && (xm(t, r.argument) ? u.push(lm([" (", hm(lm([gm, e.call(n, "argument")])), gm, ")"])) : Sm(r.argument) || "SequenceExpression" === r.argument.type ? u.push(fm(lm([mm(" (", " "), hm(lm([dm, e.call(n, "argument")])), dm, mm(")")]))) : u.push(" ", e.call(n, "argument")));
      var i = Array.isArray(r.comments) && r.comments[r.comments.length - 1],
          a = i && wm(i);
      return a && u.push(o), ym(r) && u.push(" ", sm(e, t, !0)), a || u.push(o), lm(u);
    },
    shouldPrintParamsWithoutParens: Om
  };
  var Mm = Fa.printComments,
      jm = Fa.printDanglingComments,
      _cn$builders17 = cn.builders,
      _m = _cn$builders17.concat,
      Rm = _cn$builders17.join,
      Vm = _cn$builders17.line,
      $m = _cn$builders17.hardline,
      qm = _cn$builders17.softline,
      Wm = _cn$builders17.group,
      Um = _cn$builders17.indent,
      Jm = _cn$builders17.ifBreak,
      zm = wc.hasTrailingComment,
      Hm = wc.hasTrailingLineComment,
      Gm = Yh.getTypeParametersGroupId,
      Xm = Lm.printMethod,
      Ym = nd.printDecorators;

  function Km(e) {
    return e.typeParameters && !Hm(e.typeParameters) && !function (e) {
      return ["superClass", "extends", "mixins", "implements"].filter(function (t) {
        return !!e[t];
      }).length > 1;
    }(e);
  }

  function Qm(e, t, n, r) {
    var o = e.getValue();
    if (!o[r] || 0 === o[r].length) return "";
    var u = jm(e, t, !0, function (_ref37) {
      var e = _ref37.marker;
      return e === r;
    });
    return _m([Km(o) ? Jm(" ", Vm, {
      groupId: Gm(o.typeParameters)
    }) : Vm, u, u && $m, r, Wm(Um(_m([Vm, Rm(_m([",", Vm]), e.map(n, r))])))]);
  }

  function Zm(e, t, n) {
    var r = e.call(n, "superClass");
    return "AssignmentExpression" === e.getParentNode().type ? Wm(Jm(_m(["(", Um(_m([qm, r])), qm, ")"]), r)) : r;
  }

  var eg = {
    printClass: function printClass(e, t, n) {
      var r = e.getValue(),
          o = [];
      r.abstract && o.push("abstract "), o.push("class");
      var u = r.id && zm(r.id) || r.superClass && r.superClass.comments && 0 !== r.superClass.comments.length || r.extends && 0 !== r.extends.length || r.mixins && 0 !== r.mixins.length || r.implements && 0 !== r.implements.length,
          i = [],
          a = [];

      if (r.id && i.push(" ", e.call(n, "id")), i.push(e.call(n, "typeParameters")), r.superClass) {
        var _r57 = _m(["extends ", Zm(e, t, n), e.call(n, "superTypeParameters")]),
            _o22 = e.call(function (e) {
          return Mm(e, function () {
            return _r57;
          }, t);
        }, "superClass");

        u ? a.push(Vm, Wm(_o22)) : a.push(" ", _o22);
      } else a.push(Qm(e, t, n, "extends"));

      if (a.push(Qm(e, t, n, "mixins")), a.push(Qm(e, t, n, "implements")), u) {
        var _e108 = _m(a);

        Km(r) ? o.push(Wm(_m(i.concat(Jm(Um(_e108), _e108))))) : o.push(Wm(Um(_m(i.concat(_e108)))));
      } else o.push.apply(o, i.concat(a));

      return o.push(" ", e.call(n, "body")), _m(o);
    },
    printClassMethod: function printClassMethod(e, t, n) {
      var r = e.getValue(),
          o = [];
      return r.decorators && 0 !== r.decorators.length && o.push(Ym(e, t, n)), r.accessibility && o.push(r.accessibility + " "), r.static && o.push("static "), ("TSAbstractMethodDefinition" === r.type || r.abstract) && o.push("abstract "), o.push(Xm(e, t, n)), _m(o);
    }
  };
  var tg = Lt.getLast,
      ng = Lt.getPenultimate,
      rg = Lt.isNextLineEmpty,
      og = wc.getFunctionParameters,
      ug = wc.iterateFunctionParametersPath,
      ig = wc.hasLeadingComment,
      ag = wc.hasTrailingComment,
      sg = wc.isFunctionCompositionArgs,
      cg = wc.isJSXNode,
      lg = wc.isLongCurriedCallExpression,
      pg = wc.shouldPrintComma,
      dg = wc.getCallArguments,
      fg = wc.iterateCallArgumentsPath,
      hg = ii.locEnd,
      _cn$builders18 = cn.builders,
      mg = _cn$builders18.concat,
      gg = _cn$builders18.line,
      Dg = _cn$builders18.hardline,
      yg = _cn$builders18.softline,
      Eg = _cn$builders18.group,
      Cg = _cn$builders18.indent,
      bg = _cn$builders18.conditionalGroup,
      vg = _cn$builders18.ifBreak,
      Ag = _cn$builders18.breakParent,
      Fg = cn.utils.willBreak;

  function xg(e) {
    return "ObjectExpression" === e.type && (e.properties.length > 0 || e.comments) || "ArrayExpression" === e.type && (e.elements.length > 0 || e.comments) || "TSTypeAssertion" === e.type && xg(e.expression) || "TSAsExpression" === e.type && xg(e.expression) || "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && (!e.returnType || !e.returnType.typeAnnotation || "TSTypeReference" !== e.returnType.typeAnnotation.type) && ("BlockStatement" === e.body.type || "ArrowFunctionExpression" === e.body.type || "ObjectExpression" === e.body.type || "ArrayExpression" === e.body.type || "CallExpression" === e.body.type || "OptionalCallExpression" === e.body.type || "ConditionalExpression" === e.body.type || cg(e.body));
  }

  var Sg = function Sg(e, t, n) {
    var r = e.getValue(),
        o = "ImportExpression" === r.type,
        u = dg(r);
    if (0 === u.length) return mg(["(", Fa.printDanglingComments(e, t, !0), ")"]);
    if (2 === u.length && "ArrowFunctionExpression" === u[0].type && 0 === og(u[0]).length && "BlockStatement" === u[0].body.type && "ArrayExpression" === u[1].type && !u.some(function (e) {
      return e.comments;
    })) return mg(["(", e.call(n, "arguments", 0), ", ", e.call(n, "arguments", 1), ")"]);
    var i = !1,
        a = !1,
        s = !1;
    var c = u.length - 1,
        l = [];
    fg(e, function (e, r) {
      var o = e.getNode(),
          u = [n(e)];
      r === c || (rg(t.originalText, o, hg) ? (0 === r && (s = !0), i = !0, u.push(",", Dg, Dg)) : u.push(",", gg)), a = function (e, t) {
        if (!e || "ArrowFunctionExpression" !== e.type || !e.body || "BlockStatement" !== e.body.type || 0 === og(e).length) return !1;
        var r = !1;
        return ug(t, function (e) {
          r = r || Fg(mg([n(e)]));
        }), r;
      }(o, e), l.push(mg(u));
    });
    var p = o || r.callee && "Import" === r.callee.type || !pg(t, "all") ? "" : ",";

    function d() {
      return Eg(mg(["(", Cg(mg([gg, mg(l)])), p, gg, ")"]), {
        shouldBreak: !0
      });
    }

    if ("Decorator" !== e.getParentNode().type && sg(u)) return d();

    var f = function (e) {
      if (2 !== e.length) return !1;

      var _e109 = _slicedToArray(e, 2),
          t = _e109[0],
          n = _e109[1];

      return !(t.comments && t.comments.length || "FunctionExpression" !== t.type && ("ArrowFunctionExpression" !== t.type || "BlockStatement" !== t.body.type) || "FunctionExpression" === n.type || "ArrowFunctionExpression" === n.type || "ConditionalExpression" === n.type || xg(n));
    }(u),
        h = function (e) {
      var t = tg(e),
          n = ng(e);
      return !ig(t) && !ag(t) && xg(t) && (!n || n.type !== t.type);
    }(u);

    if (f || h) {
      var _t74 = (f ? l.slice(1).some(Fg) : l.slice(0, -1).some(Fg)) || i || a;

      var _o23 = [];
      fg(e, function (e, t) {
        f && 0 === t && (_o23 = [mg([e.call(function (e) {
          return n(e, {
            expandFirstArg: !0
          });
        }), l.length > 1 ? "," : "", s ? Dg : gg, s ? Dg : ""])].concat(l.slice(1))), h && t === u.length - 1 && (_o23 = l.slice(0, -1).concat(e.call(function (e) {
          return n(e, {
            expandLastArg: !0
          });
        })));
      });

      var _c8 = l.some(Fg),
          _p6 = mg(["(", mg(_o23), ")"]);

      return mg([_c8 ? Ag : "", bg([_c8 || r.typeArguments || r.typeParameters ? vg(d(), _p6) : _p6, mg(f ? ["(", Eg(_o23[0], {
        shouldBreak: !0
      }), mg(_o23.slice(1)), ")"] : ["(", mg(l.slice(0, -1)), Eg(tg(_o23), {
        shouldBreak: !0
      }), ")"]), d()], {
        shouldBreak: _t74
      })]);
    }

    var m = mg(["(", Cg(mg([yg, mg(l)])), vg(p), yg, ")"]);
    return lg(e) ? m : Eg(m, {
      shouldBreak: l.some(Fg) || i
    });
  };

  var _cn$builders19 = cn.builders,
      wg = _cn$builders19.concat,
      Tg = _cn$builders19.softline,
      Bg = _cn$builders19.group,
      Ng = _cn$builders19.indent,
      kg = wc.isNumericLiteral,
      Pg = nd.printOptionalToken;

  function Og(e, t, n) {
    var r = e.call(n, "property"),
        o = e.getValue(),
        u = Pg(e);
    return o.computed ? !o.property || kg(o.property) ? wg([u, "[", r, "]"]) : Bg(wg([u, "[", Ng(wg([Tg, r])), Tg, "]"])) : wg([u, ".", r]);
  }

  var Ig = {
    printMemberExpression: function printMemberExpression(e, t, n) {
      var r = e.getValue(),
          o = e.getParentNode();
      var u,
          i = 0;

      do {
        u = e.getParentNode(i), i++;
      } while (u && ("MemberExpression" === u.type || "OptionalMemberExpression" === u.type || "TSNonNullExpression" === u.type));

      var a = u && ("NewExpression" === u.type || "BindExpression" === u.type || "VariableDeclarator" === u.type && "Identifier" !== u.id.type || "AssignmentExpression" === u.type && "Identifier" !== u.left.type) || r.computed || "Identifier" === r.object.type && "Identifier" === r.property.type && "MemberExpression" !== o.type && "OptionalMemberExpression" !== o.type;
      return wg([e.call(n, "object"), a ? Og(e, t, n) : Bg(Ng(wg([Tg, Og(e, t, n)])))]);
    },
    printMemberLookup: Og
  };
  var Lg = Lt.getLast,
      Mg = Lt.isNextLineEmpty,
      jg = Lt.isNextLineEmptyAfterIndex,
      _g = Lt.getNextNonSpaceNonCommentCharacterIndex,
      Rg = wc.hasLeadingComment,
      Vg = wc.hasTrailingComment,
      $g = wc.isCallOrOptionalCallExpression,
      qg = wc.isFunctionOrArrowExpression,
      Wg = wc.isLongCurriedCallExpression,
      Ug = wc.isMemberish,
      Jg = wc.isNumericLiteral,
      zg = wc.isSimpleCallArgument,
      Hg = ii.locEnd,
      _cn$builders20 = cn.builders,
      Gg = _cn$builders20.concat,
      Xg = _cn$builders20.join,
      Yg = _cn$builders20.hardline,
      Kg = _cn$builders20.group,
      Qg = _cn$builders20.indent,
      Zg = _cn$builders20.conditionalGroup,
      eD = _cn$builders20.breakParent,
      tD = cn.utils.willBreak,
      nD = Ig.printMemberLookup,
      rD = nd.printOptionalToken,
      oD = nd.printFunctionTypeParameters,
      uD = nd.printBindExpressionCallee;

  var iD = function iD(e, t, n) {
    var r = e.getParentNode(),
        o = !r || "ExpressionStatement" === r.type,
        u = [];

    function i(e) {
      var n = t.originalText,
          r = _g(n, e, Hg);

      return ")" === n.charAt(r) ? !1 !== r && jg(n, r + 1) : Mg(n, e, Hg);
    }

    function a(e) {
      var r = e.getValue();
      $g(r) && (Ug(r.callee) || $g(r.callee)) ? (u.unshift({
        node: r,
        printed: Gg([Fa.printComments(e, function () {
          return Gg([rD(e), oD(e, t, n), Sg(e, t, n)]);
        }, t), i(r) ? Yg : ""])
      }), e.call(function (e) {
        return a(e);
      }, "callee")) : Ug(r) ? (u.unshift({
        node: r,
        needsParens: Rp(e, t),
        printed: Fa.printComments(e, function () {
          return "OptionalMemberExpression" === r.type || "MemberExpression" === r.type ? nD(e, t, n) : uD(e, t, n);
        }, t)
      }), e.call(function (e) {
        return a(e);
      }, "object")) : "TSNonNullExpression" === r.type ? (u.unshift({
        node: r,
        printed: Fa.printComments(e, function () {
          return "!";
        }, t)
      }), e.call(function (e) {
        return a(e);
      }, "expression")) : u.unshift({
        node: r,
        printed: e.call(n)
      });
    }

    var s = e.getValue();
    u.unshift({
      node: s,
      printed: Gg([rD(e), oD(e, t, n), Sg(e, t, n)])
    }), s.callee && e.call(function (e) {
      return a(e);
    }, "callee");
    var c = [];
    var l = [u[0]],
        p = 1;

    for (; p < u.length && ("TSNonNullExpression" === u[p].node.type || $g(u[p].node) || ("MemberExpression" === u[p].node.type || "OptionalMemberExpression" === u[p].node.type) && u[p].node.computed && Jg(u[p].node.property)); ++p) {
      l.push(u[p]);
    }

    if (!$g(u[0].node)) for (; p + 1 < u.length && Ug(u[p].node) && Ug(u[p + 1].node); ++p) {
      l.push(u[p]);
    }
    c.push(l), l = [];
    var d = !1;

    for (; p < u.length; ++p) {
      if (d && Ug(u[p].node)) {
        if (u[p].node.computed && Jg(u[p].node.property)) {
          l.push(u[p]);
          continue;
        }

        c.push(l), l = [], d = !1;
      }

      ($g(u[p].node) || "ImportExpression" === u[p].node.type) && (d = !0), l.push(u[p]), u[p].node.comments && u[p].node.comments.some(function (e) {
        return e.trailing;
      }) && (c.push(l), l = [], d = !1);
    }

    function f(e) {
      return /^[A-Z]|^[$_]+$/.test(e);
    }

    l.length > 0 && c.push(l);

    var h = c.length >= 2 && !c[1][0].node.comments && function (e) {
      var n = e[1].length && e[1][0].node.computed;

      if (1 === e[0].length) {
        var _r58 = e[0][0].node;
        return "ThisExpression" === _r58.type || "Identifier" === _r58.type && (f(_r58.name) || o && function (e) {
          return e.length <= t.tabWidth;
        }(_r58.name) || n);
      }

      var r = Lg(e[0]).node;
      return ("MemberExpression" === r.type || "OptionalMemberExpression" === r.type) && "Identifier" === r.property.type && (f(r.property.name) || n);
    }(c);

    function m(e) {
      var t = e.map(function (e) {
        return e.printed;
      });
      return e.length > 0 && e[e.length - 1].needsParens ? Gg(["("].concat(_toConsumableArray(t), [")"])) : Gg(t);
    }

    var g = c.map(m),
        D = Gg(g),
        y = h ? 3 : 2,
        E = Yu(c),
        C = E.slice(1, -1).some(function (e) {
      return Rg(e.node);
    }) || E.slice(0, -1).some(function (e) {
      return Vg(e.node);
    }) || c[y] && Rg(c[y][0].node);
    if (c.length <= y && !C) return Wg(e) ? D : Kg(D);
    var b = Lg(c[h ? 1 : 0]).node,
        v = !$g(b) && i(b),
        A = Gg([m(c[0]), h ? Gg(c.slice(1, 2).map(m)) : "", v ? Yg : "", function (e) {
      return 0 === e.length ? "" : Qg(Kg(Gg([Yg, Xg(Yg, e.map(m))])));
    }(c.slice(h ? 2 : 1))]),
        F = u.map(function (_ref38) {
      var e = _ref38.node;
      return e;
    }).filter($g);
    return C || F.length > 2 && F.some(function (e) {
      return !e.arguments.every(function (e) {
        return zg(e, 0);
      });
    }) || g.slice(0, -1).some(tD) || function () {
      var e = Lg(Lg(c)).node,
          t = Lg(g);
      return $g(e) && tD(t) && F.slice(0, -1).some(function (e) {
        return e.arguments.some(qg);
      });
    }() ? Kg(A) : Gg([tD(D) || v ? eD : "", Zg([D, A])]);
  };

  var _cn$builders21 = cn.builders,
      aD = _cn$builders21.concat,
      sD = _cn$builders21.join,
      cD = _cn$builders21.group,
      lD = wc.getCallArguments,
      pD = wc.hasFlowAnnotationComment,
      dD = wc.isCallOrOptionalCallExpression,
      fD = wc.isMemberish,
      hD = wc.isTemplateOnItsOwnLine,
      mD = wc.isTestCall,
      gD = wc.iterateCallArgumentsPath,
      DD = nd.printOptionalToken,
      yD = nd.printFunctionTypeParameters;
  var ED = {
    printCallExpression: function printCallExpression(e, t, n) {
      var r = e.getValue(),
          o = "NewExpression" === r.type,
          u = "ImportExpression" === r.type,
          i = DD(e),
          a = lD(r);

      if (a.length > 0 && (!u && !o && "Identifier" === r.callee.type && ("require" === r.callee.name || "define" === r.callee.name) || 1 === a.length && hD(a[0], t.originalText) || !o && mD(r, e.getParentNode()))) {
        var _r59 = [];
        return gD(e, function (e) {
          _r59.push(n(e));
        }), aD([o ? "new " : "", e.call(n, "callee"), i, yD(e, t, n), aD(["(", sD(", ", _r59), ")"])]);
      }

      var s = ("babel" === t.parser || "babel-flow" === t.parser) && r.callee && "Identifier" === r.callee.type && pD(r.callee.trailingComments);
      if (s && (r.callee.trailingComments[0].printed = !0), !u && !o && fD(r.callee) && !e.call(function (e) {
        return Rp(e, t);
      }, "callee")) return iD(e, t, n);
      var c = aD([o ? "new " : "", u ? "import" : e.call(n, "callee"), i, s ? "/*:: ".concat(r.callee.trailingComments[0].value.slice(2).trim(), " */") : "", yD(e, t, n), Sg(e, t, n)]);
      return u || dD(r.callee) ? cD(c) : c;
    }
  };
  var _cn$builders22 = cn.builders,
      CD = _cn$builders22.concat,
      bD = _cn$builders22.join,
      vD = _cn$builders22.line,
      AD = _cn$builders22.group,
      FD = _cn$builders22.indent,
      xD = _cn$builders22.ifBreak,
      SD = wc.hasTrailingComment,
      wD = wc.hasTrailingLineComment,
      TD = wc.identity,
      BD = Yh.getTypeParametersGroupId,
      ND = nd.printTypeScriptModifiers;
  var kD = {
    printInterface: function printInterface(e, t, n) {
      var r = e.getValue(),
          o = [];
      ("DeclareInterface" === r.type || r.declare) && o.push("declare "), "TSInterfaceDeclaration" === r.type && o.push(r.abstract ? "abstract " : "", ND(e, t, n)), o.push("interface");
      var u = [],
          i = [];
      "InterfaceTypeAnnotation" !== r.type && u.push(" ", e.call(n, "id"), e.call(n, "typeParameters"));
      var a = r.typeParameters && !wD(r.typeParameters);

      if (r.extends && 0 !== r.extends.length && i.push(a ? xD(" ", vD, {
        groupId: BD(r.typeParameters)
      }) : vD, "extends ", (1 === r.extends.length ? TD : FD)(bD(CD([",", vD]), e.map(n, "extends")))), r.id && SD(r.id) || r.extends && 0 !== r.extends.length) {
        var _e110 = CD(i);

        a ? o.push(AD(CD(u.concat(xD(FD(_e110), _e110))))) : o.push(AD(FD(CD(u.concat(_e110)))));
      } else o.push.apply(o, u.concat(i));

      return o.push(" ", e.call(n, "body")), AD(CD(o));
    }
  };
  var PD = Fa.printComments,
      OD = Lt.getLast,
      _cn$builders23 = cn.builders,
      ID = _cn$builders23.concat,
      LD = _cn$builders23.join,
      MD = _cn$builders23.line,
      jD = _cn$builders23.softline,
      _D = _cn$builders23.group,
      RD = _cn$builders23.indent,
      VD = _cn$builders23.align,
      $D = _cn$builders23.ifBreak,
      qD = cn.utils.normalizeParts,
      WD = wc.hasLeadingOwnLineComment,
      UD = wc.hasTrailingLineComment,
      JD = wc.isBinaryish,
      zD = wc.isJSXNode,
      HD = wc.shouldFlatten;
  var GD = 0;

  function XD(e, t, n, r, o) {
    var u = [];
    var i = e.getValue();

    if (JD(i)) {
      HD(i.operator, i.left.operator) ? u = u.concat(e.call(function (e) {
        return XD(e, t, n, !0, o);
      }, "left")) : u.push(_D(e.call(t, "left")));

      var _a7 = YD(i),
          _s10 = ("|>" === i.operator || "NGPipeExpression" === i.type || "|" === i.operator && "__vue_expression" === n.parser) && !WD(n.originalText, i.right),
          _c9 = "NGPipeExpression" === i.type ? "|" : i.operator,
          _l6 = "NGPipeExpression" === i.type && 0 !== i.arguments.length ? _D(RD(ID([jD, ": ", LD(ID([jD, ":", $D(" ")]), e.map(t, "arguments").map(function (e) {
        return VD(2, _D(e));
      }))]))) : "",
          _p7 = ID(_a7 ? [_c9, " ", e.call(t, "right"), _l6] : [_s10 ? MD : "", _c9, _s10 ? " " : MD, e.call(t, "right"), _l6]),
          _d6 = e.getParentNode(),
          _f5 = UD(i.left),
          _h5 = _f5 || !(o && "LogicalExpression" === i.type) && _d6.type !== i.type && i.left.type !== i.type && i.right.type !== i.type;

      u.push(_s10 ? "" : " ", _h5 ? _D(_p7, {
        shouldBreak: _f5
      }) : _p7), r && i.comments && (u = qD(PD(e, function () {
        return ID(u);
      }, n).parts));
    } else u.push(_D(e.call(t)));

    return u;
  }

  function YD(e) {
    return "LogicalExpression" === e.type && ("ObjectExpression" === e.right.type && 0 !== e.right.properties.length || "ArrayExpression" === e.right.type && 0 !== e.right.elements.length || !!zD(e.right));
  }

  var KD = {
    printBinaryishExpression: function printBinaryishExpression(e, t, n) {
      var r = e.getValue(),
          o = e.getParentNode(),
          u = e.getParentNode(1),
          i = r !== o.body && ("IfStatement" === o.type || "WhileStatement" === o.type || "SwitchStatement" === o.type || "DoWhileStatement" === o.type),
          a = XD(e, n, t, !1, i);
      if (i) return ID(a);
      if (("CallExpression" === o.type || "OptionalCallExpression" === o.type) && o.callee === r || "UnaryExpression" === o.type || ("MemberExpression" === o.type || "OptionalMemberExpression" === o.type) && !o.computed) return _D(ID([RD(ID([jD, ID(a)])), jD]));
      var s = "ReturnStatement" === o.type || "ThrowStatement" === o.type || "JSXExpressionContainer" === o.type && "JSXAttribute" === u.type || "|" !== r.operator && "JsExpressionRoot" === o.type || "NGPipeExpression" !== r.type && ("NGRoot" === o.type && "__ng_binding" === t.parser || "NGMicrosyntaxExpression" === o.type && "NGMicrosyntax" === u.type && 1 === u.body.length) || r === o.body && "ArrowFunctionExpression" === o.type || r !== o.body && "ForStatement" === o.type || "ConditionalExpression" === o.type && "ReturnStatement" !== u.type && "ThrowStatement" !== u.type && "CallExpression" !== u.type && "OptionalCallExpression" !== u.type || "TemplateLiteral" === o.type,
          c = "AssignmentExpression" === o.type || "VariableDeclarator" === o.type || "ClassProperty" === o.type || "FieldDefinition" === o.type || "TSAbstractClassProperty" === o.type || "ClassPrivateProperty" === o.type || "ObjectProperty" === o.type || "Property" === o.type,
          l = JD(r.left) && HD(r.operator, r.left.operator);
      if (s || YD(r) && !l || !YD(r) && c) return _D(ID(a));
      if (0 === a.length) return "";

      var p = zD(r.right),
          d = a.findIndex(function (e) {
        return "string" != typeof e && "group" === e.type;
      }),
          f = a.slice(0, -1 === d ? 1 : d + 1),
          h = ID(a.slice(f.length, p ? -1 : void 0)),
          m = Symbol("logicalChain-" + ++GD),
          g = _D(ID([].concat(_toConsumableArray(f), [RD(h)])), {
        id: m
      });

      if (!p) return g;
      var D = OD(a);
      return _D(ID([g, $D(RD(D), D, {
        groupId: m
      })]));
    },
    shouldInlineLogicalExpression: YD
  };
  var _cn$builders24 = cn.builders,
      QD = _cn$builders24.concat,
      ZD = _cn$builders24.line,
      ey = _cn$builders24.group,
      ty = _cn$builders24.indent,
      ny = wc.hasLeadingOwnLineComment,
      ry = wc.isBinaryish,
      oy = wc.isMemberExpressionChain,
      uy = wc.isStringLiteral,
      iy = KD.shouldInlineLogicalExpression;

  function ay(e, t, n, r, o, u) {
    if (!r) return t;
    var i = sy(e, r, o, u);
    return ey(QD([t, n, i]));
  }

  function sy(e, t, n, r) {
    if (ny(r.originalText, t)) return ty(QD([ZD, n]));
    return ry(t) && !iy(t) || "ConditionalExpression" === t.type && ry(t.test) && !iy(t.test) || "StringLiteralTypeAnnotation" === t.type || "ClassExpression" === t.type && t.decorators && t.decorators.length || ("Identifier" === e.type || uy(e) || "MemberExpression" === e.type) && (uy(t) || oy(t)) && "json" !== r.parser && "json5" !== r.parser || "SequenceExpression" === t.type ? ey(ty(QD([ZD, n]))) : QD([" ", n]);
  }

  var cy = {
    printVariableDeclarator: function printVariableDeclarator(e, t, n) {
      var r = e.getValue();
      return ay(r.id, e.call(n, "id"), " =", r.init, r.init && e.call(n, "init"), t);
    },
    printAssignmentExpression: function printAssignmentExpression(e, t, n) {
      var r = e.getValue();
      return ay(r.left, e.call(n, "left"), QD([" ", r.operator]), r.right, e.call(n, "right"), t);
    },
    printAssignment: ay,
    printAssignmentRight: sy
  };
  var ly = Lt.isNextLineEmpty,
      _cn$builders25 = cn.builders,
      py = _cn$builders25.concat,
      dy = _cn$builders25.join,
      fy = _cn$builders25.hardline,
      hy = wc.classChildNeedsASIProtection,
      my = wc.classPropMayCauseASIProblems,
      gy = wc.getLeftSidePathName,
      Dy = wc.hasNakedLeftSide,
      yy = wc.isJSXNode,
      Ey = wc.isLastStatement,
      Cy = wc.isTheOnlyJSXElementInMarkdown,
      by = ii.locEnd,
      vy = Lm.shouldPrintParamsWithoutParens;

  function Ay(_ref39, o, u) {
    var e = _ref39.path,
        t = _ref39.index,
        n = _ref39.bodyNode,
        r = _ref39.isClass;
    var i = e.getValue();
    if (!i) return;
    if ("EmptyStatement" === i.type) return;
    var a = u(e),
        s = o.originalText,
        c = [];
    if (o.semi || r || Cy(o, e) || !function (e, t) {
      if ("ExpressionStatement" !== e.getNode().type) return !1;
      return e.call(function (e) {
        return Fy(e, t);
      }, "expression");
    }(e, o) ? c.push(a) : i.comments && i.comments.some(function (e) {
      return e.leading;
    }) ? c.push(u(e, {
      needsSemi: !0
    })) : c.push(";", a), !o.semi && r) if (my(e)) c.push(";");else if ("ClassProperty" === i.type || "FieldDefinition" === i.type) {
      var _e111 = n.body[t + 1];
      hy(_e111) && c.push(";");
    }
    return ly(s, i, by) && !Ey(e) && c.push(fy), py(c);
  }

  function Fy(e, t) {
    var n = e.getValue();
    return !!(Rp(e, t) || "ParenthesizedExpression" === n.type || "TypeCastExpression" === n.type || "ArrowFunctionExpression" === n.type && !vy(e, t) || "ArrayExpression" === n.type || "ArrayPattern" === n.type || "UnaryExpression" === n.type && n.prefix && ("+" === n.operator || "-" === n.operator) || "TemplateLiteral" === n.type || "TemplateElement" === n.type || yy(n) || "BindExpression" === n.type && !n.object || "RegExpLiteral" === n.type || "Literal" === n.type && n.pattern || "Literal" === n.type && n.regex) || !!Dy(n) && e.call.apply(e, [function (e) {
      return Fy(e, t);
    }].concat(_toConsumableArray(gy(e, n))));
  }

  var xy = {
    printStatementSequence: function printStatementSequence(e, t, n) {
      var r = e.getNode(),
          o = "ClassBody" === r.type,
          u = e.map(function (u, i) {
        return Ay({
          path: e,
          index: i,
          bodyNode: r,
          isClass: o
        }, t, n);
      }).filter(Boolean);
      return dy(fy, u);
    }
  };
  var Sy = Fa.printDanglingComments,
      wy = Lt.isNextLineEmpty,
      _cn$builders26 = cn.builders,
      Ty = _cn$builders26.concat,
      By = _cn$builders26.hardline,
      Ny = _cn$builders26.indent,
      ky = wc.hasDanglingComments,
      Py = ii.locEnd,
      Oy = xy.printStatementSequence;
  var Iy = {
    printBlock: function printBlock(e, t, n) {
      var r = e.getValue(),
          o = [],
          u = t.semi ? ";" : "",
          i = e.call(function (e) {
        return Oy(e, t, n);
      }, "body");
      "StaticBlock" === r.type && o.push("static ");
      var a = r.body.some(function (e) {
        return "EmptyStatement" !== e.type;
      }),
          s = r.directives && r.directives.length > 0,
          c = e.getParentNode(),
          l = e.getParentNode(1);
      return a || s || ky(r) || "ArrowFunctionExpression" !== c.type && "FunctionExpression" !== c.type && "FunctionDeclaration" !== c.type && "ObjectMethod" !== c.type && "ClassMethod" !== c.type && "ClassPrivateMethod" !== c.type && "ForStatement" !== c.type && "WhileStatement" !== c.type && "DoWhileStatement" !== c.type && "DoExpression" !== c.type && ("CatchClause" !== c.type || l.finalizer) && "TSModuleDeclaration" !== c.type && "TSDeclareFunction" !== c.type && "StaticBlock" !== r.type ? (o.push("{"), s && e.each(function (e) {
        o.push(Ny(Ty([By, n(e), u]))), wy(t.originalText, e.getValue(), Py) && o.push(By);
      }, "directives"), a && o.push(Ny(Ty([By, i]))), o.push(Sy(e, t)), o.push(By, "}"), Ty(o)) : Ty([].concat(o, ["{}"]));
    }
  };
  var Ly = Lt.hasNewline,
      _cn$builders27 = cn.builders,
      My = _cn$builders27.concat,
      jy = _cn$builders27.join,
      _y = _cn$builders27.hardline,
      Ry = wc.isLineComment,
      Vy = wc.isBlockComment,
      $y = ii.locStart,
      qy = ii.locEnd;
  var Wy = {
    printComment: function printComment(e, t) {
      var n = e.getValue();
      if (Ry(n)) return t.originalText.slice($y(n), qy(n)).trimEnd();

      if (Vy(n)) {
        if (function (e) {
          var t = "*".concat(e.value, "*").split("\n");
          return t.length > 1 && t.every(function (e) {
            return "*" === e.trim()[0];
          });
        }(n)) {
          var _e113 = function (e) {
            var t = e.value.split("\n");
            return My(["/*", jy(_y, t.map(function (e, n) {
              return 0 === n ? e.trimEnd() : " " + (n < t.length - 1 ? e.trim() : e.trimStart());
            })), "*/"]);
          }(n);

          return n.trailing && !Ly(t.originalText, $y(n), {
            backwards: !0
          }) ? My([_y, _e113]) : _e113;
        }

        var _e112 = qy(n),
            _r60 = "*-/" === t.originalText.slice(_e112 - 3, _e112);

        return "/*" + n.value + (_r60 ? "*-/" : "*/");
      }

      throw new Error("Not a comment: " + JSON.stringify(n));
    }
  };
  var Uy = Lt.hasNewline,
      Jy = Lt.hasNewlineInRange,
      zy = Lt.getLast,
      Hy = Lt.printString,
      Gy = Lt.printNumber,
      Xy = Lt.isNextLineEmpty,
      _cn$builders28 = cn.builders,
      Yy = _cn$builders28.concat,
      Ky = _cn$builders28.join,
      Qy = _cn$builders28.line,
      Zy = _cn$builders28.hardline,
      eE = _cn$builders28.softline,
      tE = _cn$builders28.literalline,
      nE = _cn$builders28.group,
      rE = _cn$builders28.indent,
      oE = _cn$builders28.align,
      uE = _cn$builders28.conditionalGroup,
      iE = _cn$builders28.ifBreak,
      aE = cn.utils.isEmpty,
      sE = Sp.insertPragma,
      cE = zp.printHtmlBinding,
      lE = zp.isVueEventBindingExpression,
      pE = wc.getFunctionParameters,
      dE = wc.getCallArguments,
      fE = wc.getParentExportDeclaration,
      hE = wc.getTypeScriptMappedTypeModifier,
      mE = wc.hasDanglingComments,
      gE = wc.hasFlowShorthandAnnotationComment,
      DE = wc.hasLeadingOwnLineComment,
      yE = wc.hasNewlineBetweenOrAfterDecorators,
      EE = wc.hasNgSideEffect,
      CE = wc.hasPrettierIgnore,
      bE = wc.hasTrailingComment,
      vE = wc.isExportDeclaration,
      AE = wc.isFunctionNotation,
      FE = wc.isGetterOrSetter,
      xE = wc.isLiteral,
      SE = wc.isNgForOf,
      wE = wc.isObjectType,
      TE = wc.isObjectTypePropertyAFunction,
      BE = wc.isTheOnlyJSXElementInMarkdown,
      NE = wc.isTSXFile,
      kE = wc.isBlockComment,
      PE = wc.needsHardlineAfterDanglingComment,
      OE = wc.rawText,
      IE = wc.shouldPrintComma,
      LE = ii.locStart,
      ME = ii.locEnd,
      jE = nd.printOptionalToken,
      _E = nd.printBindExpressionCallee,
      RE = nd.printTypeScriptModifiers,
      VE = nd.printDecorators,
      $E = nd.printFlowDeclaration,
      qE = nd.adjustClause,
      WE = bd.printImportDeclaration,
      UE = bd.printExportDeclaration,
      JE = bd.printExportAllDeclaration,
      zE = bd.printModuleSpecifier,
      HE = af.printFunctionParameters,
      GE = Fl.printTemplateLiteral,
      XE = Tf.printArray,
      YE = Tf.printArrayItems,
      KE = Kf.printObject,
      QE = df.printTypeAnnotation,
      ZE = df.shouldHugType,
      eC = Ph.printJsxElement,
      tC = Ph.printJsxAttribute,
      nC = Ph.printJsxOpeningElement,
      rC = Ph.printJsxClosingElement,
      oC = Ph.printJsxOpeningClosingFragment,
      uC = Ph.printJsxExpressionContainer,
      iC = Ph.printJsxEmptyExpression,
      aC = Ph.printJsxSpreadAttribute,
      sC = Ph.printJsxSpreadChild,
      cC = eg.printClass,
      lC = eg.printClassMethod,
      pC = Yh.printTypeParameters,
      dC = am.printPropertyKey,
      fC = Lm.printFunctionDeclaration,
      hC = Lm.printArrowFunctionExpression,
      mC = Lm.printMethod,
      gC = Lm.printReturnAndThrowArgument,
      DC = ED.printCallExpression,
      yC = kD.printInterface,
      EC = cy.printVariableDeclarator,
      CC = cy.printAssignmentExpression,
      bC = cy.printAssignment,
      vC = cy.printAssignmentRight,
      AC = KD.printBinaryishExpression,
      FC = xy.printStatementSequence,
      xC = Ig.printMemberExpression,
      SC = Iy.printBlock,
      wC = Wy.printComment;

  function TC(e, t, n) {
    var r = OE(e),
        o = n || "DirectiveLiteral" === e.type;
    return Hy(r, t, o);
  }

  function BC(e) {
    var t = e.flags.split("").sort().join("");
    return "/".concat(e.pattern, "/").concat(t);
  }

  var NC = {
    preprocess: Hp,
    print: function print(e, t, n, r) {
      var o = e.getValue();
      var u = !1;

      var i = function (e, t, n, r) {
        var o = e.getValue(),
            u = t.semi ? ";" : "";
        if (!o) return "";
        if ("string" == typeof o) return o;
        var i = cE(e, t, n);
        if (i) return i;
        var a = [];

        switch (o.type) {
          case "JsExpressionRoot":
            return e.call(n, "node");

          case "JsonRoot":
            return Yy([e.call(n, "node"), Zy]);

          case "File":
            return o.program && o.program.interpreter && a.push(e.call(function (e) {
              return e.call(n, "interpreter");
            }, "program")), a.push(e.call(n, "program")), Yy(a);

          case "Program":
            {
              var _r61 = !o.body.every(function (_ref40) {
                var e = _ref40.type;
                return "EmptyStatement" === e;
              }) || o.comments;

              if (o.directives) {
                var _i50 = o.directives.length;
                e.each(function (e, o) {
                  a.push(n(e), u, Zy), (o < _i50 - 1 || _r61) && Xy(t.originalText, e.getValue(), ME) && a.push(Zy);
                }, "directives");
              }

              return a.push(e.call(function (e) {
                return FC(e, t, n);
              }, "body")), a.push(Fa.printDanglingComments(e, t, !0)), _r61 && a.push(Zy), Yy(a);
            }

          case "EmptyStatement":
            return "";

          case "ExpressionStatement":
            if (o.directive) return Yy([TC(o.expression, t, !0), u]);

            if ("__vue_event_binding" === t.parser) {
              var _t75 = e.getParentNode();

              if ("Program" === _t75.type && 1 === _t75.body.length && _t75.body[0] === o) return Yy([e.call(n, "expression"), lE(o.expression) ? ";" : ""]);
            }

            return Yy([e.call(n, "expression"), BE(t, e) ? "" : u]);

          case "ParenthesizedExpression":
            return !o.expression.comments ? Yy(["(", e.call(n, "expression"), ")"]) : nE(Yy(["(", rE(Yy([eE, e.call(n, "expression")])), eE, ")"]));

          case "AssignmentExpression":
            return CC(e, t, n);

          case "VariableDeclarator":
            return EC(e, t, n);

          case "BinaryExpression":
          case "LogicalExpression":
          case "NGPipeExpression":
            return AC(e, t, n);

          case "AssignmentPattern":
            return Yy([e.call(n, "left"), " = ", e.call(n, "right")]);

          case "TSTypeAssertion":
            {
              var _t76 = !("ArrayExpression" === o.expression.type || "ObjectExpression" === o.expression.type),
                  _r62 = nE(Yy(["<", rE(Yy([eE, e.call(n, "typeAnnotation")])), eE, ">"])),
                  _u18 = Yy([iE("("), rE(Yy([eE, e.call(n, "expression")])), eE, iE(")")]);

              return _t76 ? uE([Yy([_r62, e.call(n, "expression")]), Yy([_r62, nE(_u18, {
                shouldBreak: !0
              })]), Yy([_r62, e.call(n, "expression")])]) : nE(Yy([_r62, e.call(n, "expression")]));
            }

          case "OptionalMemberExpression":
          case "MemberExpression":
            return xC(e, t, n);

          case "MetaProperty":
            return Yy([e.call(n, "meta"), ".", e.call(n, "property")]);

          case "BindExpression":
            return o.object && a.push(e.call(n, "object")), a.push(nE(rE(Yy([eE, _E(e, t, n)])))), Yy(a);

          case "Identifier":
            return Yy([o.name, jE(e), QE(e, t, n)]);

          case "V8IntrinsicIdentifier":
            return Yy(["%", o.name]);

          case "SpreadElement":
          case "SpreadElementPattern":
          case "SpreadProperty":
          case "SpreadPropertyPattern":
          case "RestElement":
          case "ObjectTypeSpreadProperty":
            return Yy(["...", e.call(n, "argument"), QE(e, t, n)]);

          case "FunctionDeclaration":
          case "FunctionExpression":
            return a.push(fC(e, n, t, r && r.expandLastArg && dE(e.getParentNode()).length > 1)), o.body || a.push(u), Yy(a);

          case "ArrowFunctionExpression":
            return hC(e, t, n, r);

          case "YieldExpression":
            return a.push("yield"), o.delegate && a.push("*"), o.argument && a.push(" ", e.call(n, "argument")), Yy(a);

          case "AwaitExpression":
            {
              a.push("await"), o.argument && a.push(" ", e.call(n, "argument"));

              var _t77 = e.getParentNode();

              return ("CallExpression" === _t77.type || "OptionalCallExpression" === _t77.type) && _t77.callee === o || ("MemberExpression" === _t77.type || "OptionalMemberExpression" === _t77.type) && _t77.object === o ? nE(Yy([rE(Yy([eE, Yy(a)])), eE])) : Yy(a);
            }

          case "TSExportAssignment":
            return Yy(["export = ", e.call(n, "expression"), u]);

          case "ExportDefaultDeclaration":
          case "ExportNamedDeclaration":
          case "DeclareExportDeclaration":
            return UE(e, t, n);

          case "ExportAllDeclaration":
          case "DeclareExportAllDeclaration":
            return JE(e, t, n);

          case "ImportDeclaration":
            return WE(e, t, n);

          case "ImportSpecifier":
          case "ExportSpecifier":
          case "ImportNamespaceSpecifier":
          case "ExportNamespaceSpecifier":
          case "ImportDefaultSpecifier":
          case "ExportDefaultSpecifier":
            return zE(e, t, n);

          case "ImportAttribute":
            return Yy([e.call(n, "key"), ": ", e.call(n, "value")]);

          case "Import":
            return "import";

          case "TSModuleBlock":
          case "BlockStatement":
          case "StaticBlock":
            return SC(e, t, n);

          case "ThrowStatement":
          case "ReturnStatement":
            return Yy(["ReturnStatement" === o.type ? "return" : "throw", gC(e, t, n)]);

          case "NewExpression":
          case "ImportExpression":
          case "OptionalCallExpression":
          case "CallExpression":
            return DC(e, t, n);

          case "ObjectTypeInternalSlot":
            return Yy([o.static ? "static " : "", "[[", e.call(n, "id"), "]]", jE(e), o.method ? "" : ": ", e.call(n, "value")]);

          case "ObjectExpression":
          case "ObjectPattern":
          case "ObjectTypeAnnotation":
          case "TSInterfaceBody":
          case "TSTypeLiteral":
          case "RecordExpression":
            return KE(e, t, n);

          case "ObjectProperty":
          case "Property":
            return o.method || "get" === o.kind || "set" === o.kind ? mC(e, t, n) : (o.shorthand ? a.push(e.call(n, "value")) : a.push(bC(o.key, dC(e, t, n), ":", o.value, e.call(n, "value"), t)), Yy(a));

          case "ClassMethod":
          case "ClassPrivateMethod":
          case "MethodDefinition":
          case "TSAbstractMethodDefinition":
          case "TSDeclareMethod":
            return lC(e, t, n);

          case "ObjectMethod":
            return mC(e, t, n);

          case "Decorator":
            return Yy(["@", e.call(n, "expression"), e.call(n, "callee")]);

          case "ArrayExpression":
          case "ArrayPattern":
          case "TupleExpression":
            return XE(e, t, n);

          case "SequenceExpression":
            {
              var _t78 = e.getParentNode(0);

              if ("ExpressionStatement" === _t78.type || "ForStatement" === _t78.type) {
                var _t79 = [];
                return e.each(function (e) {
                  0 === e.getName() ? _t79.push(n(e)) : _t79.push(",", rE(Yy([Qy, n(e)])));
                }, "expressions"), nE(Yy(_t79));
              }

              return nE(Yy([Ky(Yy([",", Qy]), e.map(n, "expressions"))]));
            }

          case "ThisExpression":
            return "this";

          case "Super":
            return "super";

          case "NullLiteral":
            return "null";

          case "RegExpLiteral":
            return BC(o);

          case "NumericLiteral":
            return Gy(o.extra.raw);

          case "DecimalLiteral":
            return Gy(o.value) + "m";

          case "BigIntLiteral":
            return (o.bigint || o.extra.raw).toLowerCase();

          case "BooleanLiteral":
          case "StringLiteral":
          case "Literal":
            return o.regex ? BC(o.regex) : o.bigint ? o.raw.toLowerCase() : "number" == typeof o.value ? Gy(o.raw) : "string" != typeof o.value ? "" + o.value : TC(o, t);

          case "Directive":
            return e.call(n, "value");

          case "DirectiveLiteral":
            return TC(o, t);

          case "UnaryExpression":
            return a.push(o.operator), /[a-z]$/.test(o.operator) && a.push(" "), o.argument.comments && o.argument.comments.length > 0 ? a.push(nE(Yy(["(", rE(Yy([eE, e.call(n, "argument")])), eE, ")"]))) : a.push(e.call(n, "argument")), Yy(a);

          case "UpdateExpression":
            return a.push(e.call(n, "argument"), o.operator), o.prefix && a.reverse(), Yy(a);

          case "ConditionalExpression":
            return Md(e, t, n, {
              beforeParts: function beforeParts() {
                return [e.call(n, "test")];
              },
              afterParts: function afterParts(e) {
                return [e ? eE : ""];
              },
              shouldCheckJsx: !0,
              conditionalNodeType: "ConditionalExpression",
              consequentNodePropertyName: "consequent",
              alternateNodePropertyName: "alternate",
              testNodePropertyNames: ["test"]
            });

          case "VariableDeclaration":
            {
              var _t80 = e.map(function (e) {
                return n(e);
              }, "declarations"),
                  _r63 = e.getParentNode(),
                  _i51 = "ForStatement" === _r63.type || "ForInStatement" === _r63.type || "ForOfStatement" === _r63.type,
                  _s11 = o.declarations.some(function (e) {
                return e.init;
              });

              var _c10;

              return 1 !== _t80.length || o.declarations[0].comments ? _t80.length > 0 && (_c10 = rE(_t80[0])) : _c10 = _t80[0], a = [o.declare ? "declare " : "", o.kind, _c10 ? Yy([" ", _c10]) : "", rE(Yy(_t80.slice(1).map(function (e) {
                return Yy([",", _s11 && !_i51 ? Zy : Qy, e]);
              })))], _i51 && _r63.body !== o || a.push(u), nE(Yy(a));
            }

          case "TSTypeAliasDeclaration":
            {
              o.declare && a.push("declare ");

              var _r64 = vC(o.id, o.typeAnnotation, o.typeAnnotation && e.call(n, "typeAnnotation"), t);

              return a.push("type ", e.call(n, "id"), e.call(n, "typeParameters"), " =", _r64, u), nE(Yy(a));
            }

          case "WithStatement":
            return nE(Yy(["with (", e.call(n, "object"), ")", qE(o.body, e.call(n, "body"))]));

          case "IfStatement":
            {
              var _r65 = qE(o.consequent, e.call(n, "consequent")),
                  _u19 = nE(Yy(["if (", nE(Yy([rE(Yy([eE, e.call(n, "test")])), eE])), ")", _r65]));

              if (a.push(_u19), o.alternate) {
                var _r66 = bE(o.consequent) && o.consequent.comments.some(function (e) {
                  return e.trailing && !kE(e);
                }) || PE(o),
                    _u20 = "BlockStatement" === o.consequent.type && !_r66;

                a.push(_u20 ? " " : Zy), mE(o) && a.push(Fa.printDanglingComments(e, t, !0), _r66 ? Zy : " "), a.push("else", nE(qE(o.alternate, e.call(n, "alternate"), "IfStatement" === o.alternate.type)));
              }

              return Yy(a);
            }

          case "ForStatement":
            {
              var _r67 = qE(o.body, e.call(n, "body")),
                  _u21 = Fa.printDanglingComments(e, t, !0),
                  _i52 = _u21 ? Yy([_u21, eE]) : "";

              return o.init || o.test || o.update ? Yy([_i52, nE(Yy(["for (", nE(Yy([rE(Yy([eE, e.call(n, "init"), ";", Qy, e.call(n, "test"), ";", Qy, e.call(n, "update")])), eE])), ")", _r67]))]) : Yy([_i52, nE(Yy(["for (;;)", _r67]))]);
            }

          case "WhileStatement":
            return nE(Yy(["while (", nE(Yy([rE(Yy([eE, e.call(n, "test")])), eE])), ")", qE(o.body, e.call(n, "body"))]));

          case "ForInStatement":
            return nE(Yy(["for (", e.call(n, "left"), " in ", e.call(n, "right"), ")", qE(o.body, e.call(n, "body"))]));

          case "ForOfStatement":
            return nE(Yy(["for", o.await ? " await" : "", " (", e.call(n, "left"), " of ", e.call(n, "right"), ")", qE(o.body, e.call(n, "body"))]));

          case "DoWhileStatement":
            {
              var _t81 = qE(o.body, e.call(n, "body")),
                  _r68 = nE(Yy(["do", _t81]));

              return a = [_r68], "BlockStatement" === o.body.type ? a.push(" ") : a.push(Zy), a.push("while ("), a.push(nE(Yy([rE(Yy([eE, e.call(n, "test")])), eE])), ")", u), Yy(a);
            }

          case "DoExpression":
            return Yy(["do ", e.call(n, "body")]);

          case "BreakStatement":
            return a.push("break"), o.label && a.push(" ", e.call(n, "label")), a.push(u), Yy(a);

          case "ContinueStatement":
            return a.push("continue"), o.label && a.push(" ", e.call(n, "label")), a.push(u), Yy(a);

          case "LabeledStatement":
            return "EmptyStatement" === o.body.type ? Yy([e.call(n, "label"), ":;"]) : Yy([e.call(n, "label"), ": ", e.call(n, "body")]);

          case "TryStatement":
            return Yy(["try ", e.call(n, "block"), o.handler ? Yy([" ", e.call(n, "handler")]) : "", o.finalizer ? Yy([" finally ", e.call(n, "finalizer")]) : ""]);

          case "CatchClause":
            if (o.param) {
              var _r69 = o.param.comments && o.param.comments.some(function (e) {
                return !kE(e) || e.leading && Uy(t.originalText, ME(e)) || e.trailing && Uy(t.originalText, LE(e), {
                  backwards: !0
                });
              }),
                  _u22 = e.call(n, "param");

              return Yy(["catch ", Yy(_r69 ? ["(", rE(Yy([eE, _u22])), eE, ") "] : ["(", _u22, ") "]), e.call(n, "body")]);
            }

            return Yy(["catch ", e.call(n, "body")]);

          case "SwitchStatement":
            return Yy([nE(Yy(["switch (", rE(Yy([eE, e.call(n, "discriminant")])), eE, ")"])), " {", o.cases.length > 0 ? rE(Yy([Zy, Ky(Zy, e.map(function (e) {
              var r = e.getValue();
              return Yy([e.call(n), o.cases.indexOf(r) !== o.cases.length - 1 && Xy(t.originalText, r, ME) ? Zy : ""]);
            }, "cases"))])) : "", Zy, "}"]);

          case "SwitchCase":
            {
              o.test ? a.push("case ", e.call(n, "test"), ":") : a.push("default:");

              var _r70 = o.consequent.filter(function (e) {
                return "EmptyStatement" !== e.type;
              });

              if (_r70.length > 0) {
                var _o24 = e.call(function (e) {
                  return FC(e, t, n);
                }, "consequent");

                a.push(1 === _r70.length && "BlockStatement" === _r70[0].type ? Yy([" ", _o24]) : rE(Yy([Zy, _o24])));
              }

              return Yy(a);
            }

          case "DebuggerStatement":
            return Yy(["debugger", u]);

          case "JSXAttribute":
            return tC(e, t, n);

          case "JSXIdentifier":
            return "" + o.name;

          case "JSXNamespacedName":
            return Ky(":", [e.call(n, "namespace"), e.call(n, "name")]);

          case "JSXMemberExpression":
            return Ky(".", [e.call(n, "object"), e.call(n, "property")]);

          case "TSQualifiedName":
            return Ky(".", [e.call(n, "left"), e.call(n, "right")]);

          case "JSXSpreadAttribute":
            return aC(e, t, n);

          case "JSXSpreadChild":
            return sC(e, t, n);

          case "JSXExpressionContainer":
            return uC(e, t, n);

          case "JSXFragment":
          case "JSXElement":
            return eC(e, t, n);

          case "JSXOpeningElement":
            return nC(e, t, n);

          case "JSXClosingElement":
            return rC(e, t, n);

          case "JSXOpeningFragment":
          case "JSXClosingFragment":
            return oC(e, t);

          case "JSXText":
            throw new Error("JSXTest should be handled by JSXElement");

          case "JSXEmptyExpression":
            return iC(e, t);

          case "ClassBody":
            return o.comments || 0 !== o.body.length ? Yy(["{", o.body.length > 0 ? rE(Yy([Zy, e.call(function (e) {
              return FC(e, t, n);
            }, "body")])) : Fa.printDanglingComments(e, t), Zy, "}"]) : "{}";

          case "ClassProperty":
          case "FieldDefinition":
          case "TSAbstractClassProperty":
          case "ClassPrivateProperty":
            return o.decorators && 0 !== o.decorators.length && a.push(VE(e, t, n)), o.accessibility && a.push(o.accessibility + " "), o.declare && a.push("declare "), o.static && a.push("static "), ("TSAbstractClassProperty" === o.type || o.abstract) && a.push("abstract "), o.readonly && a.push("readonly "), o.variance && a.push(e.call(n, "variance")), a.push(dC(e, t, n), jE(e), QE(e, t, n)), o.value && a.push(" =", vC(o.key, o.value, e.call(n, "value"), t)), a.push(u), nE(Yy(a));

          case "ClassDeclaration":
          case "ClassExpression":
            return o.declare && a.push("declare "), a.push(cC(e, t, n)), Yy(a);

          case "TSInterfaceHeritage":
          case "TSExpressionWithTypeArguments":
            return a.push(e.call(n, "expression")), o.typeParameters && a.push(e.call(n, "typeParameters")), Yy(a);

          case "TemplateElement":
            return Ky(tE, o.value.raw.split(/\r?\n/g));

          case "TSTemplateLiteralType":
          case "TemplateLiteral":
            return GE(e, n, t);

          case "TaggedTemplateExpression":
            return Yy([e.call(n, "tag"), e.call(n, "typeParameters"), e.call(n, "quasi")]);

          case "Node":
          case "Printable":
          case "SourceLocation":
          case "Position":
          case "Statement":
          case "Function":
          case "Pattern":
          case "Expression":
          case "Declaration":
          case "Specifier":
          case "NamedSpecifier":
          case "Comment":
          case "MemberTypeAnnotation":
          case "Type":
            throw new Error("unprintable type: " + JSON.stringify(o.type));

          case "TypeAnnotation":
          case "TSTypeAnnotation":
            return o.typeAnnotation ? e.call(n, "typeAnnotation") : "";

          case "TSNamedTupleMember":
            return Yy([e.call(n, "label"), o.optional ? "?" : "", ": ", e.call(n, "elementType")]);

          case "TSTupleType":
          case "TupleTypeAnnotation":
            {
              var _r71 = "TSTupleType" === o.type ? "elementTypes" : "types",
                  _u23 = o[_r71].length > 0 && "TSRestType" === zy(o[_r71]).type;

              return nE(Yy(["[", rE(Yy([eE, YE(e, t, _r71, n)])), iE(IE(t, "all") && !_u23 ? "," : ""), Fa.printDanglingComments(e, t, !0), eE, "]"]));
            }

          case "ExistsTypeAnnotation":
            return "*";

          case "EmptyTypeAnnotation":
            return "empty";

          case "MixedTypeAnnotation":
            return "mixed";

          case "ArrayTypeAnnotation":
            return Yy([e.call(n, "elementType"), "[]"]);

          case "BooleanLiteralTypeAnnotation":
            return "" + o.value;

          case "DeclareClass":
            return $E(e, cC(e, t, n));

          case "TSDeclareFunction":
            return Yy([o.declare ? "declare " : "", fC(e, n, t), u]);

          case "DeclareFunction":
            return $E(e, Yy(["function ", e.call(n, "id"), o.predicate ? " " : "", e.call(n, "predicate"), u]));

          case "DeclareModule":
            return $E(e, Yy(["module ", e.call(n, "id"), " ", e.call(n, "body")]));

          case "DeclareModuleExports":
            return $E(e, Yy(["module.exports", ": ", e.call(n, "typeAnnotation"), u]));

          case "DeclareVariable":
            return $E(e, Yy(["var ", e.call(n, "id"), u]));

          case "DeclareOpaqueType":
          case "OpaqueType":
            return a.push("opaque type ", e.call(n, "id"), e.call(n, "typeParameters")), o.supertype && a.push(": ", e.call(n, "supertype")), o.impltype && a.push(" = ", e.call(n, "impltype")), a.push(u), "DeclareOpaqueType" === o.type ? $E(e, Yy(a)) : Yy(a);

          case "EnumDeclaration":
            return Yy(["enum ", e.call(n, "id"), " ", e.call(n, "body")]);

          case "EnumBooleanBody":
          case "EnumNumberBody":
          case "EnumStringBody":
          case "EnumSymbolBody":
            if ("EnumSymbolBody" === o.type || o.explicitType) {
              var _e114 = null;

              switch (o.type) {
                case "EnumBooleanBody":
                  _e114 = "boolean";
                  break;

                case "EnumNumberBody":
                  _e114 = "number";
                  break;

                case "EnumStringBody":
                  _e114 = "string";
                  break;

                case "EnumSymbolBody":
                  _e114 = "symbol";
              }

              a.push("of ", _e114, " ");
            }

            if (0 !== o.members.length || o.hasUnknownMembers) {
              var _r72 = o.members.length ? [Zy, YE(e, t, "members", n), o.hasUnknownMembers || IE(t) ? "," : ""] : [];

              a.push(nE(Yy(["{", rE(Yy([].concat(_r72, _toConsumableArray(o.hasUnknownMembers ? [Zy, "..."] : [])))), Fa.printDanglingComments(e, t, !0), Zy, "}"])));
            } else a.push(nE(Yy(["{", Fa.printDanglingComments(e, t), eE, "}"])));

            return Yy(a);

          case "EnumBooleanMember":
          case "EnumNumberMember":
          case "EnumStringMember":
            return Yy([e.call(n, "id"), " = ", "object" == _typeof(o.init) ? e.call(n, "init") : String(o.init)]);

          case "EnumDefaultedMember":
            return e.call(n, "id");

          case "FunctionTypeAnnotation":
          case "TSFunctionType":
            {
              var _r73 = e.getParentNode(0),
                  _u24 = e.getParentNode(1),
                  _i53 = e.getParentNode(2);

              var _s12 = "TSFunctionType" === o.type || !(("ObjectTypeProperty" === _r73.type || "ObjectTypeInternalSlot" === _r73.type) && !_r73.variance && !_r73.optional && LE(_r73) === LE(o) || "ObjectTypeCallProperty" === _r73.type || _i53 && "DeclareFunction" === _i53.type),
                  _c11 = _s12 && ("TypeAnnotation" === _r73.type || "TSTypeAnnotation" === _r73.type);

              var _l7 = _c11 && _s12 && ("TypeAnnotation" === _r73.type || "TSTypeAnnotation" === _r73.type) && "ArrowFunctionExpression" === _u24.type;

              return TE(_r73) && (_s12 = !0, _c11 = !0), _l7 && a.push("("), a.push(HE(e, n, t, !1, !0)), (o.returnType || o.predicate || o.typeAnnotation) && a.push(_s12 ? " => " : ": ", e.call(n, "returnType"), e.call(n, "predicate"), e.call(n, "typeAnnotation")), _l7 && a.push(")"), nE(Yy(a));
            }

          case "TSRestType":
            return Yy(["...", e.call(n, "typeAnnotation")]);

          case "TSOptionalType":
            return Yy([e.call(n, "typeAnnotation"), "?"]);

          case "FunctionTypeParam":
            {
              var _t82 = o.name ? e.call(n, "name") : e.getParentNode().this === o ? "this" : "";

              return Yy([_t82, jE(e), _t82 ? ": " : "", e.call(n, "typeAnnotation")]);
            }

          case "DeclareInterface":
          case "InterfaceDeclaration":
          case "InterfaceTypeAnnotation":
          case "TSInterfaceDeclaration":
            return yC(e, t, n);

          case "ClassImplements":
          case "InterfaceExtends":
            return Yy([e.call(n, "id"), e.call(n, "typeParameters")]);

          case "TSClassImplements":
            return Yy([e.call(n, "expression"), e.call(n, "typeParameters")]);

          case "TSIntersectionType":
          case "IntersectionTypeAnnotation":
            {
              var _t83 = e.map(n, "types"),
                  _r74 = [];

              var _u25 = !1;

              for (var _e115 = 0; _e115 < _t83.length; ++_e115) {
                0 === _e115 ? _r74.push(_t83[_e115]) : wE(o.types[_e115 - 1]) && wE(o.types[_e115]) ? _r74.push(Yy([" & ", _u25 ? rE(_t83[_e115]) : _t83[_e115]])) : wE(o.types[_e115 - 1]) || wE(o.types[_e115]) ? (_e115 > 1 && (_u25 = !0), _r74.push(" & ", _e115 > 1 ? rE(_t83[_e115]) : _t83[_e115])) : _r74.push(rE(Yy([" &", Qy, _t83[_e115]])));
              }

              return nE(Yy(_r74));
            }

          case "TSUnionType":
          case "UnionTypeAnnotation":
            {
              var _r75 = e.getParentNode(),
                  _u26 = !("TypeParameterInstantiation" === _r75.type || "TSTypeParameterInstantiation" === _r75.type || "GenericTypeAnnotation" === _r75.type || "TSTypeReference" === _r75.type || "TSTypeAssertion" === _r75.type || "TupleTypeAnnotation" === _r75.type || "TSTupleType" === _r75.type || "FunctionTypeParam" === _r75.type && !_r75.name && e.getParentNode(1).this !== _r75 || ("TypeAlias" === _r75.type || "VariableDeclarator" === _r75.type || "TSTypeAliasDeclaration" === _r75.type) && DE(t.originalText, o)),
                  _i54 = ZE(o),
                  _a8 = e.map(function (e) {
                var r = e.call(n);
                return _i54 || (r = oE(2, r)), Fa.printComments(e, function () {
                  return r;
                }, t);
              }, "types");

              if (_i54) return Ky(" | ", _a8);

              var _s13 = _u26 && !DE(t.originalText, o),
                  _c12 = Yy([iE(Yy([_s13 ? Qy : "", "| "])), Ky(Yy([Qy, "| "]), _a8)]);

              return Rp(e, t) ? nE(Yy([rE(_c12), eE])) : "TupleTypeAnnotation" === _r75.type && _r75.types.length > 1 || "TSTupleType" === _r75.type && _r75.elementTypes.length > 1 ? nE(Yy([rE(Yy([iE(Yy(["(", eE])), _c12])), eE, iE(")")])) : nE(_u26 ? rE(_c12) : _c12);
            }

          case "NullableTypeAnnotation":
            return Yy(["?", e.call(n, "typeAnnotation")]);

          case "Variance":
            {
              var _e116 = o.kind;
              return ta.ok("plus" === _e116 || "minus" === _e116), "plus" === _e116 ? "+" : "-";
            }

          case "ObjectTypeCallProperty":
            return o.static && a.push("static "), a.push(e.call(n, "value")), Yy(a);

          case "ObjectTypeIndexer":
            return Yy([o.variance ? e.call(n, "variance") : "", "[", e.call(n, "id"), o.id ? ": " : "", e.call(n, "key"), "]: ", e.call(n, "value")]);

          case "ObjectTypeProperty":
            {
              var _r76 = "";
              return o.proto ? _r76 = "proto " : o.static && (_r76 = "static "), Yy([_r76, FE(o) ? o.kind + " " : "", o.variance ? e.call(n, "variance") : "", dC(e, t, n), jE(e), AE(o) ? "" : ": ", e.call(n, "value")]);
            }

          case "QualifiedTypeIdentifier":
            return Yy([e.call(n, "qualification"), ".", e.call(n, "id")]);

          case "StringLiteralTypeAnnotation":
            return TC(o, t);

          case "NumberLiteralTypeAnnotation":
            ta.strictEqual(_typeof(o.value), "number");

          case "BigIntLiteralTypeAnnotation":
            return null != o.extra ? Gy(o.extra.raw) : Gy(o.raw);

          case "DeclareTypeAlias":
          case "TypeAlias":
            {
              ("DeclareTypeAlias" === o.type || o.declare) && a.push("declare ");

              var _r77 = vC(o.id, o.right, e.call(n, "right"), t);

              return a.push("type ", e.call(n, "id"), e.call(n, "typeParameters"), " =", _r77, u), nE(Yy(a));
            }

          case "TypeCastExpression":
            return Yy(["(", e.call(n, "expression"), QE(e, t, n), ")"]);

          case "TypeParameterDeclaration":
          case "TypeParameterInstantiation":
            {
              var _r78 = pC(e, t, n, "params");

              if ("flow" === t.parser) {
                var _e117 = LE(o),
                    _n61 = ME(o),
                    _u27 = t.originalText.lastIndexOf("/*", _e117),
                    _i55 = t.originalText.indexOf("*/", _n61);

                if (-1 !== _u27 && -1 !== _i55) {
                  var _e118 = t.originalText.slice(_u27 + 2, _i55).trim();

                  if (_e118.startsWith("::") && !_e118.includes("/*") && !_e118.includes("*/")) return Yy(["/*:: ", _r78, " */"]);
                }
              }

              return _r78;
            }

          case "TSTypeParameterDeclaration":
          case "TSTypeParameterInstantiation":
            return pC(e, t, n, "params");

          case "TSTypeParameter":
          case "TypeParameter":
            {
              var _r79 = e.getParentNode();

              if ("TSMappedType" === _r79.type) return a.push("[", e.call(n, "name")), o.constraint && a.push(" in ", e.call(n, "constraint")), _r79.nameType && a.push(" as ", e.callParent(function (e) {
                return e.call(n, "nameType");
              })), a.push("]"), Yy(a);
              o.variance && a.push(e.call(n, "variance")), a.push(e.call(n, "name")), o.bound && (a.push(": "), a.push(e.call(n, "bound"))), o.constraint && a.push(" extends ", e.call(n, "constraint")), o.default && a.push(" = ", e.call(n, "default"));

              var _u28 = e.getNode(2);

              return 1 === pE(_r79).length && NE(t) && !o.constraint && "ArrowFunctionExpression" === _u28.type && a.push(","), Yy(a);
            }

          case "TypeofTypeAnnotation":
            return Yy(["typeof ", e.call(n, "argument")]);

          case "InferredPredicate":
            return "%checks";

          case "DeclaredPredicate":
            return Yy(["%checks(", e.call(n, "value"), ")"]);

          case "TSAbstractKeyword":
            return "abstract";

          case "AnyTypeAnnotation":
          case "TSAnyKeyword":
            return "any";

          case "TSAsyncKeyword":
            return "async";

          case "BooleanTypeAnnotation":
          case "TSBooleanKeyword":
            return "boolean";

          case "BigIntTypeAnnotation":
          case "TSBigIntKeyword":
            return "bigint";

          case "TSConstKeyword":
            return "const";

          case "TSDeclareKeyword":
            return "declare";

          case "TSExportKeyword":
            return "export";

          case "NullLiteralTypeAnnotation":
          case "TSNullKeyword":
            return "null";

          case "TSNeverKeyword":
            return "never";

          case "NumberTypeAnnotation":
          case "TSNumberKeyword":
            return "number";

          case "TSObjectKeyword":
            return "object";

          case "TSProtectedKeyword":
            return "protected";

          case "TSPrivateKeyword":
            return "private";

          case "TSPublicKeyword":
            return "public";

          case "TSReadonlyKeyword":
            return "readonly";

          case "SymbolTypeAnnotation":
          case "TSSymbolKeyword":
            return "symbol";

          case "TSStaticKeyword":
            return "static";

          case "StringTypeAnnotation":
          case "TSStringKeyword":
            return "string";

          case "TSUndefinedKeyword":
            return "undefined";

          case "TSUnknownKeyword":
            return "unknown";

          case "VoidTypeAnnotation":
          case "TSVoidKeyword":
            return "void";

          case "TSAsExpression":
            return Yy([e.call(n, "expression"), " as ", e.call(n, "typeAnnotation")]);

          case "TSArrayType":
            return Yy([e.call(n, "elementType"), "[]"]);

          case "TSPropertySignature":
            return o.export && a.push("export "), o.accessibility && a.push(o.accessibility + " "), o.static && a.push("static "), o.readonly && a.push("readonly "), a.push(dC(e, t, n), jE(e)), o.typeAnnotation && (a.push(": "), a.push(e.call(n, "typeAnnotation"))), o.initializer && a.push(" = ", e.call(n, "initializer")), Yy(a);

          case "TSParameterProperty":
            return o.accessibility && a.push(o.accessibility + " "), o.export && a.push("export "), o.static && a.push("static "), o.readonly && a.push("readonly "), a.push(e.call(n, "parameter")), Yy(a);

          case "GenericTypeAnnotation":
          case "TSTypeReference":
            return Yy([e.call(n, "TSTypeReference" === o.type ? "typeName" : "id"), pC(e, t, n, "typeParameters")]);

          case "TSTypeQuery":
            return Yy(["typeof ", e.call(n, "exprName")]);

          case "TSIndexSignature":
            {
              var _r80 = e.getParentNode(),
                  _i56 = o.parameters.length > 1 ? iE(IE(t) ? "," : "") : "",
                  _a9 = nE(Yy([rE(Yy([eE, Ky(Yy([", ", eE]), e.map(n, "parameters"))])), _i56, eE]));

              return Yy([o.export ? "export " : "", o.accessibility ? Yy([o.accessibility, " "]) : "", o.static ? "static " : "", o.readonly ? "readonly " : "", o.declare ? "declare " : "", "[", o.parameters ? _a9 : "", o.typeAnnotation ? "]: " : "]", o.typeAnnotation ? e.call(n, "typeAnnotation") : "", "ClassBody" === _r80.type ? u : ""]);
            }

          case "TSTypePredicate":
            return Yy([o.asserts ? "asserts " : "", e.call(n, "parameterName"), o.typeAnnotation ? Yy([" is ", e.call(n, "typeAnnotation")]) : ""]);

          case "TSNonNullExpression":
            return Yy([e.call(n, "expression"), "!"]);

          case "ThisTypeAnnotation":
          case "TSThisType":
            return "this";

          case "TSImportType":
            return Yy([o.isTypeOf ? "typeof " : "", "import(", e.call(n, o.parameter ? "parameter" : "argument"), ")", o.qualifier ? Yy([".", e.call(n, "qualifier")]) : "", pC(e, t, n, "typeParameters")]);

          case "TSLiteralType":
            return e.call(n, "literal");

          case "TSIndexedAccessType":
            return Yy([e.call(n, "objectType"), "[", e.call(n, "indexType"), "]"]);

          case "TSConstructSignatureDeclaration":
          case "TSCallSignatureDeclaration":
          case "TSConstructorType":
            if ("TSCallSignatureDeclaration" !== o.type && a.push("new "), a.push(nE(HE(e, n, t, !1, !0))), o.returnType || o.typeAnnotation) {
              var _t84 = "TSConstructorType" === o.type;

              a.push(_t84 ? " => " : ": ", e.call(n, "returnType"), e.call(n, "typeAnnotation"));
            }

            return Yy(a);

          case "TSTypeOperator":
            return Yy([o.operator, " ", e.call(n, "typeAnnotation")]);

          case "TSMappedType":
            {
              var _r81 = Jy(t.originalText, LE(o), ME(o));

              return nE(Yy(["{", rE(Yy([t.bracketSpacing ? Qy : eE, o.readonly ? Yy([hE(o.readonly, "readonly"), " "]) : "", RE(e, t, n), e.call(n, "typeParameter"), o.optional ? hE(o.optional, "?") : "", o.typeAnnotation ? ": " : "", e.call(n, "typeAnnotation"), iE(u, "")])), Fa.printDanglingComments(e, t, !0), t.bracketSpacing ? Qy : eE, "}"]), {
                shouldBreak: _r81
              });
            }

          case "TSMethodSignature":
            return a.push(o.accessibility ? Yy([o.accessibility, " "]) : "", o.export ? "export " : "", o.static ? "static " : "", o.readonly ? "readonly " : "", o.computed ? "[" : "", e.call(n, "key"), o.computed ? "]" : "", jE(e), HE(e, n, t, !1, !0)), (o.returnType || o.typeAnnotation) && a.push(": ", e.call(n, "returnType"), e.call(n, "typeAnnotation")), nE(Yy(a));

          case "TSNamespaceExportDeclaration":
            return a.push("export as namespace ", e.call(n, "id")), t.semi && a.push(";"), nE(Yy(a));

          case "TSEnumDeclaration":
            return o.declare && a.push("declare "), o.modifiers && a.push(RE(e, t, n)), o.const && a.push("const "), a.push("enum ", e.call(n, "id"), " "), 0 === o.members.length ? a.push(nE(Yy(["{", Fa.printDanglingComments(e, t), eE, "}"]))) : a.push(nE(Yy(["{", rE(Yy([Zy, YE(e, t, "members", n), IE(t, "es5") ? "," : ""])), Fa.printDanglingComments(e, t, !0), Zy, "}"]))), Yy(a);

          case "TSEnumMember":
            return a.push(e.call(n, "id")), o.initializer && a.push(" = ", e.call(n, "initializer")), Yy(a);

          case "TSImportEqualsDeclaration":
            return o.isExport && a.push("export "), a.push("import ", e.call(n, "id"), " = ", e.call(n, "moduleReference")), t.semi && a.push(";"), nE(Yy(a));

          case "TSExternalModuleReference":
            return Yy(["require(", e.call(n, "expression"), ")"]);

          case "TSModuleDeclaration":
            {
              var _r82 = e.getParentNode(),
                  _i57 = xE(o.id),
                  _s14 = "TSModuleDeclaration" === _r82.type,
                  _c13 = o.body && "TSModuleDeclaration" === o.body.type;

              if (_s14) a.push(".");else {
                o.declare && a.push("declare "), a.push(RE(e, t, n));

                var _r83 = t.originalText.slice(LE(o), LE(o.id));

                "Identifier" === o.id.type && "global" === o.id.name && !/namespace|module/.test(_r83) || a.push(_i57 || /(^|\s)module(\s|$)/.test(_r83) ? "module " : "namespace ");
              }
              return a.push(e.call(n, "id")), _c13 ? a.push(e.call(n, "body")) : o.body ? a.push(" ", nE(e.call(n, "body"))) : a.push(u), Yy(a);
            }

          case "PrivateName":
            return Yy(["#", e.call(n, o.id ? "id" : "name")]);

          case "TSPrivateIdentifier":
            return o.escapedText;

          case "TSConditionalType":
            return Md(e, t, n, {
              beforeParts: function beforeParts() {
                return [e.call(n, "checkType"), " ", "extends", " ", e.call(n, "extendsType")];
              },
              afterParts: function afterParts() {
                return [];
              },
              shouldCheckJsx: !1,
              conditionalNodeType: "TSConditionalType",
              consequentNodePropertyName: "trueType",
              alternateNodePropertyName: "falseType",
              testNodePropertyNames: ["checkType", "extendsType"]
            });

          case "TSInferType":
            return Yy(["infer", " ", e.call(n, "typeParameter")]);

          case "InterpreterDirective":
            return a.push("#!", o.value, Zy), Xy(t.originalText, o, ME) && a.push(Zy), Yy(a);

          case "NGRoot":
            return Yy([].concat(e.call(n, "node"), o.node.comments && 0 !== o.node.comments.length ? Yy([" //", o.node.comments[0].value.trimEnd()]) : []));

          case "NGChainedExpression":
            return nE(Ky(Yy([";", Qy]), e.map(function (e) {
              return EE(e) ? n(e) : Yy(["(", n(e), ")"]);
            }, "expressions")));

          case "NGEmptyExpression":
            return "";

          case "NGQuotedExpression":
            return Yy([o.prefix, ": ", o.value.trim()]);

          case "NGMicrosyntax":
            return Yy(e.map(function (e, t) {
              return Yy([0 === t ? "" : SE(e.getValue(), t, o) ? " " : Yy([";", Qy]), n(e)]);
            }, "body"));

          case "NGMicrosyntaxKey":
            return /^[$_a-z][\w$]*(-[$_a-z][\w$])*$/i.test(o.name) ? o.name : JSON.stringify(o.name);

          case "NGMicrosyntaxExpression":
            return Yy([e.call(n, "expression"), null === o.alias ? "" : Yy([" as ", e.call(n, "alias")])]);

          case "NGMicrosyntaxKeyedExpression":
            {
              var _t85 = e.getName(),
                  _r84 = e.getParentNode(),
                  _u29 = SE(o, _t85, _r84) || (1 === _t85 && ("then" === o.key.name || "else" === o.key.name) || 2 === _t85 && "else" === o.key.name && "NGMicrosyntaxKeyedExpression" === _r84.body[_t85 - 1].type && "then" === _r84.body[_t85 - 1].key.name) && "NGMicrosyntaxExpression" === _r84.body[0].type;

              return Yy([e.call(n, "key"), _u29 ? " " : ": ", e.call(n, "expression")]);
            }

          case "NGMicrosyntaxLet":
            return Yy(["let ", e.call(n, "key"), null === o.value ? "" : Yy([" = ", e.call(n, "value")])]);

          case "NGMicrosyntaxAs":
            return Yy([e.call(n, "key"), " as ", e.call(n, "alias")]);

          case "PipelineBareFunction":
            return e.call(n, "callee");

          case "PipelineTopicExpression":
            return e.call(n, "expression");

          case "PipelinePrimaryTopicReference":
            return a.push("#"), Yy(a);

          case "ArgumentPlaceholder":
            return "?";

          case "TSJSDocAllType":
            return "*";

          case "TSJSDocUnknownType":
            return "?";

          case "TSJSDocNullableType":
            return Yy(["?", e.call(n, "typeAnnotation")]);

          case "TSJSDocNonNullableType":
            return Yy(["!", e.call(n, "typeAnnotation")]);

          case "TSJSDocFunctionType":
            return Yy(["function(", "): ", e.call(n, "typeAnnotation")]);

          default:
            throw new Error("unknown type: " + JSON.stringify(o.type));
        }
      }(e, t, n, r);

      if (!o || aE(i)) return i;
      var a = fE(e),
          s = [];
      if ("ClassMethod" === o.type || "ClassPrivateMethod" === o.type || "ClassProperty" === o.type || "FieldDefinition" === o.type || "TSAbstractClassProperty" === o.type || "ClassPrivateProperty" === o.type || "MethodDefinition" === o.type || "TSAbstractMethodDefinition" === o.type || "TSDeclareMethod" === o.type) ;else if (o.decorators && o.decorators.length > 0 && !(a && LE(a, {
        ignoreDecorators: !0
      }) > LE(o.decorators[0]))) {
        var _r85 = "ClassExpression" === o.type || "ClassDeclaration" === o.type || yE(o, t) ? Zy : Qy;

        e.each(function (e) {
          var t = e.getValue();
          t = t.expression ? t.expression : t.callee, s.push(n(e), _r85);
        }, "decorators"), a && s.unshift(Zy);
      } else vE(o) && o.declaration && o.declaration.decorators && o.declaration.decorators.length > 0 && LE(o, {
        ignoreDecorators: !0
      }) > LE(o.declaration.decorators[0]) ? e.each(function (e) {
        var t = "Decorator" === e.getValue().type ? "" : "@";
        s.push(t, n(e), Zy);
      }, "declaration", "decorators") : u = Rp(e, t);
      var c = [];

      if (u && c.unshift("("), c.push(i), u) {
        var _t86 = e.getValue();

        gE(_t86) && (c.push(" /*"), c.push(_t86.trailingComments[0].value.trimStart()), c.push("*/"), _t86.trailingComments[0].printed = !0), c.push(")");
      }

      return s.length > 0 ? nE(Yy(s.concat(c))) : Yy(c);
    },
    embed: pp,
    insertPragma: sE,
    massageAstNode: mp,
    hasPrettierIgnore: CE,
    willPrintOwnComments: il.willPrintOwnComments,
    canAttachComment: function canAttachComment(e) {
      return e.type && "CommentBlock" !== e.type && "CommentLine" !== e.type && "Line" !== e.type && "Block" !== e.type && "EmptyStatement" !== e.type && "TemplateElement" !== e.type && "Import" !== e.type;
    },
    printComment: wC,
    isBlockComment: kE,
    handleComments: {
      ownLine: il.handleOwnLineComment,
      endOfLine: il.handleEndOfLineComment,
      remaining: il.handleRemainingComment
    },
    getGapRegex: il.getGapRegex,
    getCommentChildNodes: il.getCommentChildNodes
  };
  var _cn$builders29 = cn.builders,
      kC = _cn$builders29.concat,
      PC = _cn$builders29.hardline,
      OC = _cn$builders29.indent,
      IC = _cn$builders29.join;
  var LC = new Set(["start", "end", "extra", "loc", "comments", "errors", "range"]);

  function MC(e, t) {
    var n = e.type;
    return "Identifier" === n ? {
      type: "StringLiteral",
      value: e.name
    } : "UnaryExpression" === n && "+" === e.operator ? t.argument : void 0;
  }

  MC.ignoredProperties = LC;
  var jC = {
    preprocess: Hp,
    print: function print(e, t, n) {
      var r = e.getValue();

      switch (r.type) {
        case "JsonRoot":
          return kC([e.call(n, "node"), PC]);

        case "ArrayExpression":
          return 0 === r.elements.length ? "[]" : kC(["[", OC(kC([PC, IC(kC([",", PC]), e.map(n, "elements"))])), PC, "]"]);

        case "ObjectExpression":
          return 0 === r.properties.length ? "{}" : kC(["{", OC(kC([PC, IC(kC([",", PC]), e.map(n, "properties"))])), PC, "}"]);

        case "ObjectProperty":
          return kC([e.call(n, "key"), ": ", e.call(n, "value")]);

        case "UnaryExpression":
          return kC(["+" === r.operator ? "" : r.operator, e.call(n, "argument")]);

        case "NullLiteral":
          return "null";

        case "BooleanLiteral":
          return r.value ? "true" : "false";

        case "StringLiteral":
        case "NumericLiteral":
          return JSON.stringify(r.value);

        case "Identifier":
          return JSON.stringify(r.name);

        default:
          throw new Error("unknown type: " + JSON.stringify(r.type));
      }
    },
    massageAstNode: MC
  };
  var _C = "Common";
  var RC = {
    bracketSpacing: {
      since: "0.0.0",
      category: _C,
      type: "boolean",
      default: !0,
      description: "Print spaces between brackets.",
      oppositeDescription: "Do not print spaces between brackets."
    },
    singleQuote: {
      since: "0.0.0",
      category: _C,
      type: "boolean",
      default: !1,
      description: "Use single quotes instead of double quotes."
    },
    proseWrap: {
      since: "1.8.2",
      category: _C,
      type: "choice",
      default: [{
        since: "1.8.2",
        value: !0
      }, {
        since: "1.9.0",
        value: "preserve"
      }],
      description: "How to wrap prose.",
      choices: [{
        since: "1.9.0",
        value: "always",
        description: "Wrap prose if it exceeds the print width."
      }, {
        since: "1.9.0",
        value: "never",
        description: "Do not wrap prose."
      }, {
        since: "1.9.0",
        value: "preserve",
        description: "Wrap prose as-is."
      }]
    }
  };
  var VC = "JavaScript";
  var $C = {
    arrowParens: {
      since: "1.9.0",
      category: VC,
      type: "choice",
      default: [{
        since: "1.9.0",
        value: "avoid"
      }, {
        since: "2.0.0",
        value: "always"
      }],
      description: "Include parentheses around a sole arrow function parameter.",
      choices: [{
        value: "always",
        description: "Always include parens. Example: `(x) => x`"
      }, {
        value: "avoid",
        description: "Omit parens when possible. Example: `x => x`"
      }]
    },
    bracketSpacing: RC.bracketSpacing,
    jsxBracketSameLine: {
      since: "0.17.0",
      category: VC,
      type: "boolean",
      default: !1,
      description: "Put > on the last line instead of at a new line."
    },
    semi: {
      since: "1.0.0",
      category: VC,
      type: "boolean",
      default: !0,
      description: "Print semicolons.",
      oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them."
    },
    singleQuote: RC.singleQuote,
    jsxSingleQuote: {
      since: "1.15.0",
      category: VC,
      type: "boolean",
      default: !1,
      description: "Use single quotes in JSX."
    },
    quoteProps: {
      since: "1.17.0",
      category: VC,
      type: "choice",
      default: "as-needed",
      description: "Change when properties in objects are quoted.",
      choices: [{
        value: "as-needed",
        description: "Only add quotes around object properties where required."
      }, {
        value: "consistent",
        description: "If at least one property in an object requires quotes, quote all properties."
      }, {
        value: "preserve",
        description: "Respect the input use of quotes in object properties."
      }]
    },
    trailingComma: {
      since: "0.0.0",
      category: VC,
      type: "choice",
      default: [{
        since: "0.0.0",
        value: !1
      }, {
        since: "0.19.0",
        value: "none"
      }, {
        since: "2.0.0",
        value: "es5"
      }],
      description: "Print trailing commas wherever possible when multi-line.",
      choices: [{
        value: "es5",
        description: "Trailing commas where valid in ES5 (objects, arrays, etc.)"
      }, {
        value: "none",
        description: "No trailing commas."
      }, {
        value: "all",
        description: "Trailing commas wherever possible (including function arguments)."
      }]
    }
  },
      qC = {
    name: "JavaScript",
    type: "programming",
    tmScope: "source.js",
    aceMode: "javascript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "text/javascript",
    color: "#f1e05a",
    aliases: ["js", "node"],
    extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".jsb", ".jscad", ".jsfl", ".jsm", ".jss", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"],
    filenames: ["Jakefile"],
    interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"],
    languageId: 183
  },
      WC = {
    name: "JSX",
    type: "programming",
    group: "JavaScript",
    extensions: [".jsx"],
    tmScope: "source.js.jsx",
    aceMode: "javascript",
    codemirrorMode: "jsx",
    codemirrorMimeType: "text/jsx",
    languageId: 178
  },
      UC = {
    name: "TypeScript",
    type: "programming",
    color: "#2b7489",
    aliases: ["ts"],
    interpreters: ["deno", "ts-node"],
    extensions: [".ts"],
    tmScope: "source.ts",
    aceMode: "typescript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "application/typescript",
    languageId: 378
  },
      JC = {
    name: "TSX",
    type: "programming",
    group: "TypeScript",
    extensions: [".tsx"],
    tmScope: "source.tsx",
    aceMode: "javascript",
    codemirrorMode: "jsx",
    codemirrorMimeType: "text/jsx",
    languageId: 94901924
  },
      zC = {
    name: "JSON",
    type: "data",
    tmScope: "source.json",
    aceMode: "json",
    codemirrorMode: "javascript",
    codemirrorMimeType: "application/json",
    searchable: !1,
    extensions: [".json", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"],
    filenames: [".arcconfig", ".htmlhintrc", ".tern-config", ".tern-project", ".watchmanconfig", "composer.lock", "mcmod.info"],
    languageId: 174
  },
      HC = {
    name: "JSON with Comments",
    type: "data",
    group: "JSON",
    tmScope: "source.js",
    aceMode: "javascript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "text/javascript",
    aliases: ["jsonc"],
    extensions: [".jsonc", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"],
    filenames: [".babelrc", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"],
    languageId: 423
  },
      GC = {
    name: "JSON5",
    type: "data",
    extensions: [".json5"],
    tmScope: "source.js",
    aceMode: "javascript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "application/json",
    languageId: 175
  };
  var XC = {
    languages: [ks(qC, function (e) {
      return {
        since: "0.0.0",
        parsers: ["babel", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"],
        vscodeLanguageIds: ["javascript", "mongo"],
        extensions: [].concat(_toConsumableArray(e.extensions), [".wxs"])
      };
    }), ks(qC, function () {
      return {
        name: "Flow",
        since: "0.0.0",
        parsers: ["flow", "babel-flow"],
        vscodeLanguageIds: ["javascript"],
        aliases: [],
        filenames: [],
        extensions: [".js.flow"]
      };
    }), ks(WC, function () {
      return {
        since: "0.0.0",
        parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"],
        vscodeLanguageIds: ["javascriptreact"]
      };
    }), ks(UC, function () {
      return {
        since: "1.4.0",
        parsers: ["typescript", "babel-ts"],
        vscodeLanguageIds: ["typescript"]
      };
    }), ks(JC, function () {
      return {
        since: "1.4.0",
        parsers: ["typescript", "babel-ts"],
        vscodeLanguageIds: ["typescriptreact"]
      };
    }), ks(zC, function () {
      return {
        name: "JSON.stringify",
        since: "1.13.0",
        parsers: ["json-stringify"],
        vscodeLanguageIds: ["json"],
        extensions: [],
        filenames: ["package.json", "package-lock.json", "composer.json"]
      };
    }), ks(zC, function (e) {
      return {
        since: "1.5.0",
        parsers: ["json"],
        vscodeLanguageIds: ["json"],
        filenames: [].concat(_toConsumableArray(e.filenames), [".prettierrc"]),
        extensions: e.extensions.filter(function (e) {
          return ".jsonl" !== e;
        })
      };
    }), ks(HC, function (e) {
      return {
        since: "1.5.0",
        parsers: ["json"],
        vscodeLanguageIds: ["jsonc"],
        filenames: [].concat(_toConsumableArray(e.filenames), [".eslintrc"])
      };
    }), ks(GC, function () {
      return {
        since: "1.13.0",
        parsers: ["json5"],
        vscodeLanguageIds: ["json5"]
      };
    })],
    options: $C,
    printers: {
      estree: NC,
      "estree-json": jC
    },
    parsers: {
      get babel() {
        return {}.parsers.babel;
      },

      get "babel-flow"() {
        return {}.parsers["babel-flow"];
      },

      get "babel-ts"() {
        return {}.parsers["babel-ts"];
      },

      get json() {
        return {}.parsers.json;
      },

      get json5() {
        return {}.parsers.json5;
      },

      get "json-stringify"() {
        return {}.parsers["json-stringify"];
      },

      get __js_expression() {
        return {}.parsers.__js_expression;
      },

      get __vue_expression() {
        return {}.parsers.__vue_expression;
      },

      get __vue_event_binding() {
        return {}.parsers.__vue_event_binding;
      },

      get flow() {
        return {}.parsers.flow;
      },

      get typescript() {
        return {}.parsers.typescript;
      },

      get __ng_action() {
        return {}.parsers.__ng_action;
      },

      get __ng_binding() {
        return {}.parsers.__ng_binding;
      },

      get __ng_interpolation() {
        return {}.parsers.__ng_interpolation;
      },

      get __ng_directive() {
        return {}.parsers.__ng_directive;
      },

      get espree() {
        return {}.parsers.espree;
      },

      get meriyah() {
        return {}.parsers.meriyah;
      }

    }
  };
  var YC = Lt.isFrontMatterNode,
      KC = new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);

  function QC(e, t, n) {
    if (YC(e) && "yaml" === e.lang && delete t.value, "css-comment" === e.type && "css-root" === n.type && 0 !== n.nodes.length) {
      if ((n.nodes[0] === e || YC(n.nodes[0]) && n.nodes[1] === e) && (delete t.text, /^\*\s*@(format|prettier)\s*$/.test(e.text))) return null;
      if ("css-root" === n.type && se(n.nodes) === e) return null;
    }

    if ("value-root" === e.type && delete t.text, "media-query" !== e.type && "media-query-list" !== e.type && "media-feature-expression" !== e.type || delete t.value, "css-rule" === e.type && delete t.params, "selector-combinator" === e.type && (t.value = t.value.replace(/\s+/g, " ")), "media-feature" === e.type && (t.value = t.value.replace(/ /g, "")), ("value-word" === e.type && (e.isColor && e.isHex || ["initial", "inherit", "unset", "revert"].includes(t.value.replace().toLowerCase())) || "media-feature" === e.type || "selector-root-invalid" === e.type || "selector-pseudo" === e.type) && (t.value = t.value.toLowerCase()), "css-decl" === e.type && (t.prop = t.prop.toLowerCase()), "css-atrule" !== e.type && "css-import" !== e.type || (t.name = t.name.toLowerCase()), "value-number" === e.type && (t.unit = t.unit.toLowerCase()), "media-feature" !== e.type && "media-keyword" !== e.type && "media-type" !== e.type && "media-unknown" !== e.type && "media-url" !== e.type && "media-value" !== e.type && "selector-attribute" !== e.type && "selector-string" !== e.type && "selector-class" !== e.type && "selector-combinator" !== e.type && "value-string" !== e.type || !t.value || (t.value = t.value.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1")), "selector-attribute" === e.type && (t.attribute = t.attribute.trim(), t.namespace && "string" == typeof t.namespace && (t.namespace = t.namespace.trim(), 0 === t.namespace.length && (t.namespace = !0)), t.value && (t.value = t.value.trim().replace(/^["']|["']$/g, ""), delete t.quoted)), "media-value" !== e.type && "media-type" !== e.type && "value-number" !== e.type && "selector-root-invalid" !== e.type && "selector-class" !== e.type && "selector-combinator" !== e.type && "selector-tag" !== e.type || !t.value || (t.value = t.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, function (e, t, n) {
      var r = Number(t);
      return isNaN(r) ? e : r + n.toLowerCase();
    })), "selector-tag" === e.type) {
      var _n62 = e.value.toLowerCase();

      ["from", "to"].includes(_n62) && (t.value = _n62);
    }

    "css-atrule" === e.type && "supports" === e.name.toLowerCase() && delete t.value, "selector-unknown" === e.type && delete t.value;
  }

  QC.ignoredProperties = KC;
  var ZC = QC;
  var _cn$builders30 = cn.builders,
      eb = _cn$builders30.hardline,
      tb = _cn$builders30.concat,
      nb = _cn$builders30.markAsRoot,
      rb = {
    "---": "yaml",
    "+++": "toml"
  };
  var ob = {
    parse: function parse(e) {
      var t = Object.keys(rb).map(ae).join("|"),
          n = e.match(new RegExp("^(".concat(t, ")([^\\n]*)\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)")));
      if (null === n) return {
        frontMatter: null,
        content: e
      };

      var _n63 = _slicedToArray(n, 4),
          r = _n63[0],
          o = _n63[1],
          u = _n63[2],
          i = _n63[3];

      var a = rb[o];
      return "toml" !== a && u && u.trim() && (a = u.trim()), {
        frontMatter: {
          type: "front-matter",
          lang: a,
          value: i,
          raw: r.replace(/\n$/, "")
        },
        content: r.replace(/[^\n]/g, " ") + e.slice(r.length)
      };
    },
    print: function print(e, t) {
      if ("yaml" === e.lang) {
        var _n64 = e.value.trim(),
            _r86 = _n64 ? t(_n64, {
          parser: "yaml"
        }, {
          stripTrailingHardline: !0
        }) : "";

        return nb(tb(["---", eb, _r86, _r86 ? eb : "", "---"]));
      }
    }
  };
  var _cn$builders31 = cn.builders,
      ub = _cn$builders31.hardline,
      ib = _cn$builders31.concat,
      ab = ob.print;

  var sb = function sb(e, t, n) {
    var r = e.getValue();

    if ("front-matter" === r.type) {
      var _e119 = ab(r, n);

      return _e119 ? ib([_e119, ub]) : "";
    }
  };

  var cb = ob.parse;
  var lb = {
    hasPragma: function hasPragma(e) {
      return Sp.hasPragma(cb(e).content);
    },
    insertPragma: function insertPragma(e) {
      var _cb = cb(e),
          t = _cb.frontMatter,
          n = _cb.content;

      return (t ? t.raw + "\n\n" : "") + Sp.insertPragma(n);
    }
  };
  var pb = new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);

  function db(e, t) {
    var n = [].concat(t);
    var r,
        o = -1;

    for (; r = e.getParentNode(++o);) {
      if (n.includes(r.type)) return o;
    }

    return -1;
  }

  function fb(e, t) {
    var n = db(e, t);
    return -1 === n ? null : e.getParentNode(n);
  }

  function hb(e) {
    return "value-operator" === e.type && "*" === e.value;
  }

  function mb(e) {
    return "value-operator" === e.type && "/" === e.value;
  }

  function gb(e) {
    return "value-operator" === e.type && "+" === e.value;
  }

  function Db(e) {
    return "value-operator" === e.type && "-" === e.value;
  }

  function yb(e) {
    return "value-operator" === e.type && "%" === e.value;
  }

  function Eb(e) {
    return "value-comma_group" === e.type && e.groups && e.groups[1] && "value-colon" === e.groups[1].type;
  }

  function Cb(e) {
    return "value-paren_group" === e.type && e.groups && e.groups[0] && Eb(e.groups[0]);
  }

  var bb = {
    getAncestorCounter: db,
    getAncestorNode: fb,
    getPropOfDeclNode: function getPropOfDeclNode(e) {
      var t = fb(e, "css-decl");
      return t && t.prop && t.prop.toLowerCase();
    },
    hasSCSSInterpolation: function hasSCSSInterpolation(e) {
      if (e && e.length) for (var _t87 = e.length - 1; _t87 > 0; _t87--) {
        if ("word" === e[_t87].type && "{" === e[_t87].value && "word" === e[_t87 - 1].type && e[_t87 - 1].value.endsWith("#")) return !0;
      }
      return !1;
    },
    hasStringOrFunction: function hasStringOrFunction(e) {
      if (e && e.length) for (var _t88 = 0; _t88 < e.length; _t88++) {
        if ("string" === e[_t88].type || "func" === e[_t88].type) return !0;
      }
      return !1;
    },
    maybeToLowerCase: function maybeToLowerCase(e) {
      return e.includes("$") || e.includes("@") || e.includes("#") || e.startsWith("%") || e.startsWith("--") || e.startsWith(":--") || e.includes("(") && e.includes(")") ? e : e.toLowerCase();
    },
    insideValueFunctionNode: function insideValueFunctionNode(e, t) {
      var n = fb(e, "value-func");
      return n && n.value && n.value.toLowerCase() === t;
    },
    insideICSSRuleNode: function insideICSSRuleNode(e) {
      var t = fb(e, "css-rule");
      return t && t.raws && t.raws.selector && (t.raws.selector.startsWith(":import") || t.raws.selector.startsWith(":export"));
    },
    insideAtRuleNode: function insideAtRuleNode(e, t) {
      var n = [].concat(t),
          r = fb(e, "css-atrule");
      return r && n.includes(r.name.toLowerCase());
    },
    insideURLFunctionInImportAtRuleNode: function insideURLFunctionInImportAtRuleNode(e) {
      var t = e.getValue(),
          n = fb(e, "css-atrule");
      return n && "import" === n.name && "url" === t.groups[0].value && 2 === t.groups.length;
    },
    isKeyframeAtRuleKeywords: function isKeyframeAtRuleKeywords(e, t) {
      var n = fb(e, "css-atrule");
      return n && n.name && n.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(t.toLowerCase());
    },
    isWideKeywords: function isWideKeywords(e) {
      return ["initial", "inherit", "unset", "revert"].includes(e.toLowerCase());
    },
    isSCSS: function isSCSS(e, t) {
      return "less" === e || "scss" === e ? "scss" === e : /(\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(t);
    },
    isSCSSVariable: function isSCSSVariable(e) {
      return !(!e || "word" !== e.type || !e.value.startsWith("$"));
    },
    isLastNode: function isLastNode(e, t) {
      var n = e.getParentNode();
      if (!n) return !1;
      var r = n.nodes;
      return r && r.indexOf(t) === r.length - 1;
    },
    isLessParser: function isLessParser(e) {
      return "css" === e.parser || "less" === e.parser;
    },
    isSCSSControlDirectiveNode: function isSCSSControlDirectiveNode(e) {
      return "css-atrule" === e.type && ["if", "else", "for", "each", "while"].includes(e.name);
    },
    isDetachedRulesetDeclarationNode: function isDetachedRulesetDeclarationNode(e) {
      return !!e.selector && ("string" == typeof e.selector && /^@.+:.*$/.test(e.selector) || e.selector.value && /^@.+:.*$/.test(e.selector.value));
    },
    isRelationalOperatorNode: function isRelationalOperatorNode(e) {
      return "value-word" === e.type && ["<", ">", "<=", ">="].includes(e.value);
    },
    isEqualityOperatorNode: function isEqualityOperatorNode(e) {
      return "value-word" === e.type && ["==", "!="].includes(e.value);
    },
    isMultiplicationNode: hb,
    isDivisionNode: mb,
    isAdditionNode: gb,
    isSubtractionNode: Db,
    isModuloNode: yb,
    isMathOperatorNode: function isMathOperatorNode(e) {
      return hb(e) || mb(e) || gb(e) || Db(e) || yb(e);
    },
    isEachKeywordNode: function isEachKeywordNode(e) {
      return "value-word" === e.type && "in" === e.value;
    },
    isForKeywordNode: function isForKeywordNode(e) {
      return "value-word" === e.type && ["from", "through", "end"].includes(e.value);
    },
    isURLFunctionNode: function isURLFunctionNode(e) {
      return "value-func" === e.type && "url" === e.value.toLowerCase();
    },
    isIfElseKeywordNode: function isIfElseKeywordNode(e) {
      return "value-word" === e.type && ["and", "or", "not"].includes(e.value);
    },
    hasComposesNode: function hasComposesNode(e) {
      return e.value && "value-root" === e.value.type && e.value.group && "value-value" === e.value.group.type && "composes" === e.prop.toLowerCase();
    },
    hasParensAroundNode: function hasParensAroundNode(e) {
      return e.value && e.value.group && e.value.group.group && "value-paren_group" === e.value.group.group.type && null !== e.value.group.group.open && null !== e.value.group.group.close;
    },
    hasEmptyRawBefore: function hasEmptyRawBefore(e) {
      return e.raws && "" === e.raws.before;
    },
    isSCSSNestedPropertyNode: function isSCSSNestedPropertyNode(e) {
      return !!e.selector && e.selector.replace(/\/\*.*?\*\//, "").replace(/\/\/.*?\n/, "").trim().endsWith(":");
    },
    isDetachedRulesetCallNode: function isDetachedRulesetCallNode(e) {
      return e.raws && e.raws.params && /^\(\s*\)$/.test(e.raws.params);
    },
    isTemplatePlaceholderNode: function isTemplatePlaceholderNode(e) {
      return e.name.startsWith("prettier-placeholder");
    },
    isTemplatePropNode: function isTemplatePropNode(e) {
      return e.prop.startsWith("@prettier-placeholder");
    },
    isPostcssSimpleVarNode: function isPostcssSimpleVarNode(e, t) {
      return "$$" === e.value && "value-func" === e.type && t && "value-word" === t.type && !t.raws.before;
    },
    isKeyValuePairNode: Eb,
    isKeyValuePairInParenGroupNode: Cb,
    isSCSSMapItemNode: function isSCSSMapItemNode(e) {
      var t = e.getValue();
      if (0 === t.groups.length) return !1;
      var n = e.getParentNode(1);
      if (!(Cb(t) || n && Cb(n))) return !1;
      var r = fb(e, "css-decl");
      return !!(r && r.prop && r.prop.startsWith("$")) || !!Cb(n) || "value-func" === n.type;
    },
    isInlineValueCommentNode: function isInlineValueCommentNode(e) {
      return "value-comment" === e.type && e.inline;
    },
    isHashNode: function isHashNode(e) {
      return "value-word" === e.type && "#" === e.value;
    },
    isLeftCurlyBraceNode: function isLeftCurlyBraceNode(e) {
      return "value-word" === e.type && "{" === e.value;
    },
    isRightCurlyBraceNode: function isRightCurlyBraceNode(e) {
      return "value-word" === e.type && "}" === e.value;
    },
    isWordNode: function isWordNode(e) {
      return ["value-word", "value-atword"].includes(e.type);
    },
    isColonNode: function isColonNode(e) {
      return "value-colon" === e.type;
    },
    isMediaAndSupportsKeywords: function isMediaAndSupportsKeywords(e) {
      return e.value && ["not", "and", "or"].includes(e.value.toLowerCase());
    },
    isColorAdjusterFuncNode: function isColorAdjusterFuncNode(e) {
      return "value-func" === e.type && pb.has(e.value.toLowerCase());
    },
    lastLineHasInlineComment: function lastLineHasInlineComment(e) {
      return /\/\//.test(e.split(/[\n\r]/).pop());
    },
    stringifyNode: function e(t) {
      if (t.groups) {
        return (t.open && t.open.value ? t.open.value : "") + t.groups.reduce(function (n, r, o) {
          return n + e(r) + ("comma_group" === t.groups[0].type && o !== t.groups.length - 1 ? "," : "");
        }, "") + (t.close && t.close.value ? t.close.value : "");
      }

      var n = t.raws && t.raws.before ? t.raws.before : "",
          r = t.raws && t.raws.quote ? t.raws.quote : "";
      return n + r + ("atword" === t.type ? "@" : "") + (t.value ? t.value : "") + r + (t.unit ? t.unit : "") + (t.group ? e(t.group) : "") + (t.raws && t.raws.after ? t.raws.after : "");
    },
    isAtWordPlaceholderNode: function isAtWordPlaceholderNode(e) {
      return e && "value-atword" === e.type && e.value.startsWith("prettier-placeholder-");
    }
  },
      vb = function vb(e, t) {
    var n = 0;

    for (var _r87 = 0; _r87 < e.line - 1; ++_r87) {
      n = t.indexOf("\n", n) + 1;
    }

    return n + e.column;
  };

  var Ab = Lt.getLast,
      Fb = Lt.skipEverythingButNewLine;

  function xb(e, t) {
    return "number" == typeof e.sourceIndex ? e.sourceIndex : e.source ? vb(e.source.start, t) - 1 : null;
  }

  function Sb(e, t) {
    if ("css-comment" === e.type && e.inline) return Fb(t, e.source.startOffset);
    var n = e.nodes && Ab(e.nodes);
    return n && e.source && !e.source.end && (e = n), e.source && e.source.end ? vb(e.source.end, t) : null;
  }

  function wb(e, t, n) {
    e.source && (e.source.startOffset = xb(e, n) + t, e.source.endOffset = Sb(e, n) + t);

    for (var _r88 in e) {
      var _o25 = e[_r88];
      "source" !== _r88 && _o25 && "object" == _typeof(_o25) && wb(_o25, t, n);
    }
  }

  function Tb(e) {
    var t = e.source.startOffset;
    return "string" == typeof e.prop && (t += e.prop.length), "css-atrule" === e.type && "string" == typeof e.name && (t += 1 + e.name.length + e.raws.afterName.match(/^\s*:?\s*/)[0].length), "css-atrule" !== e.type && e.raws && "string" == typeof e.raws.between && (t += e.raws.between.length), t;
  }

  var Bb = {
    locStart: function locStart(e) {
      return e.source.startOffset;
    },
    locEnd: function locEnd(e) {
      return e.source.endOffset;
    },
    calculateLoc: function e(t, n) {
      t.source && (t.source.startOffset = xb(t, n), t.source.endOffset = Sb(t, n));

      for (var _r89 in t) {
        var _o26 = t[_r89];
        "source" !== _r89 && _o26 && "object" == _typeof(_o26) && ("value-root" === _o26.type || "value-unknown" === _o26.type ? wb(_o26, Tb(t), _o26.text || _o26.value) : e(_o26, n));
      }
    },
    replaceQuotesInInlineComments: function replaceQuotesInInlineComments(e) {
      var t,
          n = "initial",
          r = "initial",
          o = !1;
      var u = [];

      for (var _i58 = 0; _i58 < e.length; _i58++) {
        var _a10 = e[_i58];

        switch (n) {
          case "initial":
            if ("'" === _a10) {
              n = "single-quotes";
              continue;
            }

            if ('"' === _a10) {
              n = "double-quotes";
              continue;
            }

            if (("u" === _a10 || "U" === _a10) && "url(" === e.slice(_i58, _i58 + 4).toLowerCase()) {
              n = "url", _i58 += 3;
              continue;
            }

            if ("*" === _a10 && "/" === e[_i58 - 1]) {
              n = "comment-block";
              continue;
            }

            if ("/" === _a10 && "/" === e[_i58 - 1]) {
              n = "comment-inline", t = _i58 - 1;
              continue;
            }

            continue;

          case "single-quotes":
            if ("'" === _a10 && "\\" !== e[_i58 - 1] && (n = r, r = "initial"), "\n" === _a10 || "\r" === _a10) return e;
            continue;

          case "double-quotes":
            if ('"' === _a10 && "\\" !== e[_i58 - 1] && (n = r, r = "initial"), "\n" === _a10 || "\r" === _a10) return e;
            continue;

          case "url":
            if (")" === _a10 && (n = "initial"), "\n" === _a10 || "\r" === _a10) return e;

            if ("'" === _a10) {
              n = "single-quotes", r = "url";
              continue;
            }

            if ('"' === _a10) {
              n = "double-quotes", r = "url";
              continue;
            }

            continue;

          case "comment-block":
            "/" === _a10 && "*" === e[_i58 - 1] && (n = "initial");
            continue;

          case "comment-inline":
            '"' !== _a10 && "'" !== _a10 && "*" !== _a10 || (o = !0), "\n" !== _a10 && "\r" !== _a10 || (o && u.push([t, _i58]), n = "initial", o = !1);
            continue;
        }
      }

      for (var _i59 = 0, _u30 = u; _i59 < _u30.length; _i59++) {
        var _u30$_i = _slicedToArray(_u30[_i59], 2),
            _t89 = _u30$_i[0],
            _n65 = _u30$_i[1];

        e = e.slice(0, _t89) + e.slice(_t89, _n65).replace(/["'*]/g, " ") + e.slice(_n65);
      }

      return e;
    }
  };
  var Nb = Lt.printNumber,
      kb = Lt.printString,
      Pb = Lt.hasNewline,
      Ob = Lt.isFrontMatterNode,
      Ib = Lt.isNextLineEmpty,
      _cn$builders32 = cn.builders,
      Lb = _cn$builders32.concat,
      Mb = _cn$builders32.join,
      jb = _cn$builders32.line,
      _b = _cn$builders32.hardline,
      Rb = _cn$builders32.softline,
      Vb = _cn$builders32.group,
      $b = _cn$builders32.fill,
      qb = _cn$builders32.indent,
      Wb = _cn$builders32.dedent,
      Ub = _cn$builders32.ifBreak,
      Jb = _cn$builders32.breakParent,
      zb = cn.utils.removeLines,
      Hb = lb.insertPragma,
      Gb = bb.getAncestorNode,
      Xb = bb.getPropOfDeclNode,
      Yb = bb.maybeToLowerCase,
      Kb = bb.insideValueFunctionNode,
      Qb = bb.insideICSSRuleNode,
      Zb = bb.insideAtRuleNode,
      ev = bb.insideURLFunctionInImportAtRuleNode,
      tv = bb.isKeyframeAtRuleKeywords,
      nv = bb.isWideKeywords,
      rv = bb.isSCSS,
      ov = bb.isLastNode,
      uv = bb.isLessParser,
      iv = bb.isSCSSControlDirectiveNode,
      av = bb.isDetachedRulesetDeclarationNode,
      sv = bb.isRelationalOperatorNode,
      cv = bb.isEqualityOperatorNode,
      lv = bb.isMultiplicationNode,
      pv = bb.isDivisionNode,
      dv = bb.isAdditionNode,
      fv = bb.isSubtractionNode,
      hv = bb.isMathOperatorNode,
      mv = bb.isEachKeywordNode,
      gv = bb.isForKeywordNode,
      Dv = bb.isURLFunctionNode,
      yv = bb.isIfElseKeywordNode,
      Ev = bb.hasComposesNode,
      Cv = bb.hasParensAroundNode,
      bv = bb.hasEmptyRawBefore,
      vv = bb.isKeyValuePairNode,
      Av = bb.isDetachedRulesetCallNode,
      Fv = bb.isTemplatePlaceholderNode,
      xv = bb.isTemplatePropNode,
      Sv = bb.isPostcssSimpleVarNode,
      wv = bb.isSCSSMapItemNode,
      Tv = bb.isInlineValueCommentNode,
      Bv = bb.isHashNode,
      Nv = bb.isLeftCurlyBraceNode,
      kv = bb.isRightCurlyBraceNode,
      Pv = bb.isWordNode,
      Ov = bb.isColonNode,
      Iv = bb.isMediaAndSupportsKeywords,
      Lv = bb.isColorAdjusterFuncNode,
      Mv = bb.lastLineHasInlineComment,
      jv = bb.isAtWordPlaceholderNode,
      _v = Bb.locStart,
      Rv = Bb.locEnd;

  function Vv(e) {
    return "es5" === e.trailingComma || "all" === e.trailingComma;
  }

  function $v(e, t, n) {
    var r = e.getValue(),
        o = [];
    return e.each(function (e, u) {
      var i = r.nodes[u - 1];

      if (i && "css-comment" === i.type && "prettier-ignore" === i.text.trim()) {
        var _n66 = e.getValue();

        o.push(t.originalText.slice(_v(_n66), Rv(_n66)));
      } else o.push(e.call(n));

      u !== r.nodes.length - 1 && ("css-comment" === r.nodes[u + 1].type && !Pb(t.originalText, _v(r.nodes[u + 1]), {
        backwards: !0
      }) && !Ob(r.nodes[u]) || "css-atrule" === r.nodes[u + 1].type && "else" === r.nodes[u + 1].name && "css-comment" !== r.nodes[u].type ? o.push(" ") : (o.push(t.__isHTMLStyleAttribute ? jb : _b), Ib(t.originalText, e.getValue(), Rv) && !Ob(r.nodes[u]) && o.push(_b)));
    }, "nodes"), Lb(o);
  }

  var qv = /(["'])(?:(?!\1)[^\\]|\\[\S\s])*\1/g,
      Wv = new RegExp(qv.source + "|" + "(".concat(/[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g.source, ")?") + "(".concat(/(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g.source, ")") + "(".concat(/[A-Za-z]+/g.source, ")?"), "g");

  function Uv(e, t) {
    return e.replace(qv, function (e) {
      return kb(e, t);
    });
  }

  function Jv(e, t) {
    var n = t.singleQuote ? "'" : '"';
    return e.includes('"') || e.includes("'") ? e : n + e + n;
  }

  function zv(e) {
    return e.replace(Wv, function (e, t, n, r, o) {
      return !n && r ? Hv(r) + Yb(o || "") : e;
    });
  }

  function Hv(e) {
    return Nb(e).replace(/\.0(?=$|e)/, "");
  }

  var Gv = {
    print: function print(e, t, n) {
      var r = e.getValue();
      if (!r) return "";
      if ("string" == typeof r) return r;

      switch (r.type) {
        case "front-matter":
          return Lb([r.raw, _b]);

        case "css-root":
          {
            var _o27 = $v(e, t, n),
                _u31 = r.raws.after.trim();

            return Lb([_o27, _u31 ? " ".concat(_u31) : "", _o27.parts.length ? _b : ""]);
          }

        case "css-comment":
          {
            var _e120 = r.inline || r.raws.inline,
                _n67 = t.originalText.slice(_v(r), Rv(r));

            return _e120 ? _n67.trimEnd() : _n67;
          }

        case "css-rule":
          return Lb([e.call(n, "selector"), r.important ? " !important" : "", r.nodes ? Lb([r.selector && "selector-unknown" === r.selector.type && Mv(r.selector.value) ? jb : " ", "{", r.nodes.length > 0 ? qb(Lb([_b, $v(e, t, n)])) : "", _b, "}", av(r) ? ";" : ""]) : ";"]);

        case "css-decl":
          {
            var _o28 = e.getParentNode(),
                _u32 = r.raws.between,
                _i60 = _u32.trim(),
                _a11 = ":" === _i60;

            var _s15 = Ev(r) ? zb(e.call(n, "value")) : e.call(n, "value");

            return !_a11 && Mv(_i60) && (_s15 = qb(Lb([_b, Wb(_s15)]))), Lb([r.raws.before.replace(/[\s;]/g, ""), Qb(e) ? r.prop : Yb(r.prop), _i60.startsWith("//") ? " " : "", _i60, r.extend ? "" : " ", uv(t) && r.extend && r.selector ? Lb(["extend(", e.call(n, "selector"), ")"]) : "", _s15, r.raws.important ? r.raws.important.replace(/\s*!\s*important/i, " !important") : r.important ? " !important" : "", r.raws.scssDefault ? r.raws.scssDefault.replace(/\s*!default/i, " !default") : r.scssDefault ? " !default" : "", r.raws.scssGlobal ? r.raws.scssGlobal.replace(/\s*!global/i, " !global") : r.scssGlobal ? " !global" : "", r.nodes ? Lb([" {", qb(Lb([Rb, $v(e, t, n)])), Rb, "}"]) : xv(r) && !_o28.raws.semicolon && ";" !== t.originalText[Rv(r) - 1] ? "" : t.__isHTMLStyleAttribute && ov(e, r) ? Ub(";", "") : ";"]);
          }

        case "css-atrule":
          {
            var _o29 = e.getParentNode(),
                _u33 = Fv(r) && !_o29.raws.semicolon && ";" !== t.originalText[Rv(r) - 1];

            if (uv(t)) {
              if (r.mixin) return Lb([e.call(n, "selector"), r.important ? " !important" : "", _u33 ? "" : ";"]);
              if (r.function) return Lb([r.name, Lb([e.call(n, "params")]), _u33 ? "" : ";"]);
              if (r.variable) return Lb(["@", r.name, ": ", r.value ? Lb([e.call(n, "value")]) : "", r.raws.between.trim() ? r.raws.between.trim() + " " : "", r.nodes ? Lb(["{", qb(Lb([r.nodes.length > 0 ? Rb : "", $v(e, t, n)])), Rb, "}"]) : "", _u33 ? "" : ";"]);
            }

            return Lb(["@", Av(r) || r.name.endsWith(":") ? r.name : Yb(r.name), r.params ? Lb([Av(r) ? "" : Fv(r) ? "" === r.raws.afterName ? "" : r.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(r.raws.afterName) ? Lb([_b, _b]) : /^\s*\n/.test(r.raws.afterName) ? _b : " " : " ", e.call(n, "params")]) : "", r.selector ? qb(Lb([" ", e.call(n, "selector")])) : "", r.value ? Vb(Lb([" ", e.call(n, "value"), iv(r) ? Cv(r) ? " " : jb : ""])) : "else" === r.name ? " " : "", r.nodes ? Lb([iv(r) ? "" : r.selector && !r.selector.nodes && "string" == typeof r.selector.value && Mv(r.selector.value) || !r.selector && "string" == typeof r.params && Mv(r.params) ? jb : " ", "{", qb(Lb([r.nodes.length > 0 ? Rb : "", $v(e, t, n)])), Rb, "}"]) : _u33 ? "" : ";"]);
          }

        case "media-query-list":
          {
            var _t90 = [];
            return e.each(function (e) {
              var r = e.getValue();
              "media-query" === r.type && "" === r.value || _t90.push(e.call(n));
            }, "nodes"), Vb(qb(Mb(jb, _t90)));
          }

        case "media-query":
          return Lb([Mb(" ", e.map(n, "nodes")), ov(e, r) ? "" : ","]);

        case "media-type":
          return zv(Uv(r.value, t));

        case "media-feature-expression":
          return r.nodes ? Lb(["(", Lb(e.map(n, "nodes")), ")"]) : r.value;

        case "media-feature":
          return Yb(Uv(r.value.replace(/ +/g, " "), t));

        case "media-colon":
          return Lb([r.value, " "]);

        case "media-value":
          return zv(Uv(r.value, t));

        case "media-keyword":
          return Uv(r.value, t);

        case "media-url":
          return Uv(r.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/gi, ")"), t);

        case "media-unknown":
          return r.value;

        case "selector-root":
          return Vb(Lb([Zb(e, "custom-selector") ? Lb([Gb(e, "css-atrule").customSelector, jb]) : "", Mb(Lb([",", Zb(e, ["extend", "custom-selector", "nest"]) ? jb : _b]), e.map(n, "nodes"))]));

        case "selector-selector":
          return Vb(qb(Lb(e.map(n, "nodes"))));

        case "selector-comment":
          return r.value;

        case "selector-string":
          return Uv(r.value, t);

        case "selector-tag":
          {
            var _t91 = e.getParentNode(),
                _n68 = _t91 && _t91.nodes.indexOf(r),
                _o30 = _n68 && _t91.nodes[_n68 - 1];

            return Lb([r.namespace ? Lb([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", "selector-nesting" === _o30.type ? r.value : zv(tv(e, r.value) ? r.value.toLowerCase() : r.value)]);
          }

        case "selector-id":
          return Lb(["#", r.value]);

        case "selector-class":
          return Lb([".", zv(Uv(r.value, t))]);

        case "selector-attribute":
          return Lb(["[", r.namespace ? Lb([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", r.attribute.trim(), r.operator ? r.operator : "", r.value ? Jv(Uv(r.value.trim(), t), t) : "", r.insensitive ? " i" : "", "]"]);

        case "selector-combinator":
          {
            if ("+" === r.value || ">" === r.value || "~" === r.value || ">>>" === r.value) {
              var _t92 = e.getParentNode(),
                  _n70 = "selector-selector" === _t92.type && _t92.nodes[0] === r ? "" : jb;

              return Lb([_n70, r.value, ov(e, r) ? "" : " "]);
            }

            var _n69 = r.value.trim().startsWith("(") ? jb : "",
                _o31 = zv(Uv(r.value.trim(), t)) || jb;

            return Lb([_n69, _o31]);
          }

        case "selector-universal":
          return Lb([r.namespace ? Lb([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", r.value]);

        case "selector-pseudo":
          return Lb([Yb(r.value), r.nodes && r.nodes.length > 0 ? Lb(["(", Mb(", ", e.map(n, "nodes")), ")"]) : ""]);

        case "selector-nesting":
          return r.value;

        case "selector-unknown":
          {
            var _n71 = Gb(e, "css-rule");

            if (_n71 && _n71.isSCSSNesterProperty) return zv(Uv(Yb(r.value), t));

            var _o32 = e.getParentNode();

            if (_o32.raws && _o32.raws.selector) {
              var _e121 = _v(_o32),
                  _n72 = _e121 + _o32.raws.selector.length;

              return t.originalText.slice(_e121, _n72).trim();
            }

            var _u34 = e.getParentNode(1);

            if ("value-paren_group" === _o32.type && _u34 && "value-func" === _u34.type && "selector" === _u34.value) {
              var _e122 = _v(_o32.open) + 1,
                  _n73 = Rv(_o32.close) - 1,
                  _r90 = t.originalText.slice(_e122, _n73).trim();

              return Mv(_r90) ? Lb([Jb, _r90]) : _r90;
            }

            return r.value;
          }

        case "value-value":
        case "value-root":
          return e.call(n, "group");

        case "value-comment":
          return t.originalText.slice(_v(r), Rv(r));

        case "value-comma_group":
          {
            var _t93 = e.getParentNode(),
                _o33 = e.getParentNode(1),
                _u35 = Xb(e),
                _i61 = _u35 && "value-value" === _t93.type && ("grid" === _u35 || _u35.startsWith("grid-template")),
                _a12 = Gb(e, "css-atrule"),
                _s16 = _a12 && iv(_a12),
                _c14 = e.map(n, "groups"),
                _l8 = [],
                _p8 = Kb(e, "url");

            var _d7 = !1,
                _f6 = !1;

            for (var _n74 = 0; _n74 < r.groups.length; ++_n74) {
              _l8.push(_c14[_n74]);

              var _u36 = r.groups[_n74 - 1],
                  _h6 = r.groups[_n74],
                  _m4 = r.groups[_n74 + 1],
                  _g3 = r.groups[_n74 + 2];

              if (_p8) {
                (_m4 && dv(_m4) || dv(_h6)) && _l8.push(" ");
                continue;
              }

              if (!_m4) continue;
              if ("value-word" === _h6.type && _h6.value.endsWith("-") && jv(_m4)) continue;

              var _D3 = "value-string" === _h6.type && _h6.value.startsWith("#{"),
                  _y2 = _d7 && "value-string" === _m4.type && _m4.value.endsWith("}");

              if (_D3 || _y2) {
                _d7 = !_d7;
                continue;
              }

              if (_d7) continue;
              if (Ov(_h6) || Ov(_m4)) continue;
              if ("value-atword" === _h6.type && "" === _h6.value) continue;
              if ("~" === _h6.value) continue;
              if (_h6.value && _h6.value.includes("\\") && _m4 && "value-comment" !== _m4.type) continue;
              if (_u36 && _u36.value && _u36.value.indexOf("\\") === _u36.value.length - 1 && "value-operator" === _h6.type && "/" === _h6.value) continue;
              if ("\\" === _h6.value) continue;
              if (Sv(_h6, _m4)) continue;
              if (Bv(_h6) || Nv(_h6) || kv(_m4) || Nv(_m4) && bv(_m4) || kv(_h6) && bv(_m4)) continue;
              if ("--" === _h6.value && Bv(_m4)) continue;

              var _E2 = hv(_h6),
                  _C2 = hv(_m4);

              if ((_E2 && Bv(_m4) || _C2 && kv(_h6)) && bv(_m4)) continue;
              if (Kb(e, "calc") && (dv(_h6) || dv(_m4) || fv(_h6) || fv(_m4)) && bv(_m4)) continue;

              var _b2 = (dv(_h6) || fv(_h6)) && 0 === _n74 && ("value-number" === _m4.type || _m4.isHex) && _o33 && Lv(_o33) && !bv(_m4),
                  _v2 = _g3 && "value-func" === _g3.type || _g3 && Pv(_g3) || "value-func" === _h6.type || Pv(_h6),
                  _A2 = "value-func" === _m4.type || Pv(_m4) || _u36 && "value-func" === _u36.type || _u36 && Pv(_u36);

              if (lv(_m4) || lv(_h6) || Kb(e, "calc") || _b2 || !(pv(_m4) && !_v2 || pv(_h6) && !_A2 || dv(_m4) && !_v2 || dv(_h6) && !_A2 || fv(_m4) || fv(_h6)) || !(bv(_m4) || _E2 && (!_u36 || _u36 && hv(_u36)))) if (Tv(_h6)) {
                if ("value-paren_group" === _t93.type) {
                  _l8.push(Wb(_b));

                  continue;
                }

                _l8.push(_b);
              } else _s16 && (cv(_m4) || sv(_m4) || yv(_m4) || mv(_h6) || gv(_h6)) || _a12 && "namespace" === _a12.name.toLowerCase() ? _l8.push(" ") : _i61 ? _h6.source && _m4.source && _h6.source.start.line !== _m4.source.start.line ? (_l8.push(_b), _f6 = !0) : _l8.push(" ") : _C2 ? _l8.push(" ") : _m4 && "..." === _m4.value || jv(_h6) && jv(_m4) && Rv(_h6) === _v(_m4) || _l8.push(jb);
            }

            return _f6 && _l8.unshift(_b), _s16 ? Vb(qb(Lb(_l8))) : ev(e) ? Vb($b(_l8)) : Vb(qb($b(_l8)));
          }

        case "value-paren_group":
          {
            var _o34 = e.getParentNode();

            if (_o34 && Dv(_o34) && (1 === r.groups.length || r.groups.length > 0 && "value-comma_group" === r.groups[0].type && r.groups[0].groups.length > 0 && "value-word" === r.groups[0].groups[0].type && r.groups[0].groups[0].value.startsWith("data:"))) return Lb([r.open ? e.call(n, "open") : "", Mb(",", e.map(n, "groups")), r.close ? e.call(n, "close") : ""]);

            if (!r.open) {
              var _t94 = e.map(n, "groups"),
                  _r91 = [];

              for (var _e123 = 0; _e123 < _t94.length; _e123++) {
                0 !== _e123 && _r91.push(Lb([",", jb])), _r91.push(_t94[_e123]);
              }

              return Vb(qb($b(_r91)));
            }

            var _u37 = wv(e),
                _i62 = r.groups[r.groups.length - 1],
                _a13 = _i62 && "value-comment" === _i62.type;

            return Vb(Lb([r.open ? e.call(n, "open") : "", qb(Lb([Rb, Mb(Lb([",", jb]), e.map(function (e) {
              var t = e.getValue(),
                  r = n(e);
              return vv(t) && "value-comma_group" === t.type && t.groups && t.groups[2] && "value-paren_group" === t.groups[2].type ? (r.contents.contents.parts[1] = Vb(r.contents.contents.parts[1]), Vb(Wb(r))) : r;
            }, "groups"))])), Ub(!_a13 && rv(t.parser, t.originalText) && _u37 && Vv(t) ? "," : ""), Rb, r.close ? e.call(n, "close") : ""]), {
              shouldBreak: _u37
            });
          }

        case "value-func":
          return Lb([r.value, Zb(e, "supports") && Iv(r) ? " " : "", e.call(n, "group")]);

        case "value-paren":
          return r.value;

        case "value-number":
          return Lb([Hv(r.value), Yb(r.unit)]);

        case "value-operator":
          return r.value;

        case "value-word":
          return r.isColor && r.isHex || nv(r.value) ? r.value.toLowerCase() : r.value;

        case "value-colon":
          {
            var _t95 = e.getParentNode(),
                _n75 = _t95 && _t95.groups.indexOf(r),
                _o35 = _n75 && _t95.groups[_n75 - 1];

            return Lb([r.value, _o35 && "\\" === _o35.value[_o35.value.length - 1] || Kb(e, "url") ? "" : jb]);
          }

        case "value-comma":
          return Lb([r.value, " "]);

        case "value-string":
          return kb(r.raws.quote + r.value + r.raws.quote, t);

        case "value-atword":
          return Lb(["@", r.value]);

        case "value-unicode-range":
        case "value-unknown":
          return r.value;

        default:
          throw new Error("Unknown postcss type ".concat(JSON.stringify(r.type)));
      }
    },
    embed: sb,
    insertPragma: Hb,
    massageAstNode: ZC
  },
      Xv = {
    singleQuote: RC.singleQuote
  },
      Yv = {
    name: "PostCSS",
    type: "markup",
    tmScope: "source.postcss",
    group: "CSS",
    extensions: [".pcss", ".postcss"],
    aceMode: "text",
    languageId: 262764437
  },
      Kv = {
    name: "Less",
    type: "markup",
    color: "#1d365d",
    extensions: [".less"],
    tmScope: "source.css.less",
    aceMode: "less",
    codemirrorMode: "css",
    codemirrorMimeType: "text/css",
    languageId: 198
  },
      Qv = {
    name: "SCSS",
    type: "markup",
    color: "#c6538c",
    tmScope: "source.css.scss",
    aceMode: "scss",
    codemirrorMode: "css",
    codemirrorMimeType: "text/x-scss",
    extensions: [".scss"],
    languageId: 329
  };
  var Zv = {
    languages: [ks({
      name: "CSS",
      type: "markup",
      tmScope: "source.css",
      aceMode: "css",
      codemirrorMode: "css",
      codemirrorMimeType: "text/css",
      color: "#563d7c",
      extensions: [".css"],
      languageId: 50
    }, function (e) {
      return {
        since: "1.4.0",
        parsers: ["css"],
        vscodeLanguageIds: ["css"],
        extensions: [].concat(_toConsumableArray(e.extensions), [".wxss"])
      };
    }), ks(Yv, function () {
      return {
        since: "1.4.0",
        parsers: ["css"],
        vscodeLanguageIds: ["postcss"]
      };
    }), ks(Kv, function () {
      return {
        since: "1.4.0",
        parsers: ["less"],
        vscodeLanguageIds: ["less"]
      };
    }), ks(Qv, function () {
      return {
        since: "1.4.0",
        parsers: ["scss"],
        vscodeLanguageIds: ["scss"]
      };
    })],
    options: Xv,
    printers: {
      postcss: Gv
    },
    parsers: {
      get css() {
        return {}.parsers.css;
      },

      get less() {
        return {}.parsers.less;
      },

      get scss() {
        return {}.parsers.scss;
      }

    }
  };
  var eA = {
    locStart: function locStart(e) {
      return e.loc.start.offset;
    },
    locEnd: function locEnd(e) {
      return e.loc.end.offset;
    }
  };

  function tA(e, t) {
    if ("TextNode" === e.type) {
      var _n76 = e.chars.trim();

      if (!_n76) return null;
      t.chars = _n76;
    }
  }

  tA.ignoredProperties = new Set(["loc", "selfClosing"]);
  var nA = tA;
  var rA = new Set(["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]);

  function oA(e) {
    return uA(e, ["TextNode"]) && !/\S/.test(e.chars);
  }

  function uA(e, t) {
    return e && t.some(function (t) {
      return e.type === t;
    });
  }

  function iA(e, t) {
    var n = e.getValue(),
        r = e.getParentNode(0) || {},
        o = r.children || r.body || r.parts || [],
        u = o.indexOf(n);
    return -1 !== u && o[u + t];
  }

  function aA(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return iA(e, -t);
  }

  function sA(e) {
    return iA(e, 1);
  }

  function cA(e) {
    return uA(e, ["MustacheCommentStatement"]) && "string" == typeof e.value && "prettier-ignore" === e.value.trim();
  }

  var lA = {
    getNextNode: sA,
    getPreviousNode: aA,
    hasPrettierIgnore: function hasPrettierIgnore(e) {
      var t = e.getValue(),
          n = aA(e, 2);
      return cA(t) || cA(n);
    },
    isNextNodeOfSomeType: function isNextNodeOfSomeType(e, t) {
      return uA(sA(e), t);
    },
    isNodeOfSomeType: uA,
    isParentOfSomeType: function isParentOfSomeType(e, t) {
      return uA(e.getParentNode(0), t);
    },
    isPreviousNodeOfSomeType: function isPreviousNodeOfSomeType(e, t) {
      return uA(aA(e), t);
    },
    isVoid: function isVoid(e) {
      return function (e) {
        return uA(e, ["ElementNode"]) && "string" == typeof e.tag && (function (e) {
          return e.toUpperCase() === e;
        }(e.tag[0]) || e.tag.includes("."));
      }(e) && e.children.every(function (e) {
        return oA(e);
      }) || rA.has(e.tag);
    },
    isWhitespaceNode: oA
  };
  var _cn$builders33 = cn.builders,
      pA = _cn$builders33.concat,
      dA = _cn$builders33.group,
      fA = _cn$builders33.hardline,
      hA = _cn$builders33.ifBreak,
      mA = _cn$builders33.indent,
      gA = _cn$builders33.join,
      DA = _cn$builders33.line,
      yA = _cn$builders33.softline,
      EA = eA.locStart,
      CA = eA.locEnd,
      bA = lA.getNextNode,
      vA = lA.getPreviousNode,
      AA = lA.hasPrettierIgnore,
      FA = lA.isNextNodeOfSomeType,
      xA = lA.isNodeOfSomeType,
      SA = lA.isParentOfSomeType,
      wA = lA.isPreviousNodeOfSomeType,
      TA = lA.isVoid,
      BA = lA.isWhitespaceNode;

  function NA(e, t) {
    var n = e.getValue();
    return pA(["<", n.tag, kA(e, t), rF(n), OA(n)]);
  }

  function kA(e, t) {
    var n = e.getValue();
    return mA(pA([n.attributes.length ? DA : "", gA(DA, e.map(t, "attributes")), n.modifiers.length ? DA : "", gA(DA, e.map(t, "modifiers")), n.comments.length ? DA : "", gA(DA, e.map(t, "comments"))]));
  }

  function PA(e, t, n) {
    return pA(e.map(function (e, r) {
      return 0 === r ? pA([yA, n(e, t, n)]) : n(e, t, n);
    }, "children"));
  }

  function OA(e) {
    return TA(e) ? hA(pA([yA, "/>"]), pA([" />", yA])) : hA(pA([yA, ">"]), ">");
  }

  function IA(e) {
    var t = !1 === e.escaped ? "{{{" : "{{",
        n = e.strip && e.strip.open ? "~" : "";
    return pA([t, n]);
  }

  function LA(e) {
    var t = !1 === e.escaped ? "}}}" : "}}",
        n = e.strip && e.strip.close ? "~" : "";
    return pA([n, t]);
  }

  function MA(e) {
    var t = IA(e),
        n = e.openStrip.open ? "~" : "";
    return pA([t, n, "#"]);
  }

  function jA(e) {
    var t = LA(e),
        n = e.openStrip.close ? "~" : "";
    return pA([n, t]);
  }

  function _A(e) {
    var t = IA(e),
        n = e.closeStrip.open ? "~" : "";
    return pA([t, n, "/"]);
  }

  function RA(e) {
    var t = LA(e),
        n = e.closeStrip.close ? "~" : "";
    return pA([n, t]);
  }

  function VA(e) {
    var t = IA(e),
        n = e.inverseStrip.open ? "~" : "";
    return pA([t, n]);
  }

  function $A(e) {
    var t = LA(e),
        n = e.inverseStrip.close ? "~" : "";
    return pA([n, t]);
  }

  function qA(e, t) {
    var n = e.getValue();
    return dA(pA([MA(n), eF(e, t), rF(n.program), yA, jA(n)]));
  }

  function WA(e) {
    return pA([fA, VA(e), "else", $A(e)]);
  }

  function UA(e, t) {
    var n = e.getParentNode(1);
    return pA([VA(n), "else ", eF(e, t), $A(n)]);
  }

  function JA(e, t) {
    var n = e.getValue();
    return pA([zA(n) ? yA : fA, _A(n), e.call(t, "path"), RA(n)]);
  }

  function zA(e) {
    return xA(e, ["BlockStatement"]) && e.program.body.every(function (e) {
      return BA(e);
    });
  }

  function HA(e) {
    return xA(e, ["BlockStatement"]) && e.inverse;
  }

  function GA(e, t) {
    if (zA(e.getValue())) return "";
    var n = e.call(t, "program");
    return mA(pA([fA, n]));
  }

  function XA(e, t) {
    var n = e.getValue(),
        r = e.call(t, "inverse"),
        o = pA([fA, r]);
    return function (e) {
      return HA(e) && 1 === e.inverse.body.length && xA(e.inverse.body[0], ["BlockStatement"]) && "if" === e.inverse.body[0].path.parts[0];
    }(n) ? o : HA(n) ? pA([WA(n), mA(o)]) : "";
  }

  function YA(e) {
    return (e = "string" == typeof e ? e : "").split("\n").length - 1;
  }

  function KA() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return new Array(Math.min(e, t)).fill(fA);
  }

  function QA(e, t) {
    var n = {
      quote: '"',
      regex: /"/g
    },
        r = {
      quote: "'",
      regex: /'/g
    },
        o = t.singleQuote ? r : n,
        u = o === r ? n : r;
    var i = !1;

    if (e.includes(o.quote) || e.includes(u.quote)) {
      i = (e.match(o.regex) || []).length > (e.match(u.regex) || []).length;
    }

    var a = i ? u : o,
        s = e.replace(a.regex, "\\".concat(a.quote));
    return pA([a.quote, s, a.quote]);
  }

  function ZA(e, t) {
    var n = tF(e, t),
        r = nF(e, t);
    return r ? mA(pA([n, DA, dA(r)])) : n;
  }

  function eF(e, t) {
    var n = tF(e, t),
        r = nF(e, t);
    return r ? mA(dA(pA([n, DA, r]))) : n;
  }

  function tF(e, t) {
    return e.call(t, "path");
  }

  function nF(e, t) {
    var n = e.getValue(),
        r = [];

    if (n.params.length) {
      var _n77 = e.map(t, "params");

      r.push.apply(r, _toConsumableArray(_n77));
    }

    if (n.hash && n.hash.pairs.length > 0) {
      var _n78 = e.call(t, "hash");

      r.push(_n78);
    }

    return r.length ? gA(DA, r) : "";
  }

  function rF(e) {
    return e && e.blockParams.length ? pA([" as |", e.blockParams.join(" "), "|"]) : "";
  }

  var oF = {
    print: function print(e, t, n) {
      var r = e.getValue();
      if (!r) return "";
      if (AA(e)) return t.originalText.slice(EA(r), CA(r));

      switch (r.type) {
        case "Block":
        case "Program":
        case "Template":
          return dA(pA(e.map(n, "body")));

        case "ElementNode":
          {
            var _o36 = FA(e, ["ElementNode"]) ? fA : "";

            if (TA(r)) return pA([dA(NA(e, n)), _o36]);

            var _u38 = r.children.every(function (e) {
              return BA(e);
            });

            return pA([dA(NA(e, n)), dA(pA([_u38 ? "" : mA(PA(e, t, n)), r.children.length ? fA : "", pA(["</", r.tag, ">"])])), _o36]);
          }

        case "BlockStatement":
          {
            var _t96 = e.getParentNode(1),
                _o37 = _t96 && _t96.inverse && 1 === _t96.inverse.body.length && _t96.inverse.body[0] === r && "if" === _t96.inverse.body[0].path.parts[0];

            return pA(_o37 ? [UA(e, n), GA(e, n), XA(e, n)] : [qA(e, n), dA(pA([GA(e, n), XA(e, n), JA(e, n)]))]);
          }

        case "ElementModifierStatement":
          return dA(pA(["{{", eF(e, n), yA, "}}"]));

        case "MustacheStatement":
          {
            var _t97 = SA(e, ["AttrNode", "ConcatStatement"]),
                _o38 = SA(e, ["ElementNode"]) && 0 === r.hash.pairs.length && function (e) {
              return 0 === e.params.length;
            }(r),
                _u39 = _t97 || _o38;

            return dA(pA([IA(r), _u39 ? mA(yA) : "", eF(e, n), yA, LA(r)]));
          }

        case "SubExpression":
          return dA(pA(["(", ZA(e, n), yA, ")"]));

        case "AttrNode":
          {
            var _o39 = "TextNode" === r.value.type;

            if (_o39 && "" === r.value.chars && EA(r.value) === CA(r.value)) return pA([r.name]);

            var _u40 = e.call(n, "value"),
                _i63 = _o39 ? QA(_u40.parts.join(), t) : _u40;

            return pA([r.name, "=", _i63]);
          }

        case "ConcatStatement":
          {
            var _r92 = t.singleQuote ? "'" : '"';

            return pA([_r92].concat(_toConsumableArray(e.map(function (e) {
              return n(e);
            }, "parts")), [_r92]));
          }

        case "Hash":
          return pA([gA(DA, e.map(n, "pairs"))]);

        case "HashPair":
          return pA([r.key, "=", e.call(n, "value")]);

        case "TextNode":
          {
            var _t98 = 2,
                _n79 = !vA(e),
                _o40 = !bA(e),
                _u41 = !/\S/.test(r.chars),
                _i64 = YA(r.chars);

            var _a14 = function (e) {
              return YA(((e = "string" == typeof e ? e : "").match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "");
            }(r.chars),
                _s17 = function (e) {
              return YA(((e = "string" == typeof e ? e : "").match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "");
            }(r.chars);

            if ((_n79 || _o40) && _u41 && SA(e, ["Block", "ElementNode", "Template"])) return "";
            _u41 && _i64 ? (_a14 = Math.min(_i64, _t98), _s17 = 0) : (FA(e, ["BlockStatement", "ElementNode"]) && (_s17 = Math.max(_s17, 1)), wA(e, ["BlockStatement", "ElementNode"]) && (_a14 = Math.max(_a14, 1)));

            if (e.stack.includes("attributes")) {
              if (!function (e, t) {
                return SA(e, ["AttrNode"]) && e.getParentNode().name.toLowerCase() === t || SA(e, ["ConcatStatement"]) && e.getParentNode(1).name.toLowerCase() === t;
              }(e, "class")) return pA([r.chars]);
              var _n80 = "",
                  _o41 = "";
              return SA(e, ["ConcatStatement"]) && (wA(e, ["MustacheStatement"]) && (_n80 = " "), FA(e, ["MustacheStatement"]) && (_o41 = " ")), pA([].concat(_toConsumableArray(KA(_a14, _t98)), [r.chars.replace(/^\s+/g, _n80).replace(/\s+$/, _o41)], _toConsumableArray(KA(_s17, _t98))));
            }

            var _c15 = "",
                _l9 = "";
            0 === _s17 && FA(e, ["MustacheStatement"]) && (_l9 = " "), 0 === _a14 && wA(e, ["MustacheStatement"]) && (_c15 = " "), _n79 && (_a14 = 0, _c15 = ""), _o40 && (_s17 = 0, _l9 = "");
            var _p9 = r.chars;
            return _p9.startsWith("{{") && _p9.includes("}}") && (_p9 = "\\" + _p9), pA([].concat(_toConsumableArray(KA(_a14, _t98)), [_p9.replace(/^\s+/g, _c15).replace(/\s+$/, _l9)], _toConsumableArray(KA(_s17, _t98))));
          }

        case "MustacheCommentStatement":
          {
            var _e124 = r.value.includes("}}") ? "--" : "";

            return pA(["{{!", _e124, r.value, _e124, "}}"]);
          }

        case "PathExpression":
          return r.original;

        case "BooleanLiteral":
          return String(r.value);

        case "CommentStatement":
          return pA(["\x3c!--", r.value, "--\x3e"]);

        case "StringLiteral":
          return QA(r.value, t);

        case "NumberLiteral":
          return String(r.value);

        case "UndefinedLiteral":
          return "undefined";

        case "NullLiteral":
          return "null";

        default:
          throw new Error("unknown glimmer type: " + JSON.stringify(r.type));
      }
    },
    massageAstNode: nA
  };
  var uF = {
    languages: [ks({
      name: "Handlebars",
      type: "markup",
      color: "#f7931e",
      aliases: ["hbs", "htmlbars"],
      extensions: [".handlebars", ".hbs"],
      tmScope: "text.html.handlebars",
      aceMode: "handlebars",
      languageId: 155
    }, function () {
      return {
        since: null,
        parsers: ["glimmer"],
        vscodeLanguageIds: ["handlebars"]
      };
    })],
    printers: {
      glimmer: oF
    },
    parsers: {
      get glimmer() {
        return {}.parsers.glimmer;
      }

    }
  };
  var iF = {
    hasPragma: function hasPragma(e) {
      return /^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/.test(e);
    },
    insertPragma: function insertPragma(e) {
      return "# @format\n\n" + e;
    }
  };
  var aF = {
    locStart: function locStart(e) {
      return "number" == typeof e.start ? e.start : e.loc && e.loc.start;
    },
    locEnd: function locEnd(e) {
      return "number" == typeof e.end ? e.end : e.loc && e.loc.end;
    }
  };
  var _cn$builders34 = cn.builders,
      sF = _cn$builders34.concat,
      cF = _cn$builders34.join,
      lF = _cn$builders34.hardline,
      pF = _cn$builders34.line,
      dF = _cn$builders34.softline,
      fF = _cn$builders34.group,
      hF = _cn$builders34.indent,
      mF = _cn$builders34.ifBreak,
      gF = Lt.isNextLineEmpty,
      DF = iF.insertPragma,
      yF = aF.locStart,
      EF = aF.locEnd;

  function CF(e, t, n) {
    if (0 === n.directives.length) return "";
    var r = cF(pF, e.map(t, "directives"));
    return "FragmentDefinition" === n.kind || "OperationDefinition" === n.kind ? fF(sF([pF, r])) : sF([" ", fF(hF(sF([dF, r])))]);
  }

  function bF(e, t, n) {
    var r = e.getValue().length;
    return e.map(function (e, o) {
      var u = n(e);
      return gF(t.originalText, e.getValue(), EF) && o < r - 1 ? sF([u, lF]) : u;
    });
  }

  function vF(e, t, n) {
    var r = e.getNode(),
        o = [],
        u = r.interfaces,
        i = e.map(function (e) {
      return n(e);
    }, "interfaces");

    for (var _e125 = 0; _e125 < u.length; _e125++) {
      var _n81 = u[_e125];
      o.push(i[_e125]);
      var _r93 = u[_e125 + 1];

      if (_r93) {
        var _e126 = t.originalText.slice(_n81.loc.end, _r93.loc.start),
            _u42 = _e126.includes("#"),
            _i65 = _e126.replace(/#.*/g, "").trim();

        o.push("," === _i65 ? "," : " &"), o.push(_u42 ? pF : " ");
      }
    }

    return o;
  }

  function AF() {}

  AF.ignoredProperties = new Set(["loc", "comments"]);
  var FF = {
    print: function print(e, t, n) {
      var r = e.getValue();
      if (!r) return "";
      if ("string" == typeof r) return r;

      switch (r.kind) {
        case "Document":
          {
            var _o42 = [];
            return e.each(function (e, u) {
              _o42.push(sF([e.call(n)])), u !== r.definitions.length - 1 && (_o42.push(lF), gF(t.originalText, e.getValue(), EF) && _o42.push(lF));
            }, "definitions"), sF([sF(_o42), lF]);
          }

        case "OperationDefinition":
          {
            var _o43 = "{" !== t.originalText[yF(r)],
                _u43 = !!r.name;

            return sF([_o43 ? r.operation : "", _o43 && _u43 ? sF([" ", e.call(n, "name")]) : "", r.variableDefinitions && r.variableDefinitions.length ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.map(n, "variableDefinitions"))])), dF, ")"])) : "", CF(e, n, r), r.selectionSet && (_o43 || _u43) ? " " : "", e.call(n, "selectionSet")]);
          }

        case "FragmentDefinition":
          return sF(["fragment ", e.call(n, "name"), r.variableDefinitions && r.variableDefinitions.length ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.map(n, "variableDefinitions"))])), dF, ")"])) : "", " on ", e.call(n, "typeCondition"), CF(e, n, r), " ", e.call(n, "selectionSet")]);

        case "SelectionSet":
          return sF(["{", hF(sF([lF, cF(lF, e.call(function (e) {
            return bF(e, t, n);
          }, "selections"))])), lF, "}"]);

        case "Field":
          return fF(sF([r.alias ? sF([e.call(n, "alias"), ": "]) : "", e.call(n, "name"), r.arguments.length > 0 ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.call(function (e) {
            return bF(e, t, n);
          }, "arguments"))])), dF, ")"])) : "", CF(e, n, r), r.selectionSet ? " " : "", e.call(n, "selectionSet")]));

        case "Name":
          return r.value;

        case "StringValue":
          return r.block ? sF(['"""', lF, cF(lF, r.value.replace(/"""/g, "\\$&").split("\n")), lF, '"""']) : sF(['"', r.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"']);

        case "IntValue":
        case "FloatValue":
        case "EnumValue":
          return r.value;

        case "BooleanValue":
          return r.value ? "true" : "false";

        case "NullValue":
          return "null";

        case "Variable":
          return sF(["$", e.call(n, "name")]);

        case "ListValue":
          return fF(sF(["[", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.map(n, "values"))])), dF, "]"]));

        case "ObjectValue":
          return fF(sF(["{", t.bracketSpacing && r.fields.length > 0 ? " " : "", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.map(n, "fields"))])), dF, mF("", t.bracketSpacing && r.fields.length > 0 ? " " : ""), "}"]));

        case "ObjectField":
        case "Argument":
          return sF([e.call(n, "name"), ": ", e.call(n, "value")]);

        case "Directive":
          return sF(["@", e.call(n, "name"), r.arguments.length > 0 ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.call(function (e) {
            return bF(e, t, n);
          }, "arguments"))])), dF, ")"])) : ""]);

        case "NamedType":
          return e.call(n, "name");

        case "VariableDefinition":
          return sF([e.call(n, "variable"), ": ", e.call(n, "type"), r.defaultValue ? sF([" = ", e.call(n, "defaultValue")]) : "", CF(e, n, r)]);

        case "ObjectTypeExtension":
        case "ObjectTypeDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", "ObjectTypeExtension" === r.kind ? "extend " : "", "type ", e.call(n, "name"), r.interfaces.length > 0 ? sF([" implements ", sF(vF(e, t, n))]) : "", CF(e, n, r), r.fields.length > 0 ? sF([" {", hF(sF([lF, cF(lF, e.call(function (e) {
            return bF(e, t, n);
          }, "fields"))])), lF, "}"]) : ""]);

        case "FieldDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", e.call(n, "name"), r.arguments.length > 0 ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.call(function (e) {
            return bF(e, t, n);
          }, "arguments"))])), dF, ")"])) : "", ": ", e.call(n, "type"), CF(e, n, r)]);

        case "DirectiveDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", "directive ", "@", e.call(n, "name"), r.arguments.length > 0 ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.call(function (e) {
            return bF(e, t, n);
          }, "arguments"))])), dF, ")"])) : "", r.repeatable ? " repeatable" : "", sF([" on ", cF(" | ", e.map(n, "locations"))])]);

        case "EnumTypeExtension":
        case "EnumTypeDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", "EnumTypeExtension" === r.kind ? "extend " : "", "enum ", e.call(n, "name"), CF(e, n, r), r.values.length > 0 ? sF([" {", hF(sF([lF, cF(lF, e.call(function (e) {
            return bF(e, t, n);
          }, "values"))])), lF, "}"]) : ""]);

        case "EnumValueDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", e.call(n, "name"), CF(e, n, r)]);

        case "InputValueDefinition":
          return sF([e.call(n, "description"), r.description ? r.description.block ? lF : pF : "", e.call(n, "name"), ": ", e.call(n, "type"), r.defaultValue ? sF([" = ", e.call(n, "defaultValue")]) : "", CF(e, n, r)]);

        case "InputObjectTypeExtension":
        case "InputObjectTypeDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", "InputObjectTypeExtension" === r.kind ? "extend " : "", "input ", e.call(n, "name"), CF(e, n, r), r.fields.length > 0 ? sF([" {", hF(sF([lF, cF(lF, e.call(function (e) {
            return bF(e, t, n);
          }, "fields"))])), lF, "}"]) : ""]);

        case "SchemaDefinition":
          return sF(["schema", CF(e, n, r), " {", r.operationTypes.length > 0 ? hF(sF([lF, cF(lF, e.call(function (e) {
            return bF(e, t, n);
          }, "operationTypes"))])) : "", lF, "}"]);

        case "OperationTypeDefinition":
          return sF([e.call(n, "operation"), ": ", e.call(n, "type")]);

        case "InterfaceTypeExtension":
        case "InterfaceTypeDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", "InterfaceTypeExtension" === r.kind ? "extend " : "", "interface ", e.call(n, "name"), r.interfaces.length > 0 ? sF([" implements ", sF(vF(e, t, n))]) : "", CF(e, n, r), r.fields.length > 0 ? sF([" {", hF(sF([lF, cF(lF, e.call(function (e) {
            return bF(e, t, n);
          }, "fields"))])), lF, "}"]) : ""]);

        case "FragmentSpread":
          return sF(["...", e.call(n, "name"), CF(e, n, r)]);

        case "InlineFragment":
          return sF(["...", r.typeCondition ? sF([" on ", e.call(n, "typeCondition")]) : "", CF(e, n, r), " ", e.call(n, "selectionSet")]);

        case "UnionTypeExtension":
        case "UnionTypeDefinition":
          return fF(sF([e.call(n, "description"), r.description ? lF : "", fF(sF(["UnionTypeExtension" === r.kind ? "extend " : "", "union ", e.call(n, "name"), CF(e, n, r), r.types.length > 0 ? sF([" =", mF("", " "), hF(sF([mF(sF([pF, "  "])), cF(sF([pF, "| "]), e.map(n, "types"))]))]) : ""]))]));

        case "ScalarTypeExtension":
        case "ScalarTypeDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", "ScalarTypeExtension" === r.kind ? "extend " : "", "scalar ", e.call(n, "name"), CF(e, n, r)]);

        case "NonNullType":
          return sF([e.call(n, "type"), "!"]);

        case "ListType":
          return sF(["[", e.call(n, "type"), "]"]);

        default:
          throw new Error("unknown graphql type: " + JSON.stringify(r.kind));
      }
    },
    massageAstNode: AF,
    hasPrettierIgnore: function hasPrettierIgnore(e) {
      var t = e.getValue();
      return t && Array.isArray(t.comments) && t.comments.some(function (e) {
        return "prettier-ignore" === e.value.trim();
      });
    },
    insertPragma: DF,
    printComment: function printComment(e) {
      var t = e.getValue();
      if ("Comment" === t.kind) return "#" + t.value.trimEnd();
      throw new Error("Not a comment: " + JSON.stringify(t));
    },
    canAttachComment: function canAttachComment(e) {
      return e.kind && "Comment" !== e.kind;
    }
  },
      xF = {
    bracketSpacing: RC.bracketSpacing
  };
  var SF = {
    languages: [ks({
      name: "GraphQL",
      type: "data",
      color: "#e10098",
      extensions: [".graphql", ".gql", ".graphqls"],
      tmScope: "source.graphql",
      aceMode: "text",
      languageId: 139
    }, function () {
      return {
        since: "1.5.0",
        parsers: ["graphql"],
        vscodeLanguageIds: ["graphql"]
      };
    })],
    options: xF,
    printers: {
      graphql: FF
    },
    parsers: {
      get graphql() {
        return {}.parsers.graphql;
      }

    }
  };
  var wF = {
    locStart: function locStart(e) {
      return e.position.start.offset;
    },
    locEnd: function locEnd(e) {
      return e.position.end.offset;
    }
  };
  var TF = Lt.getLast,
      BF = wF.locStart,
      NF = wF.locEnd,
      _cjkPattern$kPattern$ = {
    cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u3000-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?",
    kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]",
    punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]"
  },
      kF = _cjkPattern$kPattern$.cjkPattern,
      PF = _cjkPattern$kPattern$.kPattern,
      OF = _cjkPattern$kPattern$.punctuationPattern,
      IF = ["liquidNode", "inlineCode", "emphasis", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"],
      LF = IF.concat(["tableCell", "paragraph", "heading"]),
      MF = new RegExp(PF),
      jF = new RegExp(OF);

  function _F(e, t) {
    var _t$slice$match = t.slice(e.position.start.offset, e.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/),
        _t$slice$match2 = _slicedToArray(_t$slice$match, 4),
        n = _t$slice$match2[1],
        r = _t$slice$match2[2],
        o = _t$slice$match2[3];

    return {
      numberText: n,
      marker: r,
      leadingSpaces: o
    };
  }

  var RF = {
    mapAst: function mapAst(e, t) {
      return function e(n, r, o) {
        o = o || [];
        var u = Object.assign({}, t(n, r, o));
        return u.children && (u.children = u.children.map(function (t, n) {
          return e(t, n, [u].concat(o));
        })), u;
      }(e, null, null);
    },
    splitText: function splitText(e, t) {
      var n = "non-cjk",
          r = "cj-letter",
          o = "cjk-punctuation",
          u = [];
      return ("preserve" === t.proseWrap ? e : e.replace(new RegExp("(".concat(kF, ")\n(").concat(kF, ")"), "g"), "$1$2")).split(/([\t\n ]+)/).forEach(function (e, t, a) {
        t % 2 != 1 ? (0 !== t && t !== a.length - 1 || "" !== e) && e.split(new RegExp("(".concat(kF, ")"))).forEach(function (e, t, u) {
          (0 !== t && t !== u.length - 1 || "" !== e) && (t % 2 != 0 ? i(jF.test(e) ? {
            type: "word",
            value: e,
            kind: o,
            hasLeadingPunctuation: !0,
            hasTrailingPunctuation: !0
          } : {
            type: "word",
            value: e,
            kind: MF.test(e) ? "k-letter" : r,
            hasLeadingPunctuation: !1,
            hasTrailingPunctuation: !1
          }) : "" !== e && i({
            type: "word",
            value: e,
            kind: n,
            hasLeadingPunctuation: jF.test(e[0]),
            hasTrailingPunctuation: jF.test(TF(e))
          }));
        }) : u.push({
          type: "whitespace",
          value: /\n/.test(e) ? "\n" : " "
        });
      }), u;

      function i(e) {
        var t = TF(u);
        var i, a;
        t && "word" === t.type && (t.kind === n && e.kind === r && !t.hasTrailingPunctuation || t.kind === r && e.kind === n && !e.hasLeadingPunctuation ? u.push({
          type: "whitespace",
          value: " "
        }) : (i = n, a = o, t.kind === i && e.kind === a || t.kind === a && e.kind === i || [t.value, e.value].some(function (e) {
          return /\u3000/.test(e);
        }) || u.push({
          type: "whitespace",
          value: ""
        }))), u.push(e);
      }
    },
    punctuationPattern: OF,
    getFencedCodeBlockValue: function getFencedCodeBlockValue(e, t) {
      var n = e.value;
      return e.position.end.offset === t.length && n.endsWith("\n") && t.endsWith("\n") ? n.slice(0, -1) : n;
    },
    getOrderedListItemInfo: _F,
    hasGitDiffFriendlyOrderedList: function hasGitDiffFriendlyOrderedList(e, t) {
      if (!e.ordered) return !1;
      if (e.children.length < 2) return !1;
      var n = Number(_F(e.children[0], t.originalText).numberText),
          r = Number(_F(e.children[1], t.originalText).numberText);

      if (0 === n && e.children.length > 2) {
        var _n82 = Number(_F(e.children[2], t.originalText).numberText);

        return 1 === r && 1 === _n82;
      }

      return 1 === r;
    },
    INLINE_NODE_TYPES: IF,
    INLINE_NODE_WRAPPER_TYPES: LF,
    isAutolink: function isAutolink(e) {
      if (!e || "link" !== e.type || 1 !== e.children.length) return !1;
      var t = e.children[0];
      return t && BF(e) === BF(t) && NF(e) === NF(t);
    }
  };
  var VF = Lt.inferParserByLanguage,
      $F = Lt.getMaxContinuousCount,
      _cn$builders35 = cn.builders,
      qF = _cn$builders35.hardline,
      WF = _cn$builders35.concat,
      UF = _cn$builders35.markAsRoot,
      JF = cn.utils.replaceNewlinesWithLiterallines,
      zF = ob.print,
      HF = RF.getFencedCodeBlockValue;

  var GF = function GF(e, t, n, r) {
    var o = e.getValue();

    if ("code" === o.type && null !== o.lang) {
      var _e127 = VF(o.lang, r);

      if (_e127) {
        var _t99 = r.__inJsTemplate ? "~" : "`",
            _u44 = _t99.repeat(Math.max(3, $F(o.value, _t99) + 1)),
            _i66 = n(HF(o, r.originalText), {
          parser: _e127
        }, {
          stripTrailingHardline: !0
        });

        return UF(WF([_u44, o.lang, o.meta ? " " + o.meta : "", qF, JF(_i66), qF, _u44]));
      }
    }

    switch (o.type) {
      case "front-matter":
        return zF(o, n);

      case "importExport":
        return WF([n(o.value, {
          parser: "babel"
        }, {
          stripTrailingHardline: !0
        }), qF]);

      case "jsx":
        return n("<$>".concat(o.value, "</$>"), {
          parser: "__js_expression",
          rootMarker: "mdx"
        }, {
          stripTrailingHardline: !0
        });
    }

    return null;
  };

  var XF = ob.parse,
      YF = ["format", "prettier"];

  function KF(e) {
    var t = "@(".concat(YF.join("|"), ")"),
        n = new RegExp(["\x3c!--\\s*".concat(t, "\\s*--\x3e"), "\x3c!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*".concat(t, "[^\\S\n]*($|\n)[\\s\\S]*\n.*--\x3e")].join("|"), "m"),
        r = e.match(n);
    return r && 0 === r.index;
  }

  var QF = {
    startWithPragma: KF,
    hasPragma: function hasPragma(e) {
      return KF(XF(e).content.trimStart());
    },
    insertPragma: function insertPragma(e) {
      var t = XF(e),
          n = "\x3c!-- @".concat(YF[0], " --\x3e");
      return t.frontMatter ? "".concat(t.frontMatter.raw, "\n\n").concat(n, "\n\n").concat(t.content) : "".concat(n, "\n\n").concat(t.content);
    }
  };
  var ZF = RF.getOrderedListItemInfo,
      ex = RF.mapAst,
      tx = RF.splitText,
      nx = /^([\u0000-\uffff]|[\ud800-\udbff][\udc00-\udfff])$/;

  function rx(e, t, n) {
    return ex(e, function (e) {
      if (!e.children) return e;
      var r = e.children.reduce(function (e, r) {
        var o = e[e.length - 1];
        return o && t(o, r) ? e.splice(-1, 1, n(o, r)) : e.push(r), e;
      }, []);
      return Object.assign({}, e, {
        children: r
      });
    });
  }

  var ox = function ox(e, t) {
    return e = function (e) {
      return rx(e, function (e, t) {
        return "importExport" === e.type && "importExport" === t.type;
      }, function (e, t) {
        return {
          type: "importExport",
          value: e.value + "\n\n" + t.value,
          position: {
            start: e.position.start,
            end: t.position.end
          }
        };
      });
    }(e = function (e) {
      return ex(e, function (e) {
        return "import" !== e.type && "export" !== e.type ? e : Object.assign({}, e, {
          type: "importExport"
        });
      });
    }(e = function (e, t) {
      return ex(e, function (e, n, _ref41) {
        var _ref42 = _slicedToArray(_ref41, 1),
            r = _ref42[0];

        if ("text" !== e.type) return e;
        var o = e.value;
        return "paragraph" === r.type && (0 === n && (o = o.trimStart()), n === r.children.length - 1 && (o = o.trimEnd())), {
          type: "sentence",
          position: e.position,
          children: tx(o, t)
        };
      });
    }(e = function (e, t) {
      return ex(e, function (e, t, n) {
        if ("list" === e.type && 0 !== e.children.length) {
          for (var _t100 = 0; _t100 < n.length; _t100++) {
            var _r94 = n[_t100];
            if ("list" === _r94.type && !_r94.isAligned) return e.isAligned = !1, e;
          }

          e.isAligned = r(e);
        }

        return e;
      });

      function n(e) {
        return 0 === e.children.length ? -1 : e.children[0].position.start.column - 1;
      }

      function r(e) {
        if (!e.ordered) return !0;

        var _e$children = _slicedToArray(e.children, 2),
            r = _e$children[0],
            o = _e$children[1];

        if (ZF(r, t.originalText).leadingSpaces.length > 1) return !0;
        var u = n(r);
        if (-1 === u) return !1;
        if (1 === e.children.length) return u % t.tabWidth == 0;
        if (u !== n(o)) return !1;
        if (u % t.tabWidth == 0) return !0;
        return ZF(o, t.originalText).leadingSpaces.length > 1;
      }
    }(e = function (e, t) {
      return ex(e, function (e, n, r) {
        if ("code" === e.type) {
          var _n83 = /^\n?( {4,}|\t)/.test(t.originalText.slice(e.position.start.offset, e.position.end.offset));

          if (e.isIndented = _n83, _n83) for (var _e128 = 0; _e128 < r.length; _e128++) {
            var _t101 = r[_e128];
            if (_t101.hasIndentedCodeblock) break;
            "list" === _t101.type && (_t101.hasIndentedCodeblock = !0);
          }
        }

        return e;
      });
    }(e = function (e) {
      return ex(e, function (e) {
        return "inlineCode" !== e.type ? e : Object.assign({}, e, {
          value: e.value.replace(/\s+/g, " ")
        });
      });
    }(e = function (e) {
      return rx(e, function (e, t) {
        return "text" === e.type && "text" === t.type;
      }, function (e, t) {
        return {
          type: "text",
          value: e.value + t.value,
          position: {
            start: e.position.start,
            end: t.position.end
          }
        };
      });
    }(e = function (e, t) {
      return ex(e, function (e) {
        return "text" === e.type && "*" !== e.value && "_" !== e.value && nx.test(e.value) && e.position.end.offset - e.position.start.offset !== e.value.length ? Object.assign({}, e, {
          value: t.originalText.slice(e.position.start.offset, e.position.end.offset)
        }) : e;
      });
    }(e, t))), t), t), t)));
  };

  var ux = Lt.isFrontMatterNode,
      ix = QF.startWithPragma,
      ax = new Set(["position", "raw"]);

  function sx(e, t, n) {
    return "front-matter" !== e.type && "code" !== e.type && "yaml" !== e.type && "import" !== e.type && "export" !== e.type && "jsx" !== e.type || delete t.value, "list" === e.type && delete t.isAligned, "list" !== e.type && "listItem" !== e.type || (delete t.spread, delete t.loose), "text" === e.type ? null : ("inlineCode" === e.type && (t.value = e.value.replace(/[\t\n ]+/g, " ")), "wikiLink" === e.type && (t.value = e.value.trim().replace(/[\t\n]+/g, " ")), "definition" !== e.type && "linkReference" !== e.type || (t.label = e.label.trim().replace(/[\t\n ]+/g, " ").toLowerCase()), "definition" !== e.type && "link" !== e.type && "image" !== e.type || !e.title || (t.title = e.title.replace(/\\(["')])/g, "$1")), n && "root" === n.type && n.children.length > 0 && (n.children[0] === e || ux(n.children[0]) && n.children[1] === e) && "html" === e.type && ix(e.value) ? null : void 0);
  }

  sx.ignoredProperties = ax;
  var cx = sx;
  var lx = Lt.getLast,
      px = Lt.getMinNotPresentContinuousCount,
      dx = Lt.getMaxContinuousCount,
      fx = Lt.getStringWidth,
      _cn$builders36 = cn.builders,
      hx = _cn$builders36.breakParent,
      mx = _cn$builders36.concat,
      gx = _cn$builders36.join,
      Dx = _cn$builders36.line,
      yx = _cn$builders36.literalline,
      Ex = _cn$builders36.markAsRoot,
      Cx = _cn$builders36.hardline,
      bx = _cn$builders36.softline,
      vx = _cn$builders36.ifBreak,
      Ax = _cn$builders36.fill,
      Fx = _cn$builders36.align,
      xx = _cn$builders36.indent,
      Sx = _cn$builders36.group,
      wx = cn.utils.normalizeDoc,
      Tx = cn.printer.printDocToString,
      Bx = Lt.replaceEndOfLineWith,
      Nx = QF.insertPragma,
      kx = wF.locStart,
      Px = wF.locEnd,
      Ox = RF.getFencedCodeBlockValue,
      Ix = RF.hasGitDiffFriendlyOrderedList,
      Lx = RF.splitText,
      Mx = RF.punctuationPattern,
      jx = RF.INLINE_NODE_TYPES,
      _x = RF.INLINE_NODE_WRAPPER_TYPES,
      Rx = RF.isAutolink,
      Vx = new Set(["importExport"]),
      $x = ["heading", "tableCell", "link", "wikiLink"],
      qx = new Set(["listItem", "definition", "footnoteDefinition"]);

  function Wx(e, t, n, r) {
    var o = e.getValue(),
        u = null === o.checked ? "" : o.checked ? "[x] " : "[ ] ";
    return mx([u, Xx(e, t, n, {
      processor: function processor(e, o) {
        if (0 === o && "list" !== e.getValue().type) return Fx(" ".repeat(u.length), e.call(n));
        var i = " ".repeat((a = t.tabWidth - r.length, c = 3, a < (s = 0) ? s : a > c ? c : a));
        var a, s, c;
        return mx([i, Fx(i, e.call(n))]);
      }
    })]);
  }

  function Ux(e, t) {
    return function (e, t, n) {
      n = n || function () {
        return !0;
      };

      var r = -1;

      var _iterator40 = _createForOfIteratorHelper(t.children),
          _step40;

      try {
        for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
          var _o44 = _step40.value;
          if (_o44.type === e.type && n(_o44) ? r++ : r = -1, _o44 === e) return r;
        }
      } catch (err) {
        _iterator40.e(err);
      } finally {
        _iterator40.f();
      }
    }(e, t, function (t) {
      return t.ordered === e.ordered;
    });
  }

  function Jx(e, t) {
    var n = [].concat(t);
    var r,
        o = -1;

    for (; r = e.getParentNode(++o);) {
      if (n.includes(r.type)) return o;
    }

    return -1;
  }

  function zx(e, t) {
    var n = Jx(e, t);
    return -1 === n ? null : e.getParentNode(n);
  }

  function Hx(e, t, n) {
    if ("preserve" === n.proseWrap && "\n" === t) return Cx;
    var r = "always" === n.proseWrap && !zx(e, $x);
    return "" !== t ? r ? Dx : " " : r ? bx : "";
  }

  function Gx(e, t, n) {
    var r = [];
    var o = null;

    var _e$getValue2 = e.getValue(),
        u = _e$getValue2.children;

    return u.forEach(function (e, t) {
      switch (Kx(e)) {
        case "start":
          null === o && (o = {
            index: t,
            offset: e.position.end.offset
          });
          break;

        case "end":
          null !== o && (r.push({
            start: o,
            end: {
              index: t,
              offset: e.position.start.offset
            }
          }), o = null);
      }
    }), Xx(e, t, n, {
      processor: function processor(e, o) {
        if (0 !== r.length) {
          var _e129 = r[0];
          if (o === _e129.start.index) return mx([u[_e129.start.index].value, t.originalText.slice(_e129.start.offset, _e129.end.offset), u[_e129.end.index].value]);
          if (_e129.start.index < o && o < _e129.end.index) return !1;
          if (o === _e129.end.index) return r.shift(), !1;
        }

        return e.call(n);
      }
    });
  }

  function Xx(e, t, n, r) {
    var o = (r = r || {}).postprocessor || mx,
        u = r.processor || function (e) {
      return e.call(n);
    },
        i = e.getValue(),
        a = [];

    var s;
    return e.each(function (e, n) {
      var r = e.getValue(),
          o = u(e, n);

      if (!1 !== o) {
        var _e130 = {
          parts: a,
          prevNode: s,
          parentNode: i,
          options: t
        };
        (function (e, t) {
          var n = 0 === t.parts.length,
              r = jx.includes(e.type),
              o = "html" === e.type && _x.includes(t.parentNode.type);

          return n || r || o;
        })(r, _e130) || (a.push(Cx), s && Vx.has(s.type) || (function (e, t) {
          var n = (t.prevNode && t.prevNode.type) === e.type && qx.has(e.type),
              r = "listItem" === t.parentNode.type && !t.parentNode.loose,
              o = t.prevNode && "listItem" === t.prevNode.type && t.prevNode.loose,
              u = "next" === Kx(t.prevNode),
              i = "html" === e.type && t.prevNode && "html" === t.prevNode.type && t.prevNode.position.end.line + 1 === e.position.start.line,
              a = "html" === e.type && "listItem" === t.parentNode.type && t.prevNode && "paragraph" === t.prevNode.type && t.prevNode.position.end.line + 1 === e.position.start.line;
          return o || !(n || r || u || i || a);
        }(r, _e130) || Qx(r, _e130)) && a.push(Cx), Qx(r, _e130) && a.push(Cx)), a.push(o), s = r;
      }
    }, "children"), o(a);
  }

  function Yx(e) {
    var t = e;

    for (; t.children && 0 !== t.children.length;) {
      t = t.children[t.children.length - 1];
    }

    return t;
  }

  function Kx(e) {
    if ("html" !== e.type) return !1;
    var t = e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
    return null !== t && (t[1] ? t[1] : "next");
  }

  function Qx(e, t) {
    var n = t.prevNode && "list" === t.prevNode.type,
        r = "code" === e.type && e.isIndented;
    return n && r;
  }

  function Zx(e, t) {
    var n = [" "].concat(t || []);
    return new RegExp(n.map(function (e) {
      return "\\".concat(e);
    }).join("|")).test(e) ? "<".concat(e, ">") : e;
  }

  function eS(e, t, n) {
    if (null == n && (n = !0), !e) return "";
    if (n) return " " + eS(e, t, !1);
    if ((e = e.replace(/\\(["')])/g, "$1")).includes('"') && e.includes("'") && !e.includes(")")) return "(".concat(e, ")");
    var r = e.split("'").length - 1,
        o = e.split('"').length - 1,
        u = r > o ? '"' : o > r || t.singleQuote ? "'" : '"';
    return e = (e = e.replace(/\\/, "\\\\")).replace(new RegExp("(".concat(u, ")"), "g"), "\\$1"), "".concat(u).concat(e).concat(u);
  }

  var tS = {
    preprocess: ox,
    print: function print(e, t, n) {
      var r = e.getValue();
      if (function (e) {
        var t = zx(e, ["linkReference", "imageReference"]);
        return t && ("linkReference" !== t.type || "full" !== t.referenceType);
      }(e)) return mx(Lx(t.originalText.slice(r.position.start.offset, r.position.end.offset), t).map(function (n) {
        return "word" === n.type ? n.value : "" === n.value ? "" : Hx(e, n.value, t);
      }));

      switch (r.type) {
        case "front-matter":
          return t.originalText.slice(r.position.start.offset, r.position.end.offset);

        case "root":
          return 0 === r.children.length ? "" : mx([wx(Gx(e, t, n)), Vx.has(Yx(r).type) ? "" : Cx]);

        case "paragraph":
          return Xx(e, t, n, {
            postprocessor: Ax
          });

        case "sentence":
          return Xx(e, t, n);

        case "word":
          {
            var _t102 = r.value.replace(/\*/g, "\\$&").replace(new RegExp(["(^|".concat(Mx, ")(_+)"), "(_+)(".concat(Mx, "|$)")].join("|"), "g"), function (e, t, n, r, o) {
              return (n ? "".concat(t).concat(n) : "".concat(r).concat(o)).replace(/_/g, "\\_");
            });

            var _n84 = function _n84(e, t, n) {
              return "sentence" === e.type && 0 === n;
            },
                _o45 = function _o45(e, t, n) {
              return Rx(e.children[n - 1]);
            };

            return _t102 !== r.value && (e.match(void 0, _n84, _o45) || e.match(void 0, _n84, function (e, t, n) {
              return "emphasis" === e.type && 0 === n;
            }, _o45)) && (_t102 = _t102.replace(/^(\\?[*_])+/, function (e) {
              return e.replace(/\\/g, "");
            })), _t102;
          }

        case "whitespace":
          {
            var _n85 = e.getParentNode(),
                _o46 = _n85.children.indexOf(r),
                _u45 = _n85.children[_o46 + 1],
                _i67 = _u45 && /^>|^([*+-]|#{1,6}|\d+[).])$/.test(_u45.value) ? "never" : t.proseWrap;

            return Hx(e, r.value, {
              proseWrap: _i67
            });
          }

        case "emphasis":
          {
            var _o47;

            if (Rx(r.children[0])) _o47 = t.originalText[r.position.start.offset];else {
              var _t103 = e.getParentNode(),
                  _n86 = _t103.children.indexOf(r),
                  _u46 = _t103.children[_n86 - 1],
                  _i68 = _t103.children[_n86 + 1];

              _o47 = _u46 && "sentence" === _u46.type && _u46.children.length > 0 && "word" === lx(_u46.children).type && !lx(_u46.children).hasTrailingPunctuation || _i68 && "sentence" === _i68.type && _i68.children.length > 0 && "word" === _i68.children[0].type && !_i68.children[0].hasLeadingPunctuation || zx(e, "emphasis") ? "*" : "_";
            }
            return mx([_o47, Xx(e, t, n), _o47]);
          }

        case "strong":
          return mx(["**", Xx(e, t, n), "**"]);

        case "delete":
          return mx(["~~", Xx(e, t, n), "~~"]);

        case "inlineCode":
          {
            var _e131 = px(r.value, "`"),
                _t104 = "`".repeat(_e131 || 1),
                _n87 = _e131 && !/^\s/.test(r.value) ? " " : "";

            return mx([_t104, _n87, r.value, _n87, _t104]);
          }

        case "wikiLink":
          {
            var _e132 = "";
            return _e132 = "preserve" === t.proseWrap ? r.value : r.value.replace(/[\t\n]+/g, " "), mx(["[[", _e132, "]]"]);
          }

        case "link":
          switch (t.originalText[r.position.start.offset]) {
            case "<":
              {
                var _e133 = "mailto:",
                    _n88 = r.url.startsWith(_e133) && t.originalText.slice(r.position.start.offset + 1, r.position.start.offset + 1 + _e133.length) !== _e133 ? r.url.slice(_e133.length) : r.url;

                return mx(["<", _n88, ">"]);
              }

            case "[":
              return mx(["[", Xx(e, t, n), "](", Zx(r.url, ")"), eS(r.title, t), ")"]);

            default:
              return t.originalText.slice(r.position.start.offset, r.position.end.offset);
          }

        case "image":
          return mx(["![", r.alt || "", "](", Zx(r.url, ")"), eS(r.title, t), ")"]);

        case "blockquote":
          return mx(["> ", Fx("> ", Xx(e, t, n))]);

        case "heading":
          return mx(["#".repeat(r.depth) + " ", Xx(e, t, n)]);

        case "code":
          {
            if (r.isIndented) {
              var _e135 = " ".repeat(4);

              return Fx(_e135, mx([_e135, mx(Bx(r.value, Cx))]));
            }

            var _e134 = t.__inJsTemplate ? "~" : "`",
                _n89 = _e134.repeat(Math.max(3, dx(r.value, _e134) + 1));

            return mx([_n89, r.lang || "", r.meta ? " " + r.meta : "", Cx, mx(Bx(Ox(r, t.originalText), Cx)), Cx, _n89]);
          }

        case "html":
          {
            var _t105 = e.getParentNode(),
                _n90 = "root" === _t105.type && lx(_t105.children) === r ? r.value.trimEnd() : r.value,
                _o48 = /^<!--[\S\s]*-->$/.test(_n90);

            return mx(Bx(_n90, _o48 ? Cx : Ex(yx)));
          }

        case "list":
          {
            var _o49 = Ux(r, e.getParentNode()),
                _u47 = Ix(r, t);

            return Xx(e, t, n, {
              processor: function processor(e, i) {
                var a = function () {
                  var e = r.ordered ? (0 === i ? r.start : _u47 ? 1 : r.start + i) + (_o49 % 2 == 0 ? ". " : ") ") : _o49 % 2 == 0 ? "- " : "* ";
                  return r.isAligned || r.hasIndentedCodeblock ? function (e, t) {
                    var n = r();
                    return e + " ".repeat(n >= 4 ? 0 : n);

                    function r() {
                      var n = e.length % t.tabWidth;
                      return 0 === n ? 0 : t.tabWidth - n;
                    }
                  }(e, t) : e;
                }(),
                    s = e.getValue();

                return 2 === s.children.length && "html" === s.children[1].type && s.children[0].position.start.column !== s.children[1].position.start.column ? mx([a, Wx(e, t, n, a)]) : mx([a, Fx(" ".repeat(a.length), Wx(e, t, n, a))]);
              }
            });
          }

        case "thematicBreak":
          {
            var _t106 = Jx(e, "list");

            if (-1 === _t106) return "---";
            return Ux(e.getParentNode(_t106), e.getParentNode(_t106 + 1)) % 2 == 0 ? "***" : "---";
          }

        case "linkReference":
          return mx(["[", Xx(e, t, n), "]", "full" === r.referenceType ? mx(["[", r.identifier, "]"]) : "collapsed" === r.referenceType ? "[]" : ""]);

        case "imageReference":
          switch (r.referenceType) {
            case "full":
              return mx(["![", r.alt || "", "][", r.identifier, "]"]);

            default:
              return mx(["![", r.alt, "]", "collapsed" === r.referenceType ? "[]" : ""]);
          }

        case "definition":
          {
            var _e136 = "always" === t.proseWrap ? Dx : " ";

            return Sx(mx([mx(["[", r.identifier, "]:"]), xx(mx([_e136, Zx(r.url), null === r.title ? "" : mx([_e136, eS(r.title, t, !1)])]))]));
          }

        case "footnote":
          return mx(["[^", Xx(e, t, n), "]"]);

        case "footnoteReference":
          return mx(["[^", r.identifier, "]"]);

        case "footnoteDefinition":
          {
            var _o50 = e.getParentNode().children[e.getName() + 1],
                _u48 = 1 === r.children.length && "paragraph" === r.children[0].type && ("never" === t.proseWrap || "preserve" === t.proseWrap && r.children[0].position.start.line === r.children[0].position.end.line);

            return mx(["[^", r.identifier, "]: ", _u48 ? Xx(e, t, n) : Sx(mx([Fx(" ".repeat(4), Xx(e, t, n, {
              processor: function processor(e, t) {
                return 0 === t ? Sx(mx([bx, e.call(n)])) : e.call(n);
              }
            })), _o50 && "footnoteDefinition" === _o50.type ? bx : ""]))]);
          }

        case "table":
          return function (e, t, n) {
            var r = Cx.parts[0],
                o = e.getValue(),
                u = [],
                i = e.map(function (e) {
              return e.map(function (e, r) {
                var o = Tx(e.call(n), t).formatted,
                    i = fx(o);
                return u[r] = Math.max(u[r] || 3, i), {
                  text: o,
                  width: i
                };
              }, "children");
            }, "children"),
                a = c(!1);
            if ("never" !== t.proseWrap) return mx([hx, a]);
            var s = c(!0);
            return mx([hx, Sx(vx(s, a))]);

            function c(e) {
              var t = [p(i[0], e), l(e)];
              return i.length > 1 && t.push(gx(r, i.slice(1).map(function (t) {
                return p(t, e);
              }))), gx(r, t);
            }

            function l(e) {
              var t = u.map(function (t, n) {
                var r = o.align[n],
                    u = "center" === r || "left" === r ? ":" : "-",
                    i = "center" === r || "right" === r ? ":" : "-",
                    a = e ? "-" : "-".repeat(t - 2);
                return "".concat(u).concat(a).concat(i);
              });
              return "| ".concat(t.join(" | "), " |");
            }

            function p(e, t) {
              var n = e.map(function (_ref43, r) {
                var e = _ref43.text,
                    n = _ref43.width;
                if (t) return e;
                var i = u[r] - n,
                    a = o.align[r];
                var s = 0;
                "right" === a ? s = i : "center" === a && (s = Math.floor(i / 2));
                var c = i - s;
                return "".concat(" ".repeat(s)).concat(e).concat(" ".repeat(c));
              });
              return "| ".concat(n.join(" | "), " |");
            }
          }(e, t, n);

        case "tableCell":
          return Xx(e, t, n);

        case "break":
          return /\s/.test(t.originalText[r.position.start.offset]) ? mx(["  ", Ex(yx)]) : mx(["\\", Cx]);

        case "liquidNode":
          return mx(Bx(r.value, Cx));

        case "importExport":
          return mx([r.value, Cx]);

        case "jsx":
          return r.value;

        case "math":
          return mx(["$$", Cx, r.value ? mx([mx(Bx(r.value, Cx)), Cx]) : "", "$$"]);

        case "inlineMath":
          return t.originalText.slice(kx(r), Px(r));

        case "tableRow":
        case "listItem":
        default:
          throw new Error("Unknown markdown type ".concat(JSON.stringify(r.type)));
      }
    },
    embed: GF,
    massageAstNode: cx,
    hasPrettierIgnore: function hasPrettierIgnore(e) {
      var t = +e.getName();
      return 0 !== t && "next" === Kx(e.getParentNode().children[t - 1]);
    },
    insertPragma: Nx
  },
      nS = {
    proseWrap: RC.proseWrap,
    singleQuote: RC.singleQuote
  },
      rS = {
    name: "Markdown",
    type: "prose",
    color: "#083fa1",
    aliases: ["pandoc"],
    aceMode: "markdown",
    codemirrorMode: "gfm",
    codemirrorMimeType: "text/x-gfm",
    wrap: !0,
    extensions: [".md", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".workbook"],
    filenames: ["contents.lr"],
    tmScope: "source.gfm",
    languageId: 222
  };
  var oS = {
    languages: [ks(rS, function (e) {
      return {
        since: "1.8.0",
        parsers: ["markdown"],
        vscodeLanguageIds: ["markdown"],
        filenames: e.filenames.concat(["README"]),
        extensions: e.extensions.filter(function (e) {
          return ".mdx" !== e;
        })
      };
    }), ks(rS, function () {
      return {
        name: "MDX",
        since: "1.15.0",
        parsers: ["mdx"],
        vscodeLanguageIds: ["mdx"],
        filenames: [],
        extensions: [".mdx"]
      };
    })],
    options: nS,
    printers: {
      mdast: tS
    },
    parsers: {
      get remark() {
        return {}.parsers.remark;
      },

      get markdown() {
        return {}.parsers.remark;
      },

      get mdx() {
        return {}.parsers.mdx;
      }

    }
  };
  var uS = Lt.isFrontMatterNode,
      iS = new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);

  function aS(e, t) {
    return "text" === e.type || "comment" === e.type || uS(e) || "yaml" === e.type || "toml" === e.type ? null : ("attribute" === e.type && delete t.value, void ("docType" === e.type && delete t.value));
  }

  aS.ignoredProperties = iS;
  var sS = aS,
      cS = {
    "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"],
    a: ["accesskey", "charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "tabindex", "target", "type"],
    abbr: ["title"],
    applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"],
    area: ["accesskey", "alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "tabindex", "target", "type"],
    audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
    base: ["href", "target"],
    basefont: ["color", "face", "size"],
    bdo: ["dir"],
    blockquote: ["cite"],
    body: ["alink", "background", "bgcolor", "link", "text", "vlink"],
    br: ["clear"],
    button: ["accesskey", "autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "tabindex", "type", "value"],
    canvas: ["height", "width"],
    caption: ["align"],
    col: ["align", "char", "charoff", "span", "valign", "width"],
    colgroup: ["align", "char", "charoff", "span", "valign", "width"],
    data: ["value"],
    del: ["cite", "datetime"],
    details: ["open"],
    dfn: ["title"],
    dialog: ["open"],
    dir: ["compact"],
    div: ["align"],
    dl: ["compact"],
    embed: ["height", "src", "type", "width"],
    fieldset: ["disabled", "form", "name"],
    font: ["color", "face", "size"],
    form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"],
    frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"],
    frameset: ["cols", "rows"],
    h1: ["align"],
    h2: ["align"],
    h3: ["align"],
    h4: ["align"],
    h5: ["align"],
    h6: ["align"],
    head: ["profile"],
    hr: ["align", "noshade", "size", "width"],
    html: ["manifest", "version"],
    iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"],
    img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"],
    input: ["accept", "accesskey", "align", "alt", "autocomplete", "autofocus", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "tabindex", "title", "type", "usemap", "value", "width"],
    ins: ["cite", "datetime"],
    isindex: ["prompt"],
    label: ["accesskey", "for", "form"],
    legend: ["accesskey", "align"],
    li: ["type", "value"],
    link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "nonce", "referrerpolicy", "rel", "rev", "sizes", "target", "title", "type"],
    map: ["name"],
    menu: ["compact"],
    meta: ["charset", "content", "http-equiv", "name", "scheme"],
    meter: ["high", "low", "max", "min", "optimum", "value"],
    object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "tabindex", "type", "typemustmatch", "usemap", "vspace", "width"],
    ol: ["compact", "reversed", "start", "type"],
    optgroup: ["disabled", "label"],
    option: ["disabled", "label", "selected", "value"],
    output: ["for", "form", "name"],
    p: ["align"],
    param: ["name", "type", "value", "valuetype"],
    pre: ["width"],
    progress: ["max", "value"],
    q: ["cite"],
    script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "nonce", "referrerpolicy", "src", "type"],
    select: ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "tabindex"],
    slot: ["name"],
    source: ["media", "sizes", "src", "srcset", "type"],
    style: ["media", "nonce", "title", "type"],
    table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"],
    tbody: ["align", "char", "charoff", "valign"],
    td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"],
    textarea: ["accesskey", "autocomplete", "autofocus", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "wrap"],
    tfoot: ["align", "char", "charoff", "valign"],
    th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"],
    thead: ["align", "char", "charoff", "valign"],
    time: ["datetime"],
    tr: ["align", "bgcolor", "char", "charoff", "valign"],
    track: ["default", "kind", "label", "src", "srclang"],
    ul: ["compact", "type"],
    video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"]
  };

  var lS = Lt.inferParserByLanguage,
      pS = Lt.isFrontMatterNode,
      _CSS_DISPLAY_TAGS$CSS = {
    CSS_DISPLAY_TAGS: {
      area: "none",
      base: "none",
      basefont: "none",
      datalist: "none",
      head: "none",
      link: "none",
      meta: "none",
      noembed: "none",
      noframes: "none",
      param: "block",
      rp: "none",
      script: "block",
      source: "block",
      style: "none",
      template: "inline",
      track: "block",
      title: "none",
      html: "block",
      body: "block",
      address: "block",
      blockquote: "block",
      center: "block",
      div: "block",
      figure: "block",
      figcaption: "block",
      footer: "block",
      form: "block",
      header: "block",
      hr: "block",
      legend: "block",
      listing: "block",
      main: "block",
      p: "block",
      plaintext: "block",
      pre: "block",
      xmp: "block",
      slot: "contents",
      ruby: "ruby",
      rt: "ruby-text",
      article: "block",
      aside: "block",
      h1: "block",
      h2: "block",
      h3: "block",
      h4: "block",
      h5: "block",
      h6: "block",
      hgroup: "block",
      nav: "block",
      section: "block",
      dir: "block",
      dd: "block",
      dl: "block",
      dt: "block",
      ol: "block",
      ul: "block",
      li: "list-item",
      table: "table",
      caption: "table-caption",
      colgroup: "table-column-group",
      col: "table-column",
      thead: "table-header-group",
      tbody: "table-row-group",
      tfoot: "table-footer-group",
      tr: "table-row",
      td: "table-cell",
      th: "table-cell",
      fieldset: "block",
      button: "inline-block",
      details: "block",
      summary: "block",
      dialog: "block",
      meter: "inline-block",
      progress: "inline-block",
      object: "inline-block",
      video: "inline-block",
      audio: "inline-block",
      select: "inline-block",
      option: "block",
      optgroup: "block"
    },
    CSS_DISPLAY_DEFAULT: "inline",
    CSS_WHITE_SPACE_TAGS: {
      listing: "pre",
      plaintext: "pre",
      pre: "pre",
      xmp: "pre",
      nobr: "nowrap",
      table: "initial",
      textarea: "pre-wrap"
    },
    CSS_WHITE_SPACE_DEFAULT: "normal"
  },
      dS = _CSS_DISPLAY_TAGS$CSS.CSS_DISPLAY_TAGS,
      fS = _CSS_DISPLAY_TAGS$CSS.CSS_DISPLAY_DEFAULT,
      hS = _CSS_DISPLAY_TAGS$CSS.CSS_WHITE_SPACE_TAGS,
      mS = _CSS_DISPLAY_TAGS$CSS.CSS_WHITE_SPACE_DEFAULT,
      gS = bS(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]),
      DS = function (e, t) {
    var n = Object.create(null);

    for (var _i69 = 0, _Object$keys22 = Object.keys(e); _i69 < _Object$keys22.length; _i69++) {
      var _r95 = _Object$keys22[_i69];
      n[_r95] = t(e[_r95], _r95);
    }

    return n;
  }(cS, bS),
      yS = new Set(["\t", "\n", "\f", "\r", " "]),
      ES = function ES(e) {
    return e.replace(/[\t\n\f\r ]+$/, "");
  },
      CS = function CS(e) {
    return e.match(/^[\t\n\f\r ]*/)[0];
  };

  function bS(e) {
    var t = Object.create(null);

    var _iterator41 = _createForOfIteratorHelper(e),
        _step41;

    try {
      for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
        var _n91 = _step41.value;
        t[_n91] = !0;
      }
    } catch (err) {
      _iterator41.e(err);
    } finally {
      _iterator41.f();
    }

    return t;
  }

  function vS(e, t) {
    return !("ieConditionalComment" !== e.type || !e.lastChild || e.lastChild.isSelfClosing || e.lastChild.endSourceSpan) || "ieConditionalComment" === e.type && !e.complete || !(!IS(e) || !e.children.some(function (e) {
      return "text" !== e.type && "interpolation" !== e.type;
    })) || !(!VS(e, t) || FS(e) || "interpolation" === e.type);
  }

  function AS(e) {
    if ("attribute" === e.type) return !1;
    if (!e.parent) return !1;
    if ("number" != typeof e.index || 0 === e.index) return !1;
    return function (e) {
      return "comment" === e.type && "prettier-ignore" === e.value.trim();
    }(e.parent.children[e.index - 1]);
  }

  function FS(e) {
    return "element" === e.type && ("script" === e.fullName || "style" === e.fullName || "svg:style" === e.fullName || LS(e) && ("script" === e.name || "style" === e.name));
  }

  function xS(e) {
    return MS(e).startsWith("pre");
  }

  function SS(e) {
    return "element" === e.type && 0 !== e.children.length && (["html", "head", "ul", "ol", "select"].includes(e.name) || e.cssDisplay.startsWith("table") && "table-cell" !== e.cssDisplay);
  }

  function wS(e) {
    return kS(e) || "element" === e.type && "br" === e.fullName || TS(e);
  }

  function TS(e) {
    return BS(e) && NS(e);
  }

  function BS(e) {
    return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : "root" === e.parent.type || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
  }

  function NS(e) {
    return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : "root" === e.parent.type || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
  }

  function kS(e) {
    switch (e.type) {
      case "ieConditionalComment":
      case "comment":
      case "directive":
        return !0;

      case "element":
        return ["script", "select"].includes(e.name);
    }

    return !1;
  }

  function PS(e) {
    var _e$attrMap = e.attrMap,
        t = _e$attrMap.type,
        n = _e$attrMap.lang;
    return "module" === t || "text/javascript" === t || "text/babel" === t || "application/javascript" === t || "jsx" === n ? "babel" : "application/x-typescript" === t || "ts" === n || "tsx" === n ? "typescript" : "text/markdown" === t ? "markdown" : "text/html" === t ? "html" : t && (t.endsWith("json") || t.endsWith("importmap")) ? "json" : "text/x-handlebars-template" === t ? "glimmer" : void 0;
  }

  function OS(e) {
    return "block" === e || "list-item" === e || e.startsWith("table");
  }

  function IS(e) {
    return MS(e).startsWith("pre");
  }

  function LS(e) {
    return "element" === e.type && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
  }

  function MS(e) {
    return "element" === e.type && (!e.namespace || LS(e)) && hS[e.name] || mS;
  }

  var jS = new Set(["template", "style", "script"]);

  function _S(e, t) {
    return RS(e, t) && !jS.has(e.fullName);
  }

  function RS(e, t) {
    return "vue" === t.parser && "element" === e.type && "root" === e.parent.type && "html" !== e.fullName.toLowerCase();
  }

  function VS(e, t) {
    return RS(e, t) && (_S(e, t) || e.attrMap.lang && "html" !== e.attrMap.lang);
  }

  var $S = {
    HTML_ELEMENT_ATTRIBUTES: DS,
    HTML_TAGS: gS,
    htmlTrim: function htmlTrim(e) {
      return function (e) {
        return e.replace(/^[\t\n\f\r ]+/, "");
      }(ES(e));
    },
    htmlTrimPreserveIndentation: function htmlTrimPreserveIndentation(e) {
      return function (e) {
        return e.replace(/^[\t\f\r ]*?\n/g, "");
      }(ES(e));
    },
    splitByHtmlWhitespace: function splitByHtmlWhitespace(e) {
      return e.split(/[\t\n\f\r ]+/);
    },
    hasHtmlWhitespace: function hasHtmlWhitespace(e) {
      return /[\t\n\f\r ]/.test(e);
    },
    getLeadingAndTrailingHtmlWhitespace: function getLeadingAndTrailingHtmlWhitespace(e) {
      var _e$match = e.match(/^([\t\n\f\r ]*)([\S\s]*?)([\t\n\f\r ]*)$/),
          _e$match2 = _slicedToArray(_e$match, 4),
          t = _e$match2[1],
          n = _e$match2[2],
          r = _e$match2[3];

      return {
        leadingWhitespace: t,
        trailingWhitespace: r,
        text: n
      };
    },
    canHaveInterpolation: function canHaveInterpolation(e) {
      return e.children && !FS(e);
    },
    countChars: function countChars(e, t) {
      var n = 0;

      for (var _r96 = 0; _r96 < e.length; _r96++) {
        e[_r96] === t && n++;
      }

      return n;
    },
    countParents: function countParents(e, t) {
      var n = 0;

      for (var _r97 = e.stack.length - 1; _r97 >= 0; _r97--) {
        var _o51 = e.stack[_r97];
        _o51 && "object" == _typeof(_o51) && !Array.isArray(_o51) && t(_o51) && n++;
      }

      return n;
    },
    dedentString: function dedentString(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (e) {
        var t = 1 / 0;

        var _iterator42 = _createForOfIteratorHelper(e.split("\n")),
            _step42;

        try {
          for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
            var _n92 = _step42.value;
            if (0 === _n92.length) continue;
            if (!yS.has(_n92[0])) return 0;
            var _e137 = CS(_n92).length;
            _n92.length !== _e137 && _e137 < t && (t = _e137);
          }
        } catch (err) {
          _iterator42.e(err);
        } finally {
          _iterator42.f();
        }

        return t === 1 / 0 ? 0 : t;
      }(e);
      return 0 === t ? e : e.split("\n").map(function (e) {
        return e.slice(t);
      }).join("\n");
    },
    forceBreakChildren: SS,
    forceBreakContent: function forceBreakContent(e) {
      return SS(e) || "element" === e.type && 0 !== e.children.length && (["body", "script", "style"].includes(e.name) || e.children.some(function (e) {
        return function (e) {
          return e.children && e.children.some(function (e) {
            return "text" !== e.type;
          });
        }(e);
      })) || e.firstChild && e.firstChild === e.lastChild && "text" !== e.firstChild.type && BS(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || NS(e.lastChild));
    },
    forceNextEmptyLine: function forceNextEmptyLine(e) {
      return pS(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
    },
    getLastDescendant: function e(t) {
      return t.lastChild ? e(t.lastChild) : t;
    },
    getNodeCssStyleDisplay: function getNodeCssStyleDisplay(e, t) {
      if (e.prev && "comment" === e.prev.type) {
        var _t107 = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);

        if (_t107) return _t107[1];
      }

      var n = !1;

      if ("element" === e.type && "svg" === e.namespace) {
        if (!function (e, t) {
          var n = e;

          for (; n;) {
            if (t(n)) return !0;
            n = n.parent;
          }

          return !1;
        }(e, function (e) {
          return "svg:foreignObject" === e.fullName;
        })) return "svg" === e.name ? "inline-block" : "block";
        n = !0;
      }

      switch (t.htmlWhitespaceSensitivity) {
        case "strict":
          return "inline";

        case "ignore":
          return "block";

        default:
          return "vue" === t.parser && e.parent && "root" === e.parent.type ? "block" : "element" === e.type && (!e.namespace || n || LS(e)) && dS[e.name] || fS;
      }
    },
    getNodeCssStyleWhiteSpace: MS,
    getPrettierIgnoreAttributeCommentData: function getPrettierIgnoreAttributeCommentData(e) {
      var t = e.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/);
      return !!t && (!t[1] || t[1].split(/\s+/));
    },
    hasPrettierIgnore: AS,
    inferScriptParser: function inferScriptParser(e, t) {
      return "script" !== e.name || e.attrMap.src ? "style" === e.name ? function (e) {
        var t = e.attrMap.lang;
        return t && "postcss" !== t && "css" !== t ? "scss" === t ? "scss" : "less" === t ? "less" : void 0 : "css";
      }(e) : t && VS(e, t) ? PS(e) || !("src" in e.attrMap) && lS(e.attrMap.lang, t) : void 0 : e.attrMap.lang || e.attrMap.type ? PS(e) : "babel";
    },
    isVueCustomBlock: _S,
    isVueNonHtmlBlock: VS,
    isVueSlotAttribute: function isVueSlotAttribute(e) {
      var t = e.fullName;
      return "#" === t.charAt(0) || "slot-scope" === t || "v-slot" === t || t.startsWith("v-slot:");
    },
    isVueSfcBindingsAttribute: function isVueSfcBindingsAttribute(e, t) {
      var n = e.parent;
      if (!RS(n, t)) return !1;
      var r = n.fullName,
          o = e.fullName;
      return "script" === r && "setup" === o || "style" === r && "vars" === o;
    },
    isDanglingSpaceSensitiveNode: function isDanglingSpaceSensitiveNode(e) {
      return !(t = e.cssDisplay, OS(t) || "inline-block" === t || FS(e));
      var t;
    },
    isIndentationSensitiveNode: xS,
    isLeadingSpaceSensitiveNode: function isLeadingSpaceSensitiveNode(e, t) {
      var n = function () {
        if (pS(e)) return !1;
        if (("text" === e.type || "interpolation" === e.type) && e.prev && ("text" === e.prev.type || "interpolation" === e.prev.type)) return !0;
        if (!e.parent || "none" === e.parent.cssDisplay) return !1;
        if (IS(e.parent)) return !0;
        if (!e.prev && ("root" === e.parent.type || IS(e) && e.parent || FS(e.parent) || _S(e.parent, t) || (n = e.parent.cssDisplay, OS(n) || "inline-block" === n))) return !1;
        var n;
        if (e.prev && !function (e) {
          return !OS(e);
        }(e.prev.cssDisplay)) return !1;
        return !0;
      }();

      return n && !e.prev && e.parent && e.parent.tagDefinition && e.parent.tagDefinition.ignoreFirstLf ? "interpolation" === e.type : n;
    },
    isPreLikeNode: IS,
    isScriptLikeTag: FS,
    isTextLikeNode: function isTextLikeNode(e) {
      return "text" === e.type || "comment" === e.type;
    },
    isTrailingSpaceSensitiveNode: function isTrailingSpaceSensitiveNode(e, t) {
      return !pS(e) && (!("text" !== e.type && "interpolation" !== e.type || !e.next || "text" !== e.next.type && "interpolation" !== e.next.type) || !(!e.parent || "none" === e.parent.cssDisplay) && (!!IS(e.parent) || !(!e.next && ("root" === e.parent.type || IS(e) && e.parent || FS(e.parent) || _S(e.parent, t) || (n = e.parent.cssDisplay, OS(n) || "inline-block" === n))) && !(e.next && !function (e) {
        return !OS(e);
      }(e.next.cssDisplay))));
      var n;
    },
    isWhitespaceSensitiveNode: function isWhitespaceSensitiveNode(e) {
      return FS(e) || "interpolation" === e.type || xS(e);
    },
    isUnknownNamespace: LS,
    preferHardlineAsLeadingSpaces: function preferHardlineAsLeadingSpaces(e) {
      return kS(e) || e.prev && wS(e.prev) || TS(e);
    },
    preferHardlineAsTrailingSpaces: wS,
    shouldNotPrintClosingTag: function shouldNotPrintClosingTag(e, t) {
      return !e.isSelfClosing && !e.endSourceSpan && (AS(e) || vS(e.parent, t));
    },
    shouldPreserveContent: vS,
    unescapeQuoteEntities: function unescapeQuoteEntities(e) {
      return e.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
    }
  },
      qS = je(function (e, t) {
    function n(e) {
      return t.$0 <= e && e <= t.$9;
    }
    /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.$EOF = 0, t.$BSPACE = 8, t.$TAB = 9, t.$LF = 10, t.$VTAB = 11, t.$FF = 12, t.$CR = 13, t.$SPACE = 32, t.$BANG = 33, t.$DQ = 34, t.$HASH = 35, t.$$ = 36, t.$PERCENT = 37, t.$AMPERSAND = 38, t.$SQ = 39, t.$LPAREN = 40, t.$RPAREN = 41, t.$STAR = 42, t.$PLUS = 43, t.$COMMA = 44, t.$MINUS = 45, t.$PERIOD = 46, t.$SLASH = 47, t.$COLON = 58, t.$SEMICOLON = 59, t.$LT = 60, t.$EQ = 61, t.$GT = 62, t.$QUESTION = 63, t.$0 = 48, t.$7 = 55, t.$9 = 57, t.$A = 65, t.$E = 69, t.$F = 70, t.$X = 88, t.$Z = 90, t.$LBRACKET = 91, t.$BACKSLASH = 92, t.$RBRACKET = 93, t.$CARET = 94, t.$_ = 95, t.$a = 97, t.$b = 98, t.$e = 101, t.$f = 102, t.$n = 110, t.$r = 114, t.$t = 116, t.$u = 117, t.$v = 118, t.$x = 120, t.$z = 122, t.$LBRACE = 123, t.$BAR = 124, t.$RBRACE = 125, t.$NBSP = 160, t.$PIPE = 124, t.$TILDA = 126, t.$AT = 64, t.$BT = 96, t.isWhitespace = function (e) {
      return e >= t.$TAB && e <= t.$SPACE || e == t.$NBSP;
    }, t.isDigit = n, t.isAsciiLetter = function (e) {
      return e >= t.$a && e <= t.$z || e >= t.$A && e <= t.$Z;
    }, t.isAsciiHexDigit = function (e) {
      return e >= t.$a && e <= t.$f || e >= t.$A && e <= t.$F || n(e);
    }, t.isNewLine = function (e) {
      return e === t.$LF || e === t.$CR;
    }, t.isOctalDigit = function (e) {
      return t.$0 <= e && e <= t.$7;
    };
  }),
      WS = je(function (e, t) {
    /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function () {
      function n(e, t, _n93) {
        _classCallCheck(this, n);

        this.filePath = e, this.name = t, this.members = _n93;
      }

      _createClass(n, [{
        key: "assertNoMembers",
        value: function assertNoMembers() {
          if (this.members.length) throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), "."));
        }
      }]);

      return n;
    }();

    t.StaticSymbol = n;

    t.StaticSymbolCache = /*#__PURE__*/function () {
      function _class() {
        _classCallCheck(this, _class);

        this.cache = new Map();
      }

      _createClass(_class, [{
        key: "get",
        value: function get(e, t, r) {
          var o = (r = r || []).length ? ".".concat(r.join(".")) : "",
              u = '"'.concat(e, '".').concat(t).concat(o);
          var i = this.cache.get(u);
          return i || (i = new n(e, t, r), this.cache.set(u, i)), i;
        }
      }]);

      return _class;
    }();
  }),
      US = je(function (e, t) {
    /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = /-+([a-z0-9])/g;

    function r(e, t, n) {
      var r = e.indexOf(t);
      return -1 == r ? n : [e.slice(0, r).trim(), e.slice(r + 1).trim()];
    }

    function o(e, t, n) {
      return Array.isArray(e) ? t.visitArray(e, n) : "object" == _typeof(r = e) && null !== r && Object.getPrototypeOf(r) === a ? t.visitStringMap(e, n) : null == e || "string" == typeof e || "number" == typeof e || "boolean" == typeof e ? t.visitPrimitive(e, n) : t.visitOther(e, n);
      var r;
    }

    t.dashCaseToCamelCase = function (e) {
      return e.replace(n, function () {
        for (var _len13 = arguments.length, e = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
          e[_key13] = arguments[_key13];
        }

        return e[1].toUpperCase();
      });
    }, t.splitAtColon = function (e, t) {
      return r(e, ":", t);
    }, t.splitAtPeriod = function (e, t) {
      return r(e, ".", t);
    }, t.visitValue = o, t.isDefined = function (e) {
      return null != e;
    }, t.noUndefined = function (e) {
      return void 0 === e ? null : e;
    };
    t.ValueTransformer = /*#__PURE__*/function () {
      function _class2() {
        _classCallCheck(this, _class2);
      }

      _createClass(_class2, [{
        key: "visitArray",
        value: function visitArray(e, t) {
          var _this8 = this;

          return e.map(function (e) {
            return o(e, _this8, t);
          });
        }
      }, {
        key: "visitStringMap",
        value: function visitStringMap(e, t) {
          var _this9 = this;

          var n = {};
          return Object.keys(e).forEach(function (r) {
            n[r] = o(e[r], _this9, t);
          }), n;
        }
      }, {
        key: "visitPrimitive",
        value: function visitPrimitive(e, t) {
          return e;
        }
      }, {
        key: "visitOther",
        value: function visitOther(e, t) {
          return e;
        }
      }]);

      return _class2;
    }(), t.SyncAsync = {
      assertSync: function assertSync(e) {
        if (s(e)) throw new Error("Illegal state: value cannot be a promise");
        return e;
      },
      then: function then(e, t) {
        return s(e) ? e.then(t) : t(e);
      },
      all: function all(e) {
        return e.some(s) ? Promise.all(e) : e;
      }
    }, t.error = function (e) {
      throw new Error("Internal Error: ".concat(e));
    }, t.syntaxError = function (e, t) {
      var n = Error(e);
      return n[u] = !0, t && (n[i] = t), n;
    };
    var u = "ngSyntaxError",
        i = "ngParseErrors";
    t.isSyntaxError = function (e) {
      return e[u];
    }, t.getParseErrors = function (e) {
      return e[i] || [];
    }, t.escapeRegExp = function (e) {
      return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    };
    var a = Object.getPrototypeOf({});

    function s(e) {
      return !!e && "function" == typeof e.then;
    }

    t.utf8Encode = function (e) {
      var t = "";

      for (var _n94 = 0; _n94 < e.length; _n94++) {
        var _r98 = e.charCodeAt(_n94);

        if (_r98 >= 55296 && _r98 <= 56319 && e.length > _n94 + 1) {
          var _t108 = e.charCodeAt(_n94 + 1);

          _t108 >= 56320 && _t108 <= 57343 && (_n94++, _r98 = (_r98 - 55296 << 10) + _t108 - 56320 + 65536);
        }

        _r98 <= 127 ? t += String.fromCharCode(_r98) : _r98 <= 2047 ? t += String.fromCharCode(_r98 >> 6 & 31 | 192, 63 & _r98 | 128) : _r98 <= 65535 ? t += String.fromCharCode(_r98 >> 12 | 224, _r98 >> 6 & 63 | 128, 63 & _r98 | 128) : _r98 <= 2097151 && (t += String.fromCharCode(_r98 >> 18 & 7 | 240, _r98 >> 12 & 63 | 128, _r98 >> 6 & 63 | 128, 63 & _r98 | 128));
      }

      return t;
    }, t.stringify = function e(t) {
      if ("string" == typeof t) return t;
      if (t instanceof Array) return "[" + t.map(e).join(", ") + "]";
      if (null == t) return "" + t;
      if (t.overriddenName) return "".concat(t.overriddenName);
      if (t.name) return "".concat(t.name);
      if (!t.toString) return "object";
      var n = t.toString();
      if (null == n) return "" + n;
      var r = n.indexOf("\n");
      return -1 === r ? n : n.substring(0, r);
    }, t.resolveForwardRef = function (e) {
      return "function" == typeof e && e.hasOwnProperty("__forward_ref__") ? e() : e;
    }, t.isPromise = s;

    t.Version = /*#__PURE__*/function () {
      function _class3(e) {
        _classCallCheck(this, _class3);

        this.full = e;
        var t = e.split(".");
        this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join(".");
      }

      return _class3;
    }();

    var c = "undefined" != typeof window && window,
        l = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
        p = void 0 !== Me && Me || c || l;
    t.global = p;
  }),
      JS = je(function (e, t) {
    /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;

    function r(e) {
      return e.replace(/\W/g, "_");
    }

    t.sanitizeIdentifier = r;
    var o = 0;

    function u(e) {
      if (!e || !e.reference) return null;
      var t = e.reference;
      if (t instanceof WS.StaticSymbol) return t.name;
      if (t.__anonymousType) return t.__anonymousType;
      var n = US.stringify(t);
      return n.indexOf("(") >= 0 ? (n = "anonymous_".concat(o++), t.__anonymousType = n) : n = r(n), n;
    }

    var i;
    t.identifierName = u, t.identifierModuleUrl = function (e) {
      var t = e.reference;
      return t instanceof WS.StaticSymbol ? t.filePath : "./".concat(US.stringify(t));
    }, t.viewClassName = function (e, t) {
      return "View_".concat(u({
        reference: e
      }), "_").concat(t);
    }, t.rendererTypeName = function (e) {
      return "RenderType_".concat(u({
        reference: e
      }));
    }, t.hostViewClassName = function (e) {
      return "HostView_".concat(u({
        reference: e
      }));
    }, t.componentFactoryName = function (e) {
      return "".concat(u({
        reference: e
      }), "NgFactory");
    }, function (e) {
      e[e.Pipe = 0] = "Pipe", e[e.Directive = 1] = "Directive", e[e.NgModule = 2] = "NgModule", e[e.Injectable = 3] = "Injectable";
    }(i = t.CompileSummaryKind || (t.CompileSummaryKind = {})), t.tokenName = function (e) {
      return null != e.value ? r(e.value) : u(e.identifier);
    }, t.tokenReference = function (e) {
      return null != e.identifier ? e.identifier.reference : e.value;
    };

    t.CompileStylesheetMetadata = /*#__PURE__*/function () {
      function _class4() {
        var _ref44 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref44.moduleUrl,
            t = _ref44.styles,
            n = _ref44.styleUrls;

        _classCallCheck(this, _class4);

        this.moduleUrl = e || null, this.styles = s(t), this.styleUrls = s(n);
      }

      return _class4;
    }();

    t.CompileTemplateMetadata = /*#__PURE__*/function () {
      function _class5(_ref45) {
        var e = _ref45.encapsulation,
            t = _ref45.template,
            n = _ref45.templateUrl,
            r = _ref45.htmlAst,
            o = _ref45.styles,
            u = _ref45.styleUrls,
            i = _ref45.externalStylesheets,
            a = _ref45.animations,
            l = _ref45.ngContentSelectors,
            p = _ref45.interpolation,
            d = _ref45.isInline,
            f = _ref45.preserveWhitespaces;

        _classCallCheck(this, _class5);

        if (this.encapsulation = e, this.template = t, this.templateUrl = n, this.htmlAst = r, this.styles = s(o), this.styleUrls = s(u), this.externalStylesheets = s(i), this.animations = a ? c(a) : [], this.ngContentSelectors = l || [], p && 2 != p.length) throw new Error("'interpolation' should have a start and an end symbol.");
        this.interpolation = p, this.isInline = d, this.preserveWhitespaces = f;
      }

      _createClass(_class5, [{
        key: "toSummary",
        value: function toSummary() {
          return {
            ngContentSelectors: this.ngContentSelectors,
            encapsulation: this.encapsulation,
            styles: this.styles,
            animations: this.animations
          };
        }
      }]);

      return _class5;
    }();

    var a = /*#__PURE__*/function () {
      function a(_ref46) {
        var e = _ref46.isHost,
            t = _ref46.type,
            n = _ref46.isComponent,
            r = _ref46.selector,
            o = _ref46.exportAs,
            u = _ref46.changeDetection,
            i = _ref46.inputs,
            _a15 = _ref46.outputs,
            c = _ref46.hostListeners,
            l = _ref46.hostProperties,
            p = _ref46.hostAttributes,
            d = _ref46.providers,
            f = _ref46.viewProviders,
            h = _ref46.queries,
            m = _ref46.guards,
            g = _ref46.viewQueries,
            D = _ref46.entryComponents,
            y = _ref46.template,
            E = _ref46.componentViewType,
            C = _ref46.rendererType,
            b = _ref46.componentFactory;

        _classCallCheck(this, a);

        this.isHost = !!e, this.type = t, this.isComponent = n, this.selector = r, this.exportAs = o, this.changeDetection = u, this.inputs = i, this.outputs = _a15, this.hostListeners = c, this.hostProperties = l, this.hostAttributes = p, this.providers = s(d), this.viewProviders = s(f), this.queries = s(h), this.guards = m, this.viewQueries = s(g), this.entryComponents = s(D), this.template = y, this.componentViewType = E, this.rendererType = C, this.componentFactory = b;
      }

      _createClass(a, [{
        key: "toSummary",
        value: function toSummary() {
          return {
            summaryKind: i.Directive,
            type: this.type,
            isComponent: this.isComponent,
            selector: this.selector,
            exportAs: this.exportAs,
            inputs: this.inputs,
            outputs: this.outputs,
            hostListeners: this.hostListeners,
            hostProperties: this.hostProperties,
            hostAttributes: this.hostAttributes,
            providers: this.providers,
            viewProviders: this.viewProviders,
            queries: this.queries,
            guards: this.guards,
            viewQueries: this.viewQueries,
            entryComponents: this.entryComponents,
            changeDetection: this.changeDetection,
            template: this.template && this.template.toSummary(),
            componentViewType: this.componentViewType,
            rendererType: this.rendererType,
            componentFactory: this.componentFactory
          };
        }
      }], [{
        key: "create",
        value: function create(_ref47) {
          var e = _ref47.isHost,
              t = _ref47.type,
              r = _ref47.isComponent,
              o = _ref47.selector,
              u = _ref47.exportAs,
              i = _ref47.changeDetection,
              s = _ref47.inputs,
              c = _ref47.outputs,
              l = _ref47.host,
              p = _ref47.providers,
              d = _ref47.viewProviders,
              f = _ref47.queries,
              h = _ref47.guards,
              m = _ref47.viewQueries,
              g = _ref47.entryComponents,
              D = _ref47.template,
              y = _ref47.componentViewType,
              E = _ref47.rendererType,
              C = _ref47.componentFactory;
          var b = {},
              v = {},
              A = {};
          null != l && Object.keys(l).forEach(function (e) {
            var t = l[e],
                r = e.match(n);
            null === r ? A[e] = t : null != r[1] ? v[r[1]] = t : null != r[2] && (b[r[2]] = t);
          });
          var F = {};
          null != s && s.forEach(function (e) {
            var t = US.splitAtColon(e, [e, e]);
            F[t[0]] = t[1];
          });
          var x = {};
          return null != c && c.forEach(function (e) {
            var t = US.splitAtColon(e, [e, e]);
            x[t[0]] = t[1];
          }), new a({
            isHost: e,
            type: t,
            isComponent: !!r,
            selector: o,
            exportAs: u,
            changeDetection: i,
            inputs: F,
            outputs: x,
            hostListeners: b,
            hostProperties: v,
            hostAttributes: A,
            providers: p,
            viewProviders: d,
            queries: f,
            guards: h,
            viewQueries: m,
            entryComponents: g,
            template: D,
            componentViewType: y,
            rendererType: E,
            componentFactory: C
          });
        }
      }]);

      return a;
    }();

    t.CompileDirectiveMetadata = a;

    t.CompilePipeMetadata = /*#__PURE__*/function () {
      function _class6(_ref48) {
        var e = _ref48.type,
            t = _ref48.name,
            n = _ref48.pure;

        _classCallCheck(this, _class6);

        this.type = e, this.name = t, this.pure = !!n;
      }

      _createClass(_class6, [{
        key: "toSummary",
        value: function toSummary() {
          return {
            summaryKind: i.Pipe,
            type: this.type,
            name: this.name,
            pure: this.pure
          };
        }
      }]);

      return _class6;
    }();

    t.CompileShallowModuleMetadata = /*#__PURE__*/function () {
      function _class7() {
        _classCallCheck(this, _class7);
      }

      return _class7;
    }();

    t.CompileNgModuleMetadata = /*#__PURE__*/function () {
      function _class8(_ref49) {
        var e = _ref49.type,
            t = _ref49.providers,
            n = _ref49.declaredDirectives,
            r = _ref49.exportedDirectives,
            o = _ref49.declaredPipes,
            u = _ref49.exportedPipes,
            i = _ref49.entryComponents,
            a = _ref49.bootstrapComponents,
            c = _ref49.importedModules,
            l = _ref49.exportedModules,
            p = _ref49.schemas,
            d = _ref49.transitiveModule,
            f = _ref49.id;

        _classCallCheck(this, _class8);

        this.type = e || null, this.declaredDirectives = s(n), this.exportedDirectives = s(r), this.declaredPipes = s(o), this.exportedPipes = s(u), this.providers = s(t), this.entryComponents = s(i), this.bootstrapComponents = s(a), this.importedModules = s(c), this.exportedModules = s(l), this.schemas = s(p), this.id = f || null, this.transitiveModule = d || null;
      }

      _createClass(_class8, [{
        key: "toSummary",
        value: function toSummary() {
          var e = this.transitiveModule;
          return {
            summaryKind: i.NgModule,
            type: this.type,
            entryComponents: e.entryComponents,
            providers: e.providers,
            modules: e.modules,
            exportedDirectives: e.exportedDirectives,
            exportedPipes: e.exportedPipes
          };
        }
      }]);

      return _class8;
    }();

    function s(e) {
      return e || [];
    }

    t.TransitiveCompileNgModuleMetadata = /*#__PURE__*/function () {
      function _class9() {
        _classCallCheck(this, _class9);

        this.directivesSet = new Set(), this.directives = [], this.exportedDirectivesSet = new Set(), this.exportedDirectives = [], this.pipesSet = new Set(), this.pipes = [], this.exportedPipesSet = new Set(), this.exportedPipes = [], this.modulesSet = new Set(), this.modules = [], this.entryComponentsSet = new Set(), this.entryComponents = [], this.providers = [];
      }

      _createClass(_class9, [{
        key: "addProvider",
        value: function addProvider(e, t) {
          this.providers.push({
            provider: e,
            module: t
          });
        }
      }, {
        key: "addDirective",
        value: function addDirective(e) {
          this.directivesSet.has(e.reference) || (this.directivesSet.add(e.reference), this.directives.push(e));
        }
      }, {
        key: "addExportedDirective",
        value: function addExportedDirective(e) {
          this.exportedDirectivesSet.has(e.reference) || (this.exportedDirectivesSet.add(e.reference), this.exportedDirectives.push(e));
        }
      }, {
        key: "addPipe",
        value: function addPipe(e) {
          this.pipesSet.has(e.reference) || (this.pipesSet.add(e.reference), this.pipes.push(e));
        }
      }, {
        key: "addExportedPipe",
        value: function addExportedPipe(e) {
          this.exportedPipesSet.has(e.reference) || (this.exportedPipesSet.add(e.reference), this.exportedPipes.push(e));
        }
      }, {
        key: "addModule",
        value: function addModule(e) {
          this.modulesSet.has(e.reference) || (this.modulesSet.add(e.reference), this.modules.push(e));
        }
      }, {
        key: "addEntryComponent",
        value: function addEntryComponent(e) {
          this.entryComponentsSet.has(e.componentType) || (this.entryComponentsSet.add(e.componentType), this.entryComponents.push(e));
        }
      }]);

      return _class9;
    }();

    function c(e) {
      return e.reduce(function (e, t) {
        var n = Array.isArray(t) ? c(t) : t;
        return e.concat(n);
      }, []);
    }

    function l(e) {
      return e.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
    }

    t.ProviderMeta = /*#__PURE__*/function () {
      function _class10(e, _ref50) {
        var t = _ref50.useClass,
            n = _ref50.useValue,
            r = _ref50.useExisting,
            o = _ref50.useFactory,
            u = _ref50.deps,
            i = _ref50.multi;

        _classCallCheck(this, _class10);

        this.token = e, this.useClass = t || null, this.useValue = n, this.useExisting = r, this.useFactory = o || null, this.dependencies = u || null, this.multi = !!i;
      }

      return _class10;
    }(), t.flatten = c, t.templateSourceUrl = function (e, t, n) {
      var r;
      return r = n.isInline ? t.type.reference instanceof WS.StaticSymbol ? "".concat(t.type.reference.filePath, ".").concat(t.type.reference.name, ".html") : "".concat(u(e), "/").concat(u(t.type), ".html") : n.templateUrl, t.type.reference instanceof WS.StaticSymbol ? r : l(r);
    }, t.sharedStylesheetJitUrl = function (e, t) {
      var n = e.moduleUrl.split(/\/\\/g),
          r = n[n.length - 1];
      return l("css/".concat(t).concat(r, ".ngstyle.js"));
    }, t.ngModuleJitUrl = function (e) {
      return l("".concat(u(e.type), "/module.ngfactory.js"));
    }, t.templateJitUrl = function (e, t) {
      return l("".concat(u(e), "/").concat(u(t.type), ".ngfactory.js"));
    };
  }),
      zS = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

    var n = /*#__PURE__*/function () {
      function n(e, t, _n95, r) {
        _classCallCheck(this, n);

        this.file = e, this.offset = t, this.line = _n95, this.col = r;
      }

      _createClass(n, [{
        key: "toString",
        value: function toString() {
          return null != this.offset ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url;
        }
      }, {
        key: "moveBy",
        value: function moveBy(e) {
          var t = this.file.content,
              r = t.length;
          var o = this.offset,
              u = this.line,
              i = this.col;

          for (; o > 0 && e < 0;) {
            o--, e++;

            if (t.charCodeAt(o) == qS.$LF) {
              u--;

              var _e138 = t.substr(0, o - 1).lastIndexOf(String.fromCharCode(qS.$LF));

              i = _e138 > 0 ? o - _e138 : o;
            } else i--;
          }

          for (; o < r && e > 0;) {
            var _n98 = t.charCodeAt(o);

            o++, e--, _n98 == qS.$LF ? (u++, i = 0) : i++;
          }

          return new n(this.file, o, u, i);
        }
      }, {
        key: "getContext",
        value: function getContext(e, t) {
          var _n97 = this.file.content;
          var r = this.offset;

          if (null != r) {
            r > _n97.length - 1 && (r = _n97.length - 1);
            var _o52 = r,
                _u49 = 0,
                _i70 = 0;

            for (; _u49 < e && r > 0 && (r--, _u49++, "\n" != _n97[r] || ++_i70 != t);) {
              ;
            }

            for (_u49 = 0, _i70 = 0; _u49 < e && _o52 < _n97.length - 1 && (_o52++, _u49++, "\n" != _n97[_o52] || ++_i70 != t);) {
              ;
            }

            return {
              before: _n97.substring(r, this.offset),
              after: _n97.substring(this.offset, _o52 + 1)
            };
          }

          return null;
        }
      }]);

      return n;
    }();

    t.ParseLocation = n;

    var r = function r(e, t) {
      _classCallCheck(this, r);

      this.content = e, this.url = t;
    };

    t.ParseSourceFile = r;

    var o = /*#__PURE__*/function () {
      function o(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, o);

        this.start = e, this.end = t, this.details = n;
      }

      _createClass(o, [{
        key: "toString",
        value: function toString() {
          return this.start.file.content.substring(this.start.offset, this.end.offset);
        }
      }]);

      return o;
    }();

    var u;
    t.ParseSourceSpan = o, t.EMPTY_PARSE_LOCATION = new n(new r("", ""), 0, 0, 0), t.EMPTY_SOURCE_SPAN = new o(t.EMPTY_PARSE_LOCATION, t.EMPTY_PARSE_LOCATION), function (e) {
      e[e.WARNING = 0] = "WARNING", e[e.ERROR = 1] = "ERROR";
    }(u = t.ParseErrorLevel || (t.ParseErrorLevel = {}));
    t.ParseError = /*#__PURE__*/function () {
      function _class11(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : u.ERROR;

        _classCallCheck(this, _class11);

        this.span = e, this.msg = t, this.level = n;
      }

      _createClass(_class11, [{
        key: "contextualMessage",
        value: function contextualMessage() {
          var e = this.span.start.getContext(100, 3);
          return e ? "".concat(this.msg, ' ("').concat(e.before, "[").concat(u[this.level], " ->]").concat(e.after, '")') : this.msg;
        }
      }, {
        key: "toString",
        value: function toString() {
          var e = this.span.details ? ", ".concat(this.span.details) : "";
          return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(e);
        }
      }]);

      return _class11;
    }(), t.typeSourceSpan = function (e, t) {
      var u = JS.identifierModuleUrl(t),
          i = null != u ? "in ".concat(e, " ").concat(JS.identifierName(t), " in ").concat(u) : "in ".concat(e, " ").concat(JS.identifierName(t)),
          a = new r("", i);
      return new o(new n(a, -1, -1, -1), new n(a, -1, -1, -1));
    }, t.r3JitTypeSourceSpan = function (e, t, u) {
      var i = "in ".concat(e, " ").concat(t, " in ").concat(u),
          a = new r("", i);
      return new o(new n(a, -1, -1, -1), new n(a, -1, -1, -1));
    };
  });
  var HS = zS.ParseSourceSpan,
      GS = $S.htmlTrim,
      XS = $S.getLeadingAndTrailingHtmlWhitespace,
      YS = $S.hasHtmlWhitespace,
      KS = $S.canHaveInterpolation,
      QS = $S.getNodeCssStyleDisplay,
      ZS = $S.isDanglingSpaceSensitiveNode,
      ew = $S.isIndentationSensitiveNode,
      tw = $S.isLeadingSpaceSensitiveNode,
      nw = $S.isTrailingSpaceSensitiveNode,
      rw = $S.isWhitespaceSensitiveNode,
      ow = [function (e) {
    return e.map(function (e) {
      if ("element" === e.type && e.tagDefinition.ignoreFirstLf && 0 !== e.children.length && "text" === e.children[0].type && "\n" === e.children[0].value[0]) {
        var _e$children2 = _toArray(e.children),
            _t109 = _e$children2[0],
            _n99 = _e$children2.slice(1);

        return e.clone({
          children: 1 === _t109.value.length ? _n99 : [_t109.clone({
            value: _t109.value.slice(1)
          })].concat(_toConsumableArray(_n99))
        });
      }

      return e;
    });
  }, function (e) {
    var t = function t(e) {
      return "element" === e.type && e.prev && "ieConditionalStartComment" === e.prev.type && e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset && e.firstChild && "ieConditionalEndComment" === e.firstChild.type && e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset;
    };

    return e.map(function (e) {
      if (e.children) {
        var _n100 = e.children.map(t);

        if (_n100.some(Boolean)) {
          var _t110 = [];

          for (var _r99 = 0; _r99 < e.children.length; _r99++) {
            var _o53 = e.children[_r99];
            if (!_n100[_r99 + 1]) if (_n100[_r99]) {
              var _e139 = _o53.prev,
                  _n101 = _o53.firstChild,
                  _r100 = new HS(_e139.sourceSpan.start, _n101.sourceSpan.end),
                  _u50 = new HS(_r100.start, _o53.sourceSpan.end);

              _t110.push(_o53.clone({
                condition: _e139.condition,
                sourceSpan: _u50,
                startSourceSpan: _r100,
                children: _o53.children.slice(1)
              }));
            } else _t110.push(_o53);
          }

          return e.clone({
            children: _t110
          });
        }
      }

      return e;
    });
  }, function (e) {
    return function (e, t, n) {
      return e.map(function (e) {
        if (e.children) {
          var _r101 = e.children.map(t);

          if (_r101.some(Boolean)) {
            var _t111 = [];

            for (var _o54 = 0; _o54 < e.children.length; _o54++) {
              var _u51 = e.children[_o54];

              if ("text" !== _u51.type && !_r101[_o54]) {
                _t111.push(_u51);

                continue;
              }

              var _i71 = "text" === _u51.type ? _u51 : _u51.clone({
                type: "text",
                value: n(_u51)
              });

              if (0 === _t111.length || "text" !== _t111[_t111.length - 1].type) {
                _t111.push(_i71);

                continue;
              }

              var _a16 = _t111.pop();

              _t111.push(_a16.clone({
                value: _a16.value + _i71.value,
                sourceSpan: new HS(_a16.sourceSpan.start, _i71.sourceSpan.end)
              }));
            }

            return e.clone({
              children: _t111
            });
          }
        }

        return e;
      });
    }(e, function (e) {
      return "cdata" === e.type;
    }, function (e) {
      return "<![CDATA[".concat(e.value, "]]>");
    });
  }, function (e, t) {
    if ("html" === t.parser) return e;
    var n = /{{([\S\s]+?)}}/g;
    return e.map(function (e) {
      if (!KS(e)) return e;
      var t = [];

      var _iterator43 = _createForOfIteratorHelper(e.children),
          _step43;

      try {
        for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
          var _r102 = _step43.value;

          if ("text" !== _r102.type) {
            t.push(_r102);
            continue;
          }

          var _e140 = _r102.sourceSpan.start,
              _o55 = null;

          var _u52 = _r102.value.split(n);

          for (var _n102 = 0; _n102 < _u52.length; _n102++, _e140 = _o55) {
            var _r103 = _u52[_n102];
            _n102 % 2 != 0 ? (_o55 = _e140.moveBy(_r103.length + 4), t.push({
              type: "interpolation",
              sourceSpan: new HS(_e140, _o55),
              children: 0 === _r103.length ? [] : [{
                type: "text",
                value: _r103,
                sourceSpan: new HS(_e140.moveBy(2), _o55.moveBy(-2))
              }]
            })) : (_o55 = _e140.moveBy(_r103.length), 0 !== _r103.length && t.push({
              type: "text",
              value: _r103,
              sourceSpan: new HS(_e140, _o55)
            }));
          }
        }
      } catch (err) {
        _iterator43.e(err);
      } finally {
        _iterator43.f();
      }

      return e.clone({
        children: t
      });
    });
  }, function (e) {
    var t = "whitespace";
    return e.map(function (e) {
      if (!e.children) return e;
      if (0 === e.children.length || 1 === e.children.length && "text" === e.children[0].type && 0 === GS(e.children[0].value).length) return e.clone({
        children: [],
        hasDanglingSpaces: 0 !== e.children.length
      });
      var n = rw(e),
          r = ew(e);
      return e.clone({
        isWhitespaceSensitive: n,
        isIndentationSensitive: r,
        children: e.children.reduce(function (e, r) {
          if ("text" !== r.type || n) return e.concat(r);

          var o = [],
              _XS = XS(r.value),
              u = _XS.leadingWhitespace,
              i = _XS.text,
              a = _XS.trailingWhitespace;

          return u && o.push({
            type: t
          }), i && o.push({
            type: "text",
            value: i,
            sourceSpan: new HS(r.sourceSpan.start.moveBy(u.length), r.sourceSpan.end.moveBy(-a.length))
          }), a && o.push({
            type: t
          }), e.concat(o);
        }, []).reduce(function (e, n, r, o) {
          if (n.type === t) return e;
          var u = 0 !== r && o[r - 1].type === t,
              i = r !== o.length - 1 && o[r + 1].type === t;
          return e.concat(Object.assign({}, n, {
            hasLeadingSpaces: u,
            hasTrailingSpaces: i
          }));
        }, [])
      });
    });
  }, function (e, t) {
    return e.map(function (e) {
      return Object.assign(e, {
        cssDisplay: QS(e, t)
      });
    });
  }, function (e) {
    return e.map(function (e) {
      return Object.assign(e, {
        isSelfClosing: !e.children || "element" === e.type && (e.tagDefinition.isVoid || e.startSourceSpan === e.endSourceSpan)
      });
    });
  }, function (e, t) {
    return e.map(function (e) {
      return "element" !== e.type ? e : Object.assign(e, {
        hasHtmComponentClosingTag: e.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset))
      });
    });
  }, function (e, t) {
    return e.map(function (e) {
      return e.children ? 0 === e.children.length ? e.clone({
        isDanglingSpaceSensitive: ZS(e)
      }) : e.clone({
        children: e.children.map(function (e) {
          return Object.assign({}, e, {
            isLeadingSpaceSensitive: tw(e, t),
            isTrailingSpaceSensitive: nw(e, t)
          });
        }).map(function (e, t, n) {
          return Object.assign({}, e, {
            isLeadingSpaceSensitive: (0 === t || n[t - 1].isTrailingSpaceSensitive) && e.isLeadingSpaceSensitive,
            isTrailingSpaceSensitive: (t === n.length - 1 || n[t + 1].isLeadingSpaceSensitive) && e.isTrailingSpaceSensitive
          });
        })
      }) : e;
    });
  }, function (e) {
    var t = function t(e) {
      return "element" === e.type && 0 === e.attrs.length && 1 === e.children.length && "text" === e.firstChild.type && !YS(e.children[0].value) && !e.firstChild.hasLeadingSpaces && !e.firstChild.hasTrailingSpaces && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces && e.prev && "text" === e.prev.type && e.next && "text" === e.next.type;
    };

    return e.map(function (e) {
      if (e.children) {
        var _n103 = e.children.map(t);

        if (_n103.some(Boolean)) {
          var _t112 = [];

          for (var _r104 = 0; _r104 < e.children.length; _r104++) {
            var _o56 = e.children[_r104];

            if (_n103[_r104]) {
              var _n104 = _t112.pop(),
                  _u53 = e.children[++_r104],
                  _i72 = _u53.isTrailingSpaceSensitive,
                  _a17 = _u53.hasTrailingSpaces;

              _t112.push(_n104.clone({
                value: _n104.value + "<".concat(_o56.rawName, ">") + _o56.firstChild.value + "</".concat(_o56.rawName, ">") + _u53.value,
                sourceSpan: new HS(_n104.sourceSpan.start, _u53.sourceSpan.end),
                isTrailingSpaceSensitive: _i72,
                hasTrailingSpaces: _a17
              }));
            } else _t112.push(_o56);
          }

          return e.clone({
            children: _t112
          });
        }
      }

      return e;
    });
  }];

  var uw = function uw(e, t) {
    var _iterator44 = _createForOfIteratorHelper(ow),
        _step44;

    try {
      for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
        var _n105 = _step44.value;
        e = _n105(e, t);
      }
    } catch (err) {
      _iterator44.e(err);
    } finally {
      _iterator44.f();
    }

    return e;
  };

  var iw = {
    hasPragma: function hasPragma(e) {
      return /^\s*<!--\s*@(format|prettier)\s*-->/.test(e);
    },
    insertPragma: function insertPragma(e) {
      return "\x3c!-- @format --\x3e\n\n" + e.replace(/^\s*\n/, "");
    }
  };
  var aw = {
    locStart: function locStart(e) {
      return e.sourceSpan.start.offset;
    },
    locEnd: function locEnd(e) {
      return e.sourceSpan.end.offset;
    }
  };
  var _cn$builders37 = cn.builders,
      sw = _cn$builders37.concat,
      cw = _cn$builders37.group;
  var lw = {
    isVueEventBindingExpression: function isVueEventBindingExpression(e) {
      var t = e.trim();
      return /^([\w$]+|\([^)]*?\))\s*=>|^function\s*\(/.test(t) || /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/.test(t);
    },
    printVueFor: function printVueFor(e, t) {
      var _ref51 = function (e) {
        var t = /([^]*?)\s+(in|of)\s+([^]*)/,
            n = /,([^,\]}]*)(?:,([^,\]}]*))?$/,
            r = /^\(|\)$/g,
            o = e.match(t);
        if (!o) return;
        var u = {};
        u.for = o[3].trim();
        var i = o[1].trim().replace(r, ""),
            a = i.match(n);
        a ? (u.alias = i.replace(n, ""), u.iterator1 = a[1].trim(), a[2] && (u.iterator2 = a[2].trim())) : u.alias = i;
        return {
          left: "".concat([u.alias, u.iterator1, u.iterator2].filter(Boolean).join(",")),
          operator: o[2],
          right: u.for
        };
      }(e),
          n = _ref51.left,
          r = _ref51.operator,
          o = _ref51.right;

      return sw([cw(t("function _(".concat(n, ") {}"), {
        parser: "babel",
        __isVueForBindingLeft: !0
      })), " ", r, " ", t(o, {
        parser: "__js_expression"
      }, {
        stripTrailingHardline: !0
      })]);
    },
    printVueBindings: function printVueBindings(e, t) {
      return t("function _(".concat(e, ") {}"), {
        parser: "babel",
        __isVueBindings: !0
      }, {
        stripTrailingHardline: !0
      });
    }
  },
      pw = je(function (e) {
    !function (t, n) {
      e.exports ? e.exports = n() : t.parseSrcset = n();
    }(Me, function () {
      return function (e, t) {
        var n = t && t.logger || console;

        function r(e) {
          return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
        }

        function o(t) {
          var n,
              r = t.exec(e.substring(D));
          if (r) return n = r[0], D += n.length, n;
        }

        for (var u, i, a, s, c, l = e.length, p = /^[ \t\n\r\u000c]+/, d = /^[, \t\n\r\u000c]+/, f = /^[^ \t\n\r\u000c]+/, h = /[,]+$/, m = /^\d+$/, g = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, D = 0, y = [];;) {
          if (o(d), D >= l) return y;
          u = o(f), i = [], "," === u.slice(-1) ? (u = u.replace(h, ""), C()) : E();
        }

        function E() {
          for (o(p), a = "", s = "in descriptor";;) {
            if (c = e.charAt(D), "in descriptor" === s) {
              if (r(c)) a && (i.push(a), a = "", s = "after descriptor");else {
                if ("," === c) return D += 1, a && i.push(a), void C();
                if ("(" === c) a += c, s = "in parens";else {
                  if ("" === c) return a && i.push(a), void C();
                  a += c;
                }
              }
            } else if ("in parens" === s) {
              if (")" === c) a += c, s = "in descriptor";else {
                if ("" === c) return i.push(a), void C();
                a += c;
              }
            } else if ("after descriptor" === s) if (r(c)) ;else {
              if ("" === c) return void C();
              s = "in descriptor", D -= 1;
            }
            D += 1;
          }
        }

        function C() {
          var t,
              r,
              o,
              a,
              s,
              c,
              l,
              p,
              d,
              f = !1,
              h = {};

          for (a = 0; a < i.length; a++) {
            c = (s = i[a])[s.length - 1], l = s.substring(0, s.length - 1), p = parseInt(l, 10), d = parseFloat(l), m.test(l) && "w" === c ? ((t || r) && (f = !0), 0 === p ? f = !0 : t = p) : g.test(l) && "x" === c ? ((t || r || o) && (f = !0), d < 0 ? f = !0 : r = d) : m.test(l) && "h" === c ? ((o || r) && (f = !0), 0 === p ? f = !0 : o = p) : f = !0;
          }

          f ? n && n.error && n.error("Invalid srcset descriptor found in '" + e + "' at '" + s + "'.") : (h.url = u, t && (h.w = t), r && (h.d = r), o && (h.h = o), y.push(h));
        }
      };
    });
  });
  var _cn$builders38 = cn.builders,
      dw = _cn$builders38.concat,
      fw = _cn$builders38.ifBreak,
      hw = _cn$builders38.join,
      mw = _cn$builders38.line;
  var gw = {
    printImgSrcset: function printImgSrcset(e) {
      var t = pw(e, {
        logger: {
          error: function error(e) {
            throw new Error(e);
          }
        }
      }),
          n = t.some(function (_ref52) {
        var e = _ref52.w;
        return e;
      }),
          r = t.some(function (_ref53) {
        var e = _ref53.h;
        return e;
      });
      if (n + r + t.some(function (_ref54) {
        var e = _ref54.d;
        return e;
      }) > 1) throw new Error("Mixed descriptor in srcset is not supported");

      var o = n ? "w" : r ? "h" : "d",
          u = n ? "w" : r ? "h" : "x",
          i = function i(e) {
        return Math.max.apply(Math, _toConsumableArray(e));
      },
          a = t.map(function (e) {
        return e.url;
      }),
          s = i(a.map(function (e) {
        return e.length;
      })),
          c = t.map(function (e) {
        return e[o];
      }).map(function (e) {
        return e ? e.toString() : "";
      }),
          l = c.map(function (e) {
        var t = e.indexOf(".");
        return -1 === t ? e.length : t;
      }),
          p = i(l);

      return hw(dw([",", mw]), a.map(function (e, t) {
        var n = [e],
            r = c[t];

        if (r) {
          var _o57 = s - e.length + 1,
              _i73 = p - l[t],
              _a18 = " ".repeat(_o57 + _i73);

          n.push(fw(_a18, " "), r + u);
        }

        return dw(n);
      }));
    },
    printClassNames: function printClassNames(e) {
      return e.trim().split(/\s+/).join(" ");
    }
  };
  var Dw = cn.builders,
      _cn$utils3 = cn.utils,
      yw = _cn$utils3.mapDoc,
      Ew = _cn$utils3.normalizeParts,
      Cw = Lt.replaceEndOfLineWith,
      bw = ob.print,
      vw = Dw.breakParent,
      Aw = Dw.dedentToRoot,
      Fw = Dw.fill,
      xw = Dw.group,
      Sw = Dw.hardline,
      ww = Dw.ifBreak,
      Tw = Dw.indent,
      Bw = Dw.join,
      Nw = Dw.line,
      kw = Dw.literalline,
      Pw = Dw.softline,
      Ow = $S.htmlTrimPreserveIndentation,
      Iw = $S.splitByHtmlWhitespace,
      Lw = $S.countChars,
      Mw = $S.countParents,
      jw = $S.dedentString,
      _w = $S.forceBreakChildren,
      Rw = $S.forceBreakContent,
      Vw = $S.forceNextEmptyLine,
      $w = $S.getLastDescendant,
      qw = $S.getPrettierIgnoreAttributeCommentData,
      Ww = $S.hasPrettierIgnore,
      Uw = $S.inferScriptParser,
      Jw = $S.isVueCustomBlock,
      zw = $S.isVueNonHtmlBlock,
      Hw = $S.isVueSlotAttribute,
      Gw = $S.isVueSfcBindingsAttribute,
      Xw = $S.isScriptLikeTag,
      Yw = $S.isTextLikeNode,
      Kw = $S.preferHardlineAsLeadingSpaces,
      Qw = $S.shouldNotPrintClosingTag,
      Zw = $S.shouldPreserveContent,
      eT = $S.unescapeQuoteEntities,
      tT = $S.isPreLikeNode,
      nT = iw.insertPragma,
      rT = aw.locStart,
      oT = aw.locEnd,
      uT = lw.printVueFor,
      iT = lw.printVueBindings,
      aT = lw.isVueEventBindingExpression,
      sT = gw.printImgSrcset,
      cT = gw.printClassNames;

  function lT(e) {
    var t = Ew(e);
    return 0 === t.length ? "" : 1 === t.length ? t[0] : Dw.concat(t);
  }

  function pT(e, t, n) {
    var r = e.getValue();
    if (_w(r)) return lT([vw, lT(e.map(function (e) {
      var t = e.getValue(),
          n = t.prev ? i(t.prev, t) : "";
      return lT([n ? lT([n, Vw(t.prev) ? Sw : ""]) : "", u(e)]);
    }, "children"))]);
    var o = r.children.map(function () {
      return Symbol("");
    });
    return lT(e.map(function (e, t) {
      var n = e.getValue();

      if (Yw(n)) {
        if (n.prev && Yw(n.prev)) {
          var _t113 = i(n.prev, n);

          if (_t113) return Vw(n.prev) ? lT([Sw, Sw, u(e)]) : lT([_t113, u(e)]);
        }

        return u(e);
      }

      var r = [],
          a = [],
          s = [],
          c = [],
          l = n.prev ? i(n.prev, n) : "",
          p = n.next ? i(n, n.next) : "";
      return l && (Vw(n.prev) ? r.push(Sw, Sw) : l === Sw ? r.push(Sw) : Yw(n.prev) ? a.push(l) : a.push(ww("", Pw, {
        groupId: o[t - 1]
      }))), p && (Vw(n) ? Yw(n.next) && c.push(Sw, Sw) : p === Sw ? Yw(n.next) && c.push(Sw) : s.push(p)), lT([].concat(r, xw(lT([lT(a), xw(lT([u(e), lT(s)]), {
        id: o[t]
      })])), c));
    }, "children"));

    function u(e) {
      var r = e.getValue();
      return Ww(r) ? lT([].concat(xT(r, t), Cw(t.originalText.slice(rT(r) + (r.prev && CT(r.prev) ? TT(r).length : 0), oT(r) - (r.next && vT(r.next) ? kT(r, t).length : 0)), kw), wT(r, t))) : n(e);
    }

    function i(e, t) {
      return Yw(e) && Yw(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? Kw(t) ? Sw : Nw : "" : Kw(t) ? Sw : Pw : CT(e) && (Ww(t) || t.firstChild || t.isSelfClosing || "element" === t.type && 0 !== t.attrs.length) || "element" === e.type && e.isSelfClosing && vT(t) ? "" : !t.isLeadingSpaceSensitive || Kw(t) || vT(t) && e.lastChild && FT(e.lastChild) && e.lastChild.lastChild && FT(e.lastChild.lastChild) ? Sw : t.hasLeadingSpaces ? Nw : Pw;
    }
  }

  function dT(e, t) {
    var n = e.startSourceSpan.end.offset;
    e.firstChild && bT(e.firstChild) && (n -= BT(e).length);
    var r = e.endSourceSpan.start.offset;
    return e.lastChild && FT(e.lastChild) ? r += NT(e, t).length : AT(e) && (r -= kT(e.lastChild, t).length), t.originalText.slice(n, r);
  }

  function fT(e, t, n) {
    var r = e.getValue();
    if (!r.attrs || 0 === r.attrs.length) return r.isSelfClosing ? " " : "";
    var o = r.prev && "comment" === r.prev.type && qw(r.prev.value),
        u = "boolean" == typeof o ? function () {
      return o;
    } : Array.isArray(o) ? function (e) {
      return o.includes(e.rawName);
    } : function () {
      return !1;
    },
        i = e.map(function (e) {
      var r = e.getValue();
      return u(r) ? lT(Cw(t.originalText.slice(rT(r), oT(r)), kw)) : n(e);
    }, "attrs"),
        a = "element" === r.type && "script" === r.fullName && 1 === r.attrs.length && "src" === r.attrs[0].fullName && 0 === r.children.length,
        s = [Tw(lT([a ? " " : Nw, Bw(Nw, i)]))];
    return r.firstChild && bT(r.firstChild) || r.isSelfClosing && AT(r.parent) || a ? s.push(r.isSelfClosing ? " " : "") : s.push(r.isSelfClosing ? Nw : Pw), lT(s);
  }

  function hT(e, t, n) {
    var r = e.getValue();
    return lT([mT(r, t), fT(e, t, n), r.isSelfClosing ? "" : gT(r)]);
  }

  function mT(e, t) {
    return e.prev && CT(e.prev) ? "" : lT([xT(e, t), TT(e)]);
  }

  function gT(e) {
    return e.firstChild && bT(e.firstChild) ? "" : BT(e);
  }

  function DT(e, t) {
    return lT([e.isSelfClosing ? "" : yT(e, t), ET(e, t)]);
  }

  function yT(e, t) {
    return e.lastChild && FT(e.lastChild) ? "" : lT([ST(e, t), NT(e, t)]);
  }

  function ET(e, t) {
    return (e.next ? vT(e.next) : AT(e.parent)) ? "" : lT([kT(e, t), wT(e, t)]);
  }

  function CT(e) {
    return e.next && !Yw(e.next) && Yw(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
  }

  function bT(e) {
    return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
  }

  function vT(e) {
    return e.prev && "docType" !== e.prev.type && !Yw(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
  }

  function AT(e) {
    return e.lastChild && e.lastChild.isTrailingSpaceSensitive && !e.lastChild.hasTrailingSpaces && !Yw($w(e.lastChild)) && !tT(e);
  }

  function FT(e) {
    return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && Yw($w(e));
  }

  function xT(e, t) {
    return bT(e) ? BT(e.parent) : vT(e) ? kT(e.prev, t) : "";
  }

  function ST(e, t) {
    return AT(e) ? kT(e.lastChild, t) : "";
  }

  function wT(e, t) {
    return FT(e) ? NT(e.parent, t) : CT(e) ? TT(e.next) : "";
  }

  function TT(e) {
    switch (e.type) {
      case "ieConditionalComment":
      case "ieConditionalStartComment":
        return "\x3c!--[if ".concat(e.condition);

      case "ieConditionalEndComment":
        return "\x3c!--<!";

      case "interpolation":
        return "{{";

      case "docType":
        return "<!DOCTYPE";

      case "element":
        if (e.condition) return "\x3c!--[if ".concat(e.condition, "]>\x3c!--\x3e<").concat(e.rawName);

      default:
        return "<".concat(e.rawName);
    }
  }

  function BT(e) {
    switch (ta(!e.isSelfClosing), e.type) {
      case "ieConditionalComment":
        return "]>";

      case "element":
        if (e.condition) return ">\x3c!--<![endif]--\x3e";

      default:
        return ">";
    }
  }

  function NT(e, t) {
    if (ta(!e.isSelfClosing), Qw(e, t)) return "";

    switch (e.type) {
      case "ieConditionalComment":
        return "<!";

      case "element":
        if (e.hasHtmComponentClosingTag) return "<//";

      default:
        return "</".concat(e.rawName);
    }
  }

  function kT(e, t) {
    if (Qw(e, t)) return "";

    switch (e.type) {
      case "ieConditionalComment":
      case "ieConditionalEndComment":
        return "[endif]--\x3e";

      case "ieConditionalStartComment":
        return "]>\x3c!--\x3e";

      case "interpolation":
        return "}}";

      case "element":
        if (e.isSelfClosing) return "/>";

      default:
        return ">";
    }
  }

  function PT(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.value;
    return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? Cw(t, kw) : Cw(jw(Ow(t)), Sw) : Bw(Nw, Iw(t)).parts;
  }

  var OT = {
    preprocess: uw,
    print: function print(e, t, n) {
      var r = e.getValue();

      switch (r.type) {
        case "front-matter":
          return lT(Cw(r.raw, kw));

        case "root":
          return t.__onHtmlRoot && t.__onHtmlRoot(r), Dw.concat([xw(pT(e, t, n)), Sw]);

        case "element":
        case "ieConditionalComment":
          {
            if (Zw(r, t)) return lT([].concat(xT(r, t), xw(hT(e, t, n)), Cw(dT(r, t), kw), DT(r, t), wT(r, t)));

            var _u54 = 1 === r.children.length && "interpolation" === r.firstChild.type && r.firstChild.isLeadingSpaceSensitive && !r.firstChild.hasLeadingSpaces && r.lastChild.isTrailingSpaceSensitive && !r.lastChild.hasTrailingSpaces,
                _i74 = Symbol("element-attr-group-id");

            return lT([xw(lT([xw(hT(e, t, n), {
              id: _i74
            }), 0 === r.children.length ? r.hasDanglingSpaces && r.isDanglingSpaceSensitive ? Nw : "" : lT([Rw(r) ? vw : "", (o = lT([_u54 ? ww(Pw, "", {
              groupId: _i74
            }) : r.firstChild.hasLeadingSpaces && r.firstChild.isLeadingSpaceSensitive ? Nw : "text" === r.firstChild.type && r.isWhitespaceSensitive && r.isIndentationSensitive ? Aw(Pw) : Pw, pT(e, t, n)]), _u54 ? ww(Tw(o), o, {
              groupId: _i74
            }) : !Xw(r) && !Jw(r, t) || "root" !== r.parent.type || "vue" !== t.parser || t.vueIndentScriptAndStyle ? Tw(o) : o), (r.next ? vT(r.next) : AT(r.parent)) ? r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? " " : "" : _u54 ? ww(Pw, "", {
              groupId: _i74
            }) : r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? Nw : ("comment" === r.lastChild.type || "text" === r.lastChild.type && r.isWhitespaceSensitive && r.isIndentationSensitive) && new RegExp("\\n[\\t ]{".concat(t.tabWidth * Mw(e, function (e) {
              return e.parent && "root" !== e.parent.type;
            }), "}$")).test(r.lastChild.value) ? "" : Pw])])), DT(r, t)]);
          }

        case "ieConditionalStartComment":
        case "ieConditionalEndComment":
          return lT([mT(r), ET(r)]);

        case "interpolation":
          return lT([mT(r, t), lT(e.map(n, "children")), ET(r, t)]);

        case "text":
          if ("interpolation" === r.parent.type) {
            var _e141 = /\n[^\S\n]*?$/,
                _t114 = _e141.test(r.value),
                _n106 = _t114 ? r.value.replace(_e141, "") : r.value;

            return lT([lT(Cw(_n106, kw)), _t114 ? Sw : ""]);
          }

          return Fw(Ew([].concat(xT(r, t), PT(r), wT(r, t))));

        case "docType":
          return lT([xw(lT([mT(r, t), " ", r.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")])), ET(r, t)]);

        case "comment":
          return lT([xT(r, t), lT(Cw(t.originalText.slice(rT(r), oT(r)), kw)), wT(r, t)]);

        case "attribute":
          {
            if (null === r.value) return r.rawName;

            var _e142 = eT(r.value),
                _t115 = Lw(_e142, "'") < Lw(_e142, '"') ? "'" : '"';

            return lT([r.rawName, lT(["=", _t115, lT(Cw('"' === _t115 ? _e142.replace(/"/g, "&quot;") : _e142.replace(/'/g, "&apos;"), kw)), _t115])]);
          }

        default:
          throw new Error("Unexpected node type ".concat(r.type));
      }

      var o;
    },
    insertPragma: nT,
    massageAstNode: sS,
    embed: function embed(e, t, n, r) {
      var o = e.getValue();

      switch (o.type) {
        case "element":
          if (Xw(o) || "interpolation" === o.type) return;

          if (!o.isSelfClosing && zw(o, r)) {
            var _u55 = Uw(o, r);

            if (!_u55) return;

            var _i75 = dT(o, r);

            var _a19 = /^\s*$/.test(_i75),
                _s18 = "";

            return _a19 || (_s18 = n(Ow(_i75), {
              parser: _u55
            }, {
              stripTrailingHardline: !0
            }), _a19 = "" === _s18), lT([xT(o, r), xw(hT(e, r, t)), _a19 ? "" : Sw, _s18, _a19 ? "" : Sw, DT(o, r), wT(o, r)]);
          }

          break;

        case "text":
          if (Xw(o.parent)) {
            var _e143 = Uw(o.parent);

            if (_e143) {
              var _t116 = "markdown" === _e143 ? jw(o.value.replace(/^[^\S\n]*?\n/, "")) : o.value,
                  _u56 = {
                parser: _e143
              };

              if ("html" === r.parser && "babel" === _e143) {
                var _e144 = "script";
                var _t117 = o.parent.attrMap;
                _t117 && ("module" === _t117.type || "text/babel" === _t117.type && "module" === _t117["data-type"]) && (_e144 = "module"), _u56.__babelSourceType = _e144;
              }

              return Dw.concat([lT([vw, xT(o, r), n(_t116, _u56, {
                stripTrailingHardline: !0
              }), wT(o, r)])]);
            }
          } else if ("interpolation" === o.parent.type) return lT([Tw(lT([Nw, n(o.value, Object.assign({
            __isInHtmlInterpolation: !0
          }, "angular" === r.parser ? {
            parser: "__ng_interpolation",
            trailingComma: "none"
          } : "vue" === r.parser ? {
            parser: "__vue_expression"
          } : {
            parser: "__js_expression"
          }), {
            stripTrailingHardline: !0
          })])), o.parent.next && vT(o.parent.next) ? " " : Nw]);

          break;

        case "attribute":
          {
            if (!o.value) break;
            if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(r.originalText.slice(o.valueSpan.start.offset, o.valueSpan.end.offset))) return lT([o.rawName, "=", o.value]);

            if ("lwc" === r.parser) {
              if (/^{[\S\s]*}$/.test(r.originalText.slice(o.valueSpan.start.offset, o.valueSpan.end.offset))) return lT([o.rawName, "=", o.value]);
            }

            var _e145 = function (e, t, n) {
              var r = function r(t) {
                return new RegExp(t.join("|")).test(e.fullName);
              },
                  o = function o() {
                return eT(e.value);
              };

              var u = !1;

              var i = function i(e, t) {
                var n = "NGRoot" === e.type ? "NGMicrosyntax" === e.node.type && 1 === e.node.body.length && "NGMicrosyntaxExpression" === e.node.body[0].type ? e.node.body[0].expression : e.node : "JsExpressionRoot" === e.type ? e.node : e;
                !n || "ObjectExpression" !== n.type && "ArrayExpression" !== n.type && ("__vue_expression" !== t.parser || "TemplateLiteral" !== n.type && "StringLiteral" !== n.type) || (u = !0);
              },
                  a = function a(e) {
                return xw(e);
              },
                  s = function s(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                return xw(lT([Tw(lT([Pw, e])), t ? Pw : ""]));
              },
                  c = function c(e) {
                return u ? a(e) : s(e);
              },
                  l = function l(e, n) {
                return t(e, Object.assign({
                  __onHtmlBindingRoot: i
                }, n), {
                  stripTrailingHardline: !0
                });
              };

              if ("srcset" === e.fullName && ("img" === e.parent.fullName || "source" === e.parent.fullName)) return s(sT(o()));

              if ("class" === e.fullName && !n.parentParser) {
                var _e146 = o();

                if (!_e146.includes("{{")) return cT(_e146);
              }

              if ("style" === e.fullName && !n.parentParser) {
                var _e147 = o();

                if (!_e147.includes("{{")) return s(l(_e147, {
                  parser: "css",
                  __isHTMLStyleAttribute: !0
                }));
              }

              if ("vue" === n.parser) {
                if ("v-for" === e.fullName) return uT(o(), l);
                if (Hw(e) || Gw(e, n)) return iT(o(), l);
                var _t118 = ["^:", "^v-bind:"],
                    _u57 = ["^v-"];

                if (r(["^@", "^v-on:"])) {
                  var _e148 = o();

                  return c(l(_e148, {
                    parser: aT(_e148) ? "__js_expression" : "__vue_event_binding"
                  }));
                }

                if (r(_t118)) return c(l(o(), {
                  parser: "__vue_expression"
                }));
                if (r(_u57)) return c(l(o(), {
                  parser: "__js_expression"
                }));
              }

              if ("angular" === n.parser) {
                var _t119 = function _t119(e, t) {
                  return l(e, Object.assign({}, t, {
                    trailingComma: "none"
                  }));
                },
                    _n107 = ["^\\*"],
                    _u58 = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"],
                    _i76 = ["^i18n(-.+)?$"];

                if (r(["^\\(.+\\)$", "^on-"])) return c(_t119(o(), {
                  parser: "__ng_action"
                }));
                if (r(_u58)) return c(_t119(o(), {
                  parser: "__ng_binding"
                }));

                if (r(_i76)) {
                  var _t120 = o().trim();

                  return s(Fw(PT(e, _t120)), !_t120.includes("@@"));
                }

                if (r(_n107)) return c(_t119(o(), {
                  parser: "__ng_directive"
                }));

                var _a20 = /{{([\S\s]+?)}}/g,
                    _p10 = o();

                if (_a20.test(_p10)) {
                  var _e149 = [];
                  return _p10.split(_a20).forEach(function (n, r) {
                    if (r % 2 == 0) _e149.push(lT(Cw(n, kw)));else try {
                      _e149.push(xw(lT(["{{", Tw(lT([Nw, _t119(n, {
                        parser: "__ng_interpolation",
                        __isInHtmlInterpolation: !0
                      })])), Nw, "}}"])));
                    } catch (t) {
                      _e149.push("{{", lT(Cw(n, kw)), "}}");
                    }
                  }), xw(lT(_e149));
                }
              }

              return null;
            }(o, function (e, t) {
              return n(e, Object.assign({
                __isInHtmlAttribute: !0
              }, t), {
                stripTrailingHardline: !0
              });
            }, r);

            if (_e145) return lT([o.rawName, '="', xw(yw(_e145, function (e) {
              return "string" == typeof e ? e.replace(/"/g, "&quot;") : e;
            })), '"']);
            break;
          }

        case "front-matter":
          return bw(o, n);
      }
    }
  };
  var IT = "HTML";
  var LT = {
    htmlWhitespaceSensitivity: {
      since: "1.15.0",
      category: IT,
      type: "choice",
      default: "css",
      description: "How to handle whitespaces in HTML.",
      choices: [{
        value: "css",
        description: "Respect the default value of CSS display property."
      }, {
        value: "strict",
        description: "Whitespaces are considered sensitive."
      }, {
        value: "ignore",
        description: "Whitespaces are considered insensitive."
      }]
    },
    vueIndentScriptAndStyle: {
      since: "1.19.0",
      category: IT,
      type: "boolean",
      default: !1,
      description: "Indent script and style tags in Vue files."
    }
  },
      MT = {
    name: "HTML",
    type: "markup",
    tmScope: "text.html.basic",
    aceMode: "html",
    codemirrorMode: "htmlmixed",
    codemirrorMimeType: "text/html",
    color: "#e34c26",
    aliases: ["xhtml"],
    extensions: [".html", ".htm", ".html.hl", ".inc", ".st", ".xht", ".xhtml"],
    languageId: 146
  },
      jT = {
    name: "Vue",
    type: "markup",
    color: "#2c3e50",
    extensions: [".vue"],
    tmScope: "text.html.vue",
    aceMode: "html",
    languageId: 391
  };
  var _T = {
    languages: [ks(MT, function () {
      return {
        name: "Angular",
        since: "1.15.0",
        parsers: ["angular"],
        vscodeLanguageIds: ["html"],
        extensions: [".component.html"],
        filenames: []
      };
    }), ks(MT, function (e) {
      return {
        since: "1.15.0",
        parsers: ["html"],
        vscodeLanguageIds: ["html"],
        extensions: e.extensions.concat([".mjml"])
      };
    }), ks(MT, function () {
      return {
        name: "Lightning Web Components",
        since: "1.17.0",
        parsers: ["lwc"],
        vscodeLanguageIds: ["html"],
        extensions: [],
        filenames: []
      };
    }), ks(jT, function () {
      return {
        since: "1.10.0",
        parsers: ["vue"],
        vscodeLanguageIds: ["vue"]
      };
    })],
    printers: {
      html: OT
    },
    options: LT,
    parsers: {
      get html() {
        return {}.parsers.html;
      },

      get vue() {
        return {}.parsers.vue;
      },

      get angular() {
        return {}.parsers.angular;
      },

      get lwc() {
        return {}.parsers.lwc;
      }

    }
  };
  var RT = {
    isPragma: function isPragma(e) {
      return /^\s*@(prettier|format)\s*$/.test(e);
    },
    hasPragma: function hasPragma(e) {
      return /^\s*#[^\S\n]*@(prettier|format)\s*?(\n|$)/.test(e);
    },
    insertPragma: function insertPragma(e) {
      return "# @format\n\n".concat(e);
    }
  };
  var VT = {
    locStart: function locStart(e) {
      return e.position.start.offset;
    },
    locEnd: function locEnd(e) {
      return e.position.end.offset;
    }
  };
  var $T = Lt.getLast;

  function qT(e, t) {
    return e && "string" == typeof e.type && (!t || t.includes(e.type));
  }

  function WT(e) {
    return "prettier-ignore" === e.value.trim();
  }

  function UT(e) {
    return e && e.leadingComments && 0 !== e.leadingComments.length;
  }

  function JT(e) {
    return e && e.middleComments && 0 !== e.middleComments.length;
  }

  function zT(e) {
    return e && e.indicatorComment;
  }

  function HT(e) {
    return e && e.trailingComment;
  }

  function GT(e) {
    return e && e.endComments && 0 !== e.endComments.length;
  }

  function XT(e) {
    var t = [];
    var n;

    var _iterator45 = _createForOfIteratorHelper(e.split(/( +)/g)),
        _step45;

    try {
      for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
        var _r105 = _step45.value;
        " " !== _r105 ? " " === n ? t.push(_r105) : t.push((t.pop() || "") + _r105) : void 0 === n && t.unshift(""), n = _r105;
      }
    } catch (err) {
      _iterator45.e(err);
    } finally {
      _iterator45.f();
    }

    return " " === n && t.push((t.pop() || "") + " "), "" === t[0] && (t.shift(), t.unshift(" " + (t.shift() || ""))), t;
  }

  var YT = {
    getLast: $T,
    getAncestorCount: function getAncestorCount(e, t) {
      var n = 0;
      var r = e.stack.length - 1;

      for (var _o58 = 0; _o58 < r; _o58++) {
        var _r106 = e.stack[_o58];
        qT(_r106) && t(_r106) && n++;
      }

      return n;
    },
    isNode: qT,
    isEmptyNode: function isEmptyNode(e) {
      return !(e.children && 0 !== e.children.length || function (e) {
        return UT(e) || JT(e) || zT(e) || HT(e) || GT(e);
      }(e));
    },
    mapNode: function e(t, n, r) {
      return n("children" in t ? Object.assign({}, t, {
        children: t.children.map(function (r) {
          return e(r, n, t);
        })
      }) : t, r);
    },
    defineShortcut: function defineShortcut(e, t, n) {
      Object.defineProperty(e, t, {
        get: n,
        enumerable: !1
      });
    },
    isNextLineEmpty: function isNextLineEmpty(e, t) {
      var n = 0;
      var r = t.length;

      for (var _o59 = e.position.end.offset - 1; _o59 < r; _o59++) {
        var _e150 = t[_o59];
        if ("\n" === _e150 && n++, 1 === n && /\S/.test(_e150)) return !1;
        if (2 === n) return !0;
      }

      return !1;
    },
    isLastDescendantNode: function isLastDescendantNode(e) {
      switch (e.getValue().type) {
        case "tag":
        case "anchor":
        case "comment":
          return !1;
      }

      var t = e.stack.length;

      for (var _n108 = 1; _n108 < t; _n108++) {
        var _t121 = e.stack[_n108],
            _r107 = e.stack[_n108 - 1];
        if (Array.isArray(_r107) && "number" == typeof _t121 && _t121 !== _r107.length - 1) return !1;
      }

      return !0;
    },
    getBlockValueLineContents: function getBlockValueLineContents(e, _ref55) {
      var t = _ref55.parentIndent,
          n = _ref55.isLastDescendant,
          r = _ref55.options;
      var o = e.position.start.line === e.position.end.line ? "" : r.originalText.slice(e.position.start.offset, e.position.end.offset).match(/^[^\n]*?\n([\S\s]*)$/)[1],
          u = null === e.indent ? (i = o.match(/^( *)\S/m)) ? i[1].length : 1 / 0 : e.indent - 1 + t;
      var i;
      var a = o.split("\n").map(function (e) {
        return e.slice(u);
      });
      return "preserve" === r.proseWrap || "blockLiteral" === e.type ? s(a.map(function (e) {
        return 0 === e.length ? [] : [e];
      })) : s(a.map(function (e) {
        return 0 === e.length ? [] : XT(e);
      }).reduce(function (e, t, n) {
        return 0 === n || 0 === a[n - 1].length || 0 === t.length || /^\s/.test(t[0]) || /^\s|\s$/.test($T(e)) ? e.concat([t]) : e.concat([e.pop().concat(t)]);
      }, []).map(function (e) {
        return e.reduce(function (e, t) {
          return 0 !== e.length && /\s$/.test($T(e)) ? e.concat(e.pop() + " " + t) : e.concat(t);
        }, []);
      }).map(function (e) {
        return "never" === r.proseWrap ? [e.join(" ")] : e;
      }));

      function s(t) {
        if ("keep" === e.chomping) return 0 === $T(t).length ? t.slice(0, -1) : t;
        var r = 0;

        for (var _e151 = t.length - 1; _e151 >= 0 && 0 === t[_e151].length; _e151--) {
          r++;
        }

        return 0 === r ? t : r >= 2 && !n ? t.slice(0, -(r - 1)) : t.slice(0, -r);
      }
    },
    getFlowScalarLineContents: function getFlowScalarLineContents(e, t, n) {
      var r = t.split("\n").map(function (e, t, n) {
        return 0 === t && t === n.length - 1 ? e : 0 !== t && t !== n.length - 1 ? e.trim() : 0 === t ? e.trimEnd() : e.trimStart();
      });
      return "preserve" === n.proseWrap ? r.map(function (e) {
        return 0 === e.length ? [] : [e];
      }) : r.map(function (e) {
        return 0 === e.length ? [] : XT(e);
      }).reduce(function (t, n, o) {
        return 0 === o || 0 === r[o - 1].length || 0 === n.length || "quoteDouble" === e && $T($T(t)).endsWith("\\") ? t.concat([n]) : t.concat([t.pop().concat(n)]);
      }, []).map(function (e) {
        return "never" === n.proseWrap ? [e.join(" ")] : e;
      });
    },
    getLastDescendantNode: function e(t) {
      return "children" in t && 0 !== t.children.length ? e($T(t.children)) : t;
    },
    hasPrettierIgnore: function hasPrettierIgnore(e) {
      var t = e.getValue();

      if ("documentBody" === t.type) {
        var _t122 = e.getParentNode();

        return GT(_t122.head) && WT($T(_t122.head.endComments));
      }

      return UT(t) && WT($T(t.leadingComments));
    },
    hasLeadingComments: UT,
    hasMiddleComments: JT,
    hasIndicatorComment: zT,
    hasTrailingComment: HT,
    hasEndComments: GT
  };
  var KT = cn.builders,
      QT = KT.conditionalGroup,
      ZT = KT.breakParent,
      eB = KT.concat,
      tB = KT.dedent,
      nB = KT.dedentToRoot,
      rB = KT.fill,
      oB = KT.group,
      uB = KT.hardline,
      iB = KT.ifBreak,
      aB = KT.join,
      sB = KT.line,
      cB = KT.lineSuffix,
      lB = KT.literalline,
      pB = KT.markAsRoot,
      dB = KT.softline,
      fB = Lt.replaceEndOfLineWith,
      hB = Lt.isPreviousLineEmpty,
      mB = RT.insertPragma,
      gB = RT.isPragma,
      DB = VT.locStart,
      yB = YT.getAncestorCount,
      EB = YT.getBlockValueLineContents,
      CB = YT.getFlowScalarLineContents,
      bB = YT.getLast,
      vB = YT.getLastDescendantNode,
      AB = YT.hasLeadingComments,
      FB = YT.hasMiddleComments,
      xB = YT.hasIndicatorComment,
      SB = YT.hasTrailingComment,
      wB = YT.hasEndComments,
      TB = YT.hasPrettierIgnore,
      BB = YT.isLastDescendantNode,
      NB = YT.isNextLineEmpty,
      kB = YT.isNode,
      PB = YT.isEmptyNode,
      OB = YT.defineShortcut,
      IB = YT.mapNode;

  function LB(e) {
    switch (e.type) {
      case "document":
        OB(e, "head", function () {
          return e.children[0];
        }), OB(e, "body", function () {
          return e.children[1];
        });
        break;

      case "documentBody":
      case "sequenceItem":
      case "flowSequenceItem":
      case "mappingKey":
      case "mappingValue":
        OB(e, "content", function () {
          return e.children[0];
        });
        break;

      case "mappingItem":
      case "flowMappingItem":
        OB(e, "key", function () {
          return e.children[0];
        }), OB(e, "value", function () {
          return e.children[1];
        });
    }

    return e;
  }

  function MB(e, t, n, r, o) {
    switch (e.type) {
      case "root":
        return eB([aB(uB, n.map(function (t, r) {
          var u = e.children[r],
              i = e.children[r + 1];
          return eB([o(t), VB(u, i) ? eB([uB, "...", SB(u) ? eB([" ", n.call(o, "trailingComment")]) : ""]) : !i || SB(i.head) ? "" : eB([uB, "---"])]);
        }, "children")), 0 === e.children.length || (i = vB(e), kB(i, ["blockLiteral", "blockFolded"]) && "keep" === i.chomping) ? "" : uB]);

      case "document":
        {
          var _u59 = t.children[n.getName() + 1];
          return aB(uB, ["head" === $B(e, _u59, t, r) ? aB(uB, [0 === e.head.children.length && 0 === e.head.endComments.length ? "" : n.call(o, "head"), eB(["---", SB(e.head) ? eB([" ", n.call(o, "head", "trailingComment")]) : ""])].filter(Boolean)) : "", RB(e) ? n.call(o, "body") : ""].filter(Boolean));
        }

      case "documentHead":
        return aB(uB, [].concat(n.map(o, "children"), n.map(o, "endComments")));

      case "documentBody":
        {
          var _t123 = aB(uB, n.map(o, "children")).parts,
              _r108 = aB(uB, n.map(o, "endComments")).parts,
              _u60 = 0 === _t123.length || 0 === _r108.length ? "" : function (e) {
            return kB(e, ["blockFolded", "blockLiteral"]) ? "keep" === e.chomping ? "" : eB([uB, uB]) : uB;
          }(vB(e));

          return eB([].concat(_t123, _u60, _r108));
        }

      case "directive":
        return eB(["%", aB(" ", [e.name].concat(e.parameters))]);

      case "comment":
        return eB(["#", e.value]);

      case "alias":
        return eB(["*", e.value]);

      case "tag":
        return r.originalText.slice(e.position.start.offset, e.position.end.offset);

      case "anchor":
        return eB(["&", e.value]);

      case "plain":
        return HB(e.type, r.originalText.slice(e.position.start.offset, e.position.end.offset), r);

      case "quoteDouble":
      case "quoteSingle":
        {
          var _t124 = "'",
              _n109 = '"',
              _o60 = r.originalText.slice(e.position.start.offset + 1, e.position.end.offset - 1);

          if ("quoteSingle" === e.type && _o60.includes("\\") || "quoteDouble" === e.type && /\\[^"]/.test(_o60)) {
            var _u62 = "quoteDouble" === e.type ? _n109 : _t124;

            return eB([_u62, HB(e.type, _o60, r), _u62]);
          }

          if (_o60.includes(_n109)) return eB([_t124, HB(e.type, "quoteDouble" === e.type ? _o60.replace(/\\"/g, _n109).replace(/'/g, _t124.repeat(2)) : _o60, r), _t124]);
          if (_o60.includes(_t124)) return eB([_n109, HB(e.type, "quoteSingle" === e.type ? _o60.replace(/''/g, _t124) : _o60, r), _n109]);

          var _u61 = r.singleQuote ? _t124 : _n109;

          return eB([_u61, HB(e.type, _o60, r), _u61]);
        }

      case "blockFolded":
      case "blockLiteral":
        {
          var _t125 = yB(n, function (e) {
            return kB(e, ["sequence", "mapping"]);
          }),
              _u63 = BB(n);

          return eB(["blockFolded" === e.type ? ">" : "|", null === e.indent ? "" : e.indent.toString(), "clip" === e.chomping ? "" : "keep" === e.chomping ? "+" : "-", xB(e) ? eB([" ", n.call(o, "indicatorComment")]) : "", (null === e.indent ? tB : nB)(jB(null === e.indent ? r.tabWidth : e.indent - 1 + _t125, eB(EB(e, {
            parentIndent: _t125,
            isLastDescendant: _u63,
            options: r
          }).reduce(function (t, n, r, o) {
            return t.concat(0 === r ? uB : "", rB(aB(sB, n).parts), r !== o.length - 1 ? 0 === n.length ? uB : pB(lB) : "keep" === e.chomping && _u63 ? 0 === n.length ? nB(uB) : nB(lB) : "");
          }, []))))]);
        }

      case "sequence":
        return aB(uB, n.map(o, "children"));

      case "sequenceItem":
        return eB(["- ", jB(2, e.content ? n.call(o, "content") : "")]);

      case "mappingKey":
      case "mappingValue":
        return e.content ? n.call(o, "content") : "";

      case "mapping":
        return aB(uB, n.map(o, "children"));

      case "mappingItem":
      case "flowMappingItem":
        {
          var _u64 = PB(e.key),
              _i77 = PB(e.value);

          if (_u64 && _i77) return eB([": "]);

          var _s19 = n.call(o, "key"),
              _c16 = n.call(o, "value");

          if (_i77) return "flowMappingItem" === e.type && "flowMapping" === t.type ? _s19 : "mappingItem" !== e.type || !qB(e.key.content, r) || SB(e.key.content) || t.tag && "tag:yaml.org,2002:set" === t.tag.value ? eB(["? ", jB(2, _s19)]) : eB([_s19, WB(e) ? " " : "", ":"]);
          if (_u64) return eB([": ", jB(2, _c16)]);

          var _l10 = Symbol("mappingKey");

          return AB(e.value) || !_B(e.key.content) ? eB(["? ", jB(2, _s19), uB, aB("", n.map(o, "value", "leadingComments").map(function (e) {
            return eB([e, uB]);
          })), ": ", jB(2, _c16)]) : !function (e) {
            if (!e) return !0;

            switch (e.type) {
              case "plain":
              case "quoteDouble":
              case "quoteSingle":
                return e.position.start.line === e.position.end.line;

              case "alias":
                return !0;

              default:
                return !1;
            }
          }(e.key.content) || AB(e.key.content) || FB(e.key.content) || SB(e.key.content) || wB(e.key) || AB(e.value.content) || FB(e.value.content) || wB(e.value) || !qB(e.value.content, r) ? QT([eB([oB(eB([iB("? "), oB(jB(2, _s19), {
            id: _l10
          })])), iB(eB([uB, ": ", jB(2, _c16)]), a(eB([WB(e) ? " " : "", ":", AB(e.value.content) || wB(e.value) && e.value.content && !kB(e.value.content, ["mapping", "sequence"]) || "mapping" === t.type && SB(e.key.content) && _B(e.value.content) || kB(e.value.content, ["mapping", "sequence"]) && null === e.value.content.tag && null === e.value.content.anchor ? uB : e.value.content ? sB : "", _c16])), {
            groupId: _l10
          })])]) : eB([_s19, WB(e) ? " " : "", ": ", _c16]);
        }

      case "flowMapping":
      case "flowSequence":
        {
          var _t126 = "flowMapping" === e.type ? "{" : "[",
              _i78 = "flowMapping" === e.type ? "}" : "]",
              _s20 = "flowMapping" === e.type && 0 !== e.children.length && r.bracketSpacing ? sB : dB,
              _c17 = 0 !== e.children.length && "flowMappingItem" === (u = bB(e.children)).type && PB(u.key) && PB(u.value),
              _l11 = "none" === r.trailingComma ? "" : iB(",", "");

          return eB([_t126, a(eB([_s20, eB(n.map(function (t, n) {
            return eB([o(t), n === e.children.length - 1 ? "" : eB([",", sB, e.children[n].position.start.line !== e.children[n + 1].position.start.line ? zB(t, r.originalText) : ""])]);
          }, "children")), _l11, wB(e) ? eB([uB, aB(uB, n.map(o, "endComments"))]) : ""])), _c17 ? "" : _s20, _i78]);
        }

      case "flowSequenceItem":
        return n.call(o, "content");

      default:
        throw new Error("Unexpected node type ".concat(e.type));
    }

    var u, i;

    function a(e) {
      return KT.align(" ".repeat(r.tabWidth), e);
    }
  }

  function jB(e, t) {
    return "number" == typeof e && e > 0 ? KT.align(" ".repeat(e), t) : KT.align(e, t);
  }

  function _B(e) {
    if (!e) return !0;

    switch (e.type) {
      case "plain":
      case "quoteDouble":
      case "quoteSingle":
      case "alias":
      case "flowMapping":
      case "flowSequence":
        return !0;

      default:
        return !1;
    }
  }

  function RB(e) {
    return 0 !== e.body.children.length || wB(e.body);
  }

  function VB(e, t) {
    return SB(e) || t && (0 !== t.head.children.length || wB(t.head));
  }

  function $B(e, t, n, r) {
    return n.children[0] === e && /---(\s|$)/.test(r.originalText.slice(DB(e), DB(e) + 4)) || 0 !== e.head.children.length || wB(e.head) || SB(e.head) ? "head" : !VB(e, t) && !!t && "root";
  }

  function qB(e, t) {
    if (!e) return !0;

    switch (e.type) {
      case "plain":
      case "quoteSingle":
      case "quoteDouble":
        break;

      case "alias":
        return !0;

      default:
        return !1;
    }

    if ("preserve" === t.proseWrap) return e.position.start.line === e.position.end.line;
    if (/\\$/m.test(t.originalText.slice(e.position.start.offset, e.position.end.offset))) return !1;

    switch (t.proseWrap) {
      case "never":
        return !e.value.includes("\n");

      case "always":
        return !/[\n ]/.test(e.value);

      default:
        return !1;
    }
  }

  function WB(e) {
    return e.key.content && "alias" === e.key.content.type;
  }

  function UB(e) {
    return wB(e) && !kB(e, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
  }

  var JB = new WeakMap();

  function zB(e, t) {
    var n = e.getValue(),
        r = e.stack[0];
    var o;
    return JB.has(r) ? o = JB.get(r) : (o = new Set(), JB.set(r, o)), o.has(n.position.end.line) || (o.add(n.position.end.line), !NB(n, t) || UB(e.getParentNode())) ? "" : dB;
  }

  function HB(e, t, n) {
    var r = CB(e, t, n);
    return aB(uB, r.map(function (e) {
      return rB(aB(sB, e).parts);
    }));
  }

  var GB = {
    preprocess: function preprocess(e) {
      return IB(e, LB);
    },
    print: function print(e, t, n) {
      var r = e.getValue(),
          o = e.getParentNode(),
          u = r.tag ? e.call(n, "tag") : "",
          i = r.anchor ? e.call(n, "anchor") : "",
          a = kB(r, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !BB(e) ? zB(e, t.originalText) : "";
      return eB(["mappingValue" !== r.type && AB(r) ? eB([aB(uB, e.map(n, "leadingComments")), uB]) : "", u, u && i ? " " : "", i, u || i ? kB(r, ["sequence", "mapping"]) && !FB(r) ? uB : " " : "", FB(r) ? eB([1 === r.middleComments.length ? "" : uB, aB(uB, e.map(n, "middleComments")), uB]) : "", TB(e) ? eB(fB(t.originalText.slice(r.position.start.offset, r.position.end.offset).trimEnd(), lB)) : oB(MB(r, o, e, t, n)), SB(r) && !kB(r, ["document", "documentHead"]) ? cB(eB(["mappingValue" !== r.type || r.content ? " " : "", "mappingKey" === o.type && "mapping" === e.getParentNode(2).type && _B(r) ? "" : ZT, e.call(n, "trailingComment")])) : "", UB(r) ? jB("sequenceItem" === r.type ? 2 : 0, eB([uB, aB(uB, e.map(function (e) {
        return eB([hB(t.originalText, e.getValue(), DB) ? uB : "", n(e)]);
      }, "endComments"))])) : "", a]);
    },
    massageAstNode: function massageAstNode(e, t) {
      if (kB(t)) switch (delete t.position, t.type) {
        case "comment":
          if (gB(t.value)) return null;
          break;

        case "quoteDouble":
        case "quoteSingle":
          t.type = "quote";
      }
    },
    insertPragma: mB
  },
      XB = {
    bracketSpacing: RC.bracketSpacing,
    singleQuote: RC.singleQuote,
    proseWrap: RC.proseWrap
  };
  var YB = [XC, Zv, uF, SF, oS, _T, {
    languages: [ks({
      name: "YAML",
      type: "data",
      color: "#cb171e",
      tmScope: "source.yaml",
      aliases: ["yml"],
      extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"],
      filenames: [".clang-format", ".clang-tidy", ".gemrc", "glide.lock", "yarn.lock"],
      aceMode: "yaml",
      codemirrorMode: "yaml",
      codemirrorMimeType: "text/x-yaml",
      languageId: 407
    }, function (e) {
      return {
        since: "1.14.0",
        parsers: ["yaml"],
        vscodeLanguageIds: ["yaml", "ansible", "home-assistant"],
        filenames: e.filenames.filter(function (e) {
          return "yarn.lock" !== e;
        })
      };
    })],
    printers: {
      yaml: GB
    },
    options: XB,
    parsers: {
      get yaml() {
        return {}.parsers.yaml;
      }

    }
  }];
  var KB = n.version,
      QB = gt.getSupportInfo,
      ZB = YB.map(function (t) {
    return e(t, ["parsers"]);
  });

  function eN(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return function () {
      for (var _len14 = arguments.length, n = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        n[_key14] = arguments[_key14];
      }

      var r = n[t] || {},
          o = r.plugins || [];
      return n[t] = Object.assign({}, r, {
        plugins: [].concat(_toConsumableArray(ZB), _toConsumableArray(Array.isArray(o) ? o : Object.values(o)))
      }), e.apply(void 0, n);
    };
  }

  var tN = eN(is.formatWithCursor);
  return {
    formatWithCursor: tN,
    format: function format(e, t) {
      return tN(e, t).formatted;
    },
    check: function check(e, t) {
      var _tN = tN(e, t),
          n = _tN.formatted;

      return n === e;
    },
    doc: cn,
    getSupportInfo: eN(QB, 0),
    version: KB,
    util: Ns,
    __debug: {
      parse: eN(is.parse),
      formatAST: eN(is.formatAST),
      formatDoc: eN(is.formatDoc),
      printToDoc: eN(is.printToDoc),
      printDocToString: eN(is.printDocToString)
    }
  };
});
},{}],"js/config.js":[function(require,module,exports) {
// fichier configuration ex: liens, 
var API = {
  episodeLink: "https://rickandmortyapi.com/api/episode/"
};
module.exports = {
  API: API
};
},{}],"js/scriptVersionClass.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// fichier episode r??alis?? avec des classes:
var _require = require("prettier"),
    doc = _require.doc;

var _require2 = require("./config"),
    API = _require2.API;

var Episode = /*#__PURE__*/function () {
  function Episode() {
    var _this = this;

    _classCallCheck(this, Episode);

    _defineProperty(this, "episodes", []);

    _defineProperty(this, "saisonsFilter", ["S01", "S02", "S03", "S04"]);

    this.fetchData(API.episodeLink + "/" + Array.from({
      length: 41
    }, function (v, k) {
      return k + 1;
    })).then(function (episodes) {
      _this.episodes = episodes;

      _this.createSectionEpisodes();

      _this.addEventInput();
    });
  }

  _createClass(Episode, [{
    key: "createCharacters",
    value: function createCharacters(characters) {
      var str = "<div id=\"myNav\" class=\"overlay\">\n                        <a class=\"closebtn\">&times;</a>\n                        <div class=\"overlay-content\">";
      characters.forEach(function (character) {
        str += "\n                            <div class=\"card\">\n                                <img src=\"".concat(character.image, "\" alt=\"Avatar\">\n                                <div class=\"container\">\n                                <p class=\"character_name\">Character Name : ").concat(character.name, "</p>\n                                <p class=\"genre\">").concat(character.gender, "</p>\n                                <p class=\"specie\">").concat(character.species, "</p>\n                                </div>\n                            </div>");
      });
      str += "</div>\n                    </div>";
      return str;
    }
  }, {
    key: "addEventInput",
    value: function addEventInput() {
      var _this2 = this;

      var radios = document.querySelectorAll(".radios input");
      radios.forEach(function (radio) {
        radio.addEventListener("change", function (event) {
          var app_lists = document.querySelector(".app_lists");
          app_lists.innerHTML = ""; // pour vider l'??l??ment HTML.

          var number_saison = parseInt(event.target.value.replace(/\D/g, '')); // /\D/g avec ce regex on cherche tt ce qui n'est pas un nombre pour le remplacer avec une chaine de caract??res vide.
          // console.log(number_saison);

          if (event.target.value != "all") {
            var episodes = _this2.episodes.filter(function (episode) {
              return episode.episode.indexOf(event.target.value) > -1;
            });

            app_lists.appendChild(_this2.createHeader(episodes, number_saison));
          } else {
            _this2.createSectionEpisodes();
          }
        });
      });
    }
  }, {
    key: "createSectionEpisodes",
    value: function createSectionEpisodes() {
      var _this3 = this;

      var app_lists = document.querySelector(".app_lists");
      this.saisonsFilter.forEach(function (saisonFilter, i) {
        var episodes = _this3.episodes.filter(function (episode) {
          return episode.episode.indexOf(saisonFilter) > -1;
        }); // filtre les episodes et les classe par saison


        app_lists.appendChild(_this3.createHeader(episodes, i + 1));
      });
    } // la cr??ationdans function dans une classe devient une m??thode et ne porte pas le nom function, et son appelle se fait avec le "this"

  }, {
    key: "fetchData",
    value: function fetchData(uri) {
      return fetch(uri).then(function (res) {
        return res.json();
      });
    } // fonction qui cr??e des episodes par saisons

  }, {
    key: "createEpisodes",
    value: function createEpisodes(episodes) {
      var _this4 = this;

      var ul = document.createElement("ul");
      ul.className = "ul_lists";
      episodes.forEach(function (episode) {
        var li = document.createElement("li");
        li.innerHTML += "\n                <div class=\"card\">\n                    <fieldset>\n                        <legend><h2 class=\"text_head\" data-url=\"".concat(episode.url, "\">Episode ").concat(episode.id, ": <br /> ").concat(episode.name, "</h2></legend>\n                        <p class=\"text\">").concat(episode.episode, "</p>\n                        <p class=\"text\">Date de Cr\xE9ation: ").concat(episode.air_date, "</p>\n                        <p class=\"text\">Nombre de personnages: ").concat(episode.characters.length, "</p>\n                    </fieldset>\n                </div>\n            ");
        li.querySelector("h2").addEventListener("click", _this4.showCharacters.bind(_this4)); // comme on est dans l'addEventListener le "this" renvoie normalement l'??l??ment cliqu?? et avec le "bind" il renvoie le "this" de la classe et on aura ainsi acc??s aux attributs de la class. "Merci Denis"

        ul.appendChild(li);
      });
      return ul;
    }
  }, {
    key: "closeNav",
    value: function closeNav() {
      var closeNav = document.querySelector(".closebtn");
      closeNav.addEventListener("click", function (event) {
        document.getElementById("myNav").style.width = "0%";
      });
    }
  }, {
    key: "showCharacters",
    value: function showCharacters(event) {
      var _this5 = this;

      this.fetchData(event.target.dataset.url).then(function (episode) {
        Promise.all(episode.characters.map(function (uri) {
          return fetch(uri);
        })).then(function (responses) {
          return Promise.all(responses.map(function (response) {
            return response.json();
          }));
        }).then(function (characters) {
          console.log(characters);
          var nav = document.querySelector(".nav");
          nav.innerHTML = _this5.createCharacters(characters);
          document.getElementById("myNav").style.width = "100%";

          _this5.closeNav();
        });
      });
    }
  }, {
    key: "createHeader",
    value: function createHeader(episodes, i) {
      var div = document.createElement("div");
      var h2 = document.createElement("h2");
      h2.className = "saison_section";
      h2.textContent = "saison: " + i;
      div.appendChild(h2);
      div.appendChild(this.createEpisodes(episodes));
      return div;
    }
  }]);

  return Episode;
}();

new Episode();
},{"prettier":"node_modules/prettier/standalone.js","./config":"js/config.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
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
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
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
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/scriptVersionClass.js"], null)
//# sourceMappingURL=/scriptVersionClass.5e03f2af.js.map