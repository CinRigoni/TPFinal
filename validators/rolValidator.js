const {body, validationResult} = require('express-validator');

  exports.validateRubro = [
    body('nombreRol').custom((value) => {
      return value.match(/^[A-Za-z 0-9]+$/);
    })
    .withMessage("Nombre rol debe contener solo letras y numeros")
    .bail()
    .notEmpty()
    .withMessage("Campo vacio")
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