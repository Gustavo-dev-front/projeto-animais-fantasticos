const listaImagens = document.querySelectorAll(".js-animais-lista img");

function ativarTexto(event) {
  const textToHidde = document.querySelector(
    ".js-animais-descricao .js-display-on"
  );
  const textToShow = document.querySelector(
    `.js-animais-descricao [data-animal='${event.target.getAttribute(
      "data-animal"
    )}']`
  );
  textToHidde.classList.remove("js-display-on");
  textToShow.classList.add("js-display-on");
}

listaImagens.forEach((img) => {
  img.addEventListener("click", ativarTexto);
});
console.log(listaImagens);
