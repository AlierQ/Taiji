// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"epB2":[function(require,module,exports) {
var demo = document.querySelector('#demo');
var content = document.querySelector('#content');
var style = document.querySelector('#style');
var string = '\n/* \n * \u4F60\u597D\uFF0C\u6211\u53EBAlierQ\n * \u6211\u5C06\u4F1A\u5411\u4F60\u5C55\u793A\u4E00\u4E0B\u592A\u6781\u56FE\u7684\u753B\u6CD5\n */\n\n/* \n * \u9996\u5148\u51C6\u5907\u4E00\u4E2Adiv\n */\n\n#taiji{\n    border:1px solid #fff;\n    width:300px;\n    height:300px;\n}\n\n/* \n * \u7136\u540E\u5C06div\u53D8\u6210\u4E00\u4E2A\u5DE6\u9ED1\u53F3\u767D\u7684\u5706\n */\n\n#taiji{\n    border-radius:50%;\n    border:none;\n    border-left:150px solid #000;\n    width:150px;\n}\n\n/* \n * \u7136\u540E\u5728\u4E0A\u9762\u52A0\u4E2A\u9ED1\u8272\u7684\u5927\u5706\uFF0C\u4E2D\u95F4\u52A0\u4E2A\u767D\u8272\u5C0F\u5706\n * \u4E0B\u9762\u52A0\u4E2A\u767D\u8272\u7684\u5927\u5706\uFF0C\u4E2D\u95F4\u52A0\u4E2A\u9ED1\u8272\u5C0F\u5706\n */\n\n#taiji::before{\n    content:\'\';\n    width:50px;\n    height:50px;\n    border:50px solid #000;\n    border-radius:50%;\n    position:absolute;\n    top:0;\n    left:-50%;\n    background:#fff;\n}\n\n/* \n * \u5728\u4E0B\u9762\u52A0\u4E2A\u767D\u8272\u7684\u5927\u5706\uFF0C\u4E2D\u95F4\u52A0\u4E2A\u9ED1\u8272\u5C0F\u5706\n */\n\n#taiji::after{\n    content:\'\';\n    width:50px;\n    height:50px;\n    border:50px solid #fff;\n    border-radius:50%;\n    position:absolute;\n    bottom:0;\n    left:-50%;\n    background:#000;\n}\n\n/* \n * \u6700\u540E\u5C31\u662F\u8BA9\u4ED6\u8F6C\u52A8\u8D77\u6765\n */\n\n@keyframes rotateTaiji{\n    from{\n        top:20px;left:50%;\n        transform:\n          translateX(-50%) \n          rotate(0deg);\n    }\n    to{\n        top:20px;\n        left:50%;\n        transform:\n          translateX(-50%) \n          rotate(360deg);\n    }\n}\n\n#taiji{\n    animation: rotateTaiji 2s linear infinite;\n}\n\n/* \n * \u81F3\u6B64\uFF0C\u7ED8\u5236\u5168\u90E8\u5B8C\u6210\uFF0C\u611F\u8C22\u60A8\u7684\u89C2\u770B\uFF01\n */\n\n\n';

var n = -1;
var tempString = '';

var step = function step() {
    setTimeout(function () {
        if (string[++n] === '\n') {
            // 换行
            tempString += '<br>';
        } else if (string[n] === ' ') {
            tempString += '&nbsp;';
        } else {
            tempString += string[n];
        }
        // html显示
        demo.innerHTML = tempString;
        // style 显示
        style.innerHTML = string.substring(0, n);
        content.scrollTo(0, 9999);
        // demo.style.marginTop = -n*1.60 + 'px';
        if (n < string.length - 1) {
            step();
        }
    }, 10);
};
step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.67b347e6.map