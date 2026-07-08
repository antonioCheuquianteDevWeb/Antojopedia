function CargarComida(carga) {

    const conteneddor = document.getElementById("contenedorComidaRapida");

    if (!conteneddor) {
        console.error("No se encontró el contenedor");
        return;
    }

    const nombreArchivo = carga + ".html";
    const ruta = "ComidaRapidaTarjetas/" + nombreArchivo;

    console.log(ruta);

    fetch(ruta)
        .then(respuesta => {

            if (!respuesta.ok) {
                throw new Error("No se pudo cargar el archivo " + nombreArchivo);
            }

            return respuesta.text();

        })
        .then(html => {
            conteneddor.innerHTML = html;
        })
        .catch(error => {
            console.error("Hubo un problema al cargar:", error);
            conteneddor.innerHTML = "<p>No se pudieron cargar las tarjetas.</p>";
        });

}

document.addEventListener("DOMContentLoaded", () => {
    CargarComida("Todos");
});