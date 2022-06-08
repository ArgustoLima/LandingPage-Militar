// fazer aparecer as informações com o js

let btn = document.querySelector('#showAlistamento')
let show = document.querySelector('.cadastroAlistamento')

btn.addEventListener('click', function() {
    if(show.style.display === 'block') {
        show.style.display = 'none'
    } else {
        show.style.display ='block'
    }
})