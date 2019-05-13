'use strict';

const express = require('express');
const app = express();
var path = require('path');
const port = 8080;


app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.listen(8080);

//app.listen(port, () => console.log(`Listening on port ${port}!`));

setInterval(function () {
    var dateOutput = new Date().toISOString().
    replace(/T/, ' ').
        replace(/\..+/, '');

    console.log("The current date and time is ", dateOutput);
}, 30000);