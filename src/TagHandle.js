"use strict";
exports.__esModule = true;
var Tag_1 = require("./Tag");
var TagHandle = /** @class */ (function () {
    function TagHandle() {
        this._parentTags = [];
        this._content = '';
    }
    TagHandle.prototype.content = function (content) {
        var _this = this;
        this._parentTags.reverse().map(function (tag, index) {
            if (index === 0) {
                _this._content = tag.content(content);
            }
            else {
                _this._content = tag.content(_this._content);
            }
        });
        return this._content;
    };
    TagHandle.prototype.tag = function (tag, style) {
        if (style === void 0) { style = {}; }
        this._parentTags.push(new Tag_1["default"](tag, style));
        return this;
    };
    return TagHandle;
}());
exports["default"] = TagHandle;
