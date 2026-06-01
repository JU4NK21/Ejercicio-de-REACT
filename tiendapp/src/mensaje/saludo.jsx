/**1.crear el componente
 * 2.el estado inicial
 * 3.crear la funcion
 * 4. usar los elementos en html
*/

import { useState } from "react"

export const Saludo = () =>{
    const [mensajeSaludo, setSaludo] = useState("....");

    let hacerSaludo = () =>{
        let mensajeSaludo = "Hola Cliente"
        setSaludo(mensajeSaludo)
    };

    return(
        <div>
            <button onClick={hacerSaludo}>Hacer Mensaje</button>
            <label>{mensajeSaludo}</label>
        </div>
    )
}
