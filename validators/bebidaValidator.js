const {body, validationResult} = require('express-validator');

  exports.validateBebida = [
    body('nombreBebida').custom((value) => {
      return value.match(/^[A-Za-z 0-9]+$/);
    })
    .withMessage("Nombre Bebida debe contener solo letras y numeros")
    .bail()
    .notEmpty()
    .withMessage("Campo vacio")
    .bail(),
    // password must be at least 5 chars long
    body('precioCompra').isNumeric()
    .withMessage('Precio de Compra debe ser Decimal')
    .bail()
    .notEmpty()
    .withMessage('Precio de Compra vacio')
    .bail(),

    body('precioVenta')
      .isDecimal()
      .withMessage('Precio de Venta debe ser Decimal')
      .bail()
      .notEmpty()
      .withMessage('Precio de Venta vacio')
      .bail(),

    body('stockActual')
      .isNumeric()
      .withMessage('Stock debe ser numero')
      .bail()
      .notEmpty()
      .withMessage('Stock actual Vacio')
      .bail(),

    body('unidadMedida').custom((value) => {
      return value.match(/^[A-Za-z 0-9]+$/);
    })
      .withMessage('Unidad Medida debe contener solo letras y numeros')
      .bail()
      .notEmpty()
      .withMessage('Nombre de bebida vacio')
      .bail(),
    (req, res, next) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next()
    }
  ]