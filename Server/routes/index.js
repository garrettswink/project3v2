const TransactionModel = require('./transaction-routes');
const userRoute = require('./userRoute');
const router = require('express').Router()

router.use('/user', userRoute);
router.use('/transaction', TransactionModel);

module.exports = router;

// module.exports = { User, TransactionModel };

