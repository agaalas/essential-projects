import React from "react";

function Button(props){
    return <button className={props.variant}>{props.content}</button>
}

export default Button