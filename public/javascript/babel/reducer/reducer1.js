"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var userData = [{
    id: 1,
    first: "leslie",
    age: 10
}, {
    id: 3,
    first: "les",
    age: 100
}];

var totalItems = [{
    id: 1,
    name: '第一位演唱歌手',
    link: "../../../images/red.png",
    color: 'red',
    initChecked: true
}, {
    id: 2,
    name: '第二位演唱歌手',
    link: "../../../images/oragon.png",
    color: 'orange',
    initChecked: false
}, {
    id: 3,
    name: '第三位演唱歌手',
    link: "../../../images/yellow.png",
    color: 'yellow',
    initChecked: false
}, {
    id: 4,
    name: '第四位演唱歌手',
    link: "../../../images/green.png",
    color: 'green',
    initChecked: false
}, {
    id: 5,
    name: '第五位演唱歌手',
    link: "../../../images/blue.png",
    color: 'blue',
    initChecked: false
}, {
    id: 6,
    name: '第六位演唱歌手',
    link: "../../../images/zi.png",
    color: 'purple',
    initChecked: false
}];

var queryResult = [];

var reducer1 = exports.reducer1 = function reducer1() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userData;
    var action = arguments[1];


    switch (action.type) {
        case 'SUBMIT_DATA':
            console.log('SUBMIT_DATA');
            console.log(action.payload);
            return Object.assign({}, action.payload);
        case 'GET_VERYFY_DATA':
            console.log('GET_VERYFY_DATA');
            console.log(action.payload.state);
            if (action.payload.state == 'ok') {
                window.location.href = '/voter';
            } else if (action.payload.state == 'novoter') {
                window.location.href = '/';
                alert('无效的验证码');
            } else if (action.payload.state == 'secondvoter') {
                window.location.href = '/';
                alert('已经投过票了');
            }
            //window.location.href = '/voter';
            return Object.assign({}, action.payload);
        default:
            console.log('EMPTY');
            return userData;
    }
};

var items = exports.items = function items() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : totalItems;
    var action = arguments[1];


    switch (action.type) {
        case 'CHANGE':
            console.log('CHANGE_ITEM');
            console.log(action.payload);

            var state1 = state.map(function (item) {
                return item.initChecked = false;
                // return item;
            });
            //var state2 =
            return state1;
        case 'INESERT_SUCCESS':
            window.location.href = '/leave';
            return Object.assign({}, action.payload);
        default:
            console.log('Init items!');
            return state;
    }
};

var voteResults = exports.voteResults = function voteResults() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : queryResult;
    var action = arguments[1];

    switch (action.type) {
        case 'QUERY_RESULT_INIT':
            return state;
        case 'QUERY_RESULT_FINISH':
            return action.payload;
        default:
            console.log('Init query results!');
            return state;
    }
};

var showItems = exports.showItems = function showItems() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : totalItems;
    var action = arguments[1];

    switch (action.type) {
        case 'ABB':
            return state;
        default:
            console.log('Init show items!');
            return state;
    }
};