$(document).ready(function(){
    $('.navbar-nav a').on('click', function(){
        $('#navbarToggleBtn').click();
    });
});

$(document).ready(function(){
    $('#vendas').on('click', function(){
        $('#navbarToggleVendas').click();
    });
});

var hora = new Date().getHours();
var msg = document.getElementById("msg");

var mensagem = "";

if(hora >= 5 && hora <12){
    mensagem = "Olá, Bom dia!";
}
else if(hora >= 12 && hora < 18){
    mensagem = "Olá, Boa tarde";
}
else{
    mensagem = "Olá, Boa noite";
}

msg.innerHTML = `<h1> ${mensagem} </h1>`;

pegarProdutos();

function pegarProdutos(){
 
    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: { form: 'form7', pesq: ''},
        dataType: 'json',
        success: function (result) {
            console.log(result);
            
            result.forEach(function (produto) {
                var section = document.getElementById('sectionBebidas');
                
                var div = document.createElement('div');
                div.classList = "d-flex text-center justify-content-center";
                
                section.appendChild(div);
                
                var table = document.createElement('table');
                table.id = 'listaBebidas';
                table.style.textAlign = 'center';
                table.style.justifyContent = 'center';
                
                div.appendChild(table);
                
                if (produto.categoria === 'bebida') {
                    $('#listaBebidas').append(`<tr><td id="tdBebidas">${produto.nome_produto}</td><td id="tdBebidas">.............</td><td id="tdBebidas">${produto.preco}</td></tr>`);
                } else {
                    
                   var imagemURL = 'data:image/png;base64,' + produto.imagem_base64;

                    var novoCartao = `
                        <div class="card mb-3" style="max-width: 540px; background-color: transparent; color: white;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img class="img-fluid rounded-start fotos" src="${imagemURL}" alt="Imagem do Produto">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title nomecard">${produto.nome_produto}</h5>
                                        <p class="card-text">Ingredientes: ${produto.ingredientes}</p>
                                        <p class="card-text preco">R$ ${produto.preco}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    

                    switch (produto.categoria) {
                        case 'tradicional':
                            $('#divTradicionais').append(novoCartao);
                            break;
                        case 'especial':
                            $('#divEspeciais').append(novoCartao);
                            break;
                        case 'doce':
                            $('#divDoces').append(novoCartao);
                            break;
                        default:
                            break;
                    }
                }
            });
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
            console.error(status);
            console.error(error);
        }
    });
    
}