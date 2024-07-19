import React from "react"
import { action } from "../../types/action.type"
import ImagesManager from "./components/ImagesManager"


type props = {
    actionList : action
}

const ActionsManager : React.FC<props> = ({actionList}) => {

    return (
        <>
            {
                actionList.img !== undefined ?
                    <ImagesManager imgList={actionList.img}/>
                : null
            }
        </>
    )
}

export default ActionsManager