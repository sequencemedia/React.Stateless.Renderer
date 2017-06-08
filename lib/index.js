'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderToStaticMarkup = exports.renderToString = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderToString = function renderToString(Component, props) {
  return _server2.default.renderToString(_react2.default.createElement(Component, props));
};

var renderToStaticMarkup = function renderToStaticMarkup(Component, props) {
  return _server2.default.renderToStaticMarkup(_react2.default.createElement(Component, props));
};

exports.renderToString = renderToString;
exports.renderToStaticMarkup = renderToStaticMarkup;