var botones=document.getElementsByTagName("button");
var pantalla= document.getElementById("pantalla");
console.log(pantalla);
var valores=[];
var basicos=["+","-","x","/","%","res",];
var complejos = ["sqr","!","inv","pi","random","e","=","C","+/-","."];
var primera="";
var segunda="";
var posicion;
var resultadoTotal;
var esComplejo=false;
var primeraEntrada=true;
console.log(botones);

for(let i=0;i<botones.length;i++) {
    botones[i].addEventListener("click",()=> {
        for(let j=0;j<complejos.length;j++) {
            if(complejos[j]===botones[i].innerText) {
                var valorAux=botones[i].innerText;
                esComplejo=true;
            }
        }
        if(esComplejo==false)  {
            grabarValor(botones[i].innerText);//LINEA 65
        } else {
            switch(valorAux) {
                case "=":
                    resultado();
                break;
                case "sqr":
                    raiz(); 
                break;
                case "inv":
                    inv();
                    break;
                case "C": 
                    borrarTotal();//LINEA 60
                break;
                case "pi":
                    pi(); 
                break;
                case "e":
                    e();
                break;
                case "random":
                    ran();
                break;
                case "+/-":
                    signo();//LINEA 116
                break;
                case "!":
                    factorial();
                break;
                case ".":
                    punto();
            }
        }
    });
}

function borrarTotal() {//VIENE LINEA 36
    pantalla.innerText="";
    valores=[];
    esComplejo=false;
    resultadoTotal=0;
    primera=0;
    segunda=0;
}
function grabarValor(text) {//VIENE DELINEA 23
    console.log("valor"+text);
    valores.push(text);
    pantalla.innerText+=text;
}
function calificar() {
    //primera
    for(let i=0;i<posicion;i++) {
        primera+=valores[i];
    }
    //segunda
    for(let i=posicion+1;i<valores.length;i++) {
        segunda+=valores[i];
    }
    //alert("primera: "+primera);
   // alert("segunda: "+segunda);
}
function operando() {
    for(let i=0;i<valores.length;i++) {
        let pieza=valores[i];
        for(let j=0;j<basicos.length;j++) {
            if(basicos[j]==pieza) {
                posicion=i;
            }
        }
    }
    console.log("array: "+valores);
}

function raiz() {
    for(let i=0;i<valores.length;i++) {
        primera+=valores[i];
    }
        resultadoTotal=Math.sqrt(primera);
        pantalla.innerText=resultadoTotal;
        esComplejo=false;
}
function pi(){
    valores.push(3.1416);
    pantalla.innerText=3.1416;
    esComplejo=false;
}
function e(){
    valores.push(2.71828);
    pantalla.innerText=2.71828;
    esComplejo=false;

}
function ran(){
    let random=parseInt(Math.random()*9);
    valores.push(random);
    pantalla.innerText=random;
    esComplejo=false;
}
function signo(){
    pantalla.innerText="-"+pantalla.innerText;
    valores.unshift("-");
    esComplejo=false;
}
function factorial(){
    function factorial (n) {
        var total = 1; 
        for (i=1; i<=n; i++) {
            total = total * i; 
        }
        return total; 
    }
}
function punto(){
    pantalla.innerText=pantalla.innerText+".";
    valores.push(".");
    esComplejo=false;
}
function operar() {
    switch(valores[posicion]){
        case "+" :
            resultadoTotal=eval(primera+"+"+segunda);
            break;
        case "-" :
            resultadoTotal=eval(primera+"-"+segunda);
            break;
        case "x" :
            resultadoTotal=eval(primera+"*"+segunda);
            break;
        case "/" :
            resultadoTotal=eval(primera+"/"+segunda);
            break;
        case "%":
            let aux=eval(primera*segunda);
            resultadoTotal=eval(aux/100);
        break;
        case "res":
            resultadoTotal=eval(primera+"%"+segunda);
        break;
        default:
    }
   return resultadoTotal;
}
function inv() {
    for(let i=0;i<valores.length;i++) {
        primera+=valores[i];
    }
        resultadoTotal=1/primera;
        pantalla.innerText=resultadoTotal;
    
}
function resultado() {
    pantalla.innerText="";
   
    
   
    esComplejo=false;
    resultadoTotal="";
    operando();//aqui tomo la posicion del operador
    calificar();//aqui separo los operandos 
    resultadoTotal=operar();
    //alert(resultadoTotal);
    console.log("total"+resultadoTotal);
   pantalla.innerText=resultadoTotal;
    //alert("resultado: "+resultado);
    valores=[];
    primera=0;
    segunda=0;
}