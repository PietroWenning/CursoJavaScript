let num = document.getElementById('numi');
let sel = document.getElementById('setlab');
let res = document.getElementById('res')
let valores = [];
function isnumero(n){
   return Number(n)>=1 && Number(n)<=100;
}
function islista(n, l){
    return l.indexOf(Number(n)) != -1;
}
function adicionar(){
   if(isnumero(num.value) && !islista(num.value, valores)){
    valores.push(Number(num.value));
    let item = document.createElement('option');
    item.text =`Valor ${num.value} adicionado.`;
    sel.appendChild(item);
    res.innerHTML = '';
   }
   else{
    alert('Valor Invalido por favor adicione um valor')
   }
   num.value =''
   num.focus()

}
function finalizar(){
   if(valores.length ==0){
      alert('Adicione valor antes de finalizar')
   }else{
      let tot = valores.length
      let maior = valores[0]
      let menor = valores[0]
      let soma = 0
      let media =0
      for(let pos in valores){
         soma += valores[pos]
         if (valores[pos] > maior){
            maior= valores[pos]
         }
         if(valores[pos]< menor){
            menor = valores[pos]
         }
      }

      res.innerHTML = ''
      res.innerHTML += `<p>Ao todo, temos ${tot} Numeros cadastrados.</p>`
      res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
      res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
      res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
   }
}