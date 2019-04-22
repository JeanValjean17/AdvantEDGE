/*
 * Copyright (c) 2019
 * InterDigital Communications, Inc.
 * All rights reserved.
 *
 * The information provided herein is the proprietary and confidential
 * information of InterDigital Communications, Inc.
 */

package model

// Event object
type Event struct {

	// Event name
	Name string `json:"name,omitempty"`

	// Event type
	Type_ string `json:"type,omitempty"`

	EventNetworkCharacteristicsUpdate *EventNetworkCharacteristicsUpdate `json:"eventNetworkCharacteristicsUpdate,omitempty"`

	EventUeMobility *EventUeMobility `json:"eventUeMobility,omitempty"`

	EventPoasInRange *EventPoasInRange `json:"eventPoasInRange,omitempty"`

	EventOther *EventOther `json:"eventOther,omitempty"`
}
