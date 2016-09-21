# exec-copy

- https://github.com/shokai/exec-copy
- https://npmjs.com/package/exec-copy


## Usage

copy text to clipboard using `execCommand('copy')`.

```javascript
var execCopy = require('exec-copy')

button.addEventListener('click', function (e) {
  execCopy('this is copied text!!')
})
```

### fallback

When `execCommand('copy')` is not available, this library automatically open window.prompt for fallback.

(image here)


You can overwrite it.

```javascript
execCopy('this is copied text!!', function (str) {
  window.prompt('Copy text', str)
})
```
