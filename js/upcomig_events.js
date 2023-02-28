const contenedorTarjetas = document.getElementById("contenedor");

let tarjetas = "";

for (const e of events) {
  tarjetas += `
<div class="col-sm-6  ml-5 col-md-4">
  <div class="card">
       <img src="${e.image}" alt="" />
        <div class="card-body">
            <h1> ${e.name} </h1>
            <p class="card-text">${e.description}</p>
            <a href="#" class="boton">
            See More
            </a>
        </div>
   </div>
</div>`;
}
contenedorTarjetas.innerHTML = tarjetas;
