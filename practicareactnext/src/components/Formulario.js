import {useState, useEffect} from "react"
import Errores from "./Errores"
import Pacientes from "./Pacientes"


 
function Formulario ({pacientes, setPacientes, paciente}) {
    const [nombre, setNombre] = useState("")
    const [nombrePropietario, setNombrePropietario] = useState("")
    const [email, setEmail] = useState("")
    const [alta, setAlta] = useState("")
    const [sintomas, setSintomas] = useState("")

    const [error, setError] = useState(false)

    useEffect(()=> {
        console.log(paciente)
    },[paciente]) 


    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(32)
        return(
            random + fecha
        )
    }



    const handleSubmit = (e) => {
        e.preventDefault()
          // VALIDACION DEL FORMULARIO

          if([nombre,nombrePropietario,email,alta,sintomas].includes("")){
            console.log("hay al menos un campo vacio")
            setError(true)

        }else{
           setError(false)

            // objetos de pacientes
            const objetoPacientes ={
                nombre,
                nombrePropietario,
                email,
                alta,
                sintomas,
                id : generarId()

            }
            setPacientes([...pacientes, objetoPacientes])


            setNombre("")
            setNombrePropietario("")
            setEmail ("")
            setAlta("")
            setSintomas("")

         }
        
                // console.log("confirmando formulario")
    }

   



    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-bold text-center text-2xl">Seguimiento de Pacientes </h2>
        
        <p className="text-ld text-center mt-2">
            Añade Pacientes y {""}
            <span className="text-red-800 text-bold "
            >Administralos</span>
        </p>
         
        <form 
        onSubmit={handleSubmit}
        className="bg-gray-100  mt-5 shadow-md rounded-lg p-8 px-5">


            {error && <Errores mensaje="Todos los campos son obligatorios"/> } 

            <div className="mb-3">
                <label
                className="text-gray-800 uppercase block font-bold">
                    Nombre de la Mascota</label>
                <input
                className=" w-full border-2 rounded-md placeholder-gray-400"
                type="text"
                placeholder="Nombre de la mascota"
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}
                />    
            </div>
            <div className="mb-3" >
                <label
                className="text-gray-800 uppercase block font-bold">
                    Nombre del propietario</label>
                <input
                className=" w-full border-2 rounded-md placeholder-gray-400"
                type="text"
                placeholder="Nombre del propietario"
                value={nombrePropietario}
                onChange={(e)=> setNombrePropietario(e.target.value)}
                />    
            </div>
            <div
            className="mb-3" >
            <label
                className="text-gray-800 uppercase block font-bold">
                    Email</label>
                <input
                className=" w-full border-2 rounded-md placeholder-gray-400"
                type="email"
                placeholder="Email@email.com"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />    
            </div>
            <div className="mb-3">
            <label
                className="text-gray-800 uppercase block font-bold">
                    Alta</label>
                <input
                className=" w-full border-2 rounded-md placeholder-gray-400"
                type="date"
                value={alta}
                onChange={(e)=> setAlta(e.target.value)}
                
                />    
            </div>
            <div className="mb-5">
            <label
                className="text-gray-800 uppercase block font-bold">
                    Sintomas</label>
            <textarea className="w-full" placeholder="Describe los sintomas" value={sintomas}
                onChange={(e)=> setSintomas(e.target.value)}>

            </textarea>
            </div>
            <div>
                <input
                type="submit"
                className="bg-red-800 w-full border-2 rounded-md hover:bg-red-600 text-white uppercase"/>
        
            </div>
            
        </form>
    
     
        
        </div>
        
    );
}

export default Formulario;