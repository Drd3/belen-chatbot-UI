import { Box, styled, Typography, useTheme } from "@mui/material"
import React from "react"

type props = {
    src : string
    seeMore?: boolean,
    onClick?: (url : string) => void,
    isPreview? : boolean
}

const Image = styled("div")(({isPreview} : {isPreview?: boolean}) => ({
    maxWidth: "100%",
    height: isPreview ? "auto" : "500px",
    overflow: "hidden",
    borderRadius: 10,
    cursor: "pointer",
    position: "relative",

    '@media screen and (min-width: 600px)': {
        borderRadius: 15,
    },

    '&: hover img':{
        transform: isPreview ? 'scale(1.1)' : 'none',
        filter: isPreview ?  'brightness(80%)' : 'none'
    },

    '& img':{
        position: "relative",
        height: "100%",
        width: "100%",
        objectFit: "cover",
        transition: ".2s ease-in"
    }
}))

const ChatImage: React.FC<props> = ({src, seeMore, onClick, isPreview}) => {
    const theme = useTheme()
    
    const handleOnClick = () => {
        if(onClick){
            onClick(src)
        }
    }

    return(
        <Image onClick={() => handleOnClick()} isPreview = {isPreview} >
            <img src={src} alt=""/>
            {seeMore ? 
                <Box 
                    sx={{
                        position: "absolute",
                        background: 
                        `
                            radial-gradient(circle at bottom left,transparent 25%,#ff2626 25.5%, #ff2626 36%, transparent 37%, transparent 100%),radial-gradient(circle at top right,transparent 34%,#ff2626 34.5%, #ff2626 45.5%, transparent 46%, transparent 100%);
                            background-size: 3em 3em;
                            background-color: #E94560;
                            opacity: 0.45`,
                        width: "100%",
                        height: "100%",
                        top: 0,
                        display: "flex",
                        color: "#fff",
                        justifyContent: "center",
                        alignItems: "center",

                        '& :hover':{
                            transform: 'scale(1.1)'
                        }
                    }}
                >
                   <Typography variant="h6">Ver más</Typography>
                </Box>
            : null }
        </Image>  
    )
}

export default ChatImage