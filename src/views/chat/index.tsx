import { styled } from "@mui/material"
import ChatContent from "./components/ChatContent";
import ChatHeader from "./components/ChatHeader";
import ChatInput from "./components/ChatInput";


const ChatContainer = styled('div')(
    {
        boxSizing: "border-box",
        backgroundColor: '#fff',
        boxShadow: "0px 0px 12px -2px #00000045",
        display: "flex",
        flexDirection: "column",
        height: "100%",

        '@media screen and (min-width:576px)':{
            borderRadius: 20,
            margin: "auto",
            width: "90%",
            maxHeight: "750px",
            maxWidth: "1100px",
            padding: "1.3rem",
            gap: ".3rem",
        }
    }
);

const ChatBot = () => {
    

    return(
        <ChatContainer 
            className='container' 
        >   
            <ChatHeader/>
            <ChatContent/>
            <ChatInput/>
            
        </ChatContainer>
      
    )
} 


export default ChatBot