"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createComponent = createComponent;

var _componentQuery = require("../queries/componentQuery");

var QueriesMongo = _interopRequireWildcard(_componentQuery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createComponent(tag, callback) {
    QueriesMongo.createComponent(tag, callback);
}