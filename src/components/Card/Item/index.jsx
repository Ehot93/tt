import React from 'react';
import './style.scss';

export default function Item(props) {
    console.log('Item',props);
    return (
        <ul className="23item">
            {/*<li>{props.text}</li>*/}
            {props.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
}
