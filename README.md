# vigour-base-is-removed

<!-- VDOC.badges travis; standard; npm; coveralls -->

<!-- VDOC.jsdoc isRemoved -->

```javascript
var isRemoved = require('vigour-base-is-removed')
var Base = require('vigour-base')
var base = new Base({ bad: true })
base.bad.remove()
isRemoved(base.bad) // true
```