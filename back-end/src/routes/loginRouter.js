const Router = require('express').Router;
// const { generateTokens } = require('../services/tokenGeretor');
// const { authEmail, authPassword } = require('../middlewares/authEmailAndPassword');
const loginController = require('../controllers/loginController');
const loginValidateController = require('../controllers/loginValidateController');
const auth = require('../middlewares/auth');

const loginRouter = Router();

loginRouter.post('/', loginController.loginController);
loginRouter.get('/validate', auth, loginValidateController);

module.exports = loginRouter;