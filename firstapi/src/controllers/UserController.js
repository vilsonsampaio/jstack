// Importing users
const users = require('../mocks/users');

module.exports = {
  // Method that will be executed when the endpoint /users is accessed with the GET method.  
  listUsers(request, response) {
    // Getting the order param informed by user
    const { order } = request.query;

    // Function that will return an sorted array, according the order requested 
    // by user.
    const sortedUsers = users.sort((a, b) => {
      // If the selected order is descending, invert the array based on user id.
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }

      // If order is not desc or empty, return the array in default order.
      return a.id > b.id ? 1 : -1;
    });

    // Sending to client 200 status code and the list of sorted users.
    response.send(200, sortedUsers);
  },

  // Method that will be executed when the endpoint /users/:id is accessed with the GET method.
  getUserById(request, response) {
    // Getting user id sending in params
    const { id } = request.params;

    // Finding the user with the requested id
    const user = users.find(user => user.id === Number(id));

    // If there isn't a user with requested id, return an error message. 
    if (!user) {
      // Sending 400 status code and an error message
      return response.send(400, { error: 'User not found' });
    } 
    
    // Else was removed to refactor the code, by using a return in the If, to 
    // stop the code if it enters the above condition.
    response.send(200, user);
  },
};