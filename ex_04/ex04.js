// pedir datos a un usuario (como ejercicio pues cuando pidan datos se actualizan inputs).

let nombre, edad, direccion, movil, email; // se puede crear tantas variables como se necesita con una declaracion let.

//prompt es una palabra reservada que despliege una funciony sale un mensaje de tipo alert pedir datos.

nombre = prompt("escribe su nombre: "); // se piden los datos del usuario
document.writeln("su nombre es: ", nombre, "<br>");// se imprimen los datos proporcionados por el usuario 

edad = prompt("digite su edad: ");// se piden los datos del usuario
document.writeln("tu edad es: ", edad, "<br>");//se imprimen los datos proporcionados por el usuario

direccion = prompt("escriba su direccion: ");// se piden los datos del usuario
document.writeln("vives en: ", direccion, "<br>");// se imprimen los datos proporcionados por el usuario

movil = prompt(" escriba tu movil: ");// se piden los datos del usuario
document.writeln(" tu numero mobil: ", movil, "<br>");// se imprimen los datos proporcionados por el usuario

email = prompt(" escribe tu email: ");// se piden los datos del usuario
document.writeln("tu emasil es: ", email, "<br>");// se imprimen los datos proporcionados por el usuario

//con la etiqueta se puede realizar saltos de pagina

console.log("su nombre es: ", nombre, "<br>");
console.log("tu edad es: ", edad, "<br>");
console.log("vives en: ", direccion, "<br>");
console.log(" tu numero mobil: ", movil, "<br>");
console.log("tu emasil es: ", email, "<br>");

