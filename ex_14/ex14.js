// ejercicio de analisis, pedir a un usuario que digite añgun tipo de valor 
let a = 1;
let suma = 0;
let valor;

while(a <= 4){
    valor = parseInt(prompt('ingrese un valor numerico'));
    suma = suma + valor;
    a++;
}
document.writeln('la suma es: ', suma, '<br>');

//Rifa
let numero;
do{
    numero = parseInt(prompt('¡Rifa!: números entre 1 y el 15'));

    if(numero !=5){
        document.writeln('Usted dió el número', '<br>');
    } else{
        document.writeln('¡Genal!, has ganado el número corecto era el: ', numero, ' Reclama tu premio')
    }
} while (numero !=5);