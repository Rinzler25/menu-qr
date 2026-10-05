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

    const dia = ahora.getDay();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();

    const horaActual = hora * 60 + minutos;

    // Horario:
    // Viernes, sábado y domingo
    // 6:45 PM - 11:30 PM

    const apertura = 18 * 60 + 45; // 6:45 PM
    const cierre = 22 * 60 + 30;   // 11:30 PM

    const estado = document.getElementById("estado-negocio");
    const punto = document.getElementById("punto-estado");
    const texto = document.getElementById("texto-estado");
    const mensaje = document.getElementById("mensaje-estado");


    /* =========================
       VIERNES, SÁBADO Y DOMINGO
    ========================= */

    const diaDeAtencion =
        dia === 0 ||
        dia === 5 ||
        dia === 6;


    /* =========================
       DÍAS SIN SERVICIO
    ========================= */

    if (!diaDeAtencion) {

        texto.textContent = "CERRADO";

        if (dia === 4) {

            // Jueves
            mensaje.textContent =
                "Abrimos mañana a las 6:45 PM";

        } else {

            // Lunes, martes y miércoles
            mensaje.textContent =
                "Abrimos el próximo viernes a las 6:45 PM";
        }

        estado.style.borderLeftColor = "#dc2626";
        punto.style.background = "#dc2626";

        return;
    }


    /* =========================
       ANTES DE ABRIR
    ========================= */

    if (horaActual < apertura) {

        texto.textContent = "CERRADO";

        if (dia === 5) {

            // Viernes antes de las 6:45 PM
            mensaje.textContent =
                "Abrimos hoy a las 6:45 PM";

        } else {

            // Sábado o domingo antes de las 6:45 PM
            mensaje.textContent =
                "Abrimos hoy a las 6:45 PM";
        }

        estado.style.borderLeftColor = "#dc2626";
        punto.style.background = "#dc2626";

        return;
    }


    /* =========================
       ABIERTO
    ========================= */

    if (horaActual <= cierre) {

        texto.textContent = "ABIERTO";
        mensaje.textContent = "Estamos atendiendo";

        estado.style.borderLeftColor = "#25a244";
        punto.style.background = "#25a244";

        return;
    }


    /* =========================
       DESPUÉS DE CERRAR
    ========================= */

    texto.textContent = "CERRADO";

    if (dia === 5 || dia === 6) {

        mensaje.textContent =
            "Abrimos mañana a las 6:45 PM";

    } else {

        mensaje.textContent =
            "Abrimos el próximo viernes a las 6:45 PM";
    }

    estado.style.borderLeftColor = "#dc2626";
    punto.style.background = "#dc2626";
}


/* =========================
   ACTUALIZAR ESTADO
========================= */

// Al abrir la página
actualizarEstadoNegocio();

// Revisar cada minuto
setInterval(actualizarEstadoNegocio, 60000);
