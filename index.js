"use strict";
exports.__esModule = true;
exports.asyncGltfLoader = void 0;
var GLTFLoader_1 = require("three/examples/jsm/loaders/GLTFLoader");
function asyncGltfLoader(_a) {
    var url = _a.url, onProgress = _a.onProgress;
    var loader = new GLTFLoader_1.GLTFLoader();
    return new Promise(function (resolve, reject) {
        loader.load(url, resolve, onProgress, reject);
    });
}
exports.asyncGltfLoader = asyncGltfLoader;
