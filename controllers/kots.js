const Kot = require('../models').Kot;

module.exports = {
  create(req, res) {
    console.log(req);
    return Kot
      .create({
        name: req.body['catname']
      })
      // .then(todo => res.status(201).send(todo))
      // .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    console.log(req);
    console.log('***********')
    console.log(res);
    return Kot
      .all()
    .then(kots => res.status(200).send(kots));
    // .catch(error => res.status(400).send(error));
},
};
