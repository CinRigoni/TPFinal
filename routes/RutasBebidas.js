const express = require('express');
const router = express.Router();

const {validator} = require('../validators/bebidaValidator')

//Se importa controlador de bebidas
const controller = require('../controllers/bebidaController')

router.get('/',controller.getBebidas);
router.get('/all',controller.getAllBebidas);
router.post('/',validator,controller.createBebidas);
router.delete('/:id',controller.deleteBebidas);
router.put('/:id',validator,controller.updateBebidas);
router.get('/:id',controller.getBebidasId);


module.exports = router;
