// Data structure for pages
const pages = [
    {
      title: "Lenguajes y sistemas formales",
      url: "/logica/lenguajes-y-sistemas-formales.html"
    },
    {
      title: "Conjuntos inductivos",
      url: "/logica/conjuntos-inductivos.html"
    },
    {
      title: "Principios de inducción primitiva",
      url: "/logica/induccon-primitiva.html"
    },
];

// Search bar
const searchBar = document.querySelector(".search-bar");
const searchInput = searchBar.querySelector(".search-input");

// Input field change event
searchInput.addEventListener("input", () => {
    // Filter search results
    const filteredPages = pages.filter((page) => {
        return page.title.toLowerCase().includes(searchInput.value.toLowerCase());
    });

    // Display search results
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
