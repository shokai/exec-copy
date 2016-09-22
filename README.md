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

Some browser (e.g. Safari) doesnot have `execCommand('copy')`. For fallback, This library automatically open `window.prompt`.

![fallback](https://gyazo.com/ad9e163f57f888b5d31d13ab6cec269a.png)


Also you can overwrite fallback if you need.

```javascript
execCopy('this is copied text!!', function (str) {
  // do something when execCommand('copy') is not available
})
```


## Sample

build sample code (`./sample/source.js`)

    % npm i
    % npm run browserify

open `./sample/index.html`
