const express = require('express');
const router = express.Router();

const {validator} = require('../validators/artManufacturadoDetalleValidator')

//Se importa controlador de autentificacion para administradores
const {authAdmin} = require('../controllers/authController');

//Se importa controlador de articulo manufacturado
const controller = require('../controllers/artManufacturadoDetalleController')

router.get('/api/articuloManufacturadoDetalle',controller.getArticulos);
router.get('/api/articuloManufacturadoDetalle/all',authAdmin,controller.getAllArticulos);
router.post('/api/articuloManufacturadoDetalle',authAdmin,validator,controller.createArticulo);
router.delete('/api/articuloManufacturadoDetalle/:id',authAdmin,controller.deleteArticulo);
router.put('/api/articuloManufacturadoDetalle/:id',authAdmin,validator,controller.updateArticulo);
router.get('/api/articuloManufacturadoDetalle/:id',controller.getArticuloId);


module.exports = router;
