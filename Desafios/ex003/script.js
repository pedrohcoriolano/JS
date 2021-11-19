function contar() {
    let inicio = document.getElementById('txtinicio').value
    let fim = document.getElementById('txtfim').value
    let passo = document.getElementById('txtpasso').value
    let res = document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'impossivel contar(erro)'
    } else {
        res.innerHTML = 'contando: '
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if( p <= 0) {
            alert('passo inválido(min:1)')
            p = 1
        }
        if(i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            } 
            res.innerHTML += `\u{1F3C1}`
        } else {
            //contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}