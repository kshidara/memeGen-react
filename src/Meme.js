import React from "react";


export default function Meme() {
    
     /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

     const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage: ""
    })

    function handleInputChange(event) {

        const {name, value} = event.target

        setMeme(prevMemeInput => ({
            
                ...prevMemeInput,
                [name] : value
            
        }))
  

    }

    const [allMemes, setAllMemes] = React.useState([])

    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()  //call your own function   
    } , [])

     function getMemeImage(){
        // allMemes is initialized as an array now, not an object so no need for memesArray
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url
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


//RECAPPPPP:
//
//1. add EventListeners in our react App (ternary format)
//2. State
//3. Conditional Rendering 
//4. Forms
//5. Side Effects
//
//
//
//
//
//
//
//
//
//
//
//
//
//



