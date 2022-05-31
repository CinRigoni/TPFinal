const express = require('express');
const router = express.Router();

//Se importa validaciones
const {validator} = require('../validators/rolValidator')

//Se importa controlador de roles
const controller = require('../controllers/rolController')

router.get('/',controller.getRoles);
router.get('/all',controller.getAllRoles);
router.post('/',validator,controller.createRoles);
router.delete('/:id',controller.deleteRoles);
router.put('/:id',validator,controller.updateRoles);
router.get('/:id',controller.getRolesId);


module.exports = router;