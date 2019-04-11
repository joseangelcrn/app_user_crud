const express = require('express');
const router = express.Router();
const usuarios_controller = require('../controllers/user');


router.post('/add',usuarios_controller.añadir);
router.delete('/delete/:id',usuarios_controller.borrar);
router.put('/update',usuarios_controller.actualizar);
router.get('/all',usuarios_controller.obtener_todos);
router.get('/:id',usuarios_controller.obtener_por_id);



module.exports = router;
