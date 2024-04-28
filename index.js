const express = require("express");
const app = express();
const db = require('./config/database')
const PORT = 3001;

app.use(express.json());

app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'));

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



app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));