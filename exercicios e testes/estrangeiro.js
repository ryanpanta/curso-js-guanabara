
let resposta = document.querySelector(".resposta")
const bttn = document.querySelector("button")
bttn.addEventListener("click", nacionalidade)

function nacionalidade() {
    let nacionalidade = document.querySelector("#pais")
    let pais = nacionalidade.value
    if (pais == "Brasil")
        resposta.innerHTML = "Você é Brasileiro!!"
    else 
        resposta.innerHTML = `Você é um estrangeiro de nacionalidade ${pais}`

}