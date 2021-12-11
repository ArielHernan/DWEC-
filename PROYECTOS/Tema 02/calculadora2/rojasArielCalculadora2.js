//Creamos un array de botones para ahorrarnos muchos eventos onclick, son constantes porque los botones que
//siempre son fijos.
const botonesNumeros            = document.getElementsByName("valorNumero");
const botonesOperacion          = document.getElementsByName("valorOperacion");
const botonIgual                = document.getElementsByName("igual")[0];//esto es un array de un elemento entonces tenemos que hacer que arroje el indice o por eso se pone[0]
const botonDelete               = document.getElementsByName("delete")[0];//lo mismo aqui
var pantalla                    = document.getElementById("pantalla");
var operacionActual= "";

var operacionAnterior=""; 
var operacion = undefined;
 
// a partir de aquí agrego los eventos para darle funcionalidad a los botones.

// Ahora le agrego los eventos onclick en cada botón recorriendo con un array
//LLamo a botonesNumeros, y le agrego un forEach donde dentro pongo un función a la cual llamamos,
//a esta funcion le envio como parámetro el boton que estoy obteniendo a ese boton le voy a decir
//addEventListener, le voy a agregar el evento click y cada vez que haga click en ese boton llame a una funcion
//y esa funcion llamara a otra funcion que se llamara agregarNumero()

var btnAux=document.getElementsByTagName("button");
for(let i=0;i<btnAux.length;i++) {
    btnAux[i].addEventListener("click",()=> {
         if(btnAux[i].innerText!=="=") {
                agregarNumero(btnAux[i].innerText); //METODO 1
        }
            //alert(boton.innerText);
        
    })
}



// botonesNumeros.forEach(function(boton){
//     boton.addEventListener('click', function(){
//         agregarNumero(boton.innerText); //METODO 1
//         alert(boton.innerText);
//     })
// });

// el siguiente metodo es para botonesOperacion, igual que antes.

botonesOperacion.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
        //alert(boton.innerText+"2");
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener("click", function(){
    clear();
    actualizarDisplay();
});

//Hasta aquí la captura de los eventos click de los botones, a partir de aquí desarrollaré
//la lógica de los métodos agregarNumero, selectOperacion, calcular, clear,  actualizarDisplay, 

function selectOperacion(op){
    //alert(op + "2");
    alert(operacionActual);
     if (operacionActual === ""){//si hay un numero vacio no hace nada,es decir cuando damos por ej + sin haber pulsado antes algo
         return;
     }
      if(operacionActual !== ""){
     calcular();
       }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = "";
}
function calcular(){
//creo la variable calculo, donde guardaré el resultado de las operaciones matemáticas
    var calculo;
//ahora lo que hacemos es guardar los valores de operacionAnterior y operacionActual en 2 constantes
//como antes las recogimos como cadenas de texto, ahora las "parseamos" para recoger un valor numérico
console.log(operacionAnterior+" 1.operacionaAnterior");
console.log(operacionActual+" 2.operacionActual");
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
//comprobamos si los valores pasados son números, si  lo son entramos en un switch para elegir la operacion 
//que vamos a hacer y ejecutarla.
    if(isNaN(actual) || isNaN(anterior)){
        return;
    }else{
        
        switch(operacion){
            case "+" :
                calculo = anterior + actual;
                break;
            case "-" :
                calculo = anterior - actual;
                break;
            case "x" :
                calculo = anterior * actual;
                break;
            case "/" :
                calculo = anterior / actual;
                break;
            case "sqr":
                alert("operacion sqr");
                calculo = Math.sqrt(pantalla.value);
                 pantalla.value = calculo;
                 console.log(calculo + "calculo");
                break;
            case "inv":
                calculo=1/pantalla.value;
                operacionActual=calculo ;
            default :
                return;
        }
        operacionActual = calculo;
        operacion = undefined;
        operacionAnterior = "";
        console.log(botonesOperacion);

    }
}

//METODO  agregarNumero
//La funcion agregarNumero()recibe el texto del boton, (boton.innerText) lo voy a recibir en una variable llamada numeroRecibido
function agregarNumero(numeroRecibido){ 
//toString es una funcion que se aplica a las cadenas de texto en js, para poder calcular ese valor en formato texto ,  ya que hicimos un input type= text
// lo hacemos asi para poder concatenar ya que si sumamos 2 números, no concatena sino que suma
    operacionActual = operacionActual.toString() + numeroRecibido.toString();
    actualizarDisplay();
    console.log("Operacion actual:"+operacionActual);                                            
}

function clear() {
    operacionActual = "";
    operacionAnterior= "";
    oper= undefined;
}

function actualizarDisplay() {
    pantalla.value = operacionActual;
   // console.log(operacionActual+ " 3.igualoperacionActual")
}


window.onload = clear;
actualizarDisplay();