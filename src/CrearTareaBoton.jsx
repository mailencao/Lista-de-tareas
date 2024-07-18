import React from 'react';
import './crearTareaBoton.css'

function CrearTareaBoton() {
    return(
        <button className='botonCrear' 
        onClick={ () => 
            console.log('hiciste un clic en crear')
        }>+</button>
    );
}

export { CrearTareaBoton };