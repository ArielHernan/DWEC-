function areaTriangulo(base,altura){
    return (base * altura)/2;

}

function perimetrotriangulo(lado1,lado2,lado3){
    return lado1+lado2+lado3;
}

function perimetroCuadrado(lado1){
    return lado1*4;
}
function areaRectangulo(base,altura){
    return base*altura;
}
function areaCirculo(radio){
    return 3.1416*(radio*radio);  
}
function longitudCircunferencia(radio){
    2*radio*3.1416;
}
function resultadoAreaTriangulo(){
    alert(areaTriangulo());
}


function lado1(){
  lado1=prompt("introduce la medida del lado uno");
}
function lado2(){
     lado2=prompt("introduce la medida del lado dos");
   } 
function lado3(){
     lado3=prompt("introduce la medida del lado tres");
   }
function radio(){
     radio= prompt("introduce la medida del radio");
}
function base(){
     base= prompt("introduce la medida de la base");
}
function altura(){
     radio= prompt("introduce la medida de la altura");
}
function resultadoAreaTriangulo(){
    base();
    altura();
    var resultadoAretri= areaTriangulo(base,altura)
    alert(resultadoAretri);

}
