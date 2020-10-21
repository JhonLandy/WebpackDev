(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/header.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },

  watch: {
    $route: {
      handler() {
        console.log(this.$store.state.userInfo);
      },

      immediate: true
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },

    isLogin() {
      return this.$store.state.isLogin;
    }

  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    logout() {
      this.$store.commit("changeUser", {});
      window.localStorage.removeItem("isLogin");
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/home.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/components/header.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'home',
  components: {
    Header: _header__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },

  beforeRouteUpdate(to, from, next) {
    console.log("ss");
    next();
  }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/header.vue?vue&type=template&id=29e8c3c6&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header.vue?vue&type=template&id=29e8c3c6& ***!
  \************************************************************************************************************************************************************************************************/
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
    "el-menu",
    {
      staticClass: "el-menu-demo",
      attrs: {
        "default-active": _vm.activeIndex2,
        mode: "horizontal",
        "background-color": "#545c64",
        "text-color": "#fff",
        "active-text-color": "#ffd04b"
      },
      on: { select: _vm.handleSelect }
    },
    [
      _c(
        "el-menu-item",
        { attrs: { index: "1" } },
        [
          _c("router-link", { attrs: { to: { name: "page" } } }, [
            _vm._v("首页")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-menu-item",
        { attrs: { index: "2" } },
        [
          _c("router-link", { attrs: { to: { name: "table" } } }, [
            _vm._v("表格")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-menu-item",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.userInfo.username,
              expression: "userInfo.username"
            }
          ],
          staticStyle: { float: "right" },
          attrs: { index: "3" }
        },
        [
          _c("router-link", { attrs: { to: { name: "login" } } }, [
            _vm._v(_vm._s(_vm.userInfo.username))
          ]),
          _vm._v(" "),
          _c(
            "a",
            { attrs: { href: "javascript:;" }, on: { click: _vm.logout } },
            [_vm._v("退出")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-menu-item",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.userInfo.username,
              expression: "!userInfo.username"
            }
          ],
          staticStyle: { float: "right" },
          attrs: { index: "3" }
        },
        [
          _c("router-link", { attrs: { to: { name: "login" } } }, [
            _vm._v("登陆")
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { to: { name: "register" } } }, [
            _vm._v("注册")
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/home.vue?vue&type=template&id=957c9522&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/home.vue?vue&type=template&id=957c9522& ***!
  \**********************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("Header"), _vm._v(" "), _c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/header.vue":
/*!***********************************!*\
  !*** ./src/components/header.vue ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _header_vue_vue_type_template_id_29e8c3c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=29e8c3c6& */ "./src/components/header.vue?vue&type=template&id=29e8c3c6&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./src/components/header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _header_vue_vue_type_template_id_29e8c3c6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _header_vue_vue_type_template_id_29e8c3c6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/header.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/components/header.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/header.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/header.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/components/header.vue?vue&type=template&id=29e8c3c6&":
/*!******************************************************************!*\
  !*** ./src/components/header.vue?vue&type=template&id=29e8c3c6& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_29e8c3c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=29e8c3c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/header.vue?vue&type=template&id=29e8c3c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_29e8c3c6___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_29e8c3c6___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/components/home.vue":
/*!*********************************!*\
  !*** ./src/components/home.vue ***!
  \*********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_957c9522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=957c9522& */ "./src/components/home.vue?vue&type=template&id=957c9522&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./src/components/home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _home_vue_vue_type_template_id_957c9522___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _home_vue_vue_type_template_id_957c9522___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/home.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/components/home.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/home.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/components/home.vue?vue&type=template&id=957c9522&":
/*!****************************************************************!*\
  !*** ./src/components/home.vue?vue&type=template&id=957c9522& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_957c9522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=957c9522& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/home.vue?vue&type=template&id=957c9522&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_957c9522___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_957c9522___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZT85MTk2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUudnVlPzYwNjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudnVlP2ZlZjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZT9iYWUzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUudnVlPzMzNjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS52dWU/OTRlZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUZBO0FBSUEsR0FOQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7O0FBSUE7QUFKQTtBQURBLEdBUEE7QUFlQTtBQUNBO0FBQ0E7QUFDQSxLQUhBOztBQUlBO0FBQ0E7QUFDQTs7QUFOQSxHQWZBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBUEE7QUF2QkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFFQTtBQUNBLGNBREE7QUFFQTtBQUNBO0FBREEsR0FGQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQSxHOzs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsV0FBVztBQUNYLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsYUFBYSxFQUFFO0FBQ2pDO0FBQ0EsNkJBQTZCLFNBQVMsTUFBTSxlQUFlLEVBQUUsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGFBQWEsRUFBRTtBQUNqQztBQUNBLDZCQUE2QixTQUFTLE1BQU0sZ0JBQWdCLEVBQUUsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QyxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0EsNkJBQTZCLFNBQVMsTUFBTSxnQkFBZ0IsRUFBRSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsb0JBQW9CLEdBQUcsT0FBTyxvQkFBb0IsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QyxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0EsNkJBQTZCLFNBQVMsTUFBTSxnQkFBZ0IsRUFBRSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTLE1BQU0sbUJBQW1CLEVBQUUsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMOzs7QUFHckQ7QUFDMEY7QUFDMUYsZ0JBQWdCLG1IQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLHlGQUFNO0FBQ1IsRUFBRSxrR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSwwRTs7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFzSyxDQUFnQiw0T0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7QUNBMUw7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDMEY7QUFDMUYsZ0JBQWdCLG1IQUFVO0FBQzFCLEVBQUUsa0ZBQU07QUFDUixFQUFFLHVGQUFNO0FBQ1IsRUFBRSxnR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFvSyxDQUFnQiwwT0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7QUNBeEw7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL2pzLzFfNGVjMTlkN2I0YzdmODY2M2ZhYTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZWwtbWVudVxyXG4gICAgICAgICAgICA6ZGVmYXVsdC1hY3RpdmU9XCJhY3RpdmVJbmRleDJcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImVsLW1lbnUtZGVtb1wiXHJcbiAgICAgICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgQHNlbGVjdD1cImhhbmRsZVNlbGVjdFwiXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I9XCIjNTQ1YzY0XCJcclxuICAgICAgICAgICAgdGV4dC1jb2xvcj1cIiNmZmZcIlxyXG4gICAgICAgICAgICBhY3RpdmUtdGV4dC1jb2xvcj1cIiNmZmQwNGJcIj5cclxuICAgICAgICA8ZWwtbWVudS1pdGVtIGluZGV4PVwiMVwiPlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwie25hbWU6ICdwYWdlJ31cIj7pppbpobU8L3JvdXRlci1saW5rPlxyXG4gICAgICAgIDwvZWwtbWVudS1pdGVtPlxyXG4gICAgICAgIDxlbC1tZW51LWl0ZW0gaW5kZXg9XCIyXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7bmFtZTogJ3RhYmxlJ31cIj7ooajmoLw8L3JvdXRlci1saW5rPlxyXG4gICAgICAgIDwvZWwtbWVudS1pdGVtPlxyXG4gICAgICAgIDxlbC1tZW51LWl0ZW0gaW5kZXg9XCIzXCIgc3R5bGU9XCJmbG9hdDogcmlnaHRcIiB2LXNob3c9XCJ1c2VySW5mby51c2VybmFtZVwiPlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwie25hbWU6J2xvZ2luJ31cIj57e3VzZXJJbmZvLnVzZXJuYW1lfX08L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgQGNsaWNrPVwibG9nb3V0XCI+6YCA5Ye6PC9hPlxyXG4gICAgICAgIDwvZWwtbWVudS1pdGVtPlxyXG4gICAgICAgIDxlbC1tZW51LWl0ZW0gaW5kZXg9XCIzXCIgc3R5bGU9XCJmbG9hdDogcmlnaHRcIiB2LXNob3c9XCIhdXNlckluZm8udXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cIntuYW1lOidsb2dpbid9XCI+55m76ZmGPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cIntuYW1lOidyZWdpc3Rlcid9XCI+5rOo5YaMPC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8L2VsLW1lbnUtaXRlbT5cclxuICAgIDwvZWwtbWVudT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7bWFwU3RhdGV9IGZyb20gJ3Z1ZXgnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleDogJzEnLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXgyOiAnMSdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgICRyb3V0ZToge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRzdG9yZS5zdGF0ZS51c2VySW5mbyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXJJbmZvXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlzTG9naW4oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuaXNMb2dpblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdChrZXksIGtleVBhdGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSwga2V5UGF0aCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ291dCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImNoYW5nZVVzZXJcIiwge30pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiaXNMb2dpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiAnaG9tZScsXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBIZWFkZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJlZm9yZVJvdXRlVXBkYXRlKHRvLCBmcm9tLCBuZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3NcIik7XHJcbiAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZWwtbWVudVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImVsLW1lbnUtZGVtb1wiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJkZWZhdWx0LWFjdGl2ZVwiOiBfdm0uYWN0aXZlSW5kZXgyLFxuICAgICAgICBtb2RlOiBcImhvcml6b250YWxcIixcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzU0NWM2NFwiLFxuICAgICAgICBcInRleHQtY29sb3JcIjogXCIjZmZmXCIsXG4gICAgICAgIFwiYWN0aXZlLXRleHQtY29sb3JcIjogXCIjZmZkMDRiXCJcbiAgICAgIH0sXG4gICAgICBvbjogeyBzZWxlY3Q6IF92bS5oYW5kbGVTZWxlY3QgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZWwtbWVudS1pdGVtXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgaW5kZXg6IFwiMVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcInBhZ2VcIiB9IH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi6aaW6aG1XCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJlbC1tZW51LWl0ZW1cIixcbiAgICAgICAgeyBhdHRyczogeyBpbmRleDogXCIyXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwidGFibGVcIiB9IH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi6KGo5qC8XCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJlbC1tZW51LWl0ZW1cIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlckluZm8udXNlcm5hbWUsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlckluZm8udXNlcm5hbWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgZmxvYXQ6IFwicmlnaHRcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7IGluZGV4OiBcIjNcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJsb2dpblwiIH0gfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VySW5mby51c2VybmFtZSkpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0sIG9uOiB7IGNsaWNrOiBfdm0ubG9nb3V0IH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLpgIDlh7pcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImVsLW1lbnUtaXRlbVwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6ICFfdm0udXNlckluZm8udXNlcm5hbWUsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIXVzZXJJbmZvLnVzZXJuYW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZsb2F0OiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICBhdHRyczogeyBpbmRleDogXCIzXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwibG9naW5cIiB9IH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi55m76ZmGXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJyZWdpc3RlclwiIH0gfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLms6jlhoxcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtfYyhcIkhlYWRlclwiKSwgX3ZtLl92KFwiIFwiKSwgX2MoXCJyb3V0ZXItdmlld1wiKV0sIDEpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5ZThjM2M2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHByb2plY3RcXFxcZGVtb1dlYnBhY2tcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjllOGMzYzYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjllOGMzYzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjllOGMzYzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2hlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjllOGMzYzYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjllOGMzYzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2hlYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOWU4YzNjNiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTU3Yzk1MjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxwcm9qZWN0XFxcXGRlbW9XZWJwYWNrXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzk1N2M5NTIyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk1N2M5NTIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk1N2M5NTIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9ob21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NTdjOTUyMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5NTdjOTUyMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvaG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NTdjOTUyMiZcIiJdLCJzb3VyY2VSb290IjoiIn0=