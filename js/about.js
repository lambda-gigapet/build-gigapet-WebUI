const toggleMenu = () => {
    element.classList.toggle('.nav--open');
    
}
const menu = document.querySelector('.nav-container');
console.log(menu);
const menuButton = document.querySelector('.nav-button');
menuButton.addEventListener('click', () => {
  
    toggleMenu();
    
  })