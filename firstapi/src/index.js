// Importing http module to creates an simple api
const http = require('http');

// Importing the URL class constructor to make it easier to work with URLs
const { URL } = require('url');

// Importing routes conditions
const routes = require('./routes');

// Creating an http server and storing it in server const
const server = http.createServer((request, response) => {
  // Creating an instance of URL class, to work better with Query Params.
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  // Printing the request method and the endpoint accessed by the user.
  console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

  // Destructuring parsedUrl in a let, because it will be overwrite later.
  let { pathname } = parsedUrl;
  let id = null;

  // Splitting the endpoint, separating it by bars
  // The .filter() function will iterate the array, removing falsy values.
  // .filter((routeItem) => Boolean(routeItem)) == .filter(Boolean)
  const splitEndpoint = pathname.split('/').filter(Boolean);

  // If have more than one element in splitted endpoint, i.e., is receiving
  // a parameter, overwrite pathname to .find function below works and store
  // id value from parameter.
  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  // The function .find() will iterate all the routes and if finds one that 
  // matches the endpoint and method accessed by the user, will return its infos.
  // If doesn't match, will return undefined.
  const route = routes.find(routeObj => (
    routeObj.endpoint === pathname && routeObj.method === request.method
  ));

  // If the route accessed by the user was found, execute its handler.
  if (route) {
    // Creating a property in request that will storing all the Query Params 
    // listed in searchParams property. This property returns an iterable with
    // all the params informed by user. To make the job easier, we can convert
    // this type of data to an object, through the function Object.fromEntries().
    request.query = Object.fromEntries(parsedUrl.searchParams);

    // Creating an object in request that will inject the id
    request.params = { id };

    // Executing the respective handler, passing the request and the response 
    // as parameters.
    route.handler(request, response);
  } else {
    // In case the chosen route doesn't match with any endpoints and methods, 
    // return a 404 status code (not found). 
    response.writeHead(404, { 'Content-Type': 'text/html' });
  
    // Printing an message informing that can't access endpoint or use method
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
});

// Setting an port to the created server listen/up in machine. 
// The callback function is to informing that the server is running.
server.listen(3000, () => console.log('Server started at http://localhost:3000'));

// With each change in the code, it's necessary to resend the command on terminal.
// It means that NodeJS, by default, doesn't listen to code's changes. 
// For that, exists nodemon package.