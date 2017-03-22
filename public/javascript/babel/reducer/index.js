'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducer = require('./reducer1.js');

var allReducers = (0, _redux.combineReducers)({
    users: _reducer.reducer1,
    items: _reducer.items

});

exports.default = allReducers;