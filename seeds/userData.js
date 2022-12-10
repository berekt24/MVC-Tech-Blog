
const { User } = require('../models');

const userData = [
  {
    "name": "Rick",
    "email": "rick@hotmail.com",
    "password": "password12345"
  },
  {
    "name": "valentino",
    "email": "valentino@gmail.com",
    "password": "password12345"
  },
  {
    "name": "yoko",
    "email": "yoko2k20@aol.com",
    "password": "password12345"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
