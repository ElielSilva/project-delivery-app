const express = require('express');
const cors = require('cors');
require('express-async-errors');
const httpErrorMiddleware = require('../middlewares/httpErrorMiddleware');

const app = express();
app.use(cors());

const Routes = require('../routes/index');

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', Routes.loginRouter);
app.use('/register', Routes.registerRouter);
app.use('/customer/products', Routes.costumerProductsRouter);

// const {Users} = require('../database/models');
// app.get('/teste',async (req, res) => {
//   // console.log(model)
//   const data = await Users.findAll({
//     where: {
//       "email": "fulana@deliveryapp.com"
//     }
//   });
  // var crypto = require('crypto');
  // var name = 'fulana@123';
  // var hash = crypto.createHash('md5').update(name).digest('hex');
  // console.log(hash === "3c28d2b0881bf46457a853e0b07531c6");
  // console.log(md5("fulana@123"))
//   res.status(200).json(data);
// })

app.use(httpErrorMiddleware);

module.exports = app;
