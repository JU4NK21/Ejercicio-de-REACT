import { useState } from "react";
import './estilos.css';

// 1. Definir la función
function GenderSelector() {
  // 2. Estado para el género elegido
  const [genero, setGenero] = useState("...");

  // Retornar el HTML
  return (
    <div className="caja-genero">
      <p className="titulo-genero">Seleccionado: {genero}</p>
      <div className="fila-botones">
        <button className="boton-circulo hombre" onClick={() => setGenero("Hombre ♂")}>♂</button>
        <button className="boton-circulo mujer" onClick={() => setGenero("Mujer ♀")}>♀</button>
        <button className="boton-circulo aleatorio" onClick={() => setGenero("Aleatorio 🔀")}>🔀</button>
        <button className="boton-circulo pregunta" onClick={() => setGenero("Desconocido ?")}>?</button>
      </div>
    </div>
  );
}

// 3. Exportar por default
export default GenderSelector;