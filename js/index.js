const contenedorTarjetas = document.getElementById("contenedor");

let tarjetas = "";

for (const e of events) {
  tarjetas += `
<div class="col-sm-6 col-md-4 ml-5">
  <div class="card" style="width: 18rem">
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
