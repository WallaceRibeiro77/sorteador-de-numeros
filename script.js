const form = document.getElementById("form");
const formHeader = document.querySelector(".form-header");
const h2 = document.querySelector(".form-header h2");
const span = document.querySelector(".form-header span");
const numbers = document.getElementById("numbers");
const minNumber = document.getElementById("min-number");
const maxNumber = document.getElementById("max-number");
const checkbox = document.getElementById("checkbox");
const btn = document.querySelector(".btn");
const result = document.querySelector(".inputs-wrapper .inputs");

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
    if(qtdNumbers < 0){
        alert("por favor digite os valores corretamente")
        return
    }
    if(qtdMinNumber >= qtdMaxNumber){
        alert("por favor digite os valores corretamente")
        return
    }

    let checkboxStatus = checkbox.checked
    
    function genNumbers(qtdNumbers, qtdMinNumber, qtdMaxNumber) {
        let randomNumber = [];

        if (checkboxStatus && qtdNumbers > (qtdMaxNumber - qtdMinNumber + 1)) {
            alert("Não é possível gerar tantos números sem repetição dentro do intervalo especificado.");
            return [];
        }

        while (randomNumber.length < qtdNumbers) {

            let numberChoose = Math.floor(Math.random() * (qtdMaxNumber - qtdMinNumber + 1)) + qtdMinNumber;

            while (checkboxStatus && randomNumber.includes(numberChoose)) {

                numberChoose = Math.floor(Math.random() * (qtdMaxNumber - qtdMinNumber + 1)) + qtdMinNumber;
                
            }
            randomNumber.push(numberChoose);

        }
        return randomNumber
    }
    
    let allNumbersChoosed= genNumbers(qtdNumbers,qtdMinNumber,qtdMaxNumber);

    formHeader.classList.add("align")
    h2.textContent = "resultado do sorteio"
    span.textContent = "1° RESULTADO"
    result.innerHTML= ""
    
    for(i = 0; i < allNumbersChoosed.length; i++){

        const div = document.createElement("div")
        div.classList.add("numbersSorted")

        div.textContent = `${allNumbersChoosed[i]}`

        result.appendChild(div)

        //ainda tem coisas a aprimorar
    }


    // formClear()
})

function formClear(){
    numbers.value = ""
    minNumber.value = ""
    maxNumber.value = ""
}
