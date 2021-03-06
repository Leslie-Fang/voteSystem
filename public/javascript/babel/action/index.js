"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.queryResult = exports.submitTureItem = exports.submitSelectItem = exports.changeItem = exports.submitData = exports.selectUser = undefined;

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _store = require("../../babel/store.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userData = [{
    id: 1,
    first: "leslie",
    age: 10
}, {
    id: 3,
    first: "les",
    age: 100
}];

var selectUser = exports.selectUser = function selectUser(user) {
    console.log("You clicked on user: ");
    return {
        type: 'USER_SELECTED',
        payload: userData
    };
};

var submitData = exports.submitData = function submitData(codedata) {
    console.log(codedata);
    return {
        type: 'SUBMIT_DATA',
        state: 'isFetchingdata',
        payload: _jquery2.default.ajax({
            method: "POST",
            data: { code: codedata },
            url: "/login",
            dataType: "json"
        }).then(function (data) {
            console.log(data);
            console.log('back in ajax!');
            var action = {
                type: 'GET_VERYFY_DATA',
                state: 'finishFetchingdata',
                payload: data
            };
            _store.store.dispatch(action);
            return data;
        })
    };
};

var changeItem = exports.changeItem = function changeItem(itemid) {
    console.log("change select item ");
    return {
        type: 'CHANGE',
        payload: itemid
    };
};

var submitSelectItem = exports.submitSelectItem = function submitSelectItem(itemid, callback) {
    console.log("change select item ");
    console.log(itemid);
    return {
        type: 'SUBMIT_SELECT_ITEM',
        payload: _jquery2.default.ajax({
            method: "POST",
            data: { selectItem: itemid },
            url: "/queryvotedornot",
            dataType: "json"
        }).then(function (data) {
            console.log('AAAAAAAuouo');
            console.log(data);
            callback(data);
            return data;
        })
    };
};
var submitTureItem = exports.submitTureItem = function submitTureItem(itemid) {
    console.log("change select item ");
    console.log(itemid);
    return {
        type: 'SUBMIT_TRUE_ITEM',
        payload: _jquery2.default.ajax({
            method: "POST",
            data: { selectItem: itemid },
            url: "/submitItem",
            dataType: "json"
        }).then(function (data) {
            console.log(data);
            console.log('back in ajax!');
            var action = {
                type: 'INESERT_SUCCESS',
                state: 'finishFetchingdata',
                payload: data
            };
            _store.store.dispatch(action);
            return data;
        })
    };
};

var queryResult = exports.queryResult = function queryResult() {
    console.log("Query result!");
    //  console.log(itemid);
    return {
        type: 'QUERY_RESULT_INIT',
        payload: _jquery2.default.ajax({
            method: "POST",
            data: { type: 'query_data_result' },
            url: "/queryresult",
            dataType: "json"
        }).then(function (data) {
            console.log(data);
            console.log('back in ajax!');
            var action = {
                type: 'QUERY_RESULT_FINISH',
                state: 'finishFetchingdata',
                payload: data
            };
            _store.store.dispatch(action);
            return data;
        })
    };
};