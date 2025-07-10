/*
JSON 
un archivo .json es como una hoja de auntes ordenada donde se guardan datos de manera clara para que una persona o programa los pueda leer, y utilizar. 

EJ: haga de cuenta que es como un cuaderno o libros de notas donde usted escribio informacion importante de alguien como por ejemplo su nombre, edad, direccion, telefono, y esta informacion la mantiene el mismo formato y bien organizado para cuando usted o alguien que requiera dicha informacion la necesite y pueda encontrarla facilmente.

ejemplo tecnico: entidad persona o direcion de persona:

{
"nombre": "su nombre completo".
"edad": "tiene 40 años",
"direccion":"carrera 25 # 38 - 65",
"telefono": "3108161852",
"email": "salazar_dev@gmail.com",
}

ejemplo de un menu en archivo .JSON:

{
"plato": "hamburguesa",
"precio": "22000",
"ingredientes": ["pan","lechuga","carne"],
"disponible": "True",
}
*/

let persona = {
    "nombre": "dylan",
    "edad": 40,
    "aprendiz": "false",
    "residencia": {"direccion":"carrera 25 # 38 - 65"},
    "telefono": "3281562174"

}

let elementotexto = document.getElementById('nombre');
elementotexto.textContent = persona.nombre; 