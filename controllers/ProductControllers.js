const db = require('../config/database');


const ProductController ={
    insert (req, res) {
        let sql = `INSERT INTO product (name, price) values ('${req.body.name}', '${req.body.price}');`;
        db.query(sql, (err, result)=>{
            if (err) throw err;
            console.log(result);
            res.send('Product added')
        })
    },
    updateProduct (req, res) {
        let sql = `UPDATE product SET name = '${req.body.name}' WHERE id = ${req.params.id}`;
        db.query(sql, (err)=>{
            if (err) throw err;
            res.send(result);
        })
    },
    getProductsWithCategory (req, res){
            let sql = 'SELECT * FROM category_product';
            db.query(sql, (err, result)=>{
                if(err)throw err;
                console.log(result);
                res.send('Products whit its categories')
            })
        },
        getDescentProduct(req, res) {
            let sql = `SELECT * FROM product ORDER BY id DESC`;
            db.query(sql, (err, result)=>{
                if (err) throw err;
                res.send(result)
            })
        },
        getAll(req, res) {
            let sql = 'SELECT * FROM product';
            db.query(sql, (err, result)=>{
                if(err)throw err;
                console.log(result);
                res.send('Get all the products')
            })
        },
        getProductByName(req, res){
                let sql = `SELECT * FROM product WHERE name = '${req.params.name}'`;
                db.query(sql, (err, result)=>{
                    if (err) throw err;
                    if(result.length > 0){
                        res.send(result[0]);
                    }else{
                        res.status(404).send('Product not found')
                    }
                });
         },
        getProductById (req, res){
            let sql = `SELECT * FROM product WHERE id = ${req.params.id}`;
            db.query(sql, (err, result)=>{
                if (err) throw err;
                if(result.length > 0){
                    res.send(result[0]);
                }else{
                    res.status(404).send('Product not found')
                }
            });
        },
        delete(req, res) {
            let sql = `DELETE FROM product WHERE id = ${req.params.id}`;
            db.query(sql, (err, result)=>{
                if (err) throw err;
                res.send('Product deleted')
            })
        }
}

module.exports = ProductController;