"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

// contains the thead of the Datatable
function TableHeading(_ref) {
  var columns = _ref.columns,
      activeSorting = _ref.activeSorting,
      sortingDirection = _ref.sortingDirection,
      setactiveSorting = _ref.setactiveSorting,
      setsortingDirection = _ref.setsortingDirection;

  // function to handle the click on a sorting heading
  var handleChangeSorting = function handleChangeSorting(e) {
    var classNames = e.target.classList;

    if (classNames.contains("sorting_asc")) {
      setactiveSorting(e.target.id.split("sorting-")[1]);
      setsortingDirection("desc");
    } else if (classNames.contains("sorting_desc") || !classNames.contains("sorting_asc" || "sorting_desc")) {
      setactiveSorting(e.target.id.split("sorting-")[1]);
      setsortingDirection("asc");
    }
  };

  return /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: "column-title-".concat(column.title)
    }, /*#__PURE__*/_react.default.createElement("th", {
      className: "sorting ".concat(column.data === activeSorting ? "sorting_".concat(sortingDirection) : ""),
      id: "sorting-".concat(column.data),
      onClick: function onClick(e) {
        return handleChangeSorting(e);
      }
    }, column.title));
  })));
}

var _default = TableHeading;
exports.default = _default;