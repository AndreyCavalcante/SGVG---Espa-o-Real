function cadastrarProd(valor){
    
    var botao = "";
    var text = "";
    var requisicao = "";
    var id = "";
    var ident = "";

    if(valor === 1){
        botao = "Cadastar";
        text = "Cadastrar Produto";
        requisicao = "required";
        ident = "form1";
    }else if(valor === 2){
        botao = "Atualizar";
        text = "Atualizar Produto";
        var id = `
            <div class="container-form">
                <label for="idatualizacao"></label>
                <input type="number" name="idatualizacao" id="idatualizacao" placeholder="Id do produto: " required>
            </div>
        `;
        ident = "form2";
    }

    var novoCad = `
            <h5>${text}</h5>
            <form id="${ident}">
                ${id}
                <div class="container-form">
                    <label for="nomeProd"></label>
                    <input type="text" name="nomeProd" id="nomeProd" placeholder="Nome do produto: " ${requisicao}>
                </div>
                <div class="container-form">
                    <label for="preco"></label>
                    <input type="number" name="preco" id="preco" step="0.01" min="0" max="9999" placeholder="Preço (R$): EX: 99,99" ${requisicao}>
                </div>
                <div class="container-form">
                    <label for="tamanho"></label>
                    <input type="text" name="tamanho" id="tamanho" placeholder="Tamanho: EX: P, M, G, ML, L" ${requisicao}>
                </div>
                <div class="container-form">
                    <label for="ingredientes"></label>
                    <input type="text" name="ingredientes" id="ingredientes" placeholder="Ingredientes: ">
                </div>
                <div class="container-form">
                    <label for="url"></label>
                    <input style="border: none;" type="file" name="imagem" id="imagem">
                </div>
                <div class="container-form">
                    <label for=""></label><br>
                    <select class="selects" name="categoria" id="categoria">
                        <option value="tradicional">Pizza tradicional</option>
                        <option value="especial">Pizza especial</option>
                        <option value="doce">Pizza doce</option>
                        <option value="bebida">Bebida</option>
                    </select>
                </div>
                <div class="container-form">
                    <input type="submit" class="botao submit" form="${ident}" value="${botao}">
                </div>
            </form>
    `;
    
    $('#resul').html(novoCad);
    
}

function cadastrarGeren(valor){
    var cad = document.getElementById('resul');

    var botao = "";
    var text = "";
    var requisicao = "";
    var form = "";
    var id = "";

    if(valor === 1){
        botao = "Cadastar";
        text = "Cadastrar Gerenciador";
        requisicao = "required";
        form = "form4";
    }else if(valor === 2){
        botao = "Atualizar";
        text = "Atualizar Gerenciador";
        form = "form5";
        id = `
                <div class="container-form">
                    <label for="idgeren"></label>
                    <input type="number" name="idgeren" id="idgeren" step="1" min="1" placeholder="Id do gerente: " required>
                </div>
            `;
    }

    var novoCad = `
            <h5>${text}</h5>
            <form id="${form}">
                ${id}
                <div class="container-form">
                    <label for="nomegeren"></label>
                    <input type="text" name="nomegeren" id="nomegeren" placeholder="Nome: " ${requisicao}>
                </div>
                <div class="container-form">
                    <label for="sobrenome"></label>
                    <input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome: " ${requisicao}>
                </div>
                <div class="container-form">
                    <label for="cpf"></label>
                    <input type="text" name="cpf" id="cpf" placeholder="Cpf: Inserir sem pontuação" ${requisicao}>
                </div>
                <div class="container-form">
                    <label for="email"></label>
                    <input type="email" name="email" id="email" placeholder="Email: Ex: email@email.com" ${requisicao}>
                </div>
                <div class="container-form">
                    <label for="senha"></label>
                    <input type="password" name="senha" id="senha" placeholder="Senha: " ${requisicao}>
                </div>
                <div class="container-form">
                    <input type="submit" class="botao submit" form="${form}" value="${botao}">
                </div>
            </form>
    `;

    cad.innerHTML = novoCad;
}

function apagar(){

    var cad = document.getElementById('resul');

    cad.innerHTML = "";
}

function deleteProd(){

    var resul = document.getElementById('resul');

    var novoDelete = `
            <h5>Deletar Produto</h5>
            <form id="form3">
            <div class="container-form">
                <label for="idDelProd"></label>
                <input type="number" name="idDelProd" id="idDelProd" step="1" min="1" placeholder="Id do produto:" requirid><br><br>
            </div>
            <div class="container-form">
                <input type="submit" class="botao submit" form="form3" value="Excluir">
            </div>
            </form>
    `;

    resul.innerHTML = novoDelete;
}

function deleteGeren(){

    var resul = document.getElementById('resul');

    var novoDelete = `
            <h5>Deletar Gerente</h5>
            <form id="form6">
                <div class="container-form">
                    <label for="idDelGeren"></label>
                    <input type="number" name="idDelGeren" id="idDelGeren" step="1" min="0" placeholder="Id do gerente:"><br><br>
                </div>
                <div class="container-form">
                    <input type="submit" class="botao submit" form="form6" value="Deletar">
                </div>
            </form>
    `;

    resul.innerHTML = novoDelete;
}

function pesquisa(valor){
    
    var campo = document.getElementById('campoPesq');
    
    var ident = '';
    var form = '';
    
    if (valor === 1){
        ident = 'Produto';
        form = 'form7';
        var num = 2;
        var value = "Pesquisar Gerente";
        var categoria = `
                <label for="categoriaPesq">Categoria: </label>
                <select class="selects" id="categoriaPesq" name="categoriaPesq">
                    <option value="">Todas</option>
                    <option value="tradicional">Tradicionais</option>
                    <option value="especial">Especiais</option>
                    <option value="doce">Doces</option>
                    <option value="bebida">Bebidas</option>
                <select>
        `;
    }else if(valor === 2){
        ident = 'Gerenciador';
        form = 'form8';
        var num = 1;
        var value = "Pesquisar Produto";
        var categoria = '';
    }
    
    var novo = `
        <form id="${form}">
            <label for="info">Pesquisar por ${ident}:</label>
            <p>
                <div class="container-form"><input type="text" id="info" name="info"></div>${categoria}
            </p>
            <p>
                <input type="submit" class="botao submit" value="Pesquisar" form="${form}">
            </p>
        <form>
    `;
    
    var p = `
        <p>
            <input type="button" class="botao" value="${value}" onclick="pesquisa(${num})">
        </p>
    `;
    
    campo.innerHTML = novo;
    campo.innerHTML += p;
}

function registro(){
    
    var resul = document.getElementById('resul');
    
    var novo = `
        <form id="form9" class="form9">
            <div class="container-form">
                 <label for="pDoSelect">Produto:</label>
                 <p id="pDoSelect"></p>
            </div>
            <div class="container-form">
                 <label for="quantidade">Quantidade: </label>
                 <p><input type="number" type="quantidade" id="quant" step="1" style=" width: 100px;" value="1"></p>
            </div>
            <div class="container-form">
                 <input type="submit" class="botao submit" value="Adicionar Item">
                 <input type="button" class="botao" value="Finalizar" id="finalizar">
            </div>
        </form>
      `;
    
    resul.innerHTML = novo;
}