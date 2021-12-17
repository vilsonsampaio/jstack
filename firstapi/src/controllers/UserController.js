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
};