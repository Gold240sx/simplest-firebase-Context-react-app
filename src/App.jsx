import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"
import { Home, SignIn, Signup, Dashboard } from "./pages/index"

function App() {
    return (
        <div className="h-auto w-auto relative">
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </AuthContextProvider>
        </div>
    )
}

export default App
