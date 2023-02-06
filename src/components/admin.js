import { Link } from "react-router-dom"
import { users } from "./users"

const admin = () => {
    return (
        <section>
            <h1>Admin's Page</h1>
            <br />
            <users />
            <br />
            <div className="flexgrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}
