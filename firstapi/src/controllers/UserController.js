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
  
  // Method that will be executed when the endpoint /users is accessed with the POST method.
  createUser(request, response) {
    // The information in the body of the requests is sent by streams, i.e., 
    // it's sent bit by bit. For this reason, it's need to create an Event Listener,
    // which will listen every time those infos arrives, concatenate all data,
    // and then parses it into JSON.
    let body = '';

    // Creating an Event Listener in request that watches every time an data come
    // and stores its value in the chunk arg receive in the callback function.
    request.on('data', (chunk) => {
      // Concatenating in body all the data that arrived in chunk arg
      body += chunk;
    });

    // Creating an Event Listener in request that watches when data stops to 
    // coming in.
    request.on('end', () => {
      // Since the response.send method receives an object as argument and then
      // transforms it into a JSON string, it's necessary to convert the body, 
      // which comes as string, into an object.
      body = JSON.parse(body);

      // Getting the Id of the last user.
      const lastUserId = users[users.length - 1].id;

      // Creating a new user, incrementing 1 in the last user's id and setting
      // the name that comes from the body
      const newUser = {
        id: lastUserId + 1,
        name: body.name,
      };

      // Insert the new user in the users array
      users.push(newUser);

      // Sending to client 201 status code (create) and the new user.
      response.send(201, newUser);
    });

  },
};