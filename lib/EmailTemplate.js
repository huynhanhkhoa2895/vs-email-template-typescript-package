"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var TagHandle_1 = require("./TagHandle");
var EmailTemplate = /** @class */ (function () {
    function EmailTemplate() {
        this.defaultStyleText = {
            "font-size": "16px",
            "line-height": "18px",
            "padding": "0",
            "margin": "0 0 5px 0",
            "font-family": "Helvetica,Arial,sans-serif",
        };
        this.content = '';
    }
    EmailTemplate.prototype.getDefaultStyle = function (style) {
        return this.defaultStyleText;
    };
    EmailTemplate.prototype.setDefaultStyle = function (style) {
        this.defaultStyleText = style || {};
        return this;
    };
    EmailTemplate.prototype.tag = function (tag, style) {
        return (new TagHandle_1.default()).tag(tag, style);
    };
    EmailTemplate.prototype.title = function (text, style) {
        this.content += this.tag('div').tag('p', __assign(__assign({}, this.defaultStyleText), style)).tag('b').content(text);
        return this;
    };
    EmailTemplate.prototype.text = function (text, style) {
        this.content += this.tag('div').tag('p', __assign(__assign({}, this.defaultStyleText), style)).content(text);
        return this;
    };
    EmailTemplate.prototype.custom = function (content) {
        this.content += content;
        return this;
    };
    EmailTemplate.prototype.list = function (data, style, styleItem) {
        var _this = this;
        var content = '';
        Object.keys(data).map(function (key) {
            var textKey = _this.tag('b', { "text-transform": 'capitalize' }).content(key);
            content += _this.tag('div').tag('p', __assign(__assign({}, _this.defaultStyleText), styleItem)).content("".concat(textKey, ": ").concat(data[key]));
        });
        this.content += this.tag('div', style).content(content);
        return this;
    };
    EmailTemplate.prototype.render = function () {
        return this.content;
    };
    return EmailTemplate;
}());
exports.default = EmailTemplate;
