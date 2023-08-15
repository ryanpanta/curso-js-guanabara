function carregar() {
    const txt = document.querySelector(".txt")
    const img = document.querySelector(".img")
    const data = new Date()
    let hora = data.getHours()
    txt.innerHTML = `Agora são ${hora} horas.<br>`
   
    if (hora >= 0 && hora < 12) {
        img.src = "images/manha.jpg"
        document.body.style.background = '#b9895c'
        txt.innerText += "Bom dia!"
    } else if (hora <= 18) {
        img.src = "images/tarde.jpg"
        document.body.style.background = '#6d987f'
        txt.innerText += "Boa tarde!"
    } else {
        img.src = "images/noite.jpg"
        document.body.style.background = '#443a44'
        txt.innerText += "Boa noite!"
    }

}