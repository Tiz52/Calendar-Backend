const { Router } = require("express");
const { check } = require('express-validator');

const {validateField} = require('../middlewares/field-validator');
const { getEvent, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { validateJWT } = require("../middlewares/jwt-validator");
const { isDate } = require("../helpers/isDate");

const router = Router();

//todas tienes que pasar por la validación de JWT
router.use(validateJWT);

router.get('/', getEvent);

router.post(
	'/', 
	[
		check('title', 'El título es obligatorio').not().isEmpty(),
		check('start','Fecha de inicio es obligatoria').custom( isDate ),
		check('end', 'Fecha de finalización es obligatoria').not().isEmpty(),
		validateField
	],
	createEvent
	);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
