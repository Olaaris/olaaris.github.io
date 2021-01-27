var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{

        console.log('Connected to the SQLite database.');
        //db.run("drop table fdp");
        /*db.run(`CREATE TABLE fdp (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom text, 
            raison text,
            date text
            CHECK(length("nom") <= 20 AND length("raison") <= 20)
            )`);*/
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO fdp (nom, raison) VALUES (?,?)'
                console.log("g")
                db.run(insert, ["admin","admin123456"])
                db.run(insert, ["user","user123456"])
            }
        };  
    }
});


module.exports = db