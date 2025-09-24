
const year = new Date().getFullYear();

document.getElementById("year").textContent = year;

document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const mobile = document.querySelector(".icon");
const nav = document.querySelector("nav");

mobile.addEventListener("click", () => {
    mobile.classList.toggle("expand");
    nav.classList.toggle("expand");
});