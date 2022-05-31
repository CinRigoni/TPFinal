const express = require('express');
const router = express.Router();

//Se importa validaciones
const {validator} = require('../validators/rubroGeneralValidator')

//Se importa controlador de rubro general
const controller = require('../controllers/rubroGeneralController')

router.get('/',controller.getRubros);
router.get('/all',controller.getAllRubros);
router.post('/',validator,controller.createRubros);
router.delete('/:id',controller.deleteRubros);
router.put('/:id',validator,controller.updateRubros);
router.get('/:id',controller.getRubrosId);


module.exports = router;