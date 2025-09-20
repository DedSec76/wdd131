

const date = new Date();
document.getElementById("currentyear").textContent = date.getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Función con una sola línea
function calculateWindChill(t, v) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

// Datos de ejemplo
const temp = 10;   // °C
const wind = 5;  // km/h

// Solo invocar si se cumplen las condiciones oficiales
let mensaje = "No aplica sensación térmica.";
if (temp <= 10 && wind > 4.8) {
    const wc = calculateWindChill(temp, wind);
    mensaje = `${wc.toFixed(1)} °C`;
}
else {
    mensaje = "N/A";
}

document.getElementById("windChill").innerText = mensaje;


