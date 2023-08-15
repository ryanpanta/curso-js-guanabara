const nasc = document.querySelector("#nascimento")
const bttn = document.querySelector("button")



bttn.addEventListener("click", calcula)

function calcula() {
    let nascimento = Number(nasc.value)
    const date = new Date()
    ano = date.getFullYear()
    idade = ano - nascimento
    if (nasc.value.length < 4 || nascimento > ano )
        alert("Preencha o ano de nascimento de forma correta, e tente novamente!")
    else {
        const gen = document.getElementsByName("sexo")
        let genero = ''
        let img = document.createElement("img")
        img.setAttribute("id", "foto")
        const res = document.querySelector(".resposta")
        if (gen[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute("src", "images/crianca-homem.jpg")
            }
            else if (idade <= 20) {
                img.setAttribute("src", "images/jovem-homem.jpg")
            }
            else if (idade <= 50) {
                img.setAttribute("src", "images/adulto-homem.jpg")
            }
            else {
                img.setAttribute("src", "images/idoso-homem.jpg") 
            }
        }
        else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute("src", "images/crianca-mulher.jpg")
            }
            else if (idade <= 20) {
                img.setAttribute("src", "images/jovem-mulher.jpg")
            }
            else if (idade <= 50) {
                img.setAttribute("src", "images/adulto-mulher.jpg")
            }
            else {
                img.setAttribute("src", "images/idoso-mulher.jpg")
            }
        }
        res.innerText = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}
