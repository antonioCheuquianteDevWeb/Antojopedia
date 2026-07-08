function filtrarPostres(categoria) { 
    const contenedor = document.getElementById('contenedorPostres');

    if (!contenedor) {   
        console.error("Error: no se encontró el contenedor de postres");
        return;
    }

    const nombreArchivo = categoria + ".html";
    const ruta = "PostresTarjetas/" + nombreArchivo;
    console.log(ruta)

    fetch(ruta)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("No se pudo cargar el archivo: " + nombreArchivo);
            }
            return respuesta.text();
        })
        .then(html => {
            contenedor.innerHTML = html;
        })
        .catch(error => {
            console.error("Ocurrió un fallo:", error);
            contenedor.innerHTML = "<p>Error al cargar los postres.</p>";
        });
}

document.addEventListener('DOMContentLoaded', () => {
    filtrarPostres('Todos');
});