const TransactionModel = require('./transaction-routes');
const userRoute = require('./userRoute');

router.use('/users', userRoute);

module.exports = router;

module.exports = { User, TransactionModel };
