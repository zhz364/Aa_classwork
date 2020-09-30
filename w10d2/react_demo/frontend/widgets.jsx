import ReactDOM from 'react-dom';
import React from 'react';
import Clock from "./clock"
import Tabs from "./tabs"


class Widget extends React.Component{
    constructor() {
        super();
    }
    render(){
        return(
            <div>  
                <Clock />
                <div>
                    <Tabs onClick="b"/>
                </div>
            </div> 

        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root"); //grab the root html

  ReactDOM.render(<Widget />, root);
    // ReactDOM.render(<Tabs />, root);
 
//   ReactDOM.render(React.createElement("h1", null, "We in entry file"), root);
})

