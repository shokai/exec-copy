module.exports = function copy(str, onError) {
  if (typeof str !== 'string') return
  if (!window || !document) return
  var textarea = document.createElement('textarea')
  document.body.appendChild(textarea)
  textarea.setAttribute('readonly', true)
  textarea.style.position = 'absolute'
  textarea.style.left = '-1000px'
  textarea.style.top = (window.scrollY || document.body.scrollTop) + 'px'
  textarea.value = str
  textarea.focus()
  textarea.setSelectionRange(0, str.length)
  var result =
    typeof document.execCommand === 'function' && document.execCommand('copy')
  document.body.removeChild(textarea)
  if (!result) {
    if (typeof onError === 'function') onError(str)
    else window.prompt('Copy', str) // fallback
  }
  return result
}
