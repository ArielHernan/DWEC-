
//------------------------------------------EJERCICIO 15-------------------------------------------------------------------------------------------------
class Persona {
  //constructor de la clase persona
  constructor(nombre, apellido, direccion, dni, titulos) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.dni = dni;
    this.titulos = titulos;
  }
  //getter
  get tedaNombre() {
    return this.nombre + " " + this.apellido;;
  }
  //getter
  get tedaPersona() {
    return "<h2>" + this.nombre + "</h2> " + "<h2>" + this.apellido + "</h2> " + "<h2>" + this.direccion + "</h2> " + "<h2>" + this.dni + "</h2>" + "<h2>" + this.titulos + "</h2>";
  }
  //aqui y en el otro ejercicio de telefonos, creo 2 metodos para obtener el nombre completo y la persona al completo , pero no los introduzco en el getter porque 
  //no hace falta.
  //método 
  nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }
  //método
  personaCompleto() {
    return "<h2>" + this.nombre + "</h2> " + "<h2>" + this.apellido + "</h2> " + "<h2>" + this.direccion + "</h2> " + "<h2>" + this.dni + "</h2>" + "<h2>" + this.titulos + "</h2>";

  }
}// fin de la CLASE persona
//----------------------------------------------------------FIN PERSONA-------------------------------------------------------------------------------------------------------------------
//Creación de la clase
class Telefono {
  //creación del constructor
  constructor(numero, company, marca, propietario) {
    this.numero = numero;
    this.company = company;
    this.marca = marca;
    this.propietario = propietario;
  }
  get tedaNumero() {
    return "<h2>" + this.numero + "</h2>" + "<h2" + this.marca + "</h2>" + "<h2>" + this.company + "</h2>" + "<h2>" + this.marca + "</h2>";
  }
  get tedaMarca() {
    return this.marca;
  }
  //Aquí he optado por silenciar los métodos que no uba a usar en el getter
  /*numeroCompleto() {
   return "<h2>" + this.numero + "</h2>" + "<h2" + this.marca + "</h2>" + "<h2>" + this.company + "</h2>" + "<h2>" + this.marca + "</h2>";
  }
  marcaTelefono() {
    return this.marca;
  }*/
}//fin clase telefono
//-----------------------------------------------FIN TELEFONO-------------------------------------------------------------------------------

//INSTANCIA DE PERSONAS
const Antonia = new Persona("Eva", "Selina", "calle sotomayor", "78888888N", "Bachillerato");
var ana = new Persona("Ana", "Gutierrez", "Calle sol", "44444444C", "Informática");
const pepa = new Persona("Pepa", "Bueno", "calle del agua", "123654897F", "Graduada social",);
const Jose = new Persona("Francisco", "Loorin colorado", "Calle Macías de Saltar", "123456789N", "Graduado Escolar");

//INSTANCIAS DE TELEFONOS
const telefonoBueno = new Telefono(77777777, "finetwork", "Iphone 11s");
const telefonoMedio = new Telefono(888888888, "02", "xiaomi lite");
const telefonoMalo = new Telefono(444444444, "yoigo", "nokia");
const telefonoConPropietario = new Telefono(555555555, "jaztel", "Samsung Galaxy", ana);
const telefono4 = new Telefono(605879456, "Movistar", "Iphone 13", Jose);

//FUNCIONES CON CLASES PARA PODER EJECUTARLAS DESDE EL LINK
function escribeNombre() {
  document.getElementById("resultado").innerHTML = "<h2>" + Antonia.tedaNombre + "</h2>";
}
function escribePersona() {
  document.getElementById("resultado").innerHTML = "<h2>" + ana.tedaPersona + "</h2>";
}
function escribeNumero() {
  document.getElementById("resultado").innerHTML = telefonoBueno.tedaNumero;
}
function escribeMarca() {
  document.getElementById("resultado").innerHTML = "<h1>" + telefonoBueno.tedaMarca + "</h1>";
}
function averiguaPropietario() {
  document.getElementById("resultado").innerHTML = telefonoConPropietario.tedaNumero + " " + telefonoConPropietario.propietario.nombre + " " + telefonoConPropietario.propietario.apellido + " | " + telefonoConPropietario.propietario.dni + " | " + telefonoConPropietario.propietario.titulos + " | " + telefonoConPropietario.propietario.direccion;
}

function todasLasPersonas() {
  document.getElementById("resultado").innerHTML = ana.tedaPersona + "--------------------------------------------------------" + Antonia.tedaPersona + "--------------------------------------------------------" + pepa.tedaPersona + "--------------------------------------------------------" + Jose.tedaPersona;
}
function todosLosTelefonos() {
  document.getElementById("resultado").innerHTML = telefonoBueno.tedaNumero + "--------------------------------------------------------" + telefonoMedio.tedaNumero + "--------------------------------------------------------" + telefonoMalo.tedaNumero + "--------------------------------------------------------" + telefonoConPropietario.tedaNumero + " " + telefonoConPropietario.propietario.nombre + " " + telefonoConPropietario.propietario.apellido + " | " + telefonoConPropietario.propietario.dni + " | " + telefonoConPropietario.propietario.titulos + " | " + telefonoConPropietario.propietario.direccion + "<br>" + "--------------------------------------------------------" + telefono4.tedaNumero + " " + telefono4.propietario.nombre + " " + telefono4.propietario.apellido + " | " + telefono4.propietario.dni + " | " + telefono4.propietario.titulos + " | " + telefono4.propietario.direccion;
}



//------------------EJERCICIO 16---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class TelefonoNuevo {
  //creación del constructor
  constructor(numero, company, marca, modelo) {
    this.numero = numero;
    this.company = company;
    this.marca = marca;
    this.modelo = modelo;
  }
  get tedaNumero() {
    return "<h2>" + this.numero + "</h2>" + "<h2" + this.marca + "</h2>" + "<h2>" + this.company + "</h2>" + "<h2>" + this.marca + "</h2>" + "<h2>" + this.modelo + "</h2>";
  }
  get tedaMarca() {
    return this.marca;
  }

  set TelefonoConSet(marca) {
    this._marca=marca;
  }
}
const telefonoEj16 = new TelefonoNuevo(605871234, "pepephone", "Iphone", "13");
telefonoEj16.TelefonoConSet = "hawei";

//esta función pretendìa enseñar el valor cambiado, pero no lo he conseguido
function telefonoCreadoDespuesDelSet() {
  document.getElementById("resultado").innerHTML = telefonoEj16.tedaMarca;
}

//------------------EJERCICIO 17---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// En esta actividad crearas dos clases:
// - Teléfono, contendrá: el constructor y un método ‘anuncio()’ que devolverá un aviso
// parcial indicando que el teléfono de esa marca está disponible, y
// - Modelo que hereda de Teléfono, contendrá: el constructor y método
// ‘anuncioCompleto()’, que devolverá el aviso completo indicando que el teléfono de
// esa marca y dicho modelo está disponible
// Crea al menos una instancia para cada clase y muestra los datos.

class TelefonoEj17 {
  //creación del constructor
  constructor(marca) {
    this.marca = marca;
  }
  get devuelveMarca() {
    return "<h2" + this.marca + "</h2>";
  }
  anuncio() {
    alert("tenemos disponible el telefono: " + this.marca);
  }
}
const telefono17 = new TelefonoEj17("oppo");
function mostrarAnuncio() {
  telefono17.anuncio();
}

class Modelo extends TelefonoEj17 {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }
  anuncio2() {
    alert("tenemos disponible el telefono: " + this.marca + " " + this.modelo);
  }
}

const modelo = new Modelo("oppo", "A95");
function mostrarAnuncio2() {
  modelo.anuncio2();
}

//------------------------Ejercicio 18-------------------------------------------------------------------------------------------------------------------------------

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  static area(alto, ancho) {
    return alto * ancho;
  }
  static perimetro(alto, ancho) {
    return 2 * alto + 2 * ancho;
  }
}

function resuelveArea() {
  let alto = prompt("Introduce la altura: ");
  let ancho = prompt("Introduce la anchura");
  document.getElementById("resultado").innerHTML = "El area es: " + Rectangulo.area(alto, ancho);
}
function resuelvePerimetro() {
  let alto = prompt("Introduce la altura: ");
  let ancho = prompt("Introduce la anchura");
  document.getElementById("resultado").innerHTML = Rectangulo.perimetro(alto, ancho);
}

//------------------------Ejercicio 19-------------------------------------------------------------------------------------------------------------------------------


class Vehiculo {
  constructor(color, marca, modelo, velocidad) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
  }
  comenzar() {
    return "Encender motor";
  }
  parar() {
    return "Apagar motor";
  }
  distanciaMax(tiempo) {
    return tiempo * this.velocidad;
  }
}

class Coche extends Vehiculo {
  constructor(color, marca, modelo) {
    super(color, marca, modelo);
    this.velocidad = 120;
  }
  parar() {
    return "Aparcar";
  }
}

class Avion extends Vehiculo {
  constructor(color, marca, modelo) {
    super(color, marca, modelo);
    this.velocidad = 1000;
  }
  comenzar() {
    return "Despegar";
  }
  parar() {
    return "Aterrizar";
  }
}

function mostrarCoche() {
  let color = prompt("Introduce un color: ");
  let marca = prompt("Introduce una marca: ");
  let modelo = prompt("Introduce un modelo: ");
  const coche = new Coche(color, marca, modelo);
  document.getElementById("resultado").innerHTML = "Los métodos del coche son: " + coche.parar() + " y " + coche.comenzar();
  alert(coche.parar());
  alert(coche.comenzar());
}

function mostrarAvion() {
  let color = prompt("Introduce un color: ");
  let marca = prompt("Introduce una marca: ");
  let modelo = prompt("Introduce un modelo: ");
  const avion = new Avion(color, marca, modelo);
  document.getElementById("resultado").innerHTML = "Los métodos del avión son: " + avion.parar() + " y " + avion.comenzar();
  alert(avion.parar());
  alert(avion.comenzar());
}