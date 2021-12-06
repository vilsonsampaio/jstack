// Importing http module to creates an simple api
const http = require('http');

// Creating an http server and storing it in server const
const server = http.createServer((request, response) => {
  // Setting response's header, informing the status code and the content type 
  response.writeHead(200, { 'Content-Type': 'text/html' });

  // Sending the server response that, in this case, prints an h1 element
  response.end('<h1>Hello World!</h1>');
});

// Setting an port to the created server listen/up in machine. 
// The callback function is to informing that the server is running.
server.listen(3000, () => console.log('Server started at http://localhost:3000'));

// With each change in the code, it's necessary to resend the command on terminal.
// It means that NodeJS, by default, doesn't listen to code's changes. 
// For that, exists nodemon package.