webpackJsonp([9], {
  InLi: function (e, n) {
  }, Jmt5: function (e, n) {
  }, NHnr: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    var a = t("7+uW"), r = {
      name: "App", data: function () {
        return {}
      }, components: {
        Navbar: function () {
          return Promise.all([t.e(0), t.e(5)]).then(t.bind(null, "2dmD"))
        }, Footer: function () {
          return t.e(4).then(t.bind(null, "sEd7"))
        }
      }
    }, o = {
      render: function () {
        var e = this.$createElement, n = this._self._c || e;
        return n("div", {attrs: {id: "app"}}, [n("Navbar", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: "/login" !== this.$route.path,
            expression: "$route.path !== '/login' ? true : false"
          }]
        }), this._v(" "), n("router-view"), this._v(" "), n("Footer")], 1)
      }, staticRenderFns: []
    };
    var i = t("VU/8")(r, o, !1, function (e) {
      t("InLi")
    }, null, null).exports, u = t("/ocq");
    a.default.use(u.default);
    var l = new u.default({
      routes: [{path: "", redirect: {name: "Package"}}, {
        path: "/package",
        name: "Package",
        component: function () {
          return Promise.all([t.e(0), t.e(3)]).then(t.bind(null, "tlNo"))
        }
      }, {
        path: "/package/roaming", name: "PackageRoaming", component: function () {
          return Promise.all([t.e(0), t.e(2)]).then(t.bind(null, "Og1V"))
        }
      }, {
        path: "/login", name: "LoginUser", component: function () {
          return t.e(6).then(t.bind(null, "JYad"))
        }
      }, {
        path: "/package/register/:name?", name: "PackageRegister", component: function () {
          return Promise.all([t.e(0), t.e(7)]).then(t.bind(null, "S3Tw"))
        }
      }, {
        path: "/package/detail/:name?", name: "PackageDetail", component: function () {
          return Promise.all([t.e(0), t.e(1)]).then(t.bind(null, "VX0w"))
        }
      }], scrollBehavior: function (e, n, t) {
        return t || {y: 0}
      }
    });
    t("Jmt5");
    a.default.config.productionTip = !1, new a.default({
      el: "#app",
      router: l,
      components: {App: i},
      template: "<App/>"
    })
  }
}, ["NHnr"]);
//# sourceMappingURL=app.065303236d1bccde7909.js.map
