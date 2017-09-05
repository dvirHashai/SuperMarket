const express = require('express');
const router = express.Router();
const Shop = require('../models/shops');



router.get('/list',(req,res,next) => {
    console.log("In Shop List");
    Shop.getAllShops({},function(err,callback){
        if(err){
            console.log(callback)
            res.json({success: false, msg:'Failed fetching all shops'})
        }else{
            console.log("inSuccess");
            res.json({callback,success:true, msg:'Listing shops '});
        }
    });
});


//Shop.saveShops();






module.exports = router;