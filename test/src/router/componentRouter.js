'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _instanceService = require('../service/instanceService');

var services = _interopRequireWildcard(_instanceService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var express = require('express');
var router = express.Router();


//Get all nodes in the DB
router.get('/', function (req, res) {
    services.getAllNodes(function (err, data) {
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

//Update a node
router.put('/:id', function (req, res) {
    services.updateNode(req.params.id, req.body, function (err, data) {
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

//Delete a node
router.delete('/:id', function (req, res) {
    services.deleteNode(req.params.id, function (err, data) {
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

//Create a node
router.post('/', function (req, res) {
    services.createNode(req.body, function (err, data) {
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

//Get Root Nodes ( components )
router.get('/rootcomponents', function (req, res) {
    services.getRootComponents(function (err, data) {
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

//Find children by parent id
router.get('/findchildbyparentid/:id', function (req, res) {
    services.findChildrenByParentId(req.params.id, function (err, data) {
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

//get the flow of a node
// router.get('/get-node-flow/:id', function (req, res) {
//     services.getNodeFlowById(req.params.id.toString(), function (err, data) {
//         let response = {success: false, data: {}, ErrorMsg: {}};
//         if (err) {
//             response.success = false;
//             response.ErrorMsg = err;
//         }
//         else {
//             response.success = true;
//             response.data = data;
//         }
//         res.send(response);
//         res.end();
//     })
// });


exports.default = router;
module.exports = exports['default'];