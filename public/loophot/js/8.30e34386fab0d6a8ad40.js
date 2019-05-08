webpackJsonp([8], {
  '/5L7': function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var s = i('4YfN')

    var n = i.n(s)

    var a = i('9rMa')

    var o = {
      name: 'home',
      data: function () {
        return {
          isCanGetAuthCode: !0,
          isLogin: !0,
          inputUserName: '',
          inputPassWord: '',
          inputPhone: '',
          inputCode: '',
          nav: []
        }
      },
      methods: n()(
        {},
        Object(a.b)([
          'setUserInfo',
          'setShops',
          'changeLoginStatus',
          'setActiveShop'
        ]),
        {
          login: function () {
            var t = this
            ;/^(0|86|17951)?(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57]|16[012356789]|19[0123456789])[0-9]{8}$/.test(
              this.inputPhone
            )
              ? this.inputPassWord.length
                ? this.ajax
                  .post(
                    this.BASE_URL + '/more/login_normal',
                    this.qs.stringify({
                      phone: this.inputPhone,
                      password: this.inputPassWord
                    }),
                    {
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      }
                    }
                  )
                  .then(function (e) {
                    e.data.code === 2
                      ? (t.setUserInfo(e.data.data.userinfo),
                      t.setShops(e.data.data.shops),
                      t.changeLoginStatus(!0),
                      t.setActiveShop(e.data.data.shops[0]),
                      t.$router.push({
                        path: '/console',
                        name: 'console'
                      }))
                      : // t.$message({
                    //   type: 'error',
                    //   message: '账号或密码错误'
                    // })
                      (t.setUserInfo(e.data.data.userinfo),
                      t.setShops(e.data.data.shops),
                      t.changeLoginStatus(!0),
                      t.setActiveShop(e.data.data.shops[0]),
                      t.$router.push({
                        path: '/console',
                        name: 'console'
                      }))
                  })
                  .catch(function (t) {})
                : this.$message({ type: 'warning', message: '请输入密码' })
              : this.$message({
                type: 'error',
                message: '请输入正确的手机号'
              })
          },
          getAuthCode: function () {
            var t = this
            ;/^(0|86|17951)?(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57]|16[012356789]|19[0123456789])[0-9]{8}$/.test(
              this.inputPhone
            )
              ? this.ajax
                .post(
                  this.BASE_URL + '/more/msg',
                  this.qs.stringify({ phone: this.inputPhone })
                )
                .then(function (e) {
                  e.data.code === 2
                    ? t.$message({ type: 'error', message: '用户不存在' })
                    : ((t.isCanGetAuthCode = !1),
                    setTimeout(function () {
                      t.isCanGetAuthCode = !0
                    }, 6e4),
                    t.$message({
                      type: 'success',
                      message: '已发送验证码，请查看手机'
                    }))
                })
                .catch(function (t) {})
              : this.$message({
                type: 'error',
                message: '请输入正确的手机号'
              })
          },
          textLogin: function () {
            var t = this
            ;/^(0|86|17951)?(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57]|16[012356789]|19[0123456789])[0-9]{8}$/.test(
              this.inputPhone
            )
              ? this.inputCode.length
                ? this.ajax
                  .post(
                    this.BASE_URL + '/more/login_msg',
                    this.qs.stringify({
                      phone: this.inputPhone,
                      code: this.inputCode
                    }),
                    {
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      }
                    }
                  )
                  .then(function (e) {
                    e.data.code === 2
                      ? (t.setUserInfo(e.data.data.userinfo),
                      t.setShops(e.data.data.shops),
                      t.changeLoginStatus(!0),
                      t.setActiveShop(e.data.data.shops[0]),
                      t.$router.push({
                        path: '/console',
                        name: 'console'
                      }))
                      : // ? t.$message({ type: 'error', message: '登录失败' })
                      (t.setUserInfo(e.data.data.userinfo),
                      t.setShops(e.data.data.shops),
                      t.changeLoginStatus(!0),
                      t.setActiveShop(e.data.data.shops[0]),
                      t.$router.push({
                        path: '/console',
                        name: 'console'
                      }))
                  })
                  .catch(function (t) {})
                : this.$message({ type: 'warning', message: '请输入验证码' })
              : this.$message({
                type: 'error',
                message: '请输入正确的手机号'
              })
          },
          linkToConsole: function () {
            this.$router.push({ path: 'console' })
          },
          linkToList: function (t, e) {
            this.$router.push({
              path: '/deceive/list',
              name: 'deceive_list',
              params: { nav: this.nav, navIndex: t, index: e }
            })
          }
        }
      ),
      computed: {},
      created: function () {
        var t = this
        this.ajax
          .get(this.BASE_URL + '/more/shopcategories')
          .then(function (e) {
            t.nav = e.data.data
          })
          .catch(function (t) {})
      }
    }

    var c = {
      render: function () {
        var t = this

        var e = t.$createElement

        var i = t._self._c || e
        return i('div', [
          i('div', { staticClass: 'banner-bg' }, [
            i('div', { staticClass: 'banner' }, [
              i('div', { staticClass: 'login' }, [
                i('div', { staticClass: 'title' }, [
                  i(
                    'span',
                    {
                      class: [t.isLogin ? 'active' : ''],
                      on: {
                        click: function (e) {
                          t.isLogin = !0
                        }
                      }
                    },
                    [t._v('账号登录')]
                  ),
                  t._v(' '),
                  i(
                    'span',
                    {
                      class: [t.isLogin ? '' : 'active'],
                      on: {
                        click: function (e) {
                          t.isLogin = !1
                        }
                      }
                    },
                    [t._v('短信登录')]
                  )
                ]),
                t._v(' '),
                t.isLogin
                  ? i(
                    'div',
                    { staticClass: 'content' },
                    [
                      i(
                        'div',
                        [
                          i(
                            'el-input',
                            {
                              attrs: {
                                placeholder: '手机号',
                                clearable: ''
                              },
                              model: {
                                value: t.inputPhone,
                                callback: function (e) {
                                  t.inputPhone = e
                                },
                                expression: 'inputPhone'
                              }
                            },
                            [
                              i('i', {
                                staticClass:
                                    'el-input__icon el-icon-mobile-phone',
                                attrs: { slot: 'prefix' },
                                slot: 'prefix'
                              })
                            ]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      i(
                        'div',
                        [
                          i(
                            'el-input',
                            {
                              attrs: {
                                placeholder: '密码',
                                type: 'password',
                                clearable: ''
                              },
                              model: {
                                value: t.inputPassWord,
                                callback: function (e) {
                                  t.inputPassWord = e
                                },
                                expression: 'inputPassWord'
                              }
                            },
                            [
                              i('i', {
                                staticClass: 'el-input__icon  fa fa-lock',
                                staticStyle: {
                                  transition: 'none',
                                  'font-size': '1.111em',
                                  'line-height': '40px'
                                },
                                attrs: { slot: 'prefix' },
                                slot: 'prefix'
                              })
                            ]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      i(
                        'div',
                        {
                          staticStyle: {
                            clear: 'both',
                            'font-size': '13px',
                            color: '#333',
                            height: '16px',
                            'line-height': '16px'
                          }
                        },
                        [t._v(' ')]
                      ),
                      t._v(' '),
                      i(
                        'el-button',
                        {
                          attrs: { type: 'primary' },
                          on: { click: t.login }
                        },
                        [t._v('登录')]
                      )
                    ],
                    1
                  )
                  : t._e(),
                t._v(' '),
                t.isLogin
                  ? t._e()
                  : i(
                    'div',
                    { staticClass: 'content' },
                    [
                      i(
                        'div',
                        [
                          i(
                            'el-input',
                            {
                              attrs: {
                                placeholder: '手机号',
                                clearable: ''
                              },
                              model: {
                                value: t.inputPhone,
                                callback: function (e) {
                                  t.inputPhone = e
                                },
                                expression: 'inputPhone'
                              }
                            },
                            [
                              i('i', {
                                staticClass:
                                    'el-input__icon el-icon-mobile-phone',
                                attrs: { slot: 'prefix' },
                                slot: 'prefix'
                              })
                            ]
                          ),
                          t._v(' '),
                          t.isCanGetAuthCode
                            ? i(
                              'el-button',
                              { on: { click: t.getAuthCode } },
                              [t._v('获取验证码')]
                            )
                            : i('el-button', { attrs: { disabled: '' } }, [
                              t._v('60秒之后重试')
                            ])
                        ],
                        1
                      ),
                      t._v(' '),
                      i(
                        'div',
                        [
                          i(
                            'el-input',
                            {
                              attrs: {
                                placeholder: '短信验证码',
                                clearable: ''
                              },
                              model: {
                                value: t.inputCode,
                                callback: function (e) {
                                  t.inputCode = e
                                },
                                expression: 'inputCode'
                              }
                            },
                            [
                              i('i', {
                                staticClass: 'el-input__icon  fa fa-lock',
                                staticStyle: {
                                  transition: 'none',
                                  'font-size': '1.111em',
                                  'line-height': '40px'
                                },
                                attrs: { slot: 'prefix' },
                                slot: 'prefix'
                              })
                            ]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      i(
                        'div',
                        {
                          staticStyle: {
                            clear: 'both',
                            'font-size': '13px',
                            color: '#333',
                            height: '16px',
                            'line-height': '16px'
                          }
                        },
                        [t._v('当忘记密码时请使用短信验证码登录')]
                      ),
                      t._v(' '),
                      i(
                        'el-button',
                        {
                          attrs: { type: 'primary' },
                          on: { click: t.textLogin }
                        },
                        [t._v('登录')]
                      )
                    ],
                    1
                  )
              ])
            ])
          ]),
          t._v(' '),
          i('div', { staticClass: 'annc group-warp' }, [
            i(
              'ul',
              [
                i('router-link', { attrs: { tag: 'li', to: '/faqs' } }, [
                  i('span', { staticClass: 'clr-semi text-semi' }, [
                    t._v('常见问题：如何入驻热圈商家？')
                  ]),
                  t._v(' '),
                  i('span', { staticClass: 'check-more' }, [
                    t._v('查看更多\n          '),
                    i('span', {
                      staticClass: 'fa fa-fw fa-lg  fa-angle-right'
                    })
                  ])
                ])
              ],
              1
            )
          ]),
          t._v(' '),
          i(
            'div',
            { staticClass: 'nav-group' },
            [
              i(
                'div',
                {
                  staticClass: 'nav-menu',
                  on: {
                    click: function (e) {
                      t.linkToList(-1)
                    }
                  }
                },
                [
                  t._m(0),
                  t._v(' '),
                  i('div', { staticClass: 'title' }, [t._v('全部商家')])
                ]
              ),
              t._v(' '),
              t._l(t.nav, function (e, s) {
                return i(
                  'div',
                  {
                    key: s,
                    staticClass: 'nav-menu',
                    on: {
                      click: function (e) {
                        t.linkToList(s)
                      }
                    }
                  },
                  [
                    i('div', { staticClass: 'image' }, [
                      i('img', {
                        attrs: {
                          src:
                            'https://loophot-cdn-1256306486.file.myqcloud.com/xcx/images/category/' +
                            (s + 1) +
                            '.png',
                          alt: ''
                        }
                      })
                    ]),
                    t._v(' '),
                    i('div', { staticClass: 'title' }, [t._v(t._s(e.name))])
                  ]
                )
              })
            ],
            2
          )
        ])
      },
      staticRenderFns: [
        function () {
          var t = this.$createElement

          var e = this._self._c || t
          return e('div', { staticClass: 'image' }, [
            e('img', { attrs: { src: i('B9vj'), alt: '' } })
          ])
        }
      ]
    }
    var l = i('C7Lr')(
      o,
      c,
      !1,
      function (t) {
        i('6nNm')
      },
      'data-v-5975e983',
      null
    )
    e.default = l.exports
  },
  '6nNm': function (t, e) {},
  B9vj: function (t, e) {
    t.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NTlFRjc1RkI3RTAxMUU4QTlGQjlDQjYzNjVDMkU3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NTlFRjc2MEI3RTAxMUU4QTlGQjlDQjYzNjVDMkU3OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1OUVGNzVEQjdFMDExRThBOUZCOUNCNjM2NUMyRTc5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ1OUVGNzVFQjdFMDExRThBOUZCOUNCNjM2NUMyRTc5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hZOgyAAAC79JREFUeNrUnFlsHVcZ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'
  }
})
