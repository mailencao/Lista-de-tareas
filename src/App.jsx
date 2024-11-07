import React from 'react';
import { ContadorTareas } from './ContadorTareas.jsx';
import { BusquedaTareas } from './BusquedaTareas.jsx';
import { ListaTareas } from './ListaTareas.jsx';
import { CrearTareaBoton } from './CrearTareaBoton.jsx';
import { Tarea } from './Tarea.jsx';

const defaultTareas = [
  { texto: 'Crea tu primer tarea', completado: false, id: 1 }
];

function App() {
  const [tareas, setTareas] = React.useState(defaultTareas);
  const [busqueda, setBusqueda] = React.useState('');
  const [nuevoTexto, setNuevoTexto] = React.useState('');  

  const tareasCompletadas = tareas.filter(tarea => tarea.completado).length;
  const totalTareas = tareas.length;
  const buscadorTareas = tareas.filter(tarea => tarea.texto.toLowerCase().includes(busqueda.toLowerCase()));

  const handleDelete = (id) => {
    const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
    setTareas(nuevasTareas);
  };

  const togglerCompletado = (id) => {
    setTareas(tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completado: !tarea.completado };
      }
      return tarea;
    }));
  };

  const handleCrearTarea = () => {
    if (nuevoTexto.trim() === '') return; 
    const nuevaTareaCreada = {
      texto: nuevoTexto,
      completado: false,
      id: tareas.length + 1
    };
    setTareas([...tareas, nuevaTareaCreada]);
    setNuevoTexto(''); 
  };

  return (
    <>
      <h1 className="tituloPrincipal">Tus Tareas</h1>
      <ContadorTareas realizadas={tareasCompletadas} total={totalTareas} />
      <BusquedaTareas buqueda={busqueda} setBusqueda={setBusqueda} />

      <ListaTareas>
        {buscadorTareas.map(tarea => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completado={tarea.completado}
            onDelete={handleDelete}
            onTogglerCompletado={togglerCompletado}
          />
        ))}
      </ListaTareas>

      
      <CrearTareaBoton 
        onCrearTarea={handleCrearTarea}
        nuevoTexto={nuevoTexto}
        setNuevoTexto={setNuevoTexto}
      />
    </>
  );
}

export default App;
