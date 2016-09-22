# exec-copy

Copy text to clipboard using `execCommand('copy')` on Web browser.

- https://github.com/shokai/exec-copy
- https://npmjs.com/package/exec-copy


## Usage

```javascript
var execCopy = require('exec-copy')

button.addEventListener('click', function (e) {
  execCopy('this is copied text!!')
})
```

### Fallback

Some browser doesnot have `execCommand('copy')` (e.g. safari). For fallback, This library automatically open `window.prompt`.

(image here)


### Overwrite fallback

```javascript
execCopy('this is copied text!!', function (str) {
  /* do something when execCommand('copy') is not available */
})
```


## Sample

build sample code (`./sample/source.js`)

    % npm i
    % npm run browserify

open `./sample/index.html`
