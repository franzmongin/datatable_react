"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

// contains the tbody of the current page table
function TableBody(_ref) {
  var tabledata = _ref.tabledata,
      columns = _ref.columns;
  return /*#__PURE__*/_react.default.createElement("tbody", null, tabledata ? tabledata.map(function (el, index) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: "".concat(el.firstName, "-").concat(el.lastName, "-").concat(index),
      className: "".concat(index % 2 === 0 ? "odd" : "even")
    }, columns.map(function (col) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: "".concat(col.title, "-").concat(col.data)
      }, el[col.data]);
    }));
  }) : null);
}

var _default = TableBody;
exports.default = _default;