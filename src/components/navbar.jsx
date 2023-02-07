import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useSignOut } from "../hooks/useSignOut"

export const navbar = () => {
    const { user } = useAuthContext()
    const { logout } = useSignOut()
    const location = useLocation()

    //console.log(location.pathname)

    return (
        <div className="w-full bg-slate-300 dark:bg-slate-700 h-12">
            <div className="flex justify-between items-center h-full">
                <div className="flex items-center">
                    <Link to="/home">
                        <div className="ml-4">
                            <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                                Logo
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center">
                    {!user && (
                        <div className="mr-4">
                            <Link to="/signIn">
                                <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                    Sign In
                                </h1>
                            </Link>
                        </div>
                    )}
                    <div className="mr-4">
                        {user && (
                            <Link to="/dashboard">
                                <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                    Account
                                </h1>
                            </Link>
                        )}
                    </div>
                    <div className="mr-4">
                        {!user && (
                            <Link to="/signUp">
                                <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                    Sign Up
                                </h1>
                            </Link>
                        )}
                    </div>
                    <div className="mr-4">
                        {user && (
                            <h1
                                className="text-lg font-semibold text-slate-800 dark:text-slate-200 cursor-pointer"
                                onClick={logout}
                            >
                                Logout
                            </h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
