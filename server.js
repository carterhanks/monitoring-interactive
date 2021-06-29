const express = require('express');
const path = require('path');
const app = express();
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar');
var rollbar = new Rollbar({
  accessToken: '9898eecc5ca74304810e1f4a021da3f0',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log('Hello world!');

app.use(express.json());

app.get('/', function(req, res) {
    rollbar.log('Hello World');
    res.sendFile(path.join(__dirname, '/public/index.html'));
});




const port = process.env.PORT || 4545;

app.listen(port, function() { 
    console.log(`Server Slappin on ${port}`);
});