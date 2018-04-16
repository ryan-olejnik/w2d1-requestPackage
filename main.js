var request  = require('request');
var fs = require('fs');

request('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(error){throw error;})
  .on('response', function(response){
    console.log('HTTPS Response Code: ', response.statusCode);
    console.log('Status Message:', response.statusMessage);
    console.log('Content Type:', response.headers['content-type']);
    console.log('downloading Image...');

  })
  .on('end', function(){console.log('download complete')})
  .pipe(fs.createWriteStream('./future.jpg'));


