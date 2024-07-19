import { useMediaQuery, useTheme } from "@mui/material";
import ImageGrid from "../../ImageGrid";
import ChatImage from "../../ChatImage";
import Carousel from "../../carousel/Carousel";
import { useState } from "react";

type props = {
    imgList : string[]
}

const ImagesManager : React.FC<props> = ({imgList}) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [open, setOpen] = useState<boolean>(false)
    const [close, setClose] = useState<boolean>(false)
    const [selectedUrl, setSelectedUrl] = useState<string>('')

    const handleOnClick = (url :string) => {
        setOpen(true)
        setSelectedUrl(url)
    }

    const handleOnClose = (ev : boolean) => {
        setOpen(ev)
    }

    return(
        <>
            <ImageGrid imagesNumber={imgList.length}>
                {imgList.map((imgUrl, index) => {

                    if((index > 3 && isMobile) || (index > 4 && !isMobile)){
                        return;
                    }

                    return(
                        <ChatImage 
                            key={crypto.randomUUID()}
                            src={imgUrl} 
                            onClick={handleOnClick}
                            seeMore={index === 3 && isMobile ? true : index === 4 && !isMobile ? true : false}
                            isPreview={true}
                        />
                    )
                })}
                
            </ImageGrid>

            <Carousel imgList={imgList} open={open} onClose={handleOnClose}/>
        </>
    )
}

export default ImagesManager