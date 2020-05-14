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
 * MEEP Demo App API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
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
    if (!root.MeepDemoAppApi) {
      root.MeepDemoAppApi = {};
    }
    root.MeepDemoAppApi.UserInfo = factory(root.MeepDemoAppApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserInfo model module.
   * @module model/UserInfo
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UserInfo</code>.
   * @alias module:model/UserInfo
   * @class
   * @param address {String} Address of the user or device based on the connected access point - address = acr:<UE IP address>
   * @param accessPointId {String} Unique identifier of a point of access
   * @param zoneId {String} Unique Identifier of a Location Zone
   * @param resourceURL {String} URL where the UE may be contacted for some service (application specific)
   */
  var exports = function(address, accessPointId, zoneId, resourceURL) {
    this.address = address;
    this.accessPointId = accessPointId;
    this.zoneId = zoneId;
    this.resourceURL = resourceURL;
  };

  /**
   * Constructs a <code>UserInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInfo} obj Optional instance to populate.
   * @return {module:model/UserInfo} The populated <code>UserInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('accessPointId'))
        obj.accessPointId = ApiClient.convertToType(data['accessPointId'], 'String');
      if (data.hasOwnProperty('zoneId'))
        obj.zoneId = ApiClient.convertToType(data['zoneId'], 'String');
      if (data.hasOwnProperty('resourceURL'))
        obj.resourceURL = ApiClient.convertToType(data['resourceURL'], 'String');
    }
    return obj;
  }

  /**
   * Unique identifier of a user or client node
   * @member {String} userId
   */
  exports.prototype.userId = undefined;

  /**
   * Address of the user or device based on the connected access point - address = acr:<UE IP address>
   * @member {String} address
   */
  exports.prototype.address = undefined;

  /**
   * Unique identifier of a point of access
   * @member {String} accessPointId
   */
  exports.prototype.accessPointId = undefined;

  /**
   * Unique Identifier of a Location Zone
   * @member {String} zoneId
   */
  exports.prototype.zoneId = undefined;

  /**
   * URL where the UE may be contacted for some service (application specific)
   * @member {String} resourceURL
   */
  exports.prototype.resourceURL = undefined;

  return exports;

}));
