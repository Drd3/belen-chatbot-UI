import styled from "@emotion/styled"
import { Typography } from "@mui/material"

const HeaderContainer = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    padding: ".5rem 1rem",
    background: `#E1576E;`,
    color: "#000",

    '@media screen and (min-width: 576px)':{
        paddingBottom: "1rem",
        margin: "0 1rem",
        background: `#fff;`,
        borderBottom: "2px solid #e6e6e6"
    }
    
}))

const ChatHeader = () => {
    return(
        <HeaderContainer>
            <div>
                <img src="belen-bot2.png" style={{width: "70px", height: "70px", marginRight: "1rem", borderRadius: "50px"}} alt=""/>
            </div>
            <div>
                <Typography 
                    variant="h4" 
                    align="left" 
                    fontWeight={800}
                    marginBottom={"0"}
                    lineHeight={.7}
                >
                    BELÉN
                </Typography>
                <Typography 
                    variant="h6" 
                    align="left" 
                    fontWeight={700}
                >
                    TU GUIA ASISTENTE.
                </Typography>
            </div>
        </HeaderContainer>
    )
}

export default ChatHeader