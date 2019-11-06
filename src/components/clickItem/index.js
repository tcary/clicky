import React from "react";
import "./clickItem.css";

function ClickedItem(props) {
    return (
        <div
            onClick={() => props.handleClick(props.id)}
            className={`click-item${props.shake ? " shake " : ""}`}
            style={{ backgroundImage: `url("${props.image}")` }}
        />
    )
}

export default ClickedItem;