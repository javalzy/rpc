// **********************************************************************
// Parsed By TarsParser(1.1.0), Generated By tars2node(20190529)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "NodeTars.tars" by Client Mode
// **********************************************************************

/* eslint-disable */

"use strict";

var TarsStream = require("@tars/stream");
var TarsError  = require("@tars/rpc").error;

var _makeError = function (data, message, type) {
    var error = new Error(message || "");
    error.request = data.request;
    error.response = {
        "costtime" : data.request.costtime
    };
    if (type === TarsError.CLIENT.DECODE_ERROR) {
        error.name = "DECODE_ERROR";
        error.response.error = {
            "code" : type,
            "message" : message
        };
    } else {
        error.name = "RPC_ERROR";
        error.response.error = data.error;
    }
    return error;
};

var TRom = TRom || {};
module.exports.TRom = TRom;

TRom.NodeTarsProxy = function () {
    this._name    = undefined;
    this._worker  = undefined;
};

TRom.NodeTarsProxy.prototype.setTimeout = function (iTimeout) {
    this._worker.timeout = iTimeout;
};

TRom.NodeTarsProxy.prototype.getTimeout = function () {
    return this._worker.timeout;
};

TRom.NodeTarsProxy.prototype.setVersion = function (iVersion) {
    this._worker.version = iVersion;
};

TRom.NodeTarsProxy.prototype.getVersion = function () {
    return this._worker.version;
};

var __TRom_NodeTars$test$IF = {
    "name" : "test",
    "return" : "int32",
    "arguments" : []
};

var __TRom_NodeTars$test$IE = function () {
    var os = new TarsStream.TarsOutputStream();
    return os.getBinBuffer();
};

var __TRom_NodeTars$test$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0)
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeTars$test$PE = function (__$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    return tup;
};

var __TRom_NodeTars$test$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0)
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeTars$test$ER = function (data) {
    throw _makeError(data, "Call NodeTars::test failed");
};

TRom.NodeTarsProxy.prototype.test = function () {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("test", __TRom_NodeTars$test$PE(version), arguments[arguments.length - 1], __TRom_NodeTars$test$IF).then(__TRom_NodeTars$test$PD, __TRom_NodeTars$test$ER);
    } else {
        return this._worker.tars_invoke("test", __TRom_NodeTars$test$IE(), arguments[arguments.length - 1], __TRom_NodeTars$test$IF).then(__TRom_NodeTars$test$ID, __TRom_NodeTars$test$ER);
    }
};
TRom.NodeTarsProxy.test = __TRom_NodeTars$test$IF;

var __TRom_NodeTars$testContext$IF = {
    "name" : "testContext",
    "return" : "int32",
    "arguments" : []
};

var __TRom_NodeTars$testContext$IE = function () {
    var os = new TarsStream.TarsOutputStream();
    return os.getBinBuffer();
};

var __TRom_NodeTars$testContext$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0)
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeTars$testContext$PE = function (__$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    return tup;
};

var __TRom_NodeTars$testContext$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0)
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeTars$testContext$ER = function (data) {
    throw _makeError(data, "Call NodeTars::testContext failed");
};

TRom.NodeTarsProxy.prototype.testContext = function () {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("testContext", __TRom_NodeTars$testContext$PE(version), arguments[arguments.length - 1], __TRom_NodeTars$testContext$IF).then(__TRom_NodeTars$testContext$PD, __TRom_NodeTars$testContext$ER);
    } else {
        return this._worker.tars_invoke("testContext", __TRom_NodeTars$testContext$IE(), arguments[arguments.length - 1], __TRom_NodeTars$testContext$IF).then(__TRom_NodeTars$testContext$ID, __TRom_NodeTars$testContext$ER);
    }
};
TRom.NodeTarsProxy.testContext = __TRom_NodeTars$testContext$IF;

var __TRom_NodeTars$testRpcCall$IF = {
    "name" : "testRpcCall",
    "return" : "int32",
    "arguments" : [{
        "name" : "sUsrName",
        "class" : "string",
        "direction" : "in"
    }, {
        "name" : "sValue",
        "class" : "string",
        "direction" : "out"
    }]
};

var __TRom_NodeTars$testRpcCall$IE = function (sUsrName) {
    var os = new TarsStream.TarsOutputStream();
    os.writeString(1, sUsrName);
    return os.getBinBuffer();
};

var __TRom_NodeTars$testRpcCall$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readInt32(0, true, 0),
                "arguments" : {
                    "sValue" : is.readString(2, true, "")
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeTars$testRpcCall$PE = function (sUsrName, __$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    tup.writeString("sUsrName", sUsrName);
    return tup;
};

var __TRom_NodeTars$testRpcCall$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readInt32("", 0),
                "arguments" : {
                    "sValue" : tup.readString("sValue")
                }
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __TRom_NodeTars$testRpcCall$ER = function (data) {
    throw _makeError(data, "Call NodeTars::testRpcCall failed");
};

TRom.NodeTarsProxy.prototype.testRpcCall = function (sUsrName) {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("testRpcCall", __TRom_NodeTars$testRpcCall$PE(sUsrName, version), arguments[arguments.length - 1], __TRom_NodeTars$testRpcCall$IF).then(__TRom_NodeTars$testRpcCall$PD, __TRom_NodeTars$testRpcCall$ER);
    } else {
        return this._worker.tars_invoke("testRpcCall", __TRom_NodeTars$testRpcCall$IE(sUsrName), arguments[arguments.length - 1], __TRom_NodeTars$testRpcCall$IF).then(__TRom_NodeTars$testRpcCall$ID, __TRom_NodeTars$testRpcCall$ER);
    }
};
TRom.NodeTarsProxy.testRpcCall = __TRom_NodeTars$testRpcCall$IF;



