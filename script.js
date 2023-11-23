  // Cambiar modo claro/oscuro
  let esmodooscuro = false;

  document.getElementById('btnmodo').addEventListener('click', function() {
    esmodooscuro = !esmodooscuro;
    Cambiomodo();
  });
  
  // Función para alternar entre modos claro y oscuro
  function Cambiomodo() {
    const body = document.body;
    const elementsToToggle = document.querySelectorAll('.toggle-mode');
  
    body.style.backgroundColor = esmodooscuro ? '#333' : '#fff';
    body.style.color = esmodooscuro ? '#fff' : '#333';
  
    elementsToToggle.forEach(element => {
      element.style.backgroundColor = esmodooscuro ? '#555' : '#ddd';
      element.style.color = esmodooscuro ? '#fff' : '#333';
    });
  }

  //Funcion para mostrar cuadro de dialogo en caso de error o envio de formulario
function enviarFormulario() {
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var pais = document.getElementById('pais').value;
  var ciudad = document.getElementById('ciudad').value;
  var tfn = document.getElementById('tfn').value;
  var comentarios = document.getElementById('comentarios').value;

  if (nombre.trim() === '' || email.trim() === '' || pais === '' || ciudad.trim() === '' || tfn.trim() === '') {
      alert('Por favor, completa todos los campos obligatorios.');
  } else {
      alert('Formulario enviado correctamente');
      document.getElementById('myForm').reset();
  }
}