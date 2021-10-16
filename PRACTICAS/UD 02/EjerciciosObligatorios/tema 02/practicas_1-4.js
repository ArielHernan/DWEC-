function Holamundo() {
    document.getElementById("pulsador").innerHTML = "<h1 style='color:red'>¡Hola mundo!</h1>";
    console.log("hola mundo");
    alert("Hola mundo");
}
function introduceNumero() {
    console.log("Práctica 2.1");
    var continuar=true;
    while(continuar==true){
        let respuesta;
        let numero = prompt("introduce un número", "");
        if (numero <10) {
            document.getElementById("a1").innerHTML = "este número es menor que 10";
            alert("Este número es menor que 10");
            respuesta=prompt("quieres continuar?(1=si. Enter para salir)");
            if(respuesta==1){
                continuar=true;
            }else {
                continuar=false;
            }
        } else{
            document.getElementById("a1").innerHTML = "este número es mayor que 10";
            alert("Este número es Mayor que 10");
            respuesta=prompt("quieres continuar?(1=si. Enter para salir)");
            if(respuesta==1){
                continuar=true;
            }else{
                continuar=false;
            }
        }
     }
}

function navidad() {
    console.log("Práctica 2.2");
    var fechaIntroducida = prompt("Introduce una fecha dd/mm")
    if(fechaIntroducida==("24"+"/"+"12")){
        document.getElementById("a2").innerHTML = "Es navidad"; 
    }else{
        document.getElementById("a2").innerHTML = "NO Es navidad";
    }
}


