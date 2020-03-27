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
 * AdvantEDGE Platform Controller REST API
 * This API is the main platform API and mainly used by the AdvantEDGE frontend to interact with scenarios <p>**Micro-service**<br>[meep-ctrl-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-ctrl-engine) <p>**Type & Usage**<br>Platform main interface used by controller software that want to interact with the AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    define(['ApiClient', 'model/ServicePort'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ServicePort'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgePlatformControllerRestApi) {
      root.AdvantEdgePlatformControllerRestApi = {};
    }
    root.AdvantEdgePlatformControllerRestApi.ServiceConfig = factory(root.AdvantEdgePlatformControllerRestApi.ApiClient, root.AdvantEdgePlatformControllerRestApi.ServicePort);
  }
}(this, function(ApiClient, ServicePort) {
  'use strict';

  /**
   * The ServiceConfig model module.
   * @module model/ServiceConfig
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ServiceConfig</code>.
   * Service object
   * @alias module:model/ServiceConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ServiceConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceConfig} obj Optional instance to populate.
   * @return {module:model/ServiceConfig} The populated <code>ServiceConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('meSvcName'))
        obj.meSvcName = ApiClient.convertToType(data['meSvcName'], 'String');
      if (data.hasOwnProperty('ports'))
        obj.ports = ApiClient.convertToType(data['ports'], [ServicePort]);
    }
    return obj;
  }

  /**
   * Unique service name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Multi-Edge service name, if any
   * @member {String} meSvcName
   */
  exports.prototype.meSvcName = undefined;

  /**
   * @member {Array.<module:model/ServicePort>} ports
   */
  exports.prototype.ports = undefined;

  return exports;

}));
