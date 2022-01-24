"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

function Search(_ref) {
  var setrawDataWithSearch = _ref.setrawDataWithSearch,
      data = _ref.data,
      sortingDirection = _ref.sortingDirection,
      activeSorting = _ref.activeSorting,
      sortDesc = _ref.sortDesc,
      sortAsc = _ref.sortAsc,
      setcurrentPage = _ref.setcurrentPage;

  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      searchInput = _useState2[0],
      setsearchInput = _useState2[1];

  var handleChangeSearch = function handleChangeSearch(e) {
    setsearchInput(e.target.value);
  }; // effect to handle the search when the input changes


  (0, _react.useEffect)(function () {
    // behaviour when input in empty
    if (searchInput !== "") {
      var filteredData = data.filter(function (el) {
        return Object.values(el).some(function (value) {
          return value.toLowerCase().includes(searchInput.toLowerCase());
        });
      }); // if active sorting set result after sorting else set result without sorting

      if (activeSorting) {
        if (sortingDirection === "asc") {
          setrawDataWithSearch(sortAsc(filteredData));
        } else {
          setrawDataWithSearch(sortDesc(filteredData));
        }
      } else {
        setrawDataWithSearch(filteredData);
      } // behaviour when input is filled

    } else {
      if (activeSorting) {
        sortingDirection === "asc" ? setrawDataWithSearch(sortAsc(data)) : setrawDataWithSearch(sortDesc(data));
      } else {
        setrawDataWithSearch(data);
      }
    }

    setcurrentPage(1);
  }, [searchInput]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "employee-table_filter",
    className: "dataTables_filter"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Search:", /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    "aria-controls": "employee-table",
    onChange: handleChangeSearch
  })));
}

var _default = Search;
exports.default = _default;