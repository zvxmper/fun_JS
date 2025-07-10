function comenzar(){
    setTimeout(cumpildo, 5000);
}

function cumplido(){
    swal('¡se agoto el tiempo!');
}

function iniciar(){
    let elegirSegundos = document.getElementById('tiempoElegido').value;
    setTimeout(finalizado, 1000 * elegirSegundos)
}

function finalizado(){
    swal('¡se ha agotado el tiempo!');
}


function cuentaRegresva(){
    let elegirSegundos = document.getElementById("tiempoCronometro").value;
    let contador = document.getElementById("contador");
    let textoTiempo = document.getElementById("txtTiempo");
    textoTiempo.style.display = "none"; //No mostrar el texto de inicio 

    if (!elegirSegundos || elegirSegundos <= 0){
        swal("por favor, ingrese un tiempo valido.");
        return;
    }

    //cambiar texto indicando que el temorizador ha iniciado 
    textoTiempo.style.display = "block"; //mostar el texto
    textoTiempo.textContent = "¡tiempo inicializado!";
    textoTiempo.style.color = "green";

    //inicia cuenta regresiva
    function actualizarContador(segunsRestantes){
        contador.textContent = segunsRestantes;

        if (segunsRestantes > 0){
            setTimeout(() => actualizarContador(segunsRestantes - 1), 1000);
        } else {
            textoTiempo.textContent = "¡Tiempo Finalizado!";
            textoTiempo.style.color = "blueviolet";
            swal("¡se ha agotado el tiempo!");

            //vaciar el campo de entrada
            document.getElementById("tiempoCronometro").value ="";
        }
    }
    actualizarContador(elegirSegundos);
}