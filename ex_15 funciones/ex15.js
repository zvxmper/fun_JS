// // funcion 

// function saludo(){
//     document.writeln('hola mundo', '<br>');
//     console.log('hola mundo');
// }
// saludo();

// function despedida(){
//     document.writeln('adios mundo', '<br>');
//     console.log('adios mundo');
// }
// despedida();
// function SaludarUsuario(nombrepaciente, apellidopaciente){
//     document.writeln('hola ', nombrepaciente, ' ', apellidopaciente, ' bienvenido(a)',);
// }
// let nombrepaciente = prompt('dime tu nombre')
// let apellidopaciente = prompt('dime tu apellido')

// SaludarUsuario(nombrepaciente, apellidopaciente);


// // funcion con calculos simples 

// function calcularAreaRectangulo(base, altura){
//     let area = base * altura
//     return area;
// }
// console.log('el area del rectangulo es: ', area = calcularAreaRectangulo(5, 10))

// function esMayor_o_esMenor(edad){
//     if(edad >= 18) {
//         console.log('es mayor de edad')
//     } else {
//         console.log('es menor de edad')
//     }
// }
// esMayor_o_esMenor(20);
// esMayor_o_esMenor(12);

// function suma (){
//     let a = parseInt(prompt('ingresa el ler numero a sumar'));
//     let b = parseInt(prompt('ingresa el ler numero a sumar'));
//     return a + b; //devuelve la suma con los numeros ingresados por el usuario.
// }
// document.writeln('el resultado de la suma es: ', suma (), '<br>');

//funcion ver color 
function verColor(){
    valor = parseInt(prompt('por favor ingrese numeros entre 1 y 3 para activar el semaforo'));

    switch(valor){ 
        case 1:
            return 'perfecto has elejido el color: rojo';
        case 2:
            return 'perfecto has elejido el color: verde';
        case 3:
            return 'perfecto has elejido el color: amarillo';
        default:
            return 'no se ha ingresado un valor o numero correcto en la instruccion dada'
    }
}
document.writeln(verColor());