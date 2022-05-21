const express = require('express');
const router = express.Router();

//Se importa controlador de bebidas
const controller = require('../controllers/bebidaController')

router.get('/',controller.getBebidas);
router.post('/',controller.createBebidas);
router.delete('/:id',controller.deleteBebidas);
router.put('/:id',controller.updateBebidas);
router.get('/:id',controller.getBebidasId);

module.exports = router;
