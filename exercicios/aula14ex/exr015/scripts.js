function vefificar(){
    let ini = document.getElementById('numi')
    let fim = document.getElementById('numf')
    let passo = document.getElementById('nump')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Faltam Dados')
    } else{
        res.innerHTML='Contando:'
        let i =Number(ini.value)
        let f =Number(fim.value)
        let p =Number(passo.value)
        for(let c = i;c <= f;c +=p){
            res.innerHTML += `${c}`
        };
    }
}

