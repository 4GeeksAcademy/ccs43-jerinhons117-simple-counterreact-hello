import React from "react";
import ReactDOM from "react-dom";
import  ProptoType  from "prop-types";


export function SimpleCounter(props){
    
    return (<div className="w-100 h-100 m-t50 d-flex justify-content-center align-items-center">
          
                <div className="four">{(props.time.h >= 10)? props.time.h : "0" + props.time.h}</div>
                <div className="three">{(props.time.m >= 10)? props.time.m : "0" + props.time.m}</div>
                <div className="two">{(props.time.s >= 10)? props.time.s : "0" + props.time.s}</div>
                <div className="one">{(props.time.ms >= 10)? props.time.ms : "0" + props.time.ms}</div>
                
                

    </div>);
                
};

