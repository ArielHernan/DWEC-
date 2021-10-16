function ejemplo51(){
    let num1=3; 
    let num2=5; 
    console.log(num2+=num1); 
    console.log(num2-=num1); 
    console.log(num2*=num1); 
    console.log(num2/=num1); 
    console.log(num2%=num1);
}
function ejemplo52(){
    let num1=5, num2=8, resultado1, resultado2;
    console.log("los operadores son: "+ num1+"y"+num2);
    resultado1=((num1+num2)*200)/100;
    console.log(resultado1);
    resultado2=resultado1%3;
    console.log(resultado1=++num1);
    console.log(resultado2=num2++);
    console.log(resultado1=--num1);
    console.log(resultado2=num2--);
    console.log(resultado1=-resultado2);
}
alert("hola mundo");
console.log("otro hola mundo");
let respuestra;
respuesta= confirm("¿desdea cancelar la suscripción?");
alert("usted ha cxontestado que"+respuesta)
let provincioa;
provincia=prompt("introduzca provincia","Malaga");
alert("ustred ha introducido la siguiente informacion"+provincia);
console.log("OPeracion ralizada con exito");

function mensajes() {
    console.log("Práctica 2.2");
    console.log("Esto es un texto en la consola");
    alert("Esto es un texto en la ventana");
}

function variables() {
    ejemplo = 3;

    console.log("Práctica 3.2");
    if(ejemplo === 3) {
        var variable1 = 1;
        let variable2 = 2;
    }
    console.log(variable1);
    console.log(variable2);
}
function ejemplo() {
    let edad=23, nueva_edad, incremento=4;
    const nombre = "Rosa García";

    console.log("Práctica 3.3");
    console.log(typeof incremento === "number")
    nueva_edad = edad+incremento;
    console.log(nombre +  " tras " + incremento + " años tendrá " + nueva_edad);
}
function coercion() {
    let numero = 5;

    console.log(numero);
    console.log(numero.toString());
}
function coercion2() {
    let a = "2", b = 5;
    console.log(typeof a + "" + typeof b);
    console.log(a + b);
}
function coercion3() {
    let x = "10";
    let y = 9;
    let z = "9";
    console.log("Práctica 3.4.4, 4.4.5");
    console.log(x < y);
    console.log(x < z);
}
function coercion4() {
    let altura;
    console.log(altura ? true: false);

    if (altura) {
        console.log("true");
    } else {
        console.log("false");
    }
}
function tresCinco() {
    let activities = [
        ['Work', 9],
        ['Eat', 1],
        ['Commute', 2],
        ['Play Game', 1],
        ['Sleep', 7]
    ]
}
function coercion341(){
    let numero = 5; 
    console.log(numero); // Es un Entero
    console.log(numero.toString()); // Ahora es un String
}
function coercion343() {
    let a = "2", b = 5;
    console.log( typeof a + " " + typeof b);
     // string number console.log( a + b ); 
    // nos muestra 15
}
function coercion344() {
    let x = "10";
    let y = 9;  
    let z = "9";
    console.log("Práctica 3.4.4, 3.4.5");  
    console.log(x < y); 
    // muestra: false, se produce una conversión  console.log(x < z);
    // muestra: true, ya que los dos son String
}
function coercion346() {
   
        let altura; // variable no definida  
        console.log(altura ?  true : false); 
        //Al no estar definido, false
        // Eqivalente a usar “if”  
         /*if (altura) {   
             //Al no estar definido, muestra: false. Uso del operador "if“       
             console.log("true");  
            } else {        
                console.log("false");
            }     
                */
                 
}
function Arrays35() {
        let arr = ["1", "10", "100", "1000"];
        for (let i = 0; i < arr.length && arr[i] < 500; i++) {
            console.log(i);
        } // Mostrará 0,1,2
}
function ArraysMultidimensional35() {
         let activities = [ // esto es una array bidimensional
            ['Work', 9],
            ['Eat', 1],
            ['Commute', 2],
            ['Play Game', 1],
            ['Sleep', 7]
        ];

         // Lo recorremos con dos bucles "for" anidados
        for (let i = 0; i < activities.length; i++) {
            // Recorremos el 
            var innerArrayLength = activities[i].length;
            // loop the inner array
            for (let j = 0; j < innerArrayLength; j++) {
                console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
            }
        }
}

"use strict";
pi=3.14;       
// Da error  funcionPrueba();

function useStrict39() { 
    /*
    "use strict";
    console.log("Practica 3.9");
    pi= 3.14;//Da errror
    funcionPrueba();
    function funcionPrueba(){
        piBIS=3.14//da error
    }
    */
     pi=3.14;//no da errror
    
     function funcionPrueba(){
         console.log(pi.toString());
         "use strict";
         let piNew=3.141592;//No da errror
         console.log(piNew);
     }
     funcionPrueba();
}


