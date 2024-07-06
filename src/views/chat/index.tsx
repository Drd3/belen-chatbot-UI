import { styled } from "@mui/material"
import ChatContent from "./components/ChatContent";
import ChatHeader from "./components/ChatHeader";
import ChatInput from "./components/ChatInput";
import { useContext, useEffect } from "react";
import { ChatContext } from "../../context/chatContext/chatContext";
import axios from "axios";

const ChatContainer = styled('div')(
    {
        boxSizing: "border-box",
        backgroundColor: '#fff',
        boxShadow: "0px 0px 12px -2px #00000045",
        padding: "1.3rem",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        width: "90%",
        maxWidth: "1100px",
        margin: "auto",
        minHeight: 750,
        gap: "1rem",
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