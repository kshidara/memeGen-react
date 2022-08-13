import React from "react";
import trollFace from "./images/troll.png";

export default function Navbar() {

    return(


        <header>
            <img className="header--img" src={trollFace}></img> 
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--description">React Course - Project 3</h4>
            
        </header>

        )
}