import styled from "styled-components"
import { FiGithub, FiMedium, FiTwitter, FiLinkedin, FiTwitch} from "react-icons/fi";
import { AiOutlineMedium } from "react-icons/ai"
import ConfigIcon from "./iconFormat"

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
    padding: 5px;
`

export const Social = () => {
    return (
        <StyledSocial>
            <StyledIcon>
                <a href="https://github.com/theandrewfulton" target="_blank" rel="noopener noreferrer">
                    <ConfigIcon>
                        <FiGithub />
                    </ConfigIcon>
                </a>
            </StyledIcon>
            <StyledIcon>
                <a href="https://theandrewfulton.medium.com" target="_blank" rel="noopener noreferrer">
                    <ConfigIcon>
                        <AiOutlineMedium />
                    </ConfigIcon>
                </a>
            </StyledIcon>
            <StyledIcon>
                <a href="https://twitter.com/theandrewfulton" target="_blank" rel="noopener noreferrer">
                    <ConfigIcon>
                        <FiTwitter />
                    </ConfigIcon>
                </a>
            </StyledIcon>
            <StyledIcon>
                <a href="https://www.linkedin.com/in/andrew-fulton-a713941b0/" target="_blank" rel="noopener noreferrer">
                    <ConfigIcon>
                        <FiLinkedin />
                    </ConfigIcon>
                </a>
            </StyledIcon>
            <StyledIcon>
                <a href="https://www.twitch.tv/andrewdoes" target="_blank" rel="noopener noreferrer">
                    <ConfigIcon>
                        <FiTwitch />
                    </ConfigIcon>
                </a>
            </StyledIcon>
        </StyledSocial>
    )
}