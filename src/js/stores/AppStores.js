var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _movie = [];
var selected = '';

var AppStores = assign({}, EventEmitter.prototype,{
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListner: function(){
		this.on('change', callback);
	},
	removeChangeListner: function(){
		this.removeListner('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){

	}

	return true;
});

module.exports = AppStores;