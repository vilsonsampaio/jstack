// Function that will be executed every time that an POST, PUT or PATCH method
// will create, receive the request object from index.js and a callback function,
// which will be called when the streams process stops.
function bodyParser(request, callback) {
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

    // Injecting in request an property called body that will store the request
    // body sent by client.
    request.body = body;

    // Executing the callback function received as argument, after all the data
    // stops to coming in.
    callback();
  });
}

module.exports = bodyParser;