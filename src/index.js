export default function copy (str, onError) {
  if (typeof str !== 'string') return
  if (!window || !document) return
  const input = (str.includes('\n'))
  ? document.createElement('textarea') : document.createElement('input')
  document.body.appendChild(input)
  input.setAttribute('readonly', true)
  input.style.position = 'absolute'
  input.style.left = '-1000px'
  input.style.top = document.body.scrollTop + 'px'
  input.value = str
  input.focus()
  input.setSelectionRange(0, str.length)
  const result =
          typeof document.execCommand === 'function' &&
          document.execCommand('copy')
  document.body.removeChild(input)
  if (!result) {
    if (typeof onError === 'function') onError(str)
    else window.prompt('Copy', str) // fallback
  }
  return result
}
