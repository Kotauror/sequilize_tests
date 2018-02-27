const express = require('express')
const Kot = require('./models/kot.js')
const kotsController = require('./controllers')
const app = express()

app.listen(3000, () => console.log('Example app listening on port 3000!'))

require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;


// module.exports = (app) => {
// app.get('/', function(req, res) {
//   res.sendFile('/Users/kotpsot/Desktop/Makers Academy/sequilize_test/index.html');
// })
//
// app.post('/', kotsController.create);
// // app.post('/', kotscontroller.create);
