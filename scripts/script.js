const menuBtn = document.querySelector('header nav button')


const nav = document.querySelector('main > nav')

menuBtn.addEventListener('click', openMenu)

function openMenu(){
    nav.classList.toggle('active')
}

const liItem = document.querySelectorAll('main section ul:nth-of-type(1) li:nth-of-type(1)')

console.log(liItem);