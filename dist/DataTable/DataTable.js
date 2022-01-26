"use strict";

var _interopRequireWildcard =
  require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault =
  require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(
  require("@babel/runtime/helpers/esm/slicedToArray")
);

var _react = _interopRequireWildcard(require("react"));

require("./DataTable.css");

var _PaginationSelect = _interopRequireDefault(
  require("./PaginationSelect/PaginationSelect")
);

var _PageChanger = _interopRequireDefault(require("./PageChanger/PageChanger"));

var _Search = _interopRequireDefault(require("./Search/Search"));

var _TableBody = _interopRequireDefault(require("./TableBody/TableBody"));

var _TableHeading = _interopRequireDefault(
  require("./TableHeading/TableHeading")
);

function DataTable(_ref) {
  var data = _ref.data,
    columns = _ref.columns;

  var _useState = (0, _react.useState)(10),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    numberOfRows = _useState2[0],
    setnumberOfRows = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    currentPage = _useState4[0],
    setcurrentPage = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    maxPage = _useState6[0],
    setmaxPage = _useState6[1]; // function to batch data with a given number of rows per page

  var batchDataWithPaginationSelect = function batchDataWithPaginationSelect(
    arr,
    size
  ) {
    size = parseInt(size);
    var myArray = [];

    for (var i = 0; i < arr.length; i += size) {
      myArray.push(arr.slice(i, i + size));
    }

    return myArray;
  }; // raw data coming from props

  var _useState7 = (0, _react.useState)(data),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    rawData = _useState8[0],
    setrawData = _useState8[1]; // raw data filtering by search input

  var _useState9 = (0, _react.useState)(rawData),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    rawDataWithSearch = _useState10[0],
    setrawDataWithSearch = _useState10[1]; // data after pagination

  var _useState11 = (0, _react.useState)(
      batchDataWithPaginationSelect(rawDataWithSearch, numberOfRows)
    ),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    batchedData = _useState12[0],
    setbatchedData = _useState12[1];

  var numberOfEntries = rawDataWithSearch.length; // change batched data (array of paginated data) on each search change

  (0, _react.useEffect)(
    function () {
      setbatchedData(
        batchDataWithPaginationSelect(rawDataWithSearch, numberOfRows)
      );
    },
    [rawDataWithSearch]
  ); // data of the current page

  var _useState13 = (0, _react.useState)(batchedData[currentPage - 1]),
    _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
    tabledata = _useState14[0],
    settabledata = _useState14[1]; // number of rows on the current page

  var tabledataLength;

  if (tabledata === undefined) {
    tabledataLength = 0;
  } else {
    tabledataLength = tabledata.length;
  } // which sorting is active

  var _useState15 = (0, _react.useState)(""),
    _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
    activeSorting = _useState16[0],
    setactiveSorting = _useState16[1]; // which sorting direction is active

  var _useState17 = (0, _react.useState)("asc"),
    _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
    sortingDirection = _useState18[0],
    setsortingDirection = _useState18[1]; // change currentpage data with new current page

  (0, _react.useEffect)(
    function () {
      settabledata(batchedData[currentPage - 1]);
    },
    [currentPage]
  ); // on batchedData change, set the max Page again, and set the current page data

  (0, _react.useEffect)(
    function () {
      console.log(
        batchDataWithPaginationSelect(rawDataWithSearch, numberOfRows)
      );

      if (batchedData !== "undefined") {
        setmaxPage(batchedData.length);
      }

      if (batchedData[currentPage - 1] === "undefined") {
        settabledata(0);
      } else {
        settabledata(batchedData[currentPage - 1]);
      }
    },
    [batchedData]
  ); //trigger batch when number of rows select changes

  (0, _react.useEffect)(
    function () {
      setbatchedData(
        batchDataWithPaginationSelect(rawDataWithSearch, numberOfRows)
      );
    },
    [numberOfRows]
  ); //sort data ascending

  var sortAsc = function sortAsc(dat) {
    return dat.slice().sort(function (a, b) {
      var fa = a[activeSorting].toLowerCase(),
        fb = b[activeSorting].toLowerCase();

      if (fa < fb) {
        return 1;
      }

      if (fa > fb) {
        return -1;
      }

      return 0;
    });
  }; //sort data descending

  var sortDesc = function sortDesc(dat) {
    return dat.slice().sort(function (a, b) {
      var fa = a[activeSorting].toLowerCase(),
        fb = b[activeSorting].toLowerCase();

      if (fa < fb) {
        return -1;
      }

      if (fa > fb) {
        return 1;
      }

      return 0;
    });
  }; // sort data when we add a sorting on clicking on him

  (0, _react.useEffect)(
    function () {
      if (activeSorting) {
        if (sortingDirection === "asc") {
          setbatchedData(
            batchDataWithPaginationSelect(
              sortAsc(rawDataWithSearch),
              numberOfRows
            )
          );
        } else {
          setbatchedData(
            batchDataWithPaginationSelect(
              sortDesc(rawDataWithSearch),
              numberOfRows
            )
          );
        }

        setcurrentPage(1);
      }
    },
    [activeSorting, sortingDirection]
  );
  return /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      id: "employee-table_wrapper",
      className: "dataTables_wrapper no-footer",
    },
    /*#__PURE__*/ _react.default.createElement(_PaginationSelect.default, {
      setnumberOfRows: setnumberOfRows,
      setcurrentPage: setcurrentPage,
    }),
    /*#__PURE__*/ _react.default.createElement(_Search.default, {
      setrawDataWithSearch: setrawDataWithSearch,
      data: rawData,
      sortAsc: sortAsc,
      sortDesc: sortDesc,
      activeSorting: activeSorting,
      sortingDirection: sortingDirection,
      setcurrentPage: setcurrentPage,
    }),
    /*#__PURE__*/ _react.default.createElement(
      "table",
      {
        className: "dataTable display no-footer",
      },
      /*#__PURE__*/ _react.default.createElement(_TableHeading.default, {
        columns: columns,
        activeSorting: activeSorting,
        sortingDirection: sortingDirection,
        setactiveSorting: setactiveSorting,
        setsortingDirection: setsortingDirection,
      }),
      /*#__PURE__*/ _react.default.createElement(_TableBody.default, {
        tabledata: tabledata,
        columns: columns,
      })
    ),
    /*#__PURE__*/ _react.default.createElement(_PageChanger.default, {
      numberOfEntries: numberOfEntries,
      tableDataLength: tabledataLength,
      numberOfRows: numberOfRows,
      currentPage: currentPage,
      maxPage: maxPage,
      setcurrentPage: setcurrentPage,
    })
  );
}

var _default = DataTable;
exports.default = _default;
