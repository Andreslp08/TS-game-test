import React from "react";
import "./canvas-style.css"

const GameCanvas = ( props:{width:number, height:number })=>{
    return (
        <canvas
        className="canvas"
        width={props.width}
        height = {props.height} >

        </canvas>
    )
}

export default GameCanvas;