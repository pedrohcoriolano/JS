function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById('txtano').value
    var res = document.getElementById('res')
    if (form_ano == length || form_ano > ano) {
        alert('Dados incorretos!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - form_ano
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-homem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto-homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-mulher.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto-mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.innerHTML = `${gen} com ${idade} anos`
        res.appendChild(img)
    }
}