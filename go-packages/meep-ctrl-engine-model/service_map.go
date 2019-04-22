/*
 * Copyright (c) 2019
 * InterDigital Communications, Inc.
 * All rights reserved.
 *
 * The information provided herein is the proprietary and confidential
 * information of InterDigital Communications, Inc.
 */

package model

// Mapping of exposed ports to internal or external services
type ServiceMap struct {

	// Service name
	Name string `json:"name,omitempty"`

	// Service IP address for external service only (egress)   <li>N/A for internal services
	Ip string `json:"ip,omitempty"`

	// Service port number
	Port int32 `json:"port,omitempty"`

	// Port used to expose internal service only (ingress)   <li>Must be unique port in range (30000 - 32767)   <li>N/A for external services
	ExternalPort int32 `json:"externalPort,omitempty"`

	// Protocol that the application is using (TCP or UDP)
	Protocol string `json:"protocol,omitempty"`
}
