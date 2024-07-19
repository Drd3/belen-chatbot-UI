import styled from "@emotion/styled"
import { Typography, useMediaQuery, useTheme } from "@mui/material"

const HeaderContainer = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    padding: ".5rem 1rem",
    background: 'url("liquid-cheese.svg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    backgroundPosition: "center", 
    color: "#000",

    '& img':{
        width: "50px", 
        height: "50px", 
        marginRight: "1rem", 
        borderRadius: "50px"
    },

    '@media screen and (min-width: 576px)':{
        paddingBottom: "1rem",
        margin: "0 1rem",
        background: `#fff;`,
        borderBottom: "2px solid #e6e6e6",

        '& img':{
            width: "70px", 
            height: "70px", 
    },
    }
    
}))

const ChatHeader = () => {

    const theme = useTheme()

    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"))

    return(
        <HeaderContainer>
            <div>
                <img src="belen-bot2.png" style={{}} alt=""/>
            </div>
            <div>
                <Typography 
                    variant={isDesktop ? "h4" : "h5"} 
                    align="left" 
                    fontWeight={500}
                    marginBottom={"0"}
                    lineHeight={.7}
                >
                    Belén
                </Typography>
                <Typography 
                    variant={isDesktop ? "h6" : "body1"} 
                    align="left" 
                    fontWeight={300}
                >
                    Tu guia asistente.
                </Typography>
            </div>
        </HeaderContainer>
    )
}

export default ChatHeader