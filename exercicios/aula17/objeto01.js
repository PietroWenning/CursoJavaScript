let amigo = { nome : 'Amanda',
    idade:'15',
    peso:'52.3',
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)