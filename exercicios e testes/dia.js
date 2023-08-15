const date = new Date()
const dia = date.getDay()

switch(dia) {
    case 0: 
        console.log("Domingo")
        break
    case 1: 
        console.log("Segunda-Feira")
        break
    case 2: 
        console.log("Terça-Feira")
        break
    case 3: 
        console.log("Quarta-Feira")
        break
    case 4: 
        console.log("Quinta-Feira")
        break
    case 5: 
        console.log("Sexta-Feira")
        break
    case 6: 
        console.log("Sabádo")
        break    
    default:
        console.log("Dia inválido")
        break
}




//if (hora < 12) {
    //console.log("Bom dia!")
//} else if (hora <=18) {
    //console.log("Boa tarde!")
//} else {
    //console.log("Boa noite!")
//}
