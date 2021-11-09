function carregar() {
    var msg = document.getElementById('hora')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var agora = 8

    msg.innerHTML = `Agora são ${agora} horas`

    if (agora >= 0 && agora < 12) {
        //bom dia
        foto.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (agora >= 12 && agora < 18) {
        //boa tarde
        foto.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        foto.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}