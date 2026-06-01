/** Crear el componente */
/**Crear la funcionn que manejara el estado del componente (UseState) */
/**aplicar los elementos de js en el html */
import { useState } from "react";

//crear componente
export const MensajeTexto = () => {
    //crear estado del componente
    const [mensaje, setEstado] = useState("Estado Inicial");
    //crear funcion que modifica el estado
    const escribirLetras = (evento)=>{
        let letras = evento.target.value;
        setEstado(letras)
    }
    //usar los elementos de js
    return(
        <div>
            <input type="text" onInput={escribirLetras} />
            <label>{mensaje}</label>
        </div>
    );
};