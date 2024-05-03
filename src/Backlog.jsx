import Card from "./Card";
import { useState } from "react";

export default function Backlog() {
    const [cards, setCards] = useState([]);
    const [button, setButton] = useState('List-button');
    const [inputValue, setInputValue] = useState('');
    const [showInput, setShowInput] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const addCard = () => {
        setShowInput(true);
        setButton('Submit');
    }

    const submitCard = () => {
        if (inputValue.length > 0) {
            const newCard = <Card text={inputValue}/>;   
            setCards([...cards, newCard]);
            setInputValue('');
            setShowInput(false);
            setButton('List-button');
            console.log(cards);
        } else {
            setShowInput(false);
            setButton('List-button');
        }
    }

    return(
        <div className="List">
            <p className="List-title">Backlog</p>
            <div className="Card-container">
                {cards}
                {showInput && <div className="Card"><input type="text" className="Card-input" value={inputValue} onChange={handleChange}/></div>}
            </div>
            {button === 'List-button' ?
                <button className={button} onClick={addCard}>Add card</button> :
                <button className={button} onClick={submitCard}>Submit</button>
            }
        </div>
    );
}