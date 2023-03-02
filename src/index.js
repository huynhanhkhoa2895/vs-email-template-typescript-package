"use strict";
exports.__esModule = true;
var EmailTemplate_1 = require("./EmailTemplate");
var template = new EmailTemplate_1["default"]();
console.log(template.text('test').title('haha').render());
exports["default"] = template;
