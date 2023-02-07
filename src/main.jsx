import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"
import { RoleProvider } from "./context/RoleContext"
import App from "./App"
import "./styles/index.css"

//Redux
// import { Provider, connect } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <RoleProvider>
                {/* <Provider store={store}> */}
                <App />
                {/* </Provider> */}
            </RoleProvider>
        </AuthContextProvider>
    </React.StrictMode>
)
