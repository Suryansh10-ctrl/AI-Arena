var e = Object.defineProperty, t = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), n = (t, n) => { let r = {}; for (var i in t)
    e(r, i, { get: t[i], enumerable: !0 }); return n || e(r, Symbol.toStringTag, { value: `Module` }), r; };
(function () { let e = document.createElement(`link`).relList; if (e && e.supports && e.supports(`modulepreload`))
    return; for (let e of document.querySelectorAll(`link[rel="modulepreload"]`))
    n(e); new MutationObserver(e => { for (let t of e)
    if (t.type === `childList`)
        for (let e of t.addedNodes)
            e.tagName === `LINK` && e.rel === `modulepreload` && n(e); }).observe(document, { childList: !0, subtree: !0 }); function t(e) { let t = {}; return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === `use-credentials` ? t.credentials = `include` : e.crossOrigin === `anonymous` ? t.credentials = `omit` : t.credentials = `same-origin`, t; } function n(e) { if (e.ep)
    return; e.ep = !0; let n = t(e); fetch(e.href, n); } })();
var r = t((e => { var t = Symbol.for(`react.transitional.element`), n = Symbol.for(`react.portal`), r = Symbol.for(`react.fragment`), i = Symbol.for(`react.strict_mode`), a = Symbol.for(`react.profiler`), o = Symbol.for(`react.consumer`), s = Symbol.for(`react.context`), c = Symbol.for(`react.forward_ref`), l = Symbol.for(`react.suspense`), u = Symbol.for(`react.memo`), d = Symbol.for(`react.lazy`), f = Symbol.for(`react.activity`), p = Symbol.iterator; function m(e) { return typeof e != `object` || !e ? null : (e = p && e[p] || e[`@@iterator`], typeof e == `function` ? e : null); } var h = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, g = Object.assign, _ = {}; function v(e, t, n) { this.props = e, this.context = t, this.refs = _, this.updater = n || h; } v.prototype.isReactComponent = {}, v.prototype.setState = function (e, t) { if (typeof e != `object` && typeof e != `function` && e != null)
    throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`); this.updater.enqueueSetState(this, e, t, `setState`); }, v.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, `forceUpdate`); }; function y() { } y.prototype = v.prototype; function b(e, t, n) { this.props = e, this.context = t, this.refs = _, this.updater = n || h; } var x = b.prototype = new y; x.constructor = b, g(x, v.prototype), x.isPureReactComponent = !0; var ee = Array.isArray; function S() { } var C = { H: null, A: null, T: null, S: null }, w = Object.prototype.hasOwnProperty; function te(e, n, r) { var i = r.ref; return { $$typeof: t, type: e, key: n, ref: i === void 0 ? null : i, props: r }; } function ne(e, t) { return te(e.type, t, e.props); } function T(e) { return typeof e == `object` && !!e && e.$$typeof === t; } function re(e) { var t = { "=": `=0`, ":": `=2` }; return `$` + e.replace(/[=:]/g, function (e) { return t[e]; }); } var ie = /\/+/g; function E(e, t) { return typeof e == `object` && e && e.key != null ? re(`` + e.key) : t.toString(36); } function ae(e) { switch (e.status) {
    case `fulfilled`: return e.value;
    case `rejected`: throw e.reason;
    default: switch (typeof e.status == `string` ? e.then(S, S) : (e.status = `pending`, e.then(function (t) { e.status === `pending` && (e.status = `fulfilled`, e.value = t); }, function (t) { e.status === `pending` && (e.status = `rejected`, e.reason = t); })), e.status) {
        case `fulfilled`: return e.value;
        case `rejected`: throw e.reason;
    }
} throw e; } function oe(e, r, i, a, o) { var s = typeof e; (s === `undefined` || s === `boolean`) && (e = null); var c = !1; if (e === null)
    c = !0;
else
    switch (s) {
        case `bigint`:
        case `string`:
        case `number`:
            c = !0;
            break;
        case `object`: switch (e.$$typeof) {
            case t:
            case n:
                c = !0;
                break;
            case d: return c = e._init, oe(c(e._payload), r, i, a, o);
        }
    } if (c)
    return o = o(e), c = a === `` ? `.` + E(e, 0) : a, ee(o) ? (i = ``, c != null && (i = c.replace(ie, `$&/`) + `/`), oe(o, r, i, ``, function (e) { return e; })) : o != null && (T(o) && (o = ne(o, i + (o.key == null || e && e.key === o.key ? `` : (`` + o.key).replace(ie, `$&/`) + `/`) + c)), r.push(o)), 1; c = 0; var l = a === `` ? `.` : a + `:`; if (ee(e))
    for (var u = 0; u < e.length; u++)
        a = e[u], s = l + E(a, u), c += oe(a, r, i, s, o);
else if (u = m(e), typeof u == `function`)
    for (e = u.call(e), u = 0; !(a = e.next()).done;)
        a = a.value, s = l + E(a, u++), c += oe(a, r, i, s, o);
else if (s === `object`) {
    if (typeof e.then == `function`)
        return oe(ae(e), r, i, a, o);
    throw r = String(e), Error(`Objects are not valid as a React child (found: ` + (r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r) + `). If you meant to render a collection of children, use an array instead.`);
} return c; } function se(e, t, n) { if (e == null)
    return e; var r = [], i = 0; return oe(e, r, ``, ``, function (e) { return t.call(n, e, i++); }), r; } function ce(e) { if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (t) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t); }, function (t) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t); }), e._status === -1 && (e._status = 0, e._result = t);
} if (e._status === 1)
    return e._result.default; throw e._result; } var D = typeof reportError == `function` ? reportError : function (e) { if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
    var t = new window.ErrorEvent(`error`, { bubbles: !0, cancelable: !0, message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e), error: e });
    if (!window.dispatchEvent(t))
        return;
}
else if (typeof process == `object` && typeof process.emit == `function`) {
    process.emit(`uncaughtException`, e);
    return;
} console.error(e); }, O = { map: se, forEach: function (e, t, n) { se(e, function () { t.apply(this, arguments); }, n); }, count: function (e) { var t = 0; return se(e, function () { t++; }), t; }, toArray: function (e) { return se(e, function (e) { return e; }) || []; }, only: function (e) { if (!T(e))
        throw Error(`React.Children.only expected to receive a single React element child.`); return e; } }; e.Activity = f, e.Children = O, e.Component = v, e.Fragment = r, e.Profiler = a, e.PureComponent = b, e.StrictMode = i, e.Suspense = l, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C, e.__COMPILER_RUNTIME = { __proto__: null, c: function (e) { return C.H.useMemoCache(e); } }, e.cache = function (e) { return function () { return e.apply(null, arguments); }; }, e.cacheSignal = function () { return null; }, e.cloneElement = function (e, t, n) { if (e == null)
    throw Error(`The argument must be a React element, but you passed ` + e + `.`); var r = g({}, e.props), i = e.key; if (t != null)
    for (a in t.key !== void 0 && (i = `` + t.key), t)
        !w.call(t, a) || a === `key` || a === `__self` || a === `__source` || a === `ref` && t.ref === void 0 || (r[a] = t[a]); var a = arguments.length - 2; if (a === 1)
    r.children = n;
else if (1 < a) {
    for (var o = Array(a), s = 0; s < a; s++)
        o[s] = arguments[s + 2];
    r.children = o;
} return te(e.type, i, r); }, e.createContext = function (e) { return e = { $$typeof: s, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = e, e.Consumer = { $$typeof: o, _context: e }, e; }, e.createElement = function (e, t, n) { var r, i = {}, a = null; if (t != null)
    for (r in t.key !== void 0 && (a = `` + t.key), t)
        w.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r]); var o = arguments.length - 2; if (o === 1)
    i.children = n;
else if (1 < o) {
    for (var s = Array(o), c = 0; c < o; c++)
        s[c] = arguments[c + 2];
    i.children = s;
} if (e && e.defaultProps)
    for (r in o = e.defaultProps, o)
        i[r] === void 0 && (i[r] = o[r]); return te(e, a, i); }, e.createRef = function () { return { current: null }; }, e.forwardRef = function (e) { return { $$typeof: c, render: e }; }, e.isValidElement = T, e.lazy = function (e) { return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: ce }; }, e.memo = function (e, t) { return { $$typeof: u, type: e, compare: t === void 0 ? null : t }; }, e.startTransition = function (e) { var t = C.T, n = {}; C.T = n; try {
    var r = e(), i = C.S;
    i !== null && i(n, r), typeof r == `object` && r && typeof r.then == `function` && r.then(S, D);
}
catch (e) {
    D(e);
}
finally {
    t !== null && n.types !== null && (t.types = n.types), C.T = t;
} }, e.unstable_useCacheRefresh = function () { return C.H.useCacheRefresh(); }, e.use = function (e) { return C.H.use(e); }, e.useActionState = function (e, t, n) { return C.H.useActionState(e, t, n); }, e.useCallback = function (e, t) { return C.H.useCallback(e, t); }, e.useContext = function (e) { return C.H.useContext(e); }, e.useDebugValue = function () { }, e.useDeferredValue = function (e, t) { return C.H.useDeferredValue(e, t); }, e.useEffect = function (e, t) { return C.H.useEffect(e, t); }, e.useEffectEvent = function (e) { return C.H.useEffectEvent(e); }, e.useId = function () { return C.H.useId(); }, e.useImperativeHandle = function (e, t, n) { return C.H.useImperativeHandle(e, t, n); }, e.useInsertionEffect = function (e, t) { return C.H.useInsertionEffect(e, t); }, e.useLayoutEffect = function (e, t) { return C.H.useLayoutEffect(e, t); }, e.useMemo = function (e, t) { return C.H.useMemo(e, t); }, e.useOptimistic = function (e, t) { return C.H.useOptimistic(e, t); }, e.useReducer = function (e, t, n) { return C.H.useReducer(e, t, n); }, e.useRef = function (e) { return C.H.useRef(e); }, e.useState = function (e) { return C.H.useState(e); }, e.useSyncExternalStore = function (e, t, n) { return C.H.useSyncExternalStore(e, t, n); }, e.useTransition = function () { return C.H.useTransition(); }, e.version = `19.2.8`; })), i = t(((e, t) => { t.exports = r(); })), a = t((e => { function t(e, t) { var n = e.length; e.push(t); a: for (; 0 < n;) {
    var r = n - 1 >>> 1, a = e[r];
    if (0 < i(a, t))
        e[r] = t, e[n] = a, n = r;
    else
        break a;
} } function n(e) { return e.length === 0 ? null : e[0]; } function r(e) { if (e.length === 0)
    return null; var t = e[0], n = e.pop(); if (n !== t) {
    e[0] = n;
    a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
        var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
        if (0 > i(c, n))
            l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
        else if (l < a && 0 > i(u, n))
            e[r] = u, e[l] = n, r = l;
        else
            break a;
    }
} return t; } function i(e, t) { var n = e.sortIndex - t.sortIndex; return n === 0 ? e.id - t.id : n; } if (e.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
    var a = performance;
    e.unstable_now = function () { return a.now(); };
}
else {
    var o = Date, s = o.now();
    e.unstable_now = function () { return o.now() - s; };
} var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == `function` ? setTimeout : null, v = typeof clearTimeout == `function` ? clearTimeout : null, y = typeof setImmediate < `u` ? setImmediate : null; function b(e) { for (var i = n(l); i !== null;) {
    if (i.callback === null)
        r(l);
    else if (i.startTime <= e)
        r(l), i.sortIndex = i.expirationTime, t(c, i);
    else
        break;
    i = n(l);
} } function x(e) { if (h = !1, b(e), !m)
    if (n(c) !== null)
        m = !0, ee || (ee = !0, T());
    else {
        var t = n(l);
        t !== null && E(x, t.startTime - e);
    } } var ee = !1, S = -1, C = 5, w = -1; function te() { return g ? !0 : !(e.unstable_now() - w < C); } function ne() { if (g = !1, ee) {
    var t = e.unstable_now();
    w = t;
    var i = !0;
    try {
        a: {
            m = !1, h && (h = !1, v(S), S = -1), p = !0;
            var a = f;
            try {
                b: {
                    for (b(t), d = n(c); d !== null && !(d.expirationTime > t && te());) {
                        var o = d.callback;
                        if (typeof o == `function`) {
                            d.callback = null, f = d.priorityLevel;
                            var s = o(d.expirationTime <= t);
                            if (t = e.unstable_now(), typeof s == `function`) {
                                d.callback = s, b(t), i = !0;
                                break b;
                            }
                            d === n(c) && r(c), b(t);
                        }
                        else
                            r(c);
                        d = n(c);
                    }
                    if (d !== null)
                        i = !0;
                    else {
                        var u = n(l);
                        u !== null && E(x, u.startTime - t), i = !1;
                    }
                }
                break a;
            }
            finally {
                d = null, f = a, p = !1;
            }
            i = void 0;
        }
    }
    finally {
        i ? T() : ee = !1;
    }
} } var T; if (typeof y == `function`)
    T = function () { y(ne); };
else if (typeof MessageChannel < `u`) {
    var re = new MessageChannel, ie = re.port2;
    re.port1.onmessage = ne, T = function () { ie.postMessage(null); };
}
else
    T = function () { _(ne, 0); }; function E(t, n) { S = _(function () { t(e.unstable_now()); }, n); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (e) { e.callback = null; }, e.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : C = 0 < e ? Math.floor(1e3 / e) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return f; }, e.unstable_next = function (e) { switch (f) {
    case 1:
    case 2:
    case 3:
        var t = 3;
        break;
    default: t = f;
} var n = f; f = t; try {
    return e();
}
finally {
    f = n;
} }, e.unstable_requestPaint = function () { g = !0; }, e.unstable_runWithPriority = function (e, t) { switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: e = 3;
} var n = f; f = e; try {
    return t();
}
finally {
    f = n;
} }, e.unstable_scheduleCallback = function (r, i, a) { var o = e.unstable_now(); switch (typeof a == `object` && a ? (a = a.delay, a = typeof a == `number` && 0 < a ? o + a : o) : a = o, r) {
    case 1:
        var s = -1;
        break;
    case 2:
        s = 250;
        break;
    case 5:
        s = 1073741823;
        break;
    case 4:
        s = 1e4;
        break;
    default: s = 5e3;
} return s = a + s, r = { id: u++, callback: i, priorityLevel: r, startTime: a, expirationTime: s, sortIndex: -1 }, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(S), S = -1) : h = !0, E(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, ee || (ee = !0, T()))), r; }, e.unstable_shouldYield = te, e.unstable_wrapCallback = function (e) { var t = f; return function () { var n = f; f = t; try {
    return e.apply(this, arguments);
}
finally {
    f = n;
} }; }; })), o = t(((e, t) => { t.exports = a(); })), s = t((e => { var t = i(); function n(e) { var t = `https://react.dev/errors/` + e; if (1 < arguments.length) {
    t += `?args[]=` + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++)
        t += `&args[]=` + encodeURIComponent(arguments[n]);
} return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`; } function r() { } var a = { d: { f: r, r: function () { throw Error(n(522)); }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, o = Symbol.for(`react.portal`); function s(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: o, key: r == null ? null : `` + r, children: e, containerInfo: t, implementation: n }; } var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE; function l(e, t) { if (e === `font`)
    return ``; if (typeof t == `string`)
    return t === `use-credentials` ? t : ``; } e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, e.createPortal = function (e, t) { var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    throw Error(n(299)); return s(e, t, null, r); }, e.flushSync = function (e) { var t = c.T, n = a.p; try {
    if (c.T = null, a.p = 2, e)
        return e();
}
finally {
    c.T = t, a.p = n, a.d.f();
} }, e.preconnect = function (e, t) { typeof e == `string` && (t ? (t = t.crossOrigin, t = typeof t == `string` ? t === `use-credentials` ? t : `` : void 0) : t = null, a.d.C(e, t)); }, e.prefetchDNS = function (e) { typeof e == `string` && a.d.D(e); }, e.preinit = function (e, t) { if (typeof e == `string` && t && typeof t.as == `string`) {
    var n = t.as, r = l(n, t.crossOrigin), i = typeof t.integrity == `string` ? t.integrity : void 0, o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
    n === `style` ? a.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, { crossOrigin: r, integrity: i, fetchPriority: o }) : n === `script` && a.d.X(e, { crossOrigin: r, integrity: i, fetchPriority: o, nonce: typeof t.nonce == `string` ? t.nonce : void 0 });
} }, e.preinitModule = function (e, t) { if (typeof e == `string`)
    if (typeof t == `object` && t) {
        if (t.as == null || t.as === `script`) {
            var n = l(t.as, t.crossOrigin);
            a.d.M(e, { crossOrigin: n, integrity: typeof t.integrity == `string` ? t.integrity : void 0, nonce: typeof t.nonce == `string` ? t.nonce : void 0 });
        }
    }
    else
        t ?? a.d.M(e); }, e.preload = function (e, t) { if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
    var n = t.as, r = l(n, t.crossOrigin);
    a.d.L(e, n, { crossOrigin: r, integrity: typeof t.integrity == `string` ? t.integrity : void 0, nonce: typeof t.nonce == `string` ? t.nonce : void 0, type: typeof t.type == `string` ? t.type : void 0, fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0, referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0, imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0, imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0, media: typeof t.media == `string` ? t.media : void 0 });
} }, e.preloadModule = function (e, t) { if (typeof e == `string`)
    if (t) {
        var n = l(t.as, t.crossOrigin);
        a.d.m(e, { as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0, crossOrigin: n, integrity: typeof t.integrity == `string` ? t.integrity : void 0 });
    }
    else
        a.d.m(e); }, e.requestFormReset = function (e) { a.d.r(e); }, e.unstable_batchedUpdates = function (e, t) { return e(t); }, e.useFormState = function (e, t, n) { return c.H.useFormState(e, t, n); }, e.useFormStatus = function () { return c.H.useHostTransitionStatus(); }, e.version = `19.2.8`; })), c = t(((e, t) => { function n() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
    }
    catch (e) {
        console.error(e);
    } } n(), t.exports = s(); })), l = t((e => {
    var t = o(), n = i(), r = c();
    function a(e) { var t = `https://react.dev/errors/` + e; if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
            t += `&args[]=` + encodeURIComponent(arguments[n]);
    } return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`; }
    function s(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
    function l(e) { var t = e, n = e; if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do
            t = e, t.flags & 4098 && (n = t.return), e = t.return;
        while (e);
    } return t.tag === 3 ? n : null; }
    function u(e) { if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
            return t.dehydrated;
    } return null; }
    function d(e) { if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
            return t.dehydrated;
    } return null; }
    function f(e) { if (l(e) !== e)
        throw Error(a(188)); }
    function p(e) { var t = e.alternate; if (!t) {
        if (t = l(e), t === null)
            throw Error(a(188));
        return t === e ? e : null;
    } for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n)
                    return f(i), e;
                if (o === r)
                    return f(i), t;
                o = o.sibling;
            }
            throw Error(a(188));
        }
        if (n.return !== r.return)
            n = i, r = o;
        else {
            for (var s = !1, c = i.child; c;) {
                if (c === n) {
                    s = !0, n = i, r = o;
                    break;
                }
                if (c === r) {
                    s = !0, r = i, n = o;
                    break;
                }
                c = c.sibling;
            }
            if (!s) {
                for (c = o.child; c;) {
                    if (c === n) {
                        s = !0, n = o, r = i;
                        break;
                    }
                    if (c === r) {
                        s = !0, r = o, n = i;
                        break;
                    }
                    c = c.sibling;
                }
                if (!s)
                    throw Error(a(189));
            }
        }
        if (n.alternate !== r)
            throw Error(a(190));
    } if (n.tag !== 3)
        throw Error(a(188)); return n.stateNode.current === n ? e : t; }
    function m(e) { var t = e.tag; if (t === 5 || t === 26 || t === 27 || t === 6)
        return e; for (e = e.child; e !== null;) {
        if (t = m(e), t !== null)
            return t;
        e = e.sibling;
    } return null; }
    var h = Object.assign, g = Symbol.for(`react.element`), _ = Symbol.for(`react.transitional.element`), v = Symbol.for(`react.portal`), y = Symbol.for(`react.fragment`), b = Symbol.for(`react.strict_mode`), x = Symbol.for(`react.profiler`), ee = Symbol.for(`react.consumer`), S = Symbol.for(`react.context`), C = Symbol.for(`react.forward_ref`), w = Symbol.for(`react.suspense`), te = Symbol.for(`react.suspense_list`), ne = Symbol.for(`react.memo`), T = Symbol.for(`react.lazy`), re = Symbol.for(`react.activity`), ie = Symbol.for(`react.memo_cache_sentinel`), E = Symbol.iterator;
    function ae(e) { return typeof e != `object` || !e ? null : (e = E && e[E] || e[`@@iterator`], typeof e == `function` ? e : null); }
    var oe = Symbol.for(`react.client.reference`);
    function se(e) { if (e == null)
        return null; if (typeof e == `function`)
        return e.$$typeof === oe ? null : e.displayName || e.name || null; if (typeof e == `string`)
        return e; switch (e) {
        case y: return `Fragment`;
        case x: return `Profiler`;
        case b: return `StrictMode`;
        case w: return `Suspense`;
        case te: return `SuspenseList`;
        case re: return `Activity`;
    } if (typeof e == `object`)
        switch (e.$$typeof) {
            case v: return `Portal`;
            case S: return e.displayName || `Context`;
            case ee: return (e._context.displayName || `Context`) + `.Consumer`;
            case C:
                var t = e.render;
                return e = e.displayName, e ||= (e = t.displayName || t.name || ``, e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`), e;
            case ne: return t = e.displayName || null, t === null ? se(e.type) || `Memo` : t;
            case T:
                t = e._payload, e = e._init;
                try {
                    return se(e(t));
                }
                catch { }
        } return null; }
    var ce = Array.isArray, D = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = { pending: !1, data: null, method: null, action: null }, ue = [], de = -1;
    function fe(e) { return { current: e }; }
    function pe(e) { 0 > de || (e.current = ue[de], ue[de] = null, de--); }
    function k(e, t) { de++, ue[de] = e.current, e.current = t; }
    var me = fe(null), he = fe(null), ge = fe(null), _e = fe(null);
    function ve(e, t) { switch (k(ge, t), k(he, e), k(me, null), t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
            break;
        default: if (e = t.tagName, t = t.namespaceURI)
            t = Vd(t), e = Hd(t, e);
        else
            switch (e) {
                case `svg`:
                    e = 1;
                    break;
                case `math`:
                    e = 2;
                    break;
                default: e = 0;
            }
    } pe(me), k(me, e); }
    function ye() { pe(me), pe(he), pe(ge); }
    function be(e) { e.memoizedState !== null && k(_e, e); var t = me.current, n = Hd(t, e.type); t !== n && (k(he, e), k(me, n)); }
    function xe(e) { he.current === e && (pe(me), pe(he)), _e.current === e && (pe(_e), Qf._currentValue = le); }
    var Se, Ce;
    function we(e) {
        if (Se === void 0)
            try {
                throw Error();
            }
            catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                Se = t && t[1] || ``, Ce = -1 < e.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
            }
        return `
` + Se + e + Ce;
    }
    var Te = !1;
    function Ee(e, t) {
        if (!e || Te)
            return ``;
        Te = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = { DetermineComponentFrameRoot: function () { try {
                    if (t) {
                        var n = function () { throw Error(); };
                        if (Object.defineProperty(n.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == `object` && Reflect.construct) {
                            try {
                                Reflect.construct(n, []);
                            }
                            catch (e) {
                                var r = e;
                            }
                            Reflect.construct(e, [], n);
                        }
                        else {
                            try {
                                n.call();
                            }
                            catch (e) {
                                r = e;
                            }
                            e.call(n.prototype);
                        }
                    }
                    else {
                        try {
                            throw Error();
                        }
                        catch (e) {
                            r = e;
                        }
                        (n = e()) && typeof n.catch == `function` && n.catch(function () { });
                    }
                }
                catch (e) {
                    if (e && r && typeof e.stack == `string`)
                        return [e.stack, r.stack];
                } return [null, null]; } };
            r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
            var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
            i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: `DetermineComponentFrameRoot` });
            var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
            if (o && s) {
                var c = o.split(`
`), l = s.split(`
`);
                for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);)
                    r++;
                for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
                    i++;
                if (r === c.length || i === l.length)
                    for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];)
                        i--;
                for (; 1 <= r && 0 <= i; r--, i--)
                    if (c[r] !== l[i]) {
                        if (r !== 1 || i !== 1)
                            do
                                if (r--, i--, 0 > i || c[r] !== l[i]) {
                                    var u = `
` + c[r].replace(` at new `, ` at `);
                                    return e.displayName && u.includes(`<anonymous>`) && (u = u.replace(`<anonymous>`, e.displayName)), u;
                                }
                            while (1 <= r && 0 <= i);
                        break;
                    }
            }
        }
        finally {
            Te = !1, Error.prepareStackTrace = n;
        }
        return (n = e ? e.displayName || e.name : ``) ? we(n) : ``;
    }
    function De(e, t) { switch (e.tag) {
        case 26:
        case 27:
        case 5: return we(e.type);
        case 16: return we(`Lazy`);
        case 13: return e.child !== t && t !== null ? we(`Suspense Fallback`) : we(`Suspense`);
        case 19: return we(`SuspenseList`);
        case 0:
        case 15: return Ee(e.type, !1);
        case 11: return Ee(e.type.render, !1);
        case 1: return Ee(e.type, !0);
        case 31: return we(`Activity`);
        default: return ``;
    } }
    function Oe(e) {
        try {
            var t = ``, n = null;
            do
                t += De(e, n), n = e, e = e.return;
            while (e);
            return t;
        }
        catch (e) {
            return `
Error generating stack: ` + e.message + `
` + e.stack;
        }
    }
    var ke = Object.prototype.hasOwnProperty, Ae = t.unstable_scheduleCallback, je = t.unstable_cancelCallback, Me = t.unstable_shouldYield, Ne = t.unstable_requestPaint, Pe = t.unstable_now, Fe = t.unstable_getCurrentPriorityLevel, Ie = t.unstable_ImmediatePriority, Le = t.unstable_UserBlockingPriority, Re = t.unstable_NormalPriority, ze = t.unstable_LowPriority, Be = t.unstable_IdlePriority, Ve = t.log, He = t.unstable_setDisableYieldValue, Ue = null, We = null;
    function Ge(e) { if (typeof Ve == `function` && He(e), We && typeof We.setStrictMode == `function`)
        try {
            We.setStrictMode(Ue, e);
        }
        catch { } }
    var Ke = Math.clz32 ? Math.clz32 : Ye, qe = Math.log, Je = Math.LN2;
    function Ye(e) { return e >>>= 0, e === 0 ? 32 : 31 - (qe(e) / Je | 0) | 0; }
    var Xe = 256, A = 262144, Ze = 4194304;
    function Qe(e) { var t = e & 42; if (t !== 0)
        return t; switch (e & -e) {
        case 1: return 1;
        case 2: return 2;
        case 4: return 4;
        case 8: return 8;
        case 16: return 16;
        case 32: return 32;
        case 64: return 64;
        case 128: return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072: return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152: return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432: return e & 62914560;
        case 67108864: return 67108864;
        case 134217728: return 134217728;
        case 268435456: return 268435456;
        case 536870912: return 536870912;
        case 1073741824: return 0;
        default: return e;
    } }
    function $e(e, t, n) { var r = e.pendingLanes; if (r === 0)
        return 0; var i = 0, a = e.suspendedLanes, o = e.pingedLanes; e = e.warmLanes; var s = r & 134217727; return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Qe(n))) : i = Qe(o) : i = Qe(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Qe(n))) : i = Qe(o)) : i = Qe(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i; }
    function et(e, t) { return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0; }
    function tt(e, t) { switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64: return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152: return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432: return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824: return -1;
        default: return -1;
    } }
    function nt() { var e = Ze; return Ze <<= 1, !(Ze & 62914560) && (Ze = 4194304), e; }
    function rt(e) { for (var t = [], n = 0; 31 > n; n++)
        t.push(e); return t; }
    function it(e, t) { e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0); }
    function at(e, t, n, r, i, a) { var o = e.pendingLanes; e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0; var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates; for (n = o & ~n; 0 < n;) {
        var u = 31 - Ke(n), d = 1 << u;
        s[u] = 0, c[u] = -1;
        var f = l[u];
        if (f !== null)
            for (l[u] = null, u = 0; u < f.length; u++) {
                var p = f[u];
                p !== null && (p.lane &= -536870913);
            }
        n &= ~d;
    } r !== 0 && ot(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t)); }
    function ot(e, t, n) { e.pendingLanes |= t, e.suspendedLanes &= ~t; var r = 31 - Ke(t); e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930; }
    function st(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
        var r = 31 - Ke(n), i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i;
    } }
    function ct(e, t) { var n = t & -t; return n = n & 42 ? 1 : lt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0; }
    function lt(e) { switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default: e = 0;
    } return e; }
    function ut(e) { return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2; }
    function dt() { var e = O.p; return e === 0 ? (e = window.event, e === void 0 ? 32 : mp(e.type)) : e; }
    function ft(e, t) { var n = O.p; try {
        return O.p = e, t();
    }
    finally {
        O.p = n;
    } }
    var pt = Math.random().toString(36).slice(2), j = `__reactFiber$` + pt, mt = `__reactProps$` + pt, ht = `__reactContainer$` + pt, gt = `__reactEvents$` + pt, _t = `__reactListeners$` + pt, vt = `__reactHandles$` + pt, yt = `__reactResources$` + pt, bt = `__reactMarker$` + pt;
    function xt(e) { delete e[j], delete e[mt], delete e[gt], delete e[_t], delete e[vt]; }
    function St(e) { var t = e[j]; if (t)
        return t; for (var n = e.parentNode; n;) {
        if (t = n[ht] || n[j]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = df(e); e !== null;) {
                    if (n = e[j])
                        return n;
                    e = df(e);
                }
            return t;
        }
        e = n, n = e.parentNode;
    } return null; }
    function Ct(e) { if (e = e[j] || e[ht]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
            return e;
    } return null; }
    function wt(e) { var t = e.tag; if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode; throw Error(a(33)); }
    function Tt(e) { var t = e[yt]; return t ||= e[yt] = { hoistableStyles: new Map, hoistableScripts: new Map }, t; }
    function Et(e) { e[bt] = !0; }
    var Dt = new Set, Ot = {};
    function kt(e, t) { At(e, t), At(e + `Capture`, t); }
    function At(e, t) { for (Ot[e] = t, e = 0; e < t.length; e++)
        Dt.add(t[e]); }
    var jt = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`), Mt = {}, Nt = {};
    function Pt(e) { return ke.call(Nt, e) ? !0 : ke.call(Mt, e) ? !1 : jt.test(e) ? Nt[e] = !0 : (Mt[e] = !0, !1); }
    function Ft(e, t, n) { if (Pt(t))
        if (n === null)
            e.removeAttribute(t);
        else {
            switch (typeof n) {
                case `undefined`:
                case `function`:
                case `symbol`:
                    e.removeAttribute(t);
                    return;
                case `boolean`:
                    var r = t.toLowerCase().slice(0, 5);
                    if (r !== `data-` && r !== `aria-`) {
                        e.removeAttribute(t);
                        return;
                    }
            }
            e.setAttribute(t, `` + n);
        } }
    function It(e, t, n) { if (n === null)
        e.removeAttribute(t);
    else {
        switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
            case `boolean`:
                e.removeAttribute(t);
                return;
        }
        e.setAttribute(t, `` + n);
    } }
    function Lt(e, t, n, r) { if (r === null)
        e.removeAttribute(n);
    else {
        switch (typeof r) {
            case `undefined`:
            case `function`:
            case `symbol`:
            case `boolean`:
                e.removeAttribute(n);
                return;
        }
        e.setAttributeNS(t, n, `` + r);
    } }
    function Rt(e) { switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`: return e;
        case `object`: return e;
        default: return ``;
    } }
    function zt(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`); }
    function Bt(e, t, n) { var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t); if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == `function` && typeof r.set == `function`) {
        var i = r.get, a = r.set;
        return Object.defineProperty(e, t, { configurable: !0, get: function () { return i.call(this); }, set: function (e) { n = `` + e, a.call(this, e); } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function () { return n; }, setValue: function (e) { n = `` + e; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
    } }
    function Vt(e) { if (!e._valueTracker) {
        var t = zt(e) ? `checked` : `value`;
        e._valueTracker = Bt(e, t, `` + e[t]);
    } }
    function Ht(e) { if (!e)
        return !1; var t = e._valueTracker; if (!t)
        return !0; var n = t.getValue(), r = ``; return e && (r = zt(e) ? e.checked ? `true` : `false` : e.value), e = r, e === n ? !1 : (t.setValue(e), !0); }
    function Ut(e) { if (e ||= typeof document < `u` ? document : void 0, e === void 0)
        return null; try {
        return e.activeElement || e.body;
    }
    catch {
        return e.body;
    } }
    var Wt = /[\n"\\]/g;
    function Gt(e) { return e.replace(Wt, function (e) { return `\\` + e.charCodeAt(0).toString(16) + ` `; }); }
    function Kt(e, t, n, r, i, a, o, s) { e.name = ``, o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` ? e.type = o : e.removeAttribute(`type`), t == null ? o !== `submit` && o !== `reset` || e.removeAttribute(`value`) : o === `number` ? (t === 0 && e.value === `` || e.value != t) && (e.value = `` + Rt(t)) : e.value !== `` + Rt(t) && (e.value = `` + Rt(t)), t == null ? n == null ? r != null && e.removeAttribute(`value`) : Jt(e, o, Rt(n)) : Jt(e, o, Rt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`), s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean` ? e.name = `` + Rt(s) : e.removeAttribute(`name`); }
    function qt(e, t, n, r, i, a, o, s) { if (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean` && (e.type = a), t != null || n != null) {
        if (!(a !== `submit` && a !== `reset` || t != null)) {
            Vt(e);
            return;
        }
        n = n == null ? `` : `` + Rt(n), t = t == null ? n : `` + Rt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
    } r ??= i, r = typeof r != `function` && typeof r != `symbol` && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` && (e.name = o), Vt(e); }
    function Jt(e, t, n) { t === `number` && Ut(e.ownerDocument) === e || e.defaultValue === `` + n || (e.defaultValue = `` + n); }
    function Yt(e, t, n, r) { if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty(`$` + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    }
    else {
        for (n = `` + Rt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    } }
    function Xt(e, t, n) { if (t != null && (t = `` + Rt(t), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
    } e.defaultValue = n == null ? `` : `` + Rt(n); }
    function Zt(e, t, n, r) { if (t == null) {
        if (r != null) {
            if (n != null)
                throw Error(a(92));
            if (ce(r)) {
                if (1 < r.length)
                    throw Error(a(93));
                r = r[0];
            }
            n = r;
        }
        n ??= ``, t = n;
    } n = Rt(t), e.defaultValue = n, r = e.textContent, r === n && r !== `` && r !== null && (e.value = r), Vt(e); }
    function Qt(e, t) { if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    } e.textContent = t; }
    var $t = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
    function en(e, t, n) { var r = t.indexOf(`--`) === 0; n == null || typeof n == `boolean` || n === `` ? r ? e.setProperty(t, ``) : t === `float` ? e.cssFloat = `` : e[t] = `` : r ? e.setProperty(t, n) : typeof n != `number` || n === 0 || $t.has(t) ? t === `float` ? e.cssFloat = n : e[t] = (`` + n).trim() : e[t] = n + `px`; }
    function tn(e, t, n) { if (t != null && typeof t != `object`)
        throw Error(a(62)); if (e = e.style, n != null) {
        for (var r in n)
            !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf(`--`) === 0 ? e.setProperty(r, ``) : r === `float` ? e.cssFloat = `` : e[r] = ``);
        for (var i in t)
            r = t[i], t.hasOwnProperty(i) && n[i] !== r && en(e, i, r);
    }
    else
        for (var o in t)
            t.hasOwnProperty(o) && en(e, o, t[o]); }
    function nn(e) { if (e.indexOf(`-`) === -1)
        return !1; switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`: return !1;
        default: return !0;
    } }
    var rn = new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]), an = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function on(e) { return an.test(`` + e) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e; }
    function sn() { }
    var cn = null;
    function ln(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
    var un = null, dn = null;
    function fn(e) { var t = Ct(e); if (t && (e = t.stateNode)) {
        var n = e[mt] || null;
        a: switch (e = t.stateNode, t.type) {
            case `input`:
                if (Kt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === `radio` && t != null) {
                    for (n = e; n.parentNode;)
                        n = n.parentNode;
                    for (n = n.querySelectorAll(`input[name="` + Gt(`` + t) + `"][type="radio"]`), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = r[mt] || null;
                            if (!i)
                                throw Error(a(90));
                            Kt(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
                        }
                    }
                    for (t = 0; t < n.length; t++)
                        r = n[t], r.form === e.form && Ht(r);
                }
                break a;
            case `textarea`:
                Xt(e, n.value, n.defaultValue);
                break a;
            case `select`: t = n.value, t != null && Yt(e, !!n.multiple, t, !1);
        }
    } }
    var pn = !1;
    function mn(e, t, n) { if (pn)
        return e(t, n); pn = !0; try {
        return e(t);
    }
    finally {
        if (pn = !1, (un !== null || dn !== null) && (bu(), un && (t = un, e = dn, dn = un = null, fn(t), e)))
            for (t = 0; t < e.length; t++)
                fn(e[t]);
    } }
    function hn(e, t) { var n = e.stateNode; if (n === null)
        return null; var r = n[mt] || null; if (r === null)
        return null; n = r[t]; a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
            (r = !r.disabled) || (e = e.type, r = !(e === `button` || e === `input` || e === `select` || e === `textarea`)), e = !r;
            break a;
        default: e = !1;
    } if (e)
        return null; if (n && typeof n != `function`)
        throw Error(a(231, t, typeof n)); return n; }
    var gn = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0), _n = !1;
    if (gn)
        try {
            var M = {};
            Object.defineProperty(M, "passive", { get: function () { _n = !0; } }), window.addEventListener(`test`, M, M), window.removeEventListener(`test`, M, M);
        }
        catch {
            _n = !1;
        }
    var vn = null, yn = null, bn = null;
    function xn() { if (bn)
        return bn; var e, t = yn, n = t.length, r, i = `value` in vn ? vn.value : vn.textContent, a = i.length; for (e = 0; e < n && t[e] === i[e]; e++)
        ; var o = n - e; for (r = 1; r <= o && t[n - r] === i[a - r]; r++)
        ; return bn = i.slice(e, 1 < r ? 1 - r : void 0); }
    function Sn(e) { var t = e.keyCode; return `charCode` in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
    function Cn() { return !0; }
    function wn() { return !1; }
    function Tn(e) { function t(t, n, r, i, a) { for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e)
        e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]); return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Cn : wn, this.isPropagationStopped = wn, this; } return h(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != `unknown` && (e.returnValue = !1), this.isDefaultPrevented = Cn); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0), this.isPropagationStopped = Cn); }, persist: function () { }, isPersistent: Cn }), t; }
    var En = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Dn = Tn(En), On = h({}, En, { view: 0, detail: 0 }), kn = Tn(On), An, jn, Mn, Nn = h({}, On, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Un, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return `movementX` in e ? e.movementX : (e !== Mn && (Mn && e.type === `mousemove` ? (An = e.screenX - Mn.screenX, jn = e.screenY - Mn.screenY) : jn = An = 0, Mn = e), An); }, movementY: function (e) { return `movementY` in e ? e.movementY : jn; } }), Pn = Tn(Nn), Fn = Tn(h({}, Nn, { dataTransfer: 0 })), In = Tn(h({}, On, { relatedTarget: 0 })), Ln = Tn(h({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), Rn = Tn(h({}, En, { clipboardData: function (e) { return `clipboardData` in e ? e.clipboardData : window.clipboardData; } })), N = Tn(h({}, En, { data: 0 })), zn = { Esc: `Escape`, Spacebar: ` `, Left: `ArrowLeft`, Up: `ArrowUp`, Right: `ArrowRight`, Down: `ArrowDown`, Del: `Delete`, Win: `OS`, Menu: `ContextMenu`, Apps: `ContextMenu`, Scroll: `ScrollLock`, MozPrintableKey: `Unidentified` }, Bn = { 8: `Backspace`, 9: `Tab`, 12: `Clear`, 13: `Enter`, 16: `Shift`, 17: `Control`, 18: `Alt`, 19: `Pause`, 20: `CapsLock`, 27: `Escape`, 32: ` `, 33: `PageUp`, 34: `PageDown`, 35: `End`, 36: `Home`, 37: `ArrowLeft`, 38: `ArrowUp`, 39: `ArrowRight`, 40: `ArrowDown`, 45: `Insert`, 46: `Delete`, 112: `F1`, 113: `F2`, 114: `F3`, 115: `F4`, 116: `F5`, 117: `F6`, 118: `F7`, 119: `F8`, 120: `F9`, 121: `F10`, 122: `F11`, 123: `F12`, 144: `NumLock`, 145: `ScrollLock`, 224: `Meta` }, Vn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function Hn(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = Vn[e]) ? !!t[e] : !1; }
    function Un() { return Hn; }
    var Wn = Tn(h({}, On, { key: function (e) { if (e.key) {
            var t = zn[e.key] || e.key;
            if (t !== `Unidentified`)
                return t;
        } return e.type === `keypress` ? (e = Sn(e), e === 13 ? `Enter` : String.fromCharCode(e)) : e.type === `keydown` || e.type === `keyup` ? Bn[e.keyCode] || `Unidentified` : ``; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Un, charCode: function (e) { return e.type === `keypress` ? Sn(e) : 0; }, keyCode: function (e) { return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0; }, which: function (e) { return e.type === `keypress` ? Sn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0; } })), Gn = Tn(h({}, Nn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Kn = Tn(h({}, On, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Un })), qn = Tn(h({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Jn = Tn(h({}, Nn, { deltaX: function (e) { return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return `deltaY` in e ? e.deltaY : `wheelDeltaY` in e ? -e.wheelDeltaY : `wheelDelta` in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 })), Yn = Tn(h({}, En, { newState: 0, oldState: 0 })), Xn = [9, 13, 27, 32], Zn = gn && `CompositionEvent` in window, Qn = null;
    gn && `documentMode` in document && (Qn = document.documentMode);
    var $n = gn && `TextEvent` in window && !Qn, er = gn && (!Zn || Qn && 8 < Qn && 11 >= Qn), tr = ` `, nr = !1;
    function rr(e, t) { switch (e) {
        case `keyup`: return Xn.indexOf(t.keyCode) !== -1;
        case `keydown`: return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`: return !0;
        default: return !1;
    } }
    function ir(e) { return e = e.detail, typeof e == `object` && `data` in e ? e.data : null; }
    var P = !1;
    function ar(e, t) { switch (e) {
        case `compositionend`: return ir(t);
        case `keypress`: return t.which === 32 ? (nr = !0, tr) : null;
        case `textInput`: return e = t.data, e === tr && nr ? null : e;
        default: return null;
    } }
    function or(e, t) { if (P)
        return e === `compositionend` || !Zn && rr(e, t) ? (e = xn(), bn = yn = vn = null, P = !1, e) : null; switch (e) {
        case `paste`: return null;
        case `keypress`:
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which);
            }
            return null;
        case `compositionend`: return er && t.locale !== `ko` ? null : t.data;
        default: return null;
    } }
    var sr = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
    function cr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === `input` ? !!sr[e.type] : t === `textarea`; }
    function lr(e, t, n, r) { un ? dn ? dn.push(r) : dn = [r] : un = r, t = Ed(t, `onChange`), 0 < t.length && (n = new Dn(`onChange`, `change`, null, n, r), e.push({ event: n, listeners: t })); }
    var ur = null, dr = null;
    function fr(e) { yd(e, 0); }
    function pr(e) { if (Ht(wt(e)))
        return e; }
    function mr(e, t) { if (e === `change`)
        return t; }
    var hr = !1;
    if (gn) {
        var gr;
        if (gn) {
            var _r = `oninput` in document;
            if (!_r) {
                var vr = document.createElement(`div`);
                vr.setAttribute(`oninput`, `return;`), _r = typeof vr.oninput == `function`;
            }
            gr = _r;
        }
        else
            gr = !1;
        hr = gr && (!document.documentMode || 9 < document.documentMode);
    }
    function yr() { ur && (ur.detachEvent(`onpropertychange`, br), dr = ur = null); }
    function br(e) { if (e.propertyName === `value` && pr(dr)) {
        var t = [];
        lr(t, dr, e, ln(e)), mn(fr, t);
    } }
    function xr(e, t, n) { e === `focusin` ? (yr(), ur = t, dr = n, ur.attachEvent(`onpropertychange`, br)) : e === `focusout` && yr(); }
    function Sr(e) { if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return pr(dr); }
    function Cr(e, t) { if (e === `click`)
        return pr(t); }
    function wr(e, t) { if (e === `input` || e === `change`)
        return pr(t); }
    function Tr(e, t) { return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t; }
    var Er = typeof Object.is == `function` ? Object.is : Tr;
    function Dr(e, t) { if (Er(e, t))
        return !0; if (typeof e != `object` || !e || typeof t != `object` || !t)
        return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
        return !1; for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ke.call(t, i) || !Er(e[i], t[i]))
            return !1;
    } return !0; }
    function Or(e) { for (; e && e.firstChild;)
        e = e.firstChild; return e; }
    function kr(e, t) { var n = Or(e); e = 0; for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t)
                return { node: n, offset: t - e };
            e = r;
        }
        a: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break a;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Or(n);
    } }
    function Ar(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ar(e, t.parentNode) : `contains` in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1; }
    function jr(e) { e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window; for (var t = Ut(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == `string`;
        }
        catch {
            n = !1;
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ut(e.document);
    } return t; }
    function Mr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`); }
    var Nr = gn && `documentMode` in document && 11 >= document.documentMode, Pr = null, Fr = null, Ir = null, Lr = !1;
    function Rr(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; Lr || Pr == null || Pr !== Ut(r) || (r = Pr, `selectionStart` in r && Mr(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && Dr(Ir, r) || (Ir = r, r = Ed(Fr, `onSelect`), 0 < r.length && (t = new Dn(`onSelect`, `select`, null, t, n), e.push({ event: t, listeners: r }), t.target = Pr))); }
    function zr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n[`Webkit` + e] = `webkit` + t, n[`Moz` + e] = `moz` + t, n; }
    var Br = { animationend: zr(`Animation`, `AnimationEnd`), animationiteration: zr(`Animation`, `AnimationIteration`), animationstart: zr(`Animation`, `AnimationStart`), transitionrun: zr(`Transition`, `TransitionRun`), transitionstart: zr(`Transition`, `TransitionStart`), transitioncancel: zr(`Transition`, `TransitionCancel`), transitionend: zr(`Transition`, `TransitionEnd`) }, Vr = {}, Hr = {};
    gn && (Hr = document.createElement(`div`).style, `AnimationEvent` in window || (delete Br.animationend.animation, delete Br.animationiteration.animation, delete Br.animationstart.animation), `TransitionEvent` in window || delete Br.transitionend.transition);
    function Ur(e) { if (Vr[e])
        return Vr[e]; if (!Br[e])
        return e; var t = Br[e], n; for (n in t)
        if (t.hasOwnProperty(n) && n in Hr)
            return Vr[e] = t[n]; return e; }
    var Wr = Ur(`animationend`), Gr = Ur(`animationiteration`), Kr = Ur(`animationstart`), qr = Ur(`transitionrun`), Jr = Ur(`transitionstart`), Yr = Ur(`transitioncancel`), Xr = Ur(`transitionend`), Zr = new Map, Qr = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
    Qr.push(`scrollEnd`);
    function $r(e, t) { Zr.set(e, t), kt(t, [e]); }
    var ei = typeof reportError == `function` ? reportError : function (e) { if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
        var t = new window.ErrorEvent(`error`, { bubbles: !0, cancelable: !0, message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e), error: e });
        if (!window.dispatchEvent(t))
            return;
    }
    else if (typeof process == `object` && typeof process.emit == `function`) {
        process.emit(`uncaughtException`, e);
        return;
    } console.error(e); }, ti = [], ni = 0, ri = 0;
    function ii() { for (var e = ni, t = ri = ni = 0; t < e;) {
        var n = ti[t];
        ti[t++] = null;
        var r = ti[t];
        ti[t++] = null;
        var i = ti[t];
        ti[t++] = null;
        var a = ti[t];
        if (ti[t++] = null, r !== null && i !== null) {
            var o = r.pending;
            o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
        }
        a !== 0 && ci(n, i, a);
    } }
    function ai(e, t, n, r) { ti[ni++] = e, ti[ni++] = t, ti[ni++] = n, ti[ni++] = r, ri |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r); }
    function oi(e, t, n, r) { return ai(e, t, n, r), li(e); }
    function si(e, t) { return ai(e, null, null, t), li(e); }
    function ci(e, t, n) { e.lanes |= n; var r = e.alternate; r !== null && (r.lanes |= n); for (var i = !1, a = e.return; a !== null;)
        a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return; return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Ke(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null; }
    function li(e) { if (50 < du)
        throw du = 0, fu = null, Error(a(185)); for (var t = e.return; t !== null;)
        e = t, t = e.return; return e.tag === 3 ? e.stateNode : null; }
    var ui = {};
    function di(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
    function fi(e, t, n, r) { return new di(e, t, n, r); }
    function pi(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
    function mi(e, t) { var n = e.alternate; return n === null ? (n = fi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n; }
    function hi(e, t) { e.flags &= 65011714; var n = e.alternate; return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e; }
    function gi(e, t, n, r, i, o) { var s = 0; if (r = e, typeof e == `function`)
        pi(e) && (s = 1);
    else if (typeof e == `string`)
        s = Uf(e, n, me.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
    else
        a: switch (e) {
            case re: return e = fi(31, n, t, i), e.elementType = re, e.lanes = o, e;
            case y: return _i(n.children, i, o, t);
            case b:
                s = 8, i |= 24;
                break;
            case x: return e = fi(12, n, t, i | 2), e.elementType = x, e.lanes = o, e;
            case w: return e = fi(13, n, t, i), e.elementType = w, e.lanes = o, e;
            case te: return e = fi(19, n, t, i), e.elementType = te, e.lanes = o, e;
            default:
                if (typeof e == `object` && e)
                    switch (e.$$typeof) {
                        case S:
                            s = 10;
                            break a;
                        case ee:
                            s = 9;
                            break a;
                        case C:
                            s = 11;
                            break a;
                        case ne:
                            s = 14;
                            break a;
                        case T:
                            s = 16, r = null;
                            break a;
                    }
                s = 29, n = Error(a(130, e === null ? `null` : typeof e, ``)), r = null;
        } return t = fi(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t; }
    function _i(e, t, n, r) { return e = fi(7, e, r, t), e.lanes = n, e; }
    function vi(e, t, n) { return e = fi(6, e, null, t), e.lanes = n, e; }
    function yi(e) { var t = fi(18, null, null, 0); return t.stateNode = e, t; }
    function bi(e, t, n) { return t = fi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
    var xi = new WeakMap;
    function Si(e, t) { if (typeof e == `object` && e) {
        var n = xi.get(e);
        return n === void 0 ? (t = { value: e, source: t, stack: Oe(t) }, xi.set(e, t), t) : n;
    } return { value: e, source: t, stack: Oe(t) }; }
    var F = [], Ci = 0, wi = null, Ti = 0, Ei = [], Di = 0, Oi = null, ki = 1, Ai = ``;
    function ji(e, t) { F[Ci++] = Ti, F[Ci++] = wi, wi = e, Ti = t; }
    function Mi(e, t, n) { Ei[Di++] = ki, Ei[Di++] = Ai, Ei[Di++] = Oi, Oi = e; var r = ki; e = Ai; var i = 32 - Ke(r) - 1; r &= ~(1 << i), n += 1; var a = 32 - Ke(t) + i; if (30 < a) {
        var o = i - i % 5;
        a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ki = 1 << 32 - Ke(t) + i | n << i | r, Ai = a + e;
    }
    else
        ki = 1 << a | n << i | r, Ai = e; }
    function Ni(e) { e.return !== null && (ji(e, 1), Mi(e, 1, 0)); }
    function Pi(e) { for (; e === wi;)
        wi = F[--Ci], F[Ci] = null, Ti = F[--Ci], F[Ci] = null; for (; e === Oi;)
        Oi = Ei[--Di], Ei[Di] = null, Ai = Ei[--Di], Ei[Di] = null, ki = Ei[--Di], Ei[Di] = null; }
    function Fi(e, t) { Ei[Di++] = ki, Ei[Di++] = Ai, Ei[Di++] = Oi, ki = t.id, Ai = t.overflow, Oi = e; }
    var Ii = null, I = null, L = !1, Li = null, Ri = !1, zi = Error(a(519));
    function Bi(e) { throw Ki(Si(Error(a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e)), zi; }
    function Vi(e) { var t = e.stateNode, n = e.type, r = e.memoizedProps; switch (t[j] = e, t[mt] = r, n) {
        case `dialog`:
            Q(`cancel`, t), Q(`close`, t);
            break;
        case `iframe`:
        case `object`:
        case `embed`:
            Q(`load`, t);
            break;
        case `video`:
        case `audio`:
            for (n = 0; n < _d.length; n++)
                Q(_d[n], t);
            break;
        case `source`:
            Q(`error`, t);
            break;
        case `img`:
        case `image`:
        case `link`:
            Q(`error`, t), Q(`load`, t);
            break;
        case `details`:
            Q(`toggle`, t);
            break;
        case `input`:
            Q(`invalid`, t), qt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
            break;
        case `select`:
            Q(`invalid`, t);
            break;
        case `textarea`: Q(`invalid`, t), Zt(t, r.value, r.defaultValue, r.children);
    } n = r.children, typeof n != `string` && typeof n != `number` && typeof n != `bigint` || t.textContent === `` + n || !0 === r.suppressHydrationWarning || Md(t.textContent, n) ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)), r.onScroll != null && Q(`scroll`, t), r.onScrollEnd != null && Q(`scrollend`, t), r.onClick != null && (t.onclick = sn), t = !0) : t = !1, t || Bi(e, !0); }
    function Hi(e) { for (Ii = e.return; Ii;)
        switch (Ii.tag) {
            case 5:
            case 31:
            case 13:
                Ri = !1;
                return;
            case 27:
            case 3:
                Ri = !0;
                return;
            default: Ii = Ii.return;
        } }
    function Ui(e) { if (e !== Ii)
        return !1; if (!L)
        return Hi(e), L = !0, !1; var t = e.tag, n; if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== `form` && n !== `button`) || Ud(e.type, e.memoizedProps)), n = !n), n && I && Bi(e), Hi(e), t === 13) {
        if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e)
            throw Error(a(317));
        I = uf(e);
    }
    else if (t === 31) {
        if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e)
            throw Error(a(317));
        I = uf(e);
    }
    else
        t === 27 ? (t = I, Zd(e.type) ? (e = lf, lf = null, I = e) : I = t) : I = Ii ? cf(e.stateNode.nextSibling) : null; return !0; }
    function Wi() { I = Ii = null, L = !1; }
    function Gi() { var e = Li; return e !== null && (Zl === null ? Zl = e : Zl.push.apply(Zl, e), Li = null), e; }
    function Ki(e) { Li === null ? Li = [e] : Li.push(e); }
    var qi = fe(null), Ji = null, Yi = null;
    function Xi(e, t, n) { k(qi, t._currentValue), t._currentValue = n; }
    function Zi(e) { e._currentValue = qi.current, pe(qi); }
    function Qi(e, t, n) { for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n)
            break;
        e = e.return;
    } }
    function $i(e, t, n, r) { var i = e.child; for (i !== null && (i.return = e); i !== null;) {
        var o = i.dependencies;
        if (o !== null) {
            var s = i.child;
            o = o.firstContext;
            a: for (; o !== null;) {
                var c = o;
                o = i;
                for (var l = 0; l < t.length; l++)
                    if (c.context === t[l]) {
                        o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Qi(o.return, n, e), r || (s = null);
                        break a;
                    }
                o = c.next;
            }
        }
        else if (i.tag === 18) {
            if (s = i.return, s === null)
                throw Error(a(341));
            s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Qi(s, n, e), s = null;
        }
        else
            s = i.child;
        if (s !== null)
            s.return = i;
        else
            for (s = i; s !== null;) {
                if (s === e) {
                    s = null;
                    break;
                }
                if (i = s.sibling, i !== null) {
                    i.return = s.return, s = i;
                    break;
                }
                s = s.return;
            }
        i = s;
    } }
    function ea(e, t, n, r) { e = null; for (var i = t, o = !1; i !== null;) {
        if (!o) {
            if (i.flags & 524288)
                o = !0;
            else if (i.flags & 262144)
                break;
        }
        if (i.tag === 10) {
            var s = i.alternate;
            if (s === null)
                throw Error(a(387));
            if (s = s.memoizedProps, s !== null) {
                var c = i.type;
                Er(i.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
            }
        }
        else if (i === _e.current) {
            if (s = i.alternate, s === null)
                throw Error(a(387));
            s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e === null ? e = [Qf] : e.push(Qf));
        }
        i = i.return;
    } e !== null && $i(t, e, n, r), t.flags |= 262144; }
    function ta(e) { for (e = e.firstContext; e !== null;) {
        if (!Er(e.context._currentValue, e.memoizedValue))
            return !0;
        e = e.next;
    } return !1; }
    function na(e) { Ji = e, Yi = null, e = e.dependencies, e !== null && (e.firstContext = null); }
    function ra(e) { return aa(Ji, e); }
    function ia(e, t) { return Ji === null && na(e), aa(e, t); }
    function aa(e, t) { var n = t._currentValue; if (t = { context: t, memoizedValue: n, next: null }, Yi === null) {
        if (e === null)
            throw Error(a(308));
        Yi = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    }
    else
        Yi = Yi.next = t; return n; }
    var oa = typeof AbortController < `u` ? AbortController : function () { var e = [], t = this.signal = { aborted: !1, addEventListener: function (t, n) { e.push(n); } }; this.abort = function () { t.aborted = !0, e.forEach(function (e) { return e(); }); }; }, sa = t.unstable_scheduleCallback, ca = t.unstable_NormalPriority, la = { $$typeof: S, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function ua() { return { controller: new oa, data: new Map, refCount: 0 }; }
    function da(e) { e.refCount--, e.refCount === 0 && sa(ca, function () { e.controller.abort(); }); }
    var fa = null, pa = 0, ma = 0, ha = null;
    function ga(e, t) { if (fa === null) {
        var n = fa = [];
        pa = 0, ma = dd(), ha = { status: `pending`, value: void 0, then: function (e) { n.push(e); } };
    } return pa++, t.then(_a, _a), t; }
    function _a() { if (--pa === 0 && fa !== null) {
        ha !== null && (ha.status = `fulfilled`);
        var e = fa;
        fa = null, ma = 0, ha = null;
        for (var t = 0; t < e.length; t++)
            (0, e[t])();
    } }
    function va(e, t) { var n = [], r = { status: `pending`, value: null, reason: null, then: function (e) { n.push(e); } }; return e.then(function () { r.status = `fulfilled`, r.value = t; for (var e = 0; e < n.length; e++)
        (0, n[e])(t); }, function (e) { for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
        (0, n[e])(void 0); }), r; }
    var ya = D.S;
    D.S = function (e, t) { eu = Pe(), typeof t == `object` && t && typeof t.then == `function` && ga(e, t), ya !== null && ya(e, t); };
    var ba = fe(null);
    function xa() { var e = ba.current; return e === null ? K.pooledCache : e; }
    function Sa(e, t) { t === null ? k(ba, ba.current) : k(ba, t.pool); }
    function Ca() { var e = xa(); return e === null ? null : { parent: la._currentValue, pool: e }; }
    var wa = Error(a(460)), Ta = Error(a(474)), Ea = Error(a(542)), Da = { then: function () { } };
    function Oa(e) { return e = e.status, e === `fulfilled` || e === `rejected`; }
    function ka(e, t, n) { switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(sn, sn), t = n), t.status) {
        case `fulfilled`: return t.value;
        case `rejected`: throw e = t.reason, Na(e), e;
        default:
            if (typeof t.status == `string`)
                t.then(sn, sn);
            else {
                if (e = K, e !== null && 100 < e.shellSuspendCounter)
                    throw Error(a(482));
                e = t, e.status = `pending`, e.then(function (e) { if (t.status === `pending`) {
                    var n = t;
                    n.status = `fulfilled`, n.value = e;
                } }, function (e) { if (t.status === `pending`) {
                    var n = t;
                    n.status = `rejected`, n.reason = e;
                } });
            }
            switch (t.status) {
                case `fulfilled`: return t.value;
                case `rejected`: throw e = t.reason, Na(e), e;
            }
            throw ja = t, wa;
    } }
    function Aa(e) { try {
        var t = e._init;
        return t(e._payload);
    }
    catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? (ja = e, wa) : e;
    } }
    var ja = null;
    function Ma() { if (ja === null)
        throw Error(a(459)); var e = ja; return ja = null, e; }
    function Na(e) { if (e === wa || e === Ea)
        throw Error(a(483)); }
    var Pa = null, Fa = 0;
    function Ia(e) { var t = Fa; return Fa += 1, Pa === null && (Pa = []), ka(Pa, e, t); }
    function La(e, t) { t = t.props.ref, e.ref = t === void 0 ? null : t; }
    function Ra(e, t) { throw t.$$typeof === g ? Error(a(525)) : (e = Object.prototype.toString.call(t), Error(a(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e))); }
    function za(e) { function t(t, n) { if (e) {
        var r = t.deletions;
        r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
    } } function n(n, r) { if (!e)
        return null; for (; r !== null;)
        t(n, r), r = r.sibling; return null; } function r(e) { for (var t = new Map; e !== null;)
        e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling; return t; } function i(e, t) { return e = mi(e, t), e.index = 0, e.sibling = null, e; } function o(t, n, r) { return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n); } function s(t) { return e && t.alternate === null && (t.flags |= 67108866), t; } function c(e, t, n, r) { return t === null || t.tag !== 6 ? (t = vi(n, e.mode, r), t.return = e, t) : (t = i(t, n), t.return = e, t); } function l(e, t, n, r) { var a = n.type; return a === y ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === a || typeof a == `object` && a && a.$$typeof === T && Aa(a) === t.type) ? (t = i(t, n.props), La(t, n), t.return = e, t) : (t = gi(n.type, n.key, n.props, null, e.mode, r), La(t, n), t.return = e, t); } function u(e, t, n, r) { return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = bi(n, e.mode, r), t.return = e, t) : (t = i(t, n.children || []), t.return = e, t); } function d(e, t, n, r, a) { return t === null || t.tag !== 7 ? (t = _i(n, e.mode, r, a), t.return = e, t) : (t = i(t, n), t.return = e, t); } function f(e, t, n) { if (typeof t == `string` && t !== `` || typeof t == `number` || typeof t == `bigint`)
        return t = vi(`` + t, e.mode, n), t.return = e, t; if (typeof t == `object` && t) {
        switch (t.$$typeof) {
            case _: return n = gi(t.type, t.key, t.props, null, e.mode, n), La(n, t), n.return = e, n;
            case v: return t = bi(t, e.mode, n), t.return = e, t;
            case T: return t = Aa(t), f(e, t, n);
        }
        if (ce(t) || ae(t))
            return t = _i(t, e.mode, n, null), t.return = e, t;
        if (typeof t.then == `function`)
            return f(e, Ia(t), n);
        if (t.$$typeof === S)
            return f(e, ia(e, t), n);
        Ra(e, t);
    } return null; } function p(e, t, n, r) { var i = t === null ? null : t.key; if (typeof n == `string` && n !== `` || typeof n == `number` || typeof n == `bigint`)
        return i === null ? c(e, t, `` + n, r) : null; if (typeof n == `object` && n) {
        switch (n.$$typeof) {
            case _: return n.key === i ? l(e, t, n, r) : null;
            case v: return n.key === i ? u(e, t, n, r) : null;
            case T: return n = Aa(n), p(e, t, n, r);
        }
        if (ce(n) || ae(n))
            return i === null ? d(e, t, n, r, null) : null;
        if (typeof n.then == `function`)
            return p(e, t, Ia(n), r);
        if (n.$$typeof === S)
            return p(e, t, ia(e, n), r);
        Ra(e, n);
    } return null; } function m(e, t, n, r, i) { if (typeof r == `string` && r !== `` || typeof r == `number` || typeof r == `bigint`)
        return e = e.get(n) || null, c(t, e, `` + r, i); if (typeof r == `object` && r) {
        switch (r.$$typeof) {
            case _: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
            case v: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
            case T: return r = Aa(r), m(e, t, n, r, i);
        }
        if (ce(r) || ae(r))
            return e = e.get(n) || null, d(t, e, r, i, null);
        if (typeof r.then == `function`)
            return m(e, t, n, Ia(r), i);
        if (r.$$typeof === S)
            return m(e, t, n, ia(t, r), i);
        Ra(t, r);
    } return null; } function h(i, a, s, c) { for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
        d.index > h ? (g = d, d = null) : g = d.sibling;
        var _ = p(i, d, s[h], c);
        if (_ === null) {
            d === null && (d = g);
            break;
        }
        e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
    } if (h === s.length)
        return n(i, d), L && ji(i, h), l; if (d === null) {
        for (; h < s.length; h++)
            d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
        return L && ji(i, h), l;
    } for (d = r(d); h < s.length; h++)
        g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g); return e && d.forEach(function (e) { return t(i, e); }), L && ji(i, h), l; } function g(i, s, c, l) { if (c == null)
        throw Error(a(151)); for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
        h.index > g ? (_ = h, h = null) : _ = h.sibling;
        var y = p(i, h, v.value, l);
        if (y === null) {
            h === null && (h = _);
            break;
        }
        e && h && y.alternate === null && t(i, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
    } if (v.done)
        return n(i, h), L && ji(i, g), u; if (h === null) {
        for (; !v.done; g++, v = c.next())
            v = f(i, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
        return L && ji(i, g), u;
    } for (h = r(h); !v.done; g++, v = c.next())
        v = m(h, i, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v); return e && h.forEach(function (e) { return t(i, e); }), L && ji(i, g), u; } function b(e, r, o, c) { if (typeof o == `object` && o && o.type === y && o.key === null && (o = o.props.children), typeof o == `object` && o) {
        switch (o.$$typeof) {
            case _:
                a: {
                    for (var l = o.key; r !== null;) {
                        if (r.key === l) {
                            if (l = o.type, l === y) {
                                if (r.tag === 7) {
                                    n(e, r.sibling), c = i(r, o.props.children), c.return = e, e = c;
                                    break a;
                                }
                            }
                            else if (r.elementType === l || typeof l == `object` && l && l.$$typeof === T && Aa(l) === r.type) {
                                n(e, r.sibling), c = i(r, o.props), La(c, o), c.return = e, e = c;
                                break a;
                            }
                            n(e, r);
                            break;
                        }
                        else
                            t(e, r);
                        r = r.sibling;
                    }
                    o.type === y ? (c = _i(o.props.children, e.mode, c, o.key), c.return = e, e = c) : (c = gi(o.type, o.key, o.props, null, e.mode, c), La(c, o), c.return = e, e = c);
                }
                return s(e);
            case v:
                a: {
                    for (l = o.key; r !== null;) {
                        if (r.key === l)
                            if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                n(e, r.sibling), c = i(r, o.children || []), c.return = e, e = c;
                                break a;
                            }
                            else {
                                n(e, r);
                                break;
                            }
                        else
                            t(e, r);
                        r = r.sibling;
                    }
                    c = bi(o, e.mode, c), c.return = e, e = c;
                }
                return s(e);
            case T: return o = Aa(o), b(e, r, o, c);
        }
        if (ce(o))
            return h(e, r, o, c);
        if (ae(o)) {
            if (l = ae(o), typeof l != `function`)
                throw Error(a(150));
            return o = l.call(o), g(e, r, o, c);
        }
        if (typeof o.then == `function`)
            return b(e, r, Ia(o), c);
        if (o.$$typeof === S)
            return b(e, r, ia(e, o), c);
        Ra(e, o);
    } return typeof o == `string` && o !== `` || typeof o == `number` || typeof o == `bigint` ? (o = `` + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = i(r, o), c.return = e, e = c) : (n(e, r), c = vi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r); } return function (e, t, n, r) { try {
        Fa = 0;
        var i = b(e, t, n, r);
        return Pa = null, i;
    }
    catch (t) {
        if (t === wa || t === Ea)
            throw t;
        var a = fi(29, t, null, e.mode);
        return a.lanes = r, a.return = e, a;
    } }; }
    var Ba = za(!0), Va = za(!1), Ha = !1;
    function Ua(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null }; }
    function Wa(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null }); }
    function Ga(e) { return { lane: e, tag: 0, payload: null, callback: null, next: null }; }
    function Ka(e, t, n) { var r = e.updateQueue; if (r === null)
        return null; if (r = r.shared, G & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = li(e), ci(e, null, n), t;
    } return ai(e, r, t, n), li(e); }
    function qa(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, st(e, n);
    } }
    function Ja(e, t) { var n = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null, a = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
                a === null ? i = a = o : a = a.next = o, n = n.next;
            } while (n !== null);
            a === null ? i = a = t : a = a.next = t;
        }
        else
            i = a = t;
        n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, callbacks: r.callbacks }, e.updateQueue = n;
        return;
    } e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
    var Ya = !1;
    function Xa() { if (Ya) {
        var e = ha;
        if (e !== null)
            throw e;
    } }
    function Za(e, t, n, r) { Ya = !1; var i = e.updateQueue; Ha = !1; var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending; if (s !== null) {
        i.shared.pending = null;
        var c = s, l = c.next;
        c.next = null, o === null ? a = l : o.next = l, o = c;
        var u = e.alternate;
        u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
    } if (a !== null) {
        var d = i.baseState;
        o = 0, u = l = c = null, s = a;
        do {
            var f = s.lane & -536870913, p = f !== s.lane;
            if (p ? (J & f) === f : (r & f) === f) {
                f !== 0 && f === ma && (Ya = !0), u !== null && (u = u.next = { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null });
                a: {
                    var m = e, g = s;
                    f = t;
                    var _ = n;
                    switch (g.tag) {
                        case 1:
                            if (m = g.payload, typeof m == `function`) {
                                d = m.call(_, d, f);
                                break a;
                            }
                            d = m;
                            break a;
                        case 3: m.flags = m.flags & -65537 | 128;
                        case 0:
                            if (m = g.payload, f = typeof m == `function` ? m.call(_, d, f) : m, f == null)
                                break a;
                            d = h({}, d, f);
                            break a;
                        case 2: Ha = !0;
                    }
                }
                f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
            }
            else
                p = { lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
            if (s = s.next, s === null) {
                if (s = i.shared.pending, s === null)
                    break;
                p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
            }
        } while (1);
        u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), Gl |= o, e.lanes = o, e.memoizedState = d;
    } }
    function Qa(e, t) { if (typeof e != `function`)
        throw Error(a(191, e)); e.call(t); }
    function $a(e, t) { var n = e.callbacks; if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++)
            Qa(n[e], t); }
    var eo = fe(null), to = fe(0);
    function no(e, t) { e = Wl, k(to, e), k(eo, t), Wl = e | t.baseLanes; }
    function ro() { k(to, Wl), k(eo, eo.current); }
    function io() { Wl = to.current, pe(eo), pe(to); }
    var ao = fe(null), oo = null;
    function so(e) { var t = e.alternate; k(R, R.current & 1), k(ao, e), oo === null && (t === null || eo.current !== null || t.memoizedState !== null) && (oo = e); }
    function co(e) { k(R, R.current), k(ao, e), oo === null && (oo = e); }
    function lo(e) { e.tag === 22 ? (k(R, R.current), k(ao, e), oo === null && (oo = e)) : uo(e); }
    function uo() { k(R, R.current), k(ao, ao.current); }
    function fo(e) { pe(ao), oo === e && (oo = null), pe(R); }
    var R = fe(0);
    function po(e) { for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || af(n) || of(n)))
                return t;
        }
        else if (t.tag === 19 && (t.memoizedProps.revealOrder === `forwards` || t.memoizedProps.revealOrder === `backwards` || t.memoizedProps.revealOrder === `unstable_legacy-backwards` || t.memoizedProps.revealOrder === `together`)) {
            if (t.flags & 128)
                return t;
        }
        else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    } return null; }
    var mo = 0, z = null, B = null, ho = null, go = !1, _o = !1, vo = !1, yo = 0, bo = 0, xo = null, So = 0;
    function V() { throw Error(a(321)); }
    function Co(e, t) { if (t === null)
        return !1; for (var n = 0; n < t.length && n < e.length; n++)
        if (!Er(e[n], t[n]))
            return !1; return !0; }
    function wo(e, t, n, r, i, a) { return mo = a, z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? Bs : Vs, vo = !1, a = n(r, i), vo = !1, _o && (a = Eo(t, n, r, i)), To(e), a; }
    function To(e) { D.H = zs; var t = B !== null && B.next !== null; if (mo = 0, ho = B = z = null, go = !1, bo = 0, xo = null, t)
        throw Error(a(300)); e === null || ic || (e = e.dependencies, e !== null && ta(e) && (ic = !0)); }
    function Eo(e, t, n, r) { z = e; var i = 0; do {
        if (_o && (xo = null), bo = 0, _o = !1, 25 <= i)
            throw Error(a(301));
        if (i += 1, ho = B = null, e.updateQueue != null) {
            var o = e.updateQueue;
            o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
        }
        D.H = Hs, o = t(n, r);
    } while (_o); return o; }
    function Do() { var e = D.H, t = e.useState()[0]; return t = typeof t.then == `function` ? No(t) : t, e = e.useState()[0], (B === null ? null : B.memoizedState) !== e && (z.flags |= 1024), t; }
    function Oo() { var e = yo !== 0; return yo = 0, e; }
    function ko(e, t, n) { t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n; }
    function Ao(e) { if (go) {
        for (e = e.memoizedState; e !== null;) {
            var t = e.queue;
            t !== null && (t.pending = null), e = e.next;
        }
        go = !1;
    } mo = 0, ho = B = z = null, _o = !1, bo = yo = 0, xo = null; }
    function jo() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return ho === null ? z.memoizedState = ho = e : ho = ho.next = e, ho; }
    function H() { if (B === null) {
        var e = z.alternate;
        e = e === null ? null : e.memoizedState;
    }
    else
        e = B.next; var t = ho === null ? z.memoizedState : ho.next; if (t !== null)
        ho = t, B = e;
    else {
        if (e === null)
            throw z.alternate === null ? Error(a(467)) : Error(a(310));
        B = e, e = { memoizedState: B.memoizedState, baseState: B.baseState, baseQueue: B.baseQueue, queue: B.queue, next: null }, ho === null ? z.memoizedState = ho = e : ho = ho.next = e;
    } return ho; }
    function Mo() { return { lastEffect: null, events: null, stores: null, memoCache: null }; }
    function No(e) { var t = bo; return bo += 1, xo === null && (xo = []), e = ka(xo, e, t), t = z, (ho === null ? t.memoizedState : ho.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? Bs : Vs), e; }
    function Po(e) { if (typeof e == `object` && e) {
        if (typeof e.then == `function`)
            return No(e);
        if (e.$$typeof === S)
            return ra(e);
    } throw Error(a(438, String(e))); }
    function Fo(e) { var t = null, n = z.updateQueue; if (n !== null && (t = n.memoCache), t == null) {
        var r = z.alternate;
        r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = { data: r.data.map(function (e) { return e.slice(); }), index: 0 })));
    } if (t ??= { data: [], index: 0 }, n === null && (n = Mo(), z.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++)
            n[r] = ie; return t.index++, n; }
    function Io(e, t) { return typeof t == `function` ? t(e) : t; }
    function Lo(e) { return Ro(H(), B, e); }
    function Ro(e, t, n) { var r = e.queue; if (r === null)
        throw Error(a(311)); r.lastRenderedReducer = n; var i = e.baseQueue, o = r.pending; if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s;
        }
        t.baseQueue = i = o, r.pending = null;
    } if (o = e.baseState, i === null)
        e.memoizedState = o;
    else {
        t = i.next;
        var c = s = null, l = null, u = t, d = !1;
        do {
            var f = u.lane & -536870913;
            if (f === u.lane ? (mo & f) === f : (J & f) === f) {
                var p = u.revertLane;
                if (p === 0)
                    l !== null && (l = l.next = { lane: 0, revertLane: 0, gesture: null, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), f === ma && (d = !0);
                else if ((mo & p) === p) {
                    u = u.next, p === ma && (d = !0);
                    continue;
                }
                else
                    f = { lane: 0, revertLane: u.revertLane, gesture: null, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }, l === null ? (c = l = f, s = o) : l = l.next = f, z.lanes |= p, Gl |= p;
                f = u.action, vo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
            }
            else
                p = { lane: f, revertLane: u.revertLane, gesture: u.gesture, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }, l === null ? (c = l = p, s = o) : l = l.next = p, z.lanes |= f, Gl |= f;
            u = u.next;
        } while (u !== null && u !== t);
        if (l === null ? s = o : l.next = c, !Er(o, e.memoizedState) && (ic = !0, d && (n = ha, n !== null)))
            throw n;
        e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
    } return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch]; }
    function zo(e) { var t = H(), n = t.queue; if (n === null)
        throw Error(a(311)); n.lastRenderedReducer = e; var r = n.dispatch, i = n.pending, o = t.memoizedState; if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action), s = s.next;
        while (s !== i);
        Er(o, t.memoizedState) || (ic = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    } return [o, r]; }
    function Bo(e, t, n) { var r = z, i = H(), o = L; if (o) {
        if (n === void 0)
            throw Error(a(407));
        n = n();
    }
    else
        n = t(); var s = !Er((B || i).memoizedState, n); if (s && (i.memoizedState = n, ic = !0), i = i.queue, ds(Uo.bind(null, r, i, e), [e]), i.getSnapshot !== t || s || ho !== null && ho.memoizedState.tag & 1) {
        if (r.flags |= 2048, os(9, { destroy: void 0 }, Ho.bind(null, r, i, n, t), null), K === null)
            throw Error(a(349));
        o || mo & 127 || Vo(r, t, n);
    } return n; }
    function Vo(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = z.updateQueue, t === null ? (t = Mo(), z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)); }
    function Ho(e, t, n, r) { t.value = n, t.getSnapshot = r, Wo(t) && Go(e); }
    function Uo(e, t, n) { return n(function () { Wo(t) && Go(e); }); }
    function Wo(e) { var t = e.getSnapshot; e = e.value; try {
        var n = t();
        return !Er(e, n);
    }
    catch {
        return !0;
    } }
    function Go(e) { var t = si(e, 2); t !== null && hu(t, e, 2); }
    function Ko(e) { var t = jo(); if (typeof e == `function`) {
        var n = e;
        if (e = n(), vo) {
            Ge(!0);
            try {
                n();
            }
            finally {
                Ge(!1);
            }
        }
    } return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Io, lastRenderedState: e }, t; }
    function qo(e, t, n, r) { return e.baseState = n, Ro(e, B, typeof r == `function` ? r : Io); }
    function Jo(e, t, n, r, i) { if (Is(e))
        throw Error(a(485)); if (e = t.action, e !== null) {
        var o = { payload: i, action: e, next: null, isTransition: !0, status: `pending`, value: null, reason: null, listeners: [], then: function (e) { o.listeners.push(e); } };
        D.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Yo(t, o)) : (o.next = n.next, t.pending = n.next = o);
    } }
    function Yo(e, t) { var n = t.action, r = t.payload, i = e.state; if (t.isTransition) {
        var a = D.T, o = {};
        D.T = o;
        try {
            var s = n(i, r), c = D.S;
            c !== null && c(o, s), Xo(e, t, s);
        }
        catch (n) {
            Qo(e, t, n);
        }
        finally {
            a !== null && o.types !== null && (a.types = o.types), D.T = a;
        }
    }
    else
        try {
            a = n(i, r), Xo(e, t, a);
        }
        catch (n) {
            Qo(e, t, n);
        } }
    function Xo(e, t, n) { typeof n == `object` && n && typeof n.then == `function` ? n.then(function (n) { Zo(e, t, n); }, function (n) { return Qo(e, t, n); }) : Zo(e, t, n); }
    function Zo(e, t, n) { t.status = `fulfilled`, t.value = n, $o(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Yo(e, n))); }
    function Qo(e, t, n) { var r = e.pending; if (e.pending = null, r !== null) {
        r = r.next;
        do
            t.status = `rejected`, t.reason = n, $o(t), t = t.next;
        while (t !== r);
    } e.action = null; }
    function $o(e) { e = e.listeners; for (var t = 0; t < e.length; t++)
        (0, e[t])(); }
    function es(e, t) { return t; }
    function ts(e, t) { if (L) {
        var n = K.formState;
        if (n !== null) {
            a: {
                var r = z;
                if (L) {
                    if (I) {
                        b: {
                            for (var i = I, a = Ri; i.nodeType !== 8;) {
                                if (!a) {
                                    i = null;
                                    break b;
                                }
                                if (i = cf(i.nextSibling), i === null) {
                                    i = null;
                                    break b;
                                }
                            }
                            a = i.data, i = a === `F!` || a === `F` ? i : null;
                        }
                        if (i) {
                            I = cf(i.nextSibling), r = i.data === `F!`;
                            break a;
                        }
                    }
                    Bi(r);
                }
                r = !1;
            }
            r && (t = n[0]);
        }
    } return n = jo(), n.memoizedState = n.baseState = t, r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: es, lastRenderedState: t }, n.queue = r, n = Ns.bind(null, z, r), r.dispatch = n, r = Ko(!1), a = Fs.bind(null, z, !1, r.queue), r = jo(), i = { state: t, dispatch: null, action: e, pending: null }, r.queue = i, n = Jo.bind(null, z, i, a, n), i.dispatch = n, r.memoizedState = e, [t, n, !1]; }
    function ns(e) { return rs(H(), B, e); }
    function rs(e, t, n) { if (t = Ro(e, t, es)[0], e = Lo(Io)[0], typeof t == `object` && t && typeof t.then == `function`)
        try {
            var r = No(t);
        }
        catch (e) {
            throw e === wa ? Ea : e;
        }
    else
        r = t; t = H(); var i = t.queue, a = i.dispatch; return n !== t.memoizedState && (z.flags |= 2048, os(9, { destroy: void 0 }, is.bind(null, i, n), null)), [r, a, e]; }
    function is(e, t) { e.action = t; }
    function as(e) { var t = H(), n = B; if (n !== null)
        return rs(t, n, e); H(), t = t.memoizedState, n = H(); var r = n.queue.dispatch; return n.memoizedState = e, [t, r, !1]; }
    function os(e, t, n, r) { return e = { tag: e, create: n, deps: r, inst: t, next: null }, t = z.updateQueue, t === null && (t = Mo(), z.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e; }
    function ss() { return H().memoizedState; }
    function cs(e, t, n, r) { var i = jo(); z.flags |= e, i.memoizedState = os(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r); }
    function ls(e, t, n, r) { var i = H(); r = r === void 0 ? null : r; var a = i.memoizedState.inst; B !== null && r !== null && Co(r, B.memoizedState.deps) ? i.memoizedState = os(t, a, n, r) : (z.flags |= e, i.memoizedState = os(1 | t, a, n, r)); }
    function us(e, t) { cs(8390656, 8, e, t); }
    function ds(e, t) { ls(2048, 8, e, t); }
    function fs(e) { z.flags |= 4; var t = z.updateQueue; if (t === null)
        t = Mo(), z.updateQueue = t, t.events = [e];
    else {
        var n = t.events;
        n === null ? t.events = [e] : n.push(e);
    } }
    function ps(e) { var t = H().memoizedState; return fs({ ref: t, nextImpl: e }), function () { if (G & 2)
        throw Error(a(440)); return t.impl.apply(void 0, arguments); }; }
    function ms(e, t) { return ls(4, 2, e, t); }
    function hs(e, t) { return ls(4, 4, e, t); }
    function gs(e, t) { if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () { typeof n == `function` ? n() : t(null); };
    } if (t != null)
        return e = e(), t.current = e, function () { t.current = null; }; }
    function _s(e, t, n) { n = n == null ? null : n.concat([e]), ls(4, 4, gs.bind(null, t, e), n); }
    function vs() { }
    function ys(e, t) { var n = H(); t = t === void 0 ? null : t; var r = n.memoizedState; return t !== null && Co(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
    function bs(e, t) { var n = H(); t = t === void 0 ? null : t; var r = n.memoizedState; if (t !== null && Co(t, r[1]))
        return r[0]; if (r = e(), vo) {
        Ge(!0);
        try {
            e();
        }
        finally {
            Ge(!1);
        }
    } return n.memoizedState = [r, t], r; }
    function xs(e, t, n) { return n === void 0 || mo & 1073741824 && !(J & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = mu(), z.lanes |= e, Gl |= e, n); }
    function Ss(e, t, n, r) { return Er(n, t) ? n : eo.current === null ? !(mo & 42) || mo & 1073741824 && !(J & 261930) ? (ic = !0, e.memoizedState = n) : (e = mu(), z.lanes |= e, Gl |= e, t) : (e = xs(e, n, r), Er(e, t) || (ic = !0), e); }
    function Cs(e, t, n, r, i) { var a = O.p; O.p = a !== 0 && 8 > a ? a : 8; var o = D.T, s = {}; D.T = s, Fs(e, !1, t, n); try {
        var c = i(), l = D.S;
        l !== null && l(s, c), typeof c == `object` && c && typeof c.then == `function` ? Ps(e, t, va(c, r), pu(e)) : Ps(e, t, r, pu(e));
    }
    catch (n) {
        Ps(e, t, { then: function () { }, status: `rejected`, reason: n }, pu());
    }
    finally {
        O.p = a, o !== null && s.types !== null && (o.types = s.types), D.T = o;
    } }
    function ws() { }
    function Ts(e, t, n, r) { if (e.tag !== 5)
        throw Error(a(476)); var i = Es(e).queue; Cs(e, i, t, le, n === null ? ws : function () { return Ds(e), n(r); }); }
    function Es(e) { var t = e.memoizedState; if (t !== null)
        return t; t = { memoizedState: le, baseState: le, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Io, lastRenderedState: le }, next: null }; var n = {}; return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Io, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t; }
    function Ds(e) { var t = Es(e); t.next === null && (t = e.alternate.memoizedState), Ps(e, t.next.queue, {}, pu()); }
    function Os() { return ra(Qf); }
    function ks() { return H().memoizedState; }
    function As() { return H().memoizedState; }
    function js(e) { for (var t = e.return; t !== null;) {
        switch (t.tag) {
            case 24:
            case 3:
                var n = pu();
                e = Ga(n);
                var r = Ka(t, e, n);
                r !== null && (hu(r, t, n), qa(r, t, n)), t = { cache: ua() }, e.payload = t;
                return;
        }
        t = t.return;
    } }
    function Ms(e, t, n) { var r = pu(); n = { lane: r, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }, Is(e) ? Ls(t, n) : (n = oi(e, t, n, r), n !== null && (hu(n, e, r), Rs(n, t, r))); }
    function Ns(e, t, n) { Ps(e, t, n, pu()); }
    function Ps(e, t, n, r) { var i = { lane: r, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }; if (Is(e))
        Ls(t, i);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null))
            try {
                var o = t.lastRenderedState, s = a(o, n);
                if (i.hasEagerState = !0, i.eagerState = s, Er(s, o))
                    return ai(e, t, i, 0), K === null && ii(), !1;
            }
            catch { }
        if (n = oi(e, t, i, r), n !== null)
            return hu(n, e, r), Rs(n, t, r), !0;
    } return !1; }
    function Fs(e, t, n, r) { if (r = { lane: 2, revertLane: dd(), gesture: null, action: r, hasEagerState: !1, eagerState: null, next: null }, Is(e)) {
        if (t)
            throw Error(a(479));
    }
    else
        t = oi(e, n, r, 2), t !== null && hu(t, e, 2); }
    function Is(e) { var t = e.alternate; return e === z || t !== null && t === z; }
    function Ls(e, t) { _o = go = !0; var n = e.pending; n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
    function Rs(e, t, n) { if (n & 4194048) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, st(e, n);
    } }
    var zs = { readContext: ra, use: Po, useCallback: V, useContext: V, useEffect: V, useImperativeHandle: V, useLayoutEffect: V, useInsertionEffect: V, useMemo: V, useReducer: V, useRef: V, useState: V, useDebugValue: V, useDeferredValue: V, useTransition: V, useSyncExternalStore: V, useId: V, useHostTransitionStatus: V, useFormState: V, useActionState: V, useOptimistic: V, useMemoCache: V, useCacheRefresh: V };
    zs.useEffectEvent = V;
    var Bs = { readContext: ra, use: Po, useCallback: function (e, t) { return jo().memoizedState = [e, t === void 0 ? null : t], e; }, useContext: ra, useEffect: us, useImperativeHandle: function (e, t, n) { n = n == null ? null : n.concat([e]), cs(4194308, 4, gs.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return cs(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { cs(4, 2, e, t); }, useMemo: function (e, t) { var n = jo(); t = t === void 0 ? null : t; var r = e(); if (vo) {
            Ge(!0);
            try {
                e();
            }
            finally {
                Ge(!1);
            }
        } return n.memoizedState = [r, t], r; }, useReducer: function (e, t, n) { var r = jo(); if (n !== void 0) {
            var i = n(t);
            if (vo) {
                Ge(!0);
                try {
                    n(t);
                }
                finally {
                    Ge(!1);
                }
            }
        }
        else
            i = t; return r.memoizedState = r.baseState = i, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: i }, r.queue = e, e = e.dispatch = Ms.bind(null, z, e), [r.memoizedState, e]; }, useRef: function (e) { var t = jo(); return e = { current: e }, t.memoizedState = e; }, useState: function (e) { e = Ko(e); var t = e.queue, n = Ns.bind(null, z, t); return t.dispatch = n, [e.memoizedState, n]; }, useDebugValue: vs, useDeferredValue: function (e, t) { return xs(jo(), e, t); }, useTransition: function () { var e = Ko(!1); return e = Cs.bind(null, z, e.queue, !0, !1), jo().memoizedState = e, [!1, e]; }, useSyncExternalStore: function (e, t, n) { var r = z, i = jo(); if (L) {
            if (n === void 0)
                throw Error(a(407));
            n = n();
        }
        else {
            if (n = t(), K === null)
                throw Error(a(349));
            J & 127 || Vo(r, t, n);
        } i.memoizedState = n; var o = { value: n, getSnapshot: t }; return i.queue = o, us(Uo.bind(null, r, o, e), [e]), r.flags |= 2048, os(9, { destroy: void 0 }, Ho.bind(null, r, o, n, t), null), n; }, useId: function () { var e = jo(), t = K.identifierPrefix; if (L) {
            var n = Ai, r = ki;
            n = (r & ~(1 << 32 - Ke(r) - 1)).toString(32) + n, t = `_` + t + `R_` + n, n = yo++, 0 < n && (t += `H` + n.toString(32)), t += `_`;
        }
        else
            n = So++, t = `_` + t + `r_` + n.toString(32) + `_`; return e.memoizedState = t; }, useHostTransitionStatus: Os, useFormState: ts, useActionState: ts, useOptimistic: function (e) { var t = jo(); t.memoizedState = t.baseState = e; var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return t.queue = n, t = Fs.bind(null, z, !0, n), n.dispatch = t, [e, t]; }, useMemoCache: Fo, useCacheRefresh: function () { return jo().memoizedState = js.bind(null, z); }, useEffectEvent: function (e) { var t = jo(), n = { impl: e }; return t.memoizedState = n, function () { if (G & 2)
            throw Error(a(440)); return n.impl.apply(void 0, arguments); }; } }, Vs = { readContext: ra, use: Po, useCallback: ys, useContext: ra, useEffect: ds, useImperativeHandle: _s, useInsertionEffect: ms, useLayoutEffect: hs, useMemo: bs, useReducer: Lo, useRef: ss, useState: function () { return Lo(Io); }, useDebugValue: vs, useDeferredValue: function (e, t) { return Ss(H(), B.memoizedState, e, t); }, useTransition: function () { var e = Lo(Io)[0], t = H().memoizedState; return [typeof e == `boolean` ? e : No(e), t]; }, useSyncExternalStore: Bo, useId: ks, useHostTransitionStatus: Os, useFormState: ns, useActionState: ns, useOptimistic: function (e, t) { return qo(H(), B, e, t); }, useMemoCache: Fo, useCacheRefresh: As };
    Vs.useEffectEvent = ps;
    var Hs = { readContext: ra, use: Po, useCallback: ys, useContext: ra, useEffect: ds, useImperativeHandle: _s, useInsertionEffect: ms, useLayoutEffect: hs, useMemo: bs, useReducer: zo, useRef: ss, useState: function () { return zo(Io); }, useDebugValue: vs, useDeferredValue: function (e, t) { var n = H(); return B === null ? xs(n, e, t) : Ss(n, B.memoizedState, e, t); }, useTransition: function () { var e = zo(Io)[0], t = H().memoizedState; return [typeof e == `boolean` ? e : No(e), t]; }, useSyncExternalStore: Bo, useId: ks, useHostTransitionStatus: Os, useFormState: as, useActionState: as, useOptimistic: function (e, t) { var n = H(); return B === null ? (n.baseState = e, [e, n.queue.dispatch]) : qo(n, B, e, t); }, useMemoCache: Fo, useCacheRefresh: As };
    Hs.useEffectEvent = ps;
    function Us(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : h({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n); }
    var Ws = { enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = pu(), i = Ga(r); i.payload = t, n != null && (i.callback = n), t = Ka(e, i, r), t !== null && (hu(t, e, r), qa(t, e, r)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = pu(), i = Ga(r); i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ka(e, i, r), t !== null && (hu(t, e, r), qa(t, e, r)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = pu(), r = Ga(n); r.tag = 2, t != null && (r.callback = t), t = Ka(e, r, n), t !== null && (hu(t, e, n), qa(t, e, n)); } };
    function Gs(e, t, n, r, i, a, o) { return e = e.stateNode, typeof e.shouldComponentUpdate == `function` ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Dr(n, r) || !Dr(i, a) : !0; }
    function Ks(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ws.enqueueReplaceState(t, t.state, null); }
    function qs(e, t) { var n = t; if (`ref` in t)
        for (var r in n = {}, t)
            r !== `ref` && (n[r] = t[r]); if (e = e.defaultProps)
        for (var i in n === t && (n = h({}, n)), e)
            n[i] === void 0 && (n[i] = e[i]); return n; }
    function Js(e) { ei(e); }
    function Ys(e) { console.error(e); }
    function Xs(e) { ei(e); }
    function Zs(e, t) { try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
    }
    catch (e) {
        setTimeout(function () { throw e; });
    } }
    function Qs(e, t, n) { try {
        var r = e.onCaughtError;
        r(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    }
    catch (e) {
        setTimeout(function () { throw e; });
    } }
    function $s(e, t, n) { return n = Ga(n), n.tag = 3, n.payload = { element: null }, n.callback = function () { Zs(e, t); }, n; }
    function ec(e) { return e = Ga(e), e.tag = 3, e; }
    function tc(e, t, n, r) { var i = n.type.getDerivedStateFromError; if (typeof i == `function`) {
        var a = r.value;
        e.payload = function () { return i(a); }, e.callback = function () { Qs(t, n, r); };
    } var o = n.stateNode; o !== null && typeof o.componentDidCatch == `function` && (e.callback = function () { Qs(t, n, r), typeof i != `function` && (ru === null ? ru = new Set([this]) : ru.add(this)); var e = r.stack; this.componentDidCatch(r.value, { componentStack: e === null ? `` : e }); }); }
    function nc(e, t, n, r, i) { if (n.flags |= 32768, typeof r == `object` && r && typeof r.then == `function`) {
        if (t = n.alternate, t !== null && ea(t, n, i, !0), n = ao.current, n !== null) {
            switch (n.tag) {
                case 31:
                case 13: return oo === null ? Du() : n.alternate === null && X === 0 && (X = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === Da ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([r]) : t.add(r), Gu(e, r, i)), !1;
                case 22: return n.flags |= 65536, r === Da ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([r]) : n.add(r)), Gu(e, r, i)), !1;
            }
            throw Error(a(435, n.tag));
        }
        return Gu(e, r, i), Du(), !1;
    } if (L)
        return t = ao.current, t === null ? (r !== zi && (t = Error(a(423), { cause: r }), Ki(Si(t, n))), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, r = Si(r, n), i = $s(e.stateNode, r, i), Ja(e, i), X !== 4 && (X = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== zi && (e = Error(a(422), { cause: r }), Ki(Si(e, n)))), !1; var o = Error(a(520), { cause: r }); if (o = Si(o, n), Xl === null ? Xl = [o] : Xl.push(o), X !== 4 && (X = 2), t === null)
        return !0; r = Si(r, n), n = t; do {
        switch (n.tag) {
            case 3: return n.flags |= 65536, e = i & -i, n.lanes |= e, e = $s(n.stateNode, r, e), Ja(n, e), !1;
            case 1: if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == `function` || o !== null && typeof o.componentDidCatch == `function` && (ru === null || !ru.has(o))))
                return n.flags |= 65536, i &= -i, n.lanes |= i, i = ec(i), tc(i, e, n, r), Ja(n, i), !1;
        }
        n = n.return;
    } while (n !== null); return !1; }
    var rc = Error(a(461)), ic = !1;
    function ac(e, t, n, r) { t.child = e === null ? Va(t, null, n, r) : Ba(t, e.child, n, r); }
    function oc(e, t, n, r, i) { n = n.render; var a = t.ref; if (`ref` in r) {
        var o = {};
        for (var s in r)
            s !== `ref` && (o[s] = r[s]);
    }
    else
        o = r; return na(t), r = wo(e, t, n, o, a, i), s = Oo(), e !== null && !ic ? (ko(e, t, i), Ac(e, t, i)) : (L && s && Ni(t), t.flags |= 1, ac(e, t, r, i), t.child); }
    function sc(e, t, n, r, i) { if (e === null) {
        var a = n.type;
        return typeof a == `function` && !pi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, cc(e, t, a, r, i)) : (e = gi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    } if (a = e.child, !jc(e, i)) {
        var o = a.memoizedProps;
        if (n = n.compare, n = n === null ? Dr : n, n(o, r) && e.ref === t.ref)
            return Ac(e, t, i);
    } return t.flags |= 1, e = mi(a, r), e.ref = t.ref, e.return = t, t.child = e; }
    function cc(e, t, n, r, i) { if (e !== null) {
        var a = e.memoizedProps;
        if (Dr(a, r) && e.ref === t.ref)
            if (ic = !1, t.pendingProps = r = a, jc(e, i))
                e.flags & 131072 && (ic = !0);
            else
                return t.lanes = e.lanes, Ac(e, t, i);
    } return gc(e, t, n, r, i); }
    function lc(e, t, n, r) { var i = r.children, a = e === null ? null : e.memoizedState; if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r.mode === `hidden`) {
        if (t.flags & 128) {
            if (a = a === null ? n : a.baseLanes | n, e !== null) {
                for (r = t.child = e.child, i = 0; r !== null;)
                    i = i | r.lanes | r.childLanes, r = r.sibling;
                r = i & ~a;
            }
            else
                r = 0, t.child = null;
            return dc(e, t, a, n, r);
        }
        if (n & 536870912)
            t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Sa(t, a === null ? null : a.cachePool), a === null ? ro() : no(t, a), lo(t);
        else
            return r = t.lanes = 536870912, dc(e, t, a === null ? n : a.baseLanes | n, n, r);
    }
    else
        a === null ? (e !== null && Sa(t, null), ro(), uo(t)) : (Sa(t, a.cachePool), no(t, a), uo(t), t.memoizedState = null); return ac(e, t, i, n), t.child; }
    function uc(e, t) { return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling; }
    function dc(e, t, n, r, i) { var a = xa(); return a = a === null ? null : { parent: la._currentValue, pool: a }, t.memoizedState = { baseLanes: n, cachePool: a }, e !== null && Sa(t, null), ro(), lo(t), e !== null && ea(e, t, r, !0), t.childLanes = i, null; }
    function fc(e, t) { return t = Tc({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t; }
    function pc(e, t, n) { return Ba(t, e.child, null, n), e = fc(t, t.pendingProps), e.flags |= 2, fo(t), t.memoizedState = null, e; }
    function mc(e, t, n) { var r = t.pendingProps, i = (t.flags & 128) != 0; if (t.flags &= -129, e === null) {
        if (L) {
            if (r.mode === `hidden`)
                return e = fc(t, r), t.lanes = 536870912, uc(null, e);
            if (co(t), (e = I) ? (e = rf(e, Ri), e = e !== null && e.data === `&` ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Oi === null ? null : { id: ki, overflow: Ai }, retryLane: 536870912, hydrationErrors: null }, n = yi(e), n.return = t, t.child = n, Ii = t, I = null)) : e = null, e === null)
                throw Bi(t);
            return t.lanes = 536870912, null;
        }
        return fc(t, r);
    } var o = e.memoizedState; if (o !== null) {
        var s = o.dehydrated;
        if (co(t), i)
            if (t.flags & 256)
                t.flags &= -257, t = pc(e, t, n);
            else if (t.memoizedState !== null)
                t.child = e.child, t.flags |= 128, t = null;
            else
                throw Error(a(558));
        else if (ic || ea(e, t, n, !1), i = (n & e.childLanes) !== 0, ic || i) {
            if (r = K, r !== null && (s = ct(r, n), s !== 0 && s !== o.retryLane))
                throw o.retryLane = s, si(e, s), hu(r, e, s), rc;
            Du(), t = pc(e, t, n);
        }
        else
            e = o.treeContext, I = cf(s.nextSibling), Ii = t, L = !0, Li = null, Ri = !1, e !== null && Fi(t, e), t = fc(t, r), t.flags |= 4096;
        return t;
    } return e = mi(e.child, { mode: r.mode, children: r.children }), e.ref = t.ref, t.child = e, e.return = t, e; }
    function hc(e, t) { var n = t.ref; if (n === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
        if (typeof n != `function` && typeof n != `object`)
            throw Error(a(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
    } }
    function gc(e, t, n, r, i) { return na(t), n = wo(e, t, n, r, void 0, i), r = Oo(), e !== null && !ic ? (ko(e, t, i), Ac(e, t, i)) : (L && r && Ni(t), t.flags |= 1, ac(e, t, n, i), t.child); }
    function _c(e, t, n, r, i, a) { return na(t), t.updateQueue = null, n = Eo(t, r, n, i), To(e), r = Oo(), e !== null && !ic ? (ko(e, t, a), Ac(e, t, a)) : (L && r && Ni(t), t.flags |= 1, ac(e, t, n, a), t.child); }
    function vc(e, t, n, r, i) { if (na(t), t.stateNode === null) {
        var a = ui, o = n.contextType;
        typeof o == `object` && o && (a = ra(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Ws, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, Ua(t), o = n.contextType, a.context = typeof o == `object` && o ? ra(o) : ui, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == `function` && (Us(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == `function` || typeof a.getSnapshotBeforeUpdate == `function` || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (o = a.state, typeof a.componentWillMount == `function` && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(), o !== a.state && Ws.enqueueReplaceState(a, a.state, null), Za(t, r, a, i), Xa(), a.state = t.memoizedState), typeof a.componentDidMount == `function` && (t.flags |= 4194308), r = !0;
    }
    else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps, c = qs(n, s);
        a.props = c;
        var l = a.context, u = n.contextType;
        o = ui, typeof u == `object` && u && (o = ra(u));
        var d = n.getDerivedStateFromProps;
        u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`, s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (s || l !== o) && Ks(t, a, r, o), Ha = !1;
        var f = t.memoizedState;
        a.state = f, Za(t, r, a, i), Xa(), l = t.memoizedState, s || f !== l || Ha ? (typeof d == `function` && (Us(t, n, d, r), l = t.memoizedState), (c = Ha || Gs(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (typeof a.componentWillMount == `function` && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == `function` && (t.flags |= 4194308)) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), r = !1);
    }
    else {
        a = t.stateNode, Wa(e, t), o = t.memoizedProps, u = qs(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = ui, typeof l == `object` && l && (c = ra(l)), s = n.getDerivedStateFromProps, (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (o !== d || f !== c) && Ks(t, a, r, c), Ha = !1, f = t.memoizedState, a.state = f, Za(t, r, a, i), Xa();
        var p = t.memoizedState;
        o !== d || f !== p || Ha || e !== null && e.dependencies !== null && ta(e.dependencies) ? (typeof s == `function` && (Us(t, n, s, r), p = t.memoizedState), (u = Ha || Gs(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && ta(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != `function` && typeof a.componentWillUpdate != `function` || (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == `function` && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == `function` && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024)) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
    } return a = r, hc(e, t), r = (t.flags & 128) != 0, a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = Ba(t, e.child, null, i), t.child = Ba(t, null, n, i)) : ac(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = Ac(e, t, i), e; }
    function yc(e, t, n, r) { return Wi(), t.flags |= 256, ac(e, t, n, r), t.child; }
    var bc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function xc(e) { return { baseLanes: e, cachePool: Ca() }; }
    function Sc(e, t, n) { return e = e === null ? 0 : e.childLanes & ~n, t && (e |= Jl), e; }
    function Cc(e, t, n) { var r = t.pendingProps, i = !1, o = (t.flags & 128) != 0, s; if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (R.current & 2) != 0), s && (i = !0, t.flags &= -129), s = (t.flags & 32) != 0, t.flags &= -33, e === null) {
        if (L) {
            if (i ? so(t) : uo(t), (e = I) ? (e = rf(e, Ri), e = e !== null && e.data !== `&` ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Oi === null ? null : { id: ki, overflow: Ai }, retryLane: 536870912, hydrationErrors: null }, n = yi(e), n.return = t, t.child = n, Ii = t, I = null)) : e = null, e === null)
                throw Bi(t);
            return of(e) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var c = r.children;
        return r = r.fallback, i ? (uo(t), i = t.mode, c = Tc({ mode: `hidden`, children: c }, i), r = _i(r, i, n, null), c.return = t, r.return = t, c.sibling = r, t.child = c, r = t.child, r.memoizedState = xc(n), r.childLanes = Sc(e, s, n), t.memoizedState = bc, uc(null, r)) : (so(t), wc(t, c));
    } var l = e.memoizedState; if (l !== null && (c = l.dehydrated, c !== null)) {
        if (o)
            t.flags & 256 ? (so(t), t.flags &= -257, t = Ec(e, t, n)) : t.memoizedState === null ? (uo(t), c = r.fallback, i = t.mode, r = Tc({ mode: `visible`, children: r.children }, i), c = _i(c, i, n, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, Ba(t, e.child, null, n), r = t.child, r.memoizedState = xc(n), r.childLanes = Sc(e, s, n), t.memoizedState = bc, t = uc(null, r)) : (uo(t), t.child = e.child, t.flags |= 128, t = null);
        else if (so(t), of(c)) {
            if (s = c.nextSibling && c.nextSibling.dataset, s)
                var u = s.dgst;
            s = u, r = Error(a(419)), r.stack = ``, r.digest = s, Ki({ value: r, source: null, stack: null }), t = Ec(e, t, n);
        }
        else if (ic || ea(e, t, n, !1), s = (n & e.childLanes) !== 0, ic || s) {
            if (s = K, s !== null && (r = ct(s, n), r !== 0 && r !== l.retryLane))
                throw l.retryLane = r, si(e, r), hu(s, e, r), rc;
            af(c) || Du(), t = Ec(e, t, n);
        }
        else
            af(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = l.treeContext, I = cf(c.nextSibling), Ii = t, L = !0, Li = null, Ri = !1, e !== null && Fi(t, e), t = wc(t, r.children), t.flags |= 4096);
        return t;
    } return i ? (uo(t), c = r.fallback, i = t.mode, l = e.child, u = l.sibling, r = mi(l, { mode: `hidden`, children: r.children }), r.subtreeFlags = l.subtreeFlags & 65011712, u === null ? (c = _i(c, i, n, null), c.flags |= 2) : c = mi(u, c), c.return = t, r.return = t, r.sibling = c, t.child = r, uc(null, r), r = t.child, c = e.child.memoizedState, c === null ? c = xc(n) : (i = c.cachePool, i === null ? i = Ca() : (l = la._currentValue, i = i.parent === l ? i : { parent: l, pool: l }), c = { baseLanes: c.baseLanes | n, cachePool: i }), r.memoizedState = c, r.childLanes = Sc(e, s, n), t.memoizedState = bc, uc(e.child, r)) : (so(t), n = e.child, e = n.sibling, n = mi(n, { mode: `visible`, children: r.children }), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n); }
    function wc(e, t) { return t = Tc({ mode: `visible`, children: t }, e.mode), t.return = e, e.child = t; }
    function Tc(e, t) { return e = fi(22, e, null, t), e.lanes = 0, e; }
    function Ec(e, t, n) { return Ba(t, e.child, null, n), e = wc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e; }
    function Dc(e, t, n) { e.lanes |= t; var r = e.alternate; r !== null && (r.lanes |= t), Qi(e.return, t, n); }
    function Oc(e, t, n, r, i, a) { var o = e.memoizedState; o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i, treeForkCount: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a); }
    function kc(e, t, n) { var r = t.pendingProps, i = r.revealOrder, a = r.tail; r = r.children; var o = R.current, s = (o & 2) != 0; if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, k(R, o), ac(e, t, r, n), r = L ? Ti : 0, !s && e !== null && e.flags & 128)
        a: for (e = t.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && Dc(e, n, t);
            else if (e.tag === 19)
                Dc(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t)
                break a;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    break a;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        } switch (i) {
        case `forwards`:
            for (n = t.child, i = null; n !== null;)
                e = n.alternate, e !== null && po(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Oc(t, !1, i, n, a, r);
            break;
        case `backwards`:
        case `unstable_legacy-backwards`:
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && po(e) === null) {
                    t.child = i;
                    break;
                }
                e = i.sibling, i.sibling = n, n = i, i = e;
            }
            Oc(t, !0, n, null, a, r);
            break;
        case `together`:
            Oc(t, !1, null, null, void 0, r);
            break;
        default: t.memoizedState = null;
    } return t.child; }
    function Ac(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), Gl |= t.lanes, (n & t.childLanes) === 0)
        if (e !== null) {
            if (ea(e, t, n, !1), (n & t.childLanes) === 0)
                return null;
        }
        else
            return null; if (e !== null && t.child !== e.child)
        throw Error(a(153)); if (t.child !== null) {
        for (e = t.child, n = mi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
            e = e.sibling, n = n.sibling = mi(e, e.pendingProps), n.return = t;
        n.sibling = null;
    } return t.child; }
    function jc(e, t) { return (e.lanes & t) === 0 ? (e = e.dependencies, !!(e !== null && ta(e))) : !0; }
    function Mc(e, t, n) { switch (t.tag) {
        case 3:
            ve(t, t.stateNode.containerInfo), Xi(t, la, e.memoizedState.cache), Wi();
            break;
        case 27:
        case 5:
            be(t);
            break;
        case 4:
            ve(t, t.stateNode.containerInfo);
            break;
        case 10:
            Xi(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128, co(t), null;
            break;
        case 13:
            var r = t.memoizedState;
            if (r !== null)
                return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (so(t), e = Ac(e, t, n), e === null ? null : e.sibling) : Cc(e, t, n) : (so(t), t.flags |= 128, null);
            so(t);
            break;
        case 19:
            var i = (e.flags & 128) != 0;
            if (r = (n & t.childLanes) !== 0, r ||= (ea(e, t, n, !1), (n & t.childLanes) !== 0), i) {
                if (r)
                    return kc(e, t, n);
                t.flags |= 128;
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), k(R, R.current), r)
                break;
            return null;
        case 22: return t.lanes = 0, lc(e, t, n, t.pendingProps);
        case 24: Xi(t, la, e.memoizedState.cache);
    } return Ac(e, t, n); }
    function Nc(e, t, n) { if (e !== null)
        if (e.memoizedProps !== t.pendingProps)
            ic = !0;
        else {
            if (!jc(e, n) && !(t.flags & 128))
                return ic = !1, Mc(e, t, n);
            ic = !!(e.flags & 131072);
        }
    else
        ic = !1, L && t.flags & 1048576 && Mi(t, Ti, t.index); switch (t.lanes = 0, t.tag) {
        case 16:
            a: {
                var r = t.pendingProps;
                if (e = Aa(t.elementType), t.type = e, typeof e == `function`)
                    pi(e) ? (r = qs(e, r), t.tag = 1, t = vc(null, t, e, r, n)) : (t.tag = 0, t = gc(null, t, e, r, n));
                else {
                    if (e != null) {
                        var i = e.$$typeof;
                        if (i === C) {
                            t.tag = 11, t = oc(null, t, e, r, n);
                            break a;
                        }
                        else if (i === ne) {
                            t.tag = 14, t = sc(null, t, e, r, n);
                            break a;
                        }
                    }
                    throw t = se(e) || e, Error(a(306, t, ``));
                }
            }
            return t;
        case 0: return gc(e, t, t.type, t.pendingProps, n);
        case 1: return r = t.type, i = qs(r, t.pendingProps), vc(e, t, r, i, n);
        case 3:
            a: {
                if (ve(t, t.stateNode.containerInfo), e === null)
                    throw Error(a(387));
                r = t.pendingProps;
                var o = t.memoizedState;
                i = o.element, Wa(e, t), Za(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.cache, Xi(t, la, r), r !== o.cache && $i(t, [la], n, !0), Xa(), r = s.element, o.isDehydrated)
                    if (o = { element: r, isDehydrated: !1, cache: s.cache }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        t = yc(e, t, r, n);
                        break a;
                    }
                    else if (r !== i) {
                        i = Si(Error(a(424)), t), Ki(i), t = yc(e, t, r, n);
                        break a;
                    }
                    else {
                        switch (e = t.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default: e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                        }
                        for (I = cf(e.firstChild), Ii = t, L = !0, Li = null, Ri = !0, n = Va(t, null, r, n), t.child = n; n;)
                            n.flags = n.flags & -3 | 4096, n = n.sibling;
                    }
                else {
                    if (Wi(), r === i) {
                        t = Ac(e, t, n);
                        break a;
                    }
                    ac(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 26: return hc(e, t), e === null ? (n = kf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : L || (n = t.type, e = t.pendingProps, r = Bd(ge.current).createElement(n), r[j] = t, r[mt] = e, Pd(r, n, e), Et(r), t.stateNode = r) : t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27: return be(t), e === null && L && (r = t.stateNode = ff(t.type, t.pendingProps, ge.current), Ii = t, Ri = !0, i = I, Zd(t.type) ? (lf = i, I = cf(r.firstChild)) : I = i), ac(e, t, t.pendingProps.children, n), hc(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5: return e === null && L && ((i = r = I) && (r = tf(r, t.type, t.pendingProps, Ri), r === null ? i = !1 : (t.stateNode = r, Ii = t, I = cf(r.firstChild), Ri = !1, i = !0)), i || Bi(t)), be(t), i = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, Ud(i, o) ? r = null : s !== null && Ud(i, s) && (t.flags |= 32), t.memoizedState !== null && (i = wo(e, t, Do, null, null, n), Qf._currentValue = i), hc(e, t), ac(e, t, r, n), t.child;
        case 6: return e === null && L && ((e = n = I) && (n = nf(n, t.pendingProps, Ri), n === null ? e = !1 : (t.stateNode = n, Ii = t, I = null, e = !0)), e || Bi(t)), null;
        case 13: return Cc(e, t, n);
        case 4: return ve(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ba(t, null, r, n) : ac(e, t, r, n), t.child;
        case 11: return oc(e, t, t.type, t.pendingProps, n);
        case 7: return ac(e, t, t.pendingProps, n), t.child;
        case 8: return ac(e, t, t.pendingProps.children, n), t.child;
        case 12: return ac(e, t, t.pendingProps.children, n), t.child;
        case 10: return r = t.pendingProps, Xi(t, t.type, r.value), ac(e, t, r.children, n), t.child;
        case 9: return i = t.type._context, r = t.pendingProps.children, na(t), i = ra(i), r = r(i), t.flags |= 1, ac(e, t, r, n), t.child;
        case 14: return sc(e, t, t.type, t.pendingProps, n);
        case 15: return cc(e, t, t.type, t.pendingProps, n);
        case 19: return kc(e, t, n);
        case 31: return mc(e, t, n);
        case 22: return lc(e, t, n, t.pendingProps);
        case 24: return na(t), r = ra(la), e === null ? (i = xa(), i === null && (i = K, o = ua(), i.pooledCache = o, o.refCount++, o !== null && (i.pooledCacheLanes |= n), i = o), t.memoizedState = { parent: r, cache: i }, Ua(t), Xi(t, la, i)) : ((e.lanes & n) !== 0 && (Wa(e, t), Za(t, null, null, n), Xa()), i = e.memoizedState, o = t.memoizedState, i.parent === r ? (r = o.cache, Xi(t, la, r), r !== i.cache && $i(t, [la], n, !0)) : (i = { parent: r, cache: r }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Xi(t, la, r))), ac(e, t, t.pendingProps.children, n), t.child;
        case 29: throw t.pendingProps;
    } throw Error(a(156, t.tag)); }
    function Pc(e) { e.flags |= 4; }
    function Fc(e, t, n, r, i) { if ((t = (e.mode & 32) != 0) && (t = !1), t) {
        if (e.flags |= 16777216, (i & 335544128) === i)
            if (e.stateNode.complete)
                e.flags |= 8192;
            else if (wu())
                e.flags |= 8192;
            else
                throw ja = Da, Ta;
    }
    else
        e.flags &= -16777217; }
    function Ic(e, t) { if (t.type !== `stylesheet` || t.state.loading & 4)
        e.flags &= -16777217;
    else if (e.flags |= 16777216, !Wf(t))
        if (wu())
            e.flags |= 8192;
        else
            throw ja = Da, Ta; }
    function Lc(e, t) { t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : nt(), e.lanes |= t, Yl |= t); }
    function Rc(e, t) { if (!L)
        switch (e.tailMode) {
            case `hidden`:
                t = e.tail;
                for (var n = null; t !== null;)
                    t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case `collapsed`:
                n = e.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n), n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        } }
    function U(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0; if (t)
        for (var i = e.child; i !== null;)
            n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;)
            n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; }
    function zc(e, t, n) { var r = t.pendingProps; switch (Pi(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14: return U(t), null;
        case 1: return U(t), null;
        case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Zi(la), ye(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ui(t) ? Pc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Gi())), U(t), null;
        case 26:
            var i = t.type, o = t.memoizedState;
            return e === null ? (Pc(t), o === null ? (U(t), Fc(t, i, null, r, n)) : (U(t), Ic(t, o))) : o ? o === e.memoizedState ? (U(t), t.flags &= -16777217) : (Pc(t), U(t), Ic(t, o)) : (e = e.memoizedProps, e !== r && Pc(t), U(t), Fc(t, i, e, r, n)), null;
        case 27:
            if (xe(t), n = ge.current, i = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== r && Pc(t);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(a(166));
                    return U(t), null;
                }
                e = me.current, Ui(t) ? Vi(t, e) : (e = ff(i, r, n), t.stateNode = e, Pc(t));
            }
            return U(t), null;
        case 5:
            if (xe(t), i = t.type, e !== null && t.stateNode != null)
                e.memoizedProps !== r && Pc(t);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(a(166));
                    return U(t), null;
                }
                if (o = me.current, Ui(t))
                    Vi(t, o);
                else {
                    var s = Bd(ge.current);
                    switch (o) {
                        case 1:
                            o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                            break;
                        case 2:
                            o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                            break;
                        default: switch (i) {
                            case `svg`:
                                o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                                break;
                            case `math`:
                                o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                                break;
                            case `script`:
                                o = s.createElement(`div`), o.innerHTML = `<script><\/script>`, o = o.removeChild(o.firstChild);
                                break;
                            case `select`:
                                o = typeof r.is == `string` ? s.createElement(`select`, { is: r.is }) : s.createElement(`select`), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
                                break;
                            default: o = typeof r.is == `string` ? s.createElement(i, { is: r.is }) : s.createElement(i);
                        }
                    }
                    o[j] = t, o[mt] = r;
                    a: for (s = t.child; s !== null;) {
                        if (s.tag === 5 || s.tag === 6)
                            o.appendChild(s.stateNode);
                        else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                            s.child.return = s, s = s.child;
                            continue;
                        }
                        if (s === t)
                            break a;
                        for (; s.sibling === null;) {
                            if (s.return === null || s.return === t)
                                break a;
                            s = s.return;
                        }
                        s.sibling.return = s.return, s = s.sibling;
                    }
                    t.stateNode = o;
                    a: switch (Pd(o, i, r), i) {
                        case `button`:
                        case `input`:
                        case `select`:
                        case `textarea`:
                            r = !!r.autoFocus;
                            break a;
                        case `img`:
                            r = !0;
                            break a;
                        default: r = !1;
                    }
                    r && Pc(t);
                }
            }
            return U(t), Fc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== r && Pc(t);
            else {
                if (typeof r != `string` && t.stateNode === null)
                    throw Error(a(166));
                if (e = ge.current, Ui(t)) {
                    if (e = t.stateNode, n = t.memoizedProps, r = null, i = Ii, i !== null)
                        switch (i.tag) {
                            case 27:
                            case 5: r = i.memoizedProps;
                        }
                    e[j] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Md(e.nodeValue, n)), e || Bi(t, !0);
                }
                else
                    e = Bd(e).createTextNode(r), e[j] = t, t.stateNode = e;
            }
            return U(t), null;
        case 31:
            if (n = t.memoizedState, e === null || e.memoizedState !== null) {
                if (r = Ui(t), n !== null) {
                    if (e === null) {
                        if (!r)
                            throw Error(a(318));
                        if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e)
                            throw Error(a(557));
                        e[j] = t;
                    }
                    else
                        Wi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    U(t), e = !1;
                }
                else
                    n = Gi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
                if (!e)
                    return t.flags & 256 ? (fo(t), t) : (fo(t), null);
                if (t.flags & 128)
                    throw Error(a(558));
            }
            return U(t), null;
        case 13:
            if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (i = Ui(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i)
                            throw Error(a(318));
                        if (i = t.memoizedState, i = i === null ? null : i.dehydrated, !i)
                            throw Error(a(317));
                        i[j] = t;
                    }
                    else
                        Wi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    U(t), i = !1;
                }
                else
                    i = Gi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
                if (!i)
                    return t.flags & 256 ? (fo(t), t) : (fo(t), null);
            }
            return fo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, i = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (i = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== i && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Lc(t, t.updateQueue), U(t), null);
        case 4: return ye(), e === null && Sd(t.stateNode.containerInfo), U(t), null;
        case 10: return Zi(t.type), U(t), null;
        case 19:
            if (pe(R), r = t.memoizedState, r === null)
                return U(t), null;
            if (i = (t.flags & 128) != 0, o = r.rendering, o === null)
                if (i)
                    Rc(r, !1);
                else {
                    if (X !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = po(e), o !== null) {
                                for (t.flags |= 128, Rc(r, !1), e = o.updateQueue, t.updateQueue = e, Lc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;)
                                    hi(n, e), n = n.sibling;
                                return k(R, R.current & 1 | 2), L && ji(t, r.treeForkCount), t.child;
                            }
                            e = e.sibling;
                        }
                    r.tail !== null && Pe() > tu && (t.flags |= 128, i = !0, Rc(r, !1), t.lanes = 4194304);
                }
            else {
                if (!i)
                    if (e = po(o), e !== null) {
                        if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Lc(t, e), Rc(r, !0), r.tail === null && r.tailMode === `hidden` && !o.alternate && !L)
                            return U(t), null;
                    }
                    else
                        2 * Pe() - r.renderingStartTime > tu && n !== 536870912 && (t.flags |= 128, i = !0, Rc(r, !1), t.lanes = 4194304);
                r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
            }
            return r.tail === null ? (U(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Pe(), e.sibling = null, n = R.current, k(R, i ? n & 1 | 2 : n & 1), L && ji(t, r.treeForkCount), e);
        case 22:
        case 23: return fo(t), io(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (U(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : U(t), n = t.updateQueue, n !== null && Lc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && pe(ba), null;
        case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Zi(la), U(t), null;
        case 25: return null;
        case 30: return null;
    } throw Error(a(156, t.tag)); }
    function Bc(e, t) { switch (Pi(t), t.tag) {
        case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3: return Zi(la), ye(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5: return xe(t), null;
        case 31:
            if (t.memoizedState !== null) {
                if (fo(t), t.alternate === null)
                    throw Error(a(340));
                Wi();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 13:
            if (fo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(a(340));
                Wi();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19: return pe(R), null;
        case 4: return ye(), null;
        case 10: return Zi(t.type), null;
        case 22:
        case 23: return fo(t), io(), e !== null && pe(ba), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 24: return Zi(la), null;
        case 25: return null;
        default: return null;
    } }
    function Vc(e, t) { switch (Pi(t), t.tag) {
        case 3:
            Zi(la), ye();
            break;
        case 26:
        case 27:
        case 5:
            xe(t);
            break;
        case 4:
            ye();
            break;
        case 31:
            t.memoizedState !== null && fo(t);
            break;
        case 13:
            fo(t);
            break;
        case 19:
            pe(R);
            break;
        case 10:
            Zi(t.type);
            break;
        case 22:
        case 23:
            fo(t), io(), e !== null && pe(ba);
            break;
        case 24: Zi(la);
    } }
    function Hc(e, t) { try {
        var n = t.updateQueue, r = n === null ? null : n.lastEffect;
        if (r !== null) {
            var i = r.next;
            n = i;
            do {
                if ((n.tag & e) === e) {
                    r = void 0;
                    var a = n.create, o = n.inst;
                    r = a(), o.destroy = r;
                }
                n = n.next;
            } while (n !== i);
        }
    }
    catch (e) {
        Z(t, t.return, e);
    } }
    function Uc(e, t, n) { try {
        var r = t.updateQueue, i = r === null ? null : r.lastEffect;
        if (i !== null) {
            var a = i.next;
            r = a;
            do {
                if ((r.tag & e) === e) {
                    var o = r.inst, s = o.destroy;
                    if (s !== void 0) {
                        o.destroy = void 0, i = t;
                        var c = n, l = s;
                        try {
                            l();
                        }
                        catch (e) {
                            Z(i, c, e);
                        }
                    }
                }
                r = r.next;
            } while (r !== a);
        }
    }
    catch (e) {
        Z(t, t.return, e);
    } }
    function Wc(e) { var t = e.updateQueue; if (t !== null) {
        var n = e.stateNode;
        try {
            $a(t, n);
        }
        catch (t) {
            Z(e, e.return, t);
        }
    } }
    function Gc(e, t, n) { n.props = qs(e.type, e.memoizedProps), n.state = e.memoizedState; try {
        n.componentWillUnmount();
    }
    catch (n) {
        Z(e, t, n);
    } }
    function Kc(e, t) { try {
        var n = e.ref;
        if (n !== null) {
            switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var r = e.stateNode;
                    break;
                case 30:
                    r = e.stateNode;
                    break;
                default: r = e.stateNode;
            }
            typeof n == `function` ? e.refCleanup = n(r) : n.current = r;
        }
    }
    catch (n) {
        Z(e, t, n);
    } }
    function qc(e, t) { var n = e.ref, r = e.refCleanup; if (n !== null)
        if (typeof r == `function`)
            try {
                r();
            }
            catch (n) {
                Z(e, t, n);
            }
            finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
        else if (typeof n == `function`)
            try {
                n(null);
            }
            catch (n) {
                Z(e, t, n);
            }
        else
            n.current = null; }
    function Jc(e) { var t = e.type, n = e.memoizedProps, r = e.stateNode; try {
        a: switch (t) {
            case `button`:
            case `input`:
            case `select`:
            case `textarea`:
                n.autoFocus && r.focus();
                break a;
            case `img`: n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
        }
    }
    catch (t) {
        Z(e, e.return, t);
    } }
    function Yc(e, t, n) { try {
        var r = e.stateNode;
        Fd(r, e.type, n, t), r[mt] = t;
    }
    catch (t) {
        Z(e, e.return, t);
    } }
    function Xc(e) { return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zd(e.type) || e.tag === 4; }
    function Zc(e) { a: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Xc(e.return))
                return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.tag === 27 && Zd(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                continue a;
            e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
            return e.stateNode;
    } }
    function Qc(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
        e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sn));
    else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
        for (Qc(e, t, n), e = e.sibling; e !== null;)
            Qc(e, t, n), e = e.sibling; }
    function $c(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
        e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode), e = e.child, e !== null))
        for ($c(e, t, n), e = e.sibling; e !== null;)
            $c(e, t, n), e = e.sibling; }
    function el(e) { var t = e.stateNode, n = e.memoizedProps; try {
        for (var r = e.type, i = t.attributes; i.length;)
            t.removeAttributeNode(i[0]);
        Pd(t, r, n), t[j] = e, t[mt] = n;
    }
    catch (t) {
        Z(e, e.return, t);
    } }
    var tl = !1, nl = !1, rl = !1, il = typeof WeakSet == `function` ? WeakSet : Set, al = null;
    function ol(e, t) { if (e = e.containerInfo, Rd = sp, e = jr(e), Mr(e)) {
        if (`selectionStart` in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            a: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset, o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    }
                    catch {
                        n = null;
                        break a;
                    }
                    var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
                    b: for (;;) {
                        for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (c = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;)
                            p = f, f = m;
                        for (;;) {
                            if (f === e)
                                break b;
                            if (p === n && ++u === i && (c = s), p === o && ++d === r && (l = s), (m = f.nextSibling) !== null)
                                break;
                            f = p, p = f.parentNode;
                        }
                        f = m;
                    }
                    n = c === -1 || l === -1 ? null : { start: c, end: l };
                }
                else
                    n = null;
            }
        n ||= { start: 0, end: 0 };
    }
    else
        n = null; for (zd = { focusedElem: e, selectionRange: n }, sp = !1, al = t; al !== null;)
        if (t = al, e = t.child, t.subtreeFlags & 1028 && e !== null)
            e.return = t, al = e;
        else
            for (; al !== null;) {
                switch (t = al, o = t.alternate, e = t.flags, t.tag) {
                    case 0:
                        if (e & 4 && (e = t.updateQueue, e = e === null ? null : e.events, e !== null))
                            for (n = 0; n < e.length; n++)
                                i = e[n], i.ref.impl = i.nextImpl;
                        break;
                    case 11:
                    case 15: break;
                    case 1:
                        if (e & 1024 && o !== null) {
                            e = void 0, n = t, i = o.memoizedProps, o = o.memoizedState, r = n.stateNode;
                            try {
                                var h = qs(n.type, i);
                                e = r.getSnapshotBeforeUpdate(h, o), r.__reactInternalSnapshotBeforeUpdate = e;
                            }
                            catch (e) {
                                Z(n, n.return, e);
                            }
                        }
                        break;
                    case 3:
                        if (e & 1024) {
                            if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                                ef(e);
                            else if (n === 1)
                                switch (e.nodeName) {
                                    case `HEAD`:
                                    case `HTML`:
                                    case `BODY`:
                                        ef(e);
                                        break;
                                    default: e.textContent = ``;
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17: break;
                    default: if (e & 1024)
                        throw Error(a(163));
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, al = e;
                    break;
                }
                al = t.return;
            } }
    function sl(e, t, n) { var r = n.flags; switch (n.tag) {
        case 0:
        case 11:
        case 15:
            xl(e, n), r & 4 && Hc(5, n);
            break;
        case 1:
            if (xl(e, n), r & 4)
                if (e = n.stateNode, t === null)
                    try {
                        e.componentDidMount();
                    }
                    catch (e) {
                        Z(n, n.return, e);
                    }
                else {
                    var i = qs(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
                    }
                    catch (e) {
                        Z(n, n.return, e);
                    }
                }
            r & 64 && Wc(n), r & 512 && Kc(n, n.return);
            break;
        case 3:
            if (xl(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
                if (t = null, n.child !== null)
                    switch (n.child.tag) {
                        case 27:
                        case 5:
                            t = n.child.stateNode;
                            break;
                        case 1: t = n.child.stateNode;
                    }
                try {
                    $a(e, t);
                }
                catch (e) {
                    Z(n, n.return, e);
                }
            }
            break;
        case 27: t === null && r & 4 && el(n);
        case 26:
        case 5:
            xl(e, n), t === null && r & 4 && Jc(n), r & 512 && Kc(n, n.return);
            break;
        case 12:
            xl(e, n);
            break;
        case 31:
            xl(e, n), r & 4 && fl(e, n);
            break;
        case 13:
            xl(e, n), r & 4 && pl(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Ju.bind(null, n), sf(e, n))));
            break;
        case 22:
            if (r = n.memoizedState !== null || tl, !r) {
                t = t !== null && t.memoizedState !== null || nl, i = tl;
                var a = nl;
                tl = r, (nl = t) && !a ? Cl(e, n, (n.subtreeFlags & 8772) != 0) : xl(e, n), tl = i, nl = a;
            }
            break;
        case 30: break;
        default: xl(e, n);
    } }
    function cl(e) { var t = e.alternate; t !== null && (e.alternate = null, cl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && xt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
    var W = null, ll = !1;
    function ul(e, t, n) { for (n = n.child; n !== null;)
        dl(e, t, n), n = n.sibling; }
    function dl(e, t, n) { if (We && typeof We.onCommitFiberUnmount == `function`)
        try {
            We.onCommitFiberUnmount(Ue, n);
        }
        catch { } switch (n.tag) {
        case 26:
            nl || qc(n, t), ul(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
            break;
        case 27:
            nl || qc(n, t);
            var r = W, i = ll;
            Zd(n.type) && (W = n.stateNode, ll = !1), ul(e, t, n), pf(n.stateNode), W = r, ll = i;
            break;
        case 5: nl || qc(n, t);
        case 6:
            if (r = W, i = ll, W = null, ul(e, t, n), W = r, ll = i, W !== null)
                if (ll)
                    try {
                        (W.nodeType === 9 ? W.body : W.nodeName === `HTML` ? W.ownerDocument.body : W).removeChild(n.stateNode);
                    }
                    catch (e) {
                        Z(n, t, e);
                    }
                else
                    try {
                        W.removeChild(n.stateNode);
                    }
                    catch (e) {
                        Z(n, t, e);
                    }
            break;
        case 18:
            W !== null && (ll ? (e = W, Qd(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode), Np(e)) : Qd(W, n.stateNode));
            break;
        case 4:
            r = W, i = ll, W = n.stateNode.containerInfo, ll = !0, ul(e, t, n), W = r, ll = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Uc(2, n, t), nl || Uc(4, n, t), ul(e, t, n);
            break;
        case 1:
            nl || (qc(n, t), r = n.stateNode, typeof r.componentWillUnmount == `function` && Gc(n, t, r)), ul(e, t, n);
            break;
        case 21:
            ul(e, t, n);
            break;
        case 22:
            nl = (r = nl) || n.memoizedState !== null, ul(e, t, n), nl = r;
            break;
        default: ul(e, t, n);
    } }
    function fl(e, t) { if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
            Np(e);
        }
        catch (e) {
            Z(t, t.return, e);
        }
    } }
    function pl(e, t) { if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
            Np(e);
        }
        catch (e) {
            Z(t, t.return, e);
        } }
    function ml(e) { switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new il), t;
        case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new il), t;
        default: throw Error(a(435, e.tag));
    } }
    function hl(e, t) { var n = ml(e); t.forEach(function (t) { if (!n.has(t)) {
        n.add(t);
        var r = Yu.bind(null, e, t);
        t.then(r, r);
    } }); }
    function gl(e, t) { var n = t.deletions; if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r], o = e, s = t, c = s;
            a: for (; c !== null;) {
                switch (c.tag) {
                    case 27:
                        if (Zd(c.type)) {
                            W = c.stateNode, ll = !1;
                            break a;
                        }
                        break;
                    case 5:
                        W = c.stateNode, ll = !1;
                        break a;
                    case 3:
                    case 4:
                        W = c.stateNode.containerInfo, ll = !0;
                        break a;
                }
                c = c.return;
            }
            if (W === null)
                throw Error(a(160));
            dl(o, s, i), W = null, ll = !1, o = i.alternate, o !== null && (o.return = null), i.return = null;
        } if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null;)
            vl(t, e), t = t.sibling; }
    var _l = null;
    function vl(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            gl(t, e), yl(e), r & 4 && (Uc(3, e, e.return), Hc(3, e), Uc(5, e, e.return));
            break;
        case 1:
            gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), r & 64 && tl && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
            break;
        case 26:
            var i = _l;
            if (gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), r & 4) {
                var o = n === null ? null : n.memoizedState;
                if (r = e.memoizedState, n === null)
                    if (r === null)
                        if (e.stateNode === null) {
                            a: {
                                r = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                                b: switch (r) {
                                    case `title`:
                                        o = i.getElementsByTagName(`title`)[0], (!o || o[bt] || o[j] || o.namespaceURI === `http://www.w3.org/2000/svg` || o.hasAttribute(`itemprop`)) && (o = i.createElement(r), i.head.insertBefore(o, i.querySelector(`head > title`))), Pd(o, r, n), o[j] = e, Et(o), r = o;
                                        break a;
                                    case `link`:
                                        var s = Vf(`link`, `href`, i).get(r + (n.href || ``));
                                        if (s) {
                                            for (var c = 0; c < s.length; c++)
                                                if (o = s[c], o.getAttribute(`href`) === (n.href == null || n.href === `` ? null : n.href) && o.getAttribute(`rel`) === (n.rel == null ? null : n.rel) && o.getAttribute(`title`) === (n.title == null ? null : n.title) && o.getAttribute(`crossorigin`) === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                    s.splice(c, 1);
                                                    break b;
                                                }
                                        }
                                        o = i.createElement(r), Pd(o, r, n), i.head.appendChild(o);
                                        break;
                                    case `meta`:
                                        if (s = Vf(`meta`, `content`, i).get(r + (n.content || ``))) {
                                            for (c = 0; c < s.length; c++)
                                                if (o = s[c], o.getAttribute(`content`) === (n.content == null ? null : `` + n.content) && o.getAttribute(`name`) === (n.name == null ? null : n.name) && o.getAttribute(`property`) === (n.property == null ? null : n.property) && o.getAttribute(`http-equiv`) === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute(`charset`) === (n.charSet == null ? null : n.charSet)) {
                                                    s.splice(c, 1);
                                                    break b;
                                                }
                                        }
                                        o = i.createElement(r), Pd(o, r, n), i.head.appendChild(o);
                                        break;
                                    default: throw Error(a(468, r));
                                }
                                o[j] = e, Et(o), r = o;
                            }
                            e.stateNode = r;
                        }
                        else
                            Hf(i, e.type, e.stateNode);
                    else
                        e.stateNode = If(i, r, e.memoizedProps);
                else
                    o === r ? r === null && e.stateNode !== null && Yc(e, e.memoizedProps, n.memoizedProps) : (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, r === null ? Hf(i, e.type, e.stateNode) : If(i, r, e.memoizedProps));
            }
            break;
        case 27:
            gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), n !== null && r & 4 && Yc(e, e.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), e.flags & 32) {
                i = e.stateNode;
                try {
                    Qt(i, ``);
                }
                catch (t) {
                    Z(e, e.return, t);
                }
            }
            r & 4 && e.stateNode != null && (i = e.memoizedProps, Yc(e, i, n === null ? i : n.memoizedProps)), r & 1024 && (rl = !0);
            break;
        case 6:
            if (gl(t, e), yl(e), r & 4) {
                if (e.stateNode === null)
                    throw Error(a(162));
                r = e.memoizedProps, n = e.stateNode;
                try {
                    n.nodeValue = r;
                }
                catch (t) {
                    Z(e, e.return, t);
                }
            }
            break;
        case 3:
            if (Bf = null, i = _l, _l = gf(t.containerInfo), gl(t, e), _l = i, yl(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Np(t.containerInfo);
                }
                catch (t) {
                    Z(e, e.return, t);
                }
            rl && (rl = !1, bl(e));
            break;
        case 4:
            r = _l, _l = gf(e.stateNode.containerInfo), gl(t, e), yl(e), _l = r;
            break;
        case 12:
            gl(t, e), yl(e);
            break;
        case 31:
            gl(t, e), yl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, hl(e, r)));
            break;
        case 13:
            gl(t, e), yl(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && ($l = Pe()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, hl(e, r)));
            break;
        case 22:
            i = e.memoizedState !== null;
            var l = n !== null && n.memoizedState !== null, u = tl, d = nl;
            if (tl = u || i, nl = d || l, gl(t, e), nl = d, tl = u, yl(e), r & 8192)
                a: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || l || tl || nl || Sl(e)), n = null, t = e;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            l = n = t;
                            try {
                                if (o = l.stateNode, i)
                                    s = o.style, typeof s.setProperty == `function` ? s.setProperty(`display`, `none`, `important`) : s.display = `none`;
                                else {
                                    c = l.stateNode;
                                    var f = l.memoizedProps.style, p = f != null && f.hasOwnProperty(`display`) ? f.display : null;
                                    c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim();
                                }
                            }
                            catch (e) {
                                Z(l, l.return, e);
                            }
                        }
                    }
                    else if (t.tag === 6) {
                        if (n === null) {
                            l = t;
                            try {
                                l.stateNode.nodeValue = i ? `` : l.memoizedProps;
                            }
                            catch (e) {
                                Z(l, l.return, e);
                            }
                        }
                    }
                    else if (t.tag === 18) {
                        if (n === null) {
                            l = t;
                            try {
                                var m = l.stateNode;
                                i ? $d(m, !0) : $d(l.stateNode, !1);
                            }
                            catch (e) {
                                Z(l, l.return, e);
                            }
                        }
                    }
                    else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue;
                    }
                    if (t === e)
                        break a;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e)
                            break a;
                        n === t && (n = null), t = t.return;
                    }
                    n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
                }
            r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, hl(e, n))));
            break;
        case 19:
            gl(t, e), yl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, hl(e, r)));
            break;
        case 30: break;
        case 21: break;
        default: gl(t, e), yl(e);
    } }
    function yl(e) { var t = e.flags; if (t & 2) {
        try {
            for (var n, r = e.return; r !== null;) {
                if (Xc(r)) {
                    n = r;
                    break;
                }
                r = r.return;
            }
            if (n == null)
                throw Error(a(160));
            switch (n.tag) {
                case 27:
                    var i = n.stateNode;
                    $c(e, Zc(e), i);
                    break;
                case 5:
                    var o = n.stateNode;
                    n.flags & 32 && (Qt(o, ``), n.flags &= -33), $c(e, Zc(e), o);
                    break;
                case 3:
                case 4:
                    var s = n.stateNode.containerInfo;
                    Qc(e, Zc(e), s);
                    break;
                default: throw Error(a(161));
            }
        }
        catch (t) {
            Z(e, e.return, t);
        }
        e.flags &= -3;
    } t & 4096 && (e.flags &= -4097); }
    function bl(e) { if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
            var t = e;
            bl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        } }
    function xl(e, t) { if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;)
            sl(e, t.alternate, t), t = t.sibling; }
    function Sl(e) { for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Uc(4, t, t.return), Sl(t);
                break;
            case 1:
                qc(t, t.return);
                var n = t.stateNode;
                typeof n.componentWillUnmount == `function` && Gc(t, t.return, n), Sl(t);
                break;
            case 27: pf(t.stateNode);
            case 26:
            case 5:
                qc(t, t.return), Sl(t);
                break;
            case 22:
                t.memoizedState === null && Sl(t);
                break;
            case 30:
                Sl(t);
                break;
            default: Sl(t);
        }
        e = e.sibling;
    } }
    function Cl(e, t, n) { for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
        var r = t.alternate, i = e, a = t, o = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Cl(i, a, n), Hc(4, a);
                break;
            case 1:
                if (Cl(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == `function`)
                    try {
                        i.componentDidMount();
                    }
                    catch (e) {
                        Z(r, r.return, e);
                    }
                if (r = a, i = r.updateQueue, i !== null) {
                    var s = r.stateNode;
                    try {
                        var c = i.shared.hiddenCallbacks;
                        if (c !== null)
                            for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++)
                                Qa(c[i], s);
                    }
                    catch (e) {
                        Z(r, r.return, e);
                    }
                }
                n && o & 64 && Wc(a), Kc(a, a.return);
                break;
            case 27: el(a);
            case 26:
            case 5:
                Cl(i, a, n), n && r === null && o & 4 && Jc(a), Kc(a, a.return);
                break;
            case 12:
                Cl(i, a, n);
                break;
            case 31:
                Cl(i, a, n), n && o & 4 && fl(i, a);
                break;
            case 13:
                Cl(i, a, n), n && o & 4 && pl(i, a);
                break;
            case 22:
                a.memoizedState === null && Cl(i, a, n), Kc(a, a.return);
                break;
            case 30: break;
            default: Cl(i, a, n);
        }
        t = t.sibling;
    } }
    function wl(e, t) { var n = null; e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && da(n)); }
    function Tl(e, t) { e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && da(e)); }
    function El(e, t, n, r) { if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;)
            Dl(e, t, n, r), t = t.sibling; }
    function Dl(e, t, n, r) { var i = t.flags; switch (t.tag) {
        case 0:
        case 11:
        case 15:
            El(e, t, n, r), i & 2048 && Hc(9, t);
            break;
        case 1:
            El(e, t, n, r);
            break;
        case 3:
            El(e, t, n, r), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && da(e)));
            break;
        case 12:
            if (i & 2048) {
                El(e, t, n, r), e = t.stateNode;
                try {
                    var a = t.memoizedProps, o = a.id, s = a.onPostCommit;
                    typeof s == `function` && s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0);
                }
                catch (e) {
                    Z(t, t.return, e);
                }
            }
            else
                El(e, t, n, r);
            break;
        case 31:
            El(e, t, n, r);
            break;
        case 13:
            El(e, t, n, r);
            break;
        case 23: break;
        case 22:
            a = t.stateNode, o = t.alternate, t.memoizedState === null ? a._visibility & 2 ? El(e, t, n, r) : (a._visibility |= 2, Ol(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1)) : a._visibility & 2 ? El(e, t, n, r) : kl(e, t), i & 2048 && wl(o, t);
            break;
        case 24:
            El(e, t, n, r), i & 2048 && Tl(t.alternate, t);
            break;
        default: El(e, t, n, r);
    } }
    function Ol(e, t, n, r, i) { for (i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child; t !== null;) {
        var a = e, o = t, s = n, c = r, l = o.flags;
        switch (o.tag) {
            case 0:
            case 11:
            case 15:
                Ol(a, o, s, c, i), Hc(8, o);
                break;
            case 23: break;
            case 22:
                var u = o.stateNode;
                o.memoizedState === null ? (u._visibility |= 2, Ol(a, o, s, c, i)) : u._visibility & 2 ? Ol(a, o, s, c, i) : kl(a, o), i && l & 2048 && wl(o.alternate, o);
                break;
            case 24:
                Ol(a, o, s, c, i), i && l & 2048 && Tl(o.alternate, o);
                break;
            default: Ol(a, o, s, c, i);
        }
        t = t.sibling;
    } }
    function kl(e, t) { if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
            var n = e, r = t, i = r.flags;
            switch (r.tag) {
                case 22:
                    kl(n, r), i & 2048 && wl(r.alternate, r);
                    break;
                case 24:
                    kl(n, r), i & 2048 && Tl(r.alternate, r);
                    break;
                default: kl(n, r);
            }
            t = t.sibling;
        } }
    var Al = 8192;
    function jl(e, t, n) { if (e.subtreeFlags & Al)
        for (e = e.child; e !== null;)
            Ml(e, t, n), e = e.sibling; }
    function Ml(e, t, n) { switch (e.tag) {
        case 26:
            jl(e, t, n), e.flags & Al && e.memoizedState !== null && Gf(n, _l, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            jl(e, t, n);
            break;
        case 3:
        case 4:
            var r = _l;
            _l = gf(e.stateNode.containerInfo), jl(e, t, n), _l = r;
            break;
        case 22:
            e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Al, Al = 16777216, jl(e, t, n), Al = r) : jl(e, t, n));
            break;
        default: jl(e, t, n);
    } }
    function Nl(e) { var t = e.alternate; if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
            t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
    } }
    function Pl(e) { var t = e.deletions; if (e.flags & 16) {
        if (t !== null)
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                al = r, Ll(r, e);
            }
        Nl(e);
    } if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;)
            Fl(e), e = e.sibling; }
    function Fl(e) { switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Pl(e), e.flags & 2048 && Uc(9, e, e.return);
            break;
        case 3:
            Pl(e);
            break;
        case 12:
            Pl(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Il(e)) : Pl(e);
            break;
        default: Pl(e);
    } }
    function Il(e) { var t = e.deletions; if (e.flags & 16) {
        if (t !== null)
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                al = r, Ll(r, e);
            }
        Nl(e);
    } for (e = e.child; e !== null;) {
        switch (t = e, t.tag) {
            case 0:
            case 11:
            case 15:
                Uc(8, t, t.return), Il(t);
                break;
            case 22:
                n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Il(t));
                break;
            default: Il(t);
        }
        e = e.sibling;
    } }
    function Ll(e, t) { for (; al !== null;) {
        var n = al;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Uc(8, n, t);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var r = n.memoizedState.cachePool.pool;
                    r != null && r.refCount++;
                }
                break;
            case 24: da(n.memoizedState.cache);
        }
        if (r = n.child, r !== null)
            r.return = n, al = r;
        else
            a: for (n = e; al !== null;) {
                r = al;
                var i = r.sibling, a = r.return;
                if (cl(r), r === n) {
                    al = null;
                    break a;
                }
                if (i !== null) {
                    i.return = a, al = i;
                    break a;
                }
                al = a;
            }
    } }
    var Rl = { getCacheForType: function (e) { var t = ra(la), n = t.data.get(e); return n === void 0 && (n = e(), t.data.set(e, n)), n; }, cacheSignal: function () { return ra(la).controller.signal; } }, zl = typeof WeakMap == `function` ? WeakMap : Map, G = 0, K = null, q = null, J = 0, Y = 0, Bl = null, Vl = !1, Hl = !1, Ul = !1, Wl = 0, X = 0, Gl = 0, Kl = 0, ql = 0, Jl = 0, Yl = 0, Xl = null, Zl = null, Ql = !1, $l = 0, eu = 0, tu = 1 / 0, nu = null, ru = null, iu = 0, au = null, ou = null, su = 0, cu = 0, lu = null, uu = null, du = 0, fu = null;
    function pu() { return G & 2 && J !== 0 ? J & -J : D.T === null ? dt() : dd(); }
    function mu() { if (Jl === 0)
        if (!(J & 536870912) || L) {
            var e = A;
            A <<= 1, !(A & 3932160) && (A = 262144), Jl = e;
        }
        else
            Jl = 536870912; return e = ao.current, e !== null && (e.flags |= 32), Jl; }
    function hu(e, t, n) { (e === K && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) && (Su(e, 0), yu(e, J, Jl, !1)), it(e, n), (!(G & 2) || e !== K) && (e === K && (!(G & 2) && (Kl |= n), X === 4 && yu(e, J, Jl, !1)), rd(e)); }
    function gu(e, t, n) { if (G & 6)
        throw Error(a(327)); var r = !n && (t & 127) == 0 && (t & e.expiredLanes) === 0 || et(e, t), i = r ? Au(e, t) : Ou(e, t, !0), o = r; do {
        if (i === 0) {
            Hl && !r && yu(e, t, 0, !1);
            break;
        }
        else {
            if (n = e.current.alternate, o && !vu(n)) {
                i = Ou(e, t, !1), o = !1;
                continue;
            }
            if (i === 2) {
                if (o = t, e.errorRecoveryDisabledLanes & o)
                    var s = 0;
                else
                    s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
                if (s !== 0) {
                    t = s;
                    a: {
                        var c = e;
                        i = Xl;
                        var l = c.current.memoizedState.isDehydrated;
                        if (l && (Su(c, s).flags |= 256), s = Ou(c, s, !1), s !== 2) {
                            if (Ul && !l) {
                                c.errorRecoveryDisabledLanes |= o, Kl |= o, i = 4;
                                break a;
                            }
                            o = Zl, Zl = i, o !== null && (Zl === null ? Zl = o : Zl.push.apply(Zl, o));
                        }
                        i = s;
                    }
                    if (o = !1, i !== 2)
                        continue;
                }
            }
            if (i === 1) {
                Su(e, 0), yu(e, t, 0, !0);
                break;
            }
            a: {
                switch (r = e, o = i, o) {
                    case 0:
                    case 1: throw Error(a(345));
                    case 4: if ((t & 4194048) !== t)
                        break;
                    case 6:
                        yu(r, t, Jl, !Vl);
                        break a;
                    case 2:
                        Zl = null;
                        break;
                    case 3:
                    case 5: break;
                    default: throw Error(a(329));
                }
                if ((t & 62914560) === t && (i = $l + 300 - Pe(), 10 < i)) {
                    if (yu(r, t, Jl, !Vl), $e(r, 0, !0) !== 0)
                        break a;
                    su = t, r.timeoutHandle = Kd(_u.bind(null, r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Vl, o, `Throttled`, -0, 0), i);
                    break a;
                }
                _u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Vl, o, null, -0, 0);
            }
        }
        break;
    } while (1); rd(e); }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) { if (e.timeoutHandle = -1, d = t.subtreeFlags, d & 8192 || (d & 16785408) == 16785408) {
        d = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: sn }, Ml(t, a, d);
        var m = (a & 62914560) === a ? $l - Pe() : (a & 4194048) === a ? eu - Pe() : 0;
        if (m = qf(d, m), m !== null) {
            su = a, e.cancelPendingCommit = m(Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)), yu(e, a, o, !l);
            return;
        }
    } Lu(e, t, a, n, r, i, o, s, c); }
    function vu(e) { for (var t = e;;) {
        var n = t.tag;
        if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
            for (var r = 0; r < n.length; r++) {
                var i = n[r], a = i.getSnapshot;
                i = i.value;
                try {
                    if (!Er(a(), i))
                        return !1;
                }
                catch {
                    return !1;
                }
            }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null)
            n.return = t, t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    } return !0; }
    function yu(e, t, n, r) { t &= ~ql, t &= ~Kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes; for (var i = t; 0 < i;) {
        var a = 31 - Ke(i), o = 1 << a;
        r[a] = -1, i &= ~o;
    } n !== 0 && ot(e, n, t); }
    function bu() { return G & 6 ? !0 : (id(0, !1), !1); }
    function xu() { if (q !== null) {
        if (Y === 0)
            var e = q.return;
        else
            e = q, Yi = Ji = null, Ao(e), Pa = null, Fa = 0, e = q;
        for (; e !== null;)
            Vc(e.alternate, e), e = e.return;
        q = null;
    } }
    function Su(e, t) { var n = e.timeoutHandle; n !== -1 && (e.timeoutHandle = -1, qd(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), su = 0, xu(), K = e, q = n = mi(e.current, null), J = t, Y = 0, Bl = null, Vl = !1, Hl = et(e, t), Ul = !1, Yl = Jl = ql = Kl = Gl = X = 0, Zl = Xl = null, Ql = !1, t & 8 && (t |= t & 32); var r = e.entangledLanes; if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
            var i = 31 - Ke(r), a = 1 << i;
            t |= e[i], r &= ~a;
        } return Wl = t, ii(), n; }
    function Cu(e, t) { z = null, D.H = zs, t === wa || t === Ea ? (t = Ma(), Y = 3) : t === Ta ? (t = Ma(), Y = 4) : Y = t === rc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1, Bl = t, q === null && (X = 1, Zs(e, Si(t, e.current))); }
    function wu() { var e = ao.current; return e === null ? !0 : (J & 4194048) === J ? oo === null : (J & 62914560) === J || J & 536870912 ? e === oo : !1; }
    function Tu() { var e = D.H; return D.H = zs, e === null ? zs : e; }
    function Eu() { var e = D.A; return D.A = Rl, e; }
    function Du() { X = 4, Vl || (J & 4194048) !== J && ao.current !== null || (Hl = !0), !(Gl & 134217727) && !(Kl & 134217727) || K === null || yu(K, J, Jl, !1); }
    function Ou(e, t, n) { var r = G; G |= 2; var i = Tu(), a = Eu(); (K !== e || J !== t) && (nu = null, Su(e, t)), t = !1; var o = X; a: do
        try {
            if (Y !== 0 && q !== null) {
                var s = q, c = Bl;
                switch (Y) {
                    case 8:
                        xu(), o = 6;
                        break a;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        ao.current === null && (t = !0);
                        var l = Y;
                        if (Y = 0, Bl = null, Pu(e, s, c, l), n && Hl) {
                            o = 0;
                            break a;
                        }
                        break;
                    default: l = Y, Y = 0, Bl = null, Pu(e, s, c, l);
                }
            }
            ku(), o = X;
            break;
        }
        catch (t) {
            Cu(e, t);
        }
    while (1); return t && e.shellSuspendCounter++, Yi = Ji = null, G = r, D.H = i, D.A = a, q === null && (K = null, J = 0, ii()), o; }
    function ku() { for (; q !== null;)
        Mu(q); }
    function Au(e, t) { var n = G; G |= 2; var r = Tu(), i = Eu(); K !== e || J !== t ? (nu = null, tu = Pe() + 500, Su(e, t)) : Hl = et(e, t); a: do
        try {
            if (Y !== 0 && q !== null) {
                t = q;
                var o = Bl;
                b: switch (Y) {
                    case 1:
                        Y = 0, Bl = null, Pu(e, t, o, 1);
                        break;
                    case 2:
                    case 9:
                        if (Oa(o)) {
                            Y = 0, Bl = null, Nu(t);
                            break;
                        }
                        t = function () { Y !== 2 && Y !== 9 || K !== e || (Y = 7), rd(e); }, o.then(t, t);
                        break a;
                    case 3:
                        Y = 7;
                        break a;
                    case 4:
                        Y = 5;
                        break a;
                    case 7:
                        Oa(o) ? (Y = 0, Bl = null, Nu(t)) : (Y = 0, Bl = null, Pu(e, t, o, 7));
                        break;
                    case 5:
                        var s = null;
                        switch (q.tag) {
                            case 26: s = q.memoizedState;
                            case 5:
                            case 27:
                                var c = q;
                                if (s ? Wf(s) : c.stateNode.complete) {
                                    Y = 0, Bl = null;
                                    var l = c.sibling;
                                    if (l !== null)
                                        q = l;
                                    else {
                                        var u = c.return;
                                        u === null ? q = null : (q = u, Fu(u));
                                    }
                                    break b;
                                }
                        }
                        Y = 0, Bl = null, Pu(e, t, o, 5);
                        break;
                    case 6:
                        Y = 0, Bl = null, Pu(e, t, o, 6);
                        break;
                    case 8:
                        xu(), X = 6;
                        break a;
                    default: throw Error(a(462));
                }
            }
            ju();
            break;
        }
        catch (t) {
            Cu(e, t);
        }
    while (1); return Yi = Ji = null, D.H = r, D.A = i, G = n, q === null ? (K = null, J = 0, ii(), X) : 0; }
    function ju() { for (; q !== null && !Me();)
        Mu(q); }
    function Mu(e) { var t = Nc(e.alternate, e, Wl); e.memoizedProps = e.pendingProps, t === null ? Fu(e) : q = t; }
    function Nu(e) { var t = e, n = t.alternate; switch (t.tag) {
        case 15:
        case 0:
            t = _c(n, t, t.pendingProps, t.type, void 0, J);
            break;
        case 11:
            t = _c(n, t, t.pendingProps, t.type.render, t.ref, J);
            break;
        case 5: Ao(t);
        default: Vc(n, t), t = q = hi(t, Wl), t = Nc(n, t, Wl);
    } e.memoizedProps = e.pendingProps, t === null ? Fu(e) : q = t; }
    function Pu(e, t, n, r) { Yi = Ji = null, Ao(t), Pa = null, Fa = 0; var i = t.return; try {
        if (nc(e, i, t, n, J)) {
            X = 1, Zs(e, Si(n, e.current)), q = null;
            return;
        }
    }
    catch (t) {
        if (i !== null)
            throw q = i, t;
        X = 1, Zs(e, Si(n, e.current)), q = null;
        return;
    } t.flags & 32768 ? (L || r === 1 ? e = !0 : Hl || J & 536870912 ? e = !1 : (Vl = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = ao.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Iu(t, e)) : Fu(t); }
    function Fu(e) { var t = e; do {
        if (t.flags & 32768) {
            Iu(t, Vl);
            return;
        }
        e = t.return;
        var n = zc(t.alternate, t, Wl);
        if (n !== null) {
            q = n;
            return;
        }
        if (t = t.sibling, t !== null) {
            q = t;
            return;
        }
        q = t = e;
    } while (t !== null); X === 0 && (X = 5); }
    function Iu(e, t) { do {
        var n = Bc(e.alternate, e);
        if (n !== null) {
            n.flags &= 32767, q = n;
            return;
        }
        if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
            q = e;
            return;
        }
        q = e = n;
    } while (e !== null); X = 6, q = null; }
    function Lu(e, t, n, r, i, o, s, c, l) { e.cancelPendingCommit = null; do
        Hu();
    while (iu !== 0); if (G & 6)
        throw Error(a(327)); if (t !== null) {
        if (t === e.current)
            throw Error(a(177));
        if (o = t.lanes | t.childLanes, o |= ri, at(e, n, o, s, c, l), e === K && (q = K = null, J = 0), ou = t, au = e, su = n, cu = o, lu = i, uu = r, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Xu(Re, function () { return Uu(), null; })) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) != 0, t.subtreeFlags & 13878 || r) {
            r = D.T, D.T = null, i = O.p, O.p = 2, s = G, G |= 4;
            try {
                ol(e, t, n);
            }
            finally {
                G = s, O.p = i, D.T = r;
            }
        }
        iu = 1, Ru(), zu(), Bu();
    } }
    function Ru() { if (iu === 1) {
        iu = 0;
        var e = au, t = ou, n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
            n = D.T, D.T = null;
            var r = O.p;
            O.p = 2;
            var i = G;
            G |= 4;
            try {
                vl(t, e);
                var a = zd, o = jr(e.containerInfo), s = a.focusedElem, c = a.selectionRange;
                if (o !== s && s && s.ownerDocument && Ar(s.ownerDocument.documentElement, s)) {
                    if (c !== null && Mr(s)) {
                        var l = c.start, u = c.end;
                        if (u === void 0 && (u = l), `selectionStart` in s)
                            s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
                        else {
                            var d = s.ownerDocument || document, f = d && d.defaultView || window;
                            if (f.getSelection) {
                                var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
                                !p.extend && h > g && (o = g, g = h, h = o);
                                var _ = kr(s, h), v = kr(s, g);
                                if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
                                    var y = d.createRange();
                                    y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
                                }
                            }
                        }
                    }
                    for (d = [], p = s; p = p.parentNode;)
                        p.nodeType === 1 && d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
                    for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
                        var b = d[s];
                        b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
                    }
                }
                sp = !!Rd, zd = Rd = null;
            }
            finally {
                G = i, O.p = r, D.T = n;
            }
        }
        e.current = t, iu = 2;
    } }
    function zu() { if (iu === 2) {
        iu = 0;
        var e = au, t = ou, n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
            n = D.T, D.T = null;
            var r = O.p;
            O.p = 2;
            var i = G;
            G |= 4;
            try {
                sl(e, t.alternate, t);
            }
            finally {
                G = i, O.p = r, D.T = n;
            }
        }
        iu = 3;
    } }
    function Bu() { if (iu === 4 || iu === 3) {
        iu = 0, Ne();
        var e = au, t = ou, n = su, r = uu;
        t.subtreeFlags & 10256 || t.flags & 10256 ? iu = 5 : (iu = 0, ou = au = null, Vu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (i === 0 && (ru = null), ut(n), t = t.stateNode, We && typeof We.onCommitFiberRoot == `function`)
            try {
                We.onCommitFiberRoot(Ue, t, void 0, (t.current.flags & 128) == 128);
            }
            catch { }
        if (r !== null) {
            t = D.T, i = O.p, O.p = 2, D.T = null;
            try {
                for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
                    var s = r[o];
                    a(s.value, { componentStack: s.stack });
                }
            }
            finally {
                D.T = t, O.p = i;
            }
        }
        su & 3 && Hu(), rd(e), i = e.pendingLanes, n & 261930 && i & 42 ? e === fu ? du++ : (du = 0, fu = e) : du = 0, id(0, !1);
    } }
    function Vu(e, t) { (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, da(t))); }
    function Hu() { return Ru(), zu(), Bu(), Uu(); }
    function Uu() { if (iu !== 5)
        return !1; var e = au, t = cu; cu = 0; var n = ut(su), r = D.T, i = O.p; try {
        O.p = 32 > n ? 32 : n, D.T = null, n = lu, lu = null;
        var o = au, s = su;
        if (iu = 0, ou = au = null, su = 0, G & 6)
            throw Error(a(331));
        var c = G;
        if (G |= 4, Fl(o.current), Dl(o, o.current, s, n), G = c, id(0, !1), We && typeof We.onPostCommitFiberRoot == `function`)
            try {
                We.onPostCommitFiberRoot(Ue, o);
            }
            catch { }
        return !0;
    }
    finally {
        O.p = i, D.T = r, Vu(e, t);
    } }
    function Wu(e, t, n) { t = Si(n, t), t = $s(e.stateNode, t, 2), e = Ka(e, t, 2), e !== null && (it(e, 2), rd(e)); }
    function Z(e, t, n) { if (e.tag === 3)
        Wu(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Wu(t, e, n);
                break;
            }
            else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (ru === null || !ru.has(r))) {
                    e = Si(n, e), n = ec(2), r = Ka(t, n, 2), r !== null && (tc(n, r, t, e), it(r, 2), rd(r));
                    break;
                }
            }
            t = t.return;
        } }
    function Gu(e, t, n) { var r = e.pingCache; if (r === null) {
        r = e.pingCache = new zl;
        var i = new Set;
        r.set(t, i);
    }
    else
        i = r.get(t), i === void 0 && (i = new Set, r.set(t, i)); i.has(n) || (Ul = !0, i.add(n), e = Ku.bind(null, e, t, n), t.then(e, e)); }
    function Ku(e, t, n) { var r = e.pingCache; r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, K === e && (J & n) === n && (X === 4 || X === 3 && (J & 62914560) === J && 300 > Pe() - $l ? !(G & 2) && Su(e, 0) : ql |= n, Yl === J && (Yl = 0)), rd(e); }
    function qu(e, t) { t === 0 && (t = nt()), e = si(e, t), e !== null && (it(e, t), rd(e)); }
    function Ju(e) { var t = e.memoizedState, n = 0; t !== null && (n = t.retryLane), qu(e, n); }
    function Yu(e, t) { var n = 0; switch (e.tag) {
        case 31:
        case 13:
            var r = e.stateNode, i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        case 22:
            r = e.stateNode._retryCache;
            break;
        default: throw Error(a(314));
    } r !== null && r.delete(t), qu(e, n); }
    function Xu(e, t) { return Ae(e, t); }
    var Zu = null, Qu = null, $u = !1, ed = !1, td = !1, nd = 0;
    function rd(e) { e !== Qu && e.next === null && (Qu === null ? Zu = Qu = e : Qu = Qu.next = e), ed = !0, $u || ($u = !0, ud()); }
    function id(e, t) { if (!td && ed) {
        td = !0;
        do
            for (var n = !1, r = Zu; r !== null;) {
                if (!t)
                    if (e !== 0) {
                        var i = r.pendingLanes;
                        if (i === 0)
                            var a = 0;
                        else {
                            var o = r.suspendedLanes, s = r.pingedLanes;
                            a = (1 << 31 - Ke(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
                        }
                        a !== 0 && (n = !0, ld(r, a));
                    }
                    else
                        a = J, a = $e(r, r === K ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || et(r, a) || (n = !0, ld(r, a));
                r = r.next;
            }
        while (n);
        td = !1;
    } }
    function ad() { od(); }
    function od() { ed = $u = !1; var e = 0; nd !== 0 && Gd() && (e = nd); for (var t = Pe(), n = null, r = Zu; r !== null;) {
        var i = r.next, a = sd(r, t);
        a === 0 ? (r.next = null, n === null ? Zu = i : n.next = i, i === null && (Qu = n)) : (n = r, (e !== 0 || a & 3) && (ed = !0)), r = i;
    } iu !== 0 && iu !== 5 || id(e, !1), nd !== 0 && (nd = 0); }
    function sd(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
        var o = 31 - Ke(a), s = 1 << o, c = i[o];
        c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = tt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
    } if (t = K, n = J, n = $e(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null)
        return r !== null && r !== null && je(r), e.callbackNode = null, e.callbackPriority = 0; if (!(n & 3) || et(e, n)) {
        if (t = n & -n, t === e.callbackPriority)
            return t;
        switch (r !== null && je(r), ut(n)) {
            case 2:
            case 8:
                n = Le;
                break;
            case 32:
                n = Re;
                break;
            case 268435456:
                n = Be;
                break;
            default: n = Re;
        }
        return r = cd.bind(null, e), n = Ae(n, r), e.callbackPriority = t, e.callbackNode = n, t;
    } return r !== null && r !== null && je(r), e.callbackPriority = 2, e.callbackNode = null, 2; }
    function cd(e, t) { if (iu !== 0 && iu !== 5)
        return e.callbackNode = null, e.callbackPriority = 0, null; var n = e.callbackNode; if (Hu() && e.callbackNode !== n)
        return null; var r = J; return r = $e(e, e === K ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (gu(e, r, t), sd(e, Pe()), e.callbackNode != null && e.callbackNode === n ? cd.bind(null, e) : null); }
    function ld(e, t) { if (Hu())
        return null; gu(e, t, !0); }
    function ud() { Yd(function () { G & 6 ? Ae(Ie, ad) : od(); }); }
    function dd() { if (nd === 0) {
        var e = ma;
        e === 0 && (e = Xe, Xe <<= 1, !(Xe & 261888) && (Xe = 256)), nd = e;
    } return nd; }
    function fd(e) { return e == null || typeof e == `symbol` || typeof e == `boolean` ? null : typeof e == `function` ? e : on(`` + e); }
    function pd(e, t) { var n = t.ownerDocument.createElement(`input`); return n.name = t.name, n.value = t.value, e.id && n.setAttribute(`form`, e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e; }
    function md(e, t, n, r, i) { if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[mt] || null).action), o = r.submitter;
        o && (t = (t = o[mt] || null) ? fd(t.formAction) : o.getAttribute(`formAction`), t !== null && (a = t, o = null));
        var s = new Dn(`action`, `action`, null, r, i);
        e.push({ event: s, listeners: [{ instance: null, listener: function () { if (r.defaultPrevented) {
                        if (nd !== 0) {
                            var e = o ? pd(i, o) : new FormData(i);
                            Ts(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                        }
                    }
                    else
                        typeof a == `function` && (s.preventDefault(), e = o ? pd(i, o) : new FormData(i), Ts(n, { pending: !0, data: e, method: i.method, action: a }, a, e)); }, currentTarget: i }] });
    } }
    for (var hd = 0; hd < Qr.length; hd++) {
        var gd = Qr[hd];
        $r(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
    }
    $r(Wr, `onAnimationEnd`), $r(Gr, `onAnimationIteration`), $r(Kr, `onAnimationStart`), $r(`dblclick`, `onDoubleClick`), $r(`focusin`, `onFocus`), $r(`focusout`, `onBlur`), $r(qr, `onTransitionRun`), $r(Jr, `onTransitionStart`), $r(Yr, `onTransitionCancel`), $r(Xr, `onTransitionEnd`), At(`onMouseEnter`, [`mouseout`, `mouseover`]), At(`onMouseLeave`, [`mouseout`, `mouseover`]), At(`onPointerEnter`, [`pointerout`, `pointerover`]), At(`onPointerLeave`, [`pointerout`, `pointerover`]), kt(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), kt(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), kt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), kt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), kt(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), kt(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
    var _d = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), vd = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));
    function yd(e, t) { t = (t & 4) != 0; for (var n = 0; n < e.length; n++) {
        var r = e[n], i = r.event;
        r = r.listeners;
        a: {
            var a = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var s = r[o], c = s.instance, l = s.currentTarget;
                    if (s = s.listener, c !== a && i.isPropagationStopped())
                        break a;
                    a = s, i.currentTarget = l;
                    try {
                        a(i);
                    }
                    catch (e) {
                        ei(e);
                    }
                    i.currentTarget = null, a = c;
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped())
                        break a;
                    a = s, i.currentTarget = l;
                    try {
                        a(i);
                    }
                    catch (e) {
                        ei(e);
                    }
                    i.currentTarget = null, a = c;
                }
        }
    } }
    function Q(e, t) { var n = t[gt]; n === void 0 && (n = t[gt] = new Set); var r = e + `__bubble`; n.has(r) || (Cd(t, e, 2, !1), n.add(r)); }
    function bd(e, t, n) { var r = 0; t && (r |= 4), Cd(n, e, r, t); }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) { if (!e[xd]) {
        e[xd] = !0, Dt.forEach(function (t) { t !== `selectionchange` && (vd.has(t) || bd(t, !1, e), bd(t, !0, e)); });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xd] || (t[xd] = !0, bd(`selectionchange`, !1, t));
    } }
    function Cd(e, t, n, r) { switch (mp(t)) {
        case 2:
            var i = cp;
            break;
        case 8:
            i = lp;
            break;
        default: i = up;
    } n = i.bind(null, t, n, e), i = void 0, !_n || t !== `touchstart` && t !== `touchmove` && t !== `wheel` || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, { capture: !0, passive: i }) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i }); }
    function wd(e, t, n, r, i) { var a = r; if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var s = r.stateNode.containerInfo;
                if (s === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null;) {
                        var c = o.tag;
                        if ((c === 3 || c === 4) && o.stateNode.containerInfo === i)
                            return;
                        o = o.return;
                    }
                for (; s !== null;) {
                    if (o = St(s), o === null)
                        return;
                    if (c = o.tag, c === 5 || c === 6 || c === 26 || c === 27) {
                        r = a = o;
                        continue a;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        } mn(function () { var r = a, i = ln(n), o = []; a: {
        var s = Zr.get(e);
        if (s !== void 0) {
            var c = Dn, u = e;
            switch (e) {
                case `keypress`: if (Sn(n) === 0)
                    break a;
                case `keydown`:
                case `keyup`:
                    c = Wn;
                    break;
                case `focusin`:
                    u = `focus`, c = In;
                    break;
                case `focusout`:
                    u = `blur`, c = In;
                    break;
                case `beforeblur`:
                case `afterblur`:
                    c = In;
                    break;
                case `click`: if (n.button === 2)
                    break a;
                case `auxclick`:
                case `dblclick`:
                case `mousedown`:
                case `mousemove`:
                case `mouseup`:
                case `mouseout`:
                case `mouseover`:
                case `contextmenu`:
                    c = Pn;
                    break;
                case `drag`:
                case `dragend`:
                case `dragenter`:
                case `dragexit`:
                case `dragleave`:
                case `dragover`:
                case `dragstart`:
                case `drop`:
                    c = Fn;
                    break;
                case `touchcancel`:
                case `touchend`:
                case `touchmove`:
                case `touchstart`:
                    c = Kn;
                    break;
                case Wr:
                case Gr:
                case Kr:
                    c = Ln;
                    break;
                case Xr:
                    c = qn;
                    break;
                case `scroll`:
                case `scrollend`:
                    c = kn;
                    break;
                case `wheel`:
                    c = Jn;
                    break;
                case `copy`:
                case `cut`:
                case `paste`:
                    c = Rn;
                    break;
                case `gotpointercapture`:
                case `lostpointercapture`:
                case `pointercancel`:
                case `pointerdown`:
                case `pointermove`:
                case `pointerout`:
                case `pointerover`:
                case `pointerup`:
                    c = Gn;
                    break;
                case `toggle`:
                case `beforetoggle`: c = Yn;
            }
            var d = (t & 4) != 0, f = !d && (e === `scroll` || e === `scrollend`), p = d ? s === null ? null : s + `Capture` : s;
            d = [];
            for (var m = r, h; m !== null;) {
                var g = m;
                if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = hn(m, p), g != null && d.push(Td(m, g, h))), f)
                    break;
                m = m.return;
            }
            0 < d.length && (s = new c(s, u, null, n, i), o.push({ event: s, listeners: d }));
        }
    } if (!(t & 7)) {
        a: {
            if (s = e === `mouseover` || e === `pointerover`, c = e === `mouseout` || e === `pointerout`, s && n !== cn && (u = n.relatedTarget || n.fromElement) && (St(u) || u[ht]))
                break a;
            if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (u = n.relatedTarget || n.toElement, c = r, u = u ? St(u) : null, u !== null && (f = l(u), d = u.tag, u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (c = null, u = r), c !== u)) {
                if (d = Pn, g = `onMouseLeave`, p = `onMouseEnter`, m = `mouse`, (e === `pointerout` || e === `pointerover`) && (d = Gn, g = `onPointerLeave`, p = `onPointerEnter`, m = `pointer`), f = c == null ? s : wt(c), h = u == null ? s : wt(u), s = new d(g, m + `leave`, c, n, i), s.target = f, s.relatedTarget = h, g = null, St(i) === r && (d = new d(p, m + `enter`, u, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, c && u)
                    b: {
                        for (d = Dd, p = c, m = u, h = 0, g = p; g; g = d(g))
                            h++;
                        g = 0;
                        for (var _ = m; _; _ = d(_))
                            g++;
                        for (; 0 < h - g;)
                            p = d(p), h--;
                        for (; 0 < g - h;)
                            m = d(m), g--;
                        for (; h--;) {
                            if (p === m || m !== null && p === m.alternate) {
                                d = p;
                                break b;
                            }
                            p = d(p), m = d(m);
                        }
                        d = null;
                    }
                else
                    d = null;
                c !== null && Od(o, s, c, d, !1), u !== null && f !== null && Od(o, f, u, d, !0);
            }
        }
        a: {
            if (s = r ? wt(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === `select` || c === `input` && s.type === `file`)
                var v = mr;
            else if (cr(s))
                if (hr)
                    v = wr;
                else {
                    v = Sr;
                    var y = xr;
                }
            else
                c = s.nodeName, !c || c.toLowerCase() !== `input` || s.type !== `checkbox` && s.type !== `radio` ? r && nn(r.elementType) && (v = mr) : v = Cr;
            if (v &&= v(e, r)) {
                lr(o, v, n, i);
                break a;
            }
            y && y(e, s, r), e === `focusout` && r && s.type === `number` && r.memoizedProps.value != null && Jt(s, `number`, s.value);
        }
        switch (y = r ? wt(r) : window, e) {
            case `focusin`:
                (cr(y) || y.contentEditable === `true`) && (Pr = y, Fr = r, Ir = null);
                break;
            case `focusout`:
                Ir = Fr = Pr = null;
                break;
            case `mousedown`:
                Lr = !0;
                break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
                Lr = !1, Rr(o, n, i);
                break;
            case `selectionchange`: if (Nr)
                break;
            case `keydown`:
            case `keyup`: Rr(o, n, i);
        }
        var b;
        if (Zn)
            b: {
                switch (e) {
                    case `compositionstart`:
                        var x = `onCompositionStart`;
                        break b;
                    case `compositionend`:
                        x = `onCompositionEnd`;
                        break b;
                    case `compositionupdate`:
                        x = `onCompositionUpdate`;
                        break b;
                }
                x = void 0;
            }
        else
            P ? rr(e, n) && (x = `onCompositionEnd`) : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
        x && (er && n.locale !== `ko` && (P || x !== `onCompositionStart` ? x === `onCompositionEnd` && P && (b = xn()) : (vn = i, yn = `value` in vn ? vn.value : vn.textContent, P = !0)), y = Ed(r, x), 0 < y.length && (x = new N(x, e, null, n, i), o.push({ event: x, listeners: y }), b ? x.data = b : (b = ir(n), b !== null && (x.data = b)))), (b = $n ? ar(e, n) : or(e, n)) && (x = Ed(r, `onBeforeInput`), 0 < x.length && (y = new N(`onBeforeInput`, `beforeinput`, null, n, i), o.push({ event: y, listeners: x }), y.data = b)), md(o, e, r, n, i);
    } yd(o, t); }); }
    function Td(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
    function Ed(e, t) { for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e, a = i.stateNode;
        if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = hn(e, n), i != null && r.unshift(Td(e, i, a)), i = hn(e, t), i != null && r.push(Td(e, i, a))), e.tag === 3)
            return r;
        e = e.return;
    } return []; }
    function Dd(e) { if (e === null)
        return null; do
        e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27); return e || null; }
    function Od(e, t, n, r, i) { for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n, c = s.alternate, l = s.stateNode;
        if (s = s.tag, c !== null && c === r)
            break;
        s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = hn(n, a), l != null && o.unshift(Td(n, l, c))) : i || (l = hn(n, a), l != null && o.push(Td(n, l, c)))), n = n.return;
    } o.length !== 0 && e.push({ event: t, listeners: o }); }
    var kd = /\r\n?/g, Ad = /\u0000|\uFFFD/g;
    function jd(e) {
        return (typeof e == `string` ? e : `` + e).replace(kd, `
`).replace(Ad, ``);
    }
    function Md(e, t) { return t = jd(t), jd(e) === t; }
    function $(e, t, n, r, i, o) { switch (n) {
        case `children`:
            typeof r == `string` ? t === `body` || t === `textarea` && r === `` || Qt(e, r) : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && Qt(e, `` + r);
            break;
        case `className`:
            It(e, `class`, r);
            break;
        case `tabIndex`:
            It(e, `tabindex`, r);
            break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
            It(e, n, r);
            break;
        case `style`:
            tn(e, r, o);
            break;
        case `data`: if (t !== `object`) {
            It(e, `data`, r);
            break;
        }
        case `src`:
        case `href`:
            if (r === `` && (t !== `a` || n !== `href`)) {
                e.removeAttribute(n);
                break;
            }
            if (r == null || typeof r == `function` || typeof r == `symbol` || typeof r == `boolean`) {
                e.removeAttribute(n);
                break;
            }
            r = on(`` + r), e.setAttribute(n, r);
            break;
        case `action`:
        case `formAction`:
            if (typeof r == `function`) {
                e.setAttribute(n, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
                break;
            }
            else
                typeof o == `function` && (n === `formAction` ? (t !== `input` && $(e, t, `name`, i.name, i, null), $(e, t, `formEncType`, i.formEncType, i, null), $(e, t, `formMethod`, i.formMethod, i, null), $(e, t, `formTarget`, i.formTarget, i, null)) : ($(e, t, `encType`, i.encType, i, null), $(e, t, `method`, i.method, i, null), $(e, t, `target`, i.target, i, null)));
            if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
                e.removeAttribute(n);
                break;
            }
            r = on(`` + r), e.setAttribute(n, r);
            break;
        case `onClick`:
            r != null && (e.onclick = sn);
            break;
        case `onScroll`:
            r != null && Q(`scroll`, e);
            break;
        case `onScrollEnd`:
            r != null && Q(`scrollend`, e);
            break;
        case `dangerouslySetInnerHTML`:
            if (r != null) {
                if (typeof r != `object` || !(`__html` in r))
                    throw Error(a(61));
                if (n = r.__html, n != null) {
                    if (i.children != null)
                        throw Error(a(60));
                    e.innerHTML = n;
                }
            }
            break;
        case `multiple`:
            e.multiple = r && typeof r != `function` && typeof r != `symbol`;
            break;
        case `muted`:
            e.muted = r && typeof r != `function` && typeof r != `symbol`;
            break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`: break;
        case `autoFocus`: break;
        case `xlinkHref`:
            if (r == null || typeof r == `function` || typeof r == `boolean` || typeof r == `symbol`) {
                e.removeAttribute(`xlink:href`);
                break;
            }
            n = on(`` + r), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
            break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
            r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, `` + r) : e.removeAttribute(n);
            break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
            r && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, ``) : e.removeAttribute(n);
            break;
        case `capture`:
        case `download`:
            !0 === r ? e.setAttribute(n, ``) : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, r) : e.removeAttribute(n);
            break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
            r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
            break;
        case `rowSpan`:
        case `start`:
            r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
            break;
        case `popover`:
            Q(`beforetoggle`, e), Q(`toggle`, e), Ft(e, `popover`, r);
            break;
        case `xlinkActuate`:
            Lt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
            break;
        case `xlinkArcrole`:
            Lt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
            break;
        case `xlinkRole`:
            Lt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
            break;
        case `xlinkShow`:
            Lt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
            break;
        case `xlinkTitle`:
            Lt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
            break;
        case `xlinkType`:
            Lt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
            break;
        case `xmlBase`:
            Lt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
            break;
        case `xmlLang`:
            Lt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
            break;
        case `xmlSpace`:
            Lt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
            break;
        case `is`:
            Ft(e, `is`, r);
            break;
        case `innerText`:
        case `textContent`: break;
        default: (!(2 < n.length) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) && (n = rn.get(n) || n, Ft(e, n, r));
    } }
    function Nd(e, t, n, r, i, o) { switch (n) {
        case `style`:
            tn(e, r, o);
            break;
        case `dangerouslySetInnerHTML`:
            if (r != null) {
                if (typeof r != `object` || !(`__html` in r))
                    throw Error(a(61));
                if (n = r.__html, n != null) {
                    if (i.children != null)
                        throw Error(a(60));
                    e.innerHTML = n;
                }
            }
            break;
        case `children`:
            typeof r == `string` ? Qt(e, r) : (typeof r == `number` || typeof r == `bigint`) && Qt(e, `` + r);
            break;
        case `onScroll`:
            r != null && Q(`scroll`, e);
            break;
        case `onScrollEnd`:
            r != null && Q(`scrollend`, e);
            break;
        case `onClick`:
            r != null && (e.onclick = sn);
            break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`: break;
        case `innerText`:
        case `textContent`: break;
        default: if (!Ot.hasOwnProperty(n))
            a: {
                if (n[0] === `o` && n[1] === `n` && (i = n.endsWith(`Capture`), t = n.slice(2, i ? n.length - 7 : void 0), o = e[mt] || null, o = o == null ? null : o[n], typeof o == `function` && e.removeEventListener(t, o, i), typeof r == `function`)) {
                    typeof o != `function` && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, i);
                    break a;
                }
                n in e ? e[n] = r : !0 === r ? e.setAttribute(n, ``) : Ft(e, n, r);
            }
    } }
    function Pd(e, t, n) { switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`: break;
        case `img`:
            Q(`error`, e), Q(`load`, e);
            var r = !1, i = !1, o;
            for (o in n)
                if (n.hasOwnProperty(o)) {
                    var s = n[o];
                    if (s != null)
                        switch (o) {
                            case `src`:
                                r = !0;
                                break;
                            case `srcSet`:
                                i = !0;
                                break;
                            case `children`:
                            case `dangerouslySetInnerHTML`: throw Error(a(137, t));
                            default: $(e, t, o, s, n, null);
                        }
                }
            i && $(e, t, `srcSet`, n.srcSet, n, null), r && $(e, t, `src`, n.src, n, null);
            return;
        case `input`:
            Q(`invalid`, e);
            var c = o = s = i = null, l = null, u = null;
            for (r in n)
                if (n.hasOwnProperty(r)) {
                    var d = n[r];
                    if (d != null)
                        switch (r) {
                            case `name`:
                                i = d;
                                break;
                            case `type`:
                                s = d;
                                break;
                            case `checked`:
                                l = d;
                                break;
                            case `defaultChecked`:
                                u = d;
                                break;
                            case `value`:
                                o = d;
                                break;
                            case `defaultValue`:
                                c = d;
                                break;
                            case `children`:
                            case `dangerouslySetInnerHTML`:
                                if (d != null)
                                    throw Error(a(137, t));
                                break;
                            default: $(e, t, r, d, n, null);
                        }
                }
            qt(e, o, c, l, u, s, i, !1);
            return;
        case `select`:
            for (i in Q(`invalid`, e), r = s = o = null, n)
                if (n.hasOwnProperty(i) && (c = n[i], c != null))
                    switch (i) {
                        case `value`:
                            o = c;
                            break;
                        case `defaultValue`:
                            s = c;
                            break;
                        case `multiple`: r = c;
                        default: $(e, t, i, c, n, null);
                    }
            t = o, n = s, e.multiple = !!r, t == null ? n != null && Yt(e, !!r, n, !0) : Yt(e, !!r, t, !1);
            return;
        case `textarea`:
            for (s in Q(`invalid`, e), o = i = r = null, n)
                if (n.hasOwnProperty(s) && (c = n[s], c != null))
                    switch (s) {
                        case `value`:
                            r = c;
                            break;
                        case `defaultValue`:
                            i = c;
                            break;
                        case `children`:
                            o = c;
                            break;
                        case `dangerouslySetInnerHTML`:
                            if (c != null)
                                throw Error(a(91));
                            break;
                        default: $(e, t, s, c, n, null);
                    }
            Zt(e, r, i, o);
            return;
        case `option`:
            for (l in n)
                if (n.hasOwnProperty(l) && (r = n[l], r != null))
                    switch (l) {
                        case `selected`:
                            e.selected = r && typeof r != `function` && typeof r != `symbol`;
                            break;
                        default: $(e, t, l, r, n, null);
                    }
            return;
        case `dialog`:
            Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e);
            break;
        case `iframe`:
        case `object`:
            Q(`load`, e);
            break;
        case `video`:
        case `audio`:
            for (r = 0; r < _d.length; r++)
                Q(_d[r], e);
            break;
        case `image`:
            Q(`error`, e), Q(`load`, e);
            break;
        case `details`:
            Q(`toggle`, e);
            break;
        case `embed`:
        case `source`:
        case `link`: Q(`error`, e), Q(`load`, e);
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
            for (u in n)
                if (n.hasOwnProperty(u) && (r = n[u], r != null))
                    switch (u) {
                        case `children`:
                        case `dangerouslySetInnerHTML`: throw Error(a(137, t));
                        default: $(e, t, u, r, n, null);
                    }
            return;
        default: if (nn(t)) {
            for (d in n)
                n.hasOwnProperty(d) && (r = n[d], r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
        }
    } for (c in n)
        n.hasOwnProperty(c) && (r = n[c], r != null && $(e, t, c, r, n, null)); }
    function Fd(e, t, n, r) { switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`: break;
        case `input`:
            var i = null, o = null, s = null, c = null, l = null, u = null, d = null;
            for (m in n) {
                var f = n[m];
                if (n.hasOwnProperty(m) && f != null)
                    switch (m) {
                        case `checked`: break;
                        case `value`: break;
                        case `defaultValue`: l = f;
                        default: r.hasOwnProperty(m) || $(e, t, m, null, r, f);
                    }
            }
            for (var p in r) {
                var m = r[p];
                if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null))
                    switch (p) {
                        case `type`:
                            o = m;
                            break;
                        case `name`:
                            i = m;
                            break;
                        case `checked`:
                            u = m;
                            break;
                        case `defaultChecked`:
                            d = m;
                            break;
                        case `value`:
                            s = m;
                            break;
                        case `defaultValue`:
                            c = m;
                            break;
                        case `children`:
                        case `dangerouslySetInnerHTML`:
                            if (m != null)
                                throw Error(a(137, t));
                            break;
                        default: m !== f && $(e, t, p, m, r, f);
                    }
            }
            Kt(e, s, c, l, u, d, o, i);
            return;
        case `select`:
            for (o in m = s = c = p = null, n)
                if (l = n[o], n.hasOwnProperty(o) && l != null)
                    switch (o) {
                        case `value`: break;
                        case `multiple`: m = l;
                        default: r.hasOwnProperty(o) || $(e, t, o, null, r, l);
                    }
            for (i in r)
                if (o = r[i], l = n[i], r.hasOwnProperty(i) && (o != null || l != null))
                    switch (i) {
                        case `value`:
                            p = o;
                            break;
                        case `defaultValue`:
                            c = o;
                            break;
                        case `multiple`: s = o;
                        default: o !== l && $(e, t, i, o, r, l);
                    }
            t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? Yt(e, !!n, n ? [] : ``, !1) : Yt(e, !!n, t, !0)) : Yt(e, !!n, p, !1);
            return;
        case `textarea`:
            for (c in m = p = null, n)
                if (i = n[c], n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c))
                    switch (c) {
                        case `value`: break;
                        case `children`: break;
                        default: $(e, t, c, null, r, i);
                    }
            for (s in r)
                if (i = r[s], o = n[s], r.hasOwnProperty(s) && (i != null || o != null))
                    switch (s) {
                        case `value`:
                            p = i;
                            break;
                        case `defaultValue`:
                            m = i;
                            break;
                        case `children`: break;
                        case `dangerouslySetInnerHTML`:
                            if (i != null)
                                throw Error(a(91));
                            break;
                        default: i !== o && $(e, t, s, i, r, o);
                    }
            Xt(e, p, m);
            return;
        case `option`:
            for (var h in n)
                if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
                    switch (h) {
                        case `selected`:
                            e.selected = !1;
                            break;
                        default: $(e, t, h, null, r, p);
                    }
            for (l in r)
                if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null))
                    switch (l) {
                        case `selected`:
                            e.selected = p && typeof p != `function` && typeof p != `symbol`;
                            break;
                        default: $(e, t, l, p, r, m);
                    }
            return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
            for (var g in n)
                p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p);
            for (u in r)
                if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null))
                    switch (u) {
                        case `children`:
                        case `dangerouslySetInnerHTML`:
                            if (p != null)
                                throw Error(a(137, t));
                            break;
                        default: $(e, t, u, p, r, m);
                    }
            return;
        default: if (nn(t)) {
            for (var _ in n)
                p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Nd(e, t, _, void 0, r, p);
            for (d in r)
                p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Nd(e, t, d, p, r, m);
            return;
        }
    } for (var v in n)
        p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p); for (f in r)
        p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m); }
    function Id(e) { switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`: return !0;
        default: return !1;
    } }
    function Ld() { if (typeof performance.getEntriesByType == `function`) {
        for (var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0; r < n.length; r++) {
            var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
            if (a && s && Id(o)) {
                for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
                    var c = n[r], l = c.startTime;
                    if (l > s)
                        break;
                    var u = c.transferSize, d = c.initiatorType;
                    u && Id(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
                }
                if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e)
                    break;
            }
        }
        if (0 < e)
            return t / e / 1e6;
    } return navigator.connection && (e = navigator.connection.downlink, typeof e == `number`) ? e : 5; }
    var Rd = null, zd = null;
    function Bd(e) { return e.nodeType === 9 ? e : e.ownerDocument; }
    function Vd(e) { switch (e) {
        case `http://www.w3.org/2000/svg`: return 1;
        case `http://www.w3.org/1998/Math/MathML`: return 2;
        default: return 0;
    } }
    function Hd(e, t) { if (e === 0)
        switch (t) {
            case `svg`: return 1;
            case `math`: return 2;
            default: return 0;
        } return e === 1 && t === `foreignObject` ? 0 : e; }
    function Ud(e, t) { return e === `textarea` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.children == `bigint` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
    var Wd = null;
    function Gd() { var e = window.event; return e && e.type === `popstate` ? e === Wd ? !1 : (Wd = e, !0) : (Wd = null, !1); }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0, qd = typeof clearTimeout == `function` ? clearTimeout : void 0, Jd = typeof Promise == `function` ? Promise : void 0, Yd = typeof queueMicrotask == `function` ? queueMicrotask : Jd === void 0 ? Kd : function (e) { return Jd.resolve(null).then(e).catch(Xd); };
    function Xd(e) { setTimeout(function () { throw e; }); }
    function Zd(e) { return e === `head`; }
    function Qd(e, t) { var n = t, r = 0; do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === `/$` || n === `/&`) {
                if (r === 0) {
                    e.removeChild(i), Np(t);
                    return;
                }
                r--;
            }
            else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`)
                r++;
            else if (n === `html`)
                pf(e.ownerDocument.documentElement);
            else if (n === `head`) {
                n = e.ownerDocument.head, pf(n);
                for (var a = n.firstChild; a;) {
                    var o = a.nextSibling, s = a.nodeName;
                    a[bt] || s === `SCRIPT` || s === `STYLE` || s === `LINK` && a.rel.toLowerCase() === `stylesheet` || n.removeChild(a), a = o;
                }
            }
            else
                n === `body` && pf(e.ownerDocument.body);
        n = i;
    } while (n); Np(t); }
    function $d(e, t) { var n = e; e = 0; do {
        var r = n.nextSibling;
        if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = `none`) : (n.style.display = n._stashedDisplay || ``, n.getAttribute(`style`) === `` && n.removeAttribute(`style`)) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = ``) : n.nodeValue = n._stashedText || ``), r && r.nodeType === 8)
            if (n = r.data, n === `/$`) {
                if (e === 0)
                    break;
                e--;
            }
            else
                n !== `$` && n !== `$?` && n !== `$~` && n !== `$!` || e++;
        n = r;
    } while (n); }
    function ef(e) { var t = e.firstChild; for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (t = t.nextSibling, n.nodeName) {
            case `HTML`:
            case `HEAD`:
            case `BODY`:
                ef(n), xt(n);
                continue;
            case `SCRIPT`:
            case `STYLE`: continue;
            case `LINK`: if (n.rel.toLowerCase() === `stylesheet`)
                continue;
        }
        e.removeChild(n);
    } }
    function tf(e, t, n, r) { for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
            if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`))
                break;
        }
        else if (!r)
            if (t === `input` && e.type === `hidden`) {
                var a = i.name == null ? null : `` + i.name;
                if (i.type === `hidden` && e.getAttribute(`name`) === a)
                    return e;
            }
            else
                return e;
        else if (!e[bt])
            switch (t) {
                case `meta`:
                    if (!e.hasAttribute(`itemprop`))
                        break;
                    return e;
                case `link`:
                    if (a = e.getAttribute(`rel`), a === `stylesheet` && e.hasAttribute(`data-precedence`) || a !== i.rel || e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute(`title`) !== (i.title == null ? null : i.title))
                        break;
                    return e;
                case `style`:
                    if (e.hasAttribute(`data-precedence`))
                        break;
                    return e;
                case `script`:
                    if (a = e.getAttribute(`src`), (a !== (i.src == null ? null : i.src) || e.getAttribute(`type`) !== (i.type == null ? null : i.type) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute(`async`) && !e.hasAttribute(`itemprop`))
                        break;
                    return e;
                default: return e;
            }
        if (e = cf(e.nextSibling), e === null)
            break;
    } return null; }
    function nf(e, t, n) { if (t === ``)
        return null; for (; e.nodeType !== 3;)
        if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n || (e = cf(e.nextSibling), e === null))
            return null; return e; }
    function rf(e, t) { for (; e.nodeType !== 8;)
        if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t || (e = cf(e.nextSibling), e === null))
            return null; return e; }
    function af(e) { return e.data === `$?` || e.data === `$~`; }
    function of(e) { return e.data === `$!` || e.data === `$?` && e.ownerDocument.readyState !== `loading`; }
    function sf(e, t) { var n = e.ownerDocument; if (e.data === `$~`)
        e._reactRetry = t;
    else if (e.data !== `$?` || n.readyState !== `loading`)
        t();
    else {
        var r = function () { t(), n.removeEventListener(`DOMContentLoaded`, r); };
        n.addEventListener(`DOMContentLoaded`, r), e._reactRetry = r;
    } }
    function cf(e) { for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data, t === `$` || t === `$!` || t === `$?` || t === `$~` || t === `&` || t === `F!` || t === `F`)
                break;
            if (t === `/$` || t === `/&`)
                return null;
        }
    } return e; }
    var lf = null;
    function uf(e) { e = e.nextSibling; for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === `/$` || n === `/&`) {
                if (t === 0)
                    return cf(e.nextSibling);
                t--;
            }
            else
                n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&` || t++;
        }
        e = e.nextSibling;
    } return null; }
    function df(e) { e = e.previousSibling; for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
                if (t === 0)
                    return e;
                t--;
            }
            else
                n !== `/$` && n !== `/&` || t++;
        }
        e = e.previousSibling;
    } return null; }
    function ff(e, t, n) { switch (t = Bd(n), e) {
        case `html`:
            if (e = t.documentElement, !e)
                throw Error(a(452));
            return e;
        case `head`:
            if (e = t.head, !e)
                throw Error(a(453));
            return e;
        case `body`:
            if (e = t.body, !e)
                throw Error(a(454));
            return e;
        default: throw Error(a(451));
    } }
    function pf(e) { for (var t = e.attributes; t.length;)
        e.removeAttributeNode(t[0]); xt(e); }
    var mf = new Map, hf = new Set;
    function gf(e) { return typeof e.getRootNode == `function` ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument; }
    var _f = O.d;
    O.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() { var e = _f.f(), t = bu(); return e || t; }
    function yf(e) { var t = Ct(e); t !== null && t.tag === 5 && t.type === `form` ? Ds(t) : _f.r(e); }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) { var r = bf; if (r && typeof t == `string` && t) {
        var i = Gt(t);
        i = `link[rel="` + e + `"][href="` + i + `"]`, typeof n == `string` && (i += `[crossorigin="` + n + `"]`), hf.has(i) || (hf.add(i), e = { rel: e, crossOrigin: n, href: t }, r.querySelector(i) === null && (t = r.createElement(`link`), Pd(t, `link`, e), Et(t), r.head.appendChild(t)));
    } }
    function Sf(e) { _f.D(e), xf(`dns-prefetch`, e, null); }
    function Cf(e, t) { _f.C(e, t), xf(`preconnect`, e, t); }
    function wf(e, t, n) { _f.L(e, t, n); var r = bf; if (r && e && t) {
        var i = `link[rel="preload"][as="` + Gt(t) + `"]`;
        t === `image` && n && n.imageSrcSet ? (i += `[imagesrcset="` + Gt(n.imageSrcSet) + `"]`, typeof n.imageSizes == `string` && (i += `[imagesizes="` + Gt(n.imageSizes) + `"]`)) : i += `[href="` + Gt(e) + `"]`;
        var a = i;
        switch (t) {
            case `style`:
                a = Af(e);
                break;
            case `script`: a = Pf(e);
        }
        mf.has(a) || (e = h({ rel: `preload`, href: t === `image` && n && n.imageSrcSet ? void 0 : e, as: t }, n), mf.set(a, e), r.querySelector(i) !== null || t === `style` && r.querySelector(jf(a)) || t === `script` && r.querySelector(Ff(a)) || (t = r.createElement(`link`), Pd(t, `link`, e), Et(t), r.head.appendChild(t)));
    } }
    function Tf(e, t) { _f.m(e, t); var n = bf; if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`, i = `link[rel="modulepreload"][as="` + Gt(r) + `"][href="` + Gt(e) + `"]`, a = i;
        switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`: a = Pf(e);
        }
        if (!mf.has(a) && (e = h({ rel: `modulepreload`, href: e }, t), mf.set(a, e), n.querySelector(i) === null)) {
            switch (r) {
                case `audioworklet`:
                case `paintworklet`:
                case `serviceworker`:
                case `sharedworker`:
                case `worker`:
                case `script`: if (n.querySelector(Ff(a)))
                    return;
            }
            r = n.createElement(`link`), Pd(r, `link`, e), Et(r), n.head.appendChild(r);
        }
    } }
    function Ef(e, t, n) { _f.S(e, t, n); var r = bf; if (r && e) {
        var i = Tt(r).hoistableStyles, a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
            var s = { loading: 0, preload: null };
            if (o = r.querySelector(jf(a)))
                s.loading = 5;
            else {
                e = h({ rel: `stylesheet`, href: e, "data-precedence": t }, n), (n = mf.get(a)) && Rf(e, n);
                var c = o = r.createElement(`link`);
                Et(c), Pd(c, `link`, e), c._p = new Promise(function (e, t) { c.onload = e, c.onerror = t; }), c.addEventListener(`load`, function () { s.loading |= 1; }), c.addEventListener(`error`, function () { s.loading |= 2; }), s.loading |= 4, Lf(o, t, r);
            }
            o = { type: `stylesheet`, instance: o, count: 1, state: s }, i.set(a, o);
        }
    } }
    function Df(e, t) { _f.X(e, t); var n = bf; if (n && e) {
        var r = Tt(n).hoistableScripts, i = Pf(e), a = r.get(i);
        a || (a = n.querySelector(Ff(i)), a || (e = h({ src: e, async: !0 }, t), (t = mf.get(i)) && zf(e, t), a = n.createElement(`script`), Et(a), Pd(a, `link`, e), n.head.appendChild(a)), a = { type: `script`, instance: a, count: 1, state: null }, r.set(i, a));
    } }
    function Of(e, t) { _f.M(e, t); var n = bf; if (n && e) {
        var r = Tt(n).hoistableScripts, i = Pf(e), a = r.get(i);
        a || (a = n.querySelector(Ff(i)), a || (e = h({ src: e, async: !0, type: `module` }, t), (t = mf.get(i)) && zf(e, t), a = n.createElement(`script`), Et(a), Pd(a, `link`, e), n.head.appendChild(a)), a = { type: `script`, instance: a, count: 1, state: null }, r.set(i, a));
    } }
    function kf(e, t, n, r) { var i = (i = ge.current) ? gf(i) : null; if (!i)
        throw Error(a(446)); switch (e) {
        case `meta`:
        case `title`: return null;
        case `style`: return typeof n.precedence == `string` && typeof n.href == `string` ? (t = Af(n.href), n = Tt(i).hoistableStyles, r = n.get(t), r || (r = { type: `style`, instance: null, count: 0, state: null }, n.set(t, r)), r) : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
            if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
                e = Af(n.href);
                var o = Tt(i).hoistableStyles, s = o.get(e);
                if (s || (i = i.ownerDocument || i, s = { type: `stylesheet`, instance: null, count: 0, state: { loading: 0, preload: null } }, o.set(e, s), (o = i.querySelector(jf(e))) && !o._p && (s.instance = o, s.state.loading = 5), mf.has(e) || (n = { rel: `preload`, as: `style`, href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, mf.set(e, n), o || Nf(i, e, n, s.state))), t && r === null)
                    throw Error(a(528, ``));
                return s;
            }
            if (t && r !== null)
                throw Error(a(529, ``));
            return null;
        case `script`: return t = n.async, n = n.src, typeof n == `string` && t && typeof t != `function` && typeof t != `symbol` ? (t = Pf(n), n = Tt(i).hoistableScripts, r = n.get(t), r || (r = { type: `script`, instance: null, count: 0, state: null }, n.set(t, r)), r) : { type: `void`, instance: null, count: 0, state: null };
        default: throw Error(a(444, e));
    } }
    function Af(e) { return `href="` + Gt(e) + `"`; }
    function jf(e) { return `link[rel="stylesheet"][` + e + `]`; }
    function Mf(e) { return h({}, e, { "data-precedence": e.precedence, precedence: null }); }
    function Nf(e, t, n, r) { e.querySelector(`link[rel="preload"][as="style"][` + t + `]`) ? r.loading = 1 : (t = e.createElement(`link`), r.preload = t, t.addEventListener(`load`, function () { return r.loading |= 1; }), t.addEventListener(`error`, function () { return r.loading |= 2; }), Pd(t, `link`, n), Et(t), e.head.appendChild(t)); }
    function Pf(e) { return `[src="` + Gt(e) + `"]`; }
    function Ff(e) { return `script[async]` + e; }
    function If(e, t, n) { if (t.count++, t.instance === null)
        switch (t.type) {
            case `style`:
                var r = e.querySelector(`style[data-href~="` + Gt(n.href) + `"]`);
                if (r)
                    return t.instance = r, Et(r), r;
                var i = h({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
                return r = (e.ownerDocument || e).createElement(`style`), Et(r), Pd(r, `style`, i), Lf(r, n.precedence, e), t.instance = r;
            case `stylesheet`:
                i = Af(n.href);
                var o = e.querySelector(jf(i));
                if (o)
                    return t.state.loading |= 4, t.instance = o, Et(o), o;
                r = Mf(n), (i = mf.get(i)) && Rf(r, i), o = (e.ownerDocument || e).createElement(`link`), Et(o);
                var s = o;
                return s._p = new Promise(function (e, t) { s.onload = e, s.onerror = t; }), Pd(o, `link`, r), t.state.loading |= 4, Lf(o, n.precedence, e), t.instance = o;
            case `script`: return o = Pf(n.src), (i = e.querySelector(Ff(o))) ? (t.instance = i, Et(i), i) : (r = n, (i = mf.get(o)) && (r = h({}, n), zf(r, i)), e = e.ownerDocument || e, i = e.createElement(`script`), Et(i), Pd(i, `link`, r), e.head.appendChild(i), t.instance = i);
            case `void`: return null;
            default: throw Error(a(443, t.type));
        }
    else
        t.type === `stylesheet` && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Lf(r, n.precedence, e)); return t.instance; }
    function Lf(e, t, n) { for (var r = n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
        var s = r[o];
        if (s.dataset.precedence === t)
            a = s;
        else if (a !== i)
            break;
    } a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild)); }
    function Rf(e, t) { e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title; }
    function zf(e, t) { e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity; }
    var Bf = null;
    function Vf(e, t, n) { if (Bf === null) {
        var r = new Map, i = Bf = new Map;
        i.set(n, r);
    }
    else
        i = Bf, r = i.get(n), r || (r = new Map, i.set(n, r)); if (r.has(e))
        return r; for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (!(a[bt] || a[j] || e === `link` && a.getAttribute(`rel`) === `stylesheet`) && a.namespaceURI !== `http://www.w3.org/2000/svg`) {
            var o = a.getAttribute(t) || ``;
            o = e + o;
            var s = r.get(o);
            s ? s.push(a) : r.set(o, [a]);
        }
    } return r; }
    function Hf(e, t, n) { e = e.ownerDocument || e, e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null); }
    function Uf(e, t, n) { if (n === 1 || t.itemProp != null)
        return !1; switch (e) {
        case `meta`:
        case `title`: return !0;
        case `style`:
            if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``)
                break;
            return !0;
        case `link`:
            if (typeof t.rel != `string` || typeof t.href != `string` || t.href === `` || t.onLoad || t.onError)
                break;
            switch (t.rel) {
                case `stylesheet`: return e = t.disabled, typeof t.precedence == `string` && e == null;
                default: return !0;
            }
        case `script`: if (t.async && typeof t.async != `function` && typeof t.async != `symbol` && !t.onLoad && !t.onError && t.src && typeof t.src == `string`)
            return !0;
    } return !1; }
    function Wf(e) { return !(e.type === `stylesheet` && !(e.state.loading & 3)); }
    function Gf(e, t, n, r) { if (n.type === `stylesheet` && (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
        if (n.instance === null) {
            var i = Af(r.href), a = t.querySelector(jf(i));
            if (a) {
                t = a._p, typeof t == `object` && t && typeof t.then == `function` && (e.count++, e = Jf.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Et(a);
                return;
            }
            a = t.ownerDocument || t, r = Mf(r), (i = mf.get(i)) && Rf(r, i), a = a.createElement(`link`), Et(a);
            var o = a;
            o._p = new Promise(function (e, t) { o.onload = e, o.onerror = t; }), Pd(a, `link`, r), n.instance = a;
        }
        e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = Jf.bind(e), t.addEventListener(`load`, n), t.addEventListener(`error`, n));
    } }
    var Kf = 0;
    function qf(e, t) { return e.stylesheets && e.count === 0 && Xf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function (n) { var r = setTimeout(function () { if (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
    } }, 6e4 + t); 0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld()); var i = setTimeout(function () { if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
    } }, (e.imgBytes > Kf ? 50 : 800) + t); return e.unsuspend = n, function () { e.unsuspend = null, clearTimeout(r), clearTimeout(i); }; } : null; }
    function Jf() { if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
            Xf(this, this.stylesheets);
        else if (this.unsuspend) {
            var e = this.unsuspend;
            this.unsuspend = null, e();
        }
    } }
    var Yf = null;
    function Xf(e, t) { e.stylesheets = null, e.unsuspend !== null && (e.count++, Yf = new Map, t.forEach(Zf, e), Yf = null, Jf.call(e)); }
    function Zf(e, t) { if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n)
            var r = n.get(null);
        else {
            n = new Map, Yf.set(e, n);
            for (var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0; a < i.length; a++) {
                var o = i[a];
                (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) && (n.set(o.dataset.precedence, o), r = o);
            }
            r && n.set(null, r);
        }
        i = t.instance, o = i.getAttribute(`data-precedence`), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = Jf.bind(this), i.addEventListener(`load`, r), i.addEventListener(`error`, r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    } }
    var Qf = { $$typeof: S, Provider: null, Consumer: null, _currentValue: le, _currentValue2: le, _threadCount: 0 };
    function $f(e, t, n, r, i, a, o, s, c) { this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = rt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = rt(0), this.hiddenUpdates = rt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = new Map; }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) { return e = new $f(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = fi(3, null, null, t), e.current = a, a.stateNode = e, t = ua(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = { element: r, isDehydrated: n, cache: t }, Ua(a), e; }
    function tp(e) { return e ? (e = ui, e) : ui; }
    function np(e, t, n, r, i, a) { i = tp(i), r.context === null ? r.context = i : r.pendingContext = i, r = Ga(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = Ka(e, r, t), n !== null && (hu(n, e, t), qa(n, e, t)); }
    function rp(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    } }
    function ip(e, t) { rp(e, t), (e = e.alternate) && rp(e, t); }
    function ap(e) { if (e.tag === 13 || e.tag === 31) {
        var t = si(e, 67108864);
        t !== null && hu(t, e, 67108864), ip(e, 67108864);
    } }
    function op(e) { if (e.tag === 13 || e.tag === 31) {
        var t = pu();
        t = lt(t);
        var n = si(e, t);
        n !== null && hu(n, e, t), ip(e, t);
    } }
    var sp = !0;
    function cp(e, t, n, r) { var i = D.T; D.T = null; var a = O.p; try {
        O.p = 2, up(e, t, n, r);
    }
    finally {
        O.p = a, D.T = i;
    } }
    function lp(e, t, n, r) { var i = D.T; D.T = null; var a = O.p; try {
        O.p = 8, up(e, t, n, r);
    }
    finally {
        O.p = a, D.T = i;
    } }
    function up(e, t, n, r) { if (sp) {
        var i = dp(r);
        if (i === null)
            wd(e, t, r, fp, n), Cp(e, r);
        else if (Tp(i, e, t, n, r))
            r.stopPropagation();
        else if (Cp(e, r), t & 4 && -1 < Sp.indexOf(e)) {
            for (; i !== null;) {
                var a = Ct(i);
                if (a !== null)
                    switch (a.tag) {
                        case 3:
                            if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
                                var o = Qe(a.pendingLanes);
                                if (o !== 0) {
                                    var s = a;
                                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                                        var c = 1 << 31 - Ke(o);
                                        s.entanglements[1] |= c, o &= ~c;
                                    }
                                    rd(a), !(G & 6) && (tu = Pe() + 500, id(0, !1));
                                }
                            }
                            break;
                        case 31:
                        case 13: s = si(a, 2), s !== null && hu(s, a, 2), bu(), ip(a, 2);
                    }
                if (a = dp(r), a === null && wd(e, t, r, fp, n), a === i)
                    break;
                i = a;
            }
            i !== null && r.stopPropagation();
        }
        else
            wd(e, t, r, null, n);
    } }
    function dp(e) { return e = ln(e), pp(e); }
    var fp = null;
    function pp(e) { if (fp = null, e = St(e), e !== null) {
        var t = l(e);
        if (t === null)
            e = null;
        else {
            var n = t.tag;
            if (n === 13) {
                if (e = u(t), e !== null)
                    return e;
                e = null;
            }
            else if (n === 31) {
                if (e = d(t), e !== null)
                    return e;
                e = null;
            }
            else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null;
            }
            else
                t !== e && (e = null);
        }
    } return fp = e, null; }
    function mp(e) { switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`: return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`: return 8;
        case `message`: switch (Fe()) {
            case Ie: return 2;
            case Le: return 8;
            case Re:
            case ze: return 32;
            case Be: return 268435456;
            default: return 32;
        }
        default: return 32;
    } }
    var hp = !1, gp = null, _p = null, vp = null, yp = new Map, bp = new Map, xp = [], Sp = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
    function Cp(e, t) { switch (e) {
        case `focusin`:
        case `focusout`:
            gp = null;
            break;
        case `dragenter`:
        case `dragleave`:
            _p = null;
            break;
        case `mouseover`:
        case `mouseout`:
            vp = null;
            break;
        case `pointerover`:
        case `pointerout`:
            yp.delete(t.pointerId);
            break;
        case `gotpointercapture`:
        case `lostpointercapture`: bp.delete(t.pointerId);
    } }
    function wp(e, t, n, r, i, a) { return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, t !== null && (t = Ct(t), t !== null && ap(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e); }
    function Tp(e, t, n, r, i) { switch (t) {
        case `focusin`: return gp = wp(gp, e, t, n, r, i), !0;
        case `dragenter`: return _p = wp(_p, e, t, n, r, i), !0;
        case `mouseover`: return vp = wp(vp, e, t, n, r, i), !0;
        case `pointerover`:
            var a = i.pointerId;
            return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0;
        case `gotpointercapture`: return a = i.pointerId, bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)), !0;
    } return !1; }
    function Ep(e) { var t = St(e.target); if (t !== null) {
        var n = l(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = u(n), t !== null) {
                    e.blockedOn = t, ft(e.priority, function () { op(n); });
                    return;
                }
            }
            else if (t === 31) {
                if (t = d(n), t !== null) {
                    e.blockedOn = t, ft(e.priority, function () { op(n); });
                    return;
                }
            }
            else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    } e.blockedOn = null; }
    function Dp(e) { if (e.blockedOn !== null)
        return !1; for (var t = e.targetContainers; 0 < t.length;) {
        var n = dp(e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            cn = r, n.target.dispatchEvent(r), cn = null;
        }
        else
            return t = Ct(n), t !== null && ap(t), e.blockedOn = n, !1;
        t.shift();
    } return !0; }
    function Op(e, t, n) { Dp(e) && n.delete(t); }
    function kp() { hp = !1, gp !== null && Dp(gp) && (gp = null), _p !== null && Dp(_p) && (_p = null), vp !== null && Dp(vp) && (vp = null), yp.forEach(Op), bp.forEach(Op); }
    function Ap(e, n) { e.blockedOn === n && (e.blockedOn = null, hp || (hp = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, kp))); }
    var jp = null;
    function Mp(e) { jp !== e && (jp = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function () { jp === e && (jp = null); for (var t = 0; t < e.length; t += 3) {
        var n = e[t], r = e[t + 1], i = e[t + 2];
        if (typeof r != `function`) {
            if (pp(r || n) === null)
                continue;
            break;
        }
        var a = Ct(n);
        a !== null && (e.splice(t, 3), t -= 3, Ts(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
    } })); }
    function Np(e) { function t(t) { return Ap(t, e); } gp !== null && Ap(gp, e), _p !== null && Ap(_p, e), vp !== null && Ap(vp, e), yp.forEach(t), bp.forEach(t); for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
    } for (; 0 < xp.length && (n = xp[0], n.blockedOn === null);)
        Ep(n), n.blockedOn === null && xp.shift(); if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
        for (r = 0; r < n.length; r += 3) {
            var i = n[r], a = n[r + 1], o = i[mt] || null;
            if (typeof a == `function`)
                o || Mp(n);
            else if (o) {
                var s = null;
                if (a && a.hasAttribute(`formAction`)) {
                    if (i = a, o = a[mt] || null)
                        s = o.formAction;
                    else if (pp(i) !== null)
                        continue;
                }
                else
                    s = o.action;
                typeof s == `function` ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Mp(n);
            }
        } }
    function Pp() { function e(e) { e.canIntercept && e.info === `react-transition` && e.intercept({ handler: function () { return new Promise(function (e) { return i = e; }); }, focusReset: `manual`, scroll: `manual` }); } function t() { i !== null && (i(), i = null), r || setTimeout(n, 20); } function n() { if (!r && !navigation.transition) {
        var e = navigation.currentEntry;
        e && e.url != null && navigation.navigate(e.url, { state: e.getState(), info: `react-transition`, history: `replace` });
    } } if (typeof navigation == `object`) {
        var r = !1, i = null;
        return navigation.addEventListener(`navigate`, e), navigation.addEventListener(`navigatesuccess`, t), navigation.addEventListener(`navigateerror`, t), setTimeout(n, 100), function () { r = !0, navigation.removeEventListener(`navigate`, e), navigation.removeEventListener(`navigatesuccess`, t), navigation.removeEventListener(`navigateerror`, t), i !== null && (i(), i = null); };
    } }
    function Fp(e) { this._internalRoot = e; }
    Ip.prototype.render = Fp.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
        throw Error(a(409)); var n = t.current; np(n, pu(), e, t, null, null); }, Ip.prototype.unmount = Fp.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        np(e.current, 2, null, e, null, null), bu(), t[ht] = null;
    } };
    function Ip(e) { this._internalRoot = e; }
    Ip.prototype.unstable_scheduleHydration = function (e) { if (e) {
        var t = dt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++)
            ;
        xp.splice(n, 0, e), n === 0 && Ep(e);
    } };
    var Lp = n.version;
    if (Lp !== `19.2.8`)
        throw Error(a(527, Lp, `19.2.8`));
    O.findDOMNode = function (e) { var t = e._reactInternals; if (t === void 0)
        throw typeof e.render == `function` ? Error(a(188)) : (e = Object.keys(e).join(`,`), Error(a(268, e))); return e = p(t), e = e === null ? null : m(e), e = e === null ? null : e.stateNode, e; };
    var Rp = { bundleType: 0, version: `19.2.8`, rendererPackageName: `react-dom`, currentDispatcherRef: D, reconcilerVersion: `19.2.8` };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
        var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!zp.isDisabled && zp.supportsFiber)
            try {
                Ue = zp.inject(Rp), We = zp;
            }
            catch { }
    }
    e.createRoot = function (e, t) { if (!s(e))
        throw Error(a(299)); var n = !1, r = ``, i = Js, o = Ys, c = Xs; return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (o = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = ep(e, 1, !1, null, null, n, r, null, i, o, c, Pp), e[ht] = t.current, Sd(e), new Fp(t); };
})), u = t(((e, t) => { function n() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
    }
    catch (e) {
        console.error(e);
    } } n(), t.exports = l(); })), d = e => e?.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
function f(e, t, n = []) { if (t == null)
    throw Error(`[lucide]: iconNode is required when icon name is used`); return { name: d(e), size: 24, node: t, ...n.length > 0 ? { aliases: n } : {} }; }
var p = e => { let t = ``, n = !1; for (let r of e) {
    if (r === `-` || r === `_` || r <= ` `) {
        n = t.length > 0;
        continue;
    }
    t.length === 0 ? t += r.toLowerCase() : t += n ? r.toUpperCase() : r, n = !1;
} return t; }, m = e => { let t = p(e); return t.charAt(0).toUpperCase() + t.slice(1); }, h = (...e) => e.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim(), g = { xmlns: `http://www.w3.org/2000/svg`, width: 24, height: 24, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, "stroke-width": 2, "stroke-linecap": `round`, "stroke-linejoin": `round` };
function _(e) { return e != null; }
function v(e, t = {}) { let n = t.attributeNames ?? {}, r = e => n[e] ?? e, i = e.size ?? e.width ?? g.width, a = e.size ?? e.height ?? g.height, o = e.aliases?.filter(e => typeof e == `string` && e.trim() !== ``).map(e => `lucide-${e}`) ?? [], s = [...e.name ? [`lucide-${e.name}`] : [], ...o], c = t.className?.split(` `).filter(Boolean) ?? [], l = t.includeDefaultClasses === !1 ? h(...c) : h(`lucide`, ...s, ...c), u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? g[`stroke-width`]) * Number(e.size ?? e.width ?? g.width) / Number(t.size ?? t.width ?? g.width) : t.strokeWidth ?? g[`stroke-width`]; return [`svg`, { ...Object.entries(g).reduce((e, [t, n]) => (e[r(t)] = n, e), {}), ...`color` in t && t.color && { [r(`stroke`)]: t.color }, ...`size` in t && _(t.size) && { [r(`width`)]: t.size, [r(`height`)]: t.size }, ...`width` in t && _(t.width) && { [r(`width`)]: t.width }, ...`height` in t && _(t.height) && { [r(`height`)]: t.height }, [r(`stroke-width`)]: u, ...l && { [r(`class`)]: l }, [r(`viewBox`)]: `0 0 ${i} ${a}`, ...t.hasA11yProp === !1 ? { [r(`aria-hidden`)]: `true` } : {}, ...`attributes` in t && t.attributes }, e.node.map(e => { let [n, i, a] = e, o = t.nonScalingStroke ? { [r(`vector-effect`)]: `non-scaling-stroke`, ...i } : i; return a ? [n, o, a] : [n, o]; })]; }
function y(e, t = {}) { return v(e, { ...t, attributeNames: { ...t.attributeNames, class: `className`, "stroke-width": `strokeWidth`, "stroke-linecap": `strokeLinecap`, "stroke-linejoin": `strokeLinejoin`, "vector-effect": `vectorEffect` } }); }
var b = e => { for (let t in e)
    if (t.startsWith(`aria-`) || t === `role` || t === `title`)
        return !0; return !1; }, x = i(), ee = (0, x.createContext)({}), S = () => (0, x.useContext)(ee), C = (0, x.forwardRef)(({ color: e, size: t, width: n, height: r, strokeWidth: i, absoluteStrokeWidth: a, nonScalingStroke: o, className: s = ``, children: c, iconNode: l = [], icon: u = { node: l, aliases: [], size: 24 }, ...d }, f) => { let { size: p = 24, strokeWidth: m = 2, absoluteStrokeWidth: g = !1, nonScalingStroke: _ = !1, color: v = `currentColor`, className: ee = `` } = S() ?? {}, C = !!c || b(d), [w, te, ne = []] = y(u, { color: e ?? v, width: n ?? t ?? p, height: r ?? t ?? p, strokeWidth: i ?? m, absoluteStrokeWidth: a ?? g, nonScalingStroke: o ?? _, className: h(ee, s), hasA11yProp: C, attributes: d }); return (0, x.createElement)(w, { ref: f, ...te }, [...ne.map(([e, t]) => (0, x.createElement)(e, t)), ...Array.isArray(c) ? c : [c]]); });
function w(e, t = [], n = []) { let r = typeof e == `string` ? f(e, t, n) : e, i = (0, x.forwardRef)(({ className: e, ...t }, n) => (0, x.createElement)(C, { ref: n, icon: r, className: e, ...t })); return r.name && (i.displayName = m(r.name)), i; }
var te = { name: `arrow-left`, size: 24, node: [[`path`, { d: `m12 19-7-7 7-7`, key: `1l729n` }], [`path`, { d: `M19 12H5`, key: `x3x0zl` }]] };
te.node;
var ne = w(te), T = { name: `check`, size: 24, node: [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]] };
T.node;
var re = w(T), ie = { name: `circle-alert`, size: 24, node: [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }], [`line`, { x1: `12`, x2: `12`, y1: `8`, y2: `12`, key: `1pkeuh` }], [`line`, { x1: `12`, x2: `12.01`, y1: `16`, y2: `16`, key: `4dfq90` }]], aliases: [`alert-circle`] };
ie.node;
var E = w(ie), ae = { name: `clock`, size: 24, node: [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }], [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }]] };
ae.node;
var oe = w(ae), se = { name: `copy`, size: 24, node: [[`rect`, { width: `14`, height: `14`, x: `8`, y: `8`, rx: `2`, ry: `2`, key: `17jyea` }], [`path`, { d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`, key: `zix9uf` }]] };
se.node;
var ce = w(se), D = { name: `eye-off`, size: 24, node: [[`path`, { d: `M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`, key: `ct8e1f` }], [`path`, { d: `M14.084 14.158a3 3 0 0 1-4.242-4.242`, key: `151rxh` }], [`path`, { d: `M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`, key: `13bj9a` }], [`path`, { d: `m2 2 20 20`, key: `1ooewy` }]] };
D.node;
var O = w(D), le = { name: `eye`, size: 24, node: [[`path`, { d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`, key: `1nclc0` }], [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }]] };
le.node;
var ue = w(le), de = { name: `file-text`, size: 24, node: [[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`, key: `1oefj6` }], [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }], [`path`, { d: `M10 9H8`, key: `b1mrlr` }], [`path`, { d: `M16 13H8`, key: `t4e002` }], [`path`, { d: `M16 17H8`, key: `z1uh3a` }]] };
de.node;
var fe = w(de), pe = { name: `layers`, size: 24, node: [[`path`, { d: `M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`, key: `zw3jo` }], [`path`, { d: `M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`, key: `1wduqc` }], [`path`, { d: `M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`, key: `kqbvx6` }]], aliases: [`layers-3`] };
pe.node;
var k = w(pe), me = { name: `lock`, size: 24, node: [[`rect`, { width: `18`, height: `11`, x: `3`, y: `11`, rx: `2`, ry: `2`, key: `1w4ew1` }], [`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4`, key: `fwvmzm` }]] };
me.node;
var he = w(me), ge = { name: `log-in`, size: 24, node: [[`path`, { d: `m10 17 5-5-5-5`, key: `1bsop3` }], [`path`, { d: `M15 12H3`, key: `6jk70r` }], [`path`, { d: `M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4`, key: `u53s6r` }]] };
ge.node;
var _e = w(ge), ve = { name: `log-out`, size: 24, node: [[`path`, { d: `m16 17 5-5-5-5`, key: `1bji2h` }], [`path`, { d: `M21 12H9`, key: `dn1m92` }], [`path`, { d: `M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`, key: `1uf3rs` }]] };
ve.node;
var ye = w(ve), be = { name: `mail`, size: 24, node: [[`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`, key: `132q7q` }], [`rect`, { x: `2`, y: `4`, width: `20`, height: `16`, rx: `2`, key: `izxlao` }]] };
be.node;
var xe = w(be), Se = { name: `menu`, size: 24, node: [[`path`, { d: `M4 5h16`, key: `1tepv9` }], [`path`, { d: `M4 12h16`, key: `1lakjw` }], [`path`, { d: `M4 19h16`, key: `1djgab` }]] };
Se.node;
var Ce = w(Se), we = { name: `moon`, size: 24, node: [[`path`, { d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`, key: `kfwtm` }]] };
we.node;
var Te = w(we), Ee = { name: `plus`, size: 24, node: [[`path`, { d: `M5 12h14`, key: `1ays0h` }], [`path`, { d: `M12 5v14`, key: `s699le` }]] };
Ee.node;
var De = w(Ee), Oe = { name: `rotate-ccw`, size: 24, node: [[`path`, { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` }], [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }]] };
Oe.node;
var ke = w(Oe), Ae = { name: `scale`, size: 24, node: [[`path`, { d: `M12 3v18`, key: `108xh3` }], [`path`, { d: `m19 8 3 8a5 5 0 0 1-6 0zV7`, key: `zcdpyk` }], [`path`, { d: `M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1`, key: `1yorad` }], [`path`, { d: `m5 8 3 8a5 5 0 0 1-6 0zV7`, key: `eua70x` }], [`path`, { d: `M7 21h10`, key: `1b0cd5` }]] };
Ae.node;
var je = w(Ae), Me = { name: `send`, size: 24, node: [[`path`, { d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`, key: `1ffxy3` }], [`path`, { d: `m21.854 2.147-10.94 10.939`, key: `12cjpa` }]] };
Me.node;
var Ne = w(Me), Pe = { name: `shield`, size: 24, node: [[`path`, { d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`, key: `oel41y` }]] };
Pe.node;
var Fe = w(Pe), Ie = { name: `sparkles`, size: 24, node: [[`path`, { d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`, key: `1s2grr` }], [`path`, { d: `M20 2v4`, key: `1rf3ol` }], [`path`, { d: `M22 4h-4`, key: `gwowj6` }], [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }]], aliases: [`stars`] };
Ie.node;
var Le = w(Ie), Re = { name: `sun`, size: 24, node: [[`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }], [`path`, { d: `M12 2v2`, key: `tus03m` }], [`path`, { d: `M12 20v2`, key: `1lh1kg` }], [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }], [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }], [`path`, { d: `M2 12h2`, key: `1t8f8n` }], [`path`, { d: `M20 12h2`, key: `1q8mjw` }], [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }], [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }]] };
Re.node;
var ze = w(Re), Be = { name: `trash`, size: 24, node: [[`path`, { d: `M10 11v6`, key: `nco0om` }], [`path`, { d: `M14 11v6`, key: `outv1u` }], [`path`, { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`, key: `miytrc` }], [`path`, { d: `M3 6h18`, key: `d0wm0j` }], [`path`, { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`, key: `e791ji` }]], aliases: [`trash-2`] };
Be.node;
var Ve = w(Be), He = { name: `user-plus`, size: 24, node: [[`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }], [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }], [`line`, { x1: `19`, x2: `19`, y1: `8`, y2: `14`, key: `1bvyxn` }], [`line`, { x1: `22`, x2: `16`, y1: `11`, y2: `11`, key: `1shjgl` }]] };
He.node;
var Ue = w(He), We = { name: `user`, size: 24, node: [[`path`, { d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`, key: `975kel` }], [`circle`, { cx: `12`, cy: `7`, r: `4`, key: `17ys0d` }]] };
We.node;
var Ge = w(We), Ke = { name: `x`, size: 24, node: [[`path`, { d: `M18 6 6 18`, key: `1bl5f8` }], [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }]] };
Ke.node;
var qe = w(Ke), Je = t((e => { var t = Symbol.for(`react.transitional.element`); function n(e, n, r) { var i = null; if (r !== void 0 && (i = `` + r), n.key !== void 0 && (i = `` + n.key), `key` in n)
    for (var a in r = {}, n)
        a !== `key` && (r[a] = n[a]);
else
    r = n; return n = r.ref, { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }; } e.jsx = n, e.jsxs = n; })), Ye = t(((e, t) => { t.exports = Je(); })), Xe = u(), A = Ye();
function Ze({ content: e, accentColor: t = `blue` }) {
    if (!e)
        return null;
    let n = typeof e == `string` ? e : JSON.stringify(e, null, 2);
    return n = n.replace(/\\n/g, `
`).replace(/\\"/g, `"`), (0, A.jsx)(`div`, { className: `space-y-4 text-sm leading-relaxed break-words [overflow-wrap:anywhere]`, style: { color: `var(--text-primary)` }, children: tt(n, t) });
}
function Qe({ code: e }) { let [t, n] = (0, x.useState)(!1); return (0, A.jsxs)(`button`, { onClick: () => { try {
        navigator.clipboard.writeText(e), n(!0), setTimeout(() => n(!1), 2e3);
    }
    catch { } }, type: `button`, className: `inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer border`, style: { backgroundColor: `var(--bg-surface-elevated)`, borderColor: `var(--border-subtle)`, color: `var(--text-secondary)` }, title: `Copy code to clipboard`, "aria-label": `Copy code to clipboard`, children: [t ? (0, A.jsx)(re, { size: 13, className: `text-emerald-500` }) : (0, A.jsx)(ce, { size: 13 }), (0, A.jsx)(`span`, { children: t ? `Copied` : `Copy` })] }); }
function $e({ lang: e, code: t }) { return (0, A.jsxs)(`div`, { className: `my-3 rounded-lg overflow-hidden border`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsxs)(`div`, { className: `flex items-center justify-between px-3.5 py-1.5 border-b font-mono text-xs`, style: { backgroundColor: `var(--bg-surface-elevated)`, borderColor: `var(--border-subtle)`, color: `var(--text-muted)` }, children: [(0, A.jsx)(`span`, { className: `uppercase tracking-wider font-semibold text-[11px]`, style: { color: `var(--text-secondary)` }, children: e || `code` }), (0, A.jsx)(Qe, { code: t })] }), (0, A.jsx)(`div`, { className: `p-4 overflow-x-auto text-xs font-mono leading-relaxed`, style: { color: `var(--text-primary)` }, children: (0, A.jsx)(`pre`, { className: `m-0 p-0 font-mono whitespace-pre`, children: (0, A.jsx)(`code`, { children: t }) }) })] }); }
function et(e) { if (!e)
    return null; let t = [], n = e, r = 0; for (; n.length > 0;) {
    let e = n.match(/^`([^`]+)`/);
    if (e) {
        t.push((0, A.jsx)(`code`, { className: `px-1.5 py-0.5 rounded text-xs font-mono border`, style: { backgroundColor: `var(--bg-surface-elevated)`, borderColor: `var(--border-subtle)`, color: `var(--accent-text)` }, children: e[1] }, r++)), n = n.slice(e[0].length);
        continue;
    }
    let i = n.match(/^\*\*([^*]+)\*\*/);
    if (i) {
        t.push((0, A.jsx)(`strong`, { className: `font-semibold`, style: { color: `var(--text-primary)` }, children: i[1] }, r++)), n = n.slice(i[0].length);
        continue;
    }
    let a = n.match(/^\*([^*]+)\*/);
    if (a) {
        t.push((0, A.jsx)(`em`, { className: `italic`, style: { color: `var(--text-secondary)` }, children: a[1] }, r++)), n = n.slice(a[0].length);
        continue;
    }
    let o = n.search(/[`*]/);
    if (o === -1) {
        t.push((0, A.jsx)(`span`, { children: n }, r++));
        break;
    }
    else
        t.push((0, A.jsx)(`span`, { children: n.slice(0, o) }, r++)), n = n.slice(o);
} return t; }
function tt(e, t) {
    let n = e.split(`
`), r = [], i = 0;
    for (; i < n.length;) {
        let e = n[i];
        if (e.trim().startsWith("```")) {
            let a = e.trim().slice(3).trim(), o = [];
            for (i++; i < n.length && !n[i].trim().startsWith("```");)
                o.push(n[i]), i++;
            i++, r.push((0, A.jsx)($e, { lang: a, code: o.join(`
`), accentColor: t }, `code-${i}`));
            continue;
        }
        if (e.startsWith(`### `)) {
            r.push((0, A.jsx)(`h4`, { className: `text-sm font-semibold tracking-tight mt-4 mb-2`, style: { color: `var(--text-primary)` }, children: et(e.slice(4)) }, `h4-${i}`)), i++;
            continue;
        }
        if (e.startsWith(`## `)) {
            r.push((0, A.jsx)(`h3`, { className: `text-base font-semibold tracking-tight mt-5 mb-2.5`, style: { color: `var(--text-primary)` }, children: et(e.slice(3)) }, `h3-${i}`)), i++;
            continue;
        }
        if (e.startsWith(`# `)) {
            r.push((0, A.jsx)(`h2`, { className: `text-lg font-bold tracking-tight mt-6 mb-3`, style: { color: `var(--text-primary)` }, children: et(e.slice(2)) }, `h2-${i}`)), i++;
            continue;
        }
        if (e.trim().startsWith(`|`) && i + 1 < n.length && n[i + 1].trim().startsWith(`|`)) {
            let e = [];
            for (; i < n.length && n[i].trim().startsWith(`|`);)
                e.push(n[i].trim()), i++;
            if (e.length >= 2) {
                let t = e[0], n = e.slice(1).filter(e => !/^\|[\s:\-|+ ]+\|$/.test(e)), a = e => { let t = e.split(`|`).map(e => e.trim()); return t[0] === `` && t.shift(), t.length > 0 && t[t.length - 1] === `` && t.pop(), t; }, o = a(t), s = n.map(a);
                r.push((0, A.jsx)(`div`, { className: `my-3 overflow-x-auto rounded-lg border`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)` }, children: (0, A.jsxs)(`table`, { className: `w-full border-collapse text-left text-xs`, children: [(0, A.jsx)(`thead`, { children: (0, A.jsx)(`tr`, { className: `border-b font-medium font-mono`, style: { backgroundColor: `var(--bg-surface-elevated)`, borderColor: `var(--border-subtle)`, color: `var(--text-primary)` }, children: o.map((e, t) => (0, A.jsx)(`th`, { className: `py-2 px-3 font-semibold`, children: et(e) }, t)) }) }), (0, A.jsx)(`tbody`, { className: `divide-y`, style: { borderColor: `var(--border-subtle)`, color: `var(--text-secondary)` }, children: s.map((e, t) => (0, A.jsx)(`tr`, { className: `hover:bg-white/[0.02]`, children: e.map((e, t) => (0, A.jsx)(`td`, { className: `py-2 px-3 font-mono`, children: et(e) }, t)) }, t)) })] }) }, `table-${i}`));
                continue;
            }
        }
        if (/^[*\-•]\s+/.test(e.trim())) {
            let e = [];
            for (; i < n.length && /^[*\-•]\s+/.test(n[i].trim());)
                e.push(n[i].trim().replace(/^[*\-•]\s+/, ``)), i++;
            r.push((0, A.jsx)(`ul`, { className: `list-disc pl-5 space-y-1.5 my-2`, style: { color: `var(--text-secondary)` }, children: e.map((e, t) => (0, A.jsx)(`li`, { className: `text-xs leading-relaxed`, children: et(e) }, t)) }, `ul-${i}`));
            continue;
        }
        if (/^\d+\.\s+/.test(e.trim())) {
            let e = [];
            for (; i < n.length && /^\d+\.\s+/.test(n[i].trim());)
                e.push(n[i].trim().replace(/^\d+\.\s+/, ``)), i++;
            r.push((0, A.jsx)(`ol`, { className: `list-decimal pl-5 space-y-1.5 my-2`, style: { color: `var(--text-secondary)` }, children: e.map((e, t) => (0, A.jsx)(`li`, { className: `text-xs leading-relaxed`, children: et(e) }, t)) }, `ol-${i}`));
            continue;
        }
        if (e.trim().startsWith(`>`)) {
            let e = [];
            for (; i < n.length && n[i].trim().startsWith(`>`);)
                e.push(n[i].trim().replace(/^>\s?/, ``)), i++;
            r.push((0, A.jsx)(`blockquote`, { className: `border-l-2 pl-3 py-1 my-2 italic text-xs`, style: { borderColor: `var(--accent)`, color: `var(--text-secondary)`, backgroundColor: `var(--accent-subtle)` }, children: e.map((e, t) => (0, A.jsx)(`p`, { children: et(e) }, t)) }, `quote-${i}`));
            continue;
        }
        e.trim().length > 0 && r.push((0, A.jsx)(`p`, { className: `text-xs leading-relaxed`, style: { color: `var(--text-secondary)` }, children: et(e) }, `p-${i}`)), i++;
    }
    return r;
}
function nt(e, t) { return function () { return e.apply(t, arguments); }; }
var { toString: rt } = Object.prototype, { getPrototypeOf: it } = Object, { iterator: at, toStringTag: ot } = Symbol, st = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ct = (e, t) => { let n = e, r = []; for (; n != null && n !== Object.prototype;) {
    if (r.indexOf(n) !== -1)
        return !1;
    if (r.push(n), st(n, t))
        return !0;
    n = it(n);
} return !1; }, lt = (e, t) => e != null && ct(e, t) ? e[t] : void 0, ut = (e => t => { let n = rt.call(t); return e[n] || (e[n] = n.slice(8, -1).toLowerCase()); })(Object.create(null)), dt = e => (e = e.toLowerCase(), t => ut(t) === e), ft = e => t => typeof t === e, { isArray: pt } = Array, j = ft(`undefined`);
function mt(e) { return e !== null && !j(e) && e.constructor !== null && !j(e.constructor) && vt(e.constructor.isBuffer) && e.constructor.isBuffer(e); }
var ht = dt(`ArrayBuffer`);
function gt(e) { let t; return t = typeof ArrayBuffer < `u` && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && ht(e.buffer), t; }
var _t = ft(`string`), vt = ft(`function`), yt = ft(`number`), bt = e => typeof e == `object` && !!e, xt = e => e === !0 || e === !1, St = e => { if (!bt(e))
    return !1; let t = it(e); return (t === null || t === Object.prototype || it(t) === null) && !ct(e, ot) && !ct(e, at); }, Ct = e => { if (!bt(e) || mt(e))
    return !1; try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
}
catch {
    return !1;
} }, wt = dt(`Date`), Tt = dt(`File`), Et = e => !!(e && e.uri !== void 0), Dt = e => e && e.getParts !== void 0, Ot = dt(`Blob`), kt = dt(`FileList`), At = e => bt(e) && vt(e.pipe);
function jt() { return typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : typeof global < `u` ? global : {}; }
var Mt = jt(), Nt = Mt.FormData === void 0 ? void 0 : Mt.FormData, Pt = e => { if (!e)
    return !1; if (Nt && e instanceof Nt)
    return !0; let t = it(e); if (!t || t === Object.prototype || !vt(e.append))
    return !1; let n = ut(e); return n === `formdata` || n === `object` && vt(e.toString) && e.toString() === `[object FormData]`; }, Ft = dt(`URLSearchParams`), [It, Lt, Rt, zt] = [`ReadableStream`, `Request`, `Response`, `Headers`].map(dt), Bt = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ``);
function Vt(e, t, { allOwnKeys: n = !1 } = {}) { if (e == null)
    return; let r, i; if (typeof e != `object` && (e = [e]), pt(e))
    for (r = 0, i = e.length; r < i; r++)
        t.call(null, e[r], r, e);
else {
    if (mt(e))
        return;
    let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
    for (r = 0; r < a; r++)
        o = i[r], t.call(null, e[o], o, e);
} }
function Ht(e, t) { if (mt(e))
    return null; t = t.toLowerCase(); let n = Object.keys(e), r = n.length, i; for (; r-- > 0;)
    if (i = n[r], t === i.toLowerCase())
        return i; return null; }
var Ut = typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : global, Wt = e => !j(e) && e !== Ut;
function Gt(...e) { let { caseless: t, skipUndefined: n } = Wt(this) && this || {}, r = {}, i = (e, i) => { if (i === `__proto__` || i === `constructor` || i === `prototype`)
    return; let a = t && typeof i == `string` && Ht(r, i) || i, o = st(r, a) ? r[a] : void 0; St(o) && St(e) ? r[a] = Gt(o, e) : St(e) ? r[a] = Gt({}, e) : pt(e) ? r[a] = e.slice() : (!n || !j(e)) && (r[a] = e); }; for (let t = 0, n = e.length; t < n; t++) {
    let n = e[t];
    if (!n || mt(n) || (Vt(n, i), typeof n != `object` || pt(n)))
        continue;
    let r = Object.getOwnPropertySymbols(n);
    for (let e = 0; e < r.length; e++) {
        let t = r[e];
        rn.call(n, t) && i(n[t], t);
    }
} return r; }
var Kt = (e, t, n, { allOwnKeys: r } = {}) => (Vt(t, (t, r) => { n && vt(t) ? Object.defineProperty(e, r, { __proto__: null, value: nt(t, n), writable: !0, enumerable: !0, configurable: !0 }) : Object.defineProperty(e, r, { __proto__: null, value: t, writable: !0, enumerable: !0, configurable: !0 }); }, { allOwnKeys: r }), e), qt = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Jt = (e, t, n, r) => { e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", { __proto__: null, value: e, writable: !0, enumerable: !1, configurable: !0 }), Object.defineProperty(e, "super", { __proto__: null, value: t.prototype }), n && Object.assign(e.prototype, n); }, Yt = (e, t, n, r) => { let i, a, o, s = {}; if (t ||= {}, e == null)
    return t; do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;)
        o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
    e = n !== !1 && it(e);
} while (e && (!n || n(e, t)) && e !== Object.prototype); return t; }, Xt = (e, t, n) => { e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length; let r = e.indexOf(t, n); return r !== -1 && r === n; }, Zt = e => { if (!e)
    return null; if (pt(e))
    return e; let t = e.length; if (!yt(t))
    return null; let n = Array(t); for (; t-- > 0;)
    n[t] = e[t]; return n; }, Qt = (e => t => e && t instanceof e)(typeof Uint8Array < `u` && it(Uint8Array)), $t = (e, t) => { let n = (e && e[at]).call(e), r; for (; (r = n.next()) && !r.done;) {
    let n = r.value;
    t.call(e, n[0], n[1]);
} }, en = (e, t) => { let n, r = []; for (; (n = e.exec(t)) !== null;)
    r.push(n); return r; }, tn = dt(`HTMLFormElement`), nn = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) { return t.toUpperCase() + n; }), { propertyIsEnumerable: rn } = Object.prototype, an = dt(`RegExp`), on = (e, t) => { let n = Object.getOwnPropertyDescriptors(e), r = {}; Vt(n, (n, i) => { let a; (a = t(n, i, e)) !== !1 && (r[i] = a || n); }), Object.defineProperties(e, r); }, sn = e => { on(e, (t, n) => { if (vt(e) && [`arguments`, `caller`, `callee`].includes(n))
    return !1; let r = e[n]; if (vt(r)) {
    if (t.enumerable = !1, `writable` in t) {
        t.writable = !1;
        return;
    }
    t.set ||= () => { throw Error(`Can not rewrite read-only method '` + n + `'`); };
} }); }, cn = (e, t) => { let n = {}, r = e => { e.forEach(e => { n[e] = !0; }); }; return pt(e) ? r(e) : r(String(e).split(t)), n; }, ln = () => { }, un = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function dn(e) { return !!(e && vt(e.append) && e[ot] === `FormData` && e[at]); }
var fn = e => { let t = new WeakSet, n = e => { if (bt(e)) {
    if (t.has(e))
        return;
    if (mt(e))
        return e;
    if (!(`toJSON` in e)) {
        t.add(e);
        let r = pt(e) ? [] : {};
        return Vt(e, (e, t) => { let i = n(e); !j(i) && (r[t] = i); }), t.delete(e), r;
    }
} return e; }; return n(e); }, pn = dt(`AsyncFunction`), mn = e => e && (bt(e) || vt(e)) && vt(e.then) && vt(e.catch), hn = ((e, t) => e ? setImmediate : t ? ((e, t) => (Ut.addEventListener(`message`, ({ source: n, data: r }) => { n === Ut && r === e && t.length && t.shift()(); }, !1), n => { t.push(n), Ut.postMessage(e, `*`); }))(`axios@${Math.random()}`, []) : e => setTimeout(e))(typeof setImmediate == `function`, vt(Ut.postMessage)), gn = typeof queueMicrotask < `u` ? queueMicrotask.bind(Ut) : typeof process < `u` && process.nextTick || hn, _n = e => e != null && vt(e[at]), M = { isArray: pt, isArrayBuffer: ht, isBuffer: mt, isFormData: Pt, isArrayBufferView: gt, isString: _t, isNumber: yt, isBoolean: xt, isObject: bt, isPlainObject: St, isEmptyObject: Ct, isReadableStream: It, isRequest: Lt, isResponse: Rt, isHeaders: zt, isUndefined: j, isDate: wt, isFile: Tt, isReactNativeBlob: Et, isReactNative: Dt, isBlob: Ot, isRegExp: an, isFunction: vt, isStream: At, isURLSearchParams: Ft, isTypedArray: Qt, isFileList: kt, forEach: Vt, merge: Gt, extend: Kt, trim: Bt, stripBOM: qt, inherits: Jt, toFlatObject: Yt, kindOf: ut, kindOfTest: dt, endsWith: Xt, toArray: Zt, forEachEntry: $t, matchAll: en, isHTMLForm: tn, hasOwnProperty: st, hasOwnProp: st, hasOwnInPrototypeChain: ct, getSafeProp: lt, reduceDescriptors: on, freezeMethods: sn, toObjectSet: cn, toCamelCase: nn, noop: ln, toFiniteNumber: un, findKey: Ht, global: Ut, isContextDefined: Wt, isSpecCompliantForm: dn, toJSONObject: fn, isAsyncFn: pn, isThenable: mn, setImmediate: hn, asap: gn, isIterable: _n, isSafeIterable: e => e != null && ct(e, at) && _n(e) }, vn = M.toObjectSet([`age`, `authorization`, `content-length`, `content-type`, `etag`, `expires`, `from`, `host`, `if-modified-since`, `if-unmodified-since`, `last-modified`, `location`, `max-forwards`, `proxy-authorization`, `referer`, `retry-after`, `user-agent`]), yn = e => {
    let t = {}, n, r, i;
    return e && e.split(`
`).forEach(function (e) { i = e.indexOf(`:`), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim(), !(!n || t[n] && vn[n]) && (n === `set-cookie` ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + `, ` + r : r); }), t;
};
function bn(e) { let t = 0, n = e.length; for (; t < n;) {
    let n = e.charCodeAt(t);
    if (n !== 9 && n !== 32)
        break;
    t += 1;
} for (; n > t;) {
    let t = e.charCodeAt(n - 1);
    if (t !== 9 && t !== 32)
        break;
    --n;
} return t === 0 && n === e.length ? e : e.slice(t, n); }
var xn = RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`, `g`), Sn = RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`, `g`);
function Cn(e, t) { return M.isArray(e) ? e.map(e => Cn(e, t)) : bn(String(e).replace(t, ``)); }
var wn = e => Cn(e, xn), Tn = e => Cn(e, Sn);
function En(e) { let t = Object.create(null); return M.forEach(e.toJSON(), (e, n) => { t[n] = Tn(e); }), t; }
var Dn = Symbol(`internals`);
function On(e) { return e && String(e).trim().toLowerCase(); }
function kn(e) { return e === !1 || e == null ? e : M.isArray(e) ? e.map(kn) : wn(String(e)); }
function An(e) { let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r; for (; r = n.exec(e);)
    t[r[1]] = r[2]; return t; }
var jn = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Mn(e, t, n, r, i) { if (M.isFunction(r))
    return r.call(this, t, n); if (i && (t = n), M.isString(t)) {
    if (M.isString(r))
        return t.indexOf(r) !== -1;
    if (M.isRegExp(r))
        return r.test(t);
} }
function Nn(e) { return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n); }
function Pn(e, t) { let n = M.toCamelCase(` ` + t); [`get`, `set`, `has`].forEach(r => { Object.defineProperty(e, r + n, { __proto__: null, value: function (e, n, i) { return this[r].call(this, t, e, n, i); }, configurable: !0 }); }); }
var Fn = class {
    constructor(e) { e && this.set(e); }
    set(e, t, n) { let r = this; function i(e, t, n) { let i = On(t); if (!i)
        return; let a = M.findKey(r, i); (!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = kn(e)); } let a = (e, t) => M.forEach(e, (e, n) => i(e, n, t)); if (M.isPlainObject(e) || e instanceof this.constructor)
        a(e, t);
    else if (M.isString(e) && (e = e.trim()) && !jn(e))
        a(yn(e), t);
    else if (M.isObject(e) && M.isSafeIterable(e)) {
        let n = Object.create(null), r, i;
        for (let t of e) {
            if (!M.isArray(t))
                throw TypeError(`Object iterator must return a key-value pair`);
            i = t[0], M.hasOwnProp(n, i) ? (r = n[i], n[i] = M.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1];
        }
        a(n, t);
    }
    else
        e != null && i(t, e, n); return this; }
    get(e, t) { if (e = On(e), e) {
        let n = M.findKey(this, e);
        if (n) {
            let e = this[n];
            if (!t)
                return e;
            if (t === !0)
                return An(e);
            if (M.isFunction(t))
                return t.call(this, e, n);
            if (M.isRegExp(t))
                return t.exec(e);
            throw TypeError(`parser must be boolean|regexp|function`);
        }
    } }
    has(e, t) { if (e = On(e), e) {
        let n = M.findKey(this, e);
        return !!(n && this[n] !== void 0 && (!t || Mn(this, this[n], n, t)));
    } return !1; }
    delete(e, t) { let n = this, r = !1; function i(e) { if (e = On(e), e) {
        let i = M.findKey(n, e);
        i && (!t || Mn(n, n[i], i, t)) && (delete n[i], r = !0);
    } } return M.isArray(e) ? e.forEach(i) : i(e), r; }
    clear(e) { let t = Object.keys(this), n = t.length, r = !1; for (; n--;) {
        let i = t[n];
        (!e || Mn(this, this[i], i, e, !0)) && (delete this[i], r = !0);
    } return r; }
    normalize(e) { let t = this, n = {}; return M.forEach(this, (r, i) => { let a = M.findKey(n, i); if (a) {
        t[a] = kn(r), delete t[i];
        return;
    } let o = e ? Nn(i) : String(i).trim(); o !== i && delete t[i], t[o] = kn(r), n[o] = !0; }), this; }
    concat(...e) { return this.constructor.concat(this, ...e); }
    toJSON(e) { let t = Object.create(null); return M.forEach(this, (n, r) => { n != null && n !== !1 && (t[r] = e && M.isArray(n) ? n.join(`, `) : n); }), t; }
    [Symbol.iterator]() { return Object.entries(this.toJSON())[Symbol.iterator](); }
    toString() {
        return Object.entries(this.toJSON()).map(([e, t]) => e + `: ` + t).join(`
`);
    }
    getSetCookie() { return this.get(`set-cookie`) || []; }
    get [Symbol.toStringTag]() { return `AxiosHeaders`; }
    static from(e) { return e instanceof this ? e : new this(e); }
    static concat(e, ...t) { let n = new this(e); return t.forEach(e => n.set(e)), n; }
    static accessor(e) { let t = (this[Dn] = this[Dn] = { accessors: {} }).accessors, n = this.prototype; function r(e) { let r = On(e); t[r] || (Pn(n, e), t[r] = !0); } return M.isArray(e) ? e.forEach(r) : r(e), this; }
};
Fn.accessor([`Content-Type`, `Content-Length`, `Accept`, `Accept-Encoding`, `User-Agent`, `Authorization`]), M.reduceDescriptors(Fn.prototype, ({ value: e }, t) => { let n = t[0].toUpperCase() + t.slice(1); return { get: () => e, set(e) { this[n] = e; } }; }), M.freezeMethods(Fn);
var In = `[REDACTED ****]`;
function Ln(e) { if (M.hasOwnProp(e, `toJSON`))
    return !0; let t = Object.getPrototypeOf(e); for (; t && t !== Object.prototype;) {
    if (M.hasOwnProp(t, `toJSON`))
        return !0;
    t = Object.getPrototypeOf(t);
} return !1; }
function Rn(e, t) { let n = new Set(t.map(e => String(e).toLowerCase())), r = [], i = e => { if (typeof e != `object` || !e || M.isBuffer(e))
    return e; if (r.indexOf(e) !== -1)
    return; e instanceof Fn && (e = e.toJSON()), r.push(e); let t; if (M.isArray(e))
    t = [], e.forEach((e, n) => { let r = i(e); M.isUndefined(r) || (t[n] = r); });
else {
    if (!M.isPlainObject(e) && Ln(e))
        return r.pop(), e;
    t = Object.create(null);
    for (let [r, a] of Object.entries(e)) {
        let e = n.has(r.toLowerCase()) ? In : i(a);
        M.isUndefined(e) || (t[r] = e);
    }
} return r.pop(), t; }; return i(e); }
var N = class e extends Error {
    static from(t, n, r, i, a, o) { let s = new e(t.message, n || t.code, r, i, a); return Object.defineProperty(s, "cause", { __proto__: null, value: t, writable: !0, enumerable: !1, configurable: !0 }), s.name = t.name, t.status != null && s.status == null && (s.status = t.status), o && Object.assign(s, o), s; }
    constructor(e, t, n, r, i) { super(e), Object.defineProperty(this, "message", { __proto__: null, value: e, enumerable: !0, writable: !0, configurable: !0 }), this.name = `AxiosError`, this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status); }
    toJSON() { let e = this.config, t = e && M.hasOwnProp(e, `redact`) ? e.redact : void 0, n = M.isArray(t) && t.length > 0 ? Rn(e, t) : M.toJSONObject(e); return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: n, code: this.code, status: this.status }; }
};
N.ERR_BAD_OPTION_VALUE = `ERR_BAD_OPTION_VALUE`, N.ERR_BAD_OPTION = `ERR_BAD_OPTION`, N.ECONNABORTED = `ECONNABORTED`, N.ETIMEDOUT = `ETIMEDOUT`, N.ECONNREFUSED = `ECONNREFUSED`, N.ERR_NETWORK = `ERR_NETWORK`, N.ERR_FR_TOO_MANY_REDIRECTS = `ERR_FR_TOO_MANY_REDIRECTS`, N.ERR_DEPRECATED = `ERR_DEPRECATED`, N.ERR_BAD_RESPONSE = `ERR_BAD_RESPONSE`, N.ERR_BAD_REQUEST = `ERR_BAD_REQUEST`, N.ERR_CANCELED = `ERR_CANCELED`, N.ERR_NOT_SUPPORT = `ERR_NOT_SUPPORT`, N.ERR_INVALID_URL = `ERR_INVALID_URL`, N.ERR_FORM_DATA_DEPTH_EXCEEDED = `ERR_FORM_DATA_DEPTH_EXCEEDED`;
function zn(e) { return M.isPlainObject(e) || M.isArray(e); }
function Bn(e) { return M.endsWith(e, `[]`) ? e.slice(0, -2) : e; }
function Vn(e, t, n) { return e ? e.concat(t).map(function (e, t) { return e = Bn(e), !n && t ? `[` + e + `]` : e; }).join(n ? `.` : ``) : t; }
function Hn(e) { return M.isArray(e) && !e.some(zn); }
var Un = M.toFlatObject(M, {}, null, function (e) { return /^is[A-Z]/.test(e); });
function Wn(e, t, n) { if (!M.isObject(e))
    throw TypeError(`target must be an object`); t ||= new FormData, n = M.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (e, t) { return !M.isUndefined(t[e]); }); let r = n.metaTokens, i = n.visitor || m, a = n.dots, o = n.indexes, s = n.Blob || typeof Blob < `u` && Blob, c = n.maxDepth === void 0 ? 100 : n.maxDepth, l = s && M.isSpecCompliantForm(t), u = []; if (!M.isFunction(i))
    throw TypeError(`visitor must be a function`); function d(e) { if (e === null)
    return ``; if (M.isDate(e))
    return e.toISOString(); if (M.isBoolean(e))
    return e.toString(); if (!l && M.isBlob(e))
    throw new N(`Blob is not supported. Use a Buffer instead.`); if (M.isArrayBuffer(e) || M.isTypedArray(e)) {
    if (l && typeof s == `function`)
        return new s([e]);
    if (typeof Buffer < `u`)
        return Buffer.from(e);
    throw new N(`Blob is not supported. Use a Buffer instead.`, N.ERR_NOT_SUPPORT);
} return e; } function f(e) { if (e > c)
    throw new N(`Object is too deeply nested (` + e + ` levels). Max depth: ` + c, N.ERR_FORM_DATA_DEPTH_EXCEEDED); } function p(e, t) { if (c === 1 / 0)
    return JSON.stringify(e); let n = []; return JSON.stringify(e, function (e, r) { if (!M.isObject(r))
    return r; for (; n.length && n[n.length - 1] !== this;)
    n.pop(); return n.push(r), f(t + n.length - 1), r; }); } function m(e, n, i) { let s = e; if (M.isReactNative(t) && M.isReactNativeBlob(e))
    return t.append(Vn(i, n, a), d(e)), !1; if (e && !i && typeof e == `object`) {
    if (M.endsWith(n, `{}`))
        n = r ? n : n.slice(0, -2), e = p(e, 1);
    else if (M.isArray(e) && Hn(e) || (M.isFileList(e) || M.endsWith(n, `[]`)) && (s = M.toArray(e)))
        return n = Bn(n), s.forEach(function (e, r) { !(M.isUndefined(e) || e === null) && t.append(o === !0 ? Vn([n], r, a) : o === null ? n : n + `[]`, d(e)); }), !1;
} return zn(e) ? !0 : (t.append(Vn(i, n, a), d(e)), !1); } let h = Object.assign(Un, { defaultVisitor: m, convertValue: d, isVisitable: zn }); function g(e, n, r = 0) { if (!M.isUndefined(e)) {
    if (f(r), u.indexOf(e) !== -1)
        throw Error(`Circular reference detected in ` + n.join(`.`));
    u.push(e), M.forEach(e, function (e, a) { (!(M.isUndefined(e) || e === null) && i.call(t, e, M.isString(a) ? a.trim() : a, n, h)) === !0 && g(e, n ? n.concat(a) : [a], r + 1); }), u.pop();
} } if (!M.isObject(e))
    throw TypeError(`data must be an object`); return g(e), t; }
function Gn(e) { let t = { "!": `%21`, "'": `%27`, "(": `%28`, ")": `%29`, "~": `%7E`, "%20": `+` }; return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (e) { return t[e]; }); }
function Kn(e, t) { this._pairs = [], e && Wn(e, this, t); }
var qn = Kn.prototype;
qn.append = function (e, t) { this._pairs.push([e, t]); }, qn.toString = function (e) { let t = e ? t => e.call(this, t, Gn) : Gn; return this._pairs.map(function (e) { return t(e[0]) + `=` + t(e[1]); }, ``).join(`&`); };
function Jn(e) { return encodeURIComponent(e).replace(/%3A/gi, `:`).replace(/%24/g, `$`).replace(/%2C/gi, `,`).replace(/%20/g, `+`); }
function Yn(e, t, n) { if (!t)
    return e; e ||= ``; let r = M.isFunction(n) ? { serialize: n } : n, i = M.getSafeProp(r, `encode`) || Jn, a = M.getSafeProp(r, `serialize`), o; if (o = a ? a(t, r) : M.isURLSearchParams(t) ? t.toString() : new Kn(t, r).toString(i), o) {
    let t = e.indexOf(`#`);
    t !== -1 && (e = e.slice(0, t)), e += (e.indexOf(`?`) === -1 ? `?` : `&`) + o;
} return e; }
var Xn = class {
    constructor() { this.handlers = []; }
    use(e, t, n) { return this.handlers.push({ fulfilled: e, rejected: t, synchronous: n ? n.synchronous : !1, runWhen: n ? n.runWhen : null }), this.handlers.length - 1; }
    eject(e) { this.handlers[e] && (this.handlers[e] = null); }
    clear() { this.handlers &&= []; }
    forEach(e) { M.forEach(this.handlers, function (t) { t !== null && e(t); }); }
}, Zn = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1, legacyInterceptorReqResOrdering: !0, advertiseZstdAcceptEncoding: !1, validateStatusUndefinedResolves: !0 }, Qn = { isBrowser: !0, classes: { URLSearchParams: typeof URLSearchParams < `u` ? URLSearchParams : Kn, FormData: typeof FormData < `u` ? FormData : null, Blob: typeof Blob < `u` ? Blob : null }, protocols: [`http`, `https`, `file`, `blob`, `url`, `data`] }, $n = n({ hasBrowserEnv: () => er, hasStandardBrowserEnv: () => nr, hasStandardBrowserWebWorkerEnv: () => rr, navigator: () => tr, origin: () => ir }), er = typeof window < `u` && typeof document < `u`, tr = typeof navigator == `object` && navigator || void 0, nr = er && (!tr || [`ReactNative`, `NativeScript`, `NS`].indexOf(tr.product) < 0), rr = typeof WorkerGlobalScope < `u` && self instanceof WorkerGlobalScope && typeof self.importScripts == `function`, ir = er && window.location.href || `http://localhost`, P = { ...$n, ...Qn };
function ar(e, t) { return Wn(e, new P.classes.URLSearchParams, { visitor: function (e, t, n, r) { return P.isNode && M.isBuffer(e) ? (this.append(t, e.toString(`base64`)), !1) : r.defaultVisitor.apply(this, arguments); }, ...t }); }
var or = 100;
function sr(e) { if (e > or)
    throw new N(`FormData field is too deeply nested (` + e + ` levels). Max depth: ` + or, N.ERR_FORM_DATA_DEPTH_EXCEEDED); }
function cr(e) { let t = [], n = /\w+|\[(\w*)]/g, r; for (; (r = n.exec(e)) !== null;)
    sr(t.length), t.push(r[0] === `[]` ? `` : r[1] || r[0]); return t; }
function lr(e) { let t = {}, n = Object.keys(e), r, i = n.length, a; for (r = 0; r < i; r++)
    a = n[r], t[a] = e[a]; return t; }
function ur(e) { function t(e, n, r, i) { sr(i); let a = e[i++]; if (a === `__proto__`)
    return !0; let o = Number.isFinite(+a), s = i >= e.length; return a = !a && M.isArray(r) ? r.length : a, s ? (M.hasOwnProp(r, a) ? r[a] = M.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!M.hasOwnProp(r, a) || !M.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && M.isArray(r[a]) && (r[a] = lr(r[a])), !o); } if (M.isFormData(e) && M.isFunction(e.entries)) {
    let n = {};
    return M.forEachEntry(e, (e, r) => { t(cr(e), r, n, 0); }), n;
} return null; }
var dr = (e, t) => e != null && M.hasOwnProp(e, t) ? e[t] : void 0;
function fr(e, t, n) { if (M.isString(e))
    try {
        return (t || JSON.parse)(e), M.trim(e);
    }
    catch (e) {
        if (e.name !== `SyntaxError`)
            throw e;
    } return (n || JSON.stringify)(e); }
var pr = { transitional: Zn, adapter: [`xhr`, `http`, `fetch`], transformRequest: [function (e, t) { let n = t.getContentType() || ``, r = n.indexOf(`application/json`) > -1, i = M.isObject(e); if (i && M.isHTMLForm(e) && (e = new FormData(e)), M.isFormData(e))
            return r ? JSON.stringify(ur(e)) : e; if (M.isArrayBuffer(e) || M.isBuffer(e) || M.isStream(e) || M.isFile(e) || M.isBlob(e) || M.isReadableStream(e))
            return e; if (M.isArrayBufferView(e))
            return e.buffer; if (M.isURLSearchParams(e))
            return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`, !1), e.toString(); let a; if (i) {
            let t = dr(this, `formSerializer`);
            if (n.indexOf(`application/x-www-form-urlencoded`) > -1)
                return ar(e, t).toString();
            if ((a = M.isFileList(e)) || n.indexOf(`multipart/form-data`) > -1) {
                let n = dr(this, `env`), r = n && n.FormData;
                return Wn(a ? { "files[]": e } : e, r && new r, t);
            }
        } return i || r ? (t.setContentType(`application/json`, !1), fr(e)) : e; }], transformResponse: [function (e) { let t = dr(this, `transitional`) || pr.transitional, n = t && t.forcedJSONParsing, r = dr(this, `responseType`), i = r === `json`; if (M.isResponse(e) || M.isReadableStream(e))
            return e; if (e && M.isString(e) && (n && !r || i)) {
            let n = !(t && t.silentJSONParsing) && i;
            try {
                return JSON.parse(e, dr(this, `parseReviver`));
            }
            catch (e) {
                if (n)
                    throw e.name === `SyntaxError` ? N.from(e, N.ERR_BAD_RESPONSE, this, null, dr(this, `response`)) : e;
            }
        } return e; }], timeout: 0, xsrfCookieName: `XSRF-TOKEN`, xsrfHeaderName: `X-XSRF-TOKEN`, maxContentLength: -1, maxBodyLength: -1, env: { FormData: P.classes.FormData, Blob: P.classes.Blob }, validateStatus: function (e) { return e >= 200 && e < 300; }, headers: { common: { Accept: `application/json, text/plain, */*`, "Content-Type": void 0 } } };
M.forEach([`delete`, `get`, `head`, `post`, `put`, `patch`, `query`], e => { pr.headers[e] = {}; });
function mr(e, t) { let n = this || pr, r = t || n, i = Fn.from(r.headers), a = r.data; return M.forEach(e, function (e) { a = e.call(n, a, i.normalize(), t ? t.status : void 0); }), i.normalize(), a; }
function hr(e) { return !!(e && e.__CANCEL__); }
var gr = class extends N {
    constructor(e, t, n) { super(e ?? `canceled`, N.ERR_CANCELED, t, n), this.name = `CanceledError`, this.__CANCEL__ = !0; }
};
function _r(e, t, n) { let r = n.config.validateStatus; !n.status || !r || r(n.status) ? e(n) : t(new N(`Request failed with status code ` + n.status, n.status >= 400 && n.status < 500 ? N.ERR_BAD_REQUEST : N.ERR_BAD_RESPONSE, n.config, n.request, n)); }
function vr(e) { let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e); return t && t[1] || ``; }
function yr(e, t) { e ||= 10; let n = Array(e), r = Array(e), i = 0, a = 0, o; return t = t === void 0 ? 1e3 : t, function (s) { let c = Date.now(), l = r[a]; o ||= c, n[i] = s, r[i] = c; let u = a, d = 0; for (; u !== i;)
    d += n[u++], u %= e; if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - o < t)
    return; let f = l && c - l; return f ? Math.round(d * 1e3 / f) : void 0; }; }
function br(e, t) { let n = 0, r = 1e3 / t, i, a, o = (t, r = Date.now()) => { n = r, i = null, a &&= (clearTimeout(a), null), e(...t); }; return [(...e) => { let t = Date.now(), s = t - n; s >= r ? o(e, t) : (i = e, a ||= setTimeout(() => { a = null, o(i); }, r - s)); }, () => i && o(i)]; }
var xr = (e, t, n = 3) => { let r = 0, i = yr(50, 250); return br(n => { if (!n || typeof n.loaded != `number`)
    return; let a = n.loaded, o = n.lengthComputable ? n.total : void 0, s = o == null ? a : Math.min(a, o), c = Math.max(0, s - r), l = i(c); r = Math.max(r, s), e({ loaded: s, total: o, progress: o ? s / o : void 0, bytes: c, rate: l || void 0, estimated: l && o ? (o - s) / l : void 0, event: n, lengthComputable: o != null, [t ? `download` : `upload`]: !0 }); }, n); }, Sr = (e, t) => { let n = e != null; return [r => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]]; }, Cr = e => (...t) => M.asap(() => e(...t)), wr = P.hasStandardBrowserEnv ? ((e, t) => n => (n = new URL(n, P.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(P.origin), P.navigator && /(msie|trident)/i.test(P.navigator.userAgent)) : () => !0, Tr = P.hasStandardBrowserEnv ? { write(e, t, n, r, i, a, o) { if (typeof document > `u`)
        return; let s = [`${e}=${encodeURIComponent(t)}`]; M.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), M.isString(r) && s.push(`path=${r}`), M.isString(i) && s.push(`domain=${i}`), a === !0 && s.push(`secure`), M.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join(`; `); }, read(e) { if (typeof document > `u`)
        return null; let t = document.cookie.split(`;`); for (let n = 0; n < t.length; n++) {
        let r = t[n].replace(/^\s+/, ``), i = r.indexOf(`=`);
        if (i !== -1 && r.slice(0, i) === e)
            try {
                return decodeURIComponent(r.slice(i + 1));
            }
            catch {
                return r.slice(i + 1);
            }
    } return null; }, remove(e) { this.write(e, ``, Date.now() - 864e5, `/`); } } : { write() { }, read() { return null; }, remove() { } };
function Er(e) { return typeof e == `string` && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e); }
function Dr(e, t) { return t ? e.replace(/\/?\/$/, ``) + `/` + t.replace(/^\/+/, ``) : e; }
var Or = /^https?:(?!\/\/)/i, kr = /[\t\n\r]/g;
function Ar(e) { let t = 0; for (; t < e.length && e.charCodeAt(t) <= 32;)
    t++; return e.slice(t); }
function jr(e) { return Ar(e).replace(kr, ``); }
function Mr(e, t) { if (typeof e == `string` && Or.test(jr(e)))
    throw new N(`Invalid URL: missing "//" after protocol`, N.ERR_INVALID_URL, t); }
function Nr(e, t, n, r) { Mr(t, r); let i = !Er(t); return e && (i || n === !1) ? (Mr(e, r), Dr(e, t)) : t; }
var Pr = e => e instanceof Fn ? { ...e } : e;
function Fr(e, t) { e ||= {}, t ||= {}; let n = Object.create(null); Object.defineProperty(n, "hasOwnProperty", { __proto__: null, value: Object.prototype.hasOwnProperty, enumerable: !1, writable: !0, configurable: !0 }); function r(e, t, n, r) { return M.isPlainObject(e) && M.isPlainObject(t) ? M.merge.call({ caseless: r }, e, t) : M.isPlainObject(t) ? M.merge({}, t) : M.isArray(t) ? t.slice() : t; } function i(e, t, n, i) { if (!M.isUndefined(t))
    return r(e, t, n, i); if (!M.isUndefined(e))
    return r(void 0, e, n, i); } function a(e, t) { if (!M.isUndefined(t))
    return r(void 0, t); } function o(e, t) { if (!M.isUndefined(t))
    return r(void 0, t); if (!M.isUndefined(e))
    return r(void 0, e); } function s(n) { let r = M.hasOwnProp(t, `transitional`) ? t.transitional : void 0; if (!M.isUndefined(r))
    if (M.isPlainObject(r)) {
        if (M.hasOwnProp(r, n))
            return r[n];
    }
    else
        return; let i = M.hasOwnProp(e, `transitional`) ? e.transitional : void 0; if (M.isPlainObject(i) && M.hasOwnProp(i, n))
    return i[n]; } function c(n, i, a) { if (M.hasOwnProp(t, a))
    return r(n, i); if (M.hasOwnProp(e, a))
    return r(void 0, n); } let l = { url: a, method: a, data: a, baseURL: o, transformRequest: o, transformResponse: o, paramsSerializer: o, timeout: o, timeoutMessage: o, withCredentials: o, withXSRFToken: o, adapter: o, responseType: o, xsrfCookieName: o, xsrfHeaderName: o, onUploadProgress: o, onDownloadProgress: o, decompress: o, maxContentLength: o, maxBodyLength: o, beforeRedirect: o, transport: o, httpAgent: o, httpsAgent: o, cancelToken: o, socketPath: o, allowedSocketPaths: o, responseEncoding: o, validateStatus: c, headers: (e, t, n) => i(Pr(e), Pr(t), n, !0) }; return M.forEach(Object.keys({ ...e, ...t }), function (r) { if (r === `__proto__` || r === `constructor` || r === `prototype`)
    return; let a = M.hasOwnProp(l, r) ? l[r] : i, o = a(M.hasOwnProp(e, r) ? e[r] : void 0, M.hasOwnProp(t, r) ? t[r] : void 0, r); M.isUndefined(o) && a !== c || (n[r] = o); }), M.hasOwnProp(t, `validateStatus`) && M.isUndefined(t.validateStatus) && s(`validateStatusUndefinedResolves`) === !1 && (M.hasOwnProp(e, `validateStatus`) ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n; }
var Ir = [`content-type`, `content-length`];
function Lr(e, t, n) { if (n !== `content-only`) {
    e.set(t);
    return;
} Object.entries(t || {}).forEach(([t, n]) => { Ir.includes(t.toLowerCase()) && e.set(t, n); }); }
var Rr = e => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function zr(e) { let t = Fr({}, e), n = e => M.hasOwnProp(t, e) ? t[e] : void 0, r = n(`data`), i = n(`withXSRFToken`), a = n(`xsrfHeaderName`), o = n(`xsrfCookieName`), s = n(`headers`), c = n(`auth`), l = n(`baseURL`), u = n(`allowAbsoluteUrls`), d = n(`url`); if (t.headers = s = Fn.from(s), t.url = Yn(Nr(l, d, u, t), n(`params`), n(`paramsSerializer`)), c) {
    let t = M.getSafeProp(c, `username`) || ``, n = M.getSafeProp(c, `password`) || ``;
    try {
        s.set(`Authorization`, `Basic ` + btoa(t + `:` + (n ? Rr(n) : ``)));
    }
    catch (t) {
        throw N.from(t, N.ERR_BAD_OPTION_VALUE, e);
    }
} if (M.isFormData(r) && (P.hasStandardBrowserEnv || P.hasStandardBrowserWebWorkerEnv || M.isReactNative(r) ? s.setContentType(void 0) : M.isFunction(r.getHeaders) && Lr(s, r.getHeaders(), n(`formDataHeaderPolicy`))), P.hasStandardBrowserEnv && (M.isFunction(i) && (i = i(t)), i === !0 || i == null && wr(t.url))) {
    let e = a && o && Tr.read(o);
    e && s.set(a, e);
} return t; }
var Br = typeof XMLHttpRequest < `u` && function (e) { return new Promise(function (t, n) { let r = zr(e), i = r.data, a = Fn.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p; function m() { f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener(`abort`, l); } let h = new XMLHttpRequest; h.open(r.method.toUpperCase(), r.url, !0), h.timeout = r.timeout; function g() { if (!h)
    return; let r = Fn.from(`getAllResponseHeaders` in h && h.getAllResponseHeaders()); _r(function (e) { t(e), m(); }, function (e) { n(e), m(); }, { data: !o || o === `text` || o === `json` ? h.responseText : h.response, status: h.status, statusText: h.statusText, headers: r, config: e, request: h }), h = null; } `onloadend` in h ? h.onloadend = g : h.onreadystatechange = function () { !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.startsWith(`file:`)) || setTimeout(g); }, h.onabort = function () { h &&= (n(new N(`Request aborted`, N.ECONNABORTED, e, h)), m(), null); }, h.onerror = function (t) { let r = new N(t && t.message ? t.message : `Network Error`, N.ERR_NETWORK, e, h); r.event = t || null, n(r), m(), h = null; }, h.ontimeout = function () { let t = r.timeout ? `timeout of ` + r.timeout + `ms exceeded` : `timeout exceeded`, i = r.transitional || Zn; r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new N(t, i.clarifyTimeoutError ? N.ETIMEDOUT : N.ECONNABORTED, e, h)), m(), h = null; }, i === void 0 && a.setContentType(null), `setRequestHeader` in h && M.forEach(En(a), function (e, t) { h.setRequestHeader(t, e); }), M.isUndefined(r.withCredentials) || (h.withCredentials = !!r.withCredentials), o && o !== `json` && (h.responseType = r.responseType), c && ([d, p] = xr(c, !0), h.addEventListener(`progress`, d)), s && h.upload && ([u, f] = xr(s), h.upload.addEventListener(`progress`, u), h.upload.addEventListener(`loadend`, f)), (r.cancelToken || r.signal) && (l = t => { h &&= (n(!t || t.type ? new gr(null, e, h) : t), h.abort(), m(), null); }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener(`abort`, l))); let _ = vr(r.url); if (_ && !P.protocols.includes(_)) {
    n(new N(`Unsupported protocol ` + _ + `:`, N.ERR_BAD_REQUEST, e)), m();
    return;
} h.send(i || null); }); }, Vr = (e, t) => { if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return; let n = new AbortController, r = !1, i = function (e) { if (!r) {
    r = !0, o();
    let t = e instanceof Error ? e : this.reason;
    n.abort(t instanceof N ? t : new gr(t instanceof Error ? t.message : t));
} }, a = t && setTimeout(() => { a = null, i(new N(`timeout of ${t}ms exceeded`, N.ETIMEDOUT)); }, t), o = () => { e &&= (a && clearTimeout(a), a = null, e.forEach(e => { e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener(`abort`, i); }), null); }; e.forEach(e => e.addEventListener(`abort`, i, { once: !0 })); let { signal: s } = n; return s.unsubscribe = () => M.asap(o), s; }, Hr = function* (e, t) { let n = e.byteLength; if (!t || n < t) {
    yield e;
    return;
} let r = 0, i; for (; r < n;)
    i = r + t, yield e.slice(r, i), r = i; }, Ur = async function* (e, t) { for await (let n of Wr(e))
    yield* Hr(n, t); }, Wr = async function* (e) { if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
} let t = e.getReader(); try {
    for (;;) {
        let { done: e, value: n } = await t.read();
        if (e)
            break;
        yield n;
    }
}
finally {
    await t.cancel();
} }, Gr = (e, t, n, r) => { let i = Ur(e, t), a = 0, o, s = e => { o || (o = !0, r && r(e)); }; return new ReadableStream({ async pull(e) { try {
        let { done: t, value: r } = await i.next();
        if (t) {
            s(), e.close();
            return;
        }
        let o = r.byteLength;
        n && n(a += o), e.enqueue(new Uint8Array(r));
    }
    catch (e) {
        throw s(e), e;
    } }, cancel(e) { return s(e), i.return(); } }, { highWaterMark: 2 }); }, Kr = e => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, qr = (e, t, n) => t + 2 < n && Kr(e.charCodeAt(t + 1)) && Kr(e.charCodeAt(t + 2));
function Jr(e) { if (!e || typeof e != `string` || !e.startsWith(`data:`))
    return 0; let t = e.indexOf(`,`); if (t < 0)
    return 0; let n = e.slice(5, t), r = e.slice(t + 1); if (/;base64/i.test(n)) {
    let e = r.length, t = r.length;
    for (let n = 0; n < t; n++)
        if (r.charCodeAt(n) === 37 && n + 2 < t) {
            let t = r.charCodeAt(n + 1), i = r.charCodeAt(n + 2);
            Kr(t) && Kr(i) && (e -= 2, n += 2);
        }
    let n = 0, i = t - 1, a = e => e >= 2 && r.charCodeAt(e - 2) === 37 && r.charCodeAt(e - 1) === 51 && (r.charCodeAt(e) === 68 || r.charCodeAt(e) === 100);
    i >= 0 && (r.charCodeAt(i) === 61 ? (n++, i--) : a(i) && (n++, i -= 3)), n === 1 && i >= 0 && (r.charCodeAt(i) === 61 || a(i)) && n++;
    let o = Math.floor(e / 4) * 3 - (n || 0);
    return o > 0 ? o : 0;
} let i = 0; for (let e = 0, t = r.length; e < t; e++) {
    let n = r.charCodeAt(e);
    if (n === 37 && qr(r, e, t))
        i += 1, e += 2;
    else if (n < 128)
        i += 1;
    else if (n < 2048)
        i += 2;
    else if (n >= 55296 && n <= 56319 && e + 1 < t) {
        let t = r.charCodeAt(e + 1);
        t >= 56320 && t <= 57343 ? (i += 4, e++) : i += 3;
    }
    else
        i += 3;
} return i; }
var Yr = `1.18.1`, Xr = 64 * 1024, { isFunction: Zr } = M, Qr = e => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), $r = e => { if (!M.isString(e))
    return e; try {
    return decodeURIComponent(e);
}
catch {
    return e;
} }, ei = (e, ...t) => { try {
    return !!e(...t);
}
catch {
    return !1;
} }, ti = e => { let t = e.indexOf(`://`), n = e; return t !== -1 && (n = n.slice(t + 3)), n.includes(`@`) || n.includes(`:`); }, ni = e => { let t = M.global !== void 0 && M.global !== null ? M.global : globalThis, { ReadableStream: n, TextEncoder: r } = t; e = M.merge.call({ skipUndefined: !0 }, { Request: t.Request, Response: t.Response }, e); let { fetch: i, Request: a, Response: o } = e, s = i ? Zr(i) : typeof fetch == `function`, c = Zr(a), l = Zr(o); if (!s)
    return !1; let u = s && Zr(n), d = s && (typeof r == `function` ? (e => t => e.encode(t))(new r) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && ei(() => { let e = !1, t = new a(P.origin, { body: new n, method: `POST`, get duplex() { return e = !0, `half`; } }), r = t.headers.has(`Content-Type`); return t.body != null && t.body.cancel(), e && !r; }), p = l && u && ei(() => M.isReadableStream(new o(``).body)), m = { stream: p && (e => e.body) }; s && [`text`, `arrayBuffer`, `blob`, `formData`, `stream`].forEach(e => { !m[e] && (m[e] = (t, n) => { let r = t && t[e]; if (r)
    return r.call(t); throw new N(`Response type '${e}' is not supported`, N.ERR_NOT_SUPPORT, n); }); }); let h = async (e) => { if (e == null)
    return 0; if (M.isBlob(e))
    return e.size; if (M.isSpecCompliantForm(e))
    return (await new a(P.origin, { method: `POST`, body: e }).arrayBuffer()).byteLength; if (M.isArrayBufferView(e) || M.isArrayBuffer(e))
    return e.byteLength; if (M.isURLSearchParams(e) && (e += ``), M.isString(e))
    return (await d(e)).byteLength; }, g = async (e, t) => M.toFiniteNumber(e.getContentLength()) ?? h(t); return async (e) => { let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: v, onUploadProgress: y, responseType: b, headers: x, withCredentials: ee = `same-origin`, fetchOptions: S, maxContentLength: C, maxBodyLength: w } = zr(e), te = M.isNumber(C) && C > -1, ne = M.isNumber(w) && w > -1, T = t => M.hasOwnProp(e, t) ? e[t] : void 0, re = i || fetch; b = b ? (b + ``).toLowerCase() : `text`; let ie = Vr([l, d && d.toAbortSignal()], _), E = null, ae = ie && ie.unsubscribe && (() => { ie.unsubscribe(); }), oe, se = null, ce = () => new N(`Request body larger than maxBodyLength limit`, N.ERR_BAD_REQUEST, e, E); try {
    let i, l = T(`auth`);
    if (l && (i = { username: M.getSafeProp(l, `username`) || ``, password: M.getSafeProp(l, `password`) || `` }), ti(t)) {
        let e = new URL(t, P.origin);
        !i && (e.username || e.password) && (i = { username: $r(e.username), password: $r(e.password) }), (e.username || e.password) && (e.username = ``, e.password = ``, t = e.href);
    }
    if (i && (x.delete(`authorization`), x.set(`Authorization`, `Basic ` + btoa(Qr((i.username || ``) + `:` + (i.password || ``))))), te && typeof t == `string` && t.startsWith(`data:`) && Jr(t) > C)
        throw new N(`maxContentLength size of ` + C + ` exceeded`, N.ERR_BAD_RESPONSE, e, E);
    if (ne && n !== `get` && n !== `head`) {
        let e = await h(s);
        if (typeof e == `number` && isFinite(e) && (oe = e, e > w))
            throw ce();
    }
    let d = ne && (M.isReadableStream(s) || M.isStream(s)), _ = (e, t, n) => Gr(e, Xr, e => { if (ne && e > w)
        throw se = ce(); t && t(e); }, n);
    if (f && n !== `get` && n !== `head` && (y || d)) {
        if (oe ??= await g(x, s), oe !== 0 || d) {
            let e = new a(t, { method: `POST`, body: s, duplex: `half` }), n;
            if (M.isFormData(s) && (n = e.headers.get(`content-type`)) && x.setContentType(n), e.body) {
                let [t, n] = y && Sr(oe, xr(Cr(y))) || [];
                s = _(e.body, t, n);
            }
        }
    }
    else if (d && !c && u && n !== `get` && n !== `head`)
        s = _(s);
    else if (d && c && !f && n !== `get` && n !== `head`)
        throw new N(`Stream request bodies are not supported by the current fetch implementation`, N.ERR_NOT_SUPPORT, e, E);
    M.isString(ee) || (ee = ee ? `include` : `omit`);
    let D = c && `credentials` in a.prototype;
    if (M.isFormData(s)) {
        let e = x.getContentType();
        e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && x.delete(`content-type`);
    }
    x.set(`User-Agent`, `axios/` + Yr, !1);
    let O = { ...S, signal: ie, method: n.toUpperCase(), headers: En(x.normalize()), body: s, duplex: `half`, credentials: D ? ee : void 0 };
    E = c && new a(t, O);
    let le = await (c ? re(E, S) : re(t, O)), ue = Fn.from(le.headers);
    if (te) {
        let t = M.toFiniteNumber(ue.getContentLength());
        if (t != null && t > C)
            throw new N(`maxContentLength size of ` + C + ` exceeded`, N.ERR_BAD_RESPONSE, e, E);
    }
    let de = p && (b === `stream` || b === `response`);
    if (p && le.body && (v || te || de && ae)) {
        let t = {};
        [`status`, `statusText`, `headers`].forEach(e => { t[e] = le[e]; });
        let n = M.toFiniteNumber(ue.getContentLength()), [r, i] = v && Sr(n, xr(Cr(v), !0)) || [], a = 0;
        le = new o(Gr(le.body, Xr, t => { if (te && (a = t, a > C))
            throw new N(`maxContentLength size of ` + C + ` exceeded`, N.ERR_BAD_RESPONSE, e, E); r && r(t); }, () => { i && i(), ae && ae(); }), t);
    }
    b ||= `text`;
    let fe = await m[M.findKey(m, b) || `text`](le, e);
    if (te && !p && !de) {
        let t;
        if (fe != null && (typeof fe.byteLength == `number` ? t = fe.byteLength : typeof fe.size == `number` ? t = fe.size : typeof fe == `string` && (t = typeof r == `function` ? new r().encode(fe).byteLength : fe.length)), typeof t == `number` && t > C)
            throw new N(`maxContentLength size of ` + C + ` exceeded`, N.ERR_BAD_RESPONSE, e, E);
    }
    return !de && ae && ae(), await new Promise((t, n) => { _r(t, n, { data: fe, headers: Fn.from(le.headers), status: le.status, statusText: le.statusText, config: e, request: E }); });
}
catch (t) {
    if (ae && ae(), ie && ie.aborted && ie.reason instanceof N) {
        let n = ie.reason;
        throw n.config = e, E && (n.request = E), t !== n && Object.defineProperty(n, "cause", { __proto__: null, value: t, writable: !0, enumerable: !1, configurable: !0 }), n;
    }
    if (se)
        throw E && !se.request && (se.request = E), se;
    if (t instanceof N)
        throw E && !t.request && (t.request = E), t;
    if (t && t.name === `TypeError` && /Load failed|fetch/i.test(t.message)) {
        let n = new N(`Network Error`, N.ERR_NETWORK, e, E, t && t.response);
        throw Object.defineProperty(n, "cause", { __proto__: null, value: t.cause || t, writable: !0, enumerable: !1, configurable: !0 }), n;
    }
    throw N.from(t, t && t.code, e, E, t && t.response);
} }; }, ri = new Map, ii = e => { let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [r, i, n], o = a.length, s, c, l = ri; for (; o--;)
    s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? new Map : ni(t)), l = c; return c; };
ii();
var ai = { http: null, xhr: Br, fetch: { get: ii } };
M.forEach(ai, (e, t) => { if (e) {
    try {
        Object.defineProperty(e, "name", { __proto__: null, value: t });
    }
    catch { }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
} });
var oi = e => `- ${e}`, si = e => M.isFunction(e) || e === null || e === !1;
function ci(e, t) {
    e = M.isArray(e) ? e : [e];
    let { length: n } = e, r, i, a = {};
    for (let o = 0; o < n; o++) {
        r = e[o];
        let n;
        if (i = r, !si(r) && (i = ai[(n = String(r)).toLowerCase()], i === void 0))
            throw new N(`Unknown adapter '${n}'`);
        if (i && (M.isFunction(i) || (i = i.get(t))))
            break;
        a[n || `#` + o] = i;
    }
    if (!i) {
        let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? `is not supported by the environment` : `is not available in the build`));
        throw new N(`There is no suitable adapter to dispatch the request ` + (n ? e.length > 1 ? `since :
` + e.map(oi).join(`
`) : ` ` + oi(e[0]) : `as no adapter specified`), N.ERR_NOT_SUPPORT);
    }
    return i;
}
var li = { getAdapter: ci, adapters: ai };
function ui(e) { if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new gr(null, e); }
function di(e) { return ui(e), e.headers = Fn.from(e.headers), e.data = mr.call(e, e.transformRequest), [`post`, `put`, `patch`].indexOf(e.method) !== -1 && e.headers.setContentType(`application/x-www-form-urlencoded`, !1), li.getAdapter(e.adapter || pr.adapter, e)(e).then(function (t) { ui(e), e.response = t; try {
    t.data = mr.call(e, e.transformResponse, t);
}
finally {
    delete e.response;
} return t.headers = Fn.from(t.headers), t; }, function (t) { if (!hr(t) && (ui(e), t && t.response)) {
    e.response = t.response;
    try {
        t.response.data = mr.call(e, e.transformResponse, t.response);
    }
    finally {
        delete e.response;
    }
    t.response.headers = Fn.from(t.response.headers);
} return Promise.reject(t); }); }
var fi = {};
[`object`, `boolean`, `number`, `function`, `string`, `symbol`].forEach((e, t) => { fi[e] = function (n) { return typeof n === e || `a` + (t < 1 ? `n ` : ` `) + e; }; });
var pi = {};
fi.transitional = function (e, t, n) { function r(e, t) { return `[Axios v` + Yr + `] Transitional option '` + e + `'` + t + (n ? `. ` + n : ``); } return (n, i, a) => { if (e === !1)
    throw new N(r(i, ` has been removed` + (t ? ` in ` + t : ``)), N.ERR_DEPRECATED); return t && !pi[i] && (pi[i] = !0, console.warn(r(i, ` has been deprecated since v` + t + ` and will be removed in the near future`))), !e || e(n, i, a); }; }, fi.spelling = function (e) { return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0); };
function mi(e, t, n) { if (typeof e != `object` || !e)
    throw new N(`options must be an object`, N.ERR_BAD_OPTION_VALUE); let r = Object.keys(e), i = r.length; for (; i-- > 0;) {
    let a = r[i], o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (o) {
        let t = e[a], n = t === void 0 || o(t, a, e);
        if (n !== !0)
            throw new N(`option ` + a + ` must be ` + n, N.ERR_BAD_OPTION_VALUE);
        continue;
    }
    if (n !== !0)
        throw new N(`Unknown option ` + a, N.ERR_BAD_OPTION);
} }
var hi = { assertOptions: mi, validators: fi }, gi = hi.validators, _i = class {
    constructor(e) { this.defaults = e || {}, this.interceptors = { request: new Xn, response: new Xn }; }
    async request(e, t) {
        try {
            return await this._request(e, t);
        }
        catch (e) {
            if (e instanceof Error) {
                let t = {};
                Error.captureStackTrace ? Error.captureStackTrace(t) : t = Error();
                let n = (() => {
                    if (!t.stack)
                        return ``;
                    let e = t.stack.indexOf(`
`);
                    return e === -1 ? `` : t.stack.slice(e + 1);
                })();
                try {
                    if (!e.stack)
                        e.stack = n;
                    else if (n) {
                        let t = n.indexOf(`
`), r = t === -1 ? -1 : n.indexOf(`
`, t + 1), i = r === -1 ? `` : n.slice(r + 1);
                        String(e.stack).endsWith(i) || (e.stack += `
` + n);
                    }
                }
                catch { }
            }
            throw e;
        }
    }
    _request(e, t) { typeof e == `string` ? (t ||= {}, t.url = e) : t = e || {}, t = Fr(this.defaults, t); let { transitional: n, paramsSerializer: r, headers: i } = t; n !== void 0 && hi.assertOptions(n, { silentJSONParsing: gi.transitional(gi.boolean), forcedJSONParsing: gi.transitional(gi.boolean), clarifyTimeoutError: gi.transitional(gi.boolean), legacyInterceptorReqResOrdering: gi.transitional(gi.boolean), advertiseZstdAcceptEncoding: gi.transitional(gi.boolean), validateStatusUndefinedResolves: gi.transitional(gi.boolean) }, !1), r != null && (M.isFunction(r) ? t.paramsSerializer = { serialize: r } : hi.assertOptions(r, { encode: gi.function, serialize: gi.function }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), hi.assertOptions(t, { baseUrl: gi.spelling(`baseURL`), withXsrfToken: gi.spelling(`withXSRFToken`) }, !0), t.method = (t.method || this.defaults.method || `get`).toLowerCase(); let a = i && M.merge(i.common, i[t.method]); i && M.forEach([`delete`, `get`, `head`, `post`, `put`, `patch`, `query`, `common`], e => { delete i[e]; }), t.headers = Fn.concat(a, i); let o = [], s = !0; this.interceptors.request.forEach(function (e) { if (typeof e.runWhen == `function` && e.runWhen(t) === !1)
        return; s &&= e.synchronous; let n = t.transitional || Zn; n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected); }); let c = []; this.interceptors.response.forEach(function (e) { c.push(e.fulfilled, e.rejected); }); let l, u = 0, d; if (!s) {
        let e = [di.bind(this), void 0];
        for (e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t); u < d;)
            l = l.then(e[u++], e[u++]);
        return l;
    } d = o.length; let f = t; for (; u < d;) {
        let e = o[u++], t = o[u++];
        try {
            f = e(f);
        }
        catch (e) {
            t.call(this, e);
            break;
        }
    } try {
        l = di.call(this, f);
    }
    catch (e) {
        return Promise.reject(e);
    } for (u = 0, d = c.length; u < d;)
        l = l.then(c[u++], c[u++]); return l; }
    getUri(e) { return e = Fr(this.defaults, e), Yn(Nr(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer); }
};
M.forEach([`delete`, `get`, `head`, `options`], function (e) { _i.prototype[e] = function (t, n) { return this.request(Fr(n || {}, { method: e, url: t, data: n && M.hasOwnProp(n, `data`) ? n.data : void 0 })); }; }), M.forEach([`post`, `put`, `patch`, `query`], function (e) { function t(t) { return function (n, r, i) { return this.request(Fr(i || {}, { method: e, headers: t ? { "Content-Type": `multipart/form-data` } : {}, url: n, data: r })); }; } _i.prototype[e] = t(), e !== `query` && (_i.prototype[e + `Form`] = t(!0)); });
var vi = class e {
    constructor(e) { if (typeof e != `function`)
        throw TypeError(`executor must be a function.`); let t; this.promise = new Promise(function (e) { t = e; }); let n = this; this.promise.then(e => { if (!n._listeners)
        return; let t = n._listeners.length; for (; t-- > 0;)
        n._listeners[t](e); n._listeners = null; }), this.promise.then = e => { let t, r = new Promise(e => { n.subscribe(e), t = e; }).then(e); return r.cancel = function () { n.unsubscribe(t); }, r; }, e(function (e, r, i) { n.reason || (n.reason = new gr(e, r, i), t(n.reason)); }); }
    throwIfRequested() { if (this.reason)
        throw this.reason; }
    subscribe(e) { if (this.reason) {
        e(this.reason);
        return;
    } this._listeners ? this._listeners.push(e) : this._listeners = [e]; }
    unsubscribe(e) { if (!this._listeners)
        return; let t = this._listeners.indexOf(e); t !== -1 && this._listeners.splice(t, 1); }
    toAbortSignal() { let e = new AbortController, t = t => { e.abort(t); }; return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal; }
    static source() { let t; return { token: new e(function (e) { t = e; }), cancel: t }; }
};
function yi(e) { return function (t) { return e.apply(null, t); }; }
function bi(e) { return M.isObject(e) && e.isAxiosError === !0; }
var xi = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511, WebServerIsDown: 521, ConnectionTimedOut: 522, OriginIsUnreachable: 523, TimeoutOccurred: 524, SslHandshakeFailed: 525, InvalidSslCertificate: 526 };
Object.entries(xi).forEach(([e, t]) => { xi[t] = e; });
function Si(e) { let t = new _i(e), n = nt(_i.prototype.request, t); return M.extend(n, _i.prototype, t, { allOwnKeys: !0 }), M.extend(n, t, null, { allOwnKeys: !0 }), n.create = function (t) { return Si(Fr(e, t)); }, n; }
var F = Si(pr);
F.Axios = _i, F.CanceledError = gr, F.CancelToken = vi, F.isCancel = hr, F.VERSION = Yr, F.toFormData = Wn, F.AxiosError = N, F.Cancel = F.CanceledError, F.all = function (e) { return Promise.all(e); }, F.spread = yi, F.isAxiosError = bi, F.mergeConfig = Fr, F.AxiosHeaders = Fn, F.formToJSON = e => ur(M.isHTMLForm(e) ? new FormData(e) : e), F.getAdapter = li.getAdapter, F.HttpStatusCode = xi, F.default = F;
var Ci = F.create({ baseURL: ``, withCredentials: !0, headers: { "Content-Type": `application/json` } });
Ci.interceptors.request.use(e => { let t = localStorage.getItem(`token`); return t && (e.headers.Authorization = `Bearer ${t}`), e; });
var wi = { register: async ({ name: e, email: t, password: n }) => (await Ci.post(`/api/auth/register`, { name: e, email: t, password: n })).data, login: async ({ email: e, password: t }) => { let n = await Ci.post(`/api/auth/login`, { email: e, password: t }); return n.data?.token && localStorage.setItem(`token`, n.data.token), n.data; }, getMe: async () => { try {
        return (await Ci.get(`/api/auth/get-me`)).data;
    }
    catch {
        return { success: !1, user: null };
    } }, logout: async () => { localStorage.removeItem(`token`), localStorage.removeItem(`ai_arena_user`); try {
        return (await Ci.post(`/api/auth/logout`)).data;
    }
    catch {
        return { success: !0 };
    } } }, Ti = { invoke: async (e, t) => (await Ci.post(`/invoke`, { input: e, chatId: t })).data }, Ei = { getChats: async () => (await Ci.get(`/api/chats`)).data, saveChat: async (e) => (await Ci.post(`/api/chats`, e)).data, deleteChat: async (e) => (await Ci.delete(`/api/chats/${e}`)).data };
function Di({ onLogin: e, onGuestLogin: t, _onGoogleLogin: n, onCancel: r }) { let [i, a] = (0, x.useState)(!1), [o, s] = (0, x.useState)({ name: ``, email: ``, password: ``, confirmPassword: `` }), [c, l] = (0, x.useState)(!1), [u, d] = (0, x.useState)(``), [f, p] = (0, x.useState)(!1); (0, x.useEffect)(() => { let e = new URLSearchParams(window.location.search).get(`error`); e && d(e === `google_auth_failed` ? `Google authentication failed. Please try again.` : e === `server_error` ? `Server error during Google authentication.` : e); }, []); let m = e => { s({ ...o, [e.target.name]: e.target.value }), d(``); }; return (0, A.jsx)(`div`, { role: `dialog`, "aria-modal": `true`, "aria-labelledby": `auth-modal-title`, onClick: e => { e.target === e.currentTarget && r && r(); }, className: `fixed inset-0 z-50 flex items-center justify-center p-4`, style: { backgroundColor: `rgba(0, 0, 0, 0.65)`, backdropFilter: `blur(4px)` }, children: (0, A.jsxs)(`div`, { className: `w-full max-w-sm rounded-xl border p-6 shadow-2xl relative`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)`, color: `var(--text-primary)` }, children: [(0, A.jsx)(`button`, { type: `button`, onClick: r, className: `absolute top-4 right-4 p-1 rounded-md text-slate-400 hover:text-white transition-colors cursor-pointer`, "aria-label": `Close dialog`, children: (0, A.jsx)(qe, { size: 18 }) }), (0, A.jsxs)(`div`, { className: `mb-5`, children: [(0, A.jsx)(`h2`, { id: `auth-modal-title`, className: `text-lg font-bold tracking-tight`, children: i ? `Create Account` : `Sign In` }), (0, A.jsx)(`p`, { className: `text-xs text-slate-400 mt-1`, children: i ? `Register to save session benchmarks across devices.` : `Sign in to access your cloud-saved benchmark sessions.` })] }), u && (0, A.jsx)(`div`, { role: `alert`, className: `mb-4 p-3 rounded-md text-xs border`, style: { backgroundColor: `var(--status-error-bg)`, borderColor: `var(--status-error)`, color: `var(--status-error)` }, children: u }), (0, A.jsxs)(`form`, { onSubmit: async (t) => { if (t.preventDefault(), d(``), !o.email.trim() || !o.password.trim()) {
                    d(`Please fill in all required fields.`);
                    return;
                } if (i) {
                    if (!o.name.trim()) {
                        d(`Please enter your full name.`);
                        return;
                    }
                    if (o.password.length < 6) {
                        d(`Password must be at least 6 characters long.`);
                        return;
                    }
                    if (o.password !== o.confirmPassword) {
                        d(`Passwords do not match.`);
                        return;
                    }
                } p(!0); try {
                    i && await wi.register({ name: o.name.trim(), email: o.email.trim(), password: o.password });
                    let t = await wi.login({ email: o.email.trim(), password: o.password });
                    t.success && t.user ? e(t.user) : d(t.message || `Authentication failed`);
                }
                catch (e) {
                    let t = e.response?.data?.errors?.[0]?.msg || e.response?.data?.message || e.message || `An error occurred during authentication.`;
                    d(t);
                }
                finally {
                    p(!1);
                } }, className: `space-y-3.5`, children: [i && (0, A.jsxs)(`div`, { children: [(0, A.jsx)(`label`, { className: `block text-xs font-medium mb-1`, htmlFor: `auth-name`, children: `Full Name` }), (0, A.jsxs)(`div`, { className: `relative`, children: [(0, A.jsx)(`span`, { className: `absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400`, children: (0, A.jsx)(Ge, { size: 15 }) }), (0, A.jsx)(`input`, { id: `auth-name`, type: `text`, name: `name`, value: o.name, onChange: m, required: !0, placeholder: `Alex Chen`, className: `w-full pl-9 pr-3 py-2 text-xs rounded-md border outline-none font-sans`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)`, color: `var(--text-primary)` } })] })] }), (0, A.jsxs)(`div`, { children: [(0, A.jsx)(`label`, { className: `block text-xs font-medium mb-1`, htmlFor: `auth-email`, children: `Email Address` }), (0, A.jsxs)(`div`, { className: `relative`, children: [(0, A.jsx)(`span`, { className: `absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400`, children: (0, A.jsx)(xe, { size: 15 }) }), (0, A.jsx)(`input`, { id: `auth-email`, type: `email`, name: `email`, value: o.email, onChange: m, required: !0, placeholder: `name@example.com`, className: `w-full pl-9 pr-3 py-2 text-xs rounded-md border outline-none font-sans`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)`, color: `var(--text-primary)` } })] })] }), (0, A.jsxs)(`div`, { children: [(0, A.jsx)(`label`, { className: `block text-xs font-medium mb-1`, htmlFor: `auth-password`, children: `Password` }), (0, A.jsxs)(`div`, { className: `relative`, children: [(0, A.jsx)(`span`, { className: `absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400`, children: (0, A.jsx)(he, { size: 15 }) }), (0, A.jsx)(`input`, { id: `auth-password`, type: c ? `text` : `password`, name: `password`, value: o.password, onChange: m, required: !0, placeholder: `••••••••`, className: `w-full pl-9 pr-9 py-2 text-xs rounded-md border outline-none font-sans`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)`, color: `var(--text-primary)` } }), (0, A.jsx)(`button`, { type: `button`, onClick: () => l(!c), className: `absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white cursor-pointer`, "aria-label": c ? `Hide password` : `Show password`, children: c ? (0, A.jsx)(O, { size: 15 }) : (0, A.jsx)(ue, { size: 15 }) })] })] }), i && (0, A.jsxs)(`div`, { children: [(0, A.jsx)(`label`, { className: `block text-xs font-medium mb-1`, htmlFor: `auth-confirm-password`, children: `Confirm Password` }), (0, A.jsxs)(`div`, { className: `relative`, children: [(0, A.jsx)(`span`, { className: `absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400`, children: (0, A.jsx)(he, { size: 15 }) }), (0, A.jsx)(`input`, { id: `auth-confirm-password`, type: c ? `text` : `password`, name: `confirmPassword`, value: o.confirmPassword, onChange: m, required: !0, placeholder: `••••••••`, className: `w-full pl-9 pr-3 py-2 text-xs rounded-md border outline-none font-sans`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)`, color: `var(--text-primary)` } })] })] }), (0, A.jsxs)(`button`, { type: `submit`, disabled: f, className: `w-full mt-2 py-2 px-4 rounded-md font-medium text-xs text-white transition-opacity cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50`, style: { backgroundColor: `var(--accent)` }, children: [i ? (0, A.jsx)(Ue, { size: 15 }) : (0, A.jsx)(_e, { size: 15 }), (0, A.jsx)(`span`, { children: f ? `Processing...` : i ? `Register` : `Sign In` })] })] }), (0, A.jsxs)(`div`, { className: `relative my-4`, children: [(0, A.jsx)(`div`, { className: `absolute inset-0 flex items-center`, children: (0, A.jsx)(`div`, { className: `w-full border-t`, style: { borderColor: `var(--border-subtle)` } }) }), (0, A.jsx)(`div`, { className: `relative flex justify-center text-[10px] uppercase tracking-wider font-mono`, children: (0, A.jsx)(`span`, { className: `px-2`, style: { backgroundColor: `var(--bg-surface)`, color: `var(--text-muted)` }, children: `Or continue with` }) })] }), (0, A.jsxs)(`div`, { className: `space-y-2`, children: [(0, A.jsxs)(`button`, { type: `button`, onClick: e => { e && e.preventDefault && e.preventDefault(); let t = ``.replace(/\/+$/, ``); window.location.href = `${t}/api/auth/google`; }, className: `w-full py-2 px-3 rounded-md border text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer`, style: { backgroundColor: `var(--bg-surface-elevated)`, borderColor: `var(--border-subtle)`, color: `var(--text-primary)` }, children: [(0, A.jsxs)(`svg`, { className: `w-4 h-4`, viewBox: `0 0 24 24`, children: [(0, A.jsx)(`path`, { fill: `#4285F4`, d: `M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z` }), (0, A.jsx)(`path`, { fill: `#34A853`, d: `M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z` }), (0, A.jsx)(`path`, { fill: `#FBBC05`, d: `M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z` }), (0, A.jsx)(`path`, { fill: `#EA4335`, d: `M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z` })] }), (0, A.jsx)(`span`, { children: `Google Account` })] }), (0, A.jsx)(`button`, { type: `button`, onClick: t, className: `w-full py-1.5 px-3 rounded-md text-xs transition-colors cursor-pointer`, style: { color: `var(--text-muted)` }, children: `Continue as Guest (Local Storage Only)` })] }), (0, A.jsxs)(`div`, { className: `mt-4 pt-3 border-t text-center text-xs`, style: { borderColor: `var(--border-subtle)`, color: `var(--text-secondary)` }, children: [i ? `Already have an account?` : `Don't have an account?`, ` `, (0, A.jsx)(`button`, { type: `button`, onClick: () => { a(!i), d(``); }, className: `font-semibold underline cursor-pointer`, style: { color: `var(--accent-text)` }, children: i ? `Sign In` : `Create Account` })] })] }) }); }
function Oi({ onNavigateHome: e }) { return (0, A.jsxs)(`article`, { className: `max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8`, style: { color: `var(--text-primary)` }, children: [(0, A.jsx)(`div`, { children: (0, A.jsxs)(`button`, { onClick: e, type: `button`, className: `inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border transition-colors cursor-pointer`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)`, color: `var(--text-secondary)` }, children: [(0, A.jsx)(ne, { size: 14 }), (0, A.jsx)(`span`, { children: `Back to Arena Workspace` })] }) }), (0, A.jsxs)(`header`, { className: `space-y-2 border-b pb-6`, style: { borderColor: `var(--border-subtle)` }, children: [(0, A.jsxs)(`div`, { className: `flex items-center gap-2 text-xs font-mono`, style: { color: `var(--accent-text)` }, children: [(0, A.jsx)(Fe, { size: 16 }), (0, A.jsx)(`span`, { children: `LEGAL POLICY` })] }), (0, A.jsx)(`h1`, { className: `text-2xl sm:text-3xl font-extrabold tracking-tight`, children: `Privacy Policy` }), (0, A.jsx)(`p`, { className: `text-xs`, style: { color: `var(--text-muted)` }, children: `Effective Date: October 16, 2026 | Last Updated: October 16, 2026` })] }), (0, A.jsxs)(`section`, { className: `space-y-4 text-xs sm:text-sm leading-relaxed`, style: { color: `var(--text-secondary)` }, children: [(0, A.jsx)(`h2`, { className: `text-base sm:text-lg font-bold text-white tracking-tight`, style: { color: `var(--text-primary)` }, children: `1. Information We Collect` }), (0, A.jsx)(`p`, { children: `AI Arena collects only the data necessary to provide model comparison and evaluation services:` }), (0, A.jsxs)(`ul`, { className: `list-disc pl-5 space-y-1.5`, children: [(0, A.jsxs)(`li`, { children: [(0, A.jsx)(`strong`, { style: { color: `var(--text-primary)` }, children: `User Prompts & Queries:` }), ` Text submitted into the prompt composer for comparison across AI models.`] }), (0, A.jsxs)(`li`, { children: [(0, A.jsx)(`strong`, { style: { color: `var(--text-primary)` }, children: `Account Credentials (Optional):` }), ` If you choose to register an account, we collect your name, email address, and a securely salted bcrypt password hash. For Google OAuth logins, we receive your email and profile ID from Google.`] }), (0, A.jsxs)(`li`, { children: [(0, A.jsx)(`strong`, { style: { color: `var(--text-primary)` }, children: `Anonymous Visitors:` }), ` If you use the workspace without an account, your prompt history is retained only in your local browser storage (`, (0, A.jsx)(`code`, { className: `px-1 py-0.5 rounded text-xs font-mono`, style: { backgroundColor: `var(--bg-surface-elevated)` }, children: `localStorage` }), `) and is never linked to an account on our servers.`] })] })] }), (0, A.jsxs)(`section`, { className: `space-y-4 text-xs sm:text-sm leading-relaxed`, style: { color: `var(--text-secondary)` }, children: [(0, A.jsx)(`h2`, { className: `text-base sm:text-lg font-bold tracking-tight`, style: { color: `var(--text-primary)` }, children: `2. Third-Party AI Providers & Data Transmission` }), (0, A.jsx)(`p`, { children: `When you submit a query, the application routes the input payload to the following integrated providers via their official API services:` }), (0, A.jsxs)(`div`, { className: `grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1`, children: [(0, A.jsxs)(`div`, { className: `p-3.5 rounded-lg border`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsx)(`p`, { className: `font-bold text-xs`, style: { color: `var(--text-primary)` }, children: `Mistral AI` }), (0, A.jsxs)(`p`, { className: `text-xs mt-1`, style: { color: `var(--text-muted)` }, children: [`Executes Solution 1 via the `, (0, A.jsx)(`code`, { className: `font-mono`, children: `open-mistral-7b` }), ` model.`] })] }), (0, A.jsxs)(`div`, { className: `p-3.5 rounded-lg border`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsx)(`p`, { className: `font-bold text-xs`, style: { color: `var(--text-primary)` }, children: `Cohere` }), (0, A.jsxs)(`p`, { className: `text-xs mt-1`, style: { color: `var(--text-muted)` }, children: [`Executes Solution 2 via the `, (0, A.jsx)(`code`, { className: `font-mono`, children: `command-r7b-12-2024` }), ` model.`] })] }), (0, A.jsxs)(`div`, { className: `p-3.5 rounded-lg border`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsx)(`p`, { className: `font-bold text-xs`, style: { color: `var(--text-primary)` }, children: `Google DeepMind (Gemini)` }), (0, A.jsxs)(`p`, { className: `text-xs mt-1`, style: { color: `var(--text-muted)` }, children: [`Acts as the automated judge via `, (0, A.jsx)(`code`, { className: `font-mono`, children: `gemini-flash-lite-latest` }), ` using structured evaluation criteria.`] })] }), (0, A.jsxs)(`div`, { className: `p-3.5 rounded-lg border`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsx)(`p`, { className: `font-bold text-xs`, style: { color: `var(--text-primary)` }, children: `Tavily Search` }), (0, A.jsx)(`p`, { className: `text-xs mt-1`, style: { color: `var(--text-muted)` }, children: `Provides real-time search context when queries require recent technical or release information.` })] })] })] }), (0, A.jsxs)(`section`, { className: `space-y-4 text-xs sm:text-sm leading-relaxed`, style: { color: `var(--text-secondary)` }, children: [(0, A.jsx)(`h2`, { className: `text-base sm:text-lg font-bold tracking-tight`, style: { color: `var(--text-primary)` }, children: `3. Storage, Retention, and User Deletion Rights` }), (0, A.jsxs)(`ul`, { className: `list-disc pl-5 space-y-1.5`, children: [(0, A.jsxs)(`li`, { children: [(0, A.jsx)(`strong`, { style: { color: `var(--text-primary)` }, children: `Authenticated Users:` }), ` Chats and evaluations are stored in MongoDB Atlas tied to your user identifier. You can delete individual chats at any time using the delete button in the workspace sidebar.`] }), (0, A.jsxs)(`li`, { children: [(0, A.jsx)(`strong`, { style: { color: `var(--text-primary)` }, children: `Guest Users:` }), ` Data resides strictly in your browser. Clicking "Clear All" in the sidebar instantly purges all saved sessions from client storage.`] })] })] }), (0, A.jsxs)(`section`, { className: `space-y-4 text-xs sm:text-sm leading-relaxed`, style: { color: `var(--text-secondary)` }, children: [(0, A.jsx)(`h2`, { className: `text-base sm:text-lg font-bold tracking-tight`, style: { color: `var(--text-primary)` }, children: `4. Infrastructure and Security` }), (0, A.jsx)(`p`, { children: `AI Arena is hosted on Render web infrastructure with MongoDB Atlas database storage. All traffic between your browser and our backend is encrypted using standard Transport Layer Security (TLS 1.2/1.3). Passwords are never stored in plain text and are hashed using bcrypt before database insertion.` })] }), (0, A.jsxs)(`section`, { className: `space-y-4 text-xs sm:text-sm leading-relaxed border-t pt-6`, style: { borderColor: `var(--border-subtle)` }, children: [(0, A.jsx)(`h2`, { className: `text-base sm:text-lg font-bold tracking-tight`, style: { color: `var(--text-primary)` }, children: `5. Contact & Privacy Inquiries` }), (0, A.jsx)(`p`, { children: `For questions regarding data processing or account deletion requests, please contact:` }), (0, A.jsx)(`p`, { className: `font-mono text-xs p-3 rounded border`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: `[CONTACT EMAIL: TO BE PROVIDED]` })] })] }); }
function ki({ onNavigateHome: e }) { return (0, A.jsxs)(`article`, { className: `max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8`, style: { color: `var(--text-primary)` }, children: [(0, A.jsx)(`div`, { children: (0, A.jsxs)(`button`, { onClick: e, type: `button`, className: `inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border transition-colors cursor-pointer`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)`, color: `var(--text-secondary)` }, children: [(0, A.jsx)(ne, { size: 14 }), (0, A.jsx)(`span`, { children: `Back to Arena Workspace` })] }) }), (0, A.jsxs)(`header`, { className: `space-y-2 border-b pb-6`, style: { borderColor: `var(--border-subtle)` }, children: [(0, A.jsxs)(`div`, { className: `flex items-center gap-2 text-xs font-mono`, style: { color: `var(--accent-text)` }, children: [(0, A.jsx)(fe, { size: 16 }), (0, A.jsx)(`span`, { children: `TERMS OF SERVICE` })] }), (0, A.jsx)(`h1`, { className: `text-2xl sm:text-3xl font-extrabold tracking-tight`, children: `Terms and Conditions` }), (0, A.jsx)(`p`, { className: `text-xs`, style: { color: `var(--text-muted)` }, children: `Effective Date: October 16, 2026 | Last Updated: October 16, 2026` })] }), (0, A.jsxs)(`section`, { className: `space-y-4 text-xs sm:text-sm leading-relaxed`, style: { color: `var(--text-secondary)` }, children: [(0, A.jsx)(`h2`, { className: `text-base sm:text-lg font-bold tracking-tight`, style: { color: `var(--text-primary)` }, children: `1. Purpose and Acceptable Use` }), (0, A.jsx)(`p`, { children: `AI Arena provides a multi-model software evaluation environment intended for software engineers, researchers, and developers to benchmark LLM outputs and automated arbitrations.` }), (0, A.jsx)(`p`, { children: `By using this service, you agree not to submit prompts that:` }), (0, A.jsxs)(`ul`, { className: `list-disc pl-5 space-y-1`, children: [(0, A.jsx)(`li`, { children: `Violate any local, national, or international law or regulation.` }), (0, A.jsx)(`li`, { children: `Attempt to generate malicious software, exploits, or cyber-attack payloads.` }), (0, A.jsx)(`li`, { children: `Infringe upon intellectual property, privacy, or confidentiality rights of others.` }), (0, A.jsx)(`li`, { children: `Exceed reasonable rate limits or attempt denial-of-service on upstream API quotas.` })] })] }), (0, A.jsxs)(`section`, { className: `space-y-4 text-xs sm:text-sm leading-relaxed`, style: { color: `var(--text-secondary)` }, children: [(0, A.jsx)(`h2`, { className: `text-base sm:text-lg font-bold tracking-tight`, style: { color: `var(--text-primary)` }, children: `2. Nature and Limits of AI-Generated Output` }), (0, A.jsx)(`p`, { children: `Responses rendered in the workspace are generated directly by third-party artificial intelligence models (Mistral AI, Cohere) and arbitrated by Google Gemini. Automated scores and reasoning do not represent human professional engineering advice or absolute guarantees of code security, correctness, or production readiness.` }), (0, A.jsxs)(`p`, { children: [`All generated code and judge recommendations are provided `, (0, A.jsx)(`strong`, { children: `"AS IS"` }), ` without warranty of any kind. You bear sole responsibility for verifying, testing, and reviewing any code before executing it in production environments.`] })] }), (0, A.jsxs)(`section`, { className: `space-y-4 text-xs sm:text-sm leading-relaxed`, style: { color: `var(--text-secondary)` }, children: [(0, A.jsx)(`h2`, { className: `text-base sm:text-lg font-bold tracking-tight`, style: { color: `var(--text-primary)` }, children: `3. Service Availability and Rate Limits` }), (0, A.jsx)(`p`, { children: `AI Arena relies on upstream model quotas and free-tier cloud infrastructure hosted on Render. Services may occasionally encounter cold starts, momentary rate limits, or transient provider maintenance. We reserve the right to suspend or limit query access to preserve system stability.` })] }), (0, A.jsxs)(`section`, { className: `space-y-4 text-xs sm:text-sm leading-relaxed`, style: { color: `var(--text-secondary)` }, children: [(0, A.jsx)(`h2`, { className: `text-base sm:text-lg font-bold tracking-tight`, style: { color: `var(--text-primary)` }, children: `4. Limitation of Liability` }), (0, A.jsx)(`p`, { children: `To the maximum extent permitted by applicable law, AI Arena and its maintainers shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from your use of, or inability to use, the platform or any code generated thereby.` })] }), (0, A.jsxs)(`section`, { className: `space-y-4 text-xs sm:text-sm leading-relaxed border-t pt-6`, style: { borderColor: `var(--border-subtle)` }, children: [(0, A.jsx)(`h2`, { className: `text-base sm:text-lg font-bold tracking-tight`, style: { color: `var(--text-primary)` }, children: `5. Governing Law and Inquiries` }), (0, A.jsx)(`p`, { children: `These terms shall be governed by the laws of [GOVERNING JURISDICTION: TO BE SPECIFIED]. For inquiries regarding licensing or terms of use, contact:` }), (0, A.jsx)(`p`, { className: `font-mono text-xs p-3 rounded border`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: `[CONTACT EMAIL: TO BE PROVIDED]` })] })] }); }
function Ai({ onNavigate: e }) { return (0, A.jsx)(`footer`, { className: `border-t py-6 px-4 sm:px-6 text-xs transition-colors`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)`, color: `var(--text-muted)` }, children: (0, A.jsxs)(`div`, { className: `max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4`, children: [(0, A.jsxs)(`div`, { className: `flex items-center gap-3`, children: [(0, A.jsx)(`span`, { className: `font-semibold tracking-tight`, style: { color: `var(--text-primary)` }, children: `AI Arena` }), (0, A.jsx)(`span`, { className: `text-[11px]`, children: `Dual-Model LLM Benchmark & Judge Arena` })] }), (0, A.jsxs)(`nav`, { className: `flex items-center gap-6`, "aria-label": `Footer navigation`, children: [(0, A.jsx)(`button`, { onClick: () => e(`/`), className: `hover:underline cursor-pointer`, style: { color: `var(--text-secondary)` }, children: `Workspace` }), (0, A.jsx)(`button`, { onClick: () => e(`/privacy`), className: `hover:underline cursor-pointer`, style: { color: `var(--text-secondary)` }, children: `Privacy Policy` }), (0, A.jsx)(`button`, { onClick: () => e(`/terms`), className: `hover:underline cursor-pointer`, style: { color: `var(--text-secondary)` }, children: `Terms of Service` }), (0, A.jsx)(`a`, { href: `https://github.com/Suryansh10-ctrl/AI-Arena`, target: `_blank`, rel: `noopener noreferrer`, className: `hover:underline cursor-pointer`, style: { color: `var(--text-secondary)` }, children: `GitHub` })] }), (0, A.jsxs)(`div`, { className: `text-[11px] font-mono`, children: [`© `, new Date().getFullYear(), ` AI Arena`] })] }) }); }
function ji() { let [e, t] = (0, x.useState)(() => { let e = localStorage.getItem(`ai_arena_theme`); return e === `light` || e === `dark` ? e : typeof window < `u` && window.matchMedia && window.matchMedia(`(prefers-color-scheme: light)`).matches ? `light` : `dark`; }); (0, x.useEffect)(() => { let t = document.documentElement; e === `light` ? (t.classList.remove(`theme-dark`), t.classList.add(`theme-light`), t.setAttribute(`data-theme`, `light`)) : (t.classList.remove(`theme-light`), t.classList.add(`theme-dark`), t.setAttribute(`data-theme`, `dark`)), localStorage.setItem(`ai_arena_theme`, e); }, [e]); let n = () => { t(e => e === `light` ? `dark` : `light`); }, [r, i] = (0, x.useState)(() => typeof window > `u` ? `/` : window.location.pathname || `/`); (0, x.useEffect)(() => { let e = () => { i(window.location.pathname || `/`); }; return window.addEventListener(`popstate`, e), () => window.removeEventListener(`popstate`, e); }, []); let a = e => { window.location.pathname !== e && (window.history.pushState({}, ``, e), i(e), window.scrollTo(0, 0)); }, [o, s] = (0, x.useState)(() => { let e = localStorage.getItem(`ai_arena_user`); if (e)
    try {
        return JSON.parse(e);
    }
    catch (e) {
        console.error(`Error parsing saved user`, e);
    } return null; }), [c, l] = (0, x.useState)(!1); (0, x.useEffect)(() => { let e = new URLSearchParams(window.location.search), t = e.get(`token`); if (t) {
    localStorage.setItem(`token`, t), e.delete(`token`);
    let n = e.toString(), r = window.location.pathname + (n ? `?${n}` : ``);
    window.history.replaceState({}, document.title, r);
} wi.getMe().then(e => { e && e.success && e.user && s(e.user); }).catch(() => { }); }, []), (0, x.useEffect)(() => { o ? localStorage.setItem(`ai_arena_user`, JSON.stringify(o)) : localStorage.removeItem(`ai_arena_user`); }, [o]), (0, x.useEffect)(() => { o && !o.isGuest && Ei.getChats().then(e => { if (e.success && Array.isArray(e.chats) && e.chats.length > 0) {
    let t = e.chats.map(e => ({ id: e._id, title: e.title || `Benchmark Session`, createdAt: e.createdAt ? new Date(e.createdAt).getTime() : Date.now(), messages: e.messages || [] }));
    m(t), g(t[0].id);
} }).catch(e => { console.error(`Error fetching user chats from backend:`, e); }); }, [o]); let u = e => { s(e), l(!1); }, d = () => { s({ name: `Guest User`, email: `guest@ai-arena.io`, isGuest: !0 }), l(!1); }, f = async () => { try {
    await wi.logout();
}
catch (e) {
    console.error(`Logout request error:`, e);
}
finally {
    s(null);
} }, [p, m] = (0, x.useState)(() => { let e = localStorage.getItem(`ai_arena_chats_v2`); if (e)
    try {
        let t = JSON.parse(e);
        if (Array.isArray(t) && t.length > 0)
            return t;
    }
    catch (e) {
        console.error(`Failed loading saved chats from localStorage`, e);
    } return [{ id: `session-` + Date.now(), title: `New Benchmark Session`, createdAt: Date.now(), messages: [] }]; }), [h, g] = (0, x.useState)(() => { let e = localStorage.getItem(`ai_arena_active_chat_id_v2`); return e && p.some(t => t.id === e) ? e : p[0]?.id || `session-default`; }), [_, v] = (0, x.useState)(``), [y, b] = (0, x.useState)(!1), [ee, S] = (0, x.useState)(0), [C, w] = (0, x.useState)(null), [te, ne] = (0, x.useState)(!1), T = (0, x.useRef)(null), re = (0, x.useRef)(null); (0, x.useEffect)(() => { try {
    localStorage.setItem(`ai_arena_chats_v2`, JSON.stringify(p)), localStorage.setItem(`ai_arena_active_chat_id_v2`, h);
}
catch (e) {
    console.error(`Failed saving to localStorage`, e);
} }, [p, h]), (0, x.useEffect)(() => { let e = null; return y ? (S(0), e = setInterval(() => { S(e => e + 1); }, 1e3)) : S(0), () => { e && clearInterval(e); }; }, [y]), (0, x.useEffect)(() => { re.current?.scrollIntoView({ behavior: `smooth` }); }, [p, h, y]); let ie = p.find(e => e.id === h) || p[0], ae = ie ? ie.messages : [], se = () => { let e = `session-` + Date.now(), t = { id: e, title: `New Benchmark Session`, createdAt: Date.now(), messages: [] }; m(e => [t, ...e]), g(e), w(null), v(``), T.current && T.current.focus(); }, ce = (e, t) => { e.stopPropagation(), o && !o.isGuest && !t.startsWith(`session-`) && !t.startsWith(`chat-`) && Ei.deleteChat(t).catch(e => { console.error(`Error deleting chat from database:`, e); }), m(e => { let n = e.filter(e => e.id !== t); if (n.length === 0) {
    let e = `session-` + Date.now(), t = { id: e, title: `New Benchmark Session`, createdAt: Date.now(), messages: [] };
    return g(e), [t];
} return h === t && g(n[0].id), n; }); }, D = () => { localStorage.removeItem(`ai_arena_chats_v2`), se(); }, O = async (e) => { let t = (e || _).trim(); if (!t || y)
    return; b(!0), w(null); let n = h, r = n && !n.startsWith(`chat-`) && !n.startsWith(`session-`); try {
    let e = await Ti.invoke(t, r ? n : void 0), i = L(e, t);
    m(r => r.map(r => { if (r.id === n) {
        let n = [...r.messages, i], a = r.title === `New Benchmark Session` || !r.title ? t.slice(0, 36) + (t.length > 36 ? `...` : ``) : r.title;
        return { ...r, id: e.savedChatId || r.id, title: a, messages: n };
    } return r; })), e.savedChatId && n !== e.savedChatId && g(e.savedChatId), v(``);
}
catch (e) {
    console.error(`Error communicating with AI Arena backend:`, e);
    let n = e?.response?.status === 502 || e?.response?.status === 504 ? `Gateway Error (502/504): The Render backend server may be waking up or rebooting. Please wait a moment and retry.` : e?.response?.data?.message || e?.message || `Could not communicate with the backend server.`;
    w({ message: n, failedQuery: t }), v(t);
}
finally {
    b(!1);
} }; return r === `/privacy` ? (0, A.jsxs)(`div`, { className: `min-h-screen flex flex-col`, style: { backgroundColor: `var(--bg-canvas)` }, children: [(0, A.jsx)(Mi, { user: o, theme: e, onToggleTheme: n, onOpenAuth: () => l(!0), onLogout: f, onNavigate: a }), (0, A.jsx)(`main`, { id: `main-content`, className: `flex-1 pt-16`, children: (0, A.jsx)(Oi, { onNavigateHome: () => a(`/`) }) }), (0, A.jsx)(Ai, { onNavigate: a })] }) : r === `/terms` ? (0, A.jsxs)(`div`, { className: `min-h-screen flex flex-col`, style: { backgroundColor: `var(--bg-canvas)` }, children: [(0, A.jsx)(Mi, { user: o, theme: e, onToggleTheme: n, onOpenAuth: () => l(!0), onLogout: f, onNavigate: a }), (0, A.jsx)(`main`, { id: `main-content`, className: `flex-1 pt-16`, children: (0, A.jsx)(ki, { onNavigateHome: () => a(`/`) }) }), (0, A.jsx)(Ai, { onNavigate: a })] }) : (0, A.jsxs)(`div`, { className: `min-h-screen flex flex-col`, style: { backgroundColor: `var(--bg-canvas)`, color: `var(--text-primary)` }, children: [(0, A.jsx)(`a`, { href: `#main-content`, className: `skip-link`, children: `Skip to main content` }), (0, A.jsx)(Mi, { user: o, theme: e, onToggleTheme: n, onOpenAuth: () => l(!0), onLogout: f, onNavigate: a, onToggleSidebar: () => ne(!te) }), (0, A.jsxs)(`div`, { className: `flex flex-1 pt-14`, children: [te && (0, A.jsxs)(`div`, { className: `md:hidden fixed inset-0 z-50 flex`, children: [(0, A.jsx)(`div`, { onClick: () => ne(!1), className: `fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity` }), (0, A.jsxs)(`aside`, { className: `relative w-72 max-w-[85vw] border-r p-4 flex flex-col h-full z-50 overflow-y-auto`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsxs)(`div`, { className: `flex items-center justify-between pb-3 mb-3 border-b`, style: { borderColor: `var(--border-subtle)` }, children: [(0, A.jsx)(`span`, { className: `font-bold text-xs uppercase tracking-wider`, style: { color: `var(--text-secondary)` }, children: `Benchmark Sessions` }), (0, A.jsx)(`button`, { onClick: () => ne(!1), className: `p-1 rounded text-slate-400 hover:text-white cursor-pointer`, "aria-label": `Close sidebar`, children: (0, A.jsx)(qe, { size: 16 }) })] }), (0, A.jsx)(Ni, { chats: p, activeChatId: h, onSelectChat: e => { g(e), ne(!1); }, onNewChat: () => { se(), ne(!1); }, onDeleteChat: ce, onClearAll: D })] })] }), (0, A.jsx)(`aside`, { className: `fixed left-0 top-14 bottom-0 w-64 border-r p-3.5 hidden md:flex flex-col z-40 overflow-y-auto`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: (0, A.jsx)(Ni, { chats: p, activeChatId: h, onSelectChat: e => g(e), onNewChat: se, onDeleteChat: ce, onClearAll: D }) }), (0, A.jsxs)(`main`, { id: `main-content`, className: `flex-1 md:ml-64 px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto w-full flex flex-col justify-between`, tabIndex: -1, children: [(0, A.jsxs)(`div`, { className: `space-y-8 pb-36`, children: [ae.length === 0 ? (0, A.jsx)(Pi, { onSelectPreset: e => { v(e), T.current && T.current.focus(); } }) : ae.map((e, t) => (0, A.jsx)(Fi, { turn: e, index: t }, t)), y && (0, A.jsxs)(`div`, { role: `status`, "aria-live": `polite`, className: `p-5 rounded-lg border flex flex-col items-center justify-center space-y-2 text-center my-6`, style: { backgroundColor: `var(--bg-surface-elevated)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsxs)(`div`, { className: `flex items-center gap-2 text-xs font-medium`, style: { color: `var(--accent-text)` }, children: [(0, A.jsx)(oe, { size: 16, className: `animate-spin` }), (0, A.jsx)(`span`, { children: ee < 10 ? `Dispatching prompts to Mistral 7B & Cohere Command in parallel...` : ee < 25 ? `Generating responses and arbitrating via Gemini Judge...` : `Waking up backend instances (Render free-tier cold start in progress)...` })] }), (0, A.jsxs)(`p`, { className: `text-[11px]`, style: { color: `var(--text-muted)` }, children: [`Elapsed time: `, ee, `s. Real evaluations execute against upstream provider quotas.`] })] }), C && (0, A.jsxs)(`div`, { role: `alert`, className: `p-4 rounded-lg border flex items-start justify-between gap-3 my-4`, style: { backgroundColor: `var(--status-error-bg)`, borderColor: `var(--status-error)`, color: `var(--text-primary)` }, children: [(0, A.jsxs)(`div`, { className: `flex items-start gap-2.5`, children: [(0, A.jsx)(E, { size: 18, className: `text-red-500 mt-0.5 shrink-0` }), (0, A.jsxs)(`div`, { children: [(0, A.jsx)(`h4`, { className: `text-xs font-semibold text-red-500`, children: `Benchmark Execution Error` }), (0, A.jsx)(`p`, { className: `text-xs mt-0.5`, style: { color: `var(--text-secondary)` }, children: C.message }), (0, A.jsx)(`p`, { className: `text-[11px] mt-1`, style: { color: `var(--text-muted)` }, children: `Your prompt was preserved below so you can retry without retyping.` })] })] }), (0, A.jsxs)(`button`, { type: `button`, onClick: () => O(C.failedQuery), className: `px-3 py-1.5 rounded text-xs font-medium border flex items-center gap-1.5 shrink-0 cursor-pointer`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)`, color: `var(--text-primary)` }, children: [(0, A.jsx)(ke, { size: 13 }), (0, A.jsx)(`span`, { children: `Retry` })] })] }), (0, A.jsx)(`div`, { ref: re })] }), (0, A.jsx)(`div`, { className: `fixed bottom-0 left-0 md:left-64 right-0 border-t p-3.5 z-40`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: (0, A.jsx)(`div`, { className: `max-w-4xl mx-auto`, children: (0, A.jsxs)(`form`, { onSubmit: e => { e.preventDefault(), O(); }, className: `relative rounded-lg border transition-all focus-within:ring-2`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsx)(`label`, { htmlFor: `prompt-composer-input`, className: `sr-only`, children: `Prompt composer` }), (0, A.jsx)(`textarea`, { id: `prompt-composer-input`, ref: T, value: _, onChange: e => v(e.target.value), onKeyDown: e => { e.key === `Enter` && !e.shiftKey && (e.preventDefault(), O()); }, placeholder: `Enter a coding problem, architectural question, or algorithm to benchmark...`, disabled: y, rows: 2, className: `w-full bg-transparent px-3.5 pt-3 pb-10 text-xs sm:text-sm outline-none resize-none font-sans`, style: { color: `var(--text-primary)` } }), (0, A.jsxs)(`div`, { className: `absolute bottom-2 left-3 right-2 flex items-center justify-between pointer-events-none`, children: [(0, A.jsxs)(`span`, { className: `text-[11px] font-mono`, style: { color: `var(--text-muted)` }, children: [`Press `, (0, A.jsx)(`kbd`, { className: `px-1 py-0.5 rounded border text-[10px]`, style: { borderColor: `var(--border-subtle)` }, children: `Enter` }), ` to submit, `, (0, A.jsx)(`kbd`, { className: `px-1 py-0.5 rounded border text-[10px]`, style: { borderColor: `var(--border-subtle)` }, children: `Shift+Enter` }), ` for new line`] }), (0, A.jsxs)(`button`, { type: `submit`, disabled: y || !_.trim(), className: `pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-white transition-opacity disabled:opacity-40 cursor-pointer`, style: { backgroundColor: `var(--accent)` }, "aria-label": `Submit prompt to models`, children: [(0, A.jsx)(`span`, { children: y ? `Running...` : `Submit` }), (0, A.jsx)(Ne, { size: 13 })] })] })] }) }) })] })] }), (0, A.jsx)(Ai, { onNavigate: a }), c && (0, A.jsx)(Di, { onLogin: u, onGuestLogin: d, onCancel: () => l(!1) })] }); }
function Mi({ user: e, theme: t, onToggleTheme: n, onOpenAuth: r, onLogout: i, onNavigate: a, onToggleSidebar: o }) { return (0, A.jsxs)(`header`, { className: `fixed top-0 left-0 right-0 h-14 border-b z-50 flex items-center justify-between px-4 sm:px-6 transition-colors`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsxs)(`div`, { className: `flex items-center gap-3`, children: [o && (0, A.jsx)(`button`, { onClick: o, type: `button`, className: `p-1.5 rounded-md text-slate-400 hover:text-white md:hidden cursor-pointer`, "aria-label": `Toggle sessions menu`, children: (0, A.jsx)(Ce, { size: 18 }) }), (0, A.jsxs)(`button`, { onClick: () => a(`/`), className: `flex items-center gap-2.5 text-left cursor-pointer border-0 bg-transparent p-0`, children: [(0, A.jsx)(`div`, { className: `w-7 h-7 rounded-md flex items-center justify-center font-bold text-white text-xs`, style: { backgroundColor: `var(--accent)` }, children: `AA` }), (0, A.jsx)(`div`, { children: (0, A.jsx)(`span`, { className: `text-sm font-bold tracking-tight block`, style: { color: `var(--text-primary)` }, children: `AI Arena` }) })] }), (0, A.jsxs)(`div`, { className: `hidden lg:flex items-center gap-2.5 ml-4 px-2.5 py-1 rounded-md border text-[11px] font-mono`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)`, color: `var(--text-muted)` }, children: [(0, A.jsxs)(`span`, { className: `flex items-center gap-1.5`, children: [(0, A.jsx)(`span`, { className: `w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse` }), (0, A.jsx)(`span`, { children: `Mistral 7B` })] }), (0, A.jsx)(`span`, { children: `vs` }), (0, A.jsxs)(`span`, { className: `flex items-center gap-1.5`, children: [(0, A.jsx)(`span`, { className: `w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse` }), (0, A.jsx)(`span`, { children: `Cohere Command` })] }), (0, A.jsx)(`span`, { children: `|` }), (0, A.jsxs)(`span`, { className: `flex items-center gap-1.5`, children: [(0, A.jsx)(je, { size: 11, style: { color: `var(--model-judge-badge)` } }), (0, A.jsx)(`span`, { children: `Judge: Gemini Flash` })] })] })] }), (0, A.jsxs)(`div`, { className: `flex items-center gap-2.5`, children: [(0, A.jsx)(`button`, { onClick: n, type: `button`, className: `p-1.5 rounded-md border text-xs transition-colors cursor-pointer`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)`, color: `var(--text-secondary)` }, title: t === `light` ? `Switch to Dark Mode` : `Switch to Light Mode`, "aria-label": t === `light` ? `Switch to Dark Mode` : `Switch to Light Mode`, children: t === `light` ? (0, A.jsx)(Te, { size: 15 }) : (0, A.jsx)(ze, { size: 15 }) }), e ? (0, A.jsxs)(`div`, { className: `flex items-center gap-2 pl-2 border-l`, style: { borderColor: `var(--border-subtle)` }, children: [(0, A.jsxs)(`div`, { className: `flex items-center gap-1.5`, title: e.email, children: [(0, A.jsx)(`div`, { className: `w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white uppercase`, style: { backgroundColor: `var(--accent)` }, children: e.name ? e.name.charAt(0) : `U` }), (0, A.jsx)(`span`, { className: `hidden sm:inline text-xs font-medium max-w-[120px] truncate`, style: { color: `var(--text-primary)` }, children: e.name })] }), (0, A.jsx)(`button`, { onClick: i, type: `button`, className: `p-1.5 rounded-md hover:bg-red-500/10 text-slate-400 hover:text-red-500 transition-colors cursor-pointer`, title: `Sign Out`, "aria-label": `Sign Out`, children: (0, A.jsx)(ye, { size: 15 }) })] }) : (0, A.jsxs)(`button`, { onClick: r, type: `button`, className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)`, color: `var(--text-primary)` }, children: [(0, A.jsx)(_e, { size: 13 }), (0, A.jsx)(`span`, { children: `Sign In` })] })] })] }); }
function Ni({ chats: e, activeChatId: t, onSelectChat: n, onNewChat: r, onDeleteChat: i, onClearAll: a }) { return (0, A.jsxs)(`div`, { className: `flex flex-col h-full justify-between`, children: [(0, A.jsxs)(`div`, { className: `space-y-4`, children: [(0, A.jsxs)(`button`, { onClick: r, type: `button`, className: `w-full flex items-center justify-center gap-2 py-2 px-3 rounded-md text-xs font-semibold text-white transition-opacity cursor-pointer shadow-xs`, style: { backgroundColor: `var(--accent)` }, children: [(0, A.jsx)(De, { size: 15 }), (0, A.jsx)(`span`, { children: `New Benchmark` })] }), (0, A.jsxs)(`div`, { className: `space-y-1`, children: [(0, A.jsxs)(`div`, { className: `flex items-center justify-between px-1 mb-1`, children: [(0, A.jsx)(`span`, { className: `text-[11px] font-mono uppercase tracking-wider`, style: { color: `var(--text-muted)` }, children: `History` }), e.length > 0 && (0, A.jsx)(`button`, { onClick: a, type: `button`, className: `text-[10px] hover:underline cursor-pointer`, style: { color: `var(--text-muted)` }, children: `Clear` })] }), (0, A.jsx)(`div`, { className: `space-y-1`, children: e.map(e => { let r = e.id === t; return (0, A.jsxs)(`div`, { onClick: () => n(e.id), className: `group flex items-center justify-between px-2.5 py-2 rounded-md text-xs cursor-pointer border transition-colors ${r ? `font-semibold` : ``}`, style: { backgroundColor: r ? `var(--bg-surface-elevated)` : `transparent`, borderColor: r ? `var(--accent)` : `transparent`, color: r ? `var(--text-primary)` : `var(--text-secondary)` }, children: [(0, A.jsx)(`span`, { className: `truncate pr-2`, children: e.title || `Untitled Session` }), (0, A.jsx)(`button`, { onClick: t => i(t, e.id), type: `button`, className: `opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 rounded transition-opacity cursor-pointer`, title: `Delete session`, "aria-label": `Delete session`, children: (0, A.jsx)(Ve, { size: 13 }) })] }, e.id); }) })] })] }), (0, A.jsxs)(`div`, { className: `p-3 rounded-md border text-[11px] space-y-1 mt-6`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)`, color: `var(--text-muted)` }, children: [(0, A.jsxs)(`p`, { className: `font-semibold text-xs flex items-center gap-1.5`, style: { color: `var(--text-primary)` }, children: [(0, A.jsx)(k, { size: 13 }), (0, A.jsx)(`span`, { children: `Execution Specs` })] }), (0, A.jsx)(`p`, { className: `leading-relaxed`, children: `Prompts execute concurrently via Mistral AI and Cohere, judged objectively by Google Gemini.` })] })] }); }
function Pi({ onSelectPreset: e }) { return (0, A.jsxs)(`div`, { className: `py-12 sm:py-16 text-center max-w-2xl mx-auto space-y-6`, children: [(0, A.jsx)(`div`, { className: `w-12 h-12 rounded-xl mx-auto flex items-center justify-center border`, style: { backgroundColor: `var(--bg-surface-elevated)`, borderColor: `var(--border-subtle)`, color: `var(--accent-text)` }, children: (0, A.jsx)(je, { size: 24 }) }), (0, A.jsxs)(`div`, { className: `space-y-2`, children: [(0, A.jsx)(`h2`, { className: `text-xl sm:text-2xl font-bold tracking-tight`, style: { color: `var(--text-primary)` }, children: `Dual-Model Benchmark & Judge Arena` }), (0, A.jsx)(`p`, { className: `text-xs sm:text-sm leading-relaxed`, style: { color: `var(--text-secondary)` }, children: `Submit any engineering query or coding challenge. Two models draft markdown implementations in parallel, followed by structured evaluation from Google Gemini.` })] }), (0, A.jsxs)(`div`, { className: `pt-4 text-left space-y-2.5`, children: [(0, A.jsx)(`p`, { className: `text-xs font-mono uppercase tracking-wider`, style: { color: `var(--text-muted)` }, children: `Sample Technical Prompts:` }), (0, A.jsx)(`div`, { className: `space-y-2`, children: [`Write a Python function to check if a string is a palindrome with full test cases.`, `Implement a thread-safe LRU cache in TypeScript with O(1) get and put operations.`, `Explain the differences between PostgreSQL B-tree and GIN indexes with query examples.`].map((t, n) => (0, A.jsxs)(`button`, { onClick: () => e(t), type: `button`, className: `w-full text-left p-3 rounded-md border text-xs transition-colors cursor-pointer flex items-center justify-between group`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)`, color: `var(--text-secondary)` }, children: [(0, A.jsx)(`span`, { className: `font-mono pr-3`, children: t }), (0, A.jsx)(Le, { size: 14, className: `shrink-0 text-slate-400 group-hover:text-blue-500 transition-colors` })] }, n)) })] })] }); }
function Fi({ turn: e, index: t }) { let { problem: n, solution_1: r, solution_2: i, judgeResult: a } = e; return (0, A.jsxs)(`section`, { className: `space-y-6 pt-4 border-b pb-8 last:border-b-0`, style: { borderColor: `var(--border-subtle)` }, children: [(0, A.jsxs)(`div`, { className: `p-4 rounded-lg border space-y-1`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsx)(`div`, { className: `flex items-center justify-between text-xs font-mono`, style: { color: `var(--text-muted)` }, children: (0, A.jsxs)(`span`, { children: [`User Query #`, t + 1] }) }), (0, A.jsx)(`p`, { className: `text-sm font-semibold`, style: { color: `var(--text-primary)` }, children: n })] }), (0, A.jsxs)(`div`, { className: `grid grid-cols-1 lg:grid-cols-2 gap-4`, children: [(0, A.jsx)(Ii, { modelName: `Mistral 7B (Open-Mistral-7B)`, roleBadge: `Solution 1`, badgeColor: `var(--model-mistral-badge)`, content: r, score: a?.solution_1_score }), (0, A.jsx)(Ii, { modelName: `Cohere Command (R7B-12-2024)`, roleBadge: `Solution 2`, badgeColor: `var(--model-cohere-badge)`, content: i, score: a?.solution_2_score })] }), a && (0, A.jsx)(I, { judgeResult: a })] }); }
function Ii({ modelName: e, roleBadge: t, content: n, score: r }) { let [i, a] = (0, x.useState)(!1); return (0, A.jsx)(`div`, { className: `p-5 rounded-lg border flex flex-col justify-between space-y-3`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: (0, A.jsxs)(`div`, { children: [(0, A.jsxs)(`div`, { className: `flex items-center justify-between pb-3 mb-3 border-b`, style: { borderColor: `var(--border-subtle)` }, children: [(0, A.jsx)(`div`, { className: `space-y-0.5`, children: (0, A.jsxs)(`div`, { className: `flex items-center gap-2`, children: [(0, A.jsx)(`span`, { className: `text-xs font-bold`, style: { color: `var(--text-primary)` }, children: t }), (0, A.jsx)(`span`, { className: `text-[11px] font-mono`, style: { color: `var(--text-muted)` }, children: e })] }) }), (0, A.jsxs)(`div`, { className: `flex items-center gap-2`, children: [r !== void 0 && (0, A.jsxs)(`span`, { className: `px-2 py-0.5 rounded text-xs font-mono font-bold border`, style: { backgroundColor: `var(--bg-surface-elevated)`, borderColor: `var(--border-subtle)`, color: `var(--text-primary)` }, children: [r, ` / 10`] }), (0, A.jsx)(`button`, { onClick: () => { try {
                                    navigator.clipboard.writeText(n), a(!0), setTimeout(() => a(!1), 2e3);
                                }
                                catch { } }, type: `button`, className: `p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer border`, style: { backgroundColor: `var(--bg-surface-elevated)`, borderColor: `var(--border-subtle)` }, title: `Copy entire response`, "aria-label": `Copy entire response`, children: i ? (0, A.jsx)(re, { size: 13, className: `text-emerald-500` }) : (0, A.jsx)(ce, { size: 13 }) })] })] }), (0, A.jsx)(`div`, { className: `max-h-[520px] overflow-y-auto pr-1`, children: (0, A.jsx)(Ze, { content: n }) })] }) }); }
function I({ judgeResult: e }) { let { solution_1_score: t, solution_2_score: n, solution_1_reasoning: r, solution_2_reasoning: i } = e; return (0, A.jsxs)(`div`, { className: `p-5 rounded-lg border space-y-4`, style: { backgroundColor: `var(--bg-surface)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsxs)(`div`, { className: `flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3`, style: { borderColor: `var(--border-subtle)` }, children: [(0, A.jsxs)(`div`, { className: `flex items-center gap-2`, children: [(0, A.jsx)(je, { size: 18, style: { color: `var(--model-judge-badge)` } }), (0, A.jsxs)(`div`, { children: [(0, A.jsx)(`h3`, { className: `text-sm font-bold tracking-tight`, style: { color: `var(--text-primary)` }, children: `Gemini Judge Verdict` }), (0, A.jsx)(`p`, { className: `text-[11px]`, style: { color: `var(--text-muted)` }, children: `Structured evaluation using simplicity, correctness, and readability criteria.` })] })] }), (0, A.jsx)(`div`, { className: `px-2.5 py-1 rounded text-xs font-mono font-semibold self-start sm:self-auto border`, style: { backgroundColor: `var(--bg-surface-elevated)`, borderColor: `var(--border-subtle)`, color: `var(--accent-text)` }, children: t === n ? `Verdict: Tied Scores` : `Winner: ${t > n ? `Solution 1 (Mistral 7B)` : `Solution 2 (Cohere Command)`}` })] }), (0, A.jsxs)(`div`, { className: `grid grid-cols-1 sm:grid-cols-2 gap-4`, children: [(0, A.jsxs)(`div`, { className: `p-3.5 rounded-md border space-y-1.5`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsxs)(`div`, { className: `flex items-center justify-between text-xs`, children: [(0, A.jsx)(`span`, { className: `font-semibold`, style: { color: `var(--text-primary)` }, children: `Solution 1 (Mistral)` }), (0, A.jsxs)(`span`, { className: `font-mono font-bold`, children: [t, ` / 10`] })] }), (0, A.jsx)(`p`, { className: `text-xs leading-relaxed`, style: { color: `var(--text-secondary)` }, children: r })] }), (0, A.jsxs)(`div`, { className: `p-3.5 rounded-md border space-y-1.5`, style: { backgroundColor: `var(--bg-canvas)`, borderColor: `var(--border-subtle)` }, children: [(0, A.jsxs)(`div`, { className: `flex items-center justify-between text-xs`, children: [(0, A.jsx)(`span`, { className: `font-semibold`, style: { color: `var(--text-primary)` }, children: `Solution 2 (Cohere)` }), (0, A.jsxs)(`span`, { className: `font-mono font-bold`, children: [n, ` / 10`] })] }), (0, A.jsx)(`p`, { className: `text-xs leading-relaxed`, style: { color: `var(--text-secondary)` }, children: i })] })] })] }); }
function L(e, t) { if (!e)
    return { problem: t, solution_1: ``, solution_2: ``, judgeResult: null }; let n = e; if (n.result && (n = n.result), n.response && (n = n.response), n.output && (n = n.output), typeof n == `string`)
    try {
        n = JSON.parse(n);
    }
    catch {
        return { problem: t, solution_1: n, solution_2: n, judgeResult: null };
    } let r = n.solution_1 ?? n.solution1 ?? n.sol1 ?? ``, i = n.solution_2 ?? n.solution2 ?? n.sol2 ?? ``, a = n.judgeResult ?? n.judge_result ?? n.judge ?? null; return { problem: n.problem || t, solution_1: typeof r == `object` ? JSON.stringify(r, null, 2) : String(r), solution_2: typeof i == `object` ? JSON.stringify(i, null, 2) : String(i), judgeResult: a }; }
(0, Xe.createRoot)(document.getElementById(`root`)).render((0, A.jsx)(x.StrictMode, { children: (0, A.jsx)(ji, {}) }));
export {};
//# sourceMappingURL=index-Ba1Nz4Fc.js.map