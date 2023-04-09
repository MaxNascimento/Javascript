function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')   
    var data = new Date()
    var minutos = data.getMinutes()
    var hora = data.getHours()
    msg.innerHTML = (('Agora são: ' +hora+':')+(minutos<10?'0':'')+(minutos))

    if(hora >= 0 && hora < 12){
        img.src = 'dia.png'
        document.body.style.background = '#66BAF8'
        msg.style.color = '#66BAF8'
        msg.innerHTML += '<br>Bom dia!'
    }else if(hora >= 12 && hora < 18 ){
        img.src = 'tarde.png'
        document.body.style.background = '#DA8F57'
        msg.style.color = '#DA8F57'
        msg.innerHTML += '<br>Boa tarde!'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#13122B'
        msg.style.color = '#13122B'
        msg.innerHTML += '<br>Boa noite!'
    }


}

