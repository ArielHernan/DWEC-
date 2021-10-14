const devolver1 = () => {
    console.log("Hola");
    }
    const devolver2 = _ => {
    console.log("Âdios");
    }
    devolver1(); // Hola
    devolver2(); // Adios
    
    const multiplicar1 = param => {
    const resultado = param * 2;
    console.log(resultado)
    }
    const multiplicar2 = (param) => {
    const resultado = param * 2;
    console.log(resultado)
    }
    multiplicar1(4); // 8
    multiplicar2(4); // 8
    
    const multiplicar = (x, y) => {
    const resultado = x * y;
    console.log(resultado);
    }
    multiplicar(2, 3); // 6

    function arrow5(){
        let nombres = ['Pedro’, ‘Juan’, ‘Elena'];
console.log(nombres.map(nom => nom.length));
// Muestra el array con los valores [5, 4, 5]
let sumaNombres= nombres.reduce((acumulador, elemento) => {
return acumulador + elemento.length;
}, 0);
// Muestra la suma de la longitud de los nombre
console.log(sumaNombres);

    }

function arrow5(){
console.log("arrrow con filter");
const persons = [
    { name: "John", age: 35 ,altura:183},
    { name: "Anne", age: 24,altura:185 },
    { name: "Tom", age: 41,altura:156 },
    { name: "Andrew", age: 55,altura:175 },
    { name: "Mary", age: 18,altura:190 },
    ]
    const overThirty = persons.filter(person => person.age > 30 && person.altura<175);
    console.log(overThirty);
    /* Array [
    {name: "John", age: 35},
    {name: "Tom", age: 41},
    {name: "Andrew", age: 55}
    ]*/
}


