const pantalla = document.getElementById("pantalla");

function insertar(valor) {
    pantalla.value += valor;
}

function borrar() {
    pantalla.value = '';
}

function calcular() {
    try {
        //Cerramos funciones abiertas (opcionalmente puedes validar más)
        pantalla.value = eval(pantalla.value);
    } catch (e) {
        pantalla.value = 'Error';
    }
}