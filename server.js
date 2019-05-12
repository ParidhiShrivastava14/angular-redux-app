var express = require('express');
var cors = require('cors');
var fs = require('fs');
var app = express();

app.use(express.static('public'));

app.use(cors());

app.get('/getShares', function (req, res) {
    fs.readFile('shares-data.json', function(err, data) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.send(data);
        res.end();
    });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})