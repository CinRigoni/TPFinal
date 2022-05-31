const express = require('express');
const router = express.Router();

//Se importa validaciones
const {validator} = require('../validators/rubroGeneralValidator')

//Se importa controlador de rubro general
const controller = require('../controllers/rubroGeneralController')

router.get('/api/rubroGeneral',controller.getRubros);
router.get('/api/rubroGeneral/all',controller.getAllRubros);
router.post('/api/rubroGeneral',validator,controller.createRubros);
router.delete('/api/rubroGeneral/:id',controller.deleteRubros);
router.put('/api/rubroGeneral/:id',validator,controller.updateRubros);
router.get('/api/rubroGeneral/:id',controller.getRubrosId);


module.exports = router;