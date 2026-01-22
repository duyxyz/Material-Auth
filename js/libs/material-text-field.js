(function () {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.
  
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
  
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$3 = t => (e, o) => { void 0 !== o ? o.addInitializer(() => { customElements.define(t, e); }) : customElements.define(t, e); };

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$2 = globalThis, e$6 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$7 = new WeakMap; let n$5 = class n { constructor(t, e, o) { if (this._$cssResult$ = true, o !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead."); this.cssText = t, this.t = e; } get styleSheet() { let t = this.o; const s = this.t; if (e$6 && void 0 === t) { const e = void 0 !== s && 1 === s.length; e && (t = o$7.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && o$7.set(s, t)); } return t } toString() { return this.cssText } }; const r$5 = t => new n$5("string" == typeof t ? t : t + "", void 0, s$2), i$6 = (t, ...e) => { const o = 1 === t.length ? t[0] : e.reduce((e, s, o) => e + (t => { if (true === t._$cssResult$) return t.cssText; if ("number" == typeof t) return t; throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.") })(s) + t[o + 1], t[0]); return new n$5(o, t, s$2) }, S$1 = (s, o) => { if (e$6) s.adoptedStyleSheets = o.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet); else for (const e of o) { const o = document.createElement("style"), n = t$2.litNonce; void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o); } }, c$2 = e$6 ? t => t : t => t instanceof CSSStyleSheet ? (t => { let e = ""; for (const s of t.cssRules) e += s.cssText; return r$5(e) })(t) : t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const { is: i$5, defineProperty: e$5, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$4, getOwnPropertySymbols: o$6, getPrototypeOf: n$4 } = Object, a$2 = globalThis, c$1 = a$2.trustedTypes, l$3 = c$1 ? c$1.emptyScript : "", p$2 = a$2.reactiveElementPolyfillSupport, d$1 = (t, s) => t, u$2 = { toAttribute(t, s) { switch (s) { case Boolean: t = t ? l$3 : null; break; case Object: case Array: t = null == t ? t : JSON.stringify(t); }return t }, fromAttribute(t, s) { let i = t; switch (s) { case Boolean: i = null !== t; break; case Number: i = null === t ? null : Number(t); break; case Object: case Array: try { i = JSON.parse(t); } catch (t) { i = null; } }return i } }, f$1 = (t, s) => !i$5(t, s), b$1 = { attribute: true, type: String, converter: u$2, reflect: false, useDefault: false, hasChanged: f$1 }; Symbol.metadata ??= Symbol("metadata"), a$2.litPropertyMetadata ??= new WeakMap; let y$1 = class y extends HTMLElement { static addInitializer(t) { this._$Ei(), (this.l ??= []).push(t); } static get observedAttributes() { return this.finalize(), this._$Eh && [...this._$Eh.keys()] } static createProperty(t, s = b$1) { if (s.state && (s.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = true), this.elementProperties.set(t, s), !s.noAccessor) { const i = Symbol(), h = this.getPropertyDescriptor(t, i, s); void 0 !== h && e$5(this.prototype, t, h); } } static getPropertyDescriptor(t, s, i) { const { get: e, set: r } = h$1(this.prototype, t) ?? { get() { return this[s] }, set(t) { this[s] = t; } }; return { get: e, set(s) { const h = e?.call(this); r?.call(this, s), this.requestUpdate(t, h, i); }, configurable: true, enumerable: true } } static getPropertyOptions(t) { return this.elementProperties.get(t) ?? b$1 } static _$Ei() { if (this.hasOwnProperty(d$1("elementProperties"))) return; const t = n$4(this); t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties); } static finalize() { if (this.hasOwnProperty(d$1("finalized"))) return; if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) { const t = this.properties, s = [...r$4(t), ...o$6(t)]; for (const i of s) this.createProperty(i, t[i]); } const t = this[Symbol.metadata]; if (null !== t) { const s = litPropertyMetadata.get(t); if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i); } this._$Eh = new Map; for (const [t, s] of this.elementProperties) { const i = this._$Eu(t, s); void 0 !== i && this._$Eh.set(i, t); } this.elementStyles = this.finalizeStyles(this.styles); } static finalizeStyles(s) { const i = []; if (Array.isArray(s)) { const e = new Set(s.flat(1 / 0).reverse()); for (const s of e) i.unshift(c$2(s)); } else void 0 !== s && i.push(c$2(s)); return i } static _$Eu(t, s) { const i = s.attribute; return false === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0 } constructor() { super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev(); } _$Ev() { this._$ES = new Promise(t => this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(t => t(this)); } addController(t) { (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.(); } removeController(t) { this._$EO?.delete(t); } _$E_() { const t = new Map, s = this.constructor.elementProperties; for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]); t.size > 0 && (this._$Ep = t); } createRenderRoot() { const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions); return S$1(t, this.constructor.elementStyles), t } connectedCallback() { this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach(t => t.hostConnected?.()); } enableUpdating(t) { } disconnectedCallback() { this._$EO?.forEach(t => t.hostDisconnected?.()); } attributeChangedCallback(t, s, i) { this._$AK(t, i); } _$ET(t, s) { const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i); if (void 0 !== e && true === i.reflect) { const h = (void 0 !== i.converter?.toAttribute ? i.converter : u$2).toAttribute(s, i.type); this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null; } } _$AK(t, s) { const i = this.constructor, e = i._$Eh.get(t); if (void 0 !== e && this._$Em !== e) { const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? { fromAttribute: t.converter } : void 0 !== t.converter?.fromAttribute ? t.converter : u$2; this._$Em = e; const r = h.fromAttribute(s, t.type); this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null; } } requestUpdate(t, s, i, e = false, h) { if (void 0 !== t) { const r = this.constructor; if (false === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? f$1)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return; this.C(t, s, i); } false === this.isUpdatePending && (this._$ES = this._$EP()); } C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) { i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), true !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), true === e && this._$Em !== t && (this._$Eq ??= new Set).add(t)); } async _$EP() { this.isUpdatePending = true; try { await this._$ES; } catch (t) { Promise.reject(t); } const t = this.scheduleUpdate(); return null != t && await t, !this.isUpdatePending } scheduleUpdate() { return this.performUpdate() } performUpdate() { if (!this.isUpdatePending) return; if (!this.hasUpdated) { if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) { for (const [t, s] of this._$Ep) this[t] = s; this._$Ep = void 0; } const t = this.constructor.elementProperties; if (t.size > 0) for (const [s, i] of t) { const { wrapped: t } = i, e = this[s]; true !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e); } } let t = false; const s = this._$AL; try { t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach(t => t.hostUpdate?.()), this.update(s)) : this._$EM(); } catch (s) { throw t = false, this._$EM(), s } t && this._$AE(s); } willUpdate(t) { } _$AE(t) { this._$EO?.forEach(t => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t)), this.updated(t); } _$EM() { this._$AL = new Map, this.isUpdatePending = false; } get updateComplete() { return this.getUpdateComplete() } getUpdateComplete() { return this._$ES } shouldUpdate(t) { return true } update(t) { this._$Eq &&= this._$Eq.forEach(t => this._$ET(t, this[t])), this._$EM(); } updated(t) { } firstUpdated(t) { } }; y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = new Map, y$1[d$1("finalized")] = new Map, p$2?.({ ReactiveElement: y$1 }), (a$2.reactiveElementVersions ??= []).push("2.1.2");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o$5 = { attribute: true, type: String, converter: u$2, reflect: false, hasChanged: f$1 }, r$3 = (t = o$5, e, r) => { const { kind: n, metadata: i } = r; let s = globalThis.litPropertyMetadata.get(i); if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), "setter" === n && ((t = Object.create(t)).wrapped = true), s.set(r.name, t), "accessor" === n) { const { name: o } = r; return { set(r) { const n = e.get.call(this); e.set.call(this, r), this.requestUpdate(o, n, t, true, r); }, init(e) { return void 0 !== e && this.C(o, void 0, t, e), e } } } if ("setter" === n) { const { name: o } = r; return function (r) { const n = this[o]; e.call(this, r), this.requestUpdate(o, n, t, true, r); } } throw Error("Unsupported decorator location: " + n) }; function n$3(t) { return (e, o) => "object" == typeof o ? r$3(t, e, o) : ((t, e, o) => { const r = e.hasOwnProperty(o); return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0 })(t, e, o) }

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function r$2(r) { return n$3({ ...r, state: true, attribute: false }) }

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const e$4 = (e, t, c) => (c.configurable = true, c.enumerable = true, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function e$3(e, r) { return (n, s, i) => { const o = t => t.renderRoot?.querySelector(e) ?? null; return e$4(n, s, { get() { return o(this) } }) } }

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function o$4(o) { return (e, n) => { const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])"); return e$4(e, n, { get() { const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? []; return void 0 === s ? e : e.filter(t => t.matches(s)) } }) } }

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$1 = globalThis, i$4 = t => t, s$1 = t$1.trustedTypes, e$2 = s$1 ? s$1.createPolicy("lit-html", { createHTML: t => t }) : void 0, h = "$lit$", o$3 = `lit$${Math.random().toFixed(9).slice(2)}$`, n$2 = "?" + o$3, r$1 = `<${n$2}>`, l$2 = document, c = () => l$2.createComment(""), a$1 = t => null === t || "object" != typeof t && "function" != typeof t, u$1 = Array.isArray, d = t => u$1(t) || "function" == typeof t?.[Symbol.iterator], f = "[ \t\n\f\r]", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m$1 = />/g, p$1 = RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, x = t => (i, ...s) => ({ _$litType$: t, strings: i, values: s }), b = x(1), E = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), C = new WeakMap, P = l$2.createTreeWalker(l$2, 129); function V(t, i) { if (!u$1(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array"); return void 0 !== e$2 ? e$2.createHTML(i) : i } const N = (t, i) => { const s = t.length - 1, e = []; let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = v; for (let i = 0; i < s; i++) { const s = t[i]; let a, u, d = -1, f = 0; for (; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);)f = c.lastIndex, c === v ? "!--" === u[1] ? c = _ : void 0 !== u[1] ? c = m$1 : void 0 !== u[2] ? (y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = p$1) : void 0 !== u[3] && (c = p$1) : c === p$1 ? ">" === u[0] ? (c = n ?? v, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? p$1 : '"' === u[3] ? $ : g) : c === $ || c === g ? c = p$1 : c === _ || c === m$1 ? c = v : (c = p$1, n = void 0); const x = c === p$1 && t[i + 1].startsWith("/>") ? " " : ""; l += c === v ? s + r$1 : d >= 0 ? (e.push(a), s.slice(0, d) + h + s.slice(d) + o$3 + x) : s + o$3 + (-2 === d ? i : x); } return [V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")), e] }; class S { constructor({ strings: t, _$litType$: i }, e) { let r; this.parts = []; let l = 0, a = 0; const u = t.length - 1, d = this.parts, [f, v] = N(t, i); if (this.el = S.createElement(f, e), P.currentNode = this.el.content, 2 === i || 3 === i) { const t = this.el.content.firstChild; t.replaceWith(...t.childNodes); } for (; null !== (r = P.nextNode()) && d.length < u;) { if (1 === r.nodeType) { if (r.hasAttributes()) for (const t of r.getAttributeNames()) if (t.endsWith(h)) { const i = v[a++], s = r.getAttribute(t).split(o$3), e = /([.?@])?(.*)/.exec(i); d.push({ type: 1, index: l, name: e[2], strings: s, ctor: "." === e[1] ? I : "?" === e[1] ? L : "@" === e[1] ? z : H }), r.removeAttribute(t); } else t.startsWith(o$3) && (d.push({ type: 6, index: l }), r.removeAttribute(t)); if (y.test(r.tagName)) { const t = r.textContent.split(o$3), i = t.length - 1; if (i > 0) { r.textContent = s$1 ? s$1.emptyScript : ""; for (let s = 0; s < i; s++)r.append(t[s], c()), P.nextNode(), d.push({ type: 2, index: ++l }); r.append(t[i], c()); } } } else if (8 === r.nodeType) if (r.data === n$2) d.push({ type: 2, index: l }); else { let t = -1; for (; -1 !== (t = r.data.indexOf(o$3, t + 1));)d.push({ type: 7, index: l }), t += o$3.length - 1; } l++; } } static createElement(t, i) { const s = l$2.createElement("template"); return s.innerHTML = t, s } } function M(t, i, s = t, e) { if (i === E) return i; let h = void 0 !== e ? s._$Co?.[e] : s._$Cl; const o = a$1(i) ? void 0 : i._$litDirective$; return h?.constructor !== o && (h?._$AO?.(false), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = M(t, h._$AS(t, i.values), h, e)), i } class R { constructor(t, i) { this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i; } get parentNode() { return this._$AM.parentNode } get _$AU() { return this._$AM._$AU } u(t) { const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? l$2).importNode(i, true); P.currentNode = e; let h = P.nextNode(), o = 0, n = 0, r = s[0]; for (; void 0 !== r;) { if (o === r.index) { let i; 2 === r.type ? i = new k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new Z(h, this, t)), this._$AV.push(i), r = s[++n]; } o !== r?.index && (h = P.nextNode(), o++); } return P.currentNode = l$2, e } p(t) { let i = 0; for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++; } } class k { get _$AU() { return this._$AM?._$AU ?? this._$Cv } constructor(t, i, s, e) { this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? true; } get parentNode() { let t = this._$AA.parentNode; const i = this._$AM; return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t } get startNode() { return this._$AA } get endNode() { return this._$AB } _$AI(t, i = this) { t = M(this, t, i), a$1(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== E && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : d(t) ? this.k(t) : this._(t); } O(t) { return this._$AA.parentNode.insertBefore(t, this._$AB) } T(t) { this._$AH !== t && (this._$AR(), this._$AH = this.O(t)); } _(t) { this._$AH !== A && a$1(this._$AH) ? this._$AA.nextSibling.data = t : this.T(l$2.createTextNode(t)), this._$AH = t; } $(t) { const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = S.createElement(V(s.h, s.h[0]), this.options)), s); if (this._$AH?._$AD === e) this._$AH.p(i); else { const t = new R(e, this), s = t.u(this.options); t.p(i), this.T(s), this._$AH = t; } } _$AC(t) { let i = C.get(t.strings); return void 0 === i && C.set(t.strings, i = new S(t)), i } k(t) { u$1(this._$AH) || (this._$AH = [], this._$AR()); const i = this._$AH; let s, e = 0; for (const h of t) e === i.length ? i.push(s = new k(this.O(c()), this.O(c()), this, this.options)) : s = i[e], s._$AI(h), e++; e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e); } _$AR(t = this._$AA.nextSibling, s) { for (this._$AP?.(false, true, s); t !== this._$AB;) { const s = i$4(t).nextSibling; i$4(t).remove(), t = s; } } setConnected(t) { void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t)); } } class H { get tagName() { return this.element.tagName } get _$AU() { return this._$AM._$AU } constructor(t, i, s, e, h) { this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = A; } _$AI(t, i = this, s, e) { const h = this.strings; let o = false; if (void 0 === h) t = M(this, t, i, 0), o = !a$1(t) || t !== this._$AH && t !== E, o && (this._$AH = t); else { const e = t; let n, r; for (t = h[0], n = 0; n < h.length - 1; n++)r = M(this, e[s + n], i, n), r === E && (r = this._$AH[n]), o ||= !a$1(r) || r !== this._$AH[n], r === A ? t = A : t !== A && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r; } o && !e && this.j(t); } j(t) { t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? ""); } } class I extends H { constructor() { super(...arguments), this.type = 3; } j(t) { this.element[this.name] = t === A ? void 0 : t; } } class L extends H { constructor() { super(...arguments), this.type = 4; } j(t) { this.element.toggleAttribute(this.name, !!t && t !== A); } } class z extends H { constructor(t, i, s, e, h) { super(t, i, s, e, h), this.type = 5; } _$AI(t, i = this) { if ((t = M(this, t, i, 0) ?? A) === E) return; const s = this._$AH, e = t === A && s !== A || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== A && (s === A || e); e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t; } handleEvent(t) { "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t); } } class Z { constructor(t, i, s) { this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s; } get _$AU() { return this._$AM._$AU } _$AI(t) { M(this, t); } } const B = t$1.litHtmlPolyfillSupport; B?.(S, k), (t$1.litHtmlVersions ??= []).push("3.3.2"); const D = (t, i, s) => { const e = s?.renderBefore ?? i; let h = e._$litPart$; if (void 0 === h) { const t = s?.renderBefore ?? null; e._$litPart$ = h = new k(i.insertBefore(c(), t), t, void 0, s ?? {}); } return h._$AI(t), h };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const s = globalThis; let i$3 = class i extends y$1 { constructor() { super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0; } createRenderRoot() { const t = super.createRenderRoot(); return this.renderOptions.renderBefore ??= t.firstChild, t } update(t) { const r = this.render(); this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = D(r, this.renderRoot, this.renderOptions); } connectedCallback() { super.connectedCallback(), this._$Do?.setConnected(true); } disconnectedCallback() { super.disconnectedCallback(), this._$Do?.setConnected(false); } render() { return E } }; i$3._$litElement$ = true, i$3["finalized"] = true, s.litElementHydrateSupport?.({ LitElement: i$3 }); const o$2 = s.litElementPolyfillSupport; o$2?.({ LitElement: i$3 }); (s.litElementVersions ??= []).push("4.2.2");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t = { ATTRIBUTE: 1, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4 }, e$1 = t => (...e) => ({ _$litDirective$: t, values: e }); let i$2 = class i { constructor(t) { } get _$AU() { return this._$AM._$AU } _$AT(t, e, i) { this._$Ct = t, this._$AM = e, this._$Ci = i; } _$AS(t, e) { return this.update(t, e) } update(t, e) { return this.render(...e) } };

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e = e$1(class extends i$2 { constructor(t$1) { if (super(t$1), t$1.type !== t.ATTRIBUTE || "class" !== t$1.name || t$1.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.") } render(t) { return " " + Object.keys(t).filter(s => t[s]).join(" ") + " " } update(s, [i]) { if (void 0 === this.st) { this.st = new Set, void 0 !== s.strings && (this.nt = new Set(s.strings.join(" ").split(/\s/).filter(t => "" !== t))); for (const t in i) i[t] && !this.nt?.has(t) && this.st.add(t); return this.render(i) } const r = s.element.classList; for (const t of this.st) t in i || (r.remove(t), this.st.delete(t)); for (const t in i) { const s = !!i[t]; s === this.st.has(t) || this.nt?.has(t) || (s ? (r.add(t), this.st.add(t)) : (r.remove(t), this.st.delete(t))); } return E } });

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * Easing functions to use for web animations.
     *
     * **NOTE:** `EASING.EMPHASIZED` is approximated with unknown accuracy.
     *
     * TODO(b/241113345): replace with tokens
     */
    const EASING = {
        STANDARD: 'cubic-bezier(0.2, 0, 0, 1)'
    };

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * A field component.
     */
    class Field extends i$3 {
        constructor() {
            super(...arguments);
            this.disabled = false;
            this.error = false;
            this.focused = false;
            this.label = '';
            this.noAsterisk = false;
            this.populated = false;
            this.required = false;
            this.resizable = false;
            this.supportingText = '';
            this.errorText = '';
            this.count = -1;
            this.max = -1;
            /**
             * Whether or not the field has leading content.
             */
            this.hasStart = false;
            /**
             * Whether or not the field has trailing content.
             */
            this.hasEnd = false;
            this.isAnimating = false;
            /**
             * When set to true, the error text's `role="alert"` will be removed, then
             * re-added after an animation frame. This will re-announce an error message
             * to screen readers.
             */
            this.refreshErrorAlert = false;
            this.disableTransitions = false;
        }
        get counterText() {
            // Count and max are typed as number, but can be set to null when Lit removes
            // their attributes. These getters coerce back to a number for calculations.
            const countAsNumber = this.count ?? -1;
            const maxAsNumber = this.max ?? -1;
            // Counter does not show if count is negative, or max is negative or 0.
            if (countAsNumber < 0 || maxAsNumber <= 0) {
                return '';
            }
            return `${countAsNumber} / ${maxAsNumber}`;
        }
        get supportingOrErrorText() {
            return this.error && this.errorText ? this.errorText : this.supportingText;
        }
        /**
         * Re-announces the field's error supporting text to screen readers.
         *
         * Error text announces to screen readers anytime it is visible and changes.
         * Use the method to re-announce the message when the text has not changed,
         * but announcement is still needed (such as for `reportValidity()`).
         */
        reannounceError() {
            this.refreshErrorAlert = true;
        }
        update(props) {
            // Client-side property updates
            const isDisabledChanging = props.has('disabled') && props.get('disabled') !== undefined;
            if (isDisabledChanging) {
                this.disableTransitions = true;
            }
            // When disabling, remove focus styles if focused.
            if (this.disabled && this.focused) {
                props.set('focused', true);
                this.focused = false;
            }
            // Animate if focused or populated change.
            this.animateLabelIfNeeded({
                wasFocused: props.get('focused'),
                wasPopulated: props.get('populated'),
            });
            super.update(props);
        }
        render() {
            const floatingLabel = this.renderLabel(/*isFloating*/ true);
            const restingLabel = this.renderLabel(/*isFloating*/ false);
            const outline = this.renderOutline?.(floatingLabel);
            const classes = {
                'disabled': this.disabled,
                'disable-transitions': this.disableTransitions,
                'error': this.error && !this.disabled,
                'focused': this.focused,
                'with-start': this.hasStart,
                'with-end': this.hasEnd,
                'populated': this.populated,
                'resizable': this.resizable,
                'required': this.required,
                'no-label': !this.label,
            };
            return b`
      <div class="field ${e(classes)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          <slot name="container"></slot>
          ${this.renderStateLayer?.()} ${this.renderIndicator?.()} ${outline}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${restingLabel} ${outline ? A : floatingLabel}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `;
        }
        updated(changed) {
            if (changed.has('supportingText') ||
                changed.has('errorText') ||
                changed.has('count') ||
                changed.has('max')) {
                this.updateSlottedAriaDescribedBy();
            }
            if (this.refreshErrorAlert) {
                // The past render cycle removed the role="alert" from the error message.
                // Re-add it after an animation frame to re-announce the error.
                requestAnimationFrame(() => {
                    this.refreshErrorAlert = false;
                });
            }
            if (this.disableTransitions) {
                requestAnimationFrame(() => {
                    this.disableTransitions = false;
                });
            }
        }
        renderSupportingText() {
            const { supportingOrErrorText, counterText } = this;
            if (!supportingOrErrorText && !counterText) {
                return A;
            }
            // Always render the supporting text span so that our `space-around`
            // container puts the counter at the end.
            const start = b`<span>${supportingOrErrorText}</span>`;
            // Conditionally render counter so we don't render the extra `gap`.
            // TODO(b/244473435): add aria-label and announcements
            const end = counterText
                ? b`<span class="counter">${counterText}</span>`
                : A;
            // Announce if there is an error and error text visible.
            // If refreshErrorAlert is true, do not announce. This will remove the
            // role="alert" attribute. Another render cycle will happen after an
            // animation frame to re-add the role.
            const shouldErrorAnnounce = this.error && this.errorText && !this.refreshErrorAlert;
            const role = shouldErrorAnnounce ? 'alert' : A;
            return b`
      <div class="supporting-text" role=${role}>${start}${end}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `;
        }
        updateSlottedAriaDescribedBy() {
            for (const element of this.slottedAriaDescribedBy) {
                D(b`${this.supportingOrErrorText} ${this.counterText}`, element);
                element.setAttribute('hidden', '');
            }
        }
        renderLabel(isFloating) {
            if (!this.label) {
                return A;
            }
            let visible;
            if (isFloating) {
                // Floating label is visible when focused/populated or when animating.
                visible = this.focused || this.populated || this.isAnimating;
            }
            else {
                // Resting label is visible when unfocused. It is never visible while
                // animating.
                visible = !this.focused && !this.populated && !this.isAnimating;
            }
            const classes = {
                'hidden': !visible,
                'floating': isFloating,
                'resting': !isFloating,
            };
            // Add '*' if a label is present and the field is required
            const labelText = `${this.label}${this.required && !this.noAsterisk ? '*' : ''}`;
            return b`
      <span class="label ${e(classes)}" aria-hidden=${!visible}
        >${labelText}</span
      >
    `;
        }
        animateLabelIfNeeded({ wasFocused, wasPopulated, }) {
            if (!this.label) {
                return;
            }
            wasFocused ??= this.focused;
            wasPopulated ??= this.populated;
            const wasFloating = wasFocused || wasPopulated;
            const shouldBeFloating = this.focused || this.populated;
            if (wasFloating === shouldBeFloating) {
                return;
            }
            this.isAnimating = true;
            this.labelAnimation?.cancel();
            // Only one label is visible at a time for clearer text rendering.
            // The floating label is visible and used during animation. At the end of
            // the animation, it will either remain visible (if floating) or hide and
            // the resting label will be shown.
            //
            // We don't use forward filling because if the dimensions of the text field
            // change (leading icon removed, density changes, etc), then the animation
            // will be inaccurate.
            //
            // Re-calculating the animation each time will prevent any visual glitches
            // from appearing.
            // TODO(b/241113345): use animation tokens
            this.labelAnimation = this.floatingLabelEl?.animate(this.getLabelKeyframes(), { duration: 150, easing: EASING.STANDARD });
            this.labelAnimation?.addEventListener('finish', () => {
                // At the end of the animation, update the visible label.
                this.isAnimating = false;
            });
        }
        getLabelKeyframes() {
            const { floatingLabelEl, restingLabelEl } = this;
            if (!floatingLabelEl || !restingLabelEl) {
                return [];
            }
            const { x: floatingX, y: floatingY, height: floatingHeight, } = floatingLabelEl.getBoundingClientRect();
            const { x: restingX, y: restingY, height: restingHeight, } = restingLabelEl.getBoundingClientRect();
            const floatingScrollWidth = floatingLabelEl.scrollWidth;
            const restingScrollWidth = restingLabelEl.scrollWidth;
            // Scale by width ratio instead of font size since letter-spacing will scale
            // incorrectly. Using the width we can better approximate the adjusted
            // scale and compensate for tracking and overflow.
            // (use scrollWidth instead of width to account for clipped labels)
            const scale = restingScrollWidth / floatingScrollWidth;
            const xDelta = restingX - floatingX;
            // The line-height of the resting and floating label are different. When
            // we move the floating label down to the resting label's position, it won't
            // exactly match because of this. We need to adjust by half of what the
            // final scaled floating label's height will be.
            const yDelta = restingY -
                floatingY +
                Math.round((restingHeight - floatingHeight * scale) / 2);
            // Create the two transforms: floating to resting (using the calculations
            // above), and resting to floating (re-setting the transform to initial
            // values).
            const restTransform = `translateX(${xDelta}px) translateY(${yDelta}px) scale(${scale})`;
            const floatTransform = `translateX(0) translateY(0) scale(1)`;
            // Constrain the floating labels width to a scaled percentage of the
            // resting label's width. This will prevent long clipped labels from
            // overflowing the container.
            const restingClientWidth = restingLabelEl.clientWidth;
            const isRestingClipped = restingScrollWidth > restingClientWidth;
            const width = isRestingClipped ? `${restingClientWidth / scale}px` : '';
            if (this.focused || this.populated) {
                return [
                    { transform: restTransform, width },
                    { transform: floatTransform, width },
                ];
            }
            return [
                { transform: floatTransform, width },
                { transform: restTransform, width },
            ];
        }
        getSurfacePositionClientRect() {
            return this.containerEl.getBoundingClientRect();
        }
    }
    __decorate([
        n$3({ type: Boolean })
    ], Field.prototype, "disabled", void 0);
    __decorate([
        n$3({ type: Boolean })
    ], Field.prototype, "error", void 0);
    __decorate([
        n$3({ type: Boolean })
    ], Field.prototype, "focused", void 0);
    __decorate([
        n$3()
    ], Field.prototype, "label", void 0);
    __decorate([
        n$3({ type: Boolean, attribute: 'no-asterisk' })
    ], Field.prototype, "noAsterisk", void 0);
    __decorate([
        n$3({ type: Boolean })
    ], Field.prototype, "populated", void 0);
    __decorate([
        n$3({ type: Boolean })
    ], Field.prototype, "required", void 0);
    __decorate([
        n$3({ type: Boolean })
    ], Field.prototype, "resizable", void 0);
    __decorate([
        n$3({ attribute: 'supporting-text' })
    ], Field.prototype, "supportingText", void 0);
    __decorate([
        n$3({ attribute: 'error-text' })
    ], Field.prototype, "errorText", void 0);
    __decorate([
        n$3({ type: Number })
    ], Field.prototype, "count", void 0);
    __decorate([
        n$3({ type: Number })
    ], Field.prototype, "max", void 0);
    __decorate([
        n$3({ type: Boolean, attribute: 'has-start' })
    ], Field.prototype, "hasStart", void 0);
    __decorate([
        n$3({ type: Boolean, attribute: 'has-end' })
    ], Field.prototype, "hasEnd", void 0);
    __decorate([
        o$4({ slot: 'aria-describedby' })
    ], Field.prototype, "slottedAriaDescribedBy", void 0);
    __decorate([
        r$2()
    ], Field.prototype, "isAnimating", void 0);
    __decorate([
        r$2()
    ], Field.prototype, "refreshErrorAlert", void 0);
    __decorate([
        r$2()
    ], Field.prototype, "disableTransitions", void 0);
    __decorate([
        e$3('.label.floating')
    ], Field.prototype, "floatingLabelEl", void 0);
    __decorate([
        e$3('.label.resting')
    ], Field.prototype, "restingLabelEl", void 0);
    __decorate([
        e$3('.container')
    ], Field.prototype, "containerEl", void 0);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * An outlined field component.
     */
    class OutlinedField extends Field {
        renderOutline(floatingLabel) {
            return b`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${floatingLabel}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `;
        }
    }

    /**
     * @license
     * Copyright 2024 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    // Generated stylesheet for ./field/internal/outlined-styles.css.
    const styles$3 = i$6`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`;

    /**
     * @license
     * Copyright 2024 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    // Generated stylesheet for ./field/internal/shared-styles.css.
    const styles$2 = i$6`:host{display:inline-flex;resize:none}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * TODO(b/228525797): add docs
     * @final
     * @suppress {visibility}
     */
    let MdOutlinedField = class MdOutlinedField extends OutlinedField {
    };
    MdOutlinedField.styles = [styles$2, styles$3];
    MdOutlinedField = __decorate([
        t$3('md-outlined-field')
    ], MdOutlinedField);

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const a = Symbol.for(""), o$1 = t => { if (t?.r === a) return t?._$litStatic$ }, i$1 = (t, ...r) => ({ _$litStatic$: r.reduce((r, e, a) => r + (t => { if (void 0 !== t._$litStatic$) return t._$litStatic$; throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`) })(e) + t[a + 1], t[0]), r: a }), l$1 = new Map, n$1 = t => (r, ...e) => { const a = e.length; let s, i; const n = [], u = []; let c, $ = 0, f = false; for (; $ < a;) { for (c = r[$]; $ < a && void 0 !== (i = e[$], s = o$1(i));)c += s + r[++$], f = true; $ !== a && u.push(i), n.push(c), $++; } if ($ === a && n.push(r[a]), f) { const t = n.join("$$lit$$"); void 0 === (r = l$1.get(t)) && (n.raw = n, l$1.set(t, r = n)), e = u; } return t(r, ...e) }, u = n$1(b);

    /**
     * @license
     * Copyright 2024 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    // Generated stylesheet for ./textfield/internal/outlined-styles.css.
    const styles$1 = i$6`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_icon-input-space: var(--md-outlined-text-field-icon-input-space, 16px);--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-outlined-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-outlined-text-field-with-trailing-icon-trailing-space, 12px);--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-space: var(--_icon-input-space);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space);--md-outlined-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-outlined-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`;

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const r = o => void 0 === o.strings, m = {}, p = (o, t = m) => o._$AH = t;

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const l = e$1(class extends i$2 { constructor(r$1) { if (super(r$1), r$1.type !== t.PROPERTY && r$1.type !== t.ATTRIBUTE && r$1.type !== t.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings"); if (!r(r$1)) throw Error("`live` bindings can only contain a single expression") } render(r) { return r } update(i, [t$1]) { if (t$1 === E || t$1 === A) return t$1; const o = i.element, l = i.name; if (i.type === t.PROPERTY) { if (t$1 === o[l]) return E } else if (i.type === t.BOOLEAN_ATTRIBUTE) { if (!!t$1 === o.hasAttribute(l)) return E } else if (i.type === t.ATTRIBUTE && o.getAttribute(l) === t$1 + "") return E; return p(i), t$1 } });

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const n = "important", i = " !" + n, o = e$1(class extends i$2 { constructor(t$1) { if (super(t$1), t$1.type !== t.ATTRIBUTE || "style" !== t$1.name || t$1.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.") } render(t) { return Object.keys(t).reduce((e, r) => { const s = t[r]; return null == s ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};` }, "") } update(e, [r]) { const { style: s } = e.element; if (void 0 === this.ft) return this.ft = new Set(Object.keys(r)), this.render(r); for (const t of this.ft) null == r[t] && (this.ft.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = null); for (const t in r) { const e = r[t]; if (null != e) { this.ft.add(t); const r = "string" == typeof e && e.endsWith(i); t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? n : "") : s[t] = e; } } return E } });

    /**
     * @license
     * Copyright 2023 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * Accessibility Object Model reflective aria properties.
     */
    const ARIA_PROPERTIES = [
        'role',
        'ariaAtomic',
        'ariaAutoComplete',
        'ariaBusy',
        'ariaChecked',
        'ariaColCount',
        'ariaColIndex',
        'ariaColSpan',
        'ariaCurrent',
        'ariaDisabled',
        'ariaExpanded',
        'ariaHasPopup',
        'ariaHidden',
        'ariaInvalid',
        'ariaKeyShortcuts',
        'ariaLabel',
        'ariaLevel',
        'ariaLive',
        'ariaModal',
        'ariaMultiLine',
        'ariaMultiSelectable',
        'ariaOrientation',
        'ariaPlaceholder',
        'ariaPosInSet',
        'ariaPressed',
        'ariaReadOnly',
        'ariaRequired',
        'ariaRoleDescription',
        'ariaRowCount',
        'ariaRowIndex',
        'ariaRowSpan',
        'ariaSelected',
        'ariaSetSize',
        'ariaSort',
        'ariaValueMax',
        'ariaValueMin',
        'ariaValueNow',
        'ariaValueText',
    ];
    /**
     * Accessibility Object Model aria attributes.
     */
    const ARIA_ATTRIBUTES = ARIA_PROPERTIES.map(ariaPropertyToAttribute);
    /**
     * Checks if an attribute is one of the AOM aria attributes.
     *
     * @example
     * isAriaAttribute('aria-label'); // true
     *
     * @param attribute The attribute to check.
     * @return True if the attribute is an aria attribute, or false if not.
     */
    function isAriaAttribute(attribute) {
        return ARIA_ATTRIBUTES.includes(attribute);
    }
    /**
     * Converts an AOM aria property into its corresponding attribute.
     *
     * @example
     * ariaPropertyToAttribute('ariaLabel'); // 'aria-label'
     *
     * @param property The aria property.
     * @return The aria attribute.
     */
    function ariaPropertyToAttribute(property) {
        return property
            .replace('aria', 'aria-')
            // IDREF attributes also include an "Element" or "Elements" suffix
            .replace(/Elements?/g, '')
            .toLowerCase();
    }

    /**
     * @license
     * Copyright 2023 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    // Private symbols
    const privateIgnoreAttributeChangesFor = Symbol('privateIgnoreAttributeChangesFor');
    /**
     * Mixes in aria delegation for elements that delegate focus and aria to inner
     * shadow root elements.
     *
     * This mixin fixes invalid aria announcements with shadow roots, caused by
     * duplicate aria attributes on both the host and the inner shadow root element.
     *
     * Note: this mixin **does not yet support** ID reference attributes, such as
     * `aria-labelledby` or `aria-controls`.
     *
     * @example
     * ```ts
     * class MyButton extends mixinDelegatesAria(LitElement) {
     *   static shadowRootOptions = {mode: 'open', delegatesFocus: true};
     *
     *   render() {
     *     return html`
     *       <button aria-label=${this.ariaLabel || nothing}>
     *         <slot></slot>
     *       </button>
     *     `;
     *   }
     * }
     * ```
     * ```html
     * <my-button aria-label="Plus one">+1</my-button>
     * ```
     *
     * Use `ARIAMixinStrict` for lit analyzer strict types, such as the "role"
     * attribute.
     *
     * @example
     * ```ts
     * return html`
     *   <button role=${(this as ARIAMixinStrict).role || nothing}>
     *     <slot></slot>
     *   </button>
     * `;
     * ```
     *
     * In the future, updates to the Accessibility Object Model (AOM) will provide
     * built-in aria delegation features that will replace this mixin.
     *
     * @param base The class to mix functionality into.
     * @return The provided class with aria delegation mixed in.
     */
    function mixinDelegatesAria(base) {
        var _a;
        class WithDelegatesAriaElement extends base {
            constructor() {
                super(...arguments);
                this[_a] = new Set();
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (!isAriaAttribute(name)) {
                    super.attributeChangedCallback(name, oldValue, newValue);
                    return;
                }
                if (this[privateIgnoreAttributeChangesFor].has(name)) {
                    return;
                }
                // Don't trigger another `attributeChangedCallback` once we remove the
                // aria attribute from the host. We check the explicit name of the
                // attribute to ignore since `attributeChangedCallback` can be called
                // multiple times out of an expected order when hydrating an element with
                // multiple attributes.
                this[privateIgnoreAttributeChangesFor].add(name);
                this.removeAttribute(name);
                this[privateIgnoreAttributeChangesFor].delete(name);
                const dataProperty = ariaAttributeToDataProperty(name);
                if (newValue === null) {
                    delete this.dataset[dataProperty];
                }
                else {
                    this.dataset[dataProperty] = newValue;
                }
                this.requestUpdate(ariaAttributeToDataProperty(name), oldValue);
            }
            getAttribute(name) {
                if (isAriaAttribute(name)) {
                    return super.getAttribute(ariaAttributeToDataAttribute(name));
                }
                return super.getAttribute(name);
            }
            removeAttribute(name) {
                super.removeAttribute(name);
                if (isAriaAttribute(name)) {
                    super.removeAttribute(ariaAttributeToDataAttribute(name));
                    // Since `aria-*` attributes are already removed`, we need to request
                    // an update because `attributeChangedCallback` will not be called.
                    this.requestUpdate();
                }
            }
        }
        _a = privateIgnoreAttributeChangesFor;
        setupDelegatesAriaProperties(WithDelegatesAriaElement);
        return WithDelegatesAriaElement;
    }
    /**
     * Overrides the constructor's native `ARIAMixin` properties to ensure that
     * aria properties reflect the values that were shifted to a data attribute.
     *
     * @param ctor The `ReactiveElement` constructor to patch.
     */
    function setupDelegatesAriaProperties(ctor) {
        for (const ariaProperty of ARIA_PROPERTIES) {
            // The casing between ariaProperty and the dataProperty may be different.
            // ex: aria-haspopup -> ariaHasPopup
            const ariaAttribute = ariaPropertyToAttribute(ariaProperty);
            // ex: aria-haspopup -> data-aria-haspopup
            const dataAttribute = ariaAttributeToDataAttribute(ariaAttribute);
            // ex: aria-haspopup -> dataset.ariaHaspopup
            const dataProperty = ariaAttributeToDataProperty(ariaAttribute);
            // Call `ReactiveElement.createProperty()` so that the `aria-*` and `data-*`
            // attributes are added to the `static observedAttributes` array. This
            // triggers `attributeChangedCallback` for the delegates aria mixin to
            // handle.
            ctor.createProperty(ariaProperty, {
                attribute: ariaAttribute,
                noAccessor: true,
            });
            ctor.createProperty(Symbol(dataAttribute), {
                attribute: dataAttribute,
                noAccessor: true,
            });
            // Re-define the `ARIAMixin` properties to handle data attribute shifting.
            // It is safe to use `Object.defineProperty` here because the properties
            // are native and not renamed.
            // tslint:disable-next-line:ban-unsafe-reflection
            Object.defineProperty(ctor.prototype, ariaProperty, {
                configurable: true,
                enumerable: true,
                get() {
                    return this.dataset[dataProperty] ?? null;
                },
                set(value) {
                    const prevValue = this.dataset[dataProperty] ?? null;
                    if (value === prevValue) {
                        return;
                    }
                    if (value === null) {
                        delete this.dataset[dataProperty];
                    }
                    else {
                        this.dataset[dataProperty] = value;
                    }
                    this.requestUpdate(ariaProperty, prevValue);
                },
            });
        }
    }
    function ariaAttributeToDataAttribute(ariaAttribute) {
        // aria-haspopup -> data-aria-haspopup
        return `data-${ariaAttribute}`;
    }
    function ariaAttributeToDataProperty(ariaAttribute) {
        // aria-haspopup -> dataset.ariaHaspopup
        return ariaAttribute.replace(/-\w/, (dashLetter) => dashLetter[1].toUpperCase());
    }

    /**
     * @license
     * Copyright 2022 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    const stringConverter = {
        fromAttribute(value) {
            return value ?? '';
        },
        toAttribute(value) {
            return value || null;
        },
    };

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * Re-dispatches an event from the provided element.
     *
     * This function is useful for forwarding non-composed events, such as `change`
     * events.
     *
     * @example
     * class MyInput extends LitElement {
     *   render() {
     *     return html`<input @change=${this.redispatchEvent}>`;
     *   }
     *
     *   protected redispatchEvent(event: Event) {
     *     redispatchEvent(this, event);
     *   }
     * }
     *
     * @param element The element to dispatch the event from.
     * @param event The event to re-dispatch.
     * @return Whether or not the event was dispatched (if cancelable).
     */
    function redispatchEvent(element, event) {
        // For bubbling events in SSR light DOM (or composed), stop their propagation
        // and dispatch the copy.
        if (event.bubbles && (!element.shadowRoot || event.composed)) {
            event.stopPropagation();
        }
        const copy = Reflect.construct(event.constructor, [event.type, event]);
        const dispatched = element.dispatchEvent(copy);
        if (!dispatched) {
            event.preventDefault();
        }
        return dispatched;
    }

    /**
     * @license
     * Copyright 2023 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * A unique symbol used for protected access to an instance's
     * `ElementInternals`.
     *
     * @example
     * ```ts
     * class MyElement extends mixinElementInternals(LitElement) {
     *   constructor() {
     *     super();
     *     this[internals].role = 'button';
     *   }
     * }
     * ```
     */
    const internals = Symbol('internals');
    // Private symbols
    const privateInternals = Symbol('privateInternals');
    /**
     * Mixes in an attached `ElementInternals` instance.
     *
     * This mixin is only needed when other shared code needs access to a
     * component's `ElementInternals`, such as form-associated mixins.
     *
     * @param base The class to mix functionality into.
     * @return The provided class with `WithElementInternals` mixed in.
     */
    function mixinElementInternals(base) {
        class WithElementInternalsElement extends base {
            get [internals]() {
                // Create internals in getter so that it can be used in methods called on
                // construction in `ReactiveElement`, such as `requestUpdate()`.
                if (!this[privateInternals]) {
                    // Cast needed for closure
                    this[privateInternals] = this.attachInternals();
                }
                return this[privateInternals];
            }
        }
        return WithElementInternalsElement;
    }

    /**
     * @license
     * Copyright 2023 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * A symbol property used to create a constraint validation `Validator`.
     * Required for all `mixinConstraintValidation()` elements.
     */
    const createValidator = Symbol('createValidator');
    /**
     * A symbol property used to return an anchor for constraint validation popups.
     * Required for all `mixinConstraintValidation()` elements.
     */
    const getValidityAnchor = Symbol('getValidityAnchor');
    // Private symbol members, used to avoid name clashing.
    const privateValidator = Symbol('privateValidator');
    const privateSyncValidity = Symbol('privateSyncValidity');
    const privateCustomValidationMessage = Symbol('privateCustomValidationMessage');
    /**
     * Mixes in constraint validation APIs for an element.
     *
     * See https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
     * for more details.
     *
     * Implementations must provide a validator to cache and compute its validity,
     * along with a shadow root element to anchor validation popups to.
     *
     * @example
     * ```ts
     * const baseClass = mixinConstraintValidation(
     *   mixinFormAssociated(mixinElementInternals(LitElement))
     * );
     *
     * class MyCheckbox extends baseClass {
     *   \@property({type: Boolean}) checked = false;
     *   \@property({type: Boolean}) required = false;
     *
     *   [createValidator]() {
     *     return new CheckboxValidator(() => this);
     *   }
     *
     *   [getValidityAnchor]() {
     *     return this.renderRoot.querySelector('.root');
     *   }
     * }
     * ```
     *
     * @param base The class to mix functionality into.
     * @return The provided class with `ConstraintValidation` mixed in.
     */
    function mixinConstraintValidation(base) {
        var _a;
        class ConstraintValidationElement extends base {
            constructor() {
                super(...arguments);
                /**
                 * Needed for Safari, see https://bugs.webkit.org/show_bug.cgi?id=261432
                 * Replace with this[internals].validity.customError when resolved.
                 */
                this[_a] = '';
            }
            get validity() {
                this[privateSyncValidity]();
                return this[internals].validity;
            }
            get validationMessage() {
                this[privateSyncValidity]();
                return this[internals].validationMessage;
            }
            get willValidate() {
                this[privateSyncValidity]();
                return this[internals].willValidate;
            }
            checkValidity() {
                this[privateSyncValidity]();
                return this[internals].checkValidity();
            }
            reportValidity() {
                this[privateSyncValidity]();
                return this[internals].reportValidity();
            }
            setCustomValidity(error) {
                this[privateCustomValidationMessage] = error;
                this[privateSyncValidity]();
            }
            requestUpdate(name, oldValue, options) {
                super.requestUpdate(name, oldValue, options);
                this[privateSyncValidity]();
            }
            firstUpdated(changed) {
                super.firstUpdated(changed);
                // Sync the validity again when the element first renders, since the
                // validity anchor is now available.
                //
                // Elements that `delegatesFocus: true` to an `<input>` will throw an
                // error in Chrome and Safari when a form tries to submit or call
                // `form.reportValidity()`:
                // "An invalid form control with name='' is not focusable"
                //
                // The validity anchor MUST be provided in `internals.setValidity()` and
                // MUST be the `<input>` element rendered.
                //
                // See https://lit.dev/playground/#gist=6c26e418e0010f7a5aac15005cde8bde
                // for a reproduction.
                this[privateSyncValidity]();
            }
            [(_a = privateCustomValidationMessage, privateSyncValidity)]() {
                if (!this[privateValidator]) {
                    this[privateValidator] = this[createValidator]();
                }
                const { validity, validationMessage: nonCustomValidationMessage } = this[privateValidator].getValidity();
                const customError = !!this[privateCustomValidationMessage];
                const validationMessage = this[privateCustomValidationMessage] || nonCustomValidationMessage;
                this[internals].setValidity({ ...validity, customError }, validationMessage, this[getValidityAnchor]() ?? undefined);
            }
            [createValidator]() {
                throw new Error('Implement [createValidator]');
            }
            [getValidityAnchor]() {
                throw new Error('Implement [getValidityAnchor]');
            }
        }
        return ConstraintValidationElement;
    }

    /**
     * @license
     * Copyright 2023 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * A symbol property to retrieve the form value for an element.
     */
    const getFormValue = Symbol('getFormValue');
    /**
     * A symbol property to retrieve the form state for an element.
     */
    const getFormState = Symbol('getFormState');
    /**
     * Mixes in form-associated behavior for a class. This allows an element to add
     * values to `<form>` elements.
     *
     * Implementing classes should provide a `[formValue]` to return the current
     * value of the element, as well as reset and restore callbacks.
     *
     * @example
     * ```ts
     * const base = mixinFormAssociated(mixinElementInternals(LitElement));
     *
     * class MyControl extends base {
     *   \@property()
     *   value = '';
     *
     *   override [getFormValue]() {
     *     return this.value;
     *   }
     *
     *   override formResetCallback() {
     *     const defaultValue = this.getAttribute('value');
     *     this.value = defaultValue;
     *   }
     *
     *   override formStateRestoreCallback(state: string) {
     *     this.value = state;
     *   }
     * }
     * ```
     *
     * Elements may optionally provide a `[formState]` if their values do not
     * represent the state of the component.
     *
     * @example
     * ```ts
     * const base = mixinFormAssociated(mixinElementInternals(LitElement));
     *
     * class MyCheckbox extends base {
     *   \@property()
     *   value = 'on';
     *
     *   \@property({type: Boolean})
     *   checked = false;
     *
     *   override [getFormValue]() {
     *     return this.checked ? this.value : null;
     *   }
     *
     *   override [getFormState]() {
     *     return String(this.checked);
     *   }
     *
     *   override formResetCallback() {
     *     const defaultValue = this.hasAttribute('checked');
     *     this.checked = defaultValue;
     *   }
     *
     *   override formStateRestoreCallback(state: string) {
     *     this.checked = Boolean(state);
     *   }
     * }
     * ```
     *
     * IMPORTANT: Requires declares for lit-analyzer
     * @example
     * ```ts
     * const base = mixinFormAssociated(mixinElementInternals(LitElement));
     * class MyControl extends base {
     *   // Writable mixin properties for lit-html binding, needed for lit-analyzer
     *   declare disabled: boolean;
     *   declare name: string;
     * }
     * ```
     *
     * @param base The class to mix functionality into. The base class must use
     *     `mixinElementInternals()`.
     * @return The provided class with `FormAssociated` mixed in.
     */
    function mixinFormAssociated(base) {
        class FormAssociatedElement extends base {
            get form() {
                return this[internals].form;
            }
            get labels() {
                return this[internals].labels;
            }
            // Use @property for the `name` and `disabled` properties to add them to the
            // `observedAttributes` array and trigger `attributeChangedCallback()`.
            //
            // We don't use Lit's default getter/setter (`noAccessor: true`) because
            // the attributes need to be updated synchronously to work with synchronous
            // form APIs, and Lit updates attributes async by default.
            get name() {
                return this.getAttribute('name') ?? '';
            }
            set name(name) {
                // Note: setting name to null or empty does not remove the attribute.
                this.setAttribute('name', name);
                // We don't need to call `requestUpdate()` since it's called synchronously
                // in `attributeChangedCallback()`.
            }
            get disabled() {
                return this.hasAttribute('disabled');
            }
            set disabled(disabled) {
                this.toggleAttribute('disabled', disabled);
                // We don't need to call `requestUpdate()` since it's called synchronously
                // in `attributeChangedCallback()`.
            }
            attributeChangedCallback(name, old, value) {
                // Manually `requestUpdate()` for `name` and `disabled` when their
                // attribute or property changes.
                // The properties update their attributes, so this callback is invoked
                // immediately when the properties are set. We call `requestUpdate()` here
                // instead of letting Lit set the properties from the attribute change.
                // That would cause the properties to re-set the attribute and invoke this
                // callback again in a loop. This leads to stale state when Lit tries to
                // determine if a property changed or not.
                if (name === 'name' || name === 'disabled') {
                    // Disabled's value is only false if the attribute is missing and null.
                    const oldValue = name === 'disabled' ? old !== null : old;
                    // Trigger a lit update when the attribute changes.
                    this.requestUpdate(name, oldValue);
                    return;
                }
                super.attributeChangedCallback(name, old, value);
            }
            requestUpdate(name, oldValue, options) {
                super.requestUpdate(name, oldValue, options);
                // If any properties change, update the form value, which may have changed
                // as well.
                // Update the form value synchronously in `requestUpdate()` rather than
                // `update()` or `updated()`, which are async. This is necessary to ensure
                // that form data is updated in time for synchronous event listeners.
                this[internals].setFormValue(this[getFormValue](), this[getFormState]());
            }
            [getFormValue]() {
                // Closure does not allow abstract symbol members, so a default
                // implementation is needed.
                throw new Error('Implement [getFormValue]');
            }
            [getFormState]() {
                return this[getFormValue]();
            }
            formDisabledCallback(disabled) {
                this.disabled = disabled;
            }
        }
        /** @nocollapse */
        FormAssociatedElement.formAssociated = true;
        __decorate([
            n$3({ noAccessor: true })
        ], FormAssociatedElement.prototype, "name", null);
        __decorate([
            n$3({ type: Boolean, noAccessor: true })
        ], FormAssociatedElement.prototype, "disabled", null);
        return FormAssociatedElement;
    }

    /**
     * @license
     * Copyright 2023 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * A symbol property used for a callback when validity has been reported.
     */
    const onReportValidity = Symbol('onReportValidity');
    // Private symbol members, used to avoid name clashing.
    const privateCleanupFormListeners = Symbol('privateCleanupFormListeners');
    const privateDoNotReportInvalid = Symbol('privateDoNotReportInvalid');
    const privateIsSelfReportingValidity = Symbol('privateIsSelfReportingValidity');
    const privateCallOnReportValidity = Symbol('privateCallOnReportValidity');
    /**
     * Mixes in a callback for constraint validation when validity should be
     * styled and reported to the user.
     *
     * This is commonly used in text-field-like controls that display error styles
     * and error messages.
     *
     * @example
     * ```ts
     * const baseClass = mixinOnReportValidity(
     *   mixinConstraintValidation(
     *     mixinFormAssociated(mixinElementInternals(LitElement)),
     *   ),
     * );
     *
     * class MyField extends baseClass {
     *   \@property({type: Boolean}) error = false;
     *   \@property() errorMessage = '';
     *
     *   [onReportValidity](invalidEvent: Event | null) {
     *     this.error = !!invalidEvent;
     *     this.errorMessage = this.validationMessage;
     *
     *     // Optionally prevent platform popup from displaying
     *     invalidEvent?.preventDefault();
     *   }
     * }
     * ```
     *
     * @param base The class to mix functionality into.
     * @return The provided class with `OnReportValidity` mixed in.
     */
    function mixinOnReportValidity(base) {
        var _a, _b, _c;
        class OnReportValidityElement extends base {
            // Mixins must have a constructor with `...args: any[]`
            // tslint:disable-next-line:no-any
            constructor(...args) {
                super(...args);
                /**
                 * Used to clean up event listeners when a new form is associated.
                 */
                this[_a] = new AbortController();
                /**
                 * Used to determine if an invalid event should report validity. Invalid
                 * events from `checkValidity()` do not trigger reporting.
                 */
                this[_b] = false;
                /**
                 * Used to determine if the control is reporting validity from itself, or
                 * if a `<form>` is causing the validity report. Forms have different
                 * control focusing behavior.
                 */
                this[_c] = false;
                this.addEventListener('invalid', (invalidEvent) => {
                    // Listen for invalid events dispatched by a `<form>` when it tries to
                    // submit and the element is invalid. We ignore events dispatched when
                    // calling `checkValidity()` as well as untrusted events, since the
                    // `reportValidity()` and `<form>`-dispatched events are always
                    // trusted.
                    if (this[privateDoNotReportInvalid] || !invalidEvent.isTrusted) {
                        return;
                    }
                    this.addEventListener('invalid', () => {
                        // A normal bubbling phase event listener. By adding it here, we
                        // ensure it's the last event listener that is called during the
                        // bubbling phase.
                        this[privateCallOnReportValidity](invalidEvent);
                    }, { once: true });
                }, {
                    // Listen during the capture phase, which will happen before the
                    // bubbling phase. That way, we can add a final event listener that
                    // will run after other event listeners, and we can check if it was
                    // default prevented. This works because invalid does not bubble.
                    capture: true,
                });
            }
            checkValidity() {
                this[privateDoNotReportInvalid] = true;
                const valid = super.checkValidity();
                this[privateDoNotReportInvalid] = false;
                return valid;
            }
            reportValidity() {
                this[privateIsSelfReportingValidity] = true;
                const valid = super.reportValidity();
                // Constructor's invalid listener will handle reporting invalid events.
                if (valid) {
                    this[privateCallOnReportValidity](null);
                }
                this[privateIsSelfReportingValidity] = false;
                return valid;
            }
            [(_a = privateCleanupFormListeners, _b = privateDoNotReportInvalid, _c = privateIsSelfReportingValidity, privateCallOnReportValidity)](invalidEvent) {
                // Since invalid events do not bubble to parent listeners, and because
                // our invalid listeners are added lazily after other listeners, we can
                // reliably read `defaultPrevented` synchronously without worrying
                // about waiting for another listener that could cancel it.
                const wasCanceled = invalidEvent?.defaultPrevented;
                if (wasCanceled) {
                    return;
                }
                this[onReportValidity](invalidEvent);
                // If an implementation calls invalidEvent.preventDefault() to stop the
                // platform popup from displaying, focusing is also prevented, so we need
                // to manually focus.
                const implementationCanceledFocus = !wasCanceled && invalidEvent?.defaultPrevented;
                if (!implementationCanceledFocus) {
                    return;
                }
                // The control should be focused when:
                // - `control.reportValidity()` is called (self-reporting).
                // - a form is reporting validity for its controls and this is the first
                //   invalid control.
                if (this[privateIsSelfReportingValidity] ||
                    isFirstInvalidControlInForm(this[internals].form, this)) {
                    this.focus();
                }
            }
            [onReportValidity](invalidEvent) {
                throw new Error('Implement [onReportValidity]');
            }
            formAssociatedCallback(form) {
                // can't use super.formAssociatedCallback?.() due to closure
                if (super.formAssociatedCallback) {
                    super.formAssociatedCallback(form);
                }
                // Clean up previous form listeners.
                this[privateCleanupFormListeners].abort();
                if (!form) {
                    return;
                }
                this[privateCleanupFormListeners] = new AbortController();
                // Add a listener that fires when the form runs constraint validation and
                // the control is valid, so that it may remove its error styles.
                //
                // This happens on `form.reportValidity()` and `form.requestSubmit()`
                // (both when the submit fails and passes).
                addFormReportValidListener(this, form, () => {
                    this[privateCallOnReportValidity](null);
                }, this[privateCleanupFormListeners].signal);
            }
        }
        return OnReportValidityElement;
    }
    /**
     * Add a listener that fires when a form runs constraint validation on a control
     * and it is valid. This is needed to clear previously invalid styles.
     *
     * @param control The control of the form to listen for valid events.
     * @param form The control's form that can run constraint validation.
     * @param onControlValid A listener that is called when the form runs constraint
     *     validation and the control is valid.
     * @param cleanup A cleanup signal to remove the listener.
     */
    function addFormReportValidListener(control, form, onControlValid, cleanup) {
        const validateHooks = getFormValidateHooks(form);
        // When a form validates its controls, check if an invalid event is dispatched
        // on the control. If it is not, then inform the control to report its valid
        // state.
        let controlFiredInvalid = false;
        let cleanupInvalidListener;
        let isNextSubmitFromHook = false;
        validateHooks.addEventListener('before', () => {
            isNextSubmitFromHook = true;
            cleanupInvalidListener = new AbortController();
            controlFiredInvalid = false;
            control.addEventListener('invalid', () => {
                controlFiredInvalid = true;
            }, {
                signal: cleanupInvalidListener.signal,
            });
        }, { signal: cleanup });
        validateHooks.addEventListener('after', () => {
            isNextSubmitFromHook = false;
            cleanupInvalidListener?.abort();
            if (controlFiredInvalid) {
                return;
            }
            onControlValid();
        }, { signal: cleanup });
        // The above hooks handle imperatively submitting the form, but not
        // declaratively submitting the form. This happens when:
        // 1. A non-custom element `<button type="submit">` is clicked.
        // 2. Enter is pressed on a non-custom element text editable `<input>`.
        form.addEventListener('submit', () => {
            // This submit was from `form.requestSubmit()`, which already calls the
            // listener.
            if (isNextSubmitFromHook) {
                return;
            }
            onControlValid();
        }, {
            signal: cleanup,
        });
        // Note: it is a known limitation that we cannot detect if a form tries to
        // submit declaratively, but fails to do so because an unrelated sibling
        // control failed its constraint validation.
        //
        // Since we cannot detect when that happens, a previously invalid control may
        // not clear its error styling when it becomes valid again.
        //
        // To work around this, call `form.reportValidity()` when submitting a form
        // declaratively. This can be down on the `<button type="submit">`'s click or
        // the text editable `<input>`'s 'Enter' keydown.
    }
    const FORM_VALIDATE_HOOKS = new WeakMap();
    /**
     * Get a hooks `EventTarget` that dispatches 'before' and 'after' events that
     * fire before a form runs constraint validation and immediately after it
     * finishes running constraint validation on its controls.
     *
     * This happens during `form.reportValidity()` and `form.requestSubmit()`.
     *
     * @param form The form to get or set up hooks for.
     * @return A hooks `EventTarget` to add listeners to.
     */
    function getFormValidateHooks(form) {
        if (!FORM_VALIDATE_HOOKS.has(form)) {
            // Patch form methods to add event listener hooks. These are needed to react
            // to form behaviors that do not dispatch events, such as a form asking its
            // controls to report their validity.
            //
            // We should only patch the methods once, since multiple controls and other
            // forces may want to patch this method. We cannot reliably clean it up if
            // there are multiple patched and re-patched methods referring holding
            // references to each other.
            //
            // Instead, we never clean up the patch but add and clean up event listeners
            // added to the hooks after the patch.
            const hooks = new EventTarget();
            FORM_VALIDATE_HOOKS.set(form, hooks);
            // Add hooks to support notifying before and after a form has run constraint
            // validation on its controls.
            // Note: `form.submit()` does not run constraint validation per spec.
            for (const methodName of ['reportValidity', 'requestSubmit']) {
                const superMethod = form[methodName];
                form[methodName] = function () {
                    hooks.dispatchEvent(new Event('before'));
                    const result = Reflect.apply(superMethod, this, arguments);
                    hooks.dispatchEvent(new Event('after'));
                    return result;
                };
            }
        }
        return FORM_VALIDATE_HOOKS.get(form);
    }
    /**
     * Checks if a control is the first invalid control in a form.
     *
     * @param form The control's form. When `null`, the control doesn't have a form
     *     and the method returns true.
     * @param control The control to check.
     * @return True if there is no form or if the control is the form's first
     *     invalid control.
     */
    function isFirstInvalidControlInForm(form, control) {
        if (!form) {
            return true;
        }
        let firstInvalidControl;
        for (const element of form.elements) {
            if (element.matches(':invalid')) {
                firstInvalidControl = element;
                break;
            }
        }
        return firstInvalidControl === control;
    }

    /**
     * @license
     * Copyright 2023 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * A class that computes and caches `ValidityStateFlags` for a component with
     * a given `State` interface.
     *
     * Cached performance before computing validity is important since constraint
     * validation must be checked frequently and synchronously when properties
     * change.
     *
     * @template State The expected interface of properties relevant to constraint
     *     validation.
     */
    class Validator {
        /**
         * Creates a new validator.
         *
         * @param getCurrentState A callback that returns the current state of
         *     constraint validation-related properties.
         */
        constructor(getCurrentState) {
            this.getCurrentState = getCurrentState;
            /**
             * The current validity state and message. This is cached and returns if
             * constraint validation state does not change.
             */
            this.currentValidity = {
                validity: {},
                validationMessage: '',
            };
        }
        /**
         * Returns the current `ValidityStateFlags` and validation message for the
         * validator.
         *
         * If the constraint validation state has not changed, this will return a
         * cached result. This is important since `getValidity()` can be called
         * frequently in response to synchronous property changes.
         *
         * @return The current validity and validation message.
         */
        getValidity() {
            const state = this.getCurrentState();
            const hasStateChanged = !this.prevState || !this.equals(this.prevState, state);
            if (!hasStateChanged) {
                return this.currentValidity;
            }
            const { validity, validationMessage } = this.computeValidity(state);
            this.prevState = this.copy(state);
            this.currentValidity = {
                validationMessage,
                validity: {
                    // Change any `ValidityState` instances into `ValidityStateFlags` since
                    // `ValidityState` cannot be easily `{...spread}`.
                    badInput: validity.badInput,
                    customError: validity.customError,
                    patternMismatch: validity.patternMismatch,
                    rangeOverflow: validity.rangeOverflow,
                    rangeUnderflow: validity.rangeUnderflow,
                    stepMismatch: validity.stepMismatch,
                    tooLong: validity.tooLong,
                    tooShort: validity.tooShort,
                    typeMismatch: validity.typeMismatch,
                    valueMissing: validity.valueMissing,
                },
            };
            return this.currentValidity;
        }
    }

    /**
     * @license
     * Copyright 2023 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * A validator that provides constraint validation that emulates `<input>` and
     * `<textarea>` validation.
     */
    class TextFieldValidator extends Validator {
        computeValidity({ state, renderedControl }) {
            let inputOrTextArea = renderedControl;
            if (isInputState(state) && !inputOrTextArea) {
                // Get cached <input> or create it.
                inputOrTextArea = this.inputControl || document.createElement('input');
                // Cache the <input> to re-use it next time.
                this.inputControl = inputOrTextArea;
            }
            else if (!inputOrTextArea) {
                // Get cached <textarea> or create it.
                inputOrTextArea =
                    this.textAreaControl || document.createElement('textarea');
                // Cache the <textarea> to re-use it next time.
                this.textAreaControl = inputOrTextArea;
            }
            // Set this variable so we can check it for input-specific properties.
            const input = isInputState(state)
                ? inputOrTextArea
                : null;
            // Set input's "type" first, since this can change the other properties
            if (input) {
                input.type = state.type;
            }
            if (inputOrTextArea.value !== state.value) {
                // Only programmatically set the value if there's a difference. When using
                // the rendered control, the value will always be up to date. Setting the
                // property (even if it's the same string) will reset the internal <input>
                // dirty flag, making minlength and maxlength validation reset.
                inputOrTextArea.value = state.value;
            }
            inputOrTextArea.required = state.required;
            // The following IDLAttribute properties will always hydrate an attribute,
            // even if set to a the default value ('' or -1). The presence of the
            // attribute triggers constraint validation, so we must remove the attribute
            // when empty.
            if (input) {
                const inputState = state;
                if (inputState.pattern) {
                    input.pattern = inputState.pattern;
                }
                else {
                    input.removeAttribute('pattern');
                }
                if (inputState.min) {
                    input.min = inputState.min;
                }
                else {
                    input.removeAttribute('min');
                }
                if (inputState.max) {
                    input.max = inputState.max;
                }
                else {
                    input.removeAttribute('max');
                }
                if (inputState.step) {
                    input.step = inputState.step;
                }
                else {
                    input.removeAttribute('step');
                }
            }
            // Use -1 to represent no minlength and maxlength, which is what the
            // platform input returns. However, it will throw an error if you try to
            // manually set it to -1.
            //
            // While the type is `number`, it may actually be `null` at runtime.
            // `null > -1` is true since `null` coerces to `0`, so we default null and
            // undefined to -1.
            //
            // We set attributes instead of properties since setting a property may
            // throw an out of bounds error in relation to the other property.
            // Attributes will not throw errors while the state is updating.
            if ((state.minLength ?? -1) > -1) {
                inputOrTextArea.setAttribute('minlength', String(state.minLength));
            }
            else {
                inputOrTextArea.removeAttribute('minlength');
            }
            if ((state.maxLength ?? -1) > -1) {
                inputOrTextArea.setAttribute('maxlength', String(state.maxLength));
            }
            else {
                inputOrTextArea.removeAttribute('maxlength');
            }
            return {
                validity: inputOrTextArea.validity,
                validationMessage: inputOrTextArea.validationMessage,
            };
        }
        equals({ state: prev }, { state: next }) {
            // Check shared input and textarea properties
            const inputOrTextAreaEqual = prev.type === next.type &&
                prev.value === next.value &&
                prev.required === next.required &&
                prev.minLength === next.minLength &&
                prev.maxLength === next.maxLength;
            if (!isInputState(prev) || !isInputState(next)) {
                // Both are textareas, all relevant properties are equal.
                return inputOrTextAreaEqual;
            }
            // Check additional input-specific properties.
            return (inputOrTextAreaEqual &&
                prev.pattern === next.pattern &&
                prev.min === next.min &&
                prev.max === next.max &&
                prev.step === next.step);
        }
        copy({ state }) {
            // Don't hold a reference to the rendered control when copying since we
            // don't use it when checking if the state changed.
            return {
                state: isInputState(state)
                    ? this.copyInput(state)
                    : this.copyTextArea(state),
                renderedControl: null,
            };
        }
        copyInput(state) {
            const { type, pattern, min, max, step } = state;
            return {
                ...this.copySharedState(state),
                type,
                pattern,
                min,
                max,
                step,
            };
        }
        copyTextArea(state) {
            return {
                ...this.copySharedState(state),
                type: state.type,
            };
        }
        copySharedState({ value, required, minLength, maxLength, }) {
            return { value, required, minLength, maxLength };
        }
    }
    function isInputState(state) {
        return state.type !== 'textarea';
    }

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    // Separate variable needed for closure.
    const textFieldBaseClass = mixinDelegatesAria(mixinOnReportValidity(mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(i$3)))));
    /**
     * A text field component.
     *
     * @fires select {Event} The native `select` event on
     * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event)
     * --bubbles
     * @fires change {Event} The native `change` event on
     * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * --bubbles
     * @fires input {InputEvent} The native `input` event on
     * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * --bubbles --composed
     */
    class TextField extends textFieldBaseClass {
        constructor() {
            super(...arguments);
            /**
             * Gets or sets whether or not the text field is in a visually invalid state.
             *
             * This error state overrides the error state controlled by
             * `reportValidity()`.
             */
            this.error = false;
            /**
             * The error message that replaces supporting text when `error` is true. If
             * `errorText` is an empty string, then the supporting text will continue to
             * show.
             *
             * This error message overrides the error message displayed by
             * `reportValidity()`.
             */
            this.errorText = '';
            /**
             * The floating Material label of the textfield component. It informs the user
             * about what information is requested for a text field. It is aligned with
             * the input text, is always visible, and it floats when focused or when text
             * is entered into the textfield. This label also sets accessibilty labels,
             * but the accessible label is overriden by `aria-label`.
             *
             * Learn more about floating labels from the Material Design guidelines:
             * https://m3.material.io/components/text-fields/guidelines
             */
            this.label = '';
            /**
             * Disables the asterisk on the floating label, when the text field is
             * required.
             */
            this.noAsterisk = false;
            /**
             * Indicates that the user must specify a value for the input before the
             * owning form can be submitted and will render an error state when
             * `reportValidity()` is invoked when value is empty. Additionally the
             * floating label will render an asterisk `"*"` when true.
             *
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required
             */
            this.required = false;
            /**
             * The current value of the text field. It is always a string.
             */
            this.value = '';
            /**
             * An optional prefix to display before the input value.
             */
            this.prefixText = '';
            /**
             * An optional suffix to display after the input value.
             */
            this.suffixText = '';
            /**
             * Whether or not the text field has a leading icon. Used for SSR.
             */
            this.hasLeadingIcon = false;
            /**
             * Whether or not the text field has a trailing icon. Used for SSR.
             */
            this.hasTrailingIcon = false;
            /**
             * Conveys additional information below the text field, such as how it should
             * be used.
             */
            this.supportingText = '';
            /**
             * Override the input text CSS `direction`. Useful for RTL languages that use
             * LTR notation for fractions.
             */
            this.textDirection = '';
            /**
             * The number of rows to display for a `type="textarea"` text field.
             * Defaults to 2.
             */
            this.rows = 2;
            /**
             * The number of cols to display for a `type="textarea"` text field.
             * Defaults to 20.
             */
            this.cols = 20;
            // <input> properties
            this.inputMode = '';
            /**
             * Defines the greatest value in the range of permitted values.
             *
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
             */
            this.max = '';
            /**
             * The maximum number of characters a user can enter into the text field. Set
             * to -1 for none.
             *
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
             */
            this.maxLength = -1;
            /**
             * Defines the most negative value in the range of permitted values.
             *
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
             */
            this.min = '';
            /**
             * The minimum number of characters a user can enter into the text field. Set
             * to -1 for none.
             *
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
             */
            this.minLength = -1;
            /**
             * When true, hide the spinner for `type="number"` text fields.
             */
            this.noSpinner = false;
            /**
             * A regular expression that the text field's value must match to pass
             * constraint validation.
             *
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
             */
            this.pattern = '';
            /**
             * Defines the text displayed in the textfield when it has no value. Provides
             * a brief hint to the user as to the expected type of data that should be
             * entered into the control. Unlike `label`, the placeholder is not visible
             * and does not float when the textfield has a value.
             *
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder
             */
            this.placeholder = '';
            /**
             * Indicates whether or not a user should be able to edit the text field's
             * value.
             *
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
             */
            this.readOnly = false;
            /**
             * Indicates that input accepts multiple email addresses.
             *
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple
             */
            this.multiple = false;
            /**
             * Returns or sets the element's step attribute, which works with min and max
             * to limit the increments at which a numeric or date-time value can be set.
             *
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
             */
            this.step = '';
            /**
             * The `<input>` type to use, defaults to "text". The type greatly changes how
             * the text field behaves.
             *
             * Text fields support a limited number of `<input>` types:
             *
             * - text
             * - textarea
             * - email
             * - number
             * - password
             * - search
             * - tel
             * - url
             *
             * See
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
             * for more details on each input type.
             */
            this.type = 'text';
            /**
             * Describes what, if any, type of autocomplete functionality the input
             * should provide.
             *
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
             */
            this.autocomplete = '';
            /**
             * Returns true when the text field has been interacted with. Native
             * validation errors only display in response to user interactions.
             */
            this.dirty = false;
            this.focused = false;
            /**
             * Whether or not a native error has been reported via `reportValidity()`.
             */
            this.nativeError = false;
            /**
             * The validation message displayed from a native error via
             * `reportValidity()`.
             */
            this.nativeErrorText = '';
        }
        /**
         * Gets or sets the direction in which selection occurred.
         */
        get selectionDirection() {
            return this.getInputOrTextarea().selectionDirection;
        }
        set selectionDirection(value) {
            this.getInputOrTextarea().selectionDirection = value;
        }
        /**
         * Gets or sets the end position or offset of a text selection.
         */
        get selectionEnd() {
            return this.getInputOrTextarea().selectionEnd;
        }
        set selectionEnd(value) {
            this.getInputOrTextarea().selectionEnd = value;
        }
        /**
         * Gets or sets the starting position or offset of a text selection.
         */
        get selectionStart() {
            return this.getInputOrTextarea().selectionStart;
        }
        set selectionStart(value) {
            this.getInputOrTextarea().selectionStart = value;
        }
        /**
         * The text field's value as a number.
         */
        get valueAsNumber() {
            const input = this.getInput();
            if (!input) {
                return NaN;
            }
            return input.valueAsNumber;
        }
        set valueAsNumber(value) {
            const input = this.getInput();
            if (!input) {
                return;
            }
            input.valueAsNumber = value;
            this.value = input.value;
        }
        /**
         * The text field's value as a Date.
         */
        get valueAsDate() {
            const input = this.getInput();
            if (!input) {
                return null;
            }
            return input.valueAsDate;
        }
        set valueAsDate(value) {
            const input = this.getInput();
            if (!input) {
                return;
            }
            input.valueAsDate = value;
            this.value = input.value;
        }
        get hasError() {
            return this.error || this.nativeError;
        }
        /**
         * Selects all the text in the text field.
         *
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
         */
        select() {
            this.getInputOrTextarea().select();
        }
        setRangeText(...args) {
            // Calling setRangeText with 1 vs 3-4 arguments has different behavior.
            // Use spread syntax and type casting to ensure correct usage.
            this.getInputOrTextarea().setRangeText(...args);
            this.value = this.getInputOrTextarea().value;
        }
        /**
         * Sets the start and end positions of a selection in the text field.
         *
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
         *
         * @param start The offset into the text field for the start of the selection.
         * @param end The offset into the text field for the end of the selection.
         * @param direction The direction in which the selection is performed.
         */
        setSelectionRange(start, end, direction) {
            this.getInputOrTextarea().setSelectionRange(start, end, direction);
        }
        /**
         * Shows the browser picker for an input element of type "date", "time", etc.
         *
         * For a full list of supported types, see:
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker#browser_compatibility
         *
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker
         */
        showPicker() {
            const input = this.getInput();
            if (!input) {
                return;
            }
            input.showPicker();
        }
        /**
         * Decrements the value of a numeric type text field by `step` or `n` `step`
         * number of times.
         *
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
         *
         * @param stepDecrement The number of steps to decrement, defaults to 1.
         */
        stepDown(stepDecrement) {
            const input = this.getInput();
            if (!input) {
                return;
            }
            input.stepDown(stepDecrement);
            this.value = input.value;
        }
        /**
         * Increments the value of a numeric type text field by `step` or `n` `step`
         * number of times.
         *
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp
         *
         * @param stepIncrement The number of steps to increment, defaults to 1.
         */
        stepUp(stepIncrement) {
            const input = this.getInput();
            if (!input) {
                return;
            }
            input.stepUp(stepIncrement);
            this.value = input.value;
        }
        /**
         * Reset the text field to its default value.
         */
        reset() {
            this.dirty = false;
            this.value = this.getAttribute('value') ?? '';
            this.nativeError = false;
            this.nativeErrorText = '';
        }
        attributeChangedCallback(attribute, newValue, oldValue) {
            if (attribute === 'value' && this.dirty) {
                // After user input, changing the value attribute no longer updates the
                // text field's value (until reset). This matches native <input> behavior.
                return;
            }
            super.attributeChangedCallback(attribute, newValue, oldValue);
        }
        render() {
            const classes = {
                'disabled': this.disabled,
                'error': !this.disabled && this.hasError,
                'textarea': this.type === 'textarea',
                'no-spinner': this.noSpinner,
            };
            return b`
      <span class="text-field ${e(classes)}">
        ${this.renderField()}
      </span>
    `;
        }
        updated(changedProperties) {
            // Keep changedProperties arg so that subclasses may call it
            // If a property such as `type` changes and causes the internal <input>
            // value to change without dispatching an event, re-sync it.
            const value = this.getInputOrTextarea().value;
            if (this.value !== value) {
                // Note this is typically inefficient in updated() since it schedules
                // another update. However, it is needed for the <input> to fully render
                // before checking its value.
                this.value = value;
            }
        }
        renderField() {
            return u`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type === 'textarea'}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`;
        }
        renderLeadingIcon() {
            return b`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
        }
        renderTrailingIcon() {
            return b`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
        }
        renderInputOrTextarea() {
            const style = { 'direction': this.textDirection };
            const ariaLabel = this.ariaLabel || this.label || A;
            // lit-anaylzer `autocomplete` types are too strict
            // tslint:disable-next-line:no-any
            const autocomplete = this.autocomplete;
            // These properties may be set to null if the attribute is removed, and
            // `null > -1` is incorrectly `true`.
            const hasMaxLength = (this.maxLength ?? -1) > -1;
            const hasMinLength = (this.minLength ?? -1) > -1;
            if (this.type === 'textarea') {
                return b`
        <textarea
          class="input"
          style=${o(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          autocomplete=${autocomplete || A}
          name=${this.name || A}
          ?disabled=${this.disabled}
          maxlength=${hasMaxLength ? this.maxLength : A}
          minlength=${hasMinLength ? this.minLength : A}
          placeholder=${this.placeholder || A}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${l(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;
            }
            const prefix = this.renderPrefix();
            const suffix = this.renderSuffix();
            // TODO(b/243805848): remove `as unknown as number` and `as any` once lit
            // analyzer is fixed
            // tslint:disable-next-line:no-any
            const inputMode = this.inputMode;
            return b`
      <div class="input-wrapper">
        ${prefix}
        <input
          class="input"
          style=${o(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          autocomplete=${autocomplete || A}
          name=${this.name || A}
          ?disabled=${this.disabled}
          inputmode=${inputMode || A}
          max=${(this.max || A)}
          maxlength=${hasMaxLength ? this.maxLength : A}
          min=${(this.min || A)}
          minlength=${hasMinLength ? this.minLength : A}
          pattern=${this.pattern || A}
          placeholder=${this.placeholder || A}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${(this.step || A)}
          type=${this.type}
          .value=${l(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${suffix}
      </div>
    `;
        }
        renderPrefix() {
            return this.renderAffix(this.prefixText, /* isSuffix */ false);
        }
        renderSuffix() {
            return this.renderAffix(this.suffixText, /* isSuffix */ true);
        }
        renderAffix(text, isSuffix) {
            if (!text) {
                return A;
            }
            const classes = {
                'suffix': isSuffix,
                'prefix': !isSuffix,
            };
            return b`<span class="${e(classes)}">${text}</span>`;
        }
        getErrorText() {
            return this.error ? this.errorText : this.nativeErrorText;
        }
        handleFocusChange() {
            // When calling focus() or reportValidity() during change, it's possible
            // for blur to be called after the new focus event. Rather than set
            // `this.focused` to true/false on focus/blur, we always set it to whether
            // or not the input itself is focused.
            this.focused = this.inputOrTextarea?.matches(':focus') ?? false;
        }
        handleInput(event) {
            this.dirty = true;
            this.value = event.target.value;
        }
        redispatchEvent(event) {
            redispatchEvent(this, event);
        }
        getInputOrTextarea() {
            if (!this.inputOrTextarea) {
                // If the input is not yet defined, synchronously render.
                // e.g.
                // const textField = document.createElement('md-outlined-text-field');
                // document.body.appendChild(textField);
                // textField.focus(); // synchronously render
                this.connectedCallback();
                this.scheduleUpdate();
            }
            if (this.isUpdatePending) {
                // If there are pending updates, synchronously perform them. This ensures
                // that constraint validation properties (like `required`) are synced
                // before interacting with input APIs that depend on them.
                this.scheduleUpdate();
            }
            return this.inputOrTextarea;
        }
        getInput() {
            if (this.type === 'textarea') {
                return null;
            }
            return this.getInputOrTextarea();
        }
        handleIconChange() {
            this.hasLeadingIcon = this.leadingIcons.length > 0;
            this.hasTrailingIcon = this.trailingIcons.length > 0;
        }
        [getFormValue]() {
            return this.value;
        }
        formResetCallback() {
            this.reset();
        }
        formStateRestoreCallback(state) {
            this.value = state;
        }
        focus() {
            // Required for the case that the user slots a focusable element into the
            // leading icon slot such as an iconbutton due to how delegatesFocus works.
            this.getInputOrTextarea().focus();
        }
        [createValidator]() {
            return new TextFieldValidator(() => ({
                state: this,
                renderedControl: this.inputOrTextarea,
            }));
        }
        [getValidityAnchor]() {
            return this.inputOrTextarea;
        }
        [onReportValidity](invalidEvent) {
            // Prevent default pop-up behavior.
            invalidEvent?.preventDefault();
            const prevMessage = this.getErrorText();
            this.nativeError = !!invalidEvent;
            this.nativeErrorText = this.validationMessage;
            if (prevMessage === this.getErrorText()) {
                this.field?.reannounceError();
            }
        }
    }
    /** @nocollapse */
    TextField.shadowRootOptions = {
        ...i$3.shadowRootOptions,
        delegatesFocus: true,
    };
    __decorate([
        n$3({ type: Boolean, reflect: true })
    ], TextField.prototype, "error", void 0);
    __decorate([
        n$3({ attribute: 'error-text' })
    ], TextField.prototype, "errorText", void 0);
    __decorate([
        n$3()
    ], TextField.prototype, "label", void 0);
    __decorate([
        n$3({ type: Boolean, attribute: 'no-asterisk' })
    ], TextField.prototype, "noAsterisk", void 0);
    __decorate([
        n$3({ type: Boolean, reflect: true })
    ], TextField.prototype, "required", void 0);
    __decorate([
        n$3()
    ], TextField.prototype, "value", void 0);
    __decorate([
        n$3({ attribute: 'prefix-text' })
    ], TextField.prototype, "prefixText", void 0);
    __decorate([
        n$3({ attribute: 'suffix-text' })
    ], TextField.prototype, "suffixText", void 0);
    __decorate([
        n$3({ type: Boolean, attribute: 'has-leading-icon' })
    ], TextField.prototype, "hasLeadingIcon", void 0);
    __decorate([
        n$3({ type: Boolean, attribute: 'has-trailing-icon' })
    ], TextField.prototype, "hasTrailingIcon", void 0);
    __decorate([
        n$3({ attribute: 'supporting-text' })
    ], TextField.prototype, "supportingText", void 0);
    __decorate([
        n$3({ attribute: 'text-direction' })
    ], TextField.prototype, "textDirection", void 0);
    __decorate([
        n$3({ type: Number })
    ], TextField.prototype, "rows", void 0);
    __decorate([
        n$3({ type: Number })
    ], TextField.prototype, "cols", void 0);
    __decorate([
        n$3({ reflect: true })
    ], TextField.prototype, "inputMode", void 0);
    __decorate([
        n$3()
    ], TextField.prototype, "max", void 0);
    __decorate([
        n$3({ type: Number })
    ], TextField.prototype, "maxLength", void 0);
    __decorate([
        n$3()
    ], TextField.prototype, "min", void 0);
    __decorate([
        n$3({ type: Number })
    ], TextField.prototype, "minLength", void 0);
    __decorate([
        n$3({ type: Boolean, attribute: 'no-spinner' })
    ], TextField.prototype, "noSpinner", void 0);
    __decorate([
        n$3()
    ], TextField.prototype, "pattern", void 0);
    __decorate([
        n$3({ reflect: true, converter: stringConverter })
    ], TextField.prototype, "placeholder", void 0);
    __decorate([
        n$3({ type: Boolean, reflect: true })
    ], TextField.prototype, "readOnly", void 0);
    __decorate([
        n$3({ type: Boolean, reflect: true })
    ], TextField.prototype, "multiple", void 0);
    __decorate([
        n$3()
    ], TextField.prototype, "step", void 0);
    __decorate([
        n$3({ reflect: true })
    ], TextField.prototype, "type", void 0);
    __decorate([
        n$3({ reflect: true })
    ], TextField.prototype, "autocomplete", void 0);
    __decorate([
        r$2()
    ], TextField.prototype, "dirty", void 0);
    __decorate([
        r$2()
    ], TextField.prototype, "focused", void 0);
    __decorate([
        r$2()
    ], TextField.prototype, "nativeError", void 0);
    __decorate([
        r$2()
    ], TextField.prototype, "nativeErrorText", void 0);
    __decorate([
        e$3('.input')
    ], TextField.prototype, "inputOrTextarea", void 0);
    __decorate([
        e$3('.field')
    ], TextField.prototype, "field", void 0);
    __decorate([
        o$4({ slot: 'leading-icon' })
    ], TextField.prototype, "leadingIcons", void 0);
    __decorate([
        o$4({ slot: 'trailing-icon' })
    ], TextField.prototype, "trailingIcons", void 0);

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * An outlined text field component
     */
    class OutlinedTextField extends TextField {
        constructor() {
            super(...arguments);
            this.fieldTag = i$1`md-outlined-field`;
        }
    }

    /**
     * @license
     * Copyright 2024 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    // Generated stylesheet for ./textfield/internal/shared-styles.css.
    const styles = i$6`:host{display:inline-flex;outline:none;resize:none;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit;resize:none}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    /**
     * TODO(b/228525797): Add docs
     * @final
     * @suppress {visibility}
     */
    let MdOutlinedTextField = class MdOutlinedTextField extends OutlinedTextField {
        constructor() {
            super(...arguments);
            this.fieldTag = i$1`md-outlined-field`;
        }
    };
    MdOutlinedTextField.styles = [styles, styles$1];
    MdOutlinedTextField = __decorate([
        t$3('md-outlined-text-field')
    ], MdOutlinedTextField);

})();
