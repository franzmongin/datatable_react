"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./PaginationSelect.css");

// select dropdown to select how many rows per page we want to display
function PaginationSelect(_ref) {
  var setnumberOfRows = _ref.setnumberOfRows,
      setcurrentPage = _ref.setcurrentPage;

  var handleChangePaginationSelect = function handleChangePaginationSelect(e) {
    setnumberOfRows(e.target.value);
    setcurrentPage(1);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dataTables_length",
    id: "employee-table_length"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Show", /*#__PURE__*/_react.default.createElement("select", {
    name: "employee-table_length",
    "aria-controls": "employee-table",
    className: "PaginationSelect-select",
    onChange: handleChangePaginationSelect
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react.default.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/_react.default.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/_react.default.createElement("option", {
    value: "100"
  }, "100")), "entries"));
}

var _default = PaginationSelect;
exports.default = _default;