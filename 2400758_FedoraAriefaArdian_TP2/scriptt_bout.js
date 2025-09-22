const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
});
// alasan menambahkan toggle sidebar di script.js karena agar bisa digunakan di semua halaman dan mengubah keestetikan yang awalnya cuma tabel sidebar saja