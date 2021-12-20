// Importing user controller
const UserController = require('./controllers/UserController');

module.exports = [
  // Conditions to show the users' list
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },

  // Conditions to show the user with an specific id
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUserById,
  },
];