import React from 'react';

function Tarea(props) {
    return(
        <li>
            <span className='ico iconoHecho'>V</span>
            <p className='tareaText'>{props.texto}</p>
            <span className='ico iconoBorrar'>X</span>
        </li>
    );
}

export { Tarea };
