/* eslint-env mocha */

import execCopy from '../'
import {assert} from 'chai'

describe('exec-copy', function () {
  it('should be a function', () => {
    assert.isFunction(execCopy)
  })
})
