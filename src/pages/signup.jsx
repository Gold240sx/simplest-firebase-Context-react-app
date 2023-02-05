import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { createUser } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await createUser(email, password)
            navigate("/dashboard")
        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }
    }

    const handleHome = () => {
        navigate("/")
    }

    return (
        <div className="max-w-[700px] mx-auto my-16 p-4">
            <div>
                <button onClick={handleHome}>Home</button>
            </div>
            <div>
                <h1 className="text-3xl mb-4">SignUp for an account</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label>Email Address</label>
                    <input
                        id="email"
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="mb-4">
                    <label>Password</label>
                    <input
                        id="password"
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="mb-4">
                    <p>
                        Already have an account?{" "}
                        <a href="/signin" className="text-blue-400 underline">
                            Sign In
                        </a>
                    </p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default signup
