// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var r = window, a = r.ShadowRoot && (r.ShadyCSS === void 0 || r.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, i = Symbol(), l = new WeakMap, c = class {
    constructor(s, t, o){
        if (this._$cssResult$ = !0, o !== i) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = s, this.t = t;
    }
    get styleSheet() {
        let s = this.o, t = this.t;
        if (a && s === void 0) {
            let o = t !== void 0 && t.length === 1;
            o && (s = l.get(t)), s === void 0 && ((this.o = s = new CSSStyleSheet).replaceSync(this.cssText), o && l.set(t, s));
        }
        return s;
    }
    toString() {
        return this.cssText;
    }
}, h = (e)=>new c(typeof e == "string" ? e : e + "", void 0, i), d = (e, ...s)=>{
    let t = e.length === 1 ? e[0] : s.reduce((o, S, u)=>o + ((n)=>{
            if (n._$cssResult$ === !0) return n.cssText;
            if (typeof n == "number") return n;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(S) + e[u + 1], e[0]);
    return new c(t, e, i);
}, p = (e, s)=>{
    a ? e.adoptedStyleSheets = s.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : s.forEach((t)=>{
        let o = document.createElement("style"), S = r.litNonce;
        S !== void 0 && o.setAttribute("nonce", S), o.textContent = t.cssText, e.appendChild(o);
    });
}, y = a ? (e)=>e : (e)=>e instanceof CSSStyleSheet ? ((s)=>{
        let t = "";
        for (let o of s.cssRules)t += o.cssText;
        return h(t);
    })(e) : e;
var l1, h1 = window, u = h1.trustedTypes, $ = u ? u.emptyScript : "", v = h1.reactiveElementPolyfillSupport, c1 = {
    toAttribute (r, t) {
        switch(t){
            case Boolean:
                r = r ? $ : null;
                break;
            case Object:
            case Array:
                r = r == null ? r : JSON.stringify(r);
        }
        return r;
    },
    fromAttribute (r, t) {
        let e = r;
        switch(t){
            case Boolean:
                e = r !== null;
                break;
            case Number:
                e = r === null ? null : Number(r);
                break;
            case Object:
            case Array:
                try {
                    e = JSON.parse(r);
                } catch  {
                    e = null;
                }
        }
        return e;
    }
}, E = (r, t)=>t !== r && (t == t || r == r), d1 = {
    attribute: !0,
    type: String,
    converter: c1,
    reflect: !1,
    hasChanged: E
}, a1 = class extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
    }
    static addInitializer(t) {
        var e;
        this.finalize(), ((e = this.h) !== null && e !== void 0 ? e : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        let t = [];
        return this.elementProperties.forEach((e, i)=>{
            let s = this._$Ep(i, e);
            s !== void 0 && (this._$Ev.set(s, i), t.push(s));
        }), t;
    }
    static createProperty(t, e = d1) {
        if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
            let i = typeof t == "symbol" ? Symbol() : "__" + t, s = this.getPropertyDescriptor(t, i, e);
            s !== void 0 && Object.defineProperty(this.prototype, t, s);
        }
    }
    static getPropertyDescriptor(t, e, i) {
        return {
            get () {
                return this[e];
            },
            set (s) {
                let o = this[t];
                this[e] = s, this.requestUpdate(t, o, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || d1;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        let t = Object.getPrototypeOf(this);
        if (t.finalize(), t.h !== void 0 && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            let e = this.properties, i = [
                ...Object.getOwnPropertyNames(e),
                ...Object.getOwnPropertySymbols(e)
            ];
            for (let s of i)this.createProperty(s, e[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(t) {
        let e = [];
        if (Array.isArray(t)) {
            let i = new Set(t.flat(1 / 0).reverse());
            for (let s of i)e.unshift(y(s));
        } else t !== void 0 && e.push(y(t));
        return e;
    }
    static _$Ep(t, e) {
        let i = e.attribute;
        return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
    }
    u() {
        var t;
        this._$E_ = new Promise((e)=>this.enableUpdating = e), this._$AL = new Map, this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e)=>e(this));
    }
    addController(t) {
        var e, i;
        ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) === null || i === void 0 || i.call(t));
    }
    removeController(t) {
        var e;
        (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, e)=>{
            this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
        });
    }
    createRenderRoot() {
        var t;
        let e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return p(e, this.constructor.elementStyles), e;
    }
    connectedCallback() {
        var t;
        this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e)=>{
            var i;
            return (i = e.hostConnected) === null || i === void 0 ? void 0 : i.call(e);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        (t = this._$ES) === null || t === void 0 || t.forEach((e)=>{
            var i;
            return (i = e.hostDisconnected) === null || i === void 0 ? void 0 : i.call(e);
        });
    }
    attributeChangedCallback(t, e, i) {
        this._$AK(t, i);
    }
    _$EO(t, e, i = d1) {
        var s;
        let o = this.constructor._$Ep(t, i);
        if (o !== void 0 && i.reflect === !0) {
            let n = (((s = i.converter) === null || s === void 0 ? void 0 : s.toAttribute) !== void 0 ? i.converter : c1).toAttribute(e, i.type);
            this._$El = t, n == null ? this.removeAttribute(o) : this.setAttribute(o, n), this._$El = null;
        }
    }
    _$AK(t, e) {
        var i;
        let s = this.constructor, o = s._$Ev.get(t);
        if (o !== void 0 && this._$El !== o) {
            let n = s.getPropertyOptions(o), _ = typeof n.converter == "function" ? {
                fromAttribute: n.converter
            } : ((i = n.converter) === null || i === void 0 ? void 0 : i.fromAttribute) !== void 0 ? n.converter : c1;
            this._$El = o, this[o] = _.fromAttribute(e, n.type), this._$El = null;
        }
    }
    requestUpdate(t, e, i) {
        let s = !0;
        t !== void 0 && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || E)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), i.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(t, i))) : s = !1), !this.isUpdatePending && s && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (e) {
            Promise.reject(e);
        }
        let t = this.scheduleUpdate();
        return t != null && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((s, o)=>this[o] = s), this._$Ei = void 0);
        let e = !1, i = this._$AL;
        try {
            e = this.shouldUpdate(i), e ? (this.willUpdate(i), (t = this._$ES) === null || t === void 0 || t.forEach((s)=>{
                var o;
                return (o = s.hostUpdate) === null || o === void 0 ? void 0 : o.call(s);
            }), this.update(i)) : this._$Ek();
        } catch (s) {
            throw e = !1, this._$Ek(), s;
        }
        e && this._$AE(i);
    }
    willUpdate(t) {}
    _$AE(t) {
        var e;
        (e = this._$ES) === null || e === void 0 || e.forEach((i)=>{
            var s;
            return (s = i.hostUpdated) === null || s === void 0 ? void 0 : s.call(i);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$EC !== void 0 && (this._$EC.forEach((e, i)=>this._$EO(i, this[i], e)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
};
a1.finalized = !0, a1.elementProperties = new Map, a1.elementStyles = [], a1.shadowRootOptions = {
    mode: "open"
}, v?.({
    ReactiveElement: a1
}), ((l1 = h1.reactiveElementVersions) !== null && l1 !== void 0 ? l1 : h1.reactiveElementVersions = []).push("1.5.0");
const mod = {
    CSSResult: c,
    ReactiveElement: a1,
    adoptStyles: p,
    css: d,
    defaultConverter: c1,
    getCompatibleStyle: y,
    notEqual: E,
    supportsAdoptingStyleSheets: a,
    unsafeCSS: h
};
var R, S = window, H = S.trustedTypes, O = H ? H.createPolicy("lit-html", {
    createHTML: (r)=>r
}) : void 0, _ = `lit$${(Math.random() + "").slice(9)}$`, U = "?" + _, K = `<${U}>`, x = document, T = (r = "")=>x.createComment(r), b = (r)=>r === null || typeof r != "object" && typeof r != "function", V = Array.isArray, F = (r)=>V(r) || typeof r?.[Symbol.iterator] == "function", N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, j = /-->/g, D = />/g, p1 = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), W = /'/g, k = /"/g, q = /^(?:script|style|textarea|title)$/i, G = (r)=>(t, ...e)=>({
            _$litType$: r,
            strings: t,
            values: e
        }), X = G(1), Y = G(2), C = Symbol.for("lit-noChange"), u1 = Symbol.for("lit-nothing"), z = new WeakMap, y1 = x.createTreeWalker(x, 129, null, !1), J = (r, t)=>{
    let e = r.length - 1, i = [], s, o = t === 2 ? "<svg>" : "", n = N;
    for(let l = 0; l < e; l++){
        let h = r[l], c, $, a = -1, A = 0;
        for(; A < h.length && (n.lastIndex = A, $ = n.exec(h), $ !== null);)A = n.lastIndex, n === N ? $[1] === "!--" ? n = j : $[1] !== void 0 ? n = D : $[2] !== void 0 ? (q.test($[2]) && (s = RegExp("</" + $[2], "g")), n = p1) : $[3] !== void 0 && (n = p1) : n === p1 ? $[0] === ">" ? (n = s ?? N, a = -1) : $[1] === void 0 ? a = -2 : (a = n.lastIndex - $[2].length, c = $[1], n = $[3] === void 0 ? p1 : $[3] === '"' ? k : W) : n === k || n === W ? n = p1 : n === j || n === D ? n = N : (n = p1, s = void 0);
        let w = n === p1 && r[l + 1].startsWith("/>") ? " " : "";
        o += n === N ? h + K : a >= 0 ? (i.push(c), h.slice(0, a) + "$lit$" + h.slice(a) + _ + w) : h + _ + (a === -2 ? (i.push(void 0), l) : w);
    }
    let d = o + (r[e] || "<?>") + (t === 2 ? "</svg>" : "");
    if (!Array.isArray(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        O !== void 0 ? O.createHTML(d) : d,
        i
    ];
}, g = class {
    constructor({ strings: t , _$litType$: e  }, i){
        let s;
        this.parts = [];
        let o = 0, n = 0, d = t.length - 1, l = this.parts, [h, c] = J(t, e);
        if (this.el = g.createElement(h, i), y1.currentNode = this.el.content, e === 2) {
            let $ = this.el.content, a = $.firstChild;
            a.remove(), $.append(...a.childNodes);
        }
        for(; (s = y1.nextNode()) !== null && l.length < d;){
            if (s.nodeType === 1) {
                if (s.hasAttributes()) {
                    let $1 = [];
                    for (let a1 of s.getAttributeNames())if (a1.endsWith("$lit$") || a1.startsWith(_)) {
                        let A = c[n++];
                        if ($1.push(a1), A !== void 0) {
                            let w = s.getAttribute(A.toLowerCase() + "$lit$").split(_), M = /([.?@])?(.*)/.exec(A);
                            l.push({
                                type: 1,
                                index: o,
                                name: M[2],
                                strings: w,
                                ctor: M[1] === "." ? I : M[1] === "?" ? B : M[1] === "@" ? L : f
                            });
                        } else l.push({
                            type: 6,
                            index: o
                        });
                    }
                    for (let a2 of $1)s.removeAttribute(a2);
                }
                if (q.test(s.tagName)) {
                    let $2 = s.textContent.split(_), a3 = $2.length - 1;
                    if (a3 > 0) {
                        s.textContent = H ? H.emptyScript : "";
                        for(let A1 = 0; A1 < a3; A1++)s.append($2[A1], T()), y1.nextNode(), l.push({
                            type: 2,
                            index: ++o
                        });
                        s.append($2[a3], T());
                    }
                }
            } else if (s.nodeType === 8) if (s.data === U) l.push({
                type: 2,
                index: o
            });
            else {
                let $3 = -1;
                for(; ($3 = s.data.indexOf(_, $3 + 1)) !== -1;)l.push({
                    type: 7,
                    index: o
                }), $3 += _.length - 1;
            }
            o++;
        }
    }
    static createElement(t, e) {
        let i = x.createElement("template");
        return i.innerHTML = t, i;
    }
};
function m(r, t, e = r, i) {
    var s, o, n, d;
    if (t === C) return t;
    let l = i !== void 0 ? (s = e._$Co) === null || s === void 0 ? void 0 : s[i] : e._$Cl, h = b(t) ? void 0 : t._$litDirective$;
    return l?.constructor !== h && ((o = l?._$AO) === null || o === void 0 || o.call(l, !1), h === void 0 ? l = void 0 : (l = new h(r), l._$AT(r, e, i)), i !== void 0 ? ((n = (d = e)._$Co) !== null && n !== void 0 ? n : d._$Co = [])[i] = l : e._$Cl = l), l !== void 0 && (t = m(r, l._$AS(r, t.values), l, i)), t;
}
var E1 = class {
    constructor(t, e){
        this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    v(t) {
        var e;
        let { el: { content: i  } , parts: s  } = this._$AD, o = ((e = t?.creationScope) !== null && e !== void 0 ? e : x).importNode(i, !0);
        y1.currentNode = o;
        let n = y1.nextNode(), d = 0, l = 0, h = s[0];
        for(; h !== void 0;){
            if (d === h.index) {
                let c;
                h.type === 2 ? c = new v1(n, n.nextSibling, this, t) : h.type === 1 ? c = new h.ctor(n, h.name, h.strings, this, t) : h.type === 6 && (c = new P(n, this, t)), this.u.push(c), h = s[++l];
            }
            d !== h?.index && (n = y1.nextNode(), d++);
        }
        return o;
    }
    p(t) {
        let e = 0;
        for (let i of this.u)i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
    }
}, v1 = class {
    constructor(t, e, i, s){
        var o;
        this.type = 2, this._$AH = u1, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cm = (o = s?.isConnected) === null || o === void 0 || o;
    }
    get _$AU() {
        var t, e;
        return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cm;
    }
    get parentNode() {
        let t = this._$AA.parentNode, e = this._$AM;
        return e !== void 0 && t.nodeType === 11 && (t = e.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, e = this) {
        t = m(this, t, e), b(t) ? t === u1 || t == null || t === "" ? (this._$AH !== u1 && this._$AR(), this._$AH = u1) : t !== this._$AH && t !== C && this.g(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : F(t) ? this.k(t) : this.g(t);
    }
    O(t, e = this._$AB) {
        return this._$AA.parentNode.insertBefore(t, e);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    g(t) {
        this._$AH !== u1 && b(this._$AH) ? this._$AA.nextSibling.data = t : this.T(x.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        var e;
        let { values: i , _$litType$: s  } = t, o = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = g.createElement(s.h, this.options)), s);
        if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === o) this._$AH.p(i);
        else {
            let n = new E1(o, this), d = n.v(this.options);
            n.p(i), this.T(d), this._$AH = n;
        }
    }
    _$AC(t) {
        let e = z.get(t.strings);
        return e === void 0 && z.set(t.strings, e = new g(t)), e;
    }
    k(t) {
        V(this._$AH) || (this._$AH = [], this._$AR());
        let e = this._$AH, i, s = 0;
        for (let o of t)s === e.length ? e.push(i = new v1(this.O(T()), this.O(T()), this, this.options)) : i = e[s], i._$AI(o), s++;
        s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
    }
    _$AR(t = this._$AA.nextSibling, e) {
        var i;
        for((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e); t && t !== this._$AB;){
            let s = t.nextSibling;
            t.remove(), t = s;
        }
    }
    setConnected(t) {
        var e;
        this._$AM === void 0 && (this._$Cm = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
    }
}, f = class {
    constructor(t, e, i, s, o){
        this.type = 1, this._$AH = u1, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = o, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String), this.strings = i) : this._$AH = u1;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, e = this, i, s) {
        let o = this.strings, n = !1;
        if (o === void 0) t = m(this, t, e, 0), n = !b(t) || t !== this._$AH && t !== C, n && (this._$AH = t);
        else {
            let d = t, l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = m(this, d[i + l], e, l), h === C && (h = this._$AH[l]), n || (n = !b(h) || h !== this._$AH[l]), h === u1 ? t = u1 : t !== u1 && (t += (h ?? "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !s && this.j(t);
    }
    j(t) {
        t === u1 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}, I = class extends f {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === u1 ? void 0 : t;
    }
}, Q = H ? H.emptyScript : "", B = class extends f {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== u1 ? this.element.setAttribute(this.name, Q) : this.element.removeAttribute(this.name);
    }
}, L = class extends f {
    constructor(t, e, i, s, o){
        super(t, e, i, s, o), this.type = 5;
    }
    _$AI(t, e = this) {
        var i;
        if ((t = (i = m(this, t, e, 0)) !== null && i !== void 0 ? i : u1) === C) return;
        let s = this._$AH, o = t === u1 && s !== u1 || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== u1 && (s === u1 || o);
        o && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var e, i;
        typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && i !== void 0 ? i : this.element, t) : this._$AH.handleEvent(t);
    }
}, P = class {
    constructor(t, e, i){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        m(this, t);
    }
}, tt = {
    P: "$lit$",
    A: _,
    M: U,
    C: 1,
    L: J,
    R: E1,
    D: F,
    V: m,
    I: v1,
    H: f,
    N: B,
    U: L,
    B: I,
    F: P
}, Z = S.litHtmlPolyfillSupport;
Z?.(g, v1), ((R = S.litHtmlVersions) !== null && R !== void 0 ? R : S.litHtmlVersions = []).push("2.5.0");
var et = (r, t, e)=>{
    var i, s;
    let o = (i = e?.renderBefore) !== null && i !== void 0 ? i : t, n = o._$litPart$;
    if (n === void 0) {
        let d = (s = e?.renderBefore) !== null && s !== void 0 ? s : null;
        o._$litPart$ = n = new v1(t.insertBefore(T(), d), d, void 0, e ?? {});
    }
    return n._$AI(r), n;
};
const mod1 = {
    _$LH: tt,
    html: X,
    noChange: C,
    nothing: u1,
    render: et,
    svg: Y
};
var p2 = (e, t, r)=>{
    Object.defineProperty(t, r, e);
}, y2 = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), s = ({ finisher: e , descriptor: t  })=>(r, i)=>{
        var n;
        if (i === void 0) {
            let o = (n = r.originalKey) !== null && n !== void 0 ? n : r.key, d = t != null ? {
                kind: "method",
                placement: "prototype",
                key: o,
                descriptor: t(r.key)
            } : {
                ...r,
                key: o
            };
            return e != null && (d.finisher = function(c) {
                e(c, o);
            }), d;
        }
        {
            let o1 = r.constructor;
            t !== void 0 && Object.defineProperty(r, i, t(i)), e?.(o1, i);
        }
    };
export { s as decorateProperty, p2 as legacyPrototypeMethod, y2 as standardPrototypeMethod };
var c2 = (s)=>(t)=>typeof t == "function" ? ((n, e)=>(customElements.define(n, e), e))(s, t) : ((n, e)=>{
            let { kind: m , elements: o  } = e;
            return {
                kind: m,
                elements: o,
                finisher (i) {
                    customElements.define(n, i);
                }
            };
        })(s, t);
export { c2 as customElement };
var c3 = (t, i)=>i.kind === "method" && i.descriptor && !("value" in i.descriptor) ? {
        ...i,
        finisher (r) {
            r.createProperty(i.key, t);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: i.key,
        initializer () {
            typeof i.initializer == "function" && (this[i.key] = i.initializer.call(this));
        },
        finisher (r) {
            r.createProperty(i.key, t);
        }
    };
function y3(t) {
    return (i, r)=>r !== void 0 ? ((e, o, n)=>{
            o.constructor.createProperty(n, e);
        })(t, i, r) : c3(t, i);
}
export { y3 as property };
function o(t) {
    return y3({
        ...t,
        state: !0
    });
}
export { o as state };
function i1(e) {
    return s({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}
export { i1 as eventOptions };
function s1(t, l) {
    return s({
        descriptor: (n)=>{
            let i = {
                get () {
                    var o, r;
                    return (r = (o = this.renderRoot) === null || o === void 0 ? void 0 : o.querySelector(t)) !== null && r !== void 0 ? r : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (l) {
                let o = typeof n == "symbol" ? Symbol() : "__" + n;
                i.get = function() {
                    var r, e;
                    return this[o] === void 0 && (this[o] = (e = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(t)) !== null && e !== void 0 ? e : null), this[o];
                };
            }
            return i;
        }
    });
}
export { s1 as query };
function u2(o) {
    return s({
        descriptor: (l)=>({
                get () {
                    var r, e;
                    return (e = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelectorAll(o)) !== null && e !== void 0 ? e : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}
export { u2 as queryAll };
function n(e) {
    return s({
        descriptor: (o)=>({
                async get () {
                    var r;
                    return await this.updateComplete, (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}
export { n as queryAsync };
var r1, u3 = ((r1 = window.HTMLSlotElement) === null || r1 === void 0 ? void 0 : r1.prototype.assignedElements) != null ? (e, o)=>e.assignedElements(o) : (e, o)=>e.assignedNodes(o).filter((t)=>t.nodeType === Node.ELEMENT_NODE);
function E2(e) {
    let { slot: o , selector: t  } = e ?? {};
    return s({
        descriptor: (c)=>({
                get () {
                    var n;
                    let i = "slot" + (o ? `[name=${o}]` : ":not([name])"), l = (n = this.renderRoot) === null || n === void 0 ? void 0 : n.querySelector(i), s = l != null ? u3(l, e) : [];
                    return t ? s.filter((d)=>d.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}
export { E2 as queryAssignedElements };
function p3(e, s1, l) {
    let o, t = e;
    return typeof e == "object" ? (t = e.slot, o = e) : o = {
        flatten: s1
    }, l ? E2({
        slot: t,
        flatten: s1,
        selector: l
    }) : s({
        descriptor: (c)=>({
                get () {
                    var r, n;
                    let a = "slot" + (t ? `[name=${t}]` : ":not([name])"), i = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(a);
                    return (n = i?.assignedNodes(o)) !== null && n !== void 0 ? n : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}
export { p3 as queryAssignedNodes };
var m1 = Object.defineProperty;
var x1 = Object.getOwnPropertyDescriptor;
var E3 = Object.getOwnPropertyNames;
var v2 = Object.prototype.hasOwnProperty;
var $1 = (n, o)=>{
    for(var r in o)m1(n, r, {
        get: o[r],
        enumerable: !0
    });
}, p4 = (n, o, r, l)=>{
    if (o && typeof o == "object" || typeof o == "function") for (let s of E3(o))!v2.call(n, s) && s !== r && m1(n, s, {
        get: ()=>o[s],
        enumerable: !(l = x1(o, s)) || l.enumerable
    });
    return n;
}, t = (n, o, r)=>(p4(n, o, "default"), r && p4(r, o, "default"));
var e = {};
$1(e, {
    LitElement: ()=>i2,
    UpdatingElement: ()=>f1,
    _$LE: ()=>u4
});
t(e, mod);
t(e, mod1);
var a2, d2, f1 = a1, i2 = class extends a1 {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var o, r;
        let l = super.createRenderRoot();
        return (o = (r = this.renderOptions).renderBefore) !== null && o !== void 0 || (r.renderBefore = l.firstChild), l;
    }
    update(o) {
        let r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(o), this._$Do = et(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var o;
        super.connectedCallback(), (o = this._$Do) === null || o === void 0 || o.setConnected(!0);
    }
    disconnectedCallback() {
        var o;
        super.disconnectedCallback(), (o = this._$Do) === null || o === void 0 || o.setConnected(!1);
    }
    render() {
        return C;
    }
};
i2.finalized = !0, i2._$litElement$ = !0, (a2 = globalThis.litElementHydrateSupport) === null || a2 === void 0 || a2.call(globalThis, {
    LitElement: i2
});
var c4 = globalThis.litElementPolyfillSupport;
c4?.({
    LitElement: i2
});
var u4 = {
    _$AK: (n, o, r)=>{
        n._$AK(o, r);
    },
    _$AL: (n)=>n._$AL
};
((d2 = globalThis.litElementVersions) !== null && d2 !== void 0 ? d2 : globalThis.litElementVersions = []).push("3.2.2");
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");
export { i2 as LitElement, f1 as UpdatingElement, u4 as _$LE };
var e1 = !1;
export { e1 as isServer };
