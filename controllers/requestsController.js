const db = require("../models");

// Defining methods for the tripsController
module.exports = {

  findAll: function(req, res) {
    console.log("I'm in requstControllers.js");
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
    console.log("I'm in requestControllers.js - create");
    console.log(req.body);
    db.Request
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("I'm in requstControllers.js");
    console.log(req.params.id);
    console.log(req.body);
    db.Request
      .update({ _id: req.params.id }, 
        {$set: {requestTitle: req.body.requestTitle,
                requestDescription: req.body.requestDescription,
                requestDate: req.body.requestDate,
                resolved: req.body.resolved}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Request
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
