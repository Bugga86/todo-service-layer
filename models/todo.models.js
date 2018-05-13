
var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    TaskName:{type:String,require:true},
    Description:{type:String,require:true},
    Status:{type:String,require:true}
})

const TODO=module.exports
=mongoose.model('TODO',todoSchema)
