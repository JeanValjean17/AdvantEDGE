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
		//		handler = Logger(handler, route.Name)

		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(handler)
	}

	router.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("./static/"))))

	// router.PathPrefix("/api").Handler(http.StripPrefix("/", http.FileServer(http.Dir("./static/api/"))))

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
		"GetMeepSettings",
		strings.ToUpper("Get"),
		"/v1/settings",
		GetMeepSettings,
	},

	Route{
		"SetMeepSettings",
		strings.ToUpper("Put"),
		"/v1/settings",
		SetMeepSettings,
	},

	Route{
		"GetStates",
		strings.ToUpper("Get"),
		"/v1/states",
		GetStates,
	},

	Route{
		"CreateScenario",
		strings.ToUpper("Post"),
		"/v1/scenarios/{name}",
		CreateScenario,
	},

	Route{
		"DeleteScenario",
		strings.ToUpper("Delete"),
		"/v1/scenarios/{name}",
		DeleteScenario,
	},

	Route{
		"DeleteScenarioList",
		strings.ToUpper("Delete"),
		"/v1/scenarios",
		DeleteScenarioList,
	},

	Route{
		"GetScenario",
		strings.ToUpper("Get"),
		"/v1/scenarios/{name}",
		GetScenario,
	},

	Route{
		"GetScenarioList",
		strings.ToUpper("Get"),
		"/v1/scenarios",
		GetScenarioList,
	},

	Route{
		"SetScenario",
		strings.ToUpper("Put"),
		"/v1/scenarios/{name}",
		SetScenario,
	},

	Route{
		"ActivateScenario",
		strings.ToUpper("Post"),
		"/v1/active/{name}",
		ActivateScenario,
	},

	Route{
		"GetActiveScenario",
		strings.ToUpper("Get"),
		"/v1/active",
		GetActiveScenario,
	},

	Route{
		"GetActiveClientServiceMaps",
		strings.ToUpper("Get"),
		"/v1/active/serviceMaps",
		GetActiveClientServiceMaps,
	},

	Route{
		"GetEventList",
		strings.ToUpper("Get"),
		"/v1/events",
		GetEventList,
	},

	Route{
		"SendEvent",
		strings.ToUpper("Post"),
		"/v1/events/{type}",
		SendEvent,
	},

	Route{
		"TerminateScenario",
		strings.ToUpper("Delete"),
		"/v1/active",
		TerminateScenario,
	},
}
