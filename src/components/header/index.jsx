import React from 'react';
import './style.scss';
import Menu from "../menu";

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    header
                    <div className="header__icon">
                        *
                    </div>
                    <Menu textTask="first task"/>
                </div>
            </div>
        )
    }
}

export default Header;
