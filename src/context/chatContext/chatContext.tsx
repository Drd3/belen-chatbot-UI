import axios from "axios";
import { ReactNode, createContext, useState } from "react";
import { text } from "stream/consumers";

const apiUrl : string = process.env.REACT_APP_BASE_URL === undefined ? "" :  process.env.REACT_APP_BASE_URL;

console.log("API uRL :",apiUrl)

interface ChatContextType {
    recentMessage: string;
    setRecentMessage: React.Dispatch<React.SetStateAction<string>>;
    messageList: any[];
    setMessageList: React.Dispatch<React.SetStateAction<any[]>>;
    sendPrompt: (prompt:string) => void,
    systemStatus: loadingStatus, 
    setSystemStatus: React.Dispatch<React.SetStateAction<loadingStatus>>,
    getCompleteChatHistory: () => void,
    historyStatus : loadingStatus,
    setHistoryStatus: React.Dispatch<React.SetStateAction<loadingStatus>>
  }
  

export const ChatContext = createContext<ChatContextType>({} as ChatContextType)




type ChatProviderProps = {
    children: ReactNode;
};

type loadingStatus =  "initial" | "loading" | "failed" | "success" 


const ChatProvider = ({children} : ChatProviderProps) => {
    const [recentMessage, setRecentMessage] = useState<string>("")
    const [messageList, setMessageList] = useState<any[]>([])
    const [systemStatus, setSystemStatus] = useState<loadingStatus>("initial")
    const [historyStatus, setHistoryStatus] = useState<loadingStatus>("initial")



    const getCompleteChatHistory =  () => {
        setHistoryStatus("loading")
        axios.get(apiUrl)
        .then(res => {
            setHistoryStatus("success")
            setMessageList(res.data) 
        }).catch(err => {
            setHistoryStatus("failed")
        })
    }

    const sendPrompt = (prompt:string) => {
        setSystemStatus("loading")
        setMessageList(prevItems => [
            ...prevItems, 
            {
                role: "user", 
                content: {
                    type: "text",
                    text: {
                        value : prompt
                    }
                } 
            }
        ])
        axios.post(apiUrl, { prompt: prompt })
        .then(res => {
            setSystemStatus("success")
            setMessageList(prevItems => [...prevItems, res.data])
        })
    } 

    return(
        <ChatContext.Provider 
            value={{
                recentMessage, setRecentMessage, 
                messageList, setMessageList,
                sendPrompt,
                systemStatus, setSystemStatus,
                getCompleteChatHistory,
                historyStatus, setHistoryStatus
            }}
        >
            {children}
        </ChatContext.Provider>
    )
}

export default ChatProvider