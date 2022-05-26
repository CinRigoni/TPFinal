const express = require('express');
const router = express.Router();

//FALTAN VALIDACIONES

//Se importa controlador de rubro general
const controller = require('../controllers/rubroGeneralController')

router.get('/',controller.getRubros);
router.get('/all',controller.getAllRubros);
router.post('/',validateRubro,controller.createRubros);
router.delete('/:id',controller.deleteRubros);
router.put('/:id',validateRubro,controller.updateRubros);
router.get('/:id',controller.getRubrosId);


module.exports = router;