function focalizar(){
    document.getElementById('nombre').value='';
    document.getElementById('nombre').style.border='';
    document.getElementById('nombre').style.borderRadius='8xp';
}

function validarVacios(){
    if (document.getElementById('nombre').value=''){
        document.getElementById('nombre').style.border='2xp solid red';
        document.getElementById('nombre').style.borderRadius='8xp';
        swal ('¡Debe de ingresar el nombre!')
    }
}