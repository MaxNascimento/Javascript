let num = ['Abc']

//num[3] = 6
//num.push(7)
//num.sort()

//console.log(num.length+' posições')
//console.log(num)


for (let i = 1; i <= 10; i++) {
    num.push(i) 
    
}


for (let i in num) {
      console.log(num[i]);       
}

console.log(num.indexOf('Abc'))