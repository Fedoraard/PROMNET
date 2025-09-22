// Pesan selamat datang saat pertama kali buka web
window.onload = function () {
  alert("Selamat datang di website Fedora Ariefa Ardian! 😊");
};

// Toggle sidebar
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// alasan menambahkkan selamat datang karena untuk interaktif ketika kedatangan user ke web saya
