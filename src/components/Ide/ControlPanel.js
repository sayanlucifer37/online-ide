import { Form } from "react-bootstrap"
import { fontSizes, themes } from "./constants";

function SelectComponent({Label, choices, value, handleValueChange}){
    return(
        <div className="selectContainer">
            {Label}
            <Form.Select value={value} onChange={(event) => {
            handleValueChange(event.target.value)
            }}>
                {choices.map(choice => 
                <option key={'option-${choice}'}> 
                    {choice} 
                </option>)}
            </Form.Select>
        </div>
    );
}

export default function ControlPanel({
    fontSize, 
    handleFontSizeChange,
    theme,
    handleThemeChange}){
 
    return(
        <div className="control-panel-container">
            <SelectComponent 
                Label={"Size"}
                choices={fontSizes} 
                value={fontSize} 
                handleValueChange={handleFontSizeChange}/>

            <SelectComponent 
                Label={"Theme"}
                choices={themes} 
                value={theme} 
                handleValueChange={handleThemeChange}/>  
        </div>
    );
}