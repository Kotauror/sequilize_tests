const Kot = require('../models').Kot;

module.exports = {
  create(req, res) {
    return Kot
      .create({
        name: body.form.catname
      })
      // .then(todo => res.status(201).send(todo))
      // .catch(error => res.status(400).send(error));
  },
};
