// Acceder al archivo JSON

let datosJson;
let xhr = new XMLHttpRequest();

xhr.open('GET', 'persona.json', true); // o usa 'ex31.json' si prefieres ese archivo
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status === 200) {
        datosJson = xhr.response;

        document.getElementById('nombre').textContent = datosJson.persona.nombre;
        document.getElementById('edad').textContent = datosJson.persona.edad;
        document.getElementById('aprendiz').textContent = datosJson.persona.aprendiz;
        document.getElementById('direccion').textContent = datosJson.persona.residencia.direccion;
        document.getElementById('ciudad').textContent = datosJson.persona.residencia.ciudad;
        document.getElementById('departamento').textContent = datosJson.persona.residencia.departamento;
        document.getElementById('telefono').textContent = datosJson.persona.telefono;

        console.log(datosJson);
    } else {
        console.error('Error al cargar el archivo JSON:', xhr.status);
    }
};

xhr.send();
