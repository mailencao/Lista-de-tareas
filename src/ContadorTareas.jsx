import React from 'react';
import './contadorTareas.css'

function ContadorTareas({ total, realizadas }) {
    return(
     <h3 className='contador'>Has realizado {realizadas} de {total} tareas</h3>
    );
}

export { ContadorTareas };
