import React from "react";
import { AddCard, DoubtCard } from "../card/cards";
import JoinForm from "./joinForm";


export default class ReferenceRightContainer extends React.Component
{
    render()
    {
        return(
            <>
        <AddCard/>
        <DoubtCard/>
        <JoinForm/>
            </>

        )
    }
}