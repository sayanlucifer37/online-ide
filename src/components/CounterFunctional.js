//functional component doesnt have constructor to do the job

//hooks are used here

import { useState} from "react";
import DisplayCounter from "./DisplayCounter"
import Button from"./Button"

function CounterFunctional(){
    const [counter, setCounter]=useState(0);        //creation of a state, 0 is the init value, also this is destructuring
                        //this returns array of 2 items, state and setter method of the state
    return(
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <DisplayCounter counter={counter} message={"Test Message"}/>
            {/* counter is name of property/prop and {counter} is value from above message is just dummy message*/}

            {/* <h1> Counter: {counter} </h1>        */}
            {/* instead of this.state.counter we can just write counter  */}
            

            {/* <button className="btn" onClick={()=>{
                setCounter(counter+1);
                // check Counter.js for the contrast
            }}>
                Add 1
            </button>

            <button className="btn" onClick={()=>{
                setCounter(counter-1);
            }}>
                Substract 1
            </button> */}


            <Button 
            displayText={"Add 1"}
            handleClick={()=>setCounter(counter+1)}/>
            <Button
            displayText={"Sub 1"}
            handleClick={()=>setCounter(counter-1)}/>
        </div>
    );

}

export default CounterFunctional