## Sequelize - basic notes.

// thanks to Marcus & Ben for the introduction.

### SETUP:

```plain
$ npm install --save sequelize
$ npm install --save pg pg-hstore
$ npm init -y
$ npm install -g sequelize-cli
```

### CREATE A DATABASE:

Creates a database under a name of seq-test:
```plain
$ createdb seq-test
```
Creates databases according to the config.json file:
```plain
$ sequelize db:create
```
In the config.json file there are three environments specified: development, test and production.
If we want to create a database for a particular environment (for example for test), we type:
```plain
$ NODE_ENV=test sequelize db:create
```
By default, the database will be created in the development environment.


### CREATE MODEL + A TABLE:

```plain
$ sequelize model:create --name Bird --attributes name:string,password:string
```
This way we create a model - `Bird`. A file under this name is created in the models folder.
The `Bird` model is a js class - it will contain all of the methods we will use for the instances of `Bird`.

At the same time, creating a model `Bird` creates a migration file (see inside the folder migrations) that creates a table. This table will be automatically called `Birds`.
The name is in plural as it will store information about all of the instances of class Bird.

If you want to see a table inside a database, run:
```plain
$ sequelize db:migrate
```

### NEXT STEPS:

* We will create new instances of `Bird` inside of a controller (router) and probably use express.js to do it.
* We will get the user's info from a form and do something like: `let user = User.create({name: params.name, })`
