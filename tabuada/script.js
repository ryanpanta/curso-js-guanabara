const num = document.querySelector("#numero")
const bttn = document.querySelector("button")
const res = document.querySelector("#resultado")

bttn.addEventListener("click", function() {
    res.innerHTML = ""
    let numero = Number(num.value)
    if (num.value.length === 0 )
        alert("É necessário digitar um número")
    else {
        for(let i = 0; i < 10; i++) {
            res.innerHTML += `<option>${numero} x ${i+1} = ${numero*(i+1)}</option>`
        }
    }
})  

// poderia fazer da seguinte forma:
// for(let i = 0; i < 10; i++) {
//   let item = document.createElement("option")
//   item.text = ${numero} x ${i+1} = ${numero*(i+1)}
//   item.value = `tab{i+1}`
//   res.appendChild(item)
// }