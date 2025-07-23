let num = document.getElementById('#numi')
let sel = document.getElementById('#sellab')
let res = document.getElementById('#res')
let valores = []
function isnumero(n){
    if(Number(n)>=1 && Number(n)<=100 ){
        return true
    }
    else{
        return false
    }
}
function islist(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
   if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text =`Valor ${num.value} adicionado.`
    sel.appendChild(item)
   }
   else{
    alert('Valor Invalido por favor adicione um valor')
   }

}