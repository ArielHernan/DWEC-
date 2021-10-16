function Holamundo() {
    // a través de document.getElementById cogemos el elemento de html 
    // que tenga esa id y con el innerHTML insertamos en esa id lo que queramos
    document.getElementById("pulsador").innerHTML = "<h1 style='color:red'>¡Hola mundo!</h1>";
    console.log("hola mundo");
    alert("Hola mundo");
}

function introduceNumero() {
    console.log("Práctica 2.1");
    var continuar=true;
    // utilizo el bucle while para hacer que se pueda repetir varias veces
    //hasta que el usuario quiera
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
        }//fin del else principal
    }//fin del while
}//fin de la función

function navidad() {
    console.log("Práctica 2.2");
    var fechaIntroducida = prompt("Introduce una fecha dd/mm")
    if(fechaIntroducida==("24/12")){
        document.getElementById("a2").innerHTML = "<h1>Es navidad</h1>"; 
    }else{
        document.getElementById("a2").innerHTML = "<h1>NO Es navidad</h1>";
    }
}//fin de la Función

// Menos de 500€ y más de 10 años, incrementa por 3
// Menos de 500€ y menos de 10 años, incrementa por 2
// Más de 500€, lleve el tiempo que lleve, se queda igual
function(sueldo){
    let salario=prompt("introduce tu salario");
    let anti=prompt("introduce tu antigüedad en años");

    if(salario<500&&ant>10){
        salario=salario*3;
        document.getElementById("a3").innerHTML = salario; 
    }else if(salario<500&&ant<10){
        salario=salario*2;
    }else if(salario>500){
        salario=salario;
    }
}

