'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _index = require('../../babel/action/index.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
    return {
        voteResults: state.voteResults,
        showItems: state.showItems
    };
}

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ queryResult: _index.queryResult }, dispatch);
}

var Container3 = function (_React$Component) {
    _inherits(Container3, _React$Component);

    function Container3(props) {
        _classCallCheck(this, Container3);

        var _this = _possibleConstructorReturn(this, (Container3.__proto__ || Object.getPrototypeOf(Container3)).call(this, props));

        _this.props.queryResult();
        return _this;
    }

    _createClass(Container3, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    { className: 'text-center' },
                    '\u7269\u54C1\u548C\u7F16\u53F7'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'ul',
                        null,
                        this.props.showItems.map(function (item) {
                            return React.createElement(
                                'div',
                                null,
                                React.createElement(
                                    'li',
                                    { key: item.id },
                                    React.createElement(
                                        'div',
                                        null,
                                        React.createElement(
                                            'label',
                                            null,
                                            item.id,
                                            ' ',
                                            item.name
                                        )
                                    )
                                )
                            );
                        })
                    )
                ),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement(
                    'h3',
                    { className: 'text-center' },
                    '\u5F97\u7968\u6570\u91CF'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'ul',
                        null,
                        this.props.voteResults.map(function (item) {
                            return React.createElement(
                                'div',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'div',
                                        null,
                                        React.createElement(
                                            'label',
                                            null,
                                            '\u9009\u9879: ',
                                            item.voteNumber,
                                            ' \u5F97\u7968\u6570\u91CF: ',
                                            item.count
                                        )
                                    )
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Container3;
}(React.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(Container3);