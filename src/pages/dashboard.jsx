import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../Hooks/useAuthContext"
import { useSignOut } from "../hooks/useSignOut"
import { navbar as Navbar } from "../components/navbar"

const dashboard = () => {
    const navigate = useNavigate()
    const { user } = useAuthContext()

    return (
        <>
            <Navbar />
            <div className="max-w-[600px] mx-auto my-16 p-4 font-semibold">
                <h1 className="text-2xl font-bold py-4">Dashboard</h1>
                <p className="">
                    User Email:{" "}
                    <span className="text-blue-500">{user && user.email}</span>
                </p>
                <p className="">
                    Username:{" "}
                    <span className="text-blue-500">
                        {user && user.displayName}
                    </span>
                </p>
                <div>Avatar</div>
                <p>Position:</p>
            </div>
        </>
    )
}

export default dashboard
