// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu toggle
const hamBtn = document.getElementById("hamburgerBtn");
const nav = document.getElementById("mainNav");

hamBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamBtn.textContent = nav.classList.contains("open") ? "✖" : "☰";
});
