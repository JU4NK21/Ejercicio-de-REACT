import './estilos.css';

//1. crear la funcion
function ProductCard(props) {
    const datos = props.product;

    //2. retornar el html
    return (
        <div className="tarjeta-silla">
            <div className="imagen-silla">
                {datos.imageText}
            </div>
            <div>
                <h3 className="nombre-silla">{datos.name}</h3>
                <p className="precio-silla">{datos.price}</p>
            </div>
        </div>
    );
}

//3. Exportar el componente
export default ProductCard;