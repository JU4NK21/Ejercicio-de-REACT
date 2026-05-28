import './estilos.css';

//1. crear la funcion
function Newsletter() {
    const info = {
        titulo: "NEWSLETTER",
        texto: "Get existential crisis delivered straight to your inbox every week.",
        inputTexto: "Your life",
        botonTexto: "CLICK ME"
    };

    //2. retornar el html
    return (
        <div className="caja-correo">
            <h2 className="titulo-correo">{info.titulo}</h2>
            <p className="texto-correo">{info.texto}</p>
            <input 
                type="text" 
                placeholder={info.inputTexto} 
                className="entrada-correo" 
            />
            <button className="boton-correo">
                {info.botonTexto}
            </button>
        </div>
    );
}

//3. Exportar el componente
export default Newsletter;