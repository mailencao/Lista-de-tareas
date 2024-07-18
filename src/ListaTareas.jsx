import React from 'react';
import './listaTareas.css';

function ListaTareas(props) {
    return (
        <ul>
            {props.children}
        </ul>
    );
}

export { ListaTareas };
