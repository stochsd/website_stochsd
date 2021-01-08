import React from "react";

const ExternLink = (props) => {
    console.log(props);
    return <a href={props.to} target="_blank" rel="noopener noreferrer">{props.children}</a>
}

export default ExternLink;