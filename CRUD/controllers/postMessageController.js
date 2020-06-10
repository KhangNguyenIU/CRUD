const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId

var {PostMessage} = require('../models/postMessage')

router.get('/',(req, res)=>{
  PostMessage.find((err, docs)=>{
    if(!err) res.send(docs)
    else console.log("error while retrieve all records: "+ JSON.stringify(err, undefined, 2));   
  })
})

router.post('/',(req, res)=>{
  var newRecord =new PostMessage({
    title :req.body.title,
    message : req.body.message
  })

  newRecord.save((err, docs)=>{
    if(!err) res.send(docs)
    else console.log("error while create new record: "+ JSON.stringify(err, undefined, 2));
    
    
  })
})

router.put('/:id',(req, res)=>{
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: '+ req.params.is);

  var updateRecord ={
    title : req.body.title,
    message : req.body.message
  }

  PostMessage.findByIdAndUpdate(req.params.id,  updateRecord , {new: true},(err, docs)=>{
    if(!err) res.send(docs)
    else console.log("Error while updating record: "+ JSON.stringify(err, undefined,2));
     
  })
})

router.delete('/:id',(req, res)=>{
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: '+ req.params.id)

  PostMessage.findByIdAndRemove(req.params.id, (err, docs)=>{
    if(!err) res.send(docs)
    else console.log("Error while deleting record: "+ JSON.stringify(err, undefined,2));
  })
})
module.exports = router;
