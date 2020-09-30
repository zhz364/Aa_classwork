import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game"
debugger
console.log("minesweeper")
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOMLOADED")
    const root = document.getElementById("root");
    ReactDOM.render(<Game />,root)
});