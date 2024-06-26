import React from 'react';

function Tarea(props) {
    return(
        <li>
            <span>V</span>
            <p>{props.texto}</p>
            <span>X</span>
        </li>
    );
}

export { Tarea };
