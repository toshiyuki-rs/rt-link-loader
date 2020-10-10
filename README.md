# Runtime style loader for webapck

Runtim style loader is a webpack loader. You get stylesheet object at runtime. 
At compile time, you do not neeed to prepare complete css source file, but file
name has to be identified with html link tag href.
This loader injects a procedure to find stylesheet from document object. 


main.js
``` javascript
const styleSheet = require('main.css')

// use style sheet
// you see style sheet api at
// https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet

const pTags = document.getElementsByTagName('p')
 
pTags[0].innerText = style.rules[0].cssText
```

main.css at compile time
``` css
/* empty css at compile time */
```

https://example.com/rt-style-loader/index.html
``` html
<!DOCTYPE html>
<html>
<head>
  <link href="main.css" rel="sylesheet">
</head>
<body>
  <h1>main.css first content</h>
  <p><p>
</body>
</html>
```
https://example.com/rt-style-loader/main.css
``` css
p {
background-color: #ABB2B9;
}
```


[You can see the result by jsfiddle](https://jsfiddle.net/toshiyuki_rs/rmq3ujfh/)

[This is example source](tree/master/exp)
