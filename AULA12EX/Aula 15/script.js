function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()+1
    var dia = data.getDate()
    var fano = document.getElementById('ano')
    var fmes = document.getElementById('mes')
    var fdia = document.getElementById('dia')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){

        window.alert('Erro: Verifique os dados e tente novamente!')

    } else{
        var fsex = document.getElementsByName('radsex')
        var genero = ''

        if(mes<fmes.value){ 
            var   idade = ano - Number(fano.value) -1
        }
        
        else{
            if(dia<fdia.value){ 
                var   idade = ano - Number(fano.value) -1 
            }else{
                var   idade = ano - Number(fano.value) 
            }
        }

        var meses = 12-(fmes.value-mes)


        if (fsex[0].checked){
            if(idade >= 0 && idade <= 10){
            genero = 'Menino'
            }else if(idade >= 11 && idade < 21){
            genero = 'Um Jovem'
            }else if(idade < 60){
            genero = 'Homem'
            }else{
            genero = 'Idoso'
            }
        }else {
            if(idade >= 0 && idade <= 10){
            genero = 'Menina'
            }else if(idade >= 11 && idade < 21){
            genero = 'Uma Jovem'
            }else if(idade < 60){
            genero = 'Mulher'
            }else{
            genero = 'Idosa'
            }
        }
        if (meses<12){
            res.innerHTML = (genero+' de '+idade+' Anos e '+meses+' Meses')
        }else{
            res.innerHTML = (genero+' de '+idade+' Anos')
        }
        
    }
}