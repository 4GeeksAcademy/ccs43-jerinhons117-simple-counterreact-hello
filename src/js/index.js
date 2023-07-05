import React from "react";
import ReactDOM from "react-dom";
import  PropTypes  from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    
    return (<div className="reloj">
          
                <div className="four">{props.digitFour % 10}</div>
                <div className="three">{props.digitThree % 10}</div>
                <div className="two">{props.digitTwo % 10}</div>
                <div className="one">{props.digitOne % 10}</div>
                               
    </div>);
};


let counter = 0;
setInterval (function(){
    
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four, three, two, one)
    counter ++;

    ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>,
    document.querySelector("#app"))

},1000);











