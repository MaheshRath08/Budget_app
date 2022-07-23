const amountEl = document.getElementById("amount")
const contextEl = document.getElementById("context")
const addEl = document.getElementById("add")
const lessEl = document.getElementById("less")
const result = document.querySelector(".result")
const listEl = document.getElementById("list")
let amount = 0

addEl.addEventListener("click", ()=>{
    amount += amountEl.value
    if(amountEl.value && contextEl.value){
        listEl.innerHTML += `<li class="p">${contextEl.value} --- ${amountEl.value}</li>`
    }
    amountEl.value = ""
    contextEl.value = ""
})

lessEl.addEventListener("click", ()=>{
    amount -= amountEl.value
    if(amountEl.value && contextEl.value){
        listEl.innerHTML += `<li class="n">${contextEl.value} --- ${amountEl.value}</li>`
    }
    amountEl.value = ""
    contextEl.value = ""  
})
