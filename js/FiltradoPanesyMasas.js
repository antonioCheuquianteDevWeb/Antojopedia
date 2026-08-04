function PanesyMasas(carga)
{
   const contenedor = document.getElementById('contenedorPanesyMasas')
   if(!contenedor)
   {
     console.log("no se encontro el contenedor" + contenedor);
     return;
   }
   const nombre = carga + ".html";

   const rutaCompleta = "PanesyMasasTarjetas/" + nombre;
   
   fetch(rutaCompleta)
   
      .then( Respuesta=>{
        if(!Respuesta.ok)
        {
            throw new Error(" no se encontro contenido que cargar" + Respuesta );
           
        }
         return Respuesta.text();
      })
      .then(html => {
        contenedor.innerHTML = html;
      })
      .catch(error => {
        contenedor.innerHTML ="<p>error inesperado</p>";
        console.error("error al hacer la peticion " + error);
      })
   
}

document.addEventListener('DOMContentLoaded', () =>
{
    PanesyMasas('Todos');
})