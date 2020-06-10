const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/postManageDB', {useNewUrlParser: true, useUnifiedTopology:true},
  err=>{
      if(!err)
        console.log("connect to database success");
      else
        console.log("error while connect to database: "+ JSON.stringify(err, undefined, 2));
          
  });