import React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
// import axios from "../api/axios"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
// import useRefreshToken from "../hooks/useRefreshToken"

const users = () => {
    const [users, setUsers] = useState()
    const axiosPrivate = useAxiosPrivate()
    // const refresh = useRefreshToken()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get("/users", {
                    signal: controller.signal,
                })
                console.log(response.data)
                isMounted && setUsers(response.data)
            } catch (err) {
                console.log(err)
                //logs them out but after login, they get put right back to where they were before being logged out.
                navigate("/login", { state: { from: location }, replace: true })
            }
        }
        getUsers()

        return () =>
            //clean up function
            (isMounted = false)
        //cancel requests
        controller.abort()
    }, [])

    return (
        <article>
            <h2>User's List</h2>
            {users?.length ? (
                <ul>
                    {users.map((user, i) => (
                        <li key={i}>{user?.username}</li>
                    ))}
                </ul>
            ) : (
                <p>no users to display</p>
            )}
            {/* <button onClick={() => refresh()}>Refresh</button> */} //this
            button verifies that the axios access token works.
            <br />
        </article>
    )
}

export default users
