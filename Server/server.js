const express = require('express');
const sequelize = require('./config/connection')
const cors = require('cors');
// const transactionRoutes = require('./routes/transaction-routes');
const routes = require('./routes');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes)

// app.use('/transactions', transactionRoutes);
// app.use('/users', userRoutes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on http://localhost:3001/'));
  });





  