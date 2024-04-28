const express = require('express');
// const ProductsControllers = require('../controllers/ProductsControllers');
const router = express.Router();
const db = require('../config/database')

router.post('/', (req, res)=>{
    let sql = `INSERT INTO product (name, price) values ('${req.body.name}', '${req.body.price}');`;
    db.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send('Product added')
    })
});

router.put('/updateProduct/:id', (req, res)=>{
    let sql = `UPDATE product SET name = '${req.body.name}' WHERE id = ${req.params.id}`;
    db.query(sql, (err)=>{
        if (err) throw err;
        res.send(result);
    })
});

// router.get('/productsWhitCategories', (req, res)=>{
//     let sql = 'SELECT * FROM category_product';
//     db.query(sql, (err, result)=>{
//         if(err)throw err;
//         console.log(result);
//         res.send('Products whit its categories')
//     })
// });



// router.get('/productPriceDescendent', (req, res)=>{
//     let sql = `SELECT FROM product ORDER BY price DESC`;
//     db.query(sql, (err, result)=>{
//         if (err) throw err;
//         res.send(result)
//     })
// })

router.get('/allTheProducts', (req, res)=>{
    let sql = 'SELECT * FROM product';
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send('Get all the products')
    })
});


//NO FUNCIONA MIRAR MAS TARDE
// router.get('/product/:name', (req, res)=>{
//     let sql = `SELECT * FROM product WHERE name = '${req.params.name}'`;
//     db.query(sql, (err, result)=>{
//         if (err) throw err;
//         if(result.length > 0){
//             res.send(result[0]);
//         }else{
//             res.status(404).send('Product not found')
//         }
//     });
// });

router.get('/product/:id', (req, res)=>{
    let sql = `SELECT * FROM product WHERE id = ${req.params.id}`;
    db.query(sql, (err, result)=>{
        if (err) throw err;
        if(result.length > 0){
            res.send(result[0]);
        }else{
            res.status(404).send('Product not found')
        }
    });
});

router.delete('/id/:id', (req, res)=>{
    let sql = `DELETE FROM product WHERE id = ${req.params.id}`;
    db.query(sql, (err, result)=>{
        if (err) throw err;
        res.send('Product deleted')
    })
});


module.exports = router;
