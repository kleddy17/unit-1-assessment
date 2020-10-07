// document.addEventListener("DOMContentLoaded", () => {
//     const getValue = document.querySelector("value").value
//     getValue.addEventListener()
//     }
   

// );






//-----VARIABLES------//

let count= 0;

//-----FUNCTIONS-----//




const plus = () => {
let countEl = document.querySelector("#value").value= count++
console.log(count)
}

const minus = () => {
    let countEl = document.querySelector("#value").value=count--
    console.log(count)
    }

const getValue = () => {
    const inputValue = document.querySelector("#value").value
    const displayNumber=document.createElement("div")
    document.body.appendChild(displayNumber)
    displayNumber.appendChild(inputValue) 
}
console.log()