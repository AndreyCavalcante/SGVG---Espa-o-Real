/* global produtos */

//Alerta de mensagem
function alertaTemporario(mensagem, tempo) {
    $('#mensagemModal').text(mensagem);
    $('#meuModal').modal('show');

    setTimeout(function() {
            $('#meuModal').modal('hide');
    }, tempo);
}

function apagar(){

    var cad = document.getElementById('resul');

    cad.innerHTML = "";
}

//Envio do formulário de cadastro de produtos
$(document).on('submit', '#form1', function(e){
         e.preventDefault();

         var nome = $('#nomeProd').val();
         var preco = $('#preco').val();
         var tamanho = $('#tamanho').val();
         var ingre = $('#ingredientes').val();
         var cate = document.getElementById('categoria').value;
         
         var formData = new FormData();
         formData.append('form', 'form1');
         formData.append('nome', nome);
         formData.append('preco', preco);
         formData.append('tamanho', tamanho);
         formData.append('ingre', ingre);
         formData.append('cate', cate);
    
         var arquivo = $('#imagem')[0].files[0];
         formData.append('imagem', arquivo);

    
         $.ajax({
                  url: 'php/functions.php',
                  method: 'POST',
                  data: formData,
                  dataType: 'json',
                  contentType: false,
                  processData: false,
                  success: function(result){
                           alertaTemporario(result, 2000);
                           $('#form1')[0].reset();
                  },
                  error: function(xhr, status, error){ 
                           console.error(xhr.responseText); 
                  }
         });
    
});


//Envio do formulário de atualização de produtos
$(document).on('submit', '#form2', function(e){
    e.preventDefault();
    
    var valores = new FormData(this);
    
    valores.append('form', 'form2');
    
    $(this).find(':input').each(function() {
        var valor = $(this).val().trim();
        valores.append(this.name, valor === '' ? '' : valor);
    });
    
    $.ajax({
       url: 'php/functions.php',
       method: 'POST',
       data: valores,
       dataType: 'json',
       contentType: false,
       processData: false,
       success: function(result){
           alertaTemporario(result, 2000);
           $('#form2')[0].reset();
       },
       error: function(xhr, status, error){ 
           console.error(xhr.responseText); 
       }
    });
    
});


//Envio do formulário de exclusão de produtos
$(document).on('submit', '#form3', function(e){
   e.preventDefault();
   
   var id = $('#idDelProd').val();
   
   $.ajax({
       url: 'php/functions.php',
       method: 'POST',
       data: {form: 'form3', id: id},
       dataType: 'json',
       success: function(result){
           alertaTemporario(result, 2000);
           $('#form3')[0].reset();
       },
       error: function(xhr, status, error){ 
           console.error(xhr.responseText); 
       }
   });
});

//Envio do formulário de cadastro de gerente
$(document).on('submit', '#form4', function(e){
   e.preventDefault();
   
   var nome = $('#nomegeren').val();
   var sobrenome = $('#sobrenome').val();
   var cpf = $('#cpf').val();
   var email = $('#email').val();
   var senha = $('#senha').val();
   
   $.ajax({
       url: 'php/functions.php',
       method: 'POST',
       data: {form: 'form4', nome: nome, sobrenome: sobrenome, cpf: cpf, email: email, senha: senha},
       dataType: 'json',
       success: function(result){
           alertaTemporario(result, 2000);
           $('#form4')[0].reset();
       },
       error: function(xhr, status, error){
           console.error(xhr.responseText);
       }
   });
});

//Envio do formulário de atualização de gerentes
$(document).on('submit', '#form5', function(e){
   
   e.preventDefault();
   
   var valores = {};
   
   valores.form = "form5";
   
   $('#form5 :input').each(function() {
        var valor = $(this).val().trim();
        valores[this.name] = (valor !== '') ? valor : '';
    });
   
   $.ajax({
       url: 'php/functions.php',
       method: 'POST',
       data: valores,
       dataType: 'json',
       success: function(result){
           alertaTemporario(result, 2000);
           $('#form5')[0].reset();
       },
       error: function(xhr, status, error){
           console.error(xhr.reponseText, status, error);
       }
   });
    
});

//Envio do formulário de exclusão de gerenciadores
$(document).on('submit', '#form6', function(e){
    e.preventDefault();
    
    var id = document.getElementById('idDelGeren').value;
    
    
    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'form6', id: id},
        dataType: 'json',
        success: function(result){
            alertaTemporario(result, 2000);
            $('#form6')[0].reset();
        },
        error: function(xhr, status, error){
            console.error(xhr.responseText);
        }
    });
});

function mostrarResultados(){
    
    var div = document.getElementById('resul');
    
    div.innerHTML = '';
    
    if (produtos.length > 0){
        
        var section = "";
        
        produtos.forEach(function(produto){
            section = `
                <section>
                    <h5>${produto.nome_produto}</h5>
                    <p>${produto.id_produtos}</p>
                    <p>${produto.preco}</p>
                    <p>${produto.tamanho}</p>
                    <p>${produto.ingredientes}</p>
                    <p>${produto.imagem}</p>
                    <p>${produto.categoria}</p>
                </section>
            `;
            
            div.innerHTML += section;
        });
    }else {
        div.innerHTML = "<h4>Nenhum produto encontrado com esse nome</h4>";
    }
}

$(document).on('submit', '#form7', function(e){
    e.preventDefault();
    
    apagar();
    
    var valores = {};
   
   valores.form = "form11";
   
   $('#form7 :input').not(':input[type=submit]', ':input[type=button]').each(function() {
        var valor;
        if (this.type === 'select-one') {
            if (this.selectedIndex !== -1) {
                valor = $(this).val().trim();
            } else {
                valor = '';
            }
        } else {
            valor = $(this).val().trim();
        }
        valores[this.name] = (valor !== '') ? valor : '';
    });
    
    console.log(valores);
    
    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: valores,
        dataType: 'json',
        success: function(result){
            console.log(result);

            if ('error' in result) {
                alertaTemporario(result.error, 3000);
            }
            else if ('message' in result) {
                alertaTemporario(result.message, 3000);
            }else{
                for (var i = 0; i < result.length; i++){
                    printProds = `
                        <section>
                            <h4>${result[i].nome_produto}</h4>
                            <ul class="ulPesq">
                                <li>Id: ${result[i].id_produtos}</li>
                                <li>Preço: ${result[i].preco}</li>
                                <li>Tamanho: ${result[i].tamanho}</li>
                                <li>Ingredientes: ${result[i].ingredientes}</li>
                                <li>Categoria: ${result[i].categoria}</li>
                            </ul>
                        </section><br>
                    `;
                    var div = document.getElementById('resul');
                    div.innerHTML += printProds;
                }
            }
            
        },
        error: function(xhr, status, error){
            console.error(xhr.responseText, status, error);
        }
    });
});

$(document).on('submit', '#form8', function(e){
    e.preventDefault();
    
    apagar();
    var info = $('#info').val();
    
    var printGeren = '';
    
    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'form8', pesq: info},
        dataType: 'json',
        success: function(result){
            
            if ('error' in result) {
                alertaTemporario('Nenhum gerenciador encontrado com esse nome!', 3000);
            }
            else{
                
                for (var i = 0; i < result.length; i++){
                    var cpf = result[i].CPF;
                    
                    var cpf_formatado = cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6, 3) + '-' + cpf.substr(9, 2);

                    printGeren = `
                        <section>
                            <h4>${result[i].nome}</h4>
                            <ul class="ulPesq">
                                <li><strong>Id: </strong>${result[i].id_gerente}</li>
                                <li><strong>Nome Completo: </strong>${result[i].nome+' '+result[i].sobrenome}</li>
                                <li><strong>CPF: </strong>${cpf_formatado}</li>
                                <li><strong>Email: </strong>${result[i].email}</li>
                            </ul>
                        </section><br>
                    `;
                    var div = document.getElementById('resul');
                    div.innerHTML += printGeren;
                }
            }
        },
        error: function(xhr, status, error){
            console.error(xhr.reponseText, status, error);
        }
    });
});

$(document).on('click', '#registro', function(e){

    let tradicionais = [];
    let especiais = [];
    let doces = [];
    let bebidas = [];
    
    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'form7', pesq: ''},
        dataType: 'json',
        success: function(result){
            
            result.forEach(function(produto){
                switch(produto.categoria){
                    case 'tradicional':
                        tradicionais.push({id: produto.id_produtos, nome: produto.nome_produto});
                        break;
                    case 'especial':
                        especiais.push({id: produto.id_produtos, nome: produto.nome_produto});
                        break;
                    case 'doce':
                        doces.push({id: produto.id_produtos, nome: produto.nome_produto});
                        break;
                    case 'bebida':
                        bebidas.push({id: produto.id_produtos, nome: produto.nome_produto});
                        break;
                    default:
                        break;
                }
            });
            
            var select = document.createElement('select');
            select.setAttribute("id", "produto");
            select.classList = 'selects';

            var optgroup;
            
            if(tradicionais.length > 0){
                optgroup = document.createElement("optgroup");
                optgroup.label = "Tradicionais";
                for (var i = 0; i < tradicionais.length; i++){
                    let option = document.createElement("option");
                    option.value = tradicionais[i].id;
                    option.text = tradicionais[i].nome;
                    optgroup.appendChild(option);
                }
                select.appendChild(optgroup);
            }

            if(especiais.length > 0){
                optgroup = document.createElement("optgroup");
                optgroup.label = "Especiais";
                for (var i = 0; i < especiais.length; i++){
                    let option = document.createElement("option");
                    option.value = especiais[i].id;
                    option.text = especiais[i].nome;
                    optgroup.appendChild(option);
                }
                select.appendChild(optgroup);
            }

            if(doces.length > 0){
                optgroup = document.createElement("optgroup");
                optgroup.label = "Doces";
                for (var i = 0; i < doces.length; i++){
                    let option = document.createElement("option");
                    option.value = doces[i].id;
                    option.text = doces[i].nome;
                    optgroup.appendChild(option);
                }
                select.appendChild(optgroup);
            }
            
            if(bebidas.length > 0){
                optgroup = document.createElement("optgroup");
                optgroup.label = "Bebidas";
                for (var i = 0; i < bebidas.length; i++){
                    let option = document.createElement("option");
                    option.value = bebidas[i].id;
                    option.text = bebidas[i].nome;
                    optgroup.appendChild(option);
                }
                select.appendChild(optgroup);
            }
            
            var p = document.getElementById('pDoSelect');
            p.appendChild(select);
        },
        error: function(xhr, status, error){
            console.error(xhr.responseText, status, error);
        }
    });
});


var carrinho = false;
var finalizou = false;
    

$(document).on('submit', '#form9', function(e){
    e.preventDefault();
    
    
    var produto = $('#produto').val();
    var quant = $('#quant').val();
    
    
    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'form9', pesq: produto},
        dataType: 'json',
        success: function(result){
            
            var resul = document.getElementById('offcanvas-result');

            var form = "";

            if (carrinho === false){
                form = `
                    <form id="form-offcanvas">
                        <h4>Carrinho</h4>
                    </form>
                `;

                resul.innerHTML = form;

                carrinho = true;
            }
            
            if ('error' in result) {
                alertaTemporario('Nenhum produto encontrado com esse nome!', 3000);
            }else if(finalizou === false){
                var formResult = document.getElementById('form-offcanvas'); 

                var formAdd = `
                    <input class="inputCar" type="text" id="produto_car" name="produto_car[]" value="${result.nome_produto}" required>
                    <input class="inputCar" type="number" id="quantidade_car" name="quantidade_car[]" min="1" required value="${quant}">
                    <input class="inputCar" type="number" id="preco_unitario_car" name="preco_unitario_car[]" min="0.01" step="0.01" value="${result.preco}" required><br>
                `;
                

                formResult.innerHTML += formAdd;
                
                $('#quant').val(1);
                
                alertaTemporario('Produto adicionado com sucesso!', 1000);
            }else{
                  window.alert("O carrinho de compras foi finalizado!");

            }
            
            
        },
        error: function(xhr, status, error){
            console.error(xhr.responseText);
            console.error(status);
            console.error(error);
        }
    });
});


$(document).on('click', '#finalizar', function(e){
    e.preventDefault();
    
    var info = '';
    
    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'form8', pesq: info},
        dataType: 'json',
        success: function(result){
            
             if(finalizou === false){
                var formResult = document.getElementById('form-offcanvas');

                var novo = `
                    <p style="margin-top: 10px;">
                            <input type="date" name="data" id="data" required">
                    </p>
                    <p>
                            <label for="gastos">Valor gasto: </label><br>
                            <input type="number" name="gastos" id="gastos" step="0.1" min="0.0" required>
                    </p>
                    <p id="pSelectGeren">
                        
                    </p>
                    <p>
                            <input class="inputCar" form="form-offcanvas" type="submit" value="Registrar Vendas">
                    </p>
                `;

                formResult.innerHTML += novo;
                
                var p = document.getElementById('pSelectGeren');
                var selectGeren = document.createElement('select');
                selectGeren.id = 'gerenciador';
                
                for (var i = 0; i < result.length; i++){
                    var option = document.createElement('option');
                    option.value = result[i].id_gerente;
                    option.text = result[i].nome;
                    selectGeren.appendChild(option);
                }
                
                p.appendChild(selectGeren);
        
            } else if (finalizou === true){
                window.alert("O carrinho foi finalizado!");
            }
            
             finalizou = true;

            apagar();

        },
        error: function(xhr, status, error){
            console.error(xhr.responseText, status, error);
        }
    });
});
    
$(document).on('submit', '#form-offcanvas', function(e){
    e.preventDefault();
    
    var produtos = $('input[name="produto_car[]"]').map(function() {
        return $(this).val();
    }).get();
    
    var quantidade = $('input[name="quantidade_car[]"]').map(function(){
       return $(this).val(); 
    }).get();
    
    var preco = $('input[name="preco_unitario_car[]"]').map(function(){
        return $(this).val();
    }).get();
    
    
    var gerente = $('#gerenciador').val();
    var data = $('#data').val();
    var gastos  = $('#gastos').val();
    
    
    if (produtos.length > 0 && quantidade.length > 0) {
        $.each(produtos, function(index, produto) {
            console.log("Produto:", produto);
            console.log("Quantidade:", quantidade[index]);
            console.log("Preço:", preco[index]);
        });
    }
    
    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'form10', produto: produtos, quantidade: quantidade, preco: preco, gerente: gerente, data: data, gastos: gastos},
        dataType: 'json',
        success: function(result){
            alertaTemporario(result, 3000);
            
            var resul = document.getElementById('offcanvas-result');
            
            resul.innerHTML = '';

            finalizou = false;

        },
        error: function(xhr, status, error){
            console.error(xhr.responseText, status, error);
        }
    });
    
});

function pesqVendas(){
    
    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'form12'},
        dataType: 'json',
        success: function(result) {
            
            var div = document.getElementById('offcanvas-vendas');
            div.innerHTML = "";
            var novo = ``;
            if ('error' in result) {
                alertaTemporario(result.error, 3000);
            } else {
                for (var i = result.vendas.length-1; i >= 0; i--) {
                    const venda = result.vendas[i];
                    const data = venda.data_venda;
                    const partes = data.split('-');
                    const ano = partes[0];
                    const mes = partes[1];
                    const dia = partes[2];
                    const dataFormatada = `${dia}/${mes}/${ano}`;
                    novo = `
                        <button class="botao-vendas" id="vendas" value="${venda.id_vendas}" onclick="pesquisarItensVendidos(${venda.id_vendas})">Data: ${dataFormatada}, Gerente: ${venda.nome}</button>
                    `;
                    div.innerHTML += novo;
                }
            }
        },
        error: function(xhr, status, error){
            console.error(xhr.responseText);
            console.error(status);
            console.error(error);
        }
    });
}

function pesquisarItensVendidos(id){
    
    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'form13', id: id},
        dataType: 'json',
        success: function(result){
            console.log(result);
            
            apagar();
            
            if ('erro' in result){
                alertaTemporario(result.erro, 3000);
            }else{
                var div = document.getElementById('resul');
                var container = document.createElement('div');
                
                const data = result.data_venda;
                const partes = data.split('-');
                const ano = partes[0];
                const mes = partes[1];
                const dia = partes[2];
                const dataFormatada = `${dia}/${mes}/${ano}`;
                
                var text = `<h6>Id da venda: ${result.id_vendas}, data: ${dataFormatada}, Gerente: ${result.nome}</h6>`;
                div.innerHTML = text;
                
                var table = document.createElement('table');
                table.id = "tabela-itens";
                var tableHead = `
                    <thead>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 8px;">Produto</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">Quantidade</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">Preço<t/h>
                            <th style="border: 1px solid #ddd; padding: 8px;">Faturamento</th>
                        </tr>
                    </thead>
                `;
                table.innerHTML += tableHead;
                                
                var total = 0;
             
                for (var i = 0; i < result.itens.length; i++){
                    const itens = result.itens[i];
                    total += itens.valor * itens.quantidade;
                    totalFormat = total.toFixed(2);
                    let faturamento = itens.valor * itens.quantidade; 
                    tableBody = `
                        <tbody>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px;">${itens.nome_produto}</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${itens.quantidade}</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">R$ ${itens.valor}</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">R$${faturamento.toFixed(2)}</td>
                            </tr>
                        <tbody>
                    `;
                    table.innerHTML += tableBody;
                    
                }
               
                div.appendChild(container);
                container.classList = 'd-flex text-center justify-content-center';
                container.appendChild(table);
            
                var resultado = totalFormat - result.gasto;
                var resultadoFormat = resultado.toFixed(2);
                
                var valores = `
                    <tr>
                        <td colspan="1" id="resulRed" style="border: 1px solid #ddd; padding: 8px;">R$ ${result.gasto}</td>
                        <td colspan="1" id="resultGreen" style="border: 1px solid #ddd; padding: 8px;">R$ ${totalFormat}</td>
                        <td colspan="2" id="resultadoTable" style="border: 1px solid #ddd; padding: 8px;">R$ ${resultadoFormat}</td>
                    </tr>
                `;
                
                 var lucro = '';
                
                if(resultado > 0){
                    lucro = 'Lucro';
                }else{
                    lucro = 'Prejuizo';
                }

                var ResulHead = `
                    <thead>
                        <tr>
                            <th colspan="1" style="border: 1px solid #ddd; padding: 8px;">Valor gasto</th>
                            <th colspan="1" style="border: 1px solid #ddd; padding: 8px;">Faturamento</th>
                            <th colspan="2" style="border: 1px solid #ddd; padding: 8px;" id="lucro">${lucro}</th>
                        </tr>
                    </thead>
                `;

                
                table.innerHTML += ResulHead;
                table.innerHTML += valores;
                
                var resultadoTable = document.getElementById('resultadoTable');
                var thLucro = document.getElementById('lucro');
                
                if(resultado > 0){
                    resultadoTable.style.color = 'rgb(14, 233, 14)';
                    thLucro.style.color = 'rgb(14, 233, 14)';
                    thLucro.innerTEXT = lucro;
                }else{
                    resultadoTable.style.color = 'rgb(255, 50, 50)';
                    thLucro.style.color = 'rgb(255, 50, 50)';
                    thLucro.innerTEXT = lucro;
                }
                 
                
            }
        },
        error: function(xhr, status, error){
            console.error(xhr.reponseText);
            console.error(status);
            console.error(error);
        }
    });
}

$(document).on('submit', '#form14', function(e){
    e.preventDefault();
    
    var dataVenda = $('#dataVenda').val();
    
    console.log(dataVenda);
    
    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'form14', dataVenda: dataVenda},
        dataType: 'json',
        success: function(result){
            console.log(result);
            
            apagar();
            
            if ('erro' in result) {
                alertaTemporario(result.erro, 3000);
            } else {
                var div = document.getElementById('resul');
                div.innerHTML = '';
            
                for (var i = 0; i < result.length; i++) {
                    const venda = result[i];
                    const data = venda.data_venda;
                    const partes = data.split('-');
                    const ano = partes[0];
                    const mes = partes[1];
                    const dia = partes[2];
                    const dataFormatada = `${dia}/${mes}/${ano}`;
            
                    var vendaInfo = document.createElement('div');
                    vendaInfo.innerHTML = `<h6>Id da venda: ${venda.id_vendas}, data: ${dataFormatada}, Gerente: ${venda.nome}</h6><br>`;
                    vendaInfo.style.textAlign = 'center';
                    div.appendChild(vendaInfo);
            
                    var container = document.createElement('div');
                    container.style.textAlign = 'center';
                    container.style.marginBottom = '20px';
            
                    var table = document.createElement('table');
                    table.id = `tabela-itens-${i}`;
                    table.style.margin = 'auto';
                    table.style.marginTop = '10px';
                    table.style.borderCollapse = 'collapse';
            
                    var tableHead = `
                        <thead>
                            <tr><th style="border: 1px solid #ddd; padding: 8px;">Produto</th><th style="border: 1px solid #ddd; padding: 8px;">Quantidade</th><th style="border: 1px solid #ddd; padding: 8px;">Preço</th><th style="border: 1px solid #ddd; padding: 8px;">Faturamento</th></tr>
                        </thead>
                        <tbody>
                    `;
                    table.innerHTML = tableHead;
            
                    var total = 0;
                    for (var j = 0; j < venda.itens.length; j++) {
                        const item = venda.itens[j];
                        const valor = parseFloat(item.valor);
                        const quantidade = parseFloat(item.quantidade);
                        let faturamento = valor * quantidade;
                        total += valor * quantidade;
                        var tableBody = `
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px;">${item.nome_produto}</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${quantidade}</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">R$ ${valor.toFixed(2)}</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">R$ ${faturamento.toFixed(2)}</td>
                            </tr>
                        `;
                        table.innerHTML += tableBody;
                    }
            
                    var totalFormat = total.toFixed(2);
                    var gasto = parseFloat(venda.gasto);
                    var resultado = total - gasto;
                    var resultadoFormat = resultado.toFixed(2);
            
                    var valores = `
                        <tr>
                            <td colspan="1" style="border: 1px solid #ddd; padding: 8px; color: rgb(255, 50, 50);">R$ ${gasto.toFixed(2)}</td>
                            <td colspan="1" style="border: 1px solid #ddd; padding: 8px; color: rgb(14, 233, 14);">R$ ${totalFormat}</td>
                            <td colspan="2" style="border: 1px solid #ddd; padding: 8px;" id="resultadoTable1-${i}">R$ ${resultadoFormat}</td>
                        </tr>
                    `;
            
                    var lucro = resultado > 0 ? 'Lucro' : 'Prejuízo';
            
                    var ResulHead = `
                        </tbody>
                        <thead>
                            <tr>
                                <th colspan="1" style="border: 1px solid #ddd; padding: 8px; color: rgb(255, 50, 50);">Valor gasto</th>
                                <th colspan="1" style="border: 1px solid #ddd; padding: 8px; color: rgb(14, 233, 14);">Faturamento Total</th>
                                <th colspan="2" style="border: 1px solid #ddd; padding: 8px;" id="lucro-${i}">${lucro}</th>
                            </tr>
                        </thead>
                    `;
            
                    table.innerHTML += ResulHead;
                    table.innerHTML += `<tbody>${valores}</tbody>`;
            
                    container.appendChild(table);
                    div.appendChild(container);
            
                    var resultadoTable = document.getElementById(`resultadoTable1-${i}`);
                    var thLucro = document.getElementById(`lucro-${i}`);
            
                    if (resultadoTable && thLucro) {
                        if (resultado > 0) {
                            resultadoTable.style.color = 'rgb(14, 233, 14)';
                            thLucro.style.color = 'rgb(14, 233, 14)';
                        } else {
                            resultadoTable.style.color = 'rgb(255, 50, 50)';
                            thLucro.style.color = 'rgb(255, 50, 50)';
                        }
                        thLucro.innerText = lucro;
                    }
                }
            }
                        
        },
        error: function(xhr, status, error){
            console.error(xhr.responseText);
            console.error(status);
            console.error(error);
        }
    });
});

$(document).on('submit', '#form15', function(e){
    e.preventDefault();
    
    var mes  = $('#mes').val();
    var ano = $('#ano').val();
    
    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'form15', mes: mes, ano: ano},
        dataType: 'json',
        success: function(result){
            
        },
        error: function(xhr, status, error){
            console.error(xhr.responseText);
            console.error(status);
            console.error(error);
        }
    });
});

function pesqAnos(){

    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'selectAnos'},
        dataType: 'json',
        success: function(result){
            
            if ('error' in result){
                alertaTemporario(result[0].error, 3000)
            }else{

                let select = document.getElementById('anos');

                const anos = [];

                let optGroup = document.createElement('optgroup');

                for(let i = 0; i < result.length; i++){
                    if (!anos.includes(result[i].ano)) {
                        let option = document.createElement('option');
                        option.value = result[i].ano;
                        option.text = result[i].ano;
                        optGroup.appendChild(option);
                        anos.push(result[i].ano);
                    }
                }

                select.appendChild(optGroup);
            }
        },
        error: function(xhr, status, error){
            console.error(xhr.responseText);
            console.error(status);
            console.error(error);
        }
    });
}

pesqAnos();

function pesqData(valor){
    var div = document.getElementById('campoData');
    
    var form = ``;
    var id = '';
    var botao = '';

    if(valor === 1){
        id = 14;
        botao = "Pesquisar por mês";
        form = `
            <label>Pesquisar vendas:</label>
            <form id="form${id}">
                <p><input type="date" name="dataVenda" id="dataVenda"></p>
                <p><input type="submit" form="form${id}" class="botao submit" value="Pesquisar"></p>
            </form>
            <input type="button" class="botao maior" value="${botao}" onclick="pesqData(${valor + 1})">
        `;

        div.innerHTML = form;
    }else{
        id = 15;
        botao = "Pesquisar por data";
        form = `
            <label>Pesquisar vendas:</label>
            <form id="form${id}">
                <select class="selects" name="ano" id="ano"></select>
                <select class="selects" name="mes" id="mes"></select>
                <p><input type="submit" form="form${id}" class="botao submit" value="Pesquisar"></p>
            </form>
            <input type="button" class="botao maior" value="${botao}" onclick="pesqData(${valor - 1})">
        `;

        div.innerHTML = form;
        selectAnosMes();
    }
}

function selectAnosMes(){

    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'selectAnosMes'},
        dataType: 'json',
        success: function(result){

            if('error' in result){
                alertaTemporario(result.error, 3000);
            }else{

                let selectAno = document.getElementById('ano');
                let selectMes = document.getElementById('mes');

                const anos = [];
                const meses = [];

                const nomeMeses = [
                    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
                ];

                let optGroupAno = document.createElement('optgroup');
                let optGroupMes = document.createElement('optgroup');

                for(let i = 0; i < result.length; i++){
                    let ano = result[i].ano;
                    if(!anos.includes(ano)){
                        let option = document.createElement('option');
                        option.value = ano;
                        option.text = ano;
                        optGroupAno.appendChild(option)
                        anos.push(ano);
                    }

                    let mes = result[i].mes;

                    if(!meses.includes(mes)){
                        let option = document.createElement('option');
                        option.value = mes;
                        option.text = nomeMeses[mes - 1];
                        optGroupMes.appendChild(option);
                        meses.push(mes);
                    }
                }

                selectAno.appendChild(optGroupAno);
                selectMes.appendChild(optGroupMes);
            }

        },
        error: function(xhr, status, error){
            console.error(xhr.responseText);
            console.error(status);
            console.error(error);
        }
    });
}

$(document).on('submit', '#form15', function(e){
    e.preventDefault();

    let mes = $('#mes').val();
    let ano = $('#ano').val();

    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'form15', ano: ano, mes: mes},
        dataType: 'json',
        success: function(result){
            
            if('error' in result){
                alertaTemporario(result.error, 3000);
            }else{

                const meses = [
                    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
                ];
                
                
                let texto = `Resumo do mês de ${meses[mes - 1]} de ${ano}`;
                
                let div = document.getElementById('resul');
                div.innerHTML = texto;
                
                let container = document.createElement('div');
                container.classList = 'd-flex justify-content-center text-center';
                
                let table = document.createElement('table');
                table.id = 'tableMensal';
                
                let tHead = `
                    <thead>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 8px;">Produtos vendidos no mês</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">Quantidade vendida no mês</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">Faturamento mensal por produto</th>
                        </tr>
                    </thead>
                `;
                
                table.innerHTML = tHead;
                
                let tbody = document.createElement('tbody');
                let total_vendido = 0;
                
                for (let i = 0; i < result.length; i++) {
                    const produto = result[i].nome_produto;
                    const quantidade = result[i].quantidade;
                    const valor = parseFloat(result[i].valor);
                
                    total_vendido += valor;
                
                    let itens = `
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">${produto}</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${quantidade}</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">R$${valor.toFixed(2)}</td>
                        </tr>
                    `;
                
                    tbody.innerHTML += itens;
                }
                
                table.appendChild(tbody);
                
                let total_gastos = parseFloat(result[0].total_gastos);
                let resultado = total_vendido - total_gastos;
                let resulFormat = resultado.toFixed(2);
                let lucro = resultado > 0 ? "Lucro" : "Prejuízo";
                
                let theadResult = `
                    <thead>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 8px; color: rgb(255, 50, 50);">Gasto Mensal</th>
                            <th style="border: 1px solid #ddd; padding: 8px; color: rgb(14, 233, 14);">Faturamento total mensal</th>
                            <th style="border: 1px solid #ddd; padding: 8px;" id="lucro">${lucro}</th>
                        </tr>
                    </thead>
                `;
                
                let valores = `
                    <tbody>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px; color: rgb(255, 50, 50);">R$${total_gastos.toFixed(2)}</td>
                            <td style="border: 1px solid #ddd; padding: 8px; color: rgb(14, 233, 14);">R$${total_vendido.toFixed(2)}</td>
                            <td style="border: 1px solid #ddd; padding: 8px; color: ${resultado > 0 ? 'rgb(14, 233, 14)' : 'rgb(255, 50, 50)'}" id="lucro">R$${resulFormat}</td>
                        </tr>
                    </tbody>
                `;
                
                table.innerHTML += theadResult;
                table.innerHTML += valores;
                
                container.appendChild(table);
                div.appendChild(container);

                let lucroT = document.getElementById('lucro');

                if(resultado > 0){
                    lucroT.style.color = 'rgb(14, 233, 14)';
                }else{
                    lucroT.style.color = 'rgb(255, 50, 50)';
                }
                
                
            }
        },
        error: function(xhr, status, error){
            console.error(xhr.responseText);
            console.error(status);
            console.error(error);
        }
    });
});

$(document).on('submit', '#form16', function(e){
    e.preventDefault();

    let ano = $('#anos').val();

    $.ajax({
        url: 'php/functions.php',
        method: 'POST',
        data: {form: 'form16', ano: ano},
        dataType: 'json',
        success: function(result){
            
            if('error' in result){
                alertaTemporario(result.error, 3000);
            }else{

                const meses = [
                    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
                ];

                let div = document.getElementById('resul');
                
                div.innerHTML = `Resumo do ano de ${ano}`;
                
                let container = document.createElement('div');
                container.classList = 'd-flex justify-content-center text-center';

                let table = document.createElement('table');

                let tableHead = `
                    <thead>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 8px;">Meses</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">Gastos por mês</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">Faturamento por mês</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">Resultados por mês</th>
                        </tr>
                    </thead>
                `; 

                let tbody = document.createElement('tbody');

                table.innerHTML = tableHead;
                table.appendChild(tbody);

                div.appendChild(container);

                let total_gasto = 0;
                let total_faturado = 0;
                let resultado = 0;

                for(let i = 0; i < result.length; i++){
                    const mes = result[i].mes;
                    const faturamentoJ = result[i].faturamento;
                    const gastoJ = result[i].gasto;

                    const faturamento = parseFloat(faturamentoJ);
                    const gasto = parseFloat(gastoJ);

                    resultado = faturamento - gasto;

                    const resultadoF = resultado.toFixed(2);

                    total_gasto += gasto;
                    total_faturado += faturamento;

                    let bodyValues = `
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">${meses[mes - 1]}</td>
                            <td style="border: 1px solid #ddd; padding: 8px; color: rgb(255, 50, 50);">${gasto.toFixed(2)}</td>
                            <td style="border: 1px solid #ddd; padding: 8px; color: rgb(14, 233, 14);">${faturamento.toFixed(2)}</td>
                            <td style="border: 1px solid #ddd; padding: 8px; color: ${resultado > 0 ? 'rgb(14, 233, 14)' : 'rgb(255, 50, 50)'}" >${resultadoF}</td>
                        </tr>
                    `;

                    tbody.innerHTML += bodyValues;
                }

                let resultHead = `
                    <thead>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 8px;">Ano</th>
                            <th style="border: 1px solid #ddd; padding: 8px; color: rgb(255, 50, 50);">Gastos totais</th>
                            <th style="border: 1px solid #ddd; padding: 8px; color: rgb(14, 233, 14);">Faturamento total</th>
                            <th style="border: 1px solid #ddd; padding: 8px;" id="resultTable"></th>
                        </tr>
                    </thead>
                `;
                
                let lucroAnual = total_faturado - total_gasto;

                let valores = `
                    <tbody>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">${ano}</td>
                            <td style="border: 1px solid #ddd; padding: 8px; color: rgb(255, 50, 50);">${total_gasto.toFixed(2)}</td>
                            <td style="border: 1px solid #ddd; padding: 8px; color: rgb(14, 233, 14">${total_faturado.toFixed(2)}</td>
                            <td style="border: 1px solid #ddd; padding: 8px;" id="valorResult">${lucroAnual.toFixed(2)}</td>
                        <tr>
                    </tbody>
                `;

                table.innerHTML += resultHead;
                table.innerHTML += valores;

                container.appendChild(table);

                let resultTable = document.getElementById('resultTable');
                let valorResult = document.getElementById('valorResult');

                if(resultado > 0){
                    valorResult.style.color = 'rgb(14, 233, 14)';
                    resultTable.innerText = 'Lucro';
                    resultTable.style.color = 'rgb(14, 233, 14)';
                }else{
                    valorResult.style.color = 'rgb(255, 50, 50)';
                    resultTable.innerText = 'Prejuizo';
                    resultTable.style.color = 'rgb(255, 50, 50)';
                }
            }
        },
        error: function(xhr, status, error){
            console.error(xhr.responseText);
            console.error(status);
            console.error(error);
        }
    });
});