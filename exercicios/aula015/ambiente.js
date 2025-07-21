let num = [5,2,8,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor na foi encontrado!')
}
else{
console.log(`o valor esta  na posicao ${pos}`)
}