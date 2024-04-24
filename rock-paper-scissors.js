let selection
let wins = 0, losses = 0, ties = 0
let resultText, selectionText

function rock() {
    selection = 0;
    result()
    updateScreen()
}

function paper() {
    selection = 1;
    result()
    updateScreen()
}

function scissors() {
    selection = 2;
    result()
    updateScreen()
}

function updateContent() {
}

function selectWeapon(){
    //0 : rock, 1 : paper, 2 : scissors
    let weapon = Math.floor(Math.random()*3);

    if (weapon === 0) {
        selectionText = "I pick Rock"
    } else if (weapon === 1) {
        selectionText = "I pick Paper"
    } else {
        selectionText = "I pick Scisssors"
    }
    return weapon
}

function result() {
    let mySelection = selectWeapon()
    let win = false

    if(mySelection === selection){
        resultText = "Tie!"
        ties ++
        return
    }

    if (selection > mySelection){win = true}
    if ((mySelection + selection) === 2) {win = !win}

    if(win){
        resultText = "You Win!"
        wins ++
    } else {
        resultText = "I Win!"
        losses ++
    }
}

function updateScreen(){
    document.getElementById('result').innerText = resultText
    document.getElementById('selection').innerText = selectionText
    document.getElementById('wins').innerText = wins
    document.getElementById('losses').innerText = losses
    document.getElementById('ties').innerText = ties
}