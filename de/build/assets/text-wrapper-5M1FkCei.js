function m() {
    Array.from(document.querySelectorAll('[data-wrap-text]:not([style*="display: none"])')).forEach((t, n) => {
        const o = parseFloat(window.getComputedStyle(t).lineHeight);
        if (t.clientHeight / o === 1 || t.children.length > 0) return;
        const a = s(t);
        document.body.append(a), requestAnimationFrame(() => p(a, t))
    })
}

function s(e) {
    const t = e.cloneNode(!1);
    Array.from(t.attributes).forEach(o => {
        o.name.startsWith("x-") && t.removeAttribute(o.name)
    });
    const n = Array.from(e.childNodes);
    return f(e, t), n.forEach((o, a) => {
        if (o.nodeType === Node.TEXT_NODE && o.textContent.trim()) {
            const l = o.textContent.trim().split(" ");
            l.forEach((h, i) => {
                const r = document.createElement("span");
                r.textContent = h, t.append(r), n.length !== a - 1 && l.length !== i && t.append(" ")
            })
        } else if (o.nodeType === Node.ELEMENT_NODE) {
            const l = document.createElement("span");
            l.textContent = o.textContent, f(o, l), t.append(l), n.length !== a - 1 && t.append(" ")
        }
    }), t
}

function f(e, t) {
    if (e instanceof Element) {
        const n = window.getComputedStyle(e);
        t.style.cssText = `
            font-size: ${n.fontSize};
            font-family: ${n.fontFamily};
            font-weight: ${n.fontWeight};
            text-transform: ${n.textTransform};
            opacity: 0;
            width: ${Math.ceil(e.clientWidth)}px;
            max-width: ${n.maxWidth};
            display: ${n.display==="flex"?"block !important":n.display};
        `
    }
}

function p(e, t) {
    const n = d(e);
    if (n.length < 2) {
        e.remove();
        return
    }
    const {
        breakBeforeText: o,
        occurrences: a
    } = g(n);
    o && (t.innerHTML = u(t.innerHTML, a, "<br>" + o, o)), e.remove()
}

function d(e) {
    let t = null,
        n = null;
    const o = [];
    let a = [];
    return Array.from(e.children).forEach((l, h) => {
        const i = l.getBoundingClientRect();
        n !== null && Math.abs(i.top - t) > Math.abs(i.height - n) / 2 && (o.push(a), a = []), a.push(l), t = i.top, n = i.height
    }), a.length > 0 && o.push(a), o
}

function g(e) {
    const t = e.length - 2;
    let n = 0,
        o = 0,
        a = 0,
        l = null,
        h;
    e[t].forEach(i => n += i.offsetWidth), e[e.length - 1].forEach(i => o += i.offsetWidth);
    for (let i = 0; i < e[t].length; i++) {
        const r = e[t][e[t].length - i - 1],
            c = r.offsetWidth;
        if (n - o < 0 || o + c > n - c) break;
        n -= c, o += c, l = r.textContent, h = i
    }
    if (l) {
        const i = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        for (let r = 0; r < e[e.length - 1].length; r++) {
            const c = e[e.length - 1][r].textContent.match(new RegExp(i, "g"));
            a += c ? c.length : 0
        }
        for (let r = e[t].length - h - 1; r < e[t].length; r++) {
            const c = e[t][r].textContent.match(new RegExp(i, "g"));
            a += c ? c.length : 0
        }
    }
    return {
        breakBeforeText: l,
        occurrences: a
    }
}

function u(e, t, n, o) {
    const a = new RegExp(o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    let l = 0;
    return t = (e.match(a) || []).length - t + 1, e.replace(a, h => ++l === t ? n : h)
}
export {
    m as
    default
};