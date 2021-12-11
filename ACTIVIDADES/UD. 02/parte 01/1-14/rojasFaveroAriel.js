function Holamundo() {
    // a través de document.getElementById cogemos el elemento de html 
    // que tenga esa id y con el innerHTML insertamos en esa id lo que queramos
    document.getElementById("pulsador").innerHTML = "<h1 style='color:red'>¡Hola mundo!</h1>";
    console.log("hola mundo");
    alert("Hola mundo");
}//fin funcion Holamundo

function introduceNumero() {
    console.log("Práctica 2.1");
    var continuar = true;
    // utilizo el bucle while para hacer que se pueda repetir varias veces
    //hasta que el usuario quiera
    while (continuar == true) {
        let respuesta;
        let numero = prompt("introduce un número", "");
        if (numero < 10) {
            document.getElementById("a1").innerHTML = "este número es menor que 10";
            alert("Este número es menor que 10");
            respuesta = prompt("quieres continuar?(1=si. Enter para salir)");
            if (respuesta == 1) {
                continuar = true;
            } else {
                continuar = false;
            }
        } else {
            document.getElementById("a1").innerHTML = "este número es mayor que 10";
            alert("Este número es Mayor que 10");
            respuesta = prompt("quieres continuar?(1=si. Enter para salir)");
            if (respuesta == 1) {
                continuar = true;
            } else {
                continuar = false;
            }
        }//fin del else principal
    }//fin del while
}//fin de la función

function navidad() {
    console.log("Práctica 2.2");
    var fechaIntroducida = prompt("Introduce una fecha dd/mm")
    if (fechaIntroducida == ("25/12")) {
        document.getElementById("a2").innerHTML = "<h1>Es navidad</h1>";
    } else {
        document.getElementById("a2").innerHTML = "<h1>NO Es navidad</h1>";
    }
}//fin de la Función

// Menos de 500€ y más de 10 años, incrementa por 3
// Menos de 500€ y menos de 10 años, incrementa por 2
// Más de 500€, lleve el tiempo que lleve, se queda igual
function sueldo() {
    let salario = prompt("introduce tu salario");
    let anti = prompt("introduce tu antigüedad en años");

    if (salario < 500 && anti > 10) {
        salario = salario * 3;
        document.getElementById("a3").innerHTML = salario;
    } else if (salario < 500 && anti < 10) {
        salario = salario * 2;
        document.getElementById("a3").innerHTML = salario;
    } else if (salario > 500) {
        salario = salario;
        document.getElementById("a3").innerHTML = salario;
    }
}//Fin funcion sueldo()

function nota() {
    var calificacion = prompt("Introduce tu nota");
    if (calificacion < 3) {
        document.getElementById("a4").innerHTML = "Tu nota ha sido MUY DEFICIENTE";
    } else if (calificacion < 5) {
        document.getElementById("a4").innerHTML = "Tu nota ha sido  INSUFICIENTE";
    } else if (calificacion < 6) {
        document.getElementById("a4").innerHTML = "Tu nota ha sido BIEN";
    } else if (calificacion < 9) {
        document.getElementById("a4").innerHTML = "Tu nota ha sido NOTABLE";
    } else if (calificacion < 10) {
        document.getElementById("a4").innerHTML = "Tu nota es: SOBRESALIENTE, FELICIDADES!!";
    } else if (calificacion == 10) {
        document.getElementById("a4").innerHTML = "Tu nota es: MATRÍCULA DE HONOR MÁQUINA, FELICIDADES!!";
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Aquí he intentado solucionar el problema a través de u switch ya que no me gusta anidar mas de 3 
else if seguidos, pero no he conseguido que aceptara decimales
function nota() {
    var calificacion = prompt("Introduce tu nota");
    var resultado;
    calificacion = Number.parseFloat(calificacion);//he intentado hacer una conversion para que aceptara números con decimales pero n lo he conseguido
    switch (calificacion) {
        case 1:
        case 2:
            document.getElementById("a4").innerHTML ="Tu nota ha sido MUY DEFICIENTE" ;
         
            break;
        case 3:    
        case 4:
            document.getElementById("a4").innerHTML = "Tu nota ha sido MUY INSUFICIENTE";
           
            break;
        case 5:
            document.getElementById("a4").innerHTML = "Tu nota ha sido BIEN";
        
            break;
        case 6:
        case 7:
        case 8:
            document.getElementById("a4").innerHTML = "Tu nota ha sido NOTABLE";
           
            break;
        case 9:
            document.getElementById("a4").innerHTML ="Tu nota es: SOBRESALIENTE";
     
            break;
        case 10:
            document.getElementById("a4").innerHTML ="Tu nota es: MATRÍCULA DE HONOR MÁQUINA, FELICIDADES!!";
            break;  
        
      
    }//FIN SWITCH
    
//}//FIN FUNCION nota()*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

function pares() {
    let numeroIntroducido = prompt("introduce un número");
    let i = 0;
    for (i = 2; i < numeroIntroducido; i += 2) {
        document.write("<h2>" + i + "</h2>");
    }
}

function impares() {
    let numeroIntroducido = prompt("introduce un número");
    let i = 1;
    for (i = 1; i < numeroIntroducido; i += 2) {
        document.write("<h2>" + i + "</h2>");
    }
}

function tabla() {
    var j = prompt("Introduce un número y te daré su tabla de multiplicar")
    document.write("<h2>Tabla de multiplicar del " + j + "</h2>");

    document.write("<ul>");
    //i++ significa i=i+1;

    for (i = 1; i <= 10; i++) {
        document.write("<li>");
        document.write("<h3>");
        document.write(j + "x " + i + "= " + j * i);
        document.write("</h3>");
        document.write("</li>");
    }

    document.write("</ul>");
}

function copiaTabla() {
    var filas = prompt("Introduce el número de filas:")
    var celdas = prompt("Introduce el numero de celdas")

    document.write("<table>")
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < filas; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 0; j < celdas; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("celda en la hilera " + i + ", columna " + j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "3");
}

function primos() {
    var numero = prompt("Introduce un número y te diré si es primo o no");
    var esPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            esPrimo = false;
        } else {
            esPrimo = true;
        }

    }
    if (esPrimo == true) {
        document.getElementById("a6").innerHTML = "El número es primo";
    } else {
        document.getElementById("a6").innerHTML = "El número NO es primo";
    }
}

function suma() {
    var op1 = prompt("Introduce el primer operando");
    var op2 = prompt("Introduce el segundo operando");
    //si no ponemos el parseInt no suma sino que concatena. uso el parseFloat porque así puedo meter números con decimales.
    var suma = parseFloat(op1) + parseFloat(op2);
    document.getElementById("a7").innerHTML = "La suma de los dos números es :" + suma;
}
function perimetro() {
    var lado1 = prompt("Introduce el primer lado del rectángulo:");
    var lado2 = prompt("INtroduce el segundo lado del rectángulo");

    var resultado = 2 * parseFloat(lado1) + 2 * parseFloat(lado2);
    document.getElementById("a8").innerHTML = "El perímetro del rectángulo es:" + resultado;
}

function factorial() {
    let numero = prompt("introduce un número y te daré el factorial");
    let resultado = 1;
    for (let i = numero; i > 0; i--) {
        document.write(i + "     ");
        resultado = resultado * i;
        if (i == 1) {
            document.write("                    " + resultado);
        }
    }
}





