import React from 'react';
import './style.scss';
import Menu from "../menu";
import Logo from "../../assets/logoTodo.png"

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Menu/>
                <div className="header__title">
                    МаксTracker
                </div>
                <img className="header__logo" src={Logo}/>
            </div>
        )
    }
}

export default Header;
