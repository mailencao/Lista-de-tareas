import React from 'react';

function ContadorTareas({ total, completado }) {
    return(
     <h3>Has realizado {completado} de {total} tareas</h3>
    );
}

export { ContadorTareas };
