import React from 'react';
import './barraBusqueda.css'

function BusquedaTareas() {
    const [busqueda, setBusqueda] = React.useState('');
   
    return(
        <input 
        placeholder="Buscar..." 
        className='barraBusqueda'
        value={busqueda} 
        onChange={ (event) => {
            setBusqueda(event.target.value);
            }
        } />
    );
}

export { BusquedaTareas };