var operandoa;
var operandob;
var operacion;

function init() {
    var resultado       =    document.getElementById("resultado");
    var reset           =    document.getElementById("reset");
    var suma            =    document.getElementById("suma");
    var resta           =    document.getElementById("resta");
    var division        =    document.getElementById("division");
    var multiplicacion  =    document.getElementById("multiplicacion");
    var igual           =    document.getElementById("igual");
    var uno             =    document.getElementById("uno");
    var dos             =    document.getElementById("dos"); 
    var tres            =    document.getElementById("tres");
    var cuatro          =    document.getElementById("cuatro");
    var cinco           =    document.getElementById("cinco");
    var seis            =    document.getElementById("seis");
    var siete           =    document.getElementById("siete");
    var ocho            =    document.getElementById("ocho");
    var nueve           =    document.getElementById("nueve");
    var cero            =    document.getElementById("cero");
    //eventos, para conseguir que al marcar una tecla salga por pantalla
    //esta funcion lo que hace es que al hacer click(onclick) sobre, en este caso,
    //el botón 1, escriba el contenido del resultado(resultado.textContent) más 1 
    //esto sirve para concatenar, es decir, si hay un 10 en la pantalla y ponemos 10
    //que se pueda ver el 10 y el 8.
    //hacemos lo mismo con todos los botones
    uno.onclick=function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick=function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick=function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick=function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick=function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick=function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick=function(e){
        borrar();
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick=function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick=function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick=function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick=function(e){
        resetear();
    }
    //la funcion suma lo que hace es que si escribimos por ejemplo un uno en la pantalla,
    //lo guarda en la variable operandoa 
    //lo siguiente es decir que la opercación es uns sums
    //lo siguiente es crear una funcion que se llame borrar para borrar el contenido del panel de resultados
    //así cuando pulse 1 + 3 se va a borrar el 1 y poner el 3.
    //hacemos lo mismo con el resto de operaciones.
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        borrar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        borrar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        borrar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        borrar();
    }
    //ahora creamos el botón igual, lo que hace es guardar en una variable llamada operandob
    //que sera igual a lo que tenga el panel de resultados
    //al llamar la funcion resolver vamos a contar tatno con operandoa como con operandob
    igual.onclick = function(e){
        operandob = resultado.textContent;
        operacion = "=";
        resolver();
    }

    function borrar(){
        resultado.textContent = "";
    }
    function resetear(){
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }
    function resolver(){
        var res=0;
        switch(operacion){
            case "+":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;
            case "-":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;
            case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;
            case "*":
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;
            default:;
        }
        
        resetear();
        resultado.textContent = res;
     
    }
}