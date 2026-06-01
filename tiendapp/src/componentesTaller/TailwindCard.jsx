import { useState } from "react";
import './estilos.css';

// 1. Definir la función
function TailwindCard(props) {
  // 2. Estado para el título
  const [titulo, setTitulo] = useState(props.cardInfo.title);

  const editarTitulo = (evento) => {
    setTitulo(evento.target.value);
  };

  // Retornar el HTML
  return (
    <div className="tarjeta-azul">
      <div className="cuadro-azul"></div>
      <div className="contenido-tarjeta">
        <h3 className="titulo-tarjeta">{titulo}</h3>
        <input type="text" onInput={editarTitulo} placeholder="Nuevo título..." />
        <p className="descripcion-tarjeta">{props.cardInfo.description}</p>
        <button className="boton-azul">READ MORE</button>
      </div>
    </div>
  );
}

// 3. Exportar por default
export default TailwindCard;