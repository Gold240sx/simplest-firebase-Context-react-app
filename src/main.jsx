import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"
import App from "./App"
import "./styles/index.css"

//Redux
// import { Provider, connect } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <AuthContextProvider>
            {/* <Provider store={store}> */}
            <App />
            {/* </Provider> */}
        </AuthContextProvider>
    </React.StrictMode>
)
