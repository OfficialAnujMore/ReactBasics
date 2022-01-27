import React, { Component } from "react";
class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello kali"
        }

        this.clicked = this.clicked.bind(this)
    }

    //  clicked(){
    //     this.setState ({
    //         message:"Goodbye"
    //     })

    //     console.log(this)
    // }
     clicked= ()=>{
        this.setState({
            message: "Hello kali manali"
        })
        
    }
    
  render() {
    return <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clicked.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.clicked()}>Click</button> */}
        <button onClick={this.clicked}>Click</button>
    </div>;
  }
}

export default EventBind;
