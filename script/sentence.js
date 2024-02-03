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

// ---

document.addEventListener('DOMContentLoaded', () => {
    condemnButton.style.visibility = 'hidden';
    condemnButton.disabled = true;
});

let punishment = []

// eventos
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

        condemnWindow.style.display = 'block'
        registerButton.style.display = 'none'
        missionButton.style.display = 'none'
        compassButton.style.display = 'none'
        bookButton.style.display = 'none'
        choiceButton.style.display = 'none'
        musicButton.style.display = 'none'
    }
)


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