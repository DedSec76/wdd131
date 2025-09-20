

const date = new Date();
document.getElementById("currentyear").textContent = date.getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Función con una sola línea
function calculateWindChill(t, v) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

// Static Data
const temp = 10;   // °C
const wind = 5;  // km/h

// Only calculate if the conditions are met
let menssage = "Not Applicable";
if (temp <= 10 && wind > 4.8) {
    const wc = calculateWindChill(temp, wind);
    menssage = `${wc.toFixed(1)} °C`;
}

document.getElementById("windChill").innerText = menssage;


