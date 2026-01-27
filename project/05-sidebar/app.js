const sidebarToggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

sidebarToggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
