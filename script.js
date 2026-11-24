// Mobile navigation, rotating role text, current year and back-to-top button.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

const roles = ["Aspiring Software Engineer", "AI & ML Student", "Web Development Learner"];
const typingElement = document.querySelector("#typing-text");
let roleIndex = 0;

if (typingElement) {
  window.setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    typingElement.textContent = roles[roleIndex];
  }, 2400);
}

document.querySelector("#year").textContent = new Date().getFullYear();

const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 450);
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
