function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var saudacao = ""

    if (hora >= 0 && hora < 12) {
        saudacao = 'Bom dia!'
        img.src = './images/manhã.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        saudacao = 'Boa tarde!'
        img.src = './images/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        saudacao = 'Boa noite!'
        img.src = './images/noite.png'
        document.body.style.background = '#515154'
    }
    msg.innerHTML = `${saudacao} Agora são ${hora} horas e ${minutos} minutos.`
}