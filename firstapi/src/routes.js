// Importing user controller
const UserController = require('./controllers/UserController');

module.exports = [
  // Conditions to show the users' list
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
];