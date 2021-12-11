// EJERCICIO 1

function position(event){

	var x = event.clientX;

	var y = event.clientY;

	var derecha = document.getElementById('movimiento');

	derecha.innerHTML = 'X coords: '+x+', Y coords: '+y;
}
//EJERCICIO 2

var resultado1 = document.getElementById("resultado4");
var resultado2 = document.getElementById('resultado2');

console.log(resultado1);
console.log(resultado2);

document.addEventListener("keypress",function(evento) {
    resultado1.innerText="valor de la tecla: "+String.fromCharCode(evento.keyCode) + ",código Asci: "+evento.keyCode;
    resultado2.style.color = "blue";
});

document.addEventListener("mousemove",movimiento);
function movimiento(e) {
   
resultado2.style.color="red";
}

//ejercicio3
var imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", function() {
    imagen.setAttribute("src","img/pic_bulbon.gif")
});
imagen.addEventListener("mouseout", function(){
    imagen.setAttribute("src","img/pic_bulboff.gif")
});

//ejercicio 4
document.addEventListener("dragstart", function (e) {
	e.dataTransfer.setData("Text", e.target.id);
	e.target.style.opacity = "0.8  ";
});

document.addEventListener("dragover", function (e) {
	e.preventDefault();
});

document.addEventListener("drop", function (e) {
	e.preventDefault();
	let data = e.dataTransfer.getData("Text");
	//evento.target.appendChild(document.getElementById(data));
	e.target.style.backgroundImage="url('img/papeleraLlena.jpg')";
});

document.addEventListener("dragend", function (e) {
e.target.style.opacity = "0";
});