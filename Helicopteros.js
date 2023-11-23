//Funcion cambio color
let transicion = false;

function cambiocolor() {
  const body = document.body;
  const elementsToToggle = document.querySelectorAll('.toggle-mode');

  body.style.backgroundColor = transicion ? '#333' : '#FF7F50';
  body.style.color = transicion ? '#FF7F50' : '#333';

  elementsToToggle.forEach(element => {
    element.style.backgroundColor = transicion ? '#555' : '#ddd';
    element.style.color = transicion ? '#FF7F50' : '#333';
  });
}

// Cambio automático
setInterval(function() {
    transicion = !transicion;
    cambiocolor();
}, 800);