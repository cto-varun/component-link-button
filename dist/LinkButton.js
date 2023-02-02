"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LinkButton;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function LinkButton(_ref) {
  let {
    href,
    children,
    onClick,
    routeData,
    src,
    ...props
  } = _ref;
  const {
    search,
    hash
  } = (0, _reactRouterDom.useLocation)();
  const history = (0, _reactRouterDom.useHistory)();
  const urlAfterHash = hash && hash.split('?')[1];

  // Whole url to push
  const url = urlAfterHash ? `${href}?${urlAfterHash}` : search ? `${href}${search}` : href;
  const handleClick = () => {
    onClick && onClick();
    history.push(url, {
      routeData: routeData,
      src: src
    });
  };
  return /*#__PURE__*/_react.default.createElement(_antd.Button, _extends({}, props, {
    onClick: handleClick
  }), children);
}

/** href And also accepts all the Button props */
LinkButton.propTypes = {
  /** href url to push */
  href: _propTypes.default.string
};
module.exports = exports.default;