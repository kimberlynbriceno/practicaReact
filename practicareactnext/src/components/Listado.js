import Pacientes from "./Pacientes";


function Listado ({pacientes}) {
//   console.log(pacientes)

    return ( 
        <div className="md:w-1/2 lg:w-4/5 md:h-screen overflow-y-scroll">  
            <h2 className="font-bold text-center text-2xl">Listado de Pacientes</h2>
            <p className="text-ld text-center mt-2">Administra tus {""} <span className="text-red-800 text-bold">Pacientes y Citas</span></p>

        
        {pacientes.map( (pacientes) => {

             return(
                    <h1>desde map</h1>
                )

        }
         )}

        <Pacientes/>

        
        </div>
     );
}

export default Listado ;