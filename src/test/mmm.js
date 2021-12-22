"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
// @ts-ignore
var pathToJSON = path_1.join([__dirname, './test.json']);
var dataBuffer = fs_1.readFileSync(pathToJSON);
var dataConvert = JSON.parse(dataBuffer.toString('utf-8'));
var data = dataConvert.data;
console.log(data);
