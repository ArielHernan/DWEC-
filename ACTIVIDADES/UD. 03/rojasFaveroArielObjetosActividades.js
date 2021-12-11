var identificadorTiempoDeEspera;
var  letrascorrectas="";
function temporizadorDeRetraso() {
   identificadorTiempoDeEspera = setInterval(funcionConRetraso, 1000);
}
function funcionConRetraso() {
 let dni= prompt("introduce Un numero");
 let letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E",];
  if(dni==-1){
    clearInterval(identificadorTiempoDeEspera);
    document.getElementById("derecha").innerHTML=letrascorrectas;
  }else{
      let resultado=dni%23;
      letrascorrectas+=dni+letras[resultado]+" "; 
  }
}

// --------------------ejercicio2----------------------------------------------------------

var intervalo;
var intervalo2;
function f(){
  intervalo=setTimeout(fechaActual,5000);
  intervalo2=setInterval(hora,2000);
}

function fechaActual(){
  let fecha = new Date();
  alert(fecha.toUTCString());
  clearInterval(intervalo);
}
function hora(){
  let hora= new Date();
  alert(hora.toLocaleTimeString());
}

//------------------------EJERCICIO 3----------------------------------------------------------------
function numerosDNI(){
  let letrasDNI=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E",];
  let letraDNI=prompt("introduce una letra, por favor, calcularé cuantos dni hay con esa letra");
  let resto=0;
  var contador=0;
  let cadena="";
  for(let j=0;j<23;j++){
    if(letraDNI==letrasDNI[j]){
       resto=j;
    }
  }
  for(let i=1;i<=999;i++){
    if(i%23==resto){
      contador++;
      cadena= cadena+i+"<br>";
      document.getElementById("derecha").innerHTML=cadena;
    }
  }
 alert("El número de dnis son: "+contador);
}

//-----------------------------------------------EJERCICIO 4-----------------------------------------------------------------

function palindromos(){
  let cadena= "";
  let cadena2="";
  let rangoInferior=document.getElementById("areaEscritura10").value;
  let rangoSuperior=document.getElementById("areaEscritura11").value;
  console.log(rangoInferior);
  console.log(rangoSuperior);
  for (let i=rangoInferior;i<rangoSuperior;i++){
    let numeroGirado = i.toString().split('').reverse().join('');
    if(numeroGirado==i){
      cadena= cadena+i+" ";
      document.getElementById("derecha").innerHTML="los números capicúas son:<br>" + cadena; 
    }
  }
}

function isPrime(num) {
  if(num < 2) return false;
  for (var i = 2; i < num; i++) {
      if(num%i==0)
          return false;
  }
  return true;
}
function primo(){
  let rangoInferior=document.getElementById("areaEscritura10").value;
  let rangoSuperior=document.getElementById("areaEscritura11").value;
  let cadena= ""; 
 
  for (let i=rangoInferior;i<rangoSuperior;i++){
    if(isPrime(i)){
      cadena=cadena+i+" ";
      document.getElementById("derecha").innerHTML=cadena; 
    }
  }
}

//---------------------------------EJERCICIO4----------------------------------------------------------------------------->

function string(){
  let cadena=" Ariel:Rojas:669032071:ariel@gmail.com:29660";
  let todoscampos=cadena.split(":");
  let nombre=todoscampos[0];
  let apellido=todoscampos[1];
  let tfno= todoscampos[2];
  let email=todoscampos[3];
  let cp=todoscampos[4];
  alert(cadena);

  document.getElementById("derecha").innerHTML="el nombre ordenado es: <br>" + "<ul> " + "<li>" + cp +"</li>" + "<li>"+ apellido + "</li>" + "<li>"+ email + "</li>" + "<li>"+email.charAt(6)+email.charAt(7)+email.charAt(8)+email.charAt(9)+email.charAt(10)+"</ul>" ; 
 

 

}