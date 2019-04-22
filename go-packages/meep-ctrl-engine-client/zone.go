/*
 * Copyright (c) 2019
 * InterDigital Communications, Inc.
 * All rights reserved.
 *
 * The information provided herein is the proprietary and confidential
 * information of InterDigital Communications, Inc.
 */
package client

// Logical zone (MEC network) object
type Zone struct {

	// Unique zone ID
	Id string `json:"id,omitempty"`

	// Zone name
	Name string `json:"name,omitempty"`

	// Zone type
	Type_ string `json:"type,omitempty"`

	// Latency in ms between fog nodes (or PoAs) within zone
	InterFogLatency int32 `json:"interFogLatency,omitempty"`

	// Latency variation in ms between fog nodes (or PoAs) within zone
	InterFogLatencyVariation int32 `json:"interFogLatencyVariation,omitempty"`

	// The limit of the traffic supported between fog nodes (or PoAs) within the zone
	InterFogThroughput int32 `json:"interFogThroughput,omitempty"`

	// Packet lost (in terms of percentage) between fog nodes (or PoAs) within the zone
	InterFogPacketLoss float64 `json:"interFogPacketLoss,omitempty"`

	// Latency in ms between edge nodes within zone
	InterEdgeLatency int32 `json:"interEdgeLatency,omitempty"`

	// Latency variation in ms between edge nodes within zone
	InterEdgeLatencyVariation int32 `json:"interEdgeLatencyVariation,omitempty"`

	// The limit of the traffic supported between edge nodes within the zone
	InterEdgeThroughput int32 `json:"interEdgeThroughput,omitempty"`

	// Packet lost (in terms of percentage) between edge nodes within the zone
	InterEdgePacketLoss float64 `json:"interEdgePacketLoss,omitempty"`

	// Latency in ms between fog nodes (or PoAs) and edge nodes within zone
	EdgeFogLatency int32 `json:"edgeFogLatency,omitempty"`

	// Latency variation in ms between fog nodes (or PoAs) and edge nodes within zone
	EdgeFogLatencyVariation int32 `json:"edgeFogLatencyVariation,omitempty"`

	// The limit of the traffic supported between fog nodes (or PoAs) and edge nodes within the zone
	EdgeFogThroughput int32 `json:"edgeFogThroughput,omitempty"`

	// Packet lost (in terms of percentage) between fog nodes (or PoAs) and edge nodes within the zone
	EdgeFogPacketLoss float64 `json:"edgeFogPacketLoss,omitempty"`

	NetworkLocations []NetworkLocation `json:"networkLocations,omitempty"`
}
