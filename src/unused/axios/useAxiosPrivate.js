// //this hook attatches interceptors

// import { axiosPrivate } from "../api/axios"
// import { useEffect } from "react"
// import useRefreshToken from "./useRefreshToken"
// import useAuth from "../../hooks/useAuthContext"

// const useAxiosPrivate = () => {
//     const refresh = useRefreshToken()
//     //how this pulls in useAuth may or may not be the same as how i currently have it implimented.
//     //dave's code the values are set as user and setuser in the  authProvider, in ours we have ...state and dispatch.
//     const { auth } = useAuth()

//     useEffect(() => {
//         const requestIntercept = axiosPrivate.interceptors.request.use(
//             (config) => {
//                 if (!config.headers["Authorization"]) {
//                     config.headers[
//                         "Authorization"
//                     ] = `Bearer ${auth?.accessToken}`
//                 }
//                 return config
//             },
//             (error) => Promise.reject(error)
//         )

//         const responseIntercept = axiosPrivate.interceptors.response.use(
//             (response) => response,
//             async (error) => {
//                 const prevRequest = error?.config
//                 if (error?.response?.status === 403 && !prevRequest?.sent) {
//                     prevRequest.sent = true
//                     const newAccessToken = await refresh()
//                     prevRequest.headers[
//                         "Authorization"
//                     ] = `Bearer ${newAccessToken}`
//                     return axiosPrivate(prevRequest)
//                 }
//                 return Promise.reject(error)
//             }
//         )
//         return () => {
//             axiosPrivate.interceptors.request.eject(requestIntercept)
//             axiosPrivate.interceptors.response.eject(responseIntercept)
//         }
//     }, [auth, refresh])
//     return axiosPrivate
// }

// export default useAxiosPrivate
