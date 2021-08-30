import React from 'react';
import './style.scss';

const Menu = () => {
    return (
        <div className="menu" onClick={handleClick}>
            <div className='menu__line'></div>
            <div className='menu__line'></div>
            <div className='menu__line'></div>
        </div>
    )
};

function handleClick() {
    console.log('click')
}

export default Menu;
