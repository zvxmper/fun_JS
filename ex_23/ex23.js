let area = document.getElementById('comentarios')
area.style.resize = 'none';

function comentar(){
    const comentario = document.getElementById('comentarios').
    value.trim();

    if(comentario.length === 0){
        swal ('usted no ha digitado ninguna letra, por favor escriba antes de enviar')
    }
    else if (comentario.length > 100){
        swal('el comentario es muy largo, sintetice la idea y vuelva a escribir.')
    } else {
        swal('¡gracias por sus comentarios!')
    }
}