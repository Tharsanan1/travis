"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createComponent = createComponent;
exports.showAllComponents = showAllComponents;
exports.checkAComponentExist = checkAComponentExist;
exports.deleteComponents = deleteComponents;
exports.deleteComponent = deleteComponent;
exports.getChildrenByParentId = getChildrenByParentId;
exports.getComponentsByType = getComponentsByType;
exports.updateComponent = updateComponent;
exports.getRootComponents = getRootComponents;
exports.getComponentById = getComponentById;

var _Component = require("../model/Component");

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createComponent(tag, callback) {
    if (tag.parentComponent) {
        checkAComponentExist(tag.parentComponent, function (err, data) {
            if (err || !data) {
                callback("parentComponent doesn't exist", null);
                return;
            } else {
                var componentToCreate = new _Component2.default({
                    name: tag.name,
                    type: tag.type,
                    parentComponent: tag.parentComponent
                });
                saveComponent(componentToCreate, function (err, room) {
                    if (err) {
                        callback(err, null);
                        return;
                    } else {
                        callback(false, room);
                        return;
                    }
                });
            }
        });
    } else {
        var componentToCreate = new _Component2.default({
            name: tag.name,
            type: tag.type,
            parentComponent: tag.parentComponent
        });
        saveComponent(componentToCreate, function (err, room) {
            if (err) {
                console.log(err);
            } else {
                console.log(room);
            }
        });
    }
}

function saveComponent(component, callback) {
    component.save(function (err, room) {
        callback(err, room);
    });
}

function showAllComponents(callback) {
    _Component2.default.find(function (err, componentList) {
        callback(err, componentList);
    });
}

function checkAComponentExist(id, callback) {
    _Component2.default.findOne({ _id: id }, function (err, component) {
        callback(err, component);
    });
}

function deleteComponents(filter, callback) {
    _Component2.default.deleteMany(filter, function (err) {
        if (err) {
            callback(err, null);
        } else {
            callback(false, "deleted");
        }
    });
}

function deleteComponent(filter, callback) {
    _Component2.default.deleteOne(filter, function (err) {
        if (err) {
            callback(err, null);
        } else {
            callback(false, "deleted");
        }
    });
}

function getChildrenByParentId(id, callback) {
    _Component2.default.find({ parentComponent: id }, function (err, data) {
        callback(err, data);
    });
}

function getComponentsByType(type, callback) {
    _Component2.default.find({ type: type }, function (err, data) {
        callback(err, data);
    });
}

function updateComponent(id, updateData, callback) {
    _Component2.default.findOneAndUpdate({ _id: id }, { updateData: updateData }, function (err, data) {
        callback(err, data);
    });
}

///Done Review
function getRootComponents(callback) {
    showAllComponents(function (err, data) {
        var rootComponents = [];
        if (err) {
            callback(err, null);
        } else {
            data.forEach(function (component) {
                if (!component.parentComponent) {
                    rootComponents.push(component);
                }
            });
            callback(false, rootComponents);
        }
    });
}

//get Component by Id
function getComponentById(id, callback) {
    _Component2.default.find({ _id: id }, function (err, data) {
        callback(err, data);
    });
}

//get parent component by child id
// export function getParentByChildId(id, callback) {
//     getComponentById(id, function (err, data) {
//         callback(err,data);
//     })
// }