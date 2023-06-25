import React from "react";
import ReactDOM from "react-dom";


export function Btn(props){
    return(
        <button className="button" onClick={props.start}>start</button>
    )
}