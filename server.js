// Create express app
var express = require("express")
var db = require("./database.js")
var app = express()
var cors = require('cors')
const https = require('https');
const fs = require('fs');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + file.originalname)
    }
})
const filter = (req,file,cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true)
    } else {
        cb(null,false)
    }

}
const upload = multer({
    storage : storage, 
    limits:{ 
        fileSize: 1024*1024*5
    }, 
    fileFilter: filter
});
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use('/uploads',express.static('uploads'))

var allowedOrigins = ['http://localhost:3000',
                      'https://filsdepute.ca'];
app.use(cors({
  origin: function(origin, callback){    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }    return callback(null, true);
  }
}));


var key = fs.readFileSync(__dirname + '/fdp.key');
var cert = fs.readFileSync(__dirname + '/api_filsdepute_ca.crt');
var options = {
  key: key,
  cert: cert
};

// Server port
var port = 443

var server = https.createServer(options, app);

server.listen(port, () => {
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


app.post("/api/fdp/",upload.single('image'),(req, res, next) => {
    console.log(req.file)
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
    var nom_image;
    if(req.file==null){
        nom_image = "missing"
    } else{
        nom_image = req.file.filename
    }
    var data = {
        nom: req.body.nom,
        raison : req.body.raison,
        date: req.body.date,
        image: req.file.filename,
    }
    
    var sql ='INSERT INTO fdp (nom, raison, date,image) VALUES (?,?,?,?)'
    var params =[data.nom, data.raison,data.date,data.image]
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
