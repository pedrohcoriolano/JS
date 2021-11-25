function calcular() {
    let num = document.getElementById('txtnum')
    let tabuada = document.getElementById('seltab')
    if(num.value.length == 0) {
        alert('Por favor, ensira um número')
    } else {
        let n = Number(num.value)
        tabuada.innerHTML = ''
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} × ${c} = ${n * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }
    }
}