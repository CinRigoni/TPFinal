const express = require('express');
const router = express.Router();

const {validateBebida} = require('../validators/bebidaValidator')

//Se importa controlador de bebidas
const controller = require('../controllers/bebidaController')

router.get('/',controller.getBebidas);
router.post('/',validateBebida,controller.createBebidas);
router.delete('/:id',controller.deleteBebidas);
router.put('/:id',controller.updateBebidas);
router.get('/:id',controller.getBebidasId);


module.exports = router;
