import Headers from "./components/Headers";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pacientes from "./components/Pacientes";

function App() {




  return (
    <div className="container mx-7">
     <Headers/>
     

     <div className="mt-12 md:flex">
     <Formulario/>
     <Listado/>
     </div>
    </div>
  );
}

export default App;
 