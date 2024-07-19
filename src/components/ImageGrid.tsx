import { Box, useTheme, useMediaQuery } from "@mui/material"
import { styled } from "@mui/system"
import { ReactNode } from "react"

type props ={
    children: ReactNode,
    imagesNumber: number
}

const ImageGridContainer = styled(Box)(({length} : {length : number}) => ({
    width: "100%",
    display: "grid",
    boxSizing: 'border-box',
    
    gridTemplateColumns: 
        length === 1 ? '1fr' : '1fr 1fr',
        
    gridTemplateRows: 
        length <= 2 ? 'auto' :
        '150px 150px',

    gap: ".5rem",

    '@media screen and (min-width: 600px)':{
        gridTemplateColumns: 
        length === 1 ? '1fr' :
        length === 2 ? '1fr 1fr' :
        length === 3 ? '2fr 1fr' :
        '2fr 1fr 1fr',

        gridTemplateRows: 
        length <= 2 ? 'auto' :
        '100px 100px'
        ,
        
        '& :first-of-type':{
            gridRow: length >= 3 ? '1 / span 2' : "1"
        },
    },

    '@media screen and (min-width: 900px)':{
        width: "90%",

        gridTemplateColumns: 
        length > 3 && '2.5fr 1fr 1fr',

        gridTemplateRows: 
        length <= 2 ? 'auto' :
        '140px 140px'
        ,
        
    },
}));

const ImageGrid: React.FC<props> = ({children, imagesNumber}) => {

    return (
        <ImageGridContainer length={imagesNumber}>
            {children} 
        </ImageGridContainer>
    )
}

export default ImageGrid