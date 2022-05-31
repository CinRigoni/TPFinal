const express = require('express');
const router = express.Router();

const {validator} = require('../validators/rubroInsumoValidator')

//Se importa controlador de rubro insumo
const controller = require('../controllers/rubroInsumoController')

router.get('/',controller.getRubros);
router.get('/all',controller.getAllRubros);
router.post('/',validator,controller.createRubros);
router.delete('/:id',controller.deleteRubros);
router.put('/:id',validator,controller.updateRubros);
router.get('/:id',controller.getRubrosId);


module.exports = router;
