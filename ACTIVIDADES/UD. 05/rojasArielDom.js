//EJERCICO 1
var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");
var textoIntroducido = "";
var posicion1 = 0;
var valorPosicion1 = "";
const div = document.getElementById("divej1");

//EJERCICIO 2
var botonBorrar = document.getElementById("botonBorrar");
var array = "";
var posicionIntroducidaBorrado ="";
var botonLeer = document.getElementById("botonLeer");
var posicionIntroducidaLectura ="";
// console.log(boton);
// console.log(textoIntroducido);

var botonActualizar = document.getElementById("botonActualizar");
var posicionIntroducidaActualizar = "";
var valorActualizar = "";




boton.addEventListener("click", function(e) {
    let ul = document.createElement("ul"); 
    textoIntroducido =  document.getElementById("textoIntroducido").value;
    let texto = document.createTextNode(textoIntroducido);
    ul.appendChild(texto);
    div.appendChild(ul);
    // console.log("a");
});


boton2.addEventListener("click", function(e) {
    let li= document.createElement("li");
    posicion1 = document.getElementById("posicion1").value;
    valorPosicion1 = document.getElementById("valor1").value;
    // posicion1 = parseInt(posicion1);//lo parseo porque al enviar datos por formulario siempre se recibe un String
    posicion1 = parseInt(valorPosicion1);
    let texto = document.createTextNode(valorPosicion1);
    li.appendChild(texto);
    div.appendChild(li);//si es 1 lo hace bien si es menor que uno hay problema
    // lista.insertBefore(node,arrayLi[pos]);

})

botonBorrar.addEventListener("click",function(e) {
posicionIntroducidaBorrado=document.getElementById("posicionIntroducidaBorrado").value;
console.log(posicionIntroducidaBorrado);
array = document.getElementsByTagName("li");
console.log(array);
let borrado = div.removeChild(array[posicionIntroducidaBorrado]);
})

botonLeer.addEventListener("click",function(e) {
    posicionIntroducidaLectura =  document.getElementById("posicionIntroducidaLectura").value;
    console.log(posicionIntroducidaLectura);
    posicionIntroducidaLectura = parseInt(posicionIntroducidaLectura);
    array = document.getElementsByTagName("li");
    alert("operacionLectura: " + array[posicionIntroducidaLectura].innerText);
})

    
botonActualizar.addEventListener("click",function(e) {
    valorActualizar = document.getElementById("valorActualizar").value;
    posicionIntroducidaActualizar = document.getElementById ("posicionIntroducidaActualizar").value;
    posicionIntroducidaActualizar = parseInt(posicionIntroducidaActualizar);
    array = document.getElementsByTagName("li");
    let elemento = document.createElement("li");
    let texto = document.createTextNode(valorActualizar);
    elemento.appendChild(texto);
    div.replaceChild(elemento,array[posicionIntroducidaActualizar]);//no le puedo pasar un string al replaceChild por eso creo let elemento.
})



    