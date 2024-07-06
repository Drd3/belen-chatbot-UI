import { styled } from "@mui/material";
import Markdown from "react-markdown";

const Message = styled(Markdown)({
    '& > p':{
        margin: "0" 
    }
  });


interface props {
    message: string,
    type : "user" | "assistant"
}

const ChatMessage : React.FC<props> = ({message, type}) => {

    return(
        <>
        {
            type === "assistant" ? 
            <div style={{display: "flex", gap: "1rem", marginBottom: "4rem"}}>
                <img 
                    src="./belen-bot2.png" 
                    alt=""
                    style={{width: 50, height: 50, borderRadius: "50px"}}
                />
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
            </div>
            :
            <div style={{display: "flex", gap: ".6rem", marginBottom: "4rem"}}>
                
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
                <img 
                    src="./user.png" 
                    alt=""
                    style={{width: 44, height: 45, borderRadius: "50px", marginTop: "6px"}}
                />
            </div>


        }
            
        </>
    )
}

export default ChatMessage