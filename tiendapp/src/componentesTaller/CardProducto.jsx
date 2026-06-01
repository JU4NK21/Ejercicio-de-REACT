import { useState } from "react";
import './estilos.css';

// 1. Definir la función
function CardProducto(props) {
  // 2. Estado para el precio
  const [precio, setPrecio] = useState(props.product.price);

  const cambiarPrecio = (evento) => {
    let nuevoPrecio = evento.target.value;
    setPrecio(nuevoPrecio);
  };

  // Retornar el HTML
  return (
    <div className="tarjeta-silla">
      <div className="imagen-silla">{props.product.imageText}</div>
      <div>
        <h3 className="nombre-silla">{props.product.name}</h3>
        <p className="precio-silla">{precio}</p>
        <input type="text" placeholder="Cambiar precio" onInput={cambiarPrecio} />
      </div>
    </div>
  );
}

// 3. Exportar por default
export default CardProducto;