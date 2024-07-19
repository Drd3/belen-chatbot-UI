import { styled } from "@mui/material";
import Markdown from "react-markdown";
import ActionsManager from "../../../components/actionsManager/ActionsManager";

const Message = styled(Markdown)({
    '& > p':{
        margin: "0" 
    }
});


interface props {
    message: string,
    type : "user" | "assistant",
    actions: any | null
}

const ChatContainer = styled("div")({
    marginBottom: "3rem",
    maxWidth: "100%",

    "@media screen and (min-width: 576px)":{
        display: "flex", 
        gap: "1rem", 
        marginBottom: "4rem",

        "& img":{
            marginLeft: "0 !important"
        }
    }
})

const ChatMessage : React.FC<props> = ({message, type, actions}) => {

    return(
        <>
        {
            type === "assistant" ? 
            <ChatContainer>
                <img 
                    src="./belen-bot2.png" 
                    alt=""
                    style={{
                        display: "block",
                        width: 50, 
                        height: 50, 
                        borderRadius: "50px", 
                        marginBottom: ".5rem"
                    }}
                />
                <div>
                    <div
                        style=
                        {
                            {
                                maxWidth: "700px",
                                textAlign: "left",
                            }
                    
                        }
                    >
                        <Message>
                            {message}
                        </Message>
                    </div>
                    
                    <div style={{marginTop: "1rem", maxWidth: "100%"}}>
                        {
                            actions !== null ?
                                <ActionsManager actionList={actions}/>
                            :null
                        }
                    </div>
                </div>
                
            </ChatContainer>
            :
            <ChatContainer>
                <img 
                    src="./user.png" 
                    alt=""
                    style={{
                        width: 44, 
                        height: 45, 
                        borderRadius: "50px", 
                        marginTop: "6px",
                        display: "block",
                        marginLeft: "auto",
                        marginBottom: ".5rem",
                        order: 2
                    }}
                />
                <div
                    style=
                    {
                        {
                            marginLeft: "auto",
                            textAlign: "right",
                            maxWidth: 700,
                            width: "fit-content",
                            backgroundColor: '#F5F5F5',
                            padding: "1.2rem 2rem",
                            borderRadius: 18,
                            whiteSpace: 'pre-line',
                        }
                
                    }
                
                >
                    <Message>
                        {message}
                    </Message>
                </div>
                
            </ChatContainer>


        }
            
        </>
    )
}

export default ChatMessage