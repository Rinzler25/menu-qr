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
    const dia = ahora.getDay(); // Domingo = 0, viernes = 5, sábado = 6
    const minutos = ahora.getHours() * 60 + ahora.getMinutes();

    const texto = document.getElementById("texto-estado");
    const mensaje = document.getElementById("mensaje-estado");
    const punto = document.getElementById("punto-estado");
    const estado = document.getElementById("estado-negocio");

    let abierto = false;
    let mensajeCerrado = "";

    const viernesYSabado = dia === 5 || dia === 6;
    const domingo = dia === 0;

    if (viernesYSabado) {
        abierto = minutos >= 18 * 60 + 45 && minutos < 23 * 60 + 30;

        if (minutos < 18 * 60 + 45) {
            mensajeCerrado = "Abrimos hoy a las 6:45 PM";
        } else {
            mensajeCerrado = dia === 5
                ? "Abrimos mañana a las 6:45 PM"
                : "Abrimos mañana a las 6:30 PM";
        }
    } else if (domingo) {
        abierto = minutos >= 18 * 60 + 30 && minutos < 22 * 60 + 30;

        mensajeCerrado = minutos < 18 * 60 + 30
            ? "Abrimos hoy a las 6:30 PM"
            : "Abrimos el próximo viernes a las 7:00 PM";
    } else {
        mensajeCerrado = dia === 4
            ? "Abrimos mañana a las 6:45 PM"
            : "Abrimos el próximo viernes a las 6:45 PM";
    }

    if (abierto) {
        texto.textContent = "ABIERTO";
        mensaje.textContent = "Estamos atendiendo";
        punto.style.backgroundColor = "#25A244";
        estado.style.borderColor = "#25A244";
    } else {
        texto.textContent = "CERRADO";
        mensaje.textContent = mensajeCerrado;
        punto.style.backgroundColor = "#DC2626";
        estado.style.borderColor = "#DC2626";
    }
}


/* =========================
   ACTUALIZAR ESTADO
========================= */

// Al abrir la página
actualizarEstadoNegocio();

// Revisar cada minuto
setInterval(actualizarEstadoNegocio, 60000);