var imagenInterna = document.getElementsByClassName("imagenInterna");
var resultado = document.getElementById("resultado"); 
console.log(imagenInterna);
for(let i =0 ; i<imagenInterna.length; i++){
    imagenInterna[i].addEventListener("click", function(){

        resultado.style.backgroundImage = "url('./fotos/mujer"+(i+1)+".jfif')";
    })
}