import { useState} from "react";

function NameChange(){
    const [name, setName]=useState("");     //check CounterFunctional.js's comments
    console.log("Here");       //logging no of times changes occuring

    return(
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <h1>Name is: {name} </h1>
            <input onChange={(event)=>{
                setName(event.target.value);
            }}/>
        </div>
    );    
}

export default NameChange;