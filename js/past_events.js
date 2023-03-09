const contenedorTarjetas = document.getElementById("contenedor");
let buscador = document.getElementById("buscador");

function dibujaTarjetas(eventos) {
  let tarjetas = "";

  for (const e of eventos) {
    const fechaEvento = new Date(e.date);
    if (fechaEvento < new Date(currentDate)) {
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
            <p>${e.date}</p>
             <a href="./details.html?id=${e._id}" id="botonJs" class="boton">
            See More
            </a>
        </div>
   </div>
</div>`;
    }
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
