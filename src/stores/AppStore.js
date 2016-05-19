var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

// create appStore variable
var AppStore = assign({}, EventEmitter.prototype, {
  emitchange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(cb) {
    this.on('change', cb);
  },
  removeChangeListener: function(cb) {
    this.removeListener('change', cb);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.SEARCH_MOVIES:
      AppAPI.searchMovies(action.movie);
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

module.exports = AppStore;