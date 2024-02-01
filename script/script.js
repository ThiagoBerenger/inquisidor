// variaveis
const information = document.querySelector('#information-suspect')

const bookButton = document.querySelector('.book-button')
const bookOpen = document.querySelector('#book')

const choiceWindow = document.querySelector('#choice-window')
const choiceButton = document.querySelector('.choice-button')

const missionWindow = document.querySelector('#main-mission')
const missionButton = document.querySelector('.btn-mission')
const closeMission = document.querySelector('.close-mission')

const registerWindow = document.querySelector('#register-window')
const registerButton = document.querySelector('.register-button')

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
const maleVoice = new Audio('../audio/male-voice.mp3')
const femaleVoice = new Audio('../audio/female-voice-angry.mp3')

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


// iniciação

 document.addEventListener('DOMContentLoaded', () => {
     information.style.display = 'none'
     bookOpen.style.display = 'none'
     choiceWindow.style.display = 'flex'
     suspectDocument.style.display = 'none'
     acusationDocument.style.display = 'none'
     defenseDocument.style.display = 'none'
     registerWindow.style.display = 'none'
     missionWindow.style.display = 'none'
    //  mainMusic.play()
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
    if(missionWindow.style.display === 'none') {
        missionWindow.style.display = 'flex'
        audioOpen.play()
    } else {
        missionWindow.style.display = 'none'
        audioClose.play()
    }
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

// capitulos livro

heresyLink.addEventListener('click', () => {
    const hereticsChapter = document.querySelector('.heretics-chapter')
    hereticsChapter.scrollIntoView({ behavior: 'smooth' })
});

witchcraftLink.addEventListener('click', () => {
    const witchcraftChaper = document.querySelector('.witchcraft-chapter')
    witchcraftChaper.scrollIntoView({ behavior: 'smooth' })
});

satanismLink.addEventListener('click', () => {
    const satanismChapter = document.querySelector('.satanism-chapter')
    satanismChapter.scrollIntoView({ behavior: 'smooth' })
});


buttonAcusation.addEventListener('click', () => {

    if(acusationDocument.style.display === 'none') {
        acusationDocument.style.display = 'flex'
        defenseDocument.style.display = 'none'
        audioOpen.play()
        femaleVoice.play()
    } else {
        acusationDocument.style.display = 'none'
        audioClose.play()
    }
})

buttonDefense.addEventListener('click', () => {
    if(defenseDocument.style.display === 'none') {
        defenseDocument.style.display = 'flex'
        acusationDocument.style.display = 'none'
        audioOpen.play()
        maleVoice.play()
    } else {
        defenseDocument.style.display = 'none'
        audioClose.play()
    }
})

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

const pictureCharacter = document.querySelector('.picture-character')
const acusatorCharacter = document.querySelector('.acusator-character')

const buttonAge = document.querySelector('.btn-2')
const buttonWork = document.querySelector('.btn-3')

// --- suspeitos --

const characters = [
    
    {
        name: "Matheo",
        age: "42 anos",
        work: "Ferreiro",
        religion: "Católico Apostólico Romano",
        acusation: "Fui encomendar alguns garfos de ferro com Matheo. Quando lá cheguei, o encontrei conversando com Jacques, o vagabundo. O ferreiro afirmava que Jesus nasceu humano, e só após o batismo se tornaria divino. Achei curioso, então n'outro dia fui consultar o padre que instruiu-me a delatar a heresia.",

        defense: 'Mas todos nós sabemos que Jesus é cem por cento homem! o próprio padre disse isso no domingo passado! E um conhecido meu, que por sinal é muito inteligente, me ensinou que foi só após batismo que Ele recebeu a divindade.',
        sonOf: "Ângelo e Tereza (falecidos)",

        picture: "./images/characters/matheo.png",
        acusator: "./images/characters/matheo-acused.png",

        mainMission: 'Perguntar sobre Francesco e Giuseppe',

        mainDialogue: "Eu nunca ouvi falar desse garoto, que Deus o tenha, mas Giuseppe cresceu na mesma vila que eu. Ele teria se tornado um homem comum se não fosse a morte de seus pais aos 11 anos. Acho que ambos foram tísicos... acontece."
    },

    {
        name: "Luc",
        age: "32 anos",
        work: "Carpinteiro",
        religion: "Católico Apostólico Romano",
        acusation: "Heresia",
        sonOf: "Joaquim e Maria"
    },

    {
        name: "Jacques",
        age: "21 anos",
        work: "Desempregado",
        religion: "Católico Apostólico Romano",
        acusation: "Satanismo",
        sonOf: "Alexandre e Maria"
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

function startGame() {
    console.log('começou')
}

function missionOne() {
    nameResponse.innerHTML = characters[0].name
    sonOfResponse.innerHTML = characters[0].sonOf
    ageResponse.innerHTML = characters[0].age
    workResponse.innerHTML = characters[0].work
    acusationResponse.innerHTML = characters[0].acusation
    defeseResponse.innerHTML = characters[0].defense    
    religionResponse.innerHTML = characters[0].religion 
    mainMissionResponse.innerHTML = characters[0].mainMission 

    pictureCharacter.src = characters[0].picture 
    acusatorCharacter.src = characters[0].acusator 
}

startGame()
missionOne()










