const express = require('express');
const router = express.Router();

//Se importa validaciones
const {validator} = require('../validators/rolValidator')

//Se importa controlador de roles
const controller = require('../controllers/rolController')

router.get('/api/roles',controller.getRoles);
router.get('/api/roles/all',controller.getAllRoles);
router.post('/api/roles',validator,controller.createRoles);
router.delete('/api/roles/:id',controller.deleteRoles);
router.put('/api/roles/:id',validator,controller.updateRoles);
router.get('/api/roles/:id',controller.getRolesId);


module.exports = router;