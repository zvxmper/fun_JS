// // mostrar los numeros de 1 al 5
// // se usas cuando sabemos cuantas veces queremos repetor algo.
// for (let numero = 1; numero <= 5; numero++) {
//     console.log("numero actual: ", numero);
// }


// // mostra los datos de una persona 
// // se usa para recorrer las propiedades de un objeto 
// let persona = {
//     nombre: "carlos",
//     edad: 25,
//     ciudad: "bogota",
// };

// for (let propiedad in persona) {
//     console. log(propiedad + ": " + persona[propiedad]);
// }

// // contar hasta 3 con while
// //se uas cuando no sabemos cuantas veces, pero tenemos una condicion que se evalua antes de entrar
// let contador = 1;

// while (contador <= 2) {
//     console.log("contador:", contador); 
//     contador++;
// }

// //igual que while, pero siempre ejecuta al menos una vez.
// // mostrar el menu hasta que el ususario elija "salir"
// let opcion = "";

// do {
//     opcion = prompt("escribe una opcion (escribe 'salir' para terminar): ");
//     console.log("elegiste:", opcion);
// } while (opcion !== "salir");

// //este se usa para recorrer valores de arreglos (no objetos).
// // recorres ina lista de frutas
// let ListaDeFrutas = ["manzanas", "banana", "uva"];

// for (let frutas of ListaDeFrutas) {
//     console.log("frutas:", frutas)
// }

// //ciclo de numeros pares
// document.writeln('ciclo de numeros pares');

// for (let x = 2; x <= 20; x+=2) {
//     document.writeln(`valor de x = ${x}`,
//     `<br>`);
// }

// let usuario, clave, control;

// control = 0;
// usuario = prompt('ingresa el ususario...');
// clave = prompt('ingrese su contraseña: ');

// do { 
//     if(clave != 'MiContraseña'){
//         clave = prompt('contraseña incorrecta, intentalo de nuevo...');
//         control = 0; // continuara valiendo cero mientras l clave digitada sea diferente a la establecida en el sitema 
//     } else {
//         control = 1; //control valdra 1 cuendo la contraseña ingresa sea la correcta
//     }
// } while (control != 1);
// // la contraseña ingresada es verificada por control, si vale 1 le dara acceso al sistema sino continuara pendiendola que se cumpla la condicion o usted programe los intentos:
// document.writeln('acceso concedido!, Bienvenido');

// // saber cuantas palabras tiene la palabra murcielago 

let palabra= "murcielago"; 
let vocal = 0; // en est variable se van a guardar la cantidad de vocales que se encuentra en la palabras.

for(let p in palabra){
    if(palabra[p]=='a' ||palabra[p]=='e' ||palabra[p]=='i' ||palabra[p]=='o' ||palabra[p]=='u') // el ciclo analiza en cada vuelta si la letra es igual a una de las vocales definidas en la busqueda.
    [
        vocal++,
    ]
}
document.writeln('cantidad de vocales: ', vocal);