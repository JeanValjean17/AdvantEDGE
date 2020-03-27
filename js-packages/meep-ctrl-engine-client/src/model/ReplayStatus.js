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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgePlatformControllerRestApi) {
      root.AdvantEdgePlatformControllerRestApi = {};
    }
    root.AdvantEdgePlatformControllerRestApi.ReplayStatus = factory(root.AdvantEdgePlatformControllerRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReplayStatus model module.
   * @module model/ReplayStatus
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ReplayStatus</code>.
   * Replay status object
   * @alias module:model/ReplayStatus
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReplayStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReplayStatus} obj Optional instance to populate.
   * @return {module:model/ReplayStatus} The populated <code>ReplayStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('replayFileRunning'))
        obj.replayFileRunning = ApiClient.convertToType(data['replayFileRunning'], 'String');
      if (data.hasOwnProperty('index'))
        obj.index = ApiClient.convertToType(data['index'], 'Number');
      if (data.hasOwnProperty('maxIndex'))
        obj.maxIndex = ApiClient.convertToType(data['maxIndex'], 'Number');
      if (data.hasOwnProperty('loopMode'))
        obj.loopMode = ApiClient.convertToType(data['loopMode'], 'Boolean');
      if (data.hasOwnProperty('timeRemaining'))
        obj.timeRemaining = ApiClient.convertToType(data['timeRemaining'], 'Number');
      if (data.hasOwnProperty('timeToNextEvent'))
        obj.timeToNextEvent = ApiClient.convertToType(data['timeToNextEvent'], 'Number');
    }
    return obj;
  }

  /**
   * Name of the replay file currently running
   * @member {String} replayFileRunning
   */
  exports.prototype.replayFileRunning = undefined;

  /**
   * Index of the last ran event
   * @member {Number} index
   */
  exports.prototype.index = undefined;

  /**
   * Number of events in the replay file
   * @member {Number} maxIndex
   */
  exports.prototype.maxIndex = undefined;

  /**
   * Loop mode enables
   * @member {Boolean} loopMode
   */
  exports.prototype.loopMode = undefined;

  /**
   * Total time remaining for the replay file after last event
   * @member {Number} timeRemaining
   */
  exports.prototype.timeRemaining = undefined;

  /**
   * Time remaining until the next event for the replay file after last event
   * @member {Number} timeToNextEvent
   */
  exports.prototype.timeToNextEvent = undefined;

  return exports;

}));
