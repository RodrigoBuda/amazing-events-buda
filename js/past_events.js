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
  const tarjetas = dibujaTarjetas(eventos);

  if (tarjetas === "") {
    contenedorTarjetas.innerHTML = `<div  class="contenedor d-flex justify-content-center align-items-center" ><img style="width: 240px;" src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" alt=""></div>`;
  } else {
    contenedorTarjetas.innerHTML = tarjetas;
  }
}

actualizarTarjetas(events);

buscador.addEventListener("keyup", () => {
  let filteredCards = events.filter((event) =>
    event.name.toLowerCase().includes(buscador.value.trim().toLowerCase())
  );

  actualizarTarjetas(filteredCards);
});
