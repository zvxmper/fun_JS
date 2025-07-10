// mostrar valores de un select en javascript

function cambiarcolor(){
    let select = document.getElementById('select');

    document.getElementById('text1').value = seleccion.selectdindex;
    document.getElementById('text2').value = seleccion.options[seleccion.selectdindex].text;
    document.getElementById('text3').value = seleccion.options[seleccion.selectdindex].value;
}