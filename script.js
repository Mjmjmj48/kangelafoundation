// Basic interactivity
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', ()=> navLinks.classList.toggle('open'));

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', ()=>{
  if (window.scrollY > 400) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
});

document.getElementById('year').textContent = new Date().getFullYear();
