const express = require('express');
const router = express.Router();

const {validator} = require('../validators/bebidaValidator')

//Se importa controlador de bebidas
const controller = require('../controllers/bebidaController')

router.get('/api/bebidas',controller.getBebidas);
router.get('/api/bebidas/all',controller.getAllBebidas);
router.post('/api/bebidas',validator,controller.createBebidas);
router.delete('/api/bebidas/:id',controller.deleteBebidas);
router.put('/api/bebidas/:id',validator,controller.updateBebidas);
router.get('/api/bebidas/:id',controller.getBebidasId);


module.exports = router;
