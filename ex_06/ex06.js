/* ============ operadores ============ */

// operadores de asignacion 

let a = 1; 

document.writeln("el valor de a =", a);
console.log("el valor de a = ", a);
document.writeln("<BR>"); // se crea etiqueta <br> desde el javascript como elemneto HTML para hacer saltos de paginacion

a++; //el operador ++ aunmenta o incrementa el valor en uno.
document.writeln("el valor de a =", a);
console.log("el valor de a = ", a);
document.writeln("<BR>");

a+=5; // el operador +- incrementa el valor de la variable dependiendo del valor que se ponga luego del igual. 
document.writeln("el valor de a =", a);
console.log("el valor de a = ", a);
document.writeln("<BR>");

a--; // el operador -- decrementa el valor en uno 
document.writeln("el valor de a =", a);
console.log("el valor de a = ", a);
document.writeln("<BR>");

a-=2; // el operador -= resta el valor de la variable dependiente del valor que se ponga luego del igual 
document.writeln("el valor de a =", a);
console.log("el valor de a = ", a);
document.writeln("<BR>");

a*=2; // el operador *= multiplica el valor de la variable dependiente del valor que se quiera multiplicar.
document.writeln("el valor de a =", a);
console.log("el valor de a = ", a);
document.writeln("<BR>");

a/=4; // el operador /= divide el valor de la variable dependiendo del valor quer se quiera dividir.
document.writeln("el valor de a =", a);
console.log("el valor de a = ", a);
document.writeln("<BR>");

a**=3; // el operador ** potencia el valor de la variable dependiendo del valor que se digite a potenciar. 
document.writeln("el valor de a =", a);
console.log("el valor de a = ", a);
document.writeln("<BR>");

// operadores de comparacion

// los operadores de comparacion sirven para comprar cantidades o valores entre variables.

/*
= es el operador de la asignacion 
> es el operador mayor que 
< es el operador menor que 
== es el operador igual que
!- es el operador diferente de 
>= es el operador mayor que 
<= es el operador menos que 
*/

let valorUno, valorDos; // se declara las variables 
valorUno=20 // se inicializa la variable con un valor de tipo entero 
valorDos=10 // se inicializa la variable con un valor de tipo entero 

// operador mayor que
document.writeln(valorUno > valorDos, "<br>");
console.log(valorUno > valorDos);  
// sistema verifica si la bariable uno es mayor que la dos y devolvera un resultado booleano es decir: falso o verdadero (true or flase)

// operador mmenor que
document.writeln(valorUno < valorDos,  "<br>");
console.log(valorUno < valorDos); 
// sistema verifica si la bariable uno es mayor que la dos y devolvera un resultado booleano es decir: falso o verdadero (true or flase)

// operador == 
document.writeln(valorUno == valorDos,  "<br>");
console.log(valorUno == valorDos); 
// el sistema verifica si la variable son iguales de lo contrario dara false

// el operador != diferente de 
document.writeln(valorUno != valorDos,  "<br>");
console.log(valorUno != valorDos); 
// el sistema verifica si la variable son diferentes en caso que si lo sean dara ture 

// operador mayor o igual que >= 
document.writeln(valorUno >= valorDos,  "<br>");
console.log(valorUno >= valorDos); 
// el sistema verifica si la variable mayor o igual que las dos y devolvera un resultado bolleano es decir: falso o verdadero ( true or false)

// operador menor o igual que <= 
document.writeln(valorUno <= valorDos,  "<br>");
console.log(valorUno <= valorDos); 
// el sistema verifica si la variable menor o igual que las dos y devolvera un resultado bolleano es decir: falso o verdadero ( true or false)