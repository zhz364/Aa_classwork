import React from "react"
import Tile from "./tile"
import Game from "./game"
class Board extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.board.grid)
    }
    render(){
            // debugger
         return (<div>
            {this.props.board.grid.map((row, idx) =>  {
                return (<div className="row" key={idx}>
                    {row.map((tile, idx) => {
                        return (<Tile className="tile" key={idx}  tile={tile} updateGame={this.props.updateGame}/>)
                    })}
                </div>)
             })}
        </div>) 

        // return <h1>Hello</h1>
    }
}

export default Board;