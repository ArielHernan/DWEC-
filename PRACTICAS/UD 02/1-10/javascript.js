alert("PRUEBA DE ALERT");
console.log("mensaje por consola puebas");
function init() {
    // Añadiendo Listeners(Escuchadores)
    /*
    let pulsador = document.getElementById('pulsador');

    pulsador.onclick = function (e) {
        cambiarTexto();
    }
    */

    // Añadiendo Listeners(Escuchadores)
    document.getElementById("pulsador").addEventListener("click", function () {
        cambiarTexto();
    });
    document.getElementById("prueba").addEventListener("click", function () {
        ejemplo();
    });

}

function cambiarTexto() {
    document.getElementById('texto').innerHTML = "<p style='color:black'><h1>¡Hola mundo!</h1></p>";
}
function ejemplo(){
    ejemplo=3; // Equivale a declararla fuera de la funcion como var
    if (ejemplo === 3){
    var variable1 = 7   ;
    let variable2 = 2;
    }
    console.log(variable1); // variable1 existe en este lugar
    console.log(variable2); // variable2 no existe en este lugar
   }
   