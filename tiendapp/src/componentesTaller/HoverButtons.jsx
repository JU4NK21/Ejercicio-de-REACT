import { useState } from "react";
import './estilos.css';

// 1. Definir la función
function HoverButtons() {
  // 2. Estado para el botón seleccionado
  const [seleccionado, setSeleccionado] = useState("Ninguno");

  // Retornar el HTML
  return (
    <div className="contenedor-botones">
      <label>Has hecho click en: <b>{seleccionado}</b></label>
      
      <button className="boton-color rojo" onClick={() => setSeleccionado("Botón Rojo")}>
        <span className="texto-grande">Hover Me</span>
        <span className="texto-pequeno">Rojo</span>
      </button>

      <button className="boton-color azul" onClick={() => setSeleccionado("Botón Azul")}>
        <span className="texto-grande">Hover Me</span>
        <span className="texto-pequeno">Azul</span>
      </button>

      <button className="boton-color verde" onClick={() => setSeleccionado("Botón Verde")}>
        <span className="texto-grande">Hover Me</span>
        <span className="texto-pequeno">Verde</span>
      </button>
    </div>
  );
}

// 3. Exportar por default
export default HoverButtons;