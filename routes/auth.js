/*
	Rutas de Usuarios / Auth
	host +/api/auth
*/

const {Router} = require('express');
const { check } = require('express-validator');
const {validateField} = require('../middlewares/field-validator');
const {createUser, loginUser, renewToken} = require('../controllers/auth');
const { validateJWT } = require('../middlewares/jwt-validator');

const router = Router();


router.post(
	'/new', 
	[
		check('name', 'El nombre es obligatorio').not().isEmpty(),
		check('email', 'El email es obligatorio').isEmail(),
		check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
		validateField
	],
	createUser
	);

router.post(
	'/',
	[
		check('email', 'El email es obligatorio').isEmail(),
		check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
		validateField
	],
	 loginUser
	 );

router.get('/renew',validateJWT, renewToken);

module.exports = router;