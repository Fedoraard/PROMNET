// Toggle sidebar
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// alasan menambahkan toggle sidebar di script.js karena agar bisa digunakan di semua halaman dan mengubah keestetikan yang awalnya cuma tabel sidebar saja

// Pesan selamat datang saat pertama kali buka web
window.onload = function () {
  alert("Selamat datang di website Fedora Ariefa Ardian! 😊");
};

// alasan menambahkkan selamat datang karena untuk interaktif ketika kedatangan user ke web saya

