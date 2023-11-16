var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let food = require('../models/food');

module.exports.Displayfood = async (req,res,next)=>{ //< Mark function as async
    try{
       const foodtracker = await food.find(); //< Use of await keyword
       res.render('food/list', {
          title: 'Food List', 
          foodtracker: foodtracker
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('/foodtrackker', {
          error: 'Error on server'
       });
    }
 };

 module.exports.Addfood= async (req,res,next)=>{
    try{
        res.render('food/add',
        {
            title:'Add food'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('/foodtracker',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.Processfood = async (req,res,next)=>{
    try{
        let newfood = food({
            "name":req.body.name,
            "description": req.body.description,
            "Calories": req.body.Published,
            "cost": req.body.cost
        });
        food.create(newfood).then(() =>{
            res.redirect('/foodtracker')
        })
    }
    catch(error){
        console.error(err);
        res.render('/foodtracker',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.Editfood = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const foodToEdit = await food.findById(id);
    res.render('food/edit',
    {
        title:'Edit food',
        food:foodToEdit
    })
}
catch(error){
    console.error(err);
    res.render('/foodtracker',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditfood = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedfood = food({
            "_id":id,
            "name":req.body.name,
            "description": req.body.description,
            "Calories": req.body.Calories,
            "cost": req.body.cost
        });
        food.findByIdAndUpdate(id,updatedfood).then(()=>{
            res.redirect('/foodtracker')
        });
    }
    catch(error){
        console.error(err);
        res.render('/foodtracker',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.Deletefood = (req,res,next)=>{
    try{
        let id = req.params.id;
        food.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/foodtracker')
        })
    }
    catch(error){
        console.error(err);
        res.render('/foodtracker',
        {
            error: 'Error on the server'
        });
    }
}


