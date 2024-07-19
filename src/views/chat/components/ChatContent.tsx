import { Box, CircularProgress, Snackbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import ChatMessage from "./ChatMessage"
import { useContext, useEffect, useRef, useState } from "react"
import { ChatContext } from "../../../context/chatContext/chatContext"
import MediaContainer from "./MediaContainer"

const ChatContent = () => {
    const {messageList, historyStatus, getCompleteChatHistory} = useContext(ChatContext)
    const contentWrapper = useRef<HTMLDivElement>(null)
    const [openSnakBar, setOpenSnakbar] = useState<boolean>(false);
    const [imageList, setImageList] = useState<string[]>([])
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnakbar(false);
    };

 
    const handleAction = () => {
        let imgList: string[] = [];

        messageList.forEach((message : any)  => {
            if(message.content.actions !== undefined){
                if(message.content.actions.img !== undefined){
                    imgList = message.content.actions.img
                }
            }
        })
        setImageList(imgList)
    }
    

    useEffect(() => {
        getCompleteChatHistory()
    },[])

    useEffect(() => {
        if (contentWrapper.current) {
            contentWrapper.current.scrollTop = contentWrapper.current.scrollHeight;
        }

        handleAction()
    }, [messageList]);

    useEffect(() => {
        if(historyStatus === "success" || historyStatus=== "failed"){
            setOpenSnakbar(true)
        }
    }, [historyStatus])
    

    return(
        <Box 
            sx={{
                flexGrow: 1,
                flexBasis: "200px",
                width: "100%",
                height: "100%",
                overflowY: "hidden",
            }}
        >
            <Box
                sx={{
                    overflowY: "auto",
                    height: "100%",
                    padding: "0 1.5rem",
                }}
                ref={contentWrapper}
            >
                {
                    <Snackbar
                        anchorOrigin={{vertical : "top", horizontal: "center"}}
                        open={openSnakBar}
                        autoHideDuration={2000}
                        onClose={handleClose}
                        message={historyStatus === "success" ? "Historial obtenido" : historyStatus=== "failed" ? "No se pudo obtener el historial" : null} 
                    />
                }
                {
                    historyStatus === "loading" ?
                        <>
                            <CircularProgress variant="indeterminate" size={"3rem"}/>
                            <Typography variant="h5">Obteniendo historial.</Typography>
                        </> 
                    :
                    (messageList.length === 0 && historyStatus === "initial") ||  historyStatus === "failed" ? 
                    
                        <Typography variant="h3" fontWeight={700} color={"GrayText"}>
                            Hola, ¿A donde te gustaria ir?
                        </Typography>
                    :

                    messageList.map((message : any) => {
                        
                        return(
                            <ChatMessage 
                                key={crypto.randomUUID()}
                                message={message.content.text.value} 
                                type={message.role} 
                                actions={message.content.actions !== undefined ? message.content.actions : null}
                            />
                        )
                    })
                }

            </Box>
        </Box>
    )
}

export default ChatContent