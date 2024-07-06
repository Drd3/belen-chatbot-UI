import { Box, CircularProgress, Snackbar, Typography } from "@mui/material"
import ChatMessage from "./ChatMessage"
import { useContext, useEffect, useRef, useState } from "react"
import { ChatContext } from "../../../context/chatContext/chatContext"

const ChatContent = () => {
    const {messageList, historyStatus, getCompleteChatHistory} = useContext(ChatContext)
    const contentWrapper = useRef<HTMLDivElement>(null)
    const [openSnakBar, setOpenSnakbar] = useState<boolean>(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnakbar(false);
      };

    useEffect(() => {
        getCompleteChatHistory()
    },[])

    useEffect(() => {
        if (contentWrapper.current) {
            contentWrapper.current.scrollTop = contentWrapper.current.scrollHeight;
        }
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
                padding: "0 1.5rem",
                overflowY: "auto",
                height: "100%",
            }}

            ref={contentWrapper}
        >
            <Box>
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
                            <Typography variant="h5">Obteniendo historial</Typography>
                        </> 
                    :
                    (messageList.length === 0 && historyStatus === "initial") ||  historyStatus === "failed" ? 
                    
                        <Typography variant="h3" fontWeight={700} color={"GrayText"}>
                            Hola, ¿Qué quieres saber hoy?
                        </Typography>
                    :

                    messageList.map((message : any) => {
                        return(
                            <ChatMessage key={crypto.randomUUID()} message={message.content.text.value} type={message.role}/>
                        )
                    })
                }

                
            </Box>
        </Box>
    )
}

export default ChatContent