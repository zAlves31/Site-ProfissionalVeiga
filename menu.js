
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById("menu-mobile")
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () =>{
    menu.classList.add('abri-menu')     
})

menu.addEventListener('click', () =>{
    menu.classList.remove('abri-menu')     
})

overlay.addEventListener('click', () =>{
    menu.classList.remove('abri-menu')     
})
