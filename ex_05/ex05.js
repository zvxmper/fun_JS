// operadores matematicos

let a, b; // aqui va a dar errar en numeral
let c, d; // aqui las operaciones van a dar el resultado real
let suma, restas, mult, div, residuo, potencia; // variables para obtener los resultados de los operadores 

a = prompt("ingresa un numero: ");
b = prompt("ingresa otro numero: ");

//resultados de las operaciones
suma = a + b;
restas = a - b;
mult = a * b; 
div = a / b; 
residuo = a % b;
potencia = a ** b;


//imprimir los resultados 
document.writeln(
    "los resultados de la operacion c + d convirtiendo los valores", "<br>",
    "la suma es: ", suma, "<br>",
    "la resta es: ", restas, "<br>",
    "la multiplicacion es: ", mult, "<br>",
    "la divicion es: ", div, "<br>",
    "el residuo es: ", residuo, "<br>",
    "la potencia es: ", potencia, "<br>",
)

// segunda operacion 
// para que las operaciones numericas se pueda  dar correctamente, se debe convertir los datod ingresados con parseint o parsefloat.

c = prompt("ingresa su numero: ");
d = prompt("ingrese otro numero: ");

//los resultados de las operaciones
suma = c + d;
restas = c - d;
mult = c * d; 
div = c / d; 
residuo = c % d;
potencia = c ** d;

//resultados de las operaciones
document.writeln(
    "los resultados de la operacion a + b sin convertir valores", "<br>",
    "la suma es: ", suma, "<br>",
    "la resta es: ", restas, "<br>",
    "la multiplicacion es: ", mult, "<br>",
    "la divicion es: ", div, "<br>",
    "el residuo es: ", residuo, "<br>",
    "la potencia es: ", potencia, "<br>",
)