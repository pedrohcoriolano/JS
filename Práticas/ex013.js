var idade = 18
console.log(`Você tem ${idade} anos, logo:`)
if (idade < 16) {
    console.log('Não Vota')
} else if (idade < 18 || idade >= 65) {
        console.log('Voto Facultativo')
} else {
    console.log('Voto Obrigatório')
}