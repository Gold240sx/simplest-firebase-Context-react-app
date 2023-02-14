import React from "react"
import { navbar as Navbar } from "../components/navbar"

const home = () => {
    return (
        <div>
            <Navbar />
            <section className="container m-auto w-full h-screen flex justify-center align-middle">
                <div className="card bg-gray-200 w-1/2 h-1/2 rounded-lg flex my-auto prose">
                    <h1 className="flex text-center m-auto w-fit bg-gray-200 h-fit">
                        This is a home screen
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default home
