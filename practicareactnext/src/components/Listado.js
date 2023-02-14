function Listado () {
    return ( 
        <div className="md:w-1/2 lg:w-3/5">  
            <h2 className="font-bold text-center text-2xl">Listado de Pacientes</h2>
            <p className="text-ld text-center mt-2">Administra tus {""} <span className="text-red-800 text-bold">Pacientes y Citas</span></p>
        
        <div className="bg-gray-100 shadow-md px-5 py-10 rounded-xl m-5 mr-5 ">
                <p className="font-bold mb-3 text-gray-800 uppercase"
                >Nombre: {""} <span
                className="font-normal normal-case">Hook</span></p>
                <p className="font-bold mb-3 text-gray-800 uppercase"
                >Nombre del Propietario: {""} <span
                className="font-normal normal-case">Andres</span></p>
                <p className="font-bold mb-3 text-gray-800 uppercase"
                >Email: {""} <span
                className="font-normal normal-case">Email@email.com</span></p>
                <p className="font-bold mb-3 text-gray-800 uppercase"
                >Alta: {""} <span
                className="font-normal normal-case">10 febrero 2023</span></p>
                <p className="font-bold mb-3 text-gray-800 uppercase"
                >Sintomas: {""} <span
                className="font-normal normal-case">no quiere comer</span></p>
        </div>

        
        </div>
     );
}

export default Listado ;