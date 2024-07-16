import React from 'react';
import { ContadorTareas } from './ContadorTareas.jsx'
import { BusquedaTareas } from './BusquedaTareas.jsx';
import { ListaTareas } from './ListaTareas.jsx';
import { CrearTareaBoton } from './CrearTareaBoton.jsx';
import { Tarea } from './Tarea.jsx';

const arrayTareas = [
  { texto: 'a', hecho: false },
  { texto: 'b', hecho: false },
  { texto: 'c', hecho: false },
];

function App() {
  return (
    <>
      <h1 className='tituloPrincipal'>Tus Tareas</h1>
        <ContadorTareas completado={10} total={15} />
        <BusquedaTareas />

        <ListaTareas>
          {arrayTareas.map(tarea => (
            <Tarea 
            key={tarea.texto} 
            texto={tarea.texto}
            />
          ))}
        </ListaTareas>

        <CrearTareaBoton />
    </>
  );
}

export default App;