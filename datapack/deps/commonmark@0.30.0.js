// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var l = Object.create;
var u = Object.defineProperty;
var D = Object.getOwnPropertyDescriptor;
var $ = Object.getOwnPropertyNames;
var x = Object.getPrototypeOf, v = Object.prototype.hasOwnProperty;
var A = (t, o)=>()=>(o || t((o = {
            exports: {}
        }).exports, o), o.exports);
var B = (t, o, n, e)=>{
    if (o && typeof o == "object" || typeof o == "function") for (let r of $(o))!v.call(t, r) && r !== n && u(t, r, {
        get: ()=>o[r],
        enumerable: !(e = D(o, r)) || e.enumerable
    });
    return t;
};
var s = (t, o, n)=>(n = t != null ? l(x(t)) : {}, B(o || !t || !t.__esModule ? u(n, "default", {
        value: t,
        enumerable: !0
    }) : n, t));
var h = A((S, m)=>{
    "use strict";
    var d = {};
    function U(t) {
        var o, n, e = d[t];
        if (e) return e;
        for(e = d[t] = [], o = 0; o < 128; o++)n = String.fromCharCode(o), /^[0-9a-z]$/i.test(n) ? e.push(n) : e.push("%" + ("0" + o.toString(16).toUpperCase()).slice(-2));
        for(o = 0; o < t.length; o++)e[t.charCodeAt(o)] = t[o];
        return e;
    }
    function i(t, o, n) {
        var e, r, f, c, C, a = "";
        for(typeof o != "string" && (n = o, o = i.defaultChars), typeof n > "u" && (n = !0), C = U(o), e = 0, r = t.length; e < r; e++){
            if (f = t.charCodeAt(e), n && f === 37 && e + 2 < r && /^[0-9a-f]{2}$/i.test(t.slice(e + 1, e + 3))) {
                a += t.slice(e, e + 3), e += 2;
                continue;
            }
            if (f < 128) {
                a += C[f];
                continue;
            }
            if (f >= 55296 && f <= 57343) {
                if (f >= 55296 && f <= 56319 && e + 1 < r && (c = t.charCodeAt(e + 1), c >= 56320 && c <= 57343)) {
                    a += encodeURIComponent(t[e] + t[e + 1]), e++;
                    continue;
                }
                a += "%EF%BF%BD";
                continue;
            }
            a += encodeURIComponent(t[e]);
        }
        return a;
    }
    i.defaultChars = ";/?:@&=+$,-_.!~*'()#";
    i.componentChars = "-_.!~*'()";
    m.exports = i;
});
var F = s(h()), p = s(h()), { defaultChars: _ , componentChars: z  } = p, { default: y , ...I } = p, b = (F.default ?? y) ?? I;
var z1 = Object.create;
var y1 = Object.defineProperty;
var X = Object.getOwnPropertyDescriptor;
var J = Object.getOwnPropertyNames;
var Y = Object.getPrototypeOf, Z = Object.prototype.hasOwnProperty;
var n = (u, r)=>()=>(r || u((r = {
            exports: {}
        }).exports, r), r.exports);
var Q = (u, r, e, a)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let o of J(r))!Z.call(u, o) && o !== e && y1(u, o, {
        get: ()=>r[o],
        enumerable: !(a = X(r, o)) || a.enumerable
    });
    return u;
};
var L = (u, r, e)=>(e = u != null ? z1(Y(u)) : {}, Q(r || !u || !u.__esModule ? y1(e, "default", {
        value: u,
        enumerable: !0
    }) : e, u));
var f = n((fu, K)=>{
    K.exports = {
        Aacute: "\xC1",
        aacute: "\xE1",
        Abreve: "\u0102",
        abreve: "\u0103",
        ac: "\u223E",
        acd: "\u223F",
        acE: "\u223E\u0333",
        Acirc: "\xC2",
        acirc: "\xE2",
        acute: "\xB4",
        Acy: "\u0410",
        acy: "\u0430",
        AElig: "\xC6",
        aelig: "\xE6",
        af: "\u2061",
        Afr: "\u{1D504}",
        afr: "\u{1D51E}",
        Agrave: "\xC0",
        agrave: "\xE0",
        alefsym: "\u2135",
        aleph: "\u2135",
        Alpha: "\u0391",
        alpha: "\u03B1",
        Amacr: "\u0100",
        amacr: "\u0101",
        amalg: "\u2A3F",
        amp: "&",
        AMP: "&",
        andand: "\u2A55",
        And: "\u2A53",
        and: "\u2227",
        andd: "\u2A5C",
        andslope: "\u2A58",
        andv: "\u2A5A",
        ang: "\u2220",
        ange: "\u29A4",
        angle: "\u2220",
        angmsdaa: "\u29A8",
        angmsdab: "\u29A9",
        angmsdac: "\u29AA",
        angmsdad: "\u29AB",
        angmsdae: "\u29AC",
        angmsdaf: "\u29AD",
        angmsdag: "\u29AE",
        angmsdah: "\u29AF",
        angmsd: "\u2221",
        angrt: "\u221F",
        angrtvb: "\u22BE",
        angrtvbd: "\u299D",
        angsph: "\u2222",
        angst: "\xC5",
        angzarr: "\u237C",
        Aogon: "\u0104",
        aogon: "\u0105",
        Aopf: "\u{1D538}",
        aopf: "\u{1D552}",
        apacir: "\u2A6F",
        ap: "\u2248",
        apE: "\u2A70",
        ape: "\u224A",
        apid: "\u224B",
        apos: "'",
        ApplyFunction: "\u2061",
        approx: "\u2248",
        approxeq: "\u224A",
        Aring: "\xC5",
        aring: "\xE5",
        Ascr: "\u{1D49C}",
        ascr: "\u{1D4B6}",
        Assign: "\u2254",
        ast: "*",
        asymp: "\u2248",
        asympeq: "\u224D",
        Atilde: "\xC3",
        atilde: "\xE3",
        Auml: "\xC4",
        auml: "\xE4",
        awconint: "\u2233",
        awint: "\u2A11",
        backcong: "\u224C",
        backepsilon: "\u03F6",
        backprime: "\u2035",
        backsim: "\u223D",
        backsimeq: "\u22CD",
        Backslash: "\u2216",
        Barv: "\u2AE7",
        barvee: "\u22BD",
        barwed: "\u2305",
        Barwed: "\u2306",
        barwedge: "\u2305",
        bbrk: "\u23B5",
        bbrktbrk: "\u23B6",
        bcong: "\u224C",
        Bcy: "\u0411",
        bcy: "\u0431",
        bdquo: "\u201E",
        becaus: "\u2235",
        because: "\u2235",
        Because: "\u2235",
        bemptyv: "\u29B0",
        bepsi: "\u03F6",
        bernou: "\u212C",
        Bernoullis: "\u212C",
        Beta: "\u0392",
        beta: "\u03B2",
        beth: "\u2136",
        between: "\u226C",
        Bfr: "\u{1D505}",
        bfr: "\u{1D51F}",
        bigcap: "\u22C2",
        bigcirc: "\u25EF",
        bigcup: "\u22C3",
        bigodot: "\u2A00",
        bigoplus: "\u2A01",
        bigotimes: "\u2A02",
        bigsqcup: "\u2A06",
        bigstar: "\u2605",
        bigtriangledown: "\u25BD",
        bigtriangleup: "\u25B3",
        biguplus: "\u2A04",
        bigvee: "\u22C1",
        bigwedge: "\u22C0",
        bkarow: "\u290D",
        blacklozenge: "\u29EB",
        blacksquare: "\u25AA",
        blacktriangle: "\u25B4",
        blacktriangledown: "\u25BE",
        blacktriangleleft: "\u25C2",
        blacktriangleright: "\u25B8",
        blank: "\u2423",
        blk12: "\u2592",
        blk14: "\u2591",
        blk34: "\u2593",
        block: "\u2588",
        bne: "=\u20E5",
        bnequiv: "\u2261\u20E5",
        bNot: "\u2AED",
        bnot: "\u2310",
        Bopf: "\u{1D539}",
        bopf: "\u{1D553}",
        bot: "\u22A5",
        bottom: "\u22A5",
        bowtie: "\u22C8",
        boxbox: "\u29C9",
        boxdl: "\u2510",
        boxdL: "\u2555",
        boxDl: "\u2556",
        boxDL: "\u2557",
        boxdr: "\u250C",
        boxdR: "\u2552",
        boxDr: "\u2553",
        boxDR: "\u2554",
        boxh: "\u2500",
        boxH: "\u2550",
        boxhd: "\u252C",
        boxHd: "\u2564",
        boxhD: "\u2565",
        boxHD: "\u2566",
        boxhu: "\u2534",
        boxHu: "\u2567",
        boxhU: "\u2568",
        boxHU: "\u2569",
        boxminus: "\u229F",
        boxplus: "\u229E",
        boxtimes: "\u22A0",
        boxul: "\u2518",
        boxuL: "\u255B",
        boxUl: "\u255C",
        boxUL: "\u255D",
        boxur: "\u2514",
        boxuR: "\u2558",
        boxUr: "\u2559",
        boxUR: "\u255A",
        boxv: "\u2502",
        boxV: "\u2551",
        boxvh: "\u253C",
        boxvH: "\u256A",
        boxVh: "\u256B",
        boxVH: "\u256C",
        boxvl: "\u2524",
        boxvL: "\u2561",
        boxVl: "\u2562",
        boxVL: "\u2563",
        boxvr: "\u251C",
        boxvR: "\u255E",
        boxVr: "\u255F",
        boxVR: "\u2560",
        bprime: "\u2035",
        breve: "\u02D8",
        Breve: "\u02D8",
        brvbar: "\xA6",
        bscr: "\u{1D4B7}",
        Bscr: "\u212C",
        bsemi: "\u204F",
        bsim: "\u223D",
        bsime: "\u22CD",
        bsolb: "\u29C5",
        bsol: "\\",
        bsolhsub: "\u27C8",
        bull: "\u2022",
        bullet: "\u2022",
        bump: "\u224E",
        bumpE: "\u2AAE",
        bumpe: "\u224F",
        Bumpeq: "\u224E",
        bumpeq: "\u224F",
        Cacute: "\u0106",
        cacute: "\u0107",
        capand: "\u2A44",
        capbrcup: "\u2A49",
        capcap: "\u2A4B",
        cap: "\u2229",
        Cap: "\u22D2",
        capcup: "\u2A47",
        capdot: "\u2A40",
        CapitalDifferentialD: "\u2145",
        caps: "\u2229\uFE00",
        caret: "\u2041",
        caron: "\u02C7",
        Cayleys: "\u212D",
        ccaps: "\u2A4D",
        Ccaron: "\u010C",
        ccaron: "\u010D",
        Ccedil: "\xC7",
        ccedil: "\xE7",
        Ccirc: "\u0108",
        ccirc: "\u0109",
        Cconint: "\u2230",
        ccups: "\u2A4C",
        ccupssm: "\u2A50",
        Cdot: "\u010A",
        cdot: "\u010B",
        cedil: "\xB8",
        Cedilla: "\xB8",
        cemptyv: "\u29B2",
        cent: "\xA2",
        centerdot: "\xB7",
        CenterDot: "\xB7",
        cfr: "\u{1D520}",
        Cfr: "\u212D",
        CHcy: "\u0427",
        chcy: "\u0447",
        check: "\u2713",
        checkmark: "\u2713",
        Chi: "\u03A7",
        chi: "\u03C7",
        circ: "\u02C6",
        circeq: "\u2257",
        circlearrowleft: "\u21BA",
        circlearrowright: "\u21BB",
        circledast: "\u229B",
        circledcirc: "\u229A",
        circleddash: "\u229D",
        CircleDot: "\u2299",
        circledR: "\xAE",
        circledS: "\u24C8",
        CircleMinus: "\u2296",
        CirclePlus: "\u2295",
        CircleTimes: "\u2297",
        cir: "\u25CB",
        cirE: "\u29C3",
        cire: "\u2257",
        cirfnint: "\u2A10",
        cirmid: "\u2AEF",
        cirscir: "\u29C2",
        ClockwiseContourIntegral: "\u2232",
        CloseCurlyDoubleQuote: "\u201D",
        CloseCurlyQuote: "\u2019",
        clubs: "\u2663",
        clubsuit: "\u2663",
        colon: ":",
        Colon: "\u2237",
        Colone: "\u2A74",
        colone: "\u2254",
        coloneq: "\u2254",
        comma: ",",
        commat: "@",
        comp: "\u2201",
        compfn: "\u2218",
        complement: "\u2201",
        complexes: "\u2102",
        cong: "\u2245",
        congdot: "\u2A6D",
        Congruent: "\u2261",
        conint: "\u222E",
        Conint: "\u222F",
        ContourIntegral: "\u222E",
        copf: "\u{1D554}",
        Copf: "\u2102",
        coprod: "\u2210",
        Coproduct: "\u2210",
        copy: "\xA9",
        COPY: "\xA9",
        copysr: "\u2117",
        CounterClockwiseContourIntegral: "\u2233",
        crarr: "\u21B5",
        cross: "\u2717",
        Cross: "\u2A2F",
        Cscr: "\u{1D49E}",
        cscr: "\u{1D4B8}",
        csub: "\u2ACF",
        csube: "\u2AD1",
        csup: "\u2AD0",
        csupe: "\u2AD2",
        ctdot: "\u22EF",
        cudarrl: "\u2938",
        cudarrr: "\u2935",
        cuepr: "\u22DE",
        cuesc: "\u22DF",
        cularr: "\u21B6",
        cularrp: "\u293D",
        cupbrcap: "\u2A48",
        cupcap: "\u2A46",
        CupCap: "\u224D",
        cup: "\u222A",
        Cup: "\u22D3",
        cupcup: "\u2A4A",
        cupdot: "\u228D",
        cupor: "\u2A45",
        cups: "\u222A\uFE00",
        curarr: "\u21B7",
        curarrm: "\u293C",
        curlyeqprec: "\u22DE",
        curlyeqsucc: "\u22DF",
        curlyvee: "\u22CE",
        curlywedge: "\u22CF",
        curren: "\xA4",
        curvearrowleft: "\u21B6",
        curvearrowright: "\u21B7",
        cuvee: "\u22CE",
        cuwed: "\u22CF",
        cwconint: "\u2232",
        cwint: "\u2231",
        cylcty: "\u232D",
        dagger: "\u2020",
        Dagger: "\u2021",
        daleth: "\u2138",
        darr: "\u2193",
        Darr: "\u21A1",
        dArr: "\u21D3",
        dash: "\u2010",
        Dashv: "\u2AE4",
        dashv: "\u22A3",
        dbkarow: "\u290F",
        dblac: "\u02DD",
        Dcaron: "\u010E",
        dcaron: "\u010F",
        Dcy: "\u0414",
        dcy: "\u0434",
        ddagger: "\u2021",
        ddarr: "\u21CA",
        DD: "\u2145",
        dd: "\u2146",
        DDotrahd: "\u2911",
        ddotseq: "\u2A77",
        deg: "\xB0",
        Del: "\u2207",
        Delta: "\u0394",
        delta: "\u03B4",
        demptyv: "\u29B1",
        dfisht: "\u297F",
        Dfr: "\u{1D507}",
        dfr: "\u{1D521}",
        dHar: "\u2965",
        dharl: "\u21C3",
        dharr: "\u21C2",
        DiacriticalAcute: "\xB4",
        DiacriticalDot: "\u02D9",
        DiacriticalDoubleAcute: "\u02DD",
        DiacriticalGrave: "`",
        DiacriticalTilde: "\u02DC",
        diam: "\u22C4",
        diamond: "\u22C4",
        Diamond: "\u22C4",
        diamondsuit: "\u2666",
        diams: "\u2666",
        die: "\xA8",
        DifferentialD: "\u2146",
        digamma: "\u03DD",
        disin: "\u22F2",
        div: "\xF7",
        divide: "\xF7",
        divideontimes: "\u22C7",
        divonx: "\u22C7",
        DJcy: "\u0402",
        djcy: "\u0452",
        dlcorn: "\u231E",
        dlcrop: "\u230D",
        dollar: "$",
        Dopf: "\u{1D53B}",
        dopf: "\u{1D555}",
        Dot: "\xA8",
        dot: "\u02D9",
        DotDot: "\u20DC",
        doteq: "\u2250",
        doteqdot: "\u2251",
        DotEqual: "\u2250",
        dotminus: "\u2238",
        dotplus: "\u2214",
        dotsquare: "\u22A1",
        doublebarwedge: "\u2306",
        DoubleContourIntegral: "\u222F",
        DoubleDot: "\xA8",
        DoubleDownArrow: "\u21D3",
        DoubleLeftArrow: "\u21D0",
        DoubleLeftRightArrow: "\u21D4",
        DoubleLeftTee: "\u2AE4",
        DoubleLongLeftArrow: "\u27F8",
        DoubleLongLeftRightArrow: "\u27FA",
        DoubleLongRightArrow: "\u27F9",
        DoubleRightArrow: "\u21D2",
        DoubleRightTee: "\u22A8",
        DoubleUpArrow: "\u21D1",
        DoubleUpDownArrow: "\u21D5",
        DoubleVerticalBar: "\u2225",
        DownArrowBar: "\u2913",
        downarrow: "\u2193",
        DownArrow: "\u2193",
        Downarrow: "\u21D3",
        DownArrowUpArrow: "\u21F5",
        DownBreve: "\u0311",
        downdownarrows: "\u21CA",
        downharpoonleft: "\u21C3",
        downharpoonright: "\u21C2",
        DownLeftRightVector: "\u2950",
        DownLeftTeeVector: "\u295E",
        DownLeftVectorBar: "\u2956",
        DownLeftVector: "\u21BD",
        DownRightTeeVector: "\u295F",
        DownRightVectorBar: "\u2957",
        DownRightVector: "\u21C1",
        DownTeeArrow: "\u21A7",
        DownTee: "\u22A4",
        drbkarow: "\u2910",
        drcorn: "\u231F",
        drcrop: "\u230C",
        Dscr: "\u{1D49F}",
        dscr: "\u{1D4B9}",
        DScy: "\u0405",
        dscy: "\u0455",
        dsol: "\u29F6",
        Dstrok: "\u0110",
        dstrok: "\u0111",
        dtdot: "\u22F1",
        dtri: "\u25BF",
        dtrif: "\u25BE",
        duarr: "\u21F5",
        duhar: "\u296F",
        dwangle: "\u29A6",
        DZcy: "\u040F",
        dzcy: "\u045F",
        dzigrarr: "\u27FF",
        Eacute: "\xC9",
        eacute: "\xE9",
        easter: "\u2A6E",
        Ecaron: "\u011A",
        ecaron: "\u011B",
        Ecirc: "\xCA",
        ecirc: "\xEA",
        ecir: "\u2256",
        ecolon: "\u2255",
        Ecy: "\u042D",
        ecy: "\u044D",
        eDDot: "\u2A77",
        Edot: "\u0116",
        edot: "\u0117",
        eDot: "\u2251",
        ee: "\u2147",
        efDot: "\u2252",
        Efr: "\u{1D508}",
        efr: "\u{1D522}",
        eg: "\u2A9A",
        Egrave: "\xC8",
        egrave: "\xE8",
        egs: "\u2A96",
        egsdot: "\u2A98",
        el: "\u2A99",
        Element: "\u2208",
        elinters: "\u23E7",
        ell: "\u2113",
        els: "\u2A95",
        elsdot: "\u2A97",
        Emacr: "\u0112",
        emacr: "\u0113",
        empty: "\u2205",
        emptyset: "\u2205",
        EmptySmallSquare: "\u25FB",
        emptyv: "\u2205",
        EmptyVerySmallSquare: "\u25AB",
        emsp13: "\u2004",
        emsp14: "\u2005",
        emsp: "\u2003",
        ENG: "\u014A",
        eng: "\u014B",
        ensp: "\u2002",
        Eogon: "\u0118",
        eogon: "\u0119",
        Eopf: "\u{1D53C}",
        eopf: "\u{1D556}",
        epar: "\u22D5",
        eparsl: "\u29E3",
        eplus: "\u2A71",
        epsi: "\u03B5",
        Epsilon: "\u0395",
        epsilon: "\u03B5",
        epsiv: "\u03F5",
        eqcirc: "\u2256",
        eqcolon: "\u2255",
        eqsim: "\u2242",
        eqslantgtr: "\u2A96",
        eqslantless: "\u2A95",
        Equal: "\u2A75",
        equals: "=",
        EqualTilde: "\u2242",
        equest: "\u225F",
        Equilibrium: "\u21CC",
        equiv: "\u2261",
        equivDD: "\u2A78",
        eqvparsl: "\u29E5",
        erarr: "\u2971",
        erDot: "\u2253",
        escr: "\u212F",
        Escr: "\u2130",
        esdot: "\u2250",
        Esim: "\u2A73",
        esim: "\u2242",
        Eta: "\u0397",
        eta: "\u03B7",
        ETH: "\xD0",
        eth: "\xF0",
        Euml: "\xCB",
        euml: "\xEB",
        euro: "\u20AC",
        excl: "!",
        exist: "\u2203",
        Exists: "\u2203",
        expectation: "\u2130",
        exponentiale: "\u2147",
        ExponentialE: "\u2147",
        fallingdotseq: "\u2252",
        Fcy: "\u0424",
        fcy: "\u0444",
        female: "\u2640",
        ffilig: "\uFB03",
        fflig: "\uFB00",
        ffllig: "\uFB04",
        Ffr: "\u{1D509}",
        ffr: "\u{1D523}",
        filig: "\uFB01",
        FilledSmallSquare: "\u25FC",
        FilledVerySmallSquare: "\u25AA",
        fjlig: "fj",
        flat: "\u266D",
        fllig: "\uFB02",
        fltns: "\u25B1",
        fnof: "\u0192",
        Fopf: "\u{1D53D}",
        fopf: "\u{1D557}",
        forall: "\u2200",
        ForAll: "\u2200",
        fork: "\u22D4",
        forkv: "\u2AD9",
        Fouriertrf: "\u2131",
        fpartint: "\u2A0D",
        frac12: "\xBD",
        frac13: "\u2153",
        frac14: "\xBC",
        frac15: "\u2155",
        frac16: "\u2159",
        frac18: "\u215B",
        frac23: "\u2154",
        frac25: "\u2156",
        frac34: "\xBE",
        frac35: "\u2157",
        frac38: "\u215C",
        frac45: "\u2158",
        frac56: "\u215A",
        frac58: "\u215D",
        frac78: "\u215E",
        frasl: "\u2044",
        frown: "\u2322",
        fscr: "\u{1D4BB}",
        Fscr: "\u2131",
        gacute: "\u01F5",
        Gamma: "\u0393",
        gamma: "\u03B3",
        Gammad: "\u03DC",
        gammad: "\u03DD",
        gap: "\u2A86",
        Gbreve: "\u011E",
        gbreve: "\u011F",
        Gcedil: "\u0122",
        Gcirc: "\u011C",
        gcirc: "\u011D",
        Gcy: "\u0413",
        gcy: "\u0433",
        Gdot: "\u0120",
        gdot: "\u0121",
        ge: "\u2265",
        gE: "\u2267",
        gEl: "\u2A8C",
        gel: "\u22DB",
        geq: "\u2265",
        geqq: "\u2267",
        geqslant: "\u2A7E",
        gescc: "\u2AA9",
        ges: "\u2A7E",
        gesdot: "\u2A80",
        gesdoto: "\u2A82",
        gesdotol: "\u2A84",
        gesl: "\u22DB\uFE00",
        gesles: "\u2A94",
        Gfr: "\u{1D50A}",
        gfr: "\u{1D524}",
        gg: "\u226B",
        Gg: "\u22D9",
        ggg: "\u22D9",
        gimel: "\u2137",
        GJcy: "\u0403",
        gjcy: "\u0453",
        gla: "\u2AA5",
        gl: "\u2277",
        glE: "\u2A92",
        glj: "\u2AA4",
        gnap: "\u2A8A",
        gnapprox: "\u2A8A",
        gne: "\u2A88",
        gnE: "\u2269",
        gneq: "\u2A88",
        gneqq: "\u2269",
        gnsim: "\u22E7",
        Gopf: "\u{1D53E}",
        gopf: "\u{1D558}",
        grave: "`",
        GreaterEqual: "\u2265",
        GreaterEqualLess: "\u22DB",
        GreaterFullEqual: "\u2267",
        GreaterGreater: "\u2AA2",
        GreaterLess: "\u2277",
        GreaterSlantEqual: "\u2A7E",
        GreaterTilde: "\u2273",
        Gscr: "\u{1D4A2}",
        gscr: "\u210A",
        gsim: "\u2273",
        gsime: "\u2A8E",
        gsiml: "\u2A90",
        gtcc: "\u2AA7",
        gtcir: "\u2A7A",
        gt: ">",
        GT: ">",
        Gt: "\u226B",
        gtdot: "\u22D7",
        gtlPar: "\u2995",
        gtquest: "\u2A7C",
        gtrapprox: "\u2A86",
        gtrarr: "\u2978",
        gtrdot: "\u22D7",
        gtreqless: "\u22DB",
        gtreqqless: "\u2A8C",
        gtrless: "\u2277",
        gtrsim: "\u2273",
        gvertneqq: "\u2269\uFE00",
        gvnE: "\u2269\uFE00",
        Hacek: "\u02C7",
        hairsp: "\u200A",
        half: "\xBD",
        hamilt: "\u210B",
        HARDcy: "\u042A",
        hardcy: "\u044A",
        harrcir: "\u2948",
        harr: "\u2194",
        hArr: "\u21D4",
        harrw: "\u21AD",
        Hat: "^",
        hbar: "\u210F",
        Hcirc: "\u0124",
        hcirc: "\u0125",
        hearts: "\u2665",
        heartsuit: "\u2665",
        hellip: "\u2026",
        hercon: "\u22B9",
        hfr: "\u{1D525}",
        Hfr: "\u210C",
        HilbertSpace: "\u210B",
        hksearow: "\u2925",
        hkswarow: "\u2926",
        hoarr: "\u21FF",
        homtht: "\u223B",
        hookleftarrow: "\u21A9",
        hookrightarrow: "\u21AA",
        hopf: "\u{1D559}",
        Hopf: "\u210D",
        horbar: "\u2015",
        HorizontalLine: "\u2500",
        hscr: "\u{1D4BD}",
        Hscr: "\u210B",
        hslash: "\u210F",
        Hstrok: "\u0126",
        hstrok: "\u0127",
        HumpDownHump: "\u224E",
        HumpEqual: "\u224F",
        hybull: "\u2043",
        hyphen: "\u2010",
        Iacute: "\xCD",
        iacute: "\xED",
        ic: "\u2063",
        Icirc: "\xCE",
        icirc: "\xEE",
        Icy: "\u0418",
        icy: "\u0438",
        Idot: "\u0130",
        IEcy: "\u0415",
        iecy: "\u0435",
        iexcl: "\xA1",
        iff: "\u21D4",
        ifr: "\u{1D526}",
        Ifr: "\u2111",
        Igrave: "\xCC",
        igrave: "\xEC",
        ii: "\u2148",
        iiiint: "\u2A0C",
        iiint: "\u222D",
        iinfin: "\u29DC",
        iiota: "\u2129",
        IJlig: "\u0132",
        ijlig: "\u0133",
        Imacr: "\u012A",
        imacr: "\u012B",
        image: "\u2111",
        ImaginaryI: "\u2148",
        imagline: "\u2110",
        imagpart: "\u2111",
        imath: "\u0131",
        Im: "\u2111",
        imof: "\u22B7",
        imped: "\u01B5",
        Implies: "\u21D2",
        incare: "\u2105",
        in: "\u2208",
        infin: "\u221E",
        infintie: "\u29DD",
        inodot: "\u0131",
        intcal: "\u22BA",
        int: "\u222B",
        Int: "\u222C",
        integers: "\u2124",
        Integral: "\u222B",
        intercal: "\u22BA",
        Intersection: "\u22C2",
        intlarhk: "\u2A17",
        intprod: "\u2A3C",
        InvisibleComma: "\u2063",
        InvisibleTimes: "\u2062",
        IOcy: "\u0401",
        iocy: "\u0451",
        Iogon: "\u012E",
        iogon: "\u012F",
        Iopf: "\u{1D540}",
        iopf: "\u{1D55A}",
        Iota: "\u0399",
        iota: "\u03B9",
        iprod: "\u2A3C",
        iquest: "\xBF",
        iscr: "\u{1D4BE}",
        Iscr: "\u2110",
        isin: "\u2208",
        isindot: "\u22F5",
        isinE: "\u22F9",
        isins: "\u22F4",
        isinsv: "\u22F3",
        isinv: "\u2208",
        it: "\u2062",
        Itilde: "\u0128",
        itilde: "\u0129",
        Iukcy: "\u0406",
        iukcy: "\u0456",
        Iuml: "\xCF",
        iuml: "\xEF",
        Jcirc: "\u0134",
        jcirc: "\u0135",
        Jcy: "\u0419",
        jcy: "\u0439",
        Jfr: "\u{1D50D}",
        jfr: "\u{1D527}",
        jmath: "\u0237",
        Jopf: "\u{1D541}",
        jopf: "\u{1D55B}",
        Jscr: "\u{1D4A5}",
        jscr: "\u{1D4BF}",
        Jsercy: "\u0408",
        jsercy: "\u0458",
        Jukcy: "\u0404",
        jukcy: "\u0454",
        Kappa: "\u039A",
        kappa: "\u03BA",
        kappav: "\u03F0",
        Kcedil: "\u0136",
        kcedil: "\u0137",
        Kcy: "\u041A",
        kcy: "\u043A",
        Kfr: "\u{1D50E}",
        kfr: "\u{1D528}",
        kgreen: "\u0138",
        KHcy: "\u0425",
        khcy: "\u0445",
        KJcy: "\u040C",
        kjcy: "\u045C",
        Kopf: "\u{1D542}",
        kopf: "\u{1D55C}",
        Kscr: "\u{1D4A6}",
        kscr: "\u{1D4C0}",
        lAarr: "\u21DA",
        Lacute: "\u0139",
        lacute: "\u013A",
        laemptyv: "\u29B4",
        lagran: "\u2112",
        Lambda: "\u039B",
        lambda: "\u03BB",
        lang: "\u27E8",
        Lang: "\u27EA",
        langd: "\u2991",
        langle: "\u27E8",
        lap: "\u2A85",
        Laplacetrf: "\u2112",
        laquo: "\xAB",
        larrb: "\u21E4",
        larrbfs: "\u291F",
        larr: "\u2190",
        Larr: "\u219E",
        lArr: "\u21D0",
        larrfs: "\u291D",
        larrhk: "\u21A9",
        larrlp: "\u21AB",
        larrpl: "\u2939",
        larrsim: "\u2973",
        larrtl: "\u21A2",
        latail: "\u2919",
        lAtail: "\u291B",
        lat: "\u2AAB",
        late: "\u2AAD",
        lates: "\u2AAD\uFE00",
        lbarr: "\u290C",
        lBarr: "\u290E",
        lbbrk: "\u2772",
        lbrace: "{",
        lbrack: "[",
        lbrke: "\u298B",
        lbrksld: "\u298F",
        lbrkslu: "\u298D",
        Lcaron: "\u013D",
        lcaron: "\u013E",
        Lcedil: "\u013B",
        lcedil: "\u013C",
        lceil: "\u2308",
        lcub: "{",
        Lcy: "\u041B",
        lcy: "\u043B",
        ldca: "\u2936",
        ldquo: "\u201C",
        ldquor: "\u201E",
        ldrdhar: "\u2967",
        ldrushar: "\u294B",
        ldsh: "\u21B2",
        le: "\u2264",
        lE: "\u2266",
        LeftAngleBracket: "\u27E8",
        LeftArrowBar: "\u21E4",
        leftarrow: "\u2190",
        LeftArrow: "\u2190",
        Leftarrow: "\u21D0",
        LeftArrowRightArrow: "\u21C6",
        leftarrowtail: "\u21A2",
        LeftCeiling: "\u2308",
        LeftDoubleBracket: "\u27E6",
        LeftDownTeeVector: "\u2961",
        LeftDownVectorBar: "\u2959",
        LeftDownVector: "\u21C3",
        LeftFloor: "\u230A",
        leftharpoondown: "\u21BD",
        leftharpoonup: "\u21BC",
        leftleftarrows: "\u21C7",
        leftrightarrow: "\u2194",
        LeftRightArrow: "\u2194",
        Leftrightarrow: "\u21D4",
        leftrightarrows: "\u21C6",
        leftrightharpoons: "\u21CB",
        leftrightsquigarrow: "\u21AD",
        LeftRightVector: "\u294E",
        LeftTeeArrow: "\u21A4",
        LeftTee: "\u22A3",
        LeftTeeVector: "\u295A",
        leftthreetimes: "\u22CB",
        LeftTriangleBar: "\u29CF",
        LeftTriangle: "\u22B2",
        LeftTriangleEqual: "\u22B4",
        LeftUpDownVector: "\u2951",
        LeftUpTeeVector: "\u2960",
        LeftUpVectorBar: "\u2958",
        LeftUpVector: "\u21BF",
        LeftVectorBar: "\u2952",
        LeftVector: "\u21BC",
        lEg: "\u2A8B",
        leg: "\u22DA",
        leq: "\u2264",
        leqq: "\u2266",
        leqslant: "\u2A7D",
        lescc: "\u2AA8",
        les: "\u2A7D",
        lesdot: "\u2A7F",
        lesdoto: "\u2A81",
        lesdotor: "\u2A83",
        lesg: "\u22DA\uFE00",
        lesges: "\u2A93",
        lessapprox: "\u2A85",
        lessdot: "\u22D6",
        lesseqgtr: "\u22DA",
        lesseqqgtr: "\u2A8B",
        LessEqualGreater: "\u22DA",
        LessFullEqual: "\u2266",
        LessGreater: "\u2276",
        lessgtr: "\u2276",
        LessLess: "\u2AA1",
        lesssim: "\u2272",
        LessSlantEqual: "\u2A7D",
        LessTilde: "\u2272",
        lfisht: "\u297C",
        lfloor: "\u230A",
        Lfr: "\u{1D50F}",
        lfr: "\u{1D529}",
        lg: "\u2276",
        lgE: "\u2A91",
        lHar: "\u2962",
        lhard: "\u21BD",
        lharu: "\u21BC",
        lharul: "\u296A",
        lhblk: "\u2584",
        LJcy: "\u0409",
        ljcy: "\u0459",
        llarr: "\u21C7",
        ll: "\u226A",
        Ll: "\u22D8",
        llcorner: "\u231E",
        Lleftarrow: "\u21DA",
        llhard: "\u296B",
        lltri: "\u25FA",
        Lmidot: "\u013F",
        lmidot: "\u0140",
        lmoustache: "\u23B0",
        lmoust: "\u23B0",
        lnap: "\u2A89",
        lnapprox: "\u2A89",
        lne: "\u2A87",
        lnE: "\u2268",
        lneq: "\u2A87",
        lneqq: "\u2268",
        lnsim: "\u22E6",
        loang: "\u27EC",
        loarr: "\u21FD",
        lobrk: "\u27E6",
        longleftarrow: "\u27F5",
        LongLeftArrow: "\u27F5",
        Longleftarrow: "\u27F8",
        longleftrightarrow: "\u27F7",
        LongLeftRightArrow: "\u27F7",
        Longleftrightarrow: "\u27FA",
        longmapsto: "\u27FC",
        longrightarrow: "\u27F6",
        LongRightArrow: "\u27F6",
        Longrightarrow: "\u27F9",
        looparrowleft: "\u21AB",
        looparrowright: "\u21AC",
        lopar: "\u2985",
        Lopf: "\u{1D543}",
        lopf: "\u{1D55D}",
        loplus: "\u2A2D",
        lotimes: "\u2A34",
        lowast: "\u2217",
        lowbar: "_",
        LowerLeftArrow: "\u2199",
        LowerRightArrow: "\u2198",
        loz: "\u25CA",
        lozenge: "\u25CA",
        lozf: "\u29EB",
        lpar: "(",
        lparlt: "\u2993",
        lrarr: "\u21C6",
        lrcorner: "\u231F",
        lrhar: "\u21CB",
        lrhard: "\u296D",
        lrm: "\u200E",
        lrtri: "\u22BF",
        lsaquo: "\u2039",
        lscr: "\u{1D4C1}",
        Lscr: "\u2112",
        lsh: "\u21B0",
        Lsh: "\u21B0",
        lsim: "\u2272",
        lsime: "\u2A8D",
        lsimg: "\u2A8F",
        lsqb: "[",
        lsquo: "\u2018",
        lsquor: "\u201A",
        Lstrok: "\u0141",
        lstrok: "\u0142",
        ltcc: "\u2AA6",
        ltcir: "\u2A79",
        lt: "<",
        LT: "<",
        Lt: "\u226A",
        ltdot: "\u22D6",
        lthree: "\u22CB",
        ltimes: "\u22C9",
        ltlarr: "\u2976",
        ltquest: "\u2A7B",
        ltri: "\u25C3",
        ltrie: "\u22B4",
        ltrif: "\u25C2",
        ltrPar: "\u2996",
        lurdshar: "\u294A",
        luruhar: "\u2966",
        lvertneqq: "\u2268\uFE00",
        lvnE: "\u2268\uFE00",
        macr: "\xAF",
        male: "\u2642",
        malt: "\u2720",
        maltese: "\u2720",
        Map: "\u2905",
        map: "\u21A6",
        mapsto: "\u21A6",
        mapstodown: "\u21A7",
        mapstoleft: "\u21A4",
        mapstoup: "\u21A5",
        marker: "\u25AE",
        mcomma: "\u2A29",
        Mcy: "\u041C",
        mcy: "\u043C",
        mdash: "\u2014",
        mDDot: "\u223A",
        measuredangle: "\u2221",
        MediumSpace: "\u205F",
        Mellintrf: "\u2133",
        Mfr: "\u{1D510}",
        mfr: "\u{1D52A}",
        mho: "\u2127",
        micro: "\xB5",
        midast: "*",
        midcir: "\u2AF0",
        mid: "\u2223",
        middot: "\xB7",
        minusb: "\u229F",
        minus: "\u2212",
        minusd: "\u2238",
        minusdu: "\u2A2A",
        MinusPlus: "\u2213",
        mlcp: "\u2ADB",
        mldr: "\u2026",
        mnplus: "\u2213",
        models: "\u22A7",
        Mopf: "\u{1D544}",
        mopf: "\u{1D55E}",
        mp: "\u2213",
        mscr: "\u{1D4C2}",
        Mscr: "\u2133",
        mstpos: "\u223E",
        Mu: "\u039C",
        mu: "\u03BC",
        multimap: "\u22B8",
        mumap: "\u22B8",
        nabla: "\u2207",
        Nacute: "\u0143",
        nacute: "\u0144",
        nang: "\u2220\u20D2",
        nap: "\u2249",
        napE: "\u2A70\u0338",
        napid: "\u224B\u0338",
        napos: "\u0149",
        napprox: "\u2249",
        natural: "\u266E",
        naturals: "\u2115",
        natur: "\u266E",
        nbsp: "\xA0",
        nbump: "\u224E\u0338",
        nbumpe: "\u224F\u0338",
        ncap: "\u2A43",
        Ncaron: "\u0147",
        ncaron: "\u0148",
        Ncedil: "\u0145",
        ncedil: "\u0146",
        ncong: "\u2247",
        ncongdot: "\u2A6D\u0338",
        ncup: "\u2A42",
        Ncy: "\u041D",
        ncy: "\u043D",
        ndash: "\u2013",
        nearhk: "\u2924",
        nearr: "\u2197",
        neArr: "\u21D7",
        nearrow: "\u2197",
        ne: "\u2260",
        nedot: "\u2250\u0338",
        NegativeMediumSpace: "\u200B",
        NegativeThickSpace: "\u200B",
        NegativeThinSpace: "\u200B",
        NegativeVeryThinSpace: "\u200B",
        nequiv: "\u2262",
        nesear: "\u2928",
        nesim: "\u2242\u0338",
        NestedGreaterGreater: "\u226B",
        NestedLessLess: "\u226A",
        NewLine: `
`,
        nexist: "\u2204",
        nexists: "\u2204",
        Nfr: "\u{1D511}",
        nfr: "\u{1D52B}",
        ngE: "\u2267\u0338",
        nge: "\u2271",
        ngeq: "\u2271",
        ngeqq: "\u2267\u0338",
        ngeqslant: "\u2A7E\u0338",
        nges: "\u2A7E\u0338",
        nGg: "\u22D9\u0338",
        ngsim: "\u2275",
        nGt: "\u226B\u20D2",
        ngt: "\u226F",
        ngtr: "\u226F",
        nGtv: "\u226B\u0338",
        nharr: "\u21AE",
        nhArr: "\u21CE",
        nhpar: "\u2AF2",
        ni: "\u220B",
        nis: "\u22FC",
        nisd: "\u22FA",
        niv: "\u220B",
        NJcy: "\u040A",
        njcy: "\u045A",
        nlarr: "\u219A",
        nlArr: "\u21CD",
        nldr: "\u2025",
        nlE: "\u2266\u0338",
        nle: "\u2270",
        nleftarrow: "\u219A",
        nLeftarrow: "\u21CD",
        nleftrightarrow: "\u21AE",
        nLeftrightarrow: "\u21CE",
        nleq: "\u2270",
        nleqq: "\u2266\u0338",
        nleqslant: "\u2A7D\u0338",
        nles: "\u2A7D\u0338",
        nless: "\u226E",
        nLl: "\u22D8\u0338",
        nlsim: "\u2274",
        nLt: "\u226A\u20D2",
        nlt: "\u226E",
        nltri: "\u22EA",
        nltrie: "\u22EC",
        nLtv: "\u226A\u0338",
        nmid: "\u2224",
        NoBreak: "\u2060",
        NonBreakingSpace: "\xA0",
        nopf: "\u{1D55F}",
        Nopf: "\u2115",
        Not: "\u2AEC",
        not: "\xAC",
        NotCongruent: "\u2262",
        NotCupCap: "\u226D",
        NotDoubleVerticalBar: "\u2226",
        NotElement: "\u2209",
        NotEqual: "\u2260",
        NotEqualTilde: "\u2242\u0338",
        NotExists: "\u2204",
        NotGreater: "\u226F",
        NotGreaterEqual: "\u2271",
        NotGreaterFullEqual: "\u2267\u0338",
        NotGreaterGreater: "\u226B\u0338",
        NotGreaterLess: "\u2279",
        NotGreaterSlantEqual: "\u2A7E\u0338",
        NotGreaterTilde: "\u2275",
        NotHumpDownHump: "\u224E\u0338",
        NotHumpEqual: "\u224F\u0338",
        notin: "\u2209",
        notindot: "\u22F5\u0338",
        notinE: "\u22F9\u0338",
        notinva: "\u2209",
        notinvb: "\u22F7",
        notinvc: "\u22F6",
        NotLeftTriangleBar: "\u29CF\u0338",
        NotLeftTriangle: "\u22EA",
        NotLeftTriangleEqual: "\u22EC",
        NotLess: "\u226E",
        NotLessEqual: "\u2270",
        NotLessGreater: "\u2278",
        NotLessLess: "\u226A\u0338",
        NotLessSlantEqual: "\u2A7D\u0338",
        NotLessTilde: "\u2274",
        NotNestedGreaterGreater: "\u2AA2\u0338",
        NotNestedLessLess: "\u2AA1\u0338",
        notni: "\u220C",
        notniva: "\u220C",
        notnivb: "\u22FE",
        notnivc: "\u22FD",
        NotPrecedes: "\u2280",
        NotPrecedesEqual: "\u2AAF\u0338",
        NotPrecedesSlantEqual: "\u22E0",
        NotReverseElement: "\u220C",
        NotRightTriangleBar: "\u29D0\u0338",
        NotRightTriangle: "\u22EB",
        NotRightTriangleEqual: "\u22ED",
        NotSquareSubset: "\u228F\u0338",
        NotSquareSubsetEqual: "\u22E2",
        NotSquareSuperset: "\u2290\u0338",
        NotSquareSupersetEqual: "\u22E3",
        NotSubset: "\u2282\u20D2",
        NotSubsetEqual: "\u2288",
        NotSucceeds: "\u2281",
        NotSucceedsEqual: "\u2AB0\u0338",
        NotSucceedsSlantEqual: "\u22E1",
        NotSucceedsTilde: "\u227F\u0338",
        NotSuperset: "\u2283\u20D2",
        NotSupersetEqual: "\u2289",
        NotTilde: "\u2241",
        NotTildeEqual: "\u2244",
        NotTildeFullEqual: "\u2247",
        NotTildeTilde: "\u2249",
        NotVerticalBar: "\u2224",
        nparallel: "\u2226",
        npar: "\u2226",
        nparsl: "\u2AFD\u20E5",
        npart: "\u2202\u0338",
        npolint: "\u2A14",
        npr: "\u2280",
        nprcue: "\u22E0",
        nprec: "\u2280",
        npreceq: "\u2AAF\u0338",
        npre: "\u2AAF\u0338",
        nrarrc: "\u2933\u0338",
        nrarr: "\u219B",
        nrArr: "\u21CF",
        nrarrw: "\u219D\u0338",
        nrightarrow: "\u219B",
        nRightarrow: "\u21CF",
        nrtri: "\u22EB",
        nrtrie: "\u22ED",
        nsc: "\u2281",
        nsccue: "\u22E1",
        nsce: "\u2AB0\u0338",
        Nscr: "\u{1D4A9}",
        nscr: "\u{1D4C3}",
        nshortmid: "\u2224",
        nshortparallel: "\u2226",
        nsim: "\u2241",
        nsime: "\u2244",
        nsimeq: "\u2244",
        nsmid: "\u2224",
        nspar: "\u2226",
        nsqsube: "\u22E2",
        nsqsupe: "\u22E3",
        nsub: "\u2284",
        nsubE: "\u2AC5\u0338",
        nsube: "\u2288",
        nsubset: "\u2282\u20D2",
        nsubseteq: "\u2288",
        nsubseteqq: "\u2AC5\u0338",
        nsucc: "\u2281",
        nsucceq: "\u2AB0\u0338",
        nsup: "\u2285",
        nsupE: "\u2AC6\u0338",
        nsupe: "\u2289",
        nsupset: "\u2283\u20D2",
        nsupseteq: "\u2289",
        nsupseteqq: "\u2AC6\u0338",
        ntgl: "\u2279",
        Ntilde: "\xD1",
        ntilde: "\xF1",
        ntlg: "\u2278",
        ntriangleleft: "\u22EA",
        ntrianglelefteq: "\u22EC",
        ntriangleright: "\u22EB",
        ntrianglerighteq: "\u22ED",
        Nu: "\u039D",
        nu: "\u03BD",
        num: "#",
        numero: "\u2116",
        numsp: "\u2007",
        nvap: "\u224D\u20D2",
        nvdash: "\u22AC",
        nvDash: "\u22AD",
        nVdash: "\u22AE",
        nVDash: "\u22AF",
        nvge: "\u2265\u20D2",
        nvgt: ">\u20D2",
        nvHarr: "\u2904",
        nvinfin: "\u29DE",
        nvlArr: "\u2902",
        nvle: "\u2264\u20D2",
        nvlt: "<\u20D2",
        nvltrie: "\u22B4\u20D2",
        nvrArr: "\u2903",
        nvrtrie: "\u22B5\u20D2",
        nvsim: "\u223C\u20D2",
        nwarhk: "\u2923",
        nwarr: "\u2196",
        nwArr: "\u21D6",
        nwarrow: "\u2196",
        nwnear: "\u2927",
        Oacute: "\xD3",
        oacute: "\xF3",
        oast: "\u229B",
        Ocirc: "\xD4",
        ocirc: "\xF4",
        ocir: "\u229A",
        Ocy: "\u041E",
        ocy: "\u043E",
        odash: "\u229D",
        Odblac: "\u0150",
        odblac: "\u0151",
        odiv: "\u2A38",
        odot: "\u2299",
        odsold: "\u29BC",
        OElig: "\u0152",
        oelig: "\u0153",
        ofcir: "\u29BF",
        Ofr: "\u{1D512}",
        ofr: "\u{1D52C}",
        ogon: "\u02DB",
        Ograve: "\xD2",
        ograve: "\xF2",
        ogt: "\u29C1",
        ohbar: "\u29B5",
        ohm: "\u03A9",
        oint: "\u222E",
        olarr: "\u21BA",
        olcir: "\u29BE",
        olcross: "\u29BB",
        oline: "\u203E",
        olt: "\u29C0",
        Omacr: "\u014C",
        omacr: "\u014D",
        Omega: "\u03A9",
        omega: "\u03C9",
        Omicron: "\u039F",
        omicron: "\u03BF",
        omid: "\u29B6",
        ominus: "\u2296",
        Oopf: "\u{1D546}",
        oopf: "\u{1D560}",
        opar: "\u29B7",
        OpenCurlyDoubleQuote: "\u201C",
        OpenCurlyQuote: "\u2018",
        operp: "\u29B9",
        oplus: "\u2295",
        orarr: "\u21BB",
        Or: "\u2A54",
        or: "\u2228",
        ord: "\u2A5D",
        order: "\u2134",
        orderof: "\u2134",
        ordf: "\xAA",
        ordm: "\xBA",
        origof: "\u22B6",
        oror: "\u2A56",
        orslope: "\u2A57",
        orv: "\u2A5B",
        oS: "\u24C8",
        Oscr: "\u{1D4AA}",
        oscr: "\u2134",
        Oslash: "\xD8",
        oslash: "\xF8",
        osol: "\u2298",
        Otilde: "\xD5",
        otilde: "\xF5",
        otimesas: "\u2A36",
        Otimes: "\u2A37",
        otimes: "\u2297",
        Ouml: "\xD6",
        ouml: "\xF6",
        ovbar: "\u233D",
        OverBar: "\u203E",
        OverBrace: "\u23DE",
        OverBracket: "\u23B4",
        OverParenthesis: "\u23DC",
        para: "\xB6",
        parallel: "\u2225",
        par: "\u2225",
        parsim: "\u2AF3",
        parsl: "\u2AFD",
        part: "\u2202",
        PartialD: "\u2202",
        Pcy: "\u041F",
        pcy: "\u043F",
        percnt: "%",
        period: ".",
        permil: "\u2030",
        perp: "\u22A5",
        pertenk: "\u2031",
        Pfr: "\u{1D513}",
        pfr: "\u{1D52D}",
        Phi: "\u03A6",
        phi: "\u03C6",
        phiv: "\u03D5",
        phmmat: "\u2133",
        phone: "\u260E",
        Pi: "\u03A0",
        pi: "\u03C0",
        pitchfork: "\u22D4",
        piv: "\u03D6",
        planck: "\u210F",
        planckh: "\u210E",
        plankv: "\u210F",
        plusacir: "\u2A23",
        plusb: "\u229E",
        pluscir: "\u2A22",
        plus: "+",
        plusdo: "\u2214",
        plusdu: "\u2A25",
        pluse: "\u2A72",
        PlusMinus: "\xB1",
        plusmn: "\xB1",
        plussim: "\u2A26",
        plustwo: "\u2A27",
        pm: "\xB1",
        Poincareplane: "\u210C",
        pointint: "\u2A15",
        popf: "\u{1D561}",
        Popf: "\u2119",
        pound: "\xA3",
        prap: "\u2AB7",
        Pr: "\u2ABB",
        pr: "\u227A",
        prcue: "\u227C",
        precapprox: "\u2AB7",
        prec: "\u227A",
        preccurlyeq: "\u227C",
        Precedes: "\u227A",
        PrecedesEqual: "\u2AAF",
        PrecedesSlantEqual: "\u227C",
        PrecedesTilde: "\u227E",
        preceq: "\u2AAF",
        precnapprox: "\u2AB9",
        precneqq: "\u2AB5",
        precnsim: "\u22E8",
        pre: "\u2AAF",
        prE: "\u2AB3",
        precsim: "\u227E",
        prime: "\u2032",
        Prime: "\u2033",
        primes: "\u2119",
        prnap: "\u2AB9",
        prnE: "\u2AB5",
        prnsim: "\u22E8",
        prod: "\u220F",
        Product: "\u220F",
        profalar: "\u232E",
        profline: "\u2312",
        profsurf: "\u2313",
        prop: "\u221D",
        Proportional: "\u221D",
        Proportion: "\u2237",
        propto: "\u221D",
        prsim: "\u227E",
        prurel: "\u22B0",
        Pscr: "\u{1D4AB}",
        pscr: "\u{1D4C5}",
        Psi: "\u03A8",
        psi: "\u03C8",
        puncsp: "\u2008",
        Qfr: "\u{1D514}",
        qfr: "\u{1D52E}",
        qint: "\u2A0C",
        qopf: "\u{1D562}",
        Qopf: "\u211A",
        qprime: "\u2057",
        Qscr: "\u{1D4AC}",
        qscr: "\u{1D4C6}",
        quaternions: "\u210D",
        quatint: "\u2A16",
        quest: "?",
        questeq: "\u225F",
        quot: '"',
        QUOT: '"',
        rAarr: "\u21DB",
        race: "\u223D\u0331",
        Racute: "\u0154",
        racute: "\u0155",
        radic: "\u221A",
        raemptyv: "\u29B3",
        rang: "\u27E9",
        Rang: "\u27EB",
        rangd: "\u2992",
        range: "\u29A5",
        rangle: "\u27E9",
        raquo: "\xBB",
        rarrap: "\u2975",
        rarrb: "\u21E5",
        rarrbfs: "\u2920",
        rarrc: "\u2933",
        rarr: "\u2192",
        Rarr: "\u21A0",
        rArr: "\u21D2",
        rarrfs: "\u291E",
        rarrhk: "\u21AA",
        rarrlp: "\u21AC",
        rarrpl: "\u2945",
        rarrsim: "\u2974",
        Rarrtl: "\u2916",
        rarrtl: "\u21A3",
        rarrw: "\u219D",
        ratail: "\u291A",
        rAtail: "\u291C",
        ratio: "\u2236",
        rationals: "\u211A",
        rbarr: "\u290D",
        rBarr: "\u290F",
        RBarr: "\u2910",
        rbbrk: "\u2773",
        rbrace: "}",
        rbrack: "]",
        rbrke: "\u298C",
        rbrksld: "\u298E",
        rbrkslu: "\u2990",
        Rcaron: "\u0158",
        rcaron: "\u0159",
        Rcedil: "\u0156",
        rcedil: "\u0157",
        rceil: "\u2309",
        rcub: "}",
        Rcy: "\u0420",
        rcy: "\u0440",
        rdca: "\u2937",
        rdldhar: "\u2969",
        rdquo: "\u201D",
        rdquor: "\u201D",
        rdsh: "\u21B3",
        real: "\u211C",
        realine: "\u211B",
        realpart: "\u211C",
        reals: "\u211D",
        Re: "\u211C",
        rect: "\u25AD",
        reg: "\xAE",
        REG: "\xAE",
        ReverseElement: "\u220B",
        ReverseEquilibrium: "\u21CB",
        ReverseUpEquilibrium: "\u296F",
        rfisht: "\u297D",
        rfloor: "\u230B",
        rfr: "\u{1D52F}",
        Rfr: "\u211C",
        rHar: "\u2964",
        rhard: "\u21C1",
        rharu: "\u21C0",
        rharul: "\u296C",
        Rho: "\u03A1",
        rho: "\u03C1",
        rhov: "\u03F1",
        RightAngleBracket: "\u27E9",
        RightArrowBar: "\u21E5",
        rightarrow: "\u2192",
        RightArrow: "\u2192",
        Rightarrow: "\u21D2",
        RightArrowLeftArrow: "\u21C4",
        rightarrowtail: "\u21A3",
        RightCeiling: "\u2309",
        RightDoubleBracket: "\u27E7",
        RightDownTeeVector: "\u295D",
        RightDownVectorBar: "\u2955",
        RightDownVector: "\u21C2",
        RightFloor: "\u230B",
        rightharpoondown: "\u21C1",
        rightharpoonup: "\u21C0",
        rightleftarrows: "\u21C4",
        rightleftharpoons: "\u21CC",
        rightrightarrows: "\u21C9",
        rightsquigarrow: "\u219D",
        RightTeeArrow: "\u21A6",
        RightTee: "\u22A2",
        RightTeeVector: "\u295B",
        rightthreetimes: "\u22CC",
        RightTriangleBar: "\u29D0",
        RightTriangle: "\u22B3",
        RightTriangleEqual: "\u22B5",
        RightUpDownVector: "\u294F",
        RightUpTeeVector: "\u295C",
        RightUpVectorBar: "\u2954",
        RightUpVector: "\u21BE",
        RightVectorBar: "\u2953",
        RightVector: "\u21C0",
        ring: "\u02DA",
        risingdotseq: "\u2253",
        rlarr: "\u21C4",
        rlhar: "\u21CC",
        rlm: "\u200F",
        rmoustache: "\u23B1",
        rmoust: "\u23B1",
        rnmid: "\u2AEE",
        roang: "\u27ED",
        roarr: "\u21FE",
        robrk: "\u27E7",
        ropar: "\u2986",
        ropf: "\u{1D563}",
        Ropf: "\u211D",
        roplus: "\u2A2E",
        rotimes: "\u2A35",
        RoundImplies: "\u2970",
        rpar: ")",
        rpargt: "\u2994",
        rppolint: "\u2A12",
        rrarr: "\u21C9",
        Rrightarrow: "\u21DB",
        rsaquo: "\u203A",
        rscr: "\u{1D4C7}",
        Rscr: "\u211B",
        rsh: "\u21B1",
        Rsh: "\u21B1",
        rsqb: "]",
        rsquo: "\u2019",
        rsquor: "\u2019",
        rthree: "\u22CC",
        rtimes: "\u22CA",
        rtri: "\u25B9",
        rtrie: "\u22B5",
        rtrif: "\u25B8",
        rtriltri: "\u29CE",
        RuleDelayed: "\u29F4",
        ruluhar: "\u2968",
        rx: "\u211E",
        Sacute: "\u015A",
        sacute: "\u015B",
        sbquo: "\u201A",
        scap: "\u2AB8",
        Scaron: "\u0160",
        scaron: "\u0161",
        Sc: "\u2ABC",
        sc: "\u227B",
        sccue: "\u227D",
        sce: "\u2AB0",
        scE: "\u2AB4",
        Scedil: "\u015E",
        scedil: "\u015F",
        Scirc: "\u015C",
        scirc: "\u015D",
        scnap: "\u2ABA",
        scnE: "\u2AB6",
        scnsim: "\u22E9",
        scpolint: "\u2A13",
        scsim: "\u227F",
        Scy: "\u0421",
        scy: "\u0441",
        sdotb: "\u22A1",
        sdot: "\u22C5",
        sdote: "\u2A66",
        searhk: "\u2925",
        searr: "\u2198",
        seArr: "\u21D8",
        searrow: "\u2198",
        sect: "\xA7",
        semi: ";",
        seswar: "\u2929",
        setminus: "\u2216",
        setmn: "\u2216",
        sext: "\u2736",
        Sfr: "\u{1D516}",
        sfr: "\u{1D530}",
        sfrown: "\u2322",
        sharp: "\u266F",
        SHCHcy: "\u0429",
        shchcy: "\u0449",
        SHcy: "\u0428",
        shcy: "\u0448",
        ShortDownArrow: "\u2193",
        ShortLeftArrow: "\u2190",
        shortmid: "\u2223",
        shortparallel: "\u2225",
        ShortRightArrow: "\u2192",
        ShortUpArrow: "\u2191",
        shy: "\xAD",
        Sigma: "\u03A3",
        sigma: "\u03C3",
        sigmaf: "\u03C2",
        sigmav: "\u03C2",
        sim: "\u223C",
        simdot: "\u2A6A",
        sime: "\u2243",
        simeq: "\u2243",
        simg: "\u2A9E",
        simgE: "\u2AA0",
        siml: "\u2A9D",
        simlE: "\u2A9F",
        simne: "\u2246",
        simplus: "\u2A24",
        simrarr: "\u2972",
        slarr: "\u2190",
        SmallCircle: "\u2218",
        smallsetminus: "\u2216",
        smashp: "\u2A33",
        smeparsl: "\u29E4",
        smid: "\u2223",
        smile: "\u2323",
        smt: "\u2AAA",
        smte: "\u2AAC",
        smtes: "\u2AAC\uFE00",
        SOFTcy: "\u042C",
        softcy: "\u044C",
        solbar: "\u233F",
        solb: "\u29C4",
        sol: "/",
        Sopf: "\u{1D54A}",
        sopf: "\u{1D564}",
        spades: "\u2660",
        spadesuit: "\u2660",
        spar: "\u2225",
        sqcap: "\u2293",
        sqcaps: "\u2293\uFE00",
        sqcup: "\u2294",
        sqcups: "\u2294\uFE00",
        Sqrt: "\u221A",
        sqsub: "\u228F",
        sqsube: "\u2291",
        sqsubset: "\u228F",
        sqsubseteq: "\u2291",
        sqsup: "\u2290",
        sqsupe: "\u2292",
        sqsupset: "\u2290",
        sqsupseteq: "\u2292",
        square: "\u25A1",
        Square: "\u25A1",
        SquareIntersection: "\u2293",
        SquareSubset: "\u228F",
        SquareSubsetEqual: "\u2291",
        SquareSuperset: "\u2290",
        SquareSupersetEqual: "\u2292",
        SquareUnion: "\u2294",
        squarf: "\u25AA",
        squ: "\u25A1",
        squf: "\u25AA",
        srarr: "\u2192",
        Sscr: "\u{1D4AE}",
        sscr: "\u{1D4C8}",
        ssetmn: "\u2216",
        ssmile: "\u2323",
        sstarf: "\u22C6",
        Star: "\u22C6",
        star: "\u2606",
        starf: "\u2605",
        straightepsilon: "\u03F5",
        straightphi: "\u03D5",
        strns: "\xAF",
        sub: "\u2282",
        Sub: "\u22D0",
        subdot: "\u2ABD",
        subE: "\u2AC5",
        sube: "\u2286",
        subedot: "\u2AC3",
        submult: "\u2AC1",
        subnE: "\u2ACB",
        subne: "\u228A",
        subplus: "\u2ABF",
        subrarr: "\u2979",
        subset: "\u2282",
        Subset: "\u22D0",
        subseteq: "\u2286",
        subseteqq: "\u2AC5",
        SubsetEqual: "\u2286",
        subsetneq: "\u228A",
        subsetneqq: "\u2ACB",
        subsim: "\u2AC7",
        subsub: "\u2AD5",
        subsup: "\u2AD3",
        succapprox: "\u2AB8",
        succ: "\u227B",
        succcurlyeq: "\u227D",
        Succeeds: "\u227B",
        SucceedsEqual: "\u2AB0",
        SucceedsSlantEqual: "\u227D",
        SucceedsTilde: "\u227F",
        succeq: "\u2AB0",
        succnapprox: "\u2ABA",
        succneqq: "\u2AB6",
        succnsim: "\u22E9",
        succsim: "\u227F",
        SuchThat: "\u220B",
        sum: "\u2211",
        Sum: "\u2211",
        sung: "\u266A",
        sup1: "\xB9",
        sup2: "\xB2",
        sup3: "\xB3",
        sup: "\u2283",
        Sup: "\u22D1",
        supdot: "\u2ABE",
        supdsub: "\u2AD8",
        supE: "\u2AC6",
        supe: "\u2287",
        supedot: "\u2AC4",
        Superset: "\u2283",
        SupersetEqual: "\u2287",
        suphsol: "\u27C9",
        suphsub: "\u2AD7",
        suplarr: "\u297B",
        supmult: "\u2AC2",
        supnE: "\u2ACC",
        supne: "\u228B",
        supplus: "\u2AC0",
        supset: "\u2283",
        Supset: "\u22D1",
        supseteq: "\u2287",
        supseteqq: "\u2AC6",
        supsetneq: "\u228B",
        supsetneqq: "\u2ACC",
        supsim: "\u2AC8",
        supsub: "\u2AD4",
        supsup: "\u2AD6",
        swarhk: "\u2926",
        swarr: "\u2199",
        swArr: "\u21D9",
        swarrow: "\u2199",
        swnwar: "\u292A",
        szlig: "\xDF",
        Tab: "	",
        target: "\u2316",
        Tau: "\u03A4",
        tau: "\u03C4",
        tbrk: "\u23B4",
        Tcaron: "\u0164",
        tcaron: "\u0165",
        Tcedil: "\u0162",
        tcedil: "\u0163",
        Tcy: "\u0422",
        tcy: "\u0442",
        tdot: "\u20DB",
        telrec: "\u2315",
        Tfr: "\u{1D517}",
        tfr: "\u{1D531}",
        there4: "\u2234",
        therefore: "\u2234",
        Therefore: "\u2234",
        Theta: "\u0398",
        theta: "\u03B8",
        thetasym: "\u03D1",
        thetav: "\u03D1",
        thickapprox: "\u2248",
        thicksim: "\u223C",
        ThickSpace: "\u205F\u200A",
        ThinSpace: "\u2009",
        thinsp: "\u2009",
        thkap: "\u2248",
        thksim: "\u223C",
        THORN: "\xDE",
        thorn: "\xFE",
        tilde: "\u02DC",
        Tilde: "\u223C",
        TildeEqual: "\u2243",
        TildeFullEqual: "\u2245",
        TildeTilde: "\u2248",
        timesbar: "\u2A31",
        timesb: "\u22A0",
        times: "\xD7",
        timesd: "\u2A30",
        tint: "\u222D",
        toea: "\u2928",
        topbot: "\u2336",
        topcir: "\u2AF1",
        top: "\u22A4",
        Topf: "\u{1D54B}",
        topf: "\u{1D565}",
        topfork: "\u2ADA",
        tosa: "\u2929",
        tprime: "\u2034",
        trade: "\u2122",
        TRADE: "\u2122",
        triangle: "\u25B5",
        triangledown: "\u25BF",
        triangleleft: "\u25C3",
        trianglelefteq: "\u22B4",
        triangleq: "\u225C",
        triangleright: "\u25B9",
        trianglerighteq: "\u22B5",
        tridot: "\u25EC",
        trie: "\u225C",
        triminus: "\u2A3A",
        TripleDot: "\u20DB",
        triplus: "\u2A39",
        trisb: "\u29CD",
        tritime: "\u2A3B",
        trpezium: "\u23E2",
        Tscr: "\u{1D4AF}",
        tscr: "\u{1D4C9}",
        TScy: "\u0426",
        tscy: "\u0446",
        TSHcy: "\u040B",
        tshcy: "\u045B",
        Tstrok: "\u0166",
        tstrok: "\u0167",
        twixt: "\u226C",
        twoheadleftarrow: "\u219E",
        twoheadrightarrow: "\u21A0",
        Uacute: "\xDA",
        uacute: "\xFA",
        uarr: "\u2191",
        Uarr: "\u219F",
        uArr: "\u21D1",
        Uarrocir: "\u2949",
        Ubrcy: "\u040E",
        ubrcy: "\u045E",
        Ubreve: "\u016C",
        ubreve: "\u016D",
        Ucirc: "\xDB",
        ucirc: "\xFB",
        Ucy: "\u0423",
        ucy: "\u0443",
        udarr: "\u21C5",
        Udblac: "\u0170",
        udblac: "\u0171",
        udhar: "\u296E",
        ufisht: "\u297E",
        Ufr: "\u{1D518}",
        ufr: "\u{1D532}",
        Ugrave: "\xD9",
        ugrave: "\xF9",
        uHar: "\u2963",
        uharl: "\u21BF",
        uharr: "\u21BE",
        uhblk: "\u2580",
        ulcorn: "\u231C",
        ulcorner: "\u231C",
        ulcrop: "\u230F",
        ultri: "\u25F8",
        Umacr: "\u016A",
        umacr: "\u016B",
        uml: "\xA8",
        UnderBar: "_",
        UnderBrace: "\u23DF",
        UnderBracket: "\u23B5",
        UnderParenthesis: "\u23DD",
        Union: "\u22C3",
        UnionPlus: "\u228E",
        Uogon: "\u0172",
        uogon: "\u0173",
        Uopf: "\u{1D54C}",
        uopf: "\u{1D566}",
        UpArrowBar: "\u2912",
        uparrow: "\u2191",
        UpArrow: "\u2191",
        Uparrow: "\u21D1",
        UpArrowDownArrow: "\u21C5",
        updownarrow: "\u2195",
        UpDownArrow: "\u2195",
        Updownarrow: "\u21D5",
        UpEquilibrium: "\u296E",
        upharpoonleft: "\u21BF",
        upharpoonright: "\u21BE",
        uplus: "\u228E",
        UpperLeftArrow: "\u2196",
        UpperRightArrow: "\u2197",
        upsi: "\u03C5",
        Upsi: "\u03D2",
        upsih: "\u03D2",
        Upsilon: "\u03A5",
        upsilon: "\u03C5",
        UpTeeArrow: "\u21A5",
        UpTee: "\u22A5",
        upuparrows: "\u21C8",
        urcorn: "\u231D",
        urcorner: "\u231D",
        urcrop: "\u230E",
        Uring: "\u016E",
        uring: "\u016F",
        urtri: "\u25F9",
        Uscr: "\u{1D4B0}",
        uscr: "\u{1D4CA}",
        utdot: "\u22F0",
        Utilde: "\u0168",
        utilde: "\u0169",
        utri: "\u25B5",
        utrif: "\u25B4",
        uuarr: "\u21C8",
        Uuml: "\xDC",
        uuml: "\xFC",
        uwangle: "\u29A7",
        vangrt: "\u299C",
        varepsilon: "\u03F5",
        varkappa: "\u03F0",
        varnothing: "\u2205",
        varphi: "\u03D5",
        varpi: "\u03D6",
        varpropto: "\u221D",
        varr: "\u2195",
        vArr: "\u21D5",
        varrho: "\u03F1",
        varsigma: "\u03C2",
        varsubsetneq: "\u228A\uFE00",
        varsubsetneqq: "\u2ACB\uFE00",
        varsupsetneq: "\u228B\uFE00",
        varsupsetneqq: "\u2ACC\uFE00",
        vartheta: "\u03D1",
        vartriangleleft: "\u22B2",
        vartriangleright: "\u22B3",
        vBar: "\u2AE8",
        Vbar: "\u2AEB",
        vBarv: "\u2AE9",
        Vcy: "\u0412",
        vcy: "\u0432",
        vdash: "\u22A2",
        vDash: "\u22A8",
        Vdash: "\u22A9",
        VDash: "\u22AB",
        Vdashl: "\u2AE6",
        veebar: "\u22BB",
        vee: "\u2228",
        Vee: "\u22C1",
        veeeq: "\u225A",
        vellip: "\u22EE",
        verbar: "|",
        Verbar: "\u2016",
        vert: "|",
        Vert: "\u2016",
        VerticalBar: "\u2223",
        VerticalLine: "|",
        VerticalSeparator: "\u2758",
        VerticalTilde: "\u2240",
        VeryThinSpace: "\u200A",
        Vfr: "\u{1D519}",
        vfr: "\u{1D533}",
        vltri: "\u22B2",
        vnsub: "\u2282\u20D2",
        vnsup: "\u2283\u20D2",
        Vopf: "\u{1D54D}",
        vopf: "\u{1D567}",
        vprop: "\u221D",
        vrtri: "\u22B3",
        Vscr: "\u{1D4B1}",
        vscr: "\u{1D4CB}",
        vsubnE: "\u2ACB\uFE00",
        vsubne: "\u228A\uFE00",
        vsupnE: "\u2ACC\uFE00",
        vsupne: "\u228B\uFE00",
        Vvdash: "\u22AA",
        vzigzag: "\u299A",
        Wcirc: "\u0174",
        wcirc: "\u0175",
        wedbar: "\u2A5F",
        wedge: "\u2227",
        Wedge: "\u22C0",
        wedgeq: "\u2259",
        weierp: "\u2118",
        Wfr: "\u{1D51A}",
        wfr: "\u{1D534}",
        Wopf: "\u{1D54E}",
        wopf: "\u{1D568}",
        wp: "\u2118",
        wr: "\u2240",
        wreath: "\u2240",
        Wscr: "\u{1D4B2}",
        wscr: "\u{1D4CC}",
        xcap: "\u22C2",
        xcirc: "\u25EF",
        xcup: "\u22C3",
        xdtri: "\u25BD",
        Xfr: "\u{1D51B}",
        xfr: "\u{1D535}",
        xharr: "\u27F7",
        xhArr: "\u27FA",
        Xi: "\u039E",
        xi: "\u03BE",
        xlarr: "\u27F5",
        xlArr: "\u27F8",
        xmap: "\u27FC",
        xnis: "\u22FB",
        xodot: "\u2A00",
        Xopf: "\u{1D54F}",
        xopf: "\u{1D569}",
        xoplus: "\u2A01",
        xotime: "\u2A02",
        xrarr: "\u27F6",
        xrArr: "\u27F9",
        Xscr: "\u{1D4B3}",
        xscr: "\u{1D4CD}",
        xsqcup: "\u2A06",
        xuplus: "\u2A04",
        xutri: "\u25B3",
        xvee: "\u22C1",
        xwedge: "\u22C0",
        Yacute: "\xDD",
        yacute: "\xFD",
        YAcy: "\u042F",
        yacy: "\u044F",
        Ycirc: "\u0176",
        ycirc: "\u0177",
        Ycy: "\u042B",
        ycy: "\u044B",
        yen: "\xA5",
        Yfr: "\u{1D51C}",
        yfr: "\u{1D536}",
        YIcy: "\u0407",
        yicy: "\u0457",
        Yopf: "\u{1D550}",
        yopf: "\u{1D56A}",
        Yscr: "\u{1D4B4}",
        yscr: "\u{1D4CE}",
        YUcy: "\u042E",
        yucy: "\u044E",
        yuml: "\xFF",
        Yuml: "\u0178",
        Zacute: "\u0179",
        zacute: "\u017A",
        Zcaron: "\u017D",
        zcaron: "\u017E",
        Zcy: "\u0417",
        zcy: "\u0437",
        Zdot: "\u017B",
        zdot: "\u017C",
        zeetrf: "\u2128",
        ZeroWidthSpace: "\u200B",
        Zeta: "\u0396",
        zeta: "\u03B6",
        zfr: "\u{1D537}",
        Zfr: "\u2128",
        ZHcy: "\u0416",
        zhcy: "\u0436",
        zigrarr: "\u21DD",
        zopf: "\u{1D56B}",
        Zopf: "\u2124",
        Zscr: "\u{1D4B5}",
        zscr: "\u{1D4CF}",
        zwj: "\u200D",
        zwnj: "\u200C"
    };
});
var T = n((Bu, W)=>{
    W.exports = {
        Aacute: "\xC1",
        aacute: "\xE1",
        Acirc: "\xC2",
        acirc: "\xE2",
        acute: "\xB4",
        AElig: "\xC6",
        aelig: "\xE6",
        Agrave: "\xC0",
        agrave: "\xE0",
        amp: "&",
        AMP: "&",
        Aring: "\xC5",
        aring: "\xE5",
        Atilde: "\xC3",
        atilde: "\xE3",
        Auml: "\xC4",
        auml: "\xE4",
        brvbar: "\xA6",
        Ccedil: "\xC7",
        ccedil: "\xE7",
        cedil: "\xB8",
        cent: "\xA2",
        copy: "\xA9",
        COPY: "\xA9",
        curren: "\xA4",
        deg: "\xB0",
        divide: "\xF7",
        Eacute: "\xC9",
        eacute: "\xE9",
        Ecirc: "\xCA",
        ecirc: "\xEA",
        Egrave: "\xC8",
        egrave: "\xE8",
        ETH: "\xD0",
        eth: "\xF0",
        Euml: "\xCB",
        euml: "\xEB",
        frac12: "\xBD",
        frac14: "\xBC",
        frac34: "\xBE",
        gt: ">",
        GT: ">",
        Iacute: "\xCD",
        iacute: "\xED",
        Icirc: "\xCE",
        icirc: "\xEE",
        iexcl: "\xA1",
        Igrave: "\xCC",
        igrave: "\xEC",
        iquest: "\xBF",
        Iuml: "\xCF",
        iuml: "\xEF",
        laquo: "\xAB",
        lt: "<",
        LT: "<",
        macr: "\xAF",
        micro: "\xB5",
        middot: "\xB7",
        nbsp: "\xA0",
        not: "\xAC",
        Ntilde: "\xD1",
        ntilde: "\xF1",
        Oacute: "\xD3",
        oacute: "\xF3",
        Ocirc: "\xD4",
        ocirc: "\xF4",
        Ograve: "\xD2",
        ograve: "\xF2",
        ordf: "\xAA",
        ordm: "\xBA",
        Oslash: "\xD8",
        oslash: "\xF8",
        Otilde: "\xD5",
        otilde: "\xF5",
        Ouml: "\xD6",
        ouml: "\xF6",
        para: "\xB6",
        plusmn: "\xB1",
        pound: "\xA3",
        quot: '"',
        QUOT: '"',
        raquo: "\xBB",
        reg: "\xAE",
        REG: "\xAE",
        sect: "\xA7",
        shy: "\xAD",
        sup1: "\xB9",
        sup2: "\xB2",
        sup3: "\xB3",
        szlig: "\xDF",
        THORN: "\xDE",
        thorn: "\xFE",
        times: "\xD7",
        Uacute: "\xDA",
        uacute: "\xFA",
        Ucirc: "\xDB",
        ucirc: "\xFB",
        Ugrave: "\xD9",
        ugrave: "\xF9",
        uml: "\xA8",
        Uuml: "\xDC",
        uuml: "\xFC",
        Yacute: "\xDD",
        yacute: "\xFD",
        yen: "\xA5",
        yuml: "\xFF"
    };
});
var B1 = n((Eu, $)=>{
    $.exports = {
        amp: "&",
        apos: "'",
        gt: ">",
        lt: "<",
        quot: '"'
    };
});
var S = n((mu, uu)=>{
    uu.exports = {
        "0": 65533,
        "128": 8364,
        "130": 8218,
        "131": 402,
        "132": 8222,
        "133": 8230,
        "134": 8224,
        "135": 8225,
        "136": 710,
        "137": 8240,
        "138": 352,
        "139": 8249,
        "140": 338,
        "142": 381,
        "145": 8216,
        "146": 8217,
        "147": 8220,
        "148": 8221,
        "149": 8226,
        "150": 8211,
        "151": 8212,
        "152": 732,
        "153": 8482,
        "154": 353,
        "155": 8250,
        "156": 339,
        "158": 382,
        "159": 376
    };
});
var k = n((p)=>{
    "use strict";
    var ru = p && p.__importDefault || function(u) {
        return u && u.__esModule ? u : {
            default: u
        };
    };
    Object.defineProperty(p, "__esModule", {
        value: !0
    });
    var x = ru(S());
    function eu(u) {
        if (u >= 55296 && u <= 57343 || u > 1114111) return "\uFFFD";
        u in x.default && (u = x.default[u]);
        var r = "";
        return u > 65535 && (u -= 65536, r += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), r += String.fromCharCode(u), r;
    }
    p.default = eu;
});
var m = n((l)=>{
    "use strict";
    var g = l && l.__importDefault || function(u) {
        return u && u.__esModule ? u : {
            default: u
        };
    };
    Object.defineProperty(l, "__esModule", {
        value: !0
    });
    l.decodeHTML = l.decodeHTMLStrict = l.decodeXML = void 0;
    var E = g(f()), tu = g(T()), au = g(B1()), R = g(k());
    l.decodeXML = H(au.default);
    l.decodeHTMLStrict = H(E.default);
    function H(u) {
        var r = Object.keys(u).join("|"), e = M(u);
        r += "|#[xX][\\da-fA-F]+|#\\d+";
        var a = new RegExp("&(?:" + r + ");", "g");
        return function(o) {
            return String(o).replace(a, e);
        };
    }
    var N = function(u, r) {
        return u < r ? 1 : -1;
    };
    l.decodeHTML = function() {
        for(var u = Object.keys(tu.default).sort(N), r = Object.keys(E.default).sort(N), e = 0, a = 0; e < r.length; e++)u[a] === r[e] ? (r[e] += ";?", a++) : r[e] += ";";
        var o = new RegExp("&(?:" + r.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), A = M(E.default);
        function s(c) {
            return c.substr(-1) !== ";" && (c += ";"), A(c);
        }
        return function(c) {
            return String(c).replace(o, s);
        };
    }();
    function M(u) {
        return function(e) {
            if (e.charAt(1) === "#") {
                var a = e.charAt(2);
                return a === "X" || a === "x" ? R.default(parseInt(e.substr(3), 16)) : R.default(parseInt(e.substr(2), 10));
            }
            return u[e.slice(1, -1)];
        };
    }
});
var q = n((i)=>{
    "use strict";
    var U = i && i.__importDefault || function(u) {
        return u && u.__esModule ? u : {
            default: u
        };
    };
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    i.escape = i.encodeHTML = i.encodeXML = void 0;
    var ou = U(B1()), h = V(ou.default), cu = F(h);
    i.encodeXML = G(h, cu);
    var lu = U(f()), O = V(lu.default), iu = F(O);
    i.encodeHTML = G(O, iu);
    function V(u) {
        return Object.keys(u).sort().reduce(function(r, e) {
            return r[u[e]] = "&" + e + ";", r;
        }, {});
    }
    function F(u) {
        for(var r = [], e = [], a = 0, o = Object.keys(u); a < o.length; a++){
            var A = o[a];
            A.length === 1 ? r.push("\\" + A) : e.push(A);
        }
        r.sort();
        for(var s = 0; s < r.length - 1; s++){
            for(var c = s; c < r.length - 1 && r[c].charCodeAt(1) + 1 === r[c + 1].charCodeAt(1);)c += 1;
            var w = 1 + c - s;
            w < 3 || r.splice(s, w, r[s] + "-" + r[c]);
        }
        return e.unshift("[" + r.join("") + "]"), new RegExp(e.join("|"), "g");
    }
    var j = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
    function b(u) {
        return "&#x" + u.codePointAt(0).toString(16).toUpperCase() + ";";
    }
    function G(u, r) {
        return function(e) {
            return e.replace(r, function(a) {
                return u[a];
            }).replace(j, b);
        };
    }
    var su = F(h);
    function nu(u) {
        return u.replace(su, b).replace(j, b);
    }
    i.escape = nu;
});
var v1 = n((t)=>{
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.encode = t.decodeStrict = t.decode = void 0;
    var C = m(), _ = q();
    function Du(u, r) {
        return (!r || r <= 0 ? C.decodeXML : C.decodeHTML)(u);
    }
    t.decode = Du;
    function Au(u, r) {
        return (!r || r <= 0 ? C.decodeXML : C.decodeHTMLStrict)(u);
    }
    t.decodeStrict = Au;
    function pu(u, r) {
        return (!r || r <= 0 ? _.encodeXML : _.encodeHTML)(u);
    }
    t.encode = pu;
    var d = q();
    Object.defineProperty(t, "encodeXML", {
        enumerable: !0,
        get: function() {
            return d.encodeXML;
        }
    });
    Object.defineProperty(t, "encodeHTML", {
        enumerable: !0,
        get: function() {
            return d.encodeHTML;
        }
    });
    Object.defineProperty(t, "escape", {
        enumerable: !0,
        get: function() {
            return d.escape;
        }
    });
    Object.defineProperty(t, "encodeHTML4", {
        enumerable: !0,
        get: function() {
            return d.encodeHTML;
        }
    });
    Object.defineProperty(t, "encodeHTML5", {
        enumerable: !0,
        get: function() {
            return d.encodeHTML;
        }
    });
    var D = m();
    Object.defineProperty(t, "decodeXML", {
        enumerable: !0,
        get: function() {
            return D.decodeXML;
        }
    });
    Object.defineProperty(t, "decodeHTML", {
        enumerable: !0,
        get: function() {
            return D.decodeHTML;
        }
    });
    Object.defineProperty(t, "decodeHTMLStrict", {
        enumerable: !0,
        get: function() {
            return D.decodeHTMLStrict;
        }
    });
    Object.defineProperty(t, "decodeHTML4", {
        enumerable: !0,
        get: function() {
            return D.decodeHTML;
        }
    });
    Object.defineProperty(t, "decodeHTML5", {
        enumerable: !0,
        get: function() {
            return D.decodeHTML;
        }
    });
    Object.defineProperty(t, "decodeHTML4Strict", {
        enumerable: !0,
        get: function() {
            return D.decodeHTMLStrict;
        }
    });
    Object.defineProperty(t, "decodeHTML5Strict", {
        enumerable: !0,
        get: function() {
            return D.decodeHTMLStrict;
        }
    });
    Object.defineProperty(t, "decodeXMLStrict", {
        enumerable: !0,
        get: function() {
            return D.decodeXML;
        }
    });
});
var I1 = L(v1()), P = L(v1()), { __esModule: vu , encode: wu , decodeStrict: yu , decode: Lu , encodeXML: Tu , encodeHTML: Su , escape: xu , encodeHTML4: ku , encodeHTML5: Ru , decodeXML: Nu , decodeHTML: Hu , decodeHTMLStrict: Mu , decodeHTML4: Uu , decodeHTML5: Ou , decodeHTML4Strict: Vu , decodeHTML5Strict: ju , decodeXMLStrict: Gu  } = P, { default: du , ...gu } = P, _u = (I1.default ?? du) ?? gu;
var l1 = Object.create;
var f1 = Object.defineProperty;
var s1 = Object.getOwnPropertyDescriptor;
var v2 = Object.getOwnPropertyNames;
var g = Object.getPrototypeOf, y2 = Object.prototype.hasOwnProperty;
var c = (e, t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t), t.exports);
var d = (e, t, i, a)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let r of v2(t))!y2.call(e, r) && r !== i && f1(e, r, {
        get: ()=>t[r],
        enumerable: !(a = s1(t, r)) || a.enumerable
    });
    return e;
};
var u1 = (e, t, i)=>(i = e != null ? l1(g(e)) : {}, d(t || !e || !e.__esModule ? f1(i, "default", {
        value: e,
        enumerable: !0
    }) : i, e));
var o = c(()=>{
    String.prototype.repeat || function() {
        "use strict";
        var e = function() {
            try {
                var i = {}, a = Object.defineProperty, r = a(i, i, i) && a;
            } catch  {}
            return r;
        }(), t = function(i) {
            if (this == null) throw TypeError();
            var a = String(this), r = i ? Number(i) : 0;
            if (r != r && (r = 0), r < 0 || r == 1 / 0) throw RangeError();
            for(var n = ""; r;)r % 2 == 1 && (n += a), r > 1 && (a += a), r >>= 1;
            return n;
        };
        e ? e(String.prototype, "repeat", {
            value: t,
            configurable: !0,
            writable: !0
        }) : String.prototype.repeat = t;
    }();
});
var p1 = u1(o()), h1 = u1(o()), { default: m1 , ...w } = h1, E = (p1.default ?? m1) ?? w;
"use strict";
function Z1(t) {
    switch(t._type){
        case "document":
        case "block_quote":
        case "list":
        case "item":
        case "paragraph":
        case "heading":
        case "emph":
        case "strong":
        case "link":
        case "image":
        case "custom_inline":
        case "custom_block":
            return !0;
        default:
            return !1;
    }
}
var Ct = function(t, e) {
    this.current = t, this.entering = e === !0;
}, kt = function() {
    var t = this.current, e = this.entering;
    if (t === null) return null;
    var i = Z1(t);
    return e && i ? t._firstChild ? (this.current = t._firstChild, this.entering = !0) : this.entering = !1 : t === this.root ? this.current = null : t._next === null ? (this.current = t._parent, this.entering = !1) : (this.current = t._next, this.entering = !0), {
        entering: e,
        node: t
    };
}, Dt = function(t) {
    return {
        current: t,
        root: t,
        entering: !0,
        next: kt,
        resumeAt: Ct
    };
}, k1 = function(t, e) {
    this._type = t, this._parent = null, this._firstChild = null, this._lastChild = null, this._prev = null, this._next = null, this._sourcepos = e, this._lastLineBlank = !1, this._lastLineChecked = !1, this._open = !0, this._string_content = null, this._literal = null, this._listData = {}, this._info = null, this._destination = null, this._title = null, this._isFenced = !1, this._fenceChar = null, this._fenceLength = 0, this._fenceOffset = null, this._level = null, this._onEnter = null, this._onExit = null;
}, v3 = k1.prototype;
Object.defineProperty(v3, "isContainer", {
    get: function() {
        return Z1(this);
    }
});
Object.defineProperty(v3, "type", {
    get: function() {
        return this._type;
    }
});
Object.defineProperty(v3, "firstChild", {
    get: function() {
        return this._firstChild;
    }
});
Object.defineProperty(v3, "lastChild", {
    get: function() {
        return this._lastChild;
    }
});
Object.defineProperty(v3, "next", {
    get: function() {
        return this._next;
    }
});
Object.defineProperty(v3, "prev", {
    get: function() {
        return this._prev;
    }
});
Object.defineProperty(v3, "parent", {
    get: function() {
        return this._parent;
    }
});
Object.defineProperty(v3, "sourcepos", {
    get: function() {
        return this._sourcepos;
    }
});
Object.defineProperty(v3, "literal", {
    get: function() {
        return this._literal;
    },
    set: function(t) {
        this._literal = t;
    }
});
Object.defineProperty(v3, "destination", {
    get: function() {
        return this._destination;
    },
    set: function(t) {
        this._destination = t;
    }
});
Object.defineProperty(v3, "title", {
    get: function() {
        return this._title;
    },
    set: function(t) {
        this._title = t;
    }
});
Object.defineProperty(v3, "info", {
    get: function() {
        return this._info;
    },
    set: function(t) {
        this._info = t;
    }
});
Object.defineProperty(v3, "level", {
    get: function() {
        return this._level;
    },
    set: function(t) {
        this._level = t;
    }
});
Object.defineProperty(v3, "listType", {
    get: function() {
        return this._listData.type;
    },
    set: function(t) {
        this._listData.type = t;
    }
});
Object.defineProperty(v3, "listTight", {
    get: function() {
        return this._listData.tight;
    },
    set: function(t) {
        this._listData.tight = t;
    }
});
Object.defineProperty(v3, "listStart", {
    get: function() {
        return this._listData.start;
    },
    set: function(t) {
        this._listData.start = t;
    }
});
Object.defineProperty(v3, "listDelimiter", {
    get: function() {
        return this._listData.delimiter;
    },
    set: function(t) {
        this._listData.delimiter = t;
    }
});
Object.defineProperty(v3, "onEnter", {
    get: function() {
        return this._onEnter;
    },
    set: function(t) {
        this._onEnter = t;
    }
});
Object.defineProperty(v3, "onExit", {
    get: function() {
        return this._onExit;
    },
    set: function(t) {
        this._onExit = t;
    }
});
k1.prototype.appendChild = function(t) {
    t.unlink(), t._parent = this, this._lastChild ? (this._lastChild._next = t, t._prev = this._lastChild, this._lastChild = t) : (this._firstChild = t, this._lastChild = t);
};
k1.prototype.prependChild = function(t) {
    t.unlink(), t._parent = this, this._firstChild ? (this._firstChild._prev = t, t._next = this._firstChild, this._firstChild = t) : (this._firstChild = t, this._lastChild = t);
};
k1.prototype.unlink = function() {
    this._prev ? this._prev._next = this._next : this._parent && (this._parent._firstChild = this._next), this._next ? this._next._prev = this._prev : this._parent && (this._parent._lastChild = this._prev), this._parent = null, this._next = null, this._prev = null;
};
k1.prototype.insertAfter = function(t) {
    t.unlink(), t._next = this._next, t._next && (t._next._prev = t), t._prev = this, this._next = t, t._parent = this._parent, t._next || (t._parent._lastChild = t);
};
k1.prototype.insertBefore = function(t) {
    t.unlink(), t._prev = this._prev, t._prev && (t._prev._next = t), t._next = this, this._prev = t, t._parent = this._parent, t._prev || (t._parent._firstChild = t);
};
k1.prototype.walker = function() {
    var t = new Dt(this);
    return t;
};
var _1 = k1;
var At = 92, S1 = "&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});", q1 = "[A-Za-z][A-Za-z0-9-]*", bt = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Ft = "[^\"'=<>`\\x00-\\x20]+", Lt = "'[^']*'", yt = '"[^"]*"', Nt = "(?:" + Ft + "|" + Lt + "|" + yt + ")", Bt = "(?:\\s*=\\s*" + Nt + ")", Tt = "(?:\\s+" + bt + Bt + "?)", R = "<" + q1 + Tt + "*\\s*/?>", P1 = "</" + q1 + "\\s*[>]", Ot = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", wt = "[<][?][\\s\\S]*?[?][>]", St = "<![A-Z]+\\s+[^>]*>", Rt = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Pt = "(?:" + R + "|" + P1 + "|" + Ot + "|" + wt + "|" + St + "|" + Rt + ")", X1 = new RegExp("^" + Pt), jt = /[\\&]/, j = "[!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]", Ut = new RegExp("\\\\" + j + "|" + S1, "gi"), zt = '[&<>"]', G = new RegExp(zt, "g"), It = function(t) {
    return t.charCodeAt(0) === At ? t.charAt(1) : Hu(t);
}, B2 = function(t) {
    return jt.test(t) ? t.replace(Ut, It) : t;
}, K = function(t) {
    try {
        return b(t);
    } catch  {
        return t;
    }
}, Mt = function(t) {
    switch(t){
        case "&":
            return "&amp;";
        case "<":
            return "&lt;";
        case ">":
            return "&gt;";
        case '"':
            return "&quot;";
        default:
            return t;
    }
}, A1 = function(t) {
    return G.test(t) ? t.replace(G, Mt) : t;
};
var U;
function L1(t) {
    return U(t);
}
String.fromCodePoint ? U = function(t) {
    try {
        return String.fromCodePoint(t);
    } catch (e) {
        if (e instanceof RangeError) return String.fromCharCode(65533);
        throw e;
    }
} : (W = String.fromCharCode, Q1 = Math.floor, U = function() {
    var t = 16384, e = [], i, n, s = -1, r = arguments.length;
    if (!r) return "";
    for(var l = ""; ++s < r;){
        var a = Number(arguments[s]);
        if (!isFinite(a) || a < 0 || a > 1114111 || Q1(a) !== a) return String.fromCharCode(65533);
        a <= 65535 ? e.push(a) : (a -= 65536, i = (a >> 10) + 55296, n = a % 1024 + 56320, e.push(i, n)), (s + 1 === r || e.length > t) && (l += W.apply(null, e), e.length = 0);
    }
    return l;
});
var W, Q1;
var T1 = K, I2 = B2, tt = 10, M = 42, O = 95, Zt = 96, et = 91, Gt = 93, it = 60, qt = 33, nt = 92, Xt = 38, st = 40, H = 41, Kt = 58, D1 = 39, E1 = 34, rt = j, z2 = "\\\\" + rt, Wt = S1, Qt = X1, V = new RegExp(/^[!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/), Vt = new RegExp('^(?:"(' + z2 + `|[^"\\x00])*"|'(` + z2 + "|[^'\\x00])*'|\\((" + z2 + "|[^()\\x00])*\\))"), Yt = /^(?:<(?:[^<>\n\\\x00]|\\.)*>)/, at = new RegExp("^" + rt), Jt = new RegExp("^" + Wt, "i"), te = /`+/, ee = /^`+/, ie = /\.\.\./g, ne = /--+/g, se = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/, re = /^<[A-Za-z][A-Za-z0-9.+-]{1,31}:[^<>\x00-\x20]*>/i, ae = /^ *(?:\n *)?/, lt = /^[ \t\n\x0b\x0c\x0d]/, Y1 = /^\s/, le = / *$/, ue = /^ */, J1 = /^ *(?:\n|$)/, oe = /^\[(?:[^\\\[\]]|\\.){0,1000}\]/s, he = /^[^\n`\[\]\\!<&*_'"]+/m, m2 = function(t) {
    var e = new _1("text");
    return e._literal = t, e;
}, ut = function(t) {
    return t.slice(1, t.length - 1).trim().replace(/[ \t\r\n]+/, " ").toLowerCase().toUpperCase();
}, fe = function(t) {
    var e = t.exec(this.subject.slice(this.pos));
    return e === null ? null : (this.pos += e.index + e[0].length, e[0]);
}, ce = function() {
    return this.pos < this.subject.length ? this.subject.charCodeAt(this.pos) : -1;
}, pe = function() {
    return this.match(ae), !0;
}, de = function(t) {
    var e = this.match(ee);
    if (e === null) return !1;
    for(var i = this.pos, n, s, r; (n = this.match(te)) !== null;)if (n === e) return s = new _1("code"), r = this.subject.slice(i, this.pos - e.length).replace(/\n/gm, " "), r.length > 0 && r.match(/[^ ]/) !== null && r[0] == " " && r[r.length - 1] == " " ? s._literal = r.slice(1, r.length - 1) : s._literal = r, t.appendChild(s), !0;
    return this.pos = i, t.appendChild(m2(e)), !0;
}, ve = function(t) {
    var e = this.subject, i;
    return this.pos += 1, this.peek() === tt ? (this.pos += 1, i = new _1("linebreak"), t.appendChild(i)) : at.test(e.charAt(this.pos)) ? (t.appendChild(m2(e.charAt(this.pos))), this.pos += 1) : t.appendChild(m2("\\")), !0;
}, _e = function(t) {
    var e, i, n;
    return (e = this.match(se)) ? (i = e.slice(1, e.length - 1), n = new _1("link"), n._destination = T1("mailto:" + i), n._title = "", n.appendChild(m2(i)), t.appendChild(n), !0) : (e = this.match(re)) ? (i = e.slice(1, e.length - 1), n = new _1("link"), n._destination = T1(i), n._title = "", n.appendChild(m2(i)), t.appendChild(n), !0) : !1;
}, me = function(t) {
    var e = this.match(Qt);
    if (e === null) return !1;
    var i = new _1("html_inline");
    return i._literal = e, t.appendChild(i), !0;
}, ge = function(t) {
    var e = 0, i, n, s, r = this.pos, l, a, u, o, f, c, d, p;
    if (t === D1 || t === E1) e++, this.pos++;
    else for(; this.peek() === t;)e++, this.pos++;
    return e === 0 ? null : (i = r === 0 ? `
` : this.subject.charAt(r - 1), s = this.peek(), s === -1 ? n = `
` : n = L1(s), f = Y1.test(n), c = V.test(n), d = Y1.test(i), p = V.test(i), l = !f && (!c || d || p), a = !d && (!p || f || c), t === O ? (u = l && (!a || p), o = a && (!l || c)) : t === D1 || t === E1 ? (u = l && !a, o = a) : (u = l, o = a), this.pos = r, {
        numdelims: e,
        can_open: u,
        can_close: o
    });
}, Ce = function(t, e) {
    var i = this.scanDelims(t);
    if (!i) return !1;
    var n = i.numdelims, s = this.pos, r;
    this.pos += n, t === D1 ? r = "\u2019" : t === E1 ? r = "\u201C" : r = this.subject.slice(s, this.pos);
    var l = m2(r);
    return e.appendChild(l), (i.can_open || i.can_close) && (this.options.smart || t !== D1 && t !== E1) && (this.delimiters = {
        cc: t,
        numdelims: n,
        origdelims: n,
        node: l,
        previous: this.delimiters,
        next: null,
        can_open: i.can_open,
        can_close: i.can_close
    }, this.delimiters.previous !== null && (this.delimiters.previous.next = this.delimiters)), !0;
}, ke = function(t) {
    t.previous !== null && (t.previous.next = t.next), t.next === null ? this.delimiters = t.previous : t.next.previous = t.previous;
}, De = function(t, e) {
    t.next !== e && (t.next = e, e.previous = t);
}, Ee = function(t) {
    for(var e, i, n, s, r, l, a, u, o, f, c = [], d, p = !1, C = 0; C < 8; C++)c[C] = t;
    for(i = this.delimiters; i !== null && i.previous !== t;)i = i.previous;
    for(; i !== null;){
        var F = i.cc;
        if (!i.can_close) i = i.next;
        else {
            switch(e = i.previous, f = !1, F){
                case D1:
                    d = 0;
                    break;
                case E1:
                    d = 1;
                    break;
                case O:
                    d = 2;
                    break;
                case M:
                    d = 3 + (i.can_open ? 3 : 0) + i.origdelims % 3;
                    break;
            }
            for(; e !== null && e !== t && e !== c[d];){
                if (p = (i.can_open || e.can_close) && i.origdelims % 3 !== 0 && (e.origdelims + i.origdelims) % 3 === 0, e.cc === i.cc && e.can_open && !p) {
                    f = !0;
                    break;
                }
                e = e.previous;
            }
            if (n = i, F === M || F === O) if (!f) i = i.next;
            else {
                a = i.numdelims >= 2 && e.numdelims >= 2 ? 2 : 1, s = e.node, r = i.node, e.numdelims -= a, i.numdelims -= a, s._literal = s._literal.slice(0, s._literal.length - a), r._literal = r._literal.slice(0, r._literal.length - a);
                var $ = new _1(a === 1 ? "emph" : "strong");
                for(u = s._next; u && u !== r;)o = u._next, u.unlink(), $.appendChild(u), u = o;
                s.insertAfter($), De(e, i), e.numdelims === 0 && (s.unlink(), this.removeDelimiter(e)), i.numdelims === 0 && (r.unlink(), l = i.next, this.removeDelimiter(i), i = l);
            }
            else F === D1 ? (i.node._literal = "\u2019", f && (e.node._literal = "\u2018"), i = i.next) : F === E1 && (i.node._literal = "\u201D", f && (e.node.literal = "\u201C"), i = i.next);
            f || (c[d] = n.previous, n.can_open || this.removeDelimiter(n));
        }
    }
    for(; this.delimiters !== null && this.delimiters !== t;)this.removeDelimiter(this.delimiters);
}, xe = function() {
    var t = this.match(Vt);
    return t === null ? null : I2(t.substr(1, t.length - 2));
}, Ae = function() {
    var t = this.match(Yt);
    if (t === null) {
        if (this.peek() === it) return null;
        for(var e = this.pos, i = 0, n; (n = this.peek()) !== -1;)if (n === nt && at.test(this.subject.charAt(this.pos + 1))) this.pos += 1, this.peek() !== -1 && (this.pos += 1);
        else if (n === st) this.pos += 1, i += 1;
        else if (n === H) {
            if (i < 1) break;
            this.pos += 1, i -= 1;
        } else {
            if (lt.exec(L1(n)) !== null) break;
            this.pos += 1;
        }
        return this.pos === e && n !== H || i !== 0 ? null : (t = this.subject.substr(e, this.pos - e), T1(I2(t)));
    } else return T1(I2(t.substr(1, t.length - 2)));
}, be = function() {
    var t = this.match(oe);
    return t === null || t.length > 1001 ? 0 : t.length;
}, Fe = function(t) {
    var e = this.pos;
    this.pos += 1;
    var i = m2("[");
    return t.appendChild(i), this.addBracket(i, e, !1), !0;
}, Le = function(t) {
    var e = this.pos;
    if (this.pos += 1, this.peek() === et) {
        this.pos += 1;
        var i = m2("![");
        t.appendChild(i), this.addBracket(i, e + 1, !0);
    } else t.appendChild(m2("!"));
    return !0;
}, ye = function(t) {
    var e, i, n, s, r = !1, l, a;
    if (this.pos += 1, e = this.pos, a = this.brackets, a === null) return t.appendChild(m2("]")), !0;
    if (!a.active) return t.appendChild(m2("]")), this.removeBracket(), !0;
    i = a.image;
    var u = this.pos;
    if (this.peek() === st && (this.pos++, this.spnl() && (n = this.parseLinkDestination()) !== null && this.spnl() && (lt.test(this.subject.charAt(this.pos - 1)) && (s = this.parseLinkTitle()) || !0) && this.spnl() && this.peek() === H ? (this.pos += 1, r = !0) : this.pos = u), !r) {
        var o = this.pos, f = this.parseLinkLabel();
        if (f > 2 ? l = this.subject.slice(o, o + f) : a.bracketAfter || (l = this.subject.slice(a.index, e)), f === 0 && (this.pos = u), l) {
            var c = this.refmap[ut(l)];
            c && (n = c.destination, s = c.title, r = !0);
        }
    }
    if (r) {
        var d = new _1(i ? "image" : "link");
        d._destination = n, d._title = s || "";
        var p, C;
        for(p = a.node._next; p;)C = p._next, p.unlink(), d.appendChild(p), p = C;
        if (t.appendChild(d), this.processEmphasis(a.previousDelimiter), this.removeBracket(), a.node.unlink(), !i) for(a = this.brackets; a !== null;)a.image || (a.active = !1), a = a.previous;
        return !0;
    } else return this.removeBracket(), this.pos = e, t.appendChild(m2("]")), !0;
}, Ne = function(t, e, i) {
    this.brackets !== null && (this.brackets.bracketAfter = !0), this.brackets = {
        node: t,
        previous: this.brackets,
        previousDelimiter: this.delimiters,
        index: e,
        image: i,
        active: !0
    };
}, Be = function() {
    this.brackets = this.brackets.previous;
}, Te = function(t) {
    var e;
    return (e = this.match(Jt)) ? (t.appendChild(m2(Hu(e))), !0) : !1;
}, Oe = function(t) {
    var e;
    return (e = this.match(he)) ? (this.options.smart ? t.appendChild(m2(e.replace(ie, "\u2026").replace(ne, function(i) {
        var n = 0, s = 0;
        return i.length % 3 === 0 ? s = i.length / 3 : i.length % 2 === 0 ? n = i.length / 2 : i.length % 3 === 2 ? (n = 1, s = (i.length - 2) / 3) : (n = 2, s = (i.length - 4) / 3), "\u2014".repeat(s) + "\u2013".repeat(n);
    }))) : t.appendChild(m2(e)), !0) : !1;
}, we = function(t) {
    this.pos += 1;
    var e = t._lastChild;
    if (e && e.type === "text" && e._literal[e._literal.length - 1] === " ") {
        var i = e._literal[e._literal.length - 2] === " ";
        e._literal = e._literal.replace(le, ""), t.appendChild(new _1(i ? "linebreak" : "softbreak"));
    } else t.appendChild(new _1("softbreak"));
    return this.match(ue), !0;
}, Se = function(t, e) {
    this.subject = t, this.pos = 0;
    var i, n, s, r, l = this.pos;
    if (r = this.parseLinkLabel(), r === 0) return 0;
    if (i = this.subject.substr(0, r), this.peek() === Kt) this.pos++;
    else return this.pos = l, 0;
    if (this.spnl(), n = this.parseLinkDestination(), n === null) return this.pos = l, 0;
    var a = this.pos;
    this.spnl(), this.pos !== a && (s = this.parseLinkTitle()), s === null && (s = "", this.pos = a);
    var u = !0;
    if (this.match(J1) === null && (s === "" ? u = !1 : (s = "", this.pos = a, u = this.match(J1) !== null)), !u) return this.pos = l, 0;
    var o = ut(i);
    return o === "" ? (this.pos = l, 0) : (e[o] || (e[o] = {
        destination: n,
        title: s
    }), this.pos - l);
}, Re = function(t) {
    var e = !1, i = this.peek();
    if (i === -1) return !1;
    switch(i){
        case tt:
            e = this.parseNewline(t);
            break;
        case nt:
            e = this.parseBackslash(t);
            break;
        case Zt:
            e = this.parseBackticks(t);
            break;
        case M:
        case O:
            e = this.handleDelim(i, t);
            break;
        case D1:
        case E1:
            e = this.options.smart && this.handleDelim(i, t);
            break;
        case et:
            e = this.parseOpenBracket(t);
            break;
        case qt:
            e = this.parseBang(t);
            break;
        case Gt:
            e = this.parseCloseBracket(t);
            break;
        case it:
            e = this.parseAutolink(t) || this.parseHtmlTag(t);
            break;
        case Xt:
            e = this.parseEntity(t);
            break;
        default:
            e = this.parseString(t);
            break;
    }
    return e || (this.pos += 1, t.appendChild(m2(L1(i)))), !0;
}, Pe = function(t) {
    for(this.subject = t._string_content.trim(), this.pos = 0, this.delimiters = null, this.brackets = null; this.parseInline(t););
    t._string_content = null, this.processEmphasis(null);
};
function je(t) {
    return {
        subject: "",
        delimiters: null,
        brackets: null,
        pos: 0,
        refmap: {},
        match: fe,
        peek: ce,
        spnl: pe,
        parseBackticks: de,
        parseBackslash: ve,
        parseAutolink: _e,
        parseHtmlTag: me,
        scanDelims: ge,
        handleDelim: Ce,
        parseLinkTitle: xe,
        parseLinkDestination: Ae,
        parseLinkLabel: be,
        parseOpenBracket: Fe,
        parseBang: Le,
        parseCloseBracket: ye,
        addBracket: Ne,
        removeBracket: Be,
        parseEntity: Te,
        parseString: Oe,
        parseNewline: we,
        parseReference: Se,
        parseInline: Re,
        processEmphasis: Ee,
        removeDelimiter: ke,
        options: t || {},
        parse: Pe
    };
}
var ot = je;
var w1 = 4, ft = 9, Ue = 10, ct = 62, ze = 60, pt = 32, dt = 91, Ie = [
    /./,
    /^<(?:script|pre|textarea|style)(?:\s|>|$)/i,
    /^<!--/,
    /^<[?]/,
    /^<![A-Z]/,
    /^<!\[CDATA\[/,
    /^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[123456]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i,
    new RegExp("^(?:" + R + "|" + P1 + ")\\s*$", "i")
], Me = [
    /./,
    /<\/(?:script|pre|textarea|style)>/i,
    /-->/,
    /\?>/,
    />/,
    /\]\]>/
], He = /^(?:\*[ \t]*){3,}$|^(?:_[ \t]*){3,}$|^(?:-[ \t]*){3,}$/, $e = /^[#`~*+_=<>0-9-]/, vt = /[^ \t\f\v\r\n]/, Ze = /^[*+-]/, Ge = /^(\d{1,9})([.)])/, qe = /^#{1,6}(?:[ \t]+|$)/, Xe = /^`{3,}(?!.*`)|^~{3,}/, Ke = /^(?:`{3,}|~{3,})(?= *$)/, We = /^(?:=+|-+)[ \t]*$/, Qe = /\r\n|\n|\r/, Ve = function(t) {
    return !vt.test(t);
}, y3 = function(t) {
    return t === pt || t === ft;
}, g1 = function(t, e) {
    return e < t.length ? t.charCodeAt(e) : -1;
}, ht = function(t) {
    for(; t;){
        if (t._lastLineBlank) return !0;
        var e = t.type;
        if (!t._lastLineChecked && (e === "list" || e === "item")) t._lastLineChecked = !0, t = t._lastChild;
        else {
            t._lastLineChecked = !0;
            break;
        }
    }
    return !1;
}, Ye = function() {
    if (this.partiallyConsumedTab) {
        this.offset += 1;
        var t = 4 - this.column % 4;
        this.tip._string_content += " ".repeat(t);
    }
    this.tip._string_content += this.currentLine.slice(this.offset) + `
`;
}, Je = function(t, e) {
    for(; !this.blocks[this.tip.type].canContain(t);)this.finalize(this.tip, this.lineNumber - 1);
    var i = e + 1, n = new _1(t, [
        [
            this.lineNumber,
            i
        ],
        [
            0,
            0
        ]
    ]);
    return n._string_content = "", this.tip.appendChild(n), this.tip = n, n;
}, ti = function(t, e) {
    var i = t.currentLine.slice(t.nextNonspace), n, s, r, l, a = {
        type: null,
        tight: !0,
        bulletChar: null,
        start: null,
        delimiter: null,
        padding: null,
        markerOffset: t.indent
    };
    if (t.indent >= 4) return null;
    if (n = i.match(Ze)) a.type = "bullet", a.bulletChar = n[0][0];
    else if ((n = i.match(Ge)) && (e.type !== "paragraph" || n[1] == 1)) a.type = "ordered", a.start = parseInt(n[1]), a.delimiter = n[2];
    else return null;
    if (s = g1(t.currentLine, t.nextNonspace + n[0].length), !(s === -1 || s === ft || s === pt) || e.type === "paragraph" && !t.currentLine.slice(t.nextNonspace + n[0].length).match(vt)) return null;
    t.advanceNextNonspace(), t.advanceOffset(n[0].length, !0), r = t.column, l = t.offset;
    do t.advanceOffset(1, !0), s = g1(t.currentLine, t.offset);
    while (t.column - r < 5 && y3(s))
    var u = g1(t.currentLine, t.offset) === -1, o = t.column - r;
    return o >= 5 || o < 1 || u ? (a.padding = n[0].length + 1, t.column = r, t.offset = l, y3(g1(t.currentLine, t.offset)) && t.advanceOffset(1, !0)) : a.padding = n[0].length + o, a;
}, ei = function(t, e) {
    return t.type === e.type && t.delimiter === e.delimiter && t.bulletChar === e.bulletChar;
}, ii = function() {
    if (!this.allClosed) {
        for(; this.oldtip !== this.lastMatchedContainer;){
            var t = this.oldtip._parent;
            this.finalize(this.oldtip, this.lineNumber - 1), this.oldtip = t;
        }
        this.allClosed = !0;
    }
}, _t = {
    document: {
        continue: function() {
            return 0;
        },
        finalize: function() {},
        canContain: function(t) {
            return t !== "item";
        },
        acceptsLines: !1
    },
    list: {
        continue: function() {
            return 0;
        },
        finalize: function(t, e) {
            for(var i = e._firstChild; i;){
                if (ht(i) && i._next) {
                    e._listData.tight = !1;
                    break;
                }
                for(var n = i._firstChild; n;){
                    if (ht(n) && (i._next || n._next)) {
                        e._listData.tight = !1;
                        break;
                    }
                    n = n._next;
                }
                i = i._next;
            }
        },
        canContain: function(t) {
            return t === "item";
        },
        acceptsLines: !1
    },
    block_quote: {
        continue: function(t) {
            var e = t.currentLine;
            if (!t.indented && g1(e, t.nextNonspace) === ct) t.advanceNextNonspace(), t.advanceOffset(1, !1), y3(g1(e, t.offset)) && t.advanceOffset(1, !0);
            else return 1;
            return 0;
        },
        finalize: function() {},
        canContain: function(t) {
            return t !== "item";
        },
        acceptsLines: !1
    },
    item: {
        continue: function(t, e) {
            if (t.blank) {
                if (e._firstChild == null) return 1;
                t.advanceNextNonspace();
            } else if (t.indent >= e._listData.markerOffset + e._listData.padding) t.advanceOffset(e._listData.markerOffset + e._listData.padding, !0);
            else return 1;
            return 0;
        },
        finalize: function() {},
        canContain: function(t) {
            return t !== "item";
        },
        acceptsLines: !1
    },
    heading: {
        continue: function() {
            return 1;
        },
        finalize: function() {},
        canContain: function() {
            return !1;
        },
        acceptsLines: !1
    },
    thematic_break: {
        continue: function() {
            return 1;
        },
        finalize: function() {},
        canContain: function() {
            return !1;
        },
        acceptsLines: !1
    },
    code_block: {
        continue: function(t, e) {
            var i = t.currentLine, n = t.indent;
            if (e._isFenced) {
                var s = n <= 3 && i.charAt(t.nextNonspace) === e._fenceChar && i.slice(t.nextNonspace).match(Ke);
                if (s && s[0].length >= e._fenceLength) return t.lastLineLength = t.offset + n + s[0].length, t.finalize(e, t.lineNumber), 2;
                for(var r = e._fenceOffset; r > 0 && y3(g1(i, t.offset));)t.advanceOffset(1, !0), r--;
            } else if (n >= w1) t.advanceOffset(w1, !0);
            else if (t.blank) t.advanceNextNonspace();
            else return 1;
            return 0;
        },
        finalize: function(t, e) {
            if (e._isFenced) {
                var i = e._string_content, n = i.indexOf(`
`), s = i.slice(0, n), r = i.slice(n + 1);
                e.info = B2(s.trim()), e._literal = r;
            } else e._literal = e._string_content.replace(/(\n *)+$/, `
`);
            e._string_content = null;
        },
        canContain: function() {
            return !1;
        },
        acceptsLines: !0
    },
    html_block: {
        continue: function(t, e) {
            return t.blank && (e._htmlBlockType === 6 || e._htmlBlockType === 7) ? 1 : 0;
        },
        finalize: function(t, e) {
            e._literal = e._string_content.replace(/(\n *)+$/, ""), e._string_content = null;
        },
        canContain: function() {
            return !1;
        },
        acceptsLines: !0
    },
    paragraph: {
        continue: function(t) {
            return t.blank ? 1 : 0;
        },
        finalize: function(t, e) {
            for(var i, n = !1; g1(e._string_content, 0) === dt && (i = t.inlineParser.parseReference(e._string_content, t.refmap));)e._string_content = e._string_content.slice(i), n = !0;
            n && Ve(e._string_content) && e.unlink();
        },
        canContain: function() {
            return !1;
        },
        acceptsLines: !0
    }
}, ni = [
    function(t) {
        return !t.indented && g1(t.currentLine, t.nextNonspace) === ct ? (t.advanceNextNonspace(), t.advanceOffset(1, !1), y3(g1(t.currentLine, t.offset)) && t.advanceOffset(1, !0), t.closeUnmatchedBlocks(), t.addChild("block_quote", t.nextNonspace), 1) : 0;
    },
    function(t) {
        var e;
        if (!t.indented && (e = t.currentLine.slice(t.nextNonspace).match(qe))) {
            t.advanceNextNonspace(), t.advanceOffset(e[0].length, !1), t.closeUnmatchedBlocks();
            var i = t.addChild("heading", t.nextNonspace);
            return i.level = e[0].trim().length, i._string_content = t.currentLine.slice(t.offset).replace(/^[ \t]*#+[ \t]*$/, "").replace(/[ \t]+#+[ \t]*$/, ""), t.advanceOffset(t.currentLine.length - t.offset), 2;
        } else return 0;
    },
    function(t) {
        var e;
        if (!t.indented && (e = t.currentLine.slice(t.nextNonspace).match(Xe))) {
            var i = e[0].length;
            t.closeUnmatchedBlocks();
            var n = t.addChild("code_block", t.nextNonspace);
            return n._isFenced = !0, n._fenceLength = i, n._fenceChar = e[0][0], n._fenceOffset = t.indent, t.advanceNextNonspace(), t.advanceOffset(i, !1), 2;
        } else return 0;
    },
    function(t, e) {
        if (!t.indented && g1(t.currentLine, t.nextNonspace) === ze) {
            var i = t.currentLine.slice(t.nextNonspace), n;
            for(n = 1; n <= 7; n++)if (Ie[n].test(i) && (n < 7 || e.type !== "paragraph" && !(!t.allClosed && !t.blank && t.tip.type === "paragraph"))) {
                t.closeUnmatchedBlocks();
                var s = t.addChild("html_block", t.offset);
                return s._htmlBlockType = n, 2;
            }
        }
        return 0;
    },
    function(t, e) {
        var i;
        if (!t.indented && e.type === "paragraph" && (i = t.currentLine.slice(t.nextNonspace).match(We))) {
            t.closeUnmatchedBlocks();
            for(var n; g1(e._string_content, 0) === dt && (n = t.inlineParser.parseReference(e._string_content, t.refmap));)e._string_content = e._string_content.slice(n);
            if (e._string_content.length > 0) {
                var s = new _1("heading", e.sourcepos);
                return s.level = i[0][0] === "=" ? 1 : 2, s._string_content = e._string_content, e.insertAfter(s), e.unlink(), t.tip = s, t.advanceOffset(t.currentLine.length - t.offset, !1), 2;
            } else return 0;
        } else return 0;
    },
    function(t) {
        return !t.indented && He.test(t.currentLine.slice(t.nextNonspace)) ? (t.closeUnmatchedBlocks(), t.addChild("thematic_break", t.nextNonspace), t.advanceOffset(t.currentLine.length - t.offset, !1), 2) : 0;
    },
    function(t, e) {
        var i;
        return (!t.indented || e.type === "list") && (i = ti(t, e)) ? (t.closeUnmatchedBlocks(), (t.tip.type !== "list" || !ei(e._listData, i)) && (e = t.addChild("list", t.nextNonspace), e._listData = i), e = t.addChild("item", t.nextNonspace), e._listData = i, 1) : 0;
    },
    function(t) {
        return t.indented && t.tip.type !== "paragraph" && !t.blank ? (t.advanceOffset(w1, !0), t.closeUnmatchedBlocks(), t.addChild("code_block", t.offset), 2) : 0;
    }
], si = function(t, e) {
    for(var i = this.currentLine, n, s, r; t > 0 && (r = i[this.offset]);)r === "	" ? (n = 4 - this.column % 4, e ? (this.partiallyConsumedTab = n > t, s = n > t ? t : n, this.column += s, this.offset += this.partiallyConsumedTab ? 0 : 1, t -= s) : (this.partiallyConsumedTab = !1, this.column += n, this.offset += 1, t -= 1)) : (this.partiallyConsumedTab = !1, this.offset += 1, this.column += 1, t -= 1);
}, ri = function() {
    this.offset = this.nextNonspace, this.column = this.nextNonspaceColumn, this.partiallyConsumedTab = !1;
}, ai = function() {
    for(var t = this.currentLine, e = this.offset, i = this.column, n; (n = t.charAt(e)) !== "";)if (n === " ") e++, i++;
    else if (n === "	") e++, i += 4 - i % 4;
    else break;
    this.blank = n === `
` || n === "\r" || n === "", this.nextNonspace = e, this.nextNonspaceColumn = i, this.indent = this.nextNonspaceColumn - this.column, this.indented = this.indent >= w1;
}, li = function(t) {
    var e = !0, i, n = this.doc;
    this.oldtip = this.tip, this.offset = 0, this.column = 0, this.blank = !1, this.partiallyConsumedTab = !1, this.lineNumber += 1, t.indexOf("\0") !== -1 && (t = t.replace(/\0/g, "\uFFFD")), this.currentLine = t;
    for(var s; (s = n._lastChild) && s._open;){
        switch(n = s, this.findNextNonspace(), this.blocks[n.type].continue(this, n)){
            case 0:
                break;
            case 1:
                e = !1;
                break;
            case 2:
                return;
            default:
                throw "continue returned illegal value, must be 0, 1, or 2";
        }
        if (!e) {
            n = n._parent;
            break;
        }
    }
    this.allClosed = n === this.oldtip, this.lastMatchedContainer = n;
    for(var r = n.type !== "paragraph" && _t[n.type].acceptsLines, l = this.blockStarts, a = l.length; !r;){
        if (this.findNextNonspace(), !this.indented && !$e.test(t.slice(this.nextNonspace))) {
            this.advanceNextNonspace();
            break;
        }
        for(var u = 0; u < a;){
            var o = l[u](this, n);
            if (o === 1) {
                n = this.tip;
                break;
            } else if (o === 2) {
                n = this.tip, r = !0;
                break;
            } else u++;
        }
        if (u === a) {
            this.advanceNextNonspace();
            break;
        }
    }
    if (!this.allClosed && !this.blank && this.tip.type === "paragraph") this.addLine();
    else {
        this.closeUnmatchedBlocks(), this.blank && n.lastChild && (n.lastChild._lastLineBlank = !0), i = n.type;
        for(var f = this.blank && !(i === "block_quote" || i === "code_block" && n._isFenced || i === "item" && !n._firstChild && n.sourcepos[0][0] === this.lineNumber), c = n; c;)c._lastLineBlank = f, c = c._parent;
        this.blocks[i].acceptsLines ? (this.addLine(), i === "html_block" && n._htmlBlockType >= 1 && n._htmlBlockType <= 5 && Me[n._htmlBlockType].test(this.currentLine.slice(this.offset)) && (this.lastLineLength = t.length, this.finalize(n, this.lineNumber))) : this.offset < t.length && !this.blank && (n = this.addChild("paragraph", this.offset), this.advanceNextNonspace(), this.addLine());
    }
    this.lastLineLength = t.length;
}, ui = function(t, e) {
    var i = t._parent;
    t._open = !1, t.sourcepos[1] = [
        e,
        this.lastLineLength
    ], this.blocks[t.type].finalize(this, t), this.tip = i;
}, oi = function(t) {
    var e, i, n, s = t.walker();
    for(this.inlineParser.refmap = this.refmap, this.inlineParser.options = this.options; i = s.next();)e = i.node, n = e.type, !i.entering && (n === "paragraph" || n === "heading") && this.inlineParser.parse(e);
}, mt = function() {
    var t = new _1("document", [
        [
            1,
            1
        ],
        [
            0,
            0
        ]
    ]);
    return t;
}, hi = function(t) {
    this.doc = new mt, this.tip = this.doc, this.refmap = {}, this.lineNumber = 0, this.lastLineLength = 0, this.offset = 0, this.column = 0, this.lastMatchedContainer = this.doc, this.currentLine = "", this.options.time && console.time("preparing input");
    var e = t.split(Qe), i = e.length;
    t.charCodeAt(t.length - 1) === Ue && (i -= 1), this.options.time && console.timeEnd("preparing input"), this.options.time && console.time("block parsing");
    for(var n = 0; n < i; n++)this.incorporateLine(e[n]);
    for(; this.tip;)this.finalize(this.tip, i);
    return this.options.time && console.timeEnd("block parsing"), this.options.time && console.time("inline parsing"), this.processInlines(this.doc), this.options.time && console.timeEnd("inline parsing"), this.doc;
};
function fi(t) {
    return {
        doc: new mt,
        blocks: _t,
        blockStarts: ni,
        tip: this.doc,
        oldtip: this.doc,
        currentLine: "",
        lineNumber: 0,
        offset: 0,
        column: 0,
        nextNonspace: 0,
        nextNonspaceColumn: 0,
        indent: 0,
        indented: !1,
        blank: !1,
        partiallyConsumedTab: !1,
        allClosed: !0,
        lastMatchedContainer: this.doc,
        refmap: {},
        lastLineLength: 0,
        inlineParser: new ot(t),
        findNextNonspace: ai,
        advanceOffset: si,
        advanceNextNonspace: ri,
        addLine: Ye,
        addChild: Je,
        incorporateLine: li,
        finalize: ui,
        processInlines: oi,
        closeUnmatchedBlocks: ii,
        parse: hi,
        options: t || {}
    };
}
var ci = fi;
function b1() {}
function pi(t) {
    var e = t.walker(), i, n;
    for(this.buffer = "", this.lastOut = `
`; i = e.next();)n = i.node.type, this[n] && this[n](i.node, i.entering);
    return this.buffer;
}
function di(t) {
    this.buffer += t, this.lastOut = t;
}
function vi() {
    this.lastOut !== `
` && this.lit(`
`);
}
function _i(t) {
    this.lit(t);
}
function mi(t) {
    return t;
}
b1.prototype.render = pi;
b1.prototype.out = _i;
b1.prototype.lit = di;
b1.prototype.cr = vi;
b1.prototype.esc = mi;
var N = b1;
var gi = /^javascript:|vbscript:|file:|data:/i, Ci = /^data:image\/(?:png|gif|jpeg|webp)/i, gt = function(t) {
    return gi.test(t) && !Ci.test(t);
};
function ki(t, e, i) {
    if (!(this.disableTags > 0)) {
        if (this.buffer += "<" + t, e && e.length > 0) for(var n = 0, s; (s = e[n]) !== void 0;)this.buffer += " " + s[0] + '="' + s[1] + '"', n++;
        i && (this.buffer += " /"), this.buffer += ">", this.lastOut = ">";
    }
}
function h2(t) {
    t = t || {}, t.softbreak = t.softbreak || `
`, this.esc = t.esc || A1, this.disableTags = 0, this.lastOut = `
`, this.options = t;
}
function Di(t) {
    this.out(t.literal);
}
function Ei() {
    this.lit(this.options.softbreak);
}
function xi() {
    this.tag("br", [], !0), this.cr();
}
function Ai(t, e) {
    var i = this.attrs(t);
    e ? (this.options.safe && gt(t.destination) || i.push([
        "href",
        this.esc(t.destination)
    ]), t.title && i.push([
        "title",
        this.esc(t.title)
    ]), this.tag("a", i)) : this.tag("/a");
}
function bi(t, e) {
    e ? (this.disableTags === 0 && (this.options.safe && gt(t.destination) ? this.lit('<img src="" alt="') : this.lit('<img src="' + this.esc(t.destination) + '" alt="')), this.disableTags += 1) : (this.disableTags -= 1, this.disableTags === 0 && (t.title && this.lit('" title="' + this.esc(t.title)), this.lit('" />')));
}
function Fi(t, e) {
    this.tag(e ? "em" : "/em");
}
function Li(t, e) {
    this.tag(e ? "strong" : "/strong");
}
function yi(t, e) {
    var i = t.parent.parent, n = this.attrs(t);
    i !== null && i.type === "list" && i.listTight || (e ? (this.cr(), this.tag("p", n)) : (this.tag("/p"), this.cr()));
}
function Ni(t, e) {
    var i = "h" + t.level, n = this.attrs(t);
    e ? (this.cr(), this.tag(i, n)) : (this.tag("/" + i), this.cr());
}
function Bi(t) {
    this.tag("code"), this.out(t.literal), this.tag("/code");
}
function Ti(t) {
    var e = t.info ? t.info.split(/\s+/) : [], i = this.attrs(t);
    e.length > 0 && e[0].length > 0 && i.push([
        "class",
        "language-" + this.esc(e[0])
    ]), this.cr(), this.tag("pre"), this.tag("code", i), this.out(t.literal), this.tag("/code"), this.tag("/pre"), this.cr();
}
function Oi(t) {
    var e = this.attrs(t);
    this.cr(), this.tag("hr", e, !0), this.cr();
}
function wi(t, e) {
    var i = this.attrs(t);
    e ? (this.cr(), this.tag("blockquote", i), this.cr()) : (this.cr(), this.tag("/blockquote"), this.cr());
}
function Si(t, e) {
    var i = t.listType === "bullet" ? "ul" : "ol", n = this.attrs(t);
    if (e) {
        var s = t.listStart;
        s !== null && s !== 1 && n.push([
            "start",
            s.toString()
        ]), this.cr(), this.tag(i, n), this.cr();
    } else this.cr(), this.tag("/" + i), this.cr();
}
function Ri(t, e) {
    var i = this.attrs(t);
    e ? this.tag("li", i) : (this.tag("/li"), this.cr());
}
function Pi(t) {
    this.options.safe ? this.lit("<!-- raw HTML omitted -->") : this.lit(t.literal);
}
function ji(t) {
    this.cr(), this.options.safe ? this.lit("<!-- raw HTML omitted -->") : this.lit(t.literal), this.cr();
}
function Ui(t, e) {
    e && t.onEnter ? this.lit(t.onEnter) : !e && t.onExit && this.lit(t.onExit);
}
function zi(t, e) {
    this.cr(), e && t.onEnter ? this.lit(t.onEnter) : !e && t.onExit && this.lit(t.onExit), this.cr();
}
function Ii(t) {
    this.lit(this.esc(t));
}
function Mi(t) {
    var e = [];
    if (this.options.sourcepos) {
        var i = t.sourcepos;
        i && e.push([
            "data-sourcepos",
            String(i[0][0]) + ":" + String(i[0][1]) + "-" + String(i[1][0]) + ":" + String(i[1][1])
        ]);
    }
    return e;
}
h2.prototype = Object.create(N.prototype);
h2.prototype.text = Di;
h2.prototype.html_inline = Pi;
h2.prototype.html_block = ji;
h2.prototype.softbreak = Ei;
h2.prototype.linebreak = xi;
h2.prototype.link = Ai;
h2.prototype.image = bi;
h2.prototype.emph = Fi;
h2.prototype.strong = Li;
h2.prototype.paragraph = yi;
h2.prototype.heading = Ni;
h2.prototype.code = Bi;
h2.prototype.code_block = Ti;
h2.prototype.thematic_break = Oi;
h2.prototype.block_quote = wi;
h2.prototype.list = Si;
h2.prototype.item = Ri;
h2.prototype.custom_inline = Ui;
h2.prototype.custom_block = zi;
h2.prototype.esc = A1;
h2.prototype.out = Ii;
h2.prototype.tag = ki;
h2.prototype.attrs = Mi;
var Hi = h2;
var $i = /\<[^>]*\>/;
function Zi(t) {
    return t.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}
function x1(t) {
    t = t || {}, this.disableTags = 0, this.lastOut = `
`, this.indentLevel = 0, this.indent = "  ", this.esc = t.esc || A1, this.options = t;
}
function Gi(t) {
    this.buffer = "";
    var e, i, n = t.walker(), s, r, l, a, u, o, f = this.options;
    for(f.time && console.time("rendering"), this.buffer += `<?xml version="1.0" encoding="UTF-8"?>
`, this.buffer += `<!DOCTYPE document SYSTEM "CommonMark.dtd">
`; s = n.next();)if (l = s.entering, r = s.node, o = r.type, a = r.isContainer, u = o === "thematic_break" || o === "linebreak" || o === "softbreak", i = Zi(o), l) {
        switch(e = [], o){
            case "document":
                e.push([
                    "xmlns",
                    "http://commonmark.org/xml/1.0"
                ]);
                break;
            case "list":
                r.listType !== null && e.push([
                    "type",
                    r.listType.toLowerCase()
                ]), r.listStart !== null && e.push([
                    "start",
                    String(r.listStart)
                ]), r.listTight !== null && e.push([
                    "tight",
                    r.listTight ? "true" : "false"
                ]);
                var c = r.listDelimiter;
                if (c !== null) {
                    var d = "";
                    c === "." ? d = "period" : d = "paren", e.push([
                        "delimiter",
                        d
                    ]);
                }
                break;
            case "code_block":
                r.info && e.push([
                    "info",
                    r.info
                ]);
                break;
            case "heading":
                e.push([
                    "level",
                    String(r.level)
                ]);
                break;
            case "link":
            case "image":
                e.push([
                    "destination",
                    r.destination
                ]), e.push([
                    "title",
                    r.title
                ]);
                break;
            case "custom_inline":
            case "custom_block":
                e.push([
                    "on_enter",
                    r.onEnter
                ]), e.push([
                    "on_exit",
                    r.onExit
                ]);
                break;
            default:
                break;
        }
        if (f.sourcepos) {
            var p = r.sourcepos;
            p && e.push([
                "sourcepos",
                String(p[0][0]) + ":" + String(p[0][1]) + "-" + String(p[1][0]) + ":" + String(p[1][1])
            ]);
        }
        if (this.cr(), this.out(this.tag(i, e, u)), a) this.indentLevel += 1;
        else if (!a && !u) {
            var C = r.literal;
            C && this.out(this.esc(C)), this.out(this.tag("/" + i));
        }
    } else this.indentLevel -= 1, this.cr(), this.out(this.tag("/" + i));
    return f.time && console.timeEnd("rendering"), this.buffer += `
`, this.buffer;
}
function qi(t) {
    this.disableTags > 0 ? this.buffer += t.replace($i, "") : this.buffer += t, this.lastOut = t;
}
function Xi() {
    if (this.lastOut !== `
`) {
        this.buffer += `
`, this.lastOut = `
`;
        for(var t = this.indentLevel; t > 0; t--)this.buffer += this.indent;
    }
}
function Ki(t, e, i) {
    var n = "<" + t;
    if (e && e.length > 0) for(var s = 0, r; (r = e[s]) !== void 0;)n += " " + r[0] + '="' + this.esc(r[1]) + '"', s++;
    return i && (n += " /"), n += ">", n;
}
x1.prototype = Object.create(N.prototype);
x1.prototype.render = Gi;
x1.prototype.out = qi;
x1.prototype.cr = Xi;
x1.prototype.tag = Ki;
x1.prototype.esc = A1;
var Wi = x1;
"use strict";
export { Hi as HtmlRenderer, _1 as Node, ci as Parser, N as Renderer, Wi as XmlRenderer };
