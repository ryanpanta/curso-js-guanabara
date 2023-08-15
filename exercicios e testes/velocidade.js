let vel = document.querySelector("#velocidade")
let bttn = document.querySelector("button")
let pa = document.querySelector(".result")
let lim = document.querySelector("#limite")

bttn.addEventListener("click", calcula)


function calcula() {
    limite = Number(lim.value)
    pa.innerText = `Limite máximo da via ${limite}km/h.`
    let velocidade = Number(vel.value)
    if (velocidade <= limite)
        pa.innerHTML += "<br>Velocidade dentro do limite da via. Dirija com segurança!"
    else if (velocidade <= limite+10) {
        pa.innerHTML += `<br>Você tomou uma <strong class="leve">penalidade leve</strong>, por transitar na via com ${velocidade} km/h`
        const leve = document.querySelector(".leve")
        leve.style.background = "green"
    }    
        else if (velocidade <= limite+20) {
            pa.innerHTML += `<br>Você tomou uma <strong class="media">penalidade média</strong>, por transitar na via com ${velocidade} km/h`
            const media = document.querySelector(".media")
            media.style.background = "orange"
        }
        else {
            pa.innerHTML += `<br>Você tomou uma <strong class="grave">penalidade gravíssima</strong>, por transitar na via com ${velocidade} km/h`
            const grave = document.querySelector(".grave")
            grave.style.background = "red"
        }
    

}
