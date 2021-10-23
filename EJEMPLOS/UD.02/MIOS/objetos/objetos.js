/*var myObj = new Object(),
  str = 'myString';
rand = Math.random();
obj = new Object();

myObj.name = 'mi objeto se llama objeto';
myObj.type = 'Sintaxis de puntos';
myObj['fecha de creación'] = 'Cadena con espacios';
myObj[str] = 'Valor de cadena';
myObj[rand] = 'Número aleatorio';
myObj[obj]                // = 'objeto';
myObj[' '] = 'Incluso una cadena vacía';

console.log(myObj);
console.log(myObj.myString);


var myCar = new Object();
myCar.name = 'mi coche';
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar);
console.log(myCar.make + " " + myCar.name + " " + myCar.model);
function showProps(obj, objName) {
  var result = ` `;
  for (var i in obj) {
    // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n` + "    ";
    }
  }
  return result;
}

function listAllProperties(o) {
  var myCar;
  var result = [];

  for (myCar = o; myCar !== null;
    myCar = Object.getPrototypeOf(myCar)) {
    result = result.concat(
      Object.getOwnPropertyNames(myCar)
    );
  }

  return result;
}
console.log(showProps(myCar, "myCar"));

var otroCar = {
  make: "seat",
  model: "Ibiza",
  year: 1985
}
console.log(otroCar);
console.log(otroCar.make + "  me gusta el " + otroCar.model);
console.log(otroCar.model);

document.getElementById("prueba").innerHTML = otroCar.make + " me gusta el color de " + otroCar.model + "<br>y tambien me gusta el año " + otroCar.year;


var tercerCar = new Object();
tercerCar['make'] = 'rolls royce';
tercerCar['model'] = 'byron';
tercerCar['year'] = 1900;
console.log(tercerCar);
//document.getElementById("prueba").innerHTML=tercerCar['make'] + " es el que me gusta";
//document.getElementById("prueba").innerHTML=myObj.myString + " es el que me gusta";


var cuartoCar = new Object();
var propertyName = 'make';
cuartoCar[propertyName] = 'perritoFaldero';

propertyName = 'model';
myCar[propertyName] = 'Mustang';
document.getElementById("prueba").innerHTML = listAllProperties(myCar);





function Coche(marca, modelo, precio,propietario) {

  this.marca = marca;
  this.modelo = modelo;
  this.precio = precio;
  this.propietario= propietario;
}
var miCoche = new Coche("masseratti", "diabolo", 123400);
var juanCar=new Coche("toyota","verso","18000");
var pepeCar=new Coche("Audi","Q7","35000")
document.getElementById("prueba").innerHTML = miCoche.marca + " " + miCoche.modelo + " " + miCoche.precio;

function Persona(nombre, edad, genero, religion) {
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero;
  this.religion = religion;
}
var ana=new Persona("Ana gutierres","34","trans","musulmana");
var sofi=new Persona("Sofia rojas","17","hetero","atea");
//document.getElementById("prueba").innerHTML = ana.nombre+" "+ana.edad+" "+ana.genero;
var cocheConPropietario=new Coche("jeep","renegade","50000",sofi);
document.getElementById("prueba").innerHTML =cocheConPropietario.propietario.religion;
class Punto {
  // Constructor de la clase
  constructor ( pX , pY ){
  this.pX = pX;
  this.pY = pY;
  }
  // Método estático para calcular distancia entre dos puntos
  
  //creacion de clase
  class Rectangulo {
    //creación del constructor
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  }*/

  //Creación de la clase
  class Telefono{
    //creación del constructor
    constructor(numero,company,tipo) {
      this.numero = numero;
      this.company= company;
      this.tipo = tipo;
    }
  }
class Persona{
  constructor(nombre,apellido,direccion,dni,titulos){
    this.nombre = nombre;
    this.apellido =apellido;
    this.direccion= direccion;
    this.dni= dni;
    this.titulos = titulos;
  }
  //getter
  get tedaNombre(){
    return this.nombreCompleto();
  }
  //metodo 
  nombreCompleto (){
    return this.nombre+" "+this.apellido;
  } 
}// fin de la classe

const Antonia= new Persona("Eva","Selina","calle sotomayor","78888888","Bachillerato");

document.getElementById("prueba").innerHTML = Antonia.tedaNombre;

/*

//creacion de clase
class Rectangulo {
  //creación del constructor
  constructor (alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
     return this.calcArea();
   }
  // Método
  calcArea () {
    return this.alto * this.ancho;
  }
}

const cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area); // 100*/





var intervalo = {
  valorMinimo: 3,
  valorMaximo: 7,
  //   get valoresContenidos() {
  //   var contenidos = [];
  //   for(var i=this.valorMinimo; i<=this.valorMaximo; i++) {
  //     contenidos.push(i);
  //   }
  //   return contenidos;
  //  },
  set valoresContenidos(arrayValores) {
    //arrayValores.sort();
    this.valorMinimo = arrayValores[0];
    this.valorMaximo = arrayValores[arrayValores.length - 1];
  }
}

document.getElementById("prueba").innerHTML = intervalo.valoresContenidos=["9","8","7","6","5"];