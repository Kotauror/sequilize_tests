## Sequelize - basic notes.

This note contains some remarks on my first (and painful) attempt to switch from ruby+postgres to javascript+postgres.

// thanks to Marcus & Ben for the introduction.

### SETUP:

```plain
$ npm init -y
$ npm install --save sequelize
$ npm install --save pg pg-hstore
$ npm install -g sequelize-cli
```

### CREATING DATABASES:

Creates a database under a name of seq-test:
```plain
$ createdb seq-test
```
Creates databases according to the config.json file:
```plain
$ sequelize db:create
```
config.json:
```js
{
  "development": {
    "username": "kotpsot",
    "password": null,
    "database": "seq-test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "kotpsot",
    "password": null,
    "database": "seq-test2",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "kotpsot",
    "password": null,
    "database": "seq-test3",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

In the config.json file there are three environments specified: `development`, `test` and `production`.
If we want to create a database for a particular environment (for example for `test`), we type:
```plain
$ NODE_ENV=test sequelize db:create
```
By default, the database will be created in the development environment (defined by `NODE_ENV`).


### CREATING MODELS + TABLES:

```plain
$ sequelize model:create --name Bird --attributes name:string,type:string
```
This way we create a model `Bird`. A file under this name is created in the models folder.
The `Bird` model is a js class - it will contain all of the methods we will use for the instances of `Bird`.
Examples:
* creating new birds.
* retrieve a particular bird from the database.
* retrieve all birds from the database.

At the same time, creating a model `Bird` creates a migration file (see inside the folder migrations) that creates a table. This table will be automatically called `Birds`. The name is in plural as it will store information about all of the instances of class Bird.

If you want to finalize the creation (or update) of the table inside a database, run:
```plain
$ sequelize db:migrate
```

### NEXT STEPS:

* We will create new instances of `Bird` inside of a controller (router) and probably use express.js to do it.
* We will get the bird's info from a form and do something like: `let bird = Bird.create({name: params.name ... })`

### DIAGRAMMING!11

WHat's the fuss about js and stuff.


```plain
+----------+
|BROWSER   |
|          |
+---+---+--+
    ^   |
    |   ^
+---+---+-------+        +-----------------+           +--+
|               |        |                 |           |  |
|CONTROLLER     | +----> |   MODEL         | +-------> |DB|
|(router)       |        |                 |           |  |
|               | <----+ |   Bird          | <-------+ |  |
|/bird          |        |   Cat etc.      |           |  |
|               |        |                 |           |  |
|               |        |                 |           |  |
+---------------+        +-----------------+           +--+

+     EXPRESS.JS              SEQUELIZE        +
|                                              |
+----------------------------------------------+

              NODE.JS
```
