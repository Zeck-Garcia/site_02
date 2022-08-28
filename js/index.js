
const $Menu = document.querySelector('.main-menu')
const $btnMenu = document.querySelector('.btn-menu')
const $btnClose = document.querySelector('.btn-close')

$btnMenu.addEventListener('click',function(){
    $Menu.classList.add('menu-open')
})

$btnClose.addEventListener('click',function(){
    $Menu.classList.remove('menu-open')
})
