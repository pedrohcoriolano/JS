let num = document.querySelector('#txtnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function validNum(n) {
    if(n >= 1 && n <= 100) {
        return true
    }else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }

}

function adicionar() {
    if(validNum(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('Valor invalido ou já adicionado')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione um valor!')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let med = 0
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            }else if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        med = soma / total
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo existe ${total} elementos</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `O menor valor informado foi ${menor}`
        res.innerHTML += `<p>A soma dos valores inforamdo foi ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é igual a ${med}</p>`
    }
}