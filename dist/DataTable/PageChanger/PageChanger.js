"use strict";

var _interopRequireWildcard =
  require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

// component which contains the buttons to change the current page by a number or by a previous or next button to navigate between pages
function PageChanger(_ref) {
  var numberOfEntries = _ref.numberOfEntries,
    tableDataLength = _ref.tableDataLength,
    numberOfRows = _ref.numberOfRows,
    currentPage = _ref.currentPage,
    maxPage = _ref.maxPage,
    setcurrentPage = _ref.setcurrentPage;
  var beginOfChunk = numberOfRows * currentPage - numberOfRows;
  var endOfChunk = numberOfRows * currentPage; //manage last page chunk if length of current page data is less than number of rows selected

  if (tableDataLength < numberOfRows) {
    endOfChunk = numberOfEntries;
  } // if current data is empty, set begin and end of chunk equal to 0

  if (tableDataLength === 0) {
    endOfChunk = 0;
    beginOfChunk = 0;
  }
  /**
   * handler of page number click
   * @param {*} e
   */

  var handleChangePage = function handleChangePage(e) {
    setcurrentPage(parseInt(e.target.textContent));
  };
  /**
   * handler of previous page click
   */

  var handlePreviousPage = function handlePreviousPage() {
    setcurrentPage(currentPage - 1);
  };
  /**
   * handler of next page click
   */

  var handleNextPage = function handleNextPage() {
    setcurrentPage(currentPage + 1);
  }; // Page number buttons elements if number of pages is maximum 7

  var lessOrEqualToSevenPagesJsx = [];

  for (var i = 0; i < maxPage; i++) {
    lessOrEqualToSevenPagesJsx.push(
      /*#__PURE__*/ _react.default.createElement(
        "button",
        {
          className: "paginate_button".concat(
            currentPage === i + 1 ? " current" : ""
          ),
          "aria-controls": "employee-table",
          tabIndex: "0",
          onClick: handleChangePage,
        },
        i + 1
      )
    );
  }

  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        className: "dataTables_info",
        id: "employee-table_info",
        role: "status",
        "aria-live": "polite",
      },
      "Showing ",
      beginOfChunk,
      " to ",
      endOfChunk,
      " of ",
      numberOfEntries,
      " entries"
    ),
    /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        className: "dataTables_paginate paging_simple_numbers",
        id: "employee-table_paginate",
      },
      /*#__PURE__*/ _react.default.createElement(
        "button",
        {
          className: "paginate_button previous disabled",
          "aria-controls": "employee-table",
          tabIndex: "-1",
          id: "employee-table_previous",
          onClick: handlePreviousPage,
        },
        "Previous"
      ),
      /*#__PURE__*/ _react.default.createElement(
        "span",
        null,
        maxPage <= 7
          ? /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              lessOrEqualToSevenPagesJsx.map(function (el, index) {
                return /*#__PURE__*/ _react.default.createElement(
                  _react.default.Fragment,
                  {
                    key: "page-changer-number".concat(index),
                  },
                  el
                );
              })
            )
          : null,
        currentPage < 5 && maxPage > 7
          ? /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              /*#__PURE__*/ _react.default.createElement(
                "span",
                null,
                "vers le d\xE9but"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button".concat(
                    currentPage === 1 ? " current" : ""
                  ),
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                "1"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button".concat(
                    currentPage === 2 ? " current" : ""
                  ),
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                "2"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button".concat(
                    currentPage === 3 ? " current" : ""
                  ),
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                "3"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button".concat(
                    currentPage === 4 ? " current" : ""
                  ),
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                "4"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button".concat(
                    currentPage === 5 ? " current" : ""
                  ),
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                "5"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "span",
                {
                  className: "ellipsis",
                },
                "..."
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button",
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                maxPage
              )
            )
          : null,
        currentPage > maxPage - 4 && maxPage > 7
          ? /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              /*#__PURE__*/ _react.default.createElement(
                "span",
                null,
                "vers la fin"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button".concat(
                    currentPage === 5 ? " current" : ""
                  ),
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                "1"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "span",
                {
                  className: "ellipsis",
                },
                "..."
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button".concat(
                    currentPage === maxPage - 4 ? " current" : ""
                  ),
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                maxPage - 4
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button".concat(
                    currentPage === maxPage - 3 ? " current" : ""
                  ),
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                maxPage - 3
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button".concat(
                    currentPage === maxPage - 2 ? " current" : ""
                  ),
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                maxPage - 2
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button".concat(
                    currentPage === maxPage - 1 ? " current" : ""
                  ),
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                maxPage - 1
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button".concat(
                    currentPage === maxPage ? " current" : ""
                  ),
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                maxPage
              )
            )
          : null,
        currentPage >= 5 && currentPage <= maxPage - 4 && maxPage > 7
          ? /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              /*#__PURE__*/ _react.default.createElement(
                "span",
                null,
                "entre les deux"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button",
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                "1"
              ),
              /*#__PURE__*/ _react.default.createElement(
                "span",
                {
                  className: "ellipsis",
                },
                "..."
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button",
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                currentPage - 1
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button current",
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                currentPage
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button",
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                currentPage + 1
              ),
              /*#__PURE__*/ _react.default.createElement(
                "span",
                {
                  className: "ellipsis",
                },
                "..."
              ),
              /*#__PURE__*/ _react.default.createElement(
                "button",
                {
                  className: "paginate_button",
                  "aria-controls": "employee-table",
                  tabIndex: "0",
                  onClick: handleChangePage,
                },
                maxPage
              )
            )
          : null
      ),
      /*#__PURE__*/ _react.default.createElement(
        "button",
        {
          className: "paginate_button next disabled",
          "aria-controls": "employee-table",
          tabIndex: "-1",
          id: "employee-table_next",
          onClick: handleNextPage,
        },
        "Next"
      )
    )
  );
}

var _default = PageChanger;
exports.default = _default;
