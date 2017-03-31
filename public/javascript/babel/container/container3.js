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
                    'div',
                    null,
                    React.createElement(
                        'ul',
                        null,
                        this.props.voteResults.map(function (item) {
                            if (item.name == 'red') {
                                item.name = '第一位演唱歌手';
                            }
                            if (item.name == 'orange') {
                                item.name = '第二位演唱歌手';
                            }
                            if (item.name == 'yellow') {
                                item.name = '第三位演唱歌手';
                            }
                            if (item.name == 'green') {
                                item.name = '第四位演唱歌手';
                            }
                            if (item.name == 'blue') {
                                item.name = '第五位演唱歌手';
                            }
                            if (item.name == 'purple') {
                                item.name = '第六位演唱歌手';
                            }
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
                                            item.name,
                                            '    \u5F97\u7968\u6570:',
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