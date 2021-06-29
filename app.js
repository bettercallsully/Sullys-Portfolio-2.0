//express module
const express = require('express');

//express app
const app = express();

//default route
app.get('/', function(req, res)) {
    response.send(index.html());
}