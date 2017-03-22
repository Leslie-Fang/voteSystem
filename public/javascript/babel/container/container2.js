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
        items: state.items
    };
}

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ changeItem: _index.changeItem, submitSelectItem: _index.submitSelectItem }, dispatch);
}

var Container2 = function (_React$Component) {
    _inherits(Container2, _React$Component);

    function Container2(props) {
        _classCallCheck(this, Container2);

        var _this = _possibleConstructorReturn(this, (Container2.__proto__ || Object.getPrototypeOf(Container2)).call(this, props));

        var myitems = _this.props.items.filter(function (item) {
            return item.initChecked !== false;
        });
        _this.state = { select: myitems[0].id };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Container2, [{
        key: 'handleChange',
        value: function handleChange(event) {
            console.log(event.target.checked);
            console.log(event.target.id);
            this.setState({ select: event.target.id }, function () {
                console.log(this.state.select);
                // this.props.changeItem(this.state.select);
            });
            //this.props.changeItem();
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            console.log('submit');
            //var dta = {selectItem : this.state.select};
            var dta = this.state.select;
            console.log(dta);
            (0, _index.submitSelectItem)(dta);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'ul',
                    { className: 'list-unstyled' },
                    this.props.items.map(function (item, i) {
                        return React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'li',
                                { key: item.id },
                                React.createElement(
                                    'div',
                                    { className: 'radio' },
                                    React.createElement(
                                        'label',
                                        null,
                                        React.createElement('input', { type: 'radio', name: 'radio', id: item.id, index: item.id, defaultChecked: item.initChecked, onChange: _this2.handleChange }),
                                        ' ',
                                        item.name
                                    )
                                ),
                                React.createElement('img', { src: item.link, className: 'img-responsive', alt: 'Logo' }),
                                React.createElement('br', null),
                                React.createElement('br', null)
                            )
                        );
                    })
                ),
                React.createElement(
                    'div',
                    { className: 'text-center' },
                    React.createElement(
                        'button',
                        { className: 'btn btn-primary', onClick: this.handleSubmit },
                        '\u63D0\u4EA4'
                    )
                )
            );
        }
    }]);

    return Container2;
}(React.Component);

//store.dispatch({ type: 'INCREMENT' });

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(Container2);