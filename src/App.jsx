import React from 'react';
import { ContadorTareas } from './ContadorTareas.jsx'

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

function Tarea() {
    return(
        <li>
            <span>V</span>
            <p>Texto de tarea</p>
            <span>X</span>
        </li>
    );
}

export default App;
