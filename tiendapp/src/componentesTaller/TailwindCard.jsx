import './estilos.css';

//1. crear la funcion
function TailwindCard(props) {
    const datos = props.cardInfo;

    //2. retornar el html
    return (
        <div className="tarjeta-azul">
            <div className="cuadro-azul"></div>
            <div className="contenido-tarjeta">
                <h3 className="titulo-tarjeta">{datos.title}</h3>
                <p className="descripcion-tarjeta">{datos.description}</p>
                <button className="boton-azul">
                    {datos.buttonText}
                </button>
            </div>
        </div>
    );
}

//3. Exportar el componente
export default TailwindCard;