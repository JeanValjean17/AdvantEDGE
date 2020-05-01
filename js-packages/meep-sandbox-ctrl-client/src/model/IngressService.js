/*
 * Copyright (c) 2019  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * AdvantEDGE Sandbox Controller REST API
 * This API is the main Sandbox Controller API for scenario deployment & event injection <p>**Micro-service**<br>[meep-sandbox-ctrl](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-sandbox-ctrl) <p>**Type & Usage**<br>Platform runtime interface to manage active scenarios and inject events in AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * OpenAPI spec version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeSandboxControllerRestApi) {
      root.AdvantEdgeSandboxControllerRestApi = {};
    }
    root.AdvantEdgeSandboxControllerRestApi.IngressService = factory(root.AdvantEdgeSandboxControllerRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IngressService model module.
   * @module model/IngressService
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>IngressService</code>.
   * Internal service exposed externally via specific port
   * @alias module:model/IngressService
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>IngressService</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IngressService} obj Optional instance to populate.
   * @return {module:model/IngressService} The populated <code>IngressService</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('port'))
        obj.port = ApiClient.convertToType(data['port'], 'Number');
      if (data.hasOwnProperty('externalPort'))
        obj.externalPort = ApiClient.convertToType(data['externalPort'], 'Number');
      if (data.hasOwnProperty('protocol'))
        obj.protocol = ApiClient.convertToType(data['protocol'], 'String');
    }
    return obj;
  }

  /**
   * Service name (unique or multi-edge)
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Internal service port number
   * @member {Number} port
   */
  exports.prototype.port = undefined;

  /**
   * Externally-exposed unique service port in range (30000 - 32767)
   * @member {Number} externalPort
   */
  exports.prototype.externalPort = undefined;

  /**
   * Service protocol (TCP or UDP)
   * @member {String} protocol
   */
  exports.prototype.protocol = undefined;

  return exports;

}));
