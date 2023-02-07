import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useLogin } from "../hooks/useSignIn.js"
import { navbar as Navbar } from "../components/navbar"

const signIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { error, isPending, login } = useLogin()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)
            navigate(from, { replace: true })
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    const handleHome = () => {
        navigate("/")
    }

    return (
        <>
            <Navbar />
            <div className="max-w-[700px] mx-auto my-16 p-4">
                <div>
                    <h1 className="text-3xl mb-4">Sign In</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label>Email Address</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label>Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p>{error}</p>}
                    <div className="mb-4">
                        <p>
                            Don't have an account?{" "}
                            <a
                                href="/signup"
                                className="text-blue-400 underline"
                            >
                                SignIn
                            </a>
                        </p>
                    </div>
                    {!isPending && (
                        <button className="submit bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                            Sign In
                        </button>
                    )}
                    {isPending && (
                        <button
                            className="btn bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                            disabled
                        >
                            loading...
                        </button>
                    )}
                </form>
            </div>
        </>
    )
}

export default signIn
