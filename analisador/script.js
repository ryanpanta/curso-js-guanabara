const num = document.querySelector("#numero")
const adi = document.querySelector(".adicionar")
const fin = document.querySelector(".finalizar")
const res = document.querySelector("#resultado")
const resposta = document.querySelector(".resposta")
let i = 0
let numbers = []

adi.addEventListener("click", function(){
    resposta.innerHTML = ""
    let numero = Number(num.value)
    if (numbers.includes(numero) || numero > 100 || numero < 1 || num.value === 0)
        alert("Valor inválido ou já adicionado na lista")
    else {
        numbers[i] = numero
        let opt = document.createElement("option")
        opt.text = `Número ${numero} adicionado.`
        opt.value = `Número ${i+1}`
        res.appendChild(opt)
        i++
    }
    num.value = ""
    num.focus()

})

fin.addEventListener("click", function(){

    numbers.sort(function(a, b){
        return a - b
    })

    let soma = function(numbers) {
        let acumulador = 0
        for(let i in numbers)
            acumulador += numbers[i]
        return acumulador
    }

    if(numbers.length === 0 ) 
        alert("Adicione números antes de finalizar!")
    else {
        if (numbers.length === 1)
            resposta.innerHTML = `Ao <strong>todo</strong>, temos ${numbers.length} número cadastrado <br>`
        else 
            resposta.innerHTML = `Ao <strong>todo</strong>, temos ${numbers.length} números cadastrados <br>`
        resposta.innerHTML += `O <strong>menor</strong> valor informado foi ${numbers[0]} <br>`
        resposta.innerHTML += `O <strong>maior</strong> valor informado foi ${numbers[(numbers.length)-1]} <br>`
        resposta.innerHTML += `A <strong>soma</strong> dos valores foram ${soma(numbers)} <br>`
        resposta.innerHTML += `A <strong>média</strong> dos valores foram ${soma(numbers)/numbers.length} <br>`
    }

})

            
// let k = 0
// while(k < 2) {
//     console.log("Olá")
//     k++
// }
