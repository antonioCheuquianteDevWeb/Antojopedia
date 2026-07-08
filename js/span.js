function cargarLista(nombreArchivo) { 
    // Creamos la variable que te hace falta conectándola con el ID de tu HTML
    const contenedor = document.getElementById('contenedorMini'); 

    if(!contenedor)
    {
        console.error("no se encontro el id")
        return;
    }

    const rutaCarpeta = 'VISTAS/spans/'; 
    const rutaCompleta = rutaCarpeta + nombreArchivo;

    fetch(rutaCompleta) 
        .then(respuesta => {
            if (!respuesta.ok) throw new Error('No se pudo cargar el archivo HTML');
            return respuesta.text();
        })
        .then(htmlDeLasTarjetas => {
            // Ahora 'contenedor' SÍ existirá y funcionará perfectamente
            contenedor.innerHTML = htmlDeLasTarjetas; 
        })
        .catch(error => {
            console.error('Hubo un problema al desplegar la lista:', error);
        });
}

    