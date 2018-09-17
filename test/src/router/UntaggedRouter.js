'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _instanceService = require('../service/instanceService');

var _UntaggedService = require('../service/UntaggedService');

var _componentQuery = require('../queries/componentQuery');

var express = require('express');
var router = express.Router();


router.put('/', function (req, res) {
    (0, _UntaggedService.getUntaggedInstances)().then(function (ins) {
        res.send({
            success: true,
            data: ins
        });
    }).catch(function (err) {
        res.send(err);
    });
});

exports.default = router;
module.exports = exports['default'];