// variaveis
const startMenu = document.querySelector('#start-menu')
const screenGame = document.querySelector('#screen')
const information = document.querySelector('#information-suspect')
const startGameButton = document.querySelector('.start-game')
const playerInfo = document.querySelector('.player-info')
const playerName = document.querySelector('.player-name')

const bookButton = document.querySelector('.book-button')
const bookOpen = document.querySelector('#book')

const hereticsChapter = document.querySelector('.heretics-chapter')
const witchcraftChaper = document.querySelector('.witchcraft-chapter')
const satanismChapter = document.querySelector('.satanism-chapter')

const compassButton = document.querySelector('.compass-button')

const choiceWindow = document.querySelector('#choice-window')
const choiceButton = document.querySelector('.choice-button')

const missionWindow = document.querySelector('#main-mission')
const missionButton = document.querySelector('.btn-mission')
const closeMission = document.querySelector('.close-mission')

// register =
const registerWindow = document.querySelector('#register-window')
const registerButton = document.querySelector('.register-button')
const registerLetters = document.querySelector('.register-letters')
const letterWindow1 = document.querySelector('.letter-window-1')
const letterWindow2 = document.querySelector('.letter-window-2')
const registerIndex = document.querySelector('.register-index')
const letter1 = document.querySelector('.letter-1')
const letter2 = document.querySelector('.letter-2')
const closeLetter = document.querySelector('.close-letter')
const closeLetter2 = document.querySelector('.close-letter-2')

// anotar info 
const writeInformation = document.querySelector('.write-info')
const missionDialogueWindow = document.querySelector('#mission-dialogue')

// hipotese ----
const hypotesisGiuseppe = document.querySelector('.hypothesis-giuseppe')
const hypotesisHeresy = document.querySelector('.hypothesis-heresy')
const hypotesisWichcraft = document.querySelector('.hypothesis-witchcraft')
const hypotesisSatanism = document.querySelector('.hypothesis-satanism')


// ------------------

const suspectDocument = document.querySelector('.suspect-document')
const buttonInfo = document.querySelector('.btn-inspectDoc')
const closeDoc = document.querySelector('.close-doc')
const closeAcusation = document.querySelector('.close-acusation')
const closeDefense = document.querySelector('.close-defense')

// acusação botão
const acusationDocument = document.querySelector('.acusation-document')
const buttonAcusation = document.querySelector('.btn-acusation')

// defesa botão
const defenseDocument = document.querySelector('.defense-document')
const buttonDefense = document.querySelector('.btn-defense')

// variavel audio

const bellSound = new Audio('../audio/church-bell.mp3')
const pencilSound = new Audio('../audio/pencil-sound.wav')

const audioClose = document.querySelector('.audio-close')
const audioOpen = document.querySelector('.audio-open')
const metalSound = document.querySelector('.metal-sound')

const musicButton = document.querySelector('.music-button')
const mainMusic = document.querySelector('.main-music')
// ----------

// capitulos 
const heresyLink = document.querySelector('.heresy');
const witchcraftLink = document.querySelector('.witchcraft');
const satanismLink = document.querySelector('.satanism');


// Start Game

// document.addEventListener('DOMContentLoaded', () => {
//     if (playerName.value <= 4) {
//         startGameButton.style.visibility = 'hidden';
//         startGameButton.disabled = true;
//     } else {
//         startGameButton.style.visibility = 'visible';
//         startGameButton.disabled = false; 
//     }
// })

startGameButton.addEventListener('click', () => {
    startMenu.style.display = 'none'
    screenGame.style.display = 'flex'
    information.style.display = 'flex'

    localStorage.setItem('Player_Name', playerName.value)
    playerInfo.innerHTML = playerName.value

    missionOne()
})



// iniciação

 document.addEventListener('DOMContentLoaded', () => {
    
     startMenu.style.display = 'flex'
     screenGame.style.display = 'none'
     information.style.display = 'none'
     bookOpen.style.display = 'none'
     choiceWindow.style.display = 'none'
     suspectDocument.style.display = 'none'
     acusationDocument.style.display = 'none'
     defenseDocument.style.display = 'none'
     registerWindow.style.display = 'none'
     missionWindow.style.display = 'none'
     missionDialogueWindow.style.display = 'none'
    //  mainMusic.play()

    buttonAcusation.classList.add('disabled')
    buttonDefense.classList.add('disabled')
    missionButton.classList.add('disabled')
 })


// eventos
buttonInfo.addEventListener('click', () => {

    if(suspectDocument.style.display === 'none') {
        suspectDocument.style.display = 'flex'
        audioOpen.play()
    } else {
        suspectDocument.style.display = 'none'
        audioClose.play()
    }

    buttonAcusation.classList.remove('disabled')

})

// close buttons

closeMission.addEventListener('click', () => {
    missionWindow.style.display = 'none'
    audioClose.play()
})

closeDoc.addEventListener('click', () => {
    suspectDocument.style.display = 'none' 
    audioClose.play()
})

closeAcusation.addEventListener('click', () => {
    acusationDocument.style.display = 'none'
    audioClose.play()
})
closeDefense.addEventListener('click', () => {
    defenseDocument.style.display = 'none'
    audioClose.play()
})

// ---------------------

bookButton.addEventListener('click', () => {   

    if(bookOpen.style.display === 'none') {
         bookOpen.style.display = 'flex'
         audioOpen.play()
    } else {
         bookOpen.style.display = 'none'
         audioClose.play()
    }
})

missionButton.addEventListener('click', () => {
    missionDialogueWindow.style.display = 'flex'
    newTask.innerHTML = characters[0].newTask
})

// compass button --

compassButton.addEventListener('click', () => {
    if(missionWindow.style.display === 'none') {
        missionWindow.style.display = 'flex'
        audioOpen.play()
    } else {
        missionWindow.style.display = 'none'
        audioClose.play()
    }
})


// register ========

hypotesisGiuseppe.addEventListener('click', () => {
    registerWindow.style.display = 'flex'
    letterWindow2.style.display = 'flex' 
    registerIndex.style.display = 'none'
    closeAllLetters(closeLetter2, letterWindow2)
})

registerButton.addEventListener('click', () => {
    if(registerWindow.style.display === 'none') {
        registerWindow.style.display = 'flex'
        audioOpen.play()
    } else {
        registerWindow.style.display = 'none'
        audioClose.play()
    }
})

letter1.addEventListener('click', () => {
    openLetter(letterWindow1)
})

letter2.addEventListener('click', () => {
    openLetter(letterWindow2)
})

closeLetter.addEventListener('click', () => {
    closeAllLetters(closeLetter, letterWindow1)
    closeAllLetters(closeLetter2, letterWindow2)
})

function openLetter(element) {
    element.style.display = 'flex'
    registerIndex.style.display = 'none'
}

function closeAllLetters(button, letter) {
    button.addEventListener('click', () => {
        letter.style.display = 'none'
        registerIndex.style.display = 'flex'
        pencilSound.play()
    })
}

function redirectToRegister (button, register, cap) {
    button.addEventListener('click', () => {
        register.style.display = 'flex' 
        cap.scrollIntoView({})
    })
}

redirectToRegister(hypotesisHeresy, bookOpen, hereticsChapter)
redirectToRegister(hypotesisWichcraft, bookOpen, witchcraftChaper)
redirectToRegister(hypotesisSatanism, bookOpen, satanismChapter)
 

// capitulos livro

heresyLink.addEventListener('click', () => {
    hereticsChapter.scrollIntoView({ behavior: 'smooth' })
});

witchcraftLink.addEventListener('click', () => {
    witchcraftChaper.scrollIntoView({ behavior: 'smooth' })
});

satanismLink.addEventListener('click', () => {
    satanismChapter.scrollIntoView({ behavior: 'smooth' })
});

// interação personagens

writeInformation.addEventListener('click', () => {
    missionDialogueWindow.style.display = 'none'
    missionWindow.style.display = 'flex'    
    pencilSound.play()
    newTask.innerHTML = characters[i].newTask
})

// nova anotação no menu de missão

// audio acuse/defense

buttonAcusation.addEventListener('click', () => {
    toggleDisplay(acusationDocument, defenseDocument)
    buttonDefense.classList.remove('disabled')
    
})

buttonDefense.addEventListener('click', () => {
    toggleDisplay(defenseDocument, acusationDocument)
    missionButton.classList.remove('disabled')
})

function toggleDisplay(showElement, hideElement) {
    if(showElement.style.display === 'none') {
        showElement.style.display = 'flex'
        hideElement.style.display = 'none'
        audioOpen.play()
    } else {
        showElement.style.display = 'none'
        audioClose.play()
    }
}


// -----------

choiceButton.addEventListener('click', () => {
    
    if(information.style.display === 'flex') {
        information.style.display = 'none'
        choiceWindow.style.display = 'flex'
        missionWindow.style.display = 'none'
        metalSound.play()
        
   } else {
        information.style.display = 'flex'
        choiceWindow.style.display = 'none'
        metalSound.play()
   }
})

  musicButton.addEventListener('click', () => {
    if(mainMusic.paused) {
        mainMusic.play()
        musicButton.style.filter = "grayscale(0%)"
    } else {
        mainMusic.pause()
        musicButton.style.filter = "grayscale(100%)"
    }
  })


// botao de perguntas

const nameResponse = document.querySelector('.name-response')
const ageResponse = document.querySelector('.age-response')
const workResponse = document.querySelector('.work-response')
const acusationResponse = document.querySelector('.acusation-response')
const defeseResponse = document.querySelector('.defense-response')
const sonOfResponse = document.querySelector('.son-response')
const religionResponse = document.querySelector('.religion-response')
const mainMissionResponse = document.querySelector('.mission-response')

const mainDialogueResponse = document.querySelector('.main-dialogue-1')
const newTask = document.querySelector('.new-task')

const pictureCharacter = document.querySelector('.picture-character')
const acusatorCharacter = document.querySelector('.acusator-character')

const buttonAge = document.querySelector('.btn-2')
const buttonWork = document.querySelector('.btn-3')


// --- suspeitos --

const characters = [
    
    {
        name: "Matheo",
        age: "42",
        work: "Ferreiro",
        religion: "Católico Apostólico Romano",

        acusation: "Fui encomendar uma cruz de ferro com esse ferreiro aí! Porém ele se negou diversas vezes, disse que era errado ter ícones de Jesus, Nossa Senhora ou seja lá quem for.",

        defense: 'Meu primo disse que minha forja não fora feita para alimentar a idolatria cega dessas pessoas.',

        sonOf: "Ângelo e Tereza (falecidos)",

        picture: "./images/characters/matheo.png",
        acusator: "./images/characters/matheo-acused.png",

        mainMission: 'Perguntar sobre Guilhermo e Giuseppe',

        mainDialogue: "Matheo: Desse mendigo nada sei, porém o garoto é afilhado do meu primo Luc.",

        newTask: 'Devo interrogar este tal de Luc',

        correctPunishment: 'confess'
    },

    {
        name: "Luc",
        age: "32 anos",
        work: "Carpinteiro",
        religion: "Católico Apostólico Romano",

        acusation: "Tenho duas questões para tratar contigo. Uma, teu primo Matheo te entregaste, tu acusara a Santa Igreja de Idolatria? Outra, Você foi patrinho do falecido Guilhermo",

        defense: 'Amaldiçoada seja a língua solta de Matheo! e amaldiçoada seja a Igreja que deveria queimar a bruxa que matou meu afilhado e não se preocupar com o que creio!',

        sonOf: "Joaquim e Maria",

        picture: './images/characters/Luc-picture.png',
        acusator: './images/characters/inquisidor-picture.png',

        mainMission: 'Questionar patrinho de Guilhermo',

        mainDialogue: 'sim, eu sou... eu era patrinho do pequeno Guilhermo. Acompanhei todo o enterro. Com certeza foi morto por uma bruxa! Guilhermo tinha uma marca de bruxaria na barriga, não lembro-me direito do desenho... talvez Marta se lembre, uma mãe não esquece de nenhum detalhe até que a última pá de terra cubra o caixão do filho.',

        newTask: 'Devo interrogar Marta, mãe de Guilhermo, e perguntar sobre a tal marca',

        correctPunishment: 'confess, rosary'
    },

    {
        name: "Marta",
        age: "24 anos",
        work: "Costureira",
        religion: "Católico Apostólico Romano",
        acusation: "Mãe de Guilhermo",
        sonOf: "Mariano e Maria"
    },

    {
        name: "Matilda",
        age: "19 anos",
        work: "Cuida da Casa",
        religion: "Católico Apostólico Romano",
        acusation: "Bruxaria",
        sonOf: "William e Beatrice"
    }
]

// funções

function missionOne() {
    nameResponse.innerHTML = characters[0].name
    sonOfResponse.innerHTML = characters[0].sonOf
    ageResponse.innerHTML = characters[0].age
    workResponse.innerHTML = characters[0].work
    acusationResponse.innerHTML = characters[0].acusation
    defeseResponse.innerHTML = characters[0].defense    
    religionResponse.innerHTML = characters[0].religion 
    mainMissionResponse.innerHTML = characters[0].mainMission 
    mainDialogueResponse.innerHTML = characters[0].mainDialogue
    
    pictureCharacter.src = characters[0].picture 
    acusatorCharacter.src = characters[0].acusator 
}


// cursor ================

const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', updateCursorPosition);
window.addEventListener('scroll', updateCursorPosition);

function updateCursorPosition(e) {
    const posX = e.clientX + window.scrollX;
    const posY = e.clientY + window.scrollY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
}









