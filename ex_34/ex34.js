// Promesas Solicitudes y Respuestas

// Teoría

/*

Peticiones:

GET. Se utiliza para obtener información de un servidor.
POST. Se utiliza para enviar información al servidor.
PUT. Se utiliza para actualizar un recurso en el servidor.
DELETE. Se utiliza para eliminar un recurso que se encuentra en un servidor.

Respuestas:

Las respuestas a estas peticiones y/o solicitudes http van a traer consigo 
un código de estado http: estos códigos son números que indican cuál ha sido 
el resultado de las solicitudes y los códigos más comunes que se pueden 
recibir son:

200 El código para indicar que la respuesta fue completada exitosamente.
201 El código que indica cuando un elemento se ha creado en caso de que se haya hecho un POST.
204 El código que dice que la respuesta no tiene contenido.
400 El código que quiere decir que se ha solicitado incorrecta.
401 El código que se usa cuando no se tiene autorización por el servidor.
404 El código que indica que el recurso no fue encontrado o el 
servidor no tiene lo que se está pidiendo.

200 Respuesta completada  
201 Elemento creado  
204 Respuesta sin contenido  
400 Solicitud incorrecta  
401 No autorizado  
404 No encontrado  

Resumen:
Las promesas y las solicitudes http son muy importantes en JavaScript para poder
manejar la asincronía y la comunicación con servidores externos y así se pueden
crear aplicaciones dinámicas responsivas que pueden actualizarse y cambiar en tiempo
real sin bloquear la ejecución del resto de las aplicaciones.

Catch: La funcionalidad catch es un método que se utiliza en promesas para manejar
posibles errores, es una forma de atrapar o capturar error que se encuentra el código
dentro de una promesa y realizar una acción específica en caso de que ocurra dicho
error.
*/

// let datosJson;
// fetch('./Cap.4.JSON/ex42_practica_biblioteca/libros.json')
//     .then(res => res.json())
//     .then((datos) => {
//         datosJson = datos;
//         let elementoTexto = document.getElementById('titulo');
//         elementoTexto.textContent = datosJson.biblioteca[0].titulo;
//     })
//     .catch(function(error){alert(error)})

let datosJson;

fetch('/libros/libros.json')
  .then(res => res.json())
  .then((salida) => {
    const contenedor = document.getElementById('contenedor');
    salida.biblioteca.forEach((libro, index) => {
      const divLibro = document.createElement('div');
      divLibro.innerHTML = `
        <h3>Libro ${index + 1}</h3>
        <p><strong>Título:</strong> ${libro.titulo || "No definido"}</p>
        <p><strong>Editorial:</strong> ${libro.editorial || "No definida"}</p>
        <p><strong>Edición:</strong> ${libro.edicion || "No definida"}</p>
        <p><strong>Año:</strong> ${libro.anio || "No definido"}</p>
        <p><strong>Autor principal:</strong> ${libro.autores?.autor || "No definido"}</p>
        <p><strong>Código SENA:</strong> ${libro["codigo sena"] || "No definido"}</p>
        <p><strong>Descripción:</strong> ${libro.descripcion || "No definida"}</p>
      `;
      contenedor.appendChild(divLibro);
    });
  })
  .catch(error => alert("Error: " + error));



