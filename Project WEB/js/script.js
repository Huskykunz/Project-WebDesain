const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("aktif");
  menu.classList.toggle("buka");
});

function tutupMenu() {
  toggle.classList.remove("aktif");
  menu.classList.remove("buka");
}

// tutup menu saat klik di luar
document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !menu.contains(e.target)) tutupMenu();
});
