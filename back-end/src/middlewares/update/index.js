// const err = {
//   orderNotFound: { status: 404, message: 'Invalid Status' },
// };

// module.exports = {
//   updateStatus: (req, _res, next) => {
//     const { newStatus } = req.params;
//     switch (newStatus) {
//       case /emtransito/i: {
//         req.status = 'Em Transito'
//         next();
//       }

//       case /Pendente/i: {
//         req.status = 'Pendente'
//         next();
//       }

//       case /Preparando/i: {
//         req.status = 'Preparando'
//         next();
//       }

//       case /Entregue/i: {
//         req.status = 'Entregue'
//         next();
//       }
        
//       default:
//         throw err.orderNotFound;
//     }
//   },
// }