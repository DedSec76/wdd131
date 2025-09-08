

const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const lastModified = new Date(document.lastModified).getDate() + '/' + (new Date(document.lastModified).getMonth() + 1) + '/' + new Date(document.lastModified).getFullYear() + ' ' + new Date(document.lastModified).getHours() + ':' + new Date(document.lastModified).getMinutes() + ':' + new Date(document.lastModified).getSeconds();
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;