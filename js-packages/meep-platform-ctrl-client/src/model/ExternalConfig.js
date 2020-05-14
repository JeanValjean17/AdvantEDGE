/*
 * Copyright (c) 2020  InterDigital Communications, Inc
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
 * This API is the main Platform Controller API for scenario configuration & sandbox management <p>**Micro-service**<br>[meep-pfm-ctrl](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-platform-ctrl) <p>**Type & Usage**<br>Platform main interface used by controller software to configure scenarios and manage sandboxes in the AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    define(['ApiClient', 'model/EgressService', 'model/IngressService'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EgressService'), require('./IngressService'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgePlatformControllerRestApi) {
      root.AdvantEdgePlatformControllerRestApi = {};
    }
    root.AdvantEdgePlatformControllerRestApi.ExternalConfig = factory(root.AdvantEdgePlatformControllerRestApi.ApiClient, root.AdvantEdgePlatformControllerRestApi.EgressService, root.AdvantEdgePlatformControllerRestApi.IngressService);
  }
}(this, function(ApiClient, EgressService, IngressService) {
  'use strict';

  /**
   * The ExternalConfig model module.
   * @module model/ExternalConfig
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ExternalConfig</code>.
   * External Process configuration. NOTE: Only valid if 'isExternal' is set.
   * @alias module:model/ExternalConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ExternalConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalConfig} obj Optional instance to populate.
   * @return {module:model/ExternalConfig} The populated <code>ExternalConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ingressServiceMap'))
        obj.ingressServiceMap = ApiClient.convertToType(data['ingressServiceMap'], [IngressService]);
      if (data.hasOwnProperty('egressServiceMap'))
        obj.egressServiceMap = ApiClient.convertToType(data['egressServiceMap'], [EgressService]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/IngressService>} ingressServiceMap
   */
  exports.prototype.ingressServiceMap = undefined;

  /**
   * @member {Array.<module:model/EgressService>} egressServiceMap
   */
  exports.prototype.egressServiceMap = undefined;

  return exports;

}));
