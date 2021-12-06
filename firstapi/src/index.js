// Importing http module to creates an simple api
const http = require('http');

// Importing users
const users = require('./mocks/users');

// Creating an http server and storing it in server const
const server = http.createServer((request, response) => {
  // Printing the request method and the endpoint accessed by user.
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

  // If user wants to get the users' info list
  if (request.url === '/users' && request.method === 'GET') {
    // Changing Content-Type 'cause now response is returning an JSON.
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // Converting the users mock, cause response.end only receive an String.
    response.end(JSON.stringify(users));
  } else {
    // In case that users don't access the /users endpoint with GET method, 
    // return a 404 status code (not found). 
    response.writeHead(404, { 'Content-Type': 'text/html' });
  
    // Print an message informing that can't access endpoint or use method
    response.end(`Cannot ${request.method} ${request.url}`);
  }
});

// Setting an port to the created server listen/up in machine. 
// The callback function is to informing that the server is running.
server.listen(3000, () => console.log('Server started at http://localhost:3000'));

// With each change in the code, it's necessary to resend the command on terminal.
// It means that NodeJS, by default, doesn't listen to code's changes. 
// For that, exists nodemon package.