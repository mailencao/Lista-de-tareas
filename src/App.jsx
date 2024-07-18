import React from 'react';
import { ContadorTareas } from './ContadorTareas.jsx'
import { BusquedaTareas } from './BusquedaTareas.jsx';
import { ListaTareas } from './ListaTareas.jsx';
import { CrearTareaBoton } from './CrearTareaBoton.jsx';
import { Tarea } from './Tarea.jsx';

const arrayTareas = [
  { texto: 'a', completado: true },
  { texto: 'b', completado: false },
  { texto: 'c', completado: false },
];

function App() {
  return (
    <>
      <h1 className='tituloPrincipal'>Tus Tareas</h1>
        <ContadorTareas realizadas={10} total={15} />
        <BusquedaTareas />

        <ListaTareas>
          {arrayTareas.map(tarea => (
            <Tarea 
            key={tarea.texto} 
            texto={tarea.texto}
            completado={tarea.completado}
            />
          ))}
        </ListaTareas>

        <CrearTareaBoton />
    </>
  );
}

export default App;