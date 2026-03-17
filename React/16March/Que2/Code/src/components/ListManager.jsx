import { useState } from "react";

function ListManager() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addItem = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, inputValue]);
            setInputValue("");
        }
    }

    const deleteItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    }

    const clearAll = () => {
        setItems([]);
    }

    return (
        <>
            <h1>Item Manager</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter item"
                style={{ padding: "8px", marginRight: "10px" }}
            />
            <button onClick={addItem}>Add</button>
            <button onClick={clearAll} style={{ marginLeft: "10px" }}>
                Clear All
            </button>
            <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
                {items.map((item, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                        {item}
                        <button
                            onClick={() => deleteItem(index)}
                            style={{ marginLeft: "10px" }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListManager;