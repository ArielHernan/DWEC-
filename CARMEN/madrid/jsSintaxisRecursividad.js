function recursivo1(){
    console.log("cuenta a tras");
    function cuentaAtras(numero){  
        if (numero==0)
        return 0;
        else
           // console.log(numero+ " ,");
           cuentaAtras(numero-1);
            console.log(numero+",");
            
    }
    cuentaAtras(prompt("introduce un numero"));
}
function dividir(){
    console.log("division");
}
function restoDivision(){
    console.log("division");
}
function factorial(){
    console.log("division");
}