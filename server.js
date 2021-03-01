// Create express app
var express = require("express")
var db = require("./database.js")
var app = express()
var cors = require('cors')
const https = require('https');
const fs = require('fs');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


var key = fs.readFileSync(__dirname + '/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/selfsigned.crt');
var options = {
  key: key,
  cert: cert
};

// Server port
var HTTP_PORT = 80

var server = https.createServer(options, app);

server.listen(HTTP_PORT, () => {
  console.log("server starting on port : " + port)
});

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Insert here other API endpoints
app.get("/api/fdp", (req, res, next) => {
    var sql = "select * from fdp order by id desc"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});


app.post("/api/fdp/",(req, res, next) => {
    var errors=[]
    if (!req.body.nom){
        errors.push("No name specified");
    }
    if (!req.body.raison){
        errors.push("No why specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        nom: req.body.nom,
        raison : req.body.raison,
        date: req.body.date
    }
    var sql ='INSERT INTO fdp (nom, raison, date) VALUES (?,?,?)'
    var params =[data.nom, data.raison,data.date]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
});

app.post("/api/delfdp/",(req, res, next) => {
    var errors=[]
    if (!req.body.id){
        errors.push("No id specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        id: req.body.id,
    }
    var sql ='DELETE FROM fdp WHERE id = '+data.id
    db.run(sql, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
});



// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
