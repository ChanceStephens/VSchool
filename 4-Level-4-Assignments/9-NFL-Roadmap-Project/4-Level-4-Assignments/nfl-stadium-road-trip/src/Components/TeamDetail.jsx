import React, {useContext} from "react"
import { AppContext } from "../AppContext"

export default function TeamDetail(){
    const {teamDetails} = useContext(AppContext)

    console.log(teamDetails)
    return (
        <>
            Team Detail
        </>
    )
}