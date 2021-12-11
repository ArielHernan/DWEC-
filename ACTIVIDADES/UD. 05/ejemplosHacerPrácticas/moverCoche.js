"use strict";

function inicio() {
    var desplazaFondoUno = 0;

    const fondoUno = document.getElementById("fondoUno"); 
    const fondoDos = document.getElementById("fondoDos"); 

    setInterval(desplazar, 50); // 50ms = 0.05s. Si cada 0.05s desplazo 10px, cada 2,25s desplazo todo el fondo
    setInterval(repetir, 2250); // Esto quiere decir que cada 2250ms tengo que volver a repetir el proceso

    function desplazar() { 
        desplazaFondoUno -= 10; 
        let desplazaFondoDos = desplazaFondoUno + 450; 
        fondoUno.style.left = desplazaFondoUno + "px"; 
        fondoDos.style.left = desplazaFondoDos + "px"; 
    }

    function repetir() { 
        fondoUno.style.left = "0px"; 
        fondoDos.style.left = "450px"; 
        desplazaFondoUno = 0; 
    }
}

window.onload = inicio;