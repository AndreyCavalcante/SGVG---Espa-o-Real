document.addEventListener('DOMContentLoaded', function() {
    var listar = document.getElementById('listar');
    var itens = listar.getElementsByTagName('li');

    var listap = document.getElementById('listap');
    var item = listap.getElementsByTagName('li');


    var dia = new Date().getDay();

    switch(dia){
        case 0: 
            item[2].style.color = '#ffca2e';
            break;
        case 1: 
            itens[0].style.color = '#ffca2e';
            break;
        case 2: 
            itens[1].style.color = '#ffca2e';
            break;
        case 3: 
            itens[2].style.color = '#ffca2e';
            break;
        case 4: 
            itens[3].style.color = '#ffca2e';
            break;
        case 5: 
            itens[4].style.color = '#ffca2e';
            item[0].style.color = '#ffca2e'
            break;
        case 6: 
            itens[5].style.color = '#ffca2e';
            item[1].style.color = '#ffca2e';
            break;
        default:
            break;
    }


});

var msgp = document.getElementById("timeP");
var msgr = document.getElementById("timeR");

var hora = new Date().getHours();
var min = new Date().getMinutes();

var dia = new Date().getDay();

if (dia != 0){
    if (hora >= 11 && hora < 14){
        msgr.innerHTML = "Aberto!";
        msgr.style.color = "#ffca2e";
    } else{
        msgr.innerHTML = "Fechado!";
        msgr.style.color = "white";
    }
}else {
    msgr.innerHTML = "Fechado!";
    msgr.style.color = "white";
}


if (dia == 0 || dia == 5 || dia == 6) {
    if (hora > 18 || (hora === 18 && min >= 30) && hora < 23){
        msgp.innerHTML = "Aberto!";
        msgp.style.color = "#ffca2e";
    } else{
        msgp.innerHTML = "Fechado!";
        msgr.style.color = "white";
    }
}else {
    msgp.innerHTML = "Fechado!";
    msgp.style.color = "white";
}