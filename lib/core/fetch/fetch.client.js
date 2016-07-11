/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

require('whatwg-fetch');

var _this = undefined;
var globalObj = null;
if (typeof self !== 'undefined') {
    globalObj = self;
} else {
    globalObj = _this;
}

exports['default'] = globalObj.fetch.bind(globalObj);
var Headers = self.Headers;
exports.Headers = Headers;
var Request = self.Request;
exports.Request = Request;
var Response = self.Response;
exports.Response = Response;