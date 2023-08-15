let idade = 4

if (idade < 16) {
    console.log(`Olá, você tem ${idade} e por isso, você não vota`)
}
else if (idade <= 17 || idade > 65) {
    console.log(`Olá, você tem ${idade} e por isso, seu voto é opcional`)
}
    else {
        console.log(`Olá, você tem ${idade} e por isso, seu voto é obrigatório`)
    }