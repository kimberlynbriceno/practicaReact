function Errores({mensaje}) {
    return ( 

    <div className="bg-red-100 rounded-md text-center p-2 text-red-800 mb-2 uppercase font-bold">
        <p>{mensaje}
        </p>
    </div>

     );
}

export default Errores;