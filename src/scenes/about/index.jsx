import styled from 'styled-components'
import { GiSkills, GiLaddersPlatform, GiBookPile } from "react-icons/gi";

// import common styles
import { PageTransparency, PageContent, StyledButton} from '../styles'

// import page contents
import {AboutObject} from "./aboutCopy"

const AboutFlex = styled.section `
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const PageContentExtended = styled(PageContent) `
    // flex-grow isn't perfect. May need to investigate further of content still wonky
    flex-grow: 1;
    margin: 10px;
    width: 200px;
`

const PageTransparencyPadding = styled(PageTransparency) `
    padding-bottom: 10px;
`

const IconStyling = styled(PageContent) `
    text-align: center;
`

// Repetition of articles could be reduced with some javascript logic to apply
// a certain style for each object. Although the current code is easier to understand

// skills article
const SkillsArticle = ({skillsSection}) => {
    return (
        <PageContentExtended>
            <IconStyling>
                <GiSkills size="5em"/>
            </IconStyling>
            <p data-testid="skills-copy">{skillsSection}</p>
        </PageContentExtended>
    )
}

// technologies article
const TechnologyArticle = ({technologySection}) => {
    return (
        <PageContentExtended>
            <IconStyling>
                <GiLaddersPlatform size="5em" />
            </IconStyling>
            <p data-testid="technology-copy">{technologySection}</p>
        </PageContentExtended>
    )
}

// interests article

const InterestsArticle = ({interestsSection}) => {
    return (
        <PageContentExtended>
            <IconStyling>
                <GiBookPile size="5em"/>
            </IconStyling>
            <p data-testid="interests-copy">{interestsSection}</p>
        </PageContentExtended>
    )
}

export const About = () => {
    return (
        
        <PageTransparencyPadding>
            <h1>About Me</h1>
            <AboutFlex>
                <SkillsArticle {...AboutObject} />
                <TechnologyArticle {...AboutObject} />
                <InterestsArticle {...AboutObject} />
            </AboutFlex>
            <a href={process.env.PUBLIC_URL + 'files/AndrewFulton.pdf'} target="_blank" rel="noopener noreferrer"><StyledButton>Download Resume</StyledButton></a>
        </PageTransparencyPadding>
    )
}
