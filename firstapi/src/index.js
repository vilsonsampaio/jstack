// Importing http module to creates an simple api
const http = require('http');

// Importing routes conditions
const routes = require('./routes');

// Creating an http server and storing it in server const
const server = http.createServer((request, response) => {

  // Printing the request method and the endpoint accessed by the user.
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

  // Function that will iterate all the routes and if it finds one that matches
  // the endpoint and method accessed by the user, will return its infos.
  // If doesn't match, will return undefined.
  const route = routes.find(routeObj => (
    routeObj.endpoint === request.url && routeObj.method === request.method
  ));

  // If the route accessed by the user was found, execute its handler.
  if (route) {
    // Executing the respective handler, passing the request and the response 
    // as parameters.
    route.handler(request, response);
  } else {
    // In case the chosen route doesn't match with any endpoints and methods, 
    // return a 404 status code (not found). 
    response.writeHead(404, { 'Content-Type': 'text/html' });
  
    // Printing an message informing that can't access endpoint or use method
    response.end(`Cannot ${request.method} ${request.url}`);
  }
});

// Setting an port to the created server listen/up in machine. 
// The callback function is to informing that the server is running.
server.listen(3000, () => console.log('Server started at http://localhost:3000'));

// With each change in the code, it's necessary to resend the command on terminal.
// It means that NodeJS, by default, doesn't listen to code's changes. 
// For that, exists nodemon package.