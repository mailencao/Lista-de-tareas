import React, { useState } from 'react';
import './crearTareaBoton.css';

function CrearTareaBoton({ onCrearTarea, nuevoTexto, setNuevoTexto }) {
  const [mostrarPopup, setMostrarPopup] = useState(false);

 
  const handleGuardar = () => {
    onCrearTarea(); 
    setMostrarPopup(false);
  };

 
  const handleChange = (e) => {
    
    const texto = e.target.value;
    const textoConPrimeraMayuscula = texto.charAt(0).toUpperCase() + texto.slice(1);
    setNuevoTexto(textoConPrimeraMayuscula);
  };

  return (
    <>
      <button className="botonCrear" onClick={() => setMostrarPopup(true)}>
        +
      </button>

      {/* Popup para crear tarea */}
      {mostrarPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Escribe el texto de la nueva tarea</h3>
            <input
              type="text"
              value={nuevoTexto}
              onChange={handleChange} 
              placeholder="Escribe tu tarea"
            />
            <button onClick={handleGuardar}>Guardar</button>
            <button onClick={() => setMostrarPopup(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </>
  );
}

export { CrearTareaBoton };
