const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const Product = require('../models/product');

//create
router.post('/create', (req, res, next) => {
    console.log("server side!!")
    let newProduct = new Product({
        serialNumber:  req.body.serialNumber,
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        weightable: req.body.weightable,
        productPrice: req.body.productPrice,
        productManufacturer: req.body.productManufacturer,
        productStoreID: req.body.productStoreID,
    });

    console.log(newProduct);
    Product.addProduct(newProduct, (err, product) => {
        if(err){
            console.log("problem");
            res.json({success: false, msg:'Failed to create product'});
        } else {
            res.json({success: true, msg:'Product Created'});
        }
    });

});

router.get('/list',(req,res,next) => {
    console.log("In Router");
    Product.getAllProducts({},function(err,callback){
        if(err){
            console.log(callback)
            res.json({success: false, msg:'Failed fetching all products'})
        }else{
            console.log("inSuccess");
            res.json({callback,success:true, msg:'Listing product '});
        }
    });
});

router.post('/update',(req,res,next) => {
    console.log("In Update");

    let newProduct = new Product({
        serialNumber:  req.body.serialNumber,
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        weightable: req.body.weightable,
        productPrice: req.body.productPrice,
        productManufacturer: req.body.productManufacturer,
        productStoreID: req.body.productStoreID,
    });

    Product.updateProduct(newProduct,function(err,callback){
        if(err){
            console.log(callback)
            res.json({success: false, msg:'Failed to update product'})
        }else{
            console.log("inSuccess");
            res.json({callback,success:true, msg:'Success TO Update product '});
        }
    });
});



router.post('/delete',(req,res,next) => {
    console.log("In Delete");

    let newProduct = new Product({
        serialNumber:  req.body.serialNumber,
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        weightable: req.body.weightable,
        productPrice: req.body.productPrice,
        productManufacturer: req.body.productManufacturer,
        productStoreID: req.body.productStoreID,
    });
    console.log(newProduct);
    Product.deleteProduct(newProduct,function(err,callback){
        if(err){
            console.log(callback)
            res.json({success: false, msg:'Failed to Delete product'})
        }else{
            console.log("inSuccess");
            res.json({callback,success:true, msg:'Success TO Delete product '});
        }
    });
});


router.post('/search',(req,res,next) => {
    console.log("In Search");
    console.log(req.body);
    const product ={
        name: req.body.name,
        category: req.body.category,
        price: req.body.price
    };

    if(product.price == ''){
        product.price = 1000000;
    }
    Product.searchProductsNameCategoryAndPrice(product,function(err,callback){
        if(err){
            console.log(callback)
            res.json({success: false, msg:'Failed fetching all products'})
        }else{
            console.log("inSuccess");
            res.json({callback,success:true, msg:'Listing product '});
        }
    });
});


router.get('/statistics',(req,res,next) => {
    console.log("In Statistics");


    Product.getStatistics(function(err,callback){
        if(err){
            console.log(callback)
            res.json({success: false, msg:'Failed fetching all products'})
        }else{
            console.log("inSuccess");
            res.json({callback,success:true, msg:'Listing product '});
        }
    });
});


//Product.saveProducts();
module.exports = router;

