const amountEl = document.getElementById("amount")
const contextEl = document.getElementById("context")
const addEl = document.getElementById("add")
const lessEl = document.getElementById("less")
const result = document.querySelector(".result")
const listEl = document.getElementById("list")
let amount = 0

addEl.addEventListener("click", ()=>{
    if(amountEl.value && contextEl.value && checkAmount()){
        amount += parseFloat(amountEl.value)
        updateAmount()
        listEl.innerHTML += `<li class="p"><span class="left">${contextEl.value}</span>  <span class="right">${amountEl.value}</span></li>`
    }
    amountEl.value = ""
    contextEl.value = ""
    
})

lessEl.addEventListener("click", ()=>{
    if(amountEl.value && contextEl.value && checkAmount()){
        amount -= parseFloat(amountEl.value)
        updateAmount()
        listEl.innerHTML += `<li class="n"><span class="left">${contextEl.value}</span>  <span class="right">${amountEl.value}</span></li>`
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
