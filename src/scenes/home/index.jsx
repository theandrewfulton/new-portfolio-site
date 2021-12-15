import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// import common styles
import { PageTransparency, PageContent, StyledButton} from '../styles'

// import page contents
import {HomeObject} from "./homeCopy"

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
const TimeGreeting = () => {
    const currentTime = new Date()
    const timeConvert = currentTime.getHours()

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

// this component is silly
const HomeIntroduction = ({homeLine2, homeLine3, homeLine4}) => {
return (
    <>
        <h2>{homeLine2}</h2>
        <h3>{homeLine3}</h3>
        <p>{homeLine4}</p>
    </>
)
}

export const Home = () => {
    return (
        <PageTransparency>
            <PageContentExtended>
                {/* <p>This is the Home component</p> */}
                <h1><TimeGreeting /></h1>
                <HomeIntroduction {...HomeObject} />
                <a href={process.env.PUBLIC_URL + 'files/AndrewFulton.pdf'} target="_blank" rel="noopener noreferrer"><StyledButton>Download Resume</StyledButton></a>
                <NavLink to="/contact"><StyledButton>Contact Me</StyledButton></NavLink>
            </PageContentExtended>
        </PageTransparency>
    )
}