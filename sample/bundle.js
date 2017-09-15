(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var copy = require('./lib/').default;
module.exports = copy;

},{"./lib/":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = copy;
function copy(str, onError) {
  if (typeof str !== 'string') return;
  if (!window || !document) return;
  var textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.setAttribute('readonly', true);
  textarea.style.position = 'absolute';
  textarea.style.left = '-1000px';
  textarea.style.top = (window.scrollY || document.body.scrollTop) + 'px';
  textarea.value = str;
  textarea.focus();
  textarea.setSelectionRange(0, str.length);
  var result = typeof document.execCommand === 'function' && document.execCommand('copy');
  document.body.removeChild(textarea);
  if (!result) {
    if (typeof onError === 'function') onError(str);else window.prompt('Copy', str); // fallback
  }
  return result;
}

},{}],3:[function(require,module,exports){
'use strict';

/* eslint-env browser */

var execCopy = require('../');
// var execCopy = require('exec-copy')

window.addEventListener('load', function (e) {
  var btn = document.getElementById('btnCopy');
  btn.addEventListener('click', function (e) {
    execCopy(['this is', 'multi line', 'copied text!!'].join('\n'));
    alert('done!');
  });
});

},{"../":1}]},{},[3]);
