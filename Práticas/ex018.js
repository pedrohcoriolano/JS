let num = ['pedro', 3, 4]
num[3] = 1
num.push(0)
/*
for(let pos = 0; pos < num.length; pos++) {
    console.log(`Posição: ${pos}`)
    console.log(`Valor: ${num[pos]}`)
    console.log(`------------------------------------------`)
}*/

for(let pos in num) {
    console.log(`Posição: ${pos}`)
    console.log(`Valor: ${num[pos]}`)
    console.log(`------------------------------------------`)
}
let busca = num.indexOf('lucas')
if(busca == -1) {
    console.log('O valor n foi encontrado')
} else {
    console.log(`O valor está na posição ${busca}`)
}