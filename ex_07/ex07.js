/* las funciones matematicas en javascript utilizando la clase math
estas funciones permiten realizr operaciones dentro del codigo */

var precio = Math.round(399.53); // se le declara la variable con valor decimal la funcion round la vuelve entero 
document.writeln("precio redondeado: ", precio, "<br>");
console.log("precio redondeado: ", precio);

var precio = Math.round(399.42); // se le declara la variable con valor decimal la funcion round la vuelve entero 
document.writeln("precio redondeado: ", precio, "<br>");
console.log("precio redondeado: ", precio);

var precio = Math.ceil(299.83); // se le declara la variable con valor decimal la funcion cell la vuelve entero al mas cercano sin importar el decimal 
document.writeln("precio redondeado: ", precio, "<br>");
console.log("precio redondeado: ", precio);

var precio = Math.ceil(299.28); // se le declara la variable con valor decimal la funcion cell la vuelve entero al mas cercano sin importar el decimal 
document.writeln("precio redondeado: ", precio, "<br>");
console.log("precio redondeado: ", precio);

var precio = Math.floor(540.93); // se le declara la variable con valor decimal la funcion floor la vuelve entero  
document.writeln("precio redondeado: ", precio, "<br>");
console.log("precio redondeado: ", precio);

var coseno = Math.cos(50); // se calcula el coseno del angulo de 50 
document.writeln("el valor de seno de un angulo de 50 es: ", coseno, "<br>");
console.log("coseno de 50: ", coseno);

var tangente = Math.tan("68"); // se calcula la tangente del angulo de 68
document.writeln("el valor de un angulo de 68 es: ", tangente, "<br>");
console.log("tangente de 68: ", tangente); 

var exponencial = Math.exp(2); // se calcula el exponencial de 2
document.writeln("esponencial de 2: ", exponencial, "<br>");
console.log("exponencial de 2: ", exponencial);

var exponente = Math.pow(4.2); // esto se traduce como 4 elevado a la 2 (4 por 4 = 16)
document.writeln("exponente de 4 elevado a la 2; ", exponente, "<br>");
console.log("exponente de 4 elevado a la 2: ", exponente);

var logaritmo = Math.log(10); // haila el valor de un numero dado
document.writeln("el logartimo de 10 es: ", logaritmo, "<br>");
console.log("el logaritmo de 10 es: ", logaritmo);

var adsoluto = Math.abs(-10); // calcula el valor adsoluto de un numero dado
document.writeln("el valor adsoluto de -10 es: ", adsoluto, "<br>");
console.log("el valos adsoluto de -10 es: ", adsoluto); 

var raiz = Math.sqrt(81); // calcular la raiz cuadrada de un numero
document.writeln("la raiz cuadrada de 81 es: ", raiz, "<br>"); 
console.log("raiz de 81 es: ", raiz); 

var aleatorio = Math.random(); //random siempre va desde 0.0 hasta 0.999999....
document.writeln("el valor aleatorio o random es: ", aleatorio, "<br>"); 
console.log("el valor aleatorio es: ", aleatorio); 

// formula para realizar numero random pero con rango y convertir a entero. 
var numRam = Math.floor(Math.random()*(15- 5 + 1)+5);
document.writeln("el valor de aleatorio entre 5 y 15 es: ", numRam, "<br>");
console.log("el valor aleatorio entre 5 y 15 es: ", numRam); 

/* Para este caso a traves de este esquema de fórmula sucede lo siguiente:
Math.floor(Math.random() * (Max - Min + 1) + Min);

1. Math.random()genera un número decimal entre 0y 1(incluye 0, pero nunca 1). Puede generar valores como 0.0, 0.5, 0.9999999, pero nunca exactamente 1.

2. Se multiplica el random generado por (Max - Min + 1), lo que da el tamaño del rango de números posibles. En este caso: 15 - 5 + 1 = 11, lo que significa que Math.random()se escalará a un valor entre 0 y 10.9999999.

3. Se suma Min para desplazar el rango. Antes de sumar Min, los valores estan entre 0y 10.9999999. Posteriormente, al sumar 5, ahora los valores estarán entre 5y 15.9999999. 

4. Math.floor()redondea hacia abajo para asegurar de obtener solo números enteros. Sin Math.floor(), se obtendrían decimales. Con Math.floor(), cualquier valor entre 5.000000 y 5.999999 se convierte en 5, entre 6.000000 y 6.999999 se convierte en 6, y así sucesivamente hasta 15. 

5. El + 1 en (Max - Min + 1) se utiliza para incluir el límite superior (Max). Sin el + 1, Math.random() solo podría generar números hasta Max - 1. El + 1 permite que Math.random() * (Max - Min + 1) llegue hasta Max, garantizando que Max sea una posibilidad al hacer Math.floor().

Ejemplo:

Si Math.random() genera 0.999999, el cálculo es: 
Math.floor(0.999999 * (15 - 5 + 1) + 5);
1. 0.999999 * 11 = 10.99999
2. 10.99999 + 5 = 15.99999
3. Math.floor(15.99999) = 15✅
Esto confirma que 15 puede ser generado.

Si Math.random()se genera 0, el cálculo es:
Math.floor(0 * (15 - 5 + 1) + 5);
1. 0 * 11 = 0
2. 0 + 5 = 5
3. Math.floor(5) = 5✅
Esto confirma que 5 puede ser generado.
*/