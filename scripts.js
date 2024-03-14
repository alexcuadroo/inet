import { logica, programacion } from './data.js';
const searchBar = document.querySelector(".search-bar");
const searchInput = searchBar.querySelector(".search-input");

// Evento de cambio en el campo de entrada
searchInput.addEventListener("input", () => {
    // Filtra los resultados de búsqueda
    const filteredPages = [...logica, ...programacion].filter((page) => {
        return page.title.toLowerCase().includes(searchInput.value.toLowerCase());
    });

    // Muestra los resultados de búsqueda
    const resultsList = document.querySelector(".results-list");
    resultsList.classList.add("my-results-list");
    resultsList.innerHTML = "";
    filteredPages.forEach((page) => {
        const resultItem = document.createElement("li");
        const link = document.createElement("a");
        link.classList.add("lista-item");
        link.textContent = page.title;
        link.href = page.url;
        link.target = "_blank";
        resultItem.appendChild(link);
        resultsList.appendChild(resultItem);
    });
});
