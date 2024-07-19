import styled from "@emotion/styled"
import { useContext, useEffect } from "react"
import { ChatContext } from "../../../context/chatContext/chatContext"
import { useMediaQuery, useTheme } from "@mui/material"


type props = {
    actionsContent: any[]
}


const MediaContainer: React.FC<props> = ({actionsContent}) => {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

    const ContainerStyles = styled("div")({
        height: "100%",
        flexGrow: 2,
        padding: actionsContent.length > 0 ? "1rem" : 0,
        width: actionsContent.length > 0 ? "70%" : "0"
    })
    
    const Img = styled("img")({
        maxWidth: "100%",
        borderRadius: "20px"
    })
    
    return (
        <>
            {
            isDesktop ? 
                <ContainerStyles>
                    {actionsContent.length > 0 ?
                        actionsContent.map( img =>  {
                            return(
                                <Img src={img} alt=""/>
                            )
                        })
                        : null
                    }
                </ContainerStyles>
            : null
        }
        </>
    )
}

export default MediaContainer