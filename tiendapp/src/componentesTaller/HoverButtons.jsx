import './estilos.css';

//1. crear la funcion
function HoverButtons() {
    const lista = [
        { id: 1, titulo: 'Hover Me', subtitulo: 'Lorem Ipsum', claseColor: 'rojo' },
        { id: 2, titulo: 'Hover Me', subtitulo: 'Lorem Ipsum', claseColor: 'azul' },
        { id: 3, titulo: 'Hover Me', subtitulo: 'Lorem Ipsum', claseColor: 'verde' },
    ];

    //2. retornar el html
    return (
        <div className="contenedor-botones">
            {lista.map(function(item) {
                return (
                    <button key={item.id} className={`boton-color ${item.claseColor}`}>
                        <span className="texto-grande">{item.titulo}</span>
                        <span className="texto-pequeno">{item.subtitulo}</span>
                    </button>
                );
            })}
        </div>
    );
}

//3. Exportar el componente
export default HoverButtons;