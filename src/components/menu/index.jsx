import React from 'react';
import './style.scss';

const Menu = (props) => {
    return (
        <div className="menu" onClick={handleClick}>
            <div className='menu__line'>{props.textTask}</div>
        </div>
    )
};

function handleClick() {
    console.log('click')
}

export default Menu;
