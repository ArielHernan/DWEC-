function inicio() {
    // EJEMPLO DE UN ACCESO TOTAL
    const caja = document.getElementById("caja");
    const pulsa = document.getElementById("pulsa");
    const borra = document.getElementById("borra");
    const texto = document.getElementById("texto");

    pulsa.addEventListener("click", function (event) {
        texto.innerHTML = "El html del 'div' es: <br />" + caja.innerHTML;
    });

    borra.addEventListener("click", function (event) {
        texto.innerHTML = "";
    });

    // EJERCICIO 3.1
    const pulsa31 = document.getElementById("pulsa31");
    const texto31 = document.getElementById("texto31");

    pulsa31.addEventListener("click", function (event) {
        texto31.textContent = "El parrafo ha cambiado";
    });

    // EJERCICIO 3.2
    const contenedor = document.getElementById("contenedor");
    const divs = contenedor.getElementsByTagName("div");
    
    let numeroElementos = divs[2].getElementsByClassName("ejer32").length;
    let parrafos = divs[2].getElementsByTagName("p");
    let numeroParrafos = parrafos.length;

    const pulsa32 = document.getElementById("pulsa32");
    const texto32 = document.getElementById("texto32a");

    pulsa32.addEventListener("click", function (event) {
        texto32.innerHTML = "Hay " + numeroElementos + " elementos dentro de la etiqueta 'div'";
        texto32.innerHTML += "<br />de los cuales " + numeroParrafos + " son 'p'";
    });

    // EJERCICIO 3.3
    const elementos = document.getElementsByName("ejer33");

    const pulsa33 = document.getElementById("pulsa33");
    const texto33 = document.getElementById("texto33");

    pulsa33.addEventListener("click", function (event) {
        console.log(elementos.length);
        console.log(elementos);
        for (let i = 0; i < elementos.length; i++) {
            if (elementos[i].type === "checkbox") {
                elementos[i].checked = true;
            }
        }
        texto33.innerHTML = "Todos los alumnos han sido chequeados";
    });

    // EJERCICIO 4.1
    const primero = document.getElementById("primero");
    const ultimo = document.getElementById("ultimo");

    const div41 = document.getElementById("div41");
    const lista41 = document.getElementById("lista41");

    const texto41 = document.getElementById("texto41");

    primero.addEventListener("click", function (event) {
         div41.removeChild(div41.firstElementChild);
        lista41.removeChild(lista41.firstElementChild);

        texto41.innerHTML = "El primer elemento de parrafo y lista ha sido eliminado";
    });

    ultimo.addEventListener("click", function (event) {
        div41.removeChild(div41.lastElementChild);
        lista41.removeChild(lista41.lastElementChild);

        texto41.innerHTML = "El último elemento de parrafo y lista ha sido eliminado";
    });

    // EJERCICIO 4.2
    let creaParrafos = ["Parrafo 1", "Parrafo 2", "Parrafo 3"];
    let creaElementos = ["Carne", "Pescado", "Verdura"];

    const creaP = document.getElementById("creaP");
    const creaL = document.getElementById("creaL");

    const parrafo42 = document.getElementById("parrafo42");
    const lista42 = document.getElementById("lista42");
    const texto42 = document.getElementById("texto42");

    function limpiar(padre) {
        while (padre.hasChildNodes()) {
            padre.removeChild(padre.lastChild);
        }
    }

    creaP.addEventListener("click", function (event) {
        limpiar(parrafo42);
        limpiar(lista42);
        for (let i = 0; i <= creaParrafos.length - 1; i++) {
            let contenido = document.createTextNode(creaParrafos[i]);
            let parrafo = document.createElement("p");
            parrafo.appendChild(contenido);
            parrafo42.appendChild(parrafo);
            console.log(document.getElementById("caja42").length);
        }
        
        texto42.innerHTML = "Se han creado los párrafos";
    });

    creaL.addEventListener("click", function (event) {
        limpiar(parrafo42);
        limpiar(lista42);
        for (let i = 0; i <= creaElementos.length - 1; i++) {
            let contenido = document.createTextNode(creaElementos[i]);
            let elemento = document.createElement("li");
            elemento.appendChild(contenido);
            lista42.appendChild(elemento);
            console.log(document.getElementById("caja42").length);
        }
        
        texto42.innerHTML = "Se han creado los elementos";
    });
}
window.onload = inicio;