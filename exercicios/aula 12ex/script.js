function carregar(){
    var texto = document.getElementById("text");
    var img = document.getElementById("img-container");
    var  data = new Date();
   var hora = data.getHours();

   texto.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.innerHTML = '<img src="/exercicios/aula 12ex/imgs/manha.jpg" alt="Manhã">';
        document.body.style.background = '#4e94d4ff';
    } else if (hora >= 12 && hora <= 18) {
       img.innerHTML = '<img src="/exercicios/aula 12ex/imgs/tarde.jpg" alt="Tarde">';
        document.body.style.background = '#b9846f';
    } else {
        img.innerHTML = '<img src="/exercicios/aula 12ex/imgs/noite.jpg" alt="Noite">';
        document.body.style.background = '#010116fa';
    }
}