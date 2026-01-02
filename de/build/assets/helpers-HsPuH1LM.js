function s(t, r, e) {
    var a = new Date;
    a.setTime(a.getTime() + e * 24 * 60 * 60 * 1e3);
    var i = "expires=" + a.toUTCString();
    document.cookie = t + "=" + r + ";" + i + ";path=/"
}

function p(t) {
    const e = `; ${document.cookie}`.split(`; ${t}=`);
    if (e.length === 2) return e.pop().split(";").shift()
}

function c() {
    return window.ApplePaySession && window.ApplePaySession.canMakePayments()
}

function d() {
    p("apple_pay_supported") === void 0 && s("apple_pay_supported", c() ? "1" : "0", 30)
}

function u(t, r = "USD", e = "en-US", a = !1) {
    if (!t && t !== 0) return window.Sentry ? .captureMessage("No number in formatPrice passed"), 0 + r;
    if (Number.isNaN(Number(t))) return window.Sentry ? .captureMessage(`Invalid number in formatPrice: ${t}`), 0 + r;
    try {
        const i = t.toString().split(".");
        i.length === 2 && (t = i[0] + "." + i[1].substr(0, 2)), e.toLowerCase() === "es-mx" && (e = "es");
        const n = {
            style: "currency",
            currency: r
        };
        if (a) {
            const o = Number(t) % 1 === 0;
            n.minimumFractionDigits = o ? 0 : 1, n.maximumFractionDigits = 2
        }
        return new Intl.NumberFormat(e, n).format(t)
    } catch (i) {
        return window.Sentry ? .captureException(i), t + r
    }
}

function f(t = 0, r = "en-US") {
    if (!t && t !== 0) return window.Sentry ? .captureMessage("No number in formatPercent passed"), "0%";
    const e = Number(t) / 100;
    if (Number.isNaN(e)) return window.Sentry ? .captureMessage(`Invalid number in formatPercent: ${t}`), "0%";
    try {
        return new Intl.NumberFormat(r, {
            style: "percent",
            useGrouping: !1,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(e)
    } catch (a) {
        return window.Sentry ? .captureException(a), e * 100 + "%"
    }
}
window.formatPrice = u;
window.formatPercent = f;

function l(t, r) {
    const e = JSON.parse(t),
        a = parseFloat((parseFloat(e[1]) * r).toFixed(2));
    return {
        id: e[0],
        price: parseFloat(e[1]),
        priceWithTaxes: parseFloat((parseFloat(e[1]) + a).toFixed(2)),
        taxes: a,
        taxRate: r,
        unitPrice: parseFloat(e[1]) / e[2],
        quantity: e[2],
        name: e[3],
        options: Array.isArray(e[4]) ? {} : e[4],
        currency: e[5] || null,
        subscriptionPlan: e[6],
        oldPrice: parseFloat(e[8]),
        relatedProducts: e[9],
        type: e[11],
        originalPrice: e[12],
        discountPercentage: e[13],
        priceAfterCoupon: parseFloat(e[16]),
        priceAfterCouponWithTaxes: parseFloat(parseFloat(e[16] + a).toFixed(2))
    }
}

function w(t, r = {}) {
    return t instanceof URL || (t = new URL(t)), `${t.origin}${t.pathname}?${new URLSearchParams([...Array.from(t.searchParams.entries()),...Object.entries(r)])}`
}

function m(t, r) {
    for (const e in r) t = t.replace(`:${e}`, r[e]);
    return t
}
window.jsTrans = m;
export {
    w as a, d as c, u as f, p as g, c as i, l as p, s
};