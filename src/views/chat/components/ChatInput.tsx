import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react";
import { ChatContext } from "../../../context/chatContext/chatContext";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { grey } from "@mui/material/colors";


const ChatTextField = styled(TextField)({
    '& fieldset': {
        border: "0 !important",
        maxHeight: "46px",
    },
    '&:hover fieldset': {
        borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
        borderColor: '#fff',
    },
});

const ChatInputContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    backgroundColor: "#F5F5F5",
    borderRadius: "30px",
    padding: ".4rem",
    paddingLeft: "1.2rem",

    margin: ".7rem .8rem",

    '@media screen and (min-width: 576px)':{
        margin: "0",
    }
});


const stringVeritication = (str : string) => {
    return /[a-zA-Z]/.test(str);
};

const ChatInput = () => {
    const {sendPrompt, systemStatus} = useContext(ChatContext)
    const [prompt, setPrompt] = useState<string>("");


    const handleOnChange = (val : any) => {
        let value = val.target.value
        setPrompt(value)
    }

    const handleClick = () => {
        if(stringVeritication(prompt)){
            sendPrompt(prompt)
            setPrompt("")
        }
    }

    const handleKeyDown = (e : any) => {
        if(stringVeritication(prompt) && e.key === 'Enter'){
            e.preventDefault()
            sendPrompt(prompt)
            setPrompt("")
        } 
    }

    return(
        <Box 
            sx={{
                borderTop: "1px solid #e6e6e6",
                '@media screen and (min-width: 576px)': {
                    borderTop: "none",
                }
            }}
        >
            <Typography 
                variant="caption" 
                fontWeight={700} 
                color={"GrayText"}
                display={"block"}
                textAlign={"left"}
                margin={"0 0 .3rem 1.5rem"}
                >
                    {systemStatus === "loading" ? "Belen esta pensando..." : ""}
                </Typography>
            <ChatInputContainer>
                <ChatTextField
                    label= "Habla con Belén ;)"
                    multiline
                    value={prompt}
                    onChange={(val) => handleOnChange(val)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    sx={{flexGrow: 1}}
                    size="small"
                />
                <Button 
                    variant='contained' 
                    onClick={() => handleClick()}
                    disabled = {!stringVeritication(prompt) || systemStatus === "loading"}
                    sx={{
                        padding: 0,
                        borderRadius: "50px",
                        minHeight: "40px",
                        minWidth: "40px"
                    }}
                    >
                        <ArrowUpwardIcon fontSize={"small"} />
                    </Button>
            </ChatInputContainer>
        </Box>
        
    )
}

export default ChatInput