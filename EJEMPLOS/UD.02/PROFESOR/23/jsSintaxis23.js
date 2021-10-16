function mensajes() {
    console.log("Práctica 2.2");
    console.log("Esto es un texto en la consola");
    alert("Esto es un texto en la ventana");
}

function variables() {
    ejemplo = 3; // Equivale a declararla fuera de la funcion como var

    console.log("Práctica 3.2");
    if (ejemplo === 3) {
        var variable1 = 1;
        let variable2 = 2;
    }
    console.log("LA VARIABLE EXISTE, Y ESTE ES SU VALOR:");
    console.log(variable1); // variable1 existe en este lugar    

    console.log("LA VARIABLE NO EXISTE EN ESTE ÁMBITO");
    console.log(variable2); // variable2 no existe en este lugar
}

function tipos() {
    let edad = 23,
        nueva_edad, incremento = 4;
    const nombre = "Rosa García";

    console.log("Práctica 3.3");
    console.log(typeof incremento === "number");
    nueva_edad = edad + incremento;
    console.log(nombre + " tras " + incremento + " años tendrá " + nueva_edad);
}

function coercion() {
    let numero = 5;

    console.log("Práctica 3.4.1 y 3.4.2");
    console.log(numero); // muestra: 5    
    console.log(numero.toString()); // igualmente muestra: 5
}

function tres43() {
    let a = "2",
        b = 5;

    console.log("Práctica 3.4.3");
    console.log(typeof a + " " + typeof b); // muestra: string number
    console.log(a + b); // nos muestra: 25
}

function tres44() {
    let x = "10";
    let y = 9;
    let z = "9"

    console.log("Práctica 3.4.4, 3.4.5");
    console.log(x < y); // muestra: false, se produce una conversión a número
    console.log(x < z); // muestra: true, ya que los dos son String y los compara como cadena
}

function tres46() {
    let altura; // variable no definida

    console.log("Práctica 3.4.6");
    console.log(altura ? true : false); //Al no estar definido, muestra: false. Uso de un operador "ternario"
    /*
    if (altura) {                       //Al no estar definido, muestra: false. Uso del operador "if"
        console.log("true");
    } else {
        console.log("false");
    }
    */
}

var miVector = []; // let miVector=new Array(); es equivalente
// Array definido 1 a 1 
miVector[0] = 22;
miVector[1] = 12;
miVector[2] = 33;

function tres5a() {
    // Array definido en una línea inicializando elementos
    let otroArray = [1, 2, "Cancamusa"]; // Valores dentro del array

    console.log("Práctica 3.5 (array unidimensional)");
    console.log(miVector[1]);
    console.log(otroArray[2]);
    console.log(miVector + " " + miVector.length); //  array y tamaño
    // Recorrido de una array
    let arr = ["1", "10", "100", "1000"];
    for (let i = 0; i < arr.length && arr[i] < 500; i++) {
        console.log(i);
    } // Mostrará 0,1,2
    console.log(miVector);
    console.log(arr);
}

var activities = [];
// Array bidimensional, equivalente al concepto de tabla
activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

function tres5b() {
    console.log("Práctica 3.5 (array bidimensional)");
    // Lo recorremos con dos bucles "for" anidados
    for (let i = 0; i < activities.length; i++) {
        // El primer bucle recorre la columna, elemento a elemento
        let innerArrayLength = activities[i].length;
        // El segundo buche, para cada elemento de la columna, recorre el vector asociado
        for (let j = 0; j < innerArrayLength; j++) {
            console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
        }
    }
    // Esto es equivalene a lo anterior
    activities.forEach((activity) => {
        activity.forEach((data) => {
            console.log(data);
        });
    });
    // console tambien tiene sus funciones propias para tablas
    console.table(activities);
}

function tres6() {
    console.log("Práctica 3.6 (clonamos un array)");
    console.log("ARRAY CON EL QUE VAMOS A TRABAJAR");
    console.log(miVector);

    console.log("HACIENDO USO DE 'Spread'. SPREADING THE ARRAY");
    // Clonando un array, o igualando dos arrays
    let miArrayUnidimensional = {
        ...miVector
    }; // Se conoce como Spread
    console.table(miArrayUnidimensional);

    console.log("HACIENDO USO DE 'Object.assign'. OTRA FORMA DE CLONAR");
    let miOtroUnidimensional = Object.assign({}, miVector);
    console.table(miOtroUnidimensional);

    console.log("ARRAY CON EL QUE VAMOS A TRABAJAR");
    console.log(activities);
    console.log("HACIENDO USO DE 'JSON'. LA FORMA PREFERIDA");
    let miArrayBidimensional = JSON.parse(JSON.stringify(activities));
    console.table(miArrayBidimensional);
}

function tres7() {
    let num = "100"; //Es una cadena
    let num2 = "100.13"; //Es una cadena
    let num3 = 11; // Es un entero
    let n = parseInt(num); // Almacena un entero. Si hubiera habido parte decimal la truncará
    let n2 = parseFloat(num2); // Almacena un decimal
    let n3 = num3.toString(); // Almacena una cadena
    
    console.log("Práctica 3.7");
    console.log(num);
    console.log(n);
    console.log(num2);
    console.log(n2);
    console.log(num3);
    console.log(n3);
}

function tres8() {
    console.log("Práctica 3.8");
    const PI = 3.1416;
    console.log(PI);
    console.log("LA VARIABLE NO SE PUEDE ASIGNAR PORQUE HA SIDO DEFINIDA COMO CONSTANTE");
    PI = 3; // Esto falla

    const miArray = [1, 2, 3];
    console.log(miArray[0]); // Muestra el valor 1
    console.log("LOS ELEMENTOS DEL ARRAY SI SE PUEDEN ASIGNAR");
    miArray[0] = 4;
    console.log(miArray[0]); // Muestra el valor 4
    console.log("EL ARRAY NO SE PUEDE ASIGNAR PORQUE HA SIDO DEFINIDO COMO CONSTANTE");
    miArray = []; // Esto falla porque 'miArray' ha sido definida como constante
}

function tres9() {
    console.log("Práctica 3.9");
    /*
    "use strict";
    pi = 3.14; // Da error
    funcionPrueba();

    function funcionPrueba() {
        piBIS = 3.14; // Da error
    }
    */

    pi = 3.14; // No da error
    funcionPrueba();

    function funcionPrueba() {
        console.log(pi);
        "use strict";
        let piNew = 3.141592; // No da error
        console.log(piNew);
    }

}