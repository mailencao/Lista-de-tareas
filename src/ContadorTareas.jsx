import React from 'react';

function ContadorTareas({ total, completado }) {
    return(
     <h3 className='contador'>Has realizado {completado} de {total} tareas</h3>
    );
}

export { ContadorTareas };
