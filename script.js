let count = 0
let counter = document.getElementById("count-el")

function increment(){
    count++
    // console.log(count)   
    counter.textContent = count
}

let saveEl = document.getElementById("save-el")

function save(){
    let text = count + " - "
    saveEl.textContent += text
    count = 0
    counter.textContent = count
}

