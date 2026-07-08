function filtrarFitnes (carga)
{
    const contenedor = document.getElementById('contenedorFitnes')

    if(!contenedor)
    {
        console.error("el contenido no existe")
        return;
    }

    const nombreArchivo = carga + ".html";

    const ruta = "FitnessTarjetas/" + nombreArchivo;

    fetch(ruta)
         .then(respuesta => {
            if(!respuesta)
            {
                console.error("no se entro el contenedor" + respuesta)
            }
            return respuesta.text();
         })
         .then(html => {

          contenedor.innerHTML = html;
         })
         .catch( err => {
            console.error("ocurrio un error" + err)
            contenedor.innerHTML = "<p> no se pudo cargar la lista</p>"
         })  
    
}
document.addEventListener('DOMContentLoaded', () =>{
    filtrarFitnes("Todos");
})
