// Importing users
const users = require('../mocks/users');

module.exports = {
  // Method that will be executed when the endpoint /users is accessed with the GET method.  
  listUsers(request, response) {
    // Changing Content-Type 'cause now response is returning an JSON.
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // Converting the users mock, cause response.end only receive an String.
    response.end(JSON.stringify(users));
  },
};