module.exports = function Connection() {
    let db;
  
    const mongoose = require('mongoose');
  
  
    if (!db) {

        db = mongoose.createConnection('mongodb://localhost:27017/userBD',{useNewUrlParser:true});
  
    }
      

    return db;
  
  };
  