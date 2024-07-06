import { Typography } from "@mui/material"

const ChatHeader = () => {
    return(
        <div style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "2px solid #e6e6e6",
            margin: "0 1rem",
            paddingBottom: "1rem"
        }}>
            <div>
                <img src="belen-bot2.png" style={{width: "70px", height: "70px", marginRight: "1rem", borderRadius: "50px"}} alt=""/>
            </div>
            <div>
                <Typography 
                    variant="h4" 
                    align="left" 
                    fontWeight={800}
                    marginBottom={"0"}
                    lineHeight={.7}
                >
                    BELÉN
                </Typography>
                <Typography 
                    variant="h6" 
                    align="left" 
                    fontWeight={700}
                >
                    TU GUIA ASISTENTE.
                </Typography>
            </div>
        </div>
    )
}

export default ChatHeader