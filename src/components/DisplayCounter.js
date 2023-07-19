export default function DisplayCounter({counter, message}){
    return(
        //only one component can be returned so div method can be used
        //if we want to avoid div we can just do this:
        <>
            <h1>Counter: {counter}</h1>
            <span>{message}</span>
        </>
    );
}

//CounterFunctional.js refers to this 