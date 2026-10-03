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