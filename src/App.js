import React from "react";
import data from "./data";
import Navbar from "./Header";
import Meme from "./Meme";
import boxesArray from "./boxes";
import Box from "./Box";



export default function App() {


   const [squares, setSquares] = React.useState(boxesArray)

    //creating a new state array and pushing each box object into new array, instead
    // of directly manipulating the original state array.
   // function toggle(id) {
   //        setSquares(prevSquares => {
   //            const newSquares = []
   //            for (let i = 0; i < prevSquares.length; i++) {
   //                const currentSquare = prevSquares[i]
   //                if(currentSquare.id === id) {
   //                    const updatedSquare = {
   //                        ...currentSquare,
   //                        on: !currentSquare.on
   //                    }
   //                  newSquares.push(updatedSquare)
   //                } else {
   //                  newSquares.push(currentSquare)
   //                }
   //            }
   //            return newSquares
   //        })
   //  }

  //update items in an array in a more declarative way instead of with a for loop like above
  function toggle(id) {
    // map over previous squares array that initially would have id and if box is on or !on state
      setSquares(prevSquares => {
          // .map() returns NEW array with same length as the original array
          return prevSquares.map((square) => {
            //use ternary that asks if square.id === id passed into the toggle function.
            //if they match, it's the box we clicked. Now we overwrite the on status with new !on status
            //if not, then it would keep the on status and add it to the new array which would be returned "unchanged"
            return square.id === id ? {...square, on: !square.on} : square
          })
      })

  }

    
   const squareElements = squares.map(eachSquare => (

        <Box  
            key={eachSquare.id} 
            id={eachSquare.id}
            on={eachSquare.on}
            toggle={toggle}   />
    ))



 
  return (
        <main>
          {squareElements}
        </main>

  )
}








/*<Navbar  />
<Meme  />*/

