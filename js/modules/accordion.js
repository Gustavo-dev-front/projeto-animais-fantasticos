export default function initFaq() {
    const listaFaq = document.querySelectorAll("#faq dl dt");
    listaFaq[0].nextElementSibling.dataset.display = 'on';
  
    function abrirResposta(event) {
      const textToShow = event.target.nextElementSibling;
      if (textToShow.dataset.display !== 'on')
        textToShow.dataset.display = 'on';
      else
        textToShow.dataset.display = 'off';
    }
  
    listaFaq.forEach((item) => {
      item.addEventListener("click", abrirResposta);
    });
  }
