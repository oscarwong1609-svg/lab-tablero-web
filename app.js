const TAREAS = [
  { texto: "Clonar el repositorio", hecha: true },
  { texto: "Crear una rama", hecha: false },
  { texto: "Abrir un Pull Request", hecha: false },
];

function render() {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "";
  TAREAS.forEach(function (t) {
    const li = document.createElement("li");
    li.className = t.hecha ? "tarea hecha" : "tarea";
    li.textContent = t.texto;
    lista.appendChild(li);
  });
}

render();
