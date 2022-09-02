import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    // console.log("Component rendered")
    
    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))

    //reaching outside React's ecosystem while trying to set State 
        
    // side effects. Can useEffect like useState to setup a side effect 
    // second parameter = dependencies array, contains values that if they change
    // from one render to next, it will cause effect to run or decides when to run rather than
    // running effect after each render... no infinite loop!
    // >> empty array [] = only runs effect once 
    // >> [count] = enter a dependency so effect will run every time count + 1
    // the first input is compared to the dependency or second parameter and if it's
    // different, effect will rerun effect function 

    React.useEffect(() => {

            console.log("Effect function ran")

        }, [count])
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}


// 1. What is a "side effect" in React? What are some examples?
// - Any code that affects an outside system.
// - local storage, API, websockets, two states to keep in sync


// 2. What is NOT a "side effect" in React? Examples?
// - Anything that React is in charge of.
// - Maintaining state, keeping the UI in sync with the data, 
//   render DOM elements


// 3. When does React run your useEffect function? When does it NOT run
//    the effect function?
// - As soon as the component loads (first render)
// - On every re-render of the component (assuming no dependencies array)
// - Will NOT run the effect when the values of the dependencies in the
//   array stay the same between renders


// 4. How would you explain what the "dependecies array" is?
// - Second paramter to the useEffect function
// - A way for React to know whether it should re-run the effect function
