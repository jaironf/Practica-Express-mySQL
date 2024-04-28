const express = require('express');
// const ProductsControllers = require('../controllers/ProductsControllers');
const router = express.Router();
const db = require('../config/database')


router.post('/postCategory/', (req, res)=>{
    let sql = `INSERT INTO category (category) values ('${req.body.category}');`;
    db.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send('Category added')
    })
});

router.put('/updateCategory/:id', (req, res)=>{
    let sql = `UPDATE category SET category = '${req.body.category}' WHERE id = ${req.params.id}`;
    db.query(sql, (err)=>{
        if (err) throw err;
        res.send(result);
    })
});

router.get('/allCategories', (req, res)=>{
    let sql = 'SELECT * FROM category';
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send('Get all categories')
    })
});

router.get('/category/:id', (req, res)=>{
    let sql = `SELECT * FROM category WHERE id = ${req.params.id}`;
    db.query(sql, (err, result)=>{
        if (err) throw err;
        if (result.length > 0) {
            res.send(result[0]);
        } else {
            res.status(404).send('Category not found');
        }
    });
});

module.exports = router;