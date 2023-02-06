import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../Hooks/useAuthContext"
import { useSignOut } from "../hooks/useSignOut"

const dashboard = () => {
    const navigate = useNavigate()
    const { user } = useAuthContext()
    const { logout } = useSignOut()

    return (
        <div className="max-w-[600px] mx-auto my-16 p-4">
            <h1 className="text-2xl font-bold py-4">Dashboard</h1>
            <p>User Email: {user && user.email}</p>
            <div>Avatar</div>
            <p>Position:</p>
            <button onClick={logout} className="border px-6 py-2 my-4">
                Logout
            </button>
        </div>
    )
}

export default dashboard
