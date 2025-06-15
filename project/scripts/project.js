// script.js

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const contactForm = document.getElementById("contact-form");

  // Responsive navigation toggle
  menuToggle.addEventListener("click", () => {
    const isVisible = mainNav.style.display === "flex";
    mainNav.style.display = isVisible ? "none" : "flex";
  });

  // Image arrays
  const cultureImages = [
    { src: "images/ekpee.jpg", alt: "Cultural Festival" },
    { src: "images/cultural.jpg", alt: "Traditional Dance" }
  ];

  const tourismImages = [
    { src: "images/carnival.jpg", alt: "The calabar carnival" },
    { src: "images/obudu.jpg", alt: "Obudu Mountain Resort" }
  ];

  // Populate gallery function
  const populateGallery = (array, targetId) => {
    const container = document.getElementById(targetId);
    container.innerHTML = array
      .map(
        item => `<img src="${item.src}" alt="${item.alt}" loading="lazy">`
      )
      .join("");
  };

  populateGallery(cultureImages, "culture-gallery");
  populateGallery(tourismImages, "tourism-gallery");

  // Contact form handling
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      const contactEntry = {
        name,
        email,
        message,
        date: new Date().toISOString()
      };

      // Store messages in localStorage
      const stored = JSON.parse(localStorage.getItem("contacts") || "[]");
      stored.push(contactEntry);
      localStorage.setItem("contacts", JSON.stringify(stored));

      alert(`Thank you, ${name}! Your message has been received.`);
      contactForm.reset();
    } else {
      alert("Please fill in all required fields.");
    }
  });
});
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Set last modified date
const lastMod = document.getElementById("lastModified");
if (lastMod) {
  lastMod.textContent = `Last Modified: ${document.lastModified}`;
}

console.log("Site loaded successfully.");

function toggleReadMore() {
  const moreText = document.querySelector(".more");
  const btn = document.getElementById("readMoreBtn");

  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    dots.style.display = "inline";
    btn.textContent = "Read More";
  } else {
    moreText.style.display = "inline";
    dots.style.display = "none";
    btn.textContent = "Read Less";
  }
}

