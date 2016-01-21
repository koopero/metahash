const PREFIX = '#'

exports.split = split
function split( ob ) {
  return [
    data.apply( null, arguments ),
    meta.apply( null, arguments )
  ]
}

exports.data = data
function data() {
  const result = {}

  for ( var i = 0; i < arguments.length; i ++ ) {
    const arg = arguments[i] || {}
    Object.keys( arg ).forEach( function ( key ) {
      if ( key[0] != PREFIX ) {
        result[key] = arg[key]
      }
    })
  }

  return result
}

exports.meta = meta
function meta() {
  const result = {}

  for ( var i = 0; i < arguments.length; i ++ ) {
    const arg = arguments[i] || {}
    Object.keys( arg ).forEach( function ( key ) {
      if ( key[0] == PREFIX ) {
        result[ key.substr( 1 ) ] = arg[key]
      }
    })
  }

  return result
}
