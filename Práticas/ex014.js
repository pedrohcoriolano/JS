var agora = new Date()
var hora = 00
console.log(`O horário que Você informou foi: ${hora} horas`)
if (hora >= 6 && hora <= 12) {
    console.log('Bom dia !')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!')
} else if (hora > 18 && hora <= 00) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}