import styled from "styled-components"

const StyledSocial = styled.section `
    background: radial-gradient(100% 428429.78% at 100% -0.03%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    margin: 20px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
`
const StyledIcon = styled.article `
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(40px);
    border-radius: 15px;
    /* margin: 10px; */
`

export const Social = () => {
    return (
        <StyledSocial>
            <StyledIcon>
                <p>icon section</p>
            </StyledIcon>
            <StyledIcon>
                <p>icon section</p>
            </StyledIcon>
            <StyledIcon>
                <p>icon section</p>
            </StyledIcon>
        </StyledSocial>
    )
}