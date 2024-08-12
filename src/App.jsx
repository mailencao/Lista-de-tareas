import React from 'react';
import { ContadorTareas } from './ContadorTareas.jsx'
import { BusquedaTareas } from './BusquedaTareas.jsx';
import { ListaTareas } from './ListaTareas.jsx';
import { CrearTareaBoton } from './CrearTareaBoton.jsx';
import { Tarea } from './Tarea.jsx';

const defaultTareas = [
  { texto: 'Crea tu primer tarea', completado: false, id:1 },
  { texto: 'Elimina esta tarea', completado: false, id:2 },
  { texto: 'Tarea completada!!', completado: true, id:3 }
];

function App() {
  const [tareas, setTareas] = React.useState(defaultTareas);
  const [busqueda, setBusqueda] = React.useState('');
  

  const tareasCompletadas = tareas.filter( tarea => tarea.completado).length;
  const totalTareas = tareas.length;
  const buscadorTareas = tareas.filter( (tarea) => { return tarea.texto.toLowerCase().includes(busqueda.toLowerCase()); } );
  const handleDelete = (id) => {
    const nuevasTareas = tareas.filter( tarea => tarea.id !== id);
    setTareas(nuevasTareas)
  }

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
          {buscadorTareas.map(tarea => (
            <Tarea 
            key={tarea.texto}
            id={tarea.id}
            texto={tarea.texto}
            completado={tarea.completado}
            onDelete={handleDelete}
            />
          ))}
        </ListaTareas>

        <CrearTareaBoton />
    </>
  );
}

export default App;