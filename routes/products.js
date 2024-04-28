const express = require('express');
const ProductController = require('../controllers/ProductControllers');
const router = express.Router();


router.post('/', ProductController.insert);

router.put('/updateProduct/:id', ProductController.updateProduct);

router.get('/productsWhitCategories', ProductController.getProductsWithCategory);

router.get('/productIdDescendent', ProductController.getDescentProduct);

router.get('/allTheProducts', ProductController.getAll);

router.get('/product/:name', ProductController.getProductByName);

router.get('/product/:id', ProductController.getProductById);

router.delete('/id/:id', ProductController.delete);


module.exports = router;
