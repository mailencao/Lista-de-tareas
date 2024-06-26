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
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;