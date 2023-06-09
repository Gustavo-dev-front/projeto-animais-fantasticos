import animaNumeros from './animaNumeros.js';

export default async function fetchAnimais() {

    const url = '../../json/animais.json';
    const containerNumeros = document.querySelector('.container-numeros');

    getJson(url);

    async function getJson(url) {
        const request = await fetch(url);
        const response = await request.json();

        response.forEach((animal) => {
            const container = document.createElement('div');
            container.classList.add('numero-animal');
            containerNumeros.appendChild(container);

            const name = document.createElement('h2');
            name.innerText = animal.specie;
            container.appendChild(name);

            const value = document.createElement('span');
            value.innerText = animal.numero;
            container.appendChild(value);
        });
        animaNumeros();
    }
}


