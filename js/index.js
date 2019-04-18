const toggleMenu = element => {
  element.classList.toggle("nav--open");
};
const menu = document.querySelector(".nav-container");
const menuButton = document.querySelector(".nav-button");
menuButton.addEventListener("click", () => {
  toggleMenu(menu);
});
