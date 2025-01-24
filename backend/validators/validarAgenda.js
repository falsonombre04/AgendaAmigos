const {body} = require('express-validator');

const validarAgenda = [
	body('nombre')
	.notEmpty().withMessage("Campo nombre Obligatorio.")
	.isString().withMessage("El valor debe ser un texto."),

	body('numero')
	.notEmpty().withMessage("Campo numero es Obligatario."),

	body('edad')
	.notEmpty().withMessage("Campo edad Obligatario.")
	.isNumeric().withMessage("El campo debe ser un numero."),

	body('correo')
	.notEmpty().withMessage("Campo correo debe ser obligatorio.")
	.isEmail().withMessage("Debe ser un correo valido.")
]

module.exports = {validarAgenda}