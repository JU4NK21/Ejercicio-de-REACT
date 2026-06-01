import { useState } from "react";
import './estilos.css';

// 1. Definir la función
function Newsletter() {
  // 2. Estado para el correo
  const [correo, setCorreo] = useState("");

  const actualizarCorreo = (evento) => {
    setCorreo(evento.target.value);
  };

  // Retornar el HTML
  return (
    <div className="caja-correo">
      <h2 className="titulo-correo">NEWSLETTER</h2>
      <p className="texto-correo">Suscríbete con: {correo}</p>
      <input 
        type="text" 
        placeholder="Tu correo aquí" 
        className="entrada-correo" 
        onInput={actualizarCorreo} 
      />
      <button className="boton-correo" onClick={() => alert("Registrado: " + correo)}>
        CLICK ME
      </button>
    </div>
  );
}

// 3. Exportar por default
export default Newsletter;