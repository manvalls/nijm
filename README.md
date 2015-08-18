# Non-invasive JavaScript minifier

`nijm` is a very simple JavaScript minifier, similar to Crockford's JSMin, with support for ES2015 template strings.

## Usage

Import it:

```javascript
var nijm = require('nijm');
```

And then:

```javascript
minSrc = nijm(src);
```

By default nijm keeps some line feeds to make debugging easier. To avoid this and uglify your code, pass `true` as the second argument:

```javascript
uglySrc = nijm(src,true);
```

It also has an executable!

```
nijm input.js > output.js
```
