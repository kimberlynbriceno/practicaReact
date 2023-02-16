function Pacientes ({pacientes,setPaciente}) {
    console.log(pacientes)

    return ( 
        <div className="bg-gray-100 shadow-md px-5 py-10 rounded-xl m-5 mr-1 ">
        <p className="font-bold mb-3 text-gray-800 uppercase"
        >Nombre: {""} <span
        className="font-normal normal-case">{pacientes.nombre}</span></p>
        <p className="font-bold mb-3 text-gray-800 uppercase"
        >Nombre del Propietario: {""} <span
        className="font-normal normal-case">{pacientes.nombrePropietario}</span></p>
        <p className="font-bold mb-3 text-gray-800 uppercase" 
        >Email: {""} <span
        className="font-normal normal-case">{pacientes.email}</span></p>
        <p className="font-bold mb-3 text-gray-800 uppercase"
        >Alta: {""} <span
        className="font-normal normal-case">{pacientes.alta}</span></p>
        <p className="font-bold mb-3 text-gray-800 uppercase"
        >Sintomas: {""} <span
        className="font-normal normal-case">{pacientes.sintomas}</span></p>

        <div className="flex justify-between">
            <button type="button" onClick={(pacientes) => setPaciente}
            className="bg-red-800 rounded-md uppercase text-white p-3 font-bold mx-4 hover:bg-red-600  w-2/5 " >
                editar
            </button>
            <button type="button" className= "bg-gray-800 rounded-md uppercase text-white p-3 font-bold mx-4 hover:bg-gray-600 w-2/5  " >
                eliminar
            </button>
        </div>
        </div>
     );
}

export default Pacientes ;