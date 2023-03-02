"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tag = /** @class */ (function () {
    function Tag(tag, style) {
        this._content = '';
        this._tag = tag;
        this._style = style || {};
    }
    Tag.prototype.content = function (content) {
        this._content = "<".concat(this._tag, " ").concat(Object.keys(this._style).length === 0 ? '' : "style=\"".concat(this._getStyleString(), "\""), " >").concat(content || '', "</").concat(this._tag, ">");
        return this._content;
    };
    Tag.prototype.getTag = function () {
        return this._tag;
    };
    Tag.prototype._getStyleString = function () {
        var _this = this;
        var styleString = '';
        Object.keys(this._style).map(function (key) {
            styleString += "".concat(key, ": ").concat(_this._style[key], ";");
        });
        return styleString;
    };
    return Tag;
}());
exports.default = Tag;
