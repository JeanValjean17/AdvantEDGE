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
		"CreateMobilityGroup",
		strings.ToUpper("Post"),
		"/v1/mg/{mgName}",
		CreateMobilityGroup,
	},

	Route{
		"CreateMobilityGroupApp",
		strings.ToUpper("Post"),
		"/v1/mg/{mgName}/app/{appId}",
		CreateMobilityGroupApp,
	},

	Route{
		"CreateMobilityGroupUe",
		strings.ToUpper("Post"),
		"/v1/mg/{mgName}/app/{appId}/ue",
		CreateMobilityGroupUe,
	},

	Route{
		"DeleteMobilityGroup",
		strings.ToUpper("Delete"),
		"/v1/mg/{mgName}",
		DeleteMobilityGroup,
	},

	Route{
		"DeleteMobilityGroupApp",
		strings.ToUpper("Delete"),
		"/v1/mg/{mgName}/app/{appId}",
		DeleteMobilityGroupApp,
	},

	Route{
		"GetMobilityGroup",
		strings.ToUpper("Get"),
		"/v1/mg/{mgName}",
		GetMobilityGroup,
	},

	Route{
		"GetMobilityGroupApp",
		strings.ToUpper("Get"),
		"/v1/mg/{mgName}/app/{appId}",
		GetMobilityGroupApp,
	},

	Route{
		"GetMobilityGroupAppList",
		strings.ToUpper("Get"),
		"/v1/mg/{mgName}/app",
		GetMobilityGroupAppList,
	},

	Route{
		"GetMobilityGroupList",
		strings.ToUpper("Get"),
		"/v1/mg",
		GetMobilityGroupList,
	},

	Route{
		"SetMobilityGroup",
		strings.ToUpper("Put"),
		"/v1/mg/{mgName}",
		SetMobilityGroup,
	},

	Route{
		"SetMobilityGroupApp",
		strings.ToUpper("Put"),
		"/v1/mg/{mgName}/app/{appId}",
		SetMobilityGroupApp,
	},

	Route{
		"TransferAppState",
		strings.ToUpper("Post"),
		"/v1/mg/{mgName}/app/{appId}/state",
		TransferAppState,
	},
}
