import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const signIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { signIn } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await signIn(email, password)
            navigate("/dashboard")
        } catch (e) {
            setError(e.message)
            console.log(e.message)
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
                <div className="mb-4">
                    <p>
                        Don't have an account?{" "}
                        <a href="/signup" className="text-blue-400 underline">
                            Signup
                        </a>
                    </p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default signIn
