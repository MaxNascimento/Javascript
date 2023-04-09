function Contar(){
var ini   = document.getElementById('ini')
var fim   = document.getElementById('fim')
var conta = document.getElementById('conta')
var res = document.getElementById('res')

if (ini.value.length == 0 || fim.value.length == 0 || conta.value.length == 0) {
    window.alert('[ERRO] Preencha os dados')
}else{
    ini   = Number(ini.value)
    fim   = Number(fim.value)
    conta = Number (conta.value)
    
    res.innerHTML = ''
    

    if (ini<fim) {
        while (ini <= fim) {
            res.innerHTML += (ini+' ')
            ini += conta
            }  

    }else{
        while (ini > fim) {
            res.innerHTML += (ini+' ')
            ini -= conta
            }    
    }
   
}

    
}