'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {
    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({ extended: true }));
    app.use('/tag', _tagRouter2.default);
    app.use('/all', _AllqueryRouter2.default);
    app.use('/node', _componentRouter2.default);
    app.use('/tree', _treeRouter2.default);
    app.use('/addinstance', _AddInstanceRouter2.default);
    app.use('/uil', _UntaggedRouter2.default);
    app.use('/untagged', _AddTagForUntaggedRouter2.default);
};

var _tagRouter = require('./router/tagRouter');

var _tagRouter2 = _interopRequireDefault(_tagRouter);

var _AllqueryRouter = require('./router/AllqueryRouter');

var _AllqueryRouter2 = _interopRequireDefault(_AllqueryRouter);

var _UntaggedRouter = require('./router/UntaggedRouter');

var _UntaggedRouter2 = _interopRequireDefault(_UntaggedRouter);

var _treeRouter = require('./router/treeRouter');

var _treeRouter2 = _interopRequireDefault(_treeRouter);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _AddInstanceRouter = require('./router/AddInstanceRouter');

var _AddInstanceRouter2 = _interopRequireDefault(_AddInstanceRouter);

var _componentRouter = require('./router/componentRouter');

var _componentRouter2 = _interopRequireDefault(_componentRouter);

var _AddTagForUntaggedRouter = require('./router/AddTagForUntaggedRouter');

var _AddTagForUntaggedRouter2 = _interopRequireDefault(_AddTagForUntaggedRouter);

var _componentQuery = require('./queries/componentQuery');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by sumith on 2/17/17.
 */
module.exports = exports['default'];