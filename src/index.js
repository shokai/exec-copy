function stringLength (str) {
  return Array.from(str).length
}

export default function copy (str, onError) {
  if (typeof str !== 'string') return
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.setAttribute('readonly', true)
  input.style.position = 'absolute'
  input.style.left = '-1000px'
  input.style.top = document.body.scrollTop + 'px'
  input.value = str
  input.focus()
  input.setSelectionRange(0, stringLength(str))
  const result = document.execCommand('copy')
  document.body.removeChild(input)
  if (!result) {
    if (typeof onError === 'function') return onError(str)
    window.prompt('Copy', str) // fallback
  }
}
