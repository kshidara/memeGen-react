import React from "react";
import data from "./data";
import Navbar from "./Header";
import Meme from "./Meme";

import Joke from "./Jokes"
import jokesData from "./jokesData"



export default function App() {

  const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}



/*<div>
            <Navbar  />
            <Meme  />
        </div>*/