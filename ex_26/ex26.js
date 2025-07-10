function pestan(){
    let pestan = open();
    pestan.document.writeln('se abrio com nueva pestaña');
}

function ventana(){
    let ventana = open('','', 'width-400', 'height-250');
    ventana.document.writeln('se abrio como nueva ventana');
}

function confirmar(){
    let respuesta = confirm('¿Desea salir del sitio?');
    if(respuesta == True){
        window.close();
    }
}

// explicacion:
/* let ventana = open ('','', 'width-400, height-250');

en este caso las comillas vacias indican que no se carga una URL especifca, ademas, que debe desanclarse del navegador actual y crear nueva vetana con las dimensiones especifcas,
*/

function redireccionar(){
    if(window.confirm('¿Desea salir de la pagina actual?')){
        window.location = 'https://www.roblox.com/es/home'
    }
}

// conteo y disponibilidad de caracteres 

document.getElementById('texto').addEventListener('keyup', caracteres);

function caracteres(){
    let cant = document.getElementById('texto').value.length;
    let disponible = 20 - parseInt(cant);

    document.getElementById('cantidad').innerHTML = disponible;
    if(disponible==0){
        swal('!cantidad de caracteres agtados');
    }
}