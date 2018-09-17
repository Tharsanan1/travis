'use strict';

var _tagService = require('../service/tagService');

var serviceMethods = _interopRequireWildcard(_tagService);

var _awsTagging = require('../AWSRepoLayer/awsTagging');

var awsTagging = _interopRequireWildcard(_awsTagging);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var express = require('express');
var router = express.Router();


// middleware function for the tagInfo router to collect the request information
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

// router get method for serving all tag details to the client
router.get('/', function (req, res) {
    // {instance_id, product, environment, version, feature}
    // awsTagging.updateFeatureVersionS3({s3Name:'test-lakmal-1', feature : 'MAPI', version : '1.1.1.12'});
    // awsTagging.updateFeatureVersionElb({elbName : 'test-lakmal', feature : 'MAPI', version : '1.1.1.12'})
    // awsTagging.updateFeatureVersionEc2({instance_id : 'i-0fa72642bcc9ba2e2', feature : 'MAPI', version : '1.1.1.12'})
    res.send("hello world");
});

// router post method to add a new tag detail to the database.
router.post('/', function (req, res) {
    var tag = { name: req.body.name, type: req.body.type, parentComponent: req.body.parent };
    serviceMethods.createComponent(tag, function (err, data) {
        if (err) res.send(err);else {
            res.send(data);
        }
        res.end();
    });
});

// router put method for update a tag information
router.put('/:id', function (req, res) {});

// router delete method for delete a tag information from the database.
router.delete('/:id', function (req, res) {});

module.exports = router;