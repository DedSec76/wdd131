const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector("#pname")

    if (select) {

        products.forEach(product => {
            const option = document.createElement("option")
            option.text = product.name
            option.value = product.id
            select.appendChild(option)
        });

    }

// Using LocalStorage
const visitsDisplay = document.querySelector("#visits")

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0

if (visitsDisplay) {
    if (numVisits !== 0) {
        visitsDisplay.textContent = numVisits;
    } else {
        visitsDisplay.textContent = `This is your first visit.
        🥳 Welcome!`
    }
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits)


// Adding Footer
const year = new Date().getFullYear();
const currentyear = document.querySelector("#currentyear")
const lasmodified = document.querySelector("#lastModified")

if (currentyear) {
    currentyear.textContent = year
}
if (lasmodified) {
    lasmodified.textContent = `Last Modification: ${document.lastModified}`
}
})
