import { Box, styled } from "@mui/material"
import ChatContent from "./components/ChatContent";
import ChatHeader from "./components/ChatHeader";
import ChatInput from "./components/ChatInput";
import MediaContainer from "./components/MediaContainer";


const MainContainer = styled(Box)({
    backgroundColor: '#fff',
    boxShadow: "0px 0px 12px -2px #00000045",
    overflowY: "hidden",
    

    '@media screen and (min-width:600px)':{
        borderRadius: 20,
        height: '100vh',
        margin: "auto",
        width: "90%",
        maxHeight: "750px",
        maxWidth: "1100px",
        padding: "1.3rem",
        gap: ".3rem",
    }
    
})

const ChatContainer = styled('div')(
    {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        height: "100dvh",

        '@media screen and (min-width:576px)':{
            height: "100%",
            margin: "auto",
            gap: ".3rem",
        }
    }
);

const ChatBot = () => {
    return(
        <MainContainer>
            <ChatContainer 
                className='container' 
            >   
                <ChatHeader/>
                <ChatContent/>
                <ChatInput/>
            </ChatContainer>
        </MainContainer>
    )
} 


export default ChatBot