/*
 * Copyright (c) 2019
 * InterDigital Communications, Inc.
 * All rights reserved.
 *
 * The information provided herein is the proprietary and confidential
 * information of InterDigital Communications, Inc.
 */

package server

// Service port object
type ServicePort struct {

	// Protocol that the application is using (TCP or UDP)
	Protocol string `json:"protocol,omitempty"`

	// Port number that the service is listening on
	Port int32 `json:"port,omitempty"`

	// External port number on which to expose the application (30000 - 32767)  <li>Only one application allowed per external port <li>Scenario builder must configure to prevent conflicts
	ExternalPort int32 `json:"externalPort,omitempty"`
}
