const mongoose = require('mongoose');
const { Schema } = mongoose;



const DataSchema = new mongoose.Schema({
    productName: { type: String },
    productCode: { type: String },
    productImage: { type: String },
    unitPrice: { type: String },
    quantity: { type: String },
    totalPrice: { type: String },
    createdDate: { type: Date, default: Date.now() },
},
    { versionKey: false }
);

const ProductsModel = mongoose.model('products', DataSchema);
module.exports = ProductsModel;