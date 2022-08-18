import React from "react";
import data from "./data";
import Navbar from "./Header";
import Meme from "./Meme";
import boxesArray from "./boxes";
import Box from "./Box";



export default function App() {


  const [squares, setSquares] = React.useState(boxesArray)

  const squareElements = squares.map(eachSquare => (

    <div className="box" key={eachSquare.id}></div>

    ))

  return (
        <main>
          {squareElements}
        </main>

  )
}








/*<Navbar  />
<Meme  />*/

