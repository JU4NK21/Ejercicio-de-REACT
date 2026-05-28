import './estilos.css';

//1. crear la funcion
function GenderSelector() {
    const opciones = [
        { id: 1, icono: '♂', color: 'hombre' },
        { id: 2, icono: '♀', color: 'mujer' },
        { id: 3, icono: '🔀', color: 'aleatorio' },
        { id: 4, icono: '?', color: 'pregunta' },
    ];

    //2. retornar el html
    return (
        <div className="caja-genero">
            <p className="titulo-genero">
                Please select your gender
            </p>
            <div className="fila-botones">
                {opciones.map(function(opc) {
                    return (
                        <button key={opc.id} className={`boton-circulo ${opc.color}`}>
                            {opc.icono}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

//3. Exportar el componente
export default GenderSelector;