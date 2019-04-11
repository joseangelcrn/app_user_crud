module.exports = function () {
    
    const mongoose = require('mongoose');
    var db = require('../libs/db-connection.js')();
    var Schema = mongoose.Schema;


    const usuariosSchema = new Schema({
         nombre: String,
         apel_1: String,
         apel_2: String,
         email:String,
         fecha_nacimiento: Date
    });

    return db.model("usuarios",usuariosSchema);
}