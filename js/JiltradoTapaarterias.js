function FiltradoLosTapaarterias(carga)
{
    const contenedor = document.getElementById('contenedorLosTapaarterias')

    if(!contenedor)
    {
        console.log("no se encontro el contenedor");
        return;
    }
    const nombreArchivo = carga + ".html";

    const rutaArchivo ="losTapaarteriasTarjetas/" + nombreArchivo;

    fetch(rutaArchivo)
        .then(Respuesta => {

            if(!Respuesta.ok)
            {
                throw new Error("No se pudo cargar el archivo: " + nombreArchivo);
            }
            return Respuesta.text();
        })
        .then( html=>{

            contenedor.innerHTML = html

        })
        .catch(error => {
            console.error("error inesperado" + error );
            contenedor.innerHTML = "<p>Error inesperado</p>"
        })
}

document.addEventListener('DOMContentLoaded', () => {
    FiltradoLosTapaarterias('Todos');
})