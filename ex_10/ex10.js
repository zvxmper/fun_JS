/*  condicionales

funcionalidades que permiten mejorar la toma de decisiones en la ejecucion del codigo, estas decisiones se basan en evaluar si una o mas condiciones son verdaderas o falsas, es decir, si se cumple algo en ciertas situaciones, parametros o condiciones espesificas. 

ahora bien, se puede verificar si se cumple una condicion determinada tiene un resultado especifico,  el programa se ejecutara dentro de las instrucciones dadas,
*/

//condiciones lf()  else()

let nombre, edad; 
nombre = prompt("ingresa tu nombre: ");
edad = prompt("ingresa tu edad; ");
edad = parseInt(edad);

if (edad >= 18) {
    document.writeln("tu eres mayor de edad"); 
    console.log("edad dgitada; ", edad, "mayor de edad")
}  else{
    document.writeln("tu eres menor de edad");
    console.log("edad digitada:", edad, "menor de edad")
}