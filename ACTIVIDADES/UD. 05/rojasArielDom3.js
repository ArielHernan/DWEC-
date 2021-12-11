var contador= 1;
function cambiar() {
    document.getElementById("resultado").style.backgroundImage = "url('./fotos/mujer"+(contador)+".jfif')";
}

var flechaIzquierda = document.getElementById("flechaIzquierda");
var flechaDerecha = document.getElementById("flechaDerecha");

flechaIzquierda.addEventListener("click", function(e) {

    contador--;
    if(contador==0){

        contador =9;
    }
    cambiar();
});
flechaDerecha.addEventListener("click", function(e) {

    contador++;
    if(contador==9){
        contador =1;
    }
    cambiar();
});