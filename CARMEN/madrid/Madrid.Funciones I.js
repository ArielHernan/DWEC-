/*
        crea  un archivo en Javascript que contenga únicamente fórmulas (con los 
        parámetros necesarios) para calcular los siguientes valores de cuerpos 
        geométricos:
        area triangulo= base * altura / 2.
        perimetro(suma de los tres lados)
         triangulo equilatero:3*l.
                   isósceles: 2*l+b
                   escaleno:a+b+c
        area cuadrado= l*l
        perimetro cuadrado= 4*l
        areaRectangulo= base* altura
        area circulo= pi*(r*r)
        longitud circunferencia=2*r*pi
    */

function areaTriangulo(base,altura){
    return (base * altura)/2;
}

function perimetroTriangulo(lado1,lado2,lado3){
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