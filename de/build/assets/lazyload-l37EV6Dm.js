var p = (i, c) => () => (c || i((c = {
    exports: {}
}).exports, c), c.exports);
var y = p((h, b) => {
    (function(i, c) {
        typeof h == "object" ? b.exports = c(i) : typeof define == "function" && define.amd ? define([], c) : i.LazyLoad = c(i)
    })(typeof global < "u" ? global : window || global, function(i) {
        typeof define == "function" && define.amd && (i = window);
        const c = {
                src: "data-src",
                srcset: "data-srcset",
                lazyLoadClass: "data-lazy-load-class",
                selector: ".lazyload",
                root: null,
                rootMargin: "0px",
                threshold: 0
            },
            g = function() {
                let s = {},
                    t = !1,
                    r = 0,
                    e = arguments.length;
                Object.prototype.toString.call(arguments[0]) === "[object Boolean]" && (t = arguments[0], r++);
                let n = function(a) {
                    for (let o in a) Object.prototype.hasOwnProperty.call(a, o) && (t && Object.prototype.toString.call(a[o]) === "[object Object]" ? s[o] = g(!0, s[o], a[o]) : s[o] = a[o])
                };
                for (; r < e; r++) {
                    let a = arguments[r];
                    n(a)
                }
                return s
            };

        function u(s, t) {
            this.settings = g(c, t || {}), this.images = s || document.querySelectorAll(this.settings.selector), this.observer = null, this.init()
        }
        if (u.prototype = {
                init: function() {
                    if (!i.IntersectionObserver) {
                        this.loadImages();
                        return
                    }
                    let s = this,
                        t = {
                            root: this.settings.root,
                            rootMargin: this.settings.rootMargin,
                            threshold: [this.settings.threshold]
                        };
                    this.observer = new IntersectionObserver(r => {
                        Array.prototype.forEach.call(r, e => {
                            if (e.isIntersecting) {
                                s.observer.unobserve(e.target);
                                let n = e.target.getAttribute(s.settings.src),
                                    a = e.target.getAttribute(s.settings.srcset),
                                    o = e.target.getAttribute(s.settings.lazyLoadClass);
                                if (e.target.tagName.toLowerCase() === "video") {
                                    const d = e.target;
                                    for (const l of d.children) {
                                        if (!l.tagName || l.tagName.toUpperCase() !== "SOURCE" || l.getAttribute("src")) continue;
                                        const f = l.getAttribute("data-src") || l.dataset && l.dataset.src || null;
                                        if (!f) {
                                            window.Sentry && window.Sentry.captureException(new Error("Missing data-src on <source> for lazyloaded video"), {
                                                extra: {
                                                    page: location.href,
                                                    video: d.outerHTML
                                                }
                                            });
                                            continue
                                        }
                                        l.src = f
                                    }
                                    d.autoplay = !0, d.load()
                                } else if (e.target.tagName.toLowerCase() === "img") n && (e.target.src = n), a && (e.target.srcset = a);
                                else if (n) e.target.style.backgroundImage = "url('" + n + "')";
                                else if (a) {
                                    const d = this.getBackgroundImageFromSrcset(a);
                                    d && (e.target.style.backgroundImage = "url('" + d + "')")
                                } else if (o) {
                                    let d = o.replaceAll(`
`, "").split(" ").filter(l => l);
                                    for (let l of d) e.target.classList.add(l)
                                }
                            }
                        })
                    }, t), Array.prototype.forEach.call(this.images, function(r) {
                        s.observer.observe(r)
                    })
                },
                loadAndDestroy: function() {
                    this.settings && (this.loadImages(), this.destroy())
                },
                loadImages: function() {
                    if (!this.settings) return;
                    let s = this;
                    Array.prototype.forEach.call(this.images, t => {
                        let r = t.getAttribute(s.settings.src),
                            e = t.getAttribute(s.settings.srcset);
                        if (t.tagName.toLowerCase() === "video") t.autoplay = !0, t.load();
                        else if (t.tagName.toLowerCase() === "img") r && (t.src = r), e && (t.srcset = e);
                        else if (r) t.style.backgroundImage = "url('" + r + "')";
                        else if (e) {
                            const n = this.getBackgroundImageFromSrcset(e);
                            n && (t.style.backgroundImage = "url('" + n + "')")
                        }
                    })
                },
                destroy: function() {
                    this.settings && (this.observer.disconnect(), this.settings = null)
                },
                getBackgroundImageFromSrcset: function(s) {
                    const t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    let r, e = 0;
                    return Array.prototype.forEach.call(s.split(", "), n => {
                        const a = n.split(" "),
                            o = parseFloat(a[1]);
                        t >= o && e <= o && (r = a[0], e = o)
                    }), r
                }
            }, i.lazyload = function(s, t) {
                return new u(s, t)
            }, i.jQuery) {
            const s = i.jQuery;
            s.fn.lazyload = function(t) {
                return t = t || {}, t.attribute = t.attribute || "data-src", new u(s.makeArray(this), t), this
            }
        }
        return u
    });
    document.addEventListener("DOMContentLoaded", () => {
        new lazyload(document.querySelectorAll("[data-src], [data-srcset], [data-lazy-load-class], .lazyload"), {
            rootMargin: "45%"
        })
    })
});
export default y();