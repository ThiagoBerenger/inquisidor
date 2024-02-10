function missionTwo() {

     screenGame.style.display = 'flex'
     information.style.display = 'flex'
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
    choiceButton.classList.add('disabled')
    compassButton.classList.add('disabled')


    nameResponse.innerHTML = characters[1].name
    sonOfResponse.innerHTML = characters[1].sonOf
    ageResponse.innerHTML = characters[1].age
    workResponse.innerHTML = characters[1].work
    acusationResponse.innerHTML = characters[1].acusation
    defeseResponse.innerHTML = characters[1].defense    
    religionResponse.innerHTML = characters[1].religion 
    mainMissionResponse.innerHTML = characters[1].mainMission 
    mainDialogueResponse.innerHTML = characters[1].mainDialogue
    newTask.innerHTML = characters[1].newTask
    

    pictureCharacter.src = characters[1].picture 
    acusatorCharacter.src = characters[1].acusator 
}