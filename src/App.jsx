import { useState } from "react"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"
import { Home, SignIn, Signup, Dashboard } from "./pages/index"
import { useAuthContext } from "./hooks/useAuthContext.js"

function App({ children }) {
    const { user, authIsReady } = useAuthContext()

    return (
        <main className="h-auto w-auto relative">
            {authIsReady && (
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<Home />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<Signup />} />
                        {user && (
                            <Route path="/dashboard" element={<Dashboard />} />
                        )}
                        {!user && (
                            <Route
                                path="/dashboard"
                                element={<Navigate to="/signin" />}
                            />
                        )}
                    </Routes>
                </BrowserRouter>
            )}
        </main>
    )
}

export default App
