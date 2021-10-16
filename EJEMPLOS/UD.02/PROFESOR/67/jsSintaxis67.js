function seis1a() {
    let diaSem;

    console.log("Práctica 6.1a");
    diaSem = prompt("Introduce el día de la semana ", "");
    if (diaSem === "domingo") {
        console.log("Hoy es festivo");
    } else // Al no tener {}, es un "bloque de una instrucción"
        console.log("Hoy no es domingo, a descansar!!");
}
function seis1b() {
    let edadAna, edadLuis;

    console.log("Práctica 6.1b");
    // Usamos parseInt para convertir a entero
    edadAna = parseInt(prompt("Introduce la edad de Ana", ""));
    edadLuis = parseInt(prompt("Introduce la edad de Luis", ""));

    if (edadAna > edadLuis) {
        console.log("Ana es mayor que Luis.");
        console.log(" Ana tiene " + edadAna + " años y Luis " + edadLuis);
    } else {
        console.log("Ana es menor o de igual edad que Luis.");
        console.log(" Ana tiene " + edadAna + " años y Luis " + edadLuis);
    }
}

function seis2() {
    let edadAna, edadLuis;

    console.log("Práctica 6.2");
    // Convertirmos a entero las cadenas
    edadAna = parseInt(prompt("Introduce la edad de Ana", ""));
    edadLuis = parseInt(prompt("Introduce la edad de Luis", ""));
    if (edadAna > edadLuis) {
        console.log("Ana es mayor que Luis.");
    } else {
        if (edadAna < edadLuis) {
            console.log("Ana es menor que Luis.");
        } else {
            console.log("Ana tiene la misma edad que Luis.");
        }
    }
    console.log(" Ana tiene " + edadAna + " años y Luis " + edadLuis);
}

function siete1a() {
    console.log("Práctica 7.1a");
    for (i = 2; i <= 30; i += 2) {
        console.log(i);
    }
    console.log("Se han escrito los números pares del 2 al 30");
}

function siete1b() {
    let aux = 1;

    console.log("Práctica 7.1b");
    for (i = 2; i <= 3000; i *= 2) {
        console.log("2 elevado a " + aux + " es igual a " + i);
        aux++;
    }
    console.log("Se han escrito las potencias de 2 menores de 3000");
}

function siete2a() {
    let i = 2;

    console.log("Práctica 7.2a");
    while (i <= 30) {
        console.log(i);
        i += 2;
    }
    console.log("Ya se han mostrado los números pares del 2 al 30");
}

function siete2b() {
    let clave = "";

    console.log("Práctica 7.2b");
    while (clave !== "malaka") {
        clave = prompt("introduce la clave ", "introduce la clave")
    }
    console.log("Has acertado la clave");
}

function siete3() {
    let clave = "malaka";

    console.log("Práctica 7.3");
    do {
        clave = prompt("introduce la clave ", "introduce la clave")
    } while (clave !== "malaka")
    console.log("Has acertado la clave");
}

function siete4a() {
    let auxclave = true;
    let numveces = 0;

    console.log("Práctica 7.4a");
    //Mientras no introduzca la clave y no se pulse Cancelar
    while (auxclave !== "SuperClave" && auxclave) {
        auxclave = prompt("Introduce la clave ", "");
        numveces++;
        if (numveces === 3)
            break;
    }
    if (auxclave == "SuperClave") {
        console.log("La clave es correcta");
    } else {
        console.log("La clave no es correcta");
    }
    /*
    let nVeces = 0;
    let clave = "";
    //Mientras no introduzca la clave y no se pulse Cancelar
    while (nVeces < 3 && clave !== "malaka") {
        nVeces++;
        clave = prompt("Introduce la clave ", "");
    }
    if (clave === "malaka") {
        console.log("Clave correcta en el intento " + nVeces);
    } else {
        console.log("Clave incorrecta. Ha consumido los " + nVeces + " intentos");
    }
    */
}

function siete4b() {
    let i;

    console.log("Práctica 7.4b");
    for (i = 2; i <= 50; i += 2) {
        if ((i % 3) === 0)
            continue;
        console.log(i);
    }
}