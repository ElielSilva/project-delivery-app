const express = require('express');
// const { generateTokens } = require('../services/tokenGeretor');
// const { authEmail, authPassword } = require('../middlewares/authEmailAndPassword');
const loginController = require('../controllers/loginController');
const loginValidateController = require('../controllers/loginValidateController');
const auth = require('../middlewares/auth');

const loginRouter = express.Router();

loginRouter.use(express.json());

loginRouter.post('/', (req, res) => loginController.loginController(req, res));
loginRouter.get('/validate', auth, (req, res) => loginValidateController(req, res));

module.exports = loginRouter;