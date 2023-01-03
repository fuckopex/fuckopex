// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var qe = Object.create;
var It = Object.defineProperty;
var Xe = Object.getOwnPropertyDescriptor;
var Ve = Object.getOwnPropertyNames;
var Ge = Object.getPrototypeOf, Fe = Object.prototype.hasOwnProperty;
var g = (t, e)=>()=>(e || t((e = {
            exports: {}
        }).exports, e), e.exports);
var $e = (t, e, i, s)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let _ of Ve(e))!Fe.call(t, _) && _ !== i && It(t, _, {
        get: ()=>e[_],
        enumerable: !(s = Xe(e, _)) || s.enumerable
    });
    return t;
};
var Qe = (t, e, i)=>(i = t != null ? qe(Ge(t)) : {}, $e(e || !t || !t.__esModule ? It(i, "default", {
        value: t,
        enumerable: !0
    }) : i, t));
var _t = g((is, Mt)=>{
    "use strict";
    function y(t) {
        this.__parent = t, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
    }
    y.prototype.clone_empty = function() {
        var t = new y(this.__parent);
        return t.set_indent(this.__indent_count, this.__alignment_count), t;
    };
    y.prototype.item = function(t) {
        return t < 0 ? this.__items[this.__items.length + t] : this.__items[t];
    };
    y.prototype.has_match = function(t) {
        for(var e = this.__items.length - 1; e >= 0; e--)if (this.__items[e].match(t)) return !0;
        return !1;
    };
    y.prototype.set_indent = function(t, e) {
        this.is_empty() && (this.__indent_count = t || 0, this.__alignment_count = e || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
    };
    y.prototype._set_wrap_point = function() {
        this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
    };
    y.prototype._should_wrap = function() {
        return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
    };
    y.prototype._allow_wrap = function() {
        if (this._should_wrap()) {
            this.__parent.add_new_line();
            var t = this.__parent.current_line;
            return t.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), t.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), t.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, t.__items[0] === " " && (t.__items.splice(0, 1), t.__character_count -= 1), !0;
        }
        return !1;
    };
    y.prototype.is_empty = function() {
        return this.__items.length === 0;
    };
    y.prototype.last = function() {
        return this.is_empty() ? null : this.__items[this.__items.length - 1];
    };
    y.prototype.push = function(t) {
        this.__items.push(t);
        var e = t.lastIndexOf(`
`);
        e !== -1 ? this.__character_count = t.length - e : this.__character_count += t.length;
    };
    y.prototype.pop = function() {
        var t = null;
        return this.is_empty() || (t = this.__items.pop(), this.__character_count -= t.length), t;
    };
    y.prototype._remove_indent = function() {
        this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
    };
    y.prototype._remove_wrap_indent = function() {
        this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
    };
    y.prototype.trim = function() {
        for(; this.last() === " ";)this.__items.pop(), this.__character_count -= 1;
    };
    y.prototype.toString = function() {
        var t = "";
        return this.is_empty() ? this.__parent.indent_empty_lines && (t = this.__parent.get_indent_string(this.__indent_count)) : (t = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), t += this.__items.join("")), t;
    };
    function V(t, e) {
        this.__cache = [
            ""
        ], this.__indent_size = t.indent_size, this.__indent_string = t.indent_char, t.indent_with_tabs || (this.__indent_string = new Array(t.indent_size + 1).join(t.indent_char)), e = e || "", t.indent_level > 0 && (e = new Array(t.indent_level + 1).join(this.__indent_string)), this.__base_string = e, this.__base_string_length = e.length;
    }
    V.prototype.get_indent_size = function(t, e) {
        var i = this.__base_string_length;
        return e = e || 0, t < 0 && (i = 0), i += t * this.__indent_size, i += e, i;
    };
    V.prototype.get_indent_string = function(t, e) {
        var i = this.__base_string;
        return e = e || 0, t < 0 && (t = 0, i = ""), e += t * this.__indent_size, this.__ensure_cache(e), i += this.__cache[e], i;
    };
    V.prototype.__ensure_cache = function(t) {
        for(; t >= this.__cache.length;)this.__add_column();
    };
    V.prototype.__add_column = function() {
        var t = this.__cache.length, e = 0, i = "";
        this.__indent_size && t >= this.__indent_size && (e = Math.floor(t / this.__indent_size), t -= e * this.__indent_size, i = new Array(e + 1).join(this.__indent_string)), t && (i += new Array(t + 1).join(" ")), this.__cache.push(i);
    };
    function v(t, e) {
        this.__indent_cache = new V(t, e), this.raw = !1, this._end_with_newline = t.end_with_newline, this.indent_size = t.indent_size, this.wrap_line_length = t.wrap_line_length, this.indent_empty_lines = t.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new y(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline();
    }
    v.prototype.__add_outputline = function() {
        this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
    };
    v.prototype.get_line_number = function() {
        return this.__lines.length;
    };
    v.prototype.get_indent_string = function(t, e) {
        return this.__indent_cache.get_indent_string(t, e);
    };
    v.prototype.get_indent_size = function(t, e) {
        return this.__indent_cache.get_indent_size(t, e);
    };
    v.prototype.is_empty = function() {
        return !this.previous_line && this.current_line.is_empty();
    };
    v.prototype.add_new_line = function(t) {
        return this.is_empty() || !t && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(), !0);
    };
    v.prototype.get_code = function(t) {
        this.trim(!0);
        var e = this.current_line.pop();
        e && (e[e.length - 1] === `
` && (e = e.replace(/\n+$/g, "")), this.current_line.push(e)), this._end_with_newline && this.__add_outputline();
        var i = this.__lines.join(`
`);
        return t !== `
` && (i = i.replace(/[\n]/g, t)), i;
    };
    v.prototype.set_wrap_point = function() {
        this.current_line._set_wrap_point();
    };
    v.prototype.set_indent = function(t, e) {
        return t = t || 0, e = e || 0, this.next_line.set_indent(t, e), this.__lines.length > 1 ? (this.current_line.set_indent(t, e), !0) : (this.current_line.set_indent(), !1);
    };
    v.prototype.add_raw_token = function(t) {
        for(var e = 0; e < t.newlines; e++)this.__add_outputline();
        this.current_line.set_indent(-1), this.current_line.push(t.whitespace_before), this.current_line.push(t.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1;
    };
    v.prototype.add_token = function(t) {
        this.__add_space_before_token(), this.current_line.push(t), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap();
    };
    v.prototype.__add_space_before_token = function() {
        this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
    };
    v.prototype.remove_indent = function(t) {
        for(var e = this.__lines.length; t < e;)this.__lines[t]._remove_indent(), t++;
        this.current_line._remove_wrap_indent();
    };
    v.prototype.trim = function(t) {
        for(t = t === void 0 ? !1 : t, this.current_line.trim(); t && this.__lines.length > 1 && this.current_line.is_empty();)this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
        this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
    };
    v.prototype.just_added_newline = function() {
        return this.current_line.is_empty();
    };
    v.prototype.just_added_blankline = function() {
        return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
    };
    v.prototype.ensure_empty_line_above = function(t, e) {
        for(var i = this.__lines.length - 2; i >= 0;){
            var s = this.__lines[i];
            if (s.is_empty()) break;
            if (s.item(0).indexOf(t) !== 0 && s.item(-1) !== e) {
                this.__lines.splice(i + 1, 0, new y(this)), this.previous_line = this.__lines[this.__lines.length - 2];
                break;
            }
            i--;
        }
    };
    Mt.exports.Output = v;
});
var dt = g((ss, Kt)=>{
    "use strict";
    function Ye(t, e, i, s) {
        this.type = t, this.text = e, this.comments_before = null, this.newlines = i || 0, this.whitespace_before = s || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
    }
    Kt.exports.Token = Ye;
});
var mt = g((j)=>{
    "use strict";
    var Ze = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a", Wt = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a", gt = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc", Ut = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f", zt = "(?:\\\\u[0-9a-fA-F]{4}|[" + Ze + gt + "])", He = "(?:\\\\u[0-9a-fA-F]{4}|[" + Wt + gt + Ut + "])*";
    j.identifier = new RegExp(zt + He, "g");
    j.identifierStart = new RegExp(zt);
    j.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + Wt + gt + Ut + "])+");
    j.newline = /[\n\r\u2028\u2029]/;
    j.lineBreak = new RegExp(`\r
|` + j.newline.source);
    j.allLineBreaks = new RegExp(j.lineBreak.source, "g");
});
var at = g((ns, nt)=>{
    "use strict";
    function M(t, e) {
        this.raw_options = qt(t, e), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", [
            "auto",
            "none",
            "django",
            "erb",
            "handlebars",
            "php",
            "smarty"
        ], [
            "auto"
        ]);
    }
    M.prototype._get_array = function(t, e) {
        var i = this.raw_options[t], s = e || [];
        return typeof i == "object" ? i !== null && typeof i.concat == "function" && (s = i.concat()) : typeof i == "string" && (s = i.split(/[^a-zA-Z0-9_\/\-]+/)), s;
    };
    M.prototype._get_boolean = function(t, e) {
        var i = this.raw_options[t], s = i === void 0 ? !!e : !!i;
        return s;
    };
    M.prototype._get_characters = function(t, e) {
        var i = this.raw_options[t], s = e || "";
        return typeof i == "string" && (s = i.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), s;
    };
    M.prototype._get_number = function(t, e) {
        var i = this.raw_options[t];
        e = parseInt(e, 10), isNaN(e) && (e = 0);
        var s = parseInt(i, 10);
        return isNaN(s) && (s = e), s;
    };
    M.prototype._get_selection = function(t, e, i) {
        var s = this._get_selection_list(t, e, i);
        if (s.length !== 1) throw new Error("Invalid Option Value: The option '" + t + `' can only be one of the following values:
` + e + `
You passed in: '` + this.raw_options[t] + "'");
        return s[0];
    };
    M.prototype._get_selection_list = function(t, e, i) {
        if (!e || e.length === 0) throw new Error("Selection list cannot be empty.");
        if (i = i || [
            e[0]
        ], !this._is_valid_selection(i, e)) throw new Error("Invalid Default Value!");
        var s = this._get_array(t, i);
        if (!this._is_valid_selection(s, e)) throw new Error("Invalid Option Value: The option '" + t + `' can contain only the following values:
` + e + `
You passed in: '` + this.raw_options[t] + "'");
        return s;
    };
    M.prototype._is_valid_selection = function(t, e) {
        return t.length && e.length && !t.some(function(i) {
            return e.indexOf(i) === -1;
        });
    };
    function qt(t, e) {
        var i = {};
        t = Xt(t);
        var s;
        for(s in t)s !== e && (i[s] = t[s]);
        if (e && t[e]) for(s in t[e])i[s] = t[e][s];
        return i;
    }
    function Xt(t) {
        var e = {}, i;
        for(i in t){
            var s = i.replace(/-/g, "_");
            e[s] = t[i];
        }
        return e;
    }
    nt.exports.Options = M;
    nt.exports.normalizeOpts = Xt;
    nt.exports.mergeOpts = qt;
});
var bt = g((as, Ft)=>{
    "use strict";
    var Vt = at().Options, Je = [
        "before-newline",
        "after-newline",
        "preserve-newline"
    ];
    function Gt(t) {
        Vt.call(this, t, "js");
        var e = this.raw_options.brace_style || null;
        e === "expand-strict" ? this.raw_options.brace_style = "expand" : e === "collapse-preserve-inline" ? this.raw_options.brace_style = "collapse,preserve-inline" : this.raw_options.braces_on_own_line !== void 0 && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
        var i = this._get_selection_list("brace_style", [
            "collapse",
            "expand",
            "end-expand",
            "none",
            "preserve-inline"
        ]);
        this.brace_preserve_inline = !1, this.brace_style = "collapse";
        for(var s = 0; s < i.length; s++)i[s] === "preserve-inline" ? this.brace_preserve_inline = !0 : this.brace_style = i[s];
        this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", !0), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", Je), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = !0);
    }
    Gt.prototype = new Vt;
    Ft.exports.Options = Gt;
});
var rt = g((rs, Qt)=>{
    "use strict";
    var $t = RegExp.prototype.hasOwnProperty("sticky");
    function x(t) {
        this.__input = t || "", this.__input_length = this.__input.length, this.__position = 0;
    }
    x.prototype.restart = function() {
        this.__position = 0;
    };
    x.prototype.back = function() {
        this.__position > 0 && (this.__position -= 1);
    };
    x.prototype.hasNext = function() {
        return this.__position < this.__input_length;
    };
    x.prototype.next = function() {
        var t = null;
        return this.hasNext() && (t = this.__input.charAt(this.__position), this.__position += 1), t;
    };
    x.prototype.peek = function(t) {
        var e = null;
        return t = t || 0, t += this.__position, t >= 0 && t < this.__input_length && (e = this.__input.charAt(t)), e;
    };
    x.prototype.__match = function(t, e) {
        t.lastIndex = e;
        var i = t.exec(this.__input);
        return i && !($t && t.sticky) && i.index !== e && (i = null), i;
    };
    x.prototype.test = function(t, e) {
        return e = e || 0, e += this.__position, e >= 0 && e < this.__input_length ? !!this.__match(t, e) : !1;
    };
    x.prototype.testChar = function(t, e) {
        var i = this.peek(e);
        return t.lastIndex = 0, i !== null && t.test(i);
    };
    x.prototype.match = function(t) {
        var e = this.__match(t, this.__position);
        return e ? this.__position += e[0].length : e = null, e;
    };
    x.prototype.read = function(t, e, i) {
        var s = "", _;
        return t && (_ = this.match(t), _ && (s += _[0])), e && (_ || !t) && (s += this.readUntil(e, i)), s;
    };
    x.prototype.readUntil = function(t, e) {
        var i = "", s = this.__position;
        t.lastIndex = this.__position;
        var _ = t.exec(this.__input);
        return _ ? (s = _.index, e && (s += _[0].length)) : s = this.__input_length, i = this.__input.substring(this.__position, s), this.__position = s, i;
    };
    x.prototype.readUntilAfter = function(t) {
        return this.readUntil(t, !0);
    };
    x.prototype.get_regexp = function(t, e) {
        var i = null, s = "g";
        return e && $t && (s = "y"), typeof t == "string" && t !== "" ? i = new RegExp(t, s) : t && (i = new RegExp(t.source, s)), i;
    };
    x.prototype.get_literal_regexp = function(t) {
        return RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
    };
    x.prototype.peekUntilAfter = function(t) {
        var e = this.__position, i = this.readUntilAfter(t);
        return this.__position = e, i;
    };
    x.prototype.lookBack = function(t) {
        var e = this.__position - 1;
        return e >= t.length && this.__input.substring(e - t.length, e).toLowerCase() === t;
    };
    Qt.exports.InputScanner = x;
});
var Zt = g((us, Yt)=>{
    "use strict";
    function U(t) {
        this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = t;
    }
    U.prototype.restart = function() {
        this.__position = 0;
    };
    U.prototype.isEmpty = function() {
        return this.__tokens_length === 0;
    };
    U.prototype.hasNext = function() {
        return this.__position < this.__tokens_length;
    };
    U.prototype.next = function() {
        var t = null;
        return this.hasNext() && (t = this.__tokens[this.__position], this.__position += 1), t;
    };
    U.prototype.peek = function(t) {
        var e = null;
        return t = t || 0, t += this.__position, t >= 0 && t < this.__tokens_length && (e = this.__tokens[t]), e;
    };
    U.prototype.add = function(t) {
        this.__parent_token && (t.parent = this.__parent_token), this.__tokens.push(t), this.__tokens_length += 1;
    };
    Yt.exports.TokenStream = U;
});
var G = g((os, Ht)=>{
    "use strict";
    function P(t, e) {
        this._input = t, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, e && (this._starting_pattern = this._input.get_regexp(e._starting_pattern, !0), this._match_pattern = this._input.get_regexp(e._match_pattern, !0), this._until_pattern = this._input.get_regexp(e._until_pattern), this._until_after = e._until_after);
    }
    P.prototype.read = function() {
        var t = this._input.read(this._starting_pattern);
        return (!this._starting_pattern || t) && (t += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), t;
    };
    P.prototype.read_match = function() {
        return this._input.match(this._match_pattern);
    };
    P.prototype.until_after = function(t) {
        var e = this._create();
        return e._until_after = !0, e._until_pattern = this._input.get_regexp(t), e._update(), e;
    };
    P.prototype.until = function(t) {
        var e = this._create();
        return e._until_after = !1, e._until_pattern = this._input.get_regexp(t), e._update(), e;
    };
    P.prototype.starting_with = function(t) {
        var e = this._create();
        return e._starting_pattern = this._input.get_regexp(t, !0), e._update(), e;
    };
    P.prototype.matching = function(t) {
        var e = this._create();
        return e._match_pattern = this._input.get_regexp(t, !0), e._update(), e;
    };
    P.prototype._create = function() {
        return new P(this._input, this);
    };
    P.prototype._update = function() {};
    Ht.exports.Pattern = P;
});
var ee = g((hs, te)=>{
    "use strict";
    var Jt = G().Pattern;
    function K(t, e) {
        Jt.call(this, t, e), e ? this._line_regexp = this._input.get_regexp(e._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
    }
    K.prototype = new Jt;
    K.prototype.__set_whitespace_patterns = function(t, e) {
        t += "\\t ", e += "\\n\\r", this._match_pattern = this._input.get_regexp("[" + t + e + "]+", !0), this._newline_regexp = this._input.get_regexp("\\r\\n|[" + e + "]");
    };
    K.prototype.read = function() {
        this.newline_count = 0, this.whitespace_before_token = "";
        var t = this._input.read(this._match_pattern);
        if (t === " ") this.whitespace_before_token = " ";
        else if (t) {
            var e = this.__split(this._newline_regexp, t);
            this.newline_count = e.length - 1, this.whitespace_before_token = e[this.newline_count];
        }
        return t;
    };
    K.prototype.matching = function(t, e) {
        var i = this._create();
        return i.__set_whitespace_patterns(t, e), i._update(), i;
    };
    K.prototype._create = function() {
        return new K(this._input, this);
    };
    K.prototype.__split = function(t, e) {
        t.lastIndex = 0;
        for(var i = 0, s = [], _ = t.exec(e); _;)s.push(e.substring(i, _.index)), i = _.index + _[0].length, _ = t.exec(e);
        return i < e.length ? s.push(e.substring(i, e.length)) : s.push(""), s;
    };
    te.exports.WhitespacePattern = K;
});
var $ = g((ls, vt)=>{
    "use strict";
    var ti = rt().InputScanner, ie = dt().Token, yt = Zt().TokenStream, ei = ee().WhitespacePattern, F = {
        START: "TK_START",
        RAW: "TK_RAW",
        EOF: "TK_EOF"
    }, D = function(t, e) {
        this._input = new ti(t), this._options = e || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new ei(this._input);
    };
    D.prototype.tokenize = function() {
        this._input.restart(), this.__tokens = new yt, this._reset();
        for(var t, e = new ie(F.START, ""), i = null, s = [], _ = new yt; e.type !== F.EOF;){
            for(t = this._get_next_token(e, i); this._is_comment(t);)_.add(t), t = this._get_next_token(e, i);
            _.isEmpty() || (t.comments_before = _, _ = new yt), t.parent = i, this._is_opening(t) ? (s.push(i), i = t) : i && this._is_closing(t, i) && (t.opened = i, i.closed = t, i = s.pop(), t.parent = i), t.previous = e, e.next = t, this.__tokens.add(t), e = t;
        }
        return this.__tokens;
    };
    D.prototype._is_first_token = function() {
        return this.__tokens.isEmpty();
    };
    D.prototype._reset = function() {};
    D.prototype._get_next_token = function(t, e) {
        this._readWhitespace();
        var i = this._input.read(/.+/g);
        return i ? this._create_token(F.RAW, i) : this._create_token(F.EOF, "");
    };
    D.prototype._is_comment = function(t) {
        return !1;
    };
    D.prototype._is_opening = function(t) {
        return !1;
    };
    D.prototype._is_closing = function(t, e) {
        return !1;
    };
    D.prototype._create_token = function(t, e) {
        var i = new ie(t, e, this._patterns.whitespace.newline_count, this._patterns.whitespace.whitespace_before_token);
        return i;
    };
    D.prototype._readWhitespace = function() {
        return this._patterns.whitespace.read();
    };
    vt.exports.Tokenizer = D;
    vt.exports.TOKEN = F;
});
var ut = g((ps, se)=>{
    "use strict";
    function wt(t, e) {
        t = typeof t == "string" ? t : t.source, e = typeof e == "string" ? e : e.source, this.__directives_block_pattern = new RegExp(t + / beautify( \w+[:]\w+)+ /.source + e, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(t + /\sbeautify\signore:end\s/.source + e, "g");
    }
    wt.prototype.get_directives = function(t) {
        if (!t.match(this.__directives_block_pattern)) return null;
        var e = {};
        this.__directive_pattern.lastIndex = 0;
        for(var i = this.__directive_pattern.exec(t); i;)e[i[1]] = i[2], i = this.__directive_pattern.exec(t);
        return e;
    };
    wt.prototype.readIgnored = function(t) {
        return t.readUntilAfter(this.__directives_end_ignore_pattern);
    };
    se.exports.Directives = wt;
});
var Ot = g((fs, _e)=>{
    "use strict";
    var xt = G().Pattern, Et = {
        django: !1,
        erb: !1,
        handlebars: !1,
        php: !1,
        smarty: !1
    };
    function N(t, e) {
        xt.call(this, t, e), this.__template_pattern = null, this._disabled = Object.assign({}, Et), this._excluded = Object.assign({}, Et), e && (this.__template_pattern = this._input.get_regexp(e.__template_pattern), this._excluded = Object.assign(this._excluded, e._excluded), this._disabled = Object.assign(this._disabled, e._disabled));
        var i = new xt(t);
        this.__patterns = {
            handlebars_comment: i.starting_with(/{{!--/).until_after(/--}}/),
            handlebars_unescaped: i.starting_with(/{{{/).until_after(/}}}/),
            handlebars: i.starting_with(/{{/).until_after(/}}/),
            php: i.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
            erb: i.starting_with(/<%[^%]/).until_after(/[^%]%>/),
            django: i.starting_with(/{%/).until_after(/%}/),
            django_value: i.starting_with(/{{/).until_after(/}}/),
            django_comment: i.starting_with(/{#/).until_after(/#}/),
            smarty: i.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
            smarty_comment: i.starting_with(/{\*/).until_after(/\*}/),
            smarty_literal: i.starting_with(/{literal}/).until_after(/{\/literal}/)
        };
    }
    N.prototype = new xt;
    N.prototype._create = function() {
        return new N(this._input, this);
    };
    N.prototype._update = function() {
        this.__set_templated_pattern();
    };
    N.prototype.disable = function(t) {
        var e = this._create();
        return e._disabled[t] = !0, e._update(), e;
    };
    N.prototype.read_options = function(t) {
        var e = this._create();
        for(var i in Et)e._disabled[i] = t.templating.indexOf(i) === -1;
        return e._update(), e;
    };
    N.prototype.exclude = function(t) {
        var e = this._create();
        return e._excluded[t] = !0, e._update(), e;
    };
    N.prototype.read = function() {
        var t = "";
        this._match_pattern ? t = this._input.read(this._starting_pattern) : t = this._input.read(this._starting_pattern, this.__template_pattern);
        for(var e = this._read_template(); e;)this._match_pattern ? e += this._input.read(this._match_pattern) : e += this._input.readUntil(this.__template_pattern), t += e, e = this._read_template();
        return this._until_after && (t += this._input.readUntilAfter(this._until_pattern)), t;
    };
    N.prototype.__set_templated_pattern = function() {
        var t = [];
        this._disabled.php || t.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || t.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || t.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (t.push(this.__patterns.django._starting_pattern.source), t.push(this.__patterns.django_value._starting_pattern.source), t.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || t.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && t.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + t.join("|") + ")");
    };
    N.prototype._read_template = function() {
        var t = "", e = this._input.peek();
        if (e === "<") {
            var i = this._input.peek(1);
            !this._disabled.php && !this._excluded.php && i === "?" && (t = t || this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && i === "%" && (t = t || this.__patterns.erb.read());
        } else e === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (t = t || this.__patterns.handlebars_comment.read(), t = t || this.__patterns.handlebars_unescaped.read(), t = t || this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (t = t || this.__patterns.django_value.read()), this._excluded.django || (t = t || this.__patterns.django_comment.read(), t = t || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (t = t || this.__patterns.smarty_comment.read(), t = t || this.__patterns.smarty_literal.read(), t = t || this.__patterns.smarty.read()));
        return t;
    };
    _e.exports.TemplatablePattern = N;
});
var Y = g((cs, Q)=>{
    "use strict";
    var ii = rt().InputScanner, ae = $().Tokenizer, Tt = $().TOKEN, si = ut().Directives, T = mt(), _i = G().Pattern, ni = Ot().TemplatablePattern;
    function kt(t, e) {
        return e.indexOf(t) !== -1;
    }
    var u = {
        START_EXPR: "TK_START_EXPR",
        END_EXPR: "TK_END_EXPR",
        START_BLOCK: "TK_START_BLOCK",
        END_BLOCK: "TK_END_BLOCK",
        WORD: "TK_WORD",
        RESERVED: "TK_RESERVED",
        SEMICOLON: "TK_SEMICOLON",
        STRING: "TK_STRING",
        EQUALS: "TK_EQUALS",
        OPERATOR: "TK_OPERATOR",
        COMMA: "TK_COMMA",
        BLOCK_COMMENT: "TK_BLOCK_COMMENT",
        COMMENT: "TK_COMMENT",
        DOT: "TK_DOT",
        UNKNOWN: "TK_UNKNOWN",
        START: Tt.START,
        RAW: Tt.RAW,
        EOF: Tt.EOF
    }, ne = new si(/\/\*/, /\*\//), ai = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/, ri = /[0-9]/, ui = /[^\d\.]/, oi = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "), z = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
    z = z.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
    z = "\\?\\.(?!\\d) " + z;
    z = z.replace(/ /g, "|");
    var hi = new RegExp(z), re = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","), li = re.concat([
        "do",
        "in",
        "of",
        "else",
        "get",
        "set",
        "new",
        "catch",
        "finally",
        "typeof",
        "yield",
        "async",
        "await",
        "from",
        "as",
        "class",
        "extends"
    ]), pi = new RegExp("^(?:" + li.join("|") + ")$"), ot, E = function(t, e) {
        ae.call(this, t, e), this._patterns.whitespace = this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source, /\u2028\u2029/.source);
        var i = new _i(this._input), s = new ni(this._input).read_options(this._options);
        this.__patterns = {
            template: s,
            identifier: s.starting_with(T.identifier).matching(T.identifierMatch),
            number: i.matching(ai),
            punct: i.matching(hi),
            comment: i.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
            block_comment: i.starting_with(/\/\*/).until_after(/\*\//),
            html_comment_start: i.matching(/<!--/),
            html_comment_end: i.matching(/-->/),
            include: i.starting_with(/#include/).until_after(T.lineBreak),
            shebang: i.starting_with(/#!/).until_after(T.lineBreak),
            xml: i.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
            single_quote: s.until(/['\\\n\r\u2028\u2029]/),
            double_quote: s.until(/["\\\n\r\u2028\u2029]/),
            template_text: s.until(/[`\\$]/),
            template_expression: s.until(/[`}\\]/)
        };
    };
    E.prototype = new ae;
    E.prototype._is_comment = function(t) {
        return t.type === u.COMMENT || t.type === u.BLOCK_COMMENT || t.type === u.UNKNOWN;
    };
    E.prototype._is_opening = function(t) {
        return t.type === u.START_BLOCK || t.type === u.START_EXPR;
    };
    E.prototype._is_closing = function(t, e) {
        return (t.type === u.END_BLOCK || t.type === u.END_EXPR) && e && (t.text === "]" && e.text === "[" || t.text === ")" && e.text === "(" || t.text === "}" && e.text === "{");
    };
    E.prototype._reset = function() {
        ot = !1;
    };
    E.prototype._get_next_token = function(t, e) {
        var i = null;
        this._readWhitespace();
        var s = this._input.peek();
        return s === null ? this._create_token(u.EOF, "") : (i = i || this._read_non_javascript(s), i = i || this._read_string(s), i = i || this._read_word(t), i = i || this._read_singles(s), i = i || this._read_comment(s), i = i || this._read_regexp(s, t), i = i || this._read_xml(s, t), i = i || this._read_punctuation(), i = i || this._create_token(u.UNKNOWN, this._input.next()), i);
    };
    E.prototype._read_word = function(t) {
        var e;
        if (e = this.__patterns.identifier.read(), e !== "") return e = e.replace(T.allLineBreaks, `
`), !(t.type === u.DOT || t.type === u.RESERVED && (t.text === "set" || t.text === "get")) && pi.test(e) ? (e === "in" || e === "of") && (t.type === u.WORD || t.type === u.STRING) ? this._create_token(u.OPERATOR, e) : this._create_token(u.RESERVED, e) : this._create_token(u.WORD, e);
        if (e = this.__patterns.number.read(), e !== "") return this._create_token(u.WORD, e);
    };
    E.prototype._read_singles = function(t) {
        var e = null;
        return t === "(" || t === "[" ? e = this._create_token(u.START_EXPR, t) : t === ")" || t === "]" ? e = this._create_token(u.END_EXPR, t) : t === "{" ? e = this._create_token(u.START_BLOCK, t) : t === "}" ? e = this._create_token(u.END_BLOCK, t) : t === ";" ? e = this._create_token(u.SEMICOLON, t) : t === "." && ui.test(this._input.peek(1)) ? e = this._create_token(u.DOT, t) : t === "," && (e = this._create_token(u.COMMA, t)), e && this._input.next(), e;
    };
    E.prototype._read_punctuation = function() {
        var t = this.__patterns.punct.read();
        if (t !== "") return t === "=" ? this._create_token(u.EQUALS, t) : t === "?." ? this._create_token(u.DOT, t) : this._create_token(u.OPERATOR, t);
    };
    E.prototype._read_non_javascript = function(t) {
        var e = "";
        if (t === "#") {
            if (this._is_first_token() && (e = this.__patterns.shebang.read(), e)) return this._create_token(u.UNKNOWN, e.trim() + `
`);
            if (e = this.__patterns.include.read(), e) return this._create_token(u.UNKNOWN, e.trim() + `
`);
            t = this._input.next();
            var i = "#";
            if (this._input.hasNext() && this._input.testChar(ri)) {
                do t = this._input.next(), i += t;
                while (this._input.hasNext() && t !== "#" && t !== "=")
                return t === "#" || (this._input.peek() === "[" && this._input.peek(1) === "]" ? (i += "[]", this._input.next(), this._input.next()) : this._input.peek() === "{" && this._input.peek(1) === "}" && (i += "{}", this._input.next(), this._input.next())), this._create_token(u.WORD, i);
            }
            this._input.back();
        } else if (t === "<" && this._is_first_token()) {
            if (e = this.__patterns.html_comment_start.read(), e) {
                for(; this._input.hasNext() && !this._input.testChar(T.newline);)e += this._input.next();
                return ot = !0, this._create_token(u.COMMENT, e);
            }
        } else if (ot && t === "-" && (e = this.__patterns.html_comment_end.read(), e)) return ot = !1, this._create_token(u.COMMENT, e);
        return null;
    };
    E.prototype._read_comment = function(t) {
        var e = null;
        if (t === "/") {
            var i = "";
            if (this._input.peek(1) === "*") {
                i = this.__patterns.block_comment.read();
                var s = ne.get_directives(i);
                s && s.ignore === "start" && (i += ne.readIgnored(this._input)), i = i.replace(T.allLineBreaks, `
`), e = this._create_token(u.BLOCK_COMMENT, i), e.directives = s;
            } else this._input.peek(1) === "/" && (i = this.__patterns.comment.read(), e = this._create_token(u.COMMENT, i));
        }
        return e;
    };
    E.prototype._read_string = function(t) {
        if (t === "`" || t === "'" || t === '"') {
            var e = this._input.next();
            return this.has_char_escapes = !1, t === "`" ? e += this._read_string_recursive("`", !0, "${") : e += this._read_string_recursive(t), this.has_char_escapes && this._options.unescape_strings && (e = fi(e)), this._input.peek() === t && (e += this._input.next()), e = e.replace(T.allLineBreaks, `
`), this._create_token(u.STRING, e);
        }
        return null;
    };
    E.prototype._allow_regexp_or_xml = function(t) {
        return t.type === u.RESERVED && kt(t.text, [
            "return",
            "case",
            "throw",
            "else",
            "do",
            "typeof",
            "yield"
        ]) || t.type === u.END_EXPR && t.text === ")" && t.opened.previous.type === u.RESERVED && kt(t.opened.previous.text, [
            "if",
            "while",
            "for"
        ]) || kt(t.type, [
            u.COMMENT,
            u.START_EXPR,
            u.START_BLOCK,
            u.START,
            u.END_BLOCK,
            u.OPERATOR,
            u.EQUALS,
            u.EOF,
            u.SEMICOLON,
            u.COMMA
        ]);
    };
    E.prototype._read_regexp = function(t, e) {
        if (t === "/" && this._allow_regexp_or_xml(e)) {
            for(var i = this._input.next(), s = !1, _ = !1; this._input.hasNext() && (s || _ || this._input.peek() !== t) && !this._input.testChar(T.newline);)i += this._input.peek(), s ? s = !1 : (s = this._input.peek() === "\\", this._input.peek() === "[" ? _ = !0 : this._input.peek() === "]" && (_ = !1)), this._input.next();
            return this._input.peek() === t && (i += this._input.next(), i += this._input.read(T.identifier)), this._create_token(u.STRING, i);
        }
        return null;
    };
    E.prototype._read_xml = function(t, e) {
        if (this._options.e4x && t === "<" && this._allow_regexp_or_xml(e)) {
            var i = "", s = this.__patterns.xml.read_match();
            if (s) {
                for(var _ = s[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), a = _.indexOf("{") === 0, r = 0; s;){
                    var f = !!s[1], l = s[2], m = !!s[s.length - 1] || l.slice(0, 8) === "![CDATA[";
                    if (!m && (l === _ || a && l.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (f ? --r : ++r), i += s[0], r <= 0) break;
                    s = this.__patterns.xml.read_match();
                }
                return s || (i += this._input.match(/[\s\S]*/g)[0]), i = i.replace(T.allLineBreaks, `
`), this._create_token(u.STRING, i);
            }
        }
        return null;
    };
    function fi(t) {
        for(var e = "", i = 0, s = new ii(t), _ = null; s.hasNext();)if (_ = s.match(/([\s]|[^\\]|\\\\)+/g), _ && (e += _[0]), s.peek() === "\\") {
            if (s.next(), s.peek() === "x") _ = s.match(/x([0-9A-Fa-f]{2})/g);
            else if (s.peek() === "u") _ = s.match(/u([0-9A-Fa-f]{4})/g);
            else {
                e += "\\", s.hasNext() && (e += s.next());
                continue;
            }
            if (!_ || (i = parseInt(_[1], 16), i > 126 && i <= 255 && _[0].indexOf("x") === 0)) return t;
            if (i >= 0 && i < 32) {
                e += "\\" + _[0];
                continue;
            } else i === 34 || i === 39 || i === 92 ? e += "\\" + String.fromCharCode(i) : e += String.fromCharCode(i);
        }
        return e;
    }
    E.prototype._read_string_recursive = function(t, e, i) {
        var s, _;
        t === "'" ? _ = this.__patterns.single_quote : t === '"' ? _ = this.__patterns.double_quote : t === "`" ? _ = this.__patterns.template_text : t === "}" && (_ = this.__patterns.template_expression);
        for(var a = _.read(), r = ""; this._input.hasNext();){
            if (r = this._input.next(), r === t || !e && T.newline.test(r)) {
                this._input.back();
                break;
            } else r === "\\" && this._input.hasNext() ? (s = this._input.peek(), s === "x" || s === "u" ? this.has_char_escapes = !0 : s === "\r" && this._input.peek(1) === `
` && this._input.next(), r += this._input.next()) : i && (i === "${" && r === "$" && this._input.peek() === "{" && (r += this._input.next()), i === r && (t === "`" ? r += this._read_string_recursive("}", e, "`") : r += this._read_string_recursive("`", e, "${"), this._input.hasNext() && (r += this._input.next())));
            r += _.read(), a += r;
        }
        return a;
    };
    Q.exports.Tokenizer = E;
    Q.exports.TOKEN = u;
    Q.exports.positionable_operators = oi.slice();
    Q.exports.line_starters = re.slice();
});
var le = g((ds, he)=>{
    "use strict";
    var ci = _t().Output, di = dt().Token, ht = mt(), gi = bt().Options, mi = Y().Tokenizer, tt = Y().line_starters, Z = Y().positionable_operators, n = Y().TOKEN;
    function h(t, e) {
        return e.indexOf(t) !== -1;
    }
    function bi(t) {
        return t.replace(/^\s+/g, "");
    }
    function yi(t) {
        for(var e = {}, i = 0; i < t.length; i++)e[t[i].replace(/-/g, "_")] = t[i];
        return e;
    }
    function k(t, e) {
        return t && t.type === n.RESERVED && t.text === e;
    }
    function d(t, e) {
        return t && t.type === n.RESERVED && h(t.text, e);
    }
    var lt = [
        "case",
        "return",
        "do",
        "if",
        "throw",
        "else",
        "await",
        "break",
        "continue",
        "async"
    ], vi = [
        "before-newline",
        "after-newline",
        "preserve-newline"
    ], H = yi(vi), ue = [
        H.before_newline,
        H.preserve_newline
    ], o = {
        BlockStatement: "BlockStatement",
        Statement: "Statement",
        ObjectLiteral: "ObjectLiteral",
        ArrayLiteral: "ArrayLiteral",
        ForInitializer: "ForInitializer",
        Conditional: "Conditional",
        Expression: "Expression"
    };
    function oe(t, e) {
        e.multiline_frame || e.mode === o.ForInitializer || e.mode === o.Conditional || t.remove_indent(e.start_line_index);
    }
    function wi(t) {
        t = t.replace(ht.allLineBreaks, `
`);
        for(var e = [], i = t.indexOf(`
`); i !== -1;)e.push(t.substring(0, i)), t = t.substring(i + 1), i = t.indexOf(`
`);
        return t.length && e.push(t), e;
    }
    function W(t) {
        return t === o.ArrayLiteral;
    }
    function J(t) {
        return h(t, [
            o.Expression,
            o.ForInitializer,
            o.Conditional
        ]);
    }
    function xi(t, e) {
        for(var i = 0; i < t.length; i++){
            var s = t[i].trim();
            if (s.charAt(0) !== e) return !1;
        }
        return !0;
    }
    function Ei(t, e) {
        for(var i = 0, s = t.length, _; i < s; i++)if (_ = t[i], _ && _.indexOf(e) !== 0) return !1;
        return !0;
    }
    function p(t, e) {
        e = e || {}, this._source_text = t || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new gi(e);
    }
    p.prototype.create_flags = function(t, e) {
        var i = 0;
        t && (i = t.indentation_level, !this._output.just_added_newline() && t.line_indent_level > i && (i = t.line_indent_level));
        var s = {
            mode: e,
            parent: t,
            last_token: t ? t.last_token : new di(n.START_BLOCK, ""),
            last_word: t ? t.last_word : "",
            declaration_statement: !1,
            declaration_assignment: !1,
            multiline_frame: !1,
            inline_frame: !1,
            if_block: !1,
            else_block: !1,
            class_start_block: !1,
            do_block: !1,
            do_while: !1,
            import_block: !1,
            in_case_statement: !1,
            in_case: !1,
            case_body: !1,
            case_block: !1,
            indentation_level: i,
            alignment: 0,
            line_indent_level: t ? t.line_indent_level : i,
            start_line_index: this._output.get_line_number(),
            ternary_depth: 0
        };
        return s;
    };
    p.prototype._reset = function(t) {
        var e = t.match(/^[\t ]*/)[0];
        this._last_last_text = "", this._output = new ci(this._options, e), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(o.BlockStatement);
        var i = new mi(t, this._options);
        return this._tokens = i.tokenize(), t;
    };
    p.prototype.beautify = function() {
        if (this._options.disabled) return this._source_text;
        var t, e = this._reset(this._source_text), i = this._options.eol;
        this._options.eol === "auto" && (i = `
`, e && ht.lineBreak.test(e || "") && (i = e.match(ht.lineBreak)[0]));
        for(var s = this._tokens.next(); s;)this.handle_token(s), this._last_last_text = this._flags.last_token.text, this._flags.last_token = s, s = this._tokens.next();
        return t = this._output.get_code(i), t;
    };
    p.prototype.handle_token = function(t, e) {
        t.type === n.START_EXPR ? this.handle_start_expr(t) : t.type === n.END_EXPR ? this.handle_end_expr(t) : t.type === n.START_BLOCK ? this.handle_start_block(t) : t.type === n.END_BLOCK ? this.handle_end_block(t) : t.type === n.WORD ? this.handle_word(t) : t.type === n.RESERVED ? this.handle_word(t) : t.type === n.SEMICOLON ? this.handle_semicolon(t) : t.type === n.STRING ? this.handle_string(t) : t.type === n.EQUALS ? this.handle_equals(t) : t.type === n.OPERATOR ? this.handle_operator(t) : t.type === n.COMMA ? this.handle_comma(t) : t.type === n.BLOCK_COMMENT ? this.handle_block_comment(t, e) : t.type === n.COMMENT ? this.handle_comment(t, e) : t.type === n.DOT ? this.handle_dot(t) : t.type === n.EOF ? this.handle_eof(t) : t.type === n.UNKNOWN ? this.handle_unknown(t, e) : this.handle_unknown(t, e);
    };
    p.prototype.handle_whitespace_and_comments = function(t, e) {
        var i = t.newlines, s = this._options.keep_array_indentation && W(this._flags.mode);
        if (t.comments_before) for(var _ = t.comments_before.next(); _;)this.handle_whitespace_and_comments(_, e), this.handle_token(_, e), _ = t.comments_before.next();
        if (s) for(var a = 0; a < i; a += 1)this.print_newline(a > 0, e);
        else if (this._options.max_preserve_newlines && i > this._options.max_preserve_newlines && (i = this._options.max_preserve_newlines), this._options.preserve_newlines && i > 1) {
            this.print_newline(!1, e);
            for(var r = 1; r < i; r += 1)this.print_newline(!0, e);
        }
    };
    var Rt = [
        "async",
        "break",
        "continue",
        "return",
        "throw",
        "yield"
    ];
    p.prototype.allow_wrap_or_preserved_newline = function(t, e) {
        if (e = e === void 0 ? !1 : e, !this._output.just_added_newline()) {
            var i = this._options.preserve_newlines && t.newlines || e, s = h(this._flags.last_token.text, Z) || h(t.text, Z);
            if (s) {
                var _ = h(this._flags.last_token.text, Z) && h(this._options.operator_position, ue) || h(t.text, Z);
                i = i && _;
            }
            if (i) this.print_newline(!1, !0);
            else if (this._options.wrap_line_length) {
                if (d(this._flags.last_token, Rt)) return;
                this._output.set_wrap_point();
            }
        }
    };
    p.prototype.print_newline = function(t, e) {
        if (!e && this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== n.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) for(var i = this._tokens.peek(); this._flags.mode === o.Statement && !(this._flags.if_block && k(i, "else")) && !this._flags.do_block;)this.restore_mode();
        this._output.add_new_line(t) && (this._flags.multiline_frame = !0);
    };
    p.prototype.print_token_line_indentation = function(t) {
        this._output.just_added_newline() && (this._options.keep_array_indentation && t.newlines && (t.text === "[" || W(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(t.whitespace_before), this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level));
    };
    p.prototype.print_token = function(t) {
        if (this._output.raw) {
            this._output.add_raw_token(t);
            return;
        }
        if (this._options.comma_first && t.previous && t.previous.type === n.COMMA && this._output.just_added_newline() && this._output.previous_line.last() === ",") {
            var e = this._output.previous_line.pop();
            this._output.previous_line.is_empty() && (this._output.previous_line.push(e), this._output.trim(!0), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(t), this._output.add_token(","), this._output.space_before_token = !0;
        }
        this.print_token_line_indentation(t), this._output.non_breaking_space = !0, this._output.add_token(t.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = !0);
    };
    p.prototype.indent = function() {
        this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
    };
    p.prototype.deindent = function() {
        this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
    };
    p.prototype.set_mode = function(t) {
        this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, t), this._flags = this.create_flags(this._previous_flags, t), this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
    };
    p.prototype.restore_mode = function() {
        this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === o.Statement && oe(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
    };
    p.prototype.start_of_object_property = function() {
        return this._flags.parent.mode === o.ObjectLiteral && this._flags.mode === o.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || d(this._flags.last_token, [
            "get",
            "set"
        ]));
    };
    p.prototype.start_of_statement = function(t) {
        var e = !1;
        return e = e || d(this._flags.last_token, [
            "var",
            "let",
            "const"
        ]) && t.type === n.WORD, e = e || k(this._flags.last_token, "do"), e = e || !(this._flags.parent.mode === o.ObjectLiteral && this._flags.mode === o.Statement) && d(this._flags.last_token, Rt) && !t.newlines, e = e || k(this._flags.last_token, "else") && !(k(t, "if") && !t.comments_before), e = e || this._flags.last_token.type === n.END_EXPR && (this._previous_flags.mode === o.ForInitializer || this._previous_flags.mode === o.Conditional), e = e || this._flags.last_token.type === n.WORD && this._flags.mode === o.BlockStatement && !this._flags.in_case && !(t.text === "--" || t.text === "++") && this._last_last_text !== "function" && t.type !== n.WORD && t.type !== n.RESERVED, e = e || this._flags.mode === o.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || d(this._flags.last_token, [
            "get",
            "set"
        ])), e ? (this.set_mode(o.Statement), this.indent(), this.handle_whitespace_and_comments(t, !0), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(t, d(t, [
            "do",
            "for",
            "if",
            "while"
        ])), !0) : !1;
    };
    p.prototype.handle_start_expr = function(t) {
        this.start_of_statement(t) || this.handle_whitespace_and_comments(t);
        var e = o.Expression;
        if (t.text === "[") {
            if (this._flags.last_token.type === n.WORD || this._flags.last_token.text === ")") {
                d(this._flags.last_token, tt) && (this._output.space_before_token = !0), this.print_token(t), this.set_mode(e), this.indent(), this._options.space_in_paren && (this._output.space_before_token = !0);
                return;
            }
            e = o.ArrayLiteral, W(this._flags.mode) && (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) && (this._options.keep_array_indentation || this.print_newline()), h(this._flags.last_token.type, [
                n.START_EXPR,
                n.END_EXPR,
                n.WORD,
                n.OPERATOR,
                n.DOT
            ]) || (this._output.space_before_token = !0);
        } else {
            if (this._flags.last_token.type === n.RESERVED) this._flags.last_token.text === "for" ? (this._output.space_before_token = this._options.space_before_conditional, e = o.ForInitializer) : h(this._flags.last_token.text, [
                "if",
                "while",
                "switch"
            ]) ? (this._output.space_before_token = this._options.space_before_conditional, e = o.Conditional) : h(this._flags.last_word, [
                "await",
                "async"
            ]) ? this._output.space_before_token = !0 : this._flags.last_token.text === "import" && t.whitespace_before === "" ? this._output.space_before_token = !1 : (h(this._flags.last_token.text, tt) || this._flags.last_token.text === "catch") && (this._output.space_before_token = !0);
            else if (this._flags.last_token.type === n.EQUALS || this._flags.last_token.type === n.OPERATOR) this.start_of_object_property() || this.allow_wrap_or_preserved_newline(t);
            else if (this._flags.last_token.type === n.WORD) {
                this._output.space_before_token = !1;
                var i = this._tokens.peek(-3);
                if (this._options.space_after_named_function && i) {
                    var s = this._tokens.peek(-4);
                    d(i, [
                        "async",
                        "function"
                    ]) || i.text === "*" && d(s, [
                        "async",
                        "function"
                    ]) ? this._output.space_before_token = !0 : this._flags.mode === o.ObjectLiteral ? (i.text === "{" || i.text === "," || i.text === "*" && (s.text === "{" || s.text === ",")) && (this._output.space_before_token = !0) : this._flags.parent && this._flags.parent.class_start_block && (this._output.space_before_token = !0);
                }
            } else this.allow_wrap_or_preserved_newline(t);
            (this._flags.last_token.type === n.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (h(this._last_last_text, [
                "function",
                "yield"
            ]) || this._flags.mode === o.ObjectLiteral && h(this._last_last_text, [
                "{",
                ","
            ]))) && (this._output.space_before_token = this._options.space_after_anon_function);
        }
        this._flags.last_token.text === ";" || this._flags.last_token.type === n.START_BLOCK ? this.print_newline() : (this._flags.last_token.type === n.END_EXPR || this._flags.last_token.type === n.START_EXPR || this._flags.last_token.type === n.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === n.COMMA) && this.allow_wrap_or_preserved_newline(t, t.newlines), this.print_token(t), this.set_mode(e), this._options.space_in_paren && (this._output.space_before_token = !0), this.indent();
    };
    p.prototype.handle_end_expr = function(t) {
        for(; this._flags.mode === o.Statement;)this.restore_mode();
        this.handle_whitespace_and_comments(t), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(t, t.text === "]" && W(this._flags.mode) && !this._options.keep_array_indentation), this._options.space_in_paren && (this._flags.last_token.type === n.START_EXPR && !this._options.space_in_empty_paren ? (this._output.trim(), this._output.space_before_token = !1) : this._output.space_before_token = !0), this.deindent(), this.print_token(t), this.restore_mode(), oe(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === o.Conditional && (this._previous_flags.mode = o.Expression, this._flags.do_block = !1, this._flags.do_while = !1);
    };
    p.prototype.handle_start_block = function(t) {
        this.handle_whitespace_and_comments(t);
        var e = this._tokens.peek(), i = this._tokens.peek(1);
        this._flags.last_word === "switch" && this._flags.last_token.type === n.END_EXPR ? (this.set_mode(o.BlockStatement), this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(o.BlockStatement) : i && (h(i.text, [
            ":",
            ","
        ]) && h(e.type, [
            n.STRING,
            n.WORD,
            n.RESERVED
        ]) || h(e.text, [
            "get",
            "set",
            "..."
        ]) && h(i.type, [
            n.WORD,
            n.RESERVED
        ])) ? h(this._last_last_text, [
            "class",
            "interface"
        ]) && !h(i.text, [
            ":",
            ","
        ]) ? this.set_mode(o.BlockStatement) : this.set_mode(o.ObjectLiteral) : this._flags.last_token.type === n.OPERATOR && this._flags.last_token.text === "=>" ? this.set_mode(o.BlockStatement) : h(this._flags.last_token.type, [
            n.EQUALS,
            n.START_EXPR,
            n.COMMA,
            n.OPERATOR
        ]) || d(this._flags.last_token, [
            "return",
            "throw",
            "import",
            "default"
        ]) ? this.set_mode(o.ObjectLiteral) : this.set_mode(o.BlockStatement), this._flags.last_token && d(this._flags.last_token.previous, [
            "class",
            "extends"
        ]) && (this._flags.class_start_block = !0);
        var s = !e.comments_before && e.text === "}", _ = s && this._flags.last_word === "function" && this._flags.last_token.type === n.END_EXPR;
        if (this._options.brace_preserve_inline) {
            var a = 0, r = null;
            this._flags.inline_frame = !0;
            do if (a += 1, r = this._tokens.peek(a - 1), r.newlines) {
                this._flags.inline_frame = !1;
                break;
            }
            while (r.type !== n.EOF && !(r.type === n.END_BLOCK && r.opened === t))
        }
        (this._options.brace_style === "expand" || this._options.brace_style === "none" && t.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== n.OPERATOR && (_ || this._flags.last_token.type === n.EQUALS || d(this._flags.last_token, lt) && this._flags.last_token.text !== "else") ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (W(this._previous_flags.mode) && (this._flags.last_token.type === n.START_EXPR || this._flags.last_token.type === n.COMMA) && ((this._flags.last_token.type === n.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0), (this._flags.last_token.type === n.COMMA || this._flags.last_token.type === n.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(t), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = !1)), this._flags.last_token.type !== n.OPERATOR && this._flags.last_token.type !== n.START_EXPR && (this._flags.last_token.type === n.START_BLOCK && !this._flags.inline_frame ? this.print_newline() : this._output.space_before_token = !0)), this.print_token(t), this.indent(), !s && !(this._options.brace_preserve_inline && this._flags.inline_frame) && this.print_newline();
    };
    p.prototype.handle_end_block = function(t) {
        for(this.handle_whitespace_and_comments(t); this._flags.mode === o.Statement;)this.restore_mode();
        var e = this._flags.last_token.type === n.START_BLOCK;
        this._flags.inline_frame && !e ? this._output.space_before_token = !0 : this._options.brace_style === "expand" ? e || this.print_newline() : e || (W(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1, this.print_newline(), this._options.keep_array_indentation = !0) : this.print_newline()), this.restore_mode(), this.print_token(t);
    };
    p.prototype.handle_word = function(t) {
        if (t.type === n.RESERVED) {
            if (h(t.text, [
                "set",
                "get"
            ]) && this._flags.mode !== o.ObjectLiteral) t.type = n.WORD;
            else if (t.text === "import" && h(this._tokens.peek().text, [
                "(",
                "."
            ])) t.type = n.WORD;
            else if (h(t.text, [
                "as",
                "from"
            ]) && !this._flags.import_block) t.type = n.WORD;
            else if (this._flags.mode === o.ObjectLiteral) {
                var e = this._tokens.peek();
                e.text === ":" && (t.type = n.WORD);
            }
        }
        if (this.start_of_statement(t) ? d(this._flags.last_token, [
            "var",
            "let",
            "const"
        ]) && t.type === n.WORD && (this._flags.declaration_statement = !0) : t.newlines && !J(this._flags.mode) && (this._flags.last_token.type !== n.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++") && this._flags.last_token.type !== n.EQUALS && (this._options.preserve_newlines || !d(this._flags.last_token, [
            "var",
            "let",
            "const",
            "set",
            "get"
        ])) ? (this.handle_whitespace_and_comments(t), this.print_newline()) : this.handle_whitespace_and_comments(t), this._flags.do_block && !this._flags.do_while) if (k(t, "while")) {
            this._output.space_before_token = !0, this.print_token(t), this._output.space_before_token = !0, this._flags.do_while = !0;
            return;
        } else this.print_newline(), this._flags.do_block = !1;
        if (this._flags.if_block) if (!this._flags.else_block && k(t, "else")) this._flags.else_block = !0;
        else {
            for(; this._flags.mode === o.Statement;)this.restore_mode();
            this._flags.if_block = !1, this._flags.else_block = !1;
        }
        if (this._flags.in_case_statement && d(t, [
            "case",
            "default"
        ])) {
            this.print_newline(), !this._flags.case_block && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = !1, this.print_token(t), this._flags.in_case = !0;
            return;
        }
        if ((this._flags.last_token.type === n.COMMA || this._flags.last_token.type === n.START_EXPR || this._flags.last_token.type === n.EQUALS || this._flags.last_token.type === n.OPERATOR) && (this.start_of_object_property() || this.allow_wrap_or_preserved_newline(t)), k(t, "function")) {
            (h(this._flags.last_token.text, [
                "}",
                ";"
            ]) || this._output.just_added_newline() && !(h(this._flags.last_token.text, [
                "(",
                "[",
                "{",
                ":",
                "=",
                ","
            ]) || this._flags.last_token.type === n.OPERATOR)) && !this._output.just_added_blankline() && !t.comments_before && (this.print_newline(), this.print_newline(!0)), this._flags.last_token.type === n.RESERVED || this._flags.last_token.type === n.WORD ? d(this._flags.last_token, [
                "get",
                "set",
                "new",
                "export"
            ]) || d(this._flags.last_token, Rt) ? this._output.space_before_token = !0 : k(this._flags.last_token, "default") && this._last_last_text === "export" ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === n.OPERATOR || this._flags.last_token.text === "=" ? this._output.space_before_token = !0 : !this._flags.multiline_frame && (J(this._flags.mode) || W(this._flags.mode)) || this.print_newline(), this.print_token(t), this._flags.last_word = t.text;
            return;
        }
        var i = "NONE";
        if (this._flags.last_token.type === n.END_BLOCK ? this._previous_flags.inline_frame ? i = "SPACE" : d(t, [
            "else",
            "catch",
            "finally",
            "from"
        ]) ? this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && t.newlines ? i = "NEWLINE" : (i = "SPACE", this._output.space_before_token = !0) : i = "NEWLINE" : this._flags.last_token.type === n.SEMICOLON && this._flags.mode === o.BlockStatement ? i = "NEWLINE" : this._flags.last_token.type === n.SEMICOLON && J(this._flags.mode) ? i = "SPACE" : this._flags.last_token.type === n.STRING ? i = "NEWLINE" : this._flags.last_token.type === n.RESERVED || this._flags.last_token.type === n.WORD || this._flags.last_token.text === "*" && (h(this._last_last_text, [
            "function",
            "yield"
        ]) || this._flags.mode === o.ObjectLiteral && h(this._last_last_text, [
            "{",
            ","
        ])) ? i = "SPACE" : this._flags.last_token.type === n.START_BLOCK ? this._flags.inline_frame ? i = "SPACE" : i = "NEWLINE" : this._flags.last_token.type === n.END_EXPR && (this._output.space_before_token = !0, i = "NEWLINE"), d(t, tt) && this._flags.last_token.text !== ")" && (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export" ? i = "SPACE" : i = "NEWLINE"), d(t, [
            "else",
            "catch",
            "finally"
        ])) if ((!(this._flags.last_token.type === n.END_BLOCK && this._previous_flags.mode === o.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && t.newlines) && !this._flags.inline_frame) this.print_newline();
        else {
            this._output.trim(!0);
            var s = this._output.current_line;
            s.last() !== "}" && this.print_newline(), this._output.space_before_token = !0;
        }
        else i === "NEWLINE" ? d(this._flags.last_token, lt) ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" && d(t, [
            "var",
            "let",
            "const"
        ]) ? this._output.space_before_token = !0 : this._flags.last_token.type !== n.END_EXPR ? (this._flags.last_token.type !== n.START_EXPR || !d(t, [
            "var",
            "let",
            "const"
        ])) && this._flags.last_token.text !== ":" && (k(t, "if") && k(t.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : d(t, tt) && this._flags.last_token.text !== ")" && this.print_newline() : this._flags.multiline_frame && W(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}" ? this.print_newline() : i === "SPACE" && (this._output.space_before_token = !0);
        t.previous && (t.previous.type === n.WORD || t.previous.type === n.RESERVED) && (this._output.space_before_token = !0), this.print_token(t), this._flags.last_word = t.text, t.type === n.RESERVED && (t.text === "do" ? this._flags.do_block = !0 : t.text === "if" ? this._flags.if_block = !0 : t.text === "import" ? this._flags.import_block = !0 : this._flags.import_block && k(t, "from") && (this._flags.import_block = !1));
    };
    p.prototype.handle_semicolon = function(t) {
        this.start_of_statement(t) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(t);
        for(var e = this._tokens.peek(); this._flags.mode === o.Statement && !(this._flags.if_block && k(e, "else")) && !this._flags.do_block;)this.restore_mode();
        this._flags.import_block && (this._flags.import_block = !1), this.print_token(t);
    };
    p.prototype.handle_string = function(t) {
        t.text.startsWith("`") && t.newlines === 0 && t.whitespace_before === "" && (t.previous.text === ")" || this._flags.last_token.type === n.WORD) || (this.start_of_statement(t) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(t), this._flags.last_token.type === n.RESERVED || this._flags.last_token.type === n.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === n.COMMA || this._flags.last_token.type === n.START_EXPR || this._flags.last_token.type === n.EQUALS || this._flags.last_token.type === n.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(t) : t.text.startsWith("`") && this._flags.last_token.type === n.END_EXPR && (t.previous.text === "]" || t.previous.text === ")") && t.newlines === 0 ? this._output.space_before_token = !0 : this.print_newline())), this.print_token(t);
    };
    p.prototype.handle_equals = function(t) {
        this.start_of_statement(t) || this.handle_whitespace_and_comments(t), this._flags.declaration_statement && (this._flags.declaration_assignment = !0), this._output.space_before_token = !0, this.print_token(t), this._output.space_before_token = !0;
    };
    p.prototype.handle_comma = function(t) {
        this.handle_whitespace_and_comments(t, !0), this.print_token(t), this._output.space_before_token = !0, this._flags.declaration_statement ? (J(this._flags.parent.mode) && (this._flags.declaration_assignment = !1), this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1, this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(t)) : this._flags.mode === o.ObjectLiteral || this._flags.mode === o.Statement && this._flags.parent.mode === o.ObjectLiteral ? (this._flags.mode === o.Statement && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(t);
    };
    p.prototype.handle_operator = function(t) {
        var e = t.text === "*" && (d(this._flags.last_token, [
            "function",
            "yield"
        ]) || h(this._flags.last_token.type, [
            n.START_BLOCK,
            n.COMMA,
            n.END_BLOCK,
            n.SEMICOLON
        ])), i = h(t.text, [
            "-",
            "+"
        ]) && (h(this._flags.last_token.type, [
            n.START_BLOCK,
            n.START_EXPR,
            n.EQUALS,
            n.OPERATOR
        ]) || h(this._flags.last_token.text, tt) || this._flags.last_token.text === ",");
        if (!this.start_of_statement(t)) {
            var s = !e;
            this.handle_whitespace_and_comments(t, s);
        }
        if (t.text === "*" && this._flags.last_token.type === n.DOT) {
            this.print_token(t);
            return;
        }
        if (t.text === "::") {
            this.print_token(t);
            return;
        }
        if (this._flags.last_token.type === n.OPERATOR && h(this._options.operator_position, ue) && this.allow_wrap_or_preserved_newline(t), t.text === ":" && this._flags.in_case) {
            this.print_token(t), this._flags.in_case = !1, this._flags.case_body = !0, this._tokens.peek().type !== n.START_BLOCK ? (this.indent(), this.print_newline(), this._flags.case_block = !1) : (this._flags.case_block = !0, this._output.space_before_token = !0);
            return;
        }
        var _ = !0, a = !0, r = !1;
        if (t.text === ":" ? this._flags.ternary_depth === 0 ? _ = !1 : (this._flags.ternary_depth -= 1, r = !0) : t.text === "?" && (this._flags.ternary_depth += 1), !i && !e && this._options.preserve_newlines && h(t.text, Z)) {
            var f = t.text === ":", l = f && r, m = f && !r;
            switch(this._options.operator_position){
                case H.before_newline:
                    this._output.space_before_token = !m, this.print_token(t), (!f || l) && this.allow_wrap_or_preserved_newline(t), this._output.space_before_token = !0;
                    return;
                case H.after_newline:
                    this._output.space_before_token = !0, !f || l ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(t) : this._output.space_before_token = !1, this.print_token(t), this._output.space_before_token = !0;
                    return;
                case H.preserve_newline:
                    m || this.allow_wrap_or_preserved_newline(t), _ = !(this._output.just_added_newline() || m), this._output.space_before_token = _, this.print_token(t), this._output.space_before_token = !0;
                    return;
            }
        }
        if (e) {
            this.allow_wrap_or_preserved_newline(t), _ = !1;
            var w = this._tokens.peek();
            a = w && h(w.type, [
                n.WORD,
                n.RESERVED
            ]);
        } else if (t.text === "...") this.allow_wrap_or_preserved_newline(t), _ = this._flags.last_token.type === n.START_BLOCK, a = !1;
        else if (h(t.text, [
            "--",
            "++",
            "!",
            "~"
        ]) || i) {
            if ((this._flags.last_token.type === n.COMMA || this._flags.last_token.type === n.START_EXPR) && this.allow_wrap_or_preserved_newline(t), _ = !1, a = !1, t.newlines && (t.text === "--" || t.text === "++" || t.text === "~")) {
                var B = d(this._flags.last_token, lt) && t.newlines;
                B && (this._previous_flags.if_block || this._previous_flags.else_block) && this.restore_mode(), this.print_newline(B, !0);
            }
            this._flags.last_token.text === ";" && J(this._flags.mode) && (_ = !0), this._flags.last_token.type === n.RESERVED ? _ = !0 : this._flags.last_token.type === n.END_EXPR ? _ = !(this._flags.last_token.text === "]" && (t.text === "--" || t.text === "++")) : this._flags.last_token.type === n.OPERATOR && (_ = h(t.text, [
                "--",
                "-",
                "++",
                "+"
            ]) && h(this._flags.last_token.text, [
                "--",
                "-",
                "++",
                "+"
            ]), h(t.text, [
                "+",
                "-"
            ]) && h(this._flags.last_token.text, [
                "--",
                "++"
            ]) && (a = !0)), (this._flags.mode === o.BlockStatement && !this._flags.inline_frame || this._flags.mode === o.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";") && this.print_newline();
        }
        this._output.space_before_token = this._output.space_before_token || _, this.print_token(t), this._output.space_before_token = a;
    };
    p.prototype.handle_block_comment = function(t, e) {
        if (this._output.raw) {
            this._output.add_raw_token(t), t.directives && t.directives.preserve === "end" && (this._output.raw = this._options.test_output_raw);
            return;
        }
        if (t.directives) {
            this.print_newline(!1, e), this.print_token(t), t.directives.preserve === "start" && (this._output.raw = !0), this.print_newline(!1, !0);
            return;
        }
        if (!ht.newline.test(t.text) && !t.newlines) {
            this._output.space_before_token = !0, this.print_token(t), this._output.space_before_token = !0;
            return;
        } else this.print_block_commment(t, e);
    };
    p.prototype.print_block_commment = function(t, e) {
        var i = wi(t.text), s, _ = !1, a = !1, r = t.whitespace_before, f = r.length;
        if (this.print_newline(!1, e), this.print_token_line_indentation(t), this._output.add_token(i[0]), this.print_newline(!1, e), i.length > 1) {
            for(i = i.slice(1), _ = xi(i, "*"), a = Ei(i, r), _ && (this._flags.alignment = 1), s = 0; s < i.length; s++)_ ? (this.print_token_line_indentation(t), this._output.add_token(bi(i[s]))) : a && i[s] ? (this.print_token_line_indentation(t), this._output.add_token(i[s].substring(f))) : (this._output.current_line.set_indent(-1), this._output.add_token(i[s])), this.print_newline(!1, e);
            this._flags.alignment = 0;
        }
    };
    p.prototype.handle_comment = function(t, e) {
        t.newlines ? this.print_newline(!1, e) : this._output.trim(!0), this._output.space_before_token = !0, this.print_token(t), this.print_newline(!1, e);
    };
    p.prototype.handle_dot = function(t) {
        this.start_of_statement(t) || this.handle_whitespace_and_comments(t, !0), this._flags.last_token.text.match("^[0-9]+$") && (this._output.space_before_token = !0), d(this._flags.last_token, lt) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(t, this._flags.last_token.text === ")" && this._options.break_chained_methods), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(t);
    };
    p.prototype.handle_unknown = function(t, e) {
        this.print_token(t), t.text[t.text.length - 1] === `
` && this.print_newline(!1, e);
    };
    p.prototype.handle_eof = function(t) {
        for(; this._flags.mode === o.Statement;)this.restore_mode();
        this.handle_whitespace_and_comments(t);
    };
    he.exports.Beautifier = p;
});
var pe = g((gs, At)=>{
    "use strict";
    var Oi = le().Beautifier, Ti = bt().Options;
    function ki(t, e) {
        var i = new Oi(t, e);
        return i.beautify();
    }
    At.exports = ki;
    At.exports.defaultOptions = function() {
        return new Ti;
    };
});
var St = g((ms, de)=>{
    "use strict";
    var fe = at().Options;
    function ce(t) {
        fe.call(this, t, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0), this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
        var e = this._get_boolean("space_around_selector_separator");
        this.space_around_combinator = this._get_boolean("space_around_combinator") || e;
        var i = this._get_selection_list("brace_style", [
            "collapse",
            "expand",
            "end-expand",
            "none",
            "preserve-inline"
        ]);
        this.brace_style = "collapse";
        for(var s = 0; s < i.length; s++)i[s] !== "expand" ? this.brace_style = "collapse" : this.brace_style = i[s];
    }
    ce.prototype = new fe;
    de.exports.Options = ce;
});
var ye = g((bs, be)=>{
    "use strict";
    var Ri = St().Options, Ai = _t().Output, Si = rt().InputScanner, Ni = ut().Directives, ge = new Ni(/\/\*/, /\*\//), me = /\r\n|[\r\n]/, Li = /\r\n|[\r\n]/g, pt = /\s/, Ci = /(?:\s|\n)+/g, Pi = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, Di = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
    function I(t, e) {
        this._source_text = t || "", this._options = new Ri(e), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
            "@page": !0,
            "@font-face": !0,
            "@keyframes": !0,
            "@media": !0,
            "@supports": !0,
            "@document": !0
        }, this.CONDITIONAL_GROUP_RULE = {
            "@media": !0,
            "@supports": !0,
            "@document": !0
        }, this.NON_SEMICOLON_NEWLINE_PROPERTY = [
            "grid-template-areas",
            "grid-template"
        ];
    }
    I.prototype.eatString = function(t) {
        var e = "";
        for(this._ch = this._input.next(); this._ch;){
            if (e += this._ch, this._ch === "\\") e += this._input.next();
            else if (t.indexOf(this._ch) !== -1 || this._ch === `
`) break;
            this._ch = this._input.next();
        }
        return e;
    };
    I.prototype.eatWhitespace = function(t) {
        for(var e = pt.test(this._input.peek()), i = 0; pt.test(this._input.peek());)this._ch = this._input.next(), t && this._ch === `
` && (i === 0 || i < this._options.max_preserve_newlines) && (i++, this._output.add_new_line(!0));
        return e;
    };
    I.prototype.foundNestedPseudoClass = function() {
        for(var t = 0, e = 1, i = this._input.peek(e); i;){
            if (i === "{") return !0;
            if (i === "(") t += 1;
            else if (i === ")") {
                if (t === 0) return !1;
                t -= 1;
            } else if (i === ";" || i === "}") return !1;
            e++, i = this._input.peek(e);
        }
        return !1;
    };
    I.prototype.print_string = function(t) {
        this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(t);
    };
    I.prototype.preserveSingleSpace = function(t) {
        t && (this._output.space_before_token = !0);
    };
    I.prototype.indent = function() {
        this._indentLevel++;
    };
    I.prototype.outdent = function() {
        this._indentLevel > 0 && this._indentLevel--;
    };
    I.prototype.beautify = function() {
        if (this._options.disabled) return this._source_text;
        var t = this._source_text, e = this._options.eol;
        e === "auto" && (e = `
`, t && me.test(t || "") && (e = t.match(me)[0])), t = t.replace(Li, `
`);
        var i = t.match(/^[\t ]*/)[0];
        this._output = new Ai(this._options, i), this._input = new Si(t), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
        for(var s = 0, _ = !1, a = !1, r = !1, f = !1, l = !1, m = !1, w = this._ch, B = !1, it, L, S; it = this._input.read(Ci), L = it !== "", S = w, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), w = this._ch, this._ch;)if (this._ch === "/" && this._input.peek() === "*") {
            this._output.add_new_line(), this._input.back();
            var X = this._input.read(Pi), st = ge.get_directives(X);
            st && st.ignore === "start" && (X += ge.readIgnored(this._input)), this.print_string(X), this.eatWhitespace(!0), this._output.add_new_line();
        } else if (this._ch === "/" && this._input.peek() === "/") this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(Di)), this.eatWhitespace(!0);
        else if (this._ch === "@" || this._ch === "$") if (this.preserveSingleSpace(L), this._input.peek() === "{") this.print_string(this._ch + this.eatString("}"));
        else {
            this.print_string(this._ch);
            var C = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
            C.match(/[ :]$/) && (C = this.eatString(": ").replace(/\s$/, ""), this.print_string(C), this._output.space_before_token = !0), C = C.replace(/\s$/, ""), C === "extend" ? f = !0 : C === "import" && (l = !0), C in this.NESTED_AT_RULE ? (this._nestedLevel += 1, C in this.CONDITIONAL_GROUP_RULE && (r = !0)) : !_ && s === 0 && C.indexOf(":") !== -1 && (a = !0, this.indent());
        }
        else if (this._ch === "#" && this._input.peek() === "{") this.preserveSingleSpace(L), this.print_string(this._ch + this.eatString("}"));
        else if (this._ch === "{") a && (a = !1, this.outdent()), r ? (r = !1, _ = this._indentLevel >= this._nestedLevel) : _ = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && _ && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = !0, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (S === "(" ? this._output.space_before_token = !1 : S !== "," && this.indent(), this.print_string(this._ch)), this.eatWhitespace(!0), this._output.add_new_line();
        else if (this._ch === "}") this.outdent(), this._output.add_new_line(), S === "{" && this._output.trim(!0), l = !1, f = !1, a && (this.outdent(), a = !1), this.print_string(this._ch), _ = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(!0), this._input.peek() === ")" && (this._output.trim(!0), this._options.brace_style === "expand" && this._output.add_new_line(!0));
        else if (this._ch === ":") {
            for(var ct = 0; ct < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; ct++)if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[ct])) {
                B = !0;
                break;
            }
            (_ || r) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !f && s === 0 ? (this.print_string(":"), a || (a = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = !0), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":"));
        } else if (this._ch === '"' || this._ch === "'") {
            var We = S === '"' || S === "'";
            this.preserveSingleSpace(We || L), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0);
        } else if (this._ch === ";") B = !1, s === 0 ? (a && (this.outdent(), a = !1), f = !1, l = !1, this.print_string(this._ch), this.eatWhitespace(!0), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0);
        else if (this._ch === "(") if (this._input.lookBack("url")) this.print_string(this._ch), this.eatWhitespace(), s++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), s && (s--, this.outdent()));
        else {
            var jt = !1;
            this._input.lookBack("with") && (jt = !0), this.preserveSingleSpace(L || jt), this.print_string(this._ch), a && S === "$" && this._options.selector_separator_newline ? (this._output.add_new_line(), m = !0) : (this.eatWhitespace(), s++, this.indent());
        }
        else if (this._ch === ")") s && (s--, this.outdent()), m && this._input.peek() === ";" && this._options.selector_separator_newline && (m = !1, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);
        else if (this._ch === ",") this.print_string(this._ch), this.eatWhitespace(!0), this._options.selector_separator_newline && (!a || m) && s === 0 && !l && !f ? this._output.add_new_line() : this._output.space_before_token = !0;
        else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !a && s === 0) this._options.space_around_combinator ? (this._output.space_before_token = !0, this.print_string(this._ch), this._output.space_before_token = !0) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && pt.test(this._ch) && (this._ch = ""));
        else if (this._ch === "]") this.print_string(this._ch);
        else if (this._ch === "[") this.preserveSingleSpace(L), this.print_string(this._ch);
        else if (this._ch === "=") this.eatWhitespace(), this.print_string("="), pt.test(this._ch) && (this._ch = "");
        else if (this._ch === "!" && !this._input.lookBack("\\")) this._output.space_before_token = !0, this.print_string(this._ch);
        else {
            var Ue = S === '"' || S === "'";
            this.preserveSingleSpace(Ue || L), this.print_string(this._ch), !this._output.just_added_newline() && this._input.peek() === `
` && B && this._output.add_new_line();
        }
        var ze = this._output.get_code(e);
        return ze;
    };
    be.exports.Beautifier = I;
});
var ve = g((ys, Nt)=>{
    "use strict";
    var Bi = ye().Beautifier, ji = St().Options;
    function Ii(t, e) {
        var i = new Bi(t, e);
        return i.beautify();
    }
    Nt.exports = Ii;
    Nt.exports.defaultOptions = function() {
        return new ji;
    };
});
var Lt = g((vs, Ee)=>{
    "use strict";
    var we = at().Options;
    function xe(t) {
        we.call(this, t, "html"), this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = [
            "django",
            "erb",
            "handlebars",
            "php"
        ]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0), this.indent_handlebars = this._get_boolean("indent_handlebars", !0), this.wrap_attributes = this._get_selection("wrap_attributes", [
            "auto",
            "force",
            "force-aligned",
            "force-expand-multiline",
            "aligned-multiple",
            "preserve",
            "preserve-aligned"
        ]), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", [
            "head",
            "body",
            "/html"
        ]), this.inline = this._get_array("inline", [
            "a",
            "abbr",
            "area",
            "audio",
            "b",
            "bdi",
            "bdo",
            "br",
            "button",
            "canvas",
            "cite",
            "code",
            "data",
            "datalist",
            "del",
            "dfn",
            "em",
            "embed",
            "i",
            "iframe",
            "img",
            "input",
            "ins",
            "kbd",
            "keygen",
            "label",
            "map",
            "mark",
            "math",
            "meter",
            "noscript",
            "object",
            "output",
            "progress",
            "q",
            "ruby",
            "s",
            "samp",
            "select",
            "small",
            "span",
            "strong",
            "sub",
            "sup",
            "svg",
            "template",
            "textarea",
            "time",
            "u",
            "var",
            "video",
            "wbr",
            "text",
            "acronym",
            "big",
            "strike",
            "tt"
        ]), this.void_elements = this._get_array("void_elements", [
            "area",
            "base",
            "br",
            "col",
            "embed",
            "hr",
            "img",
            "input",
            "keygen",
            "link",
            "menuitem",
            "meta",
            "param",
            "source",
            "track",
            "wbr",
            "!doctype",
            "?xml",
            "basefont",
            "isindex"
        ]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", [
            "pre",
            "textarea"
        ]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", [
            "normal",
            "keep",
            "separate"
        ]);
    }
    xe.prototype = new we;
    Ee.exports.Options = xe;
});
var Dt = g((ws, Pt)=>{
    "use strict";
    var Te = $().Tokenizer, Ct = $().TOKEN, Mi = ut().Directives, Ki = Ot().TemplatablePattern, Wi = G().Pattern, b = {
        TAG_OPEN: "TK_TAG_OPEN",
        TAG_CLOSE: "TK_TAG_CLOSE",
        ATTRIBUTE: "TK_ATTRIBUTE",
        EQUALS: "TK_EQUALS",
        VALUE: "TK_VALUE",
        COMMENT: "TK_COMMENT",
        TEXT: "TK_TEXT",
        UNKNOWN: "TK_UNKNOWN",
        START: Ct.START,
        RAW: Ct.RAW,
        EOF: Ct.EOF
    }, Oe = new Mi(/<\!--/, /-->/), O = function(t, e) {
        Te.call(this, t, e), this._current_tag_name = "";
        var i = new Ki(this._input).read_options(this._options), s = new Wi(this._input);
        if (this.__patterns = {
            word: i.until(/[\n\r\t <]/),
            single_quote: i.until_after(/'/),
            double_quote: i.until_after(/"/),
            attribute: i.until(/[\n\r\t =>]|\/>/),
            element_name: i.until(/[\n\r\t >\/]/),
            handlebars_comment: s.starting_with(/{{!--/).until_after(/--}}/),
            handlebars: s.starting_with(/{{/).until_after(/}}/),
            handlebars_open: s.until(/[\n\r\t }]/),
            handlebars_raw_close: s.until(/}}/),
            comment: s.starting_with(/<!--/).until_after(/-->/),
            cdata: s.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
            conditional_comment: s.starting_with(/<!\[/).until_after(/]>/),
            processing: s.starting_with(/<\?/).until_after(/\?>/)
        }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
            var _ = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
            this.__patterns.unformatted_content_delimiter = s.matching(_).until_after(_);
        }
    };
    O.prototype = new Te;
    O.prototype._is_comment = function(t) {
        return !1;
    };
    O.prototype._is_opening = function(t) {
        return t.type === b.TAG_OPEN;
    };
    O.prototype._is_closing = function(t, e) {
        return t.type === b.TAG_CLOSE && e && ((t.text === ">" || t.text === "/>") && e.text[0] === "<" || t.text === "}}" && e.text[0] === "{" && e.text[1] === "{");
    };
    O.prototype._reset = function() {
        this._current_tag_name = "";
    };
    O.prototype._get_next_token = function(t, e) {
        var i = null;
        this._readWhitespace();
        var s = this._input.peek();
        return s === null ? this._create_token(b.EOF, "") : (i = i || this._read_open_handlebars(s, e), i = i || this._read_attribute(s, t, e), i = i || this._read_close(s, e), i = i || this._read_raw_content(s, t, e), i = i || this._read_content_word(s), i = i || this._read_comment_or_cdata(s), i = i || this._read_processing(s), i = i || this._read_open(s, e), i = i || this._create_token(b.UNKNOWN, this._input.next()), i);
    };
    O.prototype._read_comment_or_cdata = function(t) {
        var e = null, i = null, s = null;
        if (t === "<") {
            var _ = this._input.peek(1);
            _ === "!" && (i = this.__patterns.comment.read(), i ? (s = Oe.get_directives(i), s && s.ignore === "start" && (i += Oe.readIgnored(this._input))) : i = this.__patterns.cdata.read()), i && (e = this._create_token(b.COMMENT, i), e.directives = s);
        }
        return e;
    };
    O.prototype._read_processing = function(t) {
        var e = null, i = null, s = null;
        if (t === "<") {
            var _ = this._input.peek(1);
            (_ === "!" || _ === "?") && (i = this.__patterns.conditional_comment.read(), i = i || this.__patterns.processing.read()), i && (e = this._create_token(b.COMMENT, i), e.directives = s);
        }
        return e;
    };
    O.prototype._read_open = function(t, e) {
        var i = null, s = null;
        return e || t === "<" && (i = this._input.next(), this._input.peek() === "/" && (i += this._input.next()), i += this.__patterns.element_name.read(), s = this._create_token(b.TAG_OPEN, i)), s;
    };
    O.prototype._read_open_handlebars = function(t, e) {
        var i = null, s = null;
        return e || this._options.indent_handlebars && t === "{" && this._input.peek(1) === "{" && (this._input.peek(2) === "!" ? (i = this.__patterns.handlebars_comment.read(), i = i || this.__patterns.handlebars.read(), s = this._create_token(b.COMMENT, i)) : (i = this.__patterns.handlebars_open.read(), s = this._create_token(b.TAG_OPEN, i))), s;
    };
    O.prototype._read_close = function(t, e) {
        var i = null, s = null;
        return e && (e.text[0] === "<" && (t === ">" || t === "/" && this._input.peek(1) === ">") ? (i = this._input.next(), t === "/" && (i += this._input.next()), s = this._create_token(b.TAG_CLOSE, i)) : e.text[0] === "{" && t === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), s = this._create_token(b.TAG_CLOSE, "}}"))), s;
    };
    O.prototype._read_attribute = function(t, e, i) {
        var s = null, _ = "";
        if (i && i.text[0] === "<") if (t === "=") s = this._create_token(b.EQUALS, this._input.next());
        else if (t === '"' || t === "'") {
            var a = this._input.next();
            t === '"' ? a += this.__patterns.double_quote.read() : a += this.__patterns.single_quote.read(), s = this._create_token(b.VALUE, a);
        } else _ = this.__patterns.attribute.read(), _ && (e.type === b.EQUALS ? s = this._create_token(b.VALUE, _) : s = this._create_token(b.ATTRIBUTE, _));
        return s;
    };
    O.prototype._is_content_unformatted = function(t) {
        return this._options.void_elements.indexOf(t) === -1 && (this._options.content_unformatted.indexOf(t) !== -1 || this._options.unformatted.indexOf(t) !== -1);
    };
    O.prototype._read_raw_content = function(t, e, i) {
        var s = "";
        if (i && i.text[0] === "{") s = this.__patterns.handlebars_raw_close.read();
        else if (e.type === b.TAG_CLOSE && e.opened.text[0] === "<" && e.text[0] !== "/") {
            var _ = e.opened.text.substr(1).toLowerCase();
            if (_ === "script" || _ === "style") {
                var a = this._read_comment_or_cdata(t);
                if (a) return a.type = b.TEXT, a;
                s = this._input.readUntil(new RegExp("</" + _ + "[\\n\\r\\t ]*?>", "ig"));
            } else this._is_content_unformatted(_) && (s = this._input.readUntil(new RegExp("</" + _ + "[\\n\\r\\t ]*?>", "ig")));
        }
        return s ? this._create_token(b.TEXT, s) : null;
    };
    O.prototype._read_content_word = function(t) {
        var e = "";
        if (this._options.unformatted_content_delimiter && t === this._options.unformatted_content_delimiter[0] && (e = this.__patterns.unformatted_content_delimiter.read()), e || (e = this.__patterns.word.read()), e) return this._create_token(b.TEXT, e);
    };
    Pt.exports.Tokenizer = O;
    Pt.exports.TOKEN = b;
});
var Se = g((xs, Ae)=>{
    "use strict";
    var Ui = Lt().Options, zi = _t().Output, qi = Dt().Tokenizer, c = Dt().TOKEN, ke = /\r\n|[\r\n]/, Xi = /\r\n|[\r\n]/g, A = function(t, e) {
        this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = t.max_preserve_newlines, this.preserve_newlines = t.preserve_newlines, this._output = new zi(t, e);
    };
    A.prototype.current_line_has_match = function(t) {
        return this._output.current_line.has_match(t);
    };
    A.prototype.set_space_before_token = function(t, e) {
        this._output.space_before_token = t, this._output.non_breaking_space = e;
    };
    A.prototype.set_wrap_point = function() {
        this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
    };
    A.prototype.add_raw_token = function(t) {
        this._output.add_raw_token(t);
    };
    A.prototype.print_preserved_newlines = function(t) {
        var e = 0;
        t.type !== c.TEXT && t.previous.type !== c.TEXT && (e = t.newlines ? 1 : 0), this.preserve_newlines && (e = t.newlines < this.max_preserve_newlines + 1 ? t.newlines : this.max_preserve_newlines + 1);
        for(var i = 0; i < e; i++)this.print_newline(i > 0);
        return e !== 0;
    };
    A.prototype.traverse_whitespace = function(t) {
        return t.whitespace_before || t.newlines ? (this.print_preserved_newlines(t) || (this._output.space_before_token = !0), !0) : !1;
    };
    A.prototype.previous_token_wrapped = function() {
        return this._output.previous_token_wrapped;
    };
    A.prototype.print_newline = function(t) {
        this._output.add_new_line(t);
    };
    A.prototype.print_token = function(t) {
        t.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(t.text));
    };
    A.prototype.indent = function() {
        this.indent_level++;
    };
    A.prototype.get_full_indent = function(t) {
        return t = this.indent_level + (t || 0), t < 1 ? "" : this._output.get_indent_string(t);
    };
    var Vi = function(t) {
        for(var e = null, i = t.next; i.type !== c.EOF && t.closed !== i;){
            if (i.type === c.ATTRIBUTE && i.text === "type") {
                i.next && i.next.type === c.EQUALS && i.next.next && i.next.next.type === c.VALUE && (e = i.next.next.text);
                break;
            }
            i = i.next;
        }
        return e;
    }, Gi = function(t, e) {
        var i = null, s = null;
        return e.closed ? (t === "script" ? i = "text/javascript" : t === "style" && (i = "text/css"), i = Vi(e) || i, i.search("text/css") > -1 ? s = "css" : i.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? s = "javascript" : i.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? s = "html" : i.search(/test\/null/) > -1 && (s = "null"), s) : null;
    };
    function et(t, e) {
        return e.indexOf(t) !== -1;
    }
    function Fi(t, e, i) {
        this.parent = t || null, this.tag = e ? e.tag_name : "", this.indent_level = i || 0, this.parser_token = e || null;
    }
    function q(t) {
        this._printer = t, this._current_frame = null;
    }
    q.prototype.get_parser_token = function() {
        return this._current_frame ? this._current_frame.parser_token : null;
    };
    q.prototype.record_tag = function(t) {
        var e = new Fi(this._current_frame, t, this._printer.indent_level);
        this._current_frame = e;
    };
    q.prototype._try_pop_frame = function(t) {
        var e = null;
        return t && (e = t.parser_token, this._printer.indent_level = t.indent_level, this._current_frame = t.parent), e;
    };
    q.prototype._get_frame = function(t, e) {
        for(var i = this._current_frame; i && t.indexOf(i.tag) === -1;){
            if (e && e.indexOf(i.tag) !== -1) {
                i = null;
                break;
            }
            i = i.parent;
        }
        return i;
    };
    q.prototype.try_pop = function(t, e) {
        var i = this._get_frame([
            t
        ], e);
        return this._try_pop_frame(i);
    };
    q.prototype.indent_to_tag = function(t) {
        var e = this._get_frame(t);
        e && (this._printer.indent_level = e.indent_level);
    };
    function R(t, e, i, s) {
        this._source_text = t || "", e = e || {}, this._js_beautify = i, this._css_beautify = s, this._tag_stack = null;
        var _ = new Ui(e, "html");
        this._options = _, this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
    }
    R.prototype.beautify = function() {
        if (this._options.disabled) return this._source_text;
        var t = this._source_text, e = this._options.eol;
        this._options.eol === "auto" && (e = `
`, t && ke.test(t) && (e = t.match(ke)[0])), t = t.replace(Xi, `
`);
        var i = t.match(/^[\t ]*/)[0], s = {
            text: "",
            type: ""
        }, _ = new Re, a = new A(this._options, i), r = new qi(t, this._options).tokenize();
        this._tag_stack = new q(a);
        for(var f = null, l = r.next(); l.type !== c.EOF;)l.type === c.TAG_OPEN || l.type === c.COMMENT ? (f = this._handle_tag_open(a, l, _, s), _ = f) : l.type === c.ATTRIBUTE || l.type === c.EQUALS || l.type === c.VALUE || l.type === c.TEXT && !_.tag_complete ? f = this._handle_inside_tag(a, l, _, r) : l.type === c.TAG_CLOSE ? f = this._handle_tag_close(a, l, _) : l.type === c.TEXT ? f = this._handle_text(a, l, _) : a.add_raw_token(l), s = f, l = r.next();
        var m = a._output.get_code(e);
        return m;
    };
    R.prototype._handle_tag_close = function(t, e, i) {
        var s = {
            text: e.text,
            type: e.type
        };
        return t.alignment_size = 0, i.tag_complete = !0, t.set_space_before_token(e.newlines || e.whitespace_before !== "", !0), i.is_unformatted ? t.add_raw_token(e) : (i.tag_start_char === "<" && (t.set_space_before_token(e.text[0] === "/", !0), this._is_wrap_attributes_force_expand_multiline && i.has_wrapped_attrs && t.print_newline(!1)), t.print_token(e)), i.indent_content && !(i.is_unformatted || i.is_content_unformatted) && (t.indent(), i.indent_content = !1), !i.is_inline_element && !(i.is_unformatted || i.is_content_unformatted) && t.set_wrap_point(), s;
    };
    R.prototype._handle_inside_tag = function(t, e, i, s) {
        var _ = i.has_wrapped_attrs, a = {
            text: e.text,
            type: e.type
        };
        if (t.set_space_before_token(e.newlines || e.whitespace_before !== "", !0), i.is_unformatted) t.add_raw_token(e);
        else if (i.tag_start_char === "{" && e.type === c.TEXT) t.print_preserved_newlines(e) ? (e.newlines = 0, t.add_raw_token(e)) : t.print_token(e);
        else {
            if (e.type === c.ATTRIBUTE ? (t.set_space_before_token(!0), i.attr_count += 1) : (e.type === c.EQUALS || e.type === c.VALUE && e.previous.type === c.EQUALS) && t.set_space_before_token(!1), e.type === c.ATTRIBUTE && i.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (t.traverse_whitespace(e), _ = _ || e.newlines !== 0), this._is_wrap_attributes_force)) {
                var r = i.attr_count > 1;
                if (this._is_wrap_attributes_force_expand_multiline && i.attr_count === 1) {
                    var f = !0, l = 0, m;
                    do {
                        if (m = s.peek(l), m.type === c.ATTRIBUTE) {
                            f = !1;
                            break;
                        }
                        l += 1;
                    }while (l < 4 && m.type !== c.EOF && m.type !== c.TAG_CLOSE)
                    r = !f;
                }
                r && (t.print_newline(!1), _ = !0);
            }
            t.print_token(e), _ = _ || t.previous_token_wrapped(), i.has_wrapped_attrs = _;
        }
        return a;
    };
    R.prototype._handle_text = function(t, e, i) {
        var s = {
            text: e.text,
            type: "TK_CONTENT"
        };
        return i.custom_beautifier_name ? this._print_custom_beatifier_text(t, e, i) : i.is_unformatted || i.is_content_unformatted ? t.add_raw_token(e) : (t.traverse_whitespace(e), t.print_token(e)), s;
    };
    R.prototype._print_custom_beatifier_text = function(t, e, i) {
        var s = this;
        if (e.text !== "") {
            var _ = e.text, a, r = 1, f = "", l = "";
            i.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? a = this._js_beautify : i.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? a = this._css_beautify : i.custom_beautifier_name === "html" && (a = function(S, X) {
                var st = new R(S, X, s._js_beautify, s._css_beautify);
                return st.beautify();
            }), this._options.indent_scripts === "keep" ? r = 0 : this._options.indent_scripts === "separate" && (r = -t.indent_level);
            var m = t.get_full_indent(r);
            if (_ = _.replace(/\n[ \t]*$/, ""), i.custom_beautifier_name !== "html" && _[0] === "<" && _.match(/^(<!--|<!\[CDATA\[)/)) {
                var w = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(_);
                if (!w) {
                    t.add_raw_token(e);
                    return;
                }
                f = m + w[1] + `
`, _ = w[4], w[5] && (l = m + w[5]), _ = _.replace(/\n[ \t]*$/, ""), (w[2] || w[3].indexOf(`
`) !== -1) && (w = w[3].match(/[ \t]+$/), w && (e.whitespace_before = w[0]));
            }
            if (_) if (a) {
                var B = function() {
                    this.eol = `
`;
                };
                B.prototype = this._options.raw_options;
                var it = new B;
                _ = a(m + _, it);
            } else {
                var L = e.whitespace_before;
                L && (_ = _.replace(new RegExp(`
(` + L + ")?", "g"), `
`)), _ = m + _.replace(/\n/g, `
` + m);
            }
            f && (_ ? _ = f + _ + `
` + l : _ = f + l), t.print_newline(!1), _ && (e.text = _, e.whitespace_before = "", e.newlines = 0, t.add_raw_token(e), t.print_newline(!0));
        }
    };
    R.prototype._handle_tag_open = function(t, e, i, s) {
        var _ = this._get_tag_open_token(e);
        return (i.is_unformatted || i.is_content_unformatted) && !i.is_empty_element && e.type === c.TAG_OPEN && e.text.indexOf("</") === 0 ? (t.add_raw_token(e), _.start_tag_token = this._tag_stack.try_pop(_.tag_name)) : (t.traverse_whitespace(e), this._set_tag_position(t, e, _, i, s), _.is_inline_element || t.set_wrap_point(), t.print_token(e)), (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (_.alignment_size = e.text.length + 1), !_.tag_complete && !_.is_unformatted && (t.alignment_size = _.alignment_size), _;
    };
    var Re = function(t, e) {
        if (this.parent = t || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", !e) this.tag_complete = !0;
        else {
            var i;
            this.tag_start_char = e.text[0], this.text = e.text, this.tag_start_char === "<" ? (i = e.text.match(/^<([^\s>]*)/), this.tag_check = i ? i[1] : "") : (i = e.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = i ? i[1] : "", (e.text.startsWith("{{#>") || e.text.startsWith("{{~#>")) && this.tag_check[0] === ">" && (this.tag_check === ">" && e.next !== null ? this.tag_check = e.next.text.split(" ")[0] : this.tag_check = e.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), e.type === c.COMMENT && (this.tag_complete = !0), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || e.closed && e.closed.text === "/>";
            var s = 2;
            this.tag_start_char === "{" && this.text.length >= 3 && this.text.charAt(2) === "~" && (s = 3), this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(s)));
        }
    };
    R.prototype._get_tag_open_token = function(t) {
        var e = new Re(this._tag_stack.get_parser_token(), t);
        return e.alignment_size = this._options.wrap_attributes_indent_size, e.is_end_tag = e.is_end_tag || et(e.tag_check, this._options.void_elements), e.is_empty_element = e.tag_complete || e.is_start_tag && e.is_end_tag, e.is_unformatted = !e.tag_complete && et(e.tag_check, this._options.unformatted), e.is_content_unformatted = !e.is_empty_element && et(e.tag_check, this._options.content_unformatted), e.is_inline_element = et(e.tag_name, this._options.inline) || e.tag_name.includes("-") || e.tag_start_char === "{", e;
    };
    R.prototype._set_tag_position = function(t, e, i, s, _) {
        if (i.is_empty_element || (i.is_end_tag ? i.start_tag_token = this._tag_stack.try_pop(i.tag_name) : (this._do_optional_end_element(i) && (i.is_inline_element || t.print_newline(!1)), this._tag_stack.record_tag(i), (i.tag_name === "script" || i.tag_name === "style") && !(i.is_unformatted || i.is_content_unformatted) && (i.custom_beautifier_name = Gi(i.tag_check, e)))), et(i.tag_check, this._options.extra_liners) && (t.print_newline(!1), t._output.just_added_blankline() || t.print_newline(!0)), i.is_empty_element) {
            if (i.tag_start_char === "{" && i.tag_check === "else") {
                this._tag_stack.indent_to_tag([
                    "if",
                    "unless",
                    "each"
                ]), i.indent_content = !0;
                var a = t.current_line_has_match(/{{#if/);
                a || t.print_newline(!1);
            }
            i.tag_name === "!--" && _.type === c.TAG_CLOSE && s.is_end_tag && i.text.indexOf(`
`) === -1 || (i.is_inline_element || i.is_unformatted || t.print_newline(!1), this._calcluate_parent_multiline(t, i));
        } else if (i.is_end_tag) {
            var r = !1;
            r = i.start_tag_token && i.start_tag_token.multiline_content, r = r || !i.is_inline_element && !(s.is_inline_element || s.is_unformatted) && !(_.type === c.TAG_CLOSE && i.start_tag_token === s) && _.type !== "TK_CONTENT", (i.is_content_unformatted || i.is_unformatted) && (r = !1), r && t.print_newline(!1);
        } else i.indent_content = !i.custom_beautifier_name, i.tag_start_char === "<" && (i.tag_name === "html" ? i.indent_content = this._options.indent_inner_html : i.tag_name === "head" ? i.indent_content = this._options.indent_head_inner_html : i.tag_name === "body" && (i.indent_content = this._options.indent_body_inner_html)), !(i.is_inline_element || i.is_unformatted) && (_.type !== "TK_CONTENT" || i.is_content_unformatted) && t.print_newline(!1), this._calcluate_parent_multiline(t, i);
    };
    R.prototype._calcluate_parent_multiline = function(t, e) {
        e.parent && t._output.just_added_newline() && !((e.is_inline_element || e.is_unformatted) && e.parent.is_inline_element) && (e.parent.multiline_content = !0);
    };
    var $i = [
        "address",
        "article",
        "aside",
        "blockquote",
        "details",
        "div",
        "dl",
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
        "header",
        "hr",
        "main",
        "nav",
        "ol",
        "p",
        "pre",
        "section",
        "table",
        "ul"
    ], Qi = [
        "a",
        "audio",
        "del",
        "ins",
        "map",
        "noscript",
        "video"
    ];
    R.prototype._do_optional_end_element = function(t) {
        var e = null;
        if (!(t.is_empty_element || !t.is_start_tag || !t.parent)) {
            if (t.tag_name === "body") e = e || this._tag_stack.try_pop("head");
            else if (t.tag_name === "li") e = e || this._tag_stack.try_pop("li", [
                "ol",
                "ul"
            ]);
            else if (t.tag_name === "dd" || t.tag_name === "dt") e = e || this._tag_stack.try_pop("dt", [
                "dl"
            ]), e = e || this._tag_stack.try_pop("dd", [
                "dl"
            ]);
            else if (t.parent.tag_name === "p" && $i.indexOf(t.tag_name) !== -1) {
                var i = t.parent.parent;
                (!i || Qi.indexOf(i.tag_name) === -1) && (e = e || this._tag_stack.try_pop("p"));
            } else t.tag_name === "rp" || t.tag_name === "rt" ? (e = e || this._tag_stack.try_pop("rt", [
                "ruby",
                "rtc"
            ]), e = e || this._tag_stack.try_pop("rp", [
                "ruby",
                "rtc"
            ])) : t.tag_name === "optgroup" ? e = e || this._tag_stack.try_pop("optgroup", [
                "select"
            ]) : t.tag_name === "option" ? e = e || this._tag_stack.try_pop("option", [
                "select",
                "datalist",
                "optgroup"
            ]) : t.tag_name === "colgroup" ? e = e || this._tag_stack.try_pop("caption", [
                "table"
            ]) : t.tag_name === "thead" ? (e = e || this._tag_stack.try_pop("caption", [
                "table"
            ]), e = e || this._tag_stack.try_pop("colgroup", [
                "table"
            ])) : t.tag_name === "tbody" || t.tag_name === "tfoot" ? (e = e || this._tag_stack.try_pop("caption", [
                "table"
            ]), e = e || this._tag_stack.try_pop("colgroup", [
                "table"
            ]), e = e || this._tag_stack.try_pop("thead", [
                "table"
            ]), e = e || this._tag_stack.try_pop("tbody", [
                "table"
            ])) : t.tag_name === "tr" ? (e = e || this._tag_stack.try_pop("caption", [
                "table"
            ]), e = e || this._tag_stack.try_pop("colgroup", [
                "table"
            ]), e = e || this._tag_stack.try_pop("tr", [
                "table",
                "thead",
                "tbody",
                "tfoot"
            ])) : (t.tag_name === "th" || t.tag_name === "td") && (e = e || this._tag_stack.try_pop("td", [
                "table",
                "thead",
                "tbody",
                "tfoot",
                "tr"
            ]), e = e || this._tag_stack.try_pop("th", [
                "table",
                "thead",
                "tbody",
                "tfoot",
                "tr"
            ]));
            return t.parent = this._tag_stack.get_parser_token(), e;
        }
    };
    Ae.exports.Beautifier = R;
});
var Ne = g((Es, Bt)=>{
    "use strict";
    var Yi = Se().Beautifier, Zi = Lt().Options;
    function Hi(t, e, i, s) {
        var _ = new Yi(t, e, i, s);
        return _.beautify();
    }
    Bt.exports = Hi;
    Bt.exports.defaultOptions = function() {
        return new Zi;
    };
});
var Be = g((Os, ft)=>{
    "use strict";
    var Le = pe(), Ce = ve(), Pe = Ne();
    function De(t, e, i, s) {
        return i = i || Le, s = s || Ce, Pe(t, e, i, s);
    }
    De.defaultOptions = Pe.defaultOptions;
    ft.exports.js = Le;
    ft.exports.css = Ce;
    ft.exports.html = De;
});
var Me = g((Ts, Ie)=>{
    "use strict";
    function je(t, e, i) {
        var s = function(_, a) {
            return t.js_beautify(_, a);
        };
        return s.js = t.js_beautify, s.css = e.css_beautify, s.html = i.html_beautify, s.js_beautify = t.js_beautify, s.css_beautify = e.css_beautify, s.html_beautify = i.html_beautify, s;
    }
    typeof define == "function" && define.amd ? define([
        "./lib/beautify",
        "./lib/beautify-css",
        "./lib/beautify-html"
    ], function(t, e, i) {
        return je(t, e, i);
    }) : function(t) {
        var e = Be();
        e.js_beautify = e.js, e.css_beautify = e.css, e.html_beautify = e.html, t.exports = je(e, e, e);
    }(Ie);
});
var Ji = Qe(Me()), { default: Ke , ...ts } = Ji, ks = Ke !== void 0 ? Ke : ts;
export { ks as default };
