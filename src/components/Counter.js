//class based state

import React from "react";
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        };
    }
    render(){
        return(
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <h1> Counter: {this.state.counter} </h1>
                <button className="btn" onClick={()=>{
                    this.setState({
                        // ...this.state,
                        //above isnt necessry as we can just pass whatever is changing 
                        counter: this.state.counter+1
                    });
                }}>
                    Add 1
                </button>

                <button className="btn" onClick={()=>{
                    this.setState({
                        counter: this.state.counter-1
                    });
                }}>
                    Substract 1
                </button>
            </div>
        );
    }
}

export default Counter;