'use strict';

var _ = require('lodash');

function Chapitre(req){
  return req.app.get('models').Chapitre;
}

let log = (inst) => console.dir(inst.get());
// Get list of chapitres
exports.index = function(req, res) {
 /* Chapitre(req)
    .findAll()
    .then(function (chapitres) {
      return res.status(200).json(chapitres);
    })
    .catch(function (err){
      if(err) { return handleError(res, err); }
    });*/
Chapitre(req)
.findAll({
  attributes: ['id_niveau','libelle'],
  //limit: 10,
  order: 'date_last_modif'
})
.then(function(chapitres) {
    chapitres.forEach(log);
});
};

// Get a single chapitre
exports.show = function(req, res) {
  Chapitre
    .findById(req.params.id)
    .then(function (chapitre) {
      if(!chapitre) { return res.status(404).send('Not Found'); }
      return res.json(chapitre);
    })
    .catch(function (err){
      if(err) { return handleError(res, err); }
    });
};

// Creates a new chapitre in the DB.
exports.create = function(req, res) {
  Chapitre
    .create(req.body)
    .then(function (chapitre) {
      return res.status(201).json(chapitre);
    })
    .catch(function (err){
      if(err) { return handleError(res, err); }
    });
};

// Updates an existing chapitre in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Chapitre
    .findById(req.params.id)
    .then(function (chapitre) {
      if(!chapitre) { return res.status(404).send('Not Found'); }
      var updated = _.merge(chapitre, req.body);
      updated.save(function (err) {
        if (err) { return handleError(res, err); }
        return res.status(200).json(chapitre);
      });
    })
    .catch(function (err){
      if (err) { return handleError(res, err); }
    });
};

// Deletes a chapitre from the DB.
exports.destroy = function(req, res) {
  Chapitre
    .findById(req.params.id)
    .then(function (chapitre) {
      if(!chapitre) { return res.status(404).send('Not Found'); }
      chapitre.destroy(function(err) {
        if(err) { return handleError(res, err); }
        return res.status(204).send('No Content');
      });
    })
    .catch(function (err){
      if(err) { return handleError(res, err); }
    });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
