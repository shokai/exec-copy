(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // index.js
  var require_exec_copy = __commonJS({
    "index.js"(exports, module) {
      module.exports = function copy(str, onError) {
        if (typeof str !== "string")
          return;
        if (!window || !document)
          return;
        var textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        textarea.setAttribute("readonly", true);
        textarea.style.position = "absolute";
        textarea.style.left = "-1000px";
        textarea.style.top = (window.scrollY || document.body.scrollTop) + "px";
        textarea.value = str;
        textarea.focus();
        textarea.setSelectionRange(0, str.length);
        var result = typeof document.execCommand === "function" && document.execCommand("copy");
        document.body.removeChild(textarea);
        if (!result) {
          if (typeof onError === "function")
            onError(str);
          else
            window.prompt("Copy", str);
        }
        return result;
      };
    }
  });

  // sample/source.js
  var execCopy = require_exec_copy();
  window.addEventListener("load", function(e) {
    var btn = document.getElementById("btnCopy");
    btn.addEventListener("click", function(e2) {
      execCopy(["this is", "multi line", "copied text!!"].join("\n"));
      alert("done!");
    });
  });
})();
