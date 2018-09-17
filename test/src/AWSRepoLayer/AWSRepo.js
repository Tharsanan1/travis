'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filterElbEc2S3 = filterElbEc2S3;
exports.AddInstance = AddInstance;
exports.AddInstancetag = AddInstancetag;
exports.getAllElbEc2S3 = getAllElbEc2S3;
exports.AddTagForUntaggedInstances = AddTagForUntaggedInstances;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
var ec2 = new AWS.EC2();
var elb = new AWS.ELB();
var s3 = new AWS.S3();

//AWS queries
function filterElbEc2S3(Tag, callback) {
    //callback(false,"Ignore_this_name+Ignore_this_nametest+Ignore_this_nametest".includes("Ignore_this_name"));
    var instanceList = [];
    var toReturn = [];
    var params = {
        Filters: [{
            Name: "tag:" + Tag.project_tag.Key,
            Values: [Tag.project_tag.Value]
        }, {
            Name: "tag:" + Tag.component_tag.Key,
            Values: ["*" + Tag.component_tag.Value + "*"]
        }, {
            Name: "tag:" + Tag.env_tag.Key,
            Values: [Tag.env_tag.Value]
        }]
    };
    // callback(false,params);
    // return false;
    ec2.describeInstances(params, function (err, ec2data) {

        //console.log("In of ec2"); 
        if (err) {
            instanceList.push(err);
            // callback(err,null); // an error occurred
        } else {
            ec2data.Reservations.forEach(function (reservation) {
                reservation.Instances.forEach(function (instance) {
                    instanceList.push(instance);
                });
            });
            toReturn.push({ type: "ec2", data: instanceList });
            elb.describeLoadBalancers({}, function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(err, elbdata) {
                    var loadBalancerInstancesList, temptoreturn, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, elbvalues, paramstempelb, temp;

                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    loadBalancerInstancesList = [];

                                    if (!err) {
                                        _context2.next = 6;
                                        break;
                                    }

                                    console.log(err, err.stack); // an error occurred
                                    loadBalancerInstancesList.push(err);
                                    _context2.next = 38;
                                    break;

                                case 6:
                                    // let test=[{a:""},{g:"sad"}];
                                    // // callback(false,test.Contains({a:""}));
                                    // // return false;
                                    temptoreturn = [];

                                    elbdata.LoadBalancerDescriptions.forEach(function (loadBalancerDescription) {
                                        loadBalancerInstancesList.push(loadBalancerDescription);
                                    });

                                    _iteratorNormalCompletion = true;
                                    _didIteratorError = false;
                                    _iteratorError = undefined;
                                    _context2.prev = 11;
                                    _iterator = loadBalancerInstancesList[Symbol.iterator]();

                                case 13:
                                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                        _context2.next = 22;
                                        break;
                                    }

                                    elbvalues = _step.value;
                                    paramstempelb = {
                                        LoadBalancerNames: [elbvalues.LoadBalancerName]
                                    };
                                    _context2.next = 18;
                                    return getElbTagInfo(Tag, elbvalues, temptoreturn);

                                case 18:
                                    temp = _context2.sent;

                                case 19:
                                    _iteratorNormalCompletion = true;
                                    _context2.next = 13;
                                    break;

                                case 22:
                                    _context2.next = 28;
                                    break;

                                case 24:
                                    _context2.prev = 24;
                                    _context2.t0 = _context2['catch'](11);
                                    _didIteratorError = true;
                                    _iteratorError = _context2.t0;

                                case 28:
                                    _context2.prev = 28;
                                    _context2.prev = 29;

                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                    }

                                case 31:
                                    _context2.prev = 31;

                                    if (!_didIteratorError) {
                                        _context2.next = 34;
                                        break;
                                    }

                                    throw _iteratorError;

                                case 34:
                                    return _context2.finish(31);

                                case 35:
                                    return _context2.finish(28);

                                case 36:
                                    toReturn.push({ type: "elb", data: temptoreturn });
                                    s3.listBuckets({}, function () {
                                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, s3data) {
                                            var temptoreturn, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, s3values, waiter, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _s3values, _waiter;

                                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                                while (1) {
                                                    switch (_context.prev = _context.next) {
                                                        case 0:
                                                            if (!err) {
                                                                _context.next = 6;
                                                                break;
                                                            }

                                                            console.log(err, err.stack);
                                                            toReturn.push({ type: "s3", data: err });
                                                            callback(false, toReturn);
                                                            _context.next = 63;
                                                            break;

                                                        case 6:
                                                            temptoreturn = [];
                                                            _iteratorNormalCompletion2 = true;
                                                            _didIteratorError2 = false;
                                                            _iteratorError2 = undefined;
                                                            _context.prev = 10;
                                                            _iterator2 = s3data.Buckets[Symbol.iterator]();

                                                        case 12:
                                                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                                                _context.next = 20;
                                                                break;
                                                            }

                                                            s3values = _step2.value;
                                                            _context.next = 16;
                                                            return getS3TagInfo(Tag, s3values, temptoreturn);

                                                        case 16:
                                                            waiter = _context.sent;

                                                        case 17:
                                                            _iteratorNormalCompletion2 = true;
                                                            _context.next = 12;
                                                            break;

                                                        case 20:
                                                            _context.next = 26;
                                                            break;

                                                        case 22:
                                                            _context.prev = 22;
                                                            _context.t0 = _context['catch'](10);
                                                            _didIteratorError2 = true;
                                                            _iteratorError2 = _context.t0;

                                                        case 26:
                                                            _context.prev = 26;
                                                            _context.prev = 27;

                                                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                                                _iterator2.return();
                                                            }

                                                        case 29:
                                                            _context.prev = 29;

                                                            if (!_didIteratorError2) {
                                                                _context.next = 32;
                                                                break;
                                                            }

                                                            throw _iteratorError2;

                                                        case 32:
                                                            return _context.finish(29);

                                                        case 33:
                                                            return _context.finish(26);

                                                        case 34:
                                                            _iteratorNormalCompletion3 = true;
                                                            _didIteratorError3 = false;
                                                            _iteratorError3 = undefined;
                                                            _context.prev = 37;
                                                            _iterator3 = temptoreturn[Symbol.iterator]();

                                                        case 39:
                                                            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                                                _context.next = 47;
                                                                break;
                                                            }

                                                            _s3values = _step3.value;
                                                            _context.next = 43;
                                                            return getS3PolicyInfo(_s3values);

                                                        case 43:
                                                            _waiter = _context.sent;

                                                        case 44:
                                                            _iteratorNormalCompletion3 = true;
                                                            _context.next = 39;
                                                            break;

                                                        case 47:
                                                            _context.next = 53;
                                                            break;

                                                        case 49:
                                                            _context.prev = 49;
                                                            _context.t1 = _context['catch'](37);
                                                            _didIteratorError3 = true;
                                                            _iteratorError3 = _context.t1;

                                                        case 53:
                                                            _context.prev = 53;
                                                            _context.prev = 54;

                                                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                                                _iterator3.return();
                                                            }

                                                        case 56:
                                                            _context.prev = 56;

                                                            if (!_didIteratorError3) {
                                                                _context.next = 59;
                                                                break;
                                                            }

                                                            throw _iteratorError3;

                                                        case 59:
                                                            return _context.finish(56);

                                                        case 60:
                                                            return _context.finish(53);

                                                        case 61:
                                                            toReturn.push({ type: "s3", data: temptoreturn });
                                                            callback(false, toReturn);

                                                        case 63:
                                                        case 'end':
                                                            return _context.stop();
                                                    }
                                                }
                                            }, _callee, this, [[10, 22, 26, 34], [27,, 29, 33], [37, 49, 53, 61], [54,, 56, 60]]);
                                        }));

                                        return function (_x3, _x4) {
                                            return _ref2.apply(this, arguments);
                                        };
                                    }());

                                case 38:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this, [[11, 24, 28, 36], [29,, 31, 35]]);
                }));

                return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            }());
        }
    });
}

//function used in filterEc2ElbS3 to get Tag data for given s3
function getS3TagInfo(Tag, s3values, temptoreturn) {
    var params = {
        Bucket: s3values.Name
    };
    var getTagPromise = new Promise(function (resolve, reject) {
        s3.getBucketTagging(params, function (err, data) {
            if (err) {
                //console.log(err, err.stack); // an error occurred
                //temptoreturn.push({err:err});
                resolve(s3values);
            } else {
                //console.log("inside s3 tag info bucket",data);           // successful response
                var hitproject = false;
                var hitcomponent = false;
                var hitenv = false;
                //temptoreturn.push(tagelbdata);
                // tagelbdata.TagDescriptions[0].Tags.forEach(function(tagforgivenelb){
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = data.TagSet[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var tagForGivenS3 = _step4.value;

                        if (tagForGivenS3.Key === Tag.project_tag.Key && tagForGivenS3.Value === Tag.project_tag.Value) {
                            hitproject = true;
                        }
                        if (tagForGivenS3.Key === Tag.env_tag.Key && tagForGivenS3.Value === Tag.env_tag.Value) {
                            hitenv = true;
                        }
                        if (tagForGivenS3.Key === Tag.component_tag.Key && (tagForGivenS3.Value.endsWith("+" + Tag.component_tag.Value) || tagForGivenS3.Value.includes("+" + Tag.component_tag.Value + "+") || tagForGivenS3.Value.startsWith(Tag.component_tag.Value + "+") || tagForGivenS3.Value === Tag.component_tag.Value)) {
                            // console.log(tagForGivenS3.Value);
                            //console.log(Tag.component_tag.Value);
                            hitcomponent = true;
                        }
                        if (hitenv && hitproject && hitcomponent) {
                            s3values["Tags"] = data.TagSet;
                            temptoreturn.push(s3values);
                            break;
                            // callback(false,toReturn);
                            // return true;
                        }
                    }
                    //temptoreturn.push({tagpers3:data});
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                resolve(s3values);
            }
        });
    });
    return getTagPromise;
}

//function used in filterEc2ElbS3 to get Policy data for given s3
function getS3PolicyInfo(s3values) {
    var params = {
        Bucket: s3values.Name
    };
    var getPolicyPromise = new Promise(function (resolve, reject) {
        s3.getBucketPolicy(params, function (err, data) {
            if (err) {
                console.log(err, err.stack); // an error occurred
                s3values["Policy"] = "No Policy Record";
                resolve(s3values);
            } else {
                console.log("inside s3 policy");
                console.log(data); // successful response
                s3values["Policy"] = data.Policy;
                resolve(s3values);
            }
        });
    });
    return getPolicyPromise;
}

//function used in filterEc2ElbS3 to get Tag data for given elb
function getElbTagInfo(Tag, elbvalues, temptoreturn) {
    var paramstempelb = {
        LoadBalancerNames: [elbvalues.LoadBalancerName]
    };
    var getTagPromise = new Promise(function (resolve, reject) {
        elb.describeTags(paramstempelb, function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(err, tagelbdata) {
                var hitproject, hitcomponent, hitenv, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, tagforgivenelb;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (!err) {
                                    _context3.next = 5;
                                    break;
                                }

                                console.log("error", err);
                                resolve();
                                _context3.next = 40;
                                break;

                            case 5:
                                hitproject = false;
                                hitcomponent = false;
                                hitenv = false;
                                //temptoreturn.push(tagelbdata);
                                // tagelbdata.TagDescriptions[0].Tags.forEach(function(tagforgivenelb){

                                _iteratorNormalCompletion5 = true;
                                _didIteratorError5 = false;
                                _iteratorError5 = undefined;
                                _context3.prev = 11;
                                _iterator5 = tagelbdata.TagDescriptions[0].Tags[Symbol.iterator]();

                            case 13:
                                if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                                    _context3.next = 25;
                                    break;
                                }

                                tagforgivenelb = _step5.value;

                                if (tagforgivenelb.Key === Tag.project_tag.Key && tagforgivenelb.Value === Tag.project_tag.Value) {
                                    hitproject = true;
                                }
                                if (tagforgivenelb.Key === Tag.env_tag.Key && tagforgivenelb.Value === Tag.env_tag.Value) {
                                    // console.log(tagforgivenelb.Value);
                                    // console.log(Tag.env_tag.Value);
                                    hitenv = true;
                                }
                                if (tagforgivenelb.Key === Tag.component_tag.Key && (tagforgivenelb.Value.endsWith("+" + Tag.component_tag.Value) || tagforgivenelb.Value.includes("+" + Tag.component_tag.Value + "+") || tagforgivenelb.Value.startsWith(Tag.component_tag.Value + "+") || tagforgivenelb.Value === Tag.component_tag.Value)) {
                                    hitcomponent = true;
                                }

                                if (!(hitenv && hitproject && hitcomponent)) {
                                    _context3.next = 22;
                                    break;
                                }

                                elbvalues["Tags"] = tagelbdata.TagDescriptions[0].Tags;
                                temptoreturn.push(elbvalues);
                                return _context3.abrupt('break', 25);

                            case 22:
                                _iteratorNormalCompletion5 = true;
                                _context3.next = 13;
                                break;

                            case 25:
                                _context3.next = 31;
                                break;

                            case 27:
                                _context3.prev = 27;
                                _context3.t0 = _context3['catch'](11);
                                _didIteratorError5 = true;
                                _iteratorError5 = _context3.t0;

                            case 31:
                                _context3.prev = 31;
                                _context3.prev = 32;

                                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                    _iterator5.return();
                                }

                            case 34:
                                _context3.prev = 34;

                                if (!_didIteratorError5) {
                                    _context3.next = 37;
                                    break;
                                }

                                throw _iteratorError5;

                            case 37:
                                return _context3.finish(34);

                            case 38:
                                return _context3.finish(31);

                            case 39:
                                resolve(elbvalues);

                            case 40:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[11, 27, 31, 39], [32,, 34, 38]]);
            }));

            return function (_x5, _x6) {
                return _ref3.apply(this, arguments);
            };
        }());
    });
    return getTagPromise;
}

/// Add instance
var seperator = "+"; // the seperator for distinguishing 2 components
function AddInstance(tagData, callback) {
    //tagData is of the
    //type {compType:Ec2/Elb/S3 , tag:tag ,identifer:identifier }
    /////////// tag is of the format {project_tag:{},component_tag:{},env_tag:{}}
    switch (tagData.compType) {
        case 'Ec2':
            var params = {
                Filters: [{
                    Name: "resource-id",
                    Values: [tagData.identifier]
                }]
            };
            ec2.describeTags(params, function (err, data) {
                if (err) {
                    callback(err);
                    console.log(err, err.stack); // an error occurred
                } else {
                    var isFoundComp = false;
                    // console.log("data we got for ec2 query is ",data)
                    // callback(false,data);
                    //return false;
                    var toreturn = [];
                    data.Tags.forEach(function (value) {
                        if (value.Key === 'Components') {
                            tagData.tag.component_tag.Value = value.Value + seperator + tagData.tag.component_tag.Value;
                            toreturn.push(tagData.tag.component_tag);
                            isFoundComp = true;
                        }
                    });

                    if (!isFoundComp) {
                        toreturn.push(tagData.tag.component_tag);
                    }
                    toreturn.push(tagData.tag.project_tag);

                    toreturn.push(tagData.tag.env_tag);

                    tagData.tag = toreturn;
                    AddInstancetag(tagData, callback);
                    console.log(data); // successful response
                }
            });
            return true;

        case 'Elb':
            var params = {
                LoadBalancerNames: [tagData.identifier]
            };
            elb.describeTags(params, function (err, data) {
                if (err) {
                    callback(err);
                    console.log(err, err.stack); // an error occurred
                } else {
                    // callback(false,data.TagDescriptions[0].Tags);
                    // return false;
                    var isFoundComp = false;
                    var toreturn = [];
                    data.TagDescriptions[0].Tags.forEach(function (value) {
                        if (value.Key === 'Components') {
                            tagData.tag.component_tag.Value = value.Value + seperator + tagData.tag.component_tag.Value;
                            toreturn.push(tagData.tag.component_tag);
                            isFoundComp = true;
                        }
                    });
                    if (!isFoundComp) {
                        toreturn.push(tagData.tag.component_tag);
                    }
                    toreturn.push(tagData.tag.project_tag);

                    toreturn.push(tagData.tag.env_tag);

                    tagData.tag = toreturn;
                    AddInstancetag(tagData, callback);
                    console.log(data); // successful response
                }
            });
            return true;

        case 'S3':
            var params = {
                Bucket: tagData.identifier
            };
            s3.getBucketTagging(params, function (err, data) {
                if (err) {
                    callback(err);
                    console.log(err, err.stack); // an error occurred
                } else {
                    var isFoundComp = false;
                    var isFoundProj = false;
                    var isFoundEnv = false;
                    data.TagSet.forEach(function (value) {
                        if (value.Key === 'Components') {
                            value.Value = value.Value + seperator + tagData.tag.component_tag.Value;
                            isFoundComp = true;
                        }
                        if (value.Key === 'Project_Name') {
                            value.Value = tagData.tag.project_tag.Value;
                            isFoundProj = true;
                        }
                        if (value.Key === 'Env') {
                            value.Value = tagData.tag.env_tag.Value;
                            isFoundEnv = true;
                        }
                    });
                    if (!isFoundComp) {
                        data.TagSet.push(tagData.tag.component_tag);
                    }
                    if (!isFoundProj) {
                        data.TagSet.push(tagData.tag.project_tag);
                    }
                    if (!isFoundEnv) {
                        data.TagSet.push(tagData.tag.env_tag);
                    }
                    tagData.tag = data.TagSet;
                    AddInstancetag(tagData, callback);
                    console.log(data); // successful response
                }
            });
            return true;

        default:
            return false;
    }
}

/// Add Instance tag service
function AddInstancetag(tagData, callback) {
    //tagData is of the
    //type {compType:Ec2/Elb/S3 , tag:[{Key:"Component",Value:"sda"}] ,identifer:identifier }

    if (tagData.compType === 'Ec2') {
        var params = {
            Resources: [tagData.identifier],
            Tags: tagData.tag
        };
        ec2.createTags(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                callback(err);
            } // an error occurred
            else {
                    console.log(data);
                    callback(false, data);
                } // successful response
        });
    } else {
        if (tagData.compType === 'Elb') {
            // callback(false,tagData.tag);
            // return false;
            var params = {
                LoadBalancerNames: [tagData.identifier],
                Tags: tagData.tag
            };
            elb.addTags(params, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                    callback(err);
                } // an error occurred
                else {
                        console.log(data);
                        callback(false, data);
                    } // successful response
            });
        } else {
            if (tagData.compType === 'S3') {
                var params = {
                    Bucket: tagData.identifier,
                    Tagging: {
                        TagSet: tagData.tag
                    }
                };
                s3.putBucketTagging(params, function (err, data) {
                    if (err) {
                        console.log(err, err.stack);
                        callback(err);
                    } // an error occurred
                    else {
                            console.log(data);
                            callback(false, data);
                        } // successful response
                });
            } else {
                console.log("Shouldnt be here :: InstanceService line 448 :: Maybe compType was not \
                Ec2/Elb/S3   ");
            }
        }
    }
}

function getAllElbEc2S3(callback) {
    //callback(false,"Ignore_this_name+Ignore_this_nametest+Ignore_this_nametest".includes("Ignore_this_name"));
    var instanceList = [];
    var toReturn = [];
    ec2.describeInstances({}, function (err, ec2data) {
        if (err) {
            instanceList.push(err);
        } else {
            ec2data.Reservations.forEach(function (reservation) {
                reservation.Instances.forEach(function (instance) {
                    instanceList.push(instance);
                });
            });
            toReturn.push({ type: "ec2", data: instanceList });
            elb.describeLoadBalancers({}, function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(err, elbdata) {
                    var loadBalancerInstancesList, temptoreturn, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, elbvalues, temp;

                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    loadBalancerInstancesList = [];

                                    if (!err) {
                                        _context5.next = 6;
                                        break;
                                    }

                                    console.log(err, err.stack); // an error occurred
                                    loadBalancerInstancesList.push(err);
                                    _context5.next = 37;
                                    break;

                                case 6:
                                    temptoreturn = [];

                                    elbdata.LoadBalancerDescriptions.forEach(function (loadBalancerDescription) {
                                        loadBalancerInstancesList.push(loadBalancerDescription);
                                    });
                                    _iteratorNormalCompletion6 = true;
                                    _didIteratorError6 = false;
                                    _iteratorError6 = undefined;
                                    _context5.prev = 11;
                                    _iterator6 = loadBalancerInstancesList[Symbol.iterator]();

                                case 13:
                                    if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                                        _context5.next = 21;
                                        break;
                                    }

                                    elbvalues = _step6.value;
                                    _context5.next = 17;
                                    return getAllElbTagInfo(elbvalues, loadBalancerInstancesList);

                                case 17:
                                    temp = _context5.sent;

                                case 18:
                                    _iteratorNormalCompletion6 = true;
                                    _context5.next = 13;
                                    break;

                                case 21:
                                    _context5.next = 27;
                                    break;

                                case 23:
                                    _context5.prev = 23;
                                    _context5.t0 = _context5['catch'](11);
                                    _didIteratorError6 = true;
                                    _iteratorError6 = _context5.t0;

                                case 27:
                                    _context5.prev = 27;
                                    _context5.prev = 28;

                                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                        _iterator6.return();
                                    }

                                case 30:
                                    _context5.prev = 30;

                                    if (!_didIteratorError6) {
                                        _context5.next = 33;
                                        break;
                                    }

                                    throw _iteratorError6;

                                case 33:
                                    return _context5.finish(30);

                                case 34:
                                    return _context5.finish(27);

                                case 35:
                                    toReturn.push({ type: "elb", data: loadBalancerInstancesList });
                                    s3.listBuckets({}, function () {
                                        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(err, s3data) {
                                            var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, s3values, temp1;

                                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                                while (1) {
                                                    switch (_context4.prev = _context4.next) {
                                                        case 0:
                                                            if (!err) {
                                                                _context4.next = 6;
                                                                break;
                                                            }

                                                            console.log(err, err.stack);
                                                            toReturn.push({ type: "s3", data: err });
                                                            callback(false, toReturn);
                                                            _context4.next = 35;
                                                            break;

                                                        case 6:
                                                            _iteratorNormalCompletion7 = true;
                                                            _didIteratorError7 = false;
                                                            _iteratorError7 = undefined;
                                                            _context4.prev = 9;
                                                            _iterator7 = s3data.Buckets[Symbol.iterator]();

                                                        case 11:
                                                            if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                                                                _context4.next = 19;
                                                                break;
                                                            }

                                                            s3values = _step7.value;
                                                            _context4.next = 15;
                                                            return getAllS3TagInfo(s3values, s3data.Buckets);

                                                        case 15:
                                                            temp1 = _context4.sent;

                                                        case 16:
                                                            _iteratorNormalCompletion7 = true;
                                                            _context4.next = 11;
                                                            break;

                                                        case 19:
                                                            _context4.next = 25;
                                                            break;

                                                        case 21:
                                                            _context4.prev = 21;
                                                            _context4.t0 = _context4['catch'](9);
                                                            _didIteratorError7 = true;
                                                            _iteratorError7 = _context4.t0;

                                                        case 25:
                                                            _context4.prev = 25;
                                                            _context4.prev = 26;

                                                            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                                                _iterator7.return();
                                                            }

                                                        case 28:
                                                            _context4.prev = 28;

                                                            if (!_didIteratorError7) {
                                                                _context4.next = 31;
                                                                break;
                                                            }

                                                            throw _iteratorError7;

                                                        case 31:
                                                            return _context4.finish(28);

                                                        case 32:
                                                            return _context4.finish(25);

                                                        case 33:
                                                            toReturn.push({ type: "s3", data: s3data.Buckets });
                                                            callback(false, toReturn);

                                                        case 35:
                                                        case 'end':
                                                            return _context4.stop();
                                                    }
                                                }
                                            }, _callee4, this, [[9, 21, 25, 33], [26,, 28, 32]]);
                                        }));

                                        return function (_x9, _x10) {
                                            return _ref5.apply(this, arguments);
                                        };
                                    }());

                                case 37:
                                case 'end':
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this, [[11, 23, 27, 35], [28,, 30, 34]]);
                }));

                return function (_x7, _x8) {
                    return _ref4.apply(this, arguments);
                };
            }());
        }
    });
}

function getAllElbTagInfo(elbvalues, temptoreturn) {
    var paramstempelb = {
        LoadBalancerNames: [elbvalues.LoadBalancerName]
    };
    var getTagPromise = new Promise(function (resolve, reject) {
        elb.describeTags(paramstempelb, function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(err, tagelbdata) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                //todo tommorow make this thing async
                                if (err) {
                                    console.log("error", err);
                                    elbvalues["Tags"] = [];
                                    resolve();
                                } else {
                                    console.log("ELB " + elbvalues.LoadBalancerName + " TAGS: ", tagelbdata.TagDescriptions[0].Tags);
                                    elbvalues["Tags"] = tagelbdata.TagDescriptions[0].Tags;
                                    resolve(elbvalues);
                                }

                            case 1:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            return function (_x11, _x12) {
                return _ref6.apply(this, arguments);
            };
        }());
    });
    return getTagPromise;
}

function getAllS3TagInfo(s3values, temptoreturn) {
    var params = {
        Bucket: s3values.Name
    };
    var getTagPromise = new Promise(function (resolve, reject) {
        s3.getBucketTagging(params, function (err, data) {
            if (err) {
                s3values["Tags"] = [];
                resolve(s3values);
            } else {
                console.log("S3 " + s3values.Name + " TAGS: ", data.TagSet);
                s3values["Tags"] = data.TagSet;
                resolve(s3values);
            }
        });
    });
    return getTagPromise;
}

function AddTagForUntaggedInstances(tagData, callback) {
    switch (tagData.compType) {
        case 'Ec2':
            var params = {
                Filters: [{
                    Name: "resource-id",
                    Values: [tagData.identifier]
                }]
            };
            ec2.describeTags(params, function (err, data) {
                if (err) {
                    callback(err);
                    console.log(err, err.stack); // an error occurred
                } else {
                    var isFoundComp = false;
                    // console.log("data we got for ec2 query is ",data)
                    // callback(false,data);
                    //return false;
                    var toreturn = [];
                    data.Tags.forEach(function (value) {
                        if (value.Key === 'Components') {
                            toreturn.push(tagData.tag.component_tag);
                            isFoundComp = true;
                        }
                    });

                    if (!isFoundComp) {
                        toreturn.push(tagData.tag.component_tag);
                    }
                    toreturn.push(tagData.tag.project_tag);

                    toreturn.push(tagData.tag.env_tag);

                    tagData.tag = toreturn;
                    AddInstancetag(tagData, callback);
                    console.log(data); // successful response
                }
            });
            return true;

        case 'Elb':
            var params = {
                LoadBalancerNames: [tagData.identifier]
            };
            elb.describeTags(params, function (err, data) {
                if (err) {
                    callback(err);
                    console.log(err, err.stack); // an error occurred
                } else {
                    // callback(false,data.TagDescriptions[0].Tags);
                    // return false;
                    var isFoundComp = false;
                    var toreturn = [];
                    data.TagDescriptions[0].Tags.forEach(function (value) {
                        if (value.Key === 'Components') {
                            toreturn.push(tagData.tag.component_tag);
                            isFoundComp = true;
                        }
                    });
                    if (!isFoundComp) {
                        toreturn.push(tagData.tag.component_tag);
                    }
                    toreturn.push(tagData.tag.project_tag);

                    toreturn.push(tagData.tag.env_tag);

                    tagData.tag = toreturn;
                    AddInstancetag(tagData, callback);
                    console.log(data); // successful response
                }
            });
            return true;

        case 'S3':
            var params = {
                Bucket: tagData.identifier
            };
            s3.getBucketTagging(params, function (err, data) {
                if (err) {
                    callback(err);
                    console.log(err, err.stack); // an error occurred
                } else {
                    var isFoundComp = false;
                    var isFoundProj = false;
                    var isFoundEnv = false;
                    data.TagSet.forEach(function (value) {
                        if (value.Key === 'Components') {
                            value.Value = tagData.tag.component_tag.Value;
                            isFoundComp = true;
                        }
                        if (value.Key === 'Project_Name') {
                            value.Value = tagData.tag.project_tag.Value;
                            isFoundProj = true;
                        }
                        if (value.Key === 'Env') {
                            value.Value = tagData.tag.env_tag.Value;
                            isFoundEnv = true;
                        }
                    });
                    if (!isFoundComp) {
                        data.TagSet.push(tagData.tag.component_tag);
                    }
                    if (!isFoundProj) {
                        data.TagSet.push(tagData.tag.project_tag);
                    }
                    if (!isFoundEnv) {
                        data.TagSet.push(tagData.tag.env_tag);
                    }
                    tagData.tag = data.TagSet;
                    AddInstancetag(tagData, callback);
                    console.log(data); // successful response
                }
            });
            return true;

        default:
            return false;
    }
}