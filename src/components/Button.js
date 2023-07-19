export default function Button({displayText, handleClick}){
    return(
        <button className="btn" onClick={handleClick}>
            {displayText}
        </button>
    );
}