const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Reveal sections gently as they enter the viewport.
const revealTargets = document.querySelectorAll(
  ".section-kicker, .about-grid, .info-strip, .skill-card, .project-card, .timeline article"
);
revealTargets.forEach((element) => element.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));


// Rotate the short role line in the hero without changing the page content.
const roleText = document.querySelector("#role-text");
if (roleText && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const roles = [
    "INFORMATICS STUDENT · WEB DEVELOPER",
    "CREATIVE THINKER · PROBLEM SOLVER",
    "ALWAYS LEARNING · ALWAYS BUILDING"
  ];
  let roleIndex = 0;
  window.setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleText.classList.add("role-fade");
    window.setTimeout(() => {
      roleText.textContent = roles[roleIndex];
      roleText.classList.remove("role-fade");
    }, 220);
  }, 3200);
}
