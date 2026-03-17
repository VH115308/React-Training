import {useState} from "react";

function TextInputManager(){
    const [textCount, setTextCount] = useState(0);
    const handleTextCount = (count) => {
        if(count>200){
            alert("Character limit exceeded!");
            return;
        }
        setTextCount(count);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
            <input type="text" placeholder="Enter text here" onChange={(e) => handleTextCount(e.target.value.length)}/>
            <p style={{marginTop: "10px"}}>Characters typed: {textCount}/200</p>
        </div>
    );
}

export default TextInputManager;