/*
 * Copyright (c) 2019
 * InterDigital Communications, Inc.
 * All rights reserved.
 *
 * The information provided herein is the proprietary and confidential
 * information of InterDigital Communications, Inc.
 */

package server

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

func NewRouter() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		var handler http.Handler
		handler = route.HandlerFunc
		handler = Logger(handler, route.Name)

		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(handler)
	}

	return router
}

func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World!")
}

var routes = Routes{
	Route{
		"Index",
		"GET",
		"/v1/",
		Index,
	},

	Route{
		"NewClient",
		strings.ToUpper("Post"),
		"/v1/clients",
		NewClient,
	},

	Route{
		"ActivateScenario",
		strings.ToUpper("Post"),
		"/v1/scenarios/active",
		ActivateScenario,
	},

	Route{
		"DeleteNetworkCharacteristicsTable",
		strings.ToUpper("Delete"),
		"/v1/scenarios/active",
		DeleteNetworkCharacteristicsTable,
	},

	Route{
		"GetNetworkCharacteristicsTable",
		strings.ToUpper("Get"),
		"/v1/scenarios/active",
		GetNetworkCharacteristicsTable,
	},
}
