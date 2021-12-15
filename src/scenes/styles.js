import styled from "styled-components"
// Could this move to App in future and pass title and content as params?

// Styling for semi-transparent box around page content
export const PageTransparency = styled.section`
    background: radial-gradient(100% 241.89% at 100% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 15px;
    margin: 30px 5%;
    padding: 5px 5% 50px 5%;
    text-align: center;
`
// Styling for page content
export const PageContent = styled.article `
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(40px);
    border-radius: 15px;
    margin: auto;
    padding: 4%;
    text-align: left;
`

export const StyledButton = styled.button `
    margin: 10px;
    width: 150px;
    color: white;
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(40px);
    border-radius: 15px;
    padding: 10px;
    :hover {
        background: radial-gradient(100% 100% at 49.55% 100%, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0.2) 100%);
    }
`