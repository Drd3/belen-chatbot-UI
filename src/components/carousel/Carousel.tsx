import { Box, Modal, Typography } from "@mui/material"
import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/css';
import ChatImage from "../ChatImage";
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

type props = {
    open: boolean,
    onClose: (close: boolean) => void,
    imgList: string[]
}

const Carousel: React.FC<props> = ({open, onClose, imgList}) => {

    useEffect(() => {

    },[])

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const handleClose = () => {
        onClose(false);
    };

    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
            
        >
            <>
                <Swiper
                    navigation={true}
                    modules={[Navigation, Pagination, Thumbs]}
                    onClick={handleClose}
                    centeredSlides={true}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    className="mySwiper"
                >
                    {imgList.map(imgUrl => {
                        return(
                            <SwiperSlide 
                                key={crypto.randomUUID()}
                                style={{ height: '100vh', display: "flex", alignItems: "center", justifyContent: "center"}}
                                
                            >
                                <Box
                                sx={{position: "relative"}}>
                                    <ChatImage src={imgUrl}/>
                                    <Box 
                                        sx={{
                                            opacity: .7,
                                            position: 'absolute',
                                            top: "1rem",
                                            right: "1rem",
                                            maxWidth: "300px",
                                            background: "#fff",
                                            padding: "1rem",
                                            borderRadius: "13px",
                                            boxShadow: "-2px 2px 10px -5px #000",
                                            textAlign: 'right',

                                            '&:hover':{
                                                opacity: 1
                                            }
                                        }}
                                    >

                                        <Typography variant="h6">
                                            Playa santa Marta
                                        </Typography>
                                        <Typography variant="body2">
                                            Lorem upsum dolor si t amet concetetur
                                        </Typography>
                                    </Box>
                                </Box>

                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </>
            
        </Modal>
    )
} 

export default Carousel