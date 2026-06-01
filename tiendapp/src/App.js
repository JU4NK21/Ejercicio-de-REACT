import logo from './logo.svg';
import './App.css';

// 1. COMPONENTES ANTERIORES
import CardUsuario from './componentes/UsuarioCard';
import ProductosTabla from './ProductosComponentes/ProductosTabla';

// 2. LOS 5 COMPONENTES DEL TALLER (¡Aquí corregimos la ruta de CardProducto!)
import CardProducto from './componentesTaller/CardProducto'; 
import Newsletter from './componentesTaller/Newsletter';
import HoverButtons from './componentesTaller/HoverButtons';
import TailwindCard from './componentesTaller/TailwindCard';
import GenderSelector from './componentesTaller/GenderSelector';
import { MensajeTexto } from './mensaje/mensaje';
import { Saludo } from './mensaje/saludo';

function App() {

  // 3. TEXTOS PARA LAS TARJETAS
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

  // 4. LO QUE SE MUESTRA EN PANTALLA
  return (
    <div>
      
      {/* Componentes viejos */}
      <CardUsuario />
      <ProductosTabla />

      <hr /> 

      {/* Componentes nuevos del taller */}
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