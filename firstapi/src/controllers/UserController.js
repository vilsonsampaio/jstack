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

    // Changing Content-Type 'cause now response is returning an JSON.
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // Converting the users mock, cause response.end only receive an String.
    response.end(JSON.stringify(sortedUsers));
  },

  // Method that will be executed when the endpoint /users/:id is accessed with the GET method.
  getUserById(request, response) {
    // Getting user id sending in params
    const { id } = request.params;

    // Finding the user with the requested id
    const user = users.find(user => user.id === Number(id));

    // If there isn't a user with requested id, return an error message. 
    if (!user) {
      // Setting status code in 400 (bad request) and reporting the content type.
      response.writeHead(400, { 'Content-Type': 'application/json' });

      // Sending error message
      response.end(JSON.stringify({ error: 'User not found'}));
    } else {
      // Setting status code in 200 and reporting the content type.
      response.writeHead(200, { 'Content-Type': 'application/json' });
  
      // Sending the found user
      response.end(JSON.stringify(user));
    }
  },
};