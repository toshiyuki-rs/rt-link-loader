var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "path"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Loader = void 0;
    var path_1 = __importDefault(require("path"));
    /**
     * loader
     */
    var Loader = /** @class */ (function () {
        function Loader() {
        }
        /**
         * handle link source
         */
        Loader.handleLinkSource = function (source, sourceMap) {
            var self = this;
            var styleSheetQuery = path_1["default"].relative(self.context, self.resource);
            var result = Loader.createStyleSheetsQuery(styleSheetQuery);
            return result;
        };
        /**
         * create style sheet query
         */
        Loader.createStyleSheetsQuery = function (styleSheetName) {
            var result = "\nfunction findStyleSheet(styleSheetName) {\n   var styleSheets = document.styleSheets\n   var i\n   var result = undefined\n   for (i = 0; i < styleSheets.length; i++) {\n     var styleSheet = styleSheets[i]\n      if (styleSheet.href) {\n        if (styleSheet.href.endsWith(styleSheetName)) {\n          result = styleSheet\n          break\n        }\n      }\n   }\n   return result\n}\n\nvar styleSheetRef = findStyleSheet('" + styleSheetName + "')\n\nexport { styleSheetRef as default }\n";
            return result;
        };
        return Loader;
    }());
    exports.Loader = Loader;
});
// vi: se ts=2 sw=2 et:
//# sourceMappingURL=loader.js.map