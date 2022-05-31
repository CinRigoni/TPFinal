const express = require('express');
const router = express.Router();

const {validator} = require('../validators/rubroInsumoValidator')

//Se importa controlador de rubro insumo
const controller = require('../controllers/rubroInsumoController')

router.get('/api/rubroInsumo',controller.getRubros);
router.get('/api/rubroInsumo/all',controller.getAllRubros);
router.post('/api/rubroInsumo',validator,controller.createRubros);
router.delete('/api/rubroInsumo/:id',controller.deleteRubros);
router.put('/api/rubroInsumo/:id',validator,controller.updateRubros);
router.get('/api/rubroInsumo/:id',controller.getRubrosId);


module.exports = router;
