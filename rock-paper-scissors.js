let selection

function rock() {
    selection = 0;
    result()
}

function paper() {
    selection = 1;
    result()
}

function scissors() {
    selection = 2;
    result()
}

function selectWeapon(){
    let weapon = Math.floor(Math.random()*3);

    if (weapon === 0) {
        document.getElementById('selection').innerHTML = "I pick Rock"
    } else if (weapon === 1) {
        document.getElementById('selection').innerHTML = "I pick Paper"
    } else {
        document.getElementById('selection').innerHTML = "I pick Scissors"

    }
    return weapon
}

function result() {
    let mySelection = selectWeapon()
    let win = false

    if(mySelection === selection){
        document.getElementById('result').innerHTML = "Tie!"
        return
    }

    if (selection > mySelection){win = true}
    if ((mySelection + selection) === 2) {win = !win}

    if(win){
        document.getElementById('result').innerHTML = "You Win!"
    } else {
        document.getElementById('result').innerHTML = "I Win!"
    }
}