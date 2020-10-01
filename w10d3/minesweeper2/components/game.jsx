import React from "react";
import Board from "./board";
import * as Minesweeper from "../minesweeper/minesweeper";

class Game extends React.Component{
    constructor(){
        super()
        const board = new Minesweeper.Board(4,8)
        this.state = {board:board}
        this.updateGame = this.updateGame.bind(this)
    }
    updateGame(tile, isFlagging){
        if(isFlagging){
            tile.toggleFlag();
        }else{
            tile.explore();
        }
        this.setState({ board: this.state.board })
    }
 
    // componentDidUpdate(){
    //     if (this.state.board.lost()){
    //         alert("You Lost!")
    //     } else if (this.state.board.won()){
    //         alert("You Won!")
    //     }
    // }
    render(){
        // debugger
        if (this.state.board.lost()){
            return <div>You Lost!</div>
        } else if (this.state.board.won()){
            return <div>You Won!</div>
        } else {
        return <Board board={this.state.board} updateGame = {this.updateGame}/>
        }
    }
}

export default Game;