const express = require('express');
const auth = require('../middlewares/authAdm');
const registerController = require('../controllers/resgisterController');

const adminRouter = express.Router();

adminRouter.post('/', auth, registerController.registerControllerWithAdm);

module.exports = adminRouter;