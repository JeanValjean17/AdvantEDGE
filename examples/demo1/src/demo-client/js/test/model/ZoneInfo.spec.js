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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MeepDemoAppApi);
  }
}(this, function(expect, MeepDemoAppApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ZoneInfo', function() {
      beforeEach(function() {
        instance = new MeepDemoAppApi.ZoneInfo();
      });

      it('should create an instance of ZoneInfo', function() {
        // TODO: update the code to test ZoneInfo
        expect(instance).to.be.a(MeepDemoAppApi.ZoneInfo);
      });

      it('should have the property zoneId (base name: "zoneId")', function() {
        // TODO: update the code to test the property zoneId
        expect(instance).to.have.property('zoneId');
        // expect(instance.zoneId).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfAccessPoints (base name: "numberOfAccessPoints")', function() {
        // TODO: update the code to test the property numberOfAccessPoints
        expect(instance).to.have.property('numberOfAccessPoints');
        // expect(instance.numberOfAccessPoints).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfUsers (base name: "numberOfUsers")', function() {
        // TODO: update the code to test the property numberOfUsers
        expect(instance).to.have.property('numberOfUsers');
        // expect(instance.numberOfUsers).to.be(expectedValueLiteral);
      });

    });
  });

}));
