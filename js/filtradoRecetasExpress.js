function filtrarRecetasExpress(carga)
 {
   const contenedor = document.getElementById('contenedorRecetasExpress');

   if(!contenedor)
   {
    console.error("no se encontro el contenedor" + contenedor)
   }

   const nombreArchivo = carga + ".html";

   const rutaCompleta = "ComidaRapidaTarjetas/" + nombreArchivo;


   fetch(rutaCompleta)
       .then(respuesta => {
        if(!respuesta. ok)
        {
            console.error("no se pudo cargar el documento" + nombreArchivo);
        }
       return respuesta.text();
       })
       .then(html => {
        contenedor.innerHTML = html;
       })
       .catch( error =>{
        console.error("error al cargar el archivo" + error)
        contenedor.innerHTML = "<p>error al cargar el archivo</p>";
       })




}  
document.addEventListener("DOMContentLoaded",() => {
    filtrarRecetasExpress('Todos')
})