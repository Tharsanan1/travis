'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateFeatureVersionEc2 = updateFeatureVersionEc2;
exports.updateFeatureVersionElb = updateFeatureVersionElb;
exports.updateFeatureVersionS3 = updateFeatureVersionS3;
var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
var ec2 = new AWS.EC2();
var elb = new AWS.ELB();
var s3 = new AWS.S3();
var splitString = "+";
function updateFeatureVersionEc2(dataForUpdate) {
    //{instance_id, product, environment, version, feature}
    var params = {
        Filters: [{
            Name: "resource-id",
            Values: [dataForUpdate.instance_id]
        }]
    };

    ec2.describeTags(params, function (err, data) {
        var componentTagValue = "";
        data.Tags.forEach(function (tag) {
            if (tag.Key === 'Components') {
                componentTagValue = tag.Value;
            }
        });
        if (componentTagValue.length > 0) {
            var tagArray = componentTagValue.split(splitString);
            var modifiedComponentTag = "";
            for (var i = 0; i < tagArray.length; i++) {
                if (tagArray[i].indexOf(dataForUpdate.feature + "_") !== -1) {
                    modifiedComponentTag += dataForUpdate.feature + "_" + dataForUpdate.version;
                    modifiedComponentTag += splitString;
                } else {
                    if (tagArray[i].length > 0) {
                        modifiedComponentTag += tagArray[i];
                        modifiedComponentTag += splitString;
                    }
                }
            }
            var filterParams = {
                Resources: [dataForUpdate.instance_id],
                Tags: [{ Key: "Components", Value: modifiedComponentTag }]
            };
            ec2.createTags(filterParams, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } // an error occurred
                else {
                        console.log(data);
                    } // successful response
            });
        } else {
            var _filterParams = {
                Resources: [dataForUpdate.instance_id],
                Tags: [{ Key: "Components", Value: dataForUpdate.feature + "_" + dataForUpdate.version + splitString }]
            };
            ec2.createTags(_filterParams, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } // an error occurred
                else {
                        console.log(data);
                    } // successful response
            });
        }
    });
}

function updateFeatureVersionElb(dataForUpdate) {
    //{elbName, product, environment, version
    var params = {
        LoadBalancerNames: [dataForUpdate.elbName]
    };
    elb.describeTags(params, function (err, data) {
        if (!err) {
            var componentTagValue = "";
            data.TagDescriptions[0].Tags.forEach(function (tag) {
                if (tag.Key === 'Components') {
                    componentTagValue = tag.Value;
                }
            });
            if (componentTagValue.length > 0) {
                var tagArray = componentTagValue.split(splitString);
                var modifiedComponentTag = "";
                for (var i = 0; i < tagArray.length; i++) {
                    if (tagArray[i].indexOf(dataForUpdate.feature + "_") !== -1) {
                        modifiedComponentTag += dataForUpdate.feature + "_" + dataForUpdate.version;
                        modifiedComponentTag += splitString;
                    } else {
                        if (tagArray[i].length > 0) {
                            modifiedComponentTag += tagArray[i];
                            modifiedComponentTag += splitString;
                        }
                    }
                }
                var filterParams = {
                    LoadBalancerNames: [dataForUpdate.elbName],
                    Tags: [{ Key: "Components", Value: modifiedComponentTag }]
                };
                elb.addTags(filterParams, function (err, data) {
                    if (err) {
                        console.log(err, err.stack);
                    } // an error occurred
                    else {
                            console.log(data);
                        } // successful response
                });
            } else {
                var _filterParams2 = {
                    LoadBalancerNames: [dataForUpdate.elbName],
                    Tags: [{ Key: "Components", Value: dataForUpdate.feature + "_" + dataForUpdate.version + splitString }]
                };
                elb.addTags(_filterParams2, function (err, data) {
                    if (err) {
                        console.log(err, err.stack);
                    } // an error occurred
                    else {
                            console.log(data);
                        } // successful response
                });
            }
        }
    });
}

function updateFeatureVersionS3(dataForUpdate) {
    var params = {
        Bucket: dataForUpdate.s3Name
    };
    s3.getBucketTagging(params, function (err, data) {
        if (!err) {
            console.log("no error", data);
            var componentTagValue = "";
            var tagList = [];
            data.TagSet.forEach(function (tag) {
                console.log("tag", tag);
                if (tag.Key === 'Components') {
                    console.log("Components found");
                    componentTagValue = tag.Value;
                } else {
                    tagList.push({ Key: tag.Key, Value: tag.Value });
                }
            });
            if (componentTagValue.length > 0) {
                var tagArray = componentTagValue.split(splitString);
                var modifiedComponentTag = "";
                for (var i = 0; i < tagArray.length; i++) {
                    if (tagArray[i].indexOf(dataForUpdate.feature + "_") !== -1) {
                        modifiedComponentTag += dataForUpdate.feature + "_" + dataForUpdate.version;
                        modifiedComponentTag += splitString;
                    } else {
                        if (tagArray[i].length > 0) {
                            modifiedComponentTag += tagArray[i];
                            modifiedComponentTag += splitString;
                        }
                    }
                }
                tagList.push({ Key: "Components", Value: modifiedComponentTag });
                var filterParams = {
                    Bucket: dataForUpdate.s3Name,
                    Tagging: {
                        TagSet: tagList
                    }
                };
                s3.putBucketTagging(filterParams, function (err, data) {
                    if (err) {
                        console.log(err, err.stack);
                    } // an error occurred
                    else {
                            console.log(data);
                        } // successful response
                });
            } else {
                var _filterParams3 = {
                    Bucket: dataForUpdate.s3Name,
                    Tagging: {
                        TagSet: tagList
                    }
                };
                s3.putBucketTagging(_filterParams3, function (err, data) {
                    if (err) {
                        console.log(err, err.stack);
                    } // an error occurred
                    else {
                            console.log(data);
                        } // successful response
                });
            }
        }
    });
}