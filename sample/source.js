/* eslint-env browser */

var execCopy = require('../')
// var execCopy = require('exec-copy')

window.addEventListener('load', function (e) {
  var btn = document.getElementById('btnCopy')
  btn.addEventListener('click', function (e) {
    execCopy('this is copied text!!')
    alert('done!')
  })
})
