let tarjeta = "";
let cardDetails = document.getElementById("cardDetails");

let queryString = location.search;
let params = new URLSearchParams(queryString);
const id = params.get("id");
const details = events.find((d) => d._id == id);

tarjeta = `
    <div class="card card-details">
      <div class="cont-img-details">
        <img class="img" src="${details.image}" alt="..." />
      </div>
      <h1>${details.name}</h1>
      <p class="text-details">
        ${details.description}
      </p>
      <p>
        <b> Asistance:</b> ${details.assistance}
      </p>
      <p>
        <b> Place:</b> ${details.place}
      </p>
      <p>
        <b> Capacity:</b> ${details.capacity}
      </p>
      <p>
        <b> Price:</b> ${details.price}
      </p>
    </div>`;
cardDetails.innerHTML = tarjeta;
