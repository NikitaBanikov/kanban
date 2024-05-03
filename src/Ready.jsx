import { useState } from "react"

export default function Ready() {
    const [dropDown, setDropDown] = useState(false);
    const [dropDownMenu, setDropDownMenu] = useState(false);

    const showDropDown = () => {
        setDropDown(!dropDown) 
    }

    const showDropDownMenu = () => {
        setDropDownMenu(!dropDownMenu)
    }

    return(
        <div className="List">
            <p className="List-title">Ready</p>
            <div className="Card-container">
                {dropDown && 
                    <div className="Dropdown-wrapper">
                        <div className="Dropdown">
                            <img src="blackArrowDown.svg" alt="стрелка вниз" className="Dropdown__img" onClick={showDropDownMenu}/>
                        </div>
                        {dropDownMenu && 
                            <div className="Main-unfold-menu"></div>
                        }
                    </div>
                }
            </div>
            <button className='List-button' onClick={showDropDown}>Add card</button>
        </div>
    )
}