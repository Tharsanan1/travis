'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _configDB = require('../../staticStrings/configDB');

var paths = _interopRequireWildcard(_configDB);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(paths.dbPath);

var componentSchema = new _mongoose2.default.Schema({
    name: String, // name of the component ex : core
    type: String, // example : project or component or sub_component
    parentComponent: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Component' } // contains _id of the parent component.

});

var Component = _mongoose2.default.model('Component', componentSchema);
exports.default = Component;
module.exports = exports['default'];