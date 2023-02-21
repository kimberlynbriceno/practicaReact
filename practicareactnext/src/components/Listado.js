import { useEffect } from "react";
import Pacientes from "./Pacientes";


function Listado ({pacientes, setPaciente, eliminarPaciente}) {

    useEffect(()=>{
        if(pacientes.length > 0){
             console.log(pacientes)
        }
       
    },[pacientes])

    return ( 
        <div className="md:w-1/2 lg:w-4/5 md:h-screen overflow-y-scroll">  
            <h2 className="font-bold text-center text-2xl">Listado de Pacientes</h2>
            <p className="text-ld text-center mt-2">Administra tus {""} <span className="text-red-800 text-bold">Pacientes y Citas</span></p>

        
        {pacientes.map( pacientes => {

             return(
                <Pacientes
                key={pacientes.id}
                pacientes={pacientes}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
                />
                )

        }
         )} 

        


        </div>
     );
}

export default Listado ;