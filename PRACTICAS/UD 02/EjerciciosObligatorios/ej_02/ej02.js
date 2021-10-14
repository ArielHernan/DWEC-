console.log("hola mundo");
alert("Hola mundo","width=120,height=300,scrollbars=NO");
function init() {
    document.getElementById("pulsador").addEventListener("click", function(){
        mostrarHolamundo();
    });

}
function mostrarHolamundo() {
    document.getElementById("pulsador").innerHTML = "<h1 style='color:red'>¡Hola mundo!</h1>";
}