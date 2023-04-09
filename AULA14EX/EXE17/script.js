function Calcular(){
var n1   = document.getElementById('n1')
var n2   = document.getElementById('n2')
var res = document.getElementById('res')

if (n1.value.length == 0 || n2.value.length == 0) {
    window.alert('[ERRO] Preencha os dados')
}else{
    n1   = Number(n1.value)
    n2   = Number(n2.value)
    
    res.innerHTML = ''
    res.innerHTML = ('TABUADA DO '+n1+'<br><br>')

    for (let i = 1; i <= n2; i++) {
       
        res.innerHTML += (n1+' x '+i+' = '+(n1*i)+'<br>')
    }
   
}

    
}