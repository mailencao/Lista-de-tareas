import React from 'react';
import './tarea.css'

function Tarea(props) {
    return(
        <li>
            <span className={`ico icoCheck ${props.completado && "icoCheckCompletado"}`}>V</span>
            <p className={`tareaText ${props.completado && "tareaTextCompletado"}`}>{props.texto}</p>
            <span className='ico iconoBorrar'>X</span>
        </li>
    );
}

export { Tarea };
