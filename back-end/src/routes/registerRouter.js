const express = require('express');
const registerController = require('../controllers/resgisterController');
// const loginValidateController = require('../controllers/loginValidateController');
// const auth = require('../middlewares/auth');

const registerRouter = express.Router();

registerRouter.use(express.json());

registerRouter.post('/', registerController.registerController);
// registerRouter.get('/validate', auth, (req, res) => loginValidateController(req, res));

module.exports = registerRouter;