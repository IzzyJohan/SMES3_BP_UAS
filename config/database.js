// TODO 3: SETUP CONFIG DATABASE
//Import Mysql
const mysql = require("mysql");

//Import Dotenv

require("dotenv").config();

//Buat koneksi
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

//Koneksi ke database
db.connect(function(err){
    if(err) {
        console.log(`Koneksi error: ${err}`);
        return;
    }
    else {
        console.log(`Koneksi berhasil`);
        return;
    }
});

//Export db
module.exports = db;