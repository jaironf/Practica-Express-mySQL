const db = require('../config/database');


const CategoryControllers ={
    insert(req, res) {
        let sql = `INSERT INTO category (category) values ('${req.body.category}');`;
        db.query(sql, (err, result)=>{
            if (err) throw err;
            console.log(result);
            res.send('Category added')
        })
    },
    updateCategory(req, res) {
        let sql = `UPDATE category SET category = '${req.body.category}' WHERE id = ${req.params.id}`;
        db.query(sql, (err)=>{
            if (err) throw err;
            res.send(result);
        })
    },
    getall (req, res){
        let sql = `SELECT * FROM category WHERE category = '${req.body.category}'`;
        db.query(sql, (err, result)=>{
            if(err)throw err;
            console.log(result);
            res.send('Get all categories')
        })
    },
    getCategoryById (req, res) {
        let sql = `SELECT * FROM category WHERE id = ${req.params.id}`;
        db.query(sql, (err, result)=>{
            if (err) throw err;
            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).send('Category not found');
            }
        });
    }
}

module.exports = CategoryControllers;