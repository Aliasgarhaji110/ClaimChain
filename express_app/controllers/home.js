const ethCrypto=require('eth-crypto');
const fs=require("fs");
const HDwalletprovider=require("truffle-hdwallet-provider");
const Web3=require("web3");
const session=require("express-session");


module.exports=(app)=>{
    app.get("/home",(req,res)=>{
        console.log(req.session);
        if(req.session.identity!==undefined){
            res.render("home");
        }else{
            res.redirect("/");
        }
        
    }); 

 
}