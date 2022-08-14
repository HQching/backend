const order = require("./orders");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

app = express(); //this is an instance of Express Application (web server)
app.use(cors());
app.use(bodyparser.json());

app.use(order.router); 

app.listen(3000); //listen to port 3000. to go to link go to localhost:3000
//default port is 80 for http
