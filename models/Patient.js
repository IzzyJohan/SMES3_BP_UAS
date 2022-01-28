// TODO 5: SETUP MODEL
const res = require("express/lib/response");
const db = require("../config/database");


//Model Student
class Patient {
    static all() {
        return new Promise((resolve, reject) => {
            //Lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM patients";
            db.query(sql, (err, results) => {
                resolve(results);
            }); 
        });        
    }

    static async create(data) {
        const id = await new Promise((resolve, reject) =>{
            //query insert ke database
            const sql = 'INSERT INTO patients SET ?'
            db.query(sql,data,(err,results) => {
                resolve(results.insertId);
            });
        });

        return new Promise((resolve, reject) => {
            //query select by id
            const sql = 'SELECT * FROM patients WHERE id = ?'
            db.query(sql,id,(err,results) => {
                resolve(results);
            });
        });
    }

    static find(id) {
        //Lakukan promise SELECT BY ID
        return new Promise((resolve, reject) => {
            //query select by id
            const sql = 'SELECT * FROM patients WHERE id = ?'
            db.query(sql,id,(err,results) => {
                resolve(results[0]);
            });
        });
    }

    static search(name) {
        //Lakukan promise SELECT BY NAME
        return new Promise((resolve, reject) => {
            //query select by name
            const sql = 'SELECT * FROM patients WHERE name = ?'
            db.query(sql,name,(err,results) => {
                //console.log(name);
                resolve(results);
            });
        });
    }

    static findByStatus(status) {
        //Lakukan promise SELECT BY STATUS
        return new Promise((resolve, reject) => {
            //query select by status
            const sql = 'SELECT * FROM patients WHERE status = ?'
            db.query(sql,status,(err,results) => {
                //console.log(status);
                resolve(results);
            });
        });
    }

    static async update(id, data) {
        //Update data
        await new Promise ((resolve, reject) => {
            //Query untuk update data
            const sql = "UPDATE patients SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                (resolve(results));
            });
        });

        //SELECT data by id 
        const patient = await this.find(id);
        return patient;
    }

    static delete(id) {
        // Query delete 
        return new Promise ((resolve, reject) => {
            const sql = "DELETE FROM patients WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }
} 

// Export model
module.exports = Patient;