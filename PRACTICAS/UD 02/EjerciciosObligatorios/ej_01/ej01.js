console.log("hola mundo");
function init() {
    document.getElementById("pulsador").addEventListener("click", function(){
        mostrarHolamundo();
    });

}
function mostrarHolamundo() {
    document.getElementById("pulsador").innerHTML = "<h1 style='color:red'>¡Hola mundo!</h1>";
}