function recursivo1() {
    function factorialRecursivo(n) {
        if (n == 0) {
            return 1;
        }
        return n * factorialRecursivo(n - 1);
    }
    n=prompt('Introduce un número: ');
    console.log(factorialRecursivo(n));
}
function fibonacci(){
    console.log("sucesión de fibonacci");
    function recursividadFibonacci(n) {
        
    }
}

function diasSemana(){
    console.log("fecha");
    let dias=/^\d{2}\-\d{2}\-\d{4}$/;
    let fecha="22-03-2001";
    console.log(dias.test(fecha));
}
function expresionesRegularesContrasena(){
    console.log("comprobar contraseña");
    let pas=/^(?=.{6})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&?]).*$ +$/;
    let pass="aA&198";
    console.log(pas.test(pass));
}