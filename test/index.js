'use strict'
const test = require('tape')
const base = require('brisky-base')
const isRemoved = require('../')

const b1 = base()
b1.remove()

const b2 = base({ wrong: true })
b2.wrong.remove()

const testCases = [
// ['base', expectedResult]
  [base({}), false], // empty
  [base({ a: 'a' }), false],
  [b1, true],
  [b2.wrong, true]
]

test('isRemoved', t => {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isRemoved(item[0]), item[1], 'isRemoved(' + item[0] + ') === ' + item[1])
  })
})
