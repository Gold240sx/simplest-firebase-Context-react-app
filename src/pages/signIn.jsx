import React, { useState, useRef, useEffect } from "react"
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
    const userRef = useRef()
    const errRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = document.querySelector("form")
        form.reset()

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

    useEffect(() => {
        userRef.current.focus()
    }, [])

    return (
        <>
            <Navbar />
            <section className="max-w-[700px] mx-auto my-16 p-4">
                <p
                    ref={errRef}
                    className={error ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                >
                    {error}
                </p>
                <div>
                    <h1 className="text-3xl mb-4">Sign In</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            ref={userRef}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="off"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
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
            </section>
        </>
    )
}

export default signIn
