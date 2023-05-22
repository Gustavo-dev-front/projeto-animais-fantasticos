export default function initAnimaisTexts() {
    const listaImagens = document.querySelectorAll("[data-component='lista-animais'] img");
  
    function ativarTexto(event) {
      const textToHidde = document.querySelector(
        "[data-component = 'descricao-animais'] [data-display='on']"
      );
      const textToShow = document.querySelector(
        `[data-component = 'descricao-animais'] [data-animal='${event.target.getAttribute(
          "data-animal"
        )}']`
      );
      textToHidde.dataset.display = 'off';
      textToShow.dataset.display = 'on';
    }
  
    listaImagens.forEach((img) => {
      img.addEventListener("click", ativarTexto);
    });
  }