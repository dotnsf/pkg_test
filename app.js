//.  app.js
var fs = require( 'fs' );

fs.readFile( '/etc/hostname', "utf-8", function( err, result ){
  if( err ){
    console.log( JSON.stringify( err, null, 2 ) );
  }else{
    console.log( result );
  }
});


