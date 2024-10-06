const hambi = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const nav = document.querySelector('.navbar');

hambi.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    links.classList.toggle('open');
    span1.classList.toggle('r1');
    span2.classList.toggle('r2');
    span3.classList.toggle('r3');
})