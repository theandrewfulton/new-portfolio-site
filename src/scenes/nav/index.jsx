import {
    Link
} from "react-router-dom"

export const NavBar = () => {

    return (
        <nav>
            <p>This is the Nav Bar</p>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

  