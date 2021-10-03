
/*fucnciones captura de datos-------------------------------------------------*/
function lado1(){
 var lado1=prompt("introduce la medida del lado uno");
 return lado1;
}
function lado2(){
var lado2=prompt("introduce la medida del lado dos");
return lado2;
   } 
function lado3(){
var lado3=prompt("introduce la medida del lado tres");
return lado3;
   }
function radio(){
     var radio=prompt("introduce la medida del radio");
     return radio;
}
function base(){
    return prompt("introduce la medida de la base");
}
function altura(){  
     return prompt("introduce la medida de la altura");
}

/**funciones resultado--------------------------------------------------------------------- */
function resultadoAreaTriangulo(){
    alert(areaTriangulo(base(),altura()));
}
function resultadoPerimetroTriangulo(){
    alert("el resultado es: "+perimetroTriangulo(lado1(),lado2(),lado3()));
}
function resultadoPerimetroCuadrado(){
    alert(perimetroCuadrado(lado1()));
}
function resultadoAreaRectangulo(){
    alert(areaRectangulo(base(),altura()));
}
function resultadoAreaCirculo(){
    alert(areaCirculo(radio()));
}
function resultadoLongitudCircunferencia(){
    alert(longitudCircunferencia(radio()));
}