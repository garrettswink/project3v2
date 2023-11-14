const express = require('express');
const sequelize = require('./config/connection')
const cors = require('cors');
const transactionRoutes = require('./routes/transaction-routes');
const userRoutes = require('./routes/userRoute');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/transactions', transactionRoutes);
app.use('/users', userRoutes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on http://localhost:3001/'));
  });





  