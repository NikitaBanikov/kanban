import { useState } from "react"

export default function AppHeader() {
    const [arrow, setArrow] = useState('/arrowDown.svg');
    const [unfoldMenu, setUnfoldMenu] = useState('hide')

    const changeArrow = () => {
        setArrow(arrow === '/arrowDown.svg' ? '/arrowUp.svg' : '/arrowDown.svg');
        setUnfoldMenu(arrow !== '/arrowDown.svg' ? 'hide' : 'Unfold-menu');
    }

    return (
        <div className="App-header">
            <div className="Container">
                <span className="App-header__title">Awesome Kanban Board</span>
                <div className="User-container">
                    <img src='/userAvatar.svg' alt="фото пользователя" className="userAvatar"/>
                    <img src={arrow} alt="стрелка вниз" className="arrowDown" onClick={changeArrow}/>
                </div>
            </div>
            <div className={`Unfold-menu ${unfoldMenu}`}>
                <img src="/Romb.svg" alt=""  className='Romb'/>
                <p className="Unfold-menu__item">Profile</p>
                <p className="Unfold-menu__item">Log Out</p>
            </div>
        </div>
    )
}

