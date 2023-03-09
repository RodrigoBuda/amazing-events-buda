let frutas = ["Pera", "mazana", "Sandia"];

let lista = document.getElementById("lista");

let buscador = document.getElementById("buscador");

const dibujarLista = (arrayFrutas) => {
  lista.innerHTML = "";
  arrayFrutas.forEach((fruta) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = fruta;
    lista.appendChild(listItem);
  });
};

buscador.addEventListener("change", () => {
  let frutasFiltradas = frutas.filter((fruta) =>
    fruta.toLowerCase().includes(buscador.value.toLowerCase())
  );

  dibujarLista(frutasFiltradas);
});
