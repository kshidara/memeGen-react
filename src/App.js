import React from "react";
import data from "./data";
import Navbar from "./Header";
import Meme from "./Meme";

import Joke from "./Jokes"
import jokesData from "./jokesData"

import Form from "./Form";



export default function App() {

    return (

      <div>
        {/*<Form   />*/}
         <Navbar  />
          <Meme  />

      </div>
        

    )
}



/*<div>
            <Navbar  />
            <Meme  />
        </div>*/