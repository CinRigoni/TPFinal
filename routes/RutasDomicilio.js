const express = require('express');
const router = express.Router();

const {validator} = require('../validators/domicilioValidator')

//Se importa controlador
const controller = require('../controllers/domicilioController')

router.get('/api/domicilio',controller.getDomicilio);
router.get('/api/domicilio/all',controller.getAllDomicilio);
router.post('/api/domicilio',validator,controller.createDomicilio);
router.delete('/api/domicilio/:id',controller.deleteDomicilio);
router.put('/api/domicilio/:id',validator,controller.updateDomicilio);
router.get('/api/domicilio/:id',controller.getDomicilioId);


module.exports = router;
