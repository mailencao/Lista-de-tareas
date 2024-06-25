import React from 'react';
import { ContadorTareas } from './ContadorTareas.jsx'
import { BusquedaTareas } from './BusquedaTareas.jsx';
import { ListaTareas } from './ListaTareas.jsx';
import { CrearTareaBoton } from './CrearTareaBoton.jsx';
import { Tarea } from './Tarea.jsx';

function App() {
  return (
    <div className="App">
        <ContadorTareas />
        <BusquedaTareas />

        <ListaTareas>
            <Tarea />
            <Tarea />
            <Tarea />
        </ListaTareas>
        <CrearTareaBoton />
    </div>
  );
}

export default App;