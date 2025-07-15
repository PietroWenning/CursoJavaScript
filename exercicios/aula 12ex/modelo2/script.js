function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex'); // 
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem';
            if(idade >=0 && idade <=10){
                //crianca
                img.setAttribute('src', 'imagens/criancamenino.webp');
            }else if(idade <21){
         //adolencente
         img.setAttribute('src', 'imagens/adolencentemenino.webp');
            }
            else if(idade <50){
                //adulto
                img.setAttribute('src', 'imagens/homem.jpg');
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
             if(idade >=0 && idade <=10){
                //crianca
                 img.setAttribute('src', 'imagens/criancamulher.jpg');
            }else if(idade <21){
             //adolencente
              img.setAttribute('src', 'imagens/adolencentemenina.jpg');
            }
            else if(idade <50){
                //adulto
                 img.setAttribute('src', 'imagens/mulher.avif');
            }
            else{
                //idoso
                 img.setAttribute('src', 'imagens/idosa.jpg');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`;
        res.appendChild(img)
    }
}
