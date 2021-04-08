//select the hamburger menu icons in the document
const menu = document.querySelector('.hamburger');

//select the nav-links in the document
const navlink = document.querySelector('.nav-links');

//select the empty class created with css
const animate = document.querySelector('.animate');


menu.addEventListener('click', () =>{
 
    navlink.classList.toggle('animate')

})