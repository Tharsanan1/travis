'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var fillWithChildren = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(node) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        return _context3.abrupt('return', new Promise(function () {
                            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve) {
                                var componentLocal, childNodeList, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, childComponent, childObjectForList;

                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                    while (1) {
                                        switch (_context2.prev = _context2.next) {
                                            case 0:
                                                componentLocal = { node: node, children: [] };
                                                _context2.next = 3;
                                                return findChildComponents(node._id);

                                            case 3:
                                                childNodeList = _context2.sent;

                                                //console.log(childNodeList);
                                                _iteratorNormalCompletion2 = true;
                                                _didIteratorError2 = false;
                                                _iteratorError2 = undefined;
                                                _context2.prev = 7;
                                                _iterator2 = childNodeList[Symbol.iterator]();

                                            case 9:
                                                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                                    _context2.next = 18;
                                                    break;
                                                }

                                                childComponent = _step2.value;
                                                _context2.next = 13;
                                                return fillWithChildren(childComponent);

                                            case 13:
                                                childObjectForList = _context2.sent;

                                                componentLocal.children.push(childObjectForList);

                                            case 15:
                                                _iteratorNormalCompletion2 = true;
                                                _context2.next = 9;
                                                break;

                                            case 18:
                                                _context2.next = 24;
                                                break;

                                            case 20:
                                                _context2.prev = 20;
                                                _context2.t0 = _context2['catch'](7);
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
                                                resolve(componentLocal);

                                            case 33:
                                            case 'end':
                                                return _context2.stop();
                                        }
                                    }
                                }, _callee2, _this, [[7, 20, 24, 32], [25,, 27, 31]]);
                            }));

                            return function (_x4) {
                                return _ref3.apply(this, arguments);
                            };
                        }()));

                    case 1:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function fillWithChildren(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

exports.getWholeTagTree = getWholeTagTree;
exports.getTagList = getTagList;
exports.getInstancesWithTags = getInstancesWithTags;
exports.getUntaggedInstances = getUntaggedInstances;

var _componentQuery = require('../queries/componentQuery');

var _tags = require('./tags');

var tagKeys = _interopRequireWildcard(_tags);

var _AWSRepo = require('../AWSRepoLayer/AWSRepo');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getWholeTagTree() {
    return new Promise(function (resolve, reject) {
        (0, _componentQuery.getRootComponents)(function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, rootComponents) {
                var componentTree, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, component, branchWithNodes;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (err) {
                                    reject(err);
                                }
                                componentTree = [];
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context.prev = 5;
                                _iterator = rootComponents[Symbol.iterator]();

                            case 7:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                    _context.next = 16;
                                    break;
                                }

                                component = _step.value;
                                _context.next = 11;
                                return fillWithChildren(component);

                            case 11:
                                branchWithNodes = _context.sent;

                                //console.log(branchWithNodes);
                                componentTree.push(branchWithNodes);

                            case 13:
                                _iteratorNormalCompletion = true;
                                _context.next = 7;
                                break;

                            case 16:
                                _context.next = 22;
                                break;

                            case 18:
                                _context.prev = 18;
                                _context.t0 = _context['catch'](5);
                                _didIteratorError = true;
                                _iteratorError = _context.t0;

                            case 22:
                                _context.prev = 22;
                                _context.prev = 23;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }

                            case 25:
                                _context.prev = 25;

                                if (!_didIteratorError) {
                                    _context.next = 28;
                                    break;
                                }

                                throw _iteratorError;

                            case 28:
                                return _context.finish(25);

                            case 29:
                                return _context.finish(22);

                            case 30:
                                resolve(componentTree);

                            case 31:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[5, 18, 22, 30], [23,, 25, 29]]);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
    });
}

function findChildComponents(id) {
    return new Promise(function (resolve) {
        (0, _componentQuery.getChildrenByParentId)(id, function (err, data) {
            if (!err) {
                resolve(data);
            } else {
                //console.log(err);
                resolve([]);
            }
        });
    });
}

function getTagList() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
        var tagList = [];
        getWholeTagTree().then(function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(tree) {
                var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _loop, _iterator3, _step3;

                return regeneratorRuntime.wrap(function _callee4$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _iteratorNormalCompletion3 = true;
                                _didIteratorError3 = false;
                                _iteratorError3 = undefined;
                                _context6.prev = 3;
                                _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                                    var project, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _loop2, _iterator4, _step4;

                                    return regeneratorRuntime.wrap(function _loop$(_context5) {
                                        while (1) {
                                            switch (_context5.prev = _context5.next) {
                                                case 0:
                                                    project = _step3.value;
                                                    _iteratorNormalCompletion4 = true;
                                                    _didIteratorError4 = false;
                                                    _iteratorError4 = undefined;
                                                    _context5.prev = 4;
                                                    _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2() {
                                                        var env;
                                                        return regeneratorRuntime.wrap(function _loop2$(_context4) {
                                                            while (1) {
                                                                switch (_context4.prev = _context4.next) {
                                                                    case 0:
                                                                        env = _step4.value;
                                                                        _context4.next = 3;
                                                                        return traverseToDepth(env.children, env.node).then(function (productWithVersion) {
                                                                            //console.log("CHECK THIS", productWithVersion);       //should remove
                                                                            var tag = {};

                                                                            //add project_name tag
                                                                            tag.project_tag = {
                                                                                Key: tagKeys.project_Tag,
                                                                                Value: project.node.name
                                                                            };

                                                                            //add env_tag to tag
                                                                            tag.env_tag = {
                                                                                Key: tagKeys.env_Tag,
                                                                                Value: env.node.name
                                                                            };
                                                                            var componentTags = [];

                                                                            var _iteratorNormalCompletion5 = true;
                                                                            var _didIteratorError5 = false;
                                                                            var _iteratorError5 = undefined;

                                                                            try {
                                                                                for (var _iterator5 = productWithVersion[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                                                                    var pv = _step5.value;

                                                                                    componentTags.push(pv);
                                                                                }

                                                                                //add components tag to tags
                                                                            } catch (err) {
                                                                                _didIteratorError5 = true;
                                                                                _iteratorError5 = err;
                                                                            } finally {
                                                                                try {
                                                                                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                                                                        _iterator5.return();
                                                                                    }
                                                                                } finally {
                                                                                    if (_didIteratorError5) {
                                                                                        throw _iteratorError5;
                                                                                    }
                                                                                }
                                                                            }

                                                                            tag.component_tag = {
                                                                                Key: tagKeys.components_Tag,
                                                                                Value: componentTags
                                                                            };

                                                                            tagList.push(tag);
                                                                        });

                                                                    case 3:
                                                                    case 'end':
                                                                        return _context4.stop();
                                                                }
                                                            }
                                                        }, _loop2, _this2);
                                                    });
                                                    _iterator4 = project.children[Symbol.iterator]();

                                                case 7:
                                                    if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                                                        _context5.next = 12;
                                                        break;
                                                    }

                                                    return _context5.delegateYield(_loop2(), 't0', 9);

                                                case 9:
                                                    _iteratorNormalCompletion4 = true;
                                                    _context5.next = 7;
                                                    break;

                                                case 12:
                                                    _context5.next = 18;
                                                    break;

                                                case 14:
                                                    _context5.prev = 14;
                                                    _context5.t1 = _context5['catch'](4);
                                                    _didIteratorError4 = true;
                                                    _iteratorError4 = _context5.t1;

                                                case 18:
                                                    _context5.prev = 18;
                                                    _context5.prev = 19;

                                                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                                        _iterator4.return();
                                                    }

                                                case 21:
                                                    _context5.prev = 21;

                                                    if (!_didIteratorError4) {
                                                        _context5.next = 24;
                                                        break;
                                                    }

                                                    throw _iteratorError4;

                                                case 24:
                                                    return _context5.finish(21);

                                                case 25:
                                                    return _context5.finish(18);

                                                case 26:
                                                case 'end':
                                                    return _context5.stop();
                                            }
                                        }
                                    }, _loop, _this2, [[4, 14, 18, 26], [19,, 21, 25]]);
                                });
                                _iterator3 = tree[Symbol.iterator]();

                            case 6:
                                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                    _context6.next = 11;
                                    break;
                                }

                                return _context6.delegateYield(_loop(), 't0', 8);

                            case 8:
                                _iteratorNormalCompletion3 = true;
                                _context6.next = 6;
                                break;

                            case 11:
                                _context6.next = 17;
                                break;

                            case 13:
                                _context6.prev = 13;
                                _context6.t1 = _context6['catch'](3);
                                _didIteratorError3 = true;
                                _iteratorError3 = _context6.t1;

                            case 17:
                                _context6.prev = 17;
                                _context6.prev = 18;

                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return();
                                }

                            case 20:
                                _context6.prev = 20;

                                if (!_didIteratorError3) {
                                    _context6.next = 23;
                                    break;
                                }

                                throw _iteratorError3;

                            case 23:
                                return _context6.finish(20);

                            case 24:
                                return _context6.finish(17);

                            case 25:
                                resolve(tagList);

                            case 26:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee4, _this2, [[3, 13, 17, 25], [18,, 20, 24]]);
            }));

            return function (_x5) {
                return _ref4.apply(this, arguments);
            };
        }()).catch(function (err) {
            resolve([]);
        });
    });
}

function traverseToDepth(nodes, parentNode) {
    var _this3 = this;

    return new Promise(function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject) {
            var leafNodes, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, childNode, versions, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, v;

            return regeneratorRuntime.wrap(function _callee5$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            leafNodes = [];
                            _iteratorNormalCompletion6 = true;
                            _didIteratorError6 = false;
                            _iteratorError6 = undefined;
                            _context7.prev = 4;
                            _iterator6 = nodes[Symbol.iterator]();

                        case 6:
                            if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                                _context7.next = 37;
                                break;
                            }

                            childNode = _step6.value;

                            if (!(childNode.children.length === 0)) {
                                _context7.next = 12;
                                break;
                            }

                            // console.log("Child---->>>>>", childNode.node.name, parentNode.name);     //should remove
                            if (childNode.node.type === 'VER') {
                                leafNodes.push(parentNode.name + "_" + childNode.node.name);
                            }

                            _context7.next = 34;
                            break;

                        case 12:
                            _context7.next = 14;
                            return traverseToDepth(childNode.children, childNode.node);

                        case 14:
                            versions = _context7.sent;
                            _iteratorNormalCompletion7 = true;
                            _didIteratorError7 = false;
                            _iteratorError7 = undefined;
                            _context7.prev = 18;

                            for (_iterator7 = versions[Symbol.iterator](); !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                v = _step7.value;

                                leafNodes.push(v);
                            }
                            _context7.next = 26;
                            break;

                        case 22:
                            _context7.prev = 22;
                            _context7.t0 = _context7['catch'](18);
                            _didIteratorError7 = true;
                            _iteratorError7 = _context7.t0;

                        case 26:
                            _context7.prev = 26;
                            _context7.prev = 27;

                            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                _iterator7.return();
                            }

                        case 29:
                            _context7.prev = 29;

                            if (!_didIteratorError7) {
                                _context7.next = 32;
                                break;
                            }

                            throw _iteratorError7;

                        case 32:
                            return _context7.finish(29);

                        case 33:
                            return _context7.finish(26);

                        case 34:
                            _iteratorNormalCompletion6 = true;
                            _context7.next = 6;
                            break;

                        case 37:
                            _context7.next = 43;
                            break;

                        case 39:
                            _context7.prev = 39;
                            _context7.t1 = _context7['catch'](4);
                            _didIteratorError6 = true;
                            _iteratorError6 = _context7.t1;

                        case 43:
                            _context7.prev = 43;
                            _context7.prev = 44;

                            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                _iterator6.return();
                            }

                        case 46:
                            _context7.prev = 46;

                            if (!_didIteratorError6) {
                                _context7.next = 49;
                                break;
                            }

                            throw _iteratorError6;

                        case 49:
                            return _context7.finish(46);

                        case 50:
                            return _context7.finish(43);

                        case 51:
                            // console.log("LEAF********************************", leafNodes);   //should remove
                            resolve(leafNodes);

                        case 52:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee5, _this3, [[4, 39, 43, 51], [18, 22, 26, 34], [27,, 29, 33], [44,, 46, 50]]);
        }));

        return function (_x6, _x7) {
            return _ref5.apply(this, arguments);
        };
    }());
}

function getElbEC2S3(tags) {
    return new Promise(function (resolve, reject) {
        (0, _AWSRepo.filterElbEc2S3)(tags, function (err, instanceData) {
            if (err) {
                reject(err);
            } else {
                resolve(instanceData);
            }
        });
    });
}

function getInstancesWithTags() {
    var _this4 = this;

    console.log('from getInstancesWithTags');
    return new Promise(function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resolve, reject) {
            var allInstancesWithTags, tagList, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, tag, instanceData, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, insList, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, ec2, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, elb, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, s3;

            return regeneratorRuntime.wrap(function _callee6$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            console.log('from getInstancesWithTags====================');
                            allInstancesWithTags = { ec2: [], elb: [], s3: [] }; //this will contain that list

                            _context8.next = 4;
                            return getTagList();

                        case 4:
                            tagList = _context8.sent;


                            console.log("tag lit------------------>", tagList);
                            _iteratorNormalCompletion8 = true;
                            _didIteratorError8 = false;
                            _iteratorError8 = undefined;
                            _context8.prev = 9;
                            _iterator8 = tagList[Symbol.iterator]();

                        case 11:
                            if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                                _context8.next = 108;
                                break;
                            }

                            tag = _step8.value;

                            console.log("from getInstancesWithTags", tag);
                            //call function to get ec2,elb,s3 with each tag
                            instanceData = [];
                            _context8.next = 17;
                            return getElbEC2S3(tag);

                        case 17:
                            instanceData = _context8.sent;


                            console.log("cvbwhfvbhjefbhjefbvhjeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef");
                            console.log(instanceData);

                            _iteratorNormalCompletion9 = true;
                            _didIteratorError9 = false;
                            _iteratorError9 = undefined;
                            _context8.prev = 23;
                            _iterator9 = instanceData[Symbol.iterator]();

                        case 25:
                            if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
                                _context8.next = 91;
                                break;
                            }

                            insList = _step9.value;

                            if (!(insList.type === 'ec2')) {
                                _context8.next = 88;
                                break;
                            }

                            _iteratorNormalCompletion10 = true;
                            _didIteratorError10 = false;
                            _iteratorError10 = undefined;
                            _context8.prev = 31;

                            for (_iterator10 = insList.data[Symbol.iterator](); !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                ec2 = _step10.value;

                                if (!allInstancesWithTags.ec2.includes(ec2)) {
                                    allInstancesWithTags.push(ec2);
                                }
                            }
                            _context8.next = 39;
                            break;

                        case 35:
                            _context8.prev = 35;
                            _context8.t0 = _context8['catch'](31);
                            _didIteratorError10 = true;
                            _iteratorError10 = _context8.t0;

                        case 39:
                            _context8.prev = 39;
                            _context8.prev = 40;

                            if (!_iteratorNormalCompletion10 && _iterator10.return) {
                                _iterator10.return();
                            }

                        case 42:
                            _context8.prev = 42;

                            if (!_didIteratorError10) {
                                _context8.next = 45;
                                break;
                            }

                            throw _iteratorError10;

                        case 45:
                            return _context8.finish(42);

                        case 46:
                            return _context8.finish(39);

                        case 47:
                            if (!(insList.type === 'elb')) {
                                _context8.next = 67;
                                break;
                            }

                            _iteratorNormalCompletion11 = true;
                            _didIteratorError11 = false;
                            _iteratorError11 = undefined;
                            _context8.prev = 51;

                            for (_iterator11 = insList.data[Symbol.iterator](); !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                                elb = _step11.value;

                                if (!allInstancesWithTags.elb.includes(elb) && !allInstancesWithTags.includes(elb)) {
                                    allInstancesWithTags.push(elb);
                                }
                            }

                            _context8.next = 59;
                            break;

                        case 55:
                            _context8.prev = 55;
                            _context8.t1 = _context8['catch'](51);
                            _didIteratorError11 = true;
                            _iteratorError11 = _context8.t1;

                        case 59:
                            _context8.prev = 59;
                            _context8.prev = 60;

                            if (!_iteratorNormalCompletion11 && _iterator11.return) {
                                _iterator11.return();
                            }

                        case 62:
                            _context8.prev = 62;

                            if (!_didIteratorError11) {
                                _context8.next = 65;
                                break;
                            }

                            throw _iteratorError11;

                        case 65:
                            return _context8.finish(62);

                        case 66:
                            return _context8.finish(59);

                        case 67:
                            if (!(insList.type === 's3')) {
                                _context8.next = 88;
                                break;
                            }

                            console.log("1234567890");
                            _iteratorNormalCompletion12 = true;
                            _didIteratorError12 = false;
                            _iteratorError12 = undefined;
                            _context8.prev = 72;
                            for (_iterator12 = insList.data[Symbol.iterator](); !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                s3 = _step12.value;

                                if (!allInstancesWithTags.s3.includes(s3)) {
                                    allInstancesWithTags.push(s3);
                                }
                            }
                            _context8.next = 80;
                            break;

                        case 76:
                            _context8.prev = 76;
                            _context8.t2 = _context8['catch'](72);
                            _didIteratorError12 = true;
                            _iteratorError12 = _context8.t2;

                        case 80:
                            _context8.prev = 80;
                            _context8.prev = 81;

                            if (!_iteratorNormalCompletion12 && _iterator12.return) {
                                _iterator12.return();
                            }

                        case 83:
                            _context8.prev = 83;

                            if (!_didIteratorError12) {
                                _context8.next = 86;
                                break;
                            }

                            throw _iteratorError12;

                        case 86:
                            return _context8.finish(83);

                        case 87:
                            return _context8.finish(80);

                        case 88:
                            _iteratorNormalCompletion9 = true;
                            _context8.next = 25;
                            break;

                        case 91:
                            _context8.next = 97;
                            break;

                        case 93:
                            _context8.prev = 93;
                            _context8.t3 = _context8['catch'](23);
                            _didIteratorError9 = true;
                            _iteratorError9 = _context8.t3;

                        case 97:
                            _context8.prev = 97;
                            _context8.prev = 98;

                            if (!_iteratorNormalCompletion9 && _iterator9.return) {
                                _iterator9.return();
                            }

                        case 100:
                            _context8.prev = 100;

                            if (!_didIteratorError9) {
                                _context8.next = 103;
                                break;
                            }

                            throw _iteratorError9;

                        case 103:
                            return _context8.finish(100);

                        case 104:
                            return _context8.finish(97);

                        case 105:
                            _iteratorNormalCompletion8 = true;
                            _context8.next = 11;
                            break;

                        case 108:
                            _context8.next = 114;
                            break;

                        case 110:
                            _context8.prev = 110;
                            _context8.t4 = _context8['catch'](9);
                            _didIteratorError8 = true;
                            _iteratorError8 = _context8.t4;

                        case 114:
                            _context8.prev = 114;
                            _context8.prev = 115;

                            if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                _iterator8.return();
                            }

                        case 117:
                            _context8.prev = 117;

                            if (!_didIteratorError8) {
                                _context8.next = 120;
                                break;
                            }

                            throw _iteratorError8;

                        case 120:
                            return _context8.finish(117);

                        case 121:
                            return _context8.finish(114);

                        case 122:

                            resolve(allInstancesWithTags);

                        case 123:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee6, _this4, [[9, 110, 114, 122], [23, 93, 97, 105], [31, 35, 39, 47], [40,, 42, 46], [51, 55, 59, 67], [60,, 62, 66], [72, 76, 80, 88], [81,, 83, 87], [98,, 100, 104], [115,, 117, 121]]);
        }));

        return function (_x8, _x9) {
            return _ref6.apply(this, arguments);
        };
    }());
}

function getAllInstances() {
    return new Promise(function (resolve, reject) {
        (0, _AWSRepo.getAllElbEc2S3)(function (err, instances) {
            if (err) {
                reject(err);
            } else {
                console.log('going to resolve : ', instances);
                resolve(instances);
            }
        });
    });
}

/*
export function getInstancesWithoutTags() {
    console.log('nfbefvejbejfvbkjekfvbjfev');
    return new Promise((resolve, reject) => {
        let unTaggedInstances = {ec2: [], elb: [], s3: []};
        getInstancesWithTags().then(taggedInstances => {
            let taggedEc2 = taggedInstances.ec2;
            let taggedElb = taggedInstances.elb;
            let taggedS3 = taggedInstances.s3;

            // get all instances
            getAllInstances().then(allInstances => {
                    let allEc2;
                    let allElb;
                    let allS3;
                    for (const group of allInstances) {
                        if (group.type === 'ec2') {
                            allEc2 = group.data;
                        } else if (group.type === 'elb') {
                            allElb = group.data;
                        } else if (group.type === 's3') {
                            allS3 = group.data;
                        }
                    }

                    for (const ec2 of allEc2) {
                        let isIn = false;
                        for (const tec2 of taggedEc2) {
                            if (ec2.InstanceId === tec2.InstanceId) {
                                isIn = true;
                                break;
                            }
                        }
                        if (!isIn) {
                            unTaggedInstances.ec2.push(ec2);

                        }
                    }

                    for (const elb of allElb) {
                        let isIn = false;
                        for (const telb of taggedElb) {
                            //LoadBalancerName
                            if (elb.LoadBalancerName === telb.LoadBalancerName) {
                                isIn = true;
                                break;
                            }
                        }
                        if (!isIn) {
                            unTaggedInstances.elb.push(elb);

                        }
                    }

                    for (const s3 of allS3) {
                        let isIn = false;
                        for (const ts3 of taggedS3) {
                            //S3
                            if (s3 === ts3) {
                                isIn = true;
                                break;
                            }
                        }
                        if (!isIn) {
                            unTaggedInstances.s3.push(s3);

                        }
                    }
                    resolve(unTaggedInstances);
                }
            ).catch(error => {
                reject(error)
            });

        }).catch(error => {
            reject(error);
        });
    });


}*/

function getUntaggedInstances() {
    var _this5 = this;

    return new Promise(function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
            var tagList, allInstances, allEc2, allElb, allS3, untaggedInstances, _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, group, unTaggedEc2, unTaggedElb, unTaggedS3;

            return regeneratorRuntime.wrap(function _callee7$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            _context9.next = 2;
                            return getTagList();

                        case 2:
                            tagList = _context9.sent;
                            _context9.next = 5;
                            return getAllInstances();

                        case 5:
                            allInstances = _context9.sent;

                            console.log('after await');
                            allEc2 = [];
                            allElb = [];
                            allS3 = [];
                            untaggedInstances = { ec2: [], elb: [], s3: [] };
                            _iteratorNormalCompletion13 = true;
                            _didIteratorError13 = false;
                            _iteratorError13 = undefined;
                            _context9.prev = 14;

                            for (_iterator13 = allInstances[Symbol.iterator](); !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                                group = _step13.value;

                                if (group.type === 'ec2') {
                                    allEc2 = group.data;
                                }
                                if (group.type === 'elb') {
                                    allElb = group.data;
                                }
                                if (group.type === 's3') {
                                    allS3 = group.data;
                                }
                            }

                            _context9.next = 22;
                            break;

                        case 18:
                            _context9.prev = 18;
                            _context9.t0 = _context9['catch'](14);
                            _didIteratorError13 = true;
                            _iteratorError13 = _context9.t0;

                        case 22:
                            _context9.prev = 22;
                            _context9.prev = 23;

                            if (!_iteratorNormalCompletion13 && _iterator13.return) {
                                _iterator13.return();
                            }

                        case 25:
                            _context9.prev = 25;

                            if (!_didIteratorError13) {
                                _context9.next = 28;
                                break;
                            }

                            throw _iteratorError13;

                        case 28:
                            return _context9.finish(25);

                        case 29:
                            return _context9.finish(22);

                        case 30:
                            unTaggedEc2 = getUntaggedEc2(allEc2, tagList);
                            unTaggedElb = getUntaggedElb(allElb, tagList);
                            unTaggedS3 = getUntaggedS3(allS3, tagList);
                            //console.log(unTaggedEc2);

                            untaggedInstances.ec2 = unTaggedEc2;
                            untaggedInstances.elb = unTaggedElb;
                            untaggedInstances.s3 = unTaggedS3;
                            console.log('difference-->', allEc2.length - unTaggedEc2.length, allElb.length - unTaggedElb.length, allS3.length - unTaggedS3.length);
                            resolve(untaggedInstances);

                        case 38:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee7, _this5, [[14, 18, 22, 30], [23,, 25, 29]]);
        }));

        return function (_x10, _x11) {
            return _ref7.apply(this, arguments);
        };
    }());
}

function getUntaggedEc2(allEc2, tags) {
    var unTaggedEc2 = [];
    var _iteratorNormalCompletion14 = true;
    var _didIteratorError14 = false;
    var _iteratorError14 = undefined;

    try {
        for (var _iterator14 = allEc2[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
            var ec2 = _step14.value;

            var isTagged = false;
            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
                var _loop3 = function _loop3() {
                    var tag = _step15.value;

                    var tagList = void 0;
                    if (ec2.Tags) {
                        tagList = ec2.Tags;
                    } else {
                        tagList = [];
                    }
                    var projectName = '';
                    var env = '';
                    var components = '';

                    var _iteratorNormalCompletion16 = true;
                    var _didIteratorError16 = false;
                    var _iteratorError16 = undefined;

                    try {
                        for (var _iterator16 = tagList[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                            var e = _step16.value;

                            if (e.Key === 'Project_Name') {
                                projectName = e.Value;
                            } else if (e.Key === 'Env') {
                                env = e.Value;
                            } else if (e.Key === 'Components') {
                                components = e.Value;
                            }
                        }
                    } catch (err) {
                        _didIteratorError16 = true;
                        _iteratorError16 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion16 && _iterator16.return) {
                                _iterator16.return();
                            }
                        } finally {
                            if (_didIteratorError16) {
                                throw _iteratorError16;
                            }
                        }
                    }

                    if (projectName !== '' && env !== '' && components !== '') {
                        if (projectName === tag.project_tag.Value) {
                            if (env === tag.env_tag.Value) {
                                var splitedTags = components.split('+');
                                splitedTags.map(function (t) {
                                    if (tag.component_tag.Value.includes(t)) {
                                        isTagged = true;
                                    }
                                });
                            }
                        }
                    }
                };

                for (var _iterator15 = tags[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                    _loop3();
                }
            } catch (err) {
                _didIteratorError15 = true;
                _iteratorError15 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion15 && _iterator15.return) {
                        _iterator15.return();
                    }
                } finally {
                    if (_didIteratorError15) {
                        throw _iteratorError15;
                    }
                }
            }

            if (!isTagged && !unTaggedEc2.includes(ec2)) {
                unTaggedEc2.push(ec2);
            }
        }
    } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion14 && _iterator14.return) {
                _iterator14.return();
            }
        } finally {
            if (_didIteratorError14) {
                throw _iteratorError14;
            }
        }
    }

    return unTaggedEc2;
}

function getUntaggedElb(allElb, tags) {
    var unTaggedElb = [];
    var _iteratorNormalCompletion17 = true;
    var _didIteratorError17 = false;
    var _iteratorError17 = undefined;

    try {
        for (var _iterator17 = allElb[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
            var elb = _step17.value;

            var isTagged = false;
            var _iteratorNormalCompletion18 = true;
            var _didIteratorError18 = false;
            var _iteratorError18 = undefined;

            try {
                var _loop4 = function _loop4() {
                    var tag = _step18.value;

                    var tagList = void 0;
                    if (elb.Tags) {
                        tagList = elb.Tags;
                    } else {
                        tagList = [];
                    }
                    var projectName = '';
                    var env = '';
                    var components = '';

                    var _iteratorNormalCompletion19 = true;
                    var _didIteratorError19 = false;
                    var _iteratorError19 = undefined;

                    try {
                        for (var _iterator19 = tagList[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                            var e = _step19.value;

                            if (e.Key === 'Project_Name') {
                                projectName = e.Value;
                            } else if (e.Key === 'Env') {
                                env = e.Value;
                            } else if (e.Key === 'Components') {
                                components = e.Value;
                            }
                        }
                    } catch (err) {
                        _didIteratorError19 = true;
                        _iteratorError19 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion19 && _iterator19.return) {
                                _iterator19.return();
                            }
                        } finally {
                            if (_didIteratorError19) {
                                throw _iteratorError19;
                            }
                        }
                    }

                    if (projectName !== '' && env !== '' && components !== '') {
                        if (projectName === tag.project_tag.Value) {
                            if (env === tag.env_tag.Value) {
                                var splitedTags = components.split('+');
                                splitedTags.map(function (t) {
                                    console.log(t);
                                    if (tag.component_tag.Value.includes(t)) {
                                        isTagged = true;
                                    }
                                });
                            }
                        }
                    }
                };

                for (var _iterator18 = tags[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                    _loop4();
                }
            } catch (err) {
                _didIteratorError18 = true;
                _iteratorError18 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion18 && _iterator18.return) {
                        _iterator18.return();
                    }
                } finally {
                    if (_didIteratorError18) {
                        throw _iteratorError18;
                    }
                }
            }

            if (!isTagged && !unTaggedElb.includes(elb)) {
                unTaggedElb.push(elb);
            }
        }
    } catch (err) {
        _didIteratorError17 = true;
        _iteratorError17 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion17 && _iterator17.return) {
                _iterator17.return();
            }
        } finally {
            if (_didIteratorError17) {
                throw _iteratorError17;
            }
        }
    }

    return unTaggedElb;
}

function getUntaggedS3(allS3, tags) {
    var unTaggedS3 = [];
    var _iteratorNormalCompletion20 = true;
    var _didIteratorError20 = false;
    var _iteratorError20 = undefined;

    try {
        for (var _iterator20 = allS3[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
            var s3 = _step20.value;

            var isTagged = false;
            var _iteratorNormalCompletion21 = true;
            var _didIteratorError21 = false;
            var _iteratorError21 = undefined;

            try {
                var _loop5 = function _loop5() {
                    var tag = _step21.value;

                    var tagList = void 0;
                    if (s3.Tags) {
                        tagList = s3.Tags;
                    } else {
                        tagList = [];
                    }
                    var projectName = '';
                    var env = '';
                    var components = '';

                    var _iteratorNormalCompletion22 = true;
                    var _didIteratorError22 = false;
                    var _iteratorError22 = undefined;

                    try {
                        for (var _iterator22 = tagList[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                            var e = _step22.value;

                            if (e.Key === 'Project_Name') {
                                projectName = e.Value;
                            } else if (e.Key === 'Env') {
                                env = e.Value;
                            } else if (e.Key === 'Components') {
                                components = e.Value;
                            }
                        }
                    } catch (err) {
                        _didIteratorError22 = true;
                        _iteratorError22 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion22 && _iterator22.return) {
                                _iterator22.return();
                            }
                        } finally {
                            if (_didIteratorError22) {
                                throw _iteratorError22;
                            }
                        }
                    }

                    if (projectName !== '' && env !== '' && components !== '') {
                        if (projectName === tag.project_tag.Value) {
                            if (env === tag.env_tag.Value) {
                                var splitedTags = components.split('+');
                                splitedTags.map(function (t) {
                                    console.log(t);
                                    if (tag.component_tag.Value.includes(t)) {
                                        isTagged = true;
                                    }
                                });
                            }
                        }
                    }
                };

                for (var _iterator21 = tags[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                    _loop5();
                }
            } catch (err) {
                _didIteratorError21 = true;
                _iteratorError21 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion21 && _iterator21.return) {
                        _iterator21.return();
                    }
                } finally {
                    if (_didIteratorError21) {
                        throw _iteratorError21;
                    }
                }
            }

            if (!isTagged && !unTaggedS3.includes(s3)) {
                unTaggedS3.push(s3);
            }
        }
    } catch (err) {
        _didIteratorError20 = true;
        _iteratorError20 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion20 && _iterator20.return) {
                _iterator20.return();
            }
        } finally {
            if (_didIteratorError20) {
                throw _iteratorError20;
            }
        }
    }

    return unTaggedS3;
}