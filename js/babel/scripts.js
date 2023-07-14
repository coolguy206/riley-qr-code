"use strict";

var _jquery = _interopRequireDefault(require("jquery"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _jquery["default"])(document).ready(function () {
  console.log("jquery ready");
  var date = new Date();
  date = date.getFullYear();
  (0, _jquery["default"])('.year').text(date);
});
//# sourceMappingURL=scripts.js.map
