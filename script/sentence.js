const rosary = document.querySelector('.rosary')
const confession = document.querySelector('.confession')
const peregrination = document.querySelector('.peregrination')
const scourge = document.querySelector('.scourge')
const prision = document.querySelector('.prision')
const burn = document.querySelector('.burn')

const backButton = document.querySelector('.pena-back-btn')


// eventos
rosary.addEventListener('click', () => {
    selectPunishment(rosary)
})

confession.addEventListener('click', () => {
    selectPunishment(confession)
})

peregrination.addEventListener('click', () => {
    selectPunishment(peregrination)
})

scourge.addEventListener('click', () => {
    selectPunishment(scourge)
})

prision.addEventListener('click', () => {
    selectPunishment(prision)
})

burn.addEventListener('click', () => {
    selectPunishment(burn)
})

backButton.addEventListener('click', () => {
    information.style.display = 'flex'
    choiceWindow.style.display = 'none'
})




// funções
function selectPunishment(element) {
    if(element.style.borderLeft === '') {
        element.style.borderLeft = '38px groove red'
    } else {
        element.style.borderLeft = ''
    }
}


// cursor ================

const cursorDot = document.querySelector('.cursor-dot')
const cursorOutline = document.querySelector('.cursor-outline')

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`

    // cursorOutline.style.left = `${posX}`
    // cursorOutline.style.top = `${posY}`

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: 'forwards'})

})