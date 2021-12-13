import styled from 'styled-components'
// import common styles
import { PageTransparency, PageContent} from '../styles'

// import page contents
import {AboutObject} from "./aboutCopy"

const AboutFlex = styled.section `
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const PageContentExtended = styled(PageContent)`
    // flex-grow isn't perfect. May need to investigate further of content still wonky
    flex-grow: 1;
    margin: 10px;
`;

// skills article
const SkillsArticle = ({skillsSection}) => {
    return (
        <PageContentExtended>
            <p>{skillsSection}</p>
        </PageContentExtended>
    )
}

// technologies article
const TechnologyArticle = ({technologySection}) => {
    return (
        <PageContentExtended>
            <p>{technologySection}</p>
        </PageContentExtended>
    )
}

// interests article

const InterestsArticle = ({interestsSection}) => {
    return (
        <PageContentExtended>
            <p>{interestsSection}</p>
        </PageContentExtended>
    )
}

export const About = () => {
    return (
        
        <PageTransparency>
            <h1>About Me</h1>
            <AboutFlex>
                <SkillsArticle {...AboutObject} />
                <TechnologyArticle {...AboutObject} />
                <InterestsArticle {...AboutObject} />
            </AboutFlex>
        </PageTransparency>
    )
}