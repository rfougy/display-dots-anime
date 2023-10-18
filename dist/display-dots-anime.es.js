import * as B from "react";
import nn, { useRef as ba, useEffect as we, createContext as _a, useState as je, useContext as an, forwardRef as wa, useMemo as lt } from "react";
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ca(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hr = { exports: {} }, ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function Ea() {
  if (ft)
    return ye;
  ft = 1;
  var e = nn, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, f) {
    var d, h = {}, g = null, $ = null;
    f !== void 0 && (g = "" + f), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && ($ = u.ref);
    for (d in u)
      n.call(u, d) && !o.hasOwnProperty(d) && (h[d] = u[d]);
    if (c && c.defaultProps)
      for (d in u = c.defaultProps, u)
        h[d] === void 0 && (h[d] = u[d]);
    return { $$typeof: r, type: c, key: g, ref: $, props: h, _owner: i.current };
  }
  return ye.Fragment = t, ye.jsx = s, ye.jsxs = s, ye;
}
var me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function $a() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = nn, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), b = Symbol.iterator, v = "@@iterator";
    function E(a) {
      if (a === null || typeof a != "object")
        return null;
      var l = b && a[b] || a[v];
      return typeof l == "function" ? l : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(a) {
      {
        for (var l = arguments.length, p = new Array(l > 1 ? l - 1 : 0), y = 1; y < l; y++)
          p[y - 1] = arguments[y];
        R("error", a, p);
      }
    }
    function R(a, l, p) {
      {
        var y = _.ReactDebugCurrentFrame, S = y.getStackAddendum();
        S !== "" && (l += "%s", p = p.concat([S]));
        var T = p.map(function(C) {
          return String(C);
        });
        T.unshift("Warning: " + l), Function.prototype.apply.call(console[a], console, T);
      }
    }
    var F = !1, D = !1, L = !1, x = !1, rr = !1, ee;
    ee = Symbol.for("react.module.reference");
    function ae(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === o || rr || a === i || a === f || a === d || x || a === $ || F || D || L || typeof a == "object" && a !== null && (a.$$typeof === g || a.$$typeof === h || a.$$typeof === s || a.$$typeof === c || a.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === ee || a.getModuleId !== void 0));
    }
    function Yn(a, l, p) {
      var y = a.displayName;
      if (y)
        return y;
      var S = l.displayName || l.name || "";
      return S !== "" ? p + "(" + S + ")" : p;
    }
    function Br(a) {
      return a.displayName || "Context";
    }
    function K(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            var l = a;
            return Br(l) + ".Consumer";
          case s:
            var p = a;
            return Br(p._context) + ".Provider";
          case u:
            return Yn(a, a.render, "ForwardRef");
          case h:
            var y = a.displayName || null;
            return y !== null ? y : K(a.type) || "Memo";
          case g: {
            var S = a, T = S._payload, C = S._init;
            try {
              return K(C(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, ve = 0, Ur, Wr, Vr, zr, Hr, Yr, qr;
    function Kr() {
    }
    Kr.__reactDisabledLog = !0;
    function qn() {
      {
        if (ve === 0) {
          Ur = console.log, Wr = console.info, Vr = console.warn, zr = console.error, Hr = console.group, Yr = console.groupCollapsed, qr = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Kr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        ve++;
      }
    }
    function Kn() {
      {
        if (ve--, ve === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, a, {
              value: Ur
            }),
            info: re({}, a, {
              value: Wr
            }),
            warn: re({}, a, {
              value: Vr
            }),
            error: re({}, a, {
              value: zr
            }),
            group: re({}, a, {
              value: Hr
            }),
            groupCollapsed: re({}, a, {
              value: Yr
            }),
            groupEnd: re({}, a, {
              value: qr
            })
          });
        }
        ve < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tr = _.ReactCurrentDispatcher, nr;
    function xe(a, l, p) {
      {
        if (nr === void 0)
          try {
            throw Error();
          } catch (S) {
            var y = S.stack.trim().match(/\n( *(at )?)/);
            nr = y && y[1] || "";
          }
        return `
` + nr + a;
      }
    }
    var ar = !1, Te;
    {
      var Xn = typeof WeakMap == "function" ? WeakMap : Map;
      Te = new Xn();
    }
    function Xr(a, l) {
      if (!a || ar)
        return "";
      {
        var p = Te.get(a);
        if (p !== void 0)
          return p;
      }
      var y;
      ar = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = tr.current, tr.current = null, qn();
      try {
        if (l) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (X) {
              y = X;
            }
            Reflect.construct(a, [], C);
          } else {
            try {
              C.call();
            } catch (X) {
              y = X;
            }
            a.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            y = X;
          }
          a();
        }
      } catch (X) {
        if (X && y && typeof X.stack == "string") {
          for (var w = X.stack.split(`
`), G = y.stack.split(`
`), I = w.length - 1, N = G.length - 1; I >= 1 && N >= 0 && w[I] !== G[N]; )
            N--;
          for (; I >= 1 && N >= 0; I--, N--)
            if (w[I] !== G[N]) {
              if (I !== 1 || N !== 1)
                do
                  if (I--, N--, N < 0 || w[I] !== G[N]) {
                    var V = `
` + w[I].replace(" at new ", " at ");
                    return a.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", a.displayName)), typeof a == "function" && Te.set(a, V), V;
                  }
                while (I >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        ar = !1, tr.current = T, Kn(), Error.prepareStackTrace = S;
      }
      var oe = a ? a.displayName || a.name : "", ut = oe ? xe(oe) : "";
      return typeof a == "function" && Te.set(a, ut), ut;
    }
    function Jn(a, l, p) {
      return Xr(a, !1);
    }
    function Zn(a) {
      var l = a.prototype;
      return !!(l && l.isReactComponent);
    }
    function Pe(a, l, p) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Xr(a, Zn(a));
      if (typeof a == "string")
        return xe(a);
      switch (a) {
        case f:
          return xe("Suspense");
        case d:
          return xe("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            return Jn(a.render);
          case h:
            return Pe(a.type, l, p);
          case g: {
            var y = a, S = y._payload, T = y._init;
            try {
              return Pe(T(S), l, p);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, Jr = {}, Zr = _.ReactDebugCurrentFrame;
    function De(a) {
      if (a) {
        var l = a._owner, p = Pe(a.type, a._source, l ? l.type : null);
        Zr.setExtraStackFrame(p);
      } else
        Zr.setExtraStackFrame(null);
    }
    function Qn(a, l, p, y, S) {
      {
        var T = Function.call.bind(Re);
        for (var C in a)
          if (T(a, C)) {
            var w = void 0;
            try {
              if (typeof a[C] != "function") {
                var G = Error((y || "React class") + ": " + p + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              w = a[C](l, C, y, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              w = I;
            }
            w && !(w instanceof Error) && (De(S), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", p, C, typeof w), De(null)), w instanceof Error && !(w.message in Jr) && (Jr[w.message] = !0, De(S), m("Failed %s type: %s", p, w.message), De(null));
          }
      }
    }
    var ea = Array.isArray;
    function ir(a) {
      return ea(a);
    }
    function ra(a) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, p = l && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return p;
      }
    }
    function ta(a) {
      try {
        return Qr(a), !1;
      } catch {
        return !0;
      }
    }
    function Qr(a) {
      return "" + a;
    }
    function et(a) {
      if (ta(a))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ra(a)), Qr(a);
    }
    var ge = _.ReactCurrentOwner, na = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rt, tt, or;
    or = {};
    function aa(a) {
      if (Re.call(a, "ref")) {
        var l = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function ia(a) {
      if (Re.call(a, "key")) {
        var l = Object.getOwnPropertyDescriptor(a, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function oa(a, l) {
      if (typeof a.ref == "string" && ge.current && l && ge.current.stateNode !== l) {
        var p = K(ge.current.type);
        or[p] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(ge.current.type), a.ref), or[p] = !0);
      }
    }
    function sa(a, l) {
      {
        var p = function() {
          rt || (rt = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function ca(a, l) {
      {
        var p = function() {
          tt || (tt = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        p.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var ua = function(a, l, p, y, S, T, C) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: l,
        ref: p,
        props: C,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function la(a, l, p, y, S) {
      {
        var T, C = {}, w = null, G = null;
        p !== void 0 && (et(p), w = "" + p), ia(l) && (et(l.key), w = "" + l.key), aa(l) && (G = l.ref, oa(l, S));
        for (T in l)
          Re.call(l, T) && !na.hasOwnProperty(T) && (C[T] = l[T]);
        if (a && a.defaultProps) {
          var I = a.defaultProps;
          for (T in I)
            C[T] === void 0 && (C[T] = I[T]);
        }
        if (w || G) {
          var N = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          w && sa(C, N), G && ca(C, N);
        }
        return ua(a, w, G, S, y, ge.current, C);
      }
    }
    var sr = _.ReactCurrentOwner, nt = _.ReactDebugCurrentFrame;
    function ie(a) {
      if (a) {
        var l = a._owner, p = Pe(a.type, a._source, l ? l.type : null);
        nt.setExtraStackFrame(p);
      } else
        nt.setExtraStackFrame(null);
    }
    var cr;
    cr = !1;
    function ur(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function at() {
      {
        if (sr.current) {
          var a = K(sr.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function fa(a) {
      {
        if (a !== void 0) {
          var l = a.fileName.replace(/^.*[\\\/]/, ""), p = a.lineNumber;
          return `

Check your code at ` + l + ":" + p + ".";
        }
        return "";
      }
    }
    var it = {};
    function da(a) {
      {
        var l = at();
        if (!l) {
          var p = typeof a == "string" ? a : a.displayName || a.name;
          p && (l = `

Check the top-level render call using <` + p + ">.");
        }
        return l;
      }
    }
    function ot(a, l) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var p = da(l);
        if (it[p])
          return;
        it[p] = !0;
        var y = "";
        a && a._owner && a._owner !== sr.current && (y = " It was passed a child from " + K(a._owner.type) + "."), ie(a), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, y), ie(null);
      }
    }
    function st(a, l) {
      {
        if (typeof a != "object")
          return;
        if (ir(a))
          for (var p = 0; p < a.length; p++) {
            var y = a[p];
            ur(y) && ot(y, l);
          }
        else if (ur(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var S = E(a);
          if (typeof S == "function" && S !== a.entries)
            for (var T = S.call(a), C; !(C = T.next()).done; )
              ur(C.value) && ot(C.value, l);
        }
      }
    }
    function pa(a) {
      {
        var l = a.type;
        if (l == null || typeof l == "string")
          return;
        var p;
        if (typeof l == "function")
          p = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === h))
          p = l.propTypes;
        else
          return;
        if (p) {
          var y = K(l);
          Qn(p, a.props, "prop", y, a);
        } else if (l.PropTypes !== void 0 && !cr) {
          cr = !0;
          var S = K(l);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ha(a) {
      {
        for (var l = Object.keys(a.props), p = 0; p < l.length; p++) {
          var y = l[p];
          if (y !== "children" && y !== "key") {
            ie(a), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), ie(null);
            break;
          }
        }
        a.ref !== null && (ie(a), m("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
      }
    }
    function ct(a, l, p, y, S, T) {
      {
        var C = ae(a);
        if (!C) {
          var w = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = fa(S);
          G ? w += G : w += at();
          var I;
          a === null ? I = "null" : ir(a) ? I = "array" : a !== void 0 && a.$$typeof === r ? (I = "<" + (K(a.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : I = typeof a, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, w);
        }
        var N = la(a, l, p, S, T);
        if (N == null)
          return N;
        if (C) {
          var V = l.children;
          if (V !== void 0)
            if (y)
              if (ir(V)) {
                for (var oe = 0; oe < V.length; oe++)
                  st(V[oe], a);
                Object.freeze && Object.freeze(V);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              st(V, a);
        }
        return a === n ? ha(N) : pa(N), N;
      }
    }
    function va(a, l, p) {
      return ct(a, l, p, !0);
    }
    function ga(a, l, p) {
      return ct(a, l, p, !1);
    }
    var ya = ga, ma = va;
    me.Fragment = n, me.jsx = ya, me.jsxs = ma;
  }()), me;
}
process.env.NODE_ENV === "production" ? hr.exports = Ea() : hr.exports = $a();
var z = hr.exports;
const Sa = (e, r, t) => {
  const n = ba();
  function i() {
    n.current();
  }
  we(() => {
    n.current = r;
  }, [r]), we(() => {
    let o = setInterval(i, t);
    return () => clearInterval(o);
  }, [e, t]);
}, on = _a(null), Oa = () => an(on), Zh = ({
  children: e
}) => {
  const [r, t] = je([]), [n, i] = je(), [o, s] = je(!1);
  function c() {
    if (n != null && n.length) {
      const h = n == null ? void 0 : n.pop();
      r.length ? t((g) => [...g, h]) : t([h]);
      return;
    }
    s(!0);
  }
  function u(h) {
    i(h);
  }
  function f(h) {
    t([]), i(h), s(!1);
  }
  const d = {
    deactivatedCoords: r,
    animeEnded: o,
    startAnime: u,
    restartAnime: f
  };
  return Sa(o, c, 12.5), /* @__PURE__ */ z.jsx(on.Provider, { value: d, children: e });
}, sn = () => {
  const e = Oa();
  for (const r of e) {
    if (r == null)
      throw new Error(
        "useDisplayDots must be used within a DisplayDotsProvider"
      );
    return;
  }
  return e;
};
function vr() {
  return vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, vr.apply(this, arguments);
}
function cn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Aa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xa = /* @__PURE__ */ cn(
  function(e) {
    return Aa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Ta(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Pa(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Ra = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(i) {
      var o;
      n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, o), n.tags.push(i);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Pa(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var o = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o;
    }
    if (this.isSpeedy) {
      var s = Ta(i);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), M = "-ms-", Be = "-moz-", O = "-webkit-", Sr = "comm", Or = "rule", Ar = "decl", Da = "@import", un = "@keyframes", Ia = "@layer", Na = Math.abs, He = String.fromCharCode, ka = Object.assign;
function ja(e, r) {
  return j(e, 0) ^ 45 ? (((r << 2 ^ j(e, 0)) << 2 ^ j(e, 1)) << 2 ^ j(e, 2)) << 2 ^ j(e, 3) : 0;
}
function ln(e) {
  return e.trim();
}
function Ma(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function A(e, r, t) {
  return e.replace(r, t);
}
function gr(e, r) {
  return e.indexOf(r);
}
function j(e, r) {
  return e.charCodeAt(r) | 0;
}
function Ce(e, r, t) {
  return e.slice(r, t);
}
function Y(e) {
  return e.length;
}
function xr(e) {
  return e.length;
}
function Ne(e, r) {
  return r.push(e), e;
}
function Fa(e, r) {
  return e.map(r).join("");
}
var Ye = 1, ce = 1, fn = 0, U = 0, k = 0, ue = "";
function qe(e, r, t, n, i, o, s) {
  return { value: e, root: r, parent: t, type: n, props: i, children: o, line: Ye, column: ce, length: s, return: "" };
}
function be(e, r) {
  return ka(qe("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function La() {
  return k;
}
function Ga() {
  return k = U > 0 ? j(ue, --U) : 0, ce--, k === 10 && (ce = 1, Ye--), k;
}
function W() {
  return k = U < fn ? j(ue, U++) : 0, ce++, k === 10 && (ce = 1, Ye++), k;
}
function q() {
  return j(ue, U);
}
function Me() {
  return U;
}
function Se(e, r) {
  return Ce(ue, e, r);
}
function Ee(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function dn(e) {
  return Ye = ce = 1, fn = Y(ue = e), U = 0, [];
}
function pn(e) {
  return ue = "", e;
}
function Fe(e) {
  return ln(Se(U - 1, yr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ba(e) {
  for (; (k = q()) && k < 33; )
    W();
  return Ee(e) > 2 || Ee(k) > 3 ? "" : " ";
}
function Ua(e, r) {
  for (; --r && W() && !(k < 48 || k > 102 || k > 57 && k < 65 || k > 70 && k < 97); )
    ;
  return Se(e, Me() + (r < 6 && q() == 32 && W() == 32));
}
function yr(e) {
  for (; W(); )
    switch (k) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && yr(k);
        break;
      case 40:
        e === 41 && yr(e);
        break;
      case 92:
        W();
        break;
    }
  return U;
}
function Wa(e, r) {
  for (; W() && e + k !== 47 + 10; )
    if (e + k === 42 + 42 && q() === 47)
      break;
  return "/*" + Se(r, U - 1) + "*" + He(e === 47 ? e : W());
}
function Va(e) {
  for (; !Ee(q()); )
    W();
  return Se(e, U);
}
function za(e) {
  return pn(Le("", null, null, null, [""], e = dn(e), 0, [0], e));
}
function Le(e, r, t, n, i, o, s, c, u) {
  for (var f = 0, d = 0, h = s, g = 0, $ = 0, b = 0, v = 1, E = 1, _ = 1, m = 0, R = "", F = i, D = o, L = n, x = R; E; )
    switch (b = m, m = W()) {
      case 40:
        if (b != 108 && j(x, h - 1) == 58) {
          gr(x += A(Fe(m), "&", "&\f"), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Fe(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += Ba(b);
        break;
      case 92:
        x += Ua(Me() - 1, 7);
        continue;
      case 47:
        switch (q()) {
          case 42:
          case 47:
            Ne(Ha(Wa(W(), Me()), r, t), u);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * v:
        c[f++] = Y(x) * _;
      case 125 * v:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            E = 0;
          case 59 + d:
            _ == -1 && (x = A(x, /\f/g, "")), $ > 0 && Y(x) - h && Ne($ > 32 ? ht(x + ";", n, t, h - 1) : ht(A(x, " ", "") + ";", n, t, h - 2), u);
            break;
          case 59:
            x += ";";
          default:
            if (Ne(L = pt(x, r, t, f, d, i, c, R, F = [], D = [], h), o), m === 123)
              if (d === 0)
                Le(x, r, L, L, F, o, h, c, D);
              else
                switch (g === 99 && j(x, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Le(e, L, L, n && Ne(pt(e, L, L, 0, 0, i, c, R, i, F = [], h), D), i, D, h, c, n ? F : D);
                    break;
                  default:
                    Le(x, L, L, L, [""], D, 0, c, D);
                }
        }
        f = d = $ = 0, v = _ = 1, R = x = "", h = s;
        break;
      case 58:
        h = 1 + Y(x), $ = b;
      default:
        if (v < 1) {
          if (m == 123)
            --v;
          else if (m == 125 && v++ == 0 && Ga() == 125)
            continue;
        }
        switch (x += He(m), m * v) {
          case 38:
            _ = d > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            c[f++] = (Y(x) - 1) * _, _ = 1;
            break;
          case 64:
            q() === 45 && (x += Fe(W())), g = q(), d = h = Y(R = x += Va(Me())), m++;
            break;
          case 45:
            b === 45 && Y(x) == 2 && (v = 0);
        }
    }
  return o;
}
function pt(e, r, t, n, i, o, s, c, u, f, d) {
  for (var h = i - 1, g = i === 0 ? o : [""], $ = xr(g), b = 0, v = 0, E = 0; b < n; ++b)
    for (var _ = 0, m = Ce(e, h + 1, h = Na(v = s[b])), R = e; _ < $; ++_)
      (R = ln(v > 0 ? g[_] + " " + m : A(m, /&\f/g, g[_]))) && (u[E++] = R);
  return qe(e, r, t, i === 0 ? Or : c, u, f, d);
}
function Ha(e, r, t) {
  return qe(e, r, t, Sr, He(La()), Ce(e, 2, -2), 0);
}
function ht(e, r, t, n) {
  return qe(e, r, t, Ar, Ce(e, 0, n), Ce(e, n + 1, -1), n);
}
function se(e, r) {
  for (var t = "", n = xr(e), i = 0; i < n; i++)
    t += r(e[i], i, e, r) || "";
  return t;
}
function Ya(e, r, t, n) {
  switch (e.type) {
    case Ia:
      if (e.children.length)
        break;
    case Da:
    case Ar:
      return e.return = e.return || e.value;
    case Sr:
      return "";
    case un:
      return e.return = e.value + "{" + se(e.children, n) + "}";
    case Or:
      e.value = e.props.join(",");
  }
  return Y(t = se(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function qa(e) {
  var r = xr(e);
  return function(t, n, i, o) {
    for (var s = "", c = 0; c < r; c++)
      s += e[c](t, n, i, o) || "";
    return s;
  };
}
function Ka(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var Xa = function(r, t, n) {
  for (var i = 0, o = 0; i = o, o = q(), i === 38 && o === 12 && (t[n] = 1), !Ee(o); )
    W();
  return Se(r, U);
}, Ja = function(r, t) {
  var n = -1, i = 44;
  do
    switch (Ee(i)) {
      case 0:
        i === 38 && q() === 12 && (t[n] = 1), r[n] += Xa(U - 1, t, n);
        break;
      case 2:
        r[n] += Fe(i);
        break;
      case 4:
        if (i === 44) {
          r[++n] = q() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += He(i);
    }
  while (i = W());
  return r;
}, Za = function(r, t) {
  return pn(Ja(dn(r), t));
}, vt = /* @__PURE__ */ new WeakMap(), Qa = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, i = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !vt.get(n)) && !i) {
      vt.set(r, !0);
      for (var o = [], s = Za(t, o), c = n.props, u = 0, f = 0; u < s.length; u++)
        for (var d = 0; d < c.length; d++, f++)
          r.props[f] = o[u] ? s[u].replace(/&\f/g, c[d]) : c[d] + " " + s[u];
    }
  }
}, ei = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, ri = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", ti = function(r) {
  return r.type === "comm" && r.children.indexOf(ri) > -1;
}, ni = function(r) {
  return function(t, n, i) {
    if (!(t.type !== "rule" || r.compat)) {
      var o = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var s = !!t.parent, c = s ? t.parent.children : (
          // global rule at the root level
          i
        ), u = c.length - 1; u >= 0; u--) {
          var f = c[u];
          if (f.line < t.line)
            break;
          if (f.column < t.column) {
            if (ti(f))
              return;
            break;
          }
        }
        o.forEach(function(d) {
          console.error('The pseudo class "' + d + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + d.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, hn = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, ai = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!hn(t[n]))
      return !0;
  return !1;
}, gt = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, ii = function(r, t, n) {
  hn(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), gt(r)) : ai(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), gt(r)));
};
function vn(e, r) {
  switch (ja(e, r)) {
    case 5103:
      return O + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return O + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O + e + Be + e + M + e + e;
    case 6828:
    case 4268:
      return O + e + M + e + e;
    case 6165:
      return O + e + M + "flex-" + e + e;
    case 5187:
      return O + e + A(e, /(\w+).+(:[^]+)/, O + "box-$1$2" + M + "flex-$1$2") + e;
    case 5443:
      return O + e + M + "flex-item-" + A(e, /flex-|-self/, "") + e;
    case 4675:
      return O + e + M + "flex-line-pack" + A(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return O + e + M + A(e, "shrink", "negative") + e;
    case 5292:
      return O + e + M + A(e, "basis", "preferred-size") + e;
    case 6060:
      return O + "box-" + A(e, "-grow", "") + O + e + M + A(e, "grow", "positive") + e;
    case 4554:
      return O + A(e, /([^-])(transform)/g, "$1" + O + "$2") + e;
    case 6187:
      return A(A(A(e, /(zoom-|grab)/, O + "$1"), /(image-set)/, O + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return A(e, /(image-set\([^]*)/, O + "$1$`$1");
    case 4968:
      return A(A(e, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + M + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return A(e, /(.+)-inline(.+)/, O + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Y(e) - 1 - r > 6)
        switch (j(e, r + 1)) {
          case 109:
            if (j(e, r + 4) !== 45)
              break;
          case 102:
            return A(e, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + Be + (j(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~gr(e, "stretch") ? vn(A(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (j(e, r + 1) !== 115)
        break;
    case 6444:
      switch (j(e, Y(e) - 3 - (~gr(e, "!important") && 10))) {
        case 107:
          return A(e, ":", ":" + O) + e;
        case 101:
          return A(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + O + (j(e, 14) === 45 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + M + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (j(e, r + 11)) {
        case 114:
          return O + e + M + A(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return O + e + M + A(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return O + e + M + A(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return O + e + M + e + e;
  }
  return e;
}
var oi = function(r, t, n, i) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Ar:
        r.return = vn(r.value, r.length);
        break;
      case un:
        return se([be(r, {
          value: A(r.value, "@", "@" + O)
        })], i);
      case Or:
        if (r.length)
          return Fa(r.props, function(o) {
            switch (Ma(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return se([be(r, {
                  props: [A(o, /:(read-\w+)/, ":" + Be + "$1")]
                })], i);
              case "::placeholder":
                return se([be(r, {
                  props: [A(o, /:(plac\w+)/, ":" + O + "input-$1")]
                }), be(r, {
                  props: [A(o, /:(plac\w+)/, ":" + Be + "$1")]
                }), be(r, {
                  props: [A(o, /:(plac\w+)/, M + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, si = [oi], ci = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(v) {
      var E = v.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var i = r.stylisPlugins || si;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var o = {}, s, c = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(v) {
      for (var E = v.getAttribute("data-emotion").split(" "), _ = 1; _ < E.length; _++)
        o[E[_]] = !0;
      c.push(v);
    }
  );
  var u, f = [Qa, ei];
  process.env.NODE_ENV !== "production" && f.push(ni({
    get compat() {
      return b.compat;
    }
  }), ii);
  {
    var d, h = [Ya, process.env.NODE_ENV !== "production" ? function(v) {
      v.root || (v.return ? d.insert(v.return) : v.value && v.type !== Sr && d.insert(v.value + "{}"));
    } : Ka(function(v) {
      d.insert(v);
    })], g = qa(f.concat(i, h)), $ = function(E) {
      return se(za(E), g);
    };
    u = function(E, _, m, R) {
      d = m, process.env.NODE_ENV !== "production" && _.map !== void 0 && (d = {
        insert: function(D) {
          m.insert(D + _.map);
        }
      }), $(E ? E + "{" + _.styles + "}" : _.styles), R && (b.inserted[_.name] = !0);
    };
  }
  var b = {
    key: t,
    sheet: new Ra({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: o,
    registered: {},
    insert: u
  };
  return b.sheet.hydrate(c), b;
}, ui = !0;
function gn(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(i) {
    e[i] !== void 0 ? r.push(e[i] + ";") : n += i + " ";
  }), n;
}
var Tr = function(r, t, n) {
  var i = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ui === !1) && r.registered[i] === void 0 && (r.registered[i] = t.styles);
}, yn = function(r, t, n) {
  Tr(r, t, n);
  var i = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var o = t;
    do
      r.insert(t === o ? "." + i : "", o, r.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function li(e) {
  for (var r = 0, t, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var fi = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, yt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, di = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", pi = /[A-Z]|^ms/g, mn = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Pr = function(r) {
  return r.charCodeAt(1) === 45;
}, mt = function(r) {
  return r != null && typeof r != "boolean";
}, lr = /* @__PURE__ */ cn(function(e) {
  return Pr(e) ? e : e.replace(pi, "-$&").toLowerCase();
}), Ue = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(mn, function(n, i, o) {
          return H = {
            name: i,
            styles: o,
            next: H
          }, i;
        });
  }
  return fi[r] !== 1 && !Pr(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var hi = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, vi = ["normal", "none", "initial", "inherit", "unset"], gi = Ue, yi = /^-ms-/, mi = /-(.)/g, bt = {};
  Ue = function(r, t) {
    if (r === "content" && (typeof t != "string" || vi.indexOf(t) === -1 && !hi.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = gi(r, t);
    return n !== "" && !Pr(r) && r.indexOf("-") !== -1 && bt[r] === void 0 && (bt[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(yi, "ms-").replace(mi, function(i, o) {
      return o.toUpperCase();
    }) + "?")), n;
  };
}
var bn = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function $e(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(bn);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return H = {
          name: t.name,
          styles: t.styles,
          next: H
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            H = {
              name: n.name,
              styles: n.styles,
              next: H
            }, n = n.next;
        var i = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (i += t.map), i;
      }
      return bi(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var o = H, s = t(e);
        return H = o, $e(e, r, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], u = t.replace(mn, function(d, h, g) {
          var $ = "animation" + c.length;
          return c.push("const " + $ + " = keyframes`" + g.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + $ + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var f = r[t];
  return f !== void 0 ? f : t;
}
function bi(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var i = 0; i < t.length; i++)
      n += $e(e, r, t[i]) + ";";
  else
    for (var o in t) {
      var s = t[o];
      if (typeof s != "object")
        r != null && r[s] !== void 0 ? n += o + "{" + r[s] + "}" : mt(s) && (n += lr(o) + ":" + Ue(o, s) + ";");
      else {
        if (o === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(bn);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            mt(s[c]) && (n += lr(o) + ":" + Ue(o, s[c]) + ";");
        else {
          var u = $e(e, r, s);
          switch (o) {
            case "animation":
            case "animationName": {
              n += lr(o) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && o === "undefined" && console.error(di), n += o + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var _t = /label:\s*([^\s;\n{]+)\s*(;|$)/g, _n;
process.env.NODE_ENV !== "production" && (_n = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var H, mr = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var i = !0, o = "";
  H = void 0;
  var s = r[0];
  s == null || s.raw === void 0 ? (i = !1, o += $e(n, t, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(yt), o += s[0]);
  for (var c = 1; c < r.length; c++)
    o += $e(n, t, r[c]), i && (process.env.NODE_ENV !== "production" && s[c] === void 0 && console.error(yt), o += s[c]);
  var u;
  process.env.NODE_ENV !== "production" && (o = o.replace(_n, function(g) {
    return u = g, "";
  })), _t.lastIndex = 0;
  for (var f = "", d; (d = _t.exec(o)) !== null; )
    f += "-" + // $FlowFixMe we know it's not null
    d[1];
  var h = li(o) + f;
  return process.env.NODE_ENV !== "production" ? {
    name: h,
    styles: o,
    map: u,
    next: H,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: h,
    styles: o,
    next: H
  };
}, _i = function(r) {
  return r();
}, wi = B["useInsertionEffect"] ? B["useInsertionEffect"] : !1, wn = wi || _i, Ci = {}.hasOwnProperty, Rr = /* @__PURE__ */ B.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ci({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Rr.displayName = "EmotionCacheContext");
Rr.Provider;
var Cn = function(r) {
  return /* @__PURE__ */ wa(function(t, n) {
    var i = an(Rr);
    return r(t, i, n);
  });
}, Dr = /* @__PURE__ */ B.createContext({});
process.env.NODE_ENV !== "production" && (Dr.displayName = "EmotionThemeContext");
var wt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ct = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Ei = function(r) {
  var t = r.cache, n = r.serialized, i = r.isStringTag;
  return Tr(t, n, i), wn(function() {
    return yn(t, n, i);
  }), null;
}, $i = /* @__PURE__ */ Cn(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var i = e[wt], o = [n], s = "";
  typeof e.className == "string" ? s = gn(r.registered, o, e.className) : e.className != null && (s = e.className + " ");
  var c = mr(o, void 0, B.useContext(Dr));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = e[Ct];
    u && (c = mr([c, "label:" + u + ";"]));
  }
  s += r.key + "-" + c.name;
  var f = {};
  for (var d in e)
    Ci.call(e, d) && d !== "css" && d !== wt && (process.env.NODE_ENV === "production" || d !== Ct) && (f[d] = e[d]);
  return f.ref = t, f.className = s, /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement(Ei, {
    cache: r,
    serialized: c,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ B.createElement(i, f));
});
process.env.NODE_ENV !== "production" && ($i.displayName = "EmotionCssPropInternal");
var Si = xa, Oi = function(r) {
  return r !== "theme";
}, Et = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Si : Oi;
}, $t = function(r, t, n) {
  var i;
  if (t) {
    var o = t.shouldForwardProp;
    i = r.__emotion_forwardProp && o ? function(s) {
      return r.__emotion_forwardProp(s) && o(s);
    } : o;
  }
  return typeof i != "function" && n && (i = r.__emotion_forwardProp), i;
}, St = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ai = function(r) {
  var t = r.cache, n = r.serialized, i = r.isStringTag;
  return Tr(t, n, i), wn(function() {
    return yn(t, n, i);
  }), null;
}, xi = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, i = n && r.__emotion_base || r, o, s;
  t !== void 0 && (o = t.label, s = t.target);
  var c = $t(r, t, n), u = c || Et(i), f = !u("as");
  return function() {
    var d = arguments, h = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (o !== void 0 && h.push("label:" + o + ";"), d[0] == null || d[0].raw === void 0)
      h.push.apply(h, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(St), h.push(d[0][0]);
      for (var g = d.length, $ = 1; $ < g; $++)
        process.env.NODE_ENV !== "production" && d[0][$] === void 0 && console.error(St), h.push(d[$], d[0][$]);
    }
    var b = Cn(function(v, E, _) {
      var m = f && v.as || i, R = "", F = [], D = v;
      if (v.theme == null) {
        D = {};
        for (var L in v)
          D[L] = v[L];
        D.theme = B.useContext(Dr);
      }
      typeof v.className == "string" ? R = gn(E.registered, F, v.className) : v.className != null && (R = v.className + " ");
      var x = mr(h.concat(F), E.registered, D);
      R += E.key + "-" + x.name, s !== void 0 && (R += " " + s);
      var rr = f && c === void 0 ? Et(m) : u, ee = {};
      for (var ae in v)
        f && ae === "as" || // $FlowFixMe
        rr(ae) && (ee[ae] = v[ae]);
      return ee.className = R, ee.ref = _, /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement(Ai, {
        cache: E,
        serialized: x,
        isStringTag: typeof m == "string"
      }), /* @__PURE__ */ B.createElement(m, ee));
    });
    return b.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", b.defaultProps = r.defaultProps, b.__emotion_real = b, b.__emotion_base = i, b.__emotion_styles = h, b.__emotion_forwardProp = c, Object.defineProperty(b, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), b.withComponent = function(v, E) {
      return e(v, vr({}, t, E, {
        shouldForwardProp: $t(b, E, !0)
      })).apply(void 0, h);
    }, b;
  };
}, Ti = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Q = xi.bind();
Ti.forEach(function(e) {
  Q[e] = Q(e);
});
const Pi = Q.div`
  background: #000000;
  border-radius: 50%;
  display: inline-block;
  height: 0.425rem;
  width: 0.425rem;
  margin: 0.085rem;
  opacity: ${({ isDeactivated: e }) => e ? 0 : 1};

  @media (max-width: 640em) {
    height: 0.25rem;
    width: 0.25rem;
    margin: 0.05rem;
  }
`, Ri = ({ coord: e }) => {
  const [r, t] = je(!1), { deactivatedCoords: n, animeEnded: i } = sn();
  return we(() => {
    i || t(!1);
  }, [i]), we(() => {
    const o = n ? n[n.length - 1] : void 0;
    o && o[0] === e[0] && o[1] === e[1] && t(!0);
  }, [e, n]), /* @__PURE__ */ z.jsx(Pi, { isDeactivated: r });
}, Di = Q.div`
  display: flex;
  width: ${({ width: e }) => `${e}rem`}
  margin: none;
`, Ii = ({ coordRow: e }) => {
  const r = e.length;
  return /* @__PURE__ */ z.jsx(Di, { width: r, children: e.map((t, n) => /* @__PURE__ */ z.jsx(Ri, { coord: t }, n)) });
}, Ni = Q.div``, ki = ({ char: e }) => {
  const r = Object.values(e.allCoordsByRow);
  return /* @__PURE__ */ z.jsx(Ni, { children: r.map((t, n) => /* @__PURE__ */ z.jsx(Ii, { coordRow: t }, n)) });
}, ji = Q.div`
  display: flex;
`, Mi = ({ wordOrSpace: e }) => /* @__PURE__ */ z.jsx(ji, { children: e.map((r, t) => /* @__PURE__ */ z.jsx(ki, { char: r }, t)) });
var Fi = typeof Ie == "object" && Ie && Ie.Object === Object && Ie, En = Fi, Li = En, Gi = typeof self == "object" && self && self.Object === Object && self, Bi = Li || Gi || Function("return this")(), J = Bi, Ui = J, Wi = Ui.Symbol, Ke = Wi, Ot = Ke, $n = Object.prototype, Vi = $n.hasOwnProperty, zi = $n.toString, _e = Ot ? Ot.toStringTag : void 0;
function Hi(e) {
  var r = Vi.call(e, _e), t = e[_e];
  try {
    e[_e] = void 0;
    var n = !0;
  } catch {
  }
  var i = zi.call(e);
  return n && (r ? e[_e] = t : delete e[_e]), i;
}
var Yi = Hi, qi = Object.prototype, Ki = qi.toString;
function Xi(e) {
  return Ki.call(e);
}
var Ji = Xi, At = Ke, Zi = Yi, Qi = Ji, eo = "[object Null]", ro = "[object Undefined]", xt = At ? At.toStringTag : void 0;
function to(e) {
  return e == null ? e === void 0 ? ro : eo : xt && xt in Object(e) ? Zi(e) : Qi(e);
}
var Oe = to;
function no(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Ir = no, ao = Oe, io = Ir, oo = "[object AsyncFunction]", so = "[object Function]", co = "[object GeneratorFunction]", uo = "[object Proxy]";
function lo(e) {
  if (!io(e))
    return !1;
  var r = ao(e);
  return r == so || r == co || r == oo || r == uo;
}
var Sn = lo, fo = J, po = fo["__core-js_shared__"], ho = po, fr = ho, Tt = function() {
  var e = /[^.]+$/.exec(fr && fr.keys && fr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function vo(e) {
  return !!Tt && Tt in e;
}
var go = vo, yo = Function.prototype, mo = yo.toString;
function bo(e) {
  if (e != null) {
    try {
      return mo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var On = bo, _o = Sn, wo = go, Co = Ir, Eo = On, $o = /[\\^$.*+?()[\]{}|]/g, So = /^\[object .+?Constructor\]$/, Oo = Function.prototype, Ao = Object.prototype, xo = Oo.toString, To = Ao.hasOwnProperty, Po = RegExp(
  "^" + xo.call(To).replace($o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ro(e) {
  if (!Co(e) || wo(e))
    return !1;
  var r = _o(e) ? Po : So;
  return r.test(Eo(e));
}
var Do = Ro;
function Io(e, r) {
  return e == null ? void 0 : e[r];
}
var No = Io, ko = Do, jo = No;
function Mo(e, r) {
  var t = jo(e, r);
  return ko(t) ? t : void 0;
}
var ne = Mo, Fo = ne, Lo = function() {
  try {
    var e = Fo(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Go = Lo, Pt = Go;
function Bo(e, r, t) {
  r == "__proto__" && Pt ? Pt(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var Uo = Bo;
function Wo(e, r, t, n) {
  for (var i = -1, o = e == null ? 0 : e.length; ++i < o; ) {
    var s = e[i];
    r(n, s, t(s), e);
  }
  return n;
}
var Vo = Wo;
function zo(e) {
  return function(r, t, n) {
    for (var i = -1, o = Object(r), s = n(r), c = s.length; c--; ) {
      var u = s[e ? c : ++i];
      if (t(o[u], u, o) === !1)
        break;
    }
    return r;
  };
}
var Ho = zo, Yo = Ho, qo = Yo(), Ko = qo;
function Xo(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Jo = Xo;
function Zo(e) {
  return e != null && typeof e == "object";
}
var Ae = Zo, Qo = Oe, es = Ae, rs = "[object Arguments]";
function ts(e) {
  return es(e) && Qo(e) == rs;
}
var ns = ts, Rt = ns, as = Ae, An = Object.prototype, is = An.hasOwnProperty, os = An.propertyIsEnumerable, ss = Rt(function() {
  return arguments;
}()) ? Rt : function(e) {
  return as(e) && is.call(e, "callee") && !os.call(e, "callee");
}, xn = ss, cs = Array.isArray, Z = cs, We = { exports: {} };
function us() {
  return !1;
}
var ls = us;
We.exports;
(function(e, r) {
  var t = J, n = ls, i = r && !r.nodeType && r, o = i && !0 && e && !e.nodeType && e, s = o && o.exports === i, c = s ? t.Buffer : void 0, u = c ? c.isBuffer : void 0, f = u || n;
  e.exports = f;
})(We, We.exports);
var Tn = We.exports, fs = 9007199254740991, ds = /^(?:0|[1-9]\d*)$/;
function ps(e, r) {
  var t = typeof e;
  return r = r ?? fs, !!r && (t == "number" || t != "symbol" && ds.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Pn = ps, hs = 9007199254740991;
function vs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= hs;
}
var Nr = vs, gs = Oe, ys = Nr, ms = Ae, bs = "[object Arguments]", _s = "[object Array]", ws = "[object Boolean]", Cs = "[object Date]", Es = "[object Error]", $s = "[object Function]", Ss = "[object Map]", Os = "[object Number]", As = "[object Object]", xs = "[object RegExp]", Ts = "[object Set]", Ps = "[object String]", Rs = "[object WeakMap]", Ds = "[object ArrayBuffer]", Is = "[object DataView]", Ns = "[object Float32Array]", ks = "[object Float64Array]", js = "[object Int8Array]", Ms = "[object Int16Array]", Fs = "[object Int32Array]", Ls = "[object Uint8Array]", Gs = "[object Uint8ClampedArray]", Bs = "[object Uint16Array]", Us = "[object Uint32Array]", P = {};
P[Ns] = P[ks] = P[js] = P[Ms] = P[Fs] = P[Ls] = P[Gs] = P[Bs] = P[Us] = !0;
P[bs] = P[_s] = P[Ds] = P[ws] = P[Is] = P[Cs] = P[Es] = P[$s] = P[Ss] = P[Os] = P[As] = P[xs] = P[Ts] = P[Ps] = P[Rs] = !1;
function Ws(e) {
  return ms(e) && ys(e.length) && !!P[gs(e)];
}
var Vs = Ws;
function zs(e) {
  return function(r) {
    return e(r);
  };
}
var Hs = zs, Ve = { exports: {} };
Ve.exports;
(function(e, r) {
  var t = En, n = r && !r.nodeType && r, i = n && !0 && e && !e.nodeType && e, o = i && i.exports === n, s = o && t.process, c = function() {
    try {
      var u = i && i.require && i.require("util").types;
      return u || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(Ve, Ve.exports);
var Ys = Ve.exports, qs = Vs, Ks = Hs, Dt = Ys, It = Dt && Dt.isTypedArray, Xs = It ? Ks(It) : qs, Rn = Xs, Js = Jo, Zs = xn, Qs = Z, ec = Tn, rc = Pn, tc = Rn, nc = Object.prototype, ac = nc.hasOwnProperty;
function ic(e, r) {
  var t = Qs(e), n = !t && Zs(e), i = !t && !n && ec(e), o = !t && !n && !i && tc(e), s = t || n || i || o, c = s ? Js(e.length, String) : [], u = c.length;
  for (var f in e)
    (r || ac.call(e, f)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    rc(f, u))) && c.push(f);
  return c;
}
var oc = ic, sc = Object.prototype;
function cc(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || sc;
  return e === t;
}
var uc = cc;
function lc(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var fc = lc, dc = fc, pc = dc(Object.keys, Object), hc = pc, vc = uc, gc = hc, yc = Object.prototype, mc = yc.hasOwnProperty;
function bc(e) {
  if (!vc(e))
    return gc(e);
  var r = [];
  for (var t in Object(e))
    mc.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var _c = bc, wc = Sn, Cc = Nr;
function Ec(e) {
  return e != null && Cc(e.length) && !wc(e);
}
var Dn = Ec, $c = oc, Sc = _c, Oc = Dn;
function Ac(e) {
  return Oc(e) ? $c(e) : Sc(e);
}
var kr = Ac, xc = Ko, Tc = kr;
function Pc(e, r) {
  return e && xc(e, r, Tc);
}
var Rc = Pc, Dc = Dn;
function Ic(e, r) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!Dc(t))
      return e(t, n);
    for (var i = t.length, o = r ? i : -1, s = Object(t); (r ? o-- : ++o < i) && n(s[o], o, s) !== !1; )
      ;
    return t;
  };
}
var Nc = Ic, kc = Rc, jc = Nc, Mc = jc(kc), Fc = Mc, Lc = Fc;
function Gc(e, r, t, n) {
  return Lc(e, function(i, o, s) {
    r(n, i, t(i), s);
  }), n;
}
var Bc = Gc;
function Uc() {
  this.__data__ = [], this.size = 0;
}
var Wc = Uc;
function Vc(e, r) {
  return e === r || e !== e && r !== r;
}
var In = Vc, zc = In;
function Hc(e, r) {
  for (var t = e.length; t--; )
    if (zc(e[t][0], r))
      return t;
  return -1;
}
var Xe = Hc, Yc = Xe, qc = Array.prototype, Kc = qc.splice;
function Xc(e) {
  var r = this.__data__, t = Yc(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : Kc.call(r, t, 1), --this.size, !0;
}
var Jc = Xc, Zc = Xe;
function Qc(e) {
  var r = this.__data__, t = Zc(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var eu = Qc, ru = Xe;
function tu(e) {
  return ru(this.__data__, e) > -1;
}
var nu = tu, au = Xe;
function iu(e, r) {
  var t = this.__data__, n = au(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
var ou = iu, su = Wc, cu = Jc, uu = eu, lu = nu, fu = ou;
function le(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
le.prototype.clear = su;
le.prototype.delete = cu;
le.prototype.get = uu;
le.prototype.has = lu;
le.prototype.set = fu;
var Je = le, du = Je;
function pu() {
  this.__data__ = new du(), this.size = 0;
}
var hu = pu;
function vu(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var gu = vu;
function yu(e) {
  return this.__data__.get(e);
}
var mu = yu;
function bu(e) {
  return this.__data__.has(e);
}
var _u = bu, wu = ne, Cu = J, Eu = wu(Cu, "Map"), jr = Eu, $u = ne, Su = $u(Object, "create"), Ze = Su, Nt = Ze;
function Ou() {
  this.__data__ = Nt ? Nt(null) : {}, this.size = 0;
}
var Au = Ou;
function xu(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Tu = xu, Pu = Ze, Ru = "__lodash_hash_undefined__", Du = Object.prototype, Iu = Du.hasOwnProperty;
function Nu(e) {
  var r = this.__data__;
  if (Pu) {
    var t = r[e];
    return t === Ru ? void 0 : t;
  }
  return Iu.call(r, e) ? r[e] : void 0;
}
var ku = Nu, ju = Ze, Mu = Object.prototype, Fu = Mu.hasOwnProperty;
function Lu(e) {
  var r = this.__data__;
  return ju ? r[e] !== void 0 : Fu.call(r, e);
}
var Gu = Lu, Bu = Ze, Uu = "__lodash_hash_undefined__";
function Wu(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Bu && r === void 0 ? Uu : r, this;
}
var Vu = Wu, zu = Au, Hu = Tu, Yu = ku, qu = Gu, Ku = Vu;
function fe(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
fe.prototype.clear = zu;
fe.prototype.delete = Hu;
fe.prototype.get = Yu;
fe.prototype.has = qu;
fe.prototype.set = Ku;
var Xu = fe, kt = Xu, Ju = Je, Zu = jr;
function Qu() {
  this.size = 0, this.__data__ = {
    hash: new kt(),
    map: new (Zu || Ju)(),
    string: new kt()
  };
}
var el = Qu;
function rl(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var tl = rl, nl = tl;
function al(e, r) {
  var t = e.__data__;
  return nl(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var Qe = al, il = Qe;
function ol(e) {
  var r = il(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var sl = ol, cl = Qe;
function ul(e) {
  return cl(this, e).get(e);
}
var ll = ul, fl = Qe;
function dl(e) {
  return fl(this, e).has(e);
}
var pl = dl, hl = Qe;
function vl(e, r) {
  var t = hl(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
var gl = vl, yl = el, ml = sl, bl = ll, _l = pl, wl = gl;
function de(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
de.prototype.clear = yl;
de.prototype.delete = ml;
de.prototype.get = bl;
de.prototype.has = _l;
de.prototype.set = wl;
var Mr = de, Cl = Je, El = jr, $l = Mr, Sl = 200;
function Ol(e, r) {
  var t = this.__data__;
  if (t instanceof Cl) {
    var n = t.__data__;
    if (!El || n.length < Sl - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new $l(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
var Al = Ol, xl = Je, Tl = hu, Pl = gu, Rl = mu, Dl = _u, Il = Al;
function pe(e) {
  var r = this.__data__ = new xl(e);
  this.size = r.size;
}
pe.prototype.clear = Tl;
pe.prototype.delete = Pl;
pe.prototype.get = Rl;
pe.prototype.has = Dl;
pe.prototype.set = Il;
var Nn = pe, Nl = "__lodash_hash_undefined__";
function kl(e) {
  return this.__data__.set(e, Nl), this;
}
var jl = kl;
function Ml(e) {
  return this.__data__.has(e);
}
var Fl = Ml, Ll = Mr, Gl = jl, Bl = Fl;
function ze(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new Ll(); ++r < t; )
    this.add(e[r]);
}
ze.prototype.add = ze.prototype.push = Gl;
ze.prototype.has = Bl;
var Ul = ze;
function Wl(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n; )
    if (r(e[t], t, e))
      return !0;
  return !1;
}
var Vl = Wl;
function zl(e, r) {
  return e.has(r);
}
var Hl = zl, Yl = Ul, ql = Vl, Kl = Hl, Xl = 1, Jl = 2;
function Zl(e, r, t, n, i, o) {
  var s = t & Xl, c = e.length, u = r.length;
  if (c != u && !(s && u > c))
    return !1;
  var f = o.get(e), d = o.get(r);
  if (f && d)
    return f == r && d == e;
  var h = -1, g = !0, $ = t & Jl ? new Yl() : void 0;
  for (o.set(e, r), o.set(r, e); ++h < c; ) {
    var b = e[h], v = r[h];
    if (n)
      var E = s ? n(v, b, h, r, e, o) : n(b, v, h, e, r, o);
    if (E !== void 0) {
      if (E)
        continue;
      g = !1;
      break;
    }
    if ($) {
      if (!ql(r, function(_, m) {
        if (!Kl($, m) && (b === _ || i(b, _, t, n, o)))
          return $.push(m);
      })) {
        g = !1;
        break;
      }
    } else if (!(b === v || i(b, v, t, n, o))) {
      g = !1;
      break;
    }
  }
  return o.delete(e), o.delete(r), g;
}
var kn = Zl, Ql = J, ef = Ql.Uint8Array, rf = ef;
function tf(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n, i) {
    t[++r] = [i, n];
  }), t;
}
var nf = tf;
function af(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n) {
    t[++r] = n;
  }), t;
}
var of = af, jt = Ke, Mt = rf, sf = In, cf = kn, uf = nf, lf = of, ff = 1, df = 2, pf = "[object Boolean]", hf = "[object Date]", vf = "[object Error]", gf = "[object Map]", yf = "[object Number]", mf = "[object RegExp]", bf = "[object Set]", _f = "[object String]", wf = "[object Symbol]", Cf = "[object ArrayBuffer]", Ef = "[object DataView]", Ft = jt ? jt.prototype : void 0, dr = Ft ? Ft.valueOf : void 0;
function $f(e, r, t, n, i, o, s) {
  switch (t) {
    case Ef:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Cf:
      return !(e.byteLength != r.byteLength || !o(new Mt(e), new Mt(r)));
    case pf:
    case hf:
    case yf:
      return sf(+e, +r);
    case vf:
      return e.name == r.name && e.message == r.message;
    case mf:
    case _f:
      return e == r + "";
    case gf:
      var c = uf;
    case bf:
      var u = n & ff;
      if (c || (c = lf), e.size != r.size && !u)
        return !1;
      var f = s.get(e);
      if (f)
        return f == r;
      n |= df, s.set(e, r);
      var d = cf(c(e), c(r), n, i, o, s);
      return s.delete(e), d;
    case wf:
      if (dr)
        return dr.call(e) == dr.call(r);
  }
  return !1;
}
var Sf = $f;
function Of(e, r) {
  for (var t = -1, n = r.length, i = e.length; ++t < n; )
    e[i + t] = r[t];
  return e;
}
var Af = Of, xf = Af, Tf = Z;
function Pf(e, r, t) {
  var n = r(e);
  return Tf(e) ? n : xf(n, t(e));
}
var Rf = Pf;
function Df(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++t < n; ) {
    var s = e[t];
    r(s, t, e) && (o[i++] = s);
  }
  return o;
}
var If = Df;
function Nf() {
  return [];
}
var kf = Nf, jf = If, Mf = kf, Ff = Object.prototype, Lf = Ff.propertyIsEnumerable, Lt = Object.getOwnPropertySymbols, Gf = Lt ? function(e) {
  return e == null ? [] : (e = Object(e), jf(Lt(e), function(r) {
    return Lf.call(e, r);
  }));
} : Mf, Bf = Gf, Uf = Rf, Wf = Bf, Vf = kr;
function zf(e) {
  return Uf(e, Vf, Wf);
}
var Hf = zf, Gt = Hf, Yf = 1, qf = Object.prototype, Kf = qf.hasOwnProperty;
function Xf(e, r, t, n, i, o) {
  var s = t & Yf, c = Gt(e), u = c.length, f = Gt(r), d = f.length;
  if (u != d && !s)
    return !1;
  for (var h = u; h--; ) {
    var g = c[h];
    if (!(s ? g in r : Kf.call(r, g)))
      return !1;
  }
  var $ = o.get(e), b = o.get(r);
  if ($ && b)
    return $ == r && b == e;
  var v = !0;
  o.set(e, r), o.set(r, e);
  for (var E = s; ++h < u; ) {
    g = c[h];
    var _ = e[g], m = r[g];
    if (n)
      var R = s ? n(m, _, g, r, e, o) : n(_, m, g, e, r, o);
    if (!(R === void 0 ? _ === m || i(_, m, t, n, o) : R)) {
      v = !1;
      break;
    }
    E || (E = g == "constructor");
  }
  if (v && !E) {
    var F = e.constructor, D = r.constructor;
    F != D && "constructor" in e && "constructor" in r && !(typeof F == "function" && F instanceof F && typeof D == "function" && D instanceof D) && (v = !1);
  }
  return o.delete(e), o.delete(r), v;
}
var Jf = Xf, Zf = ne, Qf = J, ed = Zf(Qf, "DataView"), rd = ed, td = ne, nd = J, ad = td(nd, "Promise"), id = ad, od = ne, sd = J, cd = od(sd, "Set"), ud = cd, ld = ne, fd = J, dd = ld(fd, "WeakMap"), pd = dd, br = rd, _r = jr, wr = id, Cr = ud, Er = pd, jn = Oe, he = On, Bt = "[object Map]", hd = "[object Object]", Ut = "[object Promise]", Wt = "[object Set]", Vt = "[object WeakMap]", zt = "[object DataView]", vd = he(br), gd = he(_r), yd = he(wr), md = he(Cr), bd = he(Er), te = jn;
(br && te(new br(new ArrayBuffer(1))) != zt || _r && te(new _r()) != Bt || wr && te(wr.resolve()) != Ut || Cr && te(new Cr()) != Wt || Er && te(new Er()) != Vt) && (te = function(e) {
  var r = jn(e), t = r == hd ? e.constructor : void 0, n = t ? he(t) : "";
  if (n)
    switch (n) {
      case vd:
        return zt;
      case gd:
        return Bt;
      case yd:
        return Ut;
      case md:
        return Wt;
      case bd:
        return Vt;
    }
  return r;
});
var _d = te, pr = Nn, wd = kn, Cd = Sf, Ed = Jf, Ht = _d, Yt = Z, qt = Tn, $d = Rn, Sd = 1, Kt = "[object Arguments]", Xt = "[object Array]", ke = "[object Object]", Od = Object.prototype, Jt = Od.hasOwnProperty;
function Ad(e, r, t, n, i, o) {
  var s = Yt(e), c = Yt(r), u = s ? Xt : Ht(e), f = c ? Xt : Ht(r);
  u = u == Kt ? ke : u, f = f == Kt ? ke : f;
  var d = u == ke, h = f == ke, g = u == f;
  if (g && qt(e)) {
    if (!qt(r))
      return !1;
    s = !0, d = !1;
  }
  if (g && !d)
    return o || (o = new pr()), s || $d(e) ? wd(e, r, t, n, i, o) : Cd(e, r, u, t, n, i, o);
  if (!(t & Sd)) {
    var $ = d && Jt.call(e, "__wrapped__"), b = h && Jt.call(r, "__wrapped__");
    if ($ || b) {
      var v = $ ? e.value() : e, E = b ? r.value() : r;
      return o || (o = new pr()), i(v, E, t, n, o);
    }
  }
  return g ? (o || (o = new pr()), Ed(e, r, t, n, i, o)) : !1;
}
var xd = Ad, Td = xd, Zt = Ae;
function Mn(e, r, t, n, i) {
  return e === r ? !0 : e == null || r == null || !Zt(e) && !Zt(r) ? e !== e && r !== r : Td(e, r, t, n, Mn, i);
}
var Fn = Mn, Pd = Nn, Rd = Fn, Dd = 1, Id = 2;
function Nd(e, r, t, n) {
  var i = t.length, o = i, s = !n;
  if (e == null)
    return !o;
  for (e = Object(e); i--; ) {
    var c = t[i];
    if (s && c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
      return !1;
  }
  for (; ++i < o; ) {
    c = t[i];
    var u = c[0], f = e[u], d = c[1];
    if (s && c[2]) {
      if (f === void 0 && !(u in e))
        return !1;
    } else {
      var h = new Pd();
      if (n)
        var g = n(f, d, u, e, r, h);
      if (!(g === void 0 ? Rd(d, f, Dd | Id, n, h) : g))
        return !1;
    }
  }
  return !0;
}
var kd = Nd, jd = Ir;
function Md(e) {
  return e === e && !jd(e);
}
var Ln = Md, Fd = Ln, Ld = kr;
function Gd(e) {
  for (var r = Ld(e), t = r.length; t--; ) {
    var n = r[t], i = e[n];
    r[t] = [n, i, Fd(i)];
  }
  return r;
}
var Bd = Gd;
function Ud(e, r) {
  return function(t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
var Gn = Ud, Wd = kd, Vd = Bd, zd = Gn;
function Hd(e) {
  var r = Vd(e);
  return r.length == 1 && r[0][2] ? zd(r[0][0], r[0][1]) : function(t) {
    return t === e || Wd(t, e, r);
  };
}
var Yd = Hd, qd = Oe, Kd = Ae, Xd = "[object Symbol]";
function Jd(e) {
  return typeof e == "symbol" || Kd(e) && qd(e) == Xd;
}
var Fr = Jd, Zd = Z, Qd = Fr, ep = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rp = /^\w*$/;
function tp(e, r) {
  if (Zd(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || Qd(e) ? !0 : rp.test(e) || !ep.test(e) || r != null && e in Object(r);
}
var Lr = tp, Bn = Mr, np = "Expected a function";
function Gr(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(np);
  var t = function() {
    var n = arguments, i = r ? r.apply(this, n) : n[0], o = t.cache;
    if (o.has(i))
      return o.get(i);
    var s = e.apply(this, n);
    return t.cache = o.set(i, s) || o, s;
  };
  return t.cache = new (Gr.Cache || Bn)(), t;
}
Gr.Cache = Bn;
var ap = Gr, ip = ap, op = 500;
function sp(e) {
  var r = ip(e, function(n) {
    return t.size === op && t.clear(), n;
  }), t = r.cache;
  return r;
}
var cp = sp, up = cp, lp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, fp = /\\(\\)?/g, dp = up(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(lp, function(t, n, i, o) {
    r.push(i ? o.replace(fp, "$1") : n || t);
  }), r;
}), pp = dp;
function hp(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, i = Array(n); ++t < n; )
    i[t] = r(e[t], t, e);
  return i;
}
var vp = hp, Qt = Ke, gp = vp, yp = Z, mp = Fr, bp = 1 / 0, en = Qt ? Qt.prototype : void 0, rn = en ? en.toString : void 0;
function Un(e) {
  if (typeof e == "string")
    return e;
  if (yp(e))
    return gp(e, Un) + "";
  if (mp(e))
    return rn ? rn.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -bp ? "-0" : r;
}
var _p = Un, wp = _p;
function Cp(e) {
  return e == null ? "" : wp(e);
}
var Ep = Cp, $p = Z, Sp = Lr, Op = pp, Ap = Ep;
function xp(e, r) {
  return $p(e) ? e : Sp(e, r) ? [e] : Op(Ap(e));
}
var Wn = xp, Tp = Fr, Pp = 1 / 0;
function Rp(e) {
  if (typeof e == "string" || Tp(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -Pp ? "-0" : r;
}
var er = Rp, Dp = Wn, Ip = er;
function Np(e, r) {
  r = Dp(r, e);
  for (var t = 0, n = r.length; e != null && t < n; )
    e = e[Ip(r[t++])];
  return t && t == n ? e : void 0;
}
var Vn = Np, kp = Vn;
function jp(e, r, t) {
  var n = e == null ? void 0 : kp(e, r);
  return n === void 0 ? t : n;
}
var Mp = jp;
function Fp(e, r) {
  return e != null && r in Object(e);
}
var Lp = Fp, Gp = Wn, Bp = xn, Up = Z, Wp = Pn, Vp = Nr, zp = er;
function Hp(e, r, t) {
  r = Gp(r, e);
  for (var n = -1, i = r.length, o = !1; ++n < i; ) {
    var s = zp(r[n]);
    if (!(o = e != null && t(e, s)))
      break;
    e = e[s];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && Vp(i) && Wp(s, i) && (Up(e) || Bp(e)));
}
var Yp = Hp, qp = Lp, Kp = Yp;
function Xp(e, r) {
  return e != null && Kp(e, r, qp);
}
var Jp = Xp, Zp = Fn, Qp = Mp, eh = Jp, rh = Lr, th = Ln, nh = Gn, ah = er, ih = 1, oh = 2;
function sh(e, r) {
  return rh(e) && th(r) ? nh(ah(e), r) : function(t) {
    var n = Qp(t, e);
    return n === void 0 && n === r ? eh(t, e) : Zp(r, n, ih | oh);
  };
}
var ch = sh;
function uh(e) {
  return e;
}
var lh = uh;
function fh(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
var dh = fh, ph = Vn;
function hh(e) {
  return function(r) {
    return ph(r, e);
  };
}
var vh = hh, gh = dh, yh = vh, mh = Lr, bh = er;
function _h(e) {
  return mh(e) ? gh(bh(e)) : yh(e);
}
var wh = _h, Ch = Yd, Eh = ch, $h = lh, Sh = Z, Oh = wh;
function Ah(e) {
  return typeof e == "function" ? e : e == null ? $h : typeof e == "object" ? Sh(e) ? Eh(e[0], e[1]) : Ch(e) : Oh(e);
}
var xh = Ah, Th = Vo, Ph = Bc, Rh = xh, Dh = Z;
function Ih(e, r) {
  return function(t, n) {
    var i = Dh(t) ? Th : Ph, o = r ? r() : {};
    return i(t, e, Rh(n), o);
  };
}
var Nh = Ih, kh = Uo, jh = Nh, Mh = Object.prototype, Fh = Mh.hasOwnProperty, Lh = jh(function(e, r, t) {
  Fh.call(e, t) ? e[t].push(r) : kh(e, t, [r]);
}), Gh = Lh;
const Bh = /* @__PURE__ */ Ca(Gh);
Array.prototype.sortCoords = function() {
  return this.sort((e, r) => e[0] == r[0] ? e[1] - r[1] : e[0] - r[0]);
};
const zn = {
  A: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 3],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 0],
      [3, 3],
      [4, 0],
      [4, 3]
    ]
  },
  B: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 3],
      [2, 0],
      [2, 1],
      [2, 2],
      [3, 0],
      [3, 3],
      [4, 0],
      [4, 1],
      [4, 2]
    ]
  },
  C: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 1],
      [4, 2],
      [4, 3]
    ]
  },
  D: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 3],
      [2, 0],
      [2, 3],
      [3, 0],
      [3, 3],
      [4, 0],
      [4, 1],
      [4, 2]
    ]
  },
  E: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 0],
      [4, 1],
      [4, 2],
      [4, 3]
    ]
  },
  F: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 0],
      [4, 0]
    ]
  },
  G: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [2, 0],
      [2, 2],
      [2, 3],
      [3, 0],
      [3, 3],
      [4, 1],
      [4, 2],
      [4, 3]
    ]
  },
  H: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 3],
      [1, 0],
      [1, 3],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 0],
      [3, 3],
      [4, 0],
      [4, 3]
    ]
  },
  I: {
    width: 4,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 0],
      [4, 1],
      [4, 2]
    ]
  },
  J: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 3],
      [4, 0],
      [4, 1],
      [4, 2]
    ]
  },
  K: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 3],
      [1, 0],
      [1, 3],
      [2, 0],
      [2, 1],
      [2, 2],
      [3, 0],
      [3, 3],
      [4, 0],
      [4, 3]
    ]
  },
  L: {
    width: 5,
    coordinates: [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3]
    ]
  },
  M: {
    width: 6,
    coordinates: [
      [0, 0],
      [0, 4],
      [1, 0],
      [1, 1],
      [1, 3],
      [1, 4],
      [2, 0],
      [2, 2],
      [2, 4],
      [3, 0],
      [3, 4],
      [4, 0],
      [4, 4]
    ]
  },
  N: {
    width: 6,
    coordinates: [
      [0, 0],
      [0, 4],
      [1, 0],
      [1, 1],
      [1, 4],
      [2, 0],
      [2, 2],
      [2, 4],
      [3, 0],
      [3, 3],
      [3, 4],
      [4, 0],
      [4, 4]
    ]
  },
  O: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 3],
      [2, 0],
      [2, 3],
      [3, 0],
      [3, 3],
      [4, 1],
      [4, 2]
    ]
  },
  P: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 3],
      [2, 0],
      [2, 1],
      [2, 2],
      [3, 0],
      [4, 0]
    ]
  },
  Q: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 3],
      [2, 0],
      [2, 3],
      [3, 0],
      [3, 3],
      [4, 1],
      [4, 2],
      [5, 0]
    ]
  },
  R: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 3],
      [2, 0],
      [2, 1],
      [2, 2],
      [3, 0],
      [3, 3],
      [4, 0],
      [4, 3]
    ]
  },
  S: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [2, 1],
      [2, 2],
      [3, 3],
      [4, 0],
      [4, 1],
      [4, 2]
    ]
  },
  T: {
    width: 6,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2]
    ]
  },
  U: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 3],
      [1, 0],
      [1, 3],
      [2, 0],
      [2, 3],
      [3, 0],
      [3, 3],
      [4, 1],
      [4, 2]
    ]
  },
  V: {
    width: 6,
    coordinates: [
      [0, 0],
      [0, 4],
      [1, 0],
      [1, 4],
      [2, 1],
      [2, 3],
      [3, 1],
      [3, 3],
      [4, 2]
    ]
  },
  W: {
    width: 6,
    coordinates: [
      [0, 0],
      [0, 4],
      [1, 0],
      [1, 4],
      [2, 0],
      [2, 2],
      [2, 4],
      [3, 0],
      [3, 1],
      [3, 3],
      [3, 4],
      [4, 0],
      [4, 4]
    ]
  },
  X: {
    width: 6,
    coordinates: [
      [0, 0],
      [0, 4],
      [1, 1],
      [1, 3],
      [2, 2],
      [3, 1],
      [3, 3],
      [4, 0],
      [4, 4]
    ]
  },
  Y: {
    width: 6,
    coordinates: [
      [0, 0],
      [0, 4],
      [1, 0],
      [1, 4],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 2],
      [4, 2]
    ]
  },
  Z: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
      [2, 1],
      [3, 0],
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3]
    ]
  },
  1: {
    width: 4,
    coordinates: [
      [0, 1],
      [1, 0],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 0],
      [4, 1],
      [4, 2]
    ]
  },
  2: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 1],
      [2, 2],
      [3, 0],
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3]
    ]
  },
  3: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 0],
      [2, 1],
      [2, 2],
      [3, 3],
      [4, 0],
      [4, 1],
      [4, 2]
    ]
  },
  4: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 3],
      [1, 0],
      [1, 3],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 3],
      [4, 3]
    ]
  },
  5: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [2, 0],
      [2, 1],
      [2, 2],
      [3, 3],
      [4, 0],
      [4, 1],
      [4, 2]
    ]
  },
  6: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [2, 0],
      [2, 1],
      [2, 2],
      [3, 0],
      [3, 3],
      [4, 1],
      [4, 2]
    ]
  },
  7: {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 3],
      [2, 2],
      [3, 2],
      [4, 2]
    ]
  },
  8: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 3],
      [2, 1],
      [2, 2],
      [3, 0],
      [3, 3],
      [4, 1],
      [4, 2]
    ]
  },
  9: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 3],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 3],
      [4, 1],
      [4, 2]
    ]
  },
  0: {
    width: 5,
    coordinates: [
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 3],
      [2, 0],
      [2, 3],
      [3, 0],
      [3, 3],
      [4, 1],
      [4, 2]
    ]
  },
  "!": {
    width: 2,
    coordinates: [
      [0, 0],
      [1, 0],
      [2, 0],
      [4, 0]
    ]
  },
  "?": {
    width: 5,
    coordinates: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 1],
      [2, 2],
      [4, 1]
    ]
  },
  ":": {
    width: 2,
    coordinates: [
      [2, 0],
      [4, 0]
    ]
  },
  "-": {
    width: 4,
    coordinates: [
      [2, 0],
      [2, 1],
      [2, 2]
    ]
  },
  "/": {
    width: 2,
    coordinates: [
      [0, 1],
      [1, 1],
      [2, 0],
      [3, 0],
      [4, 0]
    ]
  },
  ".": {
    width: 2,
    coordinates: [[4, 0]]
  },
  " ": {
    width: 2,
    coordinates: null
  }
};
function $r(e) {
  const r = JSON.stringify(e);
  return JSON.parse(r);
}
let Ge = 0;
function Uh(e) {
  const n = e.split("").map((i) => $r(zn)[i]).map((i) => {
    let o;
    return i.coordinates !== null && (o = $r(i.coordinates), o.map((s) => {
      s[1] += Ge;
    }), i.coordinates = o), Ge += i.width, i.coordinates;
  });
  return Ge += 1, n;
}
function Wh(e) {
  const r = e.toUpperCase().split(" "), t = r.reduce(
    (s, c, u) => {
      const f = Uh(c);
      return s.push(...f), u === r.length - 1 && (Ge = 0), s;
    },
    []
  ), n = t.flat(1).sortCoords(), i = [];
  for (let s = 0; s < n.length; s++) {
    const c = n[s - 1], u = n[s], f = n[s + 1], d = n[n.length - 1][1], h = {
      currYCoordNotInAllCoords: c && t[0].includes(u) && // currCoord is included in first word of the string
      c[0] !== u[0],
      // yCoord of currCoord is not included in allCoords
      currCoordInFirstWord: !c && t[0].includes(u),
      currAndNextCoordsInSameRowWithGap: f && u[0] === f[0] && // currCoord and nextCoord are on same row
      f[1] - u[1] > 1,
      // there is a gap between currCoord and nextCoord
      currAndNextCoordsInDiffRowWithGap: f && u[0] !== f[0] && // currCoord and nextCoord are on different rows
      d - u[1] > 1
      // there is a gap between currXCoord and maxXCoord
    };
    let g;
    (h.currYCoordNotInAllCoords || h.currCoordInFirstWord) && (g = Vh(u), i.push(...g)), i.push(u), h.currAndNextCoordsInSameRowWithGap && (g = tn(u, f[1]), i.push(...g)), h.currAndNextCoordsInDiffRowWithGap && (g = tn(u, d, !0), i.push(...g));
  }
  const o = i.filter((s) => !n.includes(s)).sortCoords();
  return { allCoords: i.sortCoords(), activeCoords: n, inactiveCoords: o };
}
function Vh(e) {
  const r = [];
  let t = e[1];
  for (; t !== 0; ) {
    const n = [e[0], t - 1];
    r.push(n), t--;
  }
  return r;
}
function tn(e, r, t) {
  let n = t ? r - e[1] : r - e[1] - 1;
  const i = [];
  for (; n; ) {
    const o = e.slice(), s = [o[0], o[1] + n];
    i.push(s), n--;
  }
  return i;
}
function zh(e) {
  const r = e.split("");
  let t = 0, n, i;
  return r.map((s) => {
    const f = $r(zn)[s].width - 1;
    return n = t + f, i = [t, n], t = t + f + 1, i;
  });
}
function Hn(e) {
  const { allCoords: r, activeCoords: t, inactiveCoords: n } = Wh(e), i = zh(e), o = i.reduce(
    (s, c) => {
      const u = c.join("-");
      return s[u] = {
        allCoords: [],
        allCoordsByRow: [],
        activeCoords: [],
        inactiveCoords: []
      }, s;
    },
    {}
  );
  r.map((s) => {
    i.map((c) => {
      const u = c[0], f = c[1], d = c.join("-"), h = Yh(
        s,
        u,
        f
      );
      h && t.includes(s) && (o[d].allCoords.push(s), o[d].activeCoords.push(s)), h && n.includes(s) && (o[d].allCoords.push(s), o[d].inactiveCoords.push(s));
    });
  });
  for (const s in o)
    o[s].allCoordsByRow = Bh(
      o[s].allCoords,
      (c) => c[0]
    );
  return o;
}
function Hh(e) {
  const r = Object.values(Hn(e)), t = [];
  let n = [];
  return r.map((i, o) => {
    const s = !i.activeCoords.length, c = o === r.length - 1;
    if (!s && c) {
      n.push(i), t.push(n);
      return;
    }
    if (!s) {
      n.push(i);
      return;
    }
    if (s) {
      t.push(n), t.push([i]), n = [];
      return;
    }
  }), t;
}
function Yh(e, r, t) {
  return r <= e[1] && e[1] <= t;
}
const qh = (e) => {
  let r = e.length, t;
  for (; r != 0; )
    t = Math.floor(Math.random() * r), r--, [e[r], e[t]] = [e[t], e[r]];
  return e;
}, Kh = Q.div`
  display: flex;
  margin: auto;
  align-items: end;
  gap: 0.5rem;
`, Xh = Q.div`
  display: flex;
  margin: auto;
`, Qh = ({ text: e }) => {
  const { startAnime: r } = sn(), t = e.toUpperCase(), n = lt(
    () => Object.values(Hh(t)),
    [t]
  ), o = lt(
    () => Object.values(Hn(t)),
    [t]
  ).reduce(
    (c, u) => (c.push(...u.inactiveCoords), c),
    []
  );
  function s() {
    r(qh(o));
  }
  return we(() => s(), []), /* @__PURE__ */ z.jsx(Kh, { children: /* @__PURE__ */ z.jsx(Xh, { children: n.map((c, u) => /* @__PURE__ */ z.jsx(Mi, { wordOrSpace: c }, u)) }) });
}, ev = () => /* @__PURE__ */ z.jsx("div", { children: "Test" });
export {
  Qh as DisplayDotsAnime,
  Zh as DisplayDotsProvider,
  ev as Test
};
