const express = require('express');
const CategoryControllers = require('../controllers/CategoryControllers');
const router = express.Router();



router.post('/postCategory/', CategoryControllers.insert);

router.put('/updateCategory/:id', CategoryControllers.updateCategory);

router.get('/allCategories', CategoryControllers.getall);

router.get('/category/:id', CategoryControllers.getCategoryById);

module.exports = router;