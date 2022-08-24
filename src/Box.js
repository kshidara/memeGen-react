import React from "react";



export default function Box(props) {


    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }


    return (
            <div 
                style={styles} 
                className="box"
                //every time box gets. clicked, this function is run toggle() with box id passed in 
                onClick={() => props.toggle(props.id)}
            >         
            </div>
    )

}

