const express = require('express');
const loginController = require('../controllers/loginController');
const loginValidateController = require('../controllers/loginValidateController');
const auth = require('../middlewares/auth');

const registerRouter = express.Router();

registerRouter.use(express.json());

registerRouter.post('/', (req, res) => loginController.loginController(req, res));
registerRouter.get('/validate', auth, (req, res) => loginValidateController(req, res));

module.exports = registerRouter;