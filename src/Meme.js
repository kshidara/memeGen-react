import React from "react";
import memesData from "./memesData";


export default function Meme() {
    
     /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */

     const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })


    function handleInputChange(event) {

        const {name, value} = event.target

        setMeme(prevMemeInput => ({
            
                ...prevMemeInput,
                [name] : value
            
        }))
  

    }

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
                        className="form--input"
                        onChange={handleInputChange}
                        name="topText"
                        value={meme.topText}
                />
                <input  type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        onChange={handleInputChange}
                        name="bottomText"
                        value={meme.bottomText}
                />
                <button 
                        onClick={getMemeImage}
                        className="form--button"
                >Get a new meme image 
                </button>   
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--img" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>        
        </main>

        )
}

