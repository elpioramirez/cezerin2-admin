import { connectToWebSocket } from "lib/apiWebSocket"
import { fetchSettings } from "modules/settings/actions"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import "../public/css/flexboxgrid.min.css"
import "../public/css/style.css"
import App from "./app"
import * as auth from "./lib/auth"
import settings from "./lib/settings"
import reducers from "./rootReducer"

a
const DEVELOPER_MODE = settings.developerMode === true
if (DEVELOPER_MODE === false) {
	auth.validateCurrentToken()
}

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
store.dispatch(fetchSettings())

if (window.WebSocket) {
	connectToWebSocket(store)
} else {
	console.log("WebSocket is not supported by your browser.")
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
)
