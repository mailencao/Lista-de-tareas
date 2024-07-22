import React from 'react';
import { ContadorTareas } from './ContadorTareas.jsx'
import { BusquedaTareas } from './BusquedaTareas.jsx';
import { ListaTareas } from './ListaTareas.jsx';
import { CrearTareaBoton } from './CrearTareaBoton.jsx';
import { Tarea } from './Tarea.jsx';

const defaultTareas = [
  { texto: 'Crea tu primer tarea', completado: false },
  { texto: 'Elimina esta tarea', completado: false },
  { texto: 'Tarea completada!!', completado: true }
];

function App() {
  const [tareas, setTareas] = React.useState(defaultTareas);
  const [busqueda, setBusqueda] = React.useState('');

  const tareasCompletadas = tareas.filter( tarea => tarea.completado).length;
  const totalTareas = tareas.length;


  return (
    <>
      <h1 className='tituloPrincipal'>Tus Tareas</h1>
        <ContadorTareas 
        realizadas={tareasCompletadas} 
        total={totalTareas} />
        <BusquedaTareas
        buqueda={busqueda}
        setBusqueda={setBusqueda}
        />

        <ListaTareas>
          {defaultTareas.map(tarea => (
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