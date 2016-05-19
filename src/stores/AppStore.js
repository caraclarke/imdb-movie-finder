var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPi = require('../utils/appAPI');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

// create appStore variable
var AppStore = assign({}, EventEmitter.prototype, {
  emitchange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListender: function(cb) {
    this.on('change', cb);
  },
  removeChangeListener: function(cb) {
    this.removeListener('change', cb);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    // switch statement check out which action was called and then do whatever we need to do
    // depends on action type
  }

  return true;
});

module.exports = AppStore;