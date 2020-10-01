import React from "react"
import Board from "./board"
import Game from "./game"
class Tile extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        
        // debugger
        const flagging = event.altKey
        this.props.updateGame(this.props.tile, flagging)
    }
    render(){
        // debugger
        let mark = ""
        let className = ""
        if(this.props.tile.bombed){
            mark = "";
            className = "bombed"
        } else if (this.props.tile.explored){
            mark = `${this.props.tile.adjacentBombCount()}`;
            className = "explored"
        } else if (this.props.tile.flagged){
            mark = "F"
            className = "flagged"
        } else{
            mark = ""
        }
        return (<div  className={`tile ${className}`} 
        onClick={this.handleClick} > 
          {mark}
            </div>)
    }
    

        
}

// {
//     if(this.props.tile.bombed){
//         return "B";
//     } else if (this.props.tile.explored){
//         return "E";
//     } else if (this.props.tile.flagged){
//         return "F"
//     } else{
//         return "T"
//     }
// }



export default Tile