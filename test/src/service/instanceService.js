"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filterElbEc2S3 = filterElbEc2S3;
exports.AddInstanceTag = AddInstanceTag;
exports.addTagForUntagged = addTagForUntagged;
exports.getAllEc2ElbS3 = getAllEc2ElbS3;
exports.stopEc2Instance = stopEc2Instance;
exports.startEc2Instance = startEc2Instance;
exports.restartEc2Instance = restartEc2Instance;
exports.getAllNodes = getAllNodes;
exports.updateNode = updateNode;
exports.deleteNode = deleteNode;
exports.createNode = createNode;
exports.getRootComponents = getRootComponents;
exports.findChildrenByParentId = findChildrenByParentId;
exports.getWholeTagTree = getWholeTagTree;

var _componentQuery = require("../queries/componentQuery");

var componentQueries = _interopRequireWildcard(_componentQuery);

var _AWSRepo = require("../AWSRepoLayer/AWSRepo");

var awsQueries = _interopRequireWildcard(_AWSRepo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//AWS queries

//filter ec2 elb annd s3 by given tag
function filterElbEc2S3(Tag, callback) {
    awsQueries.filterElbEc2S3(Tag, callback);
}

//adding tags to aws components
function AddInstanceTag(Tag, callback) {
    awsQueries.AddInstance(Tag, callback);
}

function addTagForUntagged(Tag, callback) {
    awsQueries.AddTagForUntaggedInstances(Tag, callback);
}

//getting all ec2 elb ss3
function getAllEc2ElbS3(callback) {
    awsQueries.getAllElbEc2S3(callback);
}

//for restarting ec2
function stopEc2Instance(InstanceId) {
    var params = {
        InstanceIds: ["".concat(InstanceId)]
    };
    ec2.stopInstances(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
    });
}

function startEc2Instance(InstanceId) {
    var params = {
        InstanceIds: ["".concat(InstanceId)]
    };
    ec2.startInstances(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
    });
}

function restartEc2Instance(InstanceId) {
    stopEc2Instance(InstanceId);
    startEc2Instance(InstanceId);
}

//db querying


//Get all nodes
function getAllNodes(callback) {
    componentQueries.showAllComponents(callback);
}

//Update Node
function updateNode(id, body, callback) {
    console.log("ID we get is " + id);
    componentQueries.updateComponent(id, body, callback);
}

//delete Node
function deleteNode(id, callback) {
    componentQueries.deleteComponent({ _id: id }, callback);
}

//Create Node
function createNode(body, callback) {
    componentQueries.createComponent(body, callback);
}

//find root components
function getRootComponents(callback) {
    componentQueries.getRootComponents(callback);
}

//find children by parent id
function findChildrenByParentId(parentId, callback) {
    componentQueries.getChildrenByParentId(parentId, callback);
}

//Get Whole Tag Tree
function getWholeTagTree(callback) {
    getRootComponents(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, data) {
            var componentTree, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, component, nodeWithChildren;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            componentTree = [];
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 4;
                            _iterator = data[Symbol.iterator]();

                        case 6:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 15;
                                break;
                            }

                            component = _step.value;
                            _context.next = 10;
                            return getNodeWithChildren(component);

                        case 10:
                            nodeWithChildren = _context.sent;

                            componentTree.push(nodeWithChildren);

                        case 12:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 15:
                            _context.next = 21;
                            break;

                        case 17:
                            _context.prev = 17;
                            _context.t0 = _context["catch"](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 21:
                            _context.prev = 21;
                            _context.prev = 22;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 24:
                            _context.prev = 24;

                            if (!_didIteratorError) {
                                _context.next = 27;
                                break;
                            }

                            throw _iteratorError;

                        case 27:
                            return _context.finish(24);

                        case 28:
                            return _context.finish(21);

                        case 29:
                            callback(componentTree);

                        case 30:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this, [[4, 17, 21, 29], [22,, 24, 28]]);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }());
}

function getNodeWithChildren(component) {
    var _this = this;

    return new Promise(function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve) {
            var tempComponent, childrenList, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, child, nodeWithChildren;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            tempComponent = { component: component, children: [] };
                            _context2.next = 3;
                            return findChildrenComponents(component._id);

                        case 3:
                            childrenList = _context2.sent;
                            _iteratorNormalCompletion2 = true;
                            _didIteratorError2 = false;
                            _iteratorError2 = undefined;
                            _context2.prev = 7;
                            _iterator2 = childrenList[Symbol.iterator]();

                        case 9:
                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                _context2.next = 18;
                                break;
                            }

                            child = _step2.value;
                            _context2.next = 13;
                            return getNodeWithChildren(child);

                        case 13:
                            nodeWithChildren = _context2.sent;

                            tempComponent.children.push(nodeWithChildren);

                        case 15:
                            _iteratorNormalCompletion2 = true;
                            _context2.next = 9;
                            break;

                        case 18:
                            _context2.next = 24;
                            break;

                        case 20:
                            _context2.prev = 20;
                            _context2.t0 = _context2["catch"](7);
                            _didIteratorError2 = true;
                            _iteratorError2 = _context2.t0;

                        case 24:
                            _context2.prev = 24;
                            _context2.prev = 25;

                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }

                        case 27:
                            _context2.prev = 27;

                            if (!_didIteratorError2) {
                                _context2.next = 30;
                                break;
                            }

                            throw _iteratorError2;

                        case 30:
                            return _context2.finish(27);

                        case 31:
                            return _context2.finish(24);

                        case 32:
                            resolve(tempComponent);

                        case 33:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, _this, [[7, 20, 24, 32], [25,, 27, 31]]);
        }));

        return function (_x3) {
            return _ref2.apply(this, arguments);
        };
    }());
}

function findChildrenComponents(id) {
    return new Promise(function (resolve) {
        componentQueries.getChildrenByParentId(id, function (err, data) {
            if (err) {
                resolve([]);
            } else {
                resolve(data);
            }
        });
    });
}

// export function getNodeFlowById(id, callback) {
//     let nodeFlow = [];
//     let isOver = false;
//     while (!isOver) {
//         componentQueries.getParentByChildId(id, function (err, data) {
//             nodeFlow.push(data);
//             callback(err,data);
//         });
//
//     }
// }