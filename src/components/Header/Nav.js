import React from "react";
import NavMessage from "./NavMessage";
import "./Nav.css";

const Nav = (props) => {
    return (


        < div >
            <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                <a className="navbar-brand flex-column" href="/">Click-App <p className="flex-column flex-inline subtitle">(Guns Theme)</p></a>
                <div className="scores">
                    <NavMessage score={props.score} topScore={props.topScore} />
                </div>
                <p>Score: {props.score} Top Score: {props.topScore}</p>
            </nav>
        </div >




    )
};
export default Nav;