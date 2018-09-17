'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _instanceService = require('../service/instanceService');

var servicemethods = _interopRequireWildcard(_instanceService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var express = require('express');
var router = express.Router();


router.post('/', function (req, res) {
    //tagData is of the 
    //type {compType:Ec2/Elb/S3 , tag:tags ,identifer:identifier }
    /////////// tag is of the format {project_tag:{},component_tag:{},env_tag:{}}

    //example tagData
    /*for Ec2 :{compType:"Ec2",tag:{project_tag:{Key:"Project_Name",Value:"Ignore_this_name"},
        env_tag:{Key:"Env",Value:"Ignore_this_name"},
        component_tag:{Key:"Components",Value:"Ignore_this_name"}},identifier:"i-0fa72642bcc9ba2e2"}
        */
    /*for Elb :{compType:"Elb",tag:{project_tag:{Key:"Project_Name",Value:"Ignore_this_name"},
        env_tag:{Key:"Env",Value:"Ignore_this_name"},
        component_tag:{Key:"Components",Value:"Ignore_this_nametest"}},identifier:"test-lakmal"}*/
    /*for S3  :{compType:"S3",tag:{project_tag:{Key:"Project_Name",Value:"Ignore_this_name"},
        env_tag:{Key:"Env",Value:"Ignore_this_name"},
        component_tag:{Key:"Components",Value:"Ignore_this_nametest"}},identifier:"test-lakmal-1"}*/

    servicemethods.AddInstanceTag(req.body, function (err, data) {

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