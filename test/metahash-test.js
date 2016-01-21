const metahash = require('../index')

const assert = require('chai').assert

describe('split', function () {
  it('will work', function () {
    const input = {
      '#meta1': 'foo',
      '#meta2': 'bar',
      child1: 'baz',
      child2: 'bork'
    }

    const result = metahash.split( input )

    assert.isArray( result )
    assert.equal( result.length, 2 )

    const data = result[0]

    assert.isObject( data )
    assert.deepEqual( data, { child1: 'baz', child2: 'bork' } )

    const meta = result[1]

    assert.isObject( meta )
    assert.deepEqual( meta, { meta1: 'foo', meta2: 'bar' } )

  })
})

describe('readme', function () {
  it('example works', function () {

    const metahash = require('../index')

    const object = {
      "#title": 'critters',
      'coyote': 1,
      'fox': 2,
      0: 'bear'
    }

    assert.deepEqual(
      metahash.data( object ),
      { coyote: 1, fox: 2, 0: 'bear' }
    )

    assert.deepEqual(
      metahash.meta( object ),
      { title: 'critters' }
    )

  })
})
