import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../Hooks/useAuthContext"
import { useSignOut } from "../hooks/useSignOut"
import { navbar as Navbar } from "../components/navbar"
import { useRoleContext } from "../hooks/useRoleContext"
import { USER_ROLES } from "../constants/roles"

const AdminOnlyPage = () => {
    const { userRole } = useContext(useRoleContext)

    if (userRole !== USER_ROLES.ADMIN) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h1>Admin Only Page</h1>
        </div>
    )
}

const dashboard = () => {
    const navigate = useNavigate()
    const { user } = useAuthContext()
    const { userRole } = useRoleContext()

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
                <p>
                    Role:{" "}
                    <span className="text-blue-500">
                        {" "}
                        {user && ` ${userRole.toLowerCase()}`}
                    </span>
                </p>
            </div>
        </>
    )
}

export default dashboard
