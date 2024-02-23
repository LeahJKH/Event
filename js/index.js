document.addEventListener("DOMContentLoaded", (event) => {
const countbtn = document.querySelector("#counter-clicker")
const decrementBtn = document.querySelector("#count-click-minus")
let countSumShow = document.querySelector("#counter-counted")

let integer = 0
countSumShow.textContent = `${integer}`
countbtn.addEventListener("click", (e) => {
    if (integer != 100) {
    integer += 1
    countSumShow.textContent = `${integer}`
    updateSession()
    } if (integer === 100) {
        alert("You have no life")
    } else {
        console.log("i no no wanna :(")
    }
})
decrementBtn.addEventListener("click", (e) => {
    if (integer != 100) {
        integer -= 1
        countSumShow.textContent = `${integer}`
        updateSession()
        } if (integer === 100) {
            alert("You have no life")
        } else {
            console.log("i no no wanna :(")
        }
})
    function updateSession() {
    if (integer != 0) {
        let stored = integer.toString
        sessionStorage.setItem("savedNumber", stored)
    } else {
        console.log("this shouldnt be possible")
    }

}}
);


let frontedUtivikling = ["HTML", "CSS", "Javascript", "React", "Figma"]

if (frontedUtivikling.includes(Figma)) {
    console.log("Skill Issue")
}
