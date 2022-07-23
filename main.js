const amountEl = document.getElementById("amount")
const contextEl = document.getElementById("context")
const addEl = document.getElementById("add")
const lessEl = document.getElementById("less")
const result = document.querySelector(".result")
const listEl = document.getElementById("list")
let amount = 0

addEl.addEventListener("click", ()=>{
    amount += parseFloat(amountEl.value)
    if(amountEl.value && contextEl.value && checkAmount()){
        updateAmount()
        listEl.innerHTML += `<li class="p">${contextEl.value} --- ${amountEl.value}</li>`
    }
    amountEl.value = ""
    contextEl.value = ""
    
})

lessEl.addEventListener("click", ()=>{
    amount -= parseFloat(amountEl.value)
    if(amountEl.value && contextEl.value && checkAmount()){
        updateAmount()
        listEl.innerHTML += `<li class="n">${contextEl.value} --- ${amountEl.value}</li>`
    }
    amountEl.value = ""
    contextEl.value = ""  
})

function updateAmount(){
    result.innerHTML = amount
    if(amount<0){
        result.style.color = "red"
    }else{
        result.style.color = "green"
    }
}

function checkAmount(){
    if(isNaN(amountEl.value)){
        alert("The amount must be written in numbers only!!")
    }else{
        return true
    }
}
