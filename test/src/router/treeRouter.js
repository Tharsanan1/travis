'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _instanceService = require('../service/instanceService');

var _componentQuery = require('../queries/componentQuery');

var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    console.log('tree called in ec2');
    (0, _instanceService.getWholeTagTree)(function (data) {
        res.send(data);
        res.end();
    });
});

router.get('/one-instance', function (req, res) {
    // for now its hard coded.
    var tag = { key: req.query.name, value: req.query.value };
    (0, _instanceService.getInstancesUsingTag)(tag, function (err, data) {
        res.send(data);
        res.end();
    });
});

exports.default = router;
module.exports = exports['default'];