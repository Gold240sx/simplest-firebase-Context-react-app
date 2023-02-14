import React, { useState, useRef, useEffect } from "react"
import { addDoc, doc, collection } from "firebase/firestore"
import { useSignup } from "../Hooks/useSignup.js"
import { Link, useNavigate } from "react-router-dom"
import { navbar as Navbar } from "../components/navbar.jsx"
import {
    faCheck,
    faTimes,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import genericAvatar from "../assets/images/generic.png"

const USER_REGEX = /^[a-zA-Z0-9_]{3,23}$/
const PWD_REGEX =
    /^(?=.*[a-x])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%"("")"]).{8,24}$/
const EML_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const signup = () => {
    const userRef = useRef()
    const errRef = useRef()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)
    const [eml, setEml] = useState("")
    const [validEml, setValidEml] = useState(false)
    const [emlFocus, setEmlFocus] = useState(false)
    const [pwd, setPwd] = useState("")
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)
    const [matchPwd, setMatchPwd] = useState("")
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState(false)
    const [submit, setSubmit] = useState(false)
    const { error, isPending, signup } = useSignup()

    //1st useEffect sets the focus when the component loads
    useEffect(() => {
        userRef.current.focus()
    }, [])

    //2nd useEffect applied to the username to validate it.
    useEffect(() => {
        const result = USER_REGEX.test(username)
        // console.log(result, user);
        setValidName(result)
    }, [username])

    //3rd useEffect for email, status on failed submission
    useEffect(() => {
        const result = EML_REGEX.test(eml)
        //console.log(result, userName);
        setValidEml(eml)
    }, [eml])

    //4th useEffect for the Password Regex and state
    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        //console.log(result, pwd);
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    //5th useEffect for the error message
    useEffect(() => {
        setErrMsg("")
    }, [username, eml, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const v1 = USER_REGEX.test(username)
        const v2 = PWD_REGEX.test(pwd)
        const v3 = EML_REGEX.test(eml)
        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry")
            return
        }

        setSuccess(true)
        signup(eml, pwd, username)
    }

    const handleHome = () => {
        navigate("/")
    }

    return (
        <>
            {success ? (
                <>
                    <h1>Success! Account Created.</h1>
                    <p>
                        <a
                            href="/dashboard"
                            className="text-blue-400 underline"
                        >
                            Go to 'Account'
                        </a>
                    </p>
                    <p
                        ref={errRef}
                        className={errMsg ? "errMsg" : "offscreen"}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                </>
            ) : (
                <>
                    <Navbar />
                    <div className="max-w-[700px] mx-auto my-16 p-4">
                        <div>
                            <h1 className="text-3xl mb-4">
                                Sign up for an account
                            </h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/*=============================================================
                        Username
                        ===============================================================*/}
                            <div className="mb-4">
                                <label
                                    htmlFor="username"
                                    className="flex flexrow align-middle h-fit items-center"
                                >
                                    <p className="mr-2">Username:</p>
                                    <span
                                        className={validName ? "valid" : "hide"}
                                    >
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <span
                                        className={
                                            validName || !username
                                                ? "hide"
                                                : "invalid"
                                        }
                                    >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                </label>
                                <input
                                    id="username"
                                    type="username"
                                    autoComplete="off"
                                    ref={userRef}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    value={username}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                                <p
                                    id="uidnote"
                                    className={`${
                                        userFocus && username && !validName
                                            ? "instructions"
                                            : "offscreen"
                                    } text-gray-400 text-sm mt-2 ml-2 hidden`}
                                >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4-24 characters.
                                    <br />
                                    Must being with a letter.
                                    <br />
                                    Letters, numbers, underscores, and hyphens
                                    are allowed.
                                </p>
                            </div>
                            {/*=============================================================
                        Email
                        ===============================================================*/}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="flex flexrow align-middle h-fit items-center"
                                >
                                    <p className="mr-2">Email Address:</p>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className={validEml ? "valid" : "hide"}
                                    />
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className={
                                            validEml || !eml
                                                ? "hide"
                                                : "invalid"
                                        }
                                    />
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    onChange={(e) => setEml(e.target.value)}
                                    value={eml}
                                    required
                                    aria-invalid={validEml ? "false" : "true"}
                                    aria-describedby="emlnote"
                                    onFocus={() => setEmlFocus(true)}
                                    onBlur={() => setEmlFocus(false)}
                                />
                                <p
                                    id="emlnote"
                                    className={`${
                                        submit && !validEml
                                            ? "instructions"
                                            : "offscreen"
                                    } text-gray-400 text-sm mt-2 ml-2 hidden`}
                                >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Please provide a valid Email <br />
                                </p>
                            </div>
                            {/*=============================================================
                        Password
                        =============================================================== */}
                            <div className="mb-4">
                                <label className="mr-2">Password:</label>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className={validPwd ? "valid" : "hide"}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className={
                                        validPwd || !pwd ? "hide" : "invalid"
                                    }
                                />
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                    autoComplete="off"
                                    aria-invalid={validPwd ? "false" : "true"}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                />
                                <p
                                    id="pwdnote"
                                    className={`${
                                        pwdFocus && !validPwd
                                            ? "instructions"
                                            : "offscreen"
                                    } text-gray-400 text-sm mt-2 ml-2 hidden`}
                                >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 24 characters.
                                    <br />
                                    Must include uppercase and lowercase
                                    letters, a number and a special character.
                                    <br />
                                    Allowed special characters:{" "}
                                    <span aria-label="exclamation mark">
                                        !
                                    </span>{" "}
                                    <span aria-label="at symbol">@</span>{" "}
                                    <span aria-label="hashtag">#</span>{" "}
                                    <span aria-label="dollar sign">$</span>{" "}
                                    <span aria-label="percent">%</span>
                                    <span aria-label="parenthesis left">(</span>
                                    <span aria-label="parenthesis right">
                                        )
                                    </span>
                                </p>
                            </div>
                            {/*=============================================================
                        Password Confirm
                        ===============================================================*/}
                            <label
                                htmlFor="confirm_pwd"
                                className="flex flexrow align-middle h-fit items-center"
                            >
                                <p className="mr-2 ">Confirm Password:</p>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className={
                                        validMatch && matchPwd
                                            ? "valid"
                                            : "hide"
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className={
                                        validMatch || !matchPwd
                                            ? "hide"
                                            : "invalid"
                                    }
                                />
                            </label>
                            <input
                                type="password"
                                id="confirm_pwd"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                value={matchPwd}
                                required
                                autoComplete="off"
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                            <p
                                id="confirmnote"
                                className={`${
                                    matchFocus && !validMatch
                                        ? "instructions"
                                        : "offscreen"
                                } text-gray-400 text-sm mt-2 ml-2 hidden`}
                            >
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Must match the first password input field.
                            </p>
                            <div className="mb-4 mt-5">
                                <p>
                                    Already have an account?{" "}
                                    <Link
                                        to="/signin"
                                        className="text-blue-400 underline"
                                    >
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                            {!isPending && (
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                                    disabled={
                                        !validName || !validPwd || !validMatch
                                            ? true
                                            : false
                                    }
                                >
                                    Sign Up
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
                            {errMsg && <p className="error">{errMsg}</p>}
                        </form>
                    </div>
                </>
            )}
        </>
    )
}

export default signup
