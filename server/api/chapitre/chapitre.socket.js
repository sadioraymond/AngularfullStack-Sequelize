/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Chapitre = require('./chapitre.model');

exports.register = function(socket) {
  Chapitre.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Chapitre.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('chapitre:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('chapitre:remove', doc);
}