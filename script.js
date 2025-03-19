const form = document.getElementById("form");
const h2 = document.querySelector(".form-header h2");
const span = document.querySelector(".form-header span");
const numbers = document.getElementById("numbers");
const minNumber = document.getElementById("min-number");
const maxNumber = document.getElementById("max-number");
const checkbox = document.getElementById("checkbox");
const btn = document.querySelector(".btn");
const result = document.querySelector(".inputs-wrapper");

numbers.oninput = () =>{
    numbers.value = numbers.value.replace(/\D/g, "")
}
minNumber.oninput = () =>{
    minNumber.value = minNumber.value.replace(/\D/g, "")
}
maxNumber.oninput = () =>{
    maxNumber.value = maxNumber.value.replace(/\D/g, "")
}


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    let qtdNumbers = parseInt(numbers.value)
    let qtdMinNumber = parseInt(minNumber.value)
    let qtdMaxNumber = parseInt(maxNumber.value)
    
    if(isNaN(qtdNumbers) || isNaN(qtdMinNumber) || isNaN(qtdMaxNumber)){
        alert("por favor digite um valor válido");
        return
    }
    if(qtdNumbers > 0){
        alert("por favor digite os valores corretamente")
        return
    }
    if(qtdMinNumber <= qtdMaxNumber){
        alert("por favor digite os valores corretamente")
        return
    }

    console.log(qtdNumbers, qtdMinNumber, qtdMaxNumber)
    
    
    formClear()
})

function formClear(){
    numbers.value = ""
    minNumber.value = ""
    maxNumber.value = ""
}
