
const yearSpan = document.getElementById("year");
const lastModSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModSpan.textContent = document.lastModified;


function calculateWindChill(tempC, windKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

const temp = 10; // °C
const windSpeed = 5; // km/h

const windChillElement = document.getElementById("windChill");

if (temp <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}
