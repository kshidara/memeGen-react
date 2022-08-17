import React from "react";
import memesData from "./memesData";


export default function Meme() {
    /**
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

     const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

     const [allMemeImages, setAllMemeImages] = React.useState(memesData)

     function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

 
   
    return(

        <main>
            <div className="form">
                <input type="text" 
                        placeholder="Top text"
                        className="form--input">
                </input>
                <input  type="text"
                        placeholder="Bottom text"
                        className="form--input">
                </input>
                <button 
                        onClick={getMemeImage}
                        className="form--button"
                >Get a new meme image 
                </button>   
            </div>
            <img src={meme.randomImage} className="meme--img"></img>
        </main>

        )
}

