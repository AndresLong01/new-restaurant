 var express = require("express");
 var path = require("path");

 var app = express();
 var PORT = process.env.PORT || 8080;

 app.use(express.urlencoded({ extended: true}));
 app.use(express.json());
 
 let array1 = [];

 app.get("/", function(req, res) {
     res.sendFile(path.join(__dirname, "index.html"));
 });
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/api/tables", function(req, res) {
    return res.json(array1);
});
app.get("/api/wait", function(req, res) {
    return res.json(array1);
});
 app.listen(PORT, function(){
     
 });