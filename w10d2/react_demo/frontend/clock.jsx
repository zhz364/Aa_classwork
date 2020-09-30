import React from "react";

class Clock extends React.Component {
    constructor(){
        super();
        // let date = new Date();
        this.state = {date: new Date()};
        this.tick = this.tick.bind(this);
    }
    
    tick(){
        // console.log(this)
        this.setState({
            date: new Date()
        });
    }
    
    componentDidMount(){    
        this.intervalID = setInterval(this.tick, 1000)
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }
    // this.componentDidMount()
    
    
    
    render(){
        let hours = this.state.date.getHours();
        let minutes = this.state.date.getMinutes();
        let seconds = this.state.date.getSeconds();

        return(
             <h1>{hours}:{minutes}:{seconds}</h1>
        );
    } 
}

export default Clock;

// var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// console.log(date.toLocaleTimeString('en-US'));

// console.log(date.toLocaleTimeString('en-US'));

// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()