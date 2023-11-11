const sequelize = require('../config/connection');
const seedTransactions = require('../seeds/seeds');

seedTransactions().then(() => {
console.log('Transactions have been seeded')

}).catch((error) => {
    console.error('Error seeding transactions', error);
});