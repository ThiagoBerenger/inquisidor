const rosary = document.querySelector('.rosary')
const confession = document.querySelector('.confession')
const peregrination = document.querySelector('.peregrination')
const scourge = document.querySelector('.scourge')
const prision = document.querySelector('.prision')
const burn = document.querySelector('.burn')



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




// funções
function selectPunishment(element) {
    if(element.style.borderLeft === '') {
        element.style.borderLeft = '38px groove red'
    } else {
        element.style.borderLeft = ''
    }
}
