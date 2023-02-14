// import axios from "../api/axios"
// import { useAuthContext } from "./useAuthContext"

// const useRefreshToken = () => {
//     //how this pulls in useAuth may or may not be the same as how i currently have it implimented.
//     //dave's code the values are set as user and setuser in the  authProvider, in ours we have ...state and dispatch.
//     const { useAuth } = useAuthContext()
//     const { setAuth } = useAuth()

//     const refresh = async () => {
//         const response = await axios.get("/refresh", {
//             //this setting allows us to send cookies with our request
//             withCredentials: true,
//         })

//         setAuth((prev) => {
//             console.log(JSON.stringify(prev))
//             console.log(response.data.accessToken)
//             return { ...prev, accessToken: response.data.accessToken }
//         })
//         return response.data.accesstoken
//     }
//     return refresh
// }
