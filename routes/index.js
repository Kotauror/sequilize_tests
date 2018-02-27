const kotsController = require('../controllers').kots;
var path = require('path');

module.exports = (app) => {

  // app.get('/', function(req, res) {
  //   // kotsController.list;
  //   // res.sendFile(path.join(__dirname + '/index.html'
  //   res.sendFile(path.join(__dirname + '/index.html'));
  // });
  //
  // // app.get('/newroute', function(req, res) {
  // //   kotsController.list;
  // // });

  app.get('/', kotsController.list);


//   res.sendFile('/Users/kotpsot/Desktop/Makers Academy/sequilize_test/index.html');


  app.post('/', kotsController.create);
    // app.post('/', kotscontroller.create);

};


  // app.get('/api', (req, res) => res.status(200).send({
  //   message: 'Welcome to the Todos API!',
  // }));
  //
  // app.post('/api/todos', todosController.create);
  // app.get('/api/todos', todosController.list);
  // app.get('/api/todos/:todoId', todosController.retrieve);
  // app.put('/api/todos/:todoId', todosController.update);
  // app.delete('/api/todos/:todoId', todosController.destroy);
  //
  // app.post('/api/todos/:todoId/items', todoItemsController.create);
  // app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  // app.delete(
  //   '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
  // );
  // app.all('/api/todos/:todoId/items', (req, res) => res.status(405).send({
  //   message: 'Method Not Allowed',
  // }));
