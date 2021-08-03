const db = require("../models");

// Defining methods for the requestsController
module.exports = {
  findAll: function(req, res) {
    db.Request
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(411).json(err)
      });
  },
  findById: function(req, res) {
    db.Request
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Request
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Request
      .findOneAndUpdate({_id: req.params.id} , req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(488).json(err));
  },
  remove: function(req, res) {
    db.Request
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
