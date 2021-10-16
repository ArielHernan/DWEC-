function cuatro1234() {
    console.log("Práctica 4.1");
    alert("Hola mundo");
    console.log("Práctica 4.2");
    console.log("Otro hola mundo");

    let respuesta;

    console.log("Práctica 4.3");
    respuesta = confirm("¿Desea cancelar la suscripción?");
    alert("Usted ha contestado que " + respuesta);

    let provincia;

    console.log("Práctica 4.4");
    provincia = prompt("Introduzca una provincia ", "Por ejemplo: Málaga");
    alert("Usted ha introducido la siguiente información " + provincia);
}

function cinco1() {
    let num1 = 3; // asigna el valor 3
    let num2 = 5; // asigna el valor 5

    console.log("Práctica 5.1");
    console.log("Los operandos son: " + num1 + " y " + num2);
    console.log("La suma de " + num2 + " " + num1 + " es: ");
    num2 += num1; // Igual que escribir num2 = num2 + num1;
    console.log(num2);
    console.log("La resta de " + num2 + " " + num1 + " es: ");
    num2 -= num1; // Igual que escribir num2 = num2 - num1;
    console.log(num2);
    console.log("La multiplicación de " + num2 + " " + num1 + " es: ");
    num2 *= num1; // Igual que escribir num2 = num2 * num1;
    console.log(num2);
    console.log("La división de " + num2 + " " + num1 + " es: ");
    num2 /= num1; // Igual que escribir num2 = num2 / num1;
    console.log(num2);
    console.log("El resto de dividir " + num2 + " " + num1 + " es: ");
    num2 %= num1; // Resto o módulo. NO es el porcentaje
    console.log(num2);
}

function cinco2() {
    let num1 = 5,
        num2 = 8,
        resultado1, resultado2;

    console.log("Práctica 5.2");
    console.log("Los operandos son: " + num1 + " y " + num2);
    resultado1 = ((num1 + num2) * 200) / 100; // Este es el 200%
    console.log(resultado1);
    resultado2 = resultado1 % 3;
    console.log(resultado2);
    resultado1 = ++num1;
    console.log(resultado1);
    resultado2 = num2++;
    console.log(resultado2);
    resultado1 = --num1;
    console.log(resultado1);
    resultado2 = num2--;
    console.log(resultado2);
    resultado1 = -resultado2;
    console.log(resultado1);
}

function cinco3() {
    let a = 4;
    b = 5, c = "5";

    console.log("Práctica 5.3");
    console.log("El resultado de la expresión 'a==c' es igual a " + (a == c));
    console.log("El resultado de la expresión 'a===c' es igual a " + (a === c));
    console.log("El resultado de la expresión 'a!=c' es igual a " + (a != c));
    console.log("El resultado de la expresión 'a!==c' es igual a " + (a !== c));
    console.log("El resultado de la expresión 'a==b' es igual a " + (a == b));
    console.log("El resultado de la expresión 'a!=b' es igual a " + (a != b));
    console.log("El resultado de la expresión 'a>b' es igual a " + (a > b));
    console.log("El resultado de la expresión 'a<b' es igual a " + (a < b));
    console.log("El resultado de la expresión 'a>=b' es igual a " + (a >= b));
    console.log("El resultado de la expresión 'a<=b' es igual a " + (a <= b));
}

function cinco4() {
    console.log("Práctica 5.4");
    console.log("El resultado de la expresión 'false&&false' es igual a " + (false && false));
    console.log("El resultado de la expresión 'false&&true' es igual a " + (false && true));
    console.log("El resultado de la expresión 'true&&false' es igual a " + (true && false));
    console.log("El resultado de la expresión 'true&&true' es igual a " + (true && true));
    console.log("El resultado de la expresión 'false||false' es igual a " + (false || false));
    console.log("El resultado de la expresión 'false||true' es igual a " + (false || true));
    console.log("El resultado de la expresión 'true||false' es igual a " + (true || false));
    console.log("El resultado de la expresión 'true||true' es igual a " + (true || true));
    console.log("El resultado de la expresión '!false' es igual a " + (!false));
}