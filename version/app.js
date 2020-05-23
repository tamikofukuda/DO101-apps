const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

<<<<<<< HEAD
    response = 'This is version 2 Tami of the app.' + '\n';
=======
    response = 'This is version 1 Tamiko of the app.' + '\n';
>>>>>>> 45e6e22017c2fd35feb1ddcce7d3400fad7eebf0

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
