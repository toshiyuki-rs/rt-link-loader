(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./loader"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.raw = exports["default"] = void 0;
    var loader_1 = require("./loader");
    var loader = loader_1.Loader.handleLinkSource;
    exports["default"] = loader;
    var raw = false;
    exports.raw = raw;
});
// vi: se ts=2 sw=2 et:
//# sourceMappingURL=index.js.map