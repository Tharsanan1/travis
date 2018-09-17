'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _instanceService = require('../service/instanceService');

var servicemethods = _interopRequireWildcard(_instanceService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var express = require('express');
var router = express.Router();


router.put('/', function (req, res) {
    servicemethods.addTagForUntagged(req.body, function (err, data) {

        var response = { success: false, data: {}, ErrorMsg: {} };
        if (err) {
            response.success = false;
            response.ErrorMsg = err;
        } else {
            response.success = true;
            response.data = data;
        }
        res.send(response);
        res.end();
    });
});
exports.default = router;
module.exports = exports['default'];