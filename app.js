const TAREAS = [
  { texto: "Clonar el repositorio", hecha: true },
  { texto: "Crear una rama", hecha: false },
  { texto: "Abrir un Pull Request", hecha: false },
];

function actualizarContador() {
  const pendientes = TAREAS.filter(function (t) {
    return !t.hecha;
  }).length;
  document.querySelector("#contador").textContent = pendientes + " pendientes";
}

function render() {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "";
  TAREAS.forEach(function (t) {
    const li = document.createElement("li");
    li.className = t.hecha ? "tarea hecha" : "tarea";
    li.textContent = t.texto;
    lista.appendChild(li);
  });
  actualizarContador();
}

render();
