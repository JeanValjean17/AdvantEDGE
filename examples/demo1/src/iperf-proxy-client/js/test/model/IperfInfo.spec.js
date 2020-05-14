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
 * Demo iperf transit App API
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
    factory(root.expect, root.DemoIperfTransitAppApi);
  }
}(this, function(expect, DemoIperfTransitAppApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('IperfInfo', function() {
      beforeEach(function() {
        instance = new DemoIperfTransitAppApi.IperfInfo();
      });

      it('should create an instance of IperfInfo', function() {
        // TODO: update the code to test IperfInfo
        expect(instance).to.be.a(DemoIperfTransitAppApi.IperfInfo);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property app (base name: "app")', function() {
        // TODO: update the code to test the property app
        expect(instance).to.have.property('app');
        // expect(instance.app).to.be(expectedValueLiteral);
      });

      it('should have the property throughput (base name: "throughput")', function() {
        // TODO: update the code to test the property throughput
        expect(instance).to.have.property('throughput');
        // expect(instance.throughput).to.be(expectedValueLiteral);
      });

    });
  });

}));
