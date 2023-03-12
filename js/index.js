const contenedorTarjetas = document.getElementById("contenedor");
const categoriesContainer = document.getElementById("categoriesContainer");
const buscador = document.getElementById("buscador");
const category = [
  "Books",
  "Cinema",
  "Concert",
  "Food",
  "Museum",
  "Race",
  "Party",
];

let checked = [];
let searchFilter = [];

function dibujaTarjetas(eventos) {
  let tarjetas = "";
  for (const e of eventos) {
    tarjetas += `
      <div class="col-sm-6 col-md-4 ml-5">
        <div class="card" style="width: 18rem">
          <img src="${e.image}" alt="" />
          <div class="card-body">
            <div class="cont-h1-card">
              <h1> ${e.name} </h1>
            </div>
            <div class="cont-description">
              <p class="card-text">${e.description}</p>
            </div>
            <div class="cont-category">
              <p class="card-text">Category: ${e.category} </p>
            </div>
            <p>${e.date}</p>
            <button id="botonJs" type="button" class="boton" onclick="window.location.href='../details.html?id=${e._id}';">See more</button>
          </div>
        </div>
      </div>
    `;
  }
  return tarjetas;
}

function actualizarTarjetas(eventos) {
  contenedorTarjetas.innerHTML = dibujaTarjetas(eventos);
}

actualizarTarjetas(events);

// Funcion para filtrar los eventos por categoria y busqueda
function filtrarEventos() {
  let filteredEvents = events
    .filter((event) => {
      if (checked.length > 0) {
        return checked.includes(event.category);
      }
      return true;
    })
    .filter((event) => {
      // Filtrar por búsqueda
      if (buscador.value.trim() !== "") {
        return event.name
          .toLowerCase()
          .includes(buscador.value.trim().toLowerCase());
      }

      return true;
    });
  return filteredEvents;
}

// Función para actualizar las tarjetas en función de los filtros
function actualizarTarjetasFiltradas() {
  const eventosFiltrados = filtrarEventos();
  actualizarTarjetas(eventosFiltrados);
}

actualizarTarjetasFiltradas();

buscador.addEventListener("input", actualizarTarjetasFiltradas);

categoriesContainer.addEventListener("change", (event) => {
  checked = Array.from(
    categoriesContainer.querySelectorAll("input[type='checkbox']:checked")
  ).map((checkbox) => checkbox.value);
  actualizarTarjetasFiltradas();
});

// Crear checkboxes de categoría
function crearCheckboxes() {
  let checkboxesHtml = "";
  for (let cat of category) {
    checkboxesHtml += `
      <div class="check">
        <input class="inputCheck" type="checkbox" name="${cat}" id="${cat}" value="${cat}" />
        <label class="label-w" for="${cat}">${cat}</label>
      </div>
    `;
  }
  categoriesContainer.innerHTML = checkboxesHtml;
}

crearCheckboxes();
