const express = require('express');
const router = express.Router();

const {validator} = require('../validators/articuloManufacturadoValidator')

//Se importa controlador de articulo manufacturado
const controller = require('../controllers/articuloManufacturadoController')

router.get('/api/articuloManufacturado',controller.getArticulos);
router.get('/api/articuloManufacturado/all',controller.getAllArticulos);
router.post('/api/articuloManufacturado',validator,controller.createArticulo);
router.delete('/api/articuloManufacturado/:id',controller.deleteArticulo);
router.put('/api/articuloManufacturado/:id',validator,controller.updateArticulo);
router.get('/api/articuloManufacturado/:id',controller.getArticuloId);


module.exports = router;
