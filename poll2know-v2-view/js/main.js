let sendDropdown = document.querySelector(".send-dropdown");
let sendDropdownLg = document.querySelector(".send-dropdown-lg");
let scoreDropdown = document.querySelector(".score-dropdown");
let scoreDropdownLg = document.querySelector(".score-dropdown-lg");
let contactIcon = document.querySelector(".small .icons .points");
let contactIconLg = document.querySelector("header .icons .points");
let scoreIcon = document.querySelector(".small .icons .score");
let scoreIconLg = document.querySelector("header .icons .score");
let sidebar = document.querySelector(".sidebar");
let sidebarToggler = document.querySelector(".menu-toggler");
let overlay = document.querySelector(".mobile-overlay");

contactIcon.addEventListener("click", () => {
  sendDropdown.classList.toggle("show");
  scoreDropdown.classList.remove("show");
});

contactIconLg.addEventListener("click", () => {
  sendDropdownLg.classList.toggle("show");
  scoreDropdownLg.classList.remove("show");
});

scoreIcon.addEventListener("click", () => {
  scoreDropdown.classList.toggle("show");
  sendDropdown.classList.remove("show");
});

scoreIconLg.addEventListener("click", () => {
  scoreDropdownLg.classList.toggle("show");
  sendDropdownLg.classList.remove("show");
});

sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// sidebar.addEventListener = () => {
//   console.log("dasd")
// };
