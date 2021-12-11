
//EJERCICIO 1
var dni             =document.getElementById("inputDni");
var letras          =["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
var boton           =document.getElementById("botonInicioFuncion");

boton.addEventListener("click",function(e) {
    let valueDni        = dni.value;
    let letra           = valueDni.charAt(valueDni.length-1);
    let numeroSeparado  =valueDni.split(letra);
    let numero          = parseInt(numeroSeparado.join());
    let posicionLetra   = numero%23;
    if(letra==letras[posicionLetra]){
        alert("El DNI coincide");
    }else{
        alert("El DNI no coincide");
    }
})

//EJERCICIO2
var servidores  = ["terra.es","google.com","marca.es","yahoo.es","gmail.com","outlook.com","hotmail.com"];
var inputEmail  = document.getElementById("inputMail2");
var boton2      = document.getElementById("botonInicioFuncion2");
var elemento    = document.getElementById("formulariok");
var email       = "";

boton2.addEventListener("click",function(e){
email = (inputEmail.value);
let booleano = false;
for(let i=0;i<7;i++) {
    let exprReg = new RegExp("[a-z]{1,4}[@]"+servidores[i]);
    if(exprReg.test(email)){
       alert("el mail está escrito correctamente");
       booleano = true;
    }
}
if(booleano==false){
    alert("el mail NO está escrito correctamente");
}
})

//EJERCICIO 3

var booleano = false;
var boton3 = document.getElementById("botonInicioFuncion3");
console.log(boton3);

function confirmaAnagrama(p1,p2){

    for(let i = 0;i<p1.length;i++){
        booleano = false;

        for(let j = 0;j<p2.length;j++){
            if(p1[i]==p2[j]){
                booleano = true; //solo marcamos true si encontramos coincidencia, sino encontramos no hacemos nada,ya qu 
            }
        }
    }
    if(p1.length!=p2.length){

        booleano =false;
    }
    return booleano;
}


boton3.addEventListener("click",function(){

    let pal1NoValor = document.getElementById("palabra1");
    let pal2NoValor = document.getElementById("palabra2"); 
    let p1V         = pal1NoValor.value;
    let p2V         = pal2NoValor.value; 

    if(confirmaAnagrama(p1V,p2V)==false){
       
        alert("Las palabras NO son un anagrama");
       
    }else{
      
        alert("Las palabras  son un anagrama");
      
    }
});

//EJERCICIO 3

var primero=document.getElementById("primero");
var segundo=document.getElementById("segundo");
var Alicante=["Alicante Capital", "Elche", "Orihuela"];
var Castellon=["Castellón Capital", "Oropesa", "Vinaroz"];
var Valencia=["Valencia Capital", "Torrent", "Mislata"];



primero.addEventListener("change", function (){

    let ciudadElegida = primero.valor;
    let arrayCiudad = "";
    if(ciudadElegida=="Alicante"){ 
        arrayCiudad = Alicante;
    }else if(ciudadElegida=="Castellon"){
        arrayCiudad = Castellon;
    }else{
        arrayCiudad =Valencia;
    }

    for(let i=0;i<3;i++) {
		var option = document.createElement("option");
		let segundo = document.getElementById("segundo");
		var ciudad = document.createTextNode(arrayCiudad[i]);
		option.appendChild(ciudad);
		if(valor==="Valencia") {
			if(i==2) {
				option.setAttribute("selected","selected");
			}
		}
		option.className="claseSegundo";
		segundo.appendChild(option); 
		console.log("insertar:"+elegido[i]);
	}
    
});


