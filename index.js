const express = require("express");
const app = express();
const mysql = require("mysql2");
const PORT = 3001;

app.use(express.json());

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "jJ03101526",
    database: "ecommerceDB",
});
db.connect();

app.get('/createdb', (req,res)=>{
    let sql = 'CREATE DATABASE ecommerceDB';
    db.query(sql,(err,result)=>{
        if (err) throw err;
        console.log(result);
        res.send('Database created successfully')
    })
});

app.get('/createProductTable', (req, res)=>{
    let sql = 'CREATE TABLE product(id INT AUTO_INCREMENT, name VARCHAR(255), price FLOAT, PRIMARY KEY(id))';
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send('Product added successfully')
    })
});

app.get('/createCategoryTable', (req, res)=>{
    let sql = 'CREATE TABLE category(id INT AUTO_INCREMENT, category VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send('Category added successfully')
    })
});

app.get('/createCategoryProductTable', (req, res)=>{
    let sql = 'CREATE TABLE category_product(id INT AUTO_INCREMENT, product_id INT, category_id INT, PRIMARY KEY(id), FOREIGN KEY(product_id) REFERENCES product(id), FOREIGN KEY(category_id) REFERENCES category(id))';
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send('Category added successfully')
    })
});


app.post('/', (req, res)=>{
    let sql = `INSERT INTO product (name, price) values ('${req.body.name}', '${req.body.price}');`;
    db.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send('Product added')
    })
});

app.post('/postCategory/', (req, res)=>{
    let sql = `INSERT INTO category (category) values ('${req.body.category}');`;
    db.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send('Category added')
    })
});

app.put('/updateProduct/:id', (req, res)=>{
    let sql = `UPDATE product SET name = '${req.body.name}' WHERE id = ${req.params.id}`;
    db.query(sql, (err)=>{
        if (err) throw err;
        res.send(result);
    })
});

app.put('/updateCategory/:id', (req, res)=>{
    let sql = `UPDATE category SET category = '${req.body.category}' WHERE id = ${req.params.id}`;
    db.query(sql, (err)=>{
        if (err) throw err;
        res.send(result);
    })
});

app.get('/productsName', (req, res)=>{
    let sql = 'SELECT * FROM product';
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send()
    })
})


app.delete('/id/:id', (req, res)=>{
    let sql = `DELETE FROM product WHERE id = ${req.params.id}`;
    db.query(sql, (err, result)=>{
        if (err) throw err;
        res.send('Product deleted')
    })
})

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));