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
 * AdvantEDGE Monitoring Engine REST API
 *
 * This API provides AdvantEDGE microservice & scenario deployment status information collected in the Monitoring Engine. <p>**Micro-service**<br>[meep-mon-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-mon-engine) <p>**Type & Usage**<br>Platform interface to retrieve AdvantEDGE microservice & scenario deployment status information <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * API version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package server

// List of all pods status
type PodsStatus struct {
	PodStatus []PodStatus `json:"podStatus,omitempty"`
}
