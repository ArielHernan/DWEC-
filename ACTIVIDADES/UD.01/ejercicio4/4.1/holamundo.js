
function init() {
    alert("Hola mundo");
    //añado una linea para probar
    //añado otra
    //y otra
    // Añadiendo Listeners(Escuchadores)
    /*
    let pulsador = document.getElementById('pulsador');

    pulsador.onclick = function (e) {
        cambiarTexto();
    }
    */

    // Añadiendo Listeners(Escuchadores)

    document.getElementById("pulsador").addEventListener("click", function (e) {
        cambiarTexto();
        console.log(e.clientX);
        console.log(e.clientY);
    });

}

function cambiarTexto() {
    document.getElementById('texto').innerHTML = "<p style='color:black'><h1>¡Hola mundo!</h1></p>";
}