/*
 * Copyright (c) 2019
 * InterDigital Communications, Inc.
 * All rights reserved.
 *
 * The information provided herein is the proprietary and confidential
 * information of InterDigital Communications, Inc.
 */

package client

// Application or service object
type Process struct {

	// Unique process ID
	Id string `json:"id,omitempty"`

	// Process name
	Name string `json:"name,omitempty"`

	// Process type
	Type_ string `json:"type,omitempty"`

	// true: process is external to MEEP false: process is internal to MEEP
	IsExternal bool `json:"isExternal,omitempty"`

	// Docker image to deploy inside MEEP
	Image string `json:"image,omitempty"`

	// Environment variables using the format NAME=\"value\",NAME=\"value\",NAME=\"value\"
	Environment string `json:"environment,omitempty"`

	// Arguments to command executable
	CommandArguments string `json:"commandArguments,omitempty"`

	// Executable to invoke at container start up
	CommandExe string `json:"commandExe,omitempty"`

	ServiceConfig *ServiceConfig `json:"serviceConfig,omitempty"`

	ExternalConfig *ExternalConfig `json:"externalConfig,omitempty"`

	// Process status
	Status string `json:"status,omitempty"`

	// Chart location for the deployment of the chart provided by the user
	UserChartLocation string `json:"userChartLocation,omitempty"`

	// Chart values.yaml file location for the deployment of the chart provided by the user
	UserChartAlternateValues string `json:"userChartAlternateValues,omitempty"`

	// Chart supplemental information related to the group (service)
	UserChartGroup string `json:"userChartGroup,omitempty"`
}
