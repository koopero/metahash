# metahash
Splits meta and data from an object, using the # as a prefix for meta.

```js

const metahash = require('metahash')

const object = {
  "#title": 'critters',
  'coyote': 1,
  'fox': 2,
  0: 'bear' 
}

metahash.data( object )
// { coyote: 1, fox: 2, 0: 'bear' }

metahash.meta( object )
// { title: 'critters' }
