

const express=require('express');
const { generate, registerUser, loginUser } = require('../controller/EnergyController');
const router=express.Router();

router.get("/",async(req,res)=>res.send("fsafd"));
router.post("/generate",generate)
router.post("/signup",registerUser);
router.post("/login",loginUser);
  

  
module.exports=router;