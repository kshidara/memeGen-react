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
   function toggle(id) {
          setSquares(prevSquares => {
              const newSquares = []
              for (let i = 0; i < prevSquares.length; i++) {
                  const currentSquare = prevSquares[i]
                  if(currentSquare.id === id) {
                      const updatedSquare = {
                          ...currentSquare,
                          on: !currentSquare.on
                      }
                    newSquares.push(updatedSquare)
                  } else {
                    newSquares.push(currentSquare)
                  }
              }
              return newSquares
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

