import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// import common styles
import { PageTransparency, PageContent, StyledButton} from '../styles'

// import page contents
// import {AboutObject} from "./aboutCopy"

const PageContentExtended = styled(PageContent) `
    margin-top: 50px;
    text-align: center;

    h1, h2, p {
        margin 50px;
    }

    h1 {
        font-size: 3em;
    }
    h2 {
        font-size: 2em;
    }
`

// greet user based on time
const timeGreeting = () => {
    const currentTime = new Date()
    const timeConvert = currentTime.getHours()
    console.log(timeConvert)

    if (timeConvert < "12" ) {
        return (
            "Good Morning"
        )
    } else if (timeConvert >= "12" && timeConvert < "18") {
        return (
            "Good Afternoon"
        )
    } else if (timeConvert >= "18" && timeConvert < "24") {
        return (
            "Good Evening"
        )
    } else {
        return (
            "Hello"
        )
    }
}

export const Home = () => {
    return (
        <PageTransparency>
            <PageContentExtended>
                {/* <p>This is the Home component</p> */}
                <h1>{timeGreeting()}</h1>
                <h2>My name is Andrew Fulton</h2>
                <h3>I'm a Full-Stack Developer based in Sydney, Australia</h3>
                <p>I also have Consulting, Mentoring and Startup experience</p>
                <a href={process.env.PUBLIC_URL + 'files/AndrewFulton.pdf'} target="_blank" rel="noopener noreferrer"><StyledButton>Download Resume</StyledButton></a>
                <NavLink to="/contact"><StyledButton>Contact Me</StyledButton></NavLink>
            </PageContentExtended>
        </PageTransparency>
    )
}