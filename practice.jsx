
export default function App() {
    
    
    const [count, setCount] = React.useState(0)

    function addOne(){
        setCount(function(prevCount){
            return prevCount + 1
    
    }

    function minusOne(){
        setCount(function(prevCount){
            return prevCount - 1
        })
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick="minusOne">–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick="addOne">+</button>
        </div>

    )

}



import React from "react"

export default function App() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    const isGoingOut = true
        
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{isGoingOut === true ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}

import React from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

     const [isGoingOut, setIsGoingOut] = React.useState(true);

     function changeMind(){
        setIsGoingOut(prevState => !prevState)
     }
     
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind}className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}


import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    

    const [thingsArray, setArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        //don't directly modify the default state by .push()
        //you can either pass in a new value or a callback function which takes in a old version of state and replaces with newe version of state
        //array spread operator ...prevArray where it gets all the previous state's elements
        setArray(prevState => {
            return [...prevState, `Thing ${prevArray.length + 1}`] 
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}


function App() {

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {

        setThingsArray(function(prevState){
            return [...prevState, `Thing ${prevThingsArray.length + 1}`
        })

    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}



import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
     /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     * 
     * Then use the starIcon value to display the correct image
     */

    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
     function toggleFavorite() {
        setContact(prevContact => ({  //add extra paranthesis around object otherwise it's just a return for the callback function.

            ...prevContact, 
            isFavorite: !prevContact.isFavorite
        }))
        
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}


