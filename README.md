# brisky-is-removed
Checks if a property has been removed from a brisky-base object

[![Build Status](https://travis-ci.org/vigour-io/brisky-is-removed.svg?branch=master)](https://travis-ci.org/vigour-io/brisky-is-removed)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/brisky-is-removed.svg)](https://badge.fury.io/js/brisky-is-removed)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/brisky-is-removed/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/brisky-is-removed?branch=master)

--

```javascript
const isRemoved = require('brisky-is-removed')
const base = require('brisky-base')
const obj = base({ bad: true })
obj.bad.remove()
isRemoved(obj.bad) // true
```
