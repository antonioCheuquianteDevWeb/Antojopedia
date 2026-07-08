function filtrarjugosyBebidas(carga)
{
    const contenedor = document.getElementById('contenedorJugosyBebidas');

    if(!contenedor)
    {
        console.error("el contenedor no existe");
        return;
    }

    const nombreArchivo = carga + '.html';
    
    const rutaCompleta = "JugosyBebidasTarjetas/" + nombreArchivo ;

    fetch(rutaCompleta)
    .then (respuesta=>{
        if(!respuesta.ok)
        {
            throw new Error ("no se pudo encontrar el archivo" + nombreArchivo)
        }
        return respuesta.text();
    })
    .then(html => {

        contenedor.innerHTML = html;

    })
    .catch(err  =>{
          console.error("ocurrio un fallo" + err);
          contenedor.innerHTML = "<p> no se pudo cargar la lista</p>";
    })
        
    
    
}

document.addEventListener('DOMContentLoaded' , () => {
    filtrarjugosyBebidas('Todos');
});