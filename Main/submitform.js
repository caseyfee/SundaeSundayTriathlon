const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// handle POST requests to "/submit-form"
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  // Do something with the form data here
  console.log(formData);
  // Send a response back to the client
  res.send('Form submitted successfully');
});

// start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
