import {useState} from "react";
import Headers from "./components/Headers";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pacientes from "./components/Pacientes";

function App() {

      const [pacientes, setPacientes] = useState([]);
      const [paciente, setPaciente] = useState({});

      const eliminarPaciente = (id) => {
      const pacientesActulizados = pacientes.filter (paciente => paciente.id !== id)
      setPacientes(pacientesActulizados) }

       

  return (
    <div className="container mx-7">
     <Headers/>
     

     <div className="mt-12 md:flex">
     <Formulario
     pacientes={pacientes}
     setPacientes={setPacientes}  
     paciente={paciente}
     setPaciente={setPaciente  }
     />

     <Listado
     pacientes={pacientes }
     setPaciente={setPaciente}
     eliminarPaciente={eliminarPaciente}
     />
     </div>
    </div>
  );
}

export default App;
 