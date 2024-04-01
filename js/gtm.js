// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "6",

      macros: [
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__aev", vtp_varType: "TEXT" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-VMKJ9YZ8LY",
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 4,
        },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: false,
          vtp_enableUrlPassthrough: false,
          vtp_enableCookieOverrides: false,
          vtp_enableCrossDomainFeature: true,
          tag_id: 5,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "329058592",
          vtp_conversionLabel: "kLc5CKDJtuECEKCS9JwB",
          vtp_rdp: false,
          vtp_url: ["macro", 3],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 6,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "329058592",
          vtp_conversionLabel: "jfdGCMW02OECEKCS9JwB",
          vtp_rdp: false,
          vtp_url: ["macro", 3],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 8,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "123",
          vtp_conversionLabel: "3434",
          vtp_rdp: false,
          vtp_url: ["macro", 3],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 11,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "49058947_3",
          tag_id: 12,
        },
        { function: "__cl", tag_id: 13 },
        { function: "__cl", tag_id: 14 },
        { function: "__cl", tag_id: 15 },
        { function: "__cl", tag_id: 16 },
        { function: "__cl", tag_id: 17 },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 1], arg1: "/inquiry_success.html" },
        { function: "_eq", arg0: ["macro", 2], arg1: "win_close" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.click" },
        { function: "_eq", arg0: ["macro", 2], arg1: "win_btns" },
        { function: "_eq", arg0: ["macro", 2], arg1: "btn btn_sure" },
        {
          function: "_cn",
          arg0: ["macro", 4],
          arg1: "info@macrosafegates.com",
        },
        { function: "_eq", arg0: ["macro", 2], arg1: "add_to_inquiry trans" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0, 1, 5, 6, 7, 8, 9, 10],
        ],
        [
          ["if", 0, 1],
          ["add", 2],
        ],
        [
          ["if", 2, 3],
          ["add", 2],
        ],
        [
          ["if", 3, 4],
          ["add", 2],
        ],
        [
          ["if", 3, 5],
          ["add", 2],
        ],
        [
          ["if", 3, 6],
          ["add", 3],
        ],
        [
          ["if", 3, 7],
          ["add", 4],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __googtag: { 1: 10 },
    },
    permissions: {
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
    },

    security_groups: {
      google: ["__googtag"],
    },
  };

  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ea = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ia = ea(this),
    ja = function (a, b) {
      if (b)
        a: {
          for (var c = ia, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            h = c[g],
            m = b(h);
          m != h &&
            null != m &&
            ca(c, g, { configurable: !0, writable: !0, value: m });
        }
    },
    ka = function (a) {
      return (a.raw = a);
    },
    la = function (a, b) {
      a.raw = b;
      return a;
    },
    ma = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    na = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    oa = function (a) {
      return a instanceof Array ? a : na(ma(a));
    },
    pa =
      "function" == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ja("Object.assign", function (a) {
    return a || pa;
  });
  var qa =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ra;
  if ("function" == typeof Object.setPrototypeOf) ra = Object.setPrototypeOf;
  else {
    var sa;
    a: {
      var ta = { a: !0 },
        ua = {};
      try {
        ua.__proto__ = ta;
        sa = ua.a;
        break a;
      } catch (a) {}
      sa = !1;
    }
    ra = sa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var va = ra,
    wa = function (a, b) {
      a.prototype = qa(b.prototype);
      a.prototype.constructor = a;
      if (va) va(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.oo = b.prototype;
    },
    xa = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var za = this || self,
    Aa = function (a) {
      return a;
    };
  var Da = function (a, b) {
    this.h = a;
    this.s = b;
  };
  var Ea = function () {
    this.s = {};
    this.F = {};
  };
  aa = Ea.prototype;
  aa.get = function (a) {
    return this.s["dust." + a];
  };
  aa.set = function (a, b) {
    a = "dust." + a;
    this.F.hasOwnProperty(a) || (this.s[a] = b);
  };
  aa.di = function (a, b) {
    this.set(a, b);
    this.F["dust." + a] = !0;
  };
  aa.has = function (a) {
    return this.s.hasOwnProperty("dust." + a);
  };
  aa.remove = function (a) {
    a = "dust." + a;
    this.F.hasOwnProperty(a) || delete this.s[a];
  };
  var Fa = function () {
    this.quota = {};
  };
  Fa.prototype.reset = function () {
    this.quota = {};
  };
  var Ga = function (a, b) {
    this.T = a;
    this.M = function (c, d, e) {
      return c.apply(d, e);
    };
    this.C = b;
    this.s = new Ea();
    this.h = this.F = void 0;
  };
  Ga.prototype.add = function (a, b) {
    Ha(this, a, b, !1);
  };
  var Ha = function (a, b, c, d) {
    d ? a.s.di(b, c) : a.s.set(b, c);
  };
  Ga.prototype.set = function (a, b) {
    !this.s.has(a) && this.C && this.C.has(a)
      ? this.C.set(a, b)
      : this.s.set(a, b);
  };
  Ga.prototype.get = function (a) {
    return this.s.has(a) ? this.s.get(a) : this.C ? this.C.get(a) : void 0;
  };
  Ga.prototype.has = function (a) {
    return !!this.s.has(a) || !(!this.C || !this.C.has(a));
  };
  var Ia = function (a) {
    var b = new Ga(a.T, a);
    a.F && (b.F = a.F);
    b.M = a.M;
    b.h = a.h;
    return b;
  };
  function Ja(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = Ka(a, b[d])), c instanceof Da);
      d++
    );
    return c;
  }
  function Ka(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || "function" !== typeof c.invoke)
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.F;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var Ma = function () {
    this.C = new Fa();
    this.h = new Ga(this.C);
  };
  Ma.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.s(c);
  };
  Ma.prototype.s = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = Ka(this.h, arguments[c]);
    return b;
  };
  Ma.prototype.F = function (a, b) {
    var c = Ia(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = Ka(c, arguments[e]);
    return d;
  };
  var Oa = function () {
    Ea.call(this);
    this.C = !1;
  };
  wa(Oa, Ea);
  var Pa = function (a, b) {
    var c = [],
      d;
    for (d in a.s)
      if (a.s.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  Oa.prototype.set = function (a, b) {
    this.C || Ea.prototype.set.call(this, a, b);
  };
  Oa.prototype.di = function (a, b) {
    this.C || Ea.prototype.di.call(this, a, b);
  };
  Oa.prototype.remove = function (a) {
    this.C || Ea.prototype.remove.call(this, a);
  };
  Oa.prototype.Kb = function () {
    this.C = !0;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Qa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Ra = function (a) {
      if (null == a) return String(a);
      var b = Qa.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Sa = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Ta = function (a) {
      if (!a || "object" != Ra(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Sa(a, "constructor") &&
          !Sa(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Sa(a, b);
    },
    Ua = function (a, b) {
      var c = b || ("array" == Ra(a) ? [] : {}),
        d;
      for (d in a)
        if (Sa(a, d)) {
          var e = a[d];
          "array" == Ra(e)
            ? ("array" != Ra(c[d]) && (c[d] = []), (c[d] = Ua(e, c[d])))
            : Ta(e)
            ? (Ta(c[d]) || (c[d] = {}), (c[d] = Ua(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Va = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    Wa = function (a) {
      if (void 0 == a || Array.isArray(a) || Ta(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    },
    Xa = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    };
  var Ya = function (a) {
    this.s = new Oa();
    this.h = [];
    this.C = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Xa(b) ? (this.h[Number(b)] = a[Number(b)]) : this.s.set(b, a[b]));
  };
  aa = Ya.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof Ya
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  aa.set = function (a, b) {
    if (!this.C)
      if ("length" === a) {
        if (!Xa(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.h.length = Number(b);
      } else Xa(a) ? (this.h[Number(a)] = b) : this.s.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a
      ? this.length()
      : Xa(a)
      ? this.h[Number(a)]
      : this.s.get(a);
  };
  aa.length = function () {
    return this.h.length;
  };
  aa.Zb = function () {
    for (var a = Pa(this.s, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new Ya(a);
  };
  aa.remove = function (a) {
    Xa(a) ? delete this.h[Number(a)] : this.s.remove(a);
  };
  aa.pop = function () {
    return this.h.pop();
  };
  aa.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.h.shift();
  };
  aa.splice = function (a, b, c) {
    return new Ya(this.h.splice.apply(this.h, arguments));
  };
  aa.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return (Xa(a) && this.h.hasOwnProperty(a)) || this.s.has(a);
  };
  aa.Kb = function () {
    this.C = !0;
    Object.freeze(this.h);
    this.s.Kb();
  };
  var Za = function () {
    Oa.call(this);
  };
  wa(Za, Oa);
  Za.prototype.Zb = function () {
    return new Ya(Pa(this, 1));
  };
  function $a() {
    for (var a = ab, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function bb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var ab, cb;
  function db(a) {
    ab = ab || bb();
    cb = cb || $a();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (h >> 6),
        q = h & 63;
      e || ((q = 64), d || (p = 64));
      b.push(ab[m], ab[n], ab[p], ab[q]);
    }
    return b.join("");
  }
  function eb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = cb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    ab = ab || bb();
    cb = cb || $a();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var fb = {},
    gb = function (a, b) {
      fb[a] = fb[a] || [];
      fb[a][b] = !0;
    },
    hb = function (a) {
      var b = fb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return db(c.join("")).replace(/\.+$/, "");
    },
    ib = function () {
      for (var a = [], b = fb.fdr || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var jb = function () {},
    kb = function (a) {
      return "function" === typeof a;
    },
    k = function (a) {
      return "string" === typeof a;
    },
    lb = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    nb = function (a, b) {
      if (a && Array.isArray(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    ob = function (a, b) {
      if (!lb(a) || !lb(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    qb = function (a, b) {
      for (var c = new pb(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    rb = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    sb = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    tb = function (a) {
      return Math.round(Number(a)) || 0;
    },
    ub = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    vb = function (a) {
      var b = [];
      if (Array.isArray(a))
        for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    wb = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    xb = function () {
      return new Date(Date.now());
    },
    yb = function () {
      return xb().getTime();
    },
    pb = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  pb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  pb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var zb = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ab = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Bb = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Cb = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Db = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    Eb = function (a, b) {
      var c = l;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    Fb = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Gb = /^\w{1,9}$/,
    Hb = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      rb(a, function (d, e) {
        Gb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Ib = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var Jb,
    Kb = function () {
      if (void 0 === Jb) {
        var a = null,
          b = za.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: Aa,
              createScript: Aa,
              createScriptURL: Aa,
            });
          } catch (c) {
            za.console && za.console.error(c.message);
          }
          Jb = a;
        } else Jb = a;
      }
      return Jb;
    };
  var Lb = function (a) {
    this.h = a;
  };
  Lb.prototype.toString = function () {
    return this.h + "";
  };
  var Mb = function (a) {
      return a instanceof Lb && a.constructor === Lb
        ? a.h
        : "type_error:TrustedResourceUrl";
    },
    Nb = {},
    Ob = function (a) {
      var b = a,
        c = Kb(),
        d = c ? c.createScriptURL(b) : b;
      return new Lb(d, Nb);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Pb = ka([""]),
    Qb = la(["\x00"], ["\\0"]),
    Rb = la(["\n"], ["\\n"]),
    Sb = la(["\x00"], ["\\u0000"]);
  function Tb(a) {
    return -1 === a.toString().indexOf("`");
  }
  Tb(function (a) {
    return a(Pb);
  }) ||
    Tb(function (a) {
      return a(Qb);
    }) ||
    Tb(function (a) {
      return a(Rb);
    }) ||
    Tb(function (a) {
      return a(Sb);
    });
  var Ub = function (a) {
    this.h = a;
  };
  Ub.prototype.toString = function () {
    return this.h.toString();
  };
  var Vb = function (a) {
      return a instanceof Ub && a.constructor === Ub
        ? a.h
        : "type_error:SafeUrl";
    },
    Wb = {};
  var Xb = new Ub("about:invalid#zClosurez", Wb);
  var Yb = function (a) {
    this.wm = a;
  };
  function Zb(a) {
    return new Yb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var $b = [
    Zb("data"),
    Zb("http"),
    Zb("https"),
    Zb("mailto"),
    Zb("ftp"),
    new Yb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function ac(a, b) {
    b = void 0 === b ? $b : b;
    if (a instanceof Ub) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof Yb && d.wm(a)) return new Ub(a, Wb);
    }
  }
  function bc(a) {
    var b;
    b = void 0 === b ? $b : b;
    return ac(a, b) || Xb;
  }
  var cc = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
  function dc(a) {
    if (cc.test(a)) return a;
  }
  var ec = {};
  var fc = function () {},
    gc = function (a) {
      this.h = a;
    };
  wa(gc, fc);
  gc.prototype.toString = function () {
    return this.h;
  };
  var hc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var ic, jc;
  a: {
    for (var kc = ["CLOSURE_FLAGS"], lc = za, mc = 0; mc < kc.length; mc++)
      if (((lc = lc[kc[mc]]), null == lc)) {
        jc = null;
        break a;
      }
    jc = lc;
  }
  var nc = jc && jc[610401301];
  ic = null != nc ? nc : !1;
  function oc() {
    var a = za.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var pc,
    qc = za.navigator;
  pc = qc ? qc.userAgentData || null : null;
  function rc(a) {
    return ic
      ? pc
        ? pc.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function sc(a) {
    return -1 != oc().indexOf(a);
  }
  function tc() {
    return ic ? !!pc && 0 < pc.brands.length : !1;
  }
  function uc() {
    return tc() ? !1 : sc("Opera");
  }
  function vc() {
    return sc("Firefox") || sc("FxiOS");
  }
  function wc() {
    return tc()
      ? rc("Chromium")
      : ((sc("Chrome") || sc("CriOS")) && !(tc() ? 0 : sc("Edge"))) ||
          sc("Silk");
  }
  var xc = {},
    yc = function (a) {
      this.h = a;
    };
  yc.prototype.toString = function () {
    return this.h.toString();
  };
  var zc = function (a) {
    return a instanceof yc && a.constructor === yc
      ? a.h
      : "type_error:SafeHtml";
  };
  function Ac(a, b) {
    var c = [new gc(Bc[0].toLowerCase(), ec)];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof gc) g = f.h;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Cc(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  function Dc(a, b) {
    var c = b instanceof Ub ? Vb(b) : dc(b);
    void 0 !== c && (a.action = c);
  }
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function Ec(a) {
    var b = (a = Fc(a)),
      c = Kb(),
      d = c ? c.createHTML(b) : b;
    return new yc(d, xc);
  }
  function Fc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var l = window,
    z = document,
    Gc = navigator,
    Hc = function () {
      var a;
      try {
        a = Gc.serviceWorker;
      } catch (b) {
        return;
      }
      return a;
    },
    Ic = z.currentScript && z.currentScript.src,
    Jc = function (a, b) {
      var c = l[a];
      l[a] = void 0 === c ? b : c;
      return l[a];
    },
    Kc = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Lc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Mc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Nc(a, b, c) {
    b &&
      rb(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Oc = function (a, b, c, d, e) {
      var f = z.createElement("script");
      Nc(f, d, Lc);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var g;
      g = Ob(Fc(a));
      f.src = Mb(g);
      var h,
        m,
        n,
        p =
          null ==
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(m, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      Kc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = z.getElementsByTagName("script")[0] || z.body || z.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Pc = function () {
      if (Ic) {
        var a = Ic.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Qc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = z.createElement("iframe")), (h = !0));
      Nc(g, c, Mc);
      d &&
        rb(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (h) {
        var m = (z.body && z.body.lastChild) || z.body || z.head;
        m.parentNode.insertBefore(g, m);
      }
      Kc(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Rc = function (a, b, c, d) {
      var e = new Image(1, 1);
      Nc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Sc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Tc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    D = function (a) {
      l.setTimeout(a, 0);
    },
    Uc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Vc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Wc = function (a) {
      var b = z.createElement("div"),
        c = b,
        d = Ec("A<div>" + a + "</div>");
      1 === c.nodeType && Cc(c);
      c.innerHTML = zc(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Xc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Yc = function (a) {
      var b;
      try {
        b = Gc.sendBeacon && Gc.sendBeacon(a);
      } catch (c) {
        gb("TAGGING", 15);
      }
      b || Rc(a);
    },
    Zc = function (a, b) {
      try {
        if (Gc.sendBeacon) return Gc.sendBeacon(a, b);
      } catch (c) {
        gb("TAGGING", 15);
      }
      return !1;
    },
    $c = {
      cache: "no-store",
      credentials: "include",
      keepalive: !0,
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
    },
    ad = function (a, b) {
      var c = { Jm: !0 };
      if ("fetch" in l) {
        var d = Object.assign({}, $c);
        b && (d.body = b);
        c &&
          (c.attributionReporting &&
            (d.attributionReporting = c.attributionReporting),
          c.yl && (d.browsingTopics = c.yl));
        try {
          return l.fetch(a, d), !0;
        } catch (e) {}
      }
      if (c && c.Jm) return !1;
      if (b) return Zc(a, b);
      Yc(a);
      return !0;
    },
    bd = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    cd = function () {
      var a = l.performance;
      if (a && kb(a.now)) return a.now();
    },
    dd = function () {
      return l.performance || void 0;
    };
  var ed = function (a, b) {
      return H(this, a) && H(this, b);
    },
    fd = function (a, b) {
      return H(this, a) === H(this, b);
    },
    gd = function (a, b) {
      return H(this, a) || H(this, b);
    },
    hd = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    id = function (a, b) {
      a = String(H(this, a));
      b = String(H(this, b));
      return a.substring(0, b.length) === b;
    },
    jd = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      switch (a) {
        case "pageLocation":
          var c = l.location.href;
          b instanceof Za &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var kd = function (a, b) {
    Oa.call(this);
    this.M = a;
    this.T = b;
  };
  wa(kd, Oa);
  kd.prototype.toString = function () {
    return this.M;
  };
  kd.prototype.Zb = function () {
    return new Ya(Pa(this, 1));
  };
  kd.prototype.invoke = function (a, b) {
    return this.T.apply(
      new ld(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  kd.prototype.h = function (a, b) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var ld = function (a, b) {
      this.s = a;
      this.h = b;
    },
    H = function (a, b) {
      var c = a.h;
      return Array.isArray(b) ? Ka(c, b) : b;
    },
    I = function (a) {
      return a.s.M;
    };
  var md = function () {
    this.map = new Map();
  };
  md.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  md.prototype.get = function (a) {
    return this.map.get(a);
  };
  var nd = function () {
    this.keys = [];
    this.values = [];
  };
  nd.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  nd.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function od() {
    try {
      return Map ? new md() : new nd();
    } catch (a) {
      return new nd();
    }
  }
  var pd = function (a) {
    if (a instanceof pd) return a;
    if (Wa(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.h = a;
  };
  pd.prototype.toString = function () {
    return String(this.h);
  };
  var rd = function (a) {
    Oa.call(this);
    this.h = a;
    this.set("then", qd(this));
    this.set("catch", qd(this, !0));
    this.set("finally", qd(this, !1, !0));
  };
  wa(rd, Za);
  var qd = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new kd("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof kd || (d = void 0);
      e instanceof kd || (e = void 0);
      var f = Ia(this.h),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.h) : m.invoke(f, n);
          };
        },
        h = a.h.then(d && g(d), e && g(e));
      return new rd(h);
    });
  };
  var td = function (a, b, c) {
      var d = od(),
        e = function (g, h) {
          for (var m = Pa(g, 1), n = 0; n < m.length; n++)
            h[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (g instanceof Ya) {
            var m = [];
            d.set(g, m);
            for (var n = g.Zb(), p = 0; p < n.length(); p++)
              m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof rd) return g.h;
          if (g instanceof Za) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof kd) {
            var r = function () {
              for (
                var u = Array.prototype.slice.call(arguments, 0), v = 0;
                v < u.length;
                v++
              )
                u[v] = sd(u[v], b, c);
              var w = new Ga(b ? b.T : new Fa());
              b && (w.h = b.h);
              return f(g.invoke.apply(g, [w].concat(u)));
            };
            d.set(g, r);
            e(g, r);
            return r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (g instanceof pd && t) return g.h;
          switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return g;
            case "object":
              if (null === g) return null;
          }
        };
      return f(a);
    },
    sd = function (a, b, c) {
      var d = od(),
        e = function (g, h) {
          for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (Array.isArray(g) || sb(g)) {
            var m = new Ya([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (Ta(g)) {
            var p = new Za();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new kd("", function (x) {
              for (
                var y = Array.prototype.slice.call(arguments, 0), B = 0;
                B < y.length;
                B++
              )
                y[B] = td(H(this, y[B]), b, c);
              return f((0, this.h.M)(g, g, y));
            });
            d.set(g, q);
            e(g, q);
            return q;
          }
          var v = typeof g;
          if (null === g || "string" === v || "number" === v || "boolean" === v)
            return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
              break;
            default:
          }
          if (void 0 !== g && w) return new pd(g);
        };
      return f(a);
    };
  var vd = function () {
    var a = !1;
    return a;
  };
  var wd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof Ya)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new Ya(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Ya(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Ya(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = Va(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Ya(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Va(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var xd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  wa(xd, Error);
  var yd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    zd = new Da("break"),
    Ad = new Da("continue"),
    Bd = function (a, b) {
      return H(this, a) + H(this, b);
    },
    Cd = function (a, b) {
      return H(this, a) && H(this, b);
    },
    Dd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      if (!(c instanceof Ya))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't read property " + b + " of " + a + ".";
        if (vd()) throw new xd(d);
        throw Error(d);
      }
      var e = "number" === typeof a;
      if ("boolean" === typeof a || e) {
        if ("toString" === b) {
          if (e && c.length()) {
            var f = td(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = "TypeError: " + a + "." + b + " is not a function.";
        if (vd()) throw new xd(g);
        throw Error(g);
      }
      if ("string" === typeof a) {
        if (yd.hasOwnProperty(b)) {
          var h = 2;
          h = 1;
          var m = td(c, void 0, h);
          return sd(a[b].apply(a, m), this.h);
        }
        var n = "TypeError: " + b + " is not a function";
        if (vd()) throw new xd(n);
        throw Error(n);
      }
      if (a instanceof Ya) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof kd) {
            var q = Va(c);
            q.unshift(this.h);
            return p.invoke.apply(p, q);
          }
          var r = "TypeError: " + b + " is not a function";
          if (vd()) throw new xd(r);
          throw Error(r);
        }
        if (0 <= wd.supportedMethods.indexOf(b)) {
          var t = Va(c);
          t.unshift(this.h);
          return wd[b].apply(a, t);
        }
      }
      if (a instanceof kd || a instanceof Za) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof kd) {
            var v = Va(c);
            v.unshift(this.h);
            return u.invoke.apply(u, v);
          }
          var w = "TypeError: " + b + " is not a function";
          if (vd()) throw new xd(w);
          throw Error(w);
        }
        if ("toString" === b) return a instanceof kd ? a.M : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, Va(c));
      }
      if (a instanceof pd && "toString" === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if (vd()) throw new xd(x);
      throw Error(x);
    },
    Ed = function (a, b) {
      a = H(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = H(this, b);
      c.set(a, d);
      return d;
    },
    Fd = function (a) {
      var b = Ia(this.h),
        c = Ja(b, Array.prototype.slice.apply(arguments));
      if (c instanceof Da) return c;
    },
    Gd = function () {
      return zd;
    },
    Hd = function (a) {
      for (var b = H(this, a), c = 0; c < b.length; c++) {
        var d = H(this, b[c]);
        if (d instanceof Da) return d;
      }
    },
    Id = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = H(this, arguments[c + 1]);
          Ha(b, d, e, !0);
        }
      }
    },
    Jd = function () {
      return Ad;
    },
    Kd = function (a, b) {
      return new Da(a, H(this, b));
    },
    Ld = function (a, b, c) {
      var d = new Ya();
      b = H(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.h.add(a, H(this, f));
    },
    Md = function (a, b) {
      return H(this, a) / H(this, b);
    },
    Nd = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      var c = a instanceof pd,
        d = b instanceof pd;
      return c || d ? (c && d ? a.h == b.h : !1) : a == b;
    },
    Od = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = H(this, arguments[c]);
      return b;
    };
  function Pd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Ja(f, d);
      if (g instanceof Da) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Qd(a, b, c) {
    if ("string" === typeof b)
      return Pd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof Za || b instanceof Ya || b instanceof kd) {
      var d = b.Zb(),
        e = d.length();
      return Pd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var Rd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Qd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Sd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Qd(
        function (e) {
          var f = Ia(d);
          Ha(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Td = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Qd(
        function (e) {
          var f = Ia(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    Vd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Ud(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Wd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Ud(
        function (e) {
          var f = Ia(d);
          Ha(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Xd = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.h;
      return Ud(
        function (e) {
          var f = Ia(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function Ud(a, b, c) {
    if ("string" === typeof b)
      return Pd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Ya)
      return Pd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (vd()) throw new xd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  var Yd = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = H(this, a);
      if (!(f instanceof Ya))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.h;
      d = H(this, d);
      var h = Ia(g);
      for (e(g, h); Ka(h, b); ) {
        var m = Ja(h, d);
        if (m instanceof Da) {
          if ("break" === m.h) break;
          if ("return" === m.h) return m;
        }
        var n = Ia(g);
        e(h, n);
        Ka(n, c);
        h = n;
      }
    },
    Zd = function (a, b, c) {
      var d = this.h,
        e = H(this, b);
      if (!(e instanceof Ya))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new kd(
        a,
        (function () {
          return function (g) {
            var h = Ia(d);
            void 0 === h.h && (h.h = this.h.h);
            for (
              var m = Array.prototype.slice.call(arguments, 0), n = 0;
              n < m.length;
              n++
            )
              if (((m[n] = H(this, m[n])), m[n] instanceof Da)) return m[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new Ya(m));
            var r = Ja(h, f);
            if (r instanceof Da) return "return" === r.h ? r.s : r;
          };
        })()
      );
    },
    $d = function (a) {
      a = H(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    ae = function (a, b) {
      var c;
      a = H(this, a);
      b = H(this, b);
      if (void 0 === a || null === a) {
        var d =
          "TypeError: Cannot read properties of " +
          a +
          " (reading '" +
          b +
          "')";
        if (vd()) throw new xd(d);
        throw Error(d);
      }
      if (a instanceof Za || a instanceof Ya || a instanceof kd) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : Xa(b) && (c = a[b]);
      else if (a instanceof pd) return;
      return c;
    },
    be = function (a, b) {
      return H(this, a) > H(this, b);
    },
    ce = function (a, b) {
      return H(this, a) >= H(this, b);
    },
    de = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      a instanceof pd && (a = a.h);
      b instanceof pd && (b = b.h);
      return a === b;
    },
    ee = function (a, b) {
      return !de.call(this, a, b);
    },
    fe = function (a, b, c) {
      var d = [];
      H(this, a) ? (d = H(this, b)) : c && (d = H(this, c));
      var e = Ja(this.h, d);
      if (e instanceof Da) return e;
    },
    ge = function (a, b) {
      return H(this, a) < H(this, b);
    },
    he = function (a, b) {
      return H(this, a) <= H(this, b);
    },
    ie = function (a) {
      for (var b = new Ya(), c = 0; c < arguments.length; c++) {
        var d = H(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    je = function (a) {
      for (var b = new Za(), c = 0; c < arguments.length - 1; c += 2) {
        var d = H(this, arguments[c]) + "",
          e = H(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    ke = function (a, b) {
      return H(this, a) % H(this, b);
    },
    le = function (a, b) {
      return H(this, a) * H(this, b);
    },
    me = function (a) {
      return -H(this, a);
    },
    ne = function (a) {
      return !H(this, a);
    },
    oe = function (a, b) {
      return !Nd.call(this, a, b);
    },
    pe = function () {
      return null;
    },
    qe = function (a, b) {
      return H(this, a) || H(this, b);
    },
    re = function (a, b) {
      var c = H(this, a);
      H(this, b);
      return c;
    },
    se = function (a) {
      return H(this, a);
    },
    te = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    ue = function (a) {
      return new Da("return", H(this, a));
    },
    ve = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't set property " + b + " of " + a + ".";
        if (vd()) throw new xd(d);
        throw Error(d);
      }
      (a instanceof kd || a instanceof Ya || a instanceof Za) && a.set(b, c);
      return c;
    },
    we = function (a, b) {
      return H(this, a) - H(this, b);
    },
    xe = function (a, b, c) {
      a = H(this, a);
      var d = H(this, b),
        e = H(this, c);
      if (!Array.isArray(d) || !Array.isArray(e))
        throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === H(this, d[h]))
          if (((f = H(this, e[h])), f instanceof Da)) {
            var m = f.h;
            if ("break" === m) return;
            if ("return" === m || "continue" === m) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = H(this, e[e.length - 1])),
        f instanceof Da && ("return" === f.h || "continue" === f.h))
      )
        return f;
    },
    ye = function (a, b, c) {
      return H(this, a) ? H(this, b) : H(this, c);
    },
    ze = function (a) {
      a = H(this, a);
      return a instanceof kd ? "function" : typeof a;
    },
    Ae = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    Be = function (a, b, c, d) {
      var e = H(this, d);
      if (H(this, c)) {
        var f = Ja(this.h, e);
        if (f instanceof Da) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; H(this, a); ) {
        var g = Ja(this.h, e);
        if (g instanceof Da) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        H(this, b);
      }
    },
    Ce = function (a) {
      return ~Number(H(this, a));
    },
    De = function (a, b) {
      return Number(H(this, a)) << Number(H(this, b));
    },
    Ee = function (a, b) {
      return Number(H(this, a)) >> Number(H(this, b));
    },
    Fe = function (a, b) {
      return Number(H(this, a)) >>> Number(H(this, b));
    },
    Ge = function (a, b) {
      return Number(H(this, a)) & Number(H(this, b));
    },
    He = function (a, b) {
      return Number(H(this, a)) ^ Number(H(this, b));
    },
    Ie = function (a, b) {
      return Number(H(this, a)) | Number(H(this, b));
    },
    Je = function () {},
    Ke = function (a, b, c, d, e) {
      var f = !0;
      try {
        var g = H(this, c);
        if (g instanceof Da) return g;
      } catch (r) {
        if (!(r instanceof xd && a)) throw ((f = r instanceof xd), r);
        var h = Ia(this.h),
          m = new pd(r);
        h.add(b, m);
        var n = H(this, d),
          p = Ja(h, n);
        if (p instanceof Da) return p;
      } finally {
        if (f && void 0 !== e) {
          var q = H(this, e);
          if (q instanceof Da) return q;
        }
      }
    };
  var Me = function () {
    this.h = new Ma();
    Le(this);
  };
  Me.prototype.execute = function (a) {
    return this.h.s(a);
  };
  var Le = function (a) {
    var b = function (c, d) {
      var e = new kd(String(c), d);
      e.Kb();
      a.h.h.set(String(c), e);
    };
    b("map", je);
    b("and", ed);
    b("contains", hd);
    b("equals", fd);
    b("or", gd);
    b("startsWith", id);
    b("variable", jd);
  };
  var Oe = function () {
    this.h = new Ma();
    Ne(this);
  };
  Oe.prototype.execute = function (a) {
    return Pe(this.h.s(a));
  };
  var Qe = function (a, b, c) {
      return Pe(a.h.F(b, c));
    },
    Ne = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new kd(e, d);
        f.Kb();
        a.h.h.set(e, f);
      };
      b(0, Bd);
      b(1, Cd);
      b(2, Dd);
      b(3, Ed);
      b(56, Ge);
      b(57, De);
      b(58, Ce);
      b(59, Ie);
      b(60, Ee);
      b(61, Fe);
      b(62, He);
      b(53, Fd);
      b(4, Gd);
      b(5, Hd);
      b(52, Id);
      b(6, Jd);
      b(49, Kd);
      b(7, ie);
      b(8, je);
      b(9, Hd);
      b(50, Ld);
      b(10, Md);
      b(12, Nd);
      b(13, Od);
      b(51, Zd);
      b(47, Rd);
      b(54, Sd);
      b(55, Td);
      b(63, Yd);
      b(64, Vd);
      b(65, Wd);
      b(66, Xd);
      b(15, $d);
      b(16, ae);
      b(17, ae);
      b(18, be);
      b(19, ce);
      b(20, de);
      b(21, ee);
      b(22, fe);
      b(23, ge);
      b(24, he);
      b(25, ke);
      b(26, le);
      b(27, me);
      b(28, ne);
      b(29, oe);
      b(45, pe);
      b(30, qe);
      b(32, re);
      b(33, re);
      b(34, se);
      b(35, se);
      b(46, te);
      b(36, ue);
      b(43, ve);
      b(37, we);
      b(38, xe);
      b(39, ye);
      b(67, Ke);
      b(40, ze);
      b(44, Je);
      b(41, Ae);
      b(42, Be);
    };
  function Pe(a) {
    if (
      a instanceof Da ||
      a instanceof kd ||
      a instanceof Ya ||
      a instanceof Za ||
      a instanceof pd ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var Re = function (a) {
    this.message = a;
  };
  function Se(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return void 0 === b
      ? new Re(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Te(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Ue = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      tk: a("consent"),
      ni: a("convert_case_to"),
      oi: a("convert_false_to"),
      ri: a("convert_null_to"),
      si: a("convert_true_to"),
      ui: a("convert_undefined_to"),
      Dn: a("debug_mode_metadata"),
      ma: a("function"),
      bh: a("instance_name"),
      Uk: a("live_only"),
      Vk: a("malware_disabled"),
      Wk: a("metadata"),
      Zk: a("original_activity_id"),
      Sn: a("original_vendor_template_id"),
      Rn: a("once_on_load"),
      Yk: a("once_per_event"),
      rj: a("once_per_load"),
      Wn: a("priority_override"),
      Xn: a("respected_consent_types"),
      wj: a("setup_tags"),
      pe: a("tag_id"),
      Bj: a("teardown_tags"),
    };
  })();
  var qf;
  var rf = [],
    sf = [],
    tf = [],
    uf = [],
    vf = [],
    wf = {},
    xf,
    yf,
    zf = function (a) {
      yf = yf || a;
    },
    Af = function (a) {},
    Bf,
    Cf = [],
    Df = [],
    Ef = function (a, b) {
      var c = {};
      c[Ue.ma] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    Ff = function (a, b) {
      var c = a[Ue.ma],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = wf[c],
        f =
          b &&
          2 === b.type &&
          d.reportMacroDiscrepancy &&
          e &&
          -1 !== Cf.indexOf(c),
        g = {},
        h = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (h[m.substr(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (null == q) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = rf[q];
                  break;
                case 1:
                  r = uf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = r && r[Ue.bh];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var u, v, w;
      if (f && -1 === Df.indexOf(c)) {
        Df.push(c);
        var x = yb();
        u = e(g);
        var y = yb() - x,
          B = yb();
        v = qf(c, h, b);
        w = y - (yb() - B);
      } else if ((e && (u = e(g)), !e || f)) v = qf(c, h, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Wa(u)
          ? (Array.isArray(u) ? Array.isArray(v) : Ta(u) ? Ta(v) : u === v) ||
            d.reportMacroDiscrepancy(d.id, c)
          : u !== v && d.reportMacroDiscrepancy(d.id, c),
        void 0 != w && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? u : v;
    },
    Hf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Gf(a[e], b, c));
      return d;
    },
    Gf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Gf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = rf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var h = String(g[Ue.bh]);
            try {
              var m = Hf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Ff(m, { event: b, index: f, type: 2, name: h });
              Bf && (d = Bf.Bl(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Gf(a[n], b, c)] = Gf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Gf(a[q], b, c);
              yf && (p = p || yf.qm(r));
              d.push(r);
            }
            return yf && p ? yf.Dl(d) : d.join("");
          case "escape":
            d = Gf(a[1], b, c);
            if (yf && Array.isArray(a[1]) && "macro" === a[1][0] && yf.sm(a))
              return yf.Um(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Ve[a[t]] && (d = Ve[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!uf[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return { Lj: a[2], index: u };
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[Ue.ma] = a[1];
            var w = If(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    If = function (a, b, c) {
      try {
        return xf(Hf(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    Jf = function (a) {
      var b = a[Ue.ma];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!wf[b];
    };
  var Lf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.h = a;
  };
  wa(Lf, Error);
  function Mf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Mf(a[c], b[c]);
    }
  }
  var Nf = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Pm = a;
    this.s = b;
    this.h = [];
  };
  wa(Nf, Error);
  var Pf = function () {
    return function (a, b) {
      a instanceof Nf || (a = new Nf(a, Of));
      b && a.h.push(b);
      throw a;
    };
  };
  function Of(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) lb(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Sf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Qf(a), f = 0; f < sf.length; f++) {
        var g = sf[f],
          h = Rf(g, e);
        if (h) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < uf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Rf = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Qf = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = If(tf[c], a));
        return b[c];
      };
    };
  var Tf = {
    Bl: function (a, b) {
      b[Ue.ni] &&
        "string" === typeof a &&
        (a = 1 == b[Ue.ni] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Ue.ri) && null === a && (a = b[Ue.ri]);
      b.hasOwnProperty(Ue.ui) && void 0 === a && (a = b[Ue.ui]);
      b.hasOwnProperty(Ue.si) && !0 === a && (a = b[Ue.si]);
      b.hasOwnProperty(Ue.oi) && !1 === a && (a = b[Ue.oi]);
      return a;
    },
  };
  var Uf = function () {
      this.h = {};
    },
    Wf = function (a, b) {
      var c = Vf.s,
        d;
      null != (d = c.h)[a] || (d[a] = []);
      c.h[a].push(function () {
        return b.apply(null, oa(xa.apply(0, arguments)));
      });
    };
  function Xf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new Lf(c, d, g);
      }
  }
  function Yf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Xf(e, b, d, g);
          Xf(f, b, d, g);
        }
      }
    };
  }
  var Zf = [],
    $f = {},
    ag = function (a) {
      return void 0 == Zf[a] ? !1 : Zf[a];
    };
  var eg = function () {
      var a = data.permissions || {},
        b = bg.ctid,
        c = this;
      this.s = new Uf();
      this.h = {};
      var d = ag(15),
        e = {},
        f = {},
        g = Yf(this.s, b, function () {
          var h = arguments[0];
          return h && e[h]
            ? e[h].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      rb(a, function (h, m) {
        var n = {};
        rb(m, function (q, r) {
          var t = cg(q, r);
          n[q] = t.assert;
          e[q] || (e[q] = t.K);
          d && t.Ej && !f[q] && (f[q] = t.Ej);
        });
        var p;
        d &&
          (p = function (q) {
            var r = xa.apply(1, arguments);
            if (!n[q])
              throw dg(
                q,
                {},
                "The requested additional permission " +
                  q +
                  " is not configured."
              );
            g.apply(null, [q].concat(oa(r)));
          });
        c.h[h] = function (q, r) {
          var t = n[q];
          if (!t)
            throw dg(
              q,
              {},
              "The requested permission " + q + " is not configured."
            );
          var u = Array.prototype.slice.call(arguments, 0);
          t.apply(void 0, u);
          g.apply(void 0, u);
          if (d) {
            var v = f[q];
            v && v.apply(null, [p].concat(oa(u.slice(1))));
          }
        };
      });
    },
    fg = function (a) {
      return Vf.h[a] || function () {};
    };
  function cg(a, b) {
    var c = Ef(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = dg;
    try {
      return Ff(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Lf(e, {}, "Permission " + e + " is unknown.");
        },
        K: function () {
          if (ag(15)) throw new Lf(a, {}, "Permission " + a + " is unknown.");
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function dg(a, b, c) {
    return new Lf(a, b, c);
  }
  var gg = !1;
  var hg = {};
  hg.xn = ub("");
  hg.Gl = ub("");
  var ig = gg,
    jg = hg.Gl,
    kg = hg.xn;
  var sg = {},
    tg =
      ((sg.uaa = !0),
      (sg.uab = !0),
      (sg.uafvl = !0),
      (sg.uamb = !0),
      (sg.uam = !0),
      (sg.uap = !0),
      (sg.uapv = !0),
      (sg.uaw = !0),
      sg);
  var Ag = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function Bg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var Cg = new pb();
  function Dg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Cg.get(e);
      f || ((f = new RegExp(b, d)), Cg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function Eg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function Fg(a, b) {
    return String(a) === String(b);
  }
  function Gg(a, b) {
    return Number(a) >= Number(b);
  }
  function Hg(a, b) {
    return Number(a) <= Number(b);
  }
  function Ig(a, b) {
    return Number(a) > Number(b);
  }
  function Jg(a, b) {
    return Number(a) < Number(b);
  }
  function Kg(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  var Rg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Sg(a, b) {
    for (var c = "", d = !0; 7 < a; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = Se(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = Se(a | b) + c);
  }
  var Tg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Ug = { Fn: "function", PixieMap: "Object", List: "Array" },
    J = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Tg.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          m = c[d];
        if (null == m) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof m;
          m instanceof kd
            ? (n = "Fn")
            : m instanceof Ya
            ? (n = "List")
            : m instanceof Za
            ? (n = "PixieMap")
            : m instanceof pd && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (Ug[n] || n) +
                ", which does not match required type " +
                (Ug[h] || h) +
                "."
            );
        }
      }
    };
  function Vg(a) {
    return "" + a;
  }
  function Wg(a, b) {
    var c = [];
    return c;
  }
  var Xg = function (a, b) {
      var c = new kd(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = H(this, d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          if (vd()) throw new xd(g.message);
          throw g;
        }
      });
      c.Kb();
      return c;
    },
    Yg = function (a, b) {
      var c = new Za(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          kb(e)
            ? c.set(d, Xg(a + "_" + d, e))
            : Ta(e)
            ? c.set(d, Yg(a + "_" + d, e))
            : (lb(e) || k(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Kb();
      return c;
    };
  var Zg = function (a, b) {
    J(I(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new Za();
    return (d = Yg("AssertApiSubject", c));
  };
  var $g = function (a, b) {
    J(I(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof rd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new Za();
    return (d = Yg("AssertThatSubject", c));
  };
  function ah(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
        b.push(td(arguments[d], c));
      return sd(a.apply(null, b));
    };
  }
  var ch = function () {
    for (var a = Math, b = bh, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = ah(a[e].bind(a)));
    }
    return c;
  };
  var dh = function (a) {
    var b;
    return b;
  };
  var eh = function (a) {
    var b;
    return b;
  };
  var fh = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var gh = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function hh(a, b) {
    var c = !1;
    return c;
  }
  hh.D = "internal.evaluateBooleanExpression";
  var qh = function (a) {
    J(I(this), ["message:?string"], arguments);
  };
  var rh = function (a, b) {
    J(I(this), ["min:!number", "max:!number"], arguments);
    return ob(a, b);
  };
  var sh = function () {
    return new Date().getTime();
  };
  var th = function (a) {
    if (null === a) return "null";
    if (a instanceof Ya) return "array";
    if (a instanceof kd) return "function";
    if (a instanceof pd) {
      a = a.h;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var uh = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (ig || kg) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return sd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(td(c));
      }),
    };
  };
  var vh = function (a) {
    return tb(td(a, this.h));
  };
  var wh = function (a) {
    return Number(td(a, this.h));
  };
  var xh = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var yh = function (a, b, c) {
    var d = null,
      e = !1;
    J(
      I(this),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new Za();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof Za &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  };
  var bh = "floor ceil round max min abs pow sqrt".split(" ");
  var zh = function () {
      var a = {};
      return {
        Sl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        pn: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    Ah = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return kd.prototype.invoke.apply(a, c);
      };
    },
    Bh = function (a, b) {
      J(I(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var Ch = {};
  var Dh = function (a) {
    var b = new Za();
    if (a instanceof Ya)
      for (var c = a.Zb(), d = 0; d < c.length(); d++) {
        var e = c.get(d);
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof kd)
      for (var f = Pa(a, 1), g = 0; g < f.length; g++) {
        var h = f[g];
        b.set(h, a.get(h));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  Ch.keys = function (a) {
    J(I(this), ["input:!*"], arguments);
    if (a instanceof Ya || a instanceof kd || "string" === typeof a) a = Dh(a);
    if (a instanceof Za) return a.Zb();
    return new Ya();
  };
  Ch.values = function (a) {
    J(I(this), ["input:!*"], arguments);
    if (a instanceof Ya || a instanceof kd || "string" === typeof a) a = Dh(a);
    if (a instanceof Za) return new Ya(Pa(a, 2));
    return new Ya();
  };
  Ch.entries = function (a) {
    J(I(this), ["input:!*"], arguments);
    if (a instanceof Ya || a instanceof kd || "string" === typeof a) a = Dh(a);
    if (a instanceof Za) {
      for (var b = Pa(a, 3), c = new Ya(), d = 0; d < b.length; d++) {
        var e = new Ya(b[d]);
        c.push(e);
      }
      return c;
    }
    return new Ya();
  };
  Ch.freeze = function (a) {
    (a instanceof Za || a instanceof Ya || a instanceof kd) && a.Kb();
    return a;
  };
  Ch.delete = function (a, b) {
    if (a instanceof Za && !a.C) return a.remove(b), !0;
    return !1;
  };
  var K = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    if (d.dn) {
      try {
        d.Gj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw (gb("TAGGING", 21), e);
      }
      return;
    }
    d.Gj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var Eh = function () {
    this.h = {};
    this.s = {};
  };
  Eh.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  Eh.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.s.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.h[a] = c ? void 0 : kb(b) ? Xg(a, b) : Yg(a, b);
  };
  function Fh(a, b) {
    var c = void 0;
    return c;
  }
  function Gh() {
    var a = {};
    return a;
  }
  var Ih = function (a) {
      return Hh ? z.querySelectorAll(a) : null;
    },
    Jh = function (a, b) {
      if (!Hh) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!z.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Kh = !1;
  if (z.querySelectorAll)
    try {
      var Lh = z.querySelectorAll(":root");
      Lh && 1 == Lh.length && Lh[0] == z.documentElement && (Kh = !0);
    } catch (a) {}
  var Hh = Kh;
  var L = function (a) {
    gb("GTM", a);
  };
  var Mh = function (a) {
      return null == a ? "" : k(a) ? wb(String(a)) : "e0";
    },
    Oh = function (a) {
      return a.replace(Nh, "");
    },
    Qh = function (a) {
      return Ph(a.replace(/\s/g, ""));
    },
    Ph = function (a) {
      return wb(a.replace(Rh, "").toLowerCase());
    },
    Th = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return Sh.test(a) ? a : "e0";
    },
    Vh = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Uh.test(c)) return c;
      }
      return "e0";
    },
    Yh = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (l.crypto && l.crypto.subtle) {
        if (Wh.test(a)) return Promise.resolve(a);
        try {
          var b = Xh(a);
          return l.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return l
                .btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      } else return Promise.resolve("e1");
    },
    Xh = function (a) {
      var b;
      if (l.TextEncoder) b = new TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    Rh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Uh = /^\S+@\S+\.\S+$/,
    Sh = /^\+\d{10,15}$/,
    Nh = /[.~]/g,
    Zh = /^[0-9A-Za-z_-]{43}$/,
    Wh = /^[0-9A-Fa-f]{64}$/,
    $h = {},
    ai =
      (($h.email = "em"),
      ($h.phone_number = "pn"),
      ($h.first_name = "fn"),
      ($h.last_name = "ln"),
      ($h.street = "sa"),
      ($h.city = "ct"),
      ($h.region = "rg"),
      ($h.country = "co"),
      ($h.postal_code = "pc"),
      ($h.error_code = "ec"),
      $h),
    bi = {},
    ci =
      ((bi.email = "sha256_email_address"),
      (bi.phone_number = "sha256_phone_number"),
      (bi.first_name = "sha256_first_name"),
      (bi.last_name = "sha256_last_name"),
      (bi.street = "sha256_street"),
      bi),
    ei = function (a, b) {
      a.some(function (c) {
        c.value && di.indexOf(c.name);
      })
        ? b(a)
        : l.Promise
        ? Promise.all(
            a.map(function (c) {
              return c.value && -1 !== di.indexOf(c.name)
                ? Yh(c.value).then(function (d) {
                    c.value = d;
                  })
                : Promise.resolve();
            })
          )
            .then(function () {
              b(a);
            })
            .catch(function () {
              b([]);
            })
        : b([]);
    },
    gi = function (a, b) {
      var c = fi(a);
      ei(c, b);
    },
    fi = function (a) {
      function b(r, t, u, v) {
        var w = Mh(r);
        "" !== w &&
          (Wh.test(w)
            ? h.push({ name: t, value: w, index: v })
            : h.push({ name: t, value: u(w), index: v }));
      }
      function c(r, t) {
        var u = r;
        if (k(u) || Array.isArray(u)) {
          u = Array.isArray(r) ? r : [r];
          for (var v = 0; v < u.length; ++v) {
            var w = Mh(u[v]),
              x = Wh.test(w);
            t && !x && L(89);
            !t && x && L(88);
          }
        }
      }
      function d(r, t) {
        var u = r[t];
        c(u, !1);
        var v = ci[t];
        r.hasOwnProperty(v) &&
          (r.hasOwnProperty(t) && L(90), (u = r[v]), c(u, !0));
        return u;
      }
      function e(r, t, u) {
        var v = d(r, t);
        v = Array.isArray(v) ? v : [v];
        for (var w = 0; w < v.length; ++w) b(v[w], t, u);
      }
      function f(r, t, u, v) {
        var w = d(r, t);
        b(w, t, u, v);
      }
      function g(r) {
        return function (t) {
          L(64);
          return r(t);
        };
      }
      var h = [];
      if ("https:" !== l.location.protocol)
        return h.push({ name: "error_code", value: "e3", index: void 0 }), h;
      e(a, "email", Vh);
      e(a, "phone_number", Th);
      e(a, "first_name", g(Qh));
      e(a, "last_name", g(Qh));
      var m = a.home_address || {};
      e(m, "street", g(Ph));
      e(m, "city", g(Ph));
      e(m, "postal_code", g(Oh));
      e(m, "region", g(Ph));
      e(m, "country", g(Oh));
      var n = a.address || {};
      n = Array.isArray(n) ? n : [n];
      for (var p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, "first_name", Qh, p);
        f(q, "last_name", Qh, p);
        f(q, "street", Ph, p);
        f(q, "city", Ph, p);
        f(q, "postal_code", Oh, p);
        f(q, "region", Ph, p);
        f(q, "country", Oh, p);
      }
      return h;
    },
    ii = function (a, b) {
      gi(a, function (c) {
        var d = hi(c);
        b(d.Xf, d.Th);
      });
    },
    hi = function (a) {
      for (var b = ["tv.1"], c = 0, d = 0; d < a.length; ++d) {
        var e = a[d].name,
          f = a[d].value,
          g = a[d].index,
          h = ai[e];
        h &&
          f &&
          (-1 === di.indexOf(e) ||
            /^e\d+$/.test(f) ||
            Zh.test(f) ||
            Wh.test(f)) &&
          (void 0 !== g && (h += g), b.push(h + "." + f), c++);
      }
      1 === a.length && "error_code" === a[0].name && (c = 0);
      return { Xf: encodeURIComponent(b.join("~")), Th: c };
    },
    ji = function (a) {
      if (l.Promise)
        try {
          return new Promise(function (b) {
            ii(a, function (c, d) {
              b({ Uj: c, Th: d });
            });
          });
        } catch (b) {}
    },
    di = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var M = {
      g: {
        za: "ad_personalization",
        J: "ad_storage",
        N: "ad_user_data",
        R: "analytics_storage",
        Cb: "region",
        kc: "consent_updated",
        Ye: "wait_for_update",
        vi: "app_remove",
        wi: "app_store_refund",
        xi: "app_store_subscription_cancel",
        yi: "app_store_subscription_convert",
        zi: "app_store_subscription_renew",
        og: "add_payment_info",
        pg: "add_shipping_info",
        mc: "add_to_cart",
        nc: "remove_from_cart",
        qg: "view_cart",
        Nb: "begin_checkout",
        oc: "select_item",
        ib: "view_item_list",
        Db: "select_promotion",
        jb: "view_promotion",
        Ja: "purchase",
        qc: "refund",
        Na: "view_item",
        rg: "add_to_wishlist",
        xk: "exception",
        Ai: "first_open",
        Bi: "first_visit",
        aa: "gtag.config",
        Sa: "gtag.get",
        Ci: "in_app_purchase",
        sc: "page_view",
        yk: "screen_view",
        Di: "session_start",
        zk: "timing_complete",
        Ak: "track_social",
        Nc: "user_engagement",
        kb: "gclgb",
        Ta: "gclid",
        da: "ads_data_redaction",
        Ei: "gad_source",
        Fd: "gclid_url",
        Fi: "gclsrc",
        Ze: "wbraid",
        ka: "allow_ad_personalization_signals",
        af: "allow_custom_scripts",
        bf: "allow_display_features",
        Gd: "allow_enhanced_conversions",
        lb: "allow_google_signals",
        Da: "allow_interest_groups",
        Bk: "app_id",
        Ck: "app_installer_id",
        Dk: "app_name",
        Ek: "app_version",
        Eb: "auid",
        Gi: "auto_detection_enabled",
        Ob: "aw_remarketing",
        cf: "aw_remarketing_only",
        Hd: "discount",
        Id: "aw_feed_country",
        Jd: "aw_feed_language",
        Z: "items",
        Kd: "aw_merchant_id",
        sg: "aw_basket_type",
        Oc: "campaign_content",
        Pc: "campaign_id",
        Qc: "campaign_medium",
        Rc: "campaign_name",
        Sc: "campaign",
        Tc: "campaign_source",
        Uc: "campaign_term",
        nb: "client_id",
        Hi: "rnd",
        Ii: "consent_update_type",
        Ji: "content_group",
        Ki: "content_type",
        Ya: "conversion_cookie_prefix",
        Vc: "conversion_id",
        ra: "conversion_linker",
        Fk: "conversion_linker_disabled",
        Pb: "conversion_api",
        df: "cookie_deprecation",
        Ua: "cookie_domain",
        Va: "cookie_expires",
        Za: "cookie_flags",
        uc: "cookie_name",
        Qb: "cookie_path",
        Oa: "cookie_prefix",
        vc: "cookie_update",
        wc: "country",
        Aa: "currency",
        Ld: "customer_lifetime_value",
        Wc: "custom_map",
        ug: "gcldc",
        Md: "dclid",
        Li: "debug_mode",
        ia: "developer_id",
        Mi: "disable_merchant_reported_purchases",
        Xc: "dc_custom_params",
        Ni: "dc_natural_search",
        vg: "dynamic_event_settings",
        wg: "affiliation",
        Nd: "checkout_option",
        ef: "checkout_step",
        xg: "coupon",
        Yc: "item_list_name",
        ff: "list_name",
        Oi: "promotions",
        Zc: "shipping",
        hf: "tax",
        Od: "engagement_time_msec",
        Pd: "enhanced_client_id",
        Qd: "enhanced_conversions",
        yg: "enhanced_conversions_automatic_settings",
        Rd: "estimated_delivery_date",
        jf: "euid_logged_in_state",
        ad: "event_callback",
        Gk: "event_category",
        pb: "event_developer_id_string",
        Hk: "event_label",
        Sd: "event",
        Td: "event_settings",
        Ud: "event_timeout",
        Ik: "description",
        Jk: "fatal",
        Pi: "experiments",
        kf: "firebase_id",
        xc: "first_party_collection",
        Vd: "_x_20",
        qb: "_x_19",
        Qi: "fledge_drop_reason",
        zg: "fledge",
        Ag: "flight_error_code",
        Bg: "flight_error_message",
        Ri: "fl_activity_category",
        Si: "fl_activity_group",
        Cg: "fl_advertiser_id",
        Ti: "fl_ar_dedupe",
        Dg: "match_id",
        Ui: "fl_random_number",
        Vi: "tran",
        Wi: "u",
        Wd: "gac_gclid",
        yc: "gac_wbraid",
        Eg: "gac_wbraid_multiple_conversions",
        Fg: "ga_restrict_domain",
        lf: "ga_temp_client_id",
        zc: "gdpr_applies",
        Gg: "geo_granularity",
        Fb: "value_callback",
        rb: "value_key",
        Kk: "google_ono",
        Rb: "google_signals",
        Hg: "google_tld",
        Xd: "groups",
        Ig: "gsa_experiment_id",
        Yd: "iframe_state",
        bd: "ignore_referrer",
        nf: "internal_traffic_results",
        Sb: "is_legacy_converted",
        Gb: "is_legacy_loaded",
        Zd: "is_passthrough",
        dd: "_lps",
        Pa: "language",
        ae: "legacy_developer_id_string",
        sa: "linker",
        Tb: "accept_incoming",
        ab: "decorate_forms",
        W: "domains",
        tb: "url_position",
        Jg: "method",
        Lk: "name",
        ed: "new_customer",
        Kg: "non_interaction",
        Xi: "optimize_id",
        Yi: "page_hostname",
        fd: "page_path",
        Ea: "page_referrer",
        Hb: "page_title",
        Lg: "passengers",
        Mg: "phone_conversion_callback",
        Zi: "phone_conversion_country_code",
        Ng: "phone_conversion_css_class",
        aj: "phone_conversion_ids",
        Og: "phone_conversion_number",
        Pg: "phone_conversion_options",
        Qg: "_protected_audience_enabled",
        gd: "quantity",
        be: "redact_device_info",
        pf: "referral_exclusion_definition",
        Ub: "restricted_data_processing",
        bj: "retoken",
        Mk: "sample_rate",
        qf: "screen_name",
        Ib: "screen_resolution",
        cj: "search_term",
        Ka: "send_page_view",
        Vb: "send_to",
        hd: "server_container_url",
        jd: "session_duration",
        ce: "session_engaged",
        rf: "session_engaged_time",
        ub: "session_id",
        de: "session_number",
        kd: "delivery_postal_code",
        Nk: "temporary_client_id",
        tf: "topmost_url",
        dj: "tracking_id",
        uf: "traffic_type",
        Ba: "transaction_id",
        Jb: "transport_url",
        Rg: "trip_type",
        Wb: "update",
        Wa: "url_passthrough",
        vf: "_user_agent_architecture",
        wf: "_user_agent_bitness",
        xf: "_user_agent_full_version_list",
        yf: "_user_agent_mobile",
        zf: "_user_agent_model",
        Af: "_user_agent_platform",
        Bf: "_user_agent_platform_version",
        Cf: "_user_agent_wow64",
        Fa: "user_data",
        Sg: "user_data_auto_latency",
        Tg: "user_data_auto_meta",
        Ug: "user_data_auto_multi",
        Vg: "user_data_auto_selectors",
        Wg: "user_data_auto_status",
        ee: "user_data_mode",
        fe: "user_data_settings",
        Qa: "user_id",
        cb: "user_properties",
        ej: "_user_region",
        he: "us_privacy_string",
        la: "value",
        Xg: "wbraid_multiple_conversions",
        lj: "_host_name",
        mj: "_in_page_command",
        nj: "_is_passthrough_cid",
        Lb: "non_personalized_ads",
        oe: "_sst_parameters",
        ob: "conversion_label",
        wa: "page_location",
        sb: "global_developer_id_string",
        Ac: "tc_privacy_string",
      },
    },
    ki = {},
    li = Object.freeze(
      ((ki[M.g.ka] = 1),
      (ki[M.g.bf] = 1),
      (ki[M.g.Gd] = 1),
      (ki[M.g.lb] = 1),
      (ki[M.g.Z] = 1),
      (ki[M.g.Ua] = 1),
      (ki[M.g.Va] = 1),
      (ki[M.g.Za] = 1),
      (ki[M.g.uc] = 1),
      (ki[M.g.Qb] = 1),
      (ki[M.g.Oa] = 1),
      (ki[M.g.vc] = 1),
      (ki[M.g.Wc] = 1),
      (ki[M.g.ia] = 1),
      (ki[M.g.vg] = 1),
      (ki[M.g.ad] = 1),
      (ki[M.g.Td] = 1),
      (ki[M.g.Ud] = 1),
      (ki[M.g.xc] = 1),
      (ki[M.g.Fg] = 1),
      (ki[M.g.Rb] = 1),
      (ki[M.g.Hg] = 1),
      (ki[M.g.Xd] = 1),
      (ki[M.g.nf] = 1),
      (ki[M.g.Sb] = 1),
      (ki[M.g.Gb] = 1),
      (ki[M.g.sa] = 1),
      (ki[M.g.pf] = 1),
      (ki[M.g.Ub] = 1),
      (ki[M.g.Ka] = 1),
      (ki[M.g.Vb] = 1),
      (ki[M.g.hd] = 1),
      (ki[M.g.jd] = 1),
      (ki[M.g.rf] = 1),
      (ki[M.g.kd] = 1),
      (ki[M.g.Jb] = 1),
      (ki[M.g.Wb] = 1),
      (ki[M.g.fe] = 1),
      (ki[M.g.cb] = 1),
      (ki[M.g.oe] = 1),
      ki)
    );
  Object.freeze([
    M.g.wa,
    M.g.Ea,
    M.g.Hb,
    M.g.Pa,
    M.g.qf,
    M.g.Qa,
    M.g.kf,
    M.g.Ji,
  ]);
  var mi = {},
    ni = Object.freeze(
      ((mi[M.g.vi] = 1),
      (mi[M.g.wi] = 1),
      (mi[M.g.xi] = 1),
      (mi[M.g.yi] = 1),
      (mi[M.g.zi] = 1),
      (mi[M.g.Ai] = 1),
      (mi[M.g.Bi] = 1),
      (mi[M.g.Ci] = 1),
      (mi[M.g.Di] = 1),
      (mi[M.g.Nc] = 1),
      mi)
    ),
    oi = {},
    pi = Object.freeze(
      ((oi[M.g.og] = 1),
      (oi[M.g.pg] = 1),
      (oi[M.g.mc] = 1),
      (oi[M.g.nc] = 1),
      (oi[M.g.qg] = 1),
      (oi[M.g.Nb] = 1),
      (oi[M.g.oc] = 1),
      (oi[M.g.ib] = 1),
      (oi[M.g.Db] = 1),
      (oi[M.g.jb] = 1),
      (oi[M.g.Ja] = 1),
      (oi[M.g.qc] = 1),
      (oi[M.g.Na] = 1),
      (oi[M.g.rg] = 1),
      oi)
    ),
    qi = Object.freeze([
      M.g.ka,
      M.g.lb,
      M.g.vc,
      M.g.xc,
      M.g.bd,
      M.g.Ka,
      M.g.Wb,
    ]),
    ri = Object.freeze([].concat(qi)),
    si = Object.freeze([M.g.Va, M.g.Ud, M.g.jd, M.g.rf, M.g.Od]),
    ti = Object.freeze([].concat(si)),
    ui = {},
    vi =
      ((ui[M.g.J] = "1"),
      (ui[M.g.R] = "2"),
      (ui[M.g.N] = "3"),
      (ui[M.g.za] = "4"),
      ui),
    wi = {},
    xi = Object.freeze(
      ((wi[M.g.ka] = 1),
      (wi[M.g.Gd] = 1),
      (wi[M.g.Da] = 1),
      (wi[M.g.Ob] = 1),
      (wi[M.g.cf] = 1),
      (wi[M.g.Hd] = 1),
      (wi[M.g.Id] = 1),
      (wi[M.g.Jd] = 1),
      (wi[M.g.Z] = 1),
      (wi[M.g.Kd] = 1),
      (wi[M.g.Ya] = 1),
      (wi[M.g.ra] = 1),
      (wi[M.g.Ua] = 1),
      (wi[M.g.Va] = 1),
      (wi[M.g.Za] = 1),
      (wi[M.g.Oa] = 1),
      (wi[M.g.Aa] = 1),
      (wi[M.g.Ld] = 1),
      (wi[M.g.ia] = 1),
      (wi[M.g.Mi] = 1),
      (wi[M.g.Qd] = 1),
      (wi[M.g.Rd] = 1),
      (wi[M.g.kf] = 1),
      (wi[M.g.xc] = 1),
      (wi[M.g.Sb] = 1),
      (wi[M.g.Gb] = 1),
      (wi[M.g.Pa] = 1),
      (wi[M.g.ed] = 1),
      (wi[M.g.wa] = 1),
      (wi[M.g.Ea] = 1),
      (wi[M.g.Mg] = 1),
      (wi[M.g.Ng] = 1),
      (wi[M.g.Og] = 1),
      (wi[M.g.Pg] = 1),
      (wi[M.g.Ub] = 1),
      (wi[M.g.Ka] = 1),
      (wi[M.g.Vb] = 1),
      (wi[M.g.hd] = 1),
      (wi[M.g.kd] = 1),
      (wi[M.g.Ba] = 1),
      (wi[M.g.Jb] = 1),
      (wi[M.g.Wb] = 1),
      (wi[M.g.Wa] = 1),
      (wi[M.g.Fa] = 1),
      (wi[M.g.Qa] = 1),
      (wi[M.g.la] = 1),
      wi)
    ),
    yi = {},
    zi = Object.freeze(
      ((yi.search = "s"),
      (yi.youtube = "y"),
      (yi.playstore = "p"),
      (yi.shopping = "h"),
      (yi.ads = "a"),
      (yi.maps = "m"),
      yi)
    );
  Object.freeze(M.g);
  var Ai = {},
    Bi = (l.google_tag_manager = l.google_tag_manager || {}),
    Ci = Math.random();
  Ai.eh = "43i0";
  Ai.ne = Number("0") || 0;
  Ai.ja = "dataLayer";
  Ai.Bn =
    "ChAI8JLqrwYQwPSInNPF+4NIEiQAWDyF31HyEryqEMV+YKVipA7YUhepilaZVzn41fKPk0ogB/8aAnp4";
  var Di = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    Ei = { __paused: 1, __tg: 1 },
    Fi;
  for (Fi in Di) Di.hasOwnProperty(Fi) && (Ei[Fi] = 1);
  var Gi = ub(""),
    Hi,
    Ii = !1;
  Hi = Ii;
  var Ji,
    Ki = !1;
  Ji = Ki;
  var Li,
    Mi = !1;
  Li = Mi;
  Ai.Ed = "www.googletagmanager.com";
  var Ni = "" + Ai.Ed + (Hi ? "/gtag/js" : "/gtm.js"),
    Oi = null,
    Pi = null,
    Qi = {},
    Ri = {},
    Si = function () {
      var a = Bi.sequence || 1;
      Bi.sequence = a + 1;
      return a;
    };
  Ai.uk = "";
  var Ti = "";
  Ai.Jf = Ti;
  var Ui = new (function () {
      this.h = "";
      this.F = this.s = !1;
      this.M = this.T = this.C = "";
    })(),
    Vi = function () {
      var a = Ui.C.length;
      return "/" === Ui.C[a - 1] ? Ui.C.substring(0, a - 1) : Ui.C;
    };
  function Wi(a) {
    for (var b = {}, c = ma(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Xi = new pb(),
    Yi = {},
    Zi = {},
    bj = {
      name: Ai.ja,
      set: function (a, b) {
        Ua(Fb(a, b), Yi);
        $i();
      },
      get: function (a) {
        return aj(a, 2);
      },
      reset: function () {
        Xi = new pb();
        Yi = {};
        $i();
      },
    },
    aj = function (a, b) {
      return 2 != b ? Xi.get(a) : cj(a);
    },
    cj = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Yi, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    dj = function (a, b) {
      Zi.hasOwnProperty(a) || (Xi.set(a, b), Ua(Fb(a, b), Yi), $i());
    },
    ej = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = aj(c, 1);
        if (Array.isArray(d) || Ta(d)) d = Ua(d);
        Zi[c] = d;
      }
    },
    $i = function (a) {
      rb(Zi, function (b, c) {
        Xi.set(b, c);
        Ua(Fb(b), Yi);
        Ua(Fb(b, c), Yi);
        a && delete Zi[b];
      });
    },
    fj = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? cj(a) : Xi.get(a);
      "array" === Ra(d) || "object" === Ra(d) ? (c = Ua(d)) : (c = d);
      return c;
    };
  var gj = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), h = 0; h < g.length; h++) {
          var m = g[h].trim();
          if (m) {
            if (0 === m.indexOf("dataLayer.")) f = aj(m.substring(10));
            else {
              var n = m.split(".");
              f = l[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ("css_selector" === d && Hh) {
        var q = Ih(e);
        if (q && 0 < q.length) {
          f = [];
          for (
            var r = 0;
            r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1);
            r++
          )
            f.push(Vc(q[r]) || wb(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? ((a[b] = f), !0) : !1;
    },
    hj = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = gj(b, "email", a.email) || c;
        c = gj(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = gj(f, "first_name", d[e].first_name) || c;
          c = gj(f, "last_name", d[e].last_name) || c;
          c = gj(f, "street", d[e].street) || c;
          c = gj(f, "city", d[e].city) || c;
          c = gj(f, "region", d[e].region) || c;
          c = gj(f, "country", d[e].country) || c;
          c = gj(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    ij = function (a) {
      return Ta(a) ? !!a.enable_code : !1;
    };
  var jj = [];
  function kj(a) {
    switch (a) {
      case 0:
        return 0;
      case 12:
        return 19;
      case 21:
        return 15;
      case 43:
        return 11;
      case 44:
        return 12;
      case 48:
        return 14;
      case 51:
        return 13;
      case 62:
        return 20;
      case 74:
        return 16;
      case 84:
        return 18;
      case 92:
        return 21;
      case 94:
        return 22;
    }
  }
  function P(a) {
    jj[a] = !0;
    var b = kj(a);
    void 0 !== b && (Zf[b] = !0);
  }
  P(28);
  P(24);
  P(25);
  P(26);
  P(45);
  P(6);
  P(49);
  P(64);
  P(30);
  P(15);
  P(91);
  P(14);
  P(98);
  P(90);
  P(48);
  P(52);
  P(75);
  P(40);
  P(7);
  P(4);
  P(68);
  P(11);
  P(88);
  P(58);
  P(59);
  P(61);
  P(55);
  P(53);
  P(83);
  P(60);
  P(73);
  P(101);
  P(21);
  P(99);
  P(31);
  P(32);
  P(33);
  P(74);
  P(79);
  P(22);
  P(78);
  $f[1] = Number("1") || 6e4;
  $f[2] = Number("") || 50;
  P(76);
  P(39);
  P(41);

  function lj(a, b) {
    for (var c = void 0, d = void 0, e = 0; c === d; )
      if (
        ((c = Math.floor(2 * Math.random())),
        (d = Math.floor(2 * Math.random())),
        e++,
        20 < e)
      )
        return;
    c ? P(a) : P(b);
  }
  function R(a) {
    return !!jj[a];
  }
  var mj = function (a) {
    gb("HEALTH", a);
  };
  var nj;
  try {
    nj = JSON.parse(
      eb(
        "eyIwIjoiSU4iLCIxIjoiSU4tTUgiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    L(123), mj(2), (nj = {});
  }
  var oj = function () {
      return nj["0"] || "";
    },
    pj = function () {
      return nj["1"] || "";
    },
    qj = function () {
      var a = !1;
      return a;
    },
    rj = function () {
      return !1 !== nj["6"];
    },
    sj = function () {
      var a = "";
      return a;
    },
    tj = function () {
      var a = !1;
      a = !!nj["5"];
      return a;
    },
    uj = function () {
      var a = "";
      return a;
    };
  var vj = /:[0-9]+$/,
    wj = /^\d+\.fls\.doubleclick\.net$/,
    xj = function (a, b, c, d) {
      for (
        var e = [], f = ma(a.split("&")), g = f.next();
        !g.done;
        g = f.next()
      ) {
        var h = ma(g.value.split("=")),
          m = h.next().value,
          n = na(h);
        if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
          var p = n.join("=");
          if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
          e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
        }
      }
      return c ? e : void 0;
    },
    Aj = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = yj(a.protocol) || yj(l.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : l.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || l.location.hostname)
            .replace(vj, "")
            .toLowerCase());
      return zj(a, b, c, d, e);
    },
    zj = function (a, b, c, d, e) {
      var f,
        g = yj(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Bj(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(vj, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || gb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = xj(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    yj = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Bj = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Cj = {},
    Dj = 0,
    Ej = function (a) {
      var b = Cj[a];
      if (!b) {
        var c = z.createElement("a");
        a && (c.href = a);
        var d = c.pathname;
        "/" !== d[0] && (a || gb("TAGGING", 1), (d = "/" + d));
        var e = c.hostname.replace(vj, "");
        b = {
          href: c.href,
          protocol: c.protocol,
          host: c.host,
          hostname: e,
          pathname: d,
          search: c.search,
          hash: c.hash,
          port: c.port,
        };
        5 > Dj && ((Cj[a] = b), Dj++);
      }
      return b;
    },
    Kj = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Ej(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var m = "" + f + g + h;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Lj = function (a) {
      var b = Ej(l.location.href),
        c = Aj(b, "host", !1);
      if (c && c.match(wj)) {
        var d = Aj(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  var Mj = {
    "https://www.google.com": "/g",
    "https://googlesyndication.com": "/gs",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function Nj(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Ej("" + c + b).href;
    }
  }
  function Oj() {
    return Ui.s || Ji;
  }
  function Pj() {
    return !!Ai.Jf && "SGTM_TOKEN" !== Ai.Jf.split("@@").join("");
  }
  function Qj(a) {
    for (var b = ma([M.g.hd, M.g.Jb]), c = b.next(); !c.done; c = b.next()) {
      var d = S(a, c.value);
      if (d) return d;
    }
  }
  function Rj(a, b) {
    return Ui.s ? "" + Vi() + (b ? Mj[a] || "" : "") : a;
  }
  var Sj = function (a) {
      var b = String(a[Ue.ma] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    Tj =
      0 <= l.location.search.indexOf("?gtm_latency=") ||
      0 <= l.location.search.indexOf("&gtm_latency=");
  var Vj = function (a, b) {
      var c = Uj();
      c.pending || (c.pending = []);
      nb(c.pending, function (d) {
        return (
          d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        );
      }) || c.pending.push({ target: a, onLoad: b });
    },
    Wj = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    Uj = function () {
      var a = Jc("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new Wj()), (a.tidr = b));
      return b;
    };
  var Xj = {},
    Yj = !1,
    bg = {
      ctid: "GTM-KGK8SHG",
      canonicalContainerId: "49058947",
      Vj: "GTM-KGK8SHG",
      Wj: "GTM-KGK8SHG",
    };
  Xj.je = ub("");
  var bk = function () {
      var a = Zj();
      return Yj ? a.map(ak) : a;
    },
    dk = function () {
      var a = ck();
      return Yj ? a.map(ak) : a;
    },
    fk = function () {
      return ek(bg.ctid);
    },
    gk = function () {
      return ek(bg.canonicalContainerId || "_" + bg.ctid);
    },
    Zj = function () {
      return bg.Vj ? bg.Vj.split("|") : [bg.ctid];
    },
    ck = function () {
      return bg.Wj ? bg.Wj.split("|") : [];
    },
    jk = function () {
      var a = hk(ik());
      if (a) {
        for (; a.parent; ) {
          var b = hk(a.parent);
          if (!b) break;
          a = b;
        }
        return a;
      }
    },
    hk = function (a) {
      var b = Uj();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    ek = function (a) {
      return Yj ? ak(a) : a;
    },
    ak = function (a) {
      return "siloed_" + a;
    },
    lk = function (a) {
      return Yj ? kk(a) : a;
    };
  function kk(a) {
    a = String(a);
    return 0 === a.indexOf("siloed_") ? a.substring(7) : a;
  }
  var mk = function () {
    var a = !1;
    if (a) {
      var b = Uj();
      if (b.siloed) {
        for (
          var c = [], d = Zj().map(ak), e = ck().map(ak), f = {}, g = 0;
          g < b.siloed.length;
          f = { Of: void 0 }, g++
        )
          (f.Of = b.siloed[g]),
            !Yj &&
            nb(
              f.Of.isDestination ? e : d,
              (function (h) {
                return function (m) {
                  return m === h.Of.ctid;
                };
              })(f)
            )
              ? (Yj = !0)
              : c.push(f.Of);
        b.siloed = c;
      }
    }
  };
  function nk() {
    var a = Uj();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = bk(), f = dk(), g = {}, h = 0;
        h < a.pending.length;
        g = { Qe: void 0 }, h++
      )
        (g.Qe = a.pending[h]),
          nb(
            g.Qe.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Qe.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Qe.onLoad), (d = !0))
            : c.push(g.Qe);
      a.pending = c;
      if (b)
        try {
          b(gk());
        } catch (m) {}
    }
  }
  var ok = function () {
      for (
        var a = bg.ctid,
          b = bk(),
          c = dk(),
          d = function (n, p) {
            var q = {
              canonicalContainerId: bg.canonicalContainerId,
              scriptContainerId: a,
              state: 2,
              containers: b.slice(),
              destinations: c.slice(),
            };
            Ic && (q.scriptSource = Ic);
            var r = p ? e.destination : e.container,
              t = r[n];
            t ? (p && 0 === t.state && L(93), Object.assign(t, q)) : (r[n] = q);
          },
          e = Uj(),
          f = ma(b),
          g = f.next();
        !g.done;
        g = f.next()
      )
        d(g.value, !1);
      for (var h = ma(c), m = h.next(); !m.done; m = h.next()) d(m.value, !0);
      e.canonical[gk()] = {};
      nk();
    },
    pk = function (a) {
      return !!Uj().container[a];
    },
    qk = function (a) {
      var b = Uj().destination[a];
      return !!b && !!b.state;
    },
    ik = function () {
      return { ctid: fk(), isDestination: Xj.je };
    };
  function rk(a) {
    var b = Uj();
    (b.siloed = b.siloed || []).push(a);
  }
  var sk = function () {
      var a = Uj().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    tk = function () {
      var a = {};
      rb(Uj().destination, function (b, c) {
        0 === c.state && (a[kk(b)] = c);
      });
      return a;
    },
    uk = function (a) {
      return !!(
        a &&
        a.parent &&
        a.context &&
        1 === a.context.source &&
        0 !== a.parent.ctid.indexOf("GTM-")
      );
    };
  var vk = { sampleRate: "0.005000", qk: "", pk: Number("5"), po: Number("") },
    wk = [];
  function xk(a) {
    wk.push(a);
  }
  var yk = !1,
    zk;
  if (!(zk = Tj)) {
    var Ak = Math.random(),
      Bk = vk.sampleRate;
    zk = Ak < Number(Bk);
  }
  var Ck = zk,
    Dk = "/a?id=" + bg.ctid,
    Ek = "https://www.googletagmanager.com" + Dk,
    Fk = void 0,
    Gk = {},
    Hk = void 0,
    Ik = new (function () {
      var a = 5;
      0 < vk.pk && (a = vk.pk);
      this.h = 0;
      this.C = [];
      this.s = a;
    })(),
    Jk = 1e3;
  function Kk(a, b) {
    var c = Fk;
    if (void 0 === c)
      if (b) c = Si();
      else return "";
    for (
      var d = [Rj("https://www.googletagmanager.com"), Dk],
        e = ma(wk),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value,
          h = g({
            eventId: c,
            Bb: !!a,
            eg: function () {
              yk = !0;
            },
          }),
          m = ma(h),
          n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = ma(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function Lk() {
    Hk && (l.clearTimeout(Hk), (Hk = void 0));
    if (void 0 !== Fk && Mk) {
      var a;
      (a = Gk[Fk]) || (a = Ik.h < Ik.s ? !1 : 1e3 > yb() - Ik.C[Ik.h % Ik.s]);
      if (a || 0 >= Jk--) L(1), (Gk[Fk] = !0);
      else {
        var b = Ik.h++ % Ik.s;
        Ik.C[b] = yb();
        var c = Kk(!0);
        Rc(c);
        if (yk) {
          var d = c.replace("/a?", "/td?");
          Rc(d);
        }
        Mk = yk = !1;
      }
    }
  }
  var Mk = !1;
  function Nk(a) {
    Gk[a] ||
      (a !== Fk && (Lk(), (Fk = a)),
      (Mk = !0),
      Hk || (Hk = l.setTimeout(Lk, 500)),
      2022 <= Kk().length && Lk());
  }
  var Ok = ob();
  function Pk() {
    Ok = ob();
  }
  function Qk() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", Ok],
    ];
  }
  var Rk = "",
    Sk = [],
    Tk = !1;
  function Uk() {
    var a = [];
    Rk && a.push(["dl", encodeURIComponent(Rk)]);
    0 < Sk.length && a.push(["tdp", Sk.join(".")]);
    return a;
  }
  function Vk(a) {
    var b = Tk ? [] : Uk();
    !Tk && a.Bb && ((Tk = !0), b.length && a.eg());
    return b;
  }
  var Wk = [],
    Xk = [];
  function Yk(a) {
    R(76) && -1 === Xk.indexOf(a) && (Wk.push(a), Xk.push(a));
  }
  function Zk(a) {
    if (!Wk.length) return [];
    for (var b = Uk(), c = ma(Wk), d = c.next(); !d.done; d = c.next())
      b.push([d.value, "1"]);
    a.Bb && (a.eg(), (Wk.length = 0));
    return b;
  }
  var $k = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var al = function (a) {
    al[" "](a);
    return a;
  };
  al[" "] = function () {};
  var cl = function () {
    var a = bl,
      b = "Ch";
    if (a.Ch && a.hasOwnProperty(b)) return a.Ch;
    var c = new a();
    return (a.Ch = c);
  };
  var bl = function () {
    var a = {};
    this.h = function () {
      var b = $k.h,
        c = $k.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.s = function () {
      a[$k.h] = !0;
    };
  };
  var dl = !1,
    el = !1,
    fl = {},
    gl = {},
    hl = { ad_storage: !1, ad_user_data: !1, ad_personalization: !1 };
  function il() {
    var a = Jc("google_tag_data", {});
    return (a.ics = a.ics || new jl());
  }
  var jl = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.h = [];
  };
  jl.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    gb("TAGGING", 19);
    void 0 == b ? gb("TAGGING", 18) : kl(this, a, "granted" === b, c, d, e, f);
  };
  jl.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++)
      kl(this, a[c], void 0, void 0, "", "", b);
  };
  var kl = function (a, b, c, d, e, f, g) {
    var h = a.entries,
      m = h[b] || {},
      n = m.region,
      p = d && k(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (ll(p, n, e, f)) {
      var q = !!(g && 0 < g && void 0 === m.update),
        r = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q,
        };
      if ("" !== e || !1 !== m.default) h[b] = r;
      q &&
        l.setTimeout(function () {
          h[b] === r &&
            r.quiet &&
            (gb("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0),
            a.notifyListeners());
        }, g);
    }
  };
  aa = jl.prototype;
  aa.clearTimeout = function (a, b) {
    var c = [a],
      d;
    for (d in fl) fl.hasOwnProperty(d) && fl[d] === a && c.push(d);
    var e = this.entries[a] || {},
      f = this.getConsentState(a);
    if (e.quiet) {
      e.quiet = !1;
      for (var g = ma(c), h = g.next(); !h.done; h = g.next())
        ml(this, h.value);
    } else if (void 0 !== b && f !== b)
      for (var m = ma(c), n = m.next(); !n.done; n = m.next())
        ml(this, n.value);
  };
  aa.update = function (a, b) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries;
      (d[a] = d[a] || {}).update = "granted" === b;
      this.clearTimeout(a, c);
    }
  };
  aa.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      h = g.declare_region,
      m = c && k(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (ll(m, h, d, e)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if ("" !== d || !1 !== g.declare) f[a] = n;
    }
  };
  aa.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  aa.getConsentState = function (a) {
    var b = this.entries,
      c = b[a] || {},
      d = c.update;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.default;
    if (void 0 !== d) return d ? 1 : 2;
    if (fl.hasOwnProperty(a)) {
      var e = b[fl[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.implicit;
    return void 0 !== d
      ? d
        ? 3
        : 4
      : ag(19) && hl.hasOwnProperty(a)
      ? (gb("TAGGING", 22), hl[a] ? 3 : 4)
      : 0;
  };
  aa.addListener = function (a, b) {
    this.h.push({ consentTypes: a, Ll: b });
  };
  var ml = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      Array.isArray(d.consentTypes) &&
        -1 !== d.consentTypes.indexOf(b) &&
        (d.Xj = !0);
    }
  };
  jl.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.Xj) {
        d.Xj = !1;
        try {
          d.Ll({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  function ll(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function nl(a, b, c) {
    var d = oj(),
      e = pj(),
      f = gl[a] || {},
      g = f.region,
      h = c && k(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (ll(h, g, d, e)) {
      var m = { enabled: "granted" === b, region: h };
      if ("" !== d || !1 !== f.enabled) gl[a] = m;
    }
  }
  function ol(a) {
    var b = il();
    if ("ad_user_data" === a)
      if (ag(22)) {
        var c = b.getConsentState("ad_storage");
        if (2 !== c && 4 !== c) return c;
      } else ag(21) && (a = "ad_storage");
    return b.getConsentState(a);
  }
  var pl = function (a) {
      il().accessedAny = !0;
      return (k(a) ? [a] : a).every(function (b) {
        switch (ol(b)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    ql = function (a) {
      il().accessedAny = !0;
      return ol(a);
    },
    rl = function (a) {
      for (var b = {}, c = ma(a), d = c.next(); !d.done; d = c.next()) {
        var e = d.value;
        b[e] = void 0 === gl[e] || !1 !== gl[e].enabled;
      }
      return b;
    },
    sl = function (a) {
      var b = il();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    tl = function () {
      if (!cl().h()) return !1;
      var a = il();
      a.accessedAny = !0;
      return a.active;
    },
    ul = function (a, b) {
      if (ag(21)) {
        for (
          var c = [],
            d = a.find(function (h) {
              return "ad_storage" === h;
            }),
            e = ma(a),
            f = e.next();
          !f.done;
          f = e.next()
        ) {
          var g = f.value;
          if ("ad_user_data" === g) {
            if (d) continue;
            c.push("ad_storage");
          }
          c.push(g);
        }
        il().addListener(c, b);
      } else il().addListener(a, b);
    },
    vl = function (a, b) {
      il().notifyListeners(a, b);
    },
    wl = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!sl(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        ul(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    xl = function (a, b) {
      function c() {
        for (var h = [], m = 0; m < e.length; m++) {
          var n = e[m];
          pl(n) && !f[n] && h.push(n);
        }
        return h;
      }
      function d(h) {
        for (var m = 0; m < h.length; m++) f[h[m]] = !0;
      }
      var e = k(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length &&
        (d(g),
        ul(e, function (h) {
          function m(q) {
            0 !== q.length && (d(q), (h.consentTypes = q), a(h));
          }
          var n = c();
          if (0 !== n.length) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : l.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  function yl() {}
  function zl() {}
  var Al = [M.g.J, M.g.R, M.g.N, M.g.za],
    Bl,
    Cl,
    Dl = function (a) {
      for (
        var b = a[M.g.Cb], c = Array.isArray(b) ? b : [b], d = { Fe: 0 };
        d.Fe < c.length;
        d = { Fe: d.Fe }, ++d.Fe
      )
        rb(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== M.g.Cb) {
                var h = c[e.Fe],
                  m = oj(),
                  n = pj();
                el = !0;
                dl && gb("TAGGING", 20);
                il().declare(f, g, h, m, n);
              }
            };
          })(d)
        );
    },
    El = function (a) {
      R(41) && (!Cl && Bl && Yk("crc"), (Cl = !0));
      var b = a[M.g.Cb];
      b && L(40);
      var c = a[M.g.Ye];
      c && L(41);
      for (
        var d = Array.isArray(b) ? b : [b], e = { Ge: 0 };
        e.Ge < d.length;
        e = { Ge: e.Ge }, ++e.Ge
      )
        rb(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== M.g.Cb && g !== M.g.Ye) {
                var m = d[f.Ge],
                  n = Number(c),
                  p = oj(),
                  q = pj();
                dl = !0;
                el && gb("TAGGING", 20);
                il().default(g, h, m, p, q, n);
              }
            };
          })(e)
        );
    },
    Fl = function (a, b) {
      Bl = !0;
      rb(a, function (c, d) {
        dl = !0;
        el && gb("TAGGING", 20);
        il().update(c, d);
      });
      vl(b.eventId, b.priorityId);
    },
    Gl = function (a) {
      for (
        var b = a[M.g.Cb], c = Array.isArray(b) ? b : [b], d = { rd: 0 };
        d.rd < c.length;
        d = { rd: d.rd }, ++d.rd
      )
        a.hasOwnProperty("all") &&
          rb(
            zi,
            (function (e) {
              return function (f) {
                nl(f, a.all, c[e.rd]);
              };
            })(d)
          ),
          rb(
            a,
            (function (e) {
              return function (f, g) {
                f !== M.g.Cb && "all" !== f && nl(f, g, c[e.rd]);
              };
            })(d)
          );
    },
    U = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return pl(b);
      });
    },
    Hl = function (a, b) {
      ul(a, b);
    },
    Il = function (a, b) {
      xl(a, b);
    },
    Jl = function (a, b) {
      wl(a, b);
    },
    Kl = function () {
      var a = [M.g.J, M.g.za, M.g.N];
      il().waitForUpdate(a, 500);
    },
    Ll = function (a) {
      for (var b = ma(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        il().clearTimeout(d, void 0);
      }
      vl();
    };
  var Ml = function () {
    function a(b) {
      Bi.pscdl = b;
    }
    if (void 0 === Bi.pscdl)
      try {
        "cookieDeprecationLabel" in Gc
          ? (a("pending"), Gc.cookieDeprecationLabel.getValue().then(a))
          : a("noapi");
      } catch (b) {
        a("error");
      }
  };
  var Nl = /[A-Z]+/,
    Ol = /\s/,
    Pl = function (a, b) {
      if (k(a)) {
        a = wb(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (Nl.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var g = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = g(e);
              if ("DC" === d && 2 === f.length) {
                var h = g(f[1]);
                2 === h.length && ((f[1] = h[0]), f.push(h[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || (Ol.test(f[m]) && ("AW" !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, fa: d + "-" + f[0], O: f };
          }
        }
      }
    },
    Rl = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = Pl(a[d], b);
        e && (c[e.id] = e);
      }
      Ql(c);
      var f = [];
      rb(c, function (g, h) {
        f.push(h);
      });
      return f;
    };
  function Ql(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.O[Sl[2]] && b.push(d.fa);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Tl = {},
    Sl =
      ((Tl[0] = 0),
      (Tl[1] = 0),
      (Tl[2] = 1),
      (Tl[3] = 0),
      (Tl[4] = 1),
      (Tl[5] = 2),
      (Tl[6] = 0),
      (Tl[7] = 0),
      (Tl[8] = 0),
      Tl);
  var Ul = [];
  function Vl(a) {
    if (!Ul.length) return [];
    var b = [["tdc", Ul.join("!")]];
    a.Bb && (a.eg(), (Ul.length = 0));
    return b;
  }
  var Wl = { initialized: 11, complete: 12, interactive: 13 },
    Xl = {},
    Yl = Object.freeze(((Xl[M.g.Ka] = !0), Xl)),
    Zl =
      0 <= z.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= z.location.search.indexOf("&gtm_diagnostics="),
    am = function (a, b, c) {
      if (Ck && "config" === a && !(1 < Pl(b).O.length)) {
        var d,
          e = Jc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = Ua(c.F);
        Ua(c.h, f);
        var g = [],
          h;
        for (h in d) {
          var m = $l(d[h], f);
          m.length && (Zl && console.log(m), g.push(h));
        }
        g.length &&
          (g.length && Ck && Ul.push(b + "*" + g.join(".")),
          gb("TAGGING", Wl[z.readyState] || 14));
        d[b] = f;
      }
    };
  function bm(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function $l(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Yl[q] : t;
      },
      f;
    for (f in bm(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        m = e(f, b),
        n = "object" === Ra(h) || "array" === Ra(h),
        p = "object" === Ra(m) || "array" === Ra(m);
      if (n && p) $l(h, m, c, g);
      else if (n || p || h !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var cm = function (a, b, c, d, e, f, g, h, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.C = e;
      this.F = f;
      this.s = g;
      this.eventMetadata = h;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    dm = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.h);
          c.push(a.M);
          c.push(a.C);
          c.push(a.F);
          c.push(a.s);
          break;
        case 2:
          c.push(a.h);
          break;
        case 1:
          c.push(a.M);
          c.push(a.C);
          c.push(a.F);
          c.push(a.s);
          break;
        case 4:
          c.push(a.h), c.push(a.M), c.push(a.C), c.push(a.F);
      }
      return c;
    },
    S = function (a, b, c, d) {
      for (
        var e = ma(dm(a, void 0 === d ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (void 0 !== g[b]) return g[b];
      }
      return c;
    },
    em = function (a) {
      for (
        var b = {}, c = dm(a, 4), d = ma(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = ma(f), h = g.next();
          !h.done;
          h = g.next()
        )
          b[h.value] = 1;
      return Object.keys(b);
    },
    fm = function (a, b, c) {
      function d(n) {
        Ta(n) &&
          rb(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = dm(a, void 0 === c ? 3 : c);
      g.reverse();
      for (var h = ma(g), m = h.next(); !m.done; m = h.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    gm = function (a) {
      for (
        var b = [M.g.Sc, M.g.Oc, M.g.Pc, M.g.Qc, M.g.Rc, M.g.Tc, M.g.Uc],
          c = dm(a, 3),
          d = ma(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, h = !1, m = ma(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          void 0 !== f[p] && ((g[p] = f[p]), (h = !0));
        }
        var q = h ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    hm = function (a, b) {
      this.Ef = a;
      this.Ff = b;
      this.C = {};
      this.Yb = {};
      this.h = {};
      this.F = {};
      this.md = {};
      this.Xb = {};
      this.s = {};
      this.Ra = function () {};
      this.T = function () {};
      this.M = !1;
    },
    im = function (a, b) {
      a.C = b;
      return a;
    },
    jm = function (a, b) {
      a.Yb = b;
      return a;
    },
    km = function (a, b) {
      a.h = b;
      return a;
    },
    lm = function (a, b) {
      a.F = b;
      return a;
    },
    mm = function (a, b) {
      a.md = b;
      return a;
    },
    nm = function (a, b) {
      a.Xb = b;
      return a;
    },
    om = function (a, b) {
      a.s = b || {};
      return a;
    },
    pm = function (a, b) {
      a.Ra = b;
      return a;
    },
    qm = function (a, b) {
      a.T = b;
      return a;
    },
    rm = function (a, b) {
      a.M = b;
      return a;
    },
    sm = function (a) {
      return new cm(a.Ef, a.Ff, a.C, a.Yb, a.h, a.F, a.Xb, a.s, a.Ra, a.T, a.M);
    };
  var tm = {};
  function um(a, b, c) {
    Ck && void 0 !== a && ((tm[a] = tm[a] || []), tm[a].push(c + b), Nk(a));
  }
  function vm(a) {
    var b = a.eventId,
      c = a.Bb,
      d = [],
      e = tm[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete tm[b];
    return d;
  }
  var xm = function (a, b) {
      var c = Pl(ek(a), !0);
      c && wm.register(c, b);
    },
    ym = function (a, b, c, d) {
      var e = Pl(c, d.isGtmEvent);
      e && wm.push("event", [b, a], e, d);
    },
    zm = function (a, b, c, d) {
      var e = Pl(c, d.isGtmEvent);
      e && wm.push("get", [a, b], e, d);
    },
    Bm = function (a) {
      var b = Pl(ek(a), !0),
        c;
      b ? (c = Am(wm, b).h) : (c = {});
      return c;
    },
    Cm = function (a, b) {
      var c = Pl(ek(a), !0);
      if (c) {
        var d = wm,
          e = Ua(b);
        Ua(Am(d, c).h, e);
        Am(d, c).h = e;
      }
    },
    Dm = function () {
      this.status = 1;
      this.M = {};
      this.h = {};
      this.s = {};
      this.T = null;
      this.F = {};
      this.C = !1;
    },
    Em = function (a, b, c, d) {
      var e = yb();
      this.type = a;
      this.C = e;
      this.h = b;
      this.s = c;
      this.messageContext = d;
    },
    Fm = function () {
      this.s = {};
      this.C = {};
      this.h = [];
    },
    Am = function (a, b) {
      var c = b.fa;
      return (a.s[c] = a.s[c] || new Dm());
    },
    Gm = function (a, b, c, d) {
      if (d.h) {
        var e = Am(a, d.h),
          f = e.T;
        if (f) {
          var g = Ua(c),
            h = Ua(e.M[d.h.id]),
            m = Ua(e.F),
            n = Ua(e.h),
            p = Ua(a.C),
            q = {};
          if (Ck)
            try {
              q = Ua(Yi);
            } catch (v) {
              L(72);
            }
          var r = d.h.prefix,
            t = function (v) {
              um(d.messageContext.eventId, r, v);
            },
            u = sm(
              rm(
                qm(
                  pm(
                    om(
                      mm(
                        lm(
                          nm(
                            km(
                              jm(
                                im(
                                  new hm(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                h
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            um(d.messageContext.eventId, r, "1"),
              am(d.type, d.h.id, u),
              f(d.h.id, b, d.C, u);
          } catch (v) {
            um(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  Fm.prototype.register = function (a, b, c) {
    var d = Am(this, a);
    3 !== d.status &&
      ((d.T = b), (d.status = 3), c && (Ua(d.h, c), (d.h = c)), this.flush());
  };
  Fm.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === Am(this, c).status &&
        ((Am(this, c).status = 2), this.push("require", [{}], c, {})),
      Am(this, c).C && (d.deferrable = !1));
    this.h.push(new Em(a, c, b, d));
    d.deferrable || this.flush();
  };
  Fm.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.h.length;
      e = { Bc: void 0, uh: void 0 }
    ) {
      var f = this.h[0],
        g = f.h;
      if (f.messageContext.deferrable)
        !g || Am(this, g).C
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== Am(this, g).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            rb(f.s[0], function (r, t) {
              Ua(Fb(r, t), b.C);
            });
            break;
          case "config":
            var h = Am(this, g);
            e.Bc = {};
            rb(
              f.s[0],
              (function (r) {
                return function (t, u) {
                  Ua(Fb(t, u), r.Bc);
                };
              })(e)
            );
            var m = !!e.Bc[M.g.Wb];
            delete e.Bc[M.g.Wb];
            var n = g.fa === g.id;
            m || (n ? (h.F = {}) : (h.M[g.id] = {}));
            (h.C && m) || Gm(this, M.g.aa, e.Bc, f);
            h.C = !0;
            n ? Ua(e.Bc, h.F) : (Ua(e.Bc, h.M[g.id]), L(70));
            d = !0;
            break;
          case "event":
            e.uh = {};
            rb(
              f.s[0],
              (function (r) {
                return function (t, u) {
                  Ua(Fb(t, u), r.uh);
                };
              })(e)
            );
            Gm(this, f.s[1], e.uh, f);
            break;
          case "get":
            var p = {},
              q = ((p[M.g.rb] = f.s[0]), (p[M.g.Fb] = f.s[1]), p);
            Gm(this, M.g.Sa, q, f);
        }
        this.h.shift();
        Hm(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Hm = function (a, b) {
      if ("require" !== b.type)
        if (b.h)
          for (var c = Am(a, b.h).s[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.s)
            if (a.s.hasOwnProperty(e)) {
              var f = a.s[e];
              if (f && f.s)
                for (var g = f.s[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    wm = new Fm();
  function Im(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Jm = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Km = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var Lm = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function Mm() {
    return ic ? !!pc && !!pc.platform : !1;
  }
  function Nm() {
    return sc("iPhone") && !sc("iPod") && !sc("iPad");
  }
  function Om() {
    Nm() || sc("iPad") || sc("iPod");
  }
  uc();
  tc() || sc("Trident") || sc("MSIE");
  sc("Edge");
  !sc("Gecko") ||
    (-1 != oc().toLowerCase().indexOf("webkit") && !sc("Edge")) ||
    sc("Trident") ||
    sc("MSIE") ||
    sc("Edge");
  -1 != oc().toLowerCase().indexOf("webkit") && !sc("Edge") && sc("Mobile");
  Mm() || sc("Macintosh");
  Mm() || sc("Windows");
  (Mm() ? "Linux" === pc.platform : sc("Linux")) || Mm() || sc("CrOS");
  Mm() || sc("Android");
  Nm();
  sc("iPad");
  sc("iPod");
  Om();
  oc().toLowerCase().indexOf("kaios");
  var Pm = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Qm = /#|$/,
    Rm = function (a, b) {
      var c = a.search(Qm),
        d = Pm(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    Sm = /[?&]($|#)/,
    Tm = function (a, b, c) {
      for (
        var d, e = a.search(Qm), f = 0, g, h = [];
        0 <= (g = Pm(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(Sm, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Um = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              al(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Vm = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Wm(a) {
    if (!a || !z.head) return null;
    var b = Xm("META");
    z.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Ym = function (a) {
      if (l.top == l) return 0;
      if (void 0 === a ? 0 : a) {
        var b = l.location.ancestorOrigins;
        if (b) return b[b.length - 1] == l.location.origin ? 1 : 2;
      }
      return Um(l.top) ? 1 : 2;
    },
    Xm = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Zm(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Xm("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = hc(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      Lm(e, "load", f);
      Lm(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var an = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Vm(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      $m(c, b);
    },
    $m = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Zm(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var bn = function () {};
  var cn = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    dn = function (a, b) {
      b = void 0 === b ? {} : b;
      this.s = a;
      this.h = null;
      this.M = {};
      this.Ra = 0;
      var c;
      this.T = null != (c = b.tn) ? c : 500;
      var d;
      this.F = null != (d = b.fo) ? d : !1;
      this.C = null;
    };
  wa(dn, bn);
  var fn = function (a) {
    return "function" === typeof a.s.__tcfapi || null != en(a);
  };
  dn.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.F },
      d = Km(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.T &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.T));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = cn(c)),
          (c.internalBlockOnErrors = b.F),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      gn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  dn.prototype.removeEventListener = function (a) {
    a && a.listenerId && gn(this, "removeEventListener", null, a.listenerId);
  };
  var jn = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var m;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = hn(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && hn(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === h
            ? a.purpose && a.vendor
              ? hn(a.purpose.legitimateInterests, b) &&
                hn(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    hn = function (a, b) {
      return !(!a || !a[b]);
    },
    gn = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (en(a)) {
        kn(a);
        var f = ++a.Ra;
        a.M[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    en = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.s, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    kn = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.M[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Lm(a.s, "message", a.C));
    },
    ln = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = cn(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (an({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var mn = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function nn() {
    var a = Bi.tcf || {};
    return (Bi.tcf = a);
  }
  var on = function () {
      return new dn(l, { tn: -1 });
    },
    un = function () {
      var a = nn(),
        b = on();
      fn(b) && !pn() && !qn() && L(124);
      if (!a.active && fn(b)) {
        pn() &&
          ((a.active = !0),
          (a.ic = {}),
          (a.cmpId = 0),
          (a.tcfPolicyVersion = 0),
          (il().active = !0),
          (a.tcString = "tcunavailable"));
        Kl();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState)
              rn(a), Ll([M.g.J, M.g.za, M.g.N]), (il().active = !0);
            else if (
              ((a.gdprApplies = c.gdprApplies),
              (a.cmpId = c.cmpId),
              (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
              qn() && (a.active = !0),
              !sn(c) || pn() || qn())
            ) {
              a.tcfPolicyVersion = c.tcfPolicyVersion;
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in mn) mn.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (sn(c)) {
                var g = {},
                  h;
                for (h in mn)
                  if (mn.hasOwnProperty(h))
                    if ("1" === h) {
                      var m,
                        n = c,
                        p = { Ql: !0 };
                      p = void 0 === p ? {} : p;
                      m = ln(n)
                        ? !1 === n.gdprApplies
                          ? !0
                          : "tcunavailable" === n.tcString
                          ? !p.Rj
                          : (p.Rj || void 0 !== n.gdprApplies || p.Ql) &&
                            (p.Rj ||
                              ("string" === typeof n.tcString &&
                                n.tcString.length))
                          ? jn(n, "1", 0)
                          : !0
                        : !1;
                      g["1"] = m;
                    } else g[h] = jn(c, h, mn[h]);
                d = g;
              }
              if (d) {
                a.tcString = c.tcString || "tcempty";
                a.ic = d;
                var q = {},
                  r = ((q[M.g.J] = a.ic["1"] ? "granted" : "denied"), q);
                !0 !== a.gdprApplies
                  ? (Ll([M.g.J, M.g.za, M.g.N]), (il().active = !0))
                  : ((r[M.g.za] =
                      a.ic["3"] && a.ic["4"] ? "granted" : "denied"),
                    "number" === typeof a.tcfPolicyVersion &&
                    4 <= a.tcfPolicyVersion
                      ? (r[M.g.N] =
                          a.ic["1"] && a.ic["7"] ? "granted" : "denied")
                      : Ll([M.g.N]),
                    Fl(
                      r,
                      { eventId: 0 },
                      {
                        gdprApplies: a ? a.gdprApplies : void 0,
                        tcString: tn() || "",
                      }
                    ));
              }
            } else Ll([M.g.J, M.g.za, M.g.N]);
          });
        } catch (c) {
          rn(a), Ll([M.g.J, M.g.za, M.g.N]), (il().active = !0);
        }
      }
    };
  function rn(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function sn(a) {
    return (
      "tcloaded" === a.eventStatus ||
      "useractioncomplete" === a.eventStatus ||
      "cmpuishown" === a.eventStatus
    );
  }
  var pn = function () {
    return !0 === l.gtag_enable_tcf_support;
  };
  function qn() {
    return !0 === nn().enableAdvertiserConsentMode;
  }
  var tn = function () {
      var a = nn();
      if (a.active) return a.tcString;
    },
    vn = function () {
      var a = nn();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? "1" : "0";
    },
    wn = function (a) {
      if (!mn.hasOwnProperty(String(a))) return !0;
      var b = nn();
      return b.active && b.ic ? !!b.ic[String(a)] : !0;
    };
  var xn = [M.g.J, M.g.R, M.g.N, M.g.za],
    yn = {},
    zn = ((yn[M.g.J] = 1), (yn[M.g.R] = 2), yn);
  function An(a) {
    if (void 0 === a) return 0;
    switch (S(a, M.g.ka)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var Bn = function (a) {
      var b = An(a);
      if (3 === b) return !1;
      switch (ql(M.g.za)) {
        case 1:
        case 3:
          return !0;
        case 2:
          return !1;
        case 4:
          return 2 === b;
        case 0:
          return !0;
        default:
          return !1;
      }
    },
    Cn = function () {
      return tl() || !pl(M.g.J) || !pl(M.g.R);
    },
    Dn = function () {
      var a = {},
        b;
      for (b in zn) zn.hasOwnProperty(b) && (a[zn[b]] = ql(b));
      return "G1" + Te(a[1] || 0) + Te(a[2] || 0);
    },
    En = {},
    Fn =
      ((En[M.g.J] = 0), (En[M.g.R] = 1), (En[M.g.N] = 2), (En[M.g.za] = 3), En);
  function Qn(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var Rn = function (a) {
      for (var b = "1", c = 0; c < xn.length; c++) {
        var d = b,
          e,
          f = xn[c],
          g = fl[f];
        e = void 0 === g ? 0 : Fn.hasOwnProperty(g) ? 12 | Fn[g] : 8;
        var h = il();
        h.accessedAny = !0;
        var m = h.entries[f] || {};
        e = (e << 2) | Qn(m.implicit);
        b =
          d +
          ("" +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              e
            ] +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (Qn(m.declare) << 4) | (Qn(m.default) << 2) | Qn(m.update)
            ]);
      }
      var n = b,
        p;
      p = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((tl() ? 1 : 0) << 2) | An(a)
      ];
      return n + p;
    },
    Sn = function () {
      if (!pl(M.g.N)) return "-";
      for (
        var a = Object.keys(zi), b = rl(a), c = "", d = ma(a), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value;
        b[f] && (c += zi[f]);
      }
      return c || "-";
    },
    Tn = function () {
      return rj() || ((pn() || qn()) && "1" === vn()) ? "1" : "0";
    },
    Un = function () {
      return (rj() ? !0 : !(!pn() && !qn()) && "1" === vn()) || !pl(M.g.N);
    },
    Vn = function () {
      var a = "0",
        b = "0",
        c;
      var d = nn();
      c = d.active ? d.cmpId : void 0;
      "number" === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var g = nn();
      f = g.active ? g.tcfPolicyVersion : void 0;
      "number" === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var h = 0;
      rj() && (h |= 1);
      "1" === vn() && (h |= 2);
      pn() && (h |= 4);
      var m;
      var n = nn();
      m =
        void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      "1" === m && (h |= 8);
      il().waitPeriodTimedOut && (h |= 16);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]
      );
    };
  var Wn = function () {
    var a = !1;
    return a;
  };
  var Xn = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    Yn = function (a, b) {
      var c = bg.ctid.split("-")[0].toUpperCase(),
        d = {};
      d.ctid = bg.ctid;
      d.bn = Ai.ne;
      d.hn = Ai.eh;
      d.Em = Xj.je ? 2 : 1;
      d.te = bg.canonicalContainerId;
      d.te !== a && (d.gg = a);
      R(72) ? (d.ik = 2) : R(71) && (d.ik = 1);
      Hi ? ((d.cg = Xn[c]), d.cg || (d.cg = 0)) : (d.cg = Li ? 13 : 10);
      Ui.F
        ? ((d.Wf = 0), (d.wl = 2))
        : Ji
        ? (d.Wf = 1)
        : Wn()
        ? (d.Wf = 2)
        : (d.Wf = 3);
      var e = {};
      e[6] = Yj;
      d.Al = e;
      var f;
      var g = d.cg,
        h = d.Wf;
      void 0 === g
        ? (f = "")
        : (h || (h = 0), (f = "" + Sg(1, 1) + Se((g << 2) | h)));
      var m = d.wl,
        n = 4 + f + (m ? "" + Sg(2, 1) + Se(m) : ""),
        p,
        q = d.hn;
      p = q && Rg.test(q) ? "" + Sg(3, 2) + q : "";
      var r,
        t = d.bn;
      r = t ? "" + Sg(4, 1) + Se(t) : "";
      var u;
      var v = d.ctid;
      if (v && b) {
        var w = v.split("-"),
          x = w[0].toUpperCase();
        if ("GTM" !== x && "OPT" !== x) u = "";
        else {
          var y = w[1];
          u = "" + Sg(5, 3) + Se(1 + y.length) + (d.Em || 0) + y;
        }
      } else u = "";
      var B = d.ik,
        A = d.te,
        E = d.gg,
        F = d.no,
        C =
          n +
          p +
          r +
          u +
          (B ? "" + Sg(6, 1) + Se(B) : "") +
          (A ? "" + Sg(7, 3) + Se(A.length) + A : "") +
          (E ? "" + Sg(8, 3) + Se(E.length) + E : "") +
          (F ? "" + Sg(9, 3) + Se(F.length) + F : ""),
        G;
      var O = d.Al;
      O = void 0 === O ? {} : O;
      for (
        var N = [], W = ma(Object.keys(O)), Z = W.next();
        !Z.done;
        Z = W.next()
      ) {
        var Q = Z.value;
        N[Number(Q)] = O[Q];
      }
      if (N.length) {
        var T = Sg(10, 3),
          da;
        if (0 === N.length) da = Se(0);
        else {
          for (var fa = [], ha = 0, Ca = !1, Ba = 0; Ba < N.length; Ba++) {
            Ca = !0;
            var ya = Ba % 6;
            N[Ba] && (ha |= 1 << ya);
            5 === ya && (fa.push(Se(ha)), (ha = 0), (Ca = !1));
          }
          Ca && fa.push(Se(ha));
          da = fa.join("");
        }
        var La = da;
        G = "" + T + Se(La.length) + La;
      } else G = "";
      return C + G;
    };
  function Zn(a) {
    return "null" !== a.origin;
  }
  var $n = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var co = function (a, b, c, d) {
      return ao(d) ? $n(a, String(b || bo()), c) : [];
    },
    go = function (a, b, c, d, e) {
      if (ao(e)) {
        var f = eo(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = fo(
            f,
            function (g) {
              return g.Pf;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = fo(
            f,
            function (g) {
              return g.Pe;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function ho(a, b, c, d) {
    var e = bo(),
      f = window;
    Zn(f) && (f.document.cookie = a);
    var g = bo();
    return e != g || (void 0 != c && 0 <= co(b, g, !1, d).indexOf(c));
  }
  var lo = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete h[x], w;
        h[x] = y;
        return w + "; " + x + "=" + y;
      }
      function f(w, x) {
        if (null == x) return delete h[x], w;
        h[x] = !0;
        return w + "; " + x;
      }
      if (!ao(c.zb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = io(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date
        ? (m = c.expires.toUTCString())
        : null != c.expires && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.Im);
      g = e(g, "samesite", c.jn);
      c.ln && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = jo(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!ko(u, c.path) && ho(v, a, b, c.zb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return ko(n, c.path) ? 1 : ho(g, a, b, c.zb) ? 0 : 1;
    },
    mo = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return lo(a, b, c);
    };
  function fo(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        m = b(h);
      m === c
        ? d.push(h)
        : void 0 === f || m < f
        ? ((e = [h]), (f = m))
        : m === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function eo(a, b, c) {
    for (var d = [], e = co(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), Pf: 1 * m[0] || 1, Pe: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var io = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    no = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    oo = /(^|\.)doubleclick\.net$/i,
    ko = function (a, b) {
      return (
        oo.test(window.document.location.hostname) || ("/" === b && no.test(a))
      );
    },
    bo = function () {
      return Zn(window) ? window.document.cookie : "";
    },
    jo = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      oo.test(e) || no.test(e) || a.push("none");
      return a;
    },
    ao = function (a) {
      return a && cl().h()
        ? (k(a) ? [a] : a).every(function (b) {
            return sl(b) && pl(b);
          })
        : !0;
    },
    po = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    qo = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    },
    ro = function (a, b) {
      var c = "" + po(a),
        d = qo(b);
      1 < d && (c += "-" + d);
      return c;
    };
  var so = function (a) {
      var b = Math.round(2147483647 * Math.random()),
        c;
      if (a) {
        var d = 1,
          e,
          f,
          g;
        if (a)
          for (d = 0, f = a.length - 1; 0 <= f; f--)
            (g = a.charCodeAt(f)),
              (d = ((d << 6) & 268435455) + g + (g << 14)),
              (e = d & 266338304),
              (d = 0 !== e ? d ^ (e >> 21) : d);
        c = String(b ^ (d & 2147483647));
      } else c = String(b);
      return c;
    },
    to = function (a) {
      return [so(a), Math.round(yb() / 1e3)].join(".");
    },
    uo = function (a, b, c, d, e) {
      var f = po(b);
      return go(a, f, qo(c), d, e);
    },
    vo = function (a, b, c, d) {
      return [b, ro(c, d), a].join(".");
    };
  function wo(a, b, c, d) {
    var e,
      f = Number(null != a.yb ? a.yb : void 0);
    0 !== f && (e = new Date((b || yb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      zb: d,
    };
  }
  var xo;
  var Bo = function () {
      var a = yo,
        b = zo,
        c = Ao(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Sc(z, "mousedown", d);
        Sc(z, "keyup", d);
        Sc(z, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Co = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Ao().decorators.push(f);
    },
    Do = function (a, b, c) {
      for (var d = Ao().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== z.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Bb(e, g.callback());
        }
      }
      return e;
    };
  function Ao() {
    var a = Jc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Eo = /(.*?)\*(.*?)\*(.*)/,
    Fo = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Go = /^(?:www\.|m\.|amp\.)+/,
    Ho = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Io(a) {
    var b = Ho.exec(a);
    if (b) return { Qh: b[1], query: b[2], fragment: b[3] };
  }
  function Jo(a, b) {
    var c = [
        Gc.userAgent,
        new Date().getTimezoneOffset(),
        Gc.userLanguage || Gc.language,
        Math.floor(yb() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = xo)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    xo = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ xo[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Ko() {
    return function (a) {
      var b = Ej(l.location.href),
        c = b.search.replace("?", ""),
        d = xj(c, "_gl", !1, !0) || "";
      a.query = Lo(d) || {};
      var e = Aj(b, "fragment"),
        f;
      var g = -1;
      if (Db(e, "_gl=")) g = 4;
      else {
        var h = e.indexOf("&_gl=");
        0 < h && (g = h + 3 + 2);
      }
      if (0 > g) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = 0 > m ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = Lo(f || "") || {};
    };
  }
  var Mo = function (a) {
      var b = Ko(),
        c = Ao();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Bb(d, e.query), a && Bb(d, e.fragment));
      return d;
    },
    Lo = function (a) {
      try {
        var b = No(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = eb(d[e + 1]);
            c[f] = g;
          }
          gb("TAGGING", 6);
          return c;
        }
      } catch (h) {
        gb("TAGGING", 8);
      }
    };
  function No(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Eo.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Jo(h, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return h;
        gb("TAGGING", 7);
      }
    }
  }
  function Oo(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
        t = q;
      if (r) {
        var u = r[2],
          v = r[4];
        t = r[1];
        v && (t = t + u + v);
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && "&" !== w && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var g = Io(c);
    if (!g) return "";
    var h = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (0 !== m.substring(1).length && e) || (m = "#" + f(m.substring(1)))
      : (h = "?" + f(h.substring(1)));
    return "" + g.Qh + h + m;
  }
  function Po(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var u,
          v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            void 0 !== x &&
              x === x &&
              null !== x &&
              "[object Object]" !== x.toString() &&
              (v.push(w), v.push(db(String(x))));
          }
        var y = v.join("*");
        u = ["1", Jo(y), y].join("*");
        d
          ? (ag(13) || ag(11) || !p) && Qo("_gl", u, a, p, q)
          : Ro("_gl", u, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = Do(b, 1, d),
      f = Do(b, 2, d),
      g = Do(b, 4, d),
      h = Do(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    ag(11) && c(g, !0, !0);
    for (var m in h) h.hasOwnProperty(m) && So(m, h[m], a);
  }
  function So(a, b, c) {
    "a" === c.tagName.toLowerCase()
      ? Ro(a, b, c)
      : "form" === c.tagName.toLowerCase() && Qo(a, b, c);
  }
  function Ro(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !ag(16) || d)) {
        var h = l.location.href,
          m = Io(c.href),
          n = Io(h);
        g = !(m && n && m.Qh === n.Qh && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Oo(a, b, c.href, d, e);
      cc.test(p) && (c.href = p);
    }
  }
  function Qo(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var g = Oo(a, b, c.action, d, e);
          cc.test(g) && (c.action = g);
        }
      } else {
        for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
          var p = h[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = z.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function yo(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Po(e, e.hostname);
      }
    } catch (g) {}
  }
  function zo(a) {
    try {
      if (a.action) {
        var b = Aj(Ej(a.action), "host");
        Po(a, b);
      }
    } catch (c) {}
  }
  var To = function (a, b, c, d) {
      Bo();
      Co(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Uo = function (a, b) {
      Bo();
      Co(a, [zj(l.location, "host", !0)], b, !0, !0);
    },
    Vo = function () {
      var a = z.location.hostname,
        b = Fo.exec(z.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(Go, ""),
        m = e.replace(Go, ""),
        n;
      if (!(n = h === m)) {
        var p = "." + m;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    Wo = function (a, b) {
      return !1 === a ? !1 : a || b || Vo();
    };
  var Xo = ["1"],
    Yo = {},
    Zo = {},
    dp = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = $o(a.prefix);
      if (!Yo[c])
        if (ap(c, a.path, a.domain)) {
          var d = Zo[$o(a.prefix)];
          bp(a, d ? d.id : void 0, d ? d.Kh : void 0);
        } else {
          var e = Lj("auiddc");
          if (e) gb("TAGGING", 17), (Yo[c] = e);
          else if (b) {
            var f = $o(a.prefix),
              g = to();
            if (0 === cp(f, g, a)) {
              var h = Jc("google_tag_data", {});
              h._gcl_au || (h._gcl_au = g);
            }
            ap(c, a.path, a.domain);
          }
        }
    };
  function bp(a, b, c) {
    var d = $o(a.prefix),
      e = Yo[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + "." + b + "." + (c ? c : Math.floor(yb() / 1e3)));
          cp(d, h, a, 1e3 * g);
        }
      }
    }
  }
  function cp(a, b, c, d) {
    var e = vo(b, "1", c.domain, c.path),
      f = wo(c, d);
    f.zb = ep();
    return mo(a, e, f);
  }
  function ap(a, b, c) {
    var d = uo(a, b, c, Xo, ep());
    if (!d) return !1;
    fp(a, d);
    return !0;
  }
  function fp(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((Yo[a] = c.slice(0, 2).join(".")),
        (Zo[a] = { id: c.slice(2, 4).join("."), Kh: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (Zo[a] = { id: c.slice(0, 2).join("."), Kh: Number(c[2]) || 0 })
      : (Yo[a] = b);
  }
  function $o(a) {
    return (a || "_gcl") + "_au";
  }
  function gp(a) {
    function b() {
      pl(c) && a();
    }
    var c = ep();
    wl(function () {
      b();
      pl(c) || xl(b, c);
    }, c);
  }
  function hp(a) {
    var b = Mo(!0),
      c = $o(a.prefix);
    gp(function () {
      var d = b[c];
      if (d) {
        fp(c, d);
        var e = 1e3 * Number(Yo[c].split(".")[1]);
        if (e) {
          gb("TAGGING", 16);
          var f = wo(a, e);
          f.zb = ep();
          var g = vo(d, "1", a.domain, a.path);
          mo(c, g, f);
        }
      }
    });
  }
  function ip(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        h = uo(a, e.path, e.domain, Xo, ep());
      h && (g[a] = h);
      return g;
    };
    gp(function () {
      To(f, b, c, d);
    });
  }
  function ep() {
    return ag(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var jp = function (a) {
    for (
      var b = [],
        c = z.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          fi: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function kp(a, b) {
    var c = jp(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].fi] || (d[c[e].fi] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), ba: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].fi].push(g);
      }
    }
    return d;
  }
  var lp = {},
    mp =
      ((lp.k = { Ma: /^[\w-]+$/ }),
      (lp.b = { Ma: /^[\w-]+$/, Yh: !0 }),
      (lp.i = { Ma: /^[1-9]\d*$/ }),
      lp),
    np = {},
    op =
      ((np[5] = {
        version: "2",
        zn: ["2"],
        fk: "ad_storage",
        Hj: ["k", "i", "b"],
      }),
      np);
  function pp(a, b) {
    var c = b.Ma;
    return "function" === typeof c ? c(a) : c.test(a);
  }
  function qp(a) {
    for (
      var b = ma(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { ve: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.ve = mp[e];
      d.ve
        ? d.ve.Yh
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (h) {
                      return pp(h, g.ve);
                    };
                  })(d)
                )
              : void 0)
          : ("string" === typeof f && pp(f, d.ve)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
    return a;
  }
  function rp(a) {
    var b = {},
      c = op[5];
    if (c) {
      for (
        var d = c.Hj, e = ma(a.split("$")), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value,
          h = g[0];
        if (-1 !== d.indexOf(h))
          try {
            var m = decodeURIComponent(g.substring(1)),
              n = mp[h];
            n && (n.Yh ? ((b[h] = b[h] || []), b[h].push(m)) : (b[h] = m));
          } catch (p) {}
      }
      return qp(b);
    }
  }
  function sp(a) {
    var b = op[5];
    if (b) {
      for (var c = [], d = ma(b.Hj), e = d.next(); !e.done; e = d.next()) {
        var f = e.value,
          g = mp[f];
        if (g) {
          var h = a[f];
          if (void 0 !== h)
            if (g.Yh && Array.isArray(h))
              for (var m = ma(h), n = m.next(); !n.done; n = m.next())
                c.push(encodeURIComponent("" + f + n.value));
            else c.push(encodeURIComponent("" + f + h));
        }
      }
      return c.join("$");
    }
  }
  function tp(a) {
    var b = op[5];
    if (b) {
      for (
        var c = [], d = co(a, void 0, void 0, b.fk), e = ma(d), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value.split("."),
          h = g.shift();
        if (-1 !== b.zn.indexOf(h)) {
          g.shift();
          var m = g.join(".");
          c.push(rp(m));
        }
      }
      return c;
    }
  }
  function up(a, b, c, d) {
    c = c || {};
    var e = sp(b);
    if (e) {
      var f = op[5],
        g = [f.version, ro(c.domain, c.path), e].join(".");
      mo(a, g, wo(c, d, void 0, f.fk));
    }
  }
  var vp = /^\w+$/,
    wp = /^[\w-]+$/,
    xp = {
      ag: "_ag",
      aw: "_aw",
      dc: "_dc",
      gb: "_gb",
      gf: "_gf",
      gp: "_gp",
      ha: "_ha",
    };
  function yp() {
    return ag(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var zp = function (a) {
      return !cl().h() || pl(a);
    },
    Ap = function (a, b) {
      function c() {
        var d = zp(b);
        d && a();
        return d;
      }
      wl(function () {
        c() || xl(c, b);
      }, b);
    },
    Cp = function (a) {
      return Bp(a).map(function (b) {
        return b.ba;
      });
    },
    Gp = function (a) {
      var b = Dp(a.prefix),
        c = Ep("gb", b),
        d = Ep("ag", b);
      if (!d || !c) return [];
      var e = function (h) {
          return function (m) {
            m.type = h;
            return m;
          };
        },
        f = Bp(c).map(e("gb")),
        g = Fp(d).map(e("ag"));
      return f.concat(g).sort(function (h, m) {
        return m.timestamp - h.timestamp;
      });
    };
  function Hp(a, b, c, d, e) {
    var f = nb(a, function (g) {
      return g.ba === c;
    });
    f
      ? ((f.timestamp = Math.max(f.timestamp, d)),
        (f.labels = Ip(f.labels || [], e || [])))
      : a.push({ version: b, ba: c, timestamp: d, labels: e });
  }
  var Bp = function (a) {
      for (
        var b = [], c = co(a, z.cookie, void 0, yp()), d = ma(c), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = Jp(e.value);
        if (null != f) {
          var g = f;
          Hp(b, g.version, g.ba, g.timestamp, g.labels);
        }
      }
      b.sort(function (h, m) {
        return m.timestamp - h.timestamp;
      });
      return Kp(b);
    },
    Fp = function (a) {
      if (!ag(20)) return [];
      for (
        var b = tp(a) || [], c = [], d = ma(b), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value,
          g = f,
          h = Lp(f);
        h && Hp(c, "2", g.k, h, g.b || []);
      }
      return c.sort(function (m, n) {
        return n.timestamp - m.timestamp;
      });
    };
  function Ip(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function Dp(a) {
    return a && "string" == typeof a && a.match(vp) ? a : "_gcl";
  }
  function Mp(a, b) {
    var c = ag(20),
      d = Ej(a),
      e = Aj(d, "query", !1, void 0, "gclid"),
      f = Aj(d, "query", !1, void 0, "gclsrc"),
      g = Aj(d, "query", !1, void 0, "wbraid"),
      h;
    c && (h = Aj(d, "query", !1, void 0, "gbraid"));
    var m = Aj(d, "query", !1, void 0, "dclid");
    if (b && (!e || !f || !g || (c && !h))) {
      var n = d.hash.replace("#", "");
      e = e || xj(n, "gclid", !1);
      f = f || xj(n, "gclsrc", !1);
      g = g || xj(n, "wbraid", !1);
      c && (h = h || xj(n, "gbraid", !1));
    }
    return Np(e, f, m, g, h);
  }
  var Op = function () {
      return Mp(l.location.href, !0);
    },
    Np = function (a, b, c, d, e) {
      var f = {},
        g = function (h, m) {
          f[m] || (f[m] = []);
          f[m].push(h);
        };
      f.gclid = a;
      f.gclsrc = b;
      f.dclid = c;
      if (void 0 !== a && a.match(wp))
        switch (b) {
          case void 0:
            g(a, "aw");
            break;
          case "aw.ds":
            g(a, "aw");
            g(a, "dc");
            break;
          case "ds":
            g(a, "dc");
            break;
          case "3p.ds":
            g(a, "dc");
            break;
          case "gf":
            g(a, "gf");
            break;
          case "ha":
            g(a, "ha");
        }
      c && g(c, "dc");
      void 0 !== d && wp.test(d) && ((f.wbraid = d), g(d, "gb"));
      ag(20) && void 0 !== e && wp.test(e) && ((f.gbraid = e), g(e, "ag"));
      return f;
    },
    Qp = function (a) {
      var b = Op();
      if (ag(18)) {
        for (
          var c = !0, d = ma(Object.keys(b)), e = d.next();
          !e.done;
          e = d.next()
        )
          if (void 0 !== b[e.value]) {
            c = !1;
            break;
          }
        c && (b = Mp(l.document.referrer, !1));
      }
      Pp(b, !1, a);
    };
  function Pp(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = Dp(c.prefix);
    d = d || yb();
    var g = Math.round(d / 1e3),
      h = yp(),
      m = !1,
      n = !1,
      p = function () {
        if (zp(h)) {
          var q = wo(c, d, !0);
          q.zb = h;
          for (
            var r = function (C, G) {
                var O = Ep(C, f);
                O && (mo(O, G, q), "gb" !== C && (m = !0));
              },
              t = function (C) {
                var G = ["GCL", g, C];
                0 < e.length && G.push(e.join("."));
                return G.join(".");
              },
              u = ma(["aw", "dc", "gf", "ha", "gp"]),
              v = u.next();
            !v.done;
            v = u.next()
          ) {
            var w = v.value;
            a[w] && r(w, t(a[w][0]));
          }
          if (!m && a.gb) {
            var x = a.gb[0],
              y = Ep("gb", f);
            (!b &&
              Bp(y).some(function (C) {
                return C.ba === x && C.labels && 0 < C.labels.length;
              })) ||
              r("gb", t(x));
          }
        }
        if (!n && ag(20) && a.gbraid && zp("ad_storage") && ((n = !0), !m)) {
          var B = a.gbraid,
            A = Ep("ag", f);
          if (
            b ||
            !Fp(A).some(function (C) {
              return C.ba === B && C.labels && 0 < C.labels.length;
            })
          ) {
            var E = {},
              F = ((E.k = B), (E.i = g), (E.b = e), E);
            up(A, F, c, d);
          }
        }
      };
    wl(function () {
      p();
      zp(h) || xl(p, h);
    }, h);
  }
  var Sp = function (a, b) {
      var c = Mo(!0);
      Ap(function () {
        for (var d = Dp(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== xp[f]) {
            var g = Ep(f, d),
              h = c[g];
            if (h) {
              var m = Math.min(Rp(h), yb()),
                n;
              b: {
                for (
                  var p = m, q = co(g, z.cookie, void 0, yp()), r = 0;
                  r < q.length;
                  ++r
                )
                  if (Rp(q[r]) > p) {
                    n = !0;
                    break b;
                  }
                n = !1;
              }
              if (!n) {
                var t = wo(b, m, !0);
                t.zb = yp();
                mo(g, h, t);
              }
            }
          }
        }
        Pp(Np(c.gclid, c.gclsrc), !1, b);
      }, yp());
    },
    Tp = function (a) {
      if (ag(20)) {
        var b = Mo(!0),
          c = Dp(a.prefix),
          d = Ep("ag", c);
        Ap(
          function () {
            if (d) {
              var e = b[d];
              if (e) {
                var f = rp(e);
                if (f) {
                  var g = Lp(f);
                  g || (g = yb());
                  var h;
                  a: {
                    var m = g;
                    if (ag(20))
                      for (var n = tp(d), p = 0; p < n.length; ++p)
                        if (Lp(n[p]) > m) {
                          h = !0;
                          break a;
                        }
                    h = !1;
                  }
                  h || ((f.i = Math.round(g / 1e3)), up(d, f, a, g));
                }
              }
            }
          },
          ["ad_storage"]
        );
      }
    },
    Ep = function (a, b) {
      var c = xp[a];
      if (void 0 !== c) return b + c;
    },
    Rp = function (a) {
      return 0 !== Up(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Lp(a) {
    return a ? 1e3 * (Number(a.i) || 0) : 0;
  }
  function Jp(a) {
    var b = Up(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          ba: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Up(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !wp.test(a[2])
      ? []
      : a;
  }
  var Vp = function (a, b, c, d, e) {
      if (Array.isArray(b) && Zn(l)) {
        var f = Dp(e),
          g = function () {
            for (var h = {}, m = 0; m < a.length; ++m) {
              var n = Ep(a[m], f);
              if (n) {
                var p = co(n, z.cookie, void 0, yp());
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        Ap(function () {
          To(g, b, c, d);
        }, yp());
      }
    },
    Wp = function (a, b, c, d) {
      if (Array.isArray(a) && Zn(l) && ag(20)) {
        var e = Dp(d),
          f = function () {
            var g = {},
              h = Ep("ag", e);
            if (h) {
              var m = tp(h);
              if (m.length) {
                var n = m.sort(function (p, q) {
                  return Lp(q) - Lp(p);
                })[0];
                g[h] = sp(n);
              }
              return g;
            }
          };
        Ap(
          function () {
            To(f, a, b, c);
          },
          ["ad_storage"]
        );
      }
    },
    Kp = function (a) {
      return a.filter(function (b) {
        return wp.test(b.ba);
      });
    },
    Xp = function (a, b) {
      if (Zn(l)) {
        for (var c = Dp(b.prefix), d = {}, e = 0; e < a.length; e++)
          xp[a[e]] && (d[a[e]] = xp[a[e]]);
        Ap(function () {
          rb(d, function (f, g) {
            var h = co(c + g, z.cookie, void 0, yp());
            h.sort(function (t, u) {
              return Rp(u) - Rp(t);
            });
            if (h.length) {
              var m = h[0],
                n = Rp(m),
                p = 0 !== Up(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Up(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Pp(q, !0, b, n, p);
            }
          });
        }, yp());
      }
    },
    Yp = function (a) {
      ag(20) &&
        Ap(
          function () {
            var b = Dp(a.prefix),
              c = Ep("ag", b);
            if (c) {
              var d = tp(c);
              if (d.length) {
                var e = d.sort(function (m, n) {
                    return Lp(n) - Lp(m);
                  })[0],
                  f = Lp(e),
                  g = e.b,
                  h = {};
                h.gbraid = e.k;
                Pp(h, !0, a, f, g);
              }
            }
          },
          ["ad_storage"]
        );
    };
  function Zp(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var $p = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (tl()) {
        var c = Op();
        if (Zp(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.wbraid);
          ag(20) && b(d, "gbraid", c.gbraid);
          Uo(function () {
            return d;
          }, 3);
          Uo(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    aq = function (a) {
      if (!ag(11)) return null;
      var b = Mo(!0).gad_source;
      if (null != b) return (l.location.hash = ""), b;
      if (ag(12)) {
        var c = Ej(l.location.href);
        b = Aj(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Op();
        if (Zp(d, a)) return "0";
      }
      return null;
    },
    bq = function (a) {
      var b = aq(a);
      null != b &&
        Uo(function () {
          var c = {};
          return (c.gad_source = b), c;
        }, 4);
    };
  function cq(a, b, c) {
    if (b.length) {
      for (var d = 0; d < b.length; d++)
        -1 === (b[d].labels || []).indexOf(c) ? a.push(0) : a.push(1);
      if (1 !== a[0]) return b[0];
    }
  }
  var dq = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!zp(yp())) return e;
      var f = Bp(a),
        g = cq(e, f, b);
      if (g && !d) {
        var h = g.timestamp,
          m = [g.version, Math.round(h / 1e3), g.ba]
            .concat(g.labels || [], [b])
            .join("."),
          n = wo(c, h, !0);
        n.zb = yp();
        mo(a, m, n);
      }
      return e;
    },
    eq = function (a, b) {
      var c = [];
      b = b || {};
      var d = Gp(b),
        e = cq(c, d, a);
      if (e) {
        var f = Dp(b.prefix),
          g = Ep(e.type, f);
        if (!g) return c;
        var h = e.version,
          m = e.ba,
          n = e.labels,
          p = e.timestamp,
          q = Math.round(p / 1e3);
        if ("ag" === e.type) {
          var r = {},
            t = ((r.k = m), (r.i = q), (r.b = (n || []).concat([a])), r);
          up(g, t, b, p);
        } else if ("gb" === e.type) {
          var u = [h, q, m].concat(n || [], [a]).join("."),
            v = wo(b, p, !0);
          v.zb = yp();
          mo(g, u, v);
        }
      }
      return c;
    };
  function fq(a, b) {
    var c = Dp(b),
      d = Ep(a, c);
    if (!d) return 0;
    var e;
    e = "ag" === a ? Fp(d) : Bp(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function gq(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var hq = function (a, b) {
    b = void 0 === b ? !1 : b;
    var c = Math.max(fq("aw", a), gq(zp(yp()) ? kp() : {})),
      d = Math.max(fq("gb", a), gq(zp(yp()) ? kp("_gac_gb", !0) : {}));
    ag(20) && b && (d = Math.max(d, fq("ag", a)));
    return d > c;
  };
  var iq = function (a, b, c) {
      var d = (Bi.joined_auid = Bi.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    jq = function () {
      var a = Ej(l.location.href),
        b = Aj(a, "query", !1, void 0, "gad_source");
      if (void 0 === b) {
        var c = a.hash.replace("#", "");
        b = xj(c, "gad_source", !1);
      }
      return b;
    },
    kq = function () {
      var a = Ej(l.location.href).search.replace("?", "");
      return "1" === xj(a, "gad", !1, !0);
    },
    lq = function () {
      var a = 1 === Ym(!0) ? l.top.location.href : l.location.href;
      return (a = a.replace(/[\?#].*$/, ""));
    },
    mq = function (a) {
      var b = [];
      rb(a, function (c, d) {
        d = Kp(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ba);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    oq = function (a, b, c) {
      if ("aw" === a || "dc" === a || "gb" === a) {
        var d = Lj("gcl" + a);
        if (d) return d.split(".");
      }
      var e = Dp(b);
      if ("_gcl" == e) {
        c = void 0 === c ? !0 : c;
        var f = !U(nq()) && c,
          g;
        g = Op()[a] || [];
        if (0 < g.length) return f ? ["0"] : g;
      }
      var h = Ep(a, e);
      return h ? Cp(h) : [];
    },
    pq = function (a) {
      var b = nq();
      Jl(function () {
        a();
        U(b) || xl(a, b);
      }, b);
    },
    nq = function () {
      return R(48) ? [M.g.J, M.g.N] : [M.g.J];
    },
    qq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    rq = /^www.googleadservices.com$/,
    sq = function (a, b) {
      return oq("aw", a, b);
    },
    tq = function (a, b) {
      return oq("dc", a, b);
    },
    uq = function (a, b, c, d) {
      var e = Op(),
        f = [],
        g = e.gclid,
        h = e.dclid,
        m = e.gclsrc || "aw",
        n = kq(),
        p = jq();
      !g ||
        ("aw.ds" !== m && "aw" !== m && "ds" !== m && "3p.ds" !== m) ||
        f.push({ ba: g, Be: m });
      h && f.push({ ba: h, Be: "ds" });
      0 === f.length && e.wbraid && f.push({ ba: e.wbraid, Be: "gb" });
      0 === f.length && "aw.ds" === m && f.push({ ba: "", Be: "aw.ds" });
      pq(function () {
        if ((R(48) && R(87)) || U(M.g.J)) {
          var q = U(nq());
          dp(a);
          var r;
          if (q && ((r = Yo[$o(a.prefix)]), void 0 === r && !R(48))) return;
          var t = [];
          if (q || !d) t = f;
          var u = [];
          r && u.push("auid=" + r);
          var v = z.referrer ? Aj(Ej(z.referrer), "host") : "";
          0 === t.length &&
            (qq.test(v) || rq.test(v)) &&
            t.push({ ba: "", Be: "" });
          if (0 !== t.length || n || void 0 !== p) {
            v && u.push("ref=" + encodeURIComponent(v));
            var w = lq();
            u.push("url=" + encodeURIComponent(w));
            u.push("tft=" + yb());
            var x = cd();
            void 0 !== x && u.push("tfd=" + Math.round(x));
            var y = Ym(!0);
            u.push("frm=" + y);
            n && u.push("gad=1");
            void 0 !== p && u.push("gad_source=" + encodeURIComponent(p));
            var B = c;
            void 0 === B && (B = wm.C[M.g.ka]);
            var A = {},
              E = sm(im(new hm(0), ((A[M.g.ka] = B), A)));
            u.push("gtm=" + Yn(b));
            Cn() && u.push("gcs=" + Dn());
            u.push("gcd=" + Rn(E));
            Un() && u.push("dma_cps=" + Sn());
            u.push("dma=" + Tn());
            Bn(E) ? u.push("npa=0") : u.push("npa=1");
            fn(on()) && u.push("tcfd=" + Vn());
            var F = vn();
            F && u.push("gdpr=" + F);
            var C = tn();
            C && u.push("gdpr_consent=" + C);
            R(17) && u.push("apve=" + (R(18) ? 1 : 0));
            Ui.h && u.push("tag_exp=" + Ui.h);
            var G = q
              ? "https://adservice.google.com/pagead/regclk"
              : "https://adservice.googlesyndication.com/pagead/regclk";
            if (0 < t.length)
              for (var O = 0; O < t.length; O++) {
                var N = t[O],
                  W = N.ba,
                  Z = N.Be;
                if (!iq(a.prefix, Z + "." + W, void 0 !== r)) {
                  var Q = G + "?" + u.join("&");
                  "" !== W
                    ? (Q =
                        "gb" === Z
                          ? Q + "&wbraid=" + W
                          : Q + "&gclid=" + W + "&gclsrc=" + Z)
                    : "aw.ds" === Z && (Q += "&gclsrc=aw.ds");
                  Yc(Q);
                }
              }
            else if (
              (n || void 0 !== p) &&
              !iq(a.prefix, "gad", void 0 !== r)
            ) {
              var T = G + "?" + u.join("&");
              Yc(T);
            }
          }
        }
      });
    };
  var vq,
    wq = !1;
  function xq() {
    wq = !0;
    vq = vq || {};
  }
  var yq = function (a) {
    wq || xq();
    return vq[a];
  };
  var zq = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.m = c;
    this.h = {};
    this.metadata = Ua(c.eventMetadata || {});
    this.isAborted = !1;
  };
  zq.prototype.copyToHitData = function (a, b, c) {
    var d = S(this.m, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && k(d) && R(55))
      try {
        d = c(d);
      } catch (e) {}
    void 0 !== d && (this.h[a] = d);
  };
  var Aq = function (a, b, c) {
    var d = yq(a.target.fa);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  var Bq = function () {
    Bi.dedupe_gclid || (Bi.dedupe_gclid = "" + to());
    return Bi.dedupe_gclid;
  };
  var Cq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Dq = /^www.googleadservices.com$/,
    Fq = function (a) {
      a || (a = Eq());
      return a.yn
        ? !1
        : a.gm || a.hm || a.im || a.Ah || a.Rf || a.Pl || a.Wl
        ? !0
        : !1;
    },
    Eq = function () {
      var a = {},
        b = Mo(!0);
      a.yn = !!b._up;
      var c = Op();
      a.gm = void 0 !== c.aw;
      a.hm = void 0 !== c.dc;
      a.im = void 0 !== c.wbraid;
      var d = Ej(l.location.href),
        e = Aj(d, "query", !1, void 0, "gad");
      a.Ah = void 0 !== e;
      if (!a.Ah) {
        var f = d.hash.replace("#", ""),
          g = xj(f, "gad", !1);
        a.Ah = void 0 !== g;
      }
      a.Rf = void 0;
      if (R(60)) {
        var h = Aj(d, "query", !1, void 0, "gad_source");
        a.Rf = h;
        if (void 0 === a.Rf) {
          var m = d.hash.replace("#", ""),
            n = xj(m, "gad_source", !1);
          a.Rf = n;
        }
      }
      var p = z.referrer ? Aj(Ej(z.referrer), "host") : "";
      a.Wl = Cq.test(p);
      a.Pl = Dq.test(p);
      return a;
    };
  var Gq = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Hq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Iq = /^\d+\.fls\.doubleclick\.net$/,
    Jq = /;gac=([^;?]+)/,
    Kq = /;gacgb=([^;?]+)/,
    Lq = /;gclaw=([^;?]+)/,
    Mq = /;gclgb=([^;?]+)/;
  function Nq(a, b) {
    if (Iq.test(z.location.host)) {
      var c = z.location.href.match(b);
      return c && 2 == c.length && c[1].match(Gq)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].ba);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var Oq = function (a, b, c) {
    var d = zp(yp()) ? kp("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = dq("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + h.join(","));
    }
    return { Ol: f ? e.join(";") : "", Nl: Nq(d, Kq) };
  };
  function Pq(a, b, c) {
    if (Iq.test(z.location.host)) {
      var d = z.location.href.match(c);
      if (d && 2 == d.length && d[1].match(Hq)) return [{ ba: d[1] }];
    } else {
      if ("gclid" === b) return Bp((a || "_gcl") + "_aw");
      if ("wbraid" === b) return Bp((a || "_gcl") + "_gb");
      if ("braids" === b) return Gp({ prefix: a });
    }
    return [];
  }
  var Qq = function (a) {
      return Pq(a, "gclid", Lq)
        .map(function (b) {
          return b.ba;
        })
        .join(".");
    },
    Rq = function (a) {
      return Pq(a, "wbraid", Mq)
        .map(function (b) {
          return b.ba;
        })
        .join(".");
    },
    Sq = function (a) {
      return Pq(a, "braids", Mq)
        .map(function (b) {
          return b.ba;
        })
        .join(".");
    },
    Tq = function (a, b) {
      b = void 0 === b ? !1 : b;
      return Iq.test(z.location.host)
        ? !(Lq.test(z.location.href) || Jq.test(z.location.href))
        : hq(a, b);
    },
    Uq = function (a, b) {
      var c = R(62),
        d;
      d = (void 0 === c ? 0 : c)
        ? eq(a, b)
        : dq(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === d.length ||
        d.every(function (e) {
          return 0 === e;
        })
        ? ""
        : d.join(".");
    };
  var Vq = function () {
    if (kb(l.__uspapi)) {
      var a = "";
      try {
        l.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Zq = function (a) {
      if (a.eventName === M.g.aa && "page_view" === a.metadata.hit_type)
        if (R(18)) {
          a.metadata.redact_click_ids =
            null != S(a.m, M.g.da) && !1 !== S(a.m, M.g.da) && !U(Wq());
          var b = Xq(a),
            c = !1 !== S(a.m, M.g.ra);
          c || (a.h[M.g.Fk] = "1");
          var d = Dp(b.prefix);
          if (!a.metadata.consent_updated) {
            var e = S(a.m, M.g.Wa),
              f = S(a.m, M.g.sa) || {};
            Yq({ pd: c, wd: f, Cd: e, fc: b });
            var g;
            var h = (Bi.ads_pageview = Bi.ads_pageview || {});
            g = h[d] ? !1 : (h[d] = !0);
            if (!g) {
              a.isAborted = !0;
              return;
            }
          }
          a.h[M.g.Sd] = a.metadata.consent_updated
            ? "consent_updated"
            : "page_view";
          a.metadata.consent_updated && (a.h[M.g.kc] = "1");
          if (!a.metadata.consent_updated) {
            var m = Op();
            a.h[M.g.Fd] = m.gclid;
            a.h[M.g.Md] = m.dclid;
            a.h[M.g.Fi] = m.gclsrc;
            a.h[M.g.Fd] || a.h[M.g.Md] || (a.h[M.g.Ze] = m.wbraid);
            a.h[M.g.Ea] = z.referrer ? Aj(Ej(z.referrer), "host") : "";
            a.h[M.g.wa] = lq();
            a.h[M.g.Ei] = jq();
            a.h[M.g.Yd] = Ym(!0);
            var n = Eq();
            Fq(n) && (a.h[M.g.dd] = "1");
            a.h[M.g.Hi] = Bq();
          }
          if (U(Wq()))
            if (
              (c && (dp(b), (a.h[M.g.Eb] = Yo[$o(b.prefix)])),
              (a.h[M.g.kb] = void 0),
              (a.h[M.g.Ta] = void 0),
              !a.h[M.g.Fd] && !a.h[M.g.Md] && Tq(b.prefix))
            ) {
              var p = Cp(d + "_gb");
              0 < p.length && (a.h[M.g.kb] = p.join("."));
            } else if (!a.h[M.g.Ze]) {
              var q = Cp(d + "_aw");
              0 < q.length && (a.h[M.g.Ta] = q.join("."));
            }
          a.m.isGtmEvent && (a.m.h[M.g.ka] = wm.C[M.g.ka]);
          Bn(a.m) ? (a.h[M.g.Lb] = !1) : (a.h[M.g.Lb] = !0);
          a.metadata.add_tag_timing = !0;
          var r = Vq();
          void 0 !== r && (a.h[M.g.he] = r || "error");
          var t = vn();
          t && (a.h[M.g.zc] = t);
          var u = tn();
          u && (a.h[M.g.Ac] = u);
          a.metadata.speculative = !1;
        } else a.isAborted = !0;
    },
    Wq = function () {
      return R(48) ? [M.g.J, M.g.N] : [M.g.J];
    },
    Xq = function (a) {
      return {
        prefix: S(a.m, M.g.Ya) || S(a.m, M.g.Oa),
        domain: S(a.m, M.g.Ua),
        yb: S(a.m, M.g.Va),
        flags: S(a.m, M.g.Za),
      };
    },
    $q = function (a, b) {
      var c = a.pd,
        d = a.gg,
        e = a.allowAdPersonalizationSignals,
        f = a.xd,
        g = a.io;
      Yq({ pd: c, wd: a.wd, Cd: a.Cd, fc: b });
      c && !0 !== g && uq(b, d, e, f);
    },
    Yq = function (a) {
      var b = a.wd,
        c = a.Cd,
        d = a.fc;
      a.pd &&
        (Wo(b[M.g.Tb], !!b[M.g.W]) && (Sp(ar, d), Tp(d), hp(d)),
        Qp(d),
        Xp(ar, d),
        Yp(d));
      b[M.g.W] &&
        (Vp(ar, b[M.g.W], b[M.g.tb], !!b[M.g.ab], d.prefix),
        Wp(b[M.g.W], b[M.g.tb], !!b[M.g.ab], d.prefix),
        ip($o(d.prefix), b[M.g.W], b[M.g.tb], !!b[M.g.ab], d),
        ip("FPAU", b[M.g.W], b[M.g.tb], !!b[M.g.ab], d));
      c && $p(br);
      bq(br);
    },
    cr = function (a, b, c, d) {
      var e = a.nk,
        f = a.callback,
        g = a.Tj;
      if ("function" === typeof f)
        if (e === M.g.Ta && void 0 === g) {
          var h = d(b.prefix, c);
          0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h);
        } else e === M.g.Eb ? (L(65), dp(b, !1), f(Yo[$o(b.prefix)])) : f(g);
    },
    ar = ["aw", "dc", "gb"],
    br = ["aw", "dc", "gb", "ag"];
  function dr(a) {
    var b = S(a.m, M.g.Gb),
      c = S(a.m, M.g.Sb);
    b && !c
      ? (a.eventName !== M.g.aa && a.eventName !== M.g.Nc && L(131),
        (a.isAborted = !0))
      : !b && c && (L(132), (a.isAborted = !0));
  }
  function er(a) {
    var b = U(M.g.J) ? Bi.pscdl : "denied";
    a.h[M.g.df] = b;
  }
  var fr = function (a) {
      var b = a && a[M.g.yg];
      return b && b[M.g.Gi];
    },
    gr = function () {
      return -1 !== Gc.userAgent.toLowerCase().indexOf("firefox");
    },
    hr = function (a) {
      if (a && a.length) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d && d.estimated_delivery_date
            ? b.push("" + d.estimated_delivery_date)
            : b.push("");
        }
        return b.join(",");
      }
    };
  var jr = function (a, b) {
      var c = a && !U(ir());
      return b && c ? "0" : b;
    },
    lr = function (a) {
      Jl(
        function () {
          function b(w) {
            var x = U(ir()),
              y = h && x,
              B = g.prefix || "_gcl",
              A;
            Bi.reported_gclid || (Bi.reported_gclid = {});
            A = Bi.reported_gclid;
            var E = R(48)
              ? (y ? B : "") +
                "." +
                (U(M.g.J) ? 1 : 0) +
                "." +
                (U(M.g.N) ? 1 : 0)
              : h && U(M.g.J)
              ? n + "." + B + (w ? "gcu" : "gcs")
              : n + (w ? "gcu" : "gcs");
            if (!A[E]) {
              A[E] = !0;
              var F = {},
                C = function (Q, T) {
                  if (T || "number" === typeof T) F[Q] = T.toString();
                },
                G = "https://www.google.com";
              Cn() && (C("gcs", Dn()), w && C("gcu", 1));
              C("gcd", Rn(f));
              Ui.h && C("tag_exp", Ui.h);
              if (tl()) {
                C("rnd", Bq());
                if ((!n || (p && "aw.ds" !== p)) && x) {
                  var O = Cp(B + "_aw");
                  C("gclaw", O.join("."));
                }
                C("url", String(l.location).split(/[?#]/)[0]);
                C("dclid", jr(d, q));
                x || (G = "https://pagead2.googlesyndication.com");
              }
              Un() && C("dma_cps", Sn());
              C("dma", Tn());
              C("npa", Bn(f) ? 0 : 1);
              fn(on()) && C("tcfd", Vn());
              C("gdpr_consent", tn() || "");
              C("gdpr", vn() || "");
              "1" === Mo(!1)._up && C("gtm_up", 1);
              C("gclid", jr(d, n));
              C("gclsrc", p);
              if (
                !(
                  F.hasOwnProperty("gclid") ||
                  F.hasOwnProperty("dclid") ||
                  F.hasOwnProperty("gclaw")
                ) &&
                (C("gbraid", jr(d, r)),
                !F.hasOwnProperty("gbraid") && tl() && x)
              ) {
                var N = Cp(B + "_gb");
                0 < N.length && C("gclgb", N.join("."));
              }
              C("gtm", Yn(f.eventMetadata.source_canonical_id, !e));
              h &&
                U(M.g.J) &&
                (dp(g || {}), y && C("auid", Yo[$o(g.prefix)] || ""));
              kr || (a.Jj && C("did", a.Jj));
              a.yh && C("gdid", a.yh);
              a.sh && C("edid", a.sh);
              R(17) && C("apve", R(18) ? 1 : 0);
              var W = Object.keys(F).map(function (Q) {
                  return Q + "=" + encodeURIComponent(F[Q]);
                }),
                Z = G + "/pagead/landing?" + W.join("&");
              Yc(Z);
            }
          }
          var c = !!a.mh,
            d = !!a.xd,
            e = a.targetId,
            f = a.m,
            g = void 0 === a.fc ? {} : a.fc,
            h = void 0 === a.Uf ? !0 : a.Uf,
            m = Op(),
            n = m.gclid || "",
            p = m.gclsrc,
            q = m.dclid || "",
            r = m.wbraid || "",
            t = !c && ((!n || (p && "aw.ds" !== p) ? !1 : !0) || r),
            u = tl();
          if (t || u)
            if (u) {
              var v = R(48) ? [M.g.J, M.g.N, M.g.za] : [M.g.J];
              b();
              (function () {
                U(v) ||
                  Il(function (w) {
                    return b(!0, w.consentEventId, w.consentPriorityId);
                  }, v);
              })();
            } else b();
        },
        [M.g.J, M.g.N, M.g.za]
      );
    },
    ir = function () {
      return R(48) ? [M.g.J, M.g.N] : [M.g.J];
    },
    kr = !1;
  var mr = function (a, b, c, d) {
    var e = Pc(),
      f;
    if (1 === e)
      a: {
        var g = Ni;
        g = g.toLowerCase();
        for (
          var h = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = z.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(h) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != l.location.protocol ? a : b) + c;
  };
  var nr = function (a, b) {
      R(5) &&
        ((a.dma = Tn()),
        Un() && (a.dmaCps = Sn()),
        Bn(b) ? (a.npa = "0") : (a.npa = "1"));
    },
    pr = function (a, b, c) {
      if (l[a.functionName]) return b.Oh && D(b.Oh), l[a.functionName];
      var d = or();
      l[a.functionName] = d;
      if (a.Mf)
        for (var e = 0; e < a.Mf.length; e++) l[a.Mf[e]] = l[a.Mf[e]] || or();
      a.Tf && void 0 === l[a.Tf] && (l[a.Tf] = c);
      Oc(mr("https://", "http://", a.bi), b.Oh, b.Om);
      return d;
    },
    or = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    qr = {
      functionName: "_googWcmImpl",
      Tf: "_googWcmAk",
      bi: "www.gstatic.com/wcm/loader.js",
    },
    rr = {
      functionName: "_gaPhoneImpl",
      Tf: "ga_wpid",
      bi: "www.gstatic.com/gaphone/loader.js",
    },
    sr = { sk: "9", il: "5" },
    tr = {
      functionName: "_googCallTrackingImpl",
      Mf: [rr.functionName, qr.functionName],
      bi:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (sr.sk || sr.il) +
        ".js",
    },
    ur = {},
    vr = function (a, b, c, d, e) {
      L(22);
      if (c) {
        e = e || {};
        var f = pr(qr, e, a),
          g = { ak: a, cl: b };
        void 0 === e.Mb && (g.autoreplace = c);
        nr(g, d);
        f(2, e.Mb, g, c, 0, xb(), e.options);
      }
    },
    wr = function (a, b, c, d, e) {
      L(21);
      if (b && c) {
        e = e || {};
        for (
          var f = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: xb(),
            },
            g = 0;
          g < a.length;
          g++
        ) {
          var h = a[g];
          ur[h.id] ||
            (h && "AW" === h.prefix && !f.adData && 2 <= h.O.length
              ? ((f.adData = { ak: h.O[Sl[1]], cl: h.O[Sl[2]] }),
                nr(f.adData, d),
                (ur[h.id] = !0))
              : h &&
                "UA" === h.prefix &&
                !f.gaData &&
                ((f.gaData = { gaWpid: h.fa }), (ur[h.id] = !0)));
        }
        (f.gaData || f.adData) && pr(tr, e)(e.Mb, f, e.options);
      }
    },
    xr = function () {
      var a = !1;
      return a;
    },
    yr = function (a, b) {
      if (a)
        if (Wn()) {
        } else if ((a = k(a) ? Pl(lk(a)) : Pl(lk(a.id)))) {
          var c = void 0,
            d = !1,
            e = S(b, M.g.aj);
          if (e && Array.isArray(e)) {
            c = [];
            for (var f = 0; f < e.length; f++) {
              var g = Pl(e[f]);
              g &&
                (c.push(g),
                (a.id === g.id || (a.id === a.fa && a.fa === g.fa)) &&
                  (d = !0));
            }
          }
          if (!c || d) {
            var h = S(b, M.g.Og),
              m;
            if (h) {
              Array.isArray(h) ? (m = h) : (m = [h]);
              var n = S(b, M.g.Mg),
                p = S(b, M.g.Ng),
                q = S(b, M.g.Pg),
                r = S(b, M.g.Zi),
                t = n || p,
                u = 1;
              "UA" !== a.prefix || c || (u = 5);
              for (var v = 0; v < m.length; v++)
                if (v < u)
                  if (c) wr(c, m[v], r, b, { Mb: t, options: q });
                  else if ("AW" === a.prefix && a.O[Sl[2]])
                    xr()
                      ? wr([a], m[v], r || "US", b, { Mb: t, options: q })
                      : vr(a.O[Sl[1]], a.O[Sl[2]], m[v], b, {
                          Mb: t,
                          options: q,
                        });
                  else if ("UA" === a.prefix)
                    if (xr()) wr([a], m[v], r || "US", b, { Mb: t });
                    else {
                      var w = a.fa,
                        x = m[v],
                        y = { Mb: t };
                      L(23);
                      if (x) {
                        y = y || {};
                        var B = pr(rr, y, w),
                          A = {};
                        void 0 !== y.Mb ? (A.receiver = y.Mb) : (A.replace = x);
                        A.ga_wpid = w;
                        A.destination = x;
                        B(2, xb(), A);
                      }
                    }
            }
          }
        }
    };
  function zr(a) {
    return {
      getDestinationId: function () {
        return a.target.fa;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return S(a.m, b);
      },
      Oj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      },
    };
  }
  var Br = function (a) {
      var b = Ar[a.target.fa];
      if (!a.isAborted && b)
        for (var c = zr(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    Cr = function (a, b) {
      var c = Ar[a];
      c || (c = Ar[a] = []);
      c.push(b);
    },
    Ar = {};
  var Er = function (a) {
      if (U(Dr)) {
        a = a || {};
        dp(a, !1);
        var b = Zo[$o(Dp(a.prefix))];
        if (b && !(18e5 < yb() - 1e3 * b.Kh)) {
          var c = b.id,
            d = c.split(".");
          if (2 === d.length && !(864e5 < yb() - 1e3 * (Number(d[1]) || 0)))
            return c;
        }
      }
    },
    Dr = M.g.J;
  var Fr = function () {
    var a = (Gc && Gc.userAgent) || "";
    if (
      0 > a.indexOf("Safari") ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
    )
      return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if ("" === b) return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (void 0 === c[e]) return !0;
      if (d[e] != c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
  var Gr = function () {
      var a = l.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Hr = function (a) {
      if (z.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !l.getComputedStyle)
        return !0;
      var c = l.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf("opacity(");
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(")", h))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = l.getComputedStyle(d, null));
      }
      return !1;
    };
  var Rr = function (a, b, c) {
      var d = a.element,
        e = { X: a.X, type: a.qa, tagName: d.tagName };
      b && (e.querySelector = Qr(d));
      c && (e.isVisible = !Hr(d));
      return e;
    },
    Sr = function (a, b, c) {
      return Rr({ element: a.element, X: a.X, qa: "1" }, b, c);
    },
    Tr = function (a) {
      var b = !!a.ud + "." + !!a.vd;
      a && a.xe && a.xe.length && (b += "." + a.xe.join("."));
      a &&
        a.wb &&
        (b += "." + a.wb.email + "." + a.wb.phone + "." + a.wb.address);
      return b;
    },
    Wr = function (a) {
      if (0 != a.length) {
        var b;
        b = Ur(a, function (c) {
          return !Vr.test(c.X);
        });
        b = Ur(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = Ur(b, function (c) {
          return !Hr(c.element);
        });
        return b[0];
      }
    },
    Xr = function (a, b) {
      if (!b || 0 === b.length) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && Jh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    Ur = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    Qr = function (a) {
      var b;
      if (a === z.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = Qr(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    Zr = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(Yr);
          if (f) {
            var g = f[0],
              h;
            if (l.location) {
              var m = zj(l.location, "host", !0);
              h = 0 <= g.toLowerCase().indexOf(m);
            } else h = !1;
            h || b.push({ element: d, X: g });
          }
        }
      }
      return b;
    },
    cs = function () {
      var a = [],
        b = z.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && 1e4 > d;
        d++
      ) {
        var e = c[d];
        if (
          !(0 <= $r.indexOf(e.tagName.toUpperCase())) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && 1e4 > g; g++)
            if (!(0 <= as.indexOf(e.children[g].tagName.toUpperCase()))) {
              f = !0;
              break;
            }
          (!f || (R(23) && -1 !== bs.indexOf(e.tagName))) && a.push(e);
        }
      }
      return { elements: a, status: 1e4 < c.length ? "2" : "1" };
    },
    ds = !1;
  var Yr = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    es = /@(gmail|googlemail)\./i,
    Vr = /support|noreply/i,
    $r = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    as = ["BR"],
    fs = { Gn: "1", Un: "2", Kn: "3", On: "4", Cn: "5", Vn: "6", Qn: "7" },
    gs = {},
    bs = ["INPUT", "SELECT"];
  var zs = function (a) {
      a = a || { ud: !0, vd: !0, dg: void 0 };
      a.wb = a.wb || { email: !0, phone: !1, address: !1 };
      var b = Tr(a),
        c = gs[b];
      if (c && 200 > yb() - c.timestamp) return c.result;
      var d = cs(),
        e = d.status,
        f = [],
        g,
        h,
        m = [];
      if (!R(23)) {
        if (a.wb && a.wb.email) {
          var n = Zr(d.elements);
          f = Xr(n, a && a.xe);
          g = Wr(f);
          10 < n.length && (e = "3");
        }
        !a.dg && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(Sr(f[p], a.ud, a.vd));
        m = m.slice(0, 10);
      } else if (a.wb) {
      }
      g && (h = Sr(g, a.ud, a.vd));
      var E = { elements: m, Uh: h, status: e };
      gs[b] = { timestamp: yb(), result: E };
      return E;
    },
    As = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.X.length + ":" + es.test(a.X)
      );
    };
  var Gs = {
    ml: Number("") || 500,
    Qk: Number("") || 5e3,
    oj: Number("20") || 10,
    wk: Number("") || 5e3,
  };
  function Hs(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var Is = function (a, b) {
    var c;
    return c;
  };
  var Js = "https://" + Ai.Ed,
    Ks = Js + "/gtm/static/",
    Ls = Number("") || 5,
    Ms = Number("") || 50,
    Ns = Js,
    Os = Ks,
    Ps = !1,
    Qs = 0,
    Rs = ob();
  function bt() {
    var a = !1;
    return a;
  }
  function ct(a) {
    var b = Math.round(yb());
  }
  function dt(a, b, c) {}
  function Zs(a, b, c, d) {}
  function Ts(a, b, c, d, e) {}
  function et(a, b, c, d) {}
  function ft(a, b, c, d) {}
  function gt(a) {
    var b = {},
      c = ["tv.1"],
      d = 0;
    var u = c.join("~");
    return { X: b, Xf: u };
  }
  var ht = void 0;
  function it(a) {
    var b = [];
    return b;
  }
  var jt = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  vc();
  Nm() || sc("iPod");
  sc("iPad");
  !sc("Android") || wc() || vc() || uc() || sc("Silk");
  wc();
  !sc("Safari") ||
    wc() ||
    (tc() ? 0 : sc("Coast")) ||
    uc() ||
    (tc() ? 0 : sc("Edge")) ||
    (tc() ? rc("Microsoft Edge") : sc("Edg/")) ||
    (tc() ? rc("Opera") : sc("OPR")) ||
    vc() ||
    sc("Silk") ||
    sc("Android") ||
    Om();
  var kt = {},
    lt = null,
    mt = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!lt) {
        lt = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(h[m].split(""));
          kt[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === lt[q] && (lt[q] = p);
          }
        }
      }
      for (
        var r = kt[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          B = b[v + 2],
          A = r[x >> 2],
          E = r[((x & 3) << 4) | (y >> 4)],
          F = r[((y & 15) << 2) | (B >> 6)],
          C = r[B & 63];
        t[w++] = "" + A + E + F + C;
      }
      var G = 0,
        O = u;
      switch (b.length - v) {
        case 2:
          (G = b[v + 1]), (O = r[(G & 15) << 2] || u);
        case 1:
          var N = b[v];
          t[w] = "" + r[N >> 2] + r[((N & 3) << 4) | (G >> 4)] + O + u;
      }
      return t.join("");
    };
  Object.freeze(new (function () {})());
  Object.freeze(new (function () {})());
  var nt =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function ot(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function pt() {
    var a = l.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function qt() {
    var a, b;
    return null !=
      (b = null == (a = l.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function rt(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function st() {
    var a = l;
    if (!rt(a)) return null;
    var b = ot(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(nt)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var tt,
    ut = function () {
      if (rt(l) && ((tt = yb()), !qt())) {
        var a = st();
        a &&
          (a.then(function () {
            L(95);
          }),
          a.catch(function () {
            L(96);
          }));
      }
    },
    wt = function (a) {
      var b = vt.wn,
        c = function (g, h) {
          try {
            a(g, h);
          } catch (m) {}
        },
        d = pt();
      if (d) c(d);
      else {
        var e = qt();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = l.setTimeout(function () {
            c.Je || ((c.Je = !0), L(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Je || ((c.Je = !0), L(104), l.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Je || ((c.Je = !0), L(105), l.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    xt = function (a, b) {
      a &&
        ((b.h[M.g.vf] = a.architecture),
        (b.h[M.g.wf] = a.bitness),
        a.fullVersionList &&
          (b.h[M.g.xf] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || "") +
                ";" +
                encodeURIComponent(c.version || "")
              );
            })
            .join("|")),
        (b.h[M.g.yf] = a.mobile ? "1" : "0"),
        (b.h[M.g.zf] = a.model),
        (b.h[M.g.Af] = a.platform),
        (b.h[M.g.Bf] = a.platformVersion),
        (b.h[M.g.Cf] = a.wow64 ? "1" : "0"));
    };
  function zt() {
    return "attribution-reporting";
  }
  function At(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var Bt = !1;
  function Ct() {
    if (At("join-ad-interest-group") && kb(Gc.joinAdInterestGroup)) return !0;
    Bt ||
      (Wm(
        "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (Bt = !0));
    return At("join-ad-interest-group") && kb(Gc.joinAdInterestGroup);
  }
  function Dt(a, b) {
    var c = void 0;
    try {
      c = z.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && yb() - d < (void 0 == $f[1] ? 6e4 : $f[1])) {
        gb("TAGGING", 9);
        return;
      }
      try {
        c.parentNode.removeChild(c);
      } catch (e) {}
      c = void 0;
    } else
      try {
        if (
          z.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length >= (void 0 == $f[2] ? 50 : $f[2])
        ) {
          gb("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Qc(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: yb() },
      c
    );
  }
  function Et() {
    return "https://td.doubleclick.net";
  }
  var Ft = function () {
      return R(48) ? [M.g.J, M.g.N] : [M.g.J];
    },
    Gt = function (a) {
      if (null != a) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return -1 == c ? b : b.substring(0, c);
      }
      return "";
    },
    Ht = function () {
      var a = z.title;
      if (void 0 == a || "" == a) return "";
      var b = function (d) {
        try {
          return decodeURIComponent(d), !0;
        } catch (e) {
          return !1;
        }
      };
      a = encodeURIComponent(a);
      for (var c = 256; !b(a.substr(0, c)); ) c--;
      return decodeURIComponent(a.substr(0, c));
    },
    It = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    Jt = function (a, b) {
      Array.isArray(b) || (b = [b]);
      return 0 <= b.indexOf(a.metadata.hit_type);
    },
    Kt = function (a) {
      var b = a.target.O[Sl[1]];
      if (b) {
        a.h[M.g.Vc] = b;
        var c = a.target.O[Sl[2]];
        c && (a.h[M.g.ob] = c);
      } else a.isAborted = !0;
    },
    Lt = function (a) {
      if (
        Jt(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.h[M.g.ob],
          c = !0 === S(a.m, M.g.cf);
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && It(a);
            gr() && (a.metadata.is_gcp_conversion = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c && b && (a.isAborted = !0);
            break;
          case "remarketing":
            (!c && b) || It(a);
        }
        a.h[M.g.lj] = a.metadata.is_gcp_conversion
          ? "www.google.com"
          : "www.googleadservices.com";
      }
    },
    Mt = function (a) {
      Jt(a, ["conversion", "remarketing"]);
    },
    Nt = function (a) {
      if (!a.metadata.consent_updated && Jt(a, ["conversion", "remarketing"])) {
        var b = Ym(!1);
        a.h[M.g.Yd] = b;
        var c = S(a.m, M.g.wa);
        c || (c = 1 === b ? l.top.location.href : l.location.href);
        a.h[M.g.wa] = Gt(c);
        a.copyToHitData(M.g.Ea, z.referrer);
        a.h[M.g.Hb] = Ht();
        a.copyToHitData(M.g.Pa);
        var d = Gr();
        a.h[M.g.Ib] = d.width + "x" + d.height;
        for (var e, f = l, g = f; f && f != f.parent; )
          (f = f.parent), Um(f) && (g = f);
        e = g;
        var h;
        var m = e.location.href;
        if (e === e.top) h = { url: m, vm: !0 };
        else {
          var n = !1,
            p = e.document;
          p && p.referrer && ((m = p.referrer), e.parent === e.top && (n = !0));
          var q = e.location.ancestorOrigins;
          if (q) {
            var r = q[q.length - 1];
            r && -1 === m.indexOf(r) && ((n = !1), (m = r));
          }
          h = { url: m, vm: n };
        }
        var t = h;
        t.url && c !== t.url && (a.h[M.g.tf] = Gt(t.url));
      }
    },
    Ot = function (a) {
      Jt(a, ["conversion", "remarketing"]) &&
        (a.copyToHitData(M.g.Ba),
        a.copyToHitData(M.g.la),
        a.copyToHitData(M.g.Aa),
        (R(48) && !U(M.g.N)) || a.copyToHitData(M.g.Qa));
    },
    Pt = function (a) {
      if (!rt(l)) L(87);
      else if (void 0 !== tt) {
        L(85);
        var b = pt();
        b ? xt(b, a) : L(86);
      }
    },
    St = function (a) {
      !Jt(a, ["conversion"]) ||
        (R(48) && !U(M.g.N)) ||
        (!0 === l._gtmpcm || Fr()
          ? (a.h[M.g.Pb] = "2")
          : R(28) &&
            (Qt ||
              At(zt()) ||
              (Wm(
                "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
              ),
              (Qt = !0)),
            Rt ||
              ((Rt = !0),
              Wm(
                "A4oIpR6f5aUXFRMbL6t6qaMk4lrHWxcV3DcrzORsA9sEsIk1FBRMFzzhfMNLuUpokZH40FV8s7iiXtt/729v8A4AAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcxNDUyMTU5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d"
              )),
            At(zt()) && (a.h[M.g.Pb] = "1")));
    },
    Tt = function (a) {
      if (Jt(a, ["conversion", "remarketing"]) && R(24)) {
        var b = function (d) {
          return R(26) ? (gb("fdr", d), !0) : !1;
        };
        if (U(M.g.J) || b(0))
          if (!R(48) || U(M.g.N) || b(1))
            if (!1 !== S(a.m, M.g.Da) || b(2))
              if (Bn(a.m) || b(3))
                if (!1 !== S(a.m, M.g.Ob) || b(4)) {
                  var c;
                  R(27)
                    ? (c = a.eventName === M.g.aa ? S(a.m, M.g.Ka) : void 0)
                    : (c = S(a.m, M.g.Ka));
                  if (!1 !== c || b(5))
                    if (Ct() || b(6))
                      R(26) && ib()
                        ? ((a.h[M.g.Qi] = hb("fdr")), delete fb.fdr)
                        : ((a.h[M.g.zg] = "1"),
                          (a.metadata.send_fledge_experiment = !0));
                }
      }
    },
    Ut = function (a) {
      a.metadata.conversion_linker_enabled = !1 !== S(a.m, M.g.ra);
      a.metadata.cookie_options = Xq(a);
      a.metadata.redact_ads_data =
        null != S(a.m, M.g.da) && !1 !== S(a.m, M.g.da);
      a.metadata.allow_ad_personalization = Bn(a.m);
    },
    Vt = function (a) {
      if (Aq(a, "ccd_add_1p_data", !1) && U(Ft())) {
        var b = a.m.s[M.g.fe];
        if (ij(b)) {
          var c = S(a.m, M.g.Fa);
          null === c
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && Ta(c) && (a.metadata.user_data_from_code = c),
              Ta(b.selectors) &&
                (a.metadata.user_data_from_manual = hj(b.selectors)));
        }
      }
    },
    Wt = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          Jt(a, ["conversion", "user_data_web"]),
        c = !Aq(a, "ccd_add_1p_data", !1) && Jt(a, "user_data_lead");
      if ((b || c) && U(M.g.J)) {
        var d = "conversion" === a.metadata.hit_type,
          e = a.m,
          f = void 0,
          g = S(e, M.g.Fa);
        if (d) {
          var h = (S(e, M.g.Qd) || {})[a.h[M.g.ob]];
          if (!0 === S(e, M.g.Gd) || h) {
            var m;
            var n;
            if (h)
              b: {
                switch (h.enhanced_conversions_mode) {
                  case "manual":
                    if (g && Ta(g)) {
                      n = g;
                      break b;
                    }
                    var p = h.enhanced_conversions_manual_var;
                    n = void 0 !== p ? p : l.enhanced_conversion_data;
                    break b;
                  case "automatic":
                    n = hj(h[M.g.yg]);
                    break b;
                }
                n = void 0;
              }
            else n = l.enhanced_conversion_data;
            var q = n,
              r = (h || {}).enhanced_conversions_mode,
              t;
            if (q) {
              if ("manual" === r)
                switch (q._tag_mode) {
                  case "CODE":
                    t = "c";
                    break;
                  case "AUTO":
                    t = "a";
                    break;
                  case "MANUAL":
                    t = "m";
                    break;
                  default:
                    t = "c";
                }
              else t = "automatic" === r ? (fr(h) ? "a" : "m") : "c";
              m = { X: q, mk: t };
            } else m = { X: q, mk: void 0 };
            var u = m,
              v = u.mk;
            f = u.X;
            a.h[M.g.ee] = v;
          }
        } else if (a.m.isGtmEvent) {
          It(a);
          a.metadata.user_data = g;
          return;
        }
        a.metadata.user_data = f;
      }
    },
    Xt = function (a) {
      Jt(a, ["conversion", "remarketing"]) &&
        (a.m.isGtmEvent
          ? "conversion" !== a.metadata.hit_type &&
            a.eventName &&
            (a.h[M.g.Sd] = a.eventName)
          : (a.h[M.g.Sd] = a.eventName),
        rb(a.m.h, function (b, c) {
          xi[b.split(".")[0]] || (a.h[b] = c);
        }));
    },
    Yt = function (a) {
      if (
        a.eventName === M.g.aa &&
        !a.metadata.consent_updated &&
        ((a.metadata.is_config_command = !0),
        Jt(a, "conversion") && (a.metadata.speculative = !0),
        !Jt(a, "remarketing") ||
          (!1 !== S(a.m, M.g.Ob) && !1 !== S(a.m, M.g.Ka)) ||
          (a.metadata.speculative = !0),
        Jt(a, "landing_page"))
      ) {
        var b = S(a.m, M.g.sa) || {},
          c = S(a.m, M.g.Wa),
          d = a.metadata.conversion_linker_enabled,
          e = a.metadata.source_canonical_id,
          f = Bn(a.m),
          g = a.metadata.redact_ads_data,
          h = a.metadata.cookie_options;
        $q(
          {
            pd: d,
            wd: b,
            Cd: c,
            gg: e,
            allowAdPersonalizationSignals: f,
            xd: g,
          },
          h
        );
        yr(a.target, a.m);
        lr({
          mh: !1,
          xd: g,
          targetId: a.target.id,
          m: a.m,
          fc: d ? h : void 0,
          Uf: d,
          Jj: a.h[M.g.ae],
          yh: a.h[M.g.sb],
          sh: a.h[M.g.pb],
        });
        a.isAborted = !0;
      }
    },
    Zt = function (a) {
      if (
        !Aq(a, "hasPreAutoPiiCcdRule", !1) &&
        Jt(a, "conversion") &&
        U(M.g.J)
      ) {
        var b = (S(a.m, M.g.Qd) || {})[a.h[M.g.ob]],
          c = a.h[M.g.Vc],
          d;
        if (!(d = fr(b)))
          if (tj())
            if (ds) d = !0;
            else {
              var e = yq("AW-" + c);
              d = !!e && !!e.preAutoPii;
            }
          else d = !1;
        if (d) {
          var f = yb(),
            g = zs({ ud: !0, vd: !0, dg: !0 });
          if (0 !== g.elements.length) {
            for (var h = [], m = 0; m < g.elements.length; ++m) {
              var n = g.elements[m];
              h.push(n.querySelector + "*" + As(n) + "*" + n.type);
            }
            a.h[M.g.Ug] = h.join("~");
            var p = g.Uh;
            p && ((a.h[M.g.Vg] = p.querySelector), (a.h[M.g.Tg] = As(p)));
            a.h[M.g.Sg] = String(yb() - f);
            a.h[M.g.Wg] = g.status;
          }
        }
      }
    },
    $t = function (a) {
      if (a.eventName === M.g.Sa && !a.m.isGtmEvent) {
        if (!a.metadata.consent_updated && Jt(a, "conversion")) {
          var b = S(a.m, M.g.Fb);
          if ("function" !== typeof b) return;
          var c = String(S(a.m, M.g.rb)),
            d = a.h[c],
            e = S(a.m, c);
          c === M.g.Ta || c === M.g.Eb
            ? cr(
                { nk: c, callback: b, Tj: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                sq
              )
            : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    au = function (a) {
      if (Jt(a, "conversion") && U(M.g.J) && (a.h[M.g.kb] || a.h[M.g.yc])) {
        var b = a.h[M.g.ob],
          c = Ua(a.metadata.cookie_options),
          d = Dp(c.prefix);
        c.prefix = "_gcl" === d ? "" : d;
        if (a.h[M.g.kb]) {
          var e = Uq(b, c);
          e && (a.h[M.g.Xg] = e);
        }
        if (a.h[M.g.yc]) {
          var f = Oq(b, c).Ol;
          f && (a.h[M.g.Eg] = f);
        }
      }
    },
    bu = function (a) {
      var b = R(8),
        c = a.m,
        d,
        e,
        f;
      if (!b) {
        var g = fm(c, M.g.ia);
        d = Hb(Ta(g) ? g : {});
      }
      var h = fm(c, M.g.ia, 1),
        m = fm(c, M.g.ia, 2);
      e = Hb(Ta(h) ? h : {}, ".");
      f = Hb(Ta(m) ? m : {}, ".");
      b || (a.h[M.g.ae] = d);
      a.h[M.g.sb] = e;
      a.h[M.g.pb] = f;
    },
    cu = function (a) {
      if (Jt(a, ["conversion", "remarketing"])) {
        var b = "conversion" === a.metadata.hit_type;
        (b && a.eventName !== M.g.Ja) ||
          (a.copyToHitData(M.g.Z),
          b &&
            (a.copyToHitData(M.g.Kd),
            a.copyToHitData(M.g.Id),
            a.copyToHitData(M.g.Jd),
            a.copyToHitData(M.g.Hd),
            (a.h[M.g.sg] = a.eventName)));
      }
    },
    du = function (a) {
      if (
        Jt(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.m;
        if (Jt(a, ["conversion", "remarketing"])) {
          var c = S(b, M.g.Ub);
          if (!0 === c || !1 === c) a.h[M.g.Ub] = c;
        }
        Bn(b)
          ? (a.h[M.g.Lb] = !1)
          : ((a.h[M.g.Lb] = !0), Jt(a, "remarketing") && (a.isAborted = !0));
      }
    },
    eu = function (a) {
      Jt(a, "conversion") &&
        (a.copyToHitData(M.g.ed),
        a.copyToHitData(M.g.Ld),
        a.copyToHitData(M.g.kd),
        a.copyToHitData(M.g.Rd),
        a.copyToHitData(M.g.wc),
        a.copyToHitData(M.g.Zc));
    },
    fu = function (a) {
      Br(a);
    },
    gu = function (a) {
      if (Jt(a, ["conversion", "remarketing"]) && l.__gsaExp && l.__gsaExp.id) {
        var b = l.__gsaExp.id;
        if (kb(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.h[M.g.Ig] = c);
          } catch (d) {}
      }
    },
    hu = function (a) {
      if (Jt(a, ["conversion", "remarketing"])) {
        var b = Vq();
        void 0 !== b && (a.h[M.g.he] = b || "error");
        var c = vn();
        c && (a.h[M.g.zc] = c);
        var d = tn();
        d && (a.h[M.g.Ac] = d);
      }
    },
    iu = function (a) {
      Jt(a, ["conversion"]) && "1" === Mo(!1)._up && (a.h[M.g.Zd] = !0);
    },
    ju = function (a) {
      Jt(a, ["conversion"]) &&
        (a.metadata.redact_click_ids =
          !!a.metadata.redact_ads_data && !U(Ft()));
    },
    ku = function (a) {
      if (
        Jt(a, ["conversion", "user_data_lead", "user_data_web"]) &&
        U(M.g.J) &&
        a.metadata.conversion_linker_enabled
      ) {
        var b = a.metadata.cookie_options,
          c = Dp(b.prefix);
        "_gcl" === c && (c = "");
        var d = R(62);
        if (!R(48) || U(M.g.N))
          if (Tq(c, d)) {
            var e = d ? Sq(c) : Rq(c);
            e && (a.h[M.g.kb] = e);
            if (!c) {
              var f = a.h[M.g.ob];
              b = Ua(b);
              b.prefix = c;
              var g = Oq(f, b, !0).Nl;
              g && (a.h[M.g.yc] = g);
            }
          } else {
            var h = Qq(c);
            h && (a.h[M.g.Ta] = h);
            if (!c) {
              var m = Nq(zp(yp()) ? kp() : {}, Jq);
              m && (a.h[M.g.Wd] = m);
            }
          }
      }
    },
    lu = function (a) {
      if (
        Jt(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        U(M.g.J)
      ) {
        var b = !R(3);
        if ("remarketing" !== a.metadata.hit_type || b) {
          var c = a.metadata.cookie_options;
          dp(c, "conversion" === a.metadata.hit_type && a.eventName !== M.g.Sa);
          if (!R(48) || U(M.g.N)) a.h[M.g.Eb] = Yo[$o(c.prefix)];
        }
      }
    },
    mu = function (a) {
      Oj() || Qj(a.m) || (R(72) && R(82) && ct());
    },
    nu = function (a) {
      if (Jt(a, ["conversion"])) {
        var b = Er(a.metadata.cookie_options);
        if (b && !a.h[M.g.Ba]) {
          var c = to(a.h[M.g.ob]);
          a.h[M.g.Ba] = c;
        }
        b && ((a.h[M.g.ub] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    ou = function (a) {
      var b = U(Ft());
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !b || !!a.metadata.consent_updated;
          break;
        case "remarketing":
          a.isAborted = !b;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.h[M.g.kc] = !0);
      }
    },
    pu = function (a) {
      Jt(a, ["conversion"]) &&
        a.m.eventMetadata.is_external_event &&
        (a.h[M.g.mj] = !0);
    },
    qu = function (a) {
      if (!a.metadata.consent_updated && R(20) && Jt(a, ["conversion"])) {
        var b = Eq();
        Fq(b) && ((a.h[M.g.dd] = "1"), (a.metadata.add_tag_timing = !0));
      }
    },
    ru = function (a) {
      var b;
      if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            It(a);
            break;
          case "user_data_lead":
            b = 98;
            It(a);
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && L(b);
      !0 === a.metadata.speculative && (a.isAborted = !0);
    },
    su = function (a) {
      R(18) &&
      a.eventName === M.g.aa &&
      Jt(a, "page_view") &&
      !a.metadata.consent_updated &&
      !a.m.isGtmEvent
        ? yr(a.target, a.m)
        : Jt(a, "call_conversion") && (yr(a.target, a.m), (a.isAborted = !0));
    },
    Qt = !1,
    Rt = !1;
  var uu = function (a, b) {
      var c = {},
        d = function (f, g) {
          var h;
          h = !0 === g ? "1" : !1 === g ? "0" : encodeURIComponent(String(g));
          c[f] = h;
        };
      rb(a.h, function (f, g) {
        var h = tu[f];
        h &&
          void 0 !== g &&
          "" !== g &&
          (!a.metadata.redact_click_ids ||
            (f !== M.g.Fd && f !== M.g.Md && f !== M.g.Ze) ||
            (g = "0"),
          d(h, g));
      });
      d("gtm", Yn(a.metadata.source_canonical_id));
      Cn() && d("gcs", Dn());
      d("gcd", Rn(a.m));
      Un() && d("dma_cps", Sn());
      d("dma", Tn());
      fn(on()) && d("tcfd", Vn());
      Ui.h && d("tag_exp", Ui.h);
      if (a.metadata.add_tag_timing) {
        d("tft", yb());
        var e = cd();
        void 0 !== e && d("tfd", Math.round(e));
      }
      R(17) && d("apve", R(18) ? "1" : "0");
      b(c);
    },
    vu = function (a) {
      uu(a, function (b) {
        var c = [];
        rb(b, function (f, g) {
          c.push(f + "=" + g);
        });
        var d;
        d =
          "page_view" === a.metadata.hit_type
            ? Rj(
                U(R(48) ? [M.g.J, M.g.N] : [M.g.J])
                  ? "https://www.google.com"
                  : "https://googlesyndication.com",
                !0
              ) + "/pagead/collect"
            : void 0;
        var e = d + "?" + c.join("&");
        Yc(e);
        if (kb(a.m.onSuccess)) a.m.onSuccess();
      });
    },
    wu = {},
    tu =
      ((wu[M.g.kc] = "gcu"),
      (wu[M.g.kb] = "gclgb"),
      (wu[M.g.Ta] = "gclaw"),
      (wu[M.g.Ei] = "gad_source"),
      (wu[M.g.Fd] = "gclid"),
      (wu[M.g.Fi] = "gclsrc"),
      (wu[M.g.Ze] = "wbraid"),
      (wu[M.g.Eb] = "auid"),
      (wu[M.g.Hi] = "rnd"),
      (wu[M.g.ug] = "gcldc"),
      (wu[M.g.Md] = "dclid"),
      (wu[M.g.pb] = "edid"),
      (wu[M.g.Sd] = "en"),
      (wu[M.g.zc] = "gdpr"),
      (wu[M.g.sb] = "gdid"),
      (wu[M.g.Yd] = "frm"),
      (wu[M.g.dd] = "lps"),
      (wu[M.g.ae] = "did"),
      (wu[M.g.wa] = "dl"),
      (wu[M.g.Ea] = "dr"),
      (wu[M.g.Ac] = "gdpr_consent"),
      (wu[M.g.he] = "us_privacy"),
      (wu[M.g.Lb] = "npa"),
      wu);
  var xu = {
    H: {
      ii: "ads_conversion_hit",
      Dd: "container_execute_start",
      li: "container_setup_end",
      lg: "container_setup_start",
      ji: "container_blocking_end",
      ki: "container_execute_end",
      mi: "container_yield_end",
      mg: "container_yield_start",
      gj: "event_execute_end",
      fj: "event_evaluation_end",
      Yg: "event_evaluation_start",
      ij: "event_setup_end",
      ie: "event_setup_start",
      jj: "ga4_conversion_hit",
      ke: "page_load",
      Tn: "pageview",
      ac: "snippet_load",
      xj: "tag_callback_error",
      yj: "tag_callback_failure",
      zj: "tag_callback_success",
      Aj: "tag_execute_end",
      nd: "tag_execute_start",
    },
  };
  function yu() {
    function a(c, d) {
      var e = hb(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var zu = !1;
  var gv = function (a, b) {},
    hv = function (a, b) {},
    iv = function (a, b) {},
    jv = function (a, b) {},
    kv = function () {
      var a = {};
      return a;
    },
    Zu = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    lv = function () {},
    mv = function (a, b) {},
    nv = function (a, b, c) {},
    ov = function () {};
  var pv = function (a, b) {
    var c = l,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var qv = function (a, b, c) {
    var d = Rm(a, "fmt");
    if (b) {
      var e = Rm(a, "random"),
        f = Rm(a, "label") || "";
      if (!e) return !1;
      var g = mt(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!pv(g, b)) return !1;
    }
    d && 4 != d && (a = Tm(a, "rfmt", d));
    var h = Tm(a, "fmt", 4);
    Oc(
      h,
      function () {
        l.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((l.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      z.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var rv = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          h;
        for (h in d)
          "google_business_vertical" !== h &&
            (h in g || (g[h] = []), g[h].push(d[h]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    tv = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = sv(d)),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e)
          );
        }
      }
      return b;
    },
    uv = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d &&
          b.push({
            item_id: sv(d),
            quantity: d.quantity,
            value: d.price,
            start_date: d.start_date,
            end_date: d.end_date,
          });
      }
      return b;
    },
    sv = function (a) {
      null != a.id && null != a.item_id && L(138);
      var b = a.id;
      R(16) &&
        (null != a.item_id ? (b = a.item_id) : null == b && (b = a.item_name));
      return b;
    },
    wv = function (a) {
      if (!a) return "";
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = [];
        d &&
          (e.push(vv(d.value)),
          e.push(vv(d.quantity)),
          e.push(vv(d.item_id)),
          e.push(vv(d.start_date)),
          e.push(vv(d.end_date)),
          b.push("(" + e.join("*") + ")"));
      }
      return 0 < b.length ? b.join("") : "";
    },
    vv = function (a) {
      return "number" !== typeof a && "string" !== typeof a ? "" : a.toString();
    },
    yv = function (a, b) {
      var c = xv(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    xv = function (a) {
      if (!a || "object" !== typeof a || "function" === typeof a.join)
        return "";
      var b = [];
      rb(a, function (c, d) {
        var e, f;
        if (Array.isArray(d)) {
          for (var g = [], h = 0; h < d.length; ++h) {
            var m = zv(d[h]);
            void 0 != m && g.push(m);
          }
          f = 0 !== g.length ? g.join(",") : void 0;
        } else f = zv(d);
        e = f;
        var n = zv(c);
        n && void 0 != e && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    zv = function (a) {
      var b = typeof a;
      if (null != a && "object" !== b && "function" !== b)
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    Av = function (a, b) {
      var c = [],
        d = function (f, g) {
          var h = !0 === tg[f];
          null == g ||
            (!h && "" === g) ||
            (!0 === g && (g = 1),
            !1 === g && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      ("conversion" !== e && "remarketing" !== e) ||
        d("random", a.metadata.event_start_timestamp_ms);
      rb(b, d);
      return c.join("&");
    },
    Bv = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.h[M.g.Vc],
        e = U(R(48) ? [M.g.J, M.g.N] : [M.g.J]),
        f = [],
        g,
        h = a.m.onSuccess,
        m,
        n = Wn() ? 2 : 3,
        p = 0,
        q = function (x) {
          f.push(x);
          x.Ia && p++;
        };
      switch (c) {
        case "conversion":
          m = "/pagead/conversion";
          var r = "";
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com"), (m = "/pagead/1p-conversion"))
              : (g = "https://www.googleadservices.com")
            : (g = "https://pagead2.googlesyndication.com");
          a.metadata.is_gcp_conversion &&
            (r = "&gcp=1&sscte=1&ct_cookie_present=1");
          var t = {
            Ga: "" + Rj(g, !0) + m + "/" + d + "/?" + Av(a, b) + r,
            format: n,
            Ia: !0,
          };
          if (!R(48) || U(M.g.N)) t.attributes = { attributionsrc: "" };
          q(t);
          a.metadata.send_ccm_parallel_ping &&
            q({
              Ga: "" + Rj(g, !0) + "/ccm/conversion/" + d + "/?" + Av(a, b) + r,
              format: 2,
              Ia: !0,
            });
          a.metadata.is_gcp_conversion &&
            ((r = "&gcp=1&ct_cookie_present=1"),
            q({
              Ga:
                "" +
                Rj(e ? "https://googleads.g.doubleclick.net" : g) +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Av(a, b) +
                r,
              format: n,
              Ia: !0,
            }));
          break;
        case "remarketing":
          var u = b.data || "",
            v = rv(tv(a.h[M.g.Z]));
          if (v.length) {
            for (var w = 0; w < v.length; w++)
              (b.data = yv(u, v[w])),
                q({
                  Ga:
                    "" +
                    Rj("https://googleads.g.doubleclick.net") +
                    "/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    Av(a, b),
                  format: n,
                  Ia: !0,
                }),
                a.metadata.send_fledge_experiment &&
                  q({
                    Ga: "" + Et() + "/td/rul/" + d + "?" + Av(a, b),
                    format: 4,
                    Ia: !1,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            q({
              Ga:
                "" +
                Rj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Av(a, b),
              format: n,
              Ia: !0,
            });
          break;
        case "user_data_lead":
          q({
            Ga:
              "" +
              Rj("https://google.com") +
              "/pagead/form-data/" +
              d +
              "?" +
              Av(a, b),
            format: 1,
            Ia: !0,
          });
          break;
        case "user_data_web":
          q({
            Ga:
              "" +
              Rj("https://google.com") +
              "/ccm/form-data/" +
              d +
              "?" +
              Av(a, b),
            format: 1,
            Ia: !0,
          });
      }
      1 < f.length && kb(a.m.onSuccess) && (h = Ib(a.m.onSuccess, p));
      Wn() ||
        ("conversion" !== c && "remarketing" !== c) ||
        !a.metadata.send_fledge_experiment ||
        (R(25) && "conversion" === c && (b.ct_cookie_present = 0),
        q({
          Ga: "" + Et() + "/td/rul/" + d + "?" + Av(a, b),
          format: 4,
          Ia: !1,
        }));
      return { onSuccess: h, jm: f };
    },
    Cv = function (a, b, c, d, e, f) {
      hv(c.m.eventId, c.eventName);
      var g = function () {
        e && e();
      };
      switch (b) {
        case 1:
          Yc(a);
          e && e();
          break;
        case 2:
          Rc(a, g, void 0, f);
          break;
        case 3:
          var h = !1;
          try {
            h = qv(a, g, f);
          } catch (p) {
            h = !1;
          }
          h || Cv(a, 2, c, d, g, f);
          break;
        case 4:
          var m = "AW-" + c.h[M.g.Vc],
            n = c.h[M.g.ob];
          n && (m = m + "/" + n);
          Dt(a, m);
      }
    },
    Dv = {},
    Ev =
      ((Dv[M.g.kc] = "gcu"),
      (Dv[M.g.kb] = "gclgb"),
      (Dv[M.g.Ta] = "gclaw"),
      (Dv[M.g.Eb] = "auid"),
      (Dv[M.g.Hd] = "dscnt"),
      (Dv[M.g.Id] = "fcntr"),
      (Dv[M.g.Jd] = "flng"),
      (Dv[M.g.Kd] = "mid"),
      (Dv[M.g.sg] = "bttype"),
      (Dv[M.g.ob] = "label"),
      (Dv[M.g.Pb] = "capi"),
      (Dv[M.g.df] = "pscdl"),
      (Dv[M.g.Aa] = "currency_code"),
      (Dv[M.g.Ld] = "vdltv"),
      (Dv[M.g.Li] = "_dbg"),
      (Dv[M.g.Rd] = "oedeld"),
      (Dv[M.g.pb] = "edid"),
      (Dv[M.g.Qi] = "fdr"),
      (Dv[M.g.zg] = "fledge"),
      (Dv[M.g.Wd] = "gac"),
      (Dv[M.g.yc] = "gacgb"),
      (Dv[M.g.Eg] = "gacmcov"),
      (Dv[M.g.zc] = "gdpr"),
      (Dv[M.g.sb] = "gdid"),
      (Dv[M.g.Ig] = "gsaexp"),
      (Dv[M.g.Yd] = "frm"),
      (Dv[M.g.Zd] = "gtm_up"),
      (Dv[M.g.dd] = "lps"),
      (Dv[M.g.ae] = "did"),
      (Dv[M.g.ed] = void 0),
      (Dv[M.g.Hb] = "tiba"),
      (Dv[M.g.Ub] = "rdp"),
      (Dv[M.g.ub] = "ecsid"),
      (Dv[M.g.kd] = "delopc"),
      (Dv[M.g.Ac] = "gdpr_consent"),
      (Dv[M.g.Ba] = "oid"),
      (Dv[M.g.vf] = "uaa"),
      (Dv[M.g.wf] = "uab"),
      (Dv[M.g.xf] = "uafvl"),
      (Dv[M.g.yf] = "uamb"),
      (Dv[M.g.zf] = "uam"),
      (Dv[M.g.Af] = "uap"),
      (Dv[M.g.Bf] = "uapv"),
      (Dv[M.g.Cf] = "uaw"),
      (Dv[M.g.Sg] = "ec_lat"),
      (Dv[M.g.Tg] = "ec_meta"),
      (Dv[M.g.Ug] = "ec_m"),
      (Dv[M.g.Vg] = "ec_sel"),
      (Dv[M.g.Wg] = "ec_s"),
      (Dv[M.g.ee] = "ec_mode"),
      (Dv[M.g.Qa] = "userId"),
      (Dv[M.g.he] = "us_privacy"),
      (Dv[M.g.la] = "value"),
      (Dv[M.g.Xg] = "mcov"),
      (Dv[M.g.lj] = "hn"),
      (Dv[M.g.mj] = "gtm_ee"),
      (Dv[M.g.Lb] = "npa"),
      (Dv[M.g.Vc] = null),
      (Dv[M.g.Ib] = null),
      (Dv[M.g.Pa] = null),
      (Dv[M.g.Z] = null),
      (Dv[M.g.wa] = null),
      (Dv[M.g.Ea] = null),
      (Dv[M.g.tf] = null),
      Dv),
    Gv = function (a) {
      "page_view" === a.metadata.hit_type
        ? vu(a)
        : Fv(a, function (b, c) {
            for (
              var d = Bv(a, b), e = d.onSuccess, f = d.jm, g = {}, h = 0;
              h < f.length;
              g = { Ga: void 0, vh: void 0, Ia: void 0, hh: void 0 }, h++
            ) {
              var m = f[h];
              g.Ga = m.Ga;
              g.vh = m.format;
              g.Ia = m.Ia;
              g.hh = m.attributes;
              if (c && c.Kj) {
                var n = c.Kj,
                  p = n.Xf,
                  q = n.X,
                  r = g.Ga + "&em=" + p;
                R(70) && (r = r + "&eme=${" + p + "|encrypt}");
                et(
                  r,
                  { userData: q },
                  g.Ia && e ? e : function () {},
                  (function (t) {
                    return function (u) {
                      ei(c.Lm, function (v) {
                        var w = hi(v),
                          x = t.Ga;
                        u && (x = t.Ga.replace("_is_sw=0", u));
                        Cv(
                          x + "&em=" + encodeURIComponent(w.Xf),
                          t.vh,
                          a,
                          b,
                          t.Ia ? e : void 0,
                          t.hh
                        );
                      });
                    };
                  })(g)
                );
              } else Cv(g.Ga, g.vh, a, b, g.Ia ? e : void 0, g.hh);
            }
          });
    },
    Fv = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f,
        g = [],
        h = a.metadata.event_start_timestamp_ms;
      if ("conversion" === c || "remarketing" === c)
        (d.cv = "11"),
          (d.fst = h),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1");
      var m = aq(["aw", "dc"]);
      null != m && (d.gad_source = m);
      d.gtm = Yn(a.metadata.source_canonical_id);
      "remarketing" !== c && Cn() && (d.gcs = Dn());
      d.gcd = Rn(a.m);
      Un() && (d.dma_cps = Sn());
      d.dma = Tn();
      fn(on()) && (d.tcfd = Vn());
      Ui.h && (d.tag_exp = Ui.h);
      if (a.h[M.g.Ib]) {
        var n = a.h[M.g.Ib].split("x");
        2 === n.length && ((d.u_w = n[0]), (d.u_h = n[1]));
      }
      if (a.h[M.g.Pa]) {
        var p = a.h[M.g.Pa];
        2 === p.length
          ? (d.hl = p)
          : 5 === p.length &&
            ((d.hl = p.substring(0, 2)), (d.gl = p.substring(3, 5)));
      }
      var q = a.metadata.redact_click_ids,
        r = function (C, G) {
          var O = a.h[G];
          O && (d[C] = q ? Kj(O) : O);
        };
      r("url", M.g.wa);
      r("ref", M.g.Ea);
      r("top", M.g.tf);
      rb(a.h, function (C, G) {
        if (Ev.hasOwnProperty(C)) {
          var O = Ev[C];
          O && (d[O] = G);
        } else e[C] = G;
      });
      var t = a.h[M.g.ed];
      void 0 != t && "" !== t && (d.vdnc = String(t));
      var u = a.h[M.g.Zc];
      void 0 !== u && (d.shf = u);
      var v = a.h[M.g.wc];
      void 0 !== v && (d.delc = v);
      if (R(20) && a.metadata.add_tag_timing) {
        d.tft = yb();
        var w = cd();
        void 0 !== w && (d.tfd = Math.round(w));
      }
      d.data = xv(e);
      var x = a.h[M.g.Z];
      x && "conversion" === c && ((d.iedeld = hr(x)), (d.item = wv(uv(x))));
      if (
        ("conversion" === c ||
          "user_data_lead" === c ||
          "user_data_web" === c) &&
        a.metadata.user_data
      )
        if ((R(48) && !U(M.g.N)) || (R(15) && !U(M.g.J)))
          R(48) && (d.ec_mode = void 0);
        else {
          var y = function () {
            if ("user_data_web" === c) {
              var C;
              var G = a.metadata.cookie_options;
              G = G || {};
              var O;
              if (U(Dr)) {
                (O = Er(G)) || (O = to());
                var N = G,
                  W = $o(N.prefix);
                bp(N, O);
                delete Yo[W];
                delete Zo[W];
                ap(W, N.path, N.domain);
                C = Er(G);
              } else C = void 0;
              d.ecsid = C;
            }
          };
          if (R(72) && R(82) && !Oj()) {
            d._is_sw = "0";
            var B = fi(a.metadata.user_data),
              A = gt(B);
            f = { Kj: A, Lm: B };
            var E = A.X;
            E && 0 < Object.keys(E).length && y();
          } else {
            var F = ji(a.metadata.user_data);
            F &&
              g.push(
                F.then(function (C) {
                  d.em = C.Uj;
                  0 < C.Th && y();
                })
              );
          }
        }
      if (g.length)
        try {
          Promise.all(g).then(function () {
            b(d);
          });
          return;
        } catch (C) {}
      b(d, f);
    };
  function Hv(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var Jv = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      Iv().addRestriction(0, a, b, c);
    },
    Kv = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      Iv().addRestriction(1, a, b, c);
    },
    Lv = function () {
      var a = gk();
      return Iv().getRestrictions(1, a);
    },
    Mv = function () {
      this.h = {};
      this.s = {};
    },
    Nv = function (a, b) {
      var c = a.h[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.h[b] = c));
      return c;
    };
  Mv.prototype.addRestriction = function (a, b, c, d) {
    d = void 0 === d ? !1 : d;
    if (!d || !this.s[b]) {
      var e = Nv(this, b);
      0 === a
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : 1 === a &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  Mv.prototype.getRestrictions = function (a, b) {
    var c = Nv(this, b);
    if (0 === a) {
      var d, e;
      return [].concat(
        oa(
          (null == c
            ? void 0
            : null == (d = c._entity)
            ? void 0
            : d.internal) || []
        ),
        oa(
          (null == c
            ? void 0
            : null == (e = c._entity)
            ? void 0
            : e.external) || []
        )
      );
    }
    if (1 === a) {
      var f, g;
      return [].concat(
        oa(
          (null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) ||
            []
        ),
        oa(
          (null == c ? void 0 : null == (g = c._event) ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  Mv.prototype.getExternalRestrictions = function (a, b) {
    var c = Nv(this, b),
      d,
      e;
    return 0 === a
      ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) ||
          []
      : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) ||
          [];
  };
  Mv.prototype.removeExternalRestrictions = function (a) {
    var b = Nv(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.s[a] = !0;
  };
  function Iv() {
    var a = Bi.r;
    a || ((a = new Mv()), (Bi.r = a));
    return a;
  }
  var Ov = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Pv = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Qv = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Rv =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    Uv = function (a) {
      var b = aj("gtm.allowlist") || aj("gtm.whitelist");
      b && L(9);
      Hi && (b = ["google", "gtagfl", "lcl", "zone"]);
      Sv() &&
        (Hi
          ? L(116)
          : (L(117),
            Tv &&
              ((b = []),
              window.console &&
                window.console.log &&
                window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Cb(vb(b), Pv),
        d = aj("gtm.blocklist") || aj("gtm.blacklist");
      d || ((d = aj("tagTypeBlacklist")) && L(3));
      d ? L(8) : (d = []);
      Sv() &&
        ((d = vb(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= vb(d).indexOf("google") && L(2);
      var e = d && Cb(vb(d), Qv),
        f = {};
      return function (g) {
        var h = g && g[Ue.ma];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var m = Ri[h] || [],
          n = R(10) ? !0 : a(h, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(h))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      L(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var t = 0 <= e.indexOf(h);
          if (t) r = t;
          else {
            var u = qb(e, m || []);
            u && L(10);
            r = u;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = qb(e, Rv));
        return (f[h] = v);
      };
    },
    Tv = !1;
  Tv = !0;
  var Sv = function () {
      return Ov.test(l.location && l.location.hostname);
    },
    Vv = function () {
      Yj &&
        Jv(gk(), function (a) {
          var b = Ef(a.entityId),
            c;
          if (Jf(b)) {
            var d = b[Ue.ma];
            if (!d) throw "Error: No function name given for function call.";
            var e = wf[d];
            c = !!e && !!e.runInSiloedMode;
          } else c = !!Hv(b[Ue.ma], 4);
          return c;
        });
    };
  var Xv = function (a, b, c, d, e) {
      if (!Wv()) {
        var f = d.siloed ? ak(a) : a;
        if (!pk(f)) {
          var g = "?id=" + encodeURIComponent(a) + "&l=" + Ai.ja,
            h = 0 === a.indexOf("GTM-");
          h || (g += "&cx=c");
          R(65) && (g += "&gtm=" + Yn());
          var m = Pj();
          m && (g += "&sign=" + Ai.Jf);
          var n = c ? "/gtag/js" : "/gtm.js",
            p = Oj() ? Nj(b, n + g) : void 0;
          if (!p) {
            var q = Ai.Ed + n;
            m && Ic && h
              ? ((q = Ic.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (p = mr("https://", "http://", q + g)))
              : (p = Ui.s ? Vi() + n + g : mr("https://", "http://", q + g));
          }
          d.siloed && rk({ ctid: f, isDestination: !1 });
          var r = ik();
          Uj().container[f] = { state: 1, context: d, parent: r };
          Vj({ ctid: f, isDestination: !1 }, e);
          Oc(p);
        }
      }
    },
    Yv = function (a, b, c, d) {
      if (!Wv()) {
        var e = c.siloed ? ak(a) : a;
        if (!qk(e))
          if (!c.siloed && sk())
            (Uj().destination[e] = {
              state: 0,
              transportUrl: b,
              context: c,
              parent: ik(),
            }),
              Vj({ ctid: e, isDestination: !0 }, d),
              L(91);
          else {
            var f =
              "/gtag/destination?id=" +
              encodeURIComponent(a) +
              "&l=" +
              Ai.ja +
              "&cx=c";
            R(65) && (f += "&gtm=" + Yn());
            Pj() && (f += "&sign=" + Ai.Jf);
            var g = Oj() ? Nj(b, f) : void 0;
            g || (g = Ui.s ? Vi() + f : mr("https://", "http://", Ai.Ed + f));
            c.siloed && rk({ ctid: e, isDestination: !0 });
            Uj().destination[e] = { state: 1, context: c, parent: ik() };
            Vj({ ctid: e, isDestination: !0 }, d);
            Oc(g);
          }
      }
    };
  function Wv() {
    if (Wn()) {
      return !0;
    }
    return !1;
  }
  var Zv = !1,
    $v = 0,
    aw = [];
  function bw(a) {
    if (!Zv) {
      var b = z.createEventObject,
        c = "complete" == z.readyState,
        d = "interactive" == z.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Zv = !0;
        for (var e = 0; e < aw.length; e++) D(aw[e]);
      }
      aw.push = function () {
        for (var f = 0; f < arguments.length; f++) D(arguments[f]);
        return 0;
      };
    }
  }
  function cw() {
    if (!Zv && 140 > $v) {
      $v++;
      try {
        z.documentElement.doScroll("left"), bw();
      } catch (a) {
        l.setTimeout(cw, 50);
      }
    }
  }
  var dw = function (a) {
    Zv ? a() : aw.push(a);
  };
  var fw = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: fk(),
    };
  };
  var hw = function (a, b) {
      this.h = !1;
      this.F = [];
      this.M = { tags: [] };
      this.T = !1;
      this.s = this.C = 0;
      gw(this, a, b);
    },
    iw = function (a, b, c, d) {
      if (Ei.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Ta(d) && (e = Ua(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    jw = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    kw = function (a) {
      if (!a.h) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.F.length = 0;
      }
    },
    gw = function (a, b, c) {
      void 0 !== b && a.Lf(b);
      c &&
        l.setTimeout(function () {
          return kw(a);
        }, Number(c));
    };
  hw.prototype.Lf = function (a) {
    var b = this,
      c = Ab(function () {
        return D(function () {
          a(fk(), b.M);
        });
      });
    this.h ? c() : this.F.push(c);
  };
  var lw = function (a) {
      a.C++;
      return Ab(function () {
        a.s++;
        a.T && a.s >= a.C && kw(a);
      });
    },
    mw = function (a) {
      a.T = !0;
      a.s >= a.C && kw(a);
    };
  var nw = {},
    pw = function () {
      return l[ow()];
    },
    qw = !1;
  function ow() {
    return l.GoogleAnalyticsObject || "ga";
  }
  var tw = function (a) {},
    uw = function (a, b) {
      return function () {
        var c = pw(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var zw = ["es", "1"],
    Aw = {},
    Bw = {};
  function Cw(a, b) {
    if (Ck) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Aw[a] = [
        ["e", c],
        ["eid", a],
      ];
      Nk(a);
    }
  }
  function Dw(a) {
    var b = a.eventId,
      c = a.Bb;
    if (!Aw[b]) return [];
    var d = [];
    Bw[b] || d.push(zw);
    d.push.apply(d, oa(Aw[b]));
    c && (Bw[b] = !0);
    return d;
  }
  var Ew = {},
    Fw = {},
    Gw = {};
  function Hw(a, b, c, d) {
    Ck &&
      R(75) &&
      ((void 0 === d ? 0 : d)
        ? ((Gw[b] = Gw[b] || 0), ++Gw[b])
        : void 0 !== c
        ? ((Fw[a] = Fw[a] || {}), (Fw[a][b] = Math.round(c)))
        : ((Ew[a] = Ew[a] || {}), (Ew[a][b] = (Ew[a][b] || 0) + 1)));
  }
  function Iw(a) {
    var b = a.eventId,
      c = a.Bb,
      d = Ew[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Ew[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function Jw(a) {
    var b = a.eventId,
      c = a.Bb,
      d = Fw[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Fw[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function Kw() {
    for (
      var a = [], b = ma(Object.keys(Gw)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + Gw[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var Lw = {},
    Mw = {};
  function Nw(a, b, c) {
    if (Ck && b) {
      var d = Sj(b);
      Lw[a] = Lw[a] || [];
      Lw[a].push(c + d);
      var e = (Jf(b) ? "1" : "2") + d;
      Mw[a] = Mw[a] || [];
      Mw[a].push(e);
      Nk(a);
    }
  }
  function Ow(a) {
    var b = a.eventId,
      c = a.Bb,
      d = [],
      e = Lw[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = Mw[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete Lw[b], delete Mw[b]);
    return d;
  }
  function Pw(a, b, c, d) {
    var e = uf[a],
      f = Qw(a, b, c, d);
    if (!f) return null;
    var g = Gf(e[Ue.wj], c, []);
    if (g && g.length) {
      var h = g[0];
      f = Pw(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.Lj ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function Qw(a, b, c, d) {
    function e() {
      if (f[Ue.Vk]) h();
      else {
        var w = Hf(f, c, []),
          x = w[Ue.tk];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!U(x[y])) {
              h();
              return;
            }
        var B = iw(c.bc, String(f[Ue.ma]), Number(f[Ue.pe]), w[Ue.Wk]),
          A = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!A) {
            A = !0;
            var C = yb() - F;
            Nw(c.id, uf[a], "5");
            jw(c.bc, B, "success", C);
            R(66) && nv(c, f, xu.H.zj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!A) {
            A = !0;
            var C = yb() - F;
            Nw(c.id, uf[a], "6");
            jw(c.bc, B, "failure", C);
            R(66) && nv(c, f, xu.H.yj);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Nw(c.id, f, "1");
        var E = function () {
          mj(3);
          var C = yb() - F;
          Nw(c.id, f, "7");
          jw(c.bc, B, "exception", C);
          R(66) && nv(c, f, xu.H.xj);
          A || ((A = !0), h());
        };
        R(66) && mv(c, f);
        var F = yb();
        try {
          Ff(w, { event: c, index: a, type: 1 });
        } catch (C) {
          E(C);
        }
        R(66) && nv(c, f, xu.H.Aj);
      }
    }
    var f = uf[a],
      g = b.onSuccess,
      h = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = Gf(f[Ue.Bj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Pw(p.index, { onSuccess: g, onFailure: h, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.Lj ? m : q;
    }
    if (f[Ue.rj] || f[Ue.Yk]) {
      var r = f[Ue.rj] ? vf : c.qn,
        t = g,
        u = h;
      if (!r[a]) {
        e = Ab(e);
        var v = Rw(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Rw(a, b, c) {
    var d = [],
      e = [];
    b[a] = Sw(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Tw;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Uw;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Sw(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Tw(a) {
    a();
  }
  function Uw(a, b) {
    b();
  }
  var wx = function (a, b) {
      return 1 === arguments.length ? qx("set", a) : qx("set", a, b);
    },
    xx = function (a, b) {
      return 1 === arguments.length ? qx("config", a) : qx("config", a, b);
    },
    yx = function (a, b, c) {
      c = c || {};
      c[M.g.Vb] = a;
      return qx("event", b, c);
    };
  function qx(a) {
    return arguments;
  }
  var zx = function () {
    this.h = [];
    this.s = [];
  };
  zx.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.h.push(f);
    for (var g = 0; g < this.s.length; g++)
      try {
        this.s[g](f);
      } catch (h) {}
  };
  zx.prototype.listen = function (a) {
    this.s.push(a);
  };
  zx.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  zx.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Bx = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = bg.canonicalContainerId;
      Ax().enqueue(a, b, c);
    },
    Dx = function () {
      var a = Cx;
      Ax().listen(a);
    };
  function Ax() {
    var a = Bi.mb;
    a || ((a = new zx()), (Bi.mb = a));
    return a;
  }
  var Fx = function () {
      var a = Bi.zones;
      a || (a = Bi.zones = new Ex());
      return a;
    },
    Gx = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    Hx = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    Ex = function () {
      this.h = {};
      this.s = {};
      this.C = 0;
    };
  aa = Ex.prototype;
  aa.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.Rh], b)) return !1;
    for (var e = 0; e < c.Xe.length; e++) if (this.s[c.Xe[e]].sd(b)) return !0;
    return !1;
  };
  aa.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Xe.length; f++) {
      var g = this.s[c.Xe[f]];
      g.sd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var h = this.getIsAllowedFn([c.Rh], b);
    return function (m, n) {
      n = n || [];
      if (!h(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].C(m, n)) return !0;
      return !1;
    };
  };
  aa.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.h[a[b]];
  };
  aa.createZone = function (a, b) {
    var c = String(++this.C);
    this.s[c] = new Ix(a, b);
    return c;
  };
  aa.updateZone = function (a, b, c) {
    var d = this.s[a];
    d && d.F(b, c);
  };
  aa.registerChild = function (a, b, c) {
    var d = this.h[a];
    if ((!d && Bi[a]) || (!d && pk(a)) || (d && d.Rh !== b)) return !1;
    if (d) return d.Xe.push(c), !1;
    this.h[a] = { Rh: b, Xe: [c] };
    return !0;
  };
  var Ix = function (a, b) {
    this.h = [{ eventId: a, sd: !0 }];
    this.s = null;
    if (b) {
      this.s = {};
      for (var c = 0; c < b.length; c++) this.s[b[c]] = !0;
    }
  };
  Ix.prototype.F = function (a, b) {
    var c = this.h[this.h.length - 1];
    a <= c.eventId || (c.sd !== b && this.h.push({ eventId: a, sd: b }));
  };
  Ix.prototype.sd = function (a) {
    for (var b = this.h.length - 1; 0 <= b; b--)
      if (this.h[b].eventId <= a) return this.h[b].sd;
    return !1;
  };
  Ix.prototype.C = function (a, b) {
    b = b || [];
    if (!this.s || Gx[a] || this.s[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.s[b[c]]) return !0;
    return !1;
  };
  var Jx = function (a, b, c, d, e, f) {
      var g = Fx();
      c = c && Cb(c, Hx);
      for (var h = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, fk(), h)) {
          var p = n,
            q = a,
            r = d,
            t = e,
            u = f;
          if (0 === p.indexOf("GTM-"))
            Xv(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var v = qx("js", xb());
            Xv(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: t, inheritParentConfig: u };
            R(93) || Bx(v, q, w);
            Bx(xx(p, r), q, w);
          }
        }
      }
      return h;
    },
    Kx = function (a, b, c) {
      Fx().updateZone(a, b, c);
    };
  var Lx = function (a) {
      var b = Bi.zones;
      return b
        ? b.getIsAllowedFn(bk(), a)
        : function () {
            return !0;
          };
    },
    Mx = function () {
      Kv(gk(), function (a) {
        var b = a.originalEventData["gtm.uniqueEventId"],
          c = Bi.zones;
        return c ? c.isActive(bk(), b) : !0;
      });
      Jv(gk(), function (a) {
        var b = a.entityId,
          c = a.securityGroups;
        return Lx(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
      });
    };
  var Px = function (a, b) {
    for (var c = [], d = 0; d < uf.length; d++)
      if (a[d]) {
        var e = uf[d];
        var f = lw(b.bc);
        try {
          var g = Pw(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = e[Ue.ma];
            if (!h) throw "Error: No function name given for function call.";
            var m = wf[h];
            c.push({
              jk: d,
              Yj: (m ? m.priorityOverride || 0 : 0) || Hv(e[Ue.ma], 1) || 0,
              execute: g,
            });
          } else Nx(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(Ox);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Ox(a, b) {
    var c,
      d = b.Yj,
      e = a.Yj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.jk,
        h = b.jk;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function Nx(a, b) {
    if (Ck) {
      var c = function (d) {
        var e = b.isBlocked(uf[d]) ? "3" : "4",
          f = Gf(uf[d][Ue.wj], b, []);
        f && f.length && c(f[0].index);
        Nw(b.id, uf[d], e);
        var g = Gf(uf[d][Ue.Bj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Sx = !1,
    Qx;
  var Yx = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (R(66)) {
    }
    if ("gtm.js" === d) {
      if (Sx) return !1;
      Sx = !0;
    }
    var e,
      f = !1,
      g = Lv(),
      h = Ua(a);
    if (
      g.every(function (u) {
        return u({ originalEventData: h });
      })
    )
      e = Lx(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      f = !0;
      e = Lx(Number.MAX_SAFE_INTEGER);
    }
    Cw(b, d);
    var m = a.eventCallback,
      n = a.eventTimeout,
      p = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Ux(e, h, f),
        qn: [],
        logMacroError: function () {
          L(6);
          mj(0);
        },
        cachedModelValues: Vx(),
        bc: new hw(function () {
          if (R(66)) {
          }
          m && m.apply(m, [].slice.call(arguments, 0));
        }, n),
        originalEventData: h,
      };
    R(75) && Ck && (p.reportMacroDiscrepancy = Hw);
    R(66) && iv(p.id, p.name);
    var q = Sf(p);
    R(66) && jv(p.id, p.name);
    f && (q = Wx(q));
    if (R(66)) {
    }
    var r = Px(q, p),
      t = !1;
    mw(p.bc);
    ("gtm.js" !== d && "gtm.sync" !== d) || tw(fk());
    return Xx(q, r) || t;
  };
  function Vx() {
    var a = {};
    a.event = fj("event", 1);
    a.ecommerce = fj("ecommerce", 1);
    a.gtm = fj("gtm");
    a.eventModel = fj("eventModel");
    return a;
  }
  function Ux(a, b, c) {
    var d = Uv(a);
    return function (e) {
      if (d(e)) return !0;
      var f = e && e[Ue.ma];
      if (!f || "string" != typeof f) return !0;
      f = f.replace(/^_*/, "");
      var g,
        h = gk();
      g = Iv().getRestrictions(0, h);
      var m = b;
      c && ((m = Ua(b)), (m["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (
        var n = Ri[f] || [], p = ma(g), q = p.next();
        !q.done;
        q = p.next()
      ) {
        var r = q.value;
        try {
          if (!r({ entityId: f, securityGroups: n, originalEventData: m }))
            return !0;
        } catch (t) {
          return !0;
        }
      }
      return !1;
    };
  }
  function Wx(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(uf[c][Ue.ma]);
        if (Di[d] || void 0 !== uf[c][Ue.Zk] || Hv(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Xx(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && uf[c] && !Ei[String(uf[c][Ue.ma])]) return !0;
    return !1;
  }
  var Vf;
  var Zx = {},
    $x = {},
    ay = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { Sh: void 0, zh: void 0 }, f++
      ) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (((e.Sh = Pl(g, b)), e.Sh)) {
            var h = dk();
            nb(
              h,
              (function (r) {
                return function (t) {
                  return r.Sh.fa === t;
                };
              })(e)
            )
              ? c.push(g)
              : d.push(g);
          }
        } else {
          var m = Zx[g] || [];
          e.zh = {};
          m.forEach(
            (function (r) {
              return function (t) {
                return (r.zh[t] = !0);
              };
            })(e)
          );
          for (var n = bk(), p = 0; p < n.length; p++)
            if (e.zh[n[p]]) {
              c = c.concat(dk());
              break;
            }
          var q = $x[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { Gm: c, Km: d };
    },
    by = function (a) {
      rb(Zx, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    cy = function (a) {
      rb($x, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var dy = "HA GF G UA AW DC MC".split(" "),
    ey = !1,
    fy = !1,
    gy = !1,
    hy = !1;
  function iy(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Si() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var jy = void 0,
    ky = void 0;
  function ly(a, b, c) {
    var d = Ua(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && L(136);
    var e = Ua(b);
    Ua(c, e);
    Bx(xx(bk()[0], e), a.eventId, d);
  }
  function my(a) {
    for (var b = ma([M.g.hd, M.g.Jb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || wm.C[d];
      if (e) return e;
    }
  }
  var ny = [
      M.g.hd,
      M.g.Jb,
      M.g.xc,
      M.g.nb,
      M.g.ub,
      M.g.Qa,
      M.g.sa,
      M.g.Oa,
      M.g.Ua,
      M.g.Qb,
    ],
    oy = {
      config: function (a, b) {
        var c = iy(a, b);
        if (!(2 > a.length) && k(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Ta(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = Pl(a[1], b.isGtmEvent);
          if (e) {
            var f, g, h;
            a: {
              if (!Xj.je) {
                var m = hk(ik());
                if (uk(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  h = { Qm: hk(n), Fm: p };
                  break a;
                }
              }
              h = void 0;
            }
            var q = h;
            q && ((f = q.Qm), (g = q.Fm));
            Cw(c.eventId, "gtag.config");
            var r = e.fa,
              t = e.id !== r;
            if (t ? -1 === dk().indexOf(r) : -1 === bk().indexOf(r)) {
              if (!b.inheritParentConfig && !d[M.g.Gb]) {
                var u = my(d);
                if (t)
                  Yv(r, u, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (void 0 !== f && -1 !== f.containers.indexOf(r)) {
                  var v = d;
                  jy ? ly(b, v, jy) : ky || (ky = Ua(v));
                } else
                  Xv(r, u, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (L(128), g && L(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                ky
                  ? (ly(b, ky, x), (w = !1))
                  : ((!x[M.g.Wb] && Gi && jy) || (jy = Ua(x)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (R(39) && !gy && ((gy = !0), fy))
                for (var B = ma(ny), A = B.next(); !A.done; A = B.next())
                  if (y.hasOwnProperty(A.value)) {
                    Yk("erc");
                    break;
                  }
              if (Gi && !t && !d[M.g.Wb]) {
                var E = hy;
                hy = !0;
                if (E) return;
              }
              ey || L(43);
              if (!b.noTargetGroup)
                if (t) {
                  cy(e.id);
                  var F = e.id,
                    C = d[M.g.Xd] || "default";
                  C = String(C).split(",");
                  for (var G = 0; G < C.length; G++) {
                    var O = $x[C[G]] || [];
                    $x[C[G]] = O;
                    0 > O.indexOf(F) && O.push(F);
                  }
                } else {
                  by(e.id);
                  var N = e.id,
                    W = d[M.g.Xd] || "default";
                  W = W.toString().split(",");
                  for (var Z = 0; Z < W.length; Z++) {
                    var Q = Zx[W[Z]] || [];
                    Zx[W[Z]] = Q;
                    0 > Q.indexOf(N) && Q.push(N);
                  }
                }
              delete d[M.g.Xd];
              var T = b.eventMetadata || {};
              T.hasOwnProperty("is_external_event") ||
                (T.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = T;
              delete d[M.g.ad];
              for (var da = t ? [e.id] : dk(), fa = 0; fa < da.length; fa++) {
                var ha = d,
                  Ca = da[fa],
                  Ba = Ua(b),
                  ya = Pl(Ca, Ba.isGtmEvent);
                ya && wm.push("config", [ha], ya, Ba);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          L(39);
          var c = iy(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[M.g.N] && L(139), e[M.g.za] && L(140));
          "default" === d
            ? El(e)
            : "update" === d
            ? Fl(e, c)
            : "declare" === d && b.fromContainerExecution && Dl(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && k(c)) {
          var d;
          if (2 < a.length) {
            if ((!Ta(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = Ua(e)),
            e[M.g.ad] && (g.eventCallback = e[M.g.ad]),
            e[M.g.Ud] && (g.eventTimeout = e[M.g.Ud]));
          var h = iy(a, b),
            m = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[M.g.Vb];
          void 0 === r &&
            ((r = aj(M.g.Vb, 2)), void 0 === r && (r = "default"));
          if (k(r) || Array.isArray(r)) {
            var t;
            t = b.isGtmEvent
              ? k(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var u = ay(t, b.isGtmEvent),
              v = u.Gm,
              w = u.Km;
            if (w.length)
              for (var x = my(q), y = 0; y < w.length; y++) {
                var B = Pl(w[y], b.isGtmEvent);
                B &&
                  Yv(B.fa, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Rl(v, b.isGtmEvent);
          } else p = void 0;
          var A = p;
          if (A) {
            A.length && (fy = !0);
            Cw(m, c);
            for (var E = [], F = 0; F < A.length; F++) {
              var C = A[F],
                G = Ua(b);
              if (-1 !== dy.indexOf(lk(C.prefix))) {
                var O = Ua(d),
                  N = G.eventMetadata || {};
                N.hasOwnProperty("is_external_event") ||
                  (N.is_external_event = !G.fromContainerExecution);
                G.eventMetadata = N;
                delete O[M.g.ad];
                ym(c, O, C.id, G);
              }
              E.push(C.id);
            }
            g.eventModel = g.eventModel || {};
            0 < A.length
              ? (g.eventModel[M.g.Vb] = E.join())
              : delete g.eventModel[M.g.Vb];
            ey || L(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[M.g.Sb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        L(53);
        if (4 === a.length && k(a[1]) && k(a[2]) && kb(a[3])) {
          var c = Pl(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            ey || L(43);
            var f = my();
            if (
              !nb(dk(), function (h) {
                return c.fa === h;
              })
            )
              Yv(c.fa, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== dy.indexOf(lk(c.prefix))) {
              iy(a, b);
              var g = {};
              yl(Ua(((g[M.g.rb] = d), (g[M.g.Fb] = e), g)));
              zm(
                d,
                function (h) {
                  D(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          ey = !0;
          var c = iy(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && k(a[1]) && kb(a[2])) {
          Wf(a[1], a[2]);
          if ((L(74), "all" === a[1])) {
            L(75);
            var b = !1;
            try {
              b = a[2](fk(), "unknown", {});
            } catch (c) {}
            b || L(76);
          }
        } else {
          L(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && Ta(a[1])
          ? (c = Ua(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((c = {}),
            Ta(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = Ua(a[2]))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = iy(a, b),
            e = d.eventId,
            f = d.priorityId;
          Ua(c);
          var g = Ua(c);
          wm.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          R(6) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    py = { policy: !0 };
  var qy = function (a) {
      var b = l[Ai.ja].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    ry = function (a) {
      var b = l[Ai.ja],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var sy = !1,
    ty = [];
  function uy() {
    if (!sy) {
      sy = !0;
      for (var a = 0; a < ty.length; a++) D(ty[a]);
    }
  }
  var vy = function (a) {
    sy ? D(a) : ty.push(a);
  };
  var My = function (a) {
    if (Ly(a)) return a;
    this.h = a;
  };
  My.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Ly = function (a) {
    return !a || "object" !== Ra(a) || Ta(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  My.prototype.getUntrustedMessageValue = My.prototype.getUntrustedMessageValue;
  var Ny = 0,
    Oy = {},
    Py = [],
    Qy = [],
    Ry = !1,
    Sy = !1;
  function Ty(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Uy = function (a) {
      return l[Ai.ja].push(a);
    },
    Vy = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Uy(a);
    },
    Wy = function (a, b) {
      if (!lb(b) || 0 > b) b = 0;
      var c = Bi[Ai.ja],
        d = 0,
        e = !1,
        f = void 0;
      f = l.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (l.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function Xy(a, b) {
    var c = a._clear || b.overwriteModelFields;
    rb(a, function (e, f) {
      "_clear" !== e && (c && dj(e), dj(e, f));
    });
    Oi || (Oi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Si()), (a["gtm.uniqueEventId"] = d), dj("gtm.uniqueEventId", d));
    return Yx(a);
  }
  function Yy(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (sb(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Zy() {
    var a;
    if (Qy.length) a = Qy.shift();
    else if (Py.length) a = Py.shift();
    else return;
    var b;
    var c = a;
    if (Ry || !Yy(c.message)) b = c;
    else {
      Ry = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Si());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      Py.unshift(h, c);
      if (Ck) {
        var m = bg.ctid;
        if (m) {
          var n,
            p = hk(ik());
          n = p && p.context;
          var q,
            r = Ej(l.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = bg.canonicalContainerId,
            w = Xj.je;
          Ck &&
            (Rk || (Rk = q),
            Sk.push(
              m +
                ";" +
                v +
                ";" +
                (t ? 1 : 0) +
                ";" +
                (u || 0) +
                ";" +
                (w ? 1 : 0)
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function $y() {
    for (var a = !1, b; !Sy && (b = Zy()); ) {
      Sy = !0;
      delete Yi.eventModel;
      $i();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Sy = !1;
      else {
        e.fromContainerExecution && ej();
        try {
          if (kb(d))
            try {
              d.call(bj);
            } catch (x) {}
          else if (Array.isArray(d)) {
            var f = d;
            if (k(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                m = f.slice(1),
                n = aj(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, m);
                } catch (x) {}
            }
          } else {
            var p = void 0,
              q = !1;
            if (sb(d)) {
              a: {
                if (d.length && k(d[0])) {
                  var r = oy[d[0]];
                  if (r && (!e.fromContainerExecution || !py[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && "set" === d[0] && !!p.event) && L(101);
            } else p = d;
            if (p) {
              var t = Xy(p, e);
              a = t || a;
              q && t && L(113);
            }
          }
        } finally {
          e.fromContainerExecution && $i(!0);
          var u = d["gtm.uniqueEventId"];
          if ("number" === typeof u) {
            for (var v = Oy[String(u)] || [], w = 0; w < v.length; w++)
              Qy.push(az(v[w]));
            v.length && Qy.sort(Ty);
            delete Oy[String(u)];
            u > Ny && (Ny = u);
          }
          Sy = !1;
        }
      }
    }
    return !a;
  }
  function bz() {
    if (R(66)) {
      var a = cz();
    }
    var b = $y();
    if (R(66)) {
    }
    try {
      qy(fk());
    } catch (c) {}
    return b;
  }
  function Cx(a) {
    if (Ny < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Oy[b] = Oy[b] || [];
      Oy[b].push(a);
    } else
      Qy.push(az(a)),
        Qy.sort(Ty),
        D(function () {
          Sy || $y();
        });
  }
  function az(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var dz = function () {
      function a(f) {
        var g = {};
        if (Ly(f)) {
          var h = f;
          f = Ly(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Jc(Ai.ja, []),
        c = (Bi[Ai.ja] = Bi[Ai.ja] || {});
      !0 === c.pruned && L(83);
      Oy = Ax().get();
      Dx();
      dw(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      vy(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < Bi.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new My(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        Py.push.apply(Py, h);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (L(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return $y() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Py.push.apply(Py, e);
      if (cz()) {
        if (R(66)) {
        }
        D(bz);
      }
    },
    cz = function () {
      var a = !0;
      return a;
    };
  function ez(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = yb();
    return b < c + 3e5 && b > c - 9e5;
  }
  function fz(a) {
    return a && 0 === a.indexOf("pending:") ? ez(a.substr(8)) : !1;
  }
  var Az = function () {};
  var Bz = function () {};
  Bz.prototype.toString = function () {
    return "undefined";
  };
  var Cz = new Bz();
  var Jz = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": bd(a, "className"),
        "gtm.elementId": a["for"] || Uc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || bd(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        bd(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    Kz = function (a) {
      Bi.hasOwnProperty("autoEventsSettings") || (Bi.autoEventsSettings = {});
      var b = Bi.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Lz = function (a, b, c) {
      Kz(a)[b] = c;
    },
    Mz = function (a, b, c, d) {
      var e = Kz(a),
        f = zb(e, b, d);
      e[b] = c(f);
    },
    Nz = function (a, b, c) {
      var d = Kz(a);
      return zb(d, b, c);
    },
    Oz = function (a, b) {
      Nz(a, "init", !1) || (Lz(a, "init", !0), b());
    },
    Pz = function (a) {
      return "string" === typeof a ? a : String(Si());
    };
  var Qz = ["input", "select", "textarea"],
    Rz = ["button", "hidden", "image", "reset", "submit"],
    Sz = function (a) {
      var b = a.tagName.toLowerCase();
      return 0 > Qz.indexOf(b) ||
        ("input" === b && 0 <= Rz.indexOf(a.type.toLowerCase()))
        ? !1
        : !0;
    },
    Tz = function (a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : z.getElementById(a.form)
        : Xc(a, ["form"], 100);
    },
    Uz = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (Sz(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  var jA = l.clearTimeout,
    kA = l.setTimeout,
    lA = function (a, b, c, d) {
      if (Wn()) {
        b && D(b);
      } else return Oc(a, b, c, d);
    },
    mA = function () {
      return new Date();
    },
    nA = function () {
      return l.location.href;
    },
    oA = function (a) {
      return Aj(Ej(a), "fragment");
    },
    pA = function (a) {
      return Bj(Ej(a));
    },
    qA = function (a, b) {
      return aj(a, b || 2);
    },
    rA = function (a, b, c) {
      return b ? Vy(a, b, c) : Uy(a);
    },
    sA = function (a, b) {
      l[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === l[a] || (c && !l[a])) && (l[a] = b);
      return l[a];
    },
    tA = function (a, b, c) {
      return co(a, b, void 0 === c ? !0 : !!c);
    },
    uA = function (a, b, c) {
      return 0 === mo(a, b, c);
    },
    vA = function (a, b) {
      if (Wn()) {
        b && D(b);
      } else Qc(a, b);
    },
    wA = function (a) {
      return !!Nz(a, "init", !1);
    },
    xA = function (a) {
      Lz(a, "init", !0);
    };

  function UA(a, b) {
    function c(g) {
      var h = Ej(g),
        m = Aj(h, "protocol"),
        n = Aj(h, "host", !0),
        p = Aj(h, "port"),
        q = Aj(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function VA(a) {
    return WA(a) ? 1 : 0;
  }
  function WA(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Ua(a, {});
        Ua({ arg1: c[d], any_of: void 0 }, e);
        if (VA(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return Eg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Ag.length; g++) {
                var h = Ag[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return Bg(b, c);
      case "_eq":
        return Fg(b, c);
      case "_ge":
        return Gg(b, c);
      case "_gt":
        return Ig(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Hg(b, c);
      case "_lt":
        return Jg(b, c);
      case "_re":
        return Dg(b, c, a.ignore_case);
      case "_sw":
        return Kg(b, c);
      case "_um":
        return UA(b, c);
    }
    return !1;
  }
  function XA() {
    var a = [
      ["cv", "6"],
      ["rv", Ai.eh],
      [
        "tc",
        uf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    Ai.ne && a.push(["x", Ai.ne]);
    Ui.h && a.push(["tag_exp", Ui.h]);
    return a;
  }
  function YA() {
    var a = oj();
    return a.length ? [["exp_geo", a]] : [];
  }
  var ZA;
  function $A() {
    try {
      null != ZA || (ZA = new Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (b) {}
    var a;
    return (null == (a = ZA) ? 0 : a.length) ? [["exp_tz", ZA]] : [];
  }
  function aB(a) {
    if (a.scriptSource) {
      var b;
      try {
        b = dd().getEntriesByType("resource");
      } catch (g) {}
      if (b) {
        for (var c = {}, d = 0; d < b.length; ++d) {
          var e = b[d],
            f = e.initiatorType;
          if ("script" === f && e.name === a.scriptSource)
            return { fn: d, gn: c };
          c[f] = 1 + (c[f] || 0);
        }
        L(146);
      } else L(145);
    }
  }
  function bB() {
    if (Ck && R(78)) {
      var a = jk();
      if (!a) L(144);
      else if (a.canonicalContainerId) {
        var b = aB(a);
        if (b) {
          var c = !1;
          xk(function (d) {
            if (c) return [];
            d.Bb && (c = !0);
            d.eg();
            return [
              ["rtg", a.canonicalContainerId],
              ["rlo", b.fn],
              ["slo", b.gn.script || 0],
            ];
          });
        }
      }
    }
  }
  var cB = function () {
      return !1;
    },
    dB = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function eB() {
    var a = fB;
    return function (b, c, d) {
      var e = d && d.event;
      gB(c);
      var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
        g = new Za();
      rb(c, function (r, t) {
        var u = sd(t, void 0, f);
        void 0 === u && void 0 !== t && L(44);
        g.set(r, u);
      });
      a.h.h.F = Pf();
      var h = {
        Gj: fg(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        Lf:
          void 0 !== e
            ? function (r) {
                return e.bc.Lf(r);
              }
            : void 0,
        hc: function () {
          return b;
        },
        log: function () {},
        Kl: { index: d && d.index, type: d && d.type, name: d && d.name },
        dn: !!Hv(b, 3),
        originalEventData: null == e ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (h.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (cB()) {
        var m = dB(),
          n = void 0,
          p = void 0;
        h.hb = {
          ei: [],
          qe: {},
          xb: function (r, t, u) {
            1 === t && (n = r);
            7 === t && (p = u);
            m(r, t, u);
          },
          Lh: zh(),
        };
        h.log = function (r, t) {
          if (n) {
            var u = Array.prototype.slice.call(arguments, 1);
            m(n, 4, { level: r, source: p, message: u });
          }
        };
      }
      var q = Qe(a, h, [b, g]);
      a.h.h.F = void 0;
      q instanceof Da && "return" === q.h && (q = q.s);
      return td(q, void 0, f);
    };
  }
  function gB(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    kb(b) &&
      (a.gtmOnSuccess = function () {
        D(b);
      });
    kb(c) &&
      (a.gtmOnFailure = function () {
        D(c);
      });
  }
  function hB(a, b) {
    var c = this;
  }
  hB.P = "addConsentListener";
  var iB;
  var jB = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (iB)
        try {
          a[b]();
        } catch (c) {
          L(77);
        }
      else a[b]();
  };
  function kB(a, b, c) {
    var d = this,
      e;
    return e;
  }
  kB.D = "internal.addDataLayerEventListener";
  function lB(a, b, c) {}
  lB.P = "addDocumentEventListener";
  function mB(a, b, c, d) {}
  mB.P = "addElementEventListener";
  function nB(a) {
    return a.h.h;
  }
  function oB(a) {}
  oB.P = "addEventCallback";
  function sB(a) {}
  sB.D = "internal.addFormAbandonmentListener";
  function tB(a, b, c, d) {}
  tB.D = "internal.addFormData";
  var uB = {},
    vB = [],
    wB = {},
    xB = 0,
    yB = 0;
  function FB(a, b) {}
  FB.D = "internal.addFormInteractionListener";
  function MB(a, b) {}
  MB.D = "internal.addFormSubmitListener";
  function RB(a) {}
  RB.D = "internal.addGaSendListener";
  function SB(a) {
    if (!a) return {};
    var b = a.Kl;
    return fw(b.type, b.index, b.name);
  }
  function TB(a) {
    return a ? { originatingEntity: SB(a) } : {};
  }
  var UB = function (a, b) {
    this.tagId = a;
    this.te = b;
  };
  function VB(a, b) {
    var c = this,
      d;
    var e = function (v) {
      Jv(
        v,
        function (w) {
          for (
            var x = Iv().getExternalRestrictions(0, gk()),
              y = ma(x),
              B = y.next();
            !B.done;
            B = y.next()
          ) {
            var A = B.value;
            if (!A(w)) return !1;
          }
          return !0;
        },
        !0
      );
      Kv(
        v,
        function (w) {
          for (
            var x = Iv().getExternalRestrictions(1, gk()),
              y = ma(x),
              B = y.next();
            !B.done;
            B = y.next()
          ) {
            var A = B.value;
            if (!A(w)) return !1;
          }
          return !0;
        },
        !0
      );
      h && h(new UB(a, v));
    };
    J(I(this), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = td(b, this.h, 1) || {},
      g = f.firstPartyUrl,
      h = f.onLoad,
      m = !0 === f.loadByDestination,
      n = !0 === f.isGtmEvent,
      p = !0 === f.siloed;
    jB([
      function () {
        return K(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (qk(a)) return;
    } else if (pk(a)) return;
    var q = 6,
      r = nB(this);
    n && (q = 7);
    "__zone" === r.hc() && (q = 1);
    var t = { source: q, fromContainerExecution: !0, siloed: p };
    if (m) Yv(a, g, t, e);
    else {
      var u = 0 === a.indexOf("GTM-");
      Xv(a, g, !u, t, e);
    }
    h &&
      "__zone" === r.hc() &&
      Jx(Number.MIN_SAFE_INTEGER, [a], null, {}, SB(nB(this)));
    d = p ? ak(a) : a;
    return d;
  }
  VB.D = "internal.loadGoogleTag";
  function WB(a) {
    return new kd("", function (b) {
      var c = H(this, b);
      if (c instanceof kd)
        return new kd("", function () {
          var d = xa.apply(0, arguments),
            e = this,
            f = Ua(nB(this));
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return H(e, m);
            }),
            h = Ia(this.h);
          h.h = f;
          return c.h.apply(c, [h].concat(oa(g)));
        });
    });
  }
  function XB(a, b, c) {
    var d = this;
  }
  XB.D = "internal.addGoogleTagRestriction";
  var YB = {},
    ZB = [];
  var fC = function (a, b) {};
  fC.D = "internal.addHistoryChangeListener";
  function gC(a, b, c) {}
  gC.P = "addWindowEventListener";
  function hC(a, b) {
    return !0;
  }
  hC.P = "aliasInWindow";
  function iC(a, b, c) {}
  iC.D = "internal.appendRemoteConfigParameter";
  function jC() {
    var a = 2;
    return a;
  }
  function kC(a, b) {
    var c;
    return c;
  }
  kC.P = "callInWindow";
  function lC(a) {}
  lC.P = "callLater";
  function mC(a) {}
  mC.D = "callOnDomReady";
  function nC(a) {}
  nC.D = "callOnWindowLoad";
  function oC(a, b) {
    var c;
    return c;
  }
  oC.D = "internal.computeGtmParameter";
  function pC(a, b) {
    var c;
    var d = sd(c, this.h, jC());
    void 0 === d && void 0 !== c && L(45);
    return d;
  }
  pC.P = "copyFromDataLayer";
  function qC(a) {
    var b = void 0;
    return b;
  }
  qC.D = "internal.copyFromDataLayerCache";
  function rC(a) {
    var b;
    return b;
  }
  rC.P = "copyFromWindow";
  function sC(a) {
    var b = void 0;
    return sd(b, this.h, jC());
  }
  sC.D = "internal.copyKeyFromWindow";
  function tC(a, b) {
    var c;
    return c;
  }
  tC.D = "internal.copyPreHit";
  function uC(a, b) {
    var c = null,
      d = jC();
    J(I(this), ["functionPath:!string", "arrayPath:!string"], arguments);
    K(this, "access_globals", "readwrite", a);
    K(this, "access_globals", "readwrite", b);
    var e = [l, z],
      f = a.split("."),
      g = Eb(f, e),
      h = f[f.length - 1];
    if (void 0 === g) throw Error("Path " + a + " does not exist.");
    var m = g[h];
    if (m && !kb(m)) return null;
    if (m) return sd(m, this.h, d);
    var n;
    m = function () {
      if (!kb(n.push))
        throw Error("Object at " + b + " in window is not an array.");
      n.push.call(n, arguments);
    };
    g[h] = m;
    var p = b.split("."),
      q = Eb(p, e),
      r = p[p.length - 1];
    if (void 0 === q) throw Error("Path " + p + " does not exist.");
    n = q[r];
    void 0 === n && ((n = []), (q[r] = n));
    c = function () {
      m.apply(m, Array.prototype.slice.call(arguments, 0));
    };
    return sd(c, this.h, d);
  }
  uC.P = "createArgumentsQueue";
  function vC(a) {
    var b;
    return sd(b, this.h, 1);
  }
  vC.D = "internal.createGaCommandQueue";
  function wC(a) {
    var b;
    return sd(b, this.h, jC());
  }
  wC.P = "createQueue";
  function xC(a, b) {
    var c = null;
    return c;
  }
  xC.D = "internal.createRegex";
  function yC(a) {}
  yC.D = "internal.declareConsentState";
  function zC(a) {
    var b = "";
    return b;
  }
  zC.D = "internal.decodeUrlHtmlEntities";
  function AC(a, b, c) {
    var d;
    return d;
  }
  AC.D = "internal.decorateUrlWithGaCookies";
  function BC(a) {
    var b;
    return b;
  }
  BC.D = "internal.detectUserProvidedData";
  function FC(a, b) {
    return b;
  }
  FC.D = "internal.enableAutoEventOnClick";
  function KC(a, b) {
    return b;
  }
  KC.D = "internal.enableAutoEventOnElementVisibility";
  function LC() {}
  LC.D = "internal.enableAutoEventOnError";
  var MC = {},
    NC = [],
    OC = {},
    PC = 0,
    QC = 0;
  function WC(a, b) {
    var c = this;
    return b;
  }
  WC.D = "internal.enableAutoEventOnFormInteraction";
  function aD(a, b) {
    var c = this;
    return b;
  }
  aD.D = "internal.enableAutoEventOnFormSubmit";
  function fD() {
    var a = this;
  }
  fD.D = "internal.enableAutoEventOnGaSend";
  var gD = {},
    hD = [];
  function oD(a, b) {
    var c = this;
    return b;
  }
  oD.D = "internal.enableAutoEventOnHistoryChange";
  var pD = ["http://", "https://", "javascript:", "file://"];
  function tD(a, b) {
    var c = this;
    return b;
  }
  tD.D = "internal.enableAutoEventOnLinkClick";
  var uD, vD;
  function GD(a, b) {
    var c = this;
    return b;
  }
  GD.D = "internal.enableAutoEventOnScroll";
  function HD(a) {
    return function () {
      if (a.Fc && a.Hc >= a.Fc) a.Dc && l.clearInterval(a.Dc);
      else {
        a.Hc++;
        var b = yb();
        Uy({
          event: a.eventName,
          "gtm.timerId": a.Dc,
          "gtm.timerEventNumber": a.Hc,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.Fc,
          "gtm.timerStartTime": a.Ue,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Ue,
          "gtm.triggers": a.gi,
        });
      }
    };
  }
  function ID(a, b) {
    return b;
  }
  ID.D = "internal.enableAutoEventOnTimer";
  var Bc = ka(["data-gtm-yt-inspected-"]),
    JD = ["www.youtube.com", "www.youtube-nocookie.com"],
    KD,
    LD = !1;
  function VD(a, b) {
    var c = this;
    return b;
  }
  VD.D = "internal.enableAutoEventOnYouTubeActivity";
  var WD;
  function XD(a) {
    var b = !1;
    return b;
  }
  XD.D = "internal.evaluateMatchingRules";
  var YD = function (a, b, c, d) {
      var e = new zq(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = yb();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    ZD = function (a, b, c, d) {
      function e(r, t) {
        for (var u = ma(h), v = u.next(); !v.done; v = u.next()) {
          var w = v.value;
          w.isAborted = !1;
          w.metadata.speculative = !0;
          w.metadata.consent_updated = !0;
          w.metadata.event_start_timestamp_ms = yb();
          w.metadata.consent_event_id = r;
          w.metadata.consent_priority_id = t;
        }
      }
      function f(r) {
        for (var t = 0; t < h.length; t++) {
          var u = h[t];
          if (!r || r(u.metadata.hit_type))
            if (
              !u.metadata.consent_updated ||
              "page_view" === u.metadata.hit_type ||
              U(q)
            ) {
              var v,
                w = h[t];
              switch (w.metadata.hit_type) {
                case "page_view":
                  v = [Zq, su, bu, fu];
                  break;
                case "call_conversion":
                  v = [su];
                  break;
                default:
                  (v = [
                    dr,
                    Ut,
                    Kt,
                    Xt,
                    Lt,
                    Mt,
                    Nt,
                    Ot,
                    bu,
                    cu,
                    eu,
                    gu,
                    pu,
                    qu,
                    du,
                    mu,
                    Yt,
                    hu,
                    iu,
                    ku,
                    Vt,
                    Zt,
                    nu,
                  ]),
                    R(31) && v.push(er),
                    (v = v.concat([
                      $t,
                      lu,
                      Pt,
                      fu,
                      Wt,
                      ru,
                      au,
                      ju,
                      Tt,
                      St,
                      ou,
                    ]));
              }
              for (var x = 0; x < v.length && (v[x](w), !w.isAborted); x++);
              u.metadata.speculative || u.isAborted || Gv(u);
            }
        }
      }
      var g =
        d.isGtmEvent && "" === a
          ? { id: "", prefix: "", fa: "", O: [] }
          : Pl(a, d.isGtmEvent);
      if (g) {
        var h = [];
        if (d.eventMetadata.hit_type_override) {
          var m = d.eventMetadata.hit_type_override;
          Array.isArray(m) || (m = [m]);
          for (var n = 0; n < m.length; n++) {
            var p = YD(m[n], g, b, d);
            p.metadata.speculative = !1;
            h.push(p);
          }
        } else
          b === M.g.aa &&
            (R(18)
              ? h.push(YD("page_view", g, b, d))
              : h.push(YD("landing_page", g, b, d))),
            h.push(YD("conversion", g, b, d)),
            h.push(YD("user_data_lead", g, b, d)),
            h.push(YD("user_data_web", g, b, d)),
            h.push(YD("remarketing", g, b, d));
        var q = [M.g.J];
        R(48) && q.push(M.g.N);
        Jl(function () {
          f();
          R(19) &&
            (U([M.g.za]) ||
              Il(
                function (r) {
                  e(r.consentEventId, r.consentPriorityId);
                  f(function (t) {
                    return "remarketing" === t;
                  });
                },
                [M.g.za]
              ));
          U(q) ||
            Il(function (r) {
              e(r.consentEventId, r.consentPriorityId);
              f();
            }, q);
        }, q);
      }
    };
  var DE = function () {
    var a = !0;
    (wn(7) && wn(9) && wn(10)) || (a = !1);
    return a;
  };
  function yF(a, b, c, d) {}
  yF.D = "internal.executeEventProcessor";
  function zF(a) {
    var b = void 0;
    return sd(b, this.h, 1);
  }
  zF.D = "internal.executeJavascriptString";
  var AF = function (a) {
    var b;
    return b;
  };
  var BF = null;
  function CF() {
    var a = new Za();
    return a;
  }
  CF.P = "getContainerVersion";
  function DF(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  DF.P = "getCookieValues";
  function EF() {
    return oj();
  }
  EF.D = "internal.getCountryCode";
  function FF() {
    var a = [];
    return sd(a);
  }
  FF.D = "internal.getDestinationIds";
  function GF(a, b) {
    var c = null;
    return c;
  }
  GF.D = "internal.getElementAttribute";
  function HF(a) {
    var b = null;
    return b;
  }
  HF.D = "internal.getElementById";
  function IF(a) {
    var b = "";
    return b;
  }
  IF.D = "internal.getElementInnerText";
  function JF(a, b) {
    var c = null;
    return c;
  }
  JF.D = "internal.getElementProperty";
  function KF(a) {
    var b;
    return b;
  }
  KF.D = "internal.getElementValue";
  function LF(a) {
    var b = 0;
    return b;
  }
  LF.D = "internal.getElementVisibilityRatio";
  function MF(a) {
    var b = null;
    return b;
  }
  MF.D = "internal.getElementsByCssSelector";
  function NF(a) {
    var b = void 0;
    return b;
  }
  NF.D = "internal.getEventData";
  var OF = {};
  OF.enableAWFledge = R(24);
  OF.enableAdsConversionValidation = R(14);
  OF.enableAutoPiiOnPhoneAndAddress = R(23);
  OF.enableCachedEcommerceData = R(29);
  OF.enableCcdPreAutoPiiDetection = R(30);
  OF.enableCloudRecommentationsErrorLogging = R(34);
  OF.enableCloudRecommentationsSchemaIngestion = R(35);
  OF.enableCloudRetailInjectPurchaseMetadata = R(37);
  OF.enableCloudRetailLogging = R(36);
  OF.enableCloudRetailPageCategories = R(38);
  OF.enableConsentDisclosureActivity = R(40);
  OF.enableDCFledge = R(45);
  OF.enableDecodeUri = R(55);
  OF.enableDeferAllEnhancedMeasurement = R(46);
  OF.enableEuidAutoMode = R(49);
  OF.enableFormSkipValidation = R(52);
  OF.enableUrlDecodeEventUsage = R(88);
  OF.enableZoneConfigInChildContainers = R(89);
  OF.useEnableAutoEventOnFormApis = R(100);
  OF.autoPiiEligible = tj();
  function PF() {
    return sd(OF);
  }
  PF.D = "internal.getFlags";
  function QF() {
    return new pd(Cz);
  }
  QF.D = "internal.getHtmlId";
  function RF(a, b) {
    var c;
    return c;
  }
  RF.D = "internal.getProductSettingsParameter";
  function SF(a, b) {
    var c;
    return c;
  }
  SF.P = "getQueryParameters";
  function TF(a, b) {
    var c;
    return c;
  }
  TF.P = "getReferrerQueryParameters";
  function UF(a) {
    var b = "";
    return b;
  }
  UF.P = "getReferrerUrl";
  function VF() {
    return pj();
  }
  VF.D = "internal.getRegionCode";
  function WF(a, b) {
    var c;
    return c;
  }
  WF.D = "internal.getRemoteConfigParameter";
  function XF(a) {
    var b = "";
    return b;
  }
  XF.P = "getUrl";
  function YF() {
    K(this, "get_user_agent");
    return Gc.userAgent;
  }
  YF.P = "getUserAgent";
  function eG() {
    return (l.gaGlobal = l.gaGlobal || {});
  }
  var fG = function () {
      var a = eG();
      a.hid = a.hid || ob();
      return a.hid;
    },
    gG = function (a, b) {
      var c = eG();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var OG = function (a) {
      this.s = a;
      this.C = "";
      this.h = this.s;
    },
    PG = function (a, b) {
      a.h = b;
      return a;
    },
    QG = function (a, b) {
      a.F = b;
      return a;
    };
  function RG(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  function SG(a, b, c) {
    if (a) {
      var d = a || [];
      if (Array.isArray(d))
        for (
          var e = Ta(b) ? b : {}, f = ma(d), g = f.next();
          !g.done;
          g = f.next()
        )
          c(g.value, e);
    }
  }
  var hH = window,
    iH = document,
    jH = function (a) {
      var b = hH._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        iH.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === hH["ga-disable-" + a])
      )
        return !0;
      try {
        var c = hH.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = $n("AMP_TOKEN", String(iH.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return iH.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function sH(a) {
    rb(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[M.g.cb] || {};
    rb(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var AH = function (a, b) {};
  function zH(a, b) {
    var c = function () {};
    return c;
  }
  function BH(a, b, c) {}
  var CH = zH;
  var DH = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
  };
  function EH(a, b, c) {
    var d = this;
    J(
      I(this),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? td(b) : {};
    jB([
      function () {
        return K(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? td(c) : {},
      g = nB(this);
    f.originatingEntity = SB(g);
    Bx(xx(a, e), g.eventId, f);
  }
  EH.D = "internal.gtagConfig";
  function FH() {
    var a = {};
    return a;
  }
  function HH(a, b) {}
  HH.P = "gtagSet";
  function IH(a, b) {}
  IH.P = "injectHiddenIframe";
  function JH(a, b, c, d, e) {}
  JH.D = "internal.injectHtml";
  var NH = {};
  function PH(a, b, c, d) {}
  var QH = Object.freeze({ dl: 1, id: 1 }),
    RH = {};
  function SH(a, b, c, d) {}
  PH.P = "injectScript";
  SH.D = "internal.injectScript";
  function TH(a) {
    var b = !0;
    return b;
  }
  TH.P = "isConsentGranted";
  function UH() {
    return rj();
  }
  UH.D = "internal.isDmaRegion";
  function VH(a) {
    var b = !1;
    return b;
  }
  VH.D = "internal.isEntityInfrastructure";
  var WH = function () {
    var a = uh(function (b) {
      nB(this).log("error", b);
    });
    a.P = "JSON";
    return a;
  };
  function XH(a) {
    var b = void 0;
    return sd(b);
  }
  XH.D = "internal.legacyParseUrl";
  var YH = function () {
      return !1;
    },
    ZH = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  function $H() {
    try {
      K(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = td(a[b], this.h);
    console.log.apply(console, a);
  }
  $H.P = "logToConsole";
  function aI(a, b) {}
  aI.D = "internal.mergeRemoteConfig";
  function bI(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return sd(d);
  }
  bI.D = "internal.parseCookieValuesFromString";
  function cI(a) {
    var b = void 0;
    return b;
  }
  cI.P = "parseUrl";
  function dI(a) {}
  dI.D = "internal.processAsNewEvent";
  function eI(a, b, c) {
    var d;
    return d;
  }
  eI.D = "internal.pushToDataLayer";
  function fI(a, b) {
    var c = !1;
    return c;
  }
  fI.P = "queryPermission";
  function gI() {
    var a = "";
    return a;
  }
  gI.P = "readCharacterSet";
  function hI() {
    return Ai.ja;
  }
  hI.D = "internal.readDataLayerName";
  function iI() {
    var a = "";
    return a;
  }
  iI.P = "readTitle";
  function jI(a, b) {
    var c = this;
  }
  jI.D = "internal.registerCcdCallback";
  function kI(a) {
    return !0;
  }
  kI.D = "internal.registerDestination";
  var lI = Object.freeze(["config", "event", "get", "set"]);
  function mI(a, b, c) {}
  mI.D = "internal.registerGtagCommandListener";
  function nI(a, b) {
    var c = !1;
    return c;
  }
  nI.D = "internal.removeDataLayerEventListener";
  function oI(a, b) {}
  oI.D = "internal.removeFormData";
  function pI() {}
  pI.P = "resetDataLayer";
  function qI(a, b, c, d) {}
  qI.D = "internal.sendGtagEvent";
  function rI(a, b, c) {}
  rI.P = "sendPixel";
  function sI(a, b) {}
  sI.D = "internal.setAnchorHref";
  function tI(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  tI.P = "setCookie";
  function uI(a) {}
  uI.D = "internal.setCorePlatformServices";
  function vI(a, b) {}
  vI.D = "internal.setDataLayerValue";
  function wI(a) {}
  wI.P = "setDefaultConsentState";
  function xI(a, b) {}
  xI.D = "internal.setDelegatedConsentType";
  function yI(a, b) {}
  yI.D = "internal.setFormAction";
  function zI(a, b, c) {
    return !1;
  }
  zI.P = "setInWindow";
  function AI(a, b, c) {}
  AI.D = "internal.setProductSettingsParameter";
  function BI(a, b, c) {}
  BI.D = "internal.setRemoteConfigParameter";
  function CI(a, b) {
    var c = this;
  }
  CI.D = "internal.setupConversionLinker";
  function DI(a, b, c, d) {
    var e = this;
  }
  DI.P = "sha256";
  function EI(a, b, c) {}
  EI.D = "internal.sortRemoteConfigParameters";
  var FI = {},
    GI = {};
  FI.P = "templateStorage";
  FI.getItem = function (a) {
    var b = null;
    return b;
  };
  FI.setItem = function (a, b) {};
  FI.removeItem = function (a) {};
  FI.clear = function () {};
  function HI(a, b) {
    var c = !1;
    return c;
  }
  HI.D = "internal.testRegex";
  var II = function (a) {
    var b;
    return b;
  };
  function JI(a) {
    var b;
    return b;
  }
  JI.D = "internal.unsiloId";
  function KI(a) {}
  KI.P = "updateConsentState";
  var LI;
  function MI(a, b, c) {
    LI = LI || new Eh();
    LI.add(a, b, c);
  }
  function NI(a, b) {
    var c = (LI = LI || new Eh());
    if (c.s.hasOwnProperty(a))
      throw (
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.h.hasOwnProperty(a))
      throw (
        "Attempting to add a private function with an existing API name: " +
        a +
        "."
      );
    c.s[a] = kb(b) ? Xg(a, b) : Yg(a, b);
  }
  function OI() {
    return function (a) {
      var b;
      var c = LI;
      if (c.h.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.s.hasOwnProperty(a))) {
          var e = !1,
            f = this.h.h;
          if (f) {
            var g = f.hc();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var h = c.s.hasOwnProperty(a) ? c.s[a] : void 0;
          b = h;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  var PI = function () {
    var a = function (c) {
        return NI(c.D, c);
      },
      b = function (c) {
        return MI(c.P, c);
      };
    b(hB);
    b(oB);
    b(hC);
    b(kC);
    b(lC);
    b(pC);
    b(rC);
    b(uC);
    b(WH());
    b(wC);
    b(CF);
    b(DF);
    b(SF);
    b(TF);
    b(UF);
    b(XF);
    b(HH);
    b(IH);
    b(PH);
    b(TH);
    b($H);
    b(cI);
    b(fI);
    b(gI);
    b(iI);
    b(rI);
    b(tI);
    b(wI);
    b(zI);
    b(DI);
    b(FI);
    b(KI);
    MI("Math", ch());
    MI("Object", Ch);
    MI("TestHelper", Gh());
    MI("assertApi", Zg);
    MI("assertThat", $g);
    MI("decodeUri", dh);
    MI("decodeUriComponent", eh);
    MI("encodeUri", fh);
    MI("encodeUriComponent", gh);
    MI("fail", qh);
    MI("generateRandom", rh);
    MI("getTimestamp", sh);
    MI("getTimestampMillis", sh);
    MI("getType", th);
    MI("makeInteger", vh);
    MI("makeNumber", wh);
    MI("makeString", xh);
    MI("makeTableMap", yh);
    MI("mock", Bh);
    MI("fromBase64", AF, !("atob" in l));
    MI("localStorage", ZH, !YH());
    MI("toBase64", II, !("btoa" in l));
    a(kB);
    a(tB);
    a(FB);
    a(MB);
    a(RB);
    a(XB);
    a(fC);
    a(iC);
    a(mC);
    a(nC);
    a(qC);
    a(sC);
    a(tC);
    a(vC);
    a(xC);
    a(yC);
    a(zC);
    a(AC);
    a(BC);
    a(FC);
    a(KC);
    a(LC);
    a(WC);
    a(aD);
    a(fD);
    a(oD);
    a(tD);
    a(GD);
    a(ID);
    a(VD);
    a(hh);
    a(XD);
    a(yF);
    a(zF);
    a(EF);
    a(FF);
    a(GF);
    a(HF);
    a(IF);
    a(JF);
    a(KF);
    a(LF);
    a(MF);
    a(NF);
    a(PF);
    a(QF);
    a(RF);
    a(VF);
    a(WF);
    a(EH);
    a(JH);
    a(SH);
    a(UH);
    a(VH);
    a(XH);
    a(VB);
    a(aI);
    a(bI);
    a(dI);
    a(eI);
    a(hI);
    a(jI);
    a(kI);
    a(mI);
    a(nI);
    a(oI);
    a(qI);
    a(sI);
    a(uI);
    a(vI);
    a(xI);
    a(yI);
    a(AI);
    a(BI);
    a(CI);
    a(EI);
    a(HI);
    a(JI);
    NI("internal.GtagSchema", FH());
    return OI();
  };
  var fB;
  function QI() {
    fB.h.h.M = function (a, b, c) {
      Bi.SANDBOXED_JS_SEMAPHORE = Bi.SANDBOXED_JS_SEMAPHORE || 0;
      Bi.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        Bi.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function RI(a) {
    void 0 !== a &&
      rb(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Ri[e] = Ri[e] || [];
          Ri[e].push(b);
        }
      });
  }
  var SI = encodeURI,
    X = encodeURIComponent,
    TI = Array.isArray,
    UI = function (a, b, c) {
      Rc(a, b, c);
    },
    VI = function (a, b) {
      if (!a) return !1;
      var c = Aj(Ej(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    WI = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Y = { securityGroups: {} };
  (Y.securityGroups.e = ["google"]),
    (function () {
      (function (a) {
        Y.__e = a;
        Y.__e.o = "e";
        Y.__e.isVendorTemplate = !0;
        Y.__e.priorityOverride = 0;
        Y.__e.isInfrastructure = !0;
        Y.__e.runInSiloedMode = !0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Y.securityGroups.f = ["google"]),
    (function () {
      (function (a) {
        Y.__f = a;
        Y.__f.o = "f";
        Y.__f.isVendorTemplate = !0;
        Y.__f.priorityOverride = 0;
        Y.__f.isInfrastructure = !0;
        Y.__f.runInSiloedMode = !1;
      })(function (a) {
        var b = qA("gtm.referrer", 1) || z.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? Aj(
                Ej(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : pA(String(b))
          : String(b);
      });
    })();
  (Y.securityGroups.cl = ["google"]),
    (function () {
      function a(b) {
        var c = b.target;
        if (c) {
          var d = Jz(c, "gtm.click");
          rA(d);
        }
      }
      (function (b) {
        Y.__cl = b;
        Y.__cl.o = "cl";
        Y.__cl.isVendorTemplate = !0;
        Y.__cl.priorityOverride = 0;
        Y.__cl.isInfrastructure = !1;
        Y.__cl.runInSiloedMode = !1;
      })(function (b) {
        if (!wA("cl")) {
          var c = V("document");
          Sc(c, "click", a, !0);
          xA("cl");
        }
        D(b.vtp_gtmOnSuccess);
      });
    })();
  (Y.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Y.__access_globals = b;
        Y.__access_globals.o = "access_globals";
        Y.__access_globals.isVendorTemplate = !0;
        Y.__access_globals.priorityOverride = 0;
        Y.__access_globals.isInfrastructure = !1;
        Y.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            h = 0;
          h < c.length;
          h++
        ) {
          var m = c[h],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!k(r)) throw d(p, {}, "Key must be a string.");
            if ("read" === q) {
              if (-1 < e.indexOf(r)) return;
            } else if ("write" === q) {
              if (-1 < f.indexOf(r)) return;
            } else if ("readwrite" === q) {
              if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return;
            } else if ("execute" === q) {
              if (-1 < g.indexOf(r)) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          K: a,
        };
      });
    })();
  (Y.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Y.__u = b;
        Y.__u.o = "u";
        Y.__u.isVendorTemplate = !0;
        Y.__u.priorityOverride = 0;
        Y.__u.isInfrastructure = !0;
        Y.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : qA("gtm.url", 1)) || nA();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return pA(String(c));
        var e = Ej(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              h = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(h)
                ? h
                : String(h).replace(/\s+/g, "").split(",")
              : [String(h)];
            for (var p = 0; p < n.length; p++) {
              var q = Aj(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Aj(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Y.securityGroups.v = ["google"]),
    (function () {
      (function (a) {
        Y.__v = a;
        Y.__v.o = "v";
        Y.__v.isVendorTemplate = !0;
        Y.__v.priorityOverride = 0;
        Y.__v.isInfrastructure = !0;
        Y.__v.runInSiloedMode = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = qA(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return void 0 !== c ? c : a.vtp_defaultValue;
      });
    })();

  (Y.securityGroups.gclidw = ["google"]),
    (function () {
      var a = ["aw", "dc", "gf", "ha", "gb"];
      (function (b) {
        Y.__gclidw = b;
        Y.__gclidw.o = "gclidw";
        Y.__gclidw.isVendorTemplate = !0;
        Y.__gclidw.priorityOverride = 100;
        Y.__gclidw.isInfrastructure = !1;
        Y.__gclidw.runInSiloedMode = !1;
      })(function (b) {
        var c, d, e, f;
        b.vtp_enableCookieOverrides &&
          ((e = b.vtp_cookiePrefix),
          (c = b.vtp_path),
          (d = b.vtp_domain),
          (f = b.vtp_cookieFlags));
        var g = qA(M.g.da);
        g = void 0 != g && !1 !== g;
        if (R(17)) {
          var h = {},
            m =
              ((h[M.g.Oa] = e),
              (h[M.g.Qb] = c),
              (h[M.g.Ua] = d),
              (h[M.g.Za] = f),
              (h[M.g.da] = g),
              h);
          b.vtp_enableUrlPassthrough && (m[M.g.Wa] = !0);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var n = {};
            m[M.g.sa] =
              ((n[M.g.Tb] = b.vtp_acceptIncoming),
              (n[M.g.W] = b.vtp_linkerDomains
                .toString()
                .replace(/\s+/g, "")
                .split(",")),
              (n[M.g.tb] = b.vtp_urlPosition),
              (n[M.g.ab] = b.vtp_formDecoration),
              n);
          }
          var p = sm(
            rm(
              qm(
                pm(
                  im(new hm(b.vtp_gtmEventId, b.vtp_gtmPriorityId), m),
                  b.vtp_gtmOnSuccess
                ),
                b.vtp_gtmOnFailure
              ),
              !0
            )
          );
          p.eventMetadata.hit_type_override = "page_view";
          ZD("", M.g.aa, Date.now(), p);
        } else {
          D(b.vtp_gtmOnSuccess);
          var q = { prefix: e, path: c, domain: d, flags: f };
          if (!b.vtp_enableCrossDomain || !1 !== b.vtp_acceptIncoming)
            if (b.vtp_enableCrossDomain || Vo()) Sp(a, q), hp(q);
          Qp(q);
          Xp(["aw", "dc"], q);
          uq(q, void 0, void 0, g);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var r = b.vtp_linkerDomains
              .toString()
              .replace(/\s+/g, "")
              .split(",");
            Vp(a, r, b.vtp_urlPosition, !!b.vtp_formDecoration, q.prefix);
            ip($o(q.prefix), r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
            ip("FPAU", r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
          }
          R(72) && R(82) && !Oj() && ct();
          lr({
            m: sm(new hm(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
            mh: !1,
            xd: g,
            fc: q,
            Uf: !0,
          });
          b.vtp_enableUrlPassthrough && $p(["aw", "dc", "gb"]);
          bq(["aw", "dc", "gb"]);
        }
      });
    })();
  (Y.securityGroups.aev = ["google"]),
    (function () {
      function a(r, t, u, v, w) {
        w || (w = "element");
        var x = t + "." + u,
          y;
        if (n.hasOwnProperty(x)) y = n[x];
        else {
          var B = r[w];
          if (B && ((y = v(B)), (n[x] = y), p.push(x), 35 < p.length)) {
            var A = p.shift();
            delete n[A];
          }
        }
        return y;
      }
      function b(r, t, u) {
        var v = r[q[t]];
        return void 0 !== v ? v : u;
      }
      function c(r, t) {
        if (!r) return !1;
        var u = d(nA());
        Array.isArray(t) ||
          (t = String(t || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var v = [u], w = 0; w < t.length; w++) {
          var x = t[w];
          if (x.hasOwnProperty("is_regex"))
            if (x.is_regex)
              try {
                x = new RegExp(x.domain);
              } catch (A) {
                continue;
              }
            else x = x.domain;
          var y = d(r);
          if (x instanceof RegExp) {
            if (x.test(y)) return !1;
          } else {
            var B = x;
            if (0 != B.length) {
              if (0 <= y.indexOf(B)) return !1;
              v.push(d(B));
            }
          }
        }
        return !VI(r, v);
      }
      function d(r) {
        m.test(r) || (r = "http://" + r);
        return Aj(Ej(r), "HOST", !0);
      }
      function e(r, t, u, v) {
        switch (r) {
          case "SUBMIT_TEXT":
            return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
          case "LENGTH":
            var w = a(t, u, "FORM." + r, g);
            return void 0 === w ? v : w;
          case "INTERACTED_FIELD_ID":
            return h(t, "id", v);
          case "INTERACTED_FIELD_NAME":
            return h(t, "name", v);
          case "INTERACTED_FIELD_TYPE":
            return h(t, "type", v);
          case "INTERACTED_FIELD_POSITION":
            var x = t.interactedFormFieldPosition;
            return void 0 === x ? v : x;
          case "INTERACT_SEQUENCE_NUMBER":
            var y = t.interactSequenceNumber;
            return void 0 === y ? v : y;
          default:
            return v;
        }
      }
      function f(r) {
        switch (r.tagName.toLowerCase()) {
          case "input":
            return Uc(r, "value");
          case "button":
            return Vc(r);
          default:
            return null;
        }
      }
      function g(r) {
        if ("form" === r.tagName.toLowerCase() && r.elements) {
          for (var t = 0, u = 0; u < r.elements.length; u++)
            Sz(r.elements[u]) && t++;
          return t;
        }
      }
      function h(r, t, u) {
        var v = r.interactedFormField;
        return (v && Uc(v, t)) || u;
      }
      var m = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (r) {
        Y.__aev = r;
        Y.__aev.o = "aev";
        Y.__aev.isVendorTemplate = !0;
        Y.__aev.priorityOverride = 0;
        Y.__aev.isInfrastructure = !0;
        Y.__aev.runInSiloedMode = !1;
      })(function (r) {
        var t = r.vtp_gtmEventId,
          u = r.vtp_defaultValue,
          v = r.vtp_varType,
          w = r.vtp_gtmCachedValues.gtm;
        switch (v) {
          case "TAG_NAME":
            var x = w.element;
            return (x && x.tagName) || u;
          case "TEXT":
            return a(w, t, v, Vc) || u;
          case "URL":
            var y;
            a: {
              var B = String(w.elementUrl || u || ""),
                A = Ej(B),
                E = String(r.vtp_component || "URL");
              switch (E) {
                case "URL":
                  y = B;
                  break a;
                case "IS_OUTBOUND":
                  y = c(B, r.vtp_affiliatedDomains);
                  break a;
                default:
                  y = Aj(
                    A,
                    E,
                    r.vtp_stripWww,
                    r.vtp_defaultPages,
                    r.vtp_queryKey
                  );
              }
            }
            return y;
          case "ATTRIBUTE":
            var F;
            if (void 0 === r.vtp_attribute) F = b(w, v, u);
            else {
              var C = w.element;
              F = (C && Uc(C, r.vtp_attribute)) || u || "";
            }
            return F;
          case "MD":
            var G = r.vtp_mdValue,
              O = a(w, t, "MD", eA);
            return G && O ? hA(O, G) || u : O || u;
          case "FORM":
            return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
          default:
            return b(w, v, u);
        }
      });
    })();

  (Y.securityGroups.fsl = []),
    (function () {
      function a() {
        var e = V("document"),
          f = c(),
          g = HTMLFormElement.prototype.submit;
        Sc(
          e,
          "click",
          function (h) {
            var m = h.target;
            if (
              m &&
              (m = Xc(m, ["button", "input"], 100)) &&
              ("submit" == m.type || "image" == m.type) &&
              m.name &&
              Uc(m, "value")
            ) {
              var n;
              m.form
                ? m.form.tagName
                  ? (n = m.form)
                  : (n = z.getElementById(m.form))
                : (n = Xc(m, ["form"], 100));
              n && f.store(n, m);
            }
          },
          !1
        );
        Sc(
          e,
          "submit",
          function (h) {
            var m = h.target;
            if (!m) return h.returnValue;
            var n = h.defaultPrevented || !1 === h.returnValue,
              p = b(m) && !n,
              q = f.get(m),
              r = !0;
            if (
              d(
                m,
                function () {
                  if (r) {
                    var t;
                    q &&
                      ((t = e.createElement("input")),
                      (t.type = "hidden"),
                      (t.name = q.name),
                      (t.value = q.value),
                      m.appendChild(t));
                    g.call(m);
                    t && m.removeChild(t);
                  }
                },
                n,
                p,
                q
              )
            )
              r = !1;
            else
              return (
                n ||
                  (h.preventDefault && h.preventDefault(),
                  (h.returnValue = !1)),
                !1
              );
            return h.returnValue;
          },
          !1
        );
        HTMLFormElement.prototype.submit = function () {
          var h = this,
            m = b(h),
            n = !0;
          d(
            h,
            function () {
              n && g.call(h);
            },
            !1,
            m
          ) && (g.call(h), (n = !1));
        };
      }
      function b(e) {
        var f = e.target;
        return f && "_self" !== f && "_parent" !== f && "_top" !== f ? !1 : !0;
      }
      function c() {
        var e = [],
          f = function (g) {
            return nb(e, function (h) {
              return h.form === g;
            });
          };
        return {
          store: function (g, h) {
            var m = f(g);
            m ? (m.button = h) : e.push({ form: g, button: h });
          },
          get: function (g) {
            var h = f(g);
            return h ? h.button : null;
          },
        };
      }
      function d(e, f, g, h, m) {
        var n = Nz("fsl", g ? "nv.mwt" : "mwt", 0),
          p;
        p = g ? Nz("fsl", "nv.ids", []) : Nz("fsl", "ids", []);
        if (!p.length) return !0;
        var q = Jz(e, "gtm.formSubmit", p),
          r = e.action;
        r && r.tagName && (r = e.cloneNode(!1).action);
        q["gtm.elementUrl"] = r;
        L(121);
        if ("https://www.facebook.com/tr/" === r) return L(122), !0;
        m && (q["gtm.formSubmitElement"] = m);
        if (h && n) {
          if (!rA(q, Wy(f, n), n)) return !1;
        } else rA(q, function () {}, n || 2e3);
        return !0;
      }
      (function (e) {
        Y.__fsl = e;
        Y.__fsl.o = "fsl";
        Y.__fsl.isVendorTemplate = !0;
        Y.__fsl.priorityOverride = 0;
        Y.__fsl.isInfrastructure = !1;
        Y.__fsl.runInSiloedMode = !1;
      })(function (e) {
        var f = e.vtp_waitForTags,
          g = e.vtp_checkValidation,
          h = Number(e.vtp_waitForTagsTimeout);
        if (!h || 0 >= h) h = 2e3;
        var m = e.vtp_uniqueTriggerId || "0";
        if (f) {
          var n = function (q) {
            return Math.max(h, q);
          };
          Mz("fsl", "mwt", n, 0);
          g || Mz("fsl", "nv.mwt", n, 0);
        }
        var p = function (q) {
          q.push(m);
          return q;
        };
        Mz("fsl", "ids", p, []);
        g || Mz("fsl", "nv.ids", p, []);
        wA("fsl") || (a(), xA("fsl"));
        D(e.vtp_gtmOnSuccess);
      });
    })();

  (Y.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Y.__load_google_tags = b;
        Y.__load_google_tags.o = "load_google_tags";
        Y.__load_google_tags.isVendorTemplate = !0;
        Y.__load_google_tags.priorityOverride = 0;
        Y.__load_google_tags.isInfrastructure = !1;
        Y.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          h = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!k(q)) throw h(m, {}, "Tag ID must be a string.");
              if ("any" !== c && ("specific" !== c || -1 === g.indexOf(q)))
                throw h(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (void 0 !== q) {
                if (!k(q)) throw h(m, {}, "First party URL must be a string.");
                if (d) {
                  if ("any" === e) return;
                  if ("specific" === e)
                    try {
                      if (Qg(Ej(q), f)) return;
                    } catch (r) {
                      throw h(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw h(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          K: a,
        };
      });
    })();

  (Y.securityGroups.awct = ["google"]),
    (function () {
      function a(b, c, d) {
        return function (e, f, g) {
          c[e] = "DATA_LAYER" === d ? qA(g) : b[f];
        };
      }
      (function (b) {
        Y.__awct = b;
        Y.__awct.o = "awct";
        Y.__awct.isVendorTemplate = !0;
        Y.__awct.priorityOverride = 0;
        Y.__awct.isInfrastructure = !1;
        Y.__awct.runInSiloedMode = !1;
      })(function (b) {
        var c =
            !b.hasOwnProperty("vtp_enableConversionLinker") ||
            !!b.vtp_enableConversionLinker,
          d =
            !!b.vtp_enableEnhancedConversions ||
            !!b.vtp_enableEnhancedConversion,
          e = WI(b.vtp_customVariables, "varName", "value") || {},
          f = {},
          g =
            ((f[M.g.la] = b.vtp_conversionValue || 0),
            (f[M.g.Aa] = b.vtp_currencyCode),
            (f[M.g.Ba] = b.vtp_orderId),
            (f[M.g.Ya] = b.vtp_conversionCookiePrefix),
            (f[M.g.ra] = c),
            (f[M.g.Gd] = d),
            (f[M.g.da] = qA(M.g.da)),
            (f[M.g.ia] = qA("developer_id")),
            f);
        (g[M.g.Da] = qA(M.g.Da)),
          (g[M.g.ka] = qA(M.g.ka)),
          (g[M.g.Ob] = qA(M.g.Ob)),
          (g[M.g.Ka] = qA(M.g.Ka));
        b.vtp_rdp && (g[M.g.Ub] = !0);
        if (b.vtp_enableCustomParams)
          for (var h in e) xi.hasOwnProperty(h) || (g[h] = e[h]);
        if (b.vtp_enableProductReporting) {
          var m = a(b, g, b.vtp_productReportingDataSource);
          m(M.g.Kd, "vtp_awMerchantId", "aw_merchant_id");
          m(M.g.Id, "vtp_awFeedCountry", "aw_feed_country");
          m(M.g.Jd, "vtp_awFeedLanguage", "aw_feed_language");
          m(M.g.Hd, "vtp_discount", "discount");
          m(M.g.Z, "vtp_items", "items");
        }
        b.vtp_enableShippingData &&
          ((g[M.g.kd] = b.vtp_deliveryPostalCode),
          (g[M.g.Rd] = b.vtp_estimatedDeliveryDate),
          (g[M.g.wc] = b.vtp_deliveryCountry),
          (g[M.g.Zc] = b.vtp_shippingFee));
        b.vtp_transportUrl && (g[M.g.Jb] = b.vtp_transportUrl);
        if (b.vtp_enableNewCustomerReporting) {
          var n = a(b, g, b.vtp_newCustomerReportingDataSource);
          n(M.g.ed, "vtp_awNewCustomer", "new_customer");
          n(M.g.Ld, "vtp_awCustomerLTV", "customer_lifetime_value");
        }
        var p;
        a: {
          if (b.vtp_enableEnhancedConversion) {
            var q =
              b.vtp_cssProvidedEnhancedConversionValue ||
              b.vtp_enhancedConversionObject;
            if (q) {
              p = {
                enhanced_conversions_mode: "manual",
                enhanced_conversions_manual_var: q,
              };
              break a;
            }
          }
          p = void 0;
        }
        var r = p;
        if (r) {
          var t = {};
          g[M.g.Qd] = ((t[b.vtp_conversionLabel] = r), t);
        }
        var u = "AW-" + b.vtp_conversionId,
          v = u + "/" + b.vtp_conversionLabel;
        Yv(u, b.vtp_transportUrl, {
          source: 7,
          fromContainerExecution: !0,
          siloed: !0,
        });
        var w = {},
          x = {
            eventMetadata: ((w.hit_type_override = "conversion"), w),
            noGtmEvent: !0,
            isGtmEvent: !0,
            onSuccess: b.vtp_gtmOnSuccess,
            onFailure: b.vtp_gtmOnFailure,
          };
        Bx(yx(ak(v), M.g.Ja, g), b.vtp_gtmEventId, x);
      });
    })();
  (Y.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__logging = b;
        Y.__logging.o = "logging";
        Y.__logging.isVendorTemplate = !0;
        Y.__logging.priorityOverride = 0;
        Y.__logging.isInfrastructure = !1;
        Y.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = "all" !== c && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          K: a,
        };
      });
    })();

  (Y.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Y.__configure_google_tags = b;
        Y.__configure_google_tags.o = "configure_google_tags";
        Y.__configure_google_tags.isVendorTemplate = !0;
        Y.__configure_google_tags.priorityOverride = 0;
        Y.__configure_google_tags.isInfrastructure = !1;
        Y.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!k(g)) throw e(f, {}, "Tag ID must be a string.");
            if ("any" !== c && ("specific" !== c || -1 === d.indexOf(g)))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          K: a,
        };
      });
    })();

  var tK = {};
  tK.dataLayer = bj;
  tK.callback = function (a) {
    Qi.hasOwnProperty(a) && kb(Qi[a]) && Qi[a]();
    delete Qi[a];
  };
  tK.bootstrap = 0;
  tK._spx = !1;
  function uK() {
    Bi[fk()] = Bi[fk()] || tK;
    ok();
    sk() ||
      rb(tk(), function (d, e) {
        Yv(d, e.transportUrl, e.context);
        L(92);
      });
    Bb(Ri, Y.securityGroups);
    var a = hk(ik()),
      b,
      c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
    (2 !== c && 4 !== c && 3 !== c) || L(142);
    Bf = Tf;
  }
  (function (a) {
    function b() {
      m = z.documentElement.getAttribute("data-tag-assistant-present");
      ez(m) && (h = g.Ok);
    }
    if (!l["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (z.referrer) {
        var d = Ej(z.referrer);
        c = "cct.google" === zj(d, "host");
      }
      if (!c) {
        var e = co("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((l["__TAGGY_INSTALLED"] = !0),
        Oc("https://cct.google/taggy/agent.js"));
    }
    if (Li) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          Hi ? ((v = "OGT"), (w = "GTAG")) : Li && (w = v = "OPT");
          var x = l["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (l["google.tagmanager.debugui2.queue"] = x),
            Oc(
              "https://" +
                Ai.Ed +
                "/debug/bootstrap?id=" +
                bg.ctid +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                Yn()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Ic,
              containerProduct: v,
              debug: !1,
              id: bg.ctid,
              targetRef: { ctid: bg.ctid, isDestination: Xj.je },
              aliases: Zj(),
              destinations: ck(),
            },
          };
          y.data.resume = function () {
            a();
          };
          Ai.uk && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = { Ln: 1, Pk: 2, bl: 3, vk: 4, Ok: 5 },
        h = void 0,
        m = void 0,
        n = Aj(l.location, "query", !1, void 0, "gtm_debug");
      ez(n) && (h = g.Pk);
      if (!h && z.referrer) {
        var p = Ej(z.referrer);
        "tagassistant.google.com" === zj(p, "host") && (h = g.bl);
      }
      if (!h) {
        var q = co("__TAG_ASSISTANT");
        q.length && q[0].length && (h = g.vk);
      }
      h || b();
      if (!h && fz(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            h && Ic ? f(h) : a();
          },
          t = !1;
        Sc(
          z,
          "TADebugSignal",
          function () {
            r();
          },
          !1
        );
        l.setTimeout(function () {
          r();
        }, 200);
      } else h && Ic ? f(h) : a();
    }
  })(function () {
    try {
      mk();
      if (R(66)) {
      }
      cl().s();
      un();
      (R(31) || R(32) || R(33)) && Ml();
      var a = gk();
      if (Uj().canonical[a]) {
        var b = Bi.zones;
        b && b.unregisterChild(bk());
        Iv().removeExternalRestrictions(gk());
      } else {
        ut();
        Ui.h = "";
        Ui.s = Ui.F;
        Ui.C = "";
        Ui.T = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        Ui.M = "ad_storage|analytics_storage|ad_user_data";
        Vv();
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          rf.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) uf.push(f[g]);
        for (var h = c.predicates || [], m = 0; m < h.length; m++)
          tf.push(h[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            ("if" !== u && "unless" !== u) || Af(r[u]);
          }
          sf.push(r);
        }
        wf = Y;
        xf = VA;
        Vf = new eg();
        var v = data.sandboxed_scripts,
          w = data.security_groups;
        a: {
          var x = data.runtime || [],
            y = data.runtime_lines;
          fB = new Oe();
          QI();
          qf = eB();
          var B = fB,
            A = PI(),
            E = new kd("require", A);
          E.Kb();
          B.h.h.set("require", E);
          for (var F = [], C = 0; C < x.length; C++) {
            var G = x[C];
            if (!Array.isArray(G) || 3 > G.length) {
              if (0 === G.length) continue;
              break a;
            }
            y && y[C] && y[C].length && Mf(G, y[C]);
            try {
              fB.execute(G), R(75) && Ck && 50 === G[0] && F.push(G[1]);
            } catch (mb) {}
          }
          R(75) && (Cf = F);
        }
        if (void 0 !== v)
          for (var O = ["sandboxedScripts"], N = 0; N < v.length; N++) {
            var W = v[N].replace(/^_*/, "");
            Ri[W] = O;
          }
        RI(w);
        uK();
        if (!Li)
          for (var Z = rj() ? Wi(Ui.M) : Wi(Ui.T), Q = 0; Q < Al.length; Q++) {
            var T = Al[Q],
              da = T,
              fa = Z[T] ? "granted" : "denied";
            il().implicit(da, fa);
          }
        dz();
        Zv = !1;
        $v = 0;
        if (
          ("interactive" == z.readyState && !z.createEventObject) ||
          "complete" == z.readyState
        )
          bw();
        else {
          Sc(z, "DOMContentLoaded", bw);
          Sc(z, "readystatechange", bw);
          if (z.createEventObject && z.documentElement.doScroll) {
            var ha = !0;
            try {
              ha = !l.frameElement;
            } catch (mb) {}
            ha && cw();
          }
          Sc(l, "load", bw);
        }
        sy = !1;
        "complete" === z.readyState ? uy() : Sc(l, "load", uy);
        Ck && (xk(Qk), l.setInterval(Pk, 864e5));
        xk(XA);
        xk(Dw);
        xk(yu);
        xk(vm);
        xk(Ow);
        xk(Vl);
        xk(it);
        xk(Vk);
        R(75) && (xk(Iw), xk(Jw), xk(Kw));
        Ck && R(63) && (xk(YA), xk($A));
        bB();
        R(76) && xk(Zk);
        Az();
        mj(1);
        Mx();
        Pi = yb();
        tK.bootstrap = Pi;
        if (R(66)) {
        }
      }
    } catch (mb) {
      if ((mj(4), Ck)) {
        var La = Kk(!0, !0);
        Rc(La);
      }
    }
  });
})();
