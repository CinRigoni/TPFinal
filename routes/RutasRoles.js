const express = require('express');
const router = express.Router();

//FALTA VALIDACIONES

//Se importa controlador de roles
const controller = require('../controllers/rolController')

router.get('/',controller.getRoles);
router.get('/all',controller.getAllRoles);
router.post('/',validateBebida,controller.createRoles);
router.delete('/:id',controller.deleteRoles);
router.put('/:id',validateBebida,controller.updateRoles);
router.get('/:id',controller.getRolesId);


module.exports = router;