
function introduceNumero() {

    console.log("Práctica 2.1");
    var continuar=true;
    while(continuar==true){
        let respuesta;
        let numero = prompt("introduce un número", "");
        if (numero <10) {
            document.getElementById("solucion").innerHTML = "este número es menor que 10";
            alert("Este número es menor que 10");
            respuesta=prompt("quieres continuar?(1=si. Enter para salir)");
            if(respuesta==1){
                continuar=true;
            }else {
                continuar=false;
            }
        } else{
            document.getElementById("solucion").innerHTML = "este número es mayor que 10";
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


