import React from 'react';
import './tarea.css'

function Tarea(props) {

    return(
        <li>
            <span 
            className={`ico icoCheck ${props.completado && "icoCheckCompletado"}`} 
            onClick={ () => props.onTogglerCompletado(props.id)
            }>V</span>

            <p 
            className={`tareaText ${props.completado && "tareaTextCompletado"}`
            }>{props.texto}</p>
            
            <span 
            className='ico iconoBorrar'
            onClick={ () => props.onDelete(props.id)
            }>X</span>
        </li>
    );
}

export { Tarea };
