const express = require('express');
const router = express.Router();

const {validator} = require('../validators/articuloInsumoValidator')

//Se importa controlador de articulo insumo
const controller = require('../controllers/articuloInsumoController')

router.get('/',controller.getArticulos);
router.get('/all',controller.getAllArticulos);
router.post('/',validator,controller.createArticulo);
router.delete('/:id',controller.deleteArticulo);
router.put('/:id',validator,controller.updateArticulo);
router.get('/:id',controller.getArticuloId);


module.exports = router;
