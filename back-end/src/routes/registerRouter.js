const express = require('express');
const registerController = require('../controllers/resgisterController');
// const loginValidateController = require('../controllers/loginValidateController');
// const auth = require('../middlewares/auth');

const loginRouter = express.Router();

loginRouter.use(express.json());

loginRouter.post('/', (req, res) => registerController.registerController(req, res));
// loginRouter.get('/validate', auth, (req, res) => loginValidateController(req, res));

module.exports = loginRouter;