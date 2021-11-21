import { NavLink } from "react-router-dom"

export const NavContent = () => {
    return(
        <>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/projects">Projects</NavLink>
            <a href="https://theandrewfulton.medium.com" target="_blank" rel="noopener noreferrer">Articles</a>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </>
    )
}