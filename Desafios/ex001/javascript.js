function carregar() {
    var msg = document.getElementById('hora')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var agora = data.getHours()

    msg.innerHTML = `Agora são ${agora} horas`

    if (agora >= 0 && agora < 12) {
        foto.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (agora >= 12 && agora < 18) {
        foto.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        foto.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}