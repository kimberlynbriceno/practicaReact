import {useState, useEffect} from "react"


function Formulario () {
    const [nombre, setNombre] = useState("")
    const [nombrePropietario, setNombrePropietario] = useState("")
    const [email, setEmail] = useState("")
    const [alta, setAlta] = useState("")
    const [sintomas, setSintomas] = useState("")




    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-center text-2xl">Seguimiento de Pacientes </h2>
        
        <p className="text-ld text-center mt-2">
            Añade Pacientes y {""}
            <span className="text-red-800 text-bold "
            >Administralos</span>
        </p>
        <form className="bg-gray-100  mt-5 shadow-md rounded-lg p-8 px-5">
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
                onChange={(e)=> setNombre(e.target.value)}
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
                onChange={(e)=> setNombre(e.target.value)}
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
                onChange={(e)=> setNombre(e.target.value)}
                
                />    
            </div>
            <div className="mb-5">
            <label
                className="text-gray-800 uppercase block font-bold">
                    Sintomas</label>
            <textarea className="w-full" placeholder="Describe los sintomas" value={sintomas}
                onChange={(e)=> setNombre(e.target.value)}>

            </textarea>
            </div>
            <div>
                <input
                type="submit"
                className="bg-red-800 w-full border-2 rounded-md hover:bg-red-600 text-white"

                />
        
            </div>
            
        </form>
    
     
        
        </div>
        
    );
}

export default Formulario;