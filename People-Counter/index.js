// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let imageEl = document.getElementById("image")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0 
    countEl.textContent = count
}

let myPoints = 3

function add3Points() {
    myPoints += 3
    console.log(myPoints)
}
function removePoints() {
    myPoints -= 1
    console.log(myPoints)
}
function showdev() {
    imageEl.toggle();
}