function Ej01(){
    let cadenaIntroducida=prompt("introduce una cadena:");
    let caracter;
    do{
        caracter=prompt("Introduce un caracter para buscar cuantas veces se repite");
    }while(!isNaN(caracter));   
    let contador= 0;
    for(let i=0; i<cadenaIntroducida.length;i++){
        if(cadenaIntroducida.charAt(i)==caracter){
            contador++;
        }
        resultado=contador;
        console.log(contador);
        if(contador==1){
        document.getElementById("derecha").innerHTML=contador+ " vez se repite";
        }else{
            document.getElementById("derecha").innerHTML=contador+ " veces se repite";
        }
    }

    // EJERCICIO
    //     Suponiendo que hemos introducido una cadena por teclado que representa una frase
    //     (palabras separadas por espacios), realiza un programa que cuente cuantas palabras tiene.
}


function Ej02(){
    let valor=document.getElementById("areaEscritura").value;
    console.log(valor);
    let numeroPalabras = valor.split(" ");
    let contador = 0 ;

    for(let i=0;i<numeroPalabras.length;i++){//este script es para eliminar los espacios en blanco y contar solo las palabras
        if(numeroPalabras[i]!="")
        contador++;
    }

    document.getElementById("derecha").innerHTML = "La frase "+valor+  " tiene:" + "<br>" +contador + " palabras";
}


//Si tenemos una cadena con un nombre y apellidos, realizar un programa que muestre
//las iniciales en mayúsculas.
function Ej03(){
    let valor=document.getElementById("areaEscritura2").value;
    console.log(valor);
     palabra2=valor.split(" ");
 
    console.log(palabra2);
    for(let i=0;i<palabra2.length;i++) {
        let aux=palabra2[i].charAt(0).toUpperCase();
        palabra2[i]=palabra2[i].slice(1);
        palabra2[i]=aux+palabra2[i]+" ";
    }
    console.log(palabra2.join(""));
    document.getElementById("derecha").innerHTML = "El nombre con las primeras en mayúsculas es: <br>"+palabra2.join("");
}
//Realizar un programa que dada una cadena de caracteres por caracteres, genere otra
//cadena resultado de invertir la primera.


function Ej04(){
    let valor=document.getElementById("areaEscritura3").value;
     let arrayValor=valor.split("");
    let arrayGirado=arrayValor.reverse();
     let imprimir= arrayGirado.join("");
    //  let imprimirGirado=imprimir.reverse();

    document.getElementById("derecha").innerHTML = imprimir;
}


function Ej05(){
    let valor=document.getElementById("areaEscritura4").value;
    let inversa="";
    console.log(valor);
 


    for(let i=0;i<valor.length;i++){
        if(valor.charAt(i)===valor.charAt(i).toUpperCase()){
          inversa=inversa+valor.charAt(i).toLowerCase();
          
        }else{
            inversa=inversa+valor.charAt(i).toUpperCase();
        }

     }
    //  if(arrayValorCopia.charAt(i)<90){
    //     arrayValorCopia.charAt[i].toUpperCase;
    // }
    // else{
    //     arrayValorCopia.charAt[i].toLowerCase;
    // }
    // let arrayGirado=arrayValor.reverse();
    // let imprimir= arrayGirado.join("");
    // //  let imprimirGirado=imprimir.reverse();
     document.getElementById("derecha").innerHTML = inversa;
}

// Introducir una cadena de caracteres e indicar si es un palíndromo. Una palabra palíndroma
// es aquella que se lee igual adelante que atrás.
// ¿Se puede resolver de forma recursiva?


function Ej06(){
    let palabra=document.getElementById("areaEscritura5").value;
    console.log(palabra);
    palabraReves=palabra.split("").reverse().join("");
    //Usamos la funcion reverse() que devuelve un array girado, primero hacemos split de la cadena palabra para transformarlo en un array
    //después le damos la vuelta, tras esto aplicamos un join() que transforma el array en string

    if(palabra==palabraReves){
        //aquí comparamos los 2 strings, si no iguales es palíndromo
        document.getElementById("derecha").innerHTML = "Es palindromo";
    }else{
        document.getElementById("derecha").innerHTML = "No es palindromo";
    }
}


function Ej07(){
    let horaInicial=document.getElementById("horaInicial").value;
    let horaFinal=document.getElementById("horaFinal").value;
    let minutosIniciales = parseInt(horaInicial.substr(3,2));
    let horasIniciales   = parseInt(horaInicial.substr(0,2));
    let minutosFinales   = parseInt(horaFinal.substr(3,2));
    let horasFinales     = parseInt(horaFinal.substr(0,2));
    let restaMinutos     = minutosFinales-minutosIniciales;
    let restaHoras       = horasFinales-horasIniciales;

    if(restaMinutos<0){
        restaHoras--;
        restaMinutos=60+restaMinutos;
    }
    let horas=restaHoras.toString();
    let minutos=restaMinutos.toString();
    if(horas.length<2){
        horas= "0"+horas;
    }
    if (horas.length < 2) {
        horas = "0"+horas;
      }
    document.getElementById("derecha").innerHTML = horas + ":"+ minutos;
}