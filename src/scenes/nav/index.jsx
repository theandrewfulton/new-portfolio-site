import { Link } from "react-router-dom"

export const NavContent = () => {
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <a href="https://theandrewfulton.medium.com" target="_blank" rel="noopener noreferrer">Articles</a>
            <Link to="/contact">Contact</Link>
        </>
    )
}