/* =========================
   CATEGORÍAS PRINCIPALES
========================= */

function alternarCategoria(id) {

    const categoriaSeleccionada =
        document.getElementById(id);

    const flechaSeleccionada =
        document.getElementById("flecha-" + id);


    // Obtener todas las categorías principales
    const categorias =
        document.querySelectorAll(".contenido-principal");

    const flechas =
        document.querySelectorAll(".flecha-principal");


    // Si la categoría ya está abierta,
    // se cierra
    if (
        categoriaSeleccionada.classList.contains("abierto")
    ) {

        categoriaSeleccionada.classList.remove("abierto");

        flechaSeleccionada.classList.remove("abierta");

        return;
    }


    // Cerrar todas las demás categorías
    categorias.forEach(function(categoria) {

        categoria.classList.remove("abierto");

    });


    // Regresar todas las flechas a su posición original
    flechas.forEach(function(flecha) {

        flecha.classList.remove("abierta");

    });


    // Abrir la categoría seleccionada
    categoriaSeleccionada.classList.add("abierto");

    flechaSeleccionada.classList.add("abierta");
}



/* =========================
   SUBCATEGORÍAS DE BEBIDAS
========================= */

function alternarSubcategoria(id) {

    const subcategoriaSeleccionada =
        document.getElementById(id);

    const flechaSeleccionada =
        document.getElementById("flecha-" + id);


    // Buscar la sección principal de bebidas
    const contenidoPrincipal =
        subcategoriaSeleccionada.closest(
            ".contenido-principal"
        );


    // Obtener las subcategorías que pertenecen
    // a esta sección
    const subcategorias =
        contenidoPrincipal.querySelectorAll(
            ".contenido-subcategoria"
        );


    const flechas =
        contenidoPrincipal.querySelectorAll(
            ".flecha-subcategoria"
        );


    // Si ya está abierta, se cierra
    if (
        subcategoriaSeleccionada.classList.contains("abierto")
    ) {

        subcategoriaSeleccionada.classList.remove("abierto");

        flechaSeleccionada.classList.remove("abierta");

        return;
    }


    // Cerrar las demás subcategorías
    subcategorias.forEach(function(subcategoria) {

        subcategoria.classList.remove("abierto");

    });


    // Regresar las demás flechas
    flechas.forEach(function(flecha) {

        flecha.classList.remove("abierta");

    });


    // Abrir la subcategoría seleccionada
    subcategoriaSeleccionada.classList.add("abierto");

    flechaSeleccionada.classList.add("abierta");
}

/* =========================
   HORARIO DEL NEGOCIO
========================= */

function actualizarEstadoNegocio() {
    const ahora = new Date();
    const dia = ahora.getDay(); // Domingo = 0, jueves = 4
    const minutos = ahora.getHours() * 60 + ahora.getMinutes();

    const texto = document.getElementById("texto-estado");
    const mensaje = document.getElementById("mensaje-estado");
    const punto = document.getElementById("punto-estado");
    const estado = document.getElementById("estado-negocio");

    const diasApertura = [4, 5, 6]; // Jueves, viernes y sábado
    const apertura = 18 * 60;       // 7:00 PM
    const cierre = 23 * 60 + 10;    // 11:30 PM

    const abierto =
        diasApertura.includes(dia) &&
        minutos >= apertura &&
        minutos < cierre;

    if (abierto) {
        texto.textContent = "ABIERTO";
        mensaje.textContent = "Estamos atendiendo";
        punto.style.backgroundColor = "#25A244";
        estado.style.borderColor = "#25A244";
        return;
    }

    texto.textContent = "CERRADO";
    punto.style.backgroundColor = "#DC2626";
    estado.style.borderColor = "#DC2626";

    if (dia === 4 || dia === 5) {
        mensaje.textContent = minutos < apertura
            ? "Abrimos hoy a las 6:30 PM"
            : "Abrimos mañana a las 6:30 PM";
    } else if (dia === 6 && minutos >= cierre) {
        mensaje.textContent = "Abrimos el próximo jueves a las 6:30 PM";
    } else if (dia === 0 || dia === 1 || dia === 2 || dia === 3) {
        mensaje.textContent = "Abrimos el próximo jueves a las 6:30 PM";
    } else {
        mensaje.textContent = "Abrimos hoy a las 6:30 PM";
    }
}

actualizarEstadoNegocio();
setInterval(actualizarEstadoNegocio, 60000);
