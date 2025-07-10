function saludo(){
    swal('¡hola mundo!')
}

function saludoPersonalizado(){
    swal({
        titulo: '¡Que tal mundo!',
        texto: 'Bienvenidos al curso fundamentos de JavaScript',
        icon: 'succes',
        button: '¡Engine!'
    })
}