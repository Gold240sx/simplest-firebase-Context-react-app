import React, { useState, useEffect, useContext, createContext } from "react"
import { USER_ROLES } from "../constants/roles"
import { useAuthContext } from "../hooks/useAuthContext"

export const RoleContext = createContext({
    userRole: USER_ROLES.SUBSCRIBER,
})

export const RoleProvider = ({ children }) => {
    const { user } = useAuthContext()
    const [userRole, setUserRole] = useState(USER_ROLES.USER)

    useEffect(() => {
        // Get user information from Firebase and store it in state
        const fetchUserData = async () => {
            // const userData = await getUserDataFromFirebase()
            // setUser(userData)
            // setUserRole(userData.role)
            setUserRole(USER_ROLES.ADMIN)
        }
        fetchUserData()
    }, [])

    return (
        <RoleContext.Provider value={{ user, userRole }}>
            {children}
        </RoleContext.Provider>
    )
}
