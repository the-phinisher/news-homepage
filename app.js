
const navbar = document.querySelector('nav');
const main = document.querySelector('.main-container');
main.style.top = navbar.clientHeight + "px";

const toggleNavBtn = document.querySelector('.toggle-nav-btn');
const btnIcon = document.querySelector('.fa-solid');
const navUl = document.querySelector('.nav-ul');
const li = document.querySelectorAll('li');


function handleMobileMenu() {
    navUl.classList.toggle('toggle-menu');
    btnIcon.classList.toggle('fa-bars');
    btnIcon.classList.toggle('fa-xmark');
    li.forEach(node => {
        node.style.transition = 'opacity 2s';
        function toggleOpacity () {node.style.opacity = (node.style.opacity === '1') ? '0' : '1'}; 
        setTimeout(toggleOpacity, 1000);
    })
}

toggleNavBtn.addEventListener('click', handleMobileMenu);
