(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/view/login/login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/view/login/login.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'login',

  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{
          required: true,
          message: '帐号不能为空！',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '密码不能为空！',
          trigger: 'blur'
        }]
      },
      lok: 1
    };
  },

  methods: {
    handleSubmit() {
      this.$notice({
        title: '校验结果',
        message: false ? undefined : '校验失败',
        duration: 2000
      });
      this.$refs.form.validate(valid => {
        if (valid) {
          _service_Http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/ycl/login", {
            username: this.form.username,
            password: this.form.password,
            isLogin: false
          }).then(({
            data
          }) => {
            if (data.status) {
              this.$message({
                type: 'danger',
                message: "登陆失败"
              });
            } else {
              window.localStorage.setItem("isLogin", true);
              this.$message({
                type: 'success',
                message: "登陆成功"
              });
              this.$router.push({
                name: 'page'
              });
            }
          });
        }
      });
    }

  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/view/login/login.vue?vue&type=style&index=0&id=77c14c32&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/view/login/login.vue?vue&type=style&index=0&id=77c14c32&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/view/login/login.vue?vue&type=template&id=77c14c32&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/view/login/login.vue?vue&type=template&id=77c14c32&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    "el-form",
    {
      ref: "form",
      staticClass: "demo-ruleForm",
      attrs: { model: _vm.form, "label-width": "100px", rules: _vm.rules }
    },
    [
      _c(
        "el-form-item",
        { attrs: { label: "帐号", prop: "username" } },
        [
          _c("el-input", {
            model: {
              value: _vm.form.username,
              callback: function($$v) {
                _vm.$set(_vm.form, "username", $$v)
              },
              expression: "form.username"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "密码", prop: "password" } },
        [
          _c("el-input", {
            attrs: { type: "password" },
            model: {
              value: _vm.form.password,
              callback: function($$v) {
                _vm.$set(_vm.form, "password", $$v)
              },
              expression: "form.password"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        [
          _c(
            "el-button",
            { attrs: { type: "primary" }, on: { click: _vm.handleSubmit } },
            [_vm._v("登陆")]
          ),
          _vm._v(" "),
          _c("el-button", [_vm._v("取消")])
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

/***/ "./src/view/login/login.vue":
/*!**********************************!*\
  !*** ./src/view/login/login.vue ***!
  \**********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_77c14c32_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=77c14c32&scoped=true& */ "./src/view/login/login.vue?vue&type=template&id=77c14c32&scoped=true&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./src/view/login/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _login_vue_vue_type_style_index_0_id_77c14c32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=77c14c32&scoped=true&lang=css& */ "./src/view/login/login.vue?vue&type=style&index=0&id=77c14c32&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _login_vue_vue_type_template_id_77c14c32_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _login_vue_vue_type_template_id_77c14c32_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "77c14c32",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/view/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/view/login/login.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/view/login/login.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/view/login/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/view/login/login.vue?vue&type=style&index=0&id=77c14c32&scoped=true&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./src/view/login/login.vue?vue&type=style&index=0&id=77c14c32&scoped=true&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_77c14c32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=77c14c32&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/view/login/login.vue?vue&type=style&index=0&id=77c14c32&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_77c14c32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_77c14c32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_77c14c32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/view/login/login.vue?vue&type=template&id=77c14c32&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/view/login/login.vue?vue&type=template&id=77c14c32&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_77c14c32_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=77c14c32&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/view/login/login.vue?vue&type=template&id=77c14c32&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_77c14c32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_77c14c32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXcvbG9naW4vbG9naW4udnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3L2xvZ2luL2xvZ2luLnZ1ZT81M2JlIiwid2VicGFjazovLy8uL3NyYy92aWV3L2xvZ2luL2xvZ2luLnZ1ZT84NDcwIiwid2VicGFjazovLy8uL3NyYy92aWV3L2xvZ2luL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9sb2dpbi9sb2dpbi52dWU/Yzk0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9sb2dpbi9sb2dpbi52dWU/NDViZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9sb2dpbi9sb2dpbi52dWU/ZGFhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQTtBQUNBO0FBQ0EsZUFEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBRkEsT0FEQTtBQUtBO0FBQ0EsbUJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBLENBREE7QUFJQSxtQkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREE7QUFKQSxPQUxBO0FBYUE7QUFiQTtBQWVBLEdBbEJBOztBQW1CQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLDJDQUZBO0FBR0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBLHdDQURBO0FBRUEsd0NBRkE7QUFHQTtBQUhBLGFBSUEsSUFKQSxDQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBO0FBRkE7QUFJQSxhQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0EsK0JBREE7QUFFQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxXQWxCQTtBQXFCQTtBQUNBLE9BeEJBO0FBeUJBOztBQWhDQTtBQW5CQSxHOzs7Ozs7Ozs7Ozs7QUNqREEsdUM7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsZ0NBQWdDLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGdDQUFnQyxFQUFFO0FBQ3BEO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLGtCQUFrQixPQUFPLDBCQUEwQixFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3FDOzs7QUFHekY7QUFDNkY7QUFDN0YsZ0JBQWdCLG1IQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLG9HQUFNO0FBQ1IsRUFBRSw2R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUEySyxDQUFnQiwyT0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTDtBQUFBO0FBQUE7QUFBcVUsQ0FBZ0IsMlhBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7O0FDQXpWO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9qcy8yXzRlYzE5ZDdiNGM3Zjg2NjNmYWE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGVsLWZvcm1cclxuICAgICAgICByZWY9XCJmb3JtXCJcclxuICAgICAgICA6bW9kZWw9XCJmb3JtXCJcclxuICAgICAgICBsYWJlbC13aWR0aD1cIjEwMHB4XCJcclxuICAgICAgICBjbGFzcz1cImRlbW8tcnVsZUZvcm1cIlxyXG4gICAgICAgIDpydWxlcz1cInJ1bGVzXCJcclxuICAgID5cclxuICAgICAgICA8ZWwtZm9ybS1pdGVtIGxhYmVsPVwi5biQ5Y+3XCIgcHJvcD1cInVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgIDxlbC1pbnB1dCB2LW1vZGVsPVwiZm9ybS51c2VybmFtZVwiPjwvZWwtaW5wdXQ+XHJcbiAgICAgICAgPC9lbC1mb3JtLWl0ZW0+XHJcbiAgICAgICAgPGVsLWZvcm0taXRlbSBsYWJlbD1cIuWvhueggVwiIHByb3A9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICA8ZWwtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIj48L2VsLWlucHV0PlxyXG48IS0tICAgICAgICAgICAgPGVsLXNlbGVjdCB2LW1vZGVsPVwiZm9ybS5zZWxlY3RcIiBwbGFjZWhvbGRlcj1cIuivt+mAieaLqea0u+WKqOWMuuWfn1wiPi0tPlxyXG48IS0tICAgICAgICAgICAgICAgIDxlbC1vcHRpb24gbGFiZWw9XCLljLrln5/kuIBcIiB2YWx1ZT1cInNoYW5naGFpXCI+PC9lbC1vcHRpb24+LS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgPGVsLW9wdGlvbiBsYWJlbD1cIuWMuuWfn+S6jFwiIHZhbHVlPVwiYmVpamluZ1wiPjwvZWwtb3B0aW9uPi0tPlxyXG48IS0tICAgICAgICAgICAgPC9lbC1zZWxlY3Q+LS0+XHJcbiAgICAgICAgPC9lbC1mb3JtLWl0ZW0+XHJcbjwhLS0gICAgICAgIDxlbC1mb3JtLWl0ZW0gIGxhYmVsPVwi5rS75Yqo5pe26Ze0XCIgcHJvcD1cImRhdGVcIiByZXF1aXJlZD4tLT5cclxuPCEtLSAgICAgICAgICAgIDxlbC1kYXRlLXBpY2tlciB0eXBlPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPVwi6YCJ5oup5pel5pyfXCIgdi1tb2RlbD1cImZvcm0uZGF0ZVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+PC9lbC1kYXRlLXBpY2tlcj4tLT5cclxuPCEtLSAgICAgICAgPC9lbC1mb3JtLWl0ZW0+LS0+XHJcbjwhLS0gICAgICAgIDxlbC1mb3JtLWl0ZW0gbGFiZWw9XCLljbPml7bphY3pgIFcIiBwcm9wPVwiZGVsaXZlcnlcIiByZXF1aXJlZD4tLT5cclxuPCEtLSAgICAgICAgICAgIDxlbC1zd2l0Y2ggdi1tb2RlbD1cImZvcm0uZGVsaXZlcnlcIj48L2VsLXN3aXRjaD4tLT5cclxuPCEtLSAgICAgICAgPC9lbC1mb3JtLWl0ZW0+LS0+XHJcbjwhLS0gICAgICAgIDxlbC1mb3JtLWl0ZW0gbGFiZWw9XCLmtLvliqjmgKfotKhcIiBwcm9wPVwidHlwZVwiIHJlcXVpcmVkPi0tPlxyXG48IS0tICAgICAgICAgICAgPGVsLWNoZWNrYm94LWdyb3VwIHYtbW9kZWw9XCJmb3JtLnR5cGVcIj4tLT5cclxuPCEtLSAgICAgICAgICAgICAgICA8ZWwtY2hlY2tib3ggbGFiZWw9XCLnvo7po58v6aSQ5Y6F57q/5LiK5rS75YqoXCIgbmFtZT1cInR5cGVcIj48L2VsLWNoZWNrYm94Pi0tPlxyXG48IS0tICAgICAgICAgICAgICAgIDxlbC1jaGVja2JveCBsYWJlbD1cIuWcsOaOqOa0u+WKqFwiIG5hbWU9XCJ0eXBlXCI+PC9lbC1jaGVja2JveD4tLT5cclxuPCEtLSAgICAgICAgICAgICAgICA8ZWwtY2hlY2tib3ggbGFiZWw9XCLnur/kuIvkuLvpopjmtLvliqhcIiBuYW1lPVwidHlwZVwiPjwvZWwtY2hlY2tib3g+LS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgPGVsLWNoZWNrYm94IGxhYmVsPVwi5Y2V57qv5ZOB54mM5pud5YWJXCIgbmFtZT1cInR5cGVcIj48L2VsLWNoZWNrYm94Pi0tPlxyXG48IS0tICAgICAgICAgICAgPC9lbC1jaGVja2JveC1ncm91cD4tLT5cclxuPCEtLSAgICAgICAgPC9lbC1mb3JtLWl0ZW0+LS0+XHJcbjwhLS0gICAgICAgIDxlbC1mb3JtLWl0ZW0gbGFiZWw9XCLnibnmrorotYTmupBcIiBwcm9wPVwicmVzb3VyY2VcIiByZXF1aXJlZD4tLT5cclxuPCEtLSAgICAgICAgICAgIDxlbC1yYWRpby1ncm91cCB2LW1vZGVsPVwiZm9ybS5yZXNvdXJjZVwiPi0tPlxyXG48IS0tICAgICAgICAgICAgICAgIDxlbC1yYWRpbyBsYWJlbD1cIue6v+S4iuWTgeeJjOWVhui1nuWKqVwiPjwvZWwtcmFkaW8+LS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgPGVsLXJhZGlvIGxhYmVsPVwi57q/5LiL5Zy65Zyw5YWN6LS5XCI+PC9lbC1yYWRpbz4tLT5cclxuPCEtLSAgICAgICAgICAgIDwvZWwtcmFkaW8tZ3JvdXA+LS0+XHJcbjwhLS0gICAgICAgIDwvZWwtZm9ybS1pdGVtPi0tPlxyXG48IS0tICAgICAgICA8ZWwtZm9ybS1pdGVtIGxhYmVsPVwi5rS75Yqo5b2i5byPXCIgcmVxdWlyZWQ+LS0+XHJcbjwhLS0gICAgICAgICAgICA8ZWwtaW5wdXQgdHlwZT1cInRleHRhcmVhXCIgdi1tb2RlbD1cImZvcm0uZGVzY1wiPjwvZWwtaW5wdXQ+LS0+XHJcbjwhLS0gICAgICAgIDwvZWwtZm9ybS1pdGVtPi0tPlxyXG4gICAgICAgIDxlbC1mb3JtLWl0ZW0+XHJcbiAgICAgICAgICAgIDxlbC1idXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJoYW5kbGVTdWJtaXRcIj7nmbvpmYY8L2VsLWJ1dHRvbj5cclxuICAgICAgICAgICAgPGVsLWJ1dHRvbj7lj5bmtog8L2VsLWJ1dHRvbj5cclxuICAgICAgICA8L2VsLWZvcm0taXRlbT5cclxuICAgIDwvZWwtZm9ybT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBIdHRwIGZyb20gXCJAL3NlcnZpY2UvSHR0cFwiO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6ICdsb2dpbicsXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn5biQ5Y+35LiN6IO95Li656m677yBJywgdHJpZ2dlcjogJ2JsdXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICflr4bnoIHkuI3og73kuLrnqbrvvIEnLCB0cmlnZ2VyOiAnYmx1cicgfSxcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbG9rOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgICAgICB0aGlzLiRub3RpY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmoKHpqoznu5PmnpwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBmYWxzZSA/ICfor7fmsYLnmbvlvZUnIDogJ+agoemqjOWksei0pScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZm9ybS52YWxpZGF0ZSgodmFsaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSHR0cC5wb3N0KFwiL3ljbC9sb2dpblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5mb3JtLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuZm9ybS5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9naW46IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIueZu+mZhuWksei0pVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXNMb2dpblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIueZu+mZhuaIkOWKn1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdwYWdlJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5lbC1mb3JtIHtcclxuICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgcGFkZGluZzo1MHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDE1MHB4IGF1dG87XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCAjY2NjO1xyXG59XHJcbi5lbC1zZWxlY3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmFzc3Mge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImVsLWZvcm1cIixcbiAgICB7XG4gICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZGVtby1ydWxlRm9ybVwiLFxuICAgICAgYXR0cnM6IHsgbW9kZWw6IF92bS5mb3JtLCBcImxhYmVsLXdpZHRoXCI6IFwiMTAwcHhcIiwgcnVsZXM6IF92bS5ydWxlcyB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJlbC1mb3JtLWl0ZW1cIixcbiAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCLluJDlj7dcIiwgcHJvcDogXCJ1c2VybmFtZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZWwtaW5wdXRcIiwge1xuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnVzZXJuYW1lLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidXNlcm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udXNlcm5hbWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZWwtZm9ybS1pdGVtXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwi5a+G56CBXCIsIHByb3A6IFwicGFzc3dvcmRcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImVsLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZWwtZm9ybS1pdGVtXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZWwtYnV0dG9uXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwicHJpbWFyeVwiIH0sIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlU3VibWl0IH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLnmbvpmYZcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZWwtYnV0dG9uXCIsIFtfdm0uX3YoXCLlj5bmtohcIildKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03N2MxNGMzMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03N2MxNGMzMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzdjMTRjMzJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxwcm9qZWN0XFxcXGRlbW9XZWJwYWNrXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc3YzE0YzMyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc3YzE0YzMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc3YzE0YzMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzdjMTRjMzImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzdjMTRjMzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3L2xvZ2luL2xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03N2MxNGMzMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzdjMTRjMzImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3YzE0YzMyJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==