import '../estilosCss/UsuarioEstilos.css'

const CardUsuario = () =>{
    //Codigo javascript
    let nombreUsuario = "Juan"
    let apellidoUsuario = "Rojas"
    let celularUsuario = "3110253454"

    return(
        //Codigo html
        <div>
            <img />
            <p>Nombre de usuario: <span>{nombreUsuario}</span></p>
            <p>Apellido de usuario: <span>{apellidoUsuario}</span></p>
            <p>Celular de usuario: <span>{celularUsuario}</span></p>
            <button>Ver mas</button>
        </div>
    );
}

export default CardUsuario