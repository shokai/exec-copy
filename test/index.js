const execCopy = require('../')
const { assert } = require('chai')

describe('exec-copy', function () {
  it('should be a function', () => {
    assert.isFunction(execCopy)
  })
})
