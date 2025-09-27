const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here.
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 51921,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x640/hong_kong_china_temple_exterior1.jpeg"
  },
  {
    templeName: "Lisbon Portugal",
    location: "Lisbon, Portugal",
    dedicated: "2019, September, 15",
    area: 23730,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/400x250/03-045a97e8471a9f581e927698521a1d184f4b3753.jpeg"
  },
  {
    templeName: "Hamilton New Zealand",
    location: "Hamilton, New Zealand",
    dedicated: "1958, April, 20",
    area: 45251,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hamilton-new-zealand/400x250/hamilton-new-zealand-lds-temple-942155-wallpaper.jpg"
  }
];

// We get the empty html div to fill with data
const container = document.querySelector(".container-temples");

// Show the temples list
createTempleCard(temples);

// We create the temple card
function createTempleCard(filteredTemples) {
  container.innerHTML = ""
  filteredTemples.forEach(temple => {
    const card = document.createElement('DIV')
    card.classList = "card_temple"

    const title = document.createElement('H3')
    title.textContent = `${temple.templeName}`

    const location = document.createElement('P')
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`

    const dedicated = document.createElement('P')
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`

    const size = document.createElement('P')
    size.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`

    const img = document.createElement('IMG')
    img.src = `${temple.imageUrl}`
    img.alt = `image of ${temple.templeName} temple`
    img.style.boxShadow = "1px 5px 10px black"
    img.loading = "lazy";


    card.appendChild(title)
    card.appendChild(location)
    card.appendChild(dedicated)
    card.appendChild(size)
    card.appendChild(img)

    container.appendChild(card)
  })
}

// filtering and displaying the temples

const old = document.getElementById("old")
old.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated < 1900));
})

const large = document.getElementById("large")
large.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000))
});

const small = document.getElementById("small")
small.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 10000 ))
});


const year = new Date().getFullYear();
document.getElementById("year").textContent = year;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const mobile = document.querySelector("#mobile-menu");
const nav = document.querySelector("nav");

mobile.addEventListener("click", () => {
  mobile.classList.toggle("expand");
  nav.classList.toggle("expand");
});