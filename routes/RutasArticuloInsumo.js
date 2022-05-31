const express = require('express');
const router = express.Router();

const {validator} = require('../validators/articuloInsumoValidator')

//Se importa controlador de articulo insumo
const controller = require('../controllers/articuloInsumoController')

router.get('/api/articuloInsumo',controller.getArticulos);
router.get('/api/articuloInsumo/all',controller.getAllArticulos);
router.post('/api/articuloInsumo',validator,controller.createArticulo);
router.delete('/api/articuloInsumo/:id',controller.deleteArticulo);
router.put('/api/articuloInsumo/:id',validator,controller.updateArticulo);
router.get('/api/articuloInsumo/:id',controller.getArticuloId);


module.exports = router;
