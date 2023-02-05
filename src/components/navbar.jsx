import React from "react"
import { Link } from "react-router-dom"

export const navbar = () => {
    return (
        <div className="w-full bg-slate-300 dark:bg-slate-700 h-12">
            <div className="flex justify-between items-center h-full">
                <div className="flex items-center">
                    <div className="ml-4">
                        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                            Logo
                        </h1>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="mr-4">
                        <Link to="/signIn">
                            <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                Login
                            </h1>
                        </Link>
                    </div>
                    <div className="mr-4">
                        <Link to="/signUp">
                            <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                Sign Up
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
