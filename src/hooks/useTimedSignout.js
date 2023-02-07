import { useAuthContext } from "./useAuthContext"
import { useSignOut } from "./useSignOut"
//original function: https://stackoverflow.com/questions/58899127/automatically-signout-users-using-firebase
//I've tried to modify to work within my application.

//THIS FUNCTION IS CURRENTLY ENTIRELY UNTESTED.

export const useTimedSignout = () => {
    const { user, dispatch } = useAuthContext()

    let userSessionTimeout = null

    if (!user && userSessionTimeout) {
        clearTimeout(userSessionTimeout)
        userSessionTimeout = null
    } else {
        user.getIdTokenResult().then((idTokenResult) => {
            const authTime = idTokenResult.claims.auth_time * 1000
            const sessionDurationInMilliseconds = 60 * 60 * 1000 // 1 hour
            const expirationTimeout = setTimeout(
                () => dispatch({ type: "SIGNOUT" }),
                sessionDurationInMilliseconds - (Date.now() - authTime)
            )
            useSignOut(expirationTimeout)
        })
    }

    const signout = () => {
        dispatch({ type: "SIGNOUT" })
    }

    return { signout }
}
