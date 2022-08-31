import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */

     const [isShown, setIsShown] = React.useState(false)

     function toggle() {

        setIsShown(prevIsShown => !prevIsShown)

     }


    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>} 
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}> {isShown ? "Hide" : "Show"} Punchline</button>
            
            <hr />
        </div>
    )
}


const cond1 = true
const cond2 = true 
if (cond1 && cond2) {
    //this code will run but for example if cond1 isn't truthy, it completely ignores the second statement 
}

//When you have an element you want to display or not display, wrap element {} and use && conditional




// ------------------------------------------------------------------------------

// 1. What is "conditional rendering"?
    // This is used when you want to decide whether or not something gets displayed
    // or what among many choices, should get displayed. 



// 2. When would you use &&?
    // Great to use when you want to decide whether to display it or not at all
    // If condition is truthy, then what's displayed on the right side of &&



// 3. When would you use a ternary?
    // Good to use when you're deciding which thing among 2 options to display



// 4. What if you need to decide between > 2 options on what to display?
    // Use an `if...else if... else` conditional or a `switch` statement

