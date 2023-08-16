const ProductsModel = require('../models/ProductsModel');

// Create


exports.CreateProduct = (req, res) => {
    let reqBody = req.body;
    ProductsModel.create(reqBody)
        .then(data => res.status(200).json({ status: "SUCCESS", data: data }))
        .catch(error => res.status(400).json({ status: "FAILED", data: error }))
}

// Read
exports.ReadProduct = (req, res) => {
    const query = {};
    const projection = "productName productCode productImage unitPrice quantity totalPrice createdData";
    ProductsModel.find(query, projection)
        .then(data => res.status(200).json({ status: "SUCCESS", data: data }))
        .catch(error => res.status(400).json({ status: "FAILED", data: error }))
}


//Update

exports.UpdateProduct = (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    const reqBody = req.body;
    ProductsModel.updateOne(query, reqBody)
        .then(data => res.status(200).json({ status: "SUCCESS", data: data }))
        .catch(error => res.status(400).json({ status: "FAILED", data: error }))
}

//Delete

exports.DeleteProduct = (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    // remove or deleteOne
    ProductsModel.deleteOne(query)
        .then(data => res.status(200).json({ status: "SUCCESS", data: data }))
        .catch(error => res.status(400).json({ status: "FAILED", data: error }))
}