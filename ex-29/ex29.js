let elementoSegundos = document.getElementById('tiempoelegido');
let elementotextoAlarma = document.getElementById('textoalarma');
let elementoSonidoalarma = document.getElementById('audioAlarma');

function comenzarTiempo() {

    let tiemoEnSegundos = elementoSegundos.value;
    if (tiemoEnSegundos <= 0) {
        alert("Por favor ingrese un tiempo valido.");
        return;
    }

    setTimeout(tiempocumpido, 1000 * tiemoEnSegundos);
}

function tiempocumpido(){
    elementotextoAlarma.style.color = "green";
    elementoSonidoalarma.play();
    elementoSegundos.value = '';
}

function comenzarReloj(){
    setInterval(tictac, 1000);
}

function tictac(){
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = String(tiempoActual.getMinutes()).padStart(2,'0');
    let segndos = String(tiempoActual.getSeconds()).padStart(2,'0');

    let formato12 = hora % 12 || 12;
    let ampm = hora >= 12 ? 'pm' : 'am';

    let textoHora = formato12 + ':' + minutos + ':' + segndos + ':' + ampm;

    elementotextoAlarma.textContent = textoHora;
}