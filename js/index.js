const contenedorTarjetas = document.getElementById("contenedor");
let buscador = document.getElementById("buscador");
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
</div>`;
  }
  return tarjetas;
}

function actualizarTarjetas(eventos) {
  contenedorTarjetas.innerHTML = dibujaTarjetas(eventos);
}

actualizarTarjetas(events);

buscador.addEventListener("keyup", () => {
  let filteredCards = events.filter((event) =>
    event.name.toLowerCase().includes(buscador.value.trim().toLowerCase())
  );
  actualizarTarjetas(filteredCards);
});

/*--------filtrar----------*/

const filterEventsByCategory = (arrayCategories, arrayEvents = events) => {
  let filteredEvents = [];
  arrayCategories.forEach((category) => {
    arrayEvents.forEach((event) => {
      if (event.category == category) {
        filteredEvents.push(event);
      }
    });
  });
  return filteredEvents;
};

const arrCategorySelected = () => {
  let selection = [];

  arrCategories.forEach((category) => {
    let selector = document.getElementById(category);
    if (selector.checked) {
      selection.push(category);
    }
  });

  let arrayFinal = [];
  if (selection.length != 0) {
    actualizarTarjetas(filterEventsByCategory(selection));
  } else {
    actualizarTarjetas(events);
  }
};
