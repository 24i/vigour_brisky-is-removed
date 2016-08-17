# brisky-is-removed

<!-- VDOC.badges travis; standard; npm; coveralls -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/brisky-is-removed.svg?branch=master)](https://travis-ci.org/vigour-io/brisky-is-removed)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/brisky-is-removed.svg)](https://badge.fury.io/js/brisky-is-removed)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/brisky-is-removed/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/brisky-is-removed?branch=master)

<!-- VDOC END -->

<!-- VDOC.jsdoc isRemoved -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var removed = isRemoved(base)

Checks if a property has been removed from a vigour-base object
- **base** (*Base*) - the property to check
- **returns** (*boolean*) removed - `true` if *base* property has been removed, `false` otherwise

<!-- VDOC END -->

```javascript
var isRemoved = require('brisky-is-removed')
var Base = require('vigour-base')
var base = new Base({ bad: true })
base.bad.remove()
isRemoved(base.bad) // true
```