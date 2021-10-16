let diaSem;
diaSem=prompt("Introduce el día de la semana ", "");
diaSem=diaSem.toLowerCase;

if (diaSem === "domingo")
{
    console.log("Hoy es festivo");
}
else // Al no tener {}, es un "bloque de una instrucción"
    console.log("Hoy no es domingo, a descansar!!");


let edadAna,edadLuis;
// Usamos parseInt para convertir a entero
edadAna=parseInt(prompt("Introduce la edad de Ana",""));
edadLuis=parseInt(prompt("Introduce la edad de Luis",""));

if (edadAna > edadLuis){
    console.log("Ana es mayor que Luis.");
    console.log(" Ana tiene "+edadAna+" años y Luis "+ edadLuis);
}
else{
    console.log("Ana es menor o de igual edad que Luis.");
    console.log(" Ana tiene "+edadAna+" años y Luis "+ edadLuis);
}
 
for (let i=2;i<=30;i+=2) {
    console.log(i);
}
console.log("Se han escrito los números pares del 2 al 30");
let aux=1;
for (let i=2;i<=3000;i*=2) {
    console.log("2 elevado a "+aux+" es igual a "+i);
    aux++;
}
console.log("Se han escrito las potencias de 2 menores de 3000");
console.log("")
console.log("Aqui hacemos lo mismo con un while")
let i=2;
while (i<=30) {
    console.log(i);
    i+=2;
}
console.log("Ya se han mostrado los números pares del 2 al 30");
let auxclave="";
while (auxclave!=="vivaYO"){
    auxclave=prompt("introduce la clave ","claveSecreta")
}
console.log("Has acertado la clave");

let auxclave2=true;
let numveces=0;
//Mientras no introduzca la clave y no se pulse Cancelar
while (auxclave2 !== "anonimo" && auxclave2){
    auxclave2=prompt("Introduce la clave ","");
    numveces++;
    if (numveces === 3)
        break;
}
if (auxclave2=="SuperClave"){
 console.log("La clave es correcta");
}else{
 console.log("La clave no es correcta correcta");
}

