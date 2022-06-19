const express = require('express');
const router = express.Router();

const {validator} = require('../validators/estadoPedidoValidator')

//Se importa controlador
const controller = require('../controllers/estadoPedidoController')

router.get('/api/estadoPedido',controller.getEstadoPedido);
router.get('/api/estadoPedido/all',controller.getAllEstadoPedido);
router.post('/api/estadoPedido',validator,controller.createEstadoPedido);
router.delete('/api/estadoPedido/:id',controller.deleteEstadoPedido);
router.put('/api/estadoPedido/:id',validator,controller.updateEstadoPedido);
router.get('/api/estadoPedido/:id',controller.getEstadoPedidoId);


module.exports = router;
