export default function checkOpen() {
    const lineInfo = document.querySelector('[data-date]');
    const diasFuncionamento = lineInfo.dataset.dateDays.split(',').map(Number);
    const horariosFuncionamento = lineInfo.dataset.dateHours.split(',').map(Number);
    const hoje = new Date();

    const opened = (diasFuncionamento.indexOf(hoje.getDay()) !== -1 && hoje.getHours() < horariosFuncionamento[1]);
    
    if (opened)
        lineInfo.classList.add('aberto');
}

