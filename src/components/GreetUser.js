function GreetUser(){
    return(
        <h1 style={{cursor: "pointer"}} onClick={()=>{window.alert("Clicked this crinked piece of shit")}}>
            Im literally testin this fr
        </h1>
        
        // style is just altering the cursor type while onClick defines what is to be done upon clicking (basic action listener)
    )
}

export default GreetUser;