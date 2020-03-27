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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AdvantEdgePlatformControllerRestApi);
  }
}(this, function(expect, AdvantEdgePlatformControllerRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Domain', function() {
      beforeEach(function() {
        instance = new AdvantEdgePlatformControllerRestApi.Domain();
      });

      it('should create an instance of Domain', function() {
        // TODO: update the code to test Domain
        expect(instance).to.be.a(AdvantEdgePlatformControllerRestApi.Domain);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property interZoneLatency (base name: "interZoneLatency")', function() {
        // TODO: update the code to test the property interZoneLatency
        expect(instance).to.have.property('interZoneLatency');
        // expect(instance.interZoneLatency).to.be(expectedValueLiteral);
      });

      it('should have the property interZoneLatencyVariation (base name: "interZoneLatencyVariation")', function() {
        // TODO: update the code to test the property interZoneLatencyVariation
        expect(instance).to.have.property('interZoneLatencyVariation');
        // expect(instance.interZoneLatencyVariation).to.be(expectedValueLiteral);
      });

      it('should have the property interZoneThroughput (base name: "interZoneThroughput")', function() {
        // TODO: update the code to test the property interZoneThroughput
        expect(instance).to.have.property('interZoneThroughput');
        // expect(instance.interZoneThroughput).to.be(expectedValueLiteral);
      });

      it('should have the property interZonePacketLoss (base name: "interZonePacketLoss")', function() {
        // TODO: update the code to test the property interZonePacketLoss
        expect(instance).to.have.property('interZonePacketLoss');
        // expect(instance.interZonePacketLoss).to.be(expectedValueLiteral);
      });

      it('should have the property meta (base name: "meta")', function() {
        // TODO: update the code to test the property meta
        expect(instance).to.have.property('meta');
        // expect(instance.meta).to.be(expectedValueLiteral);
      });

      it('should have the property userMeta (base name: "userMeta")', function() {
        // TODO: update the code to test the property userMeta
        expect(instance).to.have.property('userMeta');
        // expect(instance.userMeta).to.be(expectedValueLiteral);
      });

      it('should have the property zones (base name: "zones")', function() {
        // TODO: update the code to test the property zones
        expect(instance).to.have.property('zones');
        // expect(instance.zones).to.be(expectedValueLiteral);
      });

    });
  });

}));
