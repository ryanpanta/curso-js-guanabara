const ini = document.querySelector("#inicio")
const fim = document.querySelector("#fim")
const pas = document.querySelector("#passo")
const res = document.querySelector(".resposta")
const bttn = document.querySelector("button")

bttn.addEventListener("click", function() {
    let inicio = Number(ini.value) 
    let final = Number(fim.value) 
    let passo = Number(pas.value) 
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) 
        res.innerHTML = "Impossivel contar!"
    else {
        if (passo <= 0) {
            alert("Passo inválido! Vamos considerar o passo como 1")
            passo = 1
        }
        res.innerHTML = "Contando: "
        if (inicio > final) {
            for(inicio; inicio >= final; inicio -= passo) {
                res.innerHTML += `${inicio}`
                res.innerHTML += String.fromCodePoint(0x1F449);
            }
        }
        else {
            for(inicio; inicio <= final; inicio += passo) {
                res.innerHTML += `${inicio}`
                res.innerHTML += String.fromCodePoint(0x1F449);
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
})