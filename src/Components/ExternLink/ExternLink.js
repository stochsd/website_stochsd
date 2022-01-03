import React from "react";

const ExternLink = (props) => {
    return <a href={props.to} className={props.className} download={props.download} target="_blank" rel="noopener noreferrer">{props.children}</a>
}

export default ExternLink;