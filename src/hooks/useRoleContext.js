import { RoleContext } from "../context/RoleContext"
import { useContext } from "react"

export const useRoleContext = () => {
    const context = useContext(RoleContext)

    if (!context) {
        throw Error("useAuthContext must be used inside an AuthContextProvider")
    }

    return context
}
