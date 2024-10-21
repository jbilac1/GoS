const hambi = document.querySelector('.hambi');
const links = document.querySelector('.links');

hambi.addEventListener('click', ()=>{
    links.classList.toggle('open');
})
