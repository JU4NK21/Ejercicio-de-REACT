import logo from './logo.svg';
import './App.css';


import CardUsuario from './componentes/UsuarioCard';
import ProductosTabla from './ProductosComponentes/ProductosTabla';


import CardProducto from './componentesTaller/CardProducto'; 
import Newsletter from './componentesTaller/Newsletter';
import HoverButtons from './componentesTaller/HoverButtons';
import TailwindCard from './componentesTaller/TailwindCard';
import GenderSelector from './componentesTaller/GenderSelector';
import { MensajeTexto } from './mensaje/mensaje';
import { Saludo } from './mensaje/saludo';

function App() {

  
  const datosDeLaSilla = {
    name: "Cool Chair",
    price: "$100",
    imageText: "This is a chair."
  };

  const datosDeLaTarjetaAzul = {
    title: "Tailwind card",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
    buttonText: "READ MORE"
  };


  return (
    <div>
      
      
      <CardUsuario />
      <ProductosTabla />

      <hr /> 


      <CardProducto product={datosDeLaSilla} />
      <Newsletter />
      <HoverButtons />
      <TailwindCard cardInfo={datosDeLaTarjetaAzul} />
      <GenderSelector />

      <MensajeTexto />
      <MensajeTexto />
      <Saludo />

    </div>
  );
}

export default App;
