/**
     * COMMENT OUT TO FIX ISSUE
     * src/app.module.ts - comment out global declaration
     * src/app.module.ts - comment out global provider
     * assets/scripts/analytics.js - comment out all javascript code
     * src/app/components/first/first.component.ts - comment out call to analytics
     * src/app/components/second/second.component.ts - comment out call to analytics
     * RUN on IE, which will work
     */

!function () {
    var analytics = window.analytics = window.analytics || []; if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice."); else {
        analytics.invoked = !0; analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"]; analytics.factory = function (t) { return function () { var e = Array.prototype.slice.call(arguments); e.unshift(t); analytics.push(e); return analytics } }; for (var t = 0; t < analytics.methods.length; t++) { var e = analytics.methods[t]; analytics[e] = analytics.factory(e) } analytics.load = function (t, e) { var n = document.createElement("script"); n.type = "text/javascript"; n.async = !0; n.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js"; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(n, a); analytics._loadOptions = e }; analytics.SNIPPET_VERSION = "4.1.0";
        analytics.load("LhNSTPVig0UwcMmEmolNR1H0bw5DmoqH");
    }
}();

