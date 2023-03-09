import events from "./data.js";

let tarjeta = "";
let cardDetails = document.getElementById("cardDetails");
let botonJs = document.getElementById("botonJs");

botonJs.addEventListener("click", () => {
  tarjeta = `
 <div class="card card-details">
  <div class="cont-img-details">
    <img class="img" src="${events.image}" alt="..." />
  </div>
  <h1>${events.name}</h1>
  <p class="text-details">
${events.description}
  </p>
  <p>
    <b> Asistance:</b> ${events.assistance}
  </p>
  <p>
    <b> Place:</b> ${events.place}
  </p>
  <p>
    <b> Capacity:</b> ${events.capacity}
  </p>
  <p>
    <b> Price:</b> ${events.price}
  </p>
</div>`;
});
cardDetails.innerHTML = tarjeta;
