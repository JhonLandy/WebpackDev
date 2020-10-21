(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/view/table/table.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/view/table/table.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _service_Http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/service/Http */ "./src/service/Http.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import He from './HelloWorld'
// import RowElement from "./RowElement";

const RowElement = {
  props: {
    row: {
      type: Object,
      default: () => {}
    },
    k: {
      type: String,
      default: ""
    },
    nowId: {
      type: Number,
      default: 0
    },
    cell: {
      type: String,
      default: ""
    }
  },

  updated() {
    if (this.$refs.input && this.cell == this.k) this.$refs.input.focus();
  },

  methods: {
    doBlur({
      target: {
        value
      }
    }) {
      this.$emit("update:nowId", 0);
      _service_Http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/ycl/saveTableData", this.row).then(({
        data
      }) => {
        this.$message(data);
        this.$refs.contentText.innerHTML = this.row[this.k];
      });
    }

  },
  template: `
        <div>
            <el-input ref="input" v-model="row[k]" @blur="doBlur" v-show="k === cell && nowId === row.id"></el-input>
            <span ref="contentText" v-show="k !== cell || nowId !== row.id">{{row[k]}}</span>
        </div>`
};
const Table = {
  name: 'tables',

  data() {
    return {
      nowId: 0,
      cell: '',
      tableData: []
    };
  },

  mounted() {
    _service_Http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get("/ycl/getTableData").then(({
      data
    }) => {
      this.tableData = data;
    });
  },

  methods: {
    rowClick(...param) {
      this.nowId = param[0].id;
      this.cell = param[1].property;
    }

  },
  components: {
    // He
    RowElement
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Table);

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/view/table/table.vue?vue&type=template&id=0eeab03c&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/view/table/table.vue?vue&type=template&id=0eeab03c& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-table",
        {
          staticStyle: { width: "100%", "margin-top": "5px" },
          attrs: { data: _vm.tableData, border: "" },
          on: { "cell-click": _vm.rowClick }
        },
        [
          _c("el-table-column", {
            attrs: { type: "index", label: "序号", width: "60" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "date", label: "日期", width: "180" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("row-element", {
                      attrs: {
                        k: "date",
                        row: row,
                        nowId: _vm.nowId,
                        cell: _vm.cell
                      },
                      on: {
                        "update:nowId": function($event) {
                          _vm.nowId = $event
                        },
                        "update:now-id": function($event) {
                          _vm.nowId = $event
                        }
                      }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "name", label: "姓名", width: "180" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("row-element", {
                      attrs: {
                        k: "name",
                        row: row,
                        nowId: _vm.nowId,
                        cell: _vm.cell
                      },
                      on: {
                        "update:nowId": function($event) {
                          _vm.nowId = $event
                        },
                        "update:now-id": function($event) {
                          _vm.nowId = $event
                        }
                      }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "address", label: "地址" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("row-element", {
                      attrs: {
                        k: "address",
                        row: row,
                        nowId: _vm.nowId,
                        cell: _vm.cell
                      },
                      on: {
                        "update:nowId": function($event) {
                          _vm.nowId = $event
                        },
                        "update:now-id": function($event) {
                          _vm.nowId = $event
                        }
                      }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "el-table-column",
            { attrs: { prop: "option", label: "操作" } },
            [_c("el-button", { attrs: { type: "danger" } }, [_vm._v("删除")])],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/view/table/table.vue":
/*!**********************************!*\
  !*** ./src/view/table/table.vue ***!
  \**********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_0eeab03c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=0eeab03c& */ "./src/view/table/table.vue?vue&type=template&id=0eeab03c&");
/* harmony import */ var _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js& */ "./src/view/table/table.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _table_vue_vue_type_template_id_0eeab03c___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _table_vue_vue_type_template_id_0eeab03c___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/view/table/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/view/table/table.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/view/table/table.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/view/table/table.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/view/table/table.vue?vue&type=template&id=0eeab03c&":
/*!*****************************************************************!*\
  !*** ./src/view/table/table.vue?vue&type=template&id=0eeab03c& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_0eeab03c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=0eeab03c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/view/table/table.vue?vue&type=template&id=0eeab03c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_0eeab03c___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_0eeab03c___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXcvdGFibGUvdGFibGUudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3L3RhYmxlL3RhYmxlLnZ1ZT9lOWU2Iiwid2VicGFjazovLy8uL3NyYy92aWV3L3RhYmxlL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy90YWJsZS90YWJsZS52dWU/YjI5YSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy90YWJsZS90YWJsZS52dWU/ZTZhMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFLQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQUxBO0FBU0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FUQTtBQWFBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBYkEsR0FEQTs7QUFtQkE7QUFDQTtBQUNBLEdBckJBOztBQXNCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUE7O0FBUEEsR0F0QkE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5DQTtBQXFDQTtBQUNBLGdCQURBOztBQUVBO0FBQ0E7QUFDQSxjQURBO0FBRUEsY0FGQTtBQUdBO0FBSEE7QUFLQSxHQVJBOztBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSxLQUZBO0FBR0EsR0FiQTs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBLEdBZEE7QUFvQkE7QUFDQTtBQUNBO0FBRkE7QUFwQkE7QUF5QkEsZ0U7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFDQUFxQztBQUM3RCxrQkFBa0Isa0NBQWtDO0FBQ3BELGVBQWU7QUFDZixTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBLG9CQUFvQiwwQ0FBMEM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0Esb0JBQW9CLDBDQUEwQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLDhCQUE4QixFQUFFO0FBQ3RELDhCQUE4QixTQUFTLGlCQUFpQixFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDNkY7QUFDN0YsZ0JBQWdCLG1IQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLHdGQUFNO0FBQ1IsRUFBRSxpR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUEySyxDQUFnQiwyT0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7QUNBL0w7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL2pzLzNfNGVjMTlkN2I0YzdmODY2M2ZhYTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxlbC10YWJsZVxyXG4gICAgICAgICAgICA6ZGF0YT1cInRhYmxlRGF0YVwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7bWFyZ2luLXRvcDo1cHhcIlxyXG4gICAgICAgICAgICBAY2VsbC1jbGljaz1cInJvd0NsaWNrXCJcclxuICAgICAgICAgICAgYm9yZGVyXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZWwtdGFibGUtY29sdW1uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLluo/lj7dcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI2MFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9lbC10YWJsZS1jb2x1bW4+XHJcbiAgICAgICAgICAgIDxlbC10YWJsZS1jb2x1bW5cclxuICAgICAgICAgICAgICAgIHByb3A9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi5pel5pyfXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTgwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdD1cIntyb3d9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdy1lbGVtZW50IGs9XCJkYXRlXCIgOnJvdz1cInJvd1wiIDpub3dJZC5zeW5jPVwibm93SWRcIiA6Y2VsbD1cImNlbGxcIj48L3Jvdy1lbGVtZW50PlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9lbC10YWJsZS1jb2x1bW4+XHJcbiAgICAgICAgICAgIDxlbC10YWJsZS1jb2x1bW5cclxuICAgICAgICAgICAgICAgIHByb3A9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi5aeT5ZCNXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTgwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdD1cIntyb3d9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdy1lbGVtZW50IGs9XCJuYW1lXCIgOnJvdz1cInJvd1wiIDpub3dJZC5zeW5jPVwibm93SWRcIiA6Y2VsbD1cImNlbGxcIj48L3Jvdy1lbGVtZW50PlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9lbC10YWJsZS1jb2x1bW4+XHJcbiAgICAgICAgICAgIDxlbC10YWJsZS1jb2x1bW5cclxuICAgICAgICAgICAgICAgIHByb3A9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi5Zyw5Z2AXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdD1cIntyb3d9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdy1lbGVtZW50IGs9XCJhZGRyZXNzXCIgOnJvdz1cInJvd1wiIDpub3dJZC5zeW5jPVwibm93SWRcIiA6Y2VsbD1cImNlbGxcIj48L3Jvdy1lbGVtZW50PlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9lbC10YWJsZS1jb2x1bW4+XHJcbiAgICAgICAgICAgIDxlbC10YWJsZS1jb2x1bW5cclxuICAgICAgICAgICAgICAgIHByb3A9XCJvcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLmk43kvZxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZWwtYnV0dG9uIHR5cGU9XCJkYW5nZXJcIj7liKDpmaQ8L2VsLWJ1dHRvbj5cclxuICAgIDwhLS0gICAgICAgICAgICA8aGU+IDxlbC1idXR0b24gdHlwZT1cInByaW1hcnlcIj7nvJbovpE8L2VsLWJ1dHRvbj4tLT5cclxuICAgIDwhLS0gICAgICAgICAgICAgICAgPGVsLWJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCI+5Yig6ZmkPC9lbC1idXR0b24+PC9oZT4tLT5cclxuICAgICAgICAgICAgPC9lbC10YWJsZS1jb2x1bW4+XHJcbiAgICAgICAgPC9lbC10YWJsZT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgLy8gaW1wb3J0IEhlIGZyb20gJy4vSGVsbG9Xb3JsZCdcclxuICAgIC8vIGltcG9ydCBSb3dFbGVtZW50IGZyb20gXCIuL1Jvd0VsZW1lbnRcIjtcclxuICAgIGltcG9ydCBIdHRwIGZyb20gXCJAL3NlcnZpY2UvSHR0cFwiO1xyXG4gICAgY29uc3QgIFJvd0VsZW1lbnQgPSB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcm93OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKT0+IHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGs6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm93SWQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2VsbDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVkKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLmNlbGwgPT0gdGhpcy5rKSB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGRvQmx1cih7dGFyZ2V0OiB7dmFsdWV9fSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJ1cGRhdGU6bm93SWRcIiwwKTtcclxuICAgICAgICAgICAgICAgICAgICBIdHRwLnBvc3QoXCIveWNsL3NhdmVUYWJsZURhdGFcIiwgdGhpcy5yb3cpLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZXNzYWdlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnRUZXh0LmlubmVySFRNTCA9IHRoaXMucm93W3RoaXMua11cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6YFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGVsLWlucHV0IHJlZj1cImlucHV0XCIgdi1tb2RlbD1cInJvd1trXVwiIEBibHVyPVwiZG9CbHVyXCIgdi1zaG93PVwiayA9PT0gY2VsbCAmJiBub3dJZCA9PT0gcm93LmlkXCI+PC9lbC1pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlZj1cImNvbnRlbnRUZXh0XCIgdi1zaG93PVwiayAhPT0gY2VsbCB8fCBub3dJZCAhPT0gcm93LmlkXCI+e3tyb3dba119fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgfVxyXG4gICAgIGNvbnN0IFRhYmxlID0ge1xyXG4gICAgICAgIG5hbWU6ICd0YWJsZXMnLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBub3dJZDogMCxcclxuICAgICAgICAgICAgICAgIGNlbGw6ICcnLFxyXG4gICAgICAgICAgICAgICAgdGFibGVEYXRhOltdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBIdHRwLmdldChcIi95Y2wvZ2V0VGFibGVEYXRhXCIpLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZURhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgcm93Q2xpY2soLi4ucGFyYW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93SWQgPSBwYXJhbVswXS5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbCA9IHBhcmFtWzFdLnByb3BlcnR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIC8vIEhlXHJcbiAgICAgICAgICAgIFJvd0VsZW1lbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgZGVmYXVsdCBUYWJsZTtcclxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImVsLXRhYmxlXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIsIFwibWFyZ2luLXRvcFwiOiBcIjVweFwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLnRhYmxlRGF0YSwgYm9yZGVyOiBcIlwiIH0sXG4gICAgICAgICAgb246IHsgXCJjZWxsLWNsaWNrXCI6IF92bS5yb3dDbGljayB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImVsLXRhYmxlLWNvbHVtblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImluZGV4XCIsIGxhYmVsOiBcIuW6j+WPt1wiLCB3aWR0aDogXCI2MFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZWwtdGFibGUtY29sdW1uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHByb3A6IFwiZGF0ZVwiLCBsYWJlbDogXCLml6XmnJ9cIiwgd2lkdGg6IFwiMTgwXCIgfSxcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcm93ID0gcmVmLnJvd1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJyb3ctZWxlbWVudFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGs6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiByb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJZDogX3ZtLm5vd0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbDogX3ZtLmNlbGxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpub3dJZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5vd0lkID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6bm93LWlkXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubm93SWQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJlbC10YWJsZS1jb2x1bW5cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgcHJvcDogXCJuYW1lXCIsIGxhYmVsOiBcIuWnk+WQjVwiLCB3aWR0aDogXCIxODBcIiB9LFxuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciByb3cgPSByZWYucm93XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInJvdy1lbGVtZW50XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgazogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lkOiBfdm0ubm93SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsOiBfdm0uY2VsbFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOm5vd0lkXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubm93SWQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpub3ctaWRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ub3dJZCA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImVsLXRhYmxlLWNvbHVtblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBwcm9wOiBcImFkZHJlc3NcIiwgbGFiZWw6IFwi5Zyw5Z2AXCIgfSxcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcm93ID0gcmVmLnJvd1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJyb3ctZWxlbWVudFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGs6IFwiYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiByb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJZDogX3ZtLm5vd0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbDogX3ZtLmNlbGxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpub3dJZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5vd0lkID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6bm93LWlkXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubm93SWQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImVsLXRhYmxlLWNvbHVtblwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBwcm9wOiBcIm9wdGlvblwiLCBsYWJlbDogXCLmk43kvZxcIiB9IH0sXG4gICAgICAgICAgICBbX2MoXCJlbC1idXR0b25cIiwgeyBhdHRyczogeyB0eXBlOiBcImRhbmdlclwiIH0gfSwgW192bS5fdihcIuWIoOmZpFwiKV0pXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlZWFiMDNjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxwcm9qZWN0XFxcXGRlbW9XZWJwYWNrXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBlZWFiMDNjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBlZWFiMDNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBlZWFiMDNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGVlYWIwM2MmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGVlYWIwM2MnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3L3RhYmxlL3RhYmxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlZWFiMDNjJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==