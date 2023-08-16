const express = require('express');
const ProductsController = require('../controllers/ProductsController');
const router = express.Router();



// Api routing End point


//C= Create
router.post('/createProduct', ProductsController.CreateProduct);

//R= Read
router.get('/readProduct', ProductsController.ReadProduct);

// U= Update
router.post('/updateProduct/:id', ProductsController.UpdateProduct);

// D = Delete
router.delete('/deleteProduct/:id', ProductsController.DeleteProduct);




module.exports = router;