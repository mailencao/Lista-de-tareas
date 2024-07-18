import React from 'react';
import './tarea.css'

function Tarea(props) {
    return(
        <li>
            <span 
            className={`ico icoCheck ${props.completado && "icoCheckCompletado"}`} 
            onClick={ () => 
            console.log('hiciste un clic en Completado')
            }>V</span>

            <p 
            className={`tareaText ${props.completado && "tareaTextCompletado"}`
            }>{props.texto}</p>
            
            <span 
            className='ico iconoBorrar'
            onClick={ () => 
                console.log('hiciste un clic en Borrar')
            }>X</span>
        </li>
    );
}

export { Tarea };
