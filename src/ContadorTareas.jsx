import React from 'react';

function ContadorTareas({ total, completado }) {
    return(
     <h1>Has realizado {completado} de {total} tareas</h1>
    );
}

export { ContadorTareas };
