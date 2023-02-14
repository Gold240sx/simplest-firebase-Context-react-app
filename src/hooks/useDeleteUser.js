import { deleteUser } from "firebase/auth"
import { Navigate, redirect } from "react-router-dom"
import { auth } from "../db/firebase"

const user = auth.currentUser

export const handleDeleteAlert = async () => {
    try {
        if (window.confirm("Are you sure you want to delete your account?")) {
            console.log("user", user)
            await deleteUser(user)
            // .then(() => {
            //     redirect("/")
            // })
            // .catch((error) => {
            //     console.log(("error", error.message))
            // })
        }
    } catch (err) {
        console.log("try error", err.message)
    }
}
