const User = require("../models/user")();

exports.obtener_todos = function(req, res) {
  User.find()
    .then(usuarios => {
      if (usuarios) {
        res.json({
          status: 200,
          usuarios: usuarios
        });
      }
    })
    .catch(err => {
      res.json({
        status: 404,
        message: "Error al obtener todos los usuarios",
        error: err
      });
    });
};

exports.obtener_por_id = function(req, res) {
  var id = req.params.id;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.

    User.findOne({_id:id})
    .then(usuario => {

      if (usuario) {
        res.json({
          status: 200,
          usuario: usuario
        }); 
      }
      if(!usuario){
        res.json({
          status:404,
          message:'El usuario no existe'
        })
      }
    })
    .catch(err => {
      res.json({
        status: 404,
        message: "Error al obtener usuario por id",
        error: err
      });
    });


  }
  else{
    res.json({
      status:404,
      message:'No has introducido un ID valido'
    })
  }


};

exports.añadir = function(req, res) {

    console.log('BODY = ',req.body)
  const { nombre, apel_1, apel_2, email, fecha_nacimiento } = req.body;

  var nuevoUsuario = {
    
    nombre,
    apel_1,
    apel_2,
    email,
    fecha_nacimiento
  };

  User.create(nuevoUsuario)
    .then(nuevoUsuario => {
      if (nuevoUsuario) {
        res.json({
          status: 200,
          message: "Usuario guardado correctamente"
        });
      }
    })
    .catch(err => {
      res.json({
        status: 404,
        message: "Error al guardar usuario",
        error: err
      });
    });
};

exports.borrar = function(req, res) {
  var id = req.params.id;
  ;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    User.deleteOne({ _id: id })
    .then(usuario => {
      if (usuario) {
        res.send({
          status: 200,
          message: `Usuario borrado`
        });
      }
    })
    .catch(err => {
      res.send({
        status: 404,
        message: "Error al borrar usuario"
      });
    });
  } else {
    
      res.json({
        status:404,
        message:'No has introducido un ID valido'
      })
    
  }
 
};


exports.actualizar = function (req,res){
  const { _id, nombre, apel_1, apel_2, email, fecha_nacimiento } = req.body;


  User.updateOne(
    {"_id":_id},
    {$set:{
      "nombre":nombre,
      "apel_1":apel_1,
      "apel_2":apel_2,
      "email":email,
      "fecha_nacimiento":fecha_nacimiento
    }}
  )
  .then(usuario_actualizado=>{
    if (usuario_actualizado) {
      res.send({
        status:200,
        message:'Usuario actualizado'
      })
    }
    else{
      res.send({
        status:404,
        message:'No se pudo actualizar el usuario'
      })
    }
  })
  .catch( err=>(
    res.send({
      status:404,
      message:'Error al actualizar el usuario',
      error:err
    })  )
    
  )

}
