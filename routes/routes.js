
var express = require('express');
var router = express.Router();
var TODO = require('../models/todo.models');
router.get('/todos',(req,res,next)=>{
    console.log("Todo Get method is called");
    TODO.find((err,todos)=>{
        if(err){
            console.log(err);
        } else {
            res.json(todos);
        }
    });
})
router.get('/todos/:id',(req,res,next)=>{
    console.log("Todo get by id methid is called");
    TODO.findById({_id:req.params.id},(err,result)=>{
        if(err)  res.json(err);
         else res.json(result);
        
    })
    
})
router.post('/todos',(req,res,next)=>{
    console.log("Todo Post method is called")
    let newToDo = new TODO({
        TaskName: req.body.TaskName,
        Description: req.body.Description,
        Status: 'Incomplete'
    })
    newToDo.save((err,result)=>{
        if(err) res.json(err);
        else res.json(result);
    })
})
router.put('/todos/:id',(req,res,next)=>{
    console.log("Todo put method is called")
    TODO.findByIdAndUpdate({_id : req.params.id},{ $set : {
        TaskName: req.body.TaskName,
        Description: req.body.Description,
        Status: req.body.Status
    }},
    (err,result)=>{
        if(err) res.json(err);
        else 
        TODO.findById({_id:req.params.id},(err1,result1)=>{
            if(err1) res.json(err1);
            else res.json(result1);

        })
    })
})

router.delete('/todos/:id',(req,res,next)=>{
    console.log("Todo Remove method is called")
    TODO.remove({_id:req.params.id},(err,result)=>{
        if(err) res.json(err);
        else res.json(result);
    })
})


module.exports = router;