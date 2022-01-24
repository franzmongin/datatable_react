"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function Modal(_ref) {
  var hiddenModal = _ref.hiddenModal,
      sethiddenModal = _ref.sethiddenModal;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "blocker ".concat(hiddenModal === true ? "modal-hidden" : "modal-showed")
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation",
    className: "modal ".concat(hiddenModal === true ? "modal-hidden" : "modal-showed")
  }, "Employee Created!", /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "close-modal",
    onClick: function onClick() {
      sethiddenModal(true);
    }
  }, "Close")));
}

var _default = Modal;
exports.default = _default;