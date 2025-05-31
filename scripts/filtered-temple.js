// Temple data array including the provided temples plus 3 additional ones
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
];

// Function to render temples as cards
function displayTemples(templesToDisplay) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = ""; // Clear previous content

  templesToDisplay.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy" />
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    container.appendChild(card);
  });
}

// Helper function to get year from the dedicated string (format: "YYYY, Month, DD")
function getYear(dedicatedStr) {
  // Create a Date object for easy parsing
  return new Date(dedicatedStr).getFullYear();
}

// Filter buttons event listeners
document.getElementById("filter-home").addEventListener("click", () => {
  displayTemples(temples);
});

document.getElementById("filter-old").addEventListener("click", () => {
  const oldTemples = temples.filter((t) => getYear(t.dedicated) < 1900);
  displayTemples(oldTemples);
});

document.getElementById("filter-new").addEventListener("click", () => {
  const newTemples = temples.filter((t) => getYear(t.dedicated) > 2000);
  displayTemples(newTemples);
});

document.getElementById("filter-large").addEventListener("click", () => {
  const largeTemples = temples.filter((t) => t.area > 90000);
  displayTemples(largeTemples);
});

document.getElementById("filter-small").addEventListener("click", () => {
  const smallTemples = temples.filter((t) => t.area < 10000);
  displayTemples(smallTemples);
});

// Initialize page with all temples
window.addEventListener("load", () => {
  displayTemples(temples);
});

function updateFooterDates() {
  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  if (modifiedSpan) {
    modifiedSpan.textContent = document.lastModified;
  }
}

// Run it when the page loads
window.addEventListener("load", updateFooterDates);