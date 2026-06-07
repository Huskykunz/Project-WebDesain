const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");
const menuLinks = menu.querySelectorAll("a");

function aturMenu(terbuka) {
  toggle.classList.toggle("aktif", terbuka);
  menu.classList.toggle("buka", terbuka);
  toggle.setAttribute("aria-expanded", String(terbuka));
  toggle.setAttribute("aria-label", terbuka ? "Tutup menu" : "Buka menu");
}

toggle.addEventListener("click", () => {
  aturMenu(!menu.classList.contains("buka"));
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => aturMenu(false));
});

// tutup menu saat klik di luar
document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !menu.contains(e.target)) aturMenu(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") aturMenu(false);
});
