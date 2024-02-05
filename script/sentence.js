const rosary = document.querySelector('.rosary')
const confession = document.querySelector('.confession')
const peregrination = document.querySelector('.peregrination')
const scourge = document.querySelector('.scourge')
const prision = document.querySelector('.prision')
const burn = document.querySelector('.burn')
const punishmentText = document.querySelector('.punishment-text')


const backButton = document.querySelector('.pena-back-btn')
const condemnButton = document.querySelector('.condemn-btn')
const condemnWindow = document.querySelector('#condemn-window')

const nextMission = document.querySelector('.next-mission')

// ---

document.addEventListener('DOMContentLoaded', () => {
    condemnButton.style.visibility = 'hidden';
    condemnButton.disabled = true;
});

const punishmentMessage = document.querySelector('.punishment-message')
let punishment = []


rosary.addEventListener('click', () => {
    selectPunishment(rosary)
    checkPunishmentSelection()
    
})

confession.addEventListener('click', () => {
    selectPunishment(confession)
    checkPunishmentSelection()
    
})

peregrination.addEventListener('click', () => {
    selectPunishment(peregrination)
    checkPunishmentSelection()
    
})

scourge.addEventListener('click', () => {
    selectPunishment(scourge)
    checkPunishmentSelection()
    
})

prision.addEventListener('click', () => {
    selectPunishment(prision)
    checkPunishmentSelection()
    
})

burn.addEventListener('click', () => {
    selectPunishment(burn)
    checkPunishmentSelection()
})

backButton.addEventListener('click', () => {
    information.style.display = 'flex'
    choiceWindow.style.display = 'none'
})

function checkPunishmentSelection() {
    if (punishment.length === 0) {
        condemnButton.style.visibility = 'hidden';
        condemnButton.disabled = true;
    } else {
        condemnButton.style.visibility = 'visible';
        condemnButton.disabled = false;
    }
}

condemnButton.addEventListener('click', () => {

    localStorage.setItem('punishment', JSON.stringify(punishment));
    bellSound.play();

    punishmentMessage.innerHTML = punishment

    condemnWindow.style.display = 'block'
    registerButton.style.display = 'none'
    missionButton.style.display = 'none'
    compassButton.style.display = 'none'
    bookButton.style.display = 'none'
    choiceButton.style.display = 'none'
    musicButton.style.display = 'none'
    }
)

nextMission.addEventListener('click', () => {
    condemnWindow.style.display = 'none'
    choiceWindow.style.display = 'none'
    
    information.style.display = 'flex'
    registerButton.style.display = 'flex'
    missionButton.style.display = 'flex'
    compassButton.style.display = 'flex'
    bookButton.style.display = 'flex'
    choiceButton.style.display = 'flex'
    musicButton.style.display = 'flex'
    
    audioClose.play()
    localStorage.clear() 
    missionTwo()
})


// funções

function selectPunishment(element) {
    if(element.style.borderLeft === '') {
        element.style.borderLeft = '38px groove red'
        punishment.push(element.innerText)
        
    } else {
        element.style.borderLeft = ''
        const index = punishment.indexOf(element.innerText)
        if(index !== -1) {
            punishment.splice(index, 1)
        }
    }
}


localStorage.clear() 